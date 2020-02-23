import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';

const propTypes = {
  imageUri: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  navigationFunction: PropTypes.func,
  navigationLocation: PropTypes.string,

};

const defaultProps = {
  navigationFunction: null,
  navigationLocation: null,
};

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressButton = () => {
    // alert('Hello!');
    // NavigationActions.navigate({routeName: 'Search'});
    // navigate('Politician', {navigation: this.props.navigation});
    this.props.navigation.navigate(this.props.navigationLocation);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() => this.onPressButton()}>
        <View style={{flex: 2}}>
          <Image source={this.props.imageUri} style={styles.imageStyle} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
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
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  cardStyle: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  iconHighlight: {
    alignItems: 'center',
  },
});

export default withNavigation(Category);
