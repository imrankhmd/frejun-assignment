const mongoose = require('mongoose');


const connection =  mongoose.connect("mongodb+srv://imrankhmd:imrankhan12@cluster0.u2zgqga.mongodb.net/frejun-assignment?retryWrites=true&w=majority");

module.exports = connection