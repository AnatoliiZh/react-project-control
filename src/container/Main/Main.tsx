import { Container } from '@mui/material'
import Home from 'Pages/Home/Home'
import 'swiper/css/bundle'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '50px 0' }} component="main">
            <Home />
        </Container>
    )
}
export default Main
