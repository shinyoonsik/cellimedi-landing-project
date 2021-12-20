import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

function ImgButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={require('../../assets/menu.png')} style={{width:22, height:26}}/>
        </TouchableOpacity>
    );
};

export default ImgButton;