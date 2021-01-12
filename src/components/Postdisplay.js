import React from 'react'

const Postdisplay=(props)=> {

   const finalresult=({result})=>
   {
        if(result)
        {
            return result.map( (res,index)=>{
                                    return(<ul key={index}>
                                            <li>{res.id}.{res.title}</li>
                                            <li>{res.body}</li>
                                    </ul>)
                            })
        }
   }

    return (<>

            {  finalresult(props)   }
        
    </>)
}


export default Postdisplay;