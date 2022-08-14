import React from "react";
import styled from "styled-components";
import { useContext } from "react"; 
import { aboutContext } from "../../../context";
import { ImageStr } from "../../util/image";
// Asset
import commitmentImage from '../../../resources/about/mobile/image-commitment.jpg';
import commitmentImagetb from '../../../resources/about/tablet/image-commitment.jpg';
import commitmentImagdesk from '../../../resources/about/desktop/image-commitment.jpg';



export const Commitment = ()=>{

    const [about, setAbout] = useContext(aboutContext);
    return(
        <>
          

            <COMMITMENT>
                <IMAGECOMMITMENT>
                    <ImageStr source={commitmentImage} width='95%' cl='commitment_image'/>
                </IMAGECOMMITMENT>
                <IMAGECTAB><ImageStr source={commitmentImagetb} cl='commitment_image_tab'/></IMAGECTAB>
                <IMAGECDESK className='commitment_image_desk'>
                    {/* <ImageStr source={commitmentImagdesk} cl='commitment_image_desk'/> */}
                </IMAGECDESK>
                {about.map(commitment =>(
                <COMMITMENTCONTAINER>
                    <CHEADER>{commitment.commitmentheader}</CHEADER>
                    <CP>{commitment.commitmentinfo}</CP>
                </COMMITMENTCONTAINER>
                ))}
            </COMMITMENT>

        </>
    )
} 


export const COMMITMENT = styled.div`
    @media(min-width: 773px){
        display: flex;
        gap: 1.5rem;
        padding: 2.5em;
        /* margin-left: 2em; */

    }

    @media(min-width: 1020px){
        padding: 5em 0 4em 8em;
        

    }

`

export const IMAGECOMMITMENT =  styled.div`
    margin-left: 1em;
    margin-bottom: 3.5em;
    transition: all .5s ease-in-out;
    .commitment_image{
        border-radius: 10px;
        padding: .3em;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 538px){
        margin-left: 1.8em;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 773px){
        display: none;
    }

`
export const COMMITMENTCONTAINER = styled.div`
    
`

export const CHEADER = styled.h1`
    text-align: center;
    transition: all .5s ease-in-out;
    margin-bottom: 1.5em;
    font-family: "Fraunces", serif;
    font-size: 1.75rem;
    color: #2C343E;
    @media(min-width: 773px){
        text-align: left;
        margin-left: .5em;
    }
    @media(min-width: 1020px){
    text-align: left;
    font-size: 2rem;
    padding-left: 2.88em;
 }

`

export const CP = styled.p`
line-height: 1.6em;
font-family: "Barlow", sans-serif;
text-align: center;
width: 95%;
color: #2C343E;
margin-bottom: 8em;
position: relative;
left: -.5em;
padding-left: 2em;
font-size: .95em;
@media(min-width: 773px){
    width: 50vw;
    text-align: left;
}
 @media(min-width: 1020px){
    width: 50vw;
    padding: 0 3em 0 6em;
    text-align: left;
    font-size: 1em;
 }
    
`

// image container for tablet screen 
export const IMAGECTAB = styled.div`
    display: none;
    @media (min-width: 773px){
        display: block;
    
        .commitment_image_tab{
            border-radius: 12px;
            width: 38vw;
            margin-top: -2em;
        }
    }
    @media (min-width: 1020px){
        display: none;
    }
`

// image container for desktop screen 
export const IMAGECDESK = styled.div`
 background-image: url(${commitmentImagdesk});
 background-repeat: no-repeat;
display: none;
    
    @media(min-width: 773px){
        display: none;
    }

    @media(min-width: 1020px){
        display: block;
        padding: 10em 5em 10em  12.5em;
        position: relative;
        bottom: 3em;
        height: 550px;
        transition: all .5s ease-in-out;
        background-size: cover;
        border-radius: 12px;
       
        @media(min-width: 1030px){
            padding: 10em  13.5em;
            position: relative;
            width: 70%;
            height: 550px;          
            transition: all .5s ease-in-out;

        }
       

        .commitment_image_desk{
        }
    }
`