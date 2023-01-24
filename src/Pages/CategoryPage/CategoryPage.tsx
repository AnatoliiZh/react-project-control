import React, { useEffect } from 'react'

import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
import Search from 'components/Search/Search'
import Categories from 'components/Categories/Categories'
import SocialProfiles from 'components/SocialProfiles/SocialProfiles'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'

type Props = {
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
    category: string
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const CategoryPage = ({ articlesLikeState, changeLike, category }: Props) => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <Container maxWidth="lg">
            <div className="title">Category : {category}</div>
            {/* <ArticlesInOneCategory category="Fashion" /> */}
            <Grid container spacing={6}>
                <Grid item xs={8}>
                    <ArticlesInOneCategory
                        category={category}
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Search />
                    <Categories />
                    <SocialProfiles />
                </Grid>
            </Grid>
            <ButtonToTop />
            
        </Container>
    )
}

export default CategoryPage
