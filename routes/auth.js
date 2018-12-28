const router = require('express').Router()

const authControllers = require('../controllers/auth') 


router.get('/register', authControllers.getRegisterPage)
router.post('/register', authControllers.postRegister)


// get Login page...
router.get('/login', authControllers.getLoginPage)
router.post('/login', authControllers.postLogin)

router.get('/logout', authControllers.postLogOut)


module.exports = router
