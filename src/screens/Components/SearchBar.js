import React from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import PoliticianProfile from './PoliticianPage';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {isLoading: true, text: ''};
  }

  handleSubmit = () => {
    this.props.navigation.navigate('PoliticianProfile', {
      text: this.state.text, //figure out how to grab name
    });
    console.log('Search Term: ', this.state.text);
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={() => this.handleSubmit()}>
          <Image
            style={styles.searchButton}
            source={require('../../../res/icons/search.png')}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={'Try searching "Bernie Sanders"'}
          onChangeText={text => this.setState({text})}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    margin: 10,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  searchButton: {
    margin: 12,
    width: 20,
    height: 20,
  },
});

export default withNavigation(SearchBar);
