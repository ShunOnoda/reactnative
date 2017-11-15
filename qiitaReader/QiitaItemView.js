import React from 'react';
import {  
  View,
  WebView
   } from 'react-native';
import { StackNavigator } from 'react-navigation';

class QiitaItemView extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `React Native Qiita Reader`,
    headerStyle: {
      backgroundColor: "orange"
    },
    headerTitleStyle: {
      fontFamily: 'MuseoSansRounded-300',
      //alignSelf:'center',
      textAlign: 'center'
    },
   });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{marginTop: 2}}
      />
    );
  }
}


export default QiitaItemView