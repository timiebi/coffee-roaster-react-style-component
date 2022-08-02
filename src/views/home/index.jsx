//  components
 import { HomeCreatePlanSection } from "../../components/home/createplan";
 import { Collection } from "../../components/home/collection";

//  assets 
import bagImage from '../../resources/home/desktop/bagimg.png';

 export const HomeView = ()=>{
    return(
        <>
            <HomeCreatePlanSection/>
           <Collection
           bagphoto={bagImage}
           />
        </>
    )
 }