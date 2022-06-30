import React from "react";

const DisplayQuestion = (props) => {
    if (props.question) {
        return (
            <h3>
                {props.question[0].question}
            </h3>
        )
    }
    
}

export default DisplayQuestion