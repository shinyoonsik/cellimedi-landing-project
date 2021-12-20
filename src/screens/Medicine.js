import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import SmallCustomButton from '../component/SmallCustomButton';
import TempButton from '../component/TempButton';

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5,
      marginLeft:0,
      marginRight:7,
      padding:2,
      borderRadius: 8,
      borderWidth:1,
      borderColor:'#6765E9',
      width:328
    },
    title: {
      fontSize: 16,
      fontFamily: 'NotoSansKR-Bold',
    },
  });


const Medicine = () => {
    return (
        <View style={{padding:1, paddingLeft: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop:2, paddingLeft:5, paddingRight:5}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/timer.png')} style={{width:26, height:26, marginRight:4}}  />
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:20}}>오후 12:30</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/pen.png')} style={{width:24, height:24, marginRight:4}}  />
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', paddingRight:15}}>수정</Text>
                    </View>
                </View>
                <View style={{padding:6,paddingBottom:0,paddingRight:18}}>
                    <View style={{borderBottomWidth:1, borderColor: '#D7DBEC', paddingBottom:0}}>
                        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingBottom:0, height: 45}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:18}}>복용약</Text>
                            <View style={{alignItems:'center', flexDirection: 'row', height: 53}}>
                                <Image source={require('../../assets/check.png')} style={{width:21, height:21, marginRight:7}}  />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color: '#6765E9'}}>전체복용</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding:6,  paddingRight:15 }}>
                    <View style={{ flexDirection:'row', justifyContent: 'space-between', borderBottomWidth:1, borderColor: '#D7DBEC', flexDirection:'row', justifyContent: 'space-between', paddingBottom:6}}>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:16}}>머리아플 때 먹는 약</Text>
                        <SmallCustomButton title='복용' attr=''/>
                    </View>
                </View>
                <View style={{ paddingLeft:5, paddingRight:15 }}>
                    <View style={{ flexDirection:'row', justifyContent: 'space-between', borderBottomWidth:1, borderColor: '#D7DBEC', flexDirection:'row', justifyContent: 'space-between', paddingBottom:6}}>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:16}}>당뇨약</Text>
                        <SmallCustomButton title='복용' />
                    </View>
                </View>
                <View style={{ padding:6,  paddingRight:15 }}>
                    <View style={{ flexDirection:'row', justifyContent: 'space-between', borderBottomWidth:1, borderColor: '#D7DBEC', flexDirection:'row', justifyContent: 'space-between', paddingBottom:6}}>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:16}}>당뇨약</Text>
                        <SmallCustomButton title='복용' />
                    </View>
                </View>
                <View style={{margin: 5, marginBottom:20}}>
                    <TempButton title="저장" onPress={() => {alert('복약정보 DB에 저장')}}/>
                </View>
        </View>
    );
};

export default Medicine;
