import { StatusBar } from "expo-status-bar";
import { vw, vh } from 'react-native-expo-viewport-units';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Footer from "../Modules/FooterMenu"
import Settings from "../Modules/SettingsIcon"
function Home(props) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Settings/>
      <Text style={styles.alinoText}>ALINO</Text>
      <View style={styles.categories1}>
        <TouchableOpacity
          onPress={() => {
            console.log("beauty")
          }}>
          <ImageBackground
            source={require('../Images/beauty.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>BEAUTY</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Cafes")
          }}>
          <ImageBackground
            source={require('../Images/cafe.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>RESTAURANTS & CAFES</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("CONCERTS")
          }}>
          <ImageBackground
            source={require('../Images/concerts.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>CONCERTS</Text>

          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("CINEMA")
          }}>
          <ImageBackground
            source={require('../Images/cinema.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>CINEMA</Text>

          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.categories2}>
        <TouchableOpacity
          onPress={() => {
            console.log("sport")
          }}>
          <ImageBackground
            source={require('../Images/sport.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>SPORT</Text>

          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Health")
          }}>
          <ImageBackground
            source={require('../Images/health.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>HEALTH</Text>

          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("THEATER")
          }}>
          <ImageBackground
            source={require('../Images/theater.png')}
            style={styles.catecoryImage}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={styles.categoryName}>THEATER</Text>

          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFE8DC",
  },
  bars_icon: {
    position: 'absolute',
    marginTop: vh(7),
    marginLeft: vw(3),
  },
  bottom_menu: {
    width: vw(100),
    height: vh(7),
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  homeIcon: {
    position: 'absolute',
    marginLeft: vw(7),
    color: "#5ACCE4"
  },
  heartIcon: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#ADADAF'
  },
  historyIcon: {
    alignSelf: 'flex-end',
    marginRight: vw(7),
    color: '#ADADAF'
  },
  catecoryImage: {
    marginTop: vh(1),
    width: vw(42.5),
    height: vh(20),
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  categoryName: {
    color: 'white',
    fontWeight: '400',
    fontSize: vw(5),
    marginLeft: vw(1),
    marginBottom: vw(1)
  },
  categories1: {
    position: 'absolute',
    marginTop: vh(12),
    marginLeft: vw(5),
    width: vw(40)
  },
  categories2: {
    position: 'absolute',
    marginTop: vh(12),
    marginLeft: vw(55),
    width: vw(40)
  },
  alinoText: {
    fontSize: vw(10),
    alignSelf: 'center',
    marginTop: vh(5)
  }
})
export default Home