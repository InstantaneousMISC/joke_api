import React from 'react'
import Category from '../../components/jokes/Category.js'

const Categories = (props) => {
    return (
        <div className="category-contain container-fluid">
            <div className="row">
                <h5 className="col-12">Select a joke category</h5>
                {props.categories.map((category) => {
                    if(category === 'Dark') return null
                    return (<div className="col-md-4"><Category selectCategory={props.setCategory} type={category}></Category></div>)
                })}
            </div>
        </div>
    )
}

export default Categories
