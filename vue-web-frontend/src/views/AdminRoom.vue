<template>
    <div class="w3-container w3-row" style='width: 100%'>
        <div class="w3-container w3-sidebar w3-theme-light" style='width: 25%'>
            <input type='button' v-on:click='createRoomVisible = !createRoomVisible' value="Create a New Class Session" class="w3-button w3-block w3-theme-dark" />
            <div v-if='createRoomVisible' class="w3-container w3-border w3-theme">
                <input type='text' v-model="user" placeholder="Username" class="w3-input"/>
                <input type='text' v-model="pass" placeholder="Password" class="w3-input"/>
                <input type='text' v-model="roomName" placeholder="Room Name" class="w3-input"/>
                <input type='button' value='Create Room' v-on:click='createRoom()' class="w3-button w3-block w3-theme-dark w3-margin-bottom"/>
            </div>
        </div>
        <div class="w3-container w3-row" style="margin-left: 25%">
            <audio ref='audio'/>
            <div class="w3-container w3-half">
                <span class='w3-tag w3-block'>Camera Feed</span>
                <video ref='camera'/>
            </div>
            <div class="w3-container w3-half">
                <span class='w3-tag w3-block'>Slideshow</span>
                <video ref='slideshow'/>
            </div>
            <input type='button' value='Close Room' v-on:click='closeRoom()' class="w3-block w3-button w3-red" />
        </div>
    </div>
</template>
<script>
import server from '../components/serverCalls.js'
import VideoPlayer from '../components/twilio/Video'
const Video = require('twilio-video')

export default {
    components: {VideoPlayer},
    data: () => ({
        createRoomVisible: true,
        user: '',
        pass: '',
        email: '',
        roomName: '',
        roomSid: '',
        token: '',
        tracks: [],
        room: {},
        roomConnected: false
    }),
    methods: {
        //Room Creation
        async createRoom() {
            await server.openRoom(this.user, this.pass, this.roomName)
                .then(ret => this.roomSid = ret.roomSid)
            await server.generateToken(this.user, this.pass, this.roomSid)
                .then(ret => this.token = ret)
            this.joinRoom()
        },
        //Room Connection Functions
        async joinRoom() {
            await this.createTracks()
            this.room = await Video.connect(this.token, {
                name: this.roomName,
                tracks: this.tracks
            })
            this.roomConnected = true
            this.attachTracks()
            this.handleRoomEvents()
        },
        async createTracks() {
            const tracks = await Video.createLocalTracks()
            const screenShareTrack = await Video.createLocalVideoTrack()
            tracks.push(screenShareTrack)
            this.tracks = tracks
        },
        handleRoomEvents() {
            const room = this.room;
            room.on('disconnected', (room, error) => this.closeRoom())
        },
        //Room Destruction
        async closeRoom() {
                //close tracks

                await server.closeRoom(this.user, this.pass, this.roomSid)
                this.room = {}
                this.detachTracks()
                this.tracks=[]
        },
        //Track Display
        attachTracks() {
            this.tracks[2].attach(this.$refs.slideshow)
            this.tracks[0].attach(this.$refs.audio)
            this.tracks[1].attach(this.$refs.camera)
        },
        detachTracks() {
            for (const track in this.tracks) {
                track.detach()
            }
        }
    }
    
}
</script>