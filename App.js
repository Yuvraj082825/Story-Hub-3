import  React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import AppHeader from './components/AppHeader';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
            <AppHeader/>
            <AppContainer/>
      </View>
            

  );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  Write:WriteStoryScreen,
  Read: ReadStoryScreen,
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./components/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./components/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);
const AppContainer =  createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
