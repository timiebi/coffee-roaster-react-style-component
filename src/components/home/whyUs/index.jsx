import React from "react";
import styled from "styled-components";
//  component
import { ImageStr } from "../../util/image";

// Assets 



export const WhyUs = ({wphoto, icong, truck})=>{
    return(
        <>
            <WHYUSSECTION>
                <WHYUSCONTENT>
                    <WH2>
                         Why choose us?
                    </WH2>
                    <WP>
                        A large part of our role is choosing which particular coffees will be featured in our range.
                        This means working closely with the best coffee growers to give you a more impactful
                        experience on every level
                    </WP>
                    <BENEFITBOX>
                        <BENEFITS>
                            <SECTIONZ>
                                <IMAGEBEAN>
                                    <ImageStr source={wphoto} height='70px'/>
                                </IMAGEBEAN>
                                <HEADERPA>
                                    <BH3 style={{left: '1.5em', position: 'relative'}} >
                                        Best quality
                                    </BH3>
                                    <BP>
                                        Discover an endless variety of the world's best artisan
                                        coffee from each of our roasters.
                                    </BP>
                                </HEADERPA>
                            </SECTIONZ>
                        </BENEFITS>
                        <BENEFITS>
                            <SECTIONZ>
                                <IMAGEBEAN>
                                    <ImageStr source={icong} height='70px'/>
                                </IMAGEBEAN>
                                <HEADERPA>
                                    <BH3>
                                        Exclusive benefits
                                    </BH3>
                                    <BP>
                                        Special offers and swag when you subscribe, including 30% off your first shipment.
                                    </BP>
                                </HEADERPA>
                            </SECTIONZ>
                        </BENEFITS>
                        <BENEFITS>
                            <SECTIONZ>
                                
                                    <IMAGEBEAN>
                                        <ImageStr source={truck} height='70px'/>
                                    </IMAGEBEAN>
                                    <HEADERPA >
                                        <BH3 style={{left: '1.2em', position: 'relative'}}>
                                            Free shipping
                                        </BH3>
                                        <BP>
                                            We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
                                        </BP>
                                    </HEADERPA>
                                
                            </SECTIONZ>
                        </BENEFITS>
                    </BENEFITBOX>
                </WHYUSCONTENT>
            </WHYUSSECTION>
        </>
    )
}


// STYLE

export const WHYUSSECTION = styled.div`

`

export const WHYUSCONTENT = styled.div`
    width: 87%;
    margin-left: 1.5em;
    position: relative;
    padding: 3em 1.3em 0 1.3em;
    text-align: center;
    transition: all .5s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 58em;
        border-radius: 12px;
        background-color: #2C343E;
        z-index: -2;
        transition: all .5s ease-in-out;
}

@media (min-width: 773px) {
    margin-left: 4em;
    padding-top: 6.5em;
    padding-left: 5em;
    padding-right: 5em;
    transition: all .5s ease-in-out;

            &::before {
            height: 68%;
        }
}
`

export const WH2= styled.h2`
    margin-bottom: 1.3em;
    font-size: 1.8em;

    color: #fefcf7;
    transition: all .5s ease-in-out;
`

export const WP = styled.p`
  margin: 0 auto 4.3em;
  color: #fefcf7;
  transition: all .5s ease-in-out;
`

export const BENEFITBOX = styled.div`
     @media(min-width: 1020px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
`


export const BENEFITS = styled.div`
    transition: all .5s ease-in-out;
    @media(min-width: 1020px){
        text-align: center;
        
    }
`


export const SECTIONZ = styled.div` 
    background-color: #0e8784;
    border-radius: 10px;
    padding-bottom: 3.5em;
    padding-top: 5em;
    margin-bottom: 2em;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
            display: flex;
            align-items: center;
            justify-content: center;
            align-items: center;
            margin-left: 1.7em;
            padding: 2.2rem 0 1rem;
            width: 90%;
            transition: all .5s ease-in-out;
        }

        @media(min-width: 1020px){
            width: 16em;
            flex-direction: column;
            padding: 2em 0 2em;
            transition: all .5s ease-in-out;
        }
        @media(min-width: 1440px){
            transition: all .5s ease-in-out;
            width: 22em;
            margin-right: 1.2em;
        }

`

export const IMAGEBEAN = styled.div`
    /* border: 2px solid red; */
    transition: all .5s ease-in-out;
    @media(min-width: 1020px){
        padding-top: 2em;
        margin-top: 1em;
    }
`

export const HEADERPA = styled.div`
    margin-top: 3.5em;
    transition: all .5s ease-in-out;

    @media(min-width: 773px){
        width: 21em;
        margin: 0;
        padding-left: 1em;
        text-align: left;
        transition: all .5s ease-in-out;
    }
`

export const BH3 = styled.h3`
    font-family: "Fraunces", serif;
    color: #fefcf7;
    font-size: 1.4em;
    padding-left: 1em;
    padding-right: 1em;
    line-height: 2.4em;
    padding-bottom: .8em;
    transition: all .5s ease-in-out;


    @media(min-width: 773px){
            padding-bottom: .3em;
            transition: all .5s ease-in-out;
            text-align: left;
        }
        
        @media(min-width: 1020px){
            padding: 1.5em 2em 0;
        }
 
`

export const BP = styled.p`
    max-width: 280px;
    margin: auto;
    padding-left: 2em;
    padding-right: 2em;
    color: #fefcf7;
    transition: all .5s ease-in-out;

        @media(min-width: 773px){
            position: relative;
            padding: 0;
            margin: auto;
            transition: all .5s ease-in-out;
        }
        @media(min-width: 1020px){
            padding: 2em 2em 1.8em;
            width: 13em;
            transition: all .5s ease-in-out;
            text-align: center;
            right: .8em;
        }
`