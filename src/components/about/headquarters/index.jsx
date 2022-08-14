import React, {useState, useContext} from "react";
import styled from "styled-components";
import { aboutContext } from "../../../context";


export const Headquarters = ()=>{
    const [about, setAbout] = useContext(aboutContext);
    return(
        <>
           {about.map(about=>(
             <QUARTERMAIN>
             <HEAD>{about.headQuarter}</HEAD>
             <INFO>
                {/* <IMAGE src={about.map}></IMAGE> */}
                <H2>{about.name}</H2>
                <P>{about.address}</P>
                <P>{about.contact}</P>
             </INFO>
         </QUARTERMAIN>
           ))}
        </>
    )
}

export const QUARTERMAIN = styled.div`
    
`

export const HEAD = styled.h1`
    
`
export const INFO = styled.div`
    
`

export const H2 = styled.h2`
    
`

export const P = styled.p`
`

// export const IMAGE= styled.img`
    
// `