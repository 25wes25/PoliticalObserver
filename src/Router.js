import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LandingScreen from './screens/Landing';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import EducationScreen from './screens/Education';
import SearchScreen from './screens/Search';
import DashboardScreen from './screens/Dashboard';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import PoliticianScreen from './screens/Politician';
import IssuesScreen from './screens/Issues';
import TopicsScreen from './screens/Topics';
import PoliticianProfile from './screens/Components/PoliticianPage';
import Testing from './screens/Testing';
/*
  Education - Search specifics, definitions
  Dashboard -
  Profile/Settings -
 */

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  PoliticianProfile: PoliticianProfile,
});
const EducationStack = createStackNavigator({
  Education: EducationScreen,
  Politician: PoliticianScreen,
  Issue: IssuesScreen,
  Topic: TopicsScreen,
  PoliticianProfile: PoliticianProfile,
});
const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
});
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Settings: SettingsScreen,
});
const testStack = createStackNavigator({
  Test: Testing,
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Search: SearchStack,
    Education: EducationStack,
    Dashboard: DashboardStack,
    Profile: ProfileStack,
    Test: testStack,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  },
);

const AppNavigator = createStackNavigator({
  Landing: LandingScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Dashboard: BottomTabNavigator,
});

export default createAppContainer(AppNavigator);
