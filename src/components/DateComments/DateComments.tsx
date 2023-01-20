import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FaRegCommentAlt } from 'react-icons/fa'
import './DateComments.scss'

type Props = {
    date: string
    comments: number
}

const DateComments = ({ date, comments }: Props) => {
    return (
        <div className="date-comments">
            <FaRegClock className="icons" />
            <div className="date">{date}</div>
            <FaRegCommentAlt className="icons" />
            <div className="article-comments">{comments}</div>
        </div>
    )
}

export default DateComments
