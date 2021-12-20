import React from 'react';
import { View, ScrollView } from 'react-native';
import RoundButton2 from './RoundButton2';

function TopNavigation2({name}){
    return (
        <ScrollView style={{flexDirection: 'row',width:'100%', borderBottomWidth:2, borderBottomColor:'#f0f0f0', padding:2}}  horizontal={true}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5, marginLeft:7}}>
                {/* Seegene */}
                <RoundButton2 title='마음' flag={name} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5}}>
                <RoundButton2 title='신경인지' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',padding:5, marginLeft:-1}}>
                <RoundButton2 title='심혈관' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton2 title='근골격' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton2 title='대사' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton2 title='면역' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton2 title='피부 및 체형' flag={name}/>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:5}}>
                <RoundButton2 title='기타' flag={name}/>
            </View>
        </ScrollView>
    )
}

export default TopNavigation2;


