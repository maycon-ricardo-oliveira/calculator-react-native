import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import InputNumberButton from './InputNumberButton'


const buttons = [
	['C', 'DEL'],
	['7', '8', '9', '÷', '%'],
	['4', '5', '6', 'x', '√'],
	['1', '2', '3', '-', 'log'],
	['0', '.', '=', '+', 'x^y'],
];


export default class Calculator extends Component {

	constructor() {
		super()
		this.initialState = {
			displayValue: '0',
			operator: null,
			firstValue: '',
			secondValue: '',
			nexValue: false
		}

		this.state = this.initialState


	}
	renderButtons() {
		let layouts = buttons.map((buttonRows, index) => {

			let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
				return <InputNumberButton
					value={buttonItems}
					handleOnPress={this.handleInput.bind(this, buttonItems)}
					key={'btn-' + buttonIndex} />
			})

			return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>

		})

		return layouts

	}

	handleInput = (input) => {
		const { displayValue, operator, firstValue, secondValue, nexValue } = this.state

		switch (input) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				this.setState({
					displayValue: (displayValue === '0') ? input : displayValue + input
				})
				if (!nexValue) {
					this.setState({
						firstValue: firstValue + input
					})
				} else {
					this.setState({
						secondValue: secondValue + input
					})
				}
				break

			case '÷':
			case 'x':
			case '+':
			case '-':
				this.setState({
					nexValue: true,
					operator: input,
					displayValue: (operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue) + input
				})
				break
			
			case '%': 
				this.setState({
					nexValue: true,
					operator: input,
					secondValue: '',
					displayValue: (operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue) + input,
					})
				break
				
			case '√': 
				this.setState({
					nexValue: true,
					operator: input,
					displayValue:  input
					})
				break

			case 'log': 
				this.setState({
					operator: input,
					displayValue: input + '(' + firstValue + ')'
					})
				break

			case 'x^y': 
				this.setState({
					nexValue: true,
					operator: '^',
					displayValue: firstValue + '^'
					})
				break

			case '.':
				let dot = displayValue.toString().slice(-1) // get last character

				this.setState({
					displayValue: dot !== '.' ? displayValue + input : displayValue
				})

				if (!nexValue) {

					this.setState({
						firstValue: firstValue + input
					})

				} else {

					this.setState({
						secondValue: secondValue + input
					})

				}
				break

			case '=':
				let formatOperator = (operator == 'x') ? '*' : (operator == '÷') ? '/' : operator
				let result;

				if (operator == '√') {

					result = eval(Math.sqrt(secondValue))

				} else if(operator == '%') {

					if(secondValue == '') {

						result = firstValue / 100

					} else {

						result = firstValue * (secondValue / 100)

					}

				} else if(operator == 'log') {

					result = Math.log10(firstValue)

				} else if(operator =='^') {

					result = Math.pow(firstValue, secondValue)

				} else {

					result = eval(firstValue + formatOperator + secondValue)

				}

				this.setState({
					displayValue: result % 1 === 0 ? result : result.toFixed(2),
					firstValue: result % 1 === 0 ? result : result.toFixed(2),
					secondValue: '',
					operator: null,
					nexValue: false

				})
				break

			case 'C':
				this.setState(this.initialState)
				break

			case 'DEL':
				let string = displayValue.toString()
				let deletedString = string.substr(0, string.length - 1)
				let length = string.length

				this.setState({
					displayValue: length == 1 ? '0' : deletedString,
					firstValue: length == 1 ? '' : deletedString
				})
				break

		}


	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.resultContainer}>
					
					<Text style={styles.resultText}>
						{this.state.displayValue}
					</Text>
				</View>

				<View style={styles.inputContainer}>
					{this.renderButtons()}
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	resultContainer: {
		flex: 2,
		justifyContent: 'center',
		backgroundColor: '#1E1240'
	},
	inputContainer: {
		flex: 8,
		backgroundColor: '#3D0075',
		alignContent: 'center',
		alignItems: 'center',
	},
	resultText: {
		color: '#FFFF',
		fontSize: 80,
		fontWeight: 'bold',
		padding: 20,
		textAlign: 'right',
	},
	inputRow: {
		flex: 8,
		textAlign: 'right',
		flexDirection: 'row'
	},

});