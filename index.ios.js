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
	View,
	Image,
	ListView,
} = React;
/*
var DATA = [{
	"id": "1",
	"name": "Android Design Support Library 兼容库使用详解",
	"img": "http://a1.jikexueyuan.com/home/201510/13/1c73/561c68d71ce03.jpg",
	"teacher": "大姑爷",
	"add_time": "2015-07-01",
	"url": "http://www.jikexueyuan.com/course/2117.html"
}, {
	"id": "2",
	"name": "Android Design Support Library 数据绑定库详解",
	"img": "http://a1.jikexueyuan.com/home/201507/03/921b/5595f2d84eb7d.jpg",
	"teacher": "大姑爷",
	"add_time": "2015-07-15",
	"url": "http://www.jikexueyuan.com/course/1521.html"
}, ];
*/

var MyList = React.createClass({

	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows(DATA),
		};
	},

	render: function() {
		return (

			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.item}
				/>

		);
	},
	item: function(course) {
		return (
			<View style={styles.container}>
			<Image source={{uri:course.img}} style={styles.images} />
        		<Text style={styles.title}>
          			{course.name}
        		</Text>
        		<Text style={styles.teacher}>
          			{course.teacher}
        		</Text>
        		<Text style={styles.time}>
          			{course.add_time}
        		</Text>      
       		</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		margin: 5,
		borderWidth: 1,
		borderColor: '#d2d2d2',
	},
	title: {
		fontSize: 15,
		textAlign: 'left',
		color: '#333333',
		marginLeft: 10,
	},
	teacher: {
		fontSize: 13,
		textAlign: 'left',
		color: '#525252',
		marginLeft: 10,
	},

	time: {
		fontSize: 13,
		textAlign: 'left',
		color: '#2d85ca',
		marginLeft: 10,
	},
	images: {

		height: 200,
		margin: 10,
	},


});

AppRegistry.registerComponent('MyList', () => MyList);