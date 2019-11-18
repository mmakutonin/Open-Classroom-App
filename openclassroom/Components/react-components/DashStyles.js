//Code Created By Jackson Kish 
import React from 'react'
import {StyleSheet} from 'react-native'

const accountStyles = StyleSheet.create({
    createAccount:{
        flex: 1

    },
    
    createAccountText:{
    position: 'relative',
    color: '#8B4513'
    },
    userNameText:{
    position: 'relative',
    top: '50%',
    left: '10%',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 350,
    color: 'gray'

    },
    passwordText:{
    position: 'relative',
    top: '70%',
    left: '10%',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0, 
    width: 350
    },
    repPasswordText:{
    position: 'relative',
    top: '80%',
    left: '10%',
    borderWidth: 1,
    borderTopWidth:0,
    borderLeftWidth: 0,
    borderRightWidth:0,
    width: 350
    },
    email:{
    position: 'relative',
    top: '90%',
    left: '10%',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 350
    },
    createAccountTouch:{
    borderWidth: 1,
    top: "120%",
    borderColor: "gray",
    position: "relative",
    height: 55,
    width: 350,
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: '#8B4513'
    },
    touchText:{
    alignSelf: "center",
    fontSize: 30,
    top: "18%",
    color: "white"
    },
    accountTitle:{
        alignSelf: "center",
        fontSize: 50,
        color: "#8B4513",
        bottom: '55%'  
    }
    })

export default accountStyles