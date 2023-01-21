import React from 'react'
import './Author.scss'

type Props = {
    author: string
    image: string
}

const AboutAuthor = ({ author, image }: Props) => {
    return (
        <div className="about-author">
            <img src={image} height="148px" alt="" />
            <div className="author">{author}</div>
        </div>
    )
}

export default AboutAuthor
