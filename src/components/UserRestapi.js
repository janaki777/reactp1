import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faStreetView , faEdit } from '@fortawesome/free-solid-svg-icons';


//URL
const url='http://localhost:3001/users';

const UserRestapi= ()=> {
    
     const [userdata,setUserdata]=useState([]);


//Fetch APIDATA to loadinto Component..
const loadapidata=async ()=>
{
    await axios.get(url).then( (res)=> setUserdata(res.data) );
}

  
//deleteUserdata
const deleteUserdata=async (id)=>
{
    
    if( window.confirm(`Do you delete ${id-1} Data now?`) )
    {
        await axios.delete(`${url}/${id}`); 

        loadapidata();
        
    }

}

//HTTP_RESTAPI_CALLS
useEffect( ()=>
{
    loadapidata()

},[])


        return (<>
            <div className="container py-2">
                    <h3 className="text-center py-2"> REACT_HOOKS_CRUD_OPERATIONS </h3>        
                   
                   
                    <table className="table table-bordered table-striped table-light">

                        <thead className="thead-dark">
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
                        userdata.map( (result, index)=>{ 
                            return(<tr key={index}>
                                    <td>{ index+1 } </td>
                                    <td>{ result.name} </td>
                                    <td>{ result.email} </td>
                                    <td>{ result.location} </td>
                                    <td> 
                                        <Link to={`/users/view/${result.id}`} className="btn btn-primary">
                                            <FontAwesomeIcon icon={ faStreetView } />
                                        </Link> 
                                    </td>

                                    <td> 
                                        <Link to={`/users/edit/${result.id}`} className="btn btn-info">
                                        <FontAwesomeIcon icon={ faEdit } />
                                        </Link> 
                                    </td>

                                    <td> 
                                        <button onClick={ ()=>deleteUserdata(result.id) } className="btn btn-danger">
                                        <FontAwesomeIcon icon={ faTrashAlt } />
                                            </button> 
                                    </td>
                                    
                                </tr>)
                        })
                    }
                        </tbody>
                    </table>


            </div>
        </>)


 
   
}

export default UserRestapi;