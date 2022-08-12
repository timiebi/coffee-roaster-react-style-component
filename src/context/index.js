import React, {useState, createContext} from "react";

export const aboutContext = createContext()

export const AboutProvider = (props)=>{
    const [about, setAbout] = useState([{
        // aboutimgMobile: '../resources/about/mobile/bg-quality.png',
        // aboutimgdesk: '../resources/about/desktop/bg-quaility.png',
        // aboutimgtab: '../resources/about/desktop/bg-quality.png',
        abouthead: "About us",
        aboutp: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
        commitmentheader: "Our commitment",
        commitmentinfo: "We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region."
        
    }])
    return(
        <>
            <aboutContext.Provider value={[about, setAbout]} >
                {props.children}
            </aboutContext.Provider>
        </>
    )
}
