 const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        firstName:{type:String,required:true},
        middleName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        role:{type:String,required:true},
        department:{type:String,required:true},
        createTime:{type:Date,default:Date.now()},
        updatedTime:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('User',userSchema)