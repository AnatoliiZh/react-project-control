import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
import Search from 'components/Search/Search'

type Props = {}

const FashionPage = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <div className="title">Category : Fashion</div>
            {/* <ArticlesInOneCategory category="Fashion" /> */}
            <Grid container spacing={6}>
                <Grid item xs={8}>
                    <ArticlesInOneCategory category="Fashion" />
                </Grid>
                <Grid item xs={4}>
                    <Search />
                </Grid>
            </Grid>
        </Container>
    )
}

export default FashionPage
