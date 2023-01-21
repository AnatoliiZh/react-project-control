import React from 'react'
import NextPrevLeft from './NextPrevLeft'
import NextPrevRight from './NextPrevRight'

type Props = {
    id: number
}

const NextPrev = ({ id }: Props) => {
    // console.log(articlesArray[1])
    return (
        <div className="next-prev">
            <NextPrevLeft id={id - 1} />
            <NextPrevRight id={id + 1} />
        </div>
    )
}

export default NextPrev
