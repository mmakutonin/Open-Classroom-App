import axios from 'axios';

export default {

    //Server Authentication Functions
    createUser: (username, password, email) => {
        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/create-user',
            {
                "usernameid": username,
                "passwordid": password,
                "emailid": email
            }
        )
        .then(res => ({success: true}))
        .catch(err => ({success: false, error: err}))
    },
    login: (username, password) => {
        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/login',
            {
                "usernameid": username,
                "passwordid": password
            }
        )
        .then(res => res.data.userAuthenticated)
        .catch(err => console.log(err))
    },

    //Server Room Functions
    openRoom: (username, password, roomName) => {
        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/new-token',
            {
                "userid": username,
                "password": password,
                "roomName": roomName
            }
        )
        .then(res => ({
            success: true,
            roomName: res.data.roomName,
            roomSid: res.data.roomSid
        }))
        .catch(err => ({success: false, error: err}))
    },
    closeRoom: (username, password, roomSid) => {
        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/new-token',
            {
                "userid": username,
                "password": password,
                "roomSid": roomSid
            }
        )
        .then(res => ({success: true}))
        .catch(err => ({success: false, error: err}))
    },
    listRooms: (username, password, completedRooms, roomName='') => {
        let axiosObj = {
            "userid": username,
            "password": password,
            "filterCompletedRooms": completedRooms
        }
        if(roomName) {
            axiosObj.roomName = roomName
        }

        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/list-rooms',
            axiosObj
        )
        .then(res => ({success: true, res: res.data}))
        .catch(err => ({success: false, error: err}))

    },

    //Server Token Generation Functions
    generateToken: (username, password, roomSid) => {
        return axios.post(
            'https://morning-earth-10995.herokuapp.com/api/new-token',
            {
                "userid": username,
                "password": password,
                "roomSid": roomSid
            }
        )
        .then(res => ({success: true, token: res.data.token}))
        .catch(err => ({success: false, error: err}))
    }
}

