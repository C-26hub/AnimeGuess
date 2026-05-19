import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import api from "../services/api";

export default function GameScreen() {
  const [character, setCharacter] = useState(null);

  const [answer, setAnswer] = useState("");

  const [score, setScore] = useState(0);

  async function loadCharacter() {
    try {
      const response = await api.get(
        "/random/characters"
      );

      setCharacter(response.data.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacter();
  }, []);

  function verifyAnswer() {
    if (!character) return;

    const correctName =
      character.name.toLowerCase();

    const userAnswer =
      answer.toLowerCase();

    if (userAnswer.includes(correctName)) {

      Alert.alert("Acertou!");

      setScore(score + 1);

    } else {

      Alert.alert(
        "Errou!",
        `Resposta correta: ${character.name}`
      );
    }

    setAnswer("");

    loadCharacter();
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.score}>
        Pontos: {score}
      </Text>

      <Image
        source={{
          uri: character.images.jpg.image_url,
        }}
        style={styles.image}
      />

      <Text style={styles.question}>
        Quem é esse personagem?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        placeholderTextColor="#999"
        value={answer}
        onChangeText={setAnswer}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={verifyAnswer}
      >
        <Text style={styles.buttonText}>
          Confirmar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  score: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 20,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },

  question: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#222",
    color: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ff4757",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
