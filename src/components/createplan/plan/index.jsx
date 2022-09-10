import React,{ useContext} from "react";
import { aboutContext } from "../../../context";
import styled from "styled-components";
import planImagemobile from "../../../resources/plan/mobile/image-hero-blackcup.jpg";
import planimgtablet from "../../../resources/plan/tablet/image-hero-blackcup.jpg";
import planimgDesktop from "../../../resources/plan/desktop/image-hero-blackcup.jpg";


export const CreatePlan = ()=>{
    const [about] = useContext(aboutContext);
    return(
        <> 
            <CREATEPLANSECTION>
                {about.map(plan =>(
                <CREATEPLANCONTENT key={plan.id} >
                    <CREATEPLANHEADER>
                        {plan.createheader}
                    </CREATEPLANHEADER>
                    <CREATEPLANINFO>
                       {plan.planinfo}
                    </CREATEPLANINFO>
                </CREATEPLANCONTENT>
                ))}
            </CREATEPLANSECTION>
        </>
    )
}






// style 

export const CREATEPLANSECTION = styled.div`
    background-image: url(${planImagemobile});
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
        background-image: url(${planimgtablet});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 2.8em;
        padding: 8em;
        width: 90%;
        transition: all .5s ease-in-out;
    }
    @media(min-width: 1020px){
        background-image: url(${planimgDesktop});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 7.5em 10em;
        width: 88%;
        margin-left: 5em;
        transition: all .5s ease-in-out;
    }

`


export const CREATEPLANCONTENT = styled.div`
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

export const CREATEPLANHEADER = styled.h1`
    font-size: 2.6rem;
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
        text-align: left;
    }

`


export const CREATEPLANINFO = styled.p`
    width: 20em;
    text-align: center;
    margin-top: 1em;
    font-size: .9rem;
    font-weight: 500;
    color: #dad3d3;
    line-height: 1.5em;
    transition: all .5s ease-in-out;
    @media(min-width: 553px){
        font-size: .9rem;
        max-width:445px;
        text-align: center;
        margin: 0 auto 1em;
        transition: all 0.5s ease-in-out;
    }

    @media(min-width: 775px){
        display: flex;
        justify-content: center;
        width: 24rem;
        font-size: .95rem;
        position: relative;
        /* right: 6.3em; */
        margin-right: 18.5em;
        text-align: left;
        transition: all 0.5s ease-in-out;
    }
    @media(min-width: 1020px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28rem;
        text-align: left;
    }
    @media(min-width: 1200px){
        margin-left: .45em;
    }

`