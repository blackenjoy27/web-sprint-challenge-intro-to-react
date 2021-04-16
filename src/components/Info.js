import React from "react";
import styled ,{keyframes} from "styled-components";


const kf = keyframes`
    100%{
        opacity:1;
    }
`
const BasicInfoDiv = styled.div`
    
    display:flex;
    
    h2{

        width:75%;
    }
    button{
        width:13%;
        height:2rem;
        margin:auto;
        border-radius:0px;
        &:hover{
            border-radius:20px 0px 20px 0px;
            transition: all 1.5s ease-in-out;
        }
        transition: all 1s ease-in-out;
    }
`
const InfoDiv = styled.div`
    padding-left:2rem;
    opacity:0;
    border:solid 1px ${pr=> pr.theme.borderColor};
    border-radius:5px;
    margin: 1rem auto;
    background-image: url("https://wallpapercave.com/wp/6mYMKGh.jpg");
    background-repeat:no-repeat;
    background-size: cover;

    &:hover{
        border-width:2px;
    }
    animation: ${kf} 3s ease-in-out forwards;

`
const Info = (prop)=>{
    const {character,detail,showDetail} = prop;

    return(
        <InfoDiv>
            <BasicInfoDiv>
                <h2>{character.name}</h2>
                <button onClick={()=>showDetail(character)}>{character.birth_year}</button>
            </BasicInfoDiv>
            
            {
                detail === character &&
                <div>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Height:{character.height}</h3>
                    <h3>Mass:{character.mass}</h3>
                    <h3>Eye Color:{character.eye_color}</h3>
                    <h3>Hair Color:{character.hair_color}</h3>
                    <h3>Skin Color:{character.skin_color}</h3>
                </div>
            }
        </InfoDiv>
    )
}
export default Info;