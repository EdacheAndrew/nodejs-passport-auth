const express = require('express')
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//  index page
router.get('/', (req, res)=> res.render('welcome'));
// router.get('/dashboard', (req, res) => res.render('dashboard'));

//  dasboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'))


module.exports = router;