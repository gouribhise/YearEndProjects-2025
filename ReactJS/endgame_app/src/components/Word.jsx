import { useEffect, useState } from "react"
import { data } from "../data"

function Word({ guessed }) {
  const [word, setWord] = useState("")
  const [hidden, setHidden] = useState([])

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * data.length)
    const selectedWord = data[randomNum].toUpperCase()

    setWord(selectedWord)
    setHidden(Array(selectedWord.length).fill("_"))
  }, [])

  // 👇 This runs when guessed changes
  useEffect(() => {
    if (!word) return    // don't run before word loads

    const newHidden = word.split("").map((letter, index) => {
      return guessed.includes(letter) ? letter : "_"
    })

    setHidden(newHidden)

  }, [guessed, word])

  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "45px" }}>
      {hidden.map((char, idx) => (
        <span key={idx}>{char}</span>
      ))}
    </div>
  )
}

export default Word
