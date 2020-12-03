import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Center from "../utils/Center";
import { Button, Text } from "react-native";

const Login = props => {
    const { login } = useContext(AuthContext);

    return (
        <Center>
            <Text> Logg inn </Text>
            <Button title={"Log me in"} onPress={login} />
            <Button title={"Register Now"} onPress={() => props.navigation.navigate('Register')} />
        </Center>
    )
};

export default Login;
