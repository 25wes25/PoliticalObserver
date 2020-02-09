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
        <ScrollView>
          <Text style={styles.headerText}>Education</Text>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Category
                imageUri={require('../../res/images/bernie.png')}
                name="Politicians"
              />
              <Category
                imageUri={require('../../res/images/yang.jpg')}
                name="Issues"
              />
              <Category
                imageUri={require('../../res/images/trump.jpg')}
                name="Topics"
              />
            </ScrollView>
          </View>
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
    margin: 10,
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
});
