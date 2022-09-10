import React, {useEffect, useContext} from "react";
import { aboutContext } from "../../../context";
import styled from "styled-components";
import aboutbgmobile from '../../../resources/about/mobile/image-hero-whitecup.jpg';
import aboutbgtablet from '../../../resources/about/tablet/image-hero-whitecup.jpg';
import aboutbgdesktop from '../../../resources/about/desktop/image-hero-whitecup.jpg';

// aos 
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutUs = ()=>{
    const [about, setAbout] = useContext(aboutContext);


     // initialize aos animation
     useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return(
        <>
            
                <ABOUTUSTOPSECTION
                 data-aos="fade-right"
                 data-aos-delay='55'
                 data-aos-duration='1000'
                 data-aos-mirror='true'
                 >
                {about.map(aboutus =>(
                <ABOUTCONTENT>
                    <ABOUTHEADER>
                        {aboutus.abouthead}
                    </ABOUTHEADER>
                    <ABOUTINFO>
                       {aboutus.aboutp}
                    </ABOUTINFO>
                </ABOUTCONTENT>
                ))}
            </ABOUTUSTOPSECTION>
        </>
    )
}



// style 

export const ABOUTUSTOPSECTION = styled.div`
    background-image: url(${aboutbgmobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    margin-top: 8em;
    margin-bottom: 8.5em;
    width: 90%;
    margin-left: 1.2em;
    padding: 6.5em;

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .5s ease-in-out;
    @media(min-width: 558px){
        width: 93%;
        margin-left: 1.4em;
    }

    @media(min-width: 773px){
        background-image: url(${aboutbgtablet});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 2.8em;
        /* padding: 8em; */
        width: 90%;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 1020px){
        background-image: url(${aboutbgdesktop});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 7.5em 10em;
        width: 88%;
        margin-left: 5em;
        transition: all .5s ease-in-out;
    }

`


export const ABOUTCONTENT = styled.div`
    @media(min-width: 773px){
        display: flex;
        flex-direction: column;
            text-align: left;
            width: 100%;
            margin-right: 8.4em;
            transition: all .5s ease-in-out;
    }

    @media(min-width: 1020px){
        transition: all .5s ease-in-out;
    }

`

export const ABOUTHEADER = styled.h1`
    font-family: "Fraunces", serif;
    color: #fff;
    text-align: center;
    line-height: 1.8em;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
        text-align: left;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 1020px){
        font-size: 3rem;
    }

`


export const ABOUTINFO = styled.p`
    width: 20em;
    text-align: center;
    margin-top: 1em;
    font-size: .9rem;
    font-weight: 500;
    color: #dad3d3;
    line-height: 1.5em;
    transition: all .5s ease-in-out;
    @media(min-width: 773px){
        text-align: left;
        width: 90%;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 1020px){
        width: 25rem;
        transition: all .5s ease-in-out;
        font-size: 1rem;
    }

`