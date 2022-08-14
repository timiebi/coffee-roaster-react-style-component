import React, {useState, useContext} from "react";
import styled from "styled-components";
import { aboutContext } from "../../../context";

// assets 
import qualityImage from '../../../resources/about/mobile/image-quality.jpg';
import qualityImagetb from '../../../resources/about/tablet/image-quality.jpg';
import qualityImagedesk from '../../../resources/about/desktop/image-quality.jpg';


export const Quality = ()=>{
    const [about, setAbout] = useContext(aboutContext)
    return(
        <>
           
            <QUALITYSECTION>
                <QUALITYCONTAINER>
                    <QUALITYIMAGE >

                    </QUALITYIMAGE> 
                    {about.map(quality=>(
                    <QUALITYINFO>
                            <HEADER>
                            {quality.quality}
                            </HEADER>
                            <INFO>
                            {quality.qualityinfo}
                            </INFO>
                    </QUALITYINFO> 
                    ))}
                </QUALITYCONTAINER>           
            </QUALITYSECTION>

        </>
    )
}

// style 

export const QUALITYSECTION = styled.div`
    background: #2C343E;
    margin: 6em 2em 6em;
    @media(min-width: 773px){
        border-radius: 8px;
        margin-top: 12em;
    }

    @media(min-width: 1020px){
       margin: 8em 4.5em 6em;
       padding-left: 3em;
    }
`

export const QUALITYCONTAINER = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 1020px){
        flex-direction: row-reverse;
        gap: 7em;
        /* margin-left: 3em; */
        padding-left: 16em;
        justify-content: flex-start;
    }
    @media(min-width: 1220px){
        padding: 0;
    }
`

export const QUALITYIMAGE = styled.img`
    background-image: url(${qualityImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 4em 8.5em;
    z-index: 4;
    position: relative;
    margin-bottom: 1rem;
    height: 9.8rem;
    border-radius: 8px;
    bottom: 4em;
    max-width: 25rem;
    

    @media(min-width: 773px){
        background-image: url(${qualityImagetb});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 8.5em 18em;
        border-radius: 8px;
        bottom: 9em;

    }
    
    @media(min-width: 1020px){
        background-image: url(${qualityImagedesk});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 15% 19%;
        height: 28rem;
        margin-right: 8em;
        margin-top: 2em;

    }
`

export const QUALITYINFO = styled.div`
    color: #fefcf7;

    @media(min-width: 1020px){
        width: 40rem;
    }
`

export const HEADER = styled.h1`
    text-align: center;
    font-family: "Fraunces", serif;
    @media(min-width: 1020px){
        text-align: left;
        width: 90%;
    }
`

export const INFO = styled.p`
    text-align: center;
    line-height: 1.6em;
    padding: 2em .8em 0;

    @media(min-width: 1020px){
        text-align: left;
        margin-right: 1em;
        right: 1em;
        position: relative;
        width: 25rem;
        font-size: .85rem;
    }
`