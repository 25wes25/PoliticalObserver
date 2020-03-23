import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../styles';
import SearchBar from './Components/SearchBar';

export default class Politician extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressPolitician = () => {
    this.props.navigation.navigate('PoliticianProfile');
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}} />
        <ScrollView>
          <SearchBar />
          <Text style={styles.headerText}>Others are viewing</Text>
          <ScrollView
            style={{paddingLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/yang.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/bernie.png')}
                />
                <Text style={styles.captionStyle}>Politician 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/trump.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/trump.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 4</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Text style={styles.headerText}>Recommended for you</Text>
          <ScrollView
            style={{paddingLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/yang.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/bernie.png')}
                />
                <Text style={styles.captionStyle}>Politician 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/trump.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onPressPolitician()}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../res/images/trump.jpg')}
                />
                <Text style={styles.captionStyle}>Politician 4</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 135,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    margin: 4,
    width: 110,
    height: 110,
  },
  captionStyle: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});
