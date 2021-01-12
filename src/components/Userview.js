import React, { useState,useEffect } from 'react';

import { Link , useParams } from 'react-router-dom';

import axios from 'axios';


let url=`http://localhost:3001/users`;

const Userview=()=> {

        const [userdetails,setuserdetails]=useState('');
    
        const { id, name, email, location, course, phone }= userdetails;

        //Get url parameter value
        let { idno }=useParams();


useEffect( ()=>
{
    axios.get(`${url}/${idno}`).then( (res)=> setuserdetails(res.data) )
})  

    return (<>
        
        <div className="container p-5">

            <h3 className="py-3 text-center">User Selected {idno} Parameter Details.....</h3>    

                <table className="table table-bordered w-50 mx-auto">

                    <tbody>
                        
                        <tr>
                            <th>ID</th> 
                            <td>{ id }</td>
                        </tr>

                        <tr>
                            <th>NAME</th> 
                            <td>{ name }</td>
                        </tr>

                        <tr>
                            <th>EMAIL</th> 
                            <td>{ email }</td>
                        </tr>

                        <tr>
                            <th>LOCATION</th> 
                            <td>
                                { location }
                            </td>
                        </tr>

                        <tr>
                            <th>COURSE</th> 
                            <td>{ course }</td>
                        </tr>

                        <tr>
                            <th>PHNO</th> 
                            <td>{ phone }</td>
                        </tr>

                        <tr>
                            <th colSpan="2" className="text-center">   <Link to={`/users`} className="btn btn-primary">Goback</Link> </th>
                        </tr>

                    </tbody>
                </table>



          

        </div>

    </>)

}


export default Userview;