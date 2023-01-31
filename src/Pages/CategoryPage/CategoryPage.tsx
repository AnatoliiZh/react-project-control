import React, { useEffect, useState } from 'react'

import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
// import Search from 'components/Search/Search'
import Categories from 'components/Categories/Categories'
import SocialProfiles from 'components/SocialProfiles/SocialProfiles'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'
import ArticlesList from 'components/Articles/ArticlesList'

type Props = {
    // changeLike: (id: number) => void
    // articlesLikeState: ArticlesLikeState
    category: string
}

// type ArticlesLikeState = {
//     [id: number]: boolean
// }

const CategoryPage = ({ category }: Props) => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    const [query, setQuery] = useState('')

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredText = event.target.value
        setQuery(enteredText)
    }

    const search = () => {
        //   const foundItems = PRODUCTS.filter((item) =>
        //     item.name.toLowerCase().includes(query.toLowerCase())
        //   );
        setQuery('')
    }

    return (
        <Container maxWidth="lg">
            {query === '' && <div className="title">Category : {category}</div>}
            {query !== '' && <div className="title">Search : {query}</div>}

            <Grid container spacing={6}>
                <Grid item xs={8}>
                    {query === '' && (
                        <ArticlesInOneCategory category={category} />
                    )}
                    {query !== '' && (
                        <ArticlesList
                            startId={1}
                            articlesPerPage={4}
                            query={query}
                        />
                    )}
                </Grid>
                <Grid item xs={4}>
                    {/* <Search /> */}
                    <div>
                        <div className="search-heading">
                            <div className="search-title">Search</div>
                            <div className="search-line"></div>
                        </div>
                        {/* <div className="search-input-box">
                            <input
                                className="search-input"
                                type="text"
                                name=""
                                id=""
                            />
                            <button className="search-btn">Search</button>
                        </div> */}
                        <div className="search-input-box">
                            <input
                                className="search-input"
                                value={query}
                                onChange={inputHandler}
                                placeholder="Search in the titles..."
                            />
                            {query === '' && (
                                <button className="search-btn" onClick={search}>
                                    Search
                                </button>
                            )}
                            {query !== '' && (
                                <button className="search-btn" onClick={search}>
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    <Categories />
                    <SocialProfiles />
                </Grid>
            </Grid>
            <ButtonToTop />
        </Container>
    )
}

export default CategoryPage
