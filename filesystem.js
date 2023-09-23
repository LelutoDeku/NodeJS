const fs = require('fs');
// fs.readFile('file.txt', 'utf-8', (err, data)	=>	{
// 	console.log(err, data)
// })

// console.log("Finished reading this file"); //this code runs first before above code due to multiple 
// thread instacnes and non-blocking i/o model so until file from the above code is being readied it 
// runs the next line of code and when data from the above mentioned file is ready it prints it

// const a = fs.readFileSync('file.txt')//works opposite to the above readFile method i.e. blocks i/o model

// console.log(a);
// console.log(a.toString()) // to not view buffer line on console
// fs.writeFile('file2.txt', 'this is some data', ()	=>	{ //works in same way as readFile
// 	console.log("written to this file"); //print message after file is written
// })

const b = fs.writeFileSync('file3.txt', 'this is some data writeen using writeFileSync method')//works in same way as readFileSync
console.log(b);
console.log("Finished reading this file");