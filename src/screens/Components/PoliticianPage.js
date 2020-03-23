import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {colors} from '../../styles';

class PoliticianPage extends React.Component {
  state = {
    value: '',
    name: '',
    bio: '',
    image: '',
    currentPosition: '',
  };

  receivedValue = text => {
    this.setState({value: text});
    console.log('Received Value: ', this.state.value);
  };

  componentDidMount() {
    let text = this.state.value.toLowerCase().trim();
    // let url = `http://10.0.2.2:5000/politician/${text}`;
    // use 10.0.2.2 for android emulator
    //let url = 'http://10.0.2.2:5000/politician/sanders'
    let url = 'http://10.0.2.2:3000/politicians/Joe Biden';
    console.log(url);
    // let url = 'http://127.0.0.1:3000/users/ccatherinepham@gmail.com';
    // 'http://10.0.2.2:3000/politicians/${text}'
    // console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          // name: responseJson._id,
          name: responseJson[0].name,
          bio: responseJson[0].bio,
          image: responseJson[0].image,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // const text = this.props.navigation.getParam('text', 'nothing sent');
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image style={styles.image} source={{uri: this.state.image}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{this.state.name}</Text>
            <Text style={styles.positionStyle}>
              {this.state.currentPosition}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentStyle}>{this.state.bio}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: '80%',
    height: 'auto',
    aspectRatio: 1,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 30,
    color: colors.black,
    paddingHorizontal: 20,
  },
  contentStyle: {
    fontWeight: 'normal',
    textAlign: 'left',
    fontSize: 16,
    color: colors.black,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  bioStyle: {
    fontWeight: 'normal',
    textAlign: 'left',
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: 20,
  },
  positionStyle: {
    fontStyle: 'italic',
    textAlign: 'left',
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: 20,
  },
});

export default withNavigation(PoliticianPage);
