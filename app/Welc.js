/**
* 2016-12-21 16:13:16 
* @desc 欢迎页动画
*/

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,
	ToolbarAndroid,StyleSheet,Animated,Image,Navigator } from 'react-native';

import SimpleNavigationApp from './SimpleNavigationApp.js';
import HomePage from './comps/HomePage.js';

export default class  Welc extends Component{

  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }


  render(): ReactElement {
  let pic = [
            require('./images/img1.jpg'),
            require('./images/img2.jpg'),
            require('./images/img3.jpg'),
            require('./images/img13.jpg')
   ]
 
   return (
   	  <View>
      <Animated.Image                         // 可选的基本组件类型: Image, Text, View
        source={pic[0]}
        style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
      />
      </View>
    );
  }
  _goToNextScene() {
     this.timer = setTimeout(
      () => { const {navigator} = this.props;
      navigator.push({
        name:"HomePage",
        page:HomePage,
      }); },
      5000
    );
  };
  componentDidMount() {
    this.state.bounceValue.setValue(5.5);     // 设置一个较大的初始值
    Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,                 // 将`bounceValue`值动画化
      {
        toValue: 1.8,                         // 将其值以动画的形式改到一个较小值
        friction: 2,                          // Bouncier spring
      }
    ).start(this._goToNextScene());   // 开始执行动画
    //this.goToNextScene()                              
  }
    componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
}