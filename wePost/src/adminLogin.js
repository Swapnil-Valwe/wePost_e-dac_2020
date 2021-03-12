import React from "react";
import './css/login.css';
import logo from "./images/wePost_2.png";
import { Link } from 'react-router-dom';
import { Row, Form } from "react-bootstrap";

export default function Login(){

		return (
			<div>
			<Form id="login" className="col-xs-6">
				<Row className="mt-n3">
				<img className="mt-1" src={logo} style={{height:"40px"}}/> &nbsp; &nbsp; <h2 style={{fontWeight:"bolder"}}><u>Admin Login</u></h2>
				</Row>
				<label className="mt-3">
					Username:
        <input
						name="username"
						type="username"
						placeholder="Enter your username"
						
					/>
				</label>

				<label>
					Password:
		<input
						name="password"
						type="password"
						placeholder="Enter your password"

						/>
					<Link to="/adminForgot" class="float-right">
						Forgot Password?
										</Link>
				</label>


				<label>
					<input
						name="acceptedTerms"
						type="checkbox"
						required />
        I accept the terms of service
      </label>

				<button id="but" type="submit"><b>LOGIN</b></button>
				<div class="mt-4 text-center">
					Don't have an account? <Link to="/adminRegister"><b>Create One</b></Link>
				</div>
				
				<center>
<div className="text-secondary mb-n5 mt-3">Copyright &copy; 2021 &mdash; We Post</div>
</center>
			</Form>
			
			</div>
		);
	}
