import React, { useState, useEffect } from 'react';
import { apiClient } from '../utils/api'; // Axios instance for API requests

export function ReportPage() {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch report data from the backend API
    const fetchReport = async () => {
      try {
        const response = await apiClient.get('/report');
        setReportData(response.data);
      } catch (err) {
        setError('Error fetching report data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  if (loading) { return <div>Loading report...</div>; }

  if (error) { return <p style={ color: 'red' }>{error}</p>; }

  return (
    <div>
      <h1>Website Analysis Report</h1>
      {reportData ? (
        <div>
          <section>
            <h2>Content Suggestions</h2>
            <p>{reportData.contentSuggestions}</p>
          </section>
          <section>
            <h2>Image Suggestions</h2>
            <img src={reportData.imageSuggestions} alt="Suggested Image" />
          </section>
          <section>
            <h2>SEO & Performance Tips</h2>
            <ul>
              reportData.seoTips.map(( (tip, index) => (
                <li key={index}>{tip}</li>
              ))
            </ul>
          </section>
        </div>
      ) : <p No report data available.</p> }
    </div>
  );
}
