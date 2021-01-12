import React, { Fragment, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Registration= ()=> {

const [users,setUsers]=useState({ name:'',email:'',location:'',course:'',phone:'' })

const { name, email,location,course,phone }=users;

let history=useHistory();

//name input textbox collection
const forminputHandler=(e)=>
{
    setUsers({ ...users, [e.target.name]:e.target.value} )
}

//Get form data after submit 
const submitHandler=async (event)=> 
{

    //control page loading after submit Formdata
    event.preventDefault();

   await Axios.post(`http://localhost:3001/users`,users)
   .then(history.push('/users') );

} 

return(<Fragment>
            <div className="container pt-5">
                <h3 className="text-center pb-3">USER_REGISTRATION....</h3>

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

        </Fragment>)

}


export default Registration