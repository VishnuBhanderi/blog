import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateSceen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen

  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        padding:10
      }
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
