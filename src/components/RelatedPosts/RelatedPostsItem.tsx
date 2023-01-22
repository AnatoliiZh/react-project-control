import React from 'react'
// import { Card, CardContent } from '@mui/material'
// import LinkItem from 'components/LinkItem/LinkItem'
// import './ArticlesInOneCategory.scss'
// import DateComments from 'components/DateComments/DateComments'
// import Author from 'components/Author/Author'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
// import LabelCategory from 'components/LabelCategory/LabelCategory'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Card, CardContent } from '@mui/material'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

const RelatedPostsItem = ({
    id,
    title,
    // category,
    date,
    comments,
    image,
    // description,
}: Props) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
    <Grid item xs>
    <Card
            className="article"
            variant="outlined"
            sx={{
                border: 'none',
                borderRadius: '0px',
            }}
        >
            <CardContent
                sx={{
                    padding: '0',

                    // border: 'none',
                    // borderRadius: '0px',
                }}
            >

        <div className="category-item">
            <div className="box">
                <img src={image} alt="" />
            </div>
            
            <div className="category-title">
                <Link to={`/articles/${id}`}>{title}</Link>
            </div>
            {/* <div className="under-title-category">
                <Author author="Robert Fox" image="/images/author1.jpeg" />
                <DateComments date={date} comments={comments} />
            </div> */}
            
            
        </div>
</CardContent>
        </Card>
        </Grid>
        
</Grid>

        
    )
}

export default RelatedPostsItem
