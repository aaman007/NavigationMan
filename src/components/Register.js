import Center from "../utils/Center";
import { Button, Text } from "react-native";
import React from "react";

const Register = props => {
    return (
        <Center>
            <Text> Register </Text>
            <Button title={"Login"} onPress={() => {
                props.navigation.navigate('Login')
                // props.navigation.goBack();
            }} />
        </Center>
    )
};

export default Register;
