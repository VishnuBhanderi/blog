import React, { useContext, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })

    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPosts => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ margin: 20, marginTop: 10 }}
        onPress={() => navigation.navigate('Create')}
      >
        <Feather name='plus' size={30} color='#FFFF' />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen
