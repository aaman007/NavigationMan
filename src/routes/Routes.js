import React, { useState, useEffect, useContext } from 'react';

import { ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../providers/AuthProvider";

import Center from "../utils/Center";
import AppTabs from "../tabs/AppTabs";
import AuthStack from "../stacks/AuthStack";
import MainDrawers from "../drawers/MainDrawers";


const Routes = props => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                login();
            }
            else {
            }
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        });
    }, [])

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size={"large"} color="#0000ff" />
            </Center>
        )
    }

    return (
        <NavigationContainer>
            {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    )
};

export default Routes;
