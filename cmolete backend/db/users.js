const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    date:Date,
    placeofBirth:String

})
module.exports=mongoose.model('users',userschema)