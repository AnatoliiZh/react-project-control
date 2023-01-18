import { Card, CardContent } from '@mui/material'
// import Typography from '@mui/material/Typography'

import './ArticlesListItem.scss'

// import { FaRegClock } from 'react-icons/fa'
// import { FaRegCommentAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

import LinkItem from 'components/LinkItem/LinkItem'
import DateComments from 'components/DateComments/DateComments'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    changeLike: (id: number) => void
    articlesLikeState: ArticlesLikeState
}

type ArticlesLikeState = {
    [id: number]: boolean
}

const ArticlesListItem = ({
    id,
    title,
    category,
    date,
    comments,
    image,
    changeLike,
    articlesLikeState,
}: Props) => {
    // const [like, setLike] = useState<boolean>(false)

    // const onLikeClick = () => {
    //     setLike((prevState: boolean) => !prevState)
    // }
    return (
        <Card
            className="article"
            variant="outlined"
            sx={{
                border: 'none',
                borderRadius: '0px',
            }}
        >
            <CardContent
                sx={{
                    padding: '0',

                    // border: 'none',
                    // borderRadius: '0px',
                }}
            >
                <div className="gradient">
                    <img src={image} width="100%" alt="" />
                </div>

                <div className="article-title">{title}</div>
                <div className="under-title">
                    <div className="cat-date-com">
                        <div className="link-category">
                            <LinkItem to={`/${category}`}>{category}</LinkItem>
                        </div>

                        {/* <FaRegClock className="icons" />
                        <div className="article-date">{date}</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">{comments}</div> */}
                        <DateComments date={date} comments={comments} />
                    </div>
                    <div className="like" onClick={() => changeLike(id)}>
                        {articlesLikeState[id] ? (
                            <FaHeart className="like-icon" />
                        ) : (
                            <FaRegHeart className="like-icon" />
                        )}
                    </div>
                    {/* <Button variant="outlined" onClick={() => changeLike(id)}>
                        {articlesLikeState[id] ? (
                            <FaHeart className="like" />
                        ) : (
                            <FaRegHeart className="like" />
                        )}
                    </Button> */}
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticlesListItem
