import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import CustomButton from '../component/CustomButton';
import Medicine from './Medicine';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    case1: {
        flex: 2,
        backgroundColor: '#F5F6FA',
    },
    case2: {
        flex: 2,
        backgroundColor: 'white',
    },
    case3: {
        flex: 2,
        backgroundColor: 'white',
    },
    case4: {
        flex: 2,
        backgroundColor: 'white',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
    },
    elem_color:{
        // flex:1,
        margin:20,
        backgroundColor: '#F5F6FA',
    },
    elem_white:{
            // flex:1,
        margin:40,
        marginTop:22,
        backgroundColor: 'white',
    },
    elem_img:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom:15,
    },
    elem_color2:{
        backgroundColor:'#F5F6FA',
        padding:2, 
        margin:1,
        borderRadius:10,
    },
    elem_button:{
        alignItems:'center',
        flexDirection: 'row',
        marginTop:1,
    },
});

const aDayData = {
    'steps' : 10000,
    'distance': 1.4,
    'kcal': 1000
}

// 활동시간 기준(06 ~ 24)
const perHourData = {
    '06': 0,
    '07': 0,
    '08': 0,
    '09': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
}

const aWeekData = {
    'mon': 0,
    'tue': 0,
    'wed': 0,
    'thu': 0,
    'fri': 0,
    'sat': 0,
    'sun': 0,
}
const HealthData = () => {
    
    return(
        <ScrollView style={styles.container}>
                <View style={styles.case2} >
                    <View style={styles.elem_white}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>활동 요약</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>오늘의 걷기</Text>
                        <View style={{alignItems:'center'}}>
                                <Image source={require('../../assets/walk.png')} style={{width:100, height:150}}/>
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:20}}><Text style={{color:'#6765E9'}}>좋은 걸음</Text>으로{'\n'}  걸어보세요!</Text>
                                <Text style={{flex:2, fontFamily:'NotoSansKR-Regular', fontSize:14}}>      아직 좋은 걸음으로 걸어보지 않으셨네요!{'\n'} 1분당 100 걸음으로 연속 10분을 걸으면 건강을{'\n'}                   유지하는데 도움이 됩니다.</Text>

                        </View>
                        <View style={styles.elem_img}>
                            <View style={{alignItems: 'center'}}>
                                <Image source={require('../../assets/footPrint.png')} style={{width:50, height:50}}/>
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>{aDayData.steps}</Text>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>걸음</Text>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image source={require('../../assets/dist.png')} style={{width:50, height:50}}  />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>{aDayData.distance}</Text>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>km</Text>
                            </View>
                            <View style={{alignItems: 'center'}}> 
                                <Image source={require('../../assets/fire.png')} style={{width:50, height:50}}  />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>{aDayData.kcal}</Text>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>KCAL</Text>
                            </View>
                        </View>
                        <View style={[styles.elem_color2, {alignItems: 'center'}]}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:12}}><Text style={{color:'#6765E9'}}>좋은 걸음</Text>  1분당 100 걸음으로 연속 10분 이상 걷는 것! </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.case3} >
                    <View style={styles.elem_white}>
                    <Text style={{flex:0.5, fontFamily:'NotoSansKR-Bold', fontSize:24, marginBottom:-10}}>오늘의 좋은 걸음</Text>
                    <View>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>총<Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, color:'#31313D'}}>0</Text>km중   총<Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, color:'#31313D'}}>0</Text>회/일 </Text>  
                    </View>    
                    <Image source={require('../../assets/chart1.png')} style={{width:325, height:200}}/>
                    </View>
                </View>

                <View style={styles.case4} >
                    <View style={styles.elem_white}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24, marginBottom:-10}}>지난 7일간의 평균 걸음</Text>
                        <View>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080', marginBottom:-30}}>평균<Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, color:'#31313D'}}>0</Text>걸음/일</Text>  
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>(2021년 6월 19일~25일)</Text>  
                        </View>  
                        <Image source={require('../../assets/chart2.png')} style={{width:320, height:200}}/>
                    </View>
                </View>

                <View style={styles.case2} >
                    <View style={styles.elem_white}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>주치의 생활코칭</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>주치의 제안 하루 걸음수</Text>
                        <View style={[styles.elem_color2, {alignItems: 'center', marginTop:0}]}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>오늘 목표의 <Text style={{color:'#6765E9'}}>60%</Text> 를 걸었습니다.</Text>
                        </View>
                        <View style={{alignItems:'center', margin: 15}}>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
                                <Image source={require('../../assets/flag.png')} style={{width:30, height:30}}/>
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}> 목표걸음수 <Text style={{color:'#6765E9'}}>99,999</Text></Text>
                            </View>
                            <Image source={require('../../assets/chart3.png')} style={{width:180, height:155}}/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin:5}}>
                            <Image source={require('../../assets/man.png')} style={{width:65, height:65, marginRight:18}}/>
                            <View>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}><Text style={{fontFamily:'NotoSansKR-Bold'}}>2021년 6월 12일</Text>{'\n'}<Text style={{fontFamily:'NotoSansKR-Bold'}}>김종석 원장님</Text>{'\n'}씨젠클리닉</Text>
                            </View>
                        </View>
                        <View style={[styles.elem_color2, {alignItems: 'center'}]}>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, padding:10, paddingTop:6, paddingBottom:6}}>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다!</Text>
                        </View>
                    </View>
                </View>
                
                
                <View style={{backgroundColor: '#white'}} >
                    <View style={{ margin:40}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>내가 먹는 약</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24, marginBottom:0, width:'100%'}}>복약 알람 및 기록</Text>
                        <View style={[styles.elem_button, {marginBottom:-5, marginTop:-5}]}>
                            <CustomButton title={'알람/약 추가'} onPress={() => alert('알람/약 추가')}/>
                            <CustomButton title={'히스토리'} onPress={() => alert('히스토리')}/>
                        </View>
                        <View style={[styles.elem_color2, {marginTop: 26}]}>
                            <Medicine/>
                        </View>
                    </View>
                </View>
            </ScrollView>
    );
}

export default HealthData;
