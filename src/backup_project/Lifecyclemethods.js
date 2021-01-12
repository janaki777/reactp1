import React, { Component } from 'react';

class Lifecyclemethods extends Component {
    
    constructor() {
        super();
        console.log("************Constructor*************");
        this.state={ name:'kumar' }
    }

    componentDidMount()
    {
        console.log("************componentDidMount***************")
    }
    
  
    render() {
        console.log("************Render*************");

        return (<>
            <div className="container p-5">
                    <h1>COMPONENT LIFE CYCLE METHODS</h1>        
                    { this.state.name }
            </div>
        </>)
    }

    componentWillMount()
    {
        
        console.log("************componentWillMount*************");
    }


  

  


}

export default Lifecyclemethods;