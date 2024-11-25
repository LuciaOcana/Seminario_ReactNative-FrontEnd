// components/SearchExperiences.jsx

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const SearchExperiences = ({ experiences }) => {
  const [query, setQuery] = useState('');
  const [filteredExperiences, setFilteredExperiences] = useState([]);

  const handleSearch = () => {
    const filtered = experiences.filter(experience =>
      experience.user.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExperiences(filtered);
  };

  return (
    <View>
      <TextInput
        placeholder="Introduce el nombre del usuario"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={filteredExperiences}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchExperiences;
