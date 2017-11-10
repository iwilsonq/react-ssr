import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
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

	head() {
		return (
			<Helmet>
				<title>{`${this.props.users.length} Users App`}</title>
				<meta property="og:title" content="Users App" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				<h3>Here is a big list of users</h3>
				<ul>{this.renderUsers()}</ul>
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
