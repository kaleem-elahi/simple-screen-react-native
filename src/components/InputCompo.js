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
      <FormLabel labelStyle={{textAlign: 'left'}}>{this.props.label}</FormLabel>
        <FormInput inputStyle={{ ...styles.inputStyle, width: 380}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle: {
      borderBottomColor: 'grey',
      backgroundColor: '#eee',
    },
});
