import React from "react";
import styled from "styled-components"

const BasicInfoDiv = styled.div`
    display:flex;


`

const DetailInfoDiv = styled.div`
    display:flex;
    flex-direction:column;
`
const Info = (prop)=>{
    const {character,detail,showDetail} = prop;

    
    return(
        <div>
            <BasicInfoDiv>
                <h2>{character.name}</h2>
                <button onClick={()=>showDetail(character)}>{character.birth_year}</button>
            </BasicInfoDiv>
            
            {
                detail === character &&
                <DetailInfoDiv>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Height:{character.height}</h3>
                    <h3>Mass:{character.mass}</h3>
                    <h3>Eye Color:{character.eye_color}</h3>
                    <h3>Hair Color:{character.hair_color}</h3>
                    <h3>Skin Color:{character.skin_color}</h3>
                </DetailInfoDiv>
            }
        </div>
    )
}
export default Info;