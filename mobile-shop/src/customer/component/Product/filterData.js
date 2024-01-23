export const filters = [
    {
        id: "color",
        name: "color",
        options: [
            {value: "white", label: "White"},
            {value: "beige", label: "Beige"},
            {value: "blue", label: "Blue"},
            {value: "brown", label: "Browm"},
            {value: "green", label: "Green"},
            {value: "purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},

        ]
    },

    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ]

    },

];

export const singleFilter=[
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "$159 To $399"},
            {value: "399-999", label: "399-999"},
            {value: "999-1999", label: "999-1999"},
            {value: "1999-2999", label: "1999-2999"},
            {value: "3999-4999", label: "3999-4999"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "10% And Above"},
            {value: "40", label: "10% And Above"},
            {value: "50", label: "10% And Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
           
        ]
    }
]

export const sortOptions = [

    {name: "Price: Low to High", query: "price_low", current: false },
    {name: "Price: High to Low", query: "price_high", current: false }
];