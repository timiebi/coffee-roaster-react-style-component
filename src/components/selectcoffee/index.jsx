import React,{useState, useContext} from 'react';
import styled from 'styled-components';
import arrowicon from '../../resources/plan/desktop/icon-arrow.svg';
// import { creatPlanContext } from '../../context/createplan';
import '../../App.css';



export const SelectCoffee = ()=>{
    // const [create, setCreate] = useContext(creatPlanContext)
    const [active, setActive] = useState(false)

    const click =()=>{
        setActive(!active)
    }


    return(
        <>
           <SELECTCOFFEESECTION>
                <SELECTCOFFEECONTAINER onClick={click} className={active ? "activeClass" : ""} >
                    <H1>How do you drink your coffee</H1>
                    <IMG src={arrowicon} className={active? "arrowup": ""} />
                </SELECTCOFFEECONTAINER>

                {/* change to field set  */}
                {
                    active &&(
                        <SELECTRADIO>
                                <RADIO className='radio' id='6' name='ee' value="me" />
                                <LABEL htmlFor='6' className='label'>
                                    <H2>Capsule</H2>
                                    <P>Compatible with Nespresso systems and similar brewers</P>
                                </LABEL>
                        </SELECTRADIO>
                    )
                }
           </SELECTCOFFEESECTION>
        </>
    )
}
export const SELECTCOFFEESECTION = styled.div`
transition: all .55s ease-in-out;

`

export const SELECTCOFFEECONTAINER = styled.button`
    display: flex;
    border: none;
    justify-content: space-around;
    background: none;
    width: 95%;
    margin: 1em 1em 2em;
    font-size: 1.2rem;
    color: #83888f;
    transition: all .55s ease-in-out;
    &:hover{
        cursor: pointer;
        color: #2C343E;
    }
`

export const H1 = styled.h3`
    font-size: 1.5rem;
    font-family: "Fraunces", serif;
    position: relative;
    width: 70%;
    text-align: left;
`
export const P = styled.p`
text-align: left;
font-size: .8rem;
`

export const IMG = styled.img`
margin: auto .9em;
transition: all .5s ease-in-out;
`

// select coffee

export const SELECTRADIO = styled.div`
margin-bottom: 2em;
transition: all .55s ease-in-out;


      .radio[type=radio]:checked + .label {
        background-color: #0e8784;
        /* margin: 2em; */
        color: #fefcf7;
      }
`


export const RADIO = styled.input.attrs({
    type: "radio",
    
})`
    display: none;
    
`


export const LABEL = styled.label`
    float: left;
    padding: 1.5em 1.5em;
    background-color: #f4f1eb;
    margin: .8em 2em 2em;
    border-radius: 8px;
    transition: all .45s ease-out;
    cursor: cursor;
    width: 85%;

    &:hover{
        background-color: #fdd6ba;
        transition: all .5s linear;
    }

    
`

export const H2 = styled.h2`
    line-height: 2.5em;
    font-family: "Fraunces", serif;
`


