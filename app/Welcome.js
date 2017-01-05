/**
* willwee 2016-12-19 09:59:37
* @desc 欢迎页面
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './Login.js';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      titleText:"default",
      style: 'light'};
      this.onPressTitle = this.onPressTitle.bind(this);
      this.getName = this.getName.bind(this);
  };
  getName(str){
    console.log("dsffffffffffffff");
      return "wwwww"+(Math.random()*9000000|0+1000000);
  }
  onPressTitle() {
      let loginname = this.getName();
      // this.setState({
      //   titleText:"willwee",
      // });
      // <Login loginname={this.state.titleText}/>
      const {navigator} = this.props;
      navigator.push({
        name:"login",
        page:Login,
        loginname:loginname,
      });
  };
  render() {

    let {style} = this.state;

    return (
      <View style={styles.container}>

         <StatusBar
                    backgroundColor={style==='light'?'#rgba(0, 0, 0, 0.2)':'black'}
                    barStyle={style==='light'?"light-content":'default'}
          />
        <Text style={styles.welcome}  onPress={this.onPressTitle}>
          hello+{this.state.titleText}+ ,Welcome to React Native! please login.
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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

