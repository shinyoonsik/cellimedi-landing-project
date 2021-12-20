import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
    }
});

function TempeHeader({title}) {
    return(
        <View style={styles.header}>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:18, marginLeft:-65, paddingTop:5}}>{title}</Text>
        </View>
    );
}

export default TempeHeader;

