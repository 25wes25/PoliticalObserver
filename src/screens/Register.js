import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../styles';
import {NavigationActions} from 'react-navigation';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onPressLogin = () => {
    this.props.navigation.reset(
      [NavigationActions.navigate({routeName: 'Dashboard'})],
      0,
    );
  };

  onChangeEmail(email) {
    this.setState({
      email: email,
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Email'}
            placeholderTextColor={colors.paleGreen}
            onChangeText={email => this.onChangeEmail(email)}
            value={this.state.email}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={this.onPressLogin}>
          <Text style={styles.loginButtonText}>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  inputTitleText: {
    fontSize: 16,
    color: colors.paleGreen,
  },
  textInput: {
    fontSize: 16,
    color: colors.paleGreen,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  loginButtonContainer: {
    marginHorizontal: 60,
    marginBottom: 40,
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: colors.paleGreen,
  },
  loginButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    color: colors.white,
    overflow: 'hidden',
  },
});
