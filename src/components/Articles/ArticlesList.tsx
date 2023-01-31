import { Grid } from '@mui/material'
import ArticlesListItem from './ArticlesListItem'
import articlesArray from 'utils/articlesArray'

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {
    startId: number
    articlesPerPage: number
    query: string
}

const ArticlesList = ({ startId, articlesPerPage, query }: Props) => {
    // console.log((articlesArray[6].category))
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {query === '' &&
                    articlesArray
                        .slice(startId - 1, startId + articlesPerPage - 1)
                        .map(
                            ({
                                id,
                                title,
                                category,
                                date,
                                comments,
                                image,
                            }: ArticleProps) => (
                                <Grid item xs={12} sm={6} md={6} key={id}>
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
                {query !== '' &&
                    articlesArray
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
                                <Grid item xs={12} sm={6} md={6} key={id}>
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
        </>
    )
}

export default ArticlesList
