import React from 'react'
import { DataContext } from './DataContext'
import EditPerson from './EditPerson'
import Person from './Person'

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: [],
            editMode: false,
            tempPersonDetails: {}
        }
    }

    handleEdit = (val) => {
        this.setState({ editMode: true, tempPersonDetails: val})
    }

    handleSubmit = (val) => {
        let index = -1
        this.context.userDetails.find((item, ind) => {
            if(item.id == val.id) {
                index = ind
                return true
            }
        })
        this.context.handleUserChange([...this.context.userDetails.slice(0, index), {...this.context.userDetails[index], ...val}, ...this.context.userDetails.slice(index+1)])
        this.setState({ editMode: false })
    }

    render() {
        console.log(this.context)
        return (
            <div>
                <h3>User Details List</h3> 
                {!this.state.editMode && this.context.userDetails.map(item => {
                    return <Person personItem={item} handleEdit={this.handleEdit} />
                })}
                {this.state.editMode && <EditPerson editPerson={this.state.tempPersonDetails} handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
};

UserDetails.contextType = DataContext