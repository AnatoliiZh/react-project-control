import React from 'react'

import './LabelCategory.scss'

import { NavLink } from 'react-router-dom'

type Props = {
    category: string
}

const LabelCategory = (  
    {category}: Props) => {
  return (
    <div className="label-category">
        {category === "Health" && 
        <div className="label-category-health">
          <NavLink to={`/${category}`}> {category} </NavLink>
        </div>}
        {category === "Fashion" && 
        <div className="label-category-fashion">
          <NavLink to={`/${category}`}> {category} </NavLink>
        </div>}
        {category === "Lifestyle" && 
        <div className="label-category-lifestyle">
          <NavLink to={`/${category}`}> {category} </NavLink>
        </div>}
        {category === "Travel" && 
        <div className="label-category-travel">
          <NavLink to={`/${category}`}> {category} </NavLink>
        </div>}
    </div>
  )
}

export default LabelCategory