import React from "react"



export const Preference = [{
    id: 1,
    preference: "How do you drink your coffee",
    preferenceOption:[{
        id: 2,
        preferenceHeader: "Capsule",
        preferenceInfo: "Compatible with Nespresso systems and similar brewers",
    },{
        id: 3,
        preferenceHeader: "Filter",
        preferenceInfo: "For pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
        id: 4,
        preferenceHeader: "Espresso",
        preferenceInfo: "Dense and finely ground beans for an intense, flavorful experience"
    },
    ]
}]

export const Option =[{
    id: 5,
    option: "What type of coffee",
    options:[{
        id: 6,
        optionheader: "Single origin",
        optionInfo: "Distinct, high quality coffee from a specific family-owned farm",
    },{
        id: 7,
        optionheader: "Decaf",
        optionInfo: "Just like regular coffee, except the caffeine has been removed",
    },
    {
        id: 8,
        optionheader: "Blended",
        optionInfo: "Combination of two or three dark roasted beans of organic coffees"
    },
    ]
}]

export const Amount =[{
    id: 9,
    amount: "How much would you like",
    prices:[{
        id: 10,
        weight: "250g",
        content: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },{
        id:11,
        weight: "500g",
        content: "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
        id: 12,
        weight: "1000g",
        content: "Perfect for offices and events. Yields about 90 delightful cups."
    }
    ]
}]


export const How = [{
    id: 13,
    how: "Want us to grind them",
    type:[{
        id: 14,
        typeheader: "Wholebean",
        typeInfo: "Best choice if you cherish the full sensory experience",
    },{
        id: 15,
        typeheader: "Filter",
        typeInfo: "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
        id: 16,
        typeheader: "Cafetiére",
        typeInfo: "Coarse ground beans specially suited for french press coffee."
    }
    ]
}]


export const Consistency = [{
    id: 17,
    consistency: "How often should we deliver",
    howOften:[{
        id: 18,
        howOftenheader: "Every week",
        howOftenInfo: "Select quantity to view price. Includes free first-class shipping.",
    },{
        id: 19,
        howOftenheader: "Every 2 weeks",
        howOftenInfo: "Select quantity to view price. Includes free priority shipping.",
    },
    {
        id: 20,
        howOftenheader: "Every month",
        howOftenInfo: "Select quantity to view price. Includes free priority shipping."
    }
    ]
}]