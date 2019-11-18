import React from 'react'
import { WebView } from 'react-native-webview'
import ServerFxns from '../util/server-functions'

export default class Room extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.navigation.getParam('username', ''),
            password: this.props.navigation.getParam('password', ''),
            token: this.props.navigation.getParam('token', ''),
            roomName: this.props.navigation.getParam('name', ''),
        }

    }

    render() {
        return (
            <WebView
              source={{ uri: ServerFxns.serverUrl }}
              style={{ marginTop: 20 }}
            />
          );
    }
}