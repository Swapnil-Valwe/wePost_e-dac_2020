import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Booking from './Booking';
import Navbar from './navbar';
import adminLogin from './adminLogin';
import employeeLogin from './employeeLogin';
import Register from './adminRegister';
import adminForgot from './adminForgot';
import employeeForgot from './employeeForgot';
import about from './about';
import Contact from './contact';
import progress from './progress';
import Home from './home';

export default function App() {
  return (
    <BrowserRouter>
    <div>

        <Navbar/>

        <Switch>
          <Route exact path="/booking" component={Booking} />
          
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/progress" component={progress} />
          <Route exact path="/about" component={about} />
          <Route exact path="/adminforgot" component={adminForgot} />
          <Route exact path="/adminregister" component={Register} />
          <Route exact path="/adminLogin" component={adminLogin} />
          <Route exact path="/employeeLogin" component={employeeLogin} />
          <Route exact path="/employeeForgot" component={employeeForgot} />
        </Switch>
      
    </div>
    </BrowserRouter>
  );
}
