import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import WeatherIcon from './WeatherIcon';

const { width } = Dimensions.get('window');

export default function HourlyForecast({ hours }) {
  const filteredHours = hours.filter((_, index) => index % 3 === 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pronóstico por horas</Text>
      <FlatList
        horizontal
        data={filteredHours}
        renderItem={({ item }) => (
          <View style={styles.hourItem}>
            <Text style={styles.hourText}>
              {item.datetime.split(':')[0]}:00
            </Text>
            <WeatherIcon icon={item.icon} size={30} />
            <Text style={styles.temp}>{Math.round(item.temp)}°</Text>
          </View>
        )}
        keyExtractor={item => item.datetime}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContent: {
    paddingRight: 16,
  },
  hourItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 60,
  },
  hourText: {
    fontSize: 14,
    marginBottom: 8,
  },
  temp: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
});