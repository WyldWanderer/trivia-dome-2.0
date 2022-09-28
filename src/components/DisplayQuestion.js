import React from "react";

const DisplayQuestion = (props) => {
    if (props.question) {
        return (
            <section>
                <h3>
                    {props.question.question}
                </h3>
                <button>Get Hints</button>
                <input/>
            </section>
        )
    } else {
        return (
            <h1>There was an error getting a question</h1>
        )
    }
    
}

export default DisplayQuestion