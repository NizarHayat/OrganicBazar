const mongoose = require ("mongoose")



const connectDb=async()=>{
    try{
    await mongoose.connect("mongodb+srv://nazzarhayat:sdnXohUMehuO0OI4@cluster0.rh9ytqn.mongodb.net/db")
    console.log('connected to Database :)')
    }
    catch{
        console.log("error establishing connection with DB")
    }
}
module.exports=connectDb;