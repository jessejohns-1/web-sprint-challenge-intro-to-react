import React from 'react';
import styled from 'styled-components'



//creating properties 
const Characters = (props) => {
    //Ayee it's now called data
    const { data } = props

    return (
        <TopDiv>
            {/*  so i am maping over the data using my res.id*/}
            {data.map((res,idx) => {
                return (// which allows me to set these settings for each index below 
                                                //odd is my odd even function for my character div
                    <CharacterCard key={res.id} odd={idx % 2 === 0}> 
                        {/* so they need a name */}
                        <h1>MoflippinName:<br></br> {res.name}</h1>
                        {/* gender */}
                        <h2>MoflippinGender: {res.gender}</h2>
                        {/* Can't forget the birth  */}
                        <h2>MoflippinDate Of Birth:<br></br> {res.birth_year}</h2>
                        {/* their height */}
                        <h2>MoflippinHeight: {res.height}centimeters</h2>
                        {/* Hopefully you enjoy my site */}
                        {/* adds emoticon if odd or even on hover*/}
                        <h2>{idx % 2 === 0}</h2>
                    </CharacterCard>
                )
            })}
        </TopDiv>
    )
}
//my styles using styled-components
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
    &::before {//this is where odd gets pulled in to do the odd and even function to display
        content: "${props => props.odd ? `✨HELLLLOOOOOOO WE ARE EVEN✨` : '🙂✔✔ODDDD ONE YOU ARE🙂✔'}";
        color: red;
        font-size: large;
        




  }
  }

`


export default Characters
 