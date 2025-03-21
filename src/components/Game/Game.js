import React from 'react';

import Form from '../Form'
import Guess from '../Guess'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  return (
    <>
      {guesses.map(({ word, id }) => (
        <Guess key={id} word={word} />
      ))}

      <Form guesses={guesses} setGuesses={setGuesses} />
    </>
  )
}

export default Game;
