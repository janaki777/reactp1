import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory, useParams } from 'react-router-dom';

let url=`http://localhost:3001/users`;

const Useredit=()=>{

const [users,setUsers]=useState({ name:'',email:'',location:'',course:'',phone:'' })
    
let history=useHistory();   
let {idno}=useParams();  

//name input textbox collection
const forminputHandler=(e)=>
{
    setUsers({ ...users, [e.target.name]:e.target.value} )
}
   

 useEffect( ()=> //HTTP_RESTAPI_CALLS
 {
     axios.get(`${url}/${idno}`).then( (res)=> setUsers(res.data) );
 },[]);


   //Get form data after submit 
    const submitHandler=async (event)=> {

    //control page loading after submit Formdata
    event.preventDefault();
   
   await axios.put(`${url}/${idno}`,users).then( history.push('/users') );

} 

      const { name,email,location,course,phone }=users;


        return (<>
             <div className="container pt-5">
                
                <h3 className="text-center pb-3">EDIT_REGISTRATION....</h3>
                    
                <form className="w-50 mx-auto" onSubmit={ submitHandler }>
                <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="name"
                        value={name} 
                        required 
                        onChange={forminputHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="email"
                        value={email} 
                        required 
                        onChange={forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Location</label>
                        <input 
                        type="text" 
                        name="location"
                        className="form-control"
                        value={location} 
                        required 
                        onChange={forminputHandler.bind(this) } />
                    </div>



                    <div className="form-group">
                        <label>Course</label>
                        <input 
                        type="text" 
                        name="course"
                        className="form-control"
                        value={course} 
                        required 
                        onChange={forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                        type="number" 
                        name="phone"
                        className="form-control"
                        value={phone} 
                        required 
                        onChange={forminputHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" />
                    </div>

                </form>


            </div>
        </>)
   
}

export default Useredit;