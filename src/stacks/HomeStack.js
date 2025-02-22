import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../components/Feed";
import { addProductRoutes } from "../routes/addProductRoutes";

const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator initialRouteName={"News Feed"}>
            {addProductRoutes(Stack)}
            <Stack.Screen name={"News Feed"} component={Feed} />
        </Stack.Navigator>
    )
};

export default HomeStack;
