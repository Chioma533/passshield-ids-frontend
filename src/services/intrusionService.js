const API_BASE_URL = 'http://localhost:5000';

/**
 * Uploads a network log CSV file to the Flask backend
 * and returns the Random Forest analysis predictions and stats.
 * 
 * @param {File} file The CSV file to upload
 * @returns {Promise<Object>} The JSON payload with predictions, stats, and metrics
 */
export const analyzeTrafficFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during network log analysis:', error);
    throw error;
  }
};
