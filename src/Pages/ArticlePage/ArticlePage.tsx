import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import 'Pages/Pages.scss'
import ArticlesInOneCategoryItem from 'components/ArticlesInOneCategory/ArticlesInOneCategoryItem'


type Props = {}

type ArticleProps = {
  id: number
  title: string
  category: string
  date: string
  comments: number
  image: string
  description?: string
}

const ArticlePage = (props: Props) => {
  const {id} = useParams()
  // console.log(id)
  return (
    <Container maxWidth="lg">
            <div className="title">Article Page</div>
            <div className="category">
            {/* <Grid container spacing={6}>
                <Grid item xs={8}> */}
            {articlesArray
                .filter((filtered) => filtered.id === Number(id))
                .map(
                    ({
                        id,
                        title,
                        category,
                        date,
                        comments,
                        image,
                        description,
                    }: ArticleProps) => (                  
                        <ArticlesInOneCategoryItem
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            description={description}
                        />
                    )
                )}
            
        </div>
        </Container>
  )
}

export default ArticlePage