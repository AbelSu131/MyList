/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

var React = require('react-native');
var {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} = React;
var DATA = {
	"id": "1",
	"name": "Android Design Support Library 兼容库使用详解",
	"img": "http://a1.jikexueyuan.com/home/201510/13/1c73/561c68d71ce03.jpg",
	"teacher": "大姑爷",
	"add_time": "2015-07-01",
	"url": "http://www.jikexueyuan.com/course/2117.html"
};

var MyList = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>

        		<Text style={styles.title}>
          			{DATA.name}
        		</Text>

        		<Text style={styles.teacher}>
          			{DATA.teacher}
        		</Text>

        		<Text style={styles.time}>
          			{DATA.add_time}
        		</Text>
        
       		</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {
		fontSize: 15,
		textAlign: 'center',
		margin: 10,
	},
	teacher: {
		fontSize: 13,
		textAlign: 'center',
		margin: 10,
	},

	time: {
		fontSize: 13,
		textAlign: 'center',
		margin: 10,
	},


});

AppRegistry.registerComponent('MyList', () => MyList);