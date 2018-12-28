
const router = require('express').Router()

const adminControllers = require('../controllers/admin') 
const auth = require('../middleware/is-auth')

// get dashboard page...
router.get('/dashboard', auth, adminControllers.getDashboardPage)

router.get('/posts', auth, adminControllers.getCreatePostPage )

router.post('/posts', auth, adminControllers.postCreatePost )

router.get('/edit-post/:postId', auth, adminControllers.getModifyPostPage )

router.post('/edit-post/:postId', auth, adminControllers.postModifyPost )

router.get('/deletePost/:postId', auth, adminControllers.getDeletePost )


module.exports = router
