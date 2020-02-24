import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {colors} from '../../styles';
import Bernie from '../../../res/images/bernie.png';
import SearchBar from '../Components/SearchBar';

class PoliticianPage extends React.Component {
  state = {
    value: '',
    name: '',
    bio: '',
    image: '',
    currentPosition: '',
  };

  receivedValue = value => {
    this.setState({value});
  };

  // getPoliticianInfo = value => {
  //   let text = value.toLowerCase().trim();
  //   // const URL = `http://127.0.0.1:5000/politician/${text}`;
  //   const URL = 'http://127.0.0.1:5000/politician/sanders';
  //   // return fetch(URL).then(res => res.json());
  //   // this.setState({bio: result.name});
  //   fetch(URL)
  //       .then(res => res.json())
  //       .then(this.setState({bio: 'hello'});
  // };

  componentDidMount() {
    let text = this.state.value.toLowerCase().trim();
    let url = `http://127.0.0.1:5000/politician/${text}`;
    // use 10.0.2.2 for android emulator
    //let url = 'http://10.0.2.2:5000/politician/sanders'
    console.log(url);
    return fetch('http://10.0.2.2:5000/politician/sanders')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          name: responseJson.name,
          bio: responseJson.bio,
          image: responseJson.image,
          currentPosition: responseJson.currentPosition,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const text = this.props.navigation.getParam('text', 'nothing sent');
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image style={styles.image} source={Bernie} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.bioStyle}>
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
    marginTop: 65,
    flex: 1,
  },
  image: {
    width: '80%',
    height: 'auto',
    aspectRatio: 1,
    margin: '9%',
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
});

export default withNavigation(PoliticianPage);
