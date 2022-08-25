import { CreatePlan } from "../../components/createplan/plan";
import { ChoosePlan } from "../../components/createplan/chooseplan";
import { CoffeeView } from "../seleccoffeeview";


export const Plan = () =>{
    return(
        <>
            <CreatePlan/>
            <ChoosePlan/>
            <CoffeeView/>
        </>
    )
}