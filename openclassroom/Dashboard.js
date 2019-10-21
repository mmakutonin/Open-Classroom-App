//Code Created By Jackson Kish 
import React from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import accountStyles from './DashStyles'
class Dashboard extends React.Component{

render(){
return(
<View styles = {accountStyles.dashboardView}>
    <TextInput placeholder = 'Username' style = {accountStyles.userNameText}/>

    <TextInput placeholder = 'Password' style = {accountStyles.passwordText}/>

    <TextInput placeholder = 'Repeat Password' style = {accountStyles.repPasswordText}/>

    <TextInput placeholder = 'Email' style = {accountStyles.email}/>

    <TouchableOpacity style = {accountStyles.createAccountTouch}>
        <Text style ={accountStyles.touchText}>Create Account</Text>
    </TouchableOpacity>

    <Text style = {accountStyles.accountTitle}>Create An {"\n"}Account</Text>

</View>
)
}
}

export default Dashboard