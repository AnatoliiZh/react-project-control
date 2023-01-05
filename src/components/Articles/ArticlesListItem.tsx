import { useState } from 'react'
import { Card, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'

import './ArticlesListItem.scss'

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
            sx={{
                border: 'none',
                borderRadius: '0px',
            }}
        >
            <CardContent
                sx={{
                    padding: '0',

                    // border: 'none',
                    // borderRadius: '0px',
                }}
            >
                <img src={image} width="100%" alt="" />

                <div className="article-title">{title}</div>
                <div className="under-title">
                    <div className="cat-date-com">
                        <div className="article-category">{category}</div>
                        {/* <Routes>                
                            <Route path="fashion" element={<FashionPage />} />
                        </Routes> */}

                        <FaRegClock className="icons" />
                        <div className="article-date">{date}</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">{comments}</div>
                    </div>
                    <div onClick={() => onLikeClick()}>
                        {like ? (
                            <FaHeart className="like" />
                        ) : (
                            <FaRegHeart className="like" />
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
