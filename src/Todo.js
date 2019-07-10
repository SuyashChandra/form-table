import React, { Component } from 'react';                  //Delete the file. Dont need it...Along with the css file
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			name: this.props.name,
			password: this.props.password,
			userType: this.props.userType
		};
	}
	render() {
		return (
			<div className="Todo">
				<tr>
					<td>{this.props.username}</td>
					<td>{this.props.name}</td>
					<td>{this.props.password}</td>
					<td>{this.props.userType}</td>
				</tr>
			</div>
		);
	}
}

export default Todo;
