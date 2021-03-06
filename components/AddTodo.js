import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
	render() {
		return(
			<div>
				<input type='text' ref='input'/>
				<button onClick={ e => this.handleClick(e)}>ADD</button>
			</div>
		)
	}
	handleClick(e) {
		e.preventDefault()
		const node = this.refs.input
		const text = node.value.trim()
		this.props.onAddClick(text)
		node.value = ''
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}