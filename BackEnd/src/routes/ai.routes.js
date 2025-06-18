const express = require('express');
const aiController = require('../controllers/ai.controller');
const verifyToken = require('../middleware/auth.middleware'); // ✅ Import middleware

const router = express.Router();

// ✅ Protected route
router.post("/get-review", verifyToken, aiController.getReview);

module.exports = router;
