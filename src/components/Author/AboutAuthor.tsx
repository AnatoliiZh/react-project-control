import React from 'react'
import './Author.scss'

type Props = {
    author: string
    image: string
    text: string
}

const AboutAuthor = ({ author, image, text }: Props) => {
    return (
        <div className="about-author">
            <img src={image} height="148px" alt="" />
            <div className="about-author-right">
                <h6>About Author</h6>
                <h4>{author}</h4>
                <p>{text}</p>
                
            </div>
        </div>
    )
}

export default AboutAuthor
