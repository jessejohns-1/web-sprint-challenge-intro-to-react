import React from 'react';
import styled from 'styled-components'



const Characters = (props) => {

    const { data } = props

    return (
        <TopDiv>
            {data.map((res) => {
                return (
                    <CharacterCard>
                        <h1> Name:<br></br> {res.name}</h1>
                        <h2>DOB:<br></br> {res.birth_year}</h2>
                        <h2>Gender: {res.gender}</h2>
                        <h2>Height: {res.height}</h2>
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
    background-color: pink;
`


export default Characters
 