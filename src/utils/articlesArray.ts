type ArticleProps = {
    id:number
    title: string
    category: string
    date: string
    comments: number
    image:string
    description?:string 
}

const articlesArray:ArticleProps[] = [
    {
        id:1,
        title: "Meditation as Medicine on the Rise – Fitness",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/1crop.webp"
    },
    {
        id:2,
        title: "Cute Pastel Outfit Combinations and Ideas to Wear Pastel",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2crop.webp",
        description:"" 
    },
    {
        id:3,
        title: "It Really Have Good Feeling When You Enjoy Nature",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/3crop.webp"
    },
    {
        id:4,
        title: "10 Ways To Meet More People While Traveling Alone",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/4crop.webp"
    },
    {
        id:5,
        title: "What to Think About When Everything Goes Wrong",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/1mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.'
    },   
    {
        id:6,
        title: "The curly shag has tons of pretty texture and attitude",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2mr_crop.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.'
    },
    {
        id:7,
        title: "This japanese take on crème flan will blow your mind",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/3mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.'
    },     
    {
        id:8,
        title: "Here’s All the Fashion News You already Missed",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/4mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.'
    }     
]

export default articlesArray