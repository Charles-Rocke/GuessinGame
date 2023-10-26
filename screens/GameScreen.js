import { View, Text, StyleSheet, SafeAreaViewBase } from "react-native";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
export default GameScreen;
