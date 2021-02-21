import React, { Component } from 'react'
import secureaxios from "./config/config"
export default class Todolist extends Component {

    constructor(props) {
        super(props)
        this.state = {
        todolist: []
        }
    }

    componentDidMount() {

        secureaxios.get("/todos").then(res => res.data)
        .then(data => { this.setState({ todolist: data })})
    }
    render() {
        return (
            <div>
            {this.state.todolist.map(item=>
            {
                return <h5>{item.title}</h5>
            })}
                
            </div>
        )
    }
}
