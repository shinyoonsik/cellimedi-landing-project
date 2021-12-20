import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDoctorStackNavigation from './MyDoctorStackNavigation'
import CustomSideBar from '../screens/CustomSideBar';

const Drawer = createDrawerNavigator();

export default function MenuDrawerMyDoctor(){
    return (
        <Drawer.Navigator initialRouteName="MyDoctorStackNavigation" drawerContent={(props) => <CustomSideBar {...props} />}>
            <Drawer.Screen name="MyDoctorStackNavigation" component={MyDoctorStackNavigation}/>
        </Drawer.Navigator>
    )
}