import React from 'react'
import Category from '../../components/jokes/Category.js'

const Categories = (props) => {
    return (
        <div className="category-contain container-fluid">
            <div className="row">
                <h5 className="col-12">Select a joke category</h5>
                {props.categories.map((category) => {
                    return (<div className="col-md-3 col-sm-6"><Category selectCategory={props.setCategory} type={category}></Category></div>)
                })}
            </div>
        </div>
    )
}

export default Categories
