const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', 
{ useNewUrlParser: true, },
console.log('DB is conneted')
);