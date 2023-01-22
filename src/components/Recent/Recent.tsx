import React from 'react'
import './Recent.scss'

import RecentItem from './RecentItem'

import articlesArray from 'utils/articlesArray'

type RecentProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

type Props = {
    id1: number //number id of idicle
    id2: number
   
}

const Recent = ({ id1, id2}: Props) => {
    return (
        <div className="recent">
            <div className="recent-heading">Recent Stories</div>
           
            {articlesArray.filter(
                (filtered) =>
                    filtered.id === id1 ||
                    filtered.id === id2 
            ).map(
                ({
                    id,
                    title,                    
                    date,
                    comments,
                    image,
                    description,
                    
                }: RecentProps) => (
                    <RecentItem
                        id={id}
                        title={title}
                        
                        date={date}
                        comments={comments}
                        image={image}
                        key={id}
                        description={description}
                       
                    />
                )
            )}
        </div>
    )
}

export default Recent
