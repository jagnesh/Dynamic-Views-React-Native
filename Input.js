import React, { Component } from 'react';
import { TextInput, View, Image } from 'react-native';


class Input extends Component {
	state = { borderColor: '#ddd' };
	onFocus() {
		this.setState({
			borderColor: '#000'
		})
	}

	onBlur(e) {
		this.setState({
			borderColor: '#ddd'
		})
	}

	//const { value, label, placeholder, onChangeText, secureTextEntry } = props;
	render() {
	
		return (
			<View style={[styles.viewStyle, { borderColor: this.state.borderColor }]}>

				<TextInput
					onBlur={(e) => this.onBlur()}
					onFocus={(e) => this.onFocus()}
					autoCapitalize='none'
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={false}
					style={styles.textInputStyle}
					placeholder={this.props.placeholder}
					onChangeText={this.props.onChangeText}
					keyboardType={this.props.keyboardType}
					value={this.props.value}
				/>
				{this.props.error ? <Image source={require('./warning.png')} style={{width:20,height:20, marginRight:5}} /> : null}
			</View>

		);
	}

}


const styles = {
	viewStyle: {
		flexDirection: 'row',
		width: '100%',
		height: 45,
		alignItems: 'center',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#ddd",
		paddingLeft: 5,
		marginTop: 10,
	},
	textStyle: {
		flex: 1,
		color: '#000000',
		paddingLeft: 20,
		fontSize: 18

	},
	textInputStyle: {
		flex: 2,
		fontSize: 18,
		paddingRight: 5,
		paddingLeft: 5,
		lineHeight: 23
	},
};
export default Input;

