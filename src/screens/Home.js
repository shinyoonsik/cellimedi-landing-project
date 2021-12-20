import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

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
        margin:40,
        marginTop:25,
        backgroundColor: '#F5F6FA',
    },
    elem_white:{
            // flex:1,
        margin:40,
        backgroundColor: 'white',
    },
    elem_img:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    elem_color2:{
        backgroundColor:'#F5F6FA',
        padding:5, 
        margin:2,
        borderRadius:10,
        alignItems:'center'
    }
});


const Home = () => {
    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
                <View style={styles.case1}>
                    <View style={styles.elem_color}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>서비스 이용 안내</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>환영합니다!</Text>
                        <Text style={{flex:2, fontFamily:'NotoSansKR-Regular', fontSize:14, paddingTop:10}}>로그인을 통해 건강 데이터를 연동해보세요.{'\n'}나의 활동을 모니터링하고 병원에서 의사에게{'\n'}직접 라이프 코칭을 받아 보실 수 있습니다.</Text>
                        <View style={{alignItems:'center', padding:15, marginBottom:20}}>
                            <Image source={require('../../assets/doc.png')} style={{width:200, height: 180}}/>
                        </View>
                        {/* <CustomButton title={'로그인'} onPress={() => navigation.reset({routes:[{name: 'HealthData'}]})}/> */}
                        <View style={{alignItems:'center', marginLeft:7}}>
                            <CustomButton title={'로그인'} onPress={() => navigation.navigate('HealthData')}/>
                        </View>
                    </View>
                </View>

                <View style={styles.case2} >
                    <View style={styles.elem_white}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>활동 요약</Text>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>오늘의 걷기</Text>
                        <View style={styles.elem_img}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../assets/footPrint.png')} style={{width:50, height:50}}/>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>0</Text>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>걸음</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../assets/dist.png')} style={{width:50, height:50}}  />
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>0</Text>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>km</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/fire.png')} style={{width:50, height:50}}  />
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, marginTop:-15, marginBottom: -25}}>0</Text>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>KCAL</Text>
                        </View>
                        </View>
                        <View style={styles.elem_color2}>
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
                    <Image source={require('../../assets/table1.png')} style={{width:'100%', height:200}}/>
                    </View>
                </View>

                <View style={styles.case4} >
                    <View style={styles.elem_white}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24, marginBottom:-10}}>지난 7일간의 평균 걸음</Text>
                        <View>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080', marginBottom:-30}}>평균<Text style={{fontFamily:'NotoSansKR-Bold', fontSize:22, color:'#31313D'}}>0</Text>걸음/일</Text>  
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}>(2021년 6월 19일~25일)</Text>  
                        </View>  
                        
                        <View style={styles.elem_img}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>월</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>화</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>수</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>목</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>금</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>토</Text>
                        </View>
                        <View style={{alignItems: 'center'}}> 
                            <Image source={require('../../assets/line.png')} style={{width:10, height:120, marginBottom:10}}/>
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#C1C7DE'}}>일</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor: '#F5F6FA'}} >
                    <View style={{ margin:40}}>
                        <Text style={{flex:0.5, fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>복약 관리 안내</Text>
                        <Text style={{flex:0.5, fontFamily:'NotoSansKR-Bold', fontSize:24}}>약 먹는 시간을 알려드려요!</Text>
                        <Text style={{flex:2, fontFamily:'NotoSansKR-Regular', fontSize:14, marginBottom:-20}}>약 먹는 시간을 자꾸 잊어버리시나요? </Text>
                        <Text style={{flex:2, fontFamily:'NotoSansKR-Regular', fontSize:14, paddingBottom:10}}>복약 알람/기록기능을 사용해보세요. </Text>
                    </View>
                </View>
                
                <View style={{backgroundColor: '#white'}} >
                    <View style={{ margin:40}}>
                        <Text style={{flex:0.5, fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>내가 먹는 약</Text>
                        <Text style={{flex:0.5, fontFamily:'NotoSansKR-Bold', fontSize:24, marginBottom:15, width:'100%'}}>복약 알람 및 기록</Text>
                        <View style={{alignItems:'center', marginLeft:6}}>
                            <CustomButton title={'+  알람/약 추가'} onPress={() => alert('알람/약 추가')}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
    );
}

export default Home;
