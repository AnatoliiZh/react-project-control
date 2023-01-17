import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <Container maxWidth="lg">
            <div className="title">About</div>
            <img
                                src="/images/about.jpg"
                                width="100%"
                                alt="about"
                            />
            <div className='about-text'></div>
           
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </Container>
  )
}

export default AboutPage