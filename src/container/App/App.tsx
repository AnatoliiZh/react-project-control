import CssBaseline from '@mui/material/CssBaseline'
import Header from '../Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { useState } from 'react'


type Props = {}

type ArticlesLikeState = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [articlesLikeState, setArticlesLikeState] =    
        useState<ArticlesLikeState>({
            1: true,
            2: true,
        })

    const changeLike = (id: number) => {
        setArticlesLikeState((prevState: ArticlesLikeState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
