import React from 'react'
import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import './Category.scss'
import CategoryItem from './CategoryItem'

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

const Category = ({ category }: Props) => {
    return (
        <div className="category">
            <Grid
                container
                // direction="row"
                // justifyContent="space-around"
                // alignItems="flex-start"
                spacing={6}
            >
                <Grid item xs={8}>
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
                </Grid>
                <Grid item xs={4}>
                    Search
                </Grid>
            </Grid>
        </div>
    )
}

export default Category
