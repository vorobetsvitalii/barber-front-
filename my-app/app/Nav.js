import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Screens';

function Nav(props) {
  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  A: {
    marginTop: '30%',
    fontSize: 20,
    marginLeft: "15%",
  },
  B: {
    marginTop: "-7%",
    fontSize: 20,
    marginLeft: "70%"
  }
})
export default Nav;