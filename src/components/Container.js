import React, { Component } from 'react';


//actions
import { Useraction, Postaction } from './../Action/action.js';

//child Components
import Display from './Display';
import Postdisplay from './Postdisplay';

//connect 
import { connect } from 'react-redux';

//bindActionCreator
import {  bindActionCreators } from 'redux'


class Container extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className="container p-5">
                <h3 className="py-2">ACCESS REDUX STATE DATA FROM REACT COMPONENT</h3>
                <Display result={ this.props.userinfo } />
                <Postdisplay result={ this.props.postinfo } />
            </div>
        )
    }

componentDidMount()
{
   this.props.Useraction(); 
   this.props.Postaction(); 
}

}

const mapStateToProps=(state)=>
{
    //console.log(state)
    return { 
        userinfo: state.UserReducer.userdata,
        postinfo: state.PostReducer.postdata
    }
}


const mapDispatchToProps=(dispatch)=>
{
   return bindActionCreators({ Useraction,Postaction }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Container);