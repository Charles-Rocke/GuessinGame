import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View>
      <Text style={styles.textColor}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#c0c0c0",
  },
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#000033",
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

export default PrimaryButton;
