import { Card, CardActions, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import CardMedia from '@mui/material/CardMedia'
import './ArticlesListItem.scss'
// import Logo from 'components/Logo/Logo'
// import Image from 'components/Image/Image'
import img1 from 'assets/1.webp'

type Props = {
    title: string
    category: string
    date: string
    comments: number
}

const ArticlesListItem = ({ title, category, date, comments }: Props) => {
    return (
        <Card
            className="article"
            variant="outlined"
            sx={{
                backgroundImage: `url(${img1})`,
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
            <CardActions className="btns-wrap"></CardActions>
        </Card>
    )
}

export default ArticlesListItem
