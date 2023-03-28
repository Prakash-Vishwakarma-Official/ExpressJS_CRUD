import mongoose from 'mongoose';
import express from 'express';
import web from './routes/web.js';
// import StudentModel from './controllers/studentsController.js';

// const express = require('express')
const app = express()
const port = 3000
const DB = `mongodb+srv://${'Prakash'}:${'PrakashAtls'}@cluster0.osdguhl.mongodb.net/?${'retryWrites'}=true&w=majority`


// const mongoose = require('mongoose');

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
});

const db = mongoose.connection;
//{ JSON - jason datatype accept this code from postman }
app.use(express.json())

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB database');
});

app.use('/student',web)

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})