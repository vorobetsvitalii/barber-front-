import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

 function SignupForm(props) {
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState(""); 
const [email, setEmail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");


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
        onChangeText={(password) => setlastName(password)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(confirmPassword) => setConfirmPassword(passconfirmPasswordword)}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
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