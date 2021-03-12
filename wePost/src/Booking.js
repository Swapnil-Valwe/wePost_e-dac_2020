import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import wePost from './images/wePost_1.png';
export default function Booking() {
  return (
<div>
    <img src={wePost} className="mt-3 mx-auto d-block" style={{width:"100px", height:"100px"}}/>
<Form>
  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Sender's pincode" />
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Receiver's pincode" />
    </Col>
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Sender's pickup area" />
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Receiver's drop area" />
    </Col>
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Sender's address" />
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Receiver's address" />
    </Col>
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Sender's Name" />
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Receiver's phone no" />
    </Col>
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="Sender's email" />
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
    <Form.Control placeholder="Sender's phone no" />  
    </Col>
    
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
      <Col className="col-4">
        <Row >
    <Form.Label className="col-6" style={{fontWeight:"bold"}}>Select Travel Type</Form.Label>
      <Form.Control className="col-5" as="select" selectedValue="Select Document Type">
        <option>Air</option>
        <option>Surface</option>
      </Form.Control>
      </Row>  
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
        <Row >
    <Form.Label className="col-6" style={{fontWeight:"bold"}}>Select Document Type</Form.Label>
      <Form.Control className="col-5" as="select" selectedValue="Select Document Type">
        <option>Document</option>
        <option>Parcel</option>
      </Form.Control>
      </Row>  
    </Col>
  </Row>

  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>
      <Col className="col-4">
        <Row >
    <Form.Label className="col-6" style={{fontWeight:"bold"}}>Select Weight (in Kgs)</Form.Label>
      <Form.Control className="col-5" as="select" selectedValue="Select Document Type">
        
        <option>0-5</option>
        <option>6-10</option>
        <option>11-15</option>
        <option>16-20</option>
        <option>21-25</option>
        <option>25-30</option>
        <option>Others</option>
      </Form.Control>
      </Row>  
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
        <Row >
    <Form.Label className="col-6" style={{fontWeight:"bold"}}>Select Service Type</Form.Label>
      <Form.Control className="col-5" as="select" selectedValue="Select Document Type">
        <option>Fast</option>
        <option>Standard</option>
      </Form.Control>
      </Row>  
    </Col>
    
  </Row>


  <Row className="col-12" style={{marginBottom:"50px", marginTop: "50px"}}>
      <Col className="col-1"> </Col>    
    <Col className="col-4">
    <Button id="nocss" variant="outline-dark rounded-pill float-right xs-col-3" ><b>SEND OTP</b></Button>
    </Col>
    <Col className="col-2"> </Col>
    <Col className="col-4">
      <Form.Control placeholder="OTP" />
    </Col>
  </Row>

 
    <Button variant="outline-dark rounded-pill d-block mx-auto mb-5" ><b>SUBMIT</b></Button>



</Form>
<center>
    <div className="text-secondary mb-3 mt-3">Copyright &copy; 2021 &mdash; We Post</div>
    </center>
</div>
  );
}
