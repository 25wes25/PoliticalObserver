import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import background from '../../../../res/images/personality_group.jpg';
import {colors} from '../../../styles';
export default class PersonalityLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.route.params.userID,
    };
  }
  render() {
    return (
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.overlay} />
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.titleFont}> 16 Personalities Test </Text>
        </View>
        <View style={styles.descriptionStyle}>
          <Text style={styles.descriptionTextStyle}>
            Take our Personality Test and get a “freakishly accurate”
            description of who you are and why you do things the way you do.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.sectionButtonContainer}
          onPress={() =>
            this.props.navigation.navigate('Personality Mind', {
              userId: this.props.route.params.userId,
            })
          }>
          <Text style={styles.sectionButtonText}>Start the test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={{color: '#f5f6fa', textDecorationLine: 'underline'}}>
            What is the 16 personalities test?
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  titleFont: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f5f6fa',
  },
  startButtonStyle: {
    backgroundColor: '#0984e3',
    width: '90%',
    height: '10%',
    margin: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  startButtonFont: {
    justifyContent: 'center',
    left: '23%',
    fontSize: 30,
    color: '#f5f6fa',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  descriptionStyle: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: '90%',
    borderRadius: 15,
  },
  descriptionTextStyle: {
    color: '#f5f6fa',
    fontWeight: 'bold',
  },
  sectionButtonContainer: {
    alignSelf: 'center',
    width: 200,
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: colors.polBlue,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,
  },
  sectionButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.polWhite,
  },
});
