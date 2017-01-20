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
		// debugger;
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<div key={`error-${i}`}>
						{error}
					</div>
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
					<div className='errors-list'>
						{this.renderErrors()}

					</div>
					<div className="login-form">

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

						<input className='login-submit' type="submit" value="Submit" />
						<div className='alt-link'>Or {this.navLink()}</div>

					</div>
				</form>
			</div>
		);
	}

}
// <Alerts errors={ this.props.errors }/>

export default withRouter(SessionForm);
