const { create } = require('domain');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000; //do localhost://3000 and see the message

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	if (req.url == '/') {
		res.statusCode = 200;
		res.end('</h1>This is hammad and he is saying you are at an endpoint: /</h1>')
	}
	else if (req.url == '/about')	{
		res.statusCode = 200;
		res.end('<h1>This is about hammad i.e. ME</h1>')
	}
	else if(req.url == '/hello')	{
		res.statusCode = 200;
		const data = fs.readFileSync('index.html')
		res.end(data.toString())
	}
	else{
		res.statusCode = 404;
		res.end('<h1>This page was not found on the server</h1>')
	}
	})


server.listen(port, () => {
	console.log(`Server is listening on port ${port}`)
});