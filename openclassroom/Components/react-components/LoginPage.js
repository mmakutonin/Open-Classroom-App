import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
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
    _handlePress() {
        console.log(this.state.username && this.state.password)
        if ((this.state.username && this.state.password) == false) {
            this.setModalVisible(true)
            return;
        }
        this.props.navigation.navigate('MainPage')
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }


    render() {
        return (
            <View style={styles.MainPart}>

                <Modal
                    visible={this.state.modalVisible}>

                    <Text>
                        Wrong Password
                     </Text>
                </Modal>



                <TextInput placeholder='Username' style={styles.userName}
                    returnKeyType={"next"}
                    onChangeText={(usertext) => this.setState({ username: usertext })}
                />

                <TextInput placeholder='Password' style={styles.passWord}
                    returnKeyText={"next"}
                    onChangeText={(passtext) => this.setState({ password: passtext })}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => this._handlePress()}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => this.props.navigation.navigate("CreateAccount")}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>



                <Text style={styles.title}>Open Classroom</Text>



            </View>
        )

    }
}

export default LoginPage