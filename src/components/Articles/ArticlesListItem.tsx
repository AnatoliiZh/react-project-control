import { useState } from 'react'
import { Card, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import CardMedia from '@mui/material/CardMedia'
import './ArticlesListItem.scss'
// import Logo from 'components/Logo/Logo'
// import Image from 'components/Image/Image'
// import img1 from 'assets/1.webp'
// import Box from '@mui/material/Box'
import { FaRegClock } from 'react-icons/fa'
import { FaRegCommentAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

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
    const [like, setLike] = useState<boolean>(false)

    const onLikeClick = () => {
        setLike((prevState: boolean) => !prevState)
    }
    return (
        <Card
            className="article"
            variant="outlined"
            // sx={{
            //     backgroundImage: `linear-gradient(to top, black, 10%, transparent 20%), url(${image})`,
            //     backgroundSize: 'cover',
            //     backgroundPositionY: '0px',
            //     border: 'none',
            //     borderRadius: '0px',
            // }}
        >
            <CardContent
            // sx={{
            //     paddingTop: '400px',
            // }}
            >
                <img src={image} width="100%" alt="" />
                <div className="article-title">{title}</div>
                <div className="under-title">
                    <div className="cat-date-com">
                        <div className="article-category">{category}</div>
                        {/* <a className="article-category">{category}</a> */}
                        <FaRegClock className="icons" />
                        <div className="article-date">{date}</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">{comments}</div>
                    </div>
                    <div onClick={() => onLikeClick()}>
                        {like ? (
                            <FaHeart className="icons" />
                        ) : (
                            <FaRegHeart className="icons" />
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
