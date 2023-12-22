// controllers/image.controller.js
const fs = require('fs');
const path = require('path');
const Image = require('../models/image.model');

exports.uploadImage = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Please upload an image file' });
    }

    // Convert the image file to a base64 string
    const imageBuffer = fs.readFileSync(file.path);
    const imageBase64 = imageBuffer.toString('base64');

    // Create a new image document in MongoDB
    const newImage = new Image({
      image: imageBase64,
    });

    // Save the image document to the database
    await newImage.save();

    // Remove the temporary file
    fs.unlinkSync(file.path);

    return res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllImages = async (req, res) => {
    try {
      const images = await Image.find({}, 'image'); // Retrieve only the 'image' field
  
      // If no images found
      if (!images || images.length === 0) {
        return res.status(404).json({ error: 'No images found' });
      }
  
      return res.status(200).json({ images });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };