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
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
    startId: number
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const ArticlesList = ({ changeLike, articlesLikeState, startId }: Props) => {
    return (
        <>
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
                            filtered.id >= startId && filtered.id <= startId + 3
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
                                    changeLike={changeLike}
                                    articlesLikeState={articlesLikeState}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default ArticlesList
