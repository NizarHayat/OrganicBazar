const mongoose = require("mongoose");



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






// const mongoose = require("mongoose");
// // const User = require("../models/user.model");
// const Password = process.env.PASSWORD;
// const User = process.env.USER;

            
// const connectDb=async()=>{
//     try{
//     await mongoose.connect(`mongodb+srv://${User}:${Password}@cluster0.rh9ytqn.mongodb.net/db`)
//     console.log('Database connected Successfully )');
//     }
//     catch{
//         console.log("error establishing connection with DB")
//     }
// }
// module.exports=connectDb;