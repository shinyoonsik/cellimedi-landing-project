import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SmallArrowButton({name}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => name === '진료' ? navigation.navigate('Diagnosis') : name === '검사' ? navigation.navigate('Inspection') : navigation.navigate('Treatment')}>
            <Image source={require('../../assets/realarrow.png')} style={{width:26, height:26, marginRight:12}}/>
        </TouchableOpacity>
    );
}

const Box =  ({name}) => {
    return (
        <View style={{borderRadius:5, borderRadius:10, borderLeftWidth:10, borderLeftColor: name === '진료' ? '#CAB1FF' : name === '검사' ? '#60CFE3' : '#F17662', borderTopWidth:1, borderTopColor:'#f2f0f0', borderRightWidth:1, borderRightColor:'#f2f0f0', borderBottomWidth:1, borderBottomColor:'#f2f0f0'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginLeft:15}}>
                <View>
                    <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold', marginBottom:-16}}>{name}</Text>
                    <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold'}}>2021년 7월 1일</Text>
                </View>
                
                {/* 이미지를 버튼으로 바꾸기 */}
                <SmallArrowButton name={name}></SmallArrowButton>
                {/* <Image source={require('../../assets/realarrow.png')} style={{width:26, height:26, marginRight:12}}/> */}
            </View>
        </View>
    );
}

export default Box;