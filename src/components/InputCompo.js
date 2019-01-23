import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FormLabel,
  FormInput,
} from 'react-native-elements'

export default class InputCompo extends React.Component {
  render() {
    return (
      <View >
      <FormLabel labelStyle={{textAlign: 'left'}} htmlFor={this.props.label}>{this.props.label}</FormLabel>
        <FormInput style={{ ...styles.inputStyle}} id={this.props.label} placeholder={this.props.placeholder}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle: {
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      width: '90%'
    },
});
