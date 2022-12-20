import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignupForm from './Screens/SignupForm';
import LoginForm from './Screens/LoginForm';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed_form: '',
            logged_in: /*AsyncStorage.getItem('token') ?*/ true /*: false*/,
            username: ''
        };
    }
    /*componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://localhost:8000/alino/current_user/', {
                headers: {
                    Authorization: `JWT ${AsyncStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({ username: json.username });
                });
        }
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                AsyncStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.user.username
                });
            });
    };
*/
    handle_signup = (e, data) => {
        e.preventDefault();
        fetch('https://44d2-93-77-132-232.eu.ngrok.io/alino/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                AsyncStorage.setItem('token', json.token).then(() => {
                    
                this.setState({
                    logged_in: true,
                    displayed_form: '',
                    username: json.username
                });
                })
            });
    };

    /* handle_logout = () => {
         AsyncStorage.removeItem('token');
         this.setState({ logged_in: false, username: '' });
     };
 
     display_form = form => {
         this.setState({
             displayed_form: form
         });
     };*/

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="SignUp" component={SignupForm} handle_signup={this.handle_signup} />
                    <Stack.Screen name="Login" component={LoginForm} handle_login={this.handle_login} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;