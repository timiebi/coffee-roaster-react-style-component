import React, { useContext} from "react";
import styled from "styled-components";
import { aboutContext } from "../../../context";


export const Headquarters = ()=>{
    const [about] = useContext(aboutContext);
    return(
        <>
           {about.map(about=>(
        <QUARTERMAIN>
             <HEAD>{about.headQuarter}</HEAD>
             <INFOSECTION>
                <INFO>
                    {/* <IMAGE src={svgg}></IMAGE> */}
                    <NAMEADDRESSCONTAINER>
                        <H2>{about.nameuk}</H2>
                        <P>{about.ukaddress}</P>
                        <P>{about.ukcontact}</P>
                    </NAMEADDRESSCONTAINER>
                </INFO>
                <INFO>
                    {/* <IMAGE src={svgg}></IMAGE> */}
                    <NAMEADDRESSCONTAINER>
                        <H2>{about.namecn}</H2>
                        <P>{about.canaddress}</P>
                        <P>{about.cancontact}</P>
                    </NAMEADDRESSCONTAINER>
                </INFO>
                <INFO>
                    {/* <IMAGE src={svgg}></IMAGE> */}
                    <NAMEADDRESSCONTAINER>
                        <H2>{about.nameas}</H2>
                        <P>{about.asaddress}</P>
                        <P>{about.ascontact}</P>
                    </NAMEADDRESSCONTAINER>
                </INFO>
             </INFOSECTION>
        </QUARTERMAIN>
           ))}
        </>
    )
}

export const QUARTERMAIN = styled.div`
 text-align: center;
    
`

export const HEAD = styled.h1`
    color: #83888f;
    margin-bottom: 4.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
`
export const INFOSECTION = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    border: 2px solid red;

    @media(min-width: 773px){
        display: flex;
        /* flex-direction: row; */
        align-items: center;
        justify-content: center;
        width: 25em;
        position: relative;
    }
    
`

export const INFO = styled.div`
   
    
`

export const NAMEADDRESSCONTAINER = styled.div`
`

export const H2 = styled.h2`
  margin-bottom: 1.25rem;
  font-size: 1.75rem;
  line-height: 2.25rem;
  
`

export const P = styled.p`
    color: #83888f;
    width: 10em;
    
`

export const IMAGE= styled.img`
    
`