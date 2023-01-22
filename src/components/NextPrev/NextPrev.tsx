import React from 'react'
import NextPrevLeft from './NextPrevLeft'
import NextPrevRight from './NextPrevRight'
import articlesArray from 'utils/articlesArray'

type Props = {
    id: number
}

const NextPrev = ({ id }: Props) => {
    // console.log(articlesArray.length)
    return (
        <div className="next-prev">
            <NextPrevLeft id={id > 1 ? id - 1 : articlesArray.length} />
            <NextPrevRight id={id < articlesArray.length ? id + 1 : 1} />
        </div>
    )
}

export default NextPrev
