import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../styles';
import Category from './Components/Explore/Category';
import SearchBar from './Components/SearchBar';
import Bernie from '../../res/images/bernie.png';
import Yang from '../../res/images/yang.jpg';
import Trump from '../../res/images/trump.jpg';
export default class EducationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GridViewItems: [
        {key: 'One'},
        {key: 'Two'},
        {key: 'Three'},
        {key: 'Four'},
        {key: 'Five'},
        {key: 'Six'},
        {key: 'Seven'},
        {key: 'Eight'},
        {key: 'Nine'},
        {key: 'Ten'},
      ],
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SearchBar></SearchBar>
        <Text style={styles.headerText}>Education</Text>
        <View>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
            <Category
                imageUri={Bernie}
                name="Politicians"
            />
            <Category
                imageUri={Yang}
                name="Issues"
            />
            <Category
                imageUri={Trump}
                name="Topics"
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
