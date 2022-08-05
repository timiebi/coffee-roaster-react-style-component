import React from "react";


export const ImageStr = (props)=>{
    return(
        <>
            <img src={props.source} alt={props.Name} width={props.width} height={props.height} className={props.cl} />
        </>
    )
}


// export const Svg = (props)=>{
//     return(
//         <>
//             <SVG color={props.color} src={props.source}/>
//         </>
//     )
// } 

// const SVG = styled(SVG)<SVG>`
//   width: 24px;
//   height: 24px;
//   & path {
//     fill: ${({ color }) => color};
//   }
// `;