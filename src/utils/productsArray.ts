type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}
const productsArray:Product[] = [
    {
        title:"iPhone 14 Pro",
        description:"This is iPhone 14 Pro ",
        capacity:"256",
        type:"phone",
        price:1500,
    },
    {
        title:"iPhone 13 Pro",
        description:"This is iPhone 13 Pro ",
        capacity:"128",
        type:"phone",
        price:1000,
    },
    {
        title:"iPhone 12 Pro",
        description:"This is iPhone 12 Pro ",
        capacity:"512",
        type:"phone",
        price:1600,
    },
    {
        title:"iPhone 14 ",
        description:"This is iPhone 14 ",
        capacity:"128",
        type:"phone",
        price:1300,
    },
    {
        title:"iPhone 13",
        description:"This is iPhone 13 ",
        capacity:"256",
        type:"phone",
        price:1200,
    },
    {
        title:"iPhone 12",
        description:"This is iPhone 12 ",
        capacity:"64",
        type:"phone",
        price:500,
    },
    {
        title:"iPhone 14 Pro Max",
        description:"This is 14 Pro Max ",
        capacity:"128",
        type:"phone",
        price:1100,
    },
]

export default productsArray