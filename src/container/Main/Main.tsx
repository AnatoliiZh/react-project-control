// import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
// import HealthPage from 'Pages/HealthPage/HealthPage'
// import LifestylePage from 'Pages/LifestylePage/LifestylePage'
// import TravelPage from 'Pages/TravelPage/TravelPage'
// import FashionPage from 'Pages/FashionPage/FashionPage'
import { Routes, Route } from 'react-router-dom'
import 'swiper/css/bundle'
import AboutPage from 'Pages/AboutPage/AboutPage'
import FavoritePage from 'Pages/FavoritePage/FavoritePage'
import BlogPage from 'Pages/BlogPage/BlogPage'
import ReviewPage from 'Pages/ReviewPage/ReviewPage'
import ArticlePage from 'Pages/ArticlePage/ArticlePage'
// import TravelPage from 'Pages/TravelPage/TravelPage'
import CategoryPage from 'Pages/CategoryPage/CategoryPage'

type Props = {
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const Main = ({ changeLike, articlesLikeState }: Props) => {
    return (
        // <Container maxWidth={false} sx={{ padding: '50px 0' }}>

        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                    />
                }
            />
            <Route path="about" element={<AboutPage />} />
            {/* <Route path="fashion" element={<FashionPage changeLike={changeLike}
                            articlesLikeState={articlesLikeState}/>} /> */}

            <Route
                path="fashion"
                element={
                    <CategoryPage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                        category="Fashion"
                    />
                }
            />
            <Route
                path="health"
                element={
                    <CategoryPage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                        category="Health"
                    />
                }
            />
            <Route
                path="lifestyle"
                element={
                    <CategoryPage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                        category="Lifestyle"
                    />
                }
            />
            <Route
                path="travel"
                element={
                    <CategoryPage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                        category="Travel"
                    />
                }
            />
            <Route path="reviews" element={<ReviewPage />} />
            <Route
                path="blog"
                element={
                    <BlogPage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                    />
                }
            />
            <Route
                path="favorite"
                element={
                    <FavoritePage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                    />
                }
            />
            <Route
                path="articles/:id"
                element={
                    <ArticlePage
                        changeLike={changeLike}
                        articlesLikeState={articlesLikeState}
                    />
                }
            />
        </Routes>

        // </Container>
    )
}
export default Main
