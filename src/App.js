import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card.js';
import data from './data.js'

function App() {
  const [dataArr, setDataArr] = React.useState(data);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  function checkStateOfGame(index,item){
    const game = dataArr.every(data => data.hasBeenClicked === true)
    if(game == true){
      setIsGameOver(prevValue => !prevValue);
      setDataArr(data)
      setHighScore(10)
    }
  }


  function handleClick(index,itemm){
    if(itemm.hasBeenClicked == true){
      setDataArr(data);
      setScore(0)
    } else {
    checkStateOfGame(index, itemm)
    setDataArr(prevValue => [...prevValue].sort(() => Math.random() - 0.5));
    setDataArr(dataArr.map((item,indexx) => {
      if (indexx == index){
        setScore(prev => prev + 1)
        if(score >= highScore){
          setHighScore(score + 1)
        }

        return {
          ...item,
          hasBeenClicked: !item.hasBeenClicked
        }
      } else {
        return item
      }
    }))
    setDataArr(prevValue => [...prevValue].sort(() => Math.random() - 0.5));
  }
}

  const cards = dataArr.map((item,index) => {                       
    return <Card name={item.name} url={item.url} handleClick={(event) => handleClick(index,item)} id={index}/>
  })



























































































  return (
    <div className="App">
      <header className='header-container'>
        <div>
          <h1>Memory Game</h1>
        </div>
        <div>
          <h2>Score: {score}</h2>
          <h2>Best Score: {highScore}</h2>
        </div>
      </header>
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
