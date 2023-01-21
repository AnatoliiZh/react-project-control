import React from 'react'
import articlesArray from 'utils/articlesArray'
import { Link } from 'react-router-dom'
import './NextPrev.scss'

type Props = {
    id: number
}

const NextPrevRight = ({ id }: Props) => {
    return (
        <div className="next-prev-right">
            <div className="box">
                <img src={articlesArray[id].image} alt="" />
            </div>
            <div>
                <div className="heading2">Next Post</div>
                <div className="title2">
                    <Link to={`/articles/${id}`}>
                        {articlesArray[id].title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NextPrevRight
