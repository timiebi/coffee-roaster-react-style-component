import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState} from "react";
import { ImageStr } from "../util/image";

export const Nav = ({logophoto, togglebtn, Name, logo, xtoggle})=>{

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
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
 
    
    return(
        <>
            <NAVCONTAINER>
                <LOGOHAMBURGER>
                    <ImageStr source={logophoto} alt={Name} cl='logo' />
                    {!toggle? (
                        <button style={{border: 'none', backgroundColor: '#fff'}} onClick={Handclick} >
                            <ImageStr source={togglebtn} alt={Name} cl='toggltbtn' />
                        </button>
                        )
                        :
                        (
                        <button style={{border: 'none', backgroundColor: '#fff'}} onClick={Handclick} >
                            <ImageStr source={xtoggle} alt={Name} cl='toggltbtn' />
                        </button>
                        )
                    }
                </LOGOHAMBURGER>
                {toggle &&(  <NAVCONTENT>
                        <UL>
                        <NavLink to= "/" className="link" onClick={scrollToTop} >
                            <LI onClick={Handclick}>
                                Home
                            </LI>
                        </NavLink>
                        <NavLink to="about" className="link" onClick={scrollToTop} >
                            <LI onClick={Handclick}>
                                About Us
                            </LI>
                        </NavLink>
                        <NavLink to="plan" className="link" onClick={scrollToTop} >
                            <LI onClick={Handclick}>
                                Create your own plan
                            </LI>
                        </NavLink>
                    </UL>
                </NAVCONTENT>  
                    )}
                <NAVCONTENT2>
                    <ULDSKTP>
                        <NavLink to="/" className="link" onClick={scrollToTop} >
                            <DESKLIST>
                                Home
                            </DESKLIST>
                        </NavLink>
                        <NavLink to="about" className="link" onClick={scrollToTop} >
                            <DESKLIST>
                                About Us
                            </DESKLIST>
                        </NavLink>
                        <NavLink to="plan" className="link" onClick={scrollToTop} >
                            <DESKLIST>
                                Create your own plan
                            </DESKLIST>
                        </NavLink>
                    </ULDSKTP>
                </NAVCONTENT2>
            </NAVCONTAINER>
        </>
    )
}




// nav styles 

export const NAVCONTAINER = styled.div`
        width: 100%;
        background-color: #fff;
        position: fixed;
        top: 0;
        padding: .5em;
        z-index: 100;

@media(min-width: 773px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #fff;
        position: fixed;
        z-index: 100;
        top: 0;
        padding: .5em;
        transition: 0.5s ease-in-out;
    }
    
`
// toggle nav list 
export const NAVCONTENT = styled.div`
    position: absolute;
    height: 100vh;
    top: 5rem;
    right: 0;
    left: 0;
    z-index: 3;
    background-image: linear-gradient(rgb(255,255,255, 1), rgb(255,255,255,0.85));
    width: 100%;
    transition: 0.5s ease-in-out;

   
   
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

export const NAVCONTENT2 = styled.div`
     @media(min-width: 773px){
       height: fit-content;
       transition: 0.5s ease-in-out;
       width: 40%;
       padding: 1em;
       margin-right: 1em;
       background: #fff;
       /* border: 2px solid red; */
    }

    @media(max-width: 1020px){
        padding: 0;
        margin-right: 1em;
        /* width: 45%; */
    }
    @media(min-width: 1440px){
        margin-right: 2em;
        width: 30%;
    }
`
export const ULDSKTP = styled.ul`
    display: none;
    
    
    @media(min-width: 773px){
        display: block;
        display: flex;
        justify-content: space-around;
        transition: 0.5s ease-in-out;
    }

    /* tab */
    @media(max-width: 1020px){
        width: 100%;
        /* border: 2px solid red; */
    }

    .link{
        text-decoration: none;

        &::after {
  content: '';
  position: absolute;
  width: 3rem;
  height: 0.1em;
  background-color: #0c0b0b;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

        
&:hover::after,&:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}


&:nth-child(2), &::after {
  transform: translate3d(-100%, 0, 0);
}

&:nth-child(2), &:hover::after,
&:nth-child(2), &:focus::after{
  transform: translate3d(0, 0, 0);
}

        
    }
`

export const DESKLIST = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: .95rem;
    font-weight: bold;
     transition: 0.5s ease-in-out;
     color: #83888f;
     

`