import React from 'react'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Container, Grid } from '@mui/material'
import 'Pages/Pages.scss'

type ArticleProps = {
  id: number
  title: string
  category: string
  date: string
  comments: number
  image: string
}

type Props = {
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
    
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const FavoritePage = ({ changeLike, articlesLikeState }: Props) => { 
  // console.log(articlesLikeState)
  return (
<div className='favorite'>
    <Container maxWidth='lg'>
      <div className="title">Favorite</div>
      <div className='favorite-message'>
      {(articlesArray.filter((filtered) => articlesLikeState[filtered.id] === true).length === 0) && <h2>You have not favorite articles</h2>}
    </div>
    <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
    >
     
        {articlesArray.filter((filtered) => articlesLikeState[filtered.id] === true).map(
        // {articlesArray.map(
                ({
                    id,
                    title,
                    category,
                    date,
                    comments,
                    image,
                }: ArticleProps) => (
                    <Grid item xs={12} sm={4} md={4} key={id}>
                        
                        <ArticlesListItem
                            id={id}
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            changeLike={changeLike}
                            articlesLikeState={articlesLikeState}
                        />
                    </Grid>
                )
            )}
    </Grid>
    </Container>
    </div>
  )
}

export default FavoritePage