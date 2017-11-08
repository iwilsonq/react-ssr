import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	render() {
		return (
			<div>
				Here is a big list of users
				{this.renderUsers()}
			</div>
		);
	}
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export { loadData };

export default {
	loadData,
	component: connect(
		state => ({
			users: state.users,
		}),
		{
			fetchUsers,
		}
	)(UserList),
};
