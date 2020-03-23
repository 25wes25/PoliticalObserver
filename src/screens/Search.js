import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Category from './Components/Explore/Category';
import SearchBar from './Components/SearchBar';
import backgroundImage from '../../res/images/background.jpg';
import {colors} from '../styles';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}} />
        <ScrollView>
          <Text style={styles.headerText}>Search</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
});
