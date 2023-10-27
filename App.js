import { useState } from "react";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./utilities/colors";
export default function App() {
  let screen = <StartGameScreen onConfirmedInput={confirmedInputHandler} />;
  const [userInput, setUserInput] = useState();

  function confirmedInputHandler(confirmedInput) {
    setUserInput(confirmedInput);
  }

  if (userInput) {
    screen = <GameScreen userNumber={userNumber} />;
    console.log("game screen");
  }
  return (
    <LinearGradient
      colors={[Colors.secondary600, Colors.primary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/rocke.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
