import React, { useState  } from 'react';
import postdata from './posts.json';



//variable
let url=1;


const Usestatehooks=()=>{

     //Javascript numeric data
    const id=useState(url);

    //Javascript string data
    const name=useState("kumar");

    //Javascript array_data
    const [languages]=useState(['English','Telugu','Hindi']);

     //Javascript single_object_data
    const [address]=useState({ location:'dilsukhnagar', state:'TS', pincode:500036 });


     //Javascript object_type_array_data
    const [users]=useState([
        {
          "name": "vijaykumar",
          "email": "kumar.m447@gmail.com",
          "location": "INDIA",
          "course": "MERNSTACK",
          "phone": "7896541231",
          "id": 1
        },
        {
          "id": 2,
          "name": "Veeresh",
          "email": "veeresh@gmail.com",
          "location": "USA",
          "course": "PYTHON",
          "phone": 8896541211
        },
        {
          "id": 3,
          "name": "Anitha",
          "email": "anitha@gmail.com",
          "location": "INDIA",
          "course": "UI",
          "phone": 9996541230
        },
        {
          "id": 4,
          "name": "Sidhardh",
          "email": "sidhardh@gmail.com",
          "location": "USA",
          "course": "REACT",
          "phone": 9896541222
        },
        {
          "id": 5,
          "name": "Dhanush",
          "email": "dhanush@gmail.com",
          "location": "INDIA",
          "course": "ANGULAR",
          "phone": 8896541211
        },
        {
          "name": "satheesh",
          "email": "satheesh@gmail.com",
          "location": "INDIA",
          "course": "MERNSTACK",
          "phone": "9874563210",
          "id": 6
        },
        {
          "name": "Raghu",
          "email": "raghu@gmail.com",
          "location": "INDIA",
          "course": "UI",
          "phone": "8879654120",
          "id": 7
        },
        {
          "name": "nihal",
          "email": "nihal@gmail.com",
          "location": "INDIA",
          "course": "FULLSTACK",
          "phone": "7989278424",
          "id": 8
        },
        {
          "name": "sathish",
          "email": "sathish@gmail.com",
          "location": "INDIA",
          "course": "REACT-NODE",
          "phone": "897452136",
          "id": 9
        },
        {
          "name": "janardhanrao",
          "email": "janardhanrao@gmail.com",
          "location": "INDIA",
          "course": "FULLSTACK",
          "phone": "8796541231",
          "id": 10
        },
        {
          "name": "kavya",
          "email": "kavya@gmail.com",
          "location": "INDIA",
          "course": "FULLSTACK",
          "phone": "9988774455",
          "id": 11
        }
      ]);

      //External json data
      const [posts]=useState(postdata);
    

    return (<>
        <div className="container p-5">
            <h3>Usestate Hooks</h3>

            { url }

                <p> State1 is: { id } </p>
                <p> State2 is: { name } </p>
                <p> State3 is:   { languages } </p>
                {
                    languages.map( (res,index)=> <li key={index}>{index}-{ res } </li>)
                }
                
                <br />

                <p> State4 is:</p>
                <ul>
                    <li>{ address.location }</li>
                    <li>{ address.state }</li>
                    <li>{ address.pincode }</li>
                </ul>
              

                <p> State5 is:</p>

                {
                    users.map( (res,index)=> {
                                        return(<ul key={index}>
                                                <li>{ res.id } </li>
                                                <li>{ res.name } </li>
                                                <li>{ res.email } </li>
                                            </ul>)
                            })
            }

<p> State6 is:</p>
<table className="table w-50">

<tbody>
{
    users.map( (res,index)=> {
                        return(<tr key={index}>
                                <td>{ res.id } </td>
                                <td>{ res.name } </td>
                                <td>{ res.email } </td>
                            </tr>)
            })
}

</tbody>

</table>
              

        </div>
    </>)
}


export default Usestatehooks;