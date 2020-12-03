import React from 'react';

import { View, Text, StyleSheet } from "react-native";

const Center = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Center;
