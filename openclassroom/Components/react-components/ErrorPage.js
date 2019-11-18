import React from 'react';
import { Modal, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ErrorModal extends React.Component {

    render() {
        <Modal visible={this.props.visible}>
            <Text>
                An Error has been encountered: {this.props.errorText}
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text> Click Here to go back to the login screen</Text>
            </TouchableOpacity>
        </Modal>
    }
}