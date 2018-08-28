const express = require('express');
const router  = express.Router();
const { ensureLoggedIn } = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/private', ensureLoggedIn("/auth/login"), (req, res, next) => {
  res.send('private');
});

module.exports = router;
