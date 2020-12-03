import React, { useContext } from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import SettingsOptions from "../components/SettingsOptions";
import { TouchableOpacity, Text } from "react-native";
import { AuthContext } from "../providers/AuthProvider";

const Stack = createStackNavigator();

const SettingsStack = props => {
    const { logout } = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Settings"}
                component={SettingsOptions}
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity style={{paddingRight: 8}} onPress={logout}>
                                <Text style={{color: 'red'}}> Logout </Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </Stack.Navigator>
    )
};

export default SettingsStack;
