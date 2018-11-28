const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/ezbac'));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(path.join(__dirname, 'src/app')))
app.get('*', function(req,res) {
	//res.sendFile(path.join(__dirname, 'src/index.html'));
	res.sendFile(path.join(__dirname + 'dist/index.html'));
});

const port = process.env.PORT || '8080';
//const port = process.env.PORT || '3001';
app.set('port', port);


const server = http.createServer(app);
server.listen(port, () => {
	console.log('Running');
})
// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
