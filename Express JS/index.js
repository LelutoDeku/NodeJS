const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()
const port = 30010

const hammadMiddleWare = (req, res, next)=>	{
	console.log(req)
}
app.use(express.static(path.join(__dirname, 'public')))
app.use(hammadMiddleWare)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
	res.send('About me!')
  })

  app.get('/bootstrapHTML', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html')) //sending html file as an endpoint page
	res.status(500) //custom status code sent to server, though not recommended becoz 500 => internal server error
  })

  app.get('/json', (req, res) => {
	res.json({'hammad':404})
  })

  app.get('/hello:name', (req, res)	=>	{
	res.send('Hello ' + req.params.name)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})