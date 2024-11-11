import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Pills from './components/Pills';
import SquarBtns from './components/SquarBtns';

//Components
const App = () => {

  return (
    <View style={Styles.containerOverall}>
      <View style={Styles.AnsContainer}>
        <Text style={Styles.Eval} >6000/2+3227*2</Text>
        <Text style={Styles.AnswerText}>=12,454</Text>
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
          <SquarBtns backgroundColor="#fff" val="Ac" />
          <SquarBtns val="⌦" backgroundColor="#fff" />
          <SquarBtns val="/" textColor="#34b3fa" backgroundColor="#ade1ff" />
          <SquarBtns textColor="#34b3fa" backgroundColor="#ade1ff" val="*" />
        </View>
        {/* Row 2 Ends */}

        {/* Row 3 */}
        <View style={Styles.RowThree}>
          <SquarBtns textColor="#34b3fa" backgroundColor="#fff" val="7" />
          <SquarBtns textColor="#34b3fa" backgroundColor="#fff" val="8" />
          <SquarBtns val="9" textColor="#34b3fa" backgroundColor="#fff" />
          <SquarBtns textColor="#34b3fa" backgroundColor="#ade1ff" val="-" />
        </View>
        {/* Row 3 Ends */}

        {/* Row 4 Start */}
        <View style={Styles.RowFour}>
          <View style={Styles.buttonRow}>
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>1</Text>
            </TouchableOpacity>
            {/* 4th Column Button */}
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.squareButton}>
              <Text style={Styles.buttonText}>3</Text>
            </TouchableOpacity>


          </View>

          <TouchableOpacity style={Styles.plusButton}>
            <Text style={Styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Row 4 Ends */}

        {/* 5th Row Final Bosss */}
        <View style={Styles.RowFive}>
          <TouchableOpacity style={Styles.ZeroBtn}>
            <Text style={Styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.squareButton}>
            <Text style={Styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"#ade1ff",width:60,height:60,borderRadius:5,justifyContent:'center',alignItems:"center"}}>
            <Text style={Styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        {/* 5th Row Final Bosss  Ends*/}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  containerOverall: {
    
    flex: 1,
    padding: 30,
    backgroundColor: '#f7f8fb',
  },
  AnsContainer: {
    alignItems:"flex-end",
    paddingHorizontal:20,
    justifyContent:'center',
    height: "40%",
    width: "100%",
 
  },
  BtnContainer: {
    height: "60%",
    rowGap: 20,
    width: "100%",
  },
  RowOne: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  RowTwo: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  RowThree: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  RowFour: {
    flexDirection: 'row',
    height: "auto",
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    // backgroundColor:"orange",
    width: '100%',
    paddingHorizontal: 10,
    rowGap: 8,
    maxWidth: 250, // Adjust as needed for your layout
    marginBottom: 10, // Adds space between rows
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
    height: 140, // Height set to 2 rows (60 + 60)
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
    columnGap:20,
    width: "100%",
    flexDirection:'row'

  },
  ZeroBtn: {
    flex: 3,
    borderRadius: 5,
    height: 60,
 justifyContent:'center',
 alignItems:'center',
    backgroundColor: "#fff"
  },
  AnswerText:{
    fontSize:50,
    color:"#302F33"
  },
  Eval:{
   fontSize:16,
    color:"#97ADB6"
  }
});

export default App;
