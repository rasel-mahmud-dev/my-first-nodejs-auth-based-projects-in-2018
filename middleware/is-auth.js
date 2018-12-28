

module.exports = (req, res, next)=>{
  if(req.loggedIn){
    return next()
  }

  res.redirect('/login')
}

