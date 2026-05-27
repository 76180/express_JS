const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');

// Serve up public/ftp folder
const serve = serveStatic('public/ftp', { index: ['index.html', 'index.htm'] });

// Create server
const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});
app.use(express.static('public'));
// Listen
server.listen(3000);