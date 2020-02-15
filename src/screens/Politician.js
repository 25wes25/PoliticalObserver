import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Category from './Components/Explore/Category';
import backgroundImage from '../../res/images/background.jpg';
import {colors} from '../styles';

export default class Politician extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}} />
        <Text style={styles.headerText}>Politicians</Text>
        <Text style={styles.headerText}>Trending</Text>
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
    margin: 10,
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
});
