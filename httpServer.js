const { create } = require('domain');
const http = require('http');

const port = process.env.PORT || 3000; //do localhost://3000 and see the message

const server =  http.createServer((req, res)	=>	{
	// console.log(req); //will print the request and its info when localhost://3000 is types in address bar of browser
	console.log(req.url);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html')
	res.end('<h1> This is a response to the request that threw error 200</h1>')
})


server.listen(port, ()	=>	{
	console.log(`Server is listening on port ${port}`)
});