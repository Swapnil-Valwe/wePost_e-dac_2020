import React from "react";
import './css/login.css';
import logo from "./images/wePost_2.png";
import { Link } from 'react-router-dom';
import { Row, Form } from "react-bootstrap";

export default function adminForgot(){

		return (
			<Form id="login" className="col-xs-6" style={{ height: "20vh", marginTop:"30px", marginTop:"100px"}}>
				<Row className="mt-n3">
				<img className="mt-1" src={logo} style={{height:"40px"}}/> &nbsp; &nbsp; <h2 style={{fontWeight:"bolder"}}><u>Admin Forgot Password</u></h2>
				</Row>
				<label className="mt-3">
					Email:
        <input
						name="email"
						type="email"
						placeholder="Enter your email"
						
					/>
				</label>
                <div>
                By clicking "Reset Password" we will send a password reset link
                </div>
                <button id="but" className="mt-3" type="submit"><b>Reset Password</b></button>
				<div class="mt-4 text-center">
					<Link to="/adminLogin"><b>Go back to Admin Login</b></Link>
				</div>
				<center>
<div className="text-secondary mb-n5 mt-3">Copyright &copy; 2021 &mdash; We Post</div>
</center>
                </Form>


        );
        }