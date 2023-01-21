import React from 'react'
import articlesArray from 'utils/articlesArray'
import { Link } from 'react-router-dom'

type Props = {
    id:number
}

const NextPrevLeft = ({id}: Props) => {
  return (
    <div className="most-read-item">            
            <div className="box">
                <img src={articlesArray[id].image} alt="" />
            </div>
            <div className="most-read-item-text">
                <div className="title2">
                    <Link to={`/articles/${id}`}>{articlesArray[id].title}</Link>
                </div>
                
            </div>
        </div>
  )
}

export default NextPrevLeft