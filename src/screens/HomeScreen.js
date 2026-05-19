import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Anime Guess
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>
          Jogar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#ff4757",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
