const router = require('express').Router();
const MovieController = require('../controllers/movies')
const UserController = require('../controllers/users')
const ReviewController = require('../controllers/review')

//!middleware
const isLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect(`/login`)
  } else {
    next()
  }
}

router.get('/', MovieController.home)
router.get('/movies', MovieController.findAll)

router.get('/register', (req, res) => {
  res.render('register', { err: req.query.err })
})
router.post('/register', UserController.register)

router.get('/login', (req, res) => {
  res.render('login', { err: req.query.err })
})
router.post('/login', UserController.login)

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/')
  })
})

router.get('/movies/:id', isLogin, MovieController.findOneWithReviews)
router.get('/movies/:id/add-review', isLogin, MovieController.addReview)
router.post('/movies/:id/add-review', isLogin, MovieController.addReviewPost)
router.get('/movies/:id/edit-review', isLogin, MovieController.editReview)
router.post('/reviews/:id/edit', isLogin, ReviewController.editPost)
router.get('/reviews/:id/delete', isLogin, ReviewController.delete)

router.get('*', (req, res) => {
  res.send('404 Page Not Found!')
})

module.exports = router