import React, { useEffect, useState } from 'react'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Container, Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type TypeSearch = {
    text: string
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

    const [page, setPage] = React.useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        // setStartId((page - 1) * 6 + 1)
    }

    console.log(startId)

    // const [query, setQuery] = useState('')

    // const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const enteredName = event.target.value
    //     setQuery(enteredName)
    // }

    // const search = () => {
    //     //   const foundItems = PRODUCTS.filter((item) =>
    //     //     item.name.toLowerCase().includes(query.toLowerCase())
    //     //   );
    //     //   setResult(foundItems);
    // }

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
                {/* {articlesArray
                    .filter(
                        (filtered) =>
                            filtered.title
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) !== -1
                    )
                    .map( */}
                {/* {articlesArray.map( */}
                {articlesArray
                    .slice(
                        (page - 1) * 6 + 1 - 1,
                        (page - 1) * 6 + 1 + articlesPerPage - 1
                    )
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

                                    // changeLike={changeLike}
                                    // articlesLikeState={articlesLikeState}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
            {/* <div className="pagination">
                {articlesArray.length / articlesPerPage > 1 && (
                    <div>
                        {arrPag.map((item) => (
                            <button
                                className="btn-pagination"
                                key={item}
                                onClick={() => setStartId((item - 1) * 6 + 1)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div> */}
            <ButtonToTop />
            {/* <div className="wrapper">
                <input
                    value={query}
                    onChange={inputHandler}
                    placeholder="Search products"
                    className="input"
                />

                <button onClick={search}>Search</button>
            </div> */}
            <Stack spacing={2}>
                <div className="pagination">
                    <Pagination
                        count={articlesArray.length % articlesPerPage}
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            </Stack>
        </Container>
    )
}

export default BlogPage
