import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {colors} from '../../styles';
import Yang from '../../../res/images/yang.jpg';
import SearchBar from '../Components/SearchBar';

class PoliticianPage extends React.Component {
  state = {
    value: '',
  };

  receivedValue = value => {
    this.setState({value});
  };

  getPoliticianInfo = value => {
    let text = value.toLowerCase().trim();
    const URL = `https://api.github.com/users/${text}`;
    return fetch(URL).then(res => res.json());
  };

  render() {
    const text = this.props.navigation.getParam('text', 'nothing sent');
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.bioStyle}>
              45th President of the United States
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
            massa eros. Pellentesque commodo sit amet turpis in fringilla.
            Vestibulum ipsum diam, elementum in neque non, imperdiet pretium
            risus. Suspendisse at bibendum lectus. Aenean dui tellus,
            consectetur consectetur consectetur vitae ullamcorper id, ultrices
            sit amet elit. Integer sed ipsum sit amet enim ullamcorper ultrices
            at et sem. Fusce sed nisi venenatis, venenatis turpis non, euismod
            tortor.
          </Text>
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
  image1: {
    width: '40%',
    margin: '1%',
    aspectRatio: 1,
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
