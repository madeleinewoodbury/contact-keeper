const express = require('express');
const router = express.Router();

// @route     GET api/auth/
// @desc      Get the logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route     POST api/auth/
// @desc      Authenticate user and get token
// @access    Private
router.post('/', (req, res) => {
  res.send('Auth user and get token');
});

module.exports = router;
