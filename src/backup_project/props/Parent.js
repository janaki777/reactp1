import React from 'react';

//import child Component into Parent
import Child from './Child.js';


const Parent=()=>{


//js_object
let userdata=
{
    id:101,
    name:'kumar',
    email:'kumar@gmail.com',
    phno:7896541230
}



    return (<>
               <div className="container border p-5">

               <h2>     PARENT COMPONENT...       </h2>

               { userdata.id } - { userdata.name } - { userdata.email } - {userdata.phno}


               <hr />
                


                {/*  Child Component Name loading into Parent */}
               
                <Child 
                id={userdata.id}
                name={userdata.name} 
                email={userdata.email}
                phno={userdata.phno}
                 />

                   
               </div>
        </>)


}


export default Parent;

