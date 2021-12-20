import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native';


export default class CustomButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    onPress: () => null,
  }

  constructor(props){
    super(props);
    this.state = {toggleCheck: props.attr};
  }

  render(){
    const NotTaken = () => {
        return(
            <TouchableOpacity style={[ styles.button, {backgroundColor: '#FFFFFF', borderWidth: 1}]} onPress={() => {this.setState({toggleCheck: true})}}>
                <Text style={[ styles.title, {color: '#6765E9' }]}>복용</Text>
            </TouchableOpacity>
        );
    }

    const Taken = () => {
        return (
            <TouchableOpacity style={[ styles.button, {backgroundColor:'#9BA0BC', borderWidth: 0}]} onPress={() => {this.setState({toggleCheck: false})}}>
                <Text style={[ styles.title, {color: '#FFFFFF'}]}>복용완료</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={{alignItems: 'center'}}>
            {
                !this.state.toggleCheck ? <NotTaken/> : <Taken/>
            }
        </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#6765E9',
    width:100,
  },
  title: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Bold',
  },
});