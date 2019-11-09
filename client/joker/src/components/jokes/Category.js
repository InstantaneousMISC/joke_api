import React, {Fragment} from 'react'

const Category = (props) => {
    return (
        <Fragment>
            <button type="button" class="btn btn-secondary" onClick={() => {props.selectCategory(props.type)}}>{props.type}</button>
        </Fragment>
    )
}

export default Category
