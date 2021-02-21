import React, { createContext } from 'react'
import secureaxios from "./config/config"
import {DataContext} from "./DataContext"
import{Link} from "react-router-dom";
export default class Comment extends React.Component {
    constructor(props) {
        super(props)  
        
    }

    
    

    render() {
        return (
            <div>
            <ul>
                {this.context.commentdetails.map(item=>{
                    return <li>{item.name}<Link to={`/comments/${item.id}`}>view more...</Link></li>
                })}

            </ul>
            </div>
        )
    }
}


Comment.contextType=DataContext