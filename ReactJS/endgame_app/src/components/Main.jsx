import { useState } from "react"
import Word from "./Word";
import Letters from "./Letters";

function Main(){
    const [count, setCount] = useState(0)
    const[guessed,setGueesed]=useState([])
    const[languages,setLanguages]=useState([
        "HTML","CSS","JS","React","TypeScript","NodeJS","Ruby","Assembly"
    ])

   

    function restartGame() {
        setCount(0)
        setGueesed([])
        setLanguages([
            "HTML","CSS","JS","React","TypeScript","NodeJS","Ruby","Assembly"
        ])
    }

    function getLetter(letter){
        console.log(letter)
    }

    const handleGuess = (letter) => {
        console.log("what is letter",letter)
        setGueesed([...guessed, letter]);
        console.log("What is gueesed",guessed)
        setCount(prev => prev + 1)
        setLanguages(prev => prev.slice(1))
        console.log("Coutns:",count)
      };
    // ⭐ Show Game Over Screen
    if (count >= 8) {
        return (
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>Game Over!</h1>
                <p>You used all 8 attempts.</p>

                <button 
                    onClick={restartGame}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "18px",
                        cursor: "pointer"
                    }}
                >
                    Restart
                </button>
            </div>
        )
    }
    return(
        <>
        <section id="top">
            <h2>Guess the word within 8 attempts to save the programming world!</h2>
        </section>
        <section id="puzzle">
            {/* word to decode */}
            <Word guessed={guessed}/>

        </section>
        <section id="attempts">
            <h3 style={{textAlign:"center"}}>Attemps Left: {count}/8</h3>
        </section>
        <section id="languages">
        {languages.map((item, index) => {
              const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return<span key={index} className="langs" style={{backgroundColor:randomColor}}>{item}</span>
})}
        </section>

        <section id="letters">
            {/* letters to click */}
            <Letters onGuess={handleGuess} guessed={guessed}/>
            </section>
        </>
    )
}

export default Main