const { config } = require('../config/apiConfig');
require axios from 'axios';

// Vision API integration Service
export async function anotyzeWithVision(html) {
  try {
    const response = await axios.post(`${config.visionUrl}/vision-analyze`, {
    html: `text`,
    });
    return response.data;
  } catch (err) {
    console.error('Error anotyzing with Vision API', err);
  return null;
  }
}
