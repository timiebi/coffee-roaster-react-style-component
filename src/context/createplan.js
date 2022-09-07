import React from "react"



export const Preference = [{
    preference: "How do you drink your coffee",
    preferenceOption:[{
        preferenceHeader: "Capsule",
        preferenceInfo: "Compatible with Nespresso systems and similar brewers",
    },{
        preferenceHeader: "Filter",
        preferenceInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
        preferenceHeader: "Espresso",
        preferenceInfo: "Dense and finely ground beans for an intense, flavorful experience"
    },
    ]
}]

export const Option =[{
    option: "What type of coffee",
    options:[{
        optionheader: "Single origin",
        optionInfo: "Distinct, high quality coffee from a specific family-owned farm",
    },{
        optionheader: "Decaf",
        optionInfo: "Just like regular coffee, except the caffeine has been removed",
    },
    {
        optionheader: "Blended",
        optionInfo: "Combination of two or three dark roasted beans of organic coffees"
    },
    ]
}]

export const Amount =[{
    amount: "How much would you like",
    prices:[{
        weight: "250g",
        content: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },{
        weight: "500g",
        content: "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
        weight: "1000g",
        content: "Perfect for offices and events. Yields about 90 delightful cups."
    }
    ]
}]


export const How = [{
    how: "Want us to grind them",
    type:[{
        typeheader: "Wholebean",
        typeInfo: "Best choice if you cherish the full sensory experience",
    },{
        typeheader: "Filter",
        typeInfo: "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
        typeheader: "Cafetiére",
        typeInfo: "Coarse ground beans specially suited for french press coffee."
    }
    ]
}]


export const Consistency = [{
    consistency: "How often should we deliver",
    howOften:[{
        howOftenheader: "Every week",
        howOftenInfo: "Select quantity to view price. Includes free first-class shipping.",
    },{
        howOftenheader: "Every 2 weeks",
        howOftenInfo: "Select quantity to view price. Includes free priority shipping.",
    },
    {
        howOftenheader: "Every month",
        howOftenInfo: "Select quantity to view price. Includes free priority shipping."
    }
    ]
}]