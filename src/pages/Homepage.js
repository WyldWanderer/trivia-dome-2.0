import React, {useState} from 'react';
import HomeScreen from '../components/HomeScreen';

const Home = () => {
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
      <div className="App">   
        <HomeScreen 
          categories={categories} 
          getQuestion={getQuestion} 
          question={question}
          resetQA={resetQA}
        />
      </div>
    );
};

export default Home;
