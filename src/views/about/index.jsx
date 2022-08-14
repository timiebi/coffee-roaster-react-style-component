import React from "react";
import { AboutUs } from "../../components/about/about-us";
import { Commitment } from "../../components/about/committment";
import { Quality } from "../../components/about/quality";
import { Headquarters } from "../../components/about/headquarters";

export const AboutView = ()=>{
    return(
        <>
            <AboutUs/>
            <Commitment/>
            <Quality/>
            <Headquarters/>  
        </>
    )
}