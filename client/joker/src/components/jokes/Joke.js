import React, {Fragment} from 'react'

const Joke = (props) => {
    console.log('prop' + props.currentJoke.setup)
    return (
        <Fragment>
            {props.currentJoke.type === 'single' ? (
                <h5 key={props.id}>Joke: {props.currentJoke.joke}</h5>
            ) : (
                <Fragment>
                    <h5 key={props.id}>Joke: {props.currentJoke.setup}</h5>
                    {
                        props.showAnswer ? <h5 className="alert-success" key={props.id}>Answer: {props.currentJoke.delivery}</h5> : ''
                    }
                    <button className="show-answer btn btn-info" onClick={props.toggleAnswer}>{props.showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
                </Fragment>
            )}
            
        </Fragment>
    )
}

export default Joke
