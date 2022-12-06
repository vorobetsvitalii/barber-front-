import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";


function RegLogNav({ navigation }) {
    return (
        <View>
            <Text style={styles.A} onPress={
                () => {
                    navigation.navigate('Login')
                }
            }>Login</Text>
            <Text style={styles.B} onPress={
                () => {
                    navigation.navigate('SignUp')
                }
            }>SignUp</Text>
        </View>
    )
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
export default RegLogNav;