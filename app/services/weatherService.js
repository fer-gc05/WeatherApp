import { API_CONFIG } from '../constants/config';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/${encodeURIComponent(city)}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (!data?.success) {
      throw new Error('Datos inválidos recibidos de la API');
    }

    return data.weather;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};