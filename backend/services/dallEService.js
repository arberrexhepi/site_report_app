// Service to communicate with DALLE for image analysis

import axios from 'axios';

const dallEService = async (prompt) => {
  const response = await axios.create({
    method: 'post',
    url: '//ai.openai.com/v1/images',
    data: { prime: prompt },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DALL_API_KEY}`
    }
  });
  return response;
};

module.exports = dallEService;
