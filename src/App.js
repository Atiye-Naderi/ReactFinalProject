import React, {useState} from "react";
import {Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Home from './Home'
import Container from '@material-ui/core/Container';
import ContactCards from "./components/contacts/ContactCards";
import {NotFound} from "./NotFound";
import Contacts from "./components/contacts/Contacts";
import Nav from "./components/Nav";
function App() {
    const [userData, setUserData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [userNumber, setUserNumber] = useState(1);
  return (
    <>
      <Container>
        <div className="body" style={{ backgroundColor:'#efdef7'}}>
            <Nav userData={userData} setUserData={setUserData} setPageNumber={setPageNumber}
                 pageNumber={pageNumber} setUserNumber={setUserNumber}
                 userNumber={userNumber} />
            <Switch>
                <Route path='/users/:tab' render={props => <Contacts {...props}
                                                                     userData={userData}
                                                                     setUserData={setUserData}
                                                                     pageNumber={pageNumber}
                                                                     setUserNumber={setUserNumber}
                                                                     userNumber={userNumber}
                                                                     setPageNumber={setPageNumber} />} />
                <Route  path='/users' render={props => <ContactCards {...props} userData={userData}
                                                                     setUserData={setUserData}
                                                                     pageNumber={pageNumber}
                                                                     setUserNumber={setUserNumber}
                                                                     userNumber={userNumber}
                                                                     setPageNumber={setPageNumber}/>} />
                <Route path='/' exact render={props => <Home {...props}/>} />
                <Route component={NotFound}/>
                {/*<Route  component={NotFound}/>*/}
            </Switch>
            {/*<Home/>*/}
        </div>
      </Container>

    </>
  );
}

export default App;
