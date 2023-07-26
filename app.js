const express = require('express');
const mongoose = require('mongoose');
const trainRoutes = require('./server/routes/trainRoutes');
const companyRoutes = require('./server/routes/companyRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/trainApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(res=>{
    console.log("Database connected")
})
.catch(err=>{
    console.log(err)
})
app.use(express.json());

app.use('/', companyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});