import React from 'react'
// import { Grid } from '@mui/material'
// import articlesArray from 'utils/articlesArray'
import './RelatedPosts.scss'
// import ArticlesListItem from './ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Grid } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {

    category: string
}


const RelatedPosts = ({ category }: Props) => {
    return (
        <div className="related">
            <div className="related-title">Related Posts</div>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {articlesArray
                    .filter((filtered) => filtered.category === category)
                    .slice(0, 3)
                    .map(
                        ({
                            id,
                            title,
                            category,
                            date,
                            comments,
                            image,
                        }: ArticleProps) => (
                            <Grid item xs={12} sm={4} md={4} key={id}>
                                <ArticlesListItem
                                    id={id}
                                    title={title}
                                    category={category}
                                    date={date}
                                    comments={comments}
                                    image={image}                             
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </div>
    )
}

export default RelatedPosts
