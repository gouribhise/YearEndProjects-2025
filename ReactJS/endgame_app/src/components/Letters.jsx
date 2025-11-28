function Letters({onGuess,guessed}){
    console.log("inside letters")
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      return(
<section>
{letters.map((l) => (
        <button
          key={l}
          
          onClick={() => onGuess(l)}
          disabled={guessed.includes(l)}
          className="ltrBtn"
        >
          {l}
        </button>
      ))}
</section>
    )
}

export default Letters