import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(NewTodo) {
		this.setState({
			todos: [ ...this.state.todos, NewTodo ]
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

	render() {
		const todos = this.state.todos.map((todo) => {
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
			<div className="TodoList">
				<div className="top">
					<div className="left">
						<h1>Add User</h1>
					</div>
					<div className="right">
						<h1>App > AddUser Page</h1>
					</div>
				</div>
				<NewTodoForm createTodo={this.create} />
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
					</table>
				</div>
			</div>
		);
	}
}
export default TodoList;
