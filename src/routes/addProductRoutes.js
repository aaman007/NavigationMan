import React from 'react';
import ProductDetails from "../components/ProductDetails";
import EditProduct from "../components/EditProduct";
import { Text, TouchableOpacity } from "react-native";

export const addProductRoutes = (Stack) => {
    return (
        <>
            <Stack.Screen
                name={"ProductDetails"}
                component={ProductDetails}
                options={({ route }) => ({
                    headerTitle: `Product : ${route.params.name}`
                })}
            />
            <Stack.Screen
                name={"EditProduct"}
                component={EditProduct}
                options={({ route }) => ({
                    headerTitle: `Edit Product : ${route.params.name}`,
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    route.params.submit?.current();
                                }}
                                style={{paddingRight: 8}}
                            >
                                <Text style={{color: 'red'}}> Done </Text>
                            </TouchableOpacity>
                        )
                    }
                })}
            />
        </>
    )
}
