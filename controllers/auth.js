const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.getRegisterPage = (req, res)=>{
  res.render('auth/register', {
    pageTitle: "Register",
    path:"/register",
    loggedIn: req.loggedIn
  })
}


// Create New User
exports.postRegister = async (req, res)=>{
  const { username, email, password } = req.body

  let user = await User.findOne({email: email})
  if(user){
    console.log("User already exist");
    console.log("Please Login....");
    return res.redirect('/login')
  }

  const hasedPass = await bcrypt.hash(password, 10)

  let newUser = new User({
    username: username,
    email: email,
    password: hasedPass
  })
  newUser.save()

  console.log('Registration Successfull');
  res.redirect('/login')
}


// Get Login Page
exports.getLoginPage = (req, res)=>{
  res.render('auth/login', {
    pageTitle: "Login",
    path:"/login",
    loggedIn: req.loggedIn
  })   
}


// Login user  Functionality.......
exports.postLogin = async (req, res)=>{
  const { email, password } = req.body

  let user = await User.findOne({ email: email}).exec()
  if(!user) {
    console.log("Please Register Frist")
    return res.redirect('/register')
  }

  const validPass = await bcrypt.compare(password, user.password)
  if(!validPass) return console.log('Worng Password')

  res.setHeader('Set-Cookie', ["loggedIn=true", `userId=${user._id}`])

  console.log('Login SuccessFull');
  res.redirect('/')
}

// Log Out Functionality.......
exports.postLogOut = (req, res)=>{
  res.setHeader('Set-Cookie', ["loggedIn=false", `userId=null`])
  res.redirect('/login')
}



