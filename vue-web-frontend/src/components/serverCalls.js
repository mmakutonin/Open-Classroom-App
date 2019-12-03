import axios from 'axios';
const serverUrl = 'http://localhost:1337/'
export default {
    serverUrl: serverUrl,
    //Server Authentication Functions
    createUser: (username, password, email) => {
        return axios.post(
            serverUrl + 'api/create-user',
            {
                "usernameid": username,
                "passwordid": password,
                "emailid": email
            }
        )
        .then(res => true)
    },
    login: (username, password) => {
        return axios.post(
            serverUrl + 'api/login',
            {
                "usernameid": username,
                "passwordid": password
            }
        )
        .then(res => {
            if(!res.data.userAuthenticated)
                throw Error('Login Failed')
            return true
        })
    },

    //Server Room Functions
    openRoom: (username, password, roomName) => {
        return axios.post(
            serverUrl + 'api/create-room',
            {
                "userid": username,
                "password": password,
                "roomName": roomName
            }
        )
        .then(res => ({
            roomName: res.data.roomName,
            roomSid: res.data.roomSid
        }))
    },
    closeRoom: (username, password, roomSid) => {
        return axios.post(
            serverUrl + 'api/close-room',
            {
                "userid": username,
                "password": password,
                "roomSid": roomSid
            }
        )
        .then(res => true)
    },
    listRooms: (username, password, completedRooms=false, roomName='') => {
        let axiosObj = {
            "userid": username,
            "password": password,
            "filterCompletedRooms": completedRooms
        }
        if(roomName) {
            axiosObj.roomName = roomName
        }

        return axios.post(
            serverUrl + 'api/list-rooms',
            axiosObj
        )
        .then(res => res.data)

    },

    //Server Token Generation Functions
    generateToken: (username, password, roomSid) => {
        return axios.post(
            serverUrl + 'api/new-token',
            {
                "userid": username,
                "password": password,
                "roomSid": roomSid
            }
        )
        .then(res => res.data.token)
    }
}

