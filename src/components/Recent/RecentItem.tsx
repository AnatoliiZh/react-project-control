import React from 'react'

import './Recent.scss'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'
import { Link } from 'react-router-dom'



type Props = {
    id:number
    title: string
    
    date: string
    comments: number
    image: string
    description?: string
}

const RecentItem = ({ id, title, date, comments, image, description }: Props) => {
    return (
        <div className="recent-item">
            <div className="recent-box">
                <img src={image}  alt="" />
            </div> 
           
            <div className="recent-item-text">
                <div className="title2"><Link to={`/articles/${id}`}>{title}</Link></div>
                <div className="recent-description">{description}</div>
                <div className="recent-under-title">
                   
                <Author author="Robert Fox" image="/images/author1.jpeg" />
                <DateComments date={date} comments={comments} />
                </div>
            </div>
        </div>
    )
}

export default RecentItem

