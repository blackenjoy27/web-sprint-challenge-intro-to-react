// Write your Character component here
import React from "react";
import Info from "./Info"
import styled from "styled-components";


const CharactersDiv = styled.div`
    width:70%;
`

const Character = (prop)=>{
    const {characters,detail,showDetail} = prop;

    return (
        <CharactersDiv>
            {characters.map(character => {
                return <Info 
                key={character.name}
                character={character}
                detail = {detail}
                showDetail={showDetail}
                />
            })}
        </CharactersDiv>
    )
}


export default Character;