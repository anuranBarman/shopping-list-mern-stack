
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/items');

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log('database not connected '+err);
    
})

app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('server listening on '+port);
})