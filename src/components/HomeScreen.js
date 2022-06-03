import React from 'react'
import CategoryButton from './CategoryButton'
import DisplayQuestion from './DisplayQuestion';

const HomeScreen = (props) => {
    return ( 
        <>
            <h1>Trivia Dome 2.0!!!!!</h1>
            <h4>Choose a Category</h4>
            <section>
                {props.categories.map((category) => {
                    return <CategoryButton category={category} getQuestion={props.getQuestion}/>
                })}
            </section>
            <div>
                <button onClick={() => props.resetQA()}>Clear Question</button>
            </div>
            <section>
                <DisplayQuestion question={props.question}/>
            </section>
        </>
    )
};

export default HomeScreen