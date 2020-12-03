import React, { useState, useRef, useEffect } from 'react';
import Center from "../utils/Center";
import { Text } from "react-native";


const apiCall = () => {
    return "Data Fetched";
}

const EditProduct = props => {
    const submit = useRef(() => {});

    submit.current = () => {
        apiCall();
        props.navigation.goBack();
    }

    useEffect(() => {
        props.navigation.setParams({ submit });
    }, []);

    return (
        <Center>
            <Text>
                Editing {props.route.params.name}
            </Text>
        </Center>
    )
};

export default EditProduct;
