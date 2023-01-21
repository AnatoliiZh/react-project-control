import React from 'react'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Container, Grid } from '@mui/material'
import 'Pages/Pages.scss'

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const BlogPage = ({ changeLike, articlesLikeState }: Props) => {
  return (
    <Container maxWidth='lg'>
        <div className="title">Blog</div>
        
    <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
    >
        {articlesArray.map(
                ({
                    id,
                    title,
                    category,
                    date,
                    comments,
                    image,
                }: ArticleProps) => (
                    <Grid item xs={12} sm={6} md={6} key={id}>
                        
                        <ArticlesListItem
                            id={id}
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            changeLike={changeLike}
                            articlesLikeState={articlesLikeState}
                        />
                    </Grid>
                )
            )}
    </Grid>
    </Container>
  )
}

export default BlogPage