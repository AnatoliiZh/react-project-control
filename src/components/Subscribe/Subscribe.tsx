import React from 'react'
import './Subscribe.scss'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <div className='subscribe'>
        <Container maxWidth="lg" >

            <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className='subscribe-title'>Subscribe to our newsletter and stay updated</div>
                        <div className='subscribe-subtitle'>Get in touch an account.We are 24/7 available</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='subscribe-box'>
                            <input className='subscribe-input' type="email" placeholder='Enter Your email'/>
                            <button className='subscribe-btn' type="submit">Get Started</button>

                        </div>
                    </Grid>
                </Grid>
                </Container>
    </div>
    
  )
}

export default Subscribe