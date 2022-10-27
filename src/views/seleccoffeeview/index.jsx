import { SelectCoffee } from "../../components/selectcoffee";
// import { CoffeAside } from "./selectcoffeaside";
import styled from "styled-components";

export const CoffeeView =()=>{
    return(
        <>
           <COFFEESECTION>
                {/* <CoffeAside/> */}
                <SelectCoffee/>
           </COFFEESECTION>
        </>
    )
}


export const COFFEESECTION =styled.div`
    /* display: flex;
    border: 2px solid red;
    justify-content: space-around;
    gap: 3em; */
`