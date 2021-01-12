import React from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';


//components
import Uxui from './Uxui';
import Display from './Display';

const Production=(props)=> {

    console.log(props);


    return (<>

<BrowserRouter>

        <div className="container-fluid py-5">
            
      
            <div className="row">

                <div className="col-lg-3"> 

                    <ul className="list-group">
                        <li className="list-group-item"> 
                           <Link to={`${props.match.path}/ux-ui`}>UX/UI Designs</Link> 
                        </li>


                        <li className="list-group-item"> 
                        <Link to={`${props.match.path}/static-applications`}>Static Webapplications</Link>  
                        </li>

                        <li className="list-group-item"> 
                        <Link to={`${props.match.path}/singlepage-applications`}>Singlepage Webapplications </Link>
                        </li>
                    </ul>

                 </div>

                <div className="col-lg-9"> 
                
                <Switch>
                    <Route exact path={props.match.path} component={Uxui} />
                    <Route path={`${props.match.path}/:name`} component={Display} />
                 
                   
                </Switch>
                
                 </div>


              


            </div>


        </div>

    </BrowserRouter>
    </>)
}


export default Production