import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CreateAccount  from './Components/react-components/CreateAccount'
import MainPage from './Components/react-components/MainPage'
import LoginPage from './Components/react-components/LoginPage'
import RoomScreen from './Components/react-components/RoomScreen'


const AppNavigatior = createStackNavigator({
  Login: {
    screen: LoginPage
  },
  CreateAccount:{
    screen: CreateAccount
  },
  MainPage: {
    screen: MainPage
  },
  RoomScreen: {
    screen: RoomScreen
  }
},
{
  initialRouteName: 'Login'
}
)

export default createAppContainer(AppNavigatior)

  
