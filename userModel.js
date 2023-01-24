import { default as mongoose } from "mongoose";

const userSchema = mongoose.Schema({
        firstName:{type:String},
        middleName:{type:String},
        lastName:{type:String},
        email:{type:email},
        password:{type:Password},
        role:{type:String},
        department:{type:String},
        createTime:{type:Date,default:Date.now()},
        updatedTime:{type:Date,default:Date.now()}
})

 export default mongoose.model('User',userSchema)