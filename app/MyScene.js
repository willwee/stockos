/*
 2016-12-21 10:26:58  
 @desc a demo for stockos
*/
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,ToolbarAndroid,StyleSheet,StatusBar } from 'react-native';

export default class MyScene extends Component {

  constructor(props) {
    super(props);
  
    this.state = {actionText:"default text.",hidden:false};
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  _onActionSelected(position) {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });
  }
  render() {
  let backPic = require('./icons/flow_sequence.png');

    return (
      <View>
       <ToolbarAndroid
            actions={toolbarActions[0]}
            navIcon={backPic}
            onActionSelected={this._onActionSelected}
            onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
            style={styles.toolbar}
            subtitle={this.state.actionText}
            title="Toolbar" />
       <StatusBar
             hidden={this.state.hidden}
            backgroundColor={'red'}
            barStyle={"light-content"}
        />
        <Text>Current click : { this.state.actionText }</Text>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward} underlayColor='red'>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack} underlayColor='yellow'>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>    
      </View>
    )
  }s
}

  var toolbarActions = [
  {title: 'Create', icon: '../icons/flow_sequence.png', show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: '../icons/flow_sequence.png', show: 'always'},
  ];

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});