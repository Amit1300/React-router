import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <div>

            <h4><Link to="/">UserDetails</Link></h4>
            <h4><Link to="/todolist">todolist</Link></h4>
            <h4><Link to="/comments">comments list </Link></h4>
            </div>
        )
    }
}
