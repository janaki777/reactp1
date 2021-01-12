import axios from 'axios';

const url="https://jsonplaceholder.typicode.com";


//action1
const Useraction=()=>{        
return{
        type:'users',
        payload: axios.get(`${url}/users`).then( (res)=> res.data )
	}
}


//action2
const Postaction=()=>{        
        return{
                type:'posts',
                payload: axios.get(`${url}/posts`).then( (res)=> res.data )
                }
        }

export { Useraction, Postaction }