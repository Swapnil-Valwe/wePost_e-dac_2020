import React, { Component } from "react";
import './css/login.css';
import logo from "./images/wePost_2.png";
import { Link } from 'react-router-dom';
import { Row, Form } from "react-bootstrap";

export default function Register(){
		return (
			<form id="login" className="col-xs-6" style={{ height: "110vh", marginTop:"30px", marginBottom:"30px" }} noValidate>
				<Row className="mt-n3 mb-3">
				<img className="mt-1" src={logo} style={{height:"40px"}}/> &nbsp; &nbsp; <h2 style={{fontWeight:"bolder"}}><u>Admin Registration</u></h2>
				</Row>
				<label htmlFor="name">
					Name:
        <input
						
						name="text"
						type="text"
						placeholder="Enter your name"
						required />
					
				</label>

				

				<label htmlFor="username">
					Username:
        <input
						
						name="username"
						type="text"
						placeholder="Enter your Username"
						noValidate />
					
				</label>


				<label htmlFor="password">
					Password:
        <input
						
						name="password"
						type="password"
						placeholder="Enter your password"
						noValidate/>
					
				</label>


				<label htmlFor="confirmpassword">
					Confirm Password:
        <input
						
						name="confirmpassword"
						type="password"
						placeholder="Re-Enter your password"
						noValidate/>
					
				</label>
				<label htmlFor="email">
					Email:
        <input
						
						name="email"
						type="email"
						placeholder="Enter your email"
						noValidate />
					
				</label>


				<label htmlFor="mobile">
					Mobile:
        <input
						
						name="mobile"
						type="number"
						placeholder="Enter your mobile"
						noValidate 
						maxlength="10"/>
					
				</label>


				<label>
					<input
						name="acceptedTerms"
						type="checkbox"
						required />
        I accept the terms of service
      </label>

				<button id="but" method="get"><b>REGISTER</b></button>
				<div class="mt-4 text-center">
					Already have an account? <Link to="/adminLogin"><b>Login</b></Link>
				</div>
				<center>
<div className="text-secondary mb-n5 mt-3">Copyright &copy; 2021 &mdash; We Post</div>
</center>
			</form>
		);
	}
