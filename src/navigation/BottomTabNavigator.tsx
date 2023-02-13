/* eslint-disable react-native/no-inline-styles */
import {ScreenUtils} from '@helpers';
import {HomeStack, NotificationStack} from '@navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Themes} from '@themes';
import React from 'react';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const getTabBarIconImage = (
  icon: any,
  iconFill: any,
  title: string,
  focused: boolean,
) => (
  <View
    style={
      ScreenUtils.isPad()
        ? {
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            paddingBottom: ScreenUtils.scale(7),
            marginTop: ScreenUtils.scale(10),
          }
        : {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: ScreenUtils.scale(10),
          }
    }>
    <Image source={focused ? iconFill : icon} />
    <Text
      numberOfLines={1}
      style={[
        {
          marginTop: ScreenUtils.scale(6),
          textAlign: 'center',
          // ...Themes.font.medium,
        },
        focused
          ? {color: Themes.colors.primary}
          : {color: Themes.colors.coolGray},
        // {...Sizes.font.smallToSmallMini},
      ]}>
      {title}
    </Text>
  </View>
);

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName={SCREENS.HOME_STACK}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={''}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('', '', 'Home', focused),
        }}
      />
      <Tab.Screen
        name={''}
        component={NotificationStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('', '', 'Home', focused),
        }}
      />
      <Tab.Screen
        name={''}
        component={NotificationStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('', '', 'Home', focused),
          // tabBarButton: props => <CreateShipmentButton props={props} />,
        }}
      />
      <Tab.Screen
        name={''}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('', '', 'Home', focused),
        }}
      />
      <Tab.Screen
        name={''}
        component={NotificationStack}
        options={{
          tabBarIcon: ({focused}) =>
            getTabBarIconImage('', '', 'Home', focused),
        }}
      />
    </Tab.Navigator>
  );
}
