import React from 'react'
import {Text} from 'react-native'
import serverFxns from '../util/server-functions'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem, ThemeProvider, Overlay, Input, Card, Button, Icon } from 'react-native-elements'


class MainPage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.navigation.getParam('username', ''),
            password: this.props.navigation.getParam('password', ''),
            roomList: [],
            roomName: '',
            loading: true,
            error: false,
            errorMessage: ''
        }

        const {username, password} = this.state

        if(!(username && password))
        {
            this.setState({
                loading: false,
                error: true,
                errorMessage: 'No Username or Password supplied; please go back and login again.'
            })
        }
        else {
            this.getRoomList()
        }
    }

    getRoomList () {
        const {username, password} = this.state
        serverFxns.listRooms(username,password)
        .then(res => {
            this.setState ({
                roomList: res.map(room => ({
                    sid: room.sid,
                    name: room.uniqueName
                })),
                loading: false
            })
            console.log(JSON.stringify(this.state.roomList))
        })
        .catch(err => this.setState({error: true, errorMessage: err}))
    }

    createRoom() {
        console.log('create room')
        const {username, password, roomName} = this.state
        serverFxns.openRoom(username, password, roomName)
        .then(ret => this.openRoom(roomName, ret.roomSid))
    }
    
    openRoom(sid, name) {
        const {username, password} = this.state
        console.log('open room')
        serverFxns.generateToken(username, password, sid)
        .then((token) => this.props.navigation.navigate('RoomScreen', {
            username,
            password,
            token,
            name,
        }))
        .catch(err => this.setState({error: true, errorMessage: err}))
    }

    renderRoom = (item) => {
        const room = item.item
        return (
            <ListItem 
            title={room.name}
            onPress={() => this.openRoom(room.sid, room.name)}
            chevron
            bottomDivider
        />
    )}
    roomKey = (room, index) => '' + index

    render() {
        return (
            <ThemeProvider>

                <Overlay isVisible={this.state.loading}>
                    <Text> We are getting your content ready- please wait.</Text>
                </Overlay>

                <Overlay isVisible={this.state.error} onBackdropPress={() => this.setState({error: false})}>
                    <Text> We have encountered the following error: {this.state.errorMessage}</Text>
                </Overlay>

                <Card>
                    <Text>Create a New Room</Text>
                    <Input placeholder='Room Name'
                        leftIcon={{ type: 'font-awesome', name: 'user' }} 
                        onChangeText={(text) => this.setState({ roomName: text })} />
                    <Button title='Create and Join' onPress={() => this.createRoom()} />
                </Card>

                <Card>
                    <Text>Room List </Text>
                    <FlatList data={this.state.roomList} keyExtractor={this.roomKey} renderItem={this.renderRoom}/>
                </Card>

            </ThemeProvider>
            
        )
    } 
}

export default MainPage