import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {colors} from '../styles';
import {withNavigation} from 'react-navigation';
import Category from './Components/Explore/Category';
import SearchBar from './Components/SearchBar';
import Bernie from '../../res/images/bernie.png';
import Yang from '../../res/images/yang.jpg';
import Trump from '../../res/images/trump.jpg';
class EducationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GridViewItems: [
        {key: 'Bernie Sanders'},
        {key: 'Pete Buttigieg'},
        {key: 'Joe Biden'},
        {key: 'Elizabeth Warren'},
        {key: 'Donald Trump'},
        {key: 'World Health'},
        {key: 'Primaries'},
        {key: 'Coronavirus'},
        {key: 'Nevada Primary'},
        {key: 'Election 2020'},
      ],
    };
  }

  GetGridViewItem(item) {
    this.props.navigation.navigate('PoliticianProfile', {
      text: 'Bernie Sanders', //figure out how to grab name
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SearchBar></SearchBar>
        <Text style={styles.headerText}>Education</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={Bernie}
              name="Politicians"
              navigationLocation="Politician"
            />
            <Category
              imageUri={Yang}
              name="Issues"
              navigationLocation="Issue"
            />
            <Category
              imageUri={Trump}
              name="Topics"
              navigationLocation="Topic"
            />
          </ScrollView>
        </View>
        <Text style={styles.subHeaderText}>Trending Topics</Text>
        <FlatList
          data={this.state.GridViewItems}
          renderItem={({item}) => (
            <View style={styles.GridViewBlockStyle}>
              <Text
                style={styles.GridViewInsideTextItemStyle}
                onPress={this.GetGridViewItem.bind(this, item.key)}>
                {' '}
                {item.key}{' '}
              </Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    color: colors.black,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4',
  },
  GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
  cardStyle: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
});

export default withNavigation(EducationScreen);