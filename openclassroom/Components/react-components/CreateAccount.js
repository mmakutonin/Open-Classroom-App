import React from 'react'
import { Text} from 'react-native'
import serverFxns from '../util/server-functions'
import { ThemeProvider, Input, Button, Overlay } from 'react-native-elements'

class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPass: '',
            email: '',
            modalOpen: false,
            modalText: ''
        }
    }

    _createAccount() {
        //checkFields
        const {username, password, confirmPass, email} = this.state
        if (!(username && password && confirmPass && email)) {
            this.openModal('Please fill out all fields')
        }
        else if (password !== confirmPass) {
            this.openModal('Passwords do not match')
        }
        else {
            //Create Account
            serverFxns.createUser(username, password, email)
                //Navigate to main page
                .then((success) => {
                    this.props.navigation.navigate('MainPage', {
                        username: username,
                        password: password
                    })
                })
                .catch((err) => this._openModal(err))
        }
    }

    _openModal(text = '') {
        this.setState({
            modalOpen: !this.state.modalOpen,
            modalText: text
        })
    }



    render() {
        return (
            <ThemeProvider>

                <Overlay isVisible={this.state.modalOpen} onBackdropPress={() => this._openModal()}>
                    <Text>We encoutered an error creating your account: {this.state.modalText}</Text>
                </Overlay>

                <Input placeholder='Username' 
                    leftIcon={{ type: 'font-awesome', name: 'user' }} 
                    onChangeText={(text) => this.setState({ username: text })} />

                <Input placeholder='Password' 
                    leftIcon={{ type: 'font-awesome', name: 'lock' }} 
                    onChangeText={(text) => this.setState({ password: text })} 
                    secureTextEntry={true} />

                <Input placeholder='Confirm Password' 
                    leftIcon={{ type: 'font-awesome', name: 'lock' }} 
                    onChangeText={(text) => this.setState({ confirmPass: text })} 
                    secureTextEntry={true} />

                <Input placeholder='Email' 
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }} 
                    onChangeText={(text) => this.setState({ email: text })} />

                <Button title='Create Account' onPress={() => this._createAccount()} />

            </ThemeProvider>
        )
    }
}

export default CreateAccount