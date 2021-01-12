import React, { Component } from 'react';

import Axios from 'axios';
class Registration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                name:'',
                email:'',
                location:'',
                course:'',
                phone:''
        }
    
    }

  

//name input textbox collection
forminputHandler=(e)=>
{
    this.setState({ ...this.state, [e.target.name]:e.target.value} )
}


   //Get form data after submit 
   submitHandler=async (event)=> {

    //control page loading after submit Formdata
    event.preventDefault();
   
   await Axios.post(`http://localhost:3001/users`, this.state)
   .then( ()=> this.props.history.push('/users') );

} 

    render() {
        
        const { name, email,location,course,phone }=this.state

        return (<>
            <div className="container pt-5">
                <h3 className="text-center pb-3">USER_REGISTRATION....</h3>

                <form className="w-50 mx-auto" onSubmit={ this.submitHandler }>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="name"
                        value={name} 
                        required 
                        onChange={ this.forminputHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="text" 
                        className="form-control"
                        name="email"
                        value={email} 
                        required 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Location</label>
                        <input 
                        type="text" 
                        name="location"
                        className="form-control"
                        value={location} 
                        required 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>



                    <div className="form-group">
                        <label>Course</label>
                        <input 
                        type="text" 
                        name="course"
                        className="form-control"
                        value={course} 
                        required 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                        type="number" 
                        name="phone"
                        className="form-control"
                        value={phone} 
                        required 
                        onChange={this.forminputHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" />
                        
                  

                    </div>


                </form>


            </div>
        </>)
    }//render


}


export default Registration;