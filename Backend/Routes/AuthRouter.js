const { signup, login, googleLogin } = require('../Controllers/AuthController');
const { SignUpValidation, LoginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', LoginValidation, login)
router.post('/signup', SignUpValidation, signup)
// Google Login routes
router.get('/google',googleLogin);

module.exports = router;