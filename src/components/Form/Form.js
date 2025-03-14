import React from 'react';

function Form({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("")

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()

      const updatedGuess = [...guesses, {
        id: Math.random(),
        word: guess,
      }]

      setGuesses(updatedGuess)
      setGuess("")
    }

    }>
      <label htmlFor="guess-input">Enter guess:</label>
      <input type="text" id="guess-input" value={guess} onChange={({ target }) => setGuess(target.value.toUpperCase())} pattern="[A-Z]{5}" />
    </form>
  )
}

export default Form;
