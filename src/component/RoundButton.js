import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function RoundButton(props) {
    const navigation = useNavigation();
    const hospital = props.title;
    const myFlag = props.flag;

    if(hospital === '씨젠클리닉') {
      if(myFlag === 'seegene'){
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SeegeneClinick')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SeegeneClinick')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
    }
    else if(hospital === '잠실클리닉'){
      if(myFlag === 'jamsil'){
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('JamsilClinick')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('JamsilClinick')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
    }
    else if(hospital === '방이의원'){
      if(myFlag === 'bang'){
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('BangClinick')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('BangClinick')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
    }
    else if(hospital === '송파클리닉'){
      if(myFlag === 'songpa'){
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SongpaClinick')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SongpaClinick')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{props.title}</Text>
          </TouchableOpacity>
        )
      }
    }
};

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor:'#C1C7DE',
      width:100,
      color: '#7E84A3',
      height:33,
      width:90,
    },
    title: {
      fontSize: 16,
      fontFamily: 'NotoSansKR-Regular',
    },
  });

export default RoundButton;