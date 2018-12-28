const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  postReact:{
    like: Boolean,
    comment:{
      type: Object
    }
  },
  createDate: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post