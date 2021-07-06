import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet ,KeyboardAvoidingView ,ToastAndroid} from 'react-native';
import db from '../config';
import * as firebase from 'firebase'
export default class WriteStoryScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      author:'',
      storyText:'',
    }
  }
  submitStory = () => {
    db.collection('Stories').add({
      title: this.state.title,
       author: this.state.author,
      storyText: this.state.storyText,
    });
    db.collection('authors').doc(this.state.author).update({
      'noOfBooksPublished':firebase.firestore.FieldValue.increment(1)
    });
    
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    ToastAndroid.show("Your story has been PUBLISHED!!!",ToastAndroid.SHORT);
  }
  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
          <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    
                    style={styles.submitButton}
                    onPress={this.submitStory}
                    
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
          
        
      </KeyboardAvoidingView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
  }
});