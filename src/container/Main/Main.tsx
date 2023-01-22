// import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import HealthPage from 'Pages/HealthPage/HealthPage'
import LifestylePage from 'Pages/LifestylePage/LifestylePage'
// import TravelPage from 'Pages/TravelPage/TravelPage'
import FashionPage from 'Pages/FashionPage/FashionPage'
import { Routes, Route } from 'react-router-dom'
import 'swiper/css/bundle'
import AboutPage from 'Pages/AboutPage/AboutPage'
import FavoritePage from 'Pages/FavoritePage/FavoritePage'
import BlogPage from 'Pages/BlogPage/BlogPage'
import ReviewPage from 'Pages/ReviewPage/ReviewPage'
import ArticlePage from 'Pages/ArticlePage/ArticlePage'
import TravelPage from 'Pages/TravelPage/TravelPage'

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
            <Route path="fashion" element={<FashionPage />} />
            <Route path="health" element={<HealthPage />} />
            <Route path="lifestyle" element={<LifestylePage />} />
            <Route path="travel" element={<TravelPage />} />
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
