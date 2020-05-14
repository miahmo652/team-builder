import React from 'react'
import Teammember from "./Teammember.js"
export default function Teammembers(props) {

    return (
        <div>
            {props.members.map(member => 
                <Teammember
                person={member}
                />
            )
            }
        </div>
    )
}

/* export default function Teammembers(props) {

    return (
        <div>
            {props.members.map(member => 
            <div>
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
            )}
        </div>
    )
} */