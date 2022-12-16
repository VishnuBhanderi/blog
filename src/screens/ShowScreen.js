import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPosts = state.find(
    blogPosts => blogPosts.id === navigation.getParam('id')
  )
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{blogPosts.title}</Text>
      <Text style = {styles.content}>{blogPosts.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name='pencil' size={40} color='#FFFF' />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems:'center',
    alignSelf:'center'
    
    
  },
  content:{
    fontSize:16,
    textAlign:'justify'
  },
  container:{
    margin: 20
  }
})

export default ShowScreen
