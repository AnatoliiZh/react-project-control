import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
// import MoreIcon from '@mui/icons-material/MoreVert'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

// import { green } from '@mui/material/colors'
import './Header.scss'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import { Link } from 'react-router-dom'
import { useAppDispatch} from 'redux/hooks'
import { setSearchText } from 'redux/searchReducer'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 60,
    },
}))

type Props = {}
const Header = (props: Props) => {
    const [query, setQuery] = useState('')
    const [isShowInput, setIsShowInput] = useState(true)


    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredText = event.target.value
        setQuery(enteredText)
    }

    const search = () => {
        setIsShowInput(!isShowInput)

    }

    const dispatch = useAppDispatch()

    return (
        <>
            <AppBar
                position="static"
                style={{
                    backgroundColor: 'white',
                    color: 'brown',
                    padding: '30px 0 ',
                    boxShadow: 'none',
                }}
            >
                <Container maxWidth="lg">
                    <StyledToolbar
                        style={{
                            margin: '0 0 20px 0',
                        }}
                    >
                        <a href="https://www.facebook.com/">
                            <Box
                                component="div"
                                sx={{
                                    marginTop: '10px',
                                    border: 'solid 1px #015BFA',
                                    color: '#015BFA',
                                    height: '30px',
                                    width: '30px',
                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaFacebookF
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>
                        <a href="https://www.instagram.com/">
                            <Box
                                component="div"
                                sx={{
                                    margin: '10px 20px ',
                                    border: 'solid 1px #FF006B',
                                    color: '#FF006B',
                                    height: '30px',
                                    width: '30px',
                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaInstagram
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>
                        <a href="https://www.twitter.com/">
                            <Box
                                component="div"
                                sx={{
                                    marginTop: '10px',
                                    border: 'solid 1px #55ACEE',
                                    color: '#55ACEE',
                                    height: '30px',
                                    width: '30px',

                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaTwitter
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>

                        <Typography
                            variant="h3"
                            align="center"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                alignSelf: 'center',
                                fontFamily: 'Syne',
                                fontSize: '42px',
                                color: 'black',
                            }}
                        >
                            Alino
                        </Typography>
                        <div className='search-box'>
                            {isShowInput && (
                                        <input
                                        className="search-input"
                                        value={query}
                                        // onChange={inputHandler}
                                        onChange={() => dispatch(setSearchText(inputHandler))}
                                        placeholder="Search in the titles..."
                                    />
                                    )}
                           

                            
                                <Link to="/search">
                                        <IconButton
                                        size="large"
                                        aria-label="search"
                                        color="inherit"
                                        sx={{ alignSelf: 'center' }}
                                        style={{
                                            height: '50px',
                                            width: '50px',
                                            color: 'white',
                                            backgroundColor: '#bd9b84',
                                            borderRadius: '50%',
                                            padding: '6px',
                                        }}
                                        onClick={search}
                                    >
                                        
                                        <SearchIcon />
                                        
                                    </IconButton>
                                </Link>
                        </div>
                    </StyledToolbar>
                    <Menu />
                </Container>
            </AppBar>
        </>
    )
}

export default Header
