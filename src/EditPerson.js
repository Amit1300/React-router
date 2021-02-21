import React from 'react'

export default class EditPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.editPerson.name,
            phone: this.props.editPerson.phone,
            email: this.props.editPerson.email,
            website: this.props.editPerson.website,
            id: this.props.editPerson.id
        }
    }

    handleChange = (evt) => { this.setState({ [evt.target.name] : evt.target.value })}

    render() {
        const { personItem, handleSubmit } = this.props
        return (
            <div>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                <label>Phone: </label>
                <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange}/>
                <label>Email: </label>
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                <label>Website: </label>
                <input type="text" value={this.state.website} name="website" onChange={this.handleChange}/>
                <button onClick={() => { handleSubmit(this.state) }}>Submit</button>
            </div>
        )
    }
};
