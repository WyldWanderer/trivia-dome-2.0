import { React, useState } from 'react'
import CategoryButton from './CategoryButton'
import DisplayQuestion from './DisplayQuestion';

const HomeScreen = (props) => {
    const categories = ["Arts & Literature", "Film & TV", "Food & Drink", "General", "Geography", "History", "Music", "Science", "Society & Culture", "Sport & Leisure"]
    const [question, addQuestion] = useState({})

    const getQuestion = (category, difficulty="easy") => {
        fetch(`http://localhost:9000/api/v1/questions/${category}/${difficulty}`)
          .then ((response) => {
            if(response.ok) {
              return response.json()
            } else {
              throw response.status;
            }
          })
          .then((data) => {
            let questionData = data.data[0]
            addQuestion(question => ({
              ...question,
              ...questionData
            }));
          });
      };
    
      const resetQA = () => {
        addQuestion("")
        //addAnswer("")
      };

    return ( 
        <>
            <h1>Trivia Dome 2.0!!!!!</h1>
            <h4>Choose a Category</h4>
            <section>
                {categories.map((category) => {
                    return <CategoryButton category={category} getQuestion={getQuestion}/>
                })}
            </section>
            <div>
                <button onClick={() => resetQA()}>Clear Question</button>
            </div>
            <div>
                <button onClick={() => props.timer()}>Start Timer</button>
                <h3>{props.timeLeft}</h3>
            </div>
            <section>
                <DisplayQuestion question={question}/>
            </section>
        </>
    )
};

export default HomeScreen