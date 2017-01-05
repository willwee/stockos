/**
* test navigator 
*  willwee 2016-12-19 
*/
'use strict';
import React,{Component,PropTypes } from 'react';
import {Navigator} from 'react-native';
import Welc from  './Welc.js';
const initialRoute ={
	name:'Welc',
	page:Welc,
} ;
export default class App extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderScene({page,name,...props},navigator){
		console.log('render page'+name);
		if(page){
			return React.createElement(page,{
				...props,
				name,
				navigator:navigator
			})
		}
	}

	configureScene(route){
		if(route.sceneConfig){
			return route.sceneConfig;
		}
		return Navigator.SceneConfigs.FloatFromRight;
	}

	 render() {
		return (
			<Navigator 
			initialRoute = {initialRoute}
			configureScene ={this.configureScene.bind(this)}
			renderScene = {this.renderScene.bind(this)} />
		);
	}
}