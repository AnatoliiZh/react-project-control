import React from 'react'
// import { Card, CardContent } from '@mui/material'
import LinkItem from 'components/LinkItem/LinkItem'
import './ArticlesInOneCategory.scss'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LabelCategory from 'components/LabelCategory/LabelCategory'

type Props = {
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

const ArticlesInOneCategoryItem = ({
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

            {/* <div className="category-category">                
                <LinkItem to={`/${category}`}>{category}</LinkItem>
            </div> */}

            <LabelCategory category={category}/>
            
            <div className="category-title">{title}</div>
            <div className="under-title-category">
                <Author author="Robert Fox" image="/images/author1.jpeg" />
                <DateComments date={date} comments={comments} />
            </div>
            <div className="category-description">{description}</div>
            <div className="category-continue">
                <div className="category-continue-title">Continue Reading</div>
                <div className="category-continue-arrow-box">
                    <ArrowForwardIcon className="category-continue-arrow" />
                </div>
            </div>
        </div>
    )
}

export default ArticlesInOneCategoryItem
