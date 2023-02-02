import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
// import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
// import Search from 'components/Search/Search'

import ButtonToTop from 'components/ButtonToTop/ButtonToTop'
// import ArticlesList from 'components/Articles/ArticlesList'
import articlesArray from 'utils/articlesArray'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import { useAppSelector } from 'redux/hooks'
// import ArticlesList from 'components/Articles/ArticlesList'

type Props = {
    // query?:string
}

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const SearchPage = (props: Props) => {
    const query = useAppSelector((state) => state.searching.searchText)

    return (
        <Container maxWidth="lg">
            <div className="title">Result of search : {query}</div>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {articlesArray
                    .filter(
                        (filtered) =>
                            filtered.title
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) !== -1
                    )
                    .map(
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
            <ButtonToTop />
        </Container>
    )
}

export default SearchPage
