import HomeScreen from "./components/HomeScreen"
import React, {useState, useEffect} from 'react'


const App = () => {
  const categories = ["Arts & Literature", "Film & TV", "Food & Drink", "General", "Geography", "History", "Music", "Science", "Society & Culture", "Sport & Leisure"]
  const [question, addQuestion] = useState()
  const [timeLeft, updateCountdown] = useState(30)
  

  const getQuestion = (category) => {
    const replaceAmpersand = category.replace("&", "_and_")
    const noSpacesCat = replaceAmpersand.replace(/\s/g, "")
    const apiFriendlyCategory = noSpacesCat.toLowerCase()
    fetch(`https://the-trivia-api.com/api/questions?categories=${apiFriendlyCategory}&limit=1&region=US`)
      .then((response) => {
        if(response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        addQuestion(data)
      })
  }

  const resetQA = () => {
    addQuestion("")
    //addAnswer("")
  };
 
  useEffect(() => {
    const runTimer = setInterval(() => tick(), 1000);
    return () => clearInterval(runTimer)
  });

  const tick = () => {
    if (timeLeft === 0) {
      return updateCountdown(30)
    } else {
      let time = timeLeft
      updateCountdown(time - 1) 
    }
  };

  return (
    <div className="App">   
      <HomeScreen 
        categories={categories} 
        getQuestion={getQuestion} 
        question={question}
        resetQA={resetQA}
        timeLeft={timeLeft}
        timer={tick}
      />
    </div>
  );
};

export default App;
