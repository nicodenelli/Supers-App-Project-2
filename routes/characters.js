var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth')
/* GET users listing. */

router.get('/', charactersCtrl.index);
router.get('/new', charactersCtrl.new);
router.post('/',isLoggedIn, charactersCtrl.create);
// check if the user is logged before they create a movie! Server side authorization!

module.exports = router;