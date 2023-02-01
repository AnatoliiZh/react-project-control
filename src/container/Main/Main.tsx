import React from 'react'
import Home from 'Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import 'swiper/css/bundle'
import AboutPage from 'Pages/AboutPage/AboutPage'
import FavoritePage from 'Pages/FavoritePage/FavoritePage'
import BlogPage from 'Pages/BlogPage/BlogPage'
import ReviewPage from 'Pages/ReviewPage/ReviewPage'
import ArticlePage from 'Pages/ArticlePage/ArticlePage'
import CategoryPage from 'Pages/CategoryPage/CategoryPage'
import SearchPage from 'Pages/SearchPage/SearchPage'

// const [query, setQuery] = useState('')

const Main = () => {
    return (      

        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route path="about" element={<AboutPage />} />            
            <Route path="fashion"  element={ <CategoryPage  category="Fashion"/> }  />
            <Route  path="health"  element={ <CategoryPage  category="Health" /> }  />
            <Route path="lifestyle" element={  <CategoryPage category="Lifestyle" /> }  />
            <Route   path="travel" element={ <CategoryPage  category="Travel" />  } />
            <Route path="reviews" element={<ReviewPage />} />
            <Route path="blog" element={<BlogPage/>}/>
            <Route path="favorite" element={ <FavoritePage />} />
            <Route path="search" element={ <SearchPage />} />
            <Route path="articles/:id"  element={<ArticlePage />} />
        </Routes>

        
    )
}
export default Main
