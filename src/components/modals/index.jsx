import React from "react";
import styled from "styled-components";
import { ModalCheckOutButton } from "../util/interaction/creaateplanbutton";


export const Modal = ({
    setIsOpen, 
    typeOfCoffeeValue, 
    selectedOption, 
    amounts, 
    preferenceOption, 
    howOftenOption
}) =>{
    const closeModal = ()=>{
        setIsOpen(false);
        alert("succesfull");
    }
    return(
        <>
            <MODALBACKGROUND/>
            <MODAL>
                <H3>
                    order summary
                </H3>
                <MODALCONTENT>
                    <CHOICEP>
                        “I drink my coffee 
                        <INTRO> as</INTRO>
                        <INTROPREFERENCE> {typeOfCoffeeValue} </INTROPREFERENCE>, 
                            with  a 
                        <BEANTYPE> {selectedOption} </BEANTYPE> 
                            type of bean. 
                        <AMOUNT> {amounts} </AMOUNT>
                        <GRIND> ground ala</GRIND>
                        <OPTION> {preferenceOption} </OPTION>, sent to me 
                        <DELIVERY> {howOftenOption}</DELIVERY>.”
                        <CONFIRMATIONTEXT>
                            Is this correct? You can proceed to checkout or go back to plan selection if something is off. 
                            Subscription discount codes can also be redeemed at the checkout
                        </CONFIRMATIONTEXT>
                        
                    </CHOICEP>
                    <MODALBUTTON onClick={closeModal}>
                            <ModalCheckOutButton />
                    </MODALBUTTON>
                </MODALCONTENT>
            </MODAL>
        </>
    )
}



export const MODALBACKGROUND = styled.div`
 position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const MODAL = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  width: 85%;
  min-width: 17rem;
  max-width: 33.75rem;
  border-radius: 10px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`

export const MODALCONTENT = styled.div`
  font-family: "Fraunces", serif;
  z-index: 100;
  /* margin: 1.2em; */
  padding: 1.5em 1.5em 1em;
  @media (min-width: 773px) {
    padding: 2.5em 1.5em 1.5em;
}

@media (min-width: 1020px) {
    padding: 3.5em;
}

`


export const H3 = styled.h3`
  padding: 1em;
  font-family: "Barlow", sans-serif;
  font-size: 1.5rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  color: #fff;
  background: #2C343E;
  border-radius: 10px 10px 0 0;
`
export const CHOICEP = styled.p`
    font-size: 1.2rem;
    color: gray;
    padding: 1em;

`

export const DELIVERY = styled.span`
color: #0e8784;
text-transform: capitalize;
`

export const OPTION = styled.span`
color: #0e8784;
text-transform: capitalize;
`

export const GRIND = styled.span`
`

export const AMOUNT = styled.span`
color: #0e8784;
text-transform: capitalize;
`

export const BEANTYPE = styled.span`
color: #0e8784;
text-transform: capitalize;
`
export const INTROPREFERENCE = styled.span`
color: #0e8784;
text-transform: capitalize;
`
export const INTRO = styled.span`
`

export const CONFIRMATIONTEXT = styled.p`
    font-family: "barlow";
    font-size: .9rem;
    position: relative;
    line-height: 1.4em;
    margin-top: 2.5em;
    display: flex;
    justify-content: center;
    color: #2C343E;
`

export const MODALBUTTON = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 2em;
`