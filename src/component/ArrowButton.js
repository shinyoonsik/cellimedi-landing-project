import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ArrowButton(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate(props.title)}>
            <Image source={require('../../assets/bigarrow.png')} style={{width:25, height:25}}/>
        </TouchableOpacity>
    );
};

export default ArrowButton;