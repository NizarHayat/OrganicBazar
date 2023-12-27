const User = require("../models/user.model.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const { userInfo } = require("os");
const SECRET_KEY = 'SECRET_KEY';

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nizarhayat351@gmail.com",
          pass: "vpzu tqzu vmxh kuzp"
        }
      });

      const otp = crypto.randomBytes(3).toString('hex')
      const mailOptions = {
        from: "nizarhayat351@gmail.com",
        to: email, 
        subject: `Your OTP for Password Reset is ${otp}`,
        text: `Your OTP is ${otp}`
      }

      transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Password reset email sent successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      // Assuming you have a field in the User model to store the OTP, 
      // let's call it 'resetOtp'
      if (user.resetOtp === otp) {
        // If OTP matches, generate a JWT token for further authentication
        const token = jwt.sign({ email: user.email, userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "OTP verified successfully", token });
      } else {
        res.status(401).json({ message: "Invalid OTP" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.store = async (req, res) => {
  try {
    const payload = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
    payload.password = hashedPassword;

    const user = await User.create(payload);
    res.status(201).json({ status: 201, message: "Successfully stored in DB", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
// login 
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (passwordMatch) {
      const payload = { userId: findUser._id, email: findUser.email, role: findUser.role }; // Use findUser.role instead of User.role
      jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          console.error('Error generating token:', err);
          return res.status(500).json({ message: 'Failed to generate token' });
        }
        // Handle successful token generation
        res.status(200).json({ message: 'Token generated successfully', token });
      });
      
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
//Admin Route Handler
exports.adminRouteHandler = (req, res) => {
  res.json({ message: "Welcome to Admin Panel!"});
};


// Get all users

exports.getAllUsers = async (req, res) => {
  console.log("all users");
  try {
    const allUsers = await User.find(); // Fetch all users from the database

    if (!allUsers || allUsers.length === 0) {

      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Single User
exports.getSingleUser = async (req, res) => {
  try {
    const {id} = req.params;
    const getSingleUser = await User.findById(id)
    if(!getSingleUser) {
      return res.status(404).json({ message: "User not found"});
    }
    res.status(200).json(getSingleUser);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}



// exports.getSingleUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findById(userId);
//     if(!user){
//       return res.status(404).json({message: "User not Found"});
//     }
//     res.status(200).json(user);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error"});
    
//   }
// };

// Update user
exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter in the URL
    const updateData = req.body; // Data to update the user (assuming it's sent in the request body)

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser); // Return the updated user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user 
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter in the URL

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};




