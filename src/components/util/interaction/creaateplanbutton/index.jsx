import React from "react";
import styled from "styled-components";

export const CreatePlanButton = ()=>{
    return(
        <>
            <Button>Create your plan</Button>
        </>
    )
}


export const Button = styled.button`
    padding: .75em 1.2em;
    border: none;
    background-color: #0e8784;
    border-radius: 10px;
    text-decoration: none;
    font-family: "Fraunces", serif;
    font-size: 1.2rem;
    color: #fefcf7;
    display: inline-block;
    outline: none;
    transition: all 0.3s ease-in-out;


    &:hover{
        background-color: #66d2cf;
        cursor: pointer;
    }
    &:focus{
        outline: none;
        background-color: #66d2cf;
    }
`