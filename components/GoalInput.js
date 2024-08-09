import { StyleSheet, View, TextInput,Button } from "react-native";
import { useState } from "react";
function GoalInput (props){
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function getInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="your course goal!"
          style={styles.textInput}
          onChangeText={getInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    )
}

export default GoalInput;

styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
      
})