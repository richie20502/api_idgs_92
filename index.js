const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
require('./config/databases');

const userRoutes = require('./routes/user');
app.use('/huevos',userRoutes);

const port = process.env.PORT || 3000;
const uridb =  process.env.MONGODB_URI || 'texto';
app.listen(port, () => {
    console.log(`${ uridb }`);
    console.log(`This server in listening in pot ${port}`);
});