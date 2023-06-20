import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleLoginPress = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigation.navigate("Home", { userdata:data });
      })
      .catch((error) => {
        console.log(error);
        setError("Login failed");
      });
  };

  return (
    <View style={styles.container}>
      <S.BackgroundImage
        source={require("../../assets/Banner_logo.jpg")}
        resizeMode="cover">
      </S.BackgroundImage>
      <View style={styles.containermain}>
        <Image
          source={require("../../assets/Logo_icon.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="black"
        />
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.button}>
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containermain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(178, 34, 34)",
    marginBottom: 10,
  },
  input: {
    marginTop: 5,
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderColor: "rgb(178, 34, 34)",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "rgb(178, 34, 34)",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  logo: {
    width: 60,
    height: 60,
  },
});
