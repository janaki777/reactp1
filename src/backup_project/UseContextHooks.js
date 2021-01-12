import React,{ useState , useContext } from 'react'

const EmpContext = React.createContext();

//main component
const UseContextHooks=()=> {

        const [emp]=useState({ id:1001, name:'kumar', location:'Hyderabad', salary:987452 });

    return (<>
        <div className="container p-5">
                <h3>useContext Example</h3>

                {emp.id} - {emp.name}- {emp.location}- {emp.salary} <br /><br />

                <EmpContext.Provider value={emp}>
                            <Employee  />
                </EmpContext.Provider>
                

        </div>
    </>)
}


//child component
const Employee=()=> 
{

    let contextdata=useContext(EmpContext);

    const {id,name,location,salary}=contextdata

    return(<>
            <h3>Employee Component</h3>

            {id}-{name}

            <Salary />
           
    </>)
}


//child component
const Salary=()=> 
{

    let contextdata=useContext(EmpContext);

    const {id,name,location,salary}=contextdata

    return(<>
            <h3>Salary Component</h3>

            {id}-{location}-{salary}
           
    </>)
}

export default UseContextHooks