import { useEffect, useState } from "react"

function Word({ guessed,word }) {

  const [hidden, setHidden] = useState([Array(word.length).fill("_")])

 

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
