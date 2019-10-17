//Code Created By Jackson Kish
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './StyleSheet'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import  Dashboard  from './Dashboard'

class App extends React.Component {
  render(){
    return(
    <View style = {styles.MainPart}>
          <TextInput placeholder= 'Username' style = {styles.userName}/>
          
          <TextInput placeholder= 'Password' style = {styles.passWord}/>
    
          <TouchableOpacity style = {styles.loginButton}onPress={() => this.props.navigation.navigate("Dashboard")}>
            <Text style = {styles.loginText}>Log in</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style = {styles.createAccount}>
            <Text style = {styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>

             
          
          <Text style = {styles.title}>Open Classroom</Text>

          <Image style = {styles.loginPics} source = {require('./assets/loginPic.png')}/>
        
        </View>
    )

}
}
const AppNavigatior = createStackNavigator({
  Home: {
    screen: App
  },
  Dashboard:{
    screen: Dashboard
  },
})  
export default createAppContainer(AppNavigatior)

  
