import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { usename: '', name: '', password: '', userType: '' };            //We define a state here with basically the column names
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}
	handleChange(evt) {                                                                   //function so that we can change the state in real-time. As we type in the inputs, the state in react will change
		this.setState({
			[evt.target.name]: evt.target.value                                  //generic method. We use evt.target.name so that we  dont have to make sepater methods for all the differnt input and select fields
 		});
	}
	handleSubmit(evt) {
		evt.preventDefault();							     //No reload on button click
		this.props.createTodo({ ...this.state, id: uuid() });			     //add the data into the state and also a uuid 
		this.setState({ username: '', name: '', password: '', userType: '' });       // Resets the form after submition
	}
	handleClear(evt) {
		evt.preventDefault();                                                      //No reload on button click
		this.setState({ username: '', name: '', password: '', userType: '' });     //Resets the form
	}

	render() {
		let Grey = {                                                                 {/* not possible*/}  
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
