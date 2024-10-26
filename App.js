import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProgrammingLanguageCard from './ProgrammingLanguageCard';

export default function App() {

  const programmingLanguages = [
    {
      id: '1',
      title: 'JavaScript',
      experience: '2 years of experience',
    },
    {
      id: '2',
      title: 'Python',
      experience: '2 years of experience',
    },
    {
      id: '3',
      title: 'HTML',
      experience: '1 year of experience',
    },
  ];


  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProgrammingLanguageCard
            title={item.title}
            experience={item.experience}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
