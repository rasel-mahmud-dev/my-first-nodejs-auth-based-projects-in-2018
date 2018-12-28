const moment = require('moment')
const Post = require('../models/post')

exports.getHomePage = async (req, res)=>{
  const posts = await Post.find()
  res.render('home', {
    pageTitle: "Home Template",
    path: '/',
    loggedIn: req.loggedIn,
    posts: posts
  })
}

exports.getPostDetail = async (req, res)=>{
  let post = await Post.findById(req.params.postId).populate('userId')

  let date = moment(post.createDate).fromNow()
  post.date = date
  
  res.render('post-detail', {
    pageTitle: 'post detailss',
    path: '/Post',
    loggedIn: req.loggedIn,
    post: post
  })


}


exports.getAboutUsPage = (req, res)=>{
  res.render('about-us', {
    pageTitle: "About Us",
    path: '/about-us',
    loggedIn: req.loggedIn
  })
}

exports.getContactPage = (req, res)=>{
  res.render('contact', {
    pageTitle: "Contact US",
    path: '/contact',
    loggedIn: req.loggedIn
  })
}

