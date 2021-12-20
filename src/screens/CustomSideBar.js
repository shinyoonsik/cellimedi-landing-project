import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
//   Linking,
} from 'react-native';

const CustomSidebarMenu = (props) => {

    const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1, borderColor:"white", borderBottomColor: "#D7DBEC", borderWidth:1,  backgroundColor:'#F5F6FA' }}>
                <View style={{margin: 20, paddingTop: 30}}>
                    <Image style={{ height: 50, width: 50, borderRadius: 30, marginBottom:-10 }} source={require('../../assets/seegene.png')}/>
                    <Text style={{fontSize:23, fontFamily:'NotoSansKR-Bold', color:'black'}}>신윤식 님(임직원)</Text>
                </View>
            </View>
            <View style={{flex: 4}}>
                <View style={styles.customItem}>
                        <Image source={require('../../assets/hospital.png')}></Image>
                        <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                            국민건강보험 정보 조회
                        </Text>
                </View>
                <View style={styles.customItem}>
                        <Image source={require('../../assets/hospital.png')}></Image>
                        <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                            병원 목록 조회
                        </Text>
                </View>
                <View style={styles.customItem}>
                    <Image
                        source={{ uri: BASE_PATH + 'star_filled.png' }}
                        style={styles.iconStyle}
                    />
                    <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                       내 정보 관리
                    </Text>
                </View>
                <View style={styles.customItem}>
                    <Image source={require('../../assets/mark.png')}></Image>
                    <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                        Aboout
                    </Text>
                </View>
                <View style={styles.customItem}>
                    <Image source={require('../../assets/mark.png')}></Image>
                    <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                        약관보기
                    </Text>
                </View>
                <View style={styles.customItem}>
                    <Image
                        source={{ uri: BASE_PATH + 'star_filled.png' }}
                        style={styles.iconStyle}
                    />
                    {/* <Image source={require('../../assets/mark.png')}></Image> */}
                    <Text style={{marginLeft:15, fontFamily:'NotoSansKR-Bold'}}>
                        로그아웃
                    </Text>
                </View>
            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    marginBottom: -20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
