import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/wePost_1.png';
import login from './images/login.png';
import { Nav, Navbar, Dropdown} from 'react-bootstrap';


export default function navbar() {

  function MouseOver(event) {
    event.target.style.color = 'darkorange';
    event.target.style.fontSize="120%";
  }


  function MouseOut(event) {
    event.target.style.color = 'lightGreen';
    event.target.style.fontSize="";
  }

  function MouseOver1(event) {
    event.target.style.color = 'red';
    event.target.style.fontSize="120%";
  }


  function MouseOut1(event) {
    event.target.style.color = 'black';
    event.target.style.fontSize="";
  }


  return (
   <div className="navbar-full">
      <Navbar bg="dark" variant="dark" expand="lg" className="col-12" >
        <Navbar.Brand className="justify-content-xs-left ml-5"><Link to="/home"><img src={logo} style={{height:"70px"}} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto col-9 justify-content-lg-center" expand="lg">
            <Nav.Link onMouseOver={MouseOver} onMouseOut={MouseOut} style={{ marginRight: 100, fontWeight: "bold" }}><Link to="/home" style={{ textDecoration: "none", color:"lightGreen"}}>Home</Link></Nav.Link>
            <Nav.Link onMouseOver={MouseOver} onMouseOut={MouseOut} style={{ marginRight: 100, fontWeight: "bold" }}><Link to="/booking" style={{ textDecoration: "none" , color:"lightGreen"}}>Booking</Link></Nav.Link>
            <Nav.Link onMouseOver={MouseOver} onMouseOut={MouseOut} style={{ marginRight: 100, fontWeight: "bold" }}><Link to="/about" style={{ textDecoration: "none", color:"lightGreen" }}>About</Link></Nav.Link>
            <Nav.Link onMouseOver={MouseOver} onMouseOut={MouseOut} style={{ marginRight: 100, fontWeight: "bold" }}><Link to="/contact" style={{ textDecoration: "none", color:"lightGreen" }}>Contact Us</Link> </Nav.Link>
            {/* <Nav.Link onMouseOver={MouseOver} onMouseOut={MouseOut} style={{fontWeight: "bold" }}><Link to="/services" style={{ textDecoration: "none", color:"lightGreen" }}>Services</Link></Nav.Link> */}

          </Nav>
          <Nav className="xs-col-4 justify-content-xs-center" expand="lg">
          <Dropdown className="xs-col-4 justify-content-xs-center mr-5" expand="lg">
  <Dropdown.Toggle variant="warning" style={{ borderRadius: "30px", padding: "10px", width:"150px" }} outline-warning id="dropdown-basic">
    <img src={login} style={{height:"30px"}}/> &nbsp; <b>LOGIN</b>
  </Dropdown.Toggle>

  <Dropdown.Menu className="bg-info mt-3 rounded-top">
    <Dropdown.Item href="#/action-1"><Link to="/adminLogin" style={{textDecoration:"none", color:"black"}} onMouseOver={MouseOver1} onMouseOut={MouseOut1}><b>Admin</b></Link></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><Link to="/employeeLogin" style={{textDecoration:"none", color:"black"}} onMouseOver={MouseOver1} onMouseOut={MouseOut1}><b>Employee</b></Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   </div>   
  );
}





