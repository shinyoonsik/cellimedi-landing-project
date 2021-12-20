import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function RoundButton2(props) {
    const navigation = useNavigation();
    const health = props.title;
    const myFlag = props.flag;

    if(health === "마음") {
      if(myFlag === 'heart'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Heart')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Heart')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '신경인지'){
      if(myFlag === 'neurocognitive'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Neurocognitive')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Neurocognitive')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '심혈관'){
      if(myFlag === 'cardiovascular'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Cardiovascular')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Cardiovascular')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '근골격'){
      if(myFlag === 'musculoskeletal'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Musculoskeletal')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Musculoskeletal')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '대사'){
      if(myFlag === 'metabolism'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Metabolism')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Metabolism')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '면역'){
      if(myFlag === 'immune'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Immune')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Immune')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    }
    else if(health === '피부 및 체형'){
      if(myFlag === 'skinandbody'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SkinAndBody')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('SkinAndBody')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
      }
    } 
    else if(health === '기타'){
      if(myFlag === 'etc'){
        return(
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#6765E9', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Etc')}>
            <Text style={[ styles.title, {color: '#FFFFFF' }]}>{health}</Text>
          </TouchableOpacity>
        )
      }
      else{
        return (
          <TouchableOpacity style={[ styles.button, {backgroundColor:'#FFFFFF', borderWidth: 1, borderRadius:25}]} onPress={() => navigation.navigate('Etc')}>
              <Text style={[ styles.title, {color: '#7E84A3' }]}>{health}</Text>
          </TouchableOpacity>
        );
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
      width:100,
    },
    title: {
      fontSize: 16,
      fontFamily: 'NotoSansKR-Regular',
    },
  });

export default RoundButton2;