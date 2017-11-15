import React from 'react';
import { 
  Platform,
  StyleSheet, 
  Text, 
  View,
  Image,
  AppRegistry,
  Button,
  ActivityIndicator,
  ListView,
  TouchableHighlight,
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback,
  Alert,
  WebView
   } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


class QiitaWebView extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Qiita View`,
   });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{marginTop: 20}}
      />
    );
  }
}


export default QiitaWebView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container3: {
    paddingTop: 60,
    alignItems: 'center'
  },

  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 90,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 2,
  },

  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    margin: 8,
    textAlign: 'left',
  },
  name: {
    fontSize: 12,
    margin: 8,
    textAlign: 'left',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
