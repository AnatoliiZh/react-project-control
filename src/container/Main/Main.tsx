// import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import HealthPage from 'Pages/HealthPage/HealthPage'
import LifestylePage from 'Pages/LifestylePage/LifestylePage'
import TravelPage from 'Pages/TravelPage/TravelPage'
import FashionPage from 'Pages/FashionPage/FashionPage'
import { Routes, Route } from 'react-router-dom'
import 'swiper/css/bundle'
import AboutPage from 'Pages/AboutPage/AboutPage'

type Props = {}
const Main = (props: Props) => {
    return (
        // <Container maxWidth={false} sx={{ padding: '50px 0' }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="fashion" element={<FashionPage />} />
            <Route path="health" element={<HealthPage />} />
            <Route path="lifestyle" element={<LifestylePage />} />
            <Route path="travel" element={<TravelPage />} />
        </Routes>
        // </Container>
    )
}
export default Main
