import React, { Component,Fragment } from 'react';
import Joke from './Joke'

import Categories from './Categories'
import axios from 'axios'

class JokeMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            joke: {},
            headers: {
                Accept: 'application/json',
                'User-Agent': 'localhost -test app'
            },
            categories: [],
            selectedCategory: 'Programming',
            showAnswer: false
        }
    }

    toggleAnswer = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }
    
    async componentWillMount(){
        this.getCategories()
        this.getJoke()
    }

    async getCategories(){
        const URL = 'https://sv443.net/jokeapi/categories'
        const categories = await axios.get(URL)
        this.setState({
            categories: categories.data.categories
        })
        console.log('in getcategories')
        console.log(this.state.categories)
    }

    async getJoke(){
        const URL = `https://sv443.net/jokeapi/category/${this.state.selectedCategory}?blacklistFlags=nsfw`
        let retrievedJoke = await axios.get(URL)
        this.setState({
            joke: retrievedJoke.data,
            showAnswer: false
        })
        console.log(retrievedJoke)
    }

    setCategory = async (category) => {
        console.log(category)
        await this.setState({
            selectedCategory: category
        })

        this.getJoke()

    }

    

    render(){
        return (
            <Fragment>
                <div className="container joke-main-contain">
                    <section className="row">
                        <article className="col-8 mx-auto">
                            <Categories categories={this.state.categories} setCategory={this.setCategory} type={this.state.categories}/>
                            <div className="joke-contain">
                                <h1>Joke Main</h1>
                                <Joke showAnswer={this.state.showAnswer} toggleAnswer={this.toggleAnswer} currentJoke={this.state.joke}></Joke>
                            </div>
                        </article>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default JokeMain