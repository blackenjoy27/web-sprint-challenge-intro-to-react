import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from "./components/Character"
import './App.css';
import styled from 'styled-components';

const ContentsDiv = styled.div`
display:flex;
flex-direction: column;	
align-items: center;

h1{
  margin-top:2rem;
}

color: ${pr=>pr.theme.fontColor};

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState(null);
  const [detail, setDetail] = useState(null);


  useEffect(()=>{
    axios.get("https://swapi.dev/api/people")
    .then(res=>{
        setPeople(res.data);
    })
    .catch(error=>{
      console.log("Something went wrong");
    })
  },[]);
  
  const showDetail = (character)=>{
    if(character === detail){
      setDetail(null);
    }else{
      setDetail(character);
    }
  }
  return (
    <ContentsDiv>
      <h1 >React Wars</h1>
      {people && <Character characters={people} detail={detail} showDetail={showDetail}/>}
    </ContentsDiv>
  );
}

export default App;
