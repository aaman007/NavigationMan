import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../stacks/HomeStack";
import SearchStack from "../stacks/SearchStack";
import SettingsStack from "../stacks/SettingsStack";

const Drawers = createDrawerNavigator();


const MainDrawers  = props => {
    return (
        <Drawers.Navigator>
            <Drawers.Screen name={"Home"} component={HomeStack} />
            <Drawers.Screen name={"Search"} component={SearchStack} />
            <Drawers.Screen name={"Settings"} component={SettingsStack} />
        </Drawers.Navigator>
    )
};

export default MainDrawers;
