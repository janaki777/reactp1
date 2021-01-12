import React from 'react'
import { Link } from 'react-router-dom';

const Pagenotfound=()=>{

    return (<>
        <div className="container p-5 text-center">

                    <h1 className="display-2 text-weight-bold">404-ERROR</h1>
                    <h2>This Pagenot Found</h2>
                    <Link to={`/Home`}   className="btn btn-info">Goto Home Page </Link>

        </div>
    </>)
}

export default Pagenotfound;