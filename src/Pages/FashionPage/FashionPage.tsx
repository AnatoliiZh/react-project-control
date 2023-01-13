import React from 'react'
import { Container } from '@mui/material'
import 'Pages/Pages.scss'
import Category from 'components/Category/Category'

type Props = {}

const FashionPage = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <div className="title">Category : Fashion</div>
            <Category category="Fashion" />
        </Container>
    )
}

export default FashionPage
