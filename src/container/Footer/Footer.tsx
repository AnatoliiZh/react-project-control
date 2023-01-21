import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import LinkItem from 'components/LinkItem/LinkItem'
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
                    <Grid item xs={3}>
                        <div className="footer-2">
                            <div className="footer-title-2">Quick Links</div>
                            <div className="footer-line"></div>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <LinkItem to={`/About`}>About</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Blog`}>Blog</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/`}>Home</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Favorite`}>Favorite</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Reviews`}>Reviews</LinkItem>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="footer-3">
                            <div className="footer-title-3">About</div>
                            <div className="footer-line"></div>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <LinkItem to={`/About`}>About</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Blog`}>Blog</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/`}>Home</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Favorite`}>Favorite</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Reviews`}>Reviews</LinkItem>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="footer-4">
                            <div className="footer-title-4">Categories</div>
                            <div className="footer-line"></div>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <LinkItem to={`/Fashion`}>Fashion</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Health`}>Health</LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Lifestyle`}>
                                        Lifestyle
                                    </LinkItem>
                                </li>
                                <li className="footer-list-item">
                                    <LinkItem to={`/Travel`}>Travel</LinkItem>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <div className="footer-bottom">
                    Copyright © Alino 2022. All rights reserved
                </div>
            </Container>
        </div>
    )
}

export default Footer
