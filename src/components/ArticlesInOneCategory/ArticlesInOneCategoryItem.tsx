import React from 'react'

import './ArticlesInOneCategory.scss'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LabelCategory from 'components/LabelCategory/LabelCategory'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLikeState } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
    // changeLike: (id: number) => void
    // articlesLikeState: ArticlesLikeState
}

// type ArticlesLikeState = {
//     [id: number]: boolean
// }

const ArticlesInOneCategoryItem = ({
    id,
    title,
    category,
    date,
    comments,
    image,
    description,
    // changeLike,
    // articlesLikeState,
}: Props) => {
    const articlesLikeState = useAppSelector((state) => state.likeArticles)
    const dispatch = useAppDispatch()

    return (
        <div className="category-item">
            <div className="box">
                <img src={image} alt="" />
                <div className="like" onClick={() => dispatch(toggleLikeState(id))}>
                        {articlesLikeState[id] ? (
                            <FaHeart className="like-icon" />
                        ) : (
                            <FaRegHeart className="like-icon" />
                        )}
                </div>
            </div>
            <LabelCategory category={category} />
            <div className="category-title">
                <Link to={`/articles/${id}`}>{title}</Link>
            </div>
            <div className="under-title-category">
                <Author author="Robert Fox" image="/images/author1.jpeg" />
                <DateComments date={date} comments={comments} />
            </div>
            <div className="category-description">{description}</div>
            <div className="category-continue">
                <div className="category-continue-title">
                    <Link to={`/articles/${id}`}>Continue Reading</Link>
                </div>
                <div className="category-continue-arrow-box">
                    <ArrowForwardIcon className="category-continue-arrow" />
                </div>
            </div>
            
        </div>
    )
}

export default ArticlesInOneCategoryItem
