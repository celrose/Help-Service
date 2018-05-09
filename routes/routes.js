var express = require('express');
var router = express.Router();

// Home Controller
var home_controller = require('../controllers/home_controller')

router.get('/', home_controller.index);
router.post('/', home_controller.search);

module.exports = router;