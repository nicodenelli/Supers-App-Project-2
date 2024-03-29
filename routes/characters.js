var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth')
/* GET users listing. */

router.get('/', charactersCtrl.index);
router.get('/new', charactersCtrl.new);
router.get('/:id/edit', charactersCtrl.edit);
router.get('/:id', charactersCtrl.show);
router.post('/',isLoggedIn, charactersCtrl.create);
router.put('/:id/edit', charactersCtrl.update);
// check if the user is logged before they create a character. Server side authorization.

module.exports = router;