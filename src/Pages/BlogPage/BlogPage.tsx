import React, { useEffect } from 'react'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Container, Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'

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
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
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
                    <Grid item xs={12} sm={4} md={4} key={id}>
                        
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
    <ButtonToTop/>
    </Container>
  )
}

export default BlogPage