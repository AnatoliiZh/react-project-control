import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="footer-title-1">Alino</div>
                        <div className="footer-line"></div>
                        <div className="footer-text-1">
                            The stars will never align, and the traffic lights
                            of life will never all be green at the same time.
                        </div>
                        <div className="footer-address-phone">
                            <span className="footer-span">Address:</span> Lorem
                            15 Str., 4844, State, UK
                        </div>
                        <div className="footer-address-phone">
                            <span className="footer-span">Phone:</span>{' '}
                            +30-2106019311
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer
