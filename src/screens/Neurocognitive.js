import * as React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import TopNavigation2 from '../component/TopNavigation2';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    case1: {
        flex:1,
    },
    case2: {
        flex:2,
    },
    case3:{
        flex:2,
    },
    elem: {
        padding: 25,
        // paddingLeft: 40
    }
})
function Heart() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.case1}>
                <TopNavigation2 name='neurocognitive'/>
                <View style={[styles.elem, {backgroundColor:'#F5F6FA'}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/neurocognitive.png')} style={{width:30, height:35}} />
                        <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:20, marginLeft:10}}>신경인지</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:6}}>
                        <Image source={require('../../assets/cman.png')} style={{width:70, height:70, marginRight: 12}}/>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000'}}>2021년 6월 21일{'\n'}김종석 원장님</Text>
                    </View>
                    <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다!</Text>
                </View>
            </View>

            <View style={styles.case2}>
                <View style={styles.elem}>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-27}}>국민건강보험 데이터</Text>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:20}}>건강검진결과</Text>
                    <View style={{borderWidth:1, borderColor:'#D7DBEC', borderRadius:8, padding:8, paddingLeft:17, paddingBottom:20, marginBottom:18}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:17, marginBottom:-23}}>신사구체여과율</Text>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>기준값: 남성 11~63 | 여성 8~35{'\n'}최소 기준 값 100~150</Text>
                        <Image source={require('../../assets/bargraph.png')} style={{width:300, height:150}} />
                    </View>
                    <View style={{borderWidth:1, borderColor:'#D7DBEC', borderRadius:8, padding:8, paddingLeft:17, paddingBottom:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:17, marginBottom:-23}}>신사구체여과율</Text>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>기준값: 남성 11~63 | 여성 8~35{'\n'}최소 기준 값 100~150</Text>
                        <Image source={require('../../assets/bargraph.png')} style={{width:300, height:150}} />
                    </View>

                </View>
            </View>


            <View style={styles.case3}>
                <View style={styles.elem}>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-27}}>병원 데이터</Text>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:20}}>건강검진결과</Text>
                    <View style={{flexDirection:'row', alignItems:'center', padding:8,justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10}}>
                        <Image source={require('../../assets/Larrow.png')} style={{width:15, height:20}} />
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>2021.04.21</Text>
                            <Image source={require('../../assets/bar.png')} style={{width:15, height:20, marginLeft:5, marginRight:5}} />
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>11:30</Text>
                        </View>
                        <Image source={require('../../assets/Rarrow.png')} style={{width:19, height:24}} />
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >체중</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >골격근량</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >체지방량</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20, backgroundColor:'#F5F6FA'}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >BMI</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: -5}}>
                            <Image source={require('../../assets/colorBar.png')} style={{width:170, height:40}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/colorBar2.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20, backgroundColor:'#F5F6FA'}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >체지방률</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: -5}}>
                            <Image source={require('../../assets/colorBar.png')} style={{width:170, height:40}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/colorBar2.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                </View>
            </View>
            


        </ScrollView>
    )
}

export default Heart;