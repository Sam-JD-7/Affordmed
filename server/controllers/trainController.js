const Train = require('../models/train');

const trainController = {
  getAllTrains: async (req, res) => {
    try {
      const trains = await Train.find().sort({ price: 1, seatsAvailability: -1, departureTime: 1 });
      res.json(trains);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTrainById: async (req, res) => {
    try {
      const train = await Train.findById(req.params.trainId);
      if (!train) {
        return res.status(404).json({ error: 'Train not found' });
      }
      res.json(train);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = trainController;