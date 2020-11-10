import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages

import Home from '../../sections/app/Home';
import Config from './config.route';

import { globalStyle, metrics } from '../../styles';

const TabNavigator = createBottomTabNavigator();

const styles = StyleSheet.create({
  tab: {
    paddingVertical: metrics.basePadding / 4,
  },
});

interface MyTabInterface {
  state: any;
  descriptors: any;
  navigation: any;
}

const MyTabBar: React.FC<MyTabInterface> = ({
  descriptors,
  state,
  navigation,
}) => {
  const { colors } = useTheme();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[globalStyle.row, styles.tab, { backgroundColor: colors.tab }]}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              globalStyle.main,
              globalStyle.justifyCenter,
              globalStyle.alignCenter,
            ]}>
            <>
              {options.tabBarIcon({
                color: isFocused ? colors.background : '#fff',
              })}
              <Text
                style={{
                  color: isFocused ? colors.background : colors.text,
                }}>
                {label}
              </Text>
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabRoute: React.FC = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Início"
      tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: metrics.text.small.size,
          lineHeight: metrics.text.small.line,
        },
      }}>
      <TabNavigator.Screen
        name="Config"
        component={Config}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="gear" color={color} size={metrics.baseIcon} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={metrics.baseIcon} />
          ),
        }}
      />
      {/*}
      <TabNavigator.Screen
        name="Gráficos"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pie-chart" color={color} size={metrics.baseIcon} />
          ),
        }}
      />*/}
    </TabNavigator.Navigator>
  );
};

export default TabRoute;
