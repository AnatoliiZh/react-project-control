import React from 'react'
import NextPrevLeft from './NextPrevLeft'
import NextPrevRight from './NextPrevRight'
import articlesArray from 'utils/articlesArray'

type Props = {
    id: number
}

const NextPrev = ({ id }: Props) => {
    // console.log(articlesArray[1])
    return (
        <div className="next-prev">
            <NextPrevLeft id={id > 1 ? id - 1 : 1} />
            <NextPrevRight
                id={
                    id < articlesArray.length - 1
                        ? id + 1
                        : articlesArray.length - 1
                }
            />
        </div>
    )
}

export default NextPrev
