import React from 'react'
import { useState } from 'react'
import articlesArray from 'utils/articlesArray'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './MySlider.scss'

type ArticleProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {}

const MySlider = (props: Props) => {
    let id1 = 0
    let id2 = 1
    let id3 = 2
    let id4 = 3

    const [right, setRight] = useState<number>(0)

    const onRightClick = () => {
        setRight((prevState: number) => prevState + 300)
        console.log(right)
    }
    const onLeftClick = () => {
        setRight((prevState: number) => prevState - 300)
        console.log(right)
    }

    // const style = {
    //     transform: `translateX(${right}px)`,
    // }

    return (
        <>
            <button onClick={() => onLeftClick()}>Влево</button>
            <button onClick={() => onRightClick()}>Вправо</button>

            <div className="container">
                {articlesArray
                    .filter(
                        (filtered) =>
                            filtered.id === id1 ||
                            filtered.id === id2 ||
                            filtered.id === id3 ||
                            filtered.id === id4
                    )
                    .map(
                        ({
                            id,
                            title,
                            category,
                            date,
                            comments,
                            image,
                        }: ArticleProps) => (
                            <div className="slider">
                                <img src={image} width="300px" alt="" />
                                <div>{title}</div>
                            </div>
                        )
                    )}
            </div>
        </>
    )
}

export default MySlider
