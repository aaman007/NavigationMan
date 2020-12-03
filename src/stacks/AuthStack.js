import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../components/Login";
import Register from "../components/Register";


const Stack = createStackNavigator();

const AuthStack = props => {
    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"Login"} options={{
                header: () => null
            }} component={Login}/>
            <Stack.Screen name={"Register"} options={{
                header: () => null
            }} component={Register}/>
        </Stack.Navigator>
    )
};

export default AuthStack;
