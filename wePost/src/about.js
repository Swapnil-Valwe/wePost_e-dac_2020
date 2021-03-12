import logoName from './images/wePost_1.png';
import vision from './images/vision.png';
import mission from './images/mission.png';
import avatar1 from './images/avatar_1.jpg';
import avatar2 from './images/avatar_2.jpg';
import './css/about.css';
import {Card, Jumbotron, CardDeck, Alert, Nav} from 'react-bootstrap';
import {Divider} from 'react-md';
export default function about(){

  function MouseOver(event) {
    event.target.style.color = 'darkblue';
    event.target.style.textDecoration="underline";
  }


  function MouseOut(event) {
    event.target.style.color = '';
    event.target.style.textDecoration="";
  }
    return (
      <div>
        <Jumbotron style={{ marginTop: "30px" }}>
          <CardDeck>
            <Card style={{ borderRadius: "30px",backgroundColor: "rgb(243, 237, 232)",border: "2px solid #f0a924"  }}>
              <div className="text-center">
                <img
                  src={logoName}
                  style={{ width: "170px", marginTop: "20px" }}
                  class="img-fluid"
                />
                <br />
                <br />
                <h4 style={{ textDecoration: "underline" }}>Who are we:</h4>
                <br />
                <p
                  style={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                >
                  WE POST is a Logistics provider specializing in customized
                  logistics solutions for our selective clients. We are
                  Headquatered at CDAC, Mumbai. We PROVIDE end-to-end ocean, air
                  and land transportation services along with documentation and
                  information management and deployment. We can handle shipments
                  varying from less than container loads to full container loads
                  as well as overweight and oversize cargo for both ocean, air
                  and over the road freight forwarding.
                </p>
              </div>
            </Card>
            &nbsp; &nbsp;
            <Card style={{ borderRadius: "30px", backgroundColor: "rgb(243, 237, 232)",border: "2px solid #f0a924"  }}>
              <div className="text-center">
                <img
                  src={vision}
                  style={{
                    width: "300px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  class="img-fluid"
                />
                <br />
                <br />
                <h4 style={{ textDecoration: "underline" }}>Our Vision:</h4>
                <br />
                <p
                  style={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                >
                  To become the first choice for logistics globally, by
                  providing highest quality in services and customer support.
                </p>
              </div>
            </Card>
            &nbsp; &nbsp;
            <Card style={{ borderRadius: "30px",backgroundColor: "rgb(243, 237, 232)",border: "2px solid #f0a924" }}>
              <div className="text-center">
                <img src={mission} style={{ width: "300px" }} class="img-fluid"/>
                <br />
                <br />
                <h4 style={{ textDecoration: "underline" }}>Our Mission:</h4>
                <br />
                <p
                  style={{
                    fontWeight: "bold",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                >
                  To support our customers with quality services and assistance
                  in logistics and thus by making our customers successful in
                  their field. To provide our employees a good environment to
                  work with which helps them to grow professionally.
                </p>
              </div>
            </Card>
          </CardDeck>
        </Jumbotron>
        <div>
          <Alert variant="info" style={{ textAlign: "center" }}>
            <Alert.Heading style={{fontSize:""}}>Our Team</Alert.Heading>
          </Alert>
        </div>
        <br /> <br />
        <div class="our-team">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar2} className="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Saurabh Kumar</h4>
            <h6 class="text-center">Project Lead / Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/saurabh-kumar-7a86b113a/" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar2} class="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Swapnil Valwe</h4>
            <h6 class="text-center">Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/swapnil-valwe-840315110/" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar1} class="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Nutan Gharate</h4>
            <h6 class="text-center">Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/nutan-gharate-995678124" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>          
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar1} class="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Pallavi Sakhare</h4>
            <h6 class="text-center">Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/pallavi-sakhare-253701123" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>
        </div>
      </div>

     

      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar2} class="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Jayant Pawar</h4>
            <h6 class="text-center">Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/jayant-pawar-6077bb119/" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>
        </div>
      </div>

      
      <div class="col-sm-6 col-lg-4">
        <div class="box-bg">
          <div class="client-img">
            <img src={avatar2} class="img-fluid"/>
          </div>
          <div class="details">
            <h4 class="text-center">Jignesh Bhirud</h4>
            <h6 class="text-center">Developer</h6>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} href="https://www.linkedin.com/in/jignesh-bhirud-35a38516a/" target="_blank" style={{fontSize:"1.25rem"}}>Contact</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<div>
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
      </div>

    );
}