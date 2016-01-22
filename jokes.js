var fatJokes = [
    'when she goes camping the bears hide their food.',
    'The Only Letters She Knows In The Alphabet Are K.F.C!',
    'even dora cant explore her.',
    'when she steps on a scale it says TO BE CONTINUED...',
    'Mount Everest tried to climb her.',
    'That she broke a branch in her family tree!',
    'when she leaves the beach everybody shouts "The coast is clear."',
    'that Weight Watchers said I give up.'
];

var fatJokeStack = [];

function getFatJoke() {
    if (fatJokeStack.length === 0) {
        Array.prototype.push.apply(fatJokeStack, shuffledArray(fatJokes));
    }
    return fatJokeStack.pop();
}

function shuffledArray(array) {
    var toShuffle = [];
    Array.prototype.push.apply(toShuffle, array);

    // http://stackoverflow.com/a/2450976
    var currentIndex = toShuffle.length;
    var randomIndex;
    var temporaryValue;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = toShuffle[currentIndex];
        toShuffle[currentIndex] = toShuffle[randomIndex];
        toShuffle[randomIndex] = temporaryValue;
    }

    return toShuffle;
}

exports.getFatJoke = getFatJoke;