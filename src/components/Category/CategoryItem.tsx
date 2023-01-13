import React from 'react'
// import { Card, CardContent } from '@mui/material'
import LinkItem from 'components/LinkItem/LinkItem'
import './Category.scss'

type Props = {
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const CategoryItem = ({ title, category, date, comments, image }: Props) => {
    return (
        <div className="category-item">
            <div className="box">
                <img src={image} alt="" />
            </div>

            <div className="category-category">
                {/* Fashion */}
                <LinkItem to={`/${category}`}>{category}</LinkItem>
            </div>
            <div className="category-title">{title}</div>
        </div>
    )
}

export default CategoryItem
