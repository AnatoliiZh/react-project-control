type ArticleProps = {
    id:number
    title: string
    category: string
    date: string
    comments: number
    image:string
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
    category: "Fashion",
    date: "Mar 6, 2022",
    comments: 0,
    image:"/images/2crop.webp"
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
    }
]

export default articlesArray