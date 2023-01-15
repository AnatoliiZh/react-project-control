import React from 'react'
// import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './ArticlesInOneCategory.scss'
import CategoryItem from './ArticlesInOneCategoryItem'

type Props = {
    category: string
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

const ArticlesInOneCategory = ({ category }: Props) => {
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
                        <CategoryItem
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            description={description}
                        />
                    )
                )}
            {/* </Grid>
                <Grid item xs={4}>
                    Search
                </Grid>
            </Grid> */}
        </div>
    )
}

export default ArticlesInOneCategory
