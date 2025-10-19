import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({titleObject}) => {

  const [hasLiked, setHasLiked] = useState(false)
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Card hasLiked", hasLiked)
    }
  }, [hasLiked])


  useEffect(() => {
    if (count > 10) {
      setCount(0) 
    }
  }, [count])

  return (
    <div onClick={() => setCount(count + 1)}>
      <h2 className="text-2xl font-bold">{titleObject.movieTitle}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setHasLiked(!hasLiked) }>{hasLiked ? `${count} 🤍` : `${count} ❤️`}</button>
    </div>
  )
}

function App() {
  

  return ( 
    <>
      <h1>Rv app</h1>
        <Card titleObject={{movieTitle : "Card 1"}}/>
        <Card titleObject={{movieTitle : "Card 2"}}/>
    </>
  )
}

export default App
