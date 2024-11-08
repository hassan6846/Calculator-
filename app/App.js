import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button press
  const handlePress = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = eval(expression); // Note: Be cautious with eval()
        setResult(evalResult.toLocaleString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  // Button Component
  const CalculatorButton = ({ label, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
        <Text style={styles.resultText}> {result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['C', 'e', 'μ', 'sin', 'deg', '/', '*', '-', '+', '.', '='].map((item, index) => (
          <CalculatorButton
            key={index}
            label={item}
            onPress={() => handlePress(item)}
            style={styles.functionButton}
          />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 9, 9, 10].map((item, index) => (
          <CalculatorButton
            key={index}
            label={item.toString()}
            onPress={() => handlePress(item.toString())}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  displayContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  expressionText: {
    fontSize: 20,
    color: '#A3A4A7',
  },
  resultText: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    height: 60,
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1E3E6',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
  functionButton: {
    backgroundColor: '#A4C8F0',
  },
});
