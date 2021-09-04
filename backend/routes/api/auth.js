var express = require('express');
var router = express.Router();

const authController = require('../../controllers/authController');
const checkJwt = require('../../middlewares/checkJwt');
/* GET home page. */
router.post('/register', authController.register);
router.get('/me', checkJwt, authController.me);

module.exports = router;
