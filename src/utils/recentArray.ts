type RecentProps = {
    id:number
    title: string
    category: string
    date: string
    comments: number
    image:string
    text:string
    author: string
    image_author:string
}

const recentArray:RecentProps[] = [
    {
        id:1,
        title: "Buy Merch for a Good Cause With These VICE Collabs",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/1crop.webp",
        text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added",
        author: "Robert Fox",
        image_author: "/images/1crop.webp"
    },
    {
        id:2,
        title: "Here’s All the Fashion News You already Missed",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2crop.webp",
        text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added",
        author: "Robert Fox",
        image_author: "/images/2crop.webp"
    }
]

export default recentArray