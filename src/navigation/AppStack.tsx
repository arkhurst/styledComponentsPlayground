import React, {Fragment, memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/home';
import Messaging from '../screens/messaging';
import Profile from '../screens/profile';
import Settings from '../screens/settings';

export enum AppScreens {
  Home = 'Home',
  Profile = 'Profile',
  Messaging = 'Messaging',
  Settings = 'Settings',
}

export type AppStackParamsList = {
  Home: undefined;
  Profile: undefined;
  Messaging: undefined;
  Settings: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<AppStackParamsList>();

const AppStackNav: React.FC<any> = () => {
  return (
    <Fragment>
      <Navigator>
        <Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'home'}
                size={24}
                style={{
                  color: focused ? Colors.primaryColor : Colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <Screen
          name={'Messaging'}
          component={Messaging}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'message-circle'}
                size={24}
                style={{
                  color: focused ? Colors.primaryColor : Colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <Screen
          name={'Profile'}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'user-plus'}
                size={24}
                style={{
                  color: focused ? Colors.primaryColor : Colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <Screen
          name={'Settings'}
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather
                name={'settings'}
                size={24}
                style={{
                  color: focused ? Colors.primaryColor : Colors.lightGrey,
                }}
              />
            ),
          }}
        />
      </Navigator>
    </Fragment>
  );
};

export default memo(AppStackNav);
