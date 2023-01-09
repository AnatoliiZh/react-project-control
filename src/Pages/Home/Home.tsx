import { Typography } from '@mui/material'
import ArticlesList from 'components/Articles/ArticlesList'
import { Grid } from '@mui/material'
import './Home.scss'
import { Container } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import MostRead from 'components/MostRead/MostRead'
import Social from 'components/Social/Social'
import RecentMost from 'components/RecentMost/RecentMost'
import Slider from 'components/Slider/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 10000,
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
                    <img src="/images/1crop.webp" alt="слайд 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/2crop.webp" alt="слайд 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/3crop.webp" alt="слайд 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/4crop.webp" alt="слайд 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/5.webp" alt="слайд 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/6.webp" alt="слайд 6" />
                </SwiperSlide>
            </Swiper>
            <Container maxWidth="xl" sx={{ padding: '50px 0' }}>
                <Typography
                    align="left"
                    component="h2"
                    sx={{
                        marginBottom: '30px',
                        fontFamily: 'Syne',
                        fontSize: '30px',
                    }}
                >
                    Popular Stories{''}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <ArticlesList />
                    </Grid>
                    <Grid item xs={4}>
                        <MostRead id1={1} id2={2} id3={3} id4={4} />
                        <Social />
                    </Grid>
                </Grid>
                <RecentMost />
                <div className="banner">
                    <img src="/images/banner.jpg" width="" alt="ads" />
                </div>
                <Slider />
            </Container>
        </>
    )
}
export default Home
