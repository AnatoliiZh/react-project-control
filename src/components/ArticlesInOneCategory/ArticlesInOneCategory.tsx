import React from 'react'
// import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './ArticlesInOneCategory.scss'
import ArticlesInOneCategoryItem from './ArticlesInOneCategoryItem'

type Props = {
    category: string
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
}

type ArticlesLikeState = {
    [id: number]: boolean
}

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

const ArticlesInOneCategory = ({ changeLike,
    articlesLikeState, category }: Props) => {
    return (
        <div className="category">
            {/* <Grid container spacing={6}>
                <Grid item xs={8}> */}
            {articlesArray
                .filter((filtered) => filtered.category === category)
                .map(
                    ({
                        id,
                        title,
                        category,
                        date,
                        comments,
                        image,
                        description,
                    }: ArticleProps) => (
                        <ArticlesInOneCategoryItem
                            id={id}
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            description={description}
                            changeLike={changeLike}
                            articlesLikeState={articlesLikeState}
                            key={id}
                        />
                    )
                )}
        </div>
    )
}

export default ArticlesInOneCategory
