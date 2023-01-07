import React from 'react'
import './MostRead.scss'
// import { FaRegClock } from 'react-icons/fa'
// import { FaRegCommentAlt } from 'react-icons/fa'
import MostReadItem from './MostReadItem'
import MostReadArray from 'utils/mostReadArray'

type MostReadProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {
    start: number
    end: number
}

const MostRead = ({ start, end }: Props) => {
    return (
        <div className="most-read">
            <div className="most-read-heading">Most Read</div>
            {MostReadArray.slice(start, end).map(
                ({
                    id,
                    title,
                    category,
                    date,
                    comments,
                    image,
                }: MostReadProps) => (
                    <MostReadItem
                        title={title}
                        category={category}
                        date={date}
                        comments={comments}
                        image={image}
                    />
                )
            )}
        </div>
    )
}

export default MostRead
