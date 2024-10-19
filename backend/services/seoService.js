// Service to communicate with PageSpeed API for SEO analysis
import axios from 'axios';

const seoService = async (url) => {
  const response = await axios.create({
    method: 'get',
    url: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response;
};

module.exports = seoService;
