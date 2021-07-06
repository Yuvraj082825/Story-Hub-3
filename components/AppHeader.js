import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'pink',
    marginTop:0,
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 25,
    fontWeight: 350,
    textAlign: 'center',
  }
});

export default AppHeader;