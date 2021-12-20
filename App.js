import * as React from 'react';
import {loadFonts} from './src/myfont/CustomFonts.js';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/Tab.js';
import 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  componentDidMount() {
    this.setState({fontsLoaded: false});
    loadFonts()
    .then(result =>{
      this.setState({fontsLoaded: true});
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}
