import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ActivityIndicator,
  ListView,
  TouchableWithoutFeedback,
  WebView
   } from 'react-native';
import { StackNavigator } from 'react-navigation';
import QiitaItemView from './QiitaItemView';

class Home extends React.Component {
  static navigationOptions = {
    title: 'React Native Qiita Reader',
    headerStyle: {
      backgroundColor: "orange",
    },
    headerTitleStyle: {
      fontFamily: 'MuseoSansRounded-300',
      alignSelf:'center',
    },

  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://qiita.com/api/v2/tags/reactjs/items')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderImage(data){
    const { navigate } = this.props.navigation;
    return(
      <TouchableWithoutFeedback onPress={() => navigate('Web', {url: data.url}, {title: data.title})}>
        <View style={styles.container}>
          <Image
            source={{uri: data.user.profile_image_url}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.name}>{data.user.id}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1, paddingTop: 2}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderImage.bind(this)}
        />
      </View>
    );
  }
}


class ReactQiitaItemView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Qiita View`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{marginTop: 20}}
      />
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: Home},
  Web: {screen: QiitaItemView},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAEBD7',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 5,
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
    fontSize: 15,
    margin: 5,
    textAlign: 'left',
  },
});
