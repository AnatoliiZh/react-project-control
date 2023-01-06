import React from 'react'
import './Social.scss'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

type Props = {}

const Social = (props: Props) => {
    return (
        <div className="social">
            <div className="social-heading">Social links</div>
            <Box sx={{ width: '100%', padding: '10px' }}>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={6}>
                        <a href="https://www.facebook.com/">
                            <img
                                src="/images/facebook.svg"
                                width="100%"
                                alt="facebook"
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.twitter.com/">
                            <img
                                src="/images/twitter.svg"
                                width="100%"
                                alt="twitter"
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.linkedin.com/">
                            <img
                                src="/images/linkedin.svg"
                                width="100%"
                                alt="linkedin"
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.snapchat.com/">
                            <img
                                src="/images/snapchat.svg"
                                width="100%"
                                alt="snapchat"
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.instagram.com/">
                            <img
                                src="/images/instagram.svg"
                                width="100%"
                                alt="instagram"
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <a href="https://www.pinterest.com/">
                            <img
                                src="/images/pinterest.svg"
                                width="100%"
                                alt="pinterest"
                            />
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Social
