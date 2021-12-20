import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth:11,
        borderTopColor:'#CAB1FF'
    },
    body:{
        flex: 1,
        padding:13,
        margin:20,
        // marginTop:3,
        // backgroundColor: 'white',
    }
})
const Diagnosis =  () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{flexDirection:'row', alignItems:'center',marginBottom:10}}>
                    <Image source={require('../../assets/man.png')} style={{width:70,height:70}} />
                    <View>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, marginLeft:15}}>2021년 6월 12일</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, marginLeft:15, marginTop: -15}}>김종석 원장님</Text>
                    </View>
                </View>
                <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold', marginBottom:-3}}>진료기록</Text>
                <View style={{ backgroundColor:'#F5F6FA',padding:20, borderRadius:8, paddingTop:10, paddingBottom:10, marginRight:10}}>
                    <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다!</Text>
                </View>
                <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold', marginBottom:-3, marginTop:15}}>주의사항</Text>
                <View style={{ backgroundColor:'#F5F6FA',padding:20, borderRadius:8, paddingTop:10, paddingBottom:10, marginRight:10}}>
                    <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다!</Text>
                </View>
                
            </View>
          
        </View>
    );
}

export default Diagnosis;