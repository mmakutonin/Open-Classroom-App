import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import ServerFunctions from '../util/server-functions';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo
} from 'react-native-twilio-video-webrtc';

export default class RoomScreen extends Component {

    //props: token, userName, password, isAdmin, roomName

    constructor(props) {
        super(props);

        this.state = {
            isAudioEnabled: this.props.isAdmin,
            isVideoEnabled: this.props.isAdmin,
            status: '',
            videoTracks: [],
            errorModal: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.refs.twilioVideo.connect({ roomName: this.props.roomName, accessToken: this.props.token })
        this.setState({status: 'connecting'})
    }

    _onRoomDidConnect() {
        this.setState({status:'connected'})
    }

    _onRoomDidFailToConnect() {
        this.setState({
            errorModal: true,
            errorMessage: 'Room failed to connect. Please check you room name and try again.'
        })
    }

    _onRoomDidDisconnect() {
        this.refs.twilioVideo.connect({ roomName: this.props.roomName, accessToken: this.props.token })
        this.setState({status: 'connecting'})
    }

    _onExitRoom() {
        if(this.props.isAdmin) {
            const roomSid = await ServerFunctions.listRooms(this.props.username, this.props.password, false, this.props.roomName)
                                    .then(res => res.res[0].sid)
            ServerFunctions.closeRoom(this.props.username, this.props.password, roomSid)
        }
        this.props.navigation.navigate('MainPage')
    }

    _onParticipantAddedVideoTrack({participant, track}) {
        console.log(participant, track);

        this.setState({videoTracks: [
            ...this.state.videoTracks,
            {
                participantSid: participant.sid,
                trackSid: track.sid
            }
        ]})
    }
    render() {
        return (
            <View>
                <Modal visible = {this.state.errorModal} >
                    <TouchableOpacity>
                        <Text>Room Connection Failed, please try again. </Text>
                    </TouchableOpacity>
                </Modal>

                {
                    this.state.status === 'connected' &&
                    <View>
                        {
                        this.state.videoTracks.map(({participantSid, trackSid}) => {
                            return (
                                <TwilioVideoParticipantView
                                    key={trackSid}
                                    trackIdentifier={{participantIdentity: participantSid, videoTrackId: trackSid}}
                                />
                                )
                        })
                        }
                    </View>
                }
                <TwilioVideoLocalView enabled={true} />

                <TwilioVideo
                    ref="twilioVideo"
                    onRoomDidConnect={ this._onRoomDidConnect }
                    onRoomDidDisconnect={ this._onRoomDidDisconnect }
                    onRoomDidFailToConnect= { this._onRoomDidFailToConnect }
                    onParticipantAddedVideoTrack={ this._onParticipantAddedVideoTrack }
                />
            </View>
        )
    }
}