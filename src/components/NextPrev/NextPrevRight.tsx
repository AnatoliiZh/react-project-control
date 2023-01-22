import React from 'react'
import articlesArray from 'utils/articlesArray'
import { Link } from 'react-router-dom'
import './NextPrev.scss'

type Props = {
    id: number
}

const NextPrevRight = ({ id }: Props) => {
    // console.log(`next ${id} image ${articlesArray[id - 1].image}`)
    return (
        <div className="next-prev-right">
            <div className="box">
                <img src={articlesArray[id - 1].image} alt="" />
            </div>
            <div>
                <div className="heading2">Next Post</div>
                <div className="title2">
                    <Link to={`/articles/${id}`}>
                        {articlesArray[id - 1].title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NextPrevRight
