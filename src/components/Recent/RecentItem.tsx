import React from 'react'

import './Recent.scss'
import DateComments from 'components/DateComments/DateComments'
import Author from 'components/Author/Author'



type Props = {
    title: string
    
    date: string
    comments: number
    image: string
    description?: string
}

const RecentItem = ({ title, date, comments, image, description }: Props) => {
    return (
        <div className="recent-item">
            <div className="box">
                <img src={image}  alt="" />
            </div> 
            {/* <img src={image} width="400px" alt="" /> */}
            <div className="recent-item-text">
                <div className="title2">{title}</div>
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

