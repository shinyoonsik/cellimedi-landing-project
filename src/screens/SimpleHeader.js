import * as React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

function SimpleHeader({title}) {
    return(
        <View style={styles.header}>
            <Text></Text>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:-25, paddingTop:5}}>{title}</Text>
            <Image source={require('../../assets/x.png')} style={{width:22, height: 22, margin:8}}  />
        </View>
    );
}

export default SimpleHeader;

