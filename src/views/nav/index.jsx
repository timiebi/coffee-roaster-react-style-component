// import { Nav } from "../../components/navigation";
// import { useState, useContext } from "react";
// import {NavlistContext} from '../../components/navData/NavlistContext';



// export const NavView = ()=>{
//     const [navlist, setNavList] = useContext(NavlistContext);
//     console.log(navlist)
//     return(
//         <>
//             {navlist.map((list =>{
//               return  <Nav home={list.home} about={list.about} plan={list.plan} key={list.id}  />
//             }))}
//         </>
//     )
// }


import { Nav } from "../../components/navigation";
import logo from '../../resources/shared/desktop/logo.svg';
import togglbtn from '../../resources/shared/mobile/icon-hamburger.svg';


export const NavView = () =>{
    return(
        <>
            <Nav
            logophoto={logo}
            togglebtn={togglbtn}
            />
        </>
    )
}