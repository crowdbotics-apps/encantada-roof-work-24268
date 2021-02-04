import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial200439Navigator from '../features/Tutorial200439/navigator';
import NotificationList200411Navigator from '../features/NotificationList200411/navigator';
import Settings200410Navigator from '../features/Settings200410/navigator';
import Settings200402Navigator from '../features/Settings200402/navigator';
import UserProfile200400Navigator from '../features/UserProfile200400/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial200439: { screen: Tutorial200439Navigator },
NotificationList200411: { screen: NotificationList200411Navigator },
Settings200410: { screen: Settings200410Navigator },
Settings200402: { screen: Settings200402Navigator },
UserProfile200400: { screen: UserProfile200400Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
