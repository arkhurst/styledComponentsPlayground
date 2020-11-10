import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {AppScreens, AppStackParamsList} from '../../navigation/AppStack';
import {StyledText} from '../../components/elements';
import {Colors} from '../../constants';

type NavigationProp = BottomTabNavigationProp<
  AppStackParamsList,
  AppScreens.Settings
>;

interface Props {
  navigation: NavigationProp;
}
const Settings = ({}: Props) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <StyledText type={'bold'}>Hello from Settings</StyledText>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;
