const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const User = require('./models/user')
const adminRoute  = require('./routes/admin')
const generalRoute = require('./routes/general')
const authRoute = require('./routes/auth')

const MONGODB_URI = 'mongodb://localhost/test'



const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'asserts')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.use( async (req, res, next)=>{
  const loggedIn = req.get('Cookie') ? req.get('Cookie').trim().split(';')[0].split('=')[1] : false
  const userId = req.get('Cookie') ? req.get('Cookie').trim().split(';')[1].split('=')[1] : null
  
  if(loggedIn === "true"){
    let user = await User.findById(userId)
    req.loggedIn = loggedIn
    req.user = user
  }
  next()
})


app.use('/admin', adminRoute)
app.use('/', generalRoute)
app.use('/', authRoute)


const port = process.env.PORT || 4000;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(()=>{
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("MongoDB Connected.....")
})



