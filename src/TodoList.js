import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';                                        //Dont need this
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };                      //We are just initializing todos in our state here. 
		this.create = this.create.bind(this);           // We need to bind the create funtion with the this method or it'll create an error. this is not bound lexically in JS. 
		this.remove = this.remove.bind(this);            //Can be removed  
		this.update = this.update.bind(this);		//Can be removed
		this.toggleCompletion = this.toggleCompletion.bind(this);      //Can be removed
	}
	create(NewTodo) {
		this.setState({
			todos: [ ...this.state.todos, NewTodo ]                //We are adding the data from the form to the state. We get the data from NewTodo i.e. NewTodoForm.
		});
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((t) => t.id !== id)
		});
	}
	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}
	{//You can remove the remove update and toggleCompletion functions. They were initially for a different project}

	render() {
		const todos = this.state.todos.map((todo) => {                              //Here we just retieve the data from the state(todos)         
			return (
				// <Todo
				// 	key={todo.id}
				// 	id={todo.id}
				// 	username={todo.username}
				// 	name={todo.name}
				// 	password={todo.password}
				// 	userType={todo.userType}
				// 	completed={todo.completed}
				// />
				<tr>
					<th>{todo.username}</th>                            
					<th>{todo.name}</th>
					<th>{todo.password}</th>
					<th>{todo.userType}</th>
				</tr>                           
			);
		});
		return (
			<div className="TodoList">                                              //Straightforward
				<div className="top">
					<div className="left">
						<h1>Add User</h1>
					</div>
					<div className="right">
						<h1>App > AddUser Page</h1>
					</div>
				</div>
				<NewTodoForm createTodo={this.create} />                         
												////Here we render the NewTodoForm and pass in the method createTodo
				<div className="Table">
					<table className="width">
						<caption>Users Table</caption>
						<thead>
							<tr>
								<th>Username</th>
								<th>Name</th>
								<th>Password</th>   
								<th>TypeofUser</th>
							</tr>
						</thead>
						<tbody>{todos}</tbody>                                           
													//Here We just pass in the todo we created in the render					
			</table>
				</div>
			</div>
		);
	}
}
export default TodoList;
