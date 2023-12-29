const express = require('express');
const app = express();
const connectDb = require("./config/connectDb.js");
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute=require("./routes/index.route.js")



require('dotenv').config();
// Accessing enviroment variables from env file.
const PORT = process.env.PORT || 3000;




connectDb();

app.use(bodyParser.urlencoded({extended:false}))
app.use(cors("*"));
//parse app/json
app.use(bodyParser.json())



app.use("/",adminRoute)


// app.get('/', (req, res) => {
//   res.send('Hello Server!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.post('/contact', async (req,res)=>{
//     const payload = req.body;
//     try{
//         const contact = await Contact.create(payload);
//         res.json({message: "Submit successfully", contact})
//     }
//     catch(error){
//         res.status(400).json({message: "Error"})

//     }

// })
// app.get('/contacts', async (req, res) => {
//   try {
//       const contacts = await Contact.find();
//       console.log('Contacts:', contacts); 
//       res.json({ contacts });
//   } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

