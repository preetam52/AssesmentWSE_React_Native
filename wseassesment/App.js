import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from "./Pages/Main/Main"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (

      <Navigator />

    );
  }
}



const MainNavigator = createStackNavigator({
  
  Main: Main


},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },

  },
  {
    initialRouteName: 'Main'
  }
  // {transitionConfig: NavigationConfig}
);

export default App
const Navigator = createAppContainer(MainNavigator);


