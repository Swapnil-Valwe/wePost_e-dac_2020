import {Carousel, Image, Alert, Jumbotron, CardDeck, Nav, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Divider} from 'react-md';

import './css/home.css';
import home1 from './images/Home1.jpg';
import home2 from './images/Home2.jpg';
import home3 from './images/Home3.jpg';
import mumbai from "./images/mumbai.jpg";
import chennai from "./images/Chennai.jpg";
import pune from "./images/Pune.jpg";
import banglore from "./images/banglore.jpg";
import kolkata from "./images/Kolkata.jpg";
import goa from "./images/Goa.jpg";
import delhi from "./images/delhi.jpg";
import ahmedabad from "./images/Ahmedabad.jpg";
import logoName from './images/wePost_1.png';

export default function home(){
    return (
      <div>
        <div style={{ opacity: "0.8" }}>
          <Carousel fade>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                style={{ height: "500px" }}
                src={home1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "500px" }}
                src={home2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "500px" }}
                src={home3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row" style={{ height: "200px", marginTop: "-100px" }}>
          <div class="col d-flex align-items-center justify-content-center ">
            <div class="col-10">
              <div
                class="shadow-lg p-3 bg-warning"
                style={{ borderRadius: "20px" }}
              >
                <label> TRACK YOUR SHIPMENT:</label>
                <div class="d-flex flex-row">
                  <input
                    type="text"
                    class="form-control mt-2"
                    name="tracking"
                    placeholder="Enter Your Tracking Id...."
                  />{" "}
                  &nbsp;&nbsp;
                  <button
                    className="mt-2 btn-outline-info"
                    style={{ height: "40px", borderRadius:"5px" }}
                  >
                    <Link
                      to="/progress"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <b>Track</b>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

<div>

<div>
                <Alert variant="success" style={{ textAlign: "center" }}>
                    <Alert.Heading>People's opinions about us</Alert.Heading>
                </Alert>
            </div>

            <div>
                <Jumbotron style={{ marginTop: "30px"}}>
                    <CardDeck style={{ color: "white", marginTop:"-90px" }}>


                        <Card bg="dark" style={{ width: '18rem' }}>
                            <Card.Header style={{ color: "white" }}><h4>👽 @Nutan</h4></Card.Header>
                            <Card.Body>
                                <Card.Title>Just Good</Card.Title>
                                <Card.Text>
                                    Over-all good but could be better. Thanks for your service. It's an awesome experience.
      </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card bg="danger" style={{ width: '18rem' }}>
                            <Card.Header style={{ color: "black" }}><h4>🤖 @Jayant</h4></Card.Header>
                            <Card.Body>
                                <Card.Title>Average</Card.Title>
                                <Card.Text>
                                    The precautionary measures were taken.
      </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg="success" style={{ width: '18rem' }}>
                            <Card.Header style={{ color: "black" }}><h4>👾 @Jignesh</h4></Card.Header>
                            <Card.Body>
                                <Card.Title>Highly Recommended</Card.Title>
                                <Card.Text>
                                    The Delivery executive was friendly and professional. Would surely recommend this to friends.
      </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg="primary" style={{ width: '18rem' }}>
                            <Card.Header style={{ color: "black" }}><h4>💀 @Umesh</h4></Card.Header>
                            <Card.Body>
                                <Card.Title>Happy with Experience</Card.Title>
                                <Card.Text>
                                    On time Delivery. Hassle free booking experience. You guys are great!!
      </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                </Jumbotron>
            </div>

</div>

<Alert variant="warning" style={{ textAlign: "center" }}>
                    <Alert.Heading>Our Network</Alert.Heading>
                </Alert>
        <div
          class="row d-flex justify-content-center align-items-center mt-4 "
          style={{ height: "800px", backgroundColor: "#f5f5f5" }}
        >
          
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={mumbai} fluid id="city"/>
            </p>
            <p class="title">Mumbai</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={pune} fluid id="city"/>
            </p>
            <p class="title">Pune</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={chennai} fluid id="city" />
            </p>
            <p class="title">Chennai</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={delhi} fluid id="city"/>
            </p>
            <p class="title">Delhi</p>
          </div>
          
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={banglore} fluid id="city"/>
            </p>
            <p class="title">Banglore</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={ahmedabad}fluid id="city"/>
            </p>
            <p class="title">Ahmedabad</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={kolkata} fluid id="city"/>
            </p>
            <p class="title">Kolkata</p>
          </div>
          <div className="col-1"> </div>
          <div class="col-2">
            <p>
              <Image src={goa} fluid id="city" />
            </p>
            <p class="title">Goa</p>
          </div>
        </div>
        <footer className="footer">
                    <div className="bg-dark">
                        <Nav className="justify-content-center" expand="lg">
                            <Nav.Item>
                                <Nav.Link>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Privacy Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Anti Discrimination Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Careers</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Divider style={{background:"white", width:"700px"}}/>
                        <img src={logoName} className="mx-auto d-block" style={{width:"100px"}}/>
                        <center>
<div className=" bg-dark text-light p-1">Copyright &copy; 2021 &mdash; We Post</div>
</center>
                    </div>
                </footer>

      </div>
    );
}

