/**
* 2016-12-22 11:08:00  willwee
* @desc 首页展示
*/
import React, { Component } from 'react';
import { TouchableHighlight, Navigator, Text, View ,StyleSheet,Image,ToolbarAndroid} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Welc from '../Welc.js'

export default class HomePage extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	onActionSelected(position) {
		  if (position === 0) { // index of 'Settings'
		    showSettings();
		  }
	}

	render() {
		 let BUIcon = [
            require('../icons/Dashboard.png'),
            require('../icons/Dashboard.png'),
            require('../icons/Dashboard.png'),
            require('../icons/Dashboard.png')
          ]
          let toolbarActions = [
			  {title: 'Create', icon: require('../icons/Dashboard.png'), show: 'always'},
			  {title: 'Filter'},
			  {title: 'Settings', icon: require('../icons/Dashboard.png'), show: 'always'},
			];
		return (
			<View>

			<ToolbarAndroid
			          style={styles.toolbar} 
				      logo={require('../icons/Dashboard.png')}
				      title="Stockos"
				      actions={toolbarActions}
				      onActionSelected={this.onActionSelected} />


			<View style={[styles.sbu_red,styles.sbu_view]}>
				<TouchableHighlight underlayColor={'#FA6778'}  style={{flex:1}}>
					<View style ={[styles.sbu_flex,styles.sbu_borderRight]}>
					<View  style ={[styles.sub_con_flex,styles.sub_text]}>
					 <Text style = {[styles.font16]}>酒店</Text>
					 </View>
					 <View style = {[styles.sub_con_flex]}>
					  <Image style ={[styles.sub_icon_img]} source={BUIcon[0]}></Image>
					 </View>
					 </View>
				 </TouchableHighlight>
				 <View style ={[styles.sbu_flex,styles.sbu_borderRight]}>
				   <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
				     <Text style = {[styles.font16]}>海外</Text>
				   </View>
				   <View style={[styles.sub_con_flex,styles.sub_text]}>
				     <Text style = {[styles.font16]}>周边</Text>
				   </View>
				 </View>
				 <View style ={[styles.sbu_flex]}>
				   <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
				     <Text style = {[styles.font16]}>团购.特惠</Text>
				   </View>
				   <View style={[styles.sub_con_flex,styles.sub_text]}>
				     <Text style = {[styles.font16]}>客栈.公寓</Text>
				   </View>
				 </View>
			</View>

			<View style={styles.container1} >
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Welc/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '消息'}
                        title="消息"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        onPress={() => this.setState({ selectedTab: '消息' })}>
                        <Welc />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '联系人'}
                        title="联系人"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../icons/Dashboard.png")} />}
                        onPress={() => this.setState({ selectedTab: '联系人' })}>
                        <Welc />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
			
			</View>
		);
	}
	
}
const styles = StyleSheet.create({
		toolbar: {
	    backgroundColor: '#e9eaed',
	    height: 56,
	    },
		//contains
		container:{
			backgroundColor:'#F2F2F2',
			flex:1
		},
		//slider
		wrapper:{
			height:80,
		},
		slide:{
			height:80,
			resizeMode:Image.resizeMode.contain,
		},
		//sub 
		sbu_view:{
			height:84,
			marginLeft:5,
			marginRight:5,
			borderWidth:1,
			borderRadius:5,
			marginBottom:10,
			flexDirection:'row',
		},
		sbu_red:{
			backgroundColor:'#FA6778',
			borderColor:'#FA6778',
			marginTop:70,
		},
		sbu_blue:{
			backgroundColor:'#3D98FF',
			borderColor:'#3D98FF',
		},
		sbu_green:{
			backgroundColor:'#5EBE00',
			borderColor:'#5EBE00',
		},
		sbu_yellow:{
			backgroundColor:'#FC9720',
			borderColor:'#FC9720',
		},
		sbu_flex:{
			flex:1,
		},
		sbu_borderRight:{
			borderColor:'#fff',
			borderRightWidth:0.5,
		},
		sub_icon_img:{
			height:40,
			width:40,
			resizeMode:Image.resizeMode.contain,
		},
		sub_con_flex:{
			flex:1,
			justifyContent:'center',
			alignItems:'center',
		},
		sub_text:{
			justifyContent:'center',
		},
		font16:{
			fontSize:17,
			color:'#FFF',
			fontWeight:'900',
		},
		sbu_borderBottom:{
			borderBottomWidth:0.5,
			borderBottomColor:'#fff',
		},
		img_view:{
			height:62,
			marginLeft:5,
			marginRight:5,
			flexDirection:'row',
			marginBottom:20,
			backgroundColor:'#fff',
		},
		img_flex:{
			flex:1,
			borderWidth:1,
			borderColor:'#ccc',
		},
		img_wh:{
			height:59,
			borderRightWidth:0,
			resizeMode:Image.resizeMode.contain,
		},
		container1: {
        flex: 1,
        paddingBottom:1
        },
	    tabText: {
	        color: "#000000",
	        fontSize: 13
	    },
	    selectedTabText: {
	        color: "#999999",
	        fontSize: 13
	    },
	    icon: {
	        width: 20,
	        height: 20
	    }
});