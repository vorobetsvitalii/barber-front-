import { StatusBar } from "expo-status-bar";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnColor, setBtnColor] = useState(false);

  useEffect(() => {
    if (password == '' || email == '' ) {
      setBtnColor(false);
    } else {
      setBtnColor(true);
    }
  }, [password]);

  handle_login = (data) => {
    fetch('https://44d2-93-77-132-232.eu.ngrok.io/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password: password,
  
  }),
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>EMAIL AБО ТЕЛЕФОН</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(email) => setEmail(email)}
          />
          <View style={styles.underline}/>
        </View>
      </View>


      <View>
        <Text>ПАРОЛЬ</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={styles.underline}/>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.sign_up_button} onPress={
          () => {
            props.navigation.navigate('SignUp')
          }
        }>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={
              [
                btnColor
                ? styles.activeColor
                : styles.notActiveColor,
                styles.loginBtn
              ]
              
            }
            onPress={
              () => {
                console.log("Pressed");
                handle_login();
              }
            }
            >
        <Text style={{color:"white"}}>УВІЙТИ</Text>
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


  inputView: {
    width: "90%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
  },

  sign_up_button: {
    marginLeft: "-30%",
  },

  forgot_button: {
    marginBottom: 20,
    marginTop: "-5.5%",
    marginLeft: "29%",
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  underline: {
    backgroundColor: "grey",
    height: 1,
    width: vw(90),
  },
  notActiveColor: {
    backgroundColor: "#DCDCDC",
  },
  activeColor: {
    backgroundColor: "#00BFFF",
  }
})
export default LoginForm