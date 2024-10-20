import React, { useState } from 'react';
import { apiClient } from '../utils/api'; // Axios instance for API requests

export function InputPage() {
  const [targetAudience, setTargetAudience] = useState('');
  const [businessGoals, setBusinessGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!targetAudience || !businessGoals) {
      setError('Please fill in both fields.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      // API call to backend to submit target audience and business goals
      const response = await apiClient.post('/submit-goals', {
        targetAudience,
        businessGoals,
      });
      console.log('Goals submitted successfully', response.data);
      // Feedback to user or navigation logic
    } catch (err) {
      setError('Error submitting goals. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Provide your Business Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Target Audience"
          value={targetAudience}
          onChange={(e => setTargetAudience(e.target.value))}
        />
        <input
          type="text"
          placeholder="Business Goals"
          value={businessGoals}
          onChange={(e) => setBusinessGoals(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting.' : 'Submit'}
        </button>
      </form>
      {error && <p style={ color: 'red' }>{error}</p> }
    </div>
  );
}
