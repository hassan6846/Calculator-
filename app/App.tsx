import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const App = () => {
  const rowone = ['e', 'μ', 'sin', 'deg'];
  const rowtwo=['Ac','x','/','*'];
  const rowthree=['']
  return (
    <View style={Styles.container}>
   
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowOne: {
    flexDirection: 'row',
  
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;
