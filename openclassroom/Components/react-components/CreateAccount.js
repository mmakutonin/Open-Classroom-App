import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import accountStyles from './DashStyles'
import serverFxns from '../util/server-functions'
class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            confirmPass:'',
            email:'',
            modalOpen:false,
            modalText:''
        }
    }

    createAccount() {
        //checkFields
        if(this.state.username && this.state.password && this.state.confirmPass && this.state.email===false) {
            openModal('Please fill out all fields')
        }
        else if(this.state.password !== this.state.confirmPass) {
            openModal('Passwords do not match')
        }
        else{
        //Create Account
            serverFxns.createUser(this.state.username, this.state.password, this.state.email)
            //Navigate to main page
            .then((success) => {
                this.props.navigation.navigate('MainPage', {
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .catch((err) => openModal('There was an error creating your account: ' + err))
        }
    }

    openModal(text = '') {
        this.setState({
            modalOpen: !this.state.modalOpen,
            modalText: text
        })
    }



    render() {
        return (
            <View styles={accountStyles.createAccount}>
                <Modal visible={this.state.modalOpen}>
                    <Text>{this.state.modalText}</Text>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.openModal()}>
                        <Text >Wrong Password - touch to try again</Text>
                    </TouchableOpacity>
                </Modal>
                <TextInput placeholder='Username' style={accountStyles.userNameText} 
                onChangeText={(username) => this.setState({ username: username })}/>

                <TextInput placeholder='Password' style={accountStyles.passwordText} 
                onChangeText={(password) => this.setState({ password: password })}/>

                <TextInput placeholder='Repeat Password' style={accountStyles.repPasswordText} 
                onChangeText={(confirmPass) => this.setState({ confirmPass: confirmPass })}/>

                <TextInput placeholder='Email' style={accountStyles.email} 
                onChangeText={(email) => this.setState({ email: email })}/>

                <TouchableOpacity style={accountStyles.createAccountTouch} onPress={this.createAccount()}>
                    <Text style={accountStyles.touchText}>Create Account</Text>
                </TouchableOpacity>

                <Text style={accountStyles.accountTitle}>Create An {"\n"}Account</Text>

            </View>
        )
    }
}

export default CreateAccount