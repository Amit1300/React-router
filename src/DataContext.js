
import React, { createContext } from 'react'
import secureaxios from "./config/config"

export const DataContext = createContext()

export default class DataContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: [],
            commentdetails:[]
        }
    }

    componentDidMount() {

        secureaxios.get("/users").then(res => res.data)
        .then(data => { this.setState({ userDetails: data })})

        secureaxios.get("/comments").then(res => res.data)
        .then(data => { this.setState({ commentdetails: data })})


    }

    handleUserChange = (val) => { this.setState({ userDetails: val })}

    render() {
        return (
            <DataContext.Provider value={{ commentdetails:this.state.commentdetails,userDetails: this.state.userDetails, handleUserChange: this.handleUserChange }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
};
