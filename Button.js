import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
	<TouchableOpacity style={styles.viewStyle} onPress={props.onPress}>
		<Text style={styles.textStyle}>{props.children}</Text>
	</TouchableOpacity>

);

const styles = {
	viewStyle: {
		alignSelf: 'stretch',  
		backgroundColor: '#000',
		borderRadius: 1,
		borderWidth: 1,
		borderColor: "#ddd",
		margin: 5,
		paddingRight:10,
		paddingLeft:10,
	},
	textStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#fff',
		paddingTop: 10,
		paddingBottom: 10,
		fontWeight: 'bold'
	}

};

export { Button };
