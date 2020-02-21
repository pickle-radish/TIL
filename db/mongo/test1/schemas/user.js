const mongoose=require('mongoose');

const {Schema} = mongoose;
const userSchema=new Schema({
    name:{
        type:String,   //type
        require:true,   //not null
        unique:true
    },
    age:{
        type:Number,
        require:true,

    },
    married:{
        type:Boolean,
        required:true,
    },
    comment: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('User', userSchema);