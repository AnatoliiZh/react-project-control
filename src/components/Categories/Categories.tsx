import React from 'react'
import LinkItem from 'components/LinkItem/LinkItem'
import articlesArray from 'utils/articlesArray'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    let arrCategory = new Map();   
    for ( let key in articlesArray) {        
        if (arrCategory.has(articlesArray[key].category))  {
            arrCategory.set(articlesArray[key].category,arrCategory.get(articlesArray[key].category)+1)
        } else {
            arrCategory.set(articlesArray[key].category,1)
        }      
        //  console.log( "Ключ: " + key + " значение: " + articlesArray[key].category );
      };
    //   console.log(arrCategory);
    return (
        <div className="categories">
            <div className="categories-heading">
                <div className="categories-title">Categories</div>
                <div className="categories-line"></div>
            </div>
            {/* <ul>
                {Object.fromEntries(arrCategory).map((value:string, index:number) => <li key={index}>{value}</li>)}
            </ul> */}
            

           
             
             <div className="categories-box">
                 <div className="categories-name">
                     <LinkItem to={`/Fashion`}>Fashion</LinkItem>
                 </div>
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
                 <div className="categories-name">
                     <LinkItem to={`/Fashion`}>Fashion</LinkItem>
                 </div>
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
                 <div className="categories-name">
                     <LinkItem to={`/Health`}>Health</LinkItem>
                 </div>
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
                 <div className="categories-name">
                     <LinkItem to={`/Lifestyle`}>Lifestyle</LinkItem>
                 </div>
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
                 <div className="categories-name">
                     <LinkItem to={`/Travel`}>Travel</LinkItem>
                 </div>
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
