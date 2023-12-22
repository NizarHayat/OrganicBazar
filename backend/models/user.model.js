const mongoose = require ('mongoose')



const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        phone:{
            type: Number,
            required: true,
        },
        password:{
            type: String,
            required: true
        },
        resetOtp:{
            type: String
        }
   
    },
    { timestamps: true }

)
const User = mongoose.model('user', userSchema)
module.exports=User;

