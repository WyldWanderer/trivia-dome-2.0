import HomeScreen from "./components/HomeScreen"
import React, {useState} from 'react'


const App = () => {
  const categories = ["Arts & Literature", "Film & TV", "Food & Drink", "General", "Geography", "History", "Music", "Science", "Society & Culture", "Sport & Leisure"]
  const [question, addQuestion] = useState()

  const getQuestion = (category) => {
    console.log(category)
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
  }
  

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
}

export default App;
