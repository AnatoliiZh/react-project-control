import React from 'react'
import './MostRead2.scss'
// import { FaRegClock } from 'react-icons/fa'
// import { FaRegCommentAlt } from 'react-icons/fa'
import MostReadItem from './MostReadItem'
import MostReadArray2 from 'utils/mostReadArray2'

type MostReadProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {}

const MostRead = (props: Props) => {
    return (
        <div className="most-read2">
            <div className="most-read-heading2">Most Read</div>
            {MostReadArray2.map(
                ({
                    id,
                    title,
                    category,
                    date,
                    comments,
                    image,
                }: MostReadProps) => (
                    <MostReadItem
                        title={title}
                        category={category}
                        date={date}
                        comments={comments}
                        image={image}
                    />
                )
            )}

            {/* <div className="most-read-item">
                <img src="/images/2mr_crop.webp" height="150px" alt="" />
                <div className="most-read-item-text">
                    <div className="title2">
                        The curly shag has tons of pretty texture and attitude
                    </div>
                    <div className="under-title">
                        <FaRegClock className="icons" />
                        <div className="date">Mar 5, 2022</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">0</div>
                    </div>
                </div>
            </div>
            <div className="most-read-item">
                <img src="/images/3mr_crop.webp" height="150px" alt="" />
                <div className="most-read-item-text">
                    <div className="title2">
                        This japanese take on crème flan will blow your mind
                    </div>
                    <div className="under-title">
                        <FaRegClock className="icons" />
                        <div className="date">Mar 5, 2022</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">0</div>
                    </div>
                </div>
            </div>
            <div className="most-read-item">
                <img src="/images/4mr_crop.webp" height="150px" alt="" />
                <div className="most-read-item-text">
                    <div className="title2">
                        Here’s All the Fashion News You already Missed
                    </div>
                    <div className="under-title">
                        <FaRegClock className="icons" />
                        <div className="date">Mar 5, 2022</div>
                        <FaRegCommentAlt className="icons" />
                        <div className="article-comments">0</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MostRead
