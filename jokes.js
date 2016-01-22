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

function getFatJoke() {
    return getRandomItemFromArray(fatJokes);
}

function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random()*array.length)];
}

exports.getFatJoke = getFatJoke;