import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={[styles.label,{marginTop:15}]}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        multiline
        textAlignVertical='top'
        style={[styles.input,{height:200}]}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <View style={styles.button}>
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
      </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 10,
    marginTop:0
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 12,
    fontWeight:'bold'
  },
  button:{
    margin:20
  }
})

export default BlogPostForm
