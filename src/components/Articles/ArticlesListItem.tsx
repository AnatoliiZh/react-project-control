import { Card, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import CardMedia from '@mui/material/CardMedia'
import './ArticlesListItem.scss'
// import Logo from 'components/Logo/Logo'
// import Image from 'components/Image/Image'
// import img1 from 'assets/1.webp'

type Props = {
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const ArticlesListItem = ({
    title,
    category,
    date,
    comments,
    image,
}: Props) => {
    return (
        <Card
            className="article"
            variant="outlined"
            sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPositionY: '-120px',
            }}
        >
            <CardContent
                sx={{
                    paddingTop: '400px',
                }}
            >
                <div className="article-title">{title}</div>
                <div className="cat-date-com">
                    <div className="article-category">{category}</div>
                    <div className="article-date">{date}</div>
                    <div className="article-comments">{comments}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
