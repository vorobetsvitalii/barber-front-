import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

 function SignupForm(props) {
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState(""); 
const [email, setEmail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [data, setData] = useState([]);

handle_signup = () => {
    fetch('https://44d2-93-77-132-232.eu.ngrok.io/alino/users/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: firstName,
      last_name: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,

}),
});
};


return (
  <View style={styles.container}>
   <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}} />

    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="First Name."
        placeholderTextColor="#003f5c"
        onChangeText={(firstName) => setfirstName(firstName)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Last Name"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(lastName) => setlastName(lastName)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(email) => setEmail(email)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Phone Number"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(phoneNumber) => setphoneNumber(phoneNumber)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword) }
      />
    </View>
    <Text style={styles.loginText}>Already have an account? </Text>
    <TouchableOpacity>
      <Text style={styles.sign_up_button} onPress={
                () => {
                    props.navigation.navigate('Login')
                }
            }>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}
    onPress={
      () => {
        console.log("Pressed");
        handle_signup();
      }
  }>
    <Text style={styles.sign_up_button}>SIGN UP</Text>
    </TouchableOpacity>
    <Text>
    {JSON.stringify(data, null, 2) }
    </Text>
    
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},

image: {
  marginBottom: 40,
},

inputView: {
  backgroundColor: "#FFC0CB",
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,

  alignItems: "center",
},

TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 20,
},

forgot_button: {
  height: 30,
  marginBottom: 30,
},

loginBtn: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
},
})
export default SignupForm