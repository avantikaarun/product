const express= require('express');//to built backend quickly
const app =  express();//instance of express
const cors = require('cors');//for cross origin policy
const port =8745;
app.use(cors());//use this cors package when server starts up
app.use(express.json());//use this express.json package when server starts up
app.use(express.urlencoded({extended: true}));//use this express.urlencoded package when
app.use(express.static('public'));
require('./dB')//mongose db connection folder is called here then server starts up

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});