import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar ciudad..."
        placeholderTextColor="#94a3b8"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Ionicons name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    fontSize: 16,
    elevation: 2,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
});