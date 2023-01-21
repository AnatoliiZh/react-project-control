import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import articlesArray from 'utils/articlesArray'
// import 'Pages/Pages.scss'
import './ArticlePage.scss'
import { Grid } from '@mui/material'
import Search from 'components/Search/Search'
import Categories from 'components/Categories/Categories'
import SocialProfiles from 'components/SocialProfiles/SocialProfiles'
import Reviews from 'components/Reviews/Reviews'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'
import LabelCategory from 'components/LabelCategory/LabelCategory'

type Props = {}

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    content: string
}

const ArticlePage = (props: Props) => {
    const { id } = useParams()
    // console.log(id)
    return (
        <Container maxWidth="lg">
            {/* <div className="title">Article Page</div> */}
            <Grid container spacing={6}>
                <Grid item xs={8}>
                    <div className="article">
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
                                    content,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <div className="box">
                                            <img src={image} alt="" />
                                        </div>
                                        <LabelCategory category={category} />

                                        <div className="article-title">
                                            {title}
                                        </div>
                                        <div className="under-title-article">
                                            <Author
                                                author="Robert Fox"
                                                image="/images/author1.jpeg"
                                            />
                                            <DateComments
                                                date={date}
                                                comments={comments}
                                            />
                                        </div>
                                        <div
                                            className="article-content"
                                            dangerouslySetInnerHTML={{
                                                __html: content,
                                            }}
                                        ></div>
                                    </div>
                                )
                            )}
                    </div>
                    <Reviews />
                </Grid>
                <Grid item xs={4}>
                    <Search />
                    <Categories />
                    <SocialProfiles />
                    <LabelCategory category="Health" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticlePage
