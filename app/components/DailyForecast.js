import { View, Text, FlatList, StyleSheet } from 'react-native';
import WeatherIcon from './WeatherIcon';

export default function DailyForecast({ days }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos días</Text>
      <FlatList
        data={days.slice(1, 6)}
        renderItem={({ item }) => (
          <View style={styles.dayItem}>
            <Text style={styles.dayName}>
              {new Date(item.datetime).toLocaleDateString('es-ES', { weekday: 'short' })}
            </Text>
            <WeatherIcon icon={item.icon} size={30} />
            <View style={styles.temps}>
              <Text style={styles.tempMax}>{Math.round(item.tempmax)}°</Text>
              <Text style={styles.tempMin}>{Math.round(item.tempmin)}°</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.datetime}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  dayItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  dayName: {
    width: 60,
    fontSize: 16,
    fontWeight: '500',
  },
  temps: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  tempMax: {
    fontWeight: 'bold',
  },
  tempMin: {
    color: '#64748b',
  },
});