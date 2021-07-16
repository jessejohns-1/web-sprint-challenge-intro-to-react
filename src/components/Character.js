import React from 'react';
import styled from 'styled-components'



const Characters = (props) => {

    const { data } = props

    return (
        <TopDiv>
            {data.map((res) => {
                return (
                    <CharacterCard>
                        <h1>MoflippinName:<br></br> {res.name}</h1>
                        <h2>MoflippinDate Of Birth:<br></br> {res.birth_year}</h2>
                        <h2>MoflippinGender: {res.gender}</h2>
                        <h2>MoflippinHeight: {res.height}</h2>
                        <h2>I hope you like jazz music.</h2>
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
    border: 1px solid black;
    margin: 1vh 3vh;
    border-radius: 300px;
    opacity: .9;
    background-color: purple;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
    transition: all 1.1 ease-in-out;
    background-color: darkblue;
  }

`


export default Characters
 