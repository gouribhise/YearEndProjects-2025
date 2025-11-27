import { useState } from "react"
import Word from "./Word";
import Letters from "./Letters";

function Main(){
    const[languages,setLanguages]=useState([
        "HTML","CSS","JS","React","TypeScript","NodeJS","Ruby","Assembly"
    ])
    return(
        <>
        <section>
            <p>Guess the word within 8 attempts to save the programming world!</p>
        </section>
        <section>
            {/* word to decode */}
            <Word/>
        </section>
        <section>
        {languages.map((item, index) => {
              const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return<span key={index} className="langs" style={{backgroundColor:randomColor}}>{item}</span>
})}
        </section>

        <section>
            {/* letters to click */}
            <Letters/>
        </section>
        </>
    )
}

export default Main