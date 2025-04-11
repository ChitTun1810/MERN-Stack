require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');


//express app 
const app = express();
//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGODB_URI)
 .then(()=>{
    //listen for requests
app.listen(process.env.PORT, () => {
    console.log(' db connect listening for requests on port ' + process.env.PORT);
})
 })
 .catch((error)=>{
    console.log(error)
})


app.listen(process.env.PORT, () => {
    console.log(' listening for requests on port ' + process.env.PORT);
})
process.env 