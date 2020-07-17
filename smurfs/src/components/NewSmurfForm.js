import React, { useContext } from "react";
import { SmurfContext } from "../context/SmurfContext";

const NewSmurfForm = (props) => {
    const {addNewSmurf, newSmurf} = useContext(SmurfContext);
    return (
        <div>
            <input 
                type="text" 
                name="name"
                value={newSmurf.name} 
                onChange={props.onChange} 
                placeholder="Smurf Name"
            />
             <input 
                type="text" 
                name="age"
                value={newSmurf.age} 
                onChange={props.onChange} 
                placeholder="Smurf Age"
            />
             <input 
                type="text" 
                name="height"
                value={newSmurf.height} 
                onChange={props.onChange} 
                placeholder="Smurf Height" 
            />
            <button onClick={addNewSmurf}>Add Smurf</button>
            {/* <button onClick={this.props.clearCompleted}>Clear Completed</button> */}
        </div>
    )
}

export default NewSmurfForm;