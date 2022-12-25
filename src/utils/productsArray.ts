type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] = [
    {
    title: "Iphone 14",
    desc: "bla-bla",
    type: "phone",
    capacity: "64",
    price: 500
    },
    {
        title: "Iphone 12",
        desc: "bla-bla",
        type: "phone",
        capacity: "128",
        price: 1500
    },
    {
        title: "Iphone 13",
        desc: "bla-bla",
        type: "phone",
        capacity: "32",
        price: 250
    },
    {
        title: "Iphone 6",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 60
    },
    {
        title: "Iphone 5",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 50
    },
    {
        title: "Iphone 8",
        desc: "bla-bla",
        type: "phone",
        capacity: "16",
        price: 80
    }
]

export default productsArray