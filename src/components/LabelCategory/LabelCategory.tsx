import React from 'react'
// import LinkItem from 'components/LinkItem/LinkItem'
import './LabelCategory.scss'
import LinkItem from 'components/LinkItem/LinkItem'

type Props = {
    category: string
}

const LabelCategory = (  
    {category}: Props) => {
  return (
    <div className="label-category">
        {category === "Health" && 
        <div className="label-category-health">
          <LinkItem  to={`/${category}`}>{category}</LinkItem>
        </div>}
        {category === "Fashion" && 
        <div className="label-category-fashion">
          <LinkItem  to={`/${category}`}>{category}</LinkItem>
        </div>}
        {category === "Lifestyle" && 
        <div className="label-category-lifestyle">
          <LinkItem  to={`/${category}`}>{category}</LinkItem>
        </div>}
        {category === "Travel" && 
        <div className="label-category-travel">
          <LinkItem  to={`/${category}`}>{category}</LinkItem>
        </div>}
    </div>
  )
}

export default LabelCategory