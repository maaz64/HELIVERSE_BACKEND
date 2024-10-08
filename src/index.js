require('dotenv').config();
const app = require('./app');
const connectDB = require('./db/mongodb');

const Port = process.env.Port || 8080;

connectDB().then(()=>{
    app.listen(Port,(error)=>{
        
        if(error){
            console.log("Something went wrong while starting the server");
            return;
        }
        console.log(`Server is up and running on Port ${Port}`);
    })
}).catch((err)=>{
    console.log("MongoDB connection failed !!! ", err);
    
})

module.exports = app;
