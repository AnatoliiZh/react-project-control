import React from 'react'
import { Container } from '@mui/material'
import 'Pages/Pages.scss'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

const ReviewPage = (props: Props) => {
  return (
    <Container maxWidth="lg">
            <div className="title">Reviews</div>
            
            <Reviews/>
        
        </Container>
  )
}

export default ReviewPage