import React, { useContext } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)

  return (
    <View>
    <View style={styles.button} >
      <Button onPress={() => addBlogPost()} title='Add Blog Post' />
      </View>
      <FlatList
        data={state}
        keyExtractor={blogPosts => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name='trash' />
            </View>
          )
        }}
      />
    </View>
  )
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
  button:{
  margin:20,  
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen
