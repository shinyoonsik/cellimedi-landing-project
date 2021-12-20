import * as React from 'react';
import { ScrollView,View, Image, Text, StyleSheet } from 'react-native';
import Box from '../component/Box';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body:{
        flex: 1,
        padding:30,
    }
})
const RecentVisitHistory =  () => {
    return (
        <ScrollView style={styles.container}>
           <View style={styles.body}>
                <View style={{marginBottom:15}}>
                    <Box name='진료'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='검사'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='치료'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='진료'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='검사'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='치료'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='진료'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='검사'></Box>
                </View>
                <View style={{marginBottom:15}}>
                    <Box name='치료'></Box>
                </View>
           </View>
        </ScrollView>
    );
}

export default RecentVisitHistory;