const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connect yout MongoDB'))
.catch(err => console.log(`dont not connect mogoDB erros is ${err}`))
