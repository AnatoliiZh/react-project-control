import CssBaseline from '@mui/material/CssBaseline'
import Header from '../Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

import './App.scss'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/1.webp" alt="слайд 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/2.webp" alt="слайд 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/3.webp" alt="слайд 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/4.webp" alt="слайд 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/5.webp" alt="слайд 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/6.webp" alt="слайд 6" />
                </SwiperSlide>
            </Swiper>
            <Main />
        </StyledEngineProvider>
    )
}
export default App
