const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema  = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword =  function(){
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Users', userSchema);