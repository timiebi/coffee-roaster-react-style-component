import React,{useState, useContext} from 'react';
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


//  style
import '../../App.css';



export const SelectCoffee = ()=>{
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    // const [plan, setPlan] = useState([CreatePlanProvider])
    

    const click =()=>{
        setActive(!active)
    }
    const click2 =()=>{
        setActive2(!active2)
    }
    const click3 =()=>{
        setActive3(!active3)
    }
    const click4 =()=>{
        setActive4(!active4)
    }
    const click5 =()=>{
        setActive5(!active5)
    }


    // form 
    const submit = e =>{
        e.preventDefault()
    }


    return(
        <FORM onSubmit={submit} >
            {Preference.map(list =>(
                <>
                    <SELECTCOFFEECONTAINER onClick={click} className={active ? "activeClass" : ""} >
                            <H1>{list.preference}</H1>
                            <IMG src={arrowicon} className={active ? "arrowup": ""} />
                    </SELECTCOFFEECONTAINER>
                    <SELECTCOFFEESECTION>
                        {list.preferenceOption.map(options =>(
                            <>
                                {
                                active &&(
                                    <SELECTRADIO>
                                            <RADIO className='radio' id='6' name='ee' value="me" />
                                            <LABEL htmlFor='6' className='label'>
                                                <H2>{options.preferenceHeader}</H2>
                                                <P>{options.preferenceInfo}</P>
                                            </LABEL>
                                    </SELECTRADIO>
                                )
                            }
                            </>
                        ))}
                    </SELECTCOFFEESECTION>
                    
                </>
            ))}
            {Option.map(list =>(
                <>
                    <SELECTCOFFEECONTAINER onClick={click2} className={active2 ? "activeClass" : ""} >
                            <H1>{list.option}</H1>
                            <IMG src={arrowicon} className={active2 ? "arrowup": ""} />
                    </SELECTCOFFEECONTAINER>
                    <SELECTCOFFEESECTION>
                        {list.options.map(options =>(
                            <>
                                {
                                active2 &&(
                                    <SELECTRADIO>
                                            <RADIO className='radio' id='6' name='ee' value="me" />
                                            <LABEL htmlFor='6' className='label'>
                                                <H2>{options.optionheader}</H2>
                                                <P>{options.optionInfo}</P>
                                            </LABEL>
                                    </SELECTRADIO>
                                )
                            }
                            </>
                        ))}
                    </SELECTCOFFEESECTION>
                    
                </>
            ))}
            {Amount.map(list =>(
                <>
                    <SELECTCOFFEECONTAINER onClick={click3} className={active3 ? "activeClass" : ""} >
                            <H1>{list.amount}</H1>
                            <IMG src={arrowicon} className={active3 ? "arrowup": ""} />
                    </SELECTCOFFEECONTAINER>
                    <SELECTCOFFEESECTION>
                        {list.prices.map(options =>(
                            <>
                                {
                                active3 &&(
                                    <SELECTRADIO>
                                            <RADIO className='radio' id='6' name='ee' value="me" />
                                            <LABEL htmlFor='6' className='label'>
                                                <H2>{options.weight}</H2>
                                                <P>{options.content}</P>
                                            </LABEL>
                                    </SELECTRADIO>
                                )
                            }
                            </>
                        ))}
                    </SELECTCOFFEESECTION>
                    
                </>
            ))}
            {How.map(list =>(
                <>
                    <SELECTCOFFEECONTAINER onClick={click4} className={active4 ? "activeClass" : ""} >
                            <H1>{list.how}</H1>
                            <IMG src={arrowicon} className={active4 ? "arrowup": ""} />
                    </SELECTCOFFEECONTAINER>
                    <SELECTCOFFEESECTION>
                        {list.type.map(options =>(
                            <>
                                {
                                active4 &&(
                                    <SELECTRADIO>
                                            <RADIO className='radio' id='6' name='ee' value="me" />
                                            <LABEL htmlFor='6' className='label'>
                                                <H2>{options.typeheader}</H2>
                                                <P>{options.typeInfo}</P>
                                            </LABEL>
                                    </SELECTRADIO>
                                )
                            }
                            </>
                        ))}
                    </SELECTCOFFEESECTION>
                    
                </>
            ))}
            {Consistency.map(list =>(
                <>
                    <SELECTCOFFEECONTAINER onClick={click5} className={active5 ? "activeClass" : ""} >
                            <H1>{list.consistency}</H1>
                            <IMG src={arrowicon} className={active5? "arrowup": ""} />
                    </SELECTCOFFEECONTAINER>
                    <SELECTCOFFEESECTION>
                        {list.howOften.map(options =>(
                            <>
                                {
                                active5 &&(
                                    <SELECTRADIO>
                                            <RADIO className='radio' id='6' name='ee' value="me" />
                                            <LABEL htmlFor='6' className='label'>
                                                <H2>{options.howOftenheader}</H2>
                                                <P>{options.howOftenInfo}</P>
                                            </LABEL>
                                    </SELECTRADIO>
                                )
                            }
                            </>
                        ))}
                    </SELECTCOFFEESECTION>
                    
                </>
            ))}
        </FORM>
    )
}



export const FORM = styled.form`
    
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


