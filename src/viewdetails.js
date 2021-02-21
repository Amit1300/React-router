import React, { createContext } from 'react'
import secureaxios from "./config/config"
import {DataContext} from "./DataContext"
import{Link} from "react-router-dom";
export default class Viewdetails extends React.Component {
    constructor(props) {
        super(props)
       
        
    }

    render() {
        const {id}=this.props.match.params
        const foundcomments=this.context.commentdetails.find(item=>item.id==id)
        return (
            <div>

            <h5>Name:{foundcomments.name}</h5>
            <h5>email:{foundcomments.email}</h5>
            
            
            </div>
        )
    }
}

Viewdetails.contextType=DataContext