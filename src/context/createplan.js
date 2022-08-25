// import { useState,createContext } from "react";

// export const creatPlanContext = createContext();

// export const CreatePlanProvider = (props)=>{
//     const [create, setCreate] = useState([[{
//         topic: "How do you drink your coffee"
//     },
//     {
//         selectplanheader: "Capsule",
//         selectplanInfo: "Compatible with Nespresso systems and similar brewers",
//     },
//     {
//         selectplanheader: "Filter",
//         selectplanInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
//     },
//     {
//         selectplanheader: "Espresso",
//         selectplaninfo: "Dense and finely ground beans for an intense, flavorful experience"
//     }
//     ],
//     [{
//         topic: "How do you drink your coffee"
//         },
//         {
//             selectplanheader: "Capsule",
//             selectplanInfo: "Compatible with Nespresso systems and similar brewers",
//         },
//         {
//             selectplanheader: "Filter",
//             selectplanInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
//         },
//         {
//             selectplanheader: "Espresso",
//             selectplaninfo: "Dense and finely ground beans for an intense, flavorful experience"
//         } 
//     ],
//     [{
//         topic: "How do you drink your coffee"
//         },
//         {
//             selectplanheader: "Capsule",
//             selectplanInfo: "Compatible with Nespresso systems and similar brewers",
//         },
//         {
//             selectplanheader: "Filter",
//             selectplanInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
//         },
//         {
//             selectplanheader: "Espresso",
//             selectplaninfo: "Dense and finely ground beans for an intense, flavorful experience"
//         }
//     ],
//     [{
//         topic: "How do you drink your coffee"
//     },
//         {
//             selectplanheader: "Capsule",
//             selectplanInfo: "Compatible with Nespresso systems and similar brewers",
//         },
//         {
//             selectplanheader: "Filter",
//             selectplanInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
//         },
//         {
//             selectplanheader: "Espresso",
//             selectplaninfo: "Dense and finely ground beans for an intense, flavorful experience"
//         }
//     ]])

//     return(
//         <>
//             <creatPlanContext value={[create, setCreate]} >
//                 {props.children}
//             </creatPlanContext>
//         </>
//     )

// }