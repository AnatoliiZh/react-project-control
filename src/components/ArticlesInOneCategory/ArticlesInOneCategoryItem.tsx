import React from 'react'
// import { Card, CardContent } from '@mui/material'
// import LinkItem from 'components/LinkItem/LinkItem'
import './ArticlesInOneCategory.scss'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LabelCategory from 'components/LabelCategory/LabelCategory'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

const ArticlesInOneCategoryItem = ({
    id,
    title,
    category,
    date,
    comments,
    image,
    description,
}: Props) => {
    return (
        <div className="category-item">
            <div className="box">
                <img src={image} alt="" />
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
