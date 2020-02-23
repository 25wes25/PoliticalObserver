import React from 'react';
import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {colors} from '../styles';

class Issues extends React.Component {
  constructor() {
    super();

    this.state = {
      layout_Height: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layout_Height: 0,
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = item => {
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.category_View}>
          <Text style={styles.category_Text}>
            {this.props.item.category_Name}{' '}
          </Text>

          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png',
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>
          {this.props.item.sub_Category.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.sub_Category_Text}
              onPress={this.show_Selected_Category.bind(this, item.name)}>
              <Text> {item.name} </Text>

              <View
                style={{width: '100%', height: 1, backgroundColor: '#000'}}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const array = [
      {
        expanded: false,
        category_Name: 'Social Issues',
        sub_Category: [
          {id: 1, name: 'LGBT Adoption Rights'},
          {id: 2, name: 'Abortion'},
          {id: 3, name: 'Gay Marriage'},
          {id: 4, name: 'Government Mandates'},
          {id: 5, name: 'Gun Buyback'},
          {id: 6, name: 'Religious Freedom Act'},
          {id: 7, name: 'Women in Combat'},
        ],
      },

      {
        expanded: false,
        category_Name: 'Domestic Policy Issues',
        sub_Category: [{id: 8, name: 'Gun Control'}, {id: 9, name: 'Armed Teachers'}],
      },

      {
        expanded: false,
        category_Name: 'Economic Issues',
        sub_Category: [
          {id: 12, name: 'Equal Pay'},
          {id: 13, name: 'Taxes'},
          {id: 14, name: 'Minimum Wage'},
          {id: 15, name: 'Corporate Tax'},
        ],
      },

      {
        expanded: false,
        category_Name: 'Environmental Issues',
        sub_Category: [
          {id: 16, name: 'Oil Drilling'},
          {id: 17, name: 'Fracking'},
          {id: 18, name: 'Alternative Energy'},
          {id: 19, name: 'Plastic Product Ban'},
        ],
      },

      {
        expanded: false,
        category_Name: 'Immigration',
        sub_Category: [
          {id: 20, name: 'Border Wall'},
          {id: 21, name: 'Muslim Immigrants'},
          {id: 22, name: 'Immigration Ban'},
          {id: 23, name: 'Immigration Healthcare'},
        ],
      },
    ];

    this.state = {AccordionData: [...array]};
  }

  update_Layout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index].expanded = !array[index].expanded;

    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
          {this.state.AccordionData.map((item, key) => (
            <Issues
              key={item.category_Name}
              onClickFunction={this.update_Layout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff',
  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10,
  },

  category_Text: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10,
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0091EA',
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00',
  },
});
