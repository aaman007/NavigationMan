import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../components/Feed";

const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"News Feed"} component={Feed} />
        </Stack.Navigator>
    )
};

export default HomeStack;
