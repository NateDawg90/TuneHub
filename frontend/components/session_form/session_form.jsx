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
		this.renderErrors = this.renderErrors.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentDidMount() {
		if (this.props.errors !== []) {
			this.props.clearErrors();
		}
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
			return <Link to="/signup" onClick={this.props.clearErrors} >sign up instead</Link>;
		} else {
			return <Link to="/login" onClick={this.props.clearErrors} >log in instead</Link>;
		}
	}

	renderErrors() {
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
			<div className="w-70 flex flex-column justify-center mt6 pa3">
				<h2 className='mv2 f3 self-center'>
					{ this.props.formType === "login" ? "Login" : "Sign Up"}
				</h2>
				<div className='mv4 ba bl-0 bt-0 br-0 bw2 b--dotted'></div>
				<form onSubmit={this.handleSubmit}>
					<div className='red mb3 b tc'>
						{this.renderErrors()}
					</div>
					<div className="flex flex-column items-center justify-between">
						<div className='flex items-center'>
							<label className='f4 ma2 db'> Username
							</label>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="f4" />
						</div>
						<div className='flex items-center'>
							<label className='f4 ma2 db'> Password
							</label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="f4" />
						</div>
						<input className='bn br-pill bg-purple mt4 mb3 white pv3 ph5 no-underline dib f4 shadow-hover outline-0' type="submit" value="Submit" />
						<div className='gray'>Or {this.navLink()}</div>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
