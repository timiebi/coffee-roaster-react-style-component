import React,{useState} from 'react';
import styled from 'styled-components';
import arrowicon from '../../resources/plan/desktop/icon-arrow.svg';
import { 
    Preference, 
    Amount, 
    Option, 
    How, 
    Consistency
 } 
 from '../../context/createplan';
 import { CreateMyPlan } from '../util/interaction/creaateplanbutton';
 import { Modal } from '../modals';


//  style
import '../../App.css';



export const SelectCoffee = ({type})=>{
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    
    //  hooks for the radio values
    const [typeOfCoffeeValue, setTypeOfCoffeeValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [amounts, setAmounts] = useState("");
    const [preferenceOption, setPreferenceOption] = useState("");
    const [howOftenOption, setHowOftenOption] = useState("");


    // hook for the modal and the toggle function
    const [isOpen, setIsOpen] = useState(false);
    const modalOpen = () => setIsOpen(true)
    // functions to set the value selected from the options to summary section 
    const capsuleRadioValue = e => setTypeOfCoffeeValue(e.target.value); 
    const typeOfCoffeeSelected = e => setSelectedOption(e.target.value);
    const prizesSelected = e => setAmounts(e.target.value);
    const preferenceChosen = e => setPreferenceOption(e.target.value);
    const howOftenShouldBeDelivered = e => setHowOftenOption(e.target.value);
    

    const click =()=> setActive(!active);
    const click2 =()=> setActive2(!active2);
    const click3 =()=> setActive3(!active3);
    const click4 =()=> setActive4(!active4);
    const click5 =()=> setActive5(!active5);


    // form 
    const submit = e =>{
        e.preventDefault();
        
    }


    return(
        <>
            <FORM onSubmit={submit} >
                {Preference.map(list =>(
                    <DIV key={list.id}>
                        <SELECTCOFFEECONTAINER onClick={click} className={active ? "activeClass" : ""} >
                                <H1>{list.preference}</H1>
                                <IMG src={arrowicon} className={active ? "arrowup": ""} />
                        </SELECTCOFFEECONTAINER>
                        <SELECTCOFFEESECTION>
                            {list.preferenceOption.map(options =>(
                                <DIV key={options.id}>
                                    {
                                    active &&(
                                        <SELECTRADIO >
                                                <RADIO 
                                                className='radio' 
                                                id={options.id} name='plan' 
                                                value={options.preferenceHeader} 
                                                onClick={capsuleRadioValue}
                                                // onChange={capsuleRadioValue}
                                                
                                                />
                                                <LABEL htmlFor={options.id} className='label'>
                                                    <H2>{options.preferenceHeader}</H2>
                                                    <P>{options.preferenceInfo}</P>
                                                </LABEL>
                                        </SELECTRADIO>
                                    )
                                }
                                </DIV>
                            ))}
                        </SELECTCOFFEESECTION>
                        
                    </DIV>
                ))}
                {Option.map(list =>(
                    <DIV key={list.id}>
                        <SELECTCOFFEECONTAINER onClick={click2} className={active2 ? "activeClass" : ""} >
                                <H1>{list.option}</H1>
                                <IMG src={arrowicon} className={active2 ? "arrowup": ""} />
                        </SELECTCOFFEECONTAINER>
                        <SELECTCOFFEESECTION>
                            {list.options.map(options =>(
                                <DIV key={options.id}>
                                    {
                                    active2 &&(
                                        <SELECTRADIO>
                                                <RADIO 
                                                className='radio' 
                                                id={options.id} name='option' 
                                                value={options.optionheader} 
                                                onClick={typeOfCoffeeSelected}
                                                // onChange={capsuleRadioValue} 
                                                />
                                                <LABEL htmlFor={options.id} className='label'>
                                                    <H2>{options.optionheader}</H2>
                                                    <P>{options.optionInfo}</P>
                                                </LABEL>
                                        </SELECTRADIO>
                                    )
                                }
                                </DIV>
                            ))}
                        </SELECTCOFFEESECTION>
                        
                    </DIV>
                ))}
                {Amount.map(list =>(
                    <DIV key={list.id}>
                        <SELECTCOFFEECONTAINER 
                        onClick={click3} 
                        className={active3 ? "activeClass" : ""} 
                        >
                            <H1>{list.amount}</H1>
                            <IMG 
                            src={arrowicon} 
                            className={active3 ? "arrowup": ""} 
                            />
                        </SELECTCOFFEECONTAINER>
                        <SELECTCOFFEESECTION>
                            {list.prices.map(options =>(
                                <DIV key={options.id}>
                                    {
                                    active3 &&(
                                        <SELECTRADIO>
                                                <RADIO
                                                className='radio' 
                                                id={options.id} 
                                                name='weight' 
                                                value={options.weight} 
                                                onClick={prizesSelected}
                                                />
                                                <LABEL htmlFor={options.id} className='label'>
                                                    <H2>{options.weight}</H2>
                                                    <P>{options.content}</P>
                                                </LABEL>
                                        </SELECTRADIO>
                                    )
                                }
                                </DIV>
                            ))}
                        </SELECTCOFFEESECTION>
                        
                    </DIV>
                ))}
                {How.map(list =>(
                    <DIV key={list.id}>
                        <SELECTCOFFEECONTAINER onClick={click4} className={active4 ? "activeClass" : ""} >
                                <H1>{list.how}</H1>
                                <IMG src={arrowicon} className={active4 ? "arrowup": ""} />
                        </SELECTCOFFEECONTAINER>
                        <SELECTCOFFEESECTION>
                            {list.type.map(options =>(
                                <DIV key={options.id}>
                                    {
                                    active4 &&(
                                        <SELECTRADIO>
                                                <RADIO
                                                className='radio' 
                                                id={options.id} 
                                                name='type' 
                                                value={options.typeheader} 
                                                onClick={preferenceChosen}  
                                                />
                                                <LABEL htmlFor={options.id} className='label'>
                                                    <H2>{options.typeheader}</H2>
                                                    <P>{options.typeInfo}</P>
                                                </LABEL>
                                        </SELECTRADIO>
                                    )
                                }
                                </DIV>
                            ))}
                        </SELECTCOFFEESECTION>
                        
                    </DIV>
                ))}
                {Consistency.map(list =>(
                    <DIV key={list.id}>
                        <SELECTCOFFEECONTAINER onClick={click5} className={active5 ? "activeClass" : ""} >
                                <H1>{list.consistency}</H1>
                                <IMG src={arrowicon} className={active5? "arrowup": ""} />
                        </SELECTCOFFEECONTAINER>
                        <SELECTCOFFEESECTION>
                            {list.howOften.map(options =>(
                                <DIV key={options.id}>
                                    {
                                    active5 &&(
                                        <SELECTRADIO>
                                                <RADIO 
                                                className='radio' 
                                                id={options.id} 
                                                name='often' 
                                                value={options.howOftenheader} 
                                                onClick={howOftenShouldBeDelivered} 
                                                />
                                                <LABEL htmlFor={options.id} className='label'>
                                                    <H2>{options.howOftenheader}</H2>
                                                    <P>{options.howOftenInfo}</P>
                                                </LABEL>
                                        </SELECTRADIO>
                                    )
                                } 
                                </DIV>
                            ))}
                        </SELECTCOFFEESECTION>
                        
                    </DIV>
                ))}
                <ORDERSUMMARY>
                <H3>
                    order summary
                </H3>
                <ORDERSUMMARCONTAINER>
                    <CHOICEP>
                    “I drink my coffee 
                    <INTRO> as</INTRO>
                    <INTROPREFERENCE> {!typeOfCoffeeValue ? "_____": `${typeOfCoffeeValue}`} </INTROPREFERENCE>, 
                        with  a 
                    <BEANTYPE> {!selectedOption ? "_____": `${selectedOption}`} </BEANTYPE> 
                        type of bean. 
                    <AMOUNT> {!amounts ? "_____": `${amounts}`} </AMOUNT>
                    <GRIND> ground ala</GRIND>
                    <OPTION> {!preferenceOption ? "_____": `${preferenceOption}`} </OPTION>, sent to me 
                    <DELIVERY> {!howOftenOption ? "_____": `${howOftenOption}`} </DELIVERY>.”
                    </CHOICEP>
                </ORDERSUMMARCONTAINER>
                </ORDERSUMMARY>
                <BUTTONCONTAINER onClick ={modalOpen} >
                    <CreateMyPlan
                    className="submitplan_button"
                    type="submit"
                    disabled={
                        !typeOfCoffeeValue ||
                        !selectedOption    ||
                        !amounts           ||
                        !preferenceOption  ||
                        !howOftenOption
                    }
                    />
                </BUTTONCONTAINER>
            </FORM>
            {isOpen && (<Modal 
            setIsOpen={setIsOpen}
            typeOfCoffeeValue ={typeOfCoffeeValue}
            selectedOption = {selectedOption}
            amounts = {amounts}
            preferenceOption = {preferenceOption}
            howOftenOption = {howOftenOption}
            />)}
        </>
    )
}


export const FORM = styled.form`
    
`

export const DIV = styled.div`
    
`
export const SELECTCOFFEESECTION = styled.div`
transition: all .55s ease-in-out;
 @media(min-width: 773px){
    display: flex;
    align-items: center;
    margin-right: 1.5em;
 }

`

export const SELECTCOFFEECONTAINER = styled.button`
    display: flex;
    border: none;
    justify-content: space-around;
    background: none;
    width: 100%;
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
    padding: 1.4em 1.5em;
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




// order delivery styles begins

export const ORDERSUMMARY = styled.div`
  margin-bottom: 3.5em;
  padding: 2.5em 1.5em;
  border-radius: 0.625rem;
  background-color: #2C343E;
  margin-left: 2em;
  margin-right: 2em;

  @media (min-width: 48rem) {
    padding: 1.75em 2.75em;
}

@media (min-width: 64rem) {
    padding: 1.75em 4em;
}
`

export const ORDERSUMMARCONTAINER = styled.div` 
  font-family: "Fraunces", serif;
  font-size: 1.5rem;
  line-height: 3rem;
`

export const H3 = styled.h3`
  padding-bottom: 0.5em;
  font-family: "Barlow", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.625rem;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.5;
`
export const CHOICEP = styled.p`
    font-size: 1.2rem;
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


export const BUTTONCONTAINER = styled.div`
.submitplan_button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-bottom: 4em;
    }
`