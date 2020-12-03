import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Search from "../components/Search";
import { addProductRoutes } from "../routes/addProductRoutes";

const Stack = createStackNavigator();

const SearchStack = props => {
    return (
        <Stack.Navigator initialRouteName={"Search"}>
            <Stack.Screen name={"Search"} component={Search} />
            {addProductRoutes(Stack)}
        </Stack.Navigator>
    )
};

export default SearchStack;
