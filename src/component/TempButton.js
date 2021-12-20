import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

export default class TempButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    onPress: () => null,
  }
  
  render(){
    return (
      <TouchableOpacity style={[ styles.button, {backgroundColor: this.props.title === '히스토리' ? '#FFFFFF' : '#6765E9'}]} onPress={this.props.onPress}>
          <Text style={[ styles.title, {color: this.props.title === '히스토리' ? '#6765E9' : this.props.titleColor}]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    marginLeft:0,
    marginRight:7,
    padding:2,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#6765E9',
    // width:328
  },
  title: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Bold',
  },
});