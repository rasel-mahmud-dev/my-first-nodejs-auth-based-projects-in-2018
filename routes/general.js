const router = require('express').Router()


const generalController = require('../controllers/general')

// get page....
router.get('/', generalController.getHomePage )

// get single Post Details
router.get('/post-details/:postId', generalController.getPostDetail )

router.get('/about-us', generalController.getAboutUsPage )

router.get('/contact', generalController.getContactPage )

module.exports = router