const express = require ('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middleware/errorMiddleware');


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'1024kb'}));

app.get('/',(_,res)=>{
    res.status(200).json({
        message:"Success"
    })
})
app.use('/api/users',require('./routes/user'));
app.use('/api/team',require('./routes/team'));

app.use(errorMiddleware);

module.exports = app;


