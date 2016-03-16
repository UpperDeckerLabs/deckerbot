
function initializeHttp(bot) {
    var http = require('http');
    const PORT=process.env.PORT || 8080; 

    function handleRequest(request, response){
        
        response.setHeader('content-type', 'text/html');
        response.writeHead(200);
        
        if (request.url == "/restart") {
            bot.closeRTM();
            bot.startRTM();   
            response.end ('restarted!');
            return;
        }
        
        response.end ('iamabot');
    }

    var server = http.createServer(handleRequest);

    server.listen(PORT, function(){
        console.log("Server listening on port %s", PORT);
    });
}
exports.initializeHttp = initializeHttp;