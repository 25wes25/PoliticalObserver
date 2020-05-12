import {StyleSheet} from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#d6d5d6',
  paleGreen: '#03e17e', //'#03fc94'
  polRed: '#cf3634',
  polDarkRed: '#B42033',
  polWhite: '#FEFEFE',
  polVeryLightBlue: '#7ea4b6',
  polLightBlue: '#66759e',
  polDarkBlue: '#3C3B6E',
  polBlue: '#057ec7',
  polLightGray: '#DFDFDF',
  polGray: '#CECECE',
  polPlaceholderGray: '#8A8A8A',
  polDarkGray: '#464646',
  polGreen: '#007000',
  clear: 'rgba(255, 255, 255, 0.0)',
  gender: ['#CD6155', '#C0392B', '#A93226', '#52BE80', '#27AE60', '#229954'],
  party: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
  education: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
  ethnicity: [
    '#CD6155',
    '#C0392B',
    '#A93226',
    '#922B21',
    '#7B241C',
    '#641E16',
    '#52BE80',
    '#27AE60',
    '#229954',
    '#1E8449',
    '#196F3D',
    '#145A32',
  ],
  partyColors: {
    democrat: '#057ec7',
    republican: '#cf3634',
    Unaligned: '#464646',
  }
};

export const dateFormats = {
  monthDayYear: 'MMMM D, YYYY',
};

export const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: colors.polWhite,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navigationBarTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  tabBar: {
    backgroundColor: colors.polWhite,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBarIconSelected: {
    height: 40,
    width: 40,
    tintColor: colors.polBlue,
    shadowColor: colors.polBlue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabBarIconUnselected: {
    height: 40,
    width: 40,
    tintColor: colors.black,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
