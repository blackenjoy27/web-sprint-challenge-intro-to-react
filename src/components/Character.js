// Write your Character component here
import React from "react";
import Info from "./Info"
import styled from "styled-components"

const CharactersDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
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