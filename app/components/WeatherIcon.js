import { View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconMap = {
  'clear-day': 'weather-sunny',
  'clear-night': 'weather-night',
  'rain': 'weather-rainy',
  'snow': 'weather-snowy',
  'sleet': 'weather-snowy-rainy',
  'wind': 'weather-windy',
  'fog': 'weather-fog',
  'cloudy': 'weather-cloudy',
  'partly-cloudy-day': 'weather-partly-cloudy',
  'partly-cloudy-night': 'weather-night-partly-cloudy',
  'thunder-rain': 'weather-lightning-rainy',
  'thunder-showers-day': 'weather-lightning',
  'thunder-showers-night': 'weather-lightning',
  'showers-day': 'weather-pouring',
  'showers-night': 'weather-pouring'
};

export default function WeatherIcon({ icon, size = 24, color = '#3b82f6' }) {
  if (iconMap[icon]) {
    return (
      <MaterialCommunityIcons
        name={iconMap[icon]}
        size={size}
        color={color}
      />
    );
  }
  return <MaterialCommunityIcons name="weather-cloudy" size={size} color={color} />;
}