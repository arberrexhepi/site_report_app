const { config } = require('../config/apiConfig');
require axios from 'axios';

// GPT-4 API Integration Service
export async function sendGptData(prompt) {
  try {
    const response = await axios.post('${config.gptUrl}/text-completions', {
      prompt: prompt,
      max_long: 1000,
    });
    return response.data;
} catch (err) {
    console.error('Error while sending to GPT-4', err);
  return null;
  }
}
