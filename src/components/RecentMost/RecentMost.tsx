import React from 'react'
import { Grid } from '@mui/material'
import MostRead from 'components/MostRead/MostRead'
import './RecentMost.scss'
import Recent from 'components/Recent/Recent'

type Props = {}

const RecentMost = (props: Props) => {
    return (
        <div className="recent-most">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Recent id1={12} id2={8}/>
                    
                </Grid>
                <Grid item xs={4}>
                    <MostRead id1={5} id2={6} id3={7} id4={8} />
                </Grid>
            </Grid>
        </div>
    )
}

export default RecentMost
