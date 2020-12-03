import React from 'react';
import Center from "../utils/Center";
import { Button, Text } from "react-native";

const ProductDetails = props => {
    return (
        <Center>
            <Text>
                {props.route.params.name}
            </Text>
            <Button title={"Edit"} onPress={() => props.navigation.navigate("EditProduct", {
                name: props.route.params.name
            })}  />
        </Center>
    )
};

export default ProductDetails;
