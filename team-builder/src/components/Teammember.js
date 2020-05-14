import React from 'react'

export default function Teammember(props) {
    return (
        <div>
            <h2>{props.person.name}</h2>
            <p>{props.person.email}</p>
            <p>{props.person.role}</p>
        </div>
    )
}
