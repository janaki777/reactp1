import React from 'react';

import Uxui from './Uxui';
import Staticwebapps from './Staticwebapps';
import Pagenotfound from './Pagenotfound';


const Display=(props)=> {

switch(props.match.params.name) {

case 'ux-ui':               
            return(<Uxui />); break;

case 'static-applications': 
            return(<Staticwebapps />); break;

default:  
            return(<Pagenotfound />); break;
}

}

export default Display;