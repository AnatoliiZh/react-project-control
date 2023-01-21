import React from 'react'

import './MostRead.scss'
import DateComments from 'components/DateComments/DateComments'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

const MostReadItem = ({ id, title, date, comments, image }: Props) => {
    return (
        <div className="most-read-item">
            {/* <img src={image} height="150px" alt="" /> */}
            <div className="box">
                <img src={image} alt="" />
            </div>
            <div className="most-read-item-text">
                <div className="title2">
                    <Link to={`/articles/${id}`}>{title}</Link>
                </div>
                <DateComments date={date} comments={comments} />
            </div>
        </div>
    )
}

export default MostReadItem
