import React from 'react'
import articlesArray from 'utils/articlesArray'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div>
            <div className="categories-heading">
                <div className="categories-title">Categories</div>
                <div className="categories-line"></div>
            </div>
            <div className="categories-box">
                <div className="categories-name">Fashion</div>
                <div className="categories-quantity">
                    <span>
                        {
                            articlesArray.filter(
                                (filtered) => filtered.category === 'Fashion'
                            ).length
                        }
                    </span>
                </div>
            </div>
            <div>
                <div>Health</div>
                <div>
                    {
                        articlesArray.filter(
                            (filtered) => filtered.category === 'Travel'
                        ).length
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
