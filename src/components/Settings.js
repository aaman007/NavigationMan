import React, { useContext } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Center from "../utils/Center";
import { AuthContext } from "../providers/AuthProvider";

const Settings = props => {
    const { logout } = useContext(AuthContext);

    return (
        <Center>
            <Text> Settings Tab </Text>
            <Button title={"Log Out"} onPress={logout} />
        </Center>
    )
};

export default Settings;
