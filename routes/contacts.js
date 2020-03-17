const express = require('express');
const router = express.Router();

// @route     GET api/contacts/
// @desc      Test Route
// @access    Public
router.get('/', (req, res) => {
  res.json({ msg: 'Contacts route' });
});

module.exports = router;
