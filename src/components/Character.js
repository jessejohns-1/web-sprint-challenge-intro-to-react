import React from 'react';
import styled from 'styled-components'
import kitty from '../images/download.png'


//creating properties 
const Characters = (props,besty) => {
    //Ayee it's now called data
    const { data } = props

    return (
        <TopDiv>
            {/* heyo map over everything in data*/}
            {data.map((res,idx) => {
                return (//i want this specific data to render to my site 
                    <CharacterCard key={res.id} besty={idx % 2 === 0}>
                        {/* so they need a name */}
                        <h1>MoflippinName:<br></br> {res.name}</h1>
                        {/* gender */}
                        <h2>MoflippinGender: {res.gender}</h2>
                        {/* Can't forget the birth  */}
                        <h2>MoflippinDate Of Birth:<br></br> {res.birth_year}</h2>
                        {/* their height */}
                        <h2>MoflippinHeight: {res.height}</h2>
                        {/* Hopefully you enjoy my site */}
                        <h2>{idx % 2 === 0}</h2>
                    </CharacterCard>
                )
            })}
        </TopDiv>
    )
}

const TopDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
const CharacterCard = styled.div`
    width: 30em;
    border: 1px solid goldenrod;
    margin: 1vh 3vh;
    border-radius: 300px;
    opacity: .9;
    background-color: purple;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
    transition: all 1.1 ease-in-out;
    background-color: white;
    &::before {
    content: "${props => props.besty ? `✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨HELLLLOOOOOOO LOOKS LIKE WE ARE EVEN✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨` : '🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔ODDDD ONE YOU ARE🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔🙂✔'}";
  }
  }

`


export default Characters
 