import React from 'react';
import { Link, withRouter } from 'react-router';
import Alerts from '../error/alerts';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<h2 className='heading'>

					{ this.props.formType === "login" ? "Login" : "Sign Up"}
				</h2>
				<div className='top-divider'></div>
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>

					{this.renderErrors()}
					<div className="login-form">
						<br/>

						<div className='input'>
							<label className='input-label'> Username
							</label>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="input-form" />
						</div>
						<br/>
						<div className='input'>
							<label className='input-label'> Password
							</label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="input-form" />
						</div>
						<br/>

						<Alerts errors={ this.props.errors }/>
						<input className='login-submit' type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
