const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/register', companyController.registerCompany);
router.get('/',(req,res)=>{
    res.send("hi")
})
module.exports = router;