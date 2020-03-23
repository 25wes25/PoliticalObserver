import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {colors} from '../styles';

export default class Issues extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}} />
        <ScrollView>
          <Text style={styles.headerText}>Issues Page</Text>
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
