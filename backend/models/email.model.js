const mongoose = require('mongoose');

const emailSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        
        subject: {
            type: String ,
            required: true, 
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Email = mongoose.model('Email', emailSchema); 
module.exports = Email;
