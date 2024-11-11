import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');


  const handleButtonPress = (value: string) => {

    if (
      (['+', '-', '*', '/'].includes(value) &&
        ['+', '-', '*', '/'].includes(expression.slice(-1))) ||
      (value === '⌦' && expression.length === 0) 
    ) {
      return; 
    }
    setExpression((prevExpression) => prevExpression + value);
  };

 
  const handleCalculate = () => {
    try {
      const calcResult = eval(expression); 
      setResult(calcResult.toString()); 
    } catch (error) {
      setResult('Error'); 
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const Pills = (props: any) => {
    return (
      <TouchableOpacity style={Styles.press} onPress={() => handleButtonPress(props.val)}>
        <Text style={Styles.text}>{props.val}</Text>
      </TouchableOpacity>
    );
  };

  const SquarBtns = (props: any) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={[Styles.square, { backgroundColor: props.backgroundColor }]}
      >
        <Text style={[Styles.txt, { color: props.textColor }]}>{props.val}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.containerOverall}>
      <View style={Styles.AnsContainer}>
        <Text style={Styles.Eval}>{expression}</Text>
        <Text style={Styles.AnswerText}>{result}</Text>
      </View>

      <View style={Styles.BtnContainer}>
        {/* Row 1 */}
        <View style={Styles.RowOne}>
          <Pills val="e" />
          <Pills val="μ" />
          <Pills val="sin" />
          <Pills val="deg" />
        </View>
        {/* Row 1 Ends */}

        {/* Row 2 */}
        <View style={Styles.RowTwo}>
          <SquarBtns onPress={handleClear} backgroundColor="#fff" val="Ac" />
          <SquarBtns onPress={() => handleButtonPress('⌦')} backgroundColor="#fff" val="⌦" />
          <SquarBtns textColor="#34b3fa" backgroundColor="#ade1ff" val="/" onPress={() => handleButtonPress('/')} />
          <SquarBtns textColor="#34b3fa" backgroundColor="#ade1ff" val="*" onPress={() => handleButtonPress('*')} />
        </View>
        {/* Row 2 Ends */}

        {/* Row 3 */}
        <View style={Styles.RowThree}>
          <SquarBtns textColor="#34b3fa" backgroundColor="#fff" val="7" onPress={() => handleButtonPress('7')} />
          <SquarBtns textColor="#34b3fa" backgroundColor="#fff" val="8" onPress={() => handleButtonPress('8')} />
          <SquarBtns textColor="#34b3fa" backgroundColor="#fff" val="9" onPress={() => handleButtonPress('9')} />
          <SquarBtns textColor="#34b3fa" backgroundColor="#ade1ff" val="-" onPress={() => handleButtonPress('-')} />
        </View>
        {/* Row 3 Ends */}

        {/* Row 4 Start */}
        <View style={Styles.RowFour}>
          <View style={Styles.buttonRow}>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('4')}>
              <Text style={Styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('5')}>
              <Text style={Styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('6')}>
              <Text style={Styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('1')}>
              <Text style={Styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('2')}>
              <Text style={Styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('3')}>
              <Text style={Styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={Styles.plusButton} onPress={handleCalculate}>
            <Text style={Styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Row 4 Ends */}

        {/* 5th Row Final Bosss */}
        <View style={Styles.RowFive}>
          <TouchableOpacity style={Styles.ZeroBtn} onPress={() => handleButtonPress('0')}>
            <Text style={Styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.squareButton} onPress={() => handleButtonPress('.')}>
            <Text style={Styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ade1ff',
              width: 60,
              height: 60,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleCalculate}
          >
            <Text style={Styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        {/* 5th Row Final Bosss Ends */}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  containerOverall: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f8f8f8',
  },
  AnsContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '40%',
    width: '100%',
  },
  BtnContainer: {
    height: '60%',
    rowGap: 20,
    width: '100%',
  },
  RowOne: {
    paddingHorizontal: 6,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RowTwo: {
    flexDirection: 'row',
    paddingHorizontal: 6,

    justifyContent: 'space-between',
  },
  RowThree: {
    flexDirection: 'row',
    paddingHorizontal: 6,

    justifyContent: 'space-between',
  },
  RowFour: {
    flexDirection: 'row',
    paddingHorizontal: 3,

    height: 'auto',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 6,
    rowGap: 8,
    maxWidth: 250,
    marginBottom: 10,
  },
  squareButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#34b3fa',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plusButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    backgroundColor: '#ade1ff',
    width: 60,
    borderRadius: 5,
  },
  plusButtonText: {
    fontSize: 20,
    color: '#34b3fa',
    fontWeight: 'bold',
  },
  RowFive: {
    columnGap: 20,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 2,

  },
  ZeroBtn: {
    flex: 3,
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  AnswerText: {
    fontSize: 50,
    color: '#302F33',
  },
  Eval: {
    fontSize: 20,
    color: '#97ADB6',
  },
  square: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  press:{
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 60,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  text:{
    color: "#109dff",
    fontSize: 18,
    fontWeight: "400"
  }
});

export default App;
