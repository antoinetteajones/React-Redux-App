import React from "react";
import {connect} from "react-redux";
import {getMorty} from "../actions";

const CharacterList = props => {
    const fetchCharacter = e => {
        e.preventDafult();
        props.getCharacter();
    }

    return (
        <>
        <h2>Get Character!</h2>
        <div>
            {props.Character.map(char =>(
                <h3 key={Character.id}>
                name = {Character.name}
                gneder = {Character.gender}
                species = {Character.species}</h3>
            ))}
        </div>
        {props.error && <p>{props.error}</p>}
        <button onClick={fetchCharacter}>Get Character!</button>
        </>
    )
}

const mapStoreToProps = state => ({
    Character: state.Character,
    error: state.error
});

export default connect(mapStoreToProps,{getMorty})(CharacterList);