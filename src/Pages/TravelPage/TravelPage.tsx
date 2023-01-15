import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
import Search from 'components/Search/Search'
import Categories from 'components/Categories/Categories'
import SocialProfiles from 'components/SocialProfiles/SocialProfiles'

type Props = {}

const TravelPage = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <div className="title">Category : Travel</div>
            <Grid container spacing={6}>
                <Grid item xs={8}>
                    <ArticlesInOneCategory category="Travel" />
                </Grid>
                <Grid item xs={4}>
                    <Search />
                    <Categories />
                    <SocialProfiles />
                </Grid>
            </Grid>
        </Container>
    )
}

export default TravelPage
