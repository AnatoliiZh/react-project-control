import React from 'react'
import { Grid } from '@mui/material'
import MostRead from 'components/MostRead/MostRead'
import { FaRegClock } from 'react-icons/fa'
import { FaRegCommentAlt } from 'react-icons/fa'
import './RecentMost.scss'

type Props = {}

const RecentMost = (props: Props) => {
    return (
        <div className="recent-most">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className="recent-heading">Recent Stories</div>
                    <div className="recent-item">
                        <img
                            src="/images/1rec_crop.webp"
                            height="340px"
                            alt=""
                        />
                        <div className="recent-item-text">
                            <div className="recent-title">
                                Buy Merch for a Good Cause With These VICE
                                Collabs
                            </div>
                            <div className="text">
                                Struggling to sell one multi-million dollar home
                                currently on the market won’t stop actress and
                                singer Jennifer Lopez from expanding her
                                property collection. Lopez has reportedly added
                            </div>
                            <div className="under-title">
                                <img
                                    src="/images/author1.jpeg"
                                    height="34px"
                                    alt=""
                                />
                                <div className="author">Robert Fox</div>
                                <FaRegClock className="icons" />
                                <div className="recent-date">Mar 6, 2022</div>
                                <FaRegCommentAlt className="icons" />
                                <div className="article-comments">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="recent-item">
                        <img
                            src="/images/2rec_crop.webp"
                            height="340px"
                            alt=""
                        />
                        <div className="recent-item-text">
                            <div className="recent-title">
                                Here’s All the Fashion News You already Missed
                            </div>
                            <div className="text">
                                Struggling to sell one multi-million dollar home
                                currently on the market won’t stop actress and
                                singer Jennifer Lopez from expanding her
                                property collection. Lopez has reportedly added
                            </div>
                            <div className="under-title">
                                <img
                                    src="/images/author1.jpeg"
                                    height="34px"
                                    alt=""
                                />
                                <div className="author">Robert Fox</div>
                                <FaRegClock className="icons" />
                                <div className="recent-date">Mar 6, 2022</div>
                                <FaRegCommentAlt className="icons" />
                                <div className="recent-comments">0</div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <MostRead id1={5} id2={6} id3={7} id4={8} />
                </Grid>
            </Grid>
        </div>
    )
}

export default RecentMost