import { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { fetchWeatherData } from '../services/weatherService';
import { API_CONFIG } from '../constants/config';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';

export default function HomeScreen() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadWeather = async (city = API_CONFIG.DEFAULT_CITY) => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={styles.content}>
        {/* Contenedor del buscador con margen superior */}
        <View style={styles.searchContainer}>
          <SearchBar onSearch={loadWeather} />
        </View>

        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#3b82f6" />
          </View>
        ) : error ? (
          <View style={styles.centerContainer}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : weatherData ? (
          <>
            <CurrentWeather data={weatherData} />
            {/* Usamos View en lugar de ScrollView para contener las listas */}
            <View style={styles.listsContainer}>
              <HourlyForecast hours={weatherData.days[0].hours} />
              <DailyForecast days={weatherData.days} />
            </View>
          </>
        ) : (
          <View style={styles.centerContainer}>
            <Text style={styles.initialText}>Busca una ciudad para comenzar</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#ef4444',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  initialText: {
    color: '#64748b',
    fontSize: 16,
  },
  listsContainer: {
    flex: 1,
  },
});