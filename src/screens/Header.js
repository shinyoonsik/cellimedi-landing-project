import * as React from 'react';
import ImgButton from '../component/ImgButton';
import { StyleSheet, View, Image} from 'react-native';



const styles = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        paddingLeft:10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

function Header() {
    return(
        <View style={styles.header}>
                <ImgButton></ImgButton>
                <Image source={require('../../assets/cellimedi.png')} style={{width:117, height:26, marginLeft:7}}  />
                <Image source={require('../../assets/alarm.png')} style={{width:25, height: 20, margin:8}}  />
        </View>
    );
}

export default Header;

