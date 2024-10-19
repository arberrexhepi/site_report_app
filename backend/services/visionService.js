// Service to communicate with Vision API for layout analysis

import axios from 'axios';

const visionService = async (html) => {
  const response = await axios.create({
    method: 'post',
    url: '//ai.vision.api/v1/layout',
    data: { files: html },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.VISION_API_KEY}`
    }
  }); 
  return response;
};

module.exports = visionService;
