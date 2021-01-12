import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowboarding, faPollH } from '@fortawesome/free-solid-svg-icons'

const colors={ backgroundColor:'#12151c' }

const Services=() =>{
    return (<>

        <div className="container-fluid" style={colors}>
      <div className="container p-5 text-center">
       
        <h1 className="pt-2 pb-5 text-white">SERVICES</h1>

        <div className="row">


  <div className="col-lg-4">
    <div className="card text-center text-white p-3 " style={colors}>
    <p><FontAwesomeIcon className="text-success text-weight-bold" size="2x"  icon={faSnowboarding} /></p>
    <div className="card-body">
      <h3 className="py-3"> <Link to={'/services/ux-ui'}>UX/UI DESIGN</Link></h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div className="col-lg-4">
    <div className="card text-center text-white p-3" style={colors}> 
     <p> <FontAwesomeIcon className="text-success text-weight-bold" size="2x" icon={faPollH} /></p>
    <div className="card-body">
      <h3 className="py-3">MARKETING</h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div className="col-lg-4">
    <div className="card text-center text-white p-3" style={colors}>
    <p><FontAwesomeIcon className="text-success text-weight-bold" size="2x"  icon={faSnowboarding} /></p>
    <div className="card-body">
      <h3 className="py-3">BRANDING</h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>
        </div>

      </div>
    </div>



    </>)
}


export default Services;