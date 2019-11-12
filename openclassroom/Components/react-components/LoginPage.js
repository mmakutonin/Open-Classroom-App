import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import serverFxns from '../util/server-functions'
import styles from './StyleSheet'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            modalVisible: false,
        }
    }
    _login() {
        if ((this.state.username && this.state.password) == false) {
            this.setModalVisible(true)
        }
        else {
            serverFxns.login(this.state.username, this.state.password).then(success => {
                this.props.navigation.navigate('MainPage', {
                    username: this.state.username,
                    password: this.state.password
                })
            })
        }
    }
    setModalVisible(visibility) {
        this.setState({ modalVisible: visibility })
    }


    render() {
        return (
            <View style={styles.login}>

                <Modal
                    visible={this.state.modalVisible}>

                    <TouchableOpacity style={styles.loginButton} onPress={() => this.setModalVisible(false)}>
                        <Text >Wrong Password - touch to try again</Text>
                    </TouchableOpacity>

                </Modal>

                <Text style={styles.titleText} >Open Classroom</Text>

                <TextInput placeholder='Username' style={styles.userName}
                    returnKeyType={"next"}
                    onChangeText={(usertext) => this.setState({ username: usertext })}
                />

                <TextInput placeholder='Password' style={styles.passWord}
                    returnKeyText={"next"}
                    onChangeText={(passtext) => this.setState({ password: passtext })}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => this._login()}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => this.props.navigation.navigate("CreateAccount")}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>

            </View>
        )

    }
}

export default LoginPage