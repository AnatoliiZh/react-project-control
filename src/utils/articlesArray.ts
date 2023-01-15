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
        image:"/images/1crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion." 
    },
    {
        id:2,
        title: "Cute Pastel Outfit Combinations and Ideas to Wear Pastel",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."         
    },
    {
        id:3,
        title: "It Really Have Good Feeling When You Enjoy Nature",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/3crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:4,
        title: "10 Ways To Meet More People While Traveling Alone",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/4crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
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
    },
    {
        id:9,
        title: "Tonight what heights we’ll hit, on with the show this is it",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/9.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:10,
        title: "Discover a better way to capture store, and waiting for an invitation see the world",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/10.jpg",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:11,
        title: "Discover a better way to capture store, and waiting for an invitation see the world",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/11.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:12,
        title: "Buy Merch for a Good Cause With These VICE Collabs",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/12.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:13,
        title: "If you’ve been waiting for an invitation, this stories is it",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/13.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:14,
        title: "Make a beauty selfie 2022: new life to go",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/14.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    },
    {
        id:15,
        title: "Everything You Should To Know About CBD Skincare",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/15.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion."      
    }
        
]

export default articlesArray