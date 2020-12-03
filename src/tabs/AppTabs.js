import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/HomeStack";
import Settings from "../components/Settings";
import Search from "../components/Search";


const Tabs = createBottomTabNavigator();

const AppTabs = props => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                    }
                    else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search' : 'ios-search';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name={"Home"} component={HomeStack} />
            <Tabs.Screen name={"Search"} component={Search} />
            <Tabs.Screen name={"Settings"} component={Settings} />
        </Tabs.Navigator>
    )
};

export default AppTabs;
