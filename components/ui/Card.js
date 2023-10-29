import { StyleSheet, View } from "react-native";
import Colors from "../../utilities/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: Colors.primary500,
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
export default Card;
