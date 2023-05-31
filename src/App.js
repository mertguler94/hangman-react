import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [wordToFound, setWordToFound] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [allGuesses, setAllGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(
        "https://random-word-api.vercel.app/api?words=1&type=uppercase"
      );
      const resData = await response.json();
      setWordToFound(resData[0]);
    };

    fetchWord();
  }, []);

  function handleGuess(letter) {
    setAllGuesses((prev) => [...prev, letter]);

    if (wordToFound.includes(letter)) {
      const newCorrectGuesses = [...correctGuesses, letter];
      setCorrectGuesses(newCorrectGuesses);
      if (
        wordToFound.split("").every((char) => newCorrectGuesses.includes(char))
      ) {
        setGameStatus("win");
        return;
      }
    } else {
      const newRemainingGuesses = remainingGuesses - 1;
      setRemainingGuesses(newRemainingGuesses);
      if (newRemainingGuesses <= 0) {
        setGameStatus("lost");
      }
    }
  }

  return (
    <div className="App">
      <div className="word">
        {wordToFound.split("").map((char, i) => (
          <span key={i} className="char">
            {correctGuesses.includes(char) || gameStatus !== "playing"
              ? char
              : "_"}
          </span>
        ))}
      </div>

      <div className="alphabet">
        {ALPHABET.map((letter) => (
          <button
            className="button"
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={allGuesses.includes(letter) || gameStatus !== "playing"}
            style={{
              background: `${
                correctGuesses.includes(letter)
                  ? "#90ee90"
                  : allGuesses.includes(letter)
                  ? "#F47174"
                  : ""
              }`,
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      <h2>Remaining Guesses: {remainingGuesses}</h2>

      {gameStatus !== "playing" && (
        <div className="game-status">
          <h2>{`${
            gameStatus === "win"
              ? "Congratulations, you won!"
              : "Sorry, you lost."
          }`}</h2>
          <button onClick={() => window.location.reload()}>Try again?</button>
        </div>
      )}
    </div>
  );
}

export default App;
