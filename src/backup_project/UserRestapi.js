import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Import axios
import axios from 'axios';

//URL
const url='http://localhost:3001/users';


class UserRestapi extends Component {
    
    constructor() 
    {
        super();
        this.state={ 
                userdata:[''] 
        }
    }



//Fetch APIDATA to loadinto Component..
loadapidata=async ()=>
{
    await axios.get(url).then( (res)=> this.setState({ userdata: res.data }) );
}

  
//deleteUserdata

deleteUserdata=async (id)=>
{
    
    if( window.confirm(`Do you delete ${id} Data now?`) )
    {
        await axios.delete(`${url}/${id}`); //http://localhost:3001/users/6

            this.loadapidata();
        
    }




}


    render() {

        return (<>
            <div className="container p-5">
                    <h1 className="text-center py-5"> HTTP_RESTAPI_CALLS USING AXIOS </h1>        
                   
                   
                    <table className="table table-bordered table-dark">

                        <thead className="thead-light">
                            <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>LOCATION</th>
                                    <th colSpan="3">ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                        { 
                        this.state.userdata.map( (result, index)=>{ 
                            return(<tr key={index}>
                                    <td>{ index+1 } </td>
                                    <td>{ result.name} </td>
                                    <td>{ result.email} </td>
                                    <td>{ result.location} </td>
                                    <td> <Link to={`/users/view/${result.id}`} className="btn btn-primary">View</Link> </td>
                                    <td> <Link to={`/users/edit/${result.id}`} className="btn btn-info">Edit</Link> </td>
                                    <td> <button onClick={ ()=>this.deleteUserdata(result.id) } className="btn btn-danger">Delete</button> </td>
                                    
                                </tr>)
                        })
                    }
                        </tbody>
                    </table>


            </div>
        </>)
    }

    //HTTP_RESTAPI_CALLS
    componentDidMount() 
    {
        this.loadapidata();
    }   
    
}

export default UserRestapi;