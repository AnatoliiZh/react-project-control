import React from 'react'
import './Author.scss'

type Props = {
    author: string
    image: string
}

const Author = ({ author, image }: Props) => {
    return (
        <div className="under-title-author">
            <img src={image} height="34px" alt="" />
            <div className="author">{author}</div>
        </div>
    )
}

export default Author
