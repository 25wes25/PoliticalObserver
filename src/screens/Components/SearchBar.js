//Add Search Bar Filter on Listview
import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import PoliticianProfile from './PoliticianPage';
//import all the components we are going to use.

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {isLoading: true, text: ''};
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in text input
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on data source
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item separator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  handleSubmit = () => {
    // getPoliticianInfo(this.state.text).then(res => {
    //   if (res.message === 'Not Found') {
    //     this.setState({
    //       error: 'Politician not found',
    //     });
    //   } else {
    //     this.props.navigation.push({
    //       passProps: {politicianInfo: res},
    //       component: PoliticianPage,
    //     });
    //     this.props.navigation.navigate(PoliticianPage);
    //     this.setState({
    //       error: false,
    //       text: '',
    //     });
    //   }
    // });
    // alert('you clicked!');
    this.props.navigation.navigate('PoliticianProfile', {
      text: this.state.text,
    });
  }

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with text input used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Try searching 'Biden'..."
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({item}) => (
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={{marginTop: 10}}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
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
  button: {
    paddingBottom: 20,
  },
});

export default withNavigation(SearchBar);
