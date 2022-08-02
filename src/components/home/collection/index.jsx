import styled from "styled-components";
import React from "react";

// assets
import { ImageStr } from "../../util/image";




export const Collection =({bagphoto})=>{
    return(
        <>
            <COLLECTIONSECTION>
                <H2>our collection</H2>
                <COLLECTIONLISTCONTAINER>
                    <LISTCONTENT>
                        <BAGIMAGE>
                            <ImageStr source={bagphoto} width='200px'/>
                        </BAGIMAGE>
                       <HEADPA>
                            <H3>
                                Gran Espresso
                            </H3>
                            <P2>
                                Light and flavorful blend with cocoa and black pepper for an intense experience
                            </P2>
                       </HEADPA>
                    </LISTCONTENT>
                </COLLECTIONLISTCONTAINER>
                <COLLECTIONLISTCONTAINER>
                    <LISTCONTENT>
                        <BAGIMAGE>
                            <ImageStr source={bagphoto} width='200px'/>
                        </BAGIMAGE>
                       <HEADPA>
                            <H3>
                                Gran Espresso
                            </H3>
                            <P2>
                                Light and flavorful blend with cocoa and black pepper for an intense experience
                            </P2>
                       </HEADPA>
                    </LISTCONTENT>
                </COLLECTIONLISTCONTAINER>
                <COLLECTIONLISTCONTAINER>
                    <LISTCONTENT>
                        <BAGIMAGE>
                            <ImageStr source={bagphoto} width='200px'/>
                        </BAGIMAGE>
                       <HEADPA>
                            <H3>
                                Gran Espresso
                            </H3>
                            <P2>
                                Light and flavorful blend with cocoa and black pepper for an intense experience
                            </P2>
                       </HEADPA>
                    </LISTCONTENT>
                </COLLECTIONLISTCONTAINER>
                <COLLECTIONLISTCONTAINER>
                    <LISTCONTENT>
                        <BAGIMAGE>
                            <ImageStr source={bagphoto} width='  50%'/>
                        </BAGIMAGE>
                       <HEADPA>
                            <H3>
                                Gran Espresso
                            </H3>
                            <P2>
                                Light and flavorful blend with cocoa and black pepper for an intense experience
                            </P2>
                       </HEADPA>
                    </LISTCONTENT>
                </COLLECTIONLISTCONTAINER> 
            </COLLECTIONSECTION>
        </>
    )
}


// styles

export const COLLECTIONSECTION = styled.div`
    text-align: center;
    position: relative;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
        margin-right: 2em;
    }
`

export const H2 = styled.h2`
    font-family: "Fraunces", serif;
    padding-bottom: 2em;
    font-size: 2.5rem;
    line-height: 2em;
    color: #83888f;
    transition: all .5s ease-in-out;

    &::after{
        content: '';
        position: absolute;    
        top: 2px;
        bottom: 9em;
        height: 1.3em;
        right: 0;
        left: .75em;
        background-image: linear-gradient(rgba(254, 252, 247, 0.0001), #fefcf7 100%);
        /* border: 2px solid red; */
    }

    @media(min-width: 773px){
        font-size: 6rem;
        padding-bottom: 0;
        transition: all .5s ease-in-out;

        &::after {
            height: 1.4em;
  }
    }

    @media(min-width: 1440px){
        font-size: 9rem;
        transition: all .5s ease-in-out;
    }
`

export const COLLECTIONLISTCONTAINER = styled.div`
    position: relative;
    bottom: 30px;
    transition: all .5s ease-in-out;
`

export const LISTCONTENT = styled.div`
    text-align: center;
    transition: all .5s ease-in-out;


    @media(min-width: 773px){
        display: flex;
        justify-content: center;
        width: 460px;
        position: relative;
        right:  2em;
        margin: auto;
        bottom: 53px;
        transition: all .5s ease-in-out;
    }
`

export const BAGIMAGE = styled.div`
    position: relative;
    display: block;
    z-index: 3;
    margin-bottom: 2em;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
        /* height: 20em; */
    }

`

export const HEADPA = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 90%;
     margin-left: 1.5em;
     transition: all .5s ease-in-out;

     @media(min-width: 773px){
        position: relative;
        bottom: 4em;
        right: 2em;
        transition: all .5s ease-in-out;
     }
`

export const H3 = styled.h3`
    text-align: center;
    font-family: "Fraunces", serif;
    position: relative;
    font-size: 1.45rem;
    line-height: 1em;
    margin-bottom: 2em;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
         text-align: left;
         margin-top: 4em;
    }
`

export const P2 = styled.p`
    position: relative;
    bottom: 25px;
    width: 280px;
    margin-bottom: 2em;
    font-size: .93rem;
    transition: all .5s ease-in-out;
      /* border: 2px solid red; */
    @media(min-width: 773px){
        font-size: .9rem;
        width: 100%;
        text-align: center;
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
    }

    @media(min-width: 1040px){
        font-size: 1rem;
    }

`