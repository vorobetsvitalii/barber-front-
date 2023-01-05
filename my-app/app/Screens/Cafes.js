import { StatusBar } from "expo-status-bar";
import { vw, vh } from 'react-native-expo-viewport-units';
import React, { useState, useEffect } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
} from "react-native";
import Footer from "../Modules/FooterMenu"
import Settings from "../Modules/SettingsIcon"
import Icon from "react-native-vector-icons/Entypo";

function Cafes(props) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [Display, SetDisplay] = useState("flex");
    const [searchDisplay, SetsearchDisplay] = useState("none");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <View style={styles.itemStyle}>
                <Image
                    source={{ uri: item.url }}
                    style={styles.image}
                />
                <Text style={styles.item_name}>
                    {item.title.split(' ').slice(0, 2).join(' ')}
                </Text>
                <Text style={styles.item_description}>
                    {item.title.substring(0, 15)}
                    {"..."}
                </Text>
                <EntypoIcon
                    name='heart-outlined'
                    size={vw(8)}
                    style={styles.heartIcon}
                    onPress={() => {
                        console.log('2')
                    }}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Icon
                name="chevron-left"
                style={[styles.search_close, {display: searchDisplay}]}
                onPress={()=>{
                    SetDisplay("flex")
                    SetsearchDisplay("none")
                }}
            />
            <View style={{display: Display}}><Settings /></View>
            <FeatherIcon
                color={"grey"}
                size={vw(8)}
                name="search"
                style={styles.search}
                onPress={() => {
                    SetsearchDisplay("flex")
                    SetDisplay("none")
                }} />
            <Text style={styles.cafes_text}>Cafes</Text>
            <Text
                style={styles.restaurant_text}
                onPress={() => {
                    props.navigation.navigate("Restaurants")
                }}>Restaurant</Text>
            <View style={styles.underline} />
            <View style={[styles.textInputStyle, { display: searchDisplay }]} >
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
            </View>
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
                style={{ marginBottom: vh(7) }}
            />
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
        color: "black",
        alignSelf: "center",
        fontSize: vw(5),
        fontWeight: "500"
    },
    restaurant_text: {
        position: 'absolute',
        color: "#AAA4A4",
        fontSize: vw(5),
        marginTop: vh(9),
        marginLeft: vw(60),
        fontWeight: "400"
    },
    underline: {
        backgroundColor: "#A1A1A1",
        height: 1.5,
        marginTop: vh(1),
        width: vw(70),
        alignSelf: "center",
    },
    itemStyle: {
        backgroundColor: "white",
        height: vw(30),
        width: vw(90),
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        borderRadius: 30,
    },
    image: {
        position: "absolute",
        marginTop: vw(2.5),
        marginLeft: vw(2.5),
        width: vw(25),
        height: vw(25),
        borderRadius: 50
    },
    item_name: {
        marginLeft: vw(35),
        marginTop: vw(6),
        fontSize: vw(6),
    },
    item_description: {
        marginLeft: vw(35),
        marginTop: vw(2),
    },
    heartIcon: {
        marginLeft: vw(78),
        marginTop: vw(-19),
        color: "#FF0000",
    },
    textInputStyle: {
        height: vh(5),
        width: vw(80),
        marginTop: vh(1),
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: 'white'
    },
    textInput: {
        marginLeft: vw(3)
    },
    search_close: {
        position: 'absolute',
        marginTop: vh(7),
        marginLeft: vw(3),
        fontSize: vw(8)
    }
})
export default Cafes