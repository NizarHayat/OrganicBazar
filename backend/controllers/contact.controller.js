const Contact = require("../models/contactModel");

// Controller to create a new Contact
exports.store=async(req,res)=>{
    try{
    const payload=req.body;
    const contact=await Contact.create(payload);
    res.json({status:200,success:true,message:"Contact Created Successfully",contact})
    
    
    }
    catch(err){
    console.log(err)
    }
    
    }
    
    // Controller to fetch all users
    exports.index=async(req,res)=>{
        try{
      const contacts=await Contact.find();
      res.json({status:200,success:true,message:"Contacts Found Successfully",contacts})
        }
        catch(err){
        console.log(err)
        }
        
        }
    
    // Controller to fetch single user
    exports.get=async(req,res)=>{
        try{
            const {id}=req.params;
            const contact=await Contact.findOne({_id:id})
            if(!contact){
                return  res.json("No contact found")
            }
      res.json({status:200,success:true,message:"Contact Found Successfully",contact})
    
        }
        catch(err){
        
        }
        
        }
    
    // Controller to delete single user
    exports.destroy=async(req,res)=>{
        try{
            const {id}=req.params;
            const contact=await Contact.findOneAndDelete({_id:id})
            if(!contact){
                return res.json({status:400,success:false,message:"Contact Not Found"})
            }
            res.json({status:200,success:true,message:"Contact Deleted Successfully"})
        }
        catch(err){
        console.log(err)
        }
        
        }
    
    
        // Controller to fetch single user

        exports.update=async(req,res)=>{
            try{
                const {id}=req.params;
                const payload=req.body;        
                const contact=await Contact.findOneAndUpdate({_id:id},payload,{new:true})
                if(!contact){
                    return res.json({status:404,message:"Contact not found",success:false})
                }
                res.json({status:200,message:"Contact updated",success:true,contact})
            }
            catch(err){
                console.log(err)
            }
           
        
         }


// exports.store=async(req,res)=>{
//     try{
//         const payload=req.body;
//         const contact=await Contact.create(payload);
//         res.json({status:200, success:true,message:"created",contact})
//     }
//     catch(err){


//     }
// }

// exports.index=async(req,res)=>{
//     try {
//               const contacts = await Contact.find();
//               console.log('Contacts:', contacts); 
//               res.json({ contacts });
//           } catch (error) {
//               console.error('Error:', error);
//               res.status(500).json({ message: 'Internal Server Error' });
//           }

// }

// exports.destroy=async(req,res)=>{
//     try{
//         const{id}=req.params;
//         const contact=await Contact.findOneAndDelete({_id:id})
//         if(!contact){
//             return res.json({message: "error"})
//         }
//         res.json({message: "success"})
//     }
//     catch{
//         console.log("failed")
//     }
// }
