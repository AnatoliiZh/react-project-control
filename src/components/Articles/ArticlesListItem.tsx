import { Card, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'

import './ArticlesListItem.scss'

// import { FaRegClock } from 'react-icons/fa'
// import { FaRegCommentAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

import LinkItem from 'components/LinkItem/LinkItem'
import DateComments from 'components/DateComments/DateComments'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLikeState } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const ArticlesListItem = ({
    id,
    title,
    category,
    date,
    comments,
    image,
}: Props) => {
    const isLiked = useAppSelector((state) => state.likeArticles[id])
    const dispatch = useAppDispatch()

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
                }}
            >
                <div className="gradient article-box-img">
                    <img src={image} alt="" />
                </div>

                <div className="article-title">
                    <Link to={`/articles/${id}`}>{title}</Link>{' '}
                </div>
                <div className="under-title">
                    <div className="cat-date-com">
                        <div className="link-category">
                            <LinkItem to={`/${category}`}>{category}</LinkItem>
                        </div>

                        <DateComments date={date} comments={comments} />
                    </div>
                    <button
                        className="like"
                        onClick={() => dispatch(toggleLikeState(id))}
                    >
                        {isLiked ? (
                            <FaHeart className="like-icon" />
                        ) : (
                            <FaRegHeart className="like-icon" />
                        )}
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
