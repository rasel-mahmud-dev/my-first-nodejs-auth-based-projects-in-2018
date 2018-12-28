
const Post = require('../models/post')

exports.getDashboardPage = (req, res, next)=>{
  res.render('dashboard', {
    pageTitle: 'Dashboard',
    path:"/admin/dashboard",
    loggedIn: req.loggedIn
  })
}


exports.getCreatePostPage = async (req, res, next)=>{
  let posts = await Post.find()
  res.render('admin/add-post', {
    pageTitle: 'Create Post',
    path:"admin/posts",
    loggedIn: req.loggedIn,
    // post: posts
  })
}

exports.postCreatePost = async (req, res, next)=>{

  let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    userId: req.user
  })
  await newPost.save()
  res.redirect('/')
}


exports.getModifyPostPage = async(req, res)=>{

  let post = await Post.findById(req.params.postId)
  res.render('admin/edit-post', {
    pageTitle: 'Modify Post',
    path: 'admin/edit-post',
    loggedIn: req.loggedIn,
    edit: true,
    post: post
  })
}

exports.postModifyPost = async (req, res, next)=>{
  let post = await Post.findById(req.params.postId)
  post.title= req.body.title,
  post.description= req.body.description,
  post.userId= post.userId

  post.save()
  res.redirect('/')
}

exports.getDeletePost = async (req, res)=>{
  await Post.findByIdAndDelete(req.params.postId)
  res.redirect('/')
}

