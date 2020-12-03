import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import Center from "../utils/Center";
import faker from "faker";

const Search = props => {
    const [show, setShow] = useState(false);

    return (
        <Center>
            <Text> Search Stack Home </Text>
            <Button title={"Search Products"} onPress={() => setShow(true)} />
            {
                show ? (
                    <FlatList
                        style={{width: '100%'}}
                        renderItem={({item}) => {
                            return (
                                <Button title={item} onPress={() => props.navigation.navigate('ProductDetails', {
                                    name: item
                                })} />
                            )
                        }}
                        keyExtractor={(product, index) => product + index}
                        data={Array.from(Array(50), () => faker.commerce.product())}
                    />
                ) : null
            }
        </Center>
    )
};

export default Search;
