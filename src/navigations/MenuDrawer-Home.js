import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigation from './HomeStackNavigation';
import CustomSideBar from '../screens/CustomSideBar';

const Drawer = createDrawerNavigator();

export default function MenuDrawerHome(){
    return (
        <Drawer.Navigator initialRouteName="HomeStackNavigation" drawerContent={(props) => <CustomSideBar {...props} />}>
            <Drawer.Screen name="Home" component={HomeStackNavigation}/>
        </Drawer.Navigator>
    )
}