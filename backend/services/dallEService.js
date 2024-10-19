const { config } = require('../config/apiConfig');
require axios from 'axios';

// DALL.E API integration service
export async function sendDallImage(prompt) {
  try {
    const response = await axios.post('${config.dallUrl}/image-generation', {
      prompt: prompt,
      max_long: 1000,
    });
    return response.data;
  } catch (err) {
    console.error('Error while sending to DALL^-E', er);
    return null;
  }
}
