import { Typography } from '@mui/material'
import ArticlesList from 'components/Articles/ArticlesList'
import { Grid } from '@mui/material'
import './Home'

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
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ArticlesList />
                </Grid>
                <Grid item xs={4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil fuga quasi dolor earum amet nisi repellendus debitis
                    nam, quae est eligendi voluptas veritatis dicta ratione sunt
                    magni dignissimos autem repudiandae.
                </Grid>
            </Grid>
        </>
    )
}
export default Home
