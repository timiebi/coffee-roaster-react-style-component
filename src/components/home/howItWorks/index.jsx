import React from 'react';
import styled from 'styled-components';
import { CreatePlanButton } from '../../util/interaction/creaateplanbutton';

export const HowItWorks = ()=>{          // will work on this with an api

    return(
        <>
       
            <HOWITWORKS>
                <WH2>How it Works</WH2>
                <OL>
                    <LII>
                        <H33>
                            Pick your coffee
                        </H33>
                        <P11>
                            Select from our evolving range of artisan coffees.
                            Our beans are ethically sourced and we pay fair prices for them.
                            There are new coffees in all profiles every month for you to try out.
                        </P11>
                    </LII>
                    <LII>
                        <H33>
                            Pick your coffee
                        </H33>
                        <P11>
                            Select from our evolving range of artisan coffees.
                            Our beans are ethically sourced and we pay fair prices for them.
                            There are new coffees in all profiles every month for you to try out.
                        </P11>
                    </LII>
                    <LII>
                        <H33>
                            Pick your coffee
                        </H33>
                        <P11>
                            Select from our evolving range of artisan coffees.
                            Our beans are ethically sourced and we pay fair prices for them.
                            There are new coffees in all profiles every month for you to try out.
                        </P11>
                    </LII>
                </OL>
            </HOWITWORKS>
            <BUTTONSTY>
                <CreatePlanButton/>
            </BUTTONSTY>
        </>
    )
}



// style 
export const HOWITWORKS = styled.div`

        
`


export const WH2 = styled.h2`
    margin-top: 5em;
    text-align: center;
    font-family: "Fraunces", serif;
    color: rgb(131, 136, 143);
    transition: all .5s ease-in-out;

    /* come back to it again */
    @media(min-width: 773px){
        margin-right: 20em;
    }
    @media(min-width: 1020px){
        margin-right: 28em;
    }
    
`


export const OL = styled.ol`
    /* margin-top: 6em; */
    transition: all .5s ease-in-out;
    /* border: 2px solid red; */
    position: relative;
    width: 90%;
    left: 0;
    right: 0;
    margin: auto;
    /* margin-right: 1em; */
    @media(min-width: 773px){
        display: flex;
        align-items: center;
        transition: all .5s ease-in-out;
    }

    @media(min-width: 1020px){
        width: 80%;
        margin-left: 5em;
        transition: all .5s ease-in-out;
    }
    
`


export const LII = styled.li`
    position: relative;
    counter-increment: how-to-counter;
    margin-top: 3.5em;
    transition: all .5s ease-in-out;
    width: 20em;
    /* margin-left: em; */
    list-style: none;
    left: 0;
    right: 0;
    margin: 3.5em auto auto auto;
    /* margin: auto; */


        &::after{
            content: "0" counter(how-to-counter);
            font-family: "Fraunces", serif;
            font-size: 4.5rem;
            line-height: 4.5rem;
            color: #fdd6ba;
            position: absolute;
            top: 0;
            padding-left: 1.5em;
            width: 200px;
            padding-bottom: 3em;
            /* border: 2px solid red; */
        }
    
`

export const H33 = styled.h3`
    font-size: 1.8em;
    transition: all .5s ease-in-out;
    font-family: "Fraunces", serif;
    text-align: center;
    color: #2C343E;
    padding-top: 3.5em;
    transition: all .5s ease-in-out;
    /* border: 2px solid red; */
    
`


export const P11 = styled.p`
    width: 80%;
    font-size: .9em;
    text-align: center;
    margin-left: 2.5em;
    margin-top: 2.3em;
    transition: all .5s ease-in-out;
    color: rgb(131, 136, 143);

    @media(min-width: 1020px){
        width: 65%;
        text-align: left;
        transition: all .5s ease-in-out;
        font-size: 1em;
    }


`

// button style
export const BUTTONSTY = styled.div`
    margin-top: 5em;
    margin-bottom: 5.5em;
    position: relative;
    display: flex;
    justify-content: center;
    @media (min-width: 773px){
         margin-left: 2em;
         width: 270px;
         transition: all .5s ease-in-out;
         justify-content: flex-start;
    }
    @media(min-width: 1020px){
        margin-left: 7em;
        transition: all .5s ease-in-out;
    }
`


