const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/trains', trainController.getAllTrains);
router.get('/trains/:trainId', trainController.getTrainById);
router.post('/trains/search', trainController.searchTrains);

module.exports = router;