import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    // elevation: 8, android box shadow name
    shadowColor: "black", // iOS uses shadowColor, shadowOffset, shadowRadius, shadowOpacity to create a shadow
    shadowOffset: {
      width: 0,
      height: 2,
    }, // determines where shadow is pushed
    shadowRadius: 6, // size of the shadow
    shadowOpacity: 0.25, // determines the strength of shadow
  },
});

export default StartGameScreen;
