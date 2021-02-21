import React from 'react'

const style = {
    container : {
        display: 'inline-block',
        background: '#e2d1d1',
        float: 'left',
        margin: '10px'
    },
    marginPadding : {
        padding: '4px'
    }
}

export default class Person extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personItem, handleEdit } = this.props
        return (
            <div style={style.container}>
                <div style={style.marginPadding}>
                    <h4>Name: {personItem.name} </h4>
                    <p>Phone: {personItem.phone} </p>
                    <p>Email: {personItem.email} </p>
                    <p>Website: {personItem.website}</p>
                </div>
                <button onClick={() => handleEdit(personItem) }>Edit</button>
            </div>
        )
    }
};