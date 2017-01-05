/**
* willwee 2016-12-19 09:59:37
* 
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {titleText:this.props.loginname};
    this.onPressBack = this.onPressBack.bind(this);
  };
 onPressBack() {
      // this.setState({
      //   titleText:"willwee",
      // });
      const {navigator} = this.props;
      navigator.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}  onPress={this.onPressBack}>
             {this.state.titleText +',press back'+ '\n\n'}>
          hello ,Welcome to react-native.
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

