import React from "react";
import styled from "styled-components";






export const ChoosePlan = ()=>{
    // const [about] = useContext(aboutContext);
    return(
        <>
              <HOWITWORKS>
                <OL>
                    <LII>
                    <CIRCLE className='c_circle circleone' ></CIRCLE>
                        <H33>
                            Pick your coffee
                        </H33>
                        <P11>
                            Select from our evolving range of artisan coffees.
                            Our beans are ethically sourced and we pay fair prices for them.
                            There are new coffees in all profiles every month for you to try out.
                        </P11>
                    </LII>
                    <LII>
                    <CIRCLE className='c_circle'></CIRCLE>
                        <H33>
                            Choose the frequency
                        </H33>
                        <P11>
                            Customize your order frequency, quantity, even your roast style and grind type. Pause, 
                            skip or cancel your subscription with no commitment through our online portal.
                        </P11>
                    </LII>
                    <LII>
                    <CIRCLE className='h_line-cross'></CIRCLE>
                        <H33>
                            Receive and enjoy!
                        </H33>
                        <P11>
                            We ship your package within 48 hours, freshly roasted.
                            Sit back and enjoy award-winning world-class coffees
                            curated to provide a distinct tasting experience.
                        </P11>
                    </LII>
                </OL>
            </HOWITWORKS>
        </>
    )
}





// style 
export const HOWITWORKS = styled.div`
background: #2C343E;
display: flex;
justify-content: center;
flex-direction: column;
/* overflow-x: hidden; */
margin-bottom: 8em;
padding-bottom: 8em;
border-radius: 10px;

@media(min-width: 773px){
    width: 87%;
    margin-left: 5em;
}

@media(min-width: 1020px){
    padding-top: 3em;
}


        
`  


export const OL = styled.ol`
    overflow: hidden;
    transition: all .5s ease-in-out;
    position: relative;
    /* width: 90%; */
    top: 1.5em;
    left: 0;
    right: 0;
    margin: auto;
    @media(min-width: 773px){
        overflow: visible;
        display: flex;
        align-items: center;
        margin-left: 1.5em;
        transition: all .5s ease-in-out;
        margin-top: 5em;
         width: 90%;
    }

    @media(min-width: 1020px){
        width: 80%;
        margin-left: 5em;
        transition: all .5s ease-in-out;
    }
    
`


export const LII = styled.li`
    position: relative;
    counter-increment: how-to-counter;
    margin-top: 3.5em;
    transition: all .5s ease-in-out;
    width: 20em;
    list-style: none;
    left: 0;
    right: 0;
    margin: 3.5em auto auto auto;

    .c_circle{
        z-index: 1;
    }

    .h_line-cross{
        display: none;
   @media(min-width: 773px){
    display: block;
      
    &::after{
         content: '';
     position: absolute;
     width: 56vw;
     right: 2em;
     top: .6em;
     border: 2px solid #fdd6ba;
     }
   }
   @media(min-width: 1020px){
    display: flex;
    align-items: center;
    justify-content: center;
      
    &::after{
         content: '';
     position: absolute;
     width: 50vw;
     transition: all .5s ease-in-out;
     }
   }
 }


        &::after{
            content: "0" counter(how-to-counter);
            font-family: "Fraunces", serif;
            font-size: 4.5rem;
            line-height: 4.5rem;
            color: #fdd6ba;
            position: absolute;
            top: 0;
            padding-left: 1.5em;
            width: 200px;
            padding-bottom: 3em;

            @media (min-width: 773px){
              left: -.9em;
            transition: all .5s ease-in-out;
        }
    
        }
        @media (min-width: 773px){
            margin-right: 2em;
        }
        
`

export const H33 = styled.h3`
    font-size: 1.8em;
    transition: all .5s ease-in-out;
    font-family: "Fraunces", serif;
    text-align: center;
    color: #fff;
    padding-top: 3.5em;
    transition: all .5s ease-in-out;
    
`


export const P11 = styled.p`
    width: 80%;
    font-size: .9em;
    text-align: center;
    margin-left: 2.5em;
    margin-top: 2.3em;
    transition: all .5s ease-in-out;
    color: #fff;

    @media(min-width: 1020px){
        width: 65%;
        text-align: left;
        transition: all .5s ease-in-out;
        font-size: 1em;
    }


`




// CIRCLE STYLE ON HOME SECTION(HOW IT WORKS)
export const CIRCLE= styled.div`
display: none;
    @media(min-width: 773px){
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #0e8784;
    background: #2C343E;
    position: absolute;
    left: 4em;
    bottom: 22em;
    transition: all .5s ease-in-out;
    }
    @media(min-width: 1020px){
        bottom: 25em;
        transition: all .5s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;

    }

`
