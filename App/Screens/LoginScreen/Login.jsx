import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Logo from "../../../assets/logo.png";
import Color from "../../Utils/Colors";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to our Bussiness App</Text>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.page}>
        <TextInput
          placeholder="Enter Email"
          style={styles.textInput}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 200,
  },
  page: {
    flex: 1,
    width: "100%",
    height: "77%",
    backgroundColor: Color.main,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: "50%",
    padding: 10,
    backgroundColor: "#e4e7ed",
    marginBottom: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#e4e7ed",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
});
