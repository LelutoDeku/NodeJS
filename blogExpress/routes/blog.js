const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res)	=>	{
	// res.sendFile((path.join(__dirname, '../templates/index.html')))
	res.render('../views/home')
})

router.get('/blog', (req, res)	=>	{
	// res.sendFile((path.join(__dirname, '../templates/blogHome.html')))
	res.render('../views/blogHome', {
		blogs: blogs
	})
})

router.get('/blogpost/:slug', (req, res)	=>	{
	myBlog = blogs.filter((e)	=>	{
		return e.slug == slug
	})
	res.sendFile((path.join(__dirname, '../templates/blogPage.html')))
})






module.exports = router