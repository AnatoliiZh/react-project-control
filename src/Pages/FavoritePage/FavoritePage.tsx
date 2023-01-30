import React from 'react'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'
import { Container, Grid } from '@mui/material'
import 'Pages/Pages.scss'
import {  useAppSelector } from 'redux/hooks'

type ArticleProps = {
  id: number
  title: string
  category: string
  date: string
  comments: number
  image: string
}

const FavoritePage = () => { 
  
   const articlesLikeState = useAppSelector((state) => state.likeArticles)
// console.log(articlesLikeState[3])
// console.log(Object.keys(articlesLikeState))

  return (
<div className='favorite'>
    <Container maxWidth='lg'>
      <div className="title">Favorite</div>
      <div className='favorite-message'>
      {/* {(articlesArray.filter((filtered) => articlesLikeState[filtered.id] === true).length === 0) && <h2>You have not favorite articles</h2>} */}
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