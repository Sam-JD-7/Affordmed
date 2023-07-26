const Company = require('../models/company');

const companyController = {
  registerCompany: async (req, res) => {
    try {
      const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

      // Check if the company is already registered
      const existingCompany = await Company.findOne({ rollNo });
      if (existingCompany) {
        return res.status(409).json({ error: 'Company already registered' });
      }
      
      const newCompany = new Company({
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode,
      });
      await newCompany.save();

      const clientID = await Company.findOne({}).sort({ _id: -1 });

      res.status(200).json({
        companyName,
        clientID,
      });
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  },
};

module.exports = companyController;
