// Service to communicate with the GPT-4 API for content analysis
import axios from 'axios';

const gptService = async (content) => {
  const response = await axios.create({
    method: 'post',
    url: '//ai.openai.com/v1/gpt',
    data: {prompt: content},
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GPT_API_KEY}`
    }
  });
  return response;
};

module.exports = gptService;
