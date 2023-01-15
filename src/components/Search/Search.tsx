import React from 'react'
import './Search.scss'

type Props = {}

const Search = (props: Props) => {
    return (
        <div>
            <div className="search-heading">
                <div className="search-title">Search</div>
                <div className="search-line"></div>
            </div>
            <div className="search-input-box">
                <input className="search-input" type="text" name="" id="" />
                <button className="search-btn">Search</button>
            </div>
        </div>
    )
}

export default Search
