import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      {/* maxLength prop sets total number of enterable characters */}
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#FFFCF0",
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
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#000033",
    borderBottomWidth: 2,
    color: "#000033",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
