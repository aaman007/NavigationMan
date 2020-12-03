import React from 'react';
import Center from "../utils/Center";
import { FlatList, Button } from "react-native";
import faker from 'faker';

const Feed = props => {
    return (
        <Center>
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
        </Center>
    )
};

export default Feed;
