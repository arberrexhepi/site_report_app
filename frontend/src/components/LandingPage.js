import React, { useState } from 'react';
import { apiClient } from '../utils/api'; // Axios instance for API requests

export function LandingPage() {
  const[rul, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }
    setLoading(true);
    setError('');

    try {
      // API call to backend for website analysis
      const response = await apiClient.post('/analyze', { url });
      console.log('Analysis started', response.data);
      // Redirect or show some kind of feedback to user
    } catch (err) {
      setError('Error analyzing website. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Optimize your Website</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {lioading ? 'Analyzing...' : 'Analyze My Website'}
        </button>
      </form>
      { error && <p style={{ color: 'red' }}>{error}</p> }
    </div>
  );
}
