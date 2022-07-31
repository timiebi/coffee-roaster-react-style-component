// button 
import { CreatePlanButton } from "../../util/interaction/creaateplanbutton";
// style
import styled from "styled-components";
 
// assets 
import planImage from '../../../resources/home/mobile/cofferImage.jpg';
import planImagetab from '../../../resources/home/tablet/pimagetab.jpg';
import pimagedesk from '../../../resources/home/desktop/coffeeimagedesk.jpg';

export const HomeCreatePlanSection = ()=>{
    return(
        <>
           <PLANSECTION>
            <CREATEPLAN>
                <PHEADER>
                    <H1>Great coffee made simple.</H1>
                </PHEADER>
                <PPARAGRAPH>
                    <PP> Start your mornings with the world's best coffees. Try our expertly curated artisan 
                        coffees from our best roasters delivered directly to your door, at your schedule.
                    </PP>
                </PPARAGRAPH>
                {/* go back to the create plan padding */}
                <BUTTON>
                    <CreatePlanButton/>
                </BUTTON>
            </CREATEPLAN>
           </PLANSECTION>
        </>
    )
}

export const PLANSECTION = styled.div`
    background: url(${planImage});
    width: 90%;
    margin: 1.5em auto 7.5em 1.28em;
    padding: 6.25em 1.5em 7.25em 1.5em;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;

    @media(min-width: 500px){
        margin-left: 2em;
        border-radius: 10px;
        transition: all 0.5s ease-in-out;
    }

    @media(min-width: 773px){
        background: url(${planImagetab});
        width: 90%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 15px;
        text-align: left;
        margin-top: 8em;
        margin-bottom: 6em;
        margin-left: 3em;
        /* check the padding again after the button */
        padding: 7em 20em 6.5em 1em;
        transition: all 0.5s ease-in-out;
    }

    @media(min-width: 1440px){
        background: url(${pimagedesk});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 7.8em 50em 7.8em 3.5em;
        margin-left: 4em;
        transition: all 0.5s ease-in-out;
    }
   
`

export const CREATEPLAN = styled.div`
    display: block;
    
`

export const PHEADER = styled.div`
     max-width: 335px;
     text-align: center;
     transition: all 0.5s ease-in-out;
     /* border: 2px solid red; */
`

export const H1 = styled.h1`
    color: #fefcf7;
    font-size: 2.6rem;
    font-family: "Fraunces", serif;
    margin: 0 auto .8em;
    line-height: 40.80px;
    transition: all 0.5s ease-in-out;

    @media(min-width: 553px){
        width: 335px;
        text-align: center;
        margin-left: 1.5em;
    }

    @media(min-width: 775px){
        font-size: 3rem;
        line-height: 50px;
        max-width: 1180px;
        margin-left: 0;
    }
`

export const PPARAGRAPH = styled.div`
     /* max-width:445px; */
     text-align: center;
     /* border: 2px solid red; */
`


export const PP = styled.p`
    margin: 0 auto 2em;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fefcf7;
    transition: all 0.5s ease-in-out;
    opacity: 0.5;
    
    @media(min-width: 553px){
        /* max-width: 270px; */
         max-width:445px;
        text-align: center;
        margin: 0 auto 2em;
    }

    @media(min-width: 775px){
        max-width: 90%;
        margin-left: 0;
        text-align: left;
    }
`

export const BUTTON = styled.div`
    margin: 2em 0 0 2.5em;
    transition: all 0.5s ease-in-out;

    @media(min-width: 553px){
        margin-left: 7em;
    }

    @media(min-width: 775px){
        margin-left: 0;
    }
`