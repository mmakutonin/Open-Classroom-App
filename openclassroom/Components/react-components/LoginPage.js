import React, { createRef } from 'react';
import { Text } from 'react-native';
import serverFxns from '../util/server-functions'
import { ThemeProvider, Input, Button, Overlay } from 'react-native-elements'


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            modalVisible: false
        }
    }
    _login() {
        const { username, password } = this.state

        if ((username && password) == false) {
            this.setModalVisible(true)
        }
        else {
            serverFxns.login(username, password)
            .then(success => {
                this.props.navigation.navigate('MainPage', {
                    username: username,
                    password: password
                })
            })
            .catch(err => this.setModalVisible(true))
        }
    }
    setModalVisible(visibility) {
        this.setState({ modalVisible: visibility })
    }
    _createAccount() {
        this.props.navigation.navigate('CreateAccount')
    }


    render() {

        return (
            <ThemeProvider>

                <Overlay isVisible={this.state.modalVisible} onBackdropPress={() => this.setModalVisible(false)}>
                    <Text>That looks like the wrong username/password combination. Please try again.</Text>
                </Overlay>

                <Input placeholder='Username' 
                    leftIcon={{ type: 'font-awesome', name: 'user' }} 
                    onChangeText={(text) => this.setState({ username: text })} />

                <Input placeholder='Password' 
                    leftIcon={{ type: 'font-awesome', name: 'lock' }} 
                    onChangeText={(text) => this.setState({ password: text })} 
                    secureTextEntry={true}/>

                <Button title='Login' onPress={() => this._login()} />

                <Button title='Create Account' onPress={() => this._createAccount()} />
            </ThemeProvider>
        )

    }
}

export default LoginPage