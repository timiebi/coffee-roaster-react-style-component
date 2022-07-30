import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ImageStr } from "../util/image";

export const Nav = ({logophoto, togglebtn, Name, logo})=>{

    // usestate to toggle nav btn;
    const [toggle, setToggle] = useState(false)
    const Handclick =()=>{
        if(setToggle(toggle)){
            return setToggle(!toggle)
        }
        if(setToggle(!toggle)){
            return setToggle(toggle)
        }
    }
    return(
        <>
            <NAVCONTAINER>
                <LOGOHAMBURGER>
                    <ImageStr source={logophoto} alt={Name} cl='logo' />
                    <button style={{border: 'none', backgroundColor: '#fff'}} onClick={Handclick} > <ImageStr source={togglebtn} alt={Name} cl='toggltbtn' /></button>
                </LOGOHAMBURGER>
                <NAVCONTENT>
                    {toggle &&(
                        <UL>
                        <Link to='/' className="link">
                            <LI>
                                Home
                            </LI>
                        </Link>
                        <Link to='/' className="link">
                            <LI>
                                About Us
                            </LI>
                        </Link>
                        <Link to='/' className="link">
                            <LI>
                                Create your own plan
                            </LI>
                        </Link>
                    </UL>
                    )}
                    <ULDSKTP>
                        <Link to='/' className="link">
                            <DESKLIST>
                                Home
                            </DESKLIST>
                        </Link>
                        <Link to='/' className="link">
                            <DESKLIST>
                                About Us
                            </DESKLIST>
                        </Link>
                        <Link to='/' className="link">
                            <DESKLIST>
                                Create your own plan
                            </DESKLIST>
                        </Link>
                    </ULDSKTP>
                </NAVCONTENT>
            </NAVCONTAINER>
        </>
    )
}




// nav styles 

export const NAVCONTAINER = styled.div`
/* background: #999494; */

@media(min-width: 773px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #fff;
        position: fixed;
        top: 0;
    }
    
`
// toggle nav list 
export const NAVCONTENT = styled.div`
    height: 100vh;
    top: 5rem;
    right: 0;
    left: 0;
    z-index: 3;
    background-image: linear-gradient(rgb(255,255,255, 1), rgb(255,255,255,0.2));
    /* border: 2px solid red; */
    width: 100%;
    transition: 0.5s ease-in-out;

    @media(min-width: 773px){
       height: fit-content;
       transition: 0.5s ease-in-out;
       width: 30%;
       padding: 1em;
       margin-right: 5em;
       background: #fff;
    }
   
`

export const UL = styled.ul`
    padding: 2.5rem 0;
    width: 90%;
    text-align: center;
    margin: 1em;
    margin-top: 4.5em;
    transition: 0.5s ease-in-out;
    


    .link{
        text-decoration: none;
    }

    @media(min-width: 773px){
        display: none;
    }

`

export const LI = styled.li`
     font-size: 1.5rem;
     padding-bottom : 2em;
     list-style: none;
     color:  #2C343E;
    font-family: "Fraunces", serif;
    width: 100%;
   
`

/* toggle nav btn and logo */
export const LOGOHAMBURGER = styled.div`
    padding: 1.5em;
    display: flex;
    justify-content: space-between;
    transition: 0.5s ease-in-out;
        

         .logo{
            display: block;
            height: 20px;
            position: relative;
            
            &:hover{
                cursor: pointer;
            }

            
            @media(min-width: 773px){
                height: 22px;
            }
         }
         .toggltbtn{
            display: block;
            height: 20px;
            transition: 0.5s ease-in-out;

            &:hover{
                transform: rotate(270deg);
                transition: 0.5s;
                cursor: pointer;
            }

            @media(min-width: 773px){
                display: none;
            }
        }
`


/* desktop nav */
export const ULDSKTP = styled.ul`
    display: none;
    
    
    @media(min-width: 773px){
        display: block;
        display: flex;
        justify-content: space-around;
        transition: 0.5s ease-in-out;
    }

    .link{
        text-decoration: none;
    }
`

export const DESKLIST = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: 0.7rem;
     transition: 0.5s ease-in-out;
     color: #83888f;

`