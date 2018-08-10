const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const students = require('./routes/api/students');

const app=express();
const path=require('path');


//Body parser middleware
app.use(bodyParser.json());

//DB config
const db=require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db)
.then(()=>console.log('mongoDB connected....'))
.catch(err=>console.log(err));

//use Routes
app.use('/api/students',students);

app.use(express.static(path.join(__dirname,'client','build')))
app.get('*',(req, res) => res.sendFile(path.join(__dirname, 'client','build','index.html')));

const port=process.env.PORT||5000;
app.listen(port,()=>console.log('Server started on port ${port}'));

