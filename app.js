const express = require('express');
const app = express();
require('./models/conn')

app.get('/',(req,res)=>{
    res.send("home page");
});

app.listen(3000,()=>{
    console.log('server is running')
})