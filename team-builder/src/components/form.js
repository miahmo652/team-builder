import React, {useState} from "react";


const Teamform = props =>{
    const [title, settitle]=useState(
     {  name: "",
        email: "",
        role: ""
    });
    const changehandler =(event) =>{
        settitle({
            ...title, [event.target.name]: event.target.value
        })
    }
const submithandler = (event) =>{
        event.preventDefault()
        props.setTe(title)
        console.log("submitted")
        settitle( {name: "",
                  email: "",
                  role: ""
        })
    }
    
    return(
        <div className="container">
    <h4>Add a team member</h4>
        <form onSubmit = {submithandler}>
        
            <label htmlFor="name">Name: </label>
            <div className="form-group">
            <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name.."
            value={title.name}
            onChange={changehandler}
            />
            </div>
            <label htmlFor="email">Email: </label>
            <div className="form-group">
            <input 
            type="text"
            className="form-control"
            name="email"
            placeholder="Email.."
            value={title.email}
            onChange={changehandler}
            />
            </div>
            <label htmlFor="role">Role: </label>
            <div className="form-group">
            <input 
            type="text"
            className="form-control"
            name="role"
            placeholder="Role.."
            value={title.role}
            onChange={changehandler}
            />
            </div>
            <button type="submit">Click to submit</button>
        </form>
        </div>
    )
}
export default Teamform;