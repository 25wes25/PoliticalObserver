import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../styles';
import {NavigationActions, withNavigation} from 'react-navigation';
import SearchBar from './Components/SearchBar';
import Issue from '../screens/Issues';
import Topic from '../screens/Topics';

class EducationScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressPolitician = () => {
    this.props.navigation.navigate('Politician');
  };
  onPressIssue = () => {
    this.props.navigation.navigate('Issue');
  };
  onPressTopic = () => {
    this.props.navigation.navigate('Topic');
  };

  render() {
    return (
      <View>
        <SearchBar />
        <Text style={styles.headerText}>Start your education.</Text>
        <ScrollView>
          <View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/yang.jpg')}
                />
                <Text style={styles.captionStyle}>Politicians</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressTopic()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/bernie.png')}
                />
                <Text style={styles.captionStyle}>Topics</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressIssue()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/trump.jpg')}
                />
                <Text style={styles.captionStyle}>Issues</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  captionStyle: {
    padding: 20,
    fontSize: 15,
    top: 100,
    position: 'absolute',
    fontWeight: 'bold',
    color: 'black',
  },
  imageStyle: {
    width: 115,
    height: 115,
  },
});

export default withNavigation(EducationScreen);
