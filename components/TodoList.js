import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
	render() {
		console.log(this.props)
		return (
			<ul>
				{this.props.todos.map( todo => {
					return <Todo
						key={todo.id}
						{...todo}
						onClick={() => this.props.onTodoClick(todo.id)}
					/>
				})}
			</ul>
		)
	}
}

TodoList.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}