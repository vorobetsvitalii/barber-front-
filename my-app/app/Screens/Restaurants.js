import { StatusBar } from "expo-status-bar";
import { vw, vh } from 'react-native-expo-viewport-units';
import React, { useState, useEffect } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
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

function Restaurant(props) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Settings />
            <FeatherIcon
                color={"grey"}
                size={vw(8)}
                name="search"
                style={styles.search} />
                <Text 
                style={styles.cafes_text}
                onPress={()=>{
                    props.navigation.navigate("Cafes");
                }}
                >Cafes</Text>
                <Text style={styles.restaurant_text}>Restaurant</Text>
                <View style={styles.underline}/>
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CFE8DC",
    },
    search: {
        marginTop: vh(7),
        marginRight: vw(3),
        alignSelf: 'flex-end'
    },
    cafes_text: {
        position: 'absolute',
        marginTop: vh(9),
        color: "#AAA4A4",
        fontSize: vw(5),
        fontWeight: "400",
        marginLeft: vw(20)
    },
    restaurant_text: {
        position: 'absolute',
        color: "black",
        fontSize: vw(5),
        marginTop: vh(9),
        alignSelf: "center",
        fontWeight: "500"
    },
    underline: {
    backgroundColor: "#A1A1A1",
    height: 1.5,
    marginTop: vh(1),
    width: vw(70),
    alignSelf: "center",
    }
})
export default Restaurant