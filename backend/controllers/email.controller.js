const Email = require("../models/email.model.js");

// Controller to create a new Contact
exports.store=async(req,res)=>{
    try{
    const payload=req.body;
    const email=await Email.create(payload);
    res.json({status:200,success:true,message:"Email Stored Successfully",email})
    
    
    }
    catch(err){
    console.log(err)
    }
    
    }

