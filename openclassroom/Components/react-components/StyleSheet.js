//Code Created By Jackson Kish
import React from 'react'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
login: {
    flex:1
},
loginButton: {
    borderWidth: 1,
    top: "60%",
    borderColor: "gray",
    position: "relative",
    height: 55,
    width: 350,
    alignSelf: "center",
    borderRadius: 25
},
userName: {
    borderWidth: 1,
    borderColor: "gray",
    position: "absolute",
    paddingRight: "50%",
    alignSelf: "center",
    top: "55%",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0, 
    width: 350
},
passWord: {
    borderWidth: 1,
    borderColor: "gray",
    position: "absolute",
    paddingRight: "50%",
    alignSelf: "center",
    top: "65%",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 350
},
loginText: {
    alignSelf: "center",
    fontSize: 30,
    top: "18%",
    color: "gray"
},
titleText: {
    alignSelf: "center",
    fontSize: 50,
    color: "#8B4513"
},
createAccount: {
    borderWidth: 1,
    top: "50%",
    borderColor: "brown",
    position: "relative",
    height: 55,
    width: 350,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#8B4513"
},
createAccountText: {
    alignSelf: "center",
    fontSize: 30,
    top: "18%",
    color: "white"
},
loginPic: {
    alignSelf: "center",
     top: "5%",
     width: 165,
     height: 165
}})
export default styles


