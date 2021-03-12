import './css/contact.css';
import logo from './images/wePost_2.png';

export default function Contact(){
    return (
        <div class="section1">
        <div class="container-fluid">
            <form action="/action_page.php">
                <div class="row">
                    <div class="col-md-6">
                        <h2><img src={logo} style={{height:"25px"}}/>&nbsp; <b> LET'S TALK BUSINESS </b></h2>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput2">Email</label>
                                    <input type="text" class="form-control" id="email" required/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput3">Number</label>
                                    <input type="text" class="form-control" id="no" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput4">Subject</label>
                            <input type="text" class="form-control" id="Subject" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                        <div class="text-center">
                            <a href="" class="btn"><b>SEND</b></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info">
                            <div class="map">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe
                                            width="100%"
                                            height="300"
                                            id="gmap_canvas"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8389486119536!2d72.83164821469853!3d19.114719955721853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf0628a9e1%3A0x655f4077e15252a0!2sCentre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1615098295719!5m2!1sen!2sin"
                                            frameborder="0"
                                            scrolling="no"
                                            marginheight="0"
                                            marginwidth="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="contact row">
                                <div class="con1">
                                    <h3>Address:</h3>
                                    <p>
                                    Gulmohar Cross Road No. 9,Juhu,  <br />
                                    Mumbai - 400 049
Maharashtra (India)
                                    </p>
                                </div>
                                <div class="col-2"> </div>
                                <div class="con1">
                                    <h3>Phone:</h3>
                                    <p>+91-22-26201606/1574</p>
                                </div>
                                </div>
                                <div class="contact row mt-n5">
                                <div class="con1">
                                    <h3>Fax:</h3>
                                    <p> +91-22-26232195/ 26210139</p>
                                </div>
                                <div class="col-3"> </div>
                                <div class="con1">
                                    <h3>Email:</h3>
                                    <div class="row m-0">
                                        <p>info@wepost.com<br/>
                                        sales@wepost.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <center>
    <div className="text-secondary mb-1 mt-3">Copyright &copy; 2021 &mdash; We Post</div>
    </center>
        </div>
  
    </div>
    

    );
}