import React from 'react';

//react-router-dom
import { BrowserRouter, Route, Link , Switch , Redirect } from 'react-router-dom';

//Components
import Header from './Header';
import Footer from './Footer';

import UserRestapi from './UserRestapi';
import Useredit from './Useredit';
import Userview from './Userview';
import Registration from './Registration';
import Container from './Container';

const Routings=()=> {

    return (<>
       <BrowserRouter>

            {  /*  NAVBAR   */}

                <Header />

            {  /*  NAVBAR   */}


    

            {  /* MAIN CONTENT   */}
        <Switch>
           <Route exact path="/" component={UserRestapi} />
           <Route exact path="/users" component={UserRestapi} />
           <Route path="/users/view/:idno" component={Userview} />
           <Route path="/users/edit/:idno" component={Useredit} />
           <Route path="/signup" component={Registration} />
           <Route path="/redux-react" component={Container} />
           <Redirect to={`/users`} />

        </Switch>
           {  /* MAIN CONTENT   */}



           {  /*  FOOTER   */}

            <Footer />

           {  /*  FOOTER   */}
        

    </BrowserRouter>
    </>)
}


export default Routings;