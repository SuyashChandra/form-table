import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { usename: '', name: '', password: '', userType: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid() });
		this.setState({ username: '', name: '', password: '', userType: '' });
	}
	handleClear(evt) {
		evt.preventDefault();
		this.setState({ username: '', name: '', password: '', userType: '' });
	}

	render() {
		let Grey = {
			color: 'lightgrey'
		};
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<div className="table">
					<table>
						<tr>
							<td>
								<input
									required
									id="username"
									name="username"
									type="text"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</td>
							<td>
								<input
									required
									id="name"
									name="name"
									type="text"
									placeholder="Name"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</td>
							<td>
								<input
									id="password"
									name="password"
									type="password"
									placeholder="Password"
									required
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</td>
							<td>
								{/* <label>Please select type of user</label> */}
								<select
									onChange={this.handleChange}
									required
									id="userType"
									name="userType"
									value={this.state.userType}
								>
									<option style={Grey} value="" disabled selected hidden>
										Please Select type of User
									</option>
									<option>Admin</option>
									<option>Non-Admin</option>
								</select>
							</td>
						</tr>
					</table>
					<div className="button">
						<button type="submit">Add</button>
						<button onClick={this.handleClear}>Clear</button>
					</div>
				</div>
			</form>
		);
	}
}

export default NewTodoForm;
