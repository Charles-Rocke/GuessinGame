import { useState, useEffect } from "react";
import { StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./utilities/colors";

export default function App() {
  let screen = <StartGameScreen onConfirmedInput={confirmedInputHandler} />;
  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRountsNumber] = useState(0);

  // use fonts
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function confirmedInputHandler(confirmedInput) {
    setUserInput(confirmedInput);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function restartGameHandler() {
    setUserInput(null);
    setRountsNumber(0);
  }

  if (userInput) {
    screen = <GameScreen userInput={userInput} onGameOver={gameOverHandler} />;
    console.log("game screen");
  }

  if (gameIsOver && userInput) {
    screen = (
      <GameOverScreen
        userInput={userInput}
        roundsNumber={roundsNumber}
        onRestart={restartGameHandler}
      />
    );
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
