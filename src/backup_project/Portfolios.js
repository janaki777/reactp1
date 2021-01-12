import React from 'react'
const imgheight={ height:'80%' }

const Portfolios=() =>{
    return (<>
        
        <div className="container-fluid" style={{ backgroundColor:'#475562' }} >
     
      <div className="container p-5 text-center">

        <h1 className="text-white"> PORTFOLIOS</h1> 

        <ul className="nav justify-content-lg-center py-4">

          <li className="nav-item">
            <a href="#" className="nav-link text-white">ALL</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">DEVELOPMENT</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">WEB DESIGN</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">ILLUSTRATION</a>
          </li>

        </ul>


        <div className="row">

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack1.jpg" className="w-100" style={ imgheight } />
          </div>

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack2.jpg" className="w-100" style={ imgheight } />
          </div>

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack3.jpg" className="w-100" style={ imgheight } />
          </div>

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack4.jpg" className="w-100" style={ imgheight } />
          </div>

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack5.jpg" className="w-100" style={ imgheight } />
          </div>

          <div className="col-lg-4">
            <img src="IMAGES/fullstack/fullstack6.jpg" className="w-100" style={ imgheight } />
          </div>
        </div>

      </div>
    </div>
    
    </>)
}


export default Portfolios;