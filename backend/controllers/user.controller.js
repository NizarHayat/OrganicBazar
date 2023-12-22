const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require("crypto")
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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (passwordMatch) {
      const payload = { userId: findUser._id, email: findUser.email };
      jwt.sign(payload, SECRET_KEY, { expiresIn: 600 }, (err, token) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        } else {
          res.status(200).json({ message: "User signed in successfully", token });
        }
      });
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({
        message: "No users found"
      });
    }
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};


// // get single user

// export const getSingleUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const singleUser = await User.findOne({ _id: userId });
//         if (!singleUser) {
//             return res.status(404).json({
//                 message: `User with this ${userId} not found`
//             });
//         }
//         res.status(200).json({
//             data: singleUser
//         });
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).json({
//             message: "Internal Server Error"
//         });
//     }
// };


// // Delete a user

// export const removeUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const removedUser = await User.deleteOne({ _id: userId });
//         res.status(201).json({
//             message: 'user deleted',
//         })
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).json({
//             message: "Internal Server Error"
//         });
//     }
// }


// // Update an existing user

// export const updateUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const userDetails = req.body;
//         const updatedUser = await User.findByIdAndUpdate(userId, userDetails);
//         if (!updatedUser) {
//             return res.status(401).json({
//                 messege: "User not found"
//             })
//         }
//         res.status(201).json({
//             message: 'User Updated Successfully',
//             updatedUser
//         })
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         res.status(500).json({
//             message: "Internal Server Error"
//         });
//     }
// }