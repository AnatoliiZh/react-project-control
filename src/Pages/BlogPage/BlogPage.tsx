import React, { useEffect, useState } from 'react'
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

// type Props = {
//     changeLike: (id: number) => void
//     articlesLikeState: ArticlesLikeState
// }

// type ArticlesLikeState = {
//     [id: number]: boolean
// }

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    const [startId, setStartId] = useState(1)
    const articlesPerPage = 6
    const arrPag = []
    if (articlesArray.length / articlesPerPage > 1) {
        for (
            let index = 0;
            index < articlesArray.length % articlesPerPage;
            index++
        ) {
            arrPag[index] = index + 1
        }
    }

    return (
        <Container maxWidth="lg">
            <div className="title">Blog</div>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {articlesArray
                    .filter(
                        (filtered) =>
                            filtered.category
                                .toLowerCase()
                                .indexOf('fa'.toLowerCase()) !== -1
                    )
                    .map(
                        // {articlesArray.map(
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
                                    // changeLike={changeLike}
                                    // articlesLikeState={articlesLikeState}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
            <div className="pagination">
                {articlesArray.length / articlesPerPage > 1 && (
                    <div>
                        {arrPag.map((item) => (
                            <button className="btn-pagination">{item}</button>
                        ))}
                    </div>
                )}
            </div>
            <ButtonToTop />
        </Container>
    )
}

export default BlogPage
