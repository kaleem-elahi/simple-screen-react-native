import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import InputCompo from './components/InputCompo';
import {
  Button
} from 'react-native-elements';

export default class Screen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
      <View>
      <View style={styles.avatarContainer}>
        <Avatar
          xlarge
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        </View>
        <View style={styles.container}>

            <View style={styles.formContainer}>
              <InputCompo label="Name" />
              <InputCompo label="Office Location" />
              <InputCompo label="Department" />
              <InputCompo label="University" />

            </View>
              <Button
              backgroundColor="blue"

              raised
              icon={{name: 'cached'}}
              title='BUTTON WITH ICON' />
        </View>
      </View>
            <View style={{ height: 100 }} />

        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  keyboardContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 15
  },

});
