import React from "react";


export const ImageStr = (props)=>{
    return(
        <>
            <img src={props.source} alt={props.Name} width={props.width} height={props.height} className={props.cl} />
        </>
    )
}