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
    id1: number //number id of idicle
    id2: number
    id3: number
    id4: number
}

const MostRead = ({ id1, id2, id3, id4 }: Props) => {
    return (
        <div className="most-read">
            <div className="most-read-heading">Most Read</div>
            {/* {MostReadArray.slice(start, end).map( */}
            {MostReadArray.filter(
                (filtered) =>
                    filtered.id === id1 ||
                    filtered.id === id2 ||
                    filtered.id === id3 ||
                    filtered.id === id4
            ).map(
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
                        key={id}
                    />
                )
            )}
        </div>
    )
}

export default MostRead
