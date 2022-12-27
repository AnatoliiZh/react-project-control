import { Typography } from '@mui/material'
import ArticlesList from 'components/Articles/ArticlesList'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
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
            <ArticlesList />
        </>
    )
}
export default Home
