import React, {useState} from "react";
import { connect } from "react-redux";
import { getData, postData, toggleVillagers } from "../actions/index";
import Smurf from './Smurf'
import axios from 'axios'


const SmurfList = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: Number,
        height: ''
    });
   

    const handleInput = e => {
        setNewSmurf({...newSmurf, [e.target.name]:e.target.value})
        console.log(newSmurf)
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.postData(newSmurf)
        setNewSmurf({
            name: '',
            age: Number,
            height: ''
        })
    }
    return (
        <>
            {!props.isLoading ? (
                <button onClick={props.getData}>Reveal Villagers</button>
            ) : (
                <>
                <button onClick={props.toggleVillagers}>Hide Villagers</button>
                <p>Members of Smurf Village</p>
                {props.smurfs && props.smurfs.map(smurf => 
                    <Smurf key={smurf.id} smurf={smurf}/>)}
                </>
            )}
            
           
            <div>
                <h4>Add Your Smurf</h4>
              <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={newSmurf.name} onChange={handleInput}/>
              <input type="number" name="age" value={newSmurf.age} onChange={handleInput}/>
              <input type="text" name="height" value={newSmurf.height} onChange={handleInput}/>
              <button type="submit">Add Smurf</button>
              </form>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs : state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getData, postData, toggleVillagers})(SmurfList)