//  components
 import { HomeCreatePlanSection } from "../../components/home/createplan";
 import { Collection } from "../../components/home/collection";
 import { WhyUs } from "../../components/home/whyUs";
 import { HowItWorks } from "../../components/home/howItWorks";
 import { HomeFooter } from "../../components/home/homefooter";

//  assets 
import bagImage from '../../resources/home/desktop/bagimg.png';
import beansImage from '../../resources/home/desktop/coffeebean.svg';
import gift from '../../resources/home/desktop/gift.svg';
import truckicon from '../../resources/home/desktop/truck.svg';
import logo from '../../resources/shared/desktop/logo.svg';

 export const HomeView = ()=>{
    return(
        <>
            <HomeCreatePlanSection/>
           <Collection
           bagphoto={bagImage}
           />
           <WhyUs
           wphoto={beansImage}
           icong={gift}
           truck={truckicon}
           />

           <HowItWorks/>
           <HomeFooter
           footerIcon={logo}/>
        </>
    )
 }