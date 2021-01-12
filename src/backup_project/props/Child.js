import React from 'react';


const Child=({ id,name,email,phno })=>{

//let { id,name,email }=props;


    return (<>
                
                <div className="container border p-5">
                    <h3>   Regulardata:  CHILD COMPONENT...       </h3>
                    <br />

                    { id} - { name } -  { email } - { phno }
                        
            
                </div>

        </>)
}


export default Child;
