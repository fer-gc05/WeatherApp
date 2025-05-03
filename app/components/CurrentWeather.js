import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from './WeatherIcon';

export default function CurrentWeather({ data }) {
  const today = data.days[0];

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{data.resolvedAddress}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.current}>
        <WeatherIcon icon={today.icon} size={80} />
        <View style={styles.tempContainer}>
          <Text style={styles.temp}>{Math.round(today.temp)}°</Text>
          <Text style={styles.conditions}>{today.conditions}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Máx</Text>
          <Text style={styles.detailValue}>{Math.round(today.tempmax)}°</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mín</Text>
          <Text style={styles.detailValue}>{Math.round(today.tempmin)}°</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humedad</Text>
          <Text style={styles.detailValue}>{today.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Lluvia</Text>
          <Text style={styles.detailValue}>{today.precip} mm</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  location: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  current: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tempContainer: {
    marginLeft: 16,
  },
  temp: {
    fontSize: 48,
    fontWeight: '200',
  },
  conditions: {
    fontSize: 16,
    color: '#64748b',
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});