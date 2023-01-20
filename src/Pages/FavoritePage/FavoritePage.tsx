import React from 'react'
import { Card, CardContent, Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesList from 'components/Articles/ArticlesList'

type Props = {
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const FavoritePage = ({ changeLike, articlesLikeState }: Props) => {
  return (
    <Container maxWidth="lg">
            <div className="title">Favorite</div> 
             
            
        </Container>
  )
}

export default FavoritePage