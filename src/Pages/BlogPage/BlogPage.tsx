import React, { useEffect } from 'react'
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


const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

   
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


    // for pagination
    const [page, setPage] = React.useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)       
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
                        (page - 1) * articlesPerPage + 1 - 1,
                        (page - 1) * articlesPerPage + 1 + articlesPerPage - 1
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

                                />
                            </Grid>
                        )
                    )}
            </Grid>
            
            <ButtonToTop />
            
            <Stack spacing={2}>
                <div className="pagination">
                    <Pagination
                        count={articlesArray.length % articlesPerPage}
                        page={page}
                        onChange={handleChange}
                        size="large"
                        
                    />
                </div>
            </Stack>
        </Container>
        
    )
}

export default BlogPage
