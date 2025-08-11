const express = require('express');
const { authMiddleware, roleCheck } = require('../middleware/auth');

const router = express.Router();

router.get('/me', authMiddleware, (req, res) => {
  res.json({ id: req.user.id, role: req.user.role });
});

router.get('/admin', authMiddleware, roleCheck('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

module.exports = router;
