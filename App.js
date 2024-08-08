
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function getInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
 console.log(enteredGoalText);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="your course goal!" style={styles.textInput}  onChangeText={getInputHandler}/>
        <Button  title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}> 
        <Text>List of Goals...</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex : 5
  }
});
