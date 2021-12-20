import React from 'react';
import { View, ScrollView } from 'react-native';
import RoundButton from './RoundButton';

function TopNavigation({name}){
    return (
        <ScrollView style={{flexDirection: 'row',width:'100%', borderBottomWidth:2, borderBottomColor:'#f0f0f0', padding:2}}  horizontal={true}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5, marginLeft:7}}>
                {/* Seegene */}
                <RoundButton title="씨젠클리닉" flag={name} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5}}>
                <RoundButton title="잠실클리닉" flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5, marginLeft:-1}}>
                <RoundButton title="방이의원" flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton title="송파클리닉" flag={name}/>
            </View>
        </ScrollView>
    )
}

export default TopNavigation;


