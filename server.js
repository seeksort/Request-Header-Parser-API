var 
    fs = require('fs'),
    http = require('http'),
    url = require('url'),
    accepts = require('accepts'),
    uaParser = require('ua-parser');

var PORT = process.env.PORT || 3000;
var server = http.createServer(serverHandler);

function serverHandler(req, res) {
    var urlParts = url.parse(req.url);
    var userAgent = req.headers['user-agent'];
    // Route - Index
    if (urlParts.pathname === '/') {
        fs.readFile('index.html', function(err, data) {
            if (err) throw err;
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);            
            }
        });
    } 
    // Route - /api/whoami
    else if (urlParts.pathname === '/api/whoami') {
        var respObj = {
            ipaddress: req.headers.host,
            language: accepts(req).languages()[0],
            software: uaParser.parseOS(userAgent).toString()
        };
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(respObj));
    } 
    // All other routes - error handling
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 error! Try going to /api/whoami instead.')
    }
}

server.listen(PORT, function(err) {
    if (err) throw err;
    else {
        console.log('Server listening on port ' + PORT);    
    }
});