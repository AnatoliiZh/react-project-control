import React from 'react'

import './MostRead.scss'

import { FaRegClock } from 'react-icons/fa'
import { FaRegCommentAlt } from 'react-icons/fa'

type Props = {
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const MostReadItem = ({ title, category, date, comments, image }: Props) => {
    return (
        <div className="most-read-item">
            <img src={image} height="150px" alt="" />
            <div className="most-read-item-text">
                <div className="title2">{title}</div>
                <div className="under-title">
                    <FaRegClock className="icons" />
                    <div className="date">{date}</div>
                    <FaRegCommentAlt className="icons" />
                    <div className="article-comments">{comments}</div>
                </div>
            </div>
        </div>
    )
}

export default MostReadItem
