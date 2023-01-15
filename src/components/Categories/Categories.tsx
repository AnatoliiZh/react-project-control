import React from 'react'
import articlesArray from 'utils/articlesArray'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div className="categories">
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
            <div className="categories-box">
                <div className="categories-name">Health</div>
                <div className="categories-quantity">
                    <span>
                        {
                            articlesArray.filter(
                                (filtered) => filtered.category === 'Health'
                            ).length
                        }
                    </span>
                </div>
            </div>
            <div className="categories-box">
                <div className="categories-name">Lifestyle</div>
                <div className="categories-quantity">
                    <span>
                        {
                            articlesArray.filter(
                                (filtered) => filtered.category === 'Lifestyle'
                            ).length
                        }
                    </span>
                </div>
            </div>
            <div className="categories-box">
                <div className="categories-name">Music</div>
                <div className="categories-quantity">
                    <span>
                        {
                            articlesArray.filter(
                                (filtered) => filtered.category === 'Music'
                            ).length
                        }
                    </span>
                </div>
            </div>
            <div className="categories-box">
                <div className="categories-name">Travel</div>
                <div className="categories-quantity">
                    <span>
                        {
                            articlesArray.filter(
                                (filtered) => filtered.category === 'Travel'
                            ).length
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Categories
