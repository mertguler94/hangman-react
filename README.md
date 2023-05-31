# a. Design (40 marks). Things to consider:

## What are the key elements for this application?

ANSWER: The key elements for any application consists of three layers, which are User Interface (UI), business logic and database.
For the hanging man game for this test, we can observe these three layers (although the database layer is just a simple state on the client-side).

The UI of the application, is placed at the return statement of App component which composed of HTML elements such as "div", "span", "h2" and "button" elements.
There are also some basic inline styling for those elements which are also considered as a part of the UI layer.
(Such as showing green/red background to the letters which are used for guessing)

The business logic of the application are mainly placed at the `handleGuess()` function. This function performs the business requirements such as registering the guess and checking the game status after each guess. Some of the business logic related with view (showing the letter or an empty space for the word) is performed inline of the element due to simplicity.

The database for the application is just used as states. The database is an in-memory structure on the client-side, which stores the `wordToGuess` string, `allGuesses` & `correctGuesses` arrays, `remainingGuesses` number and `gameStatus` string.

## How would you manage these?

ANSWER: The UI of the application such as "div", "span", "h2" and "button" HTML elements, are used to transfer the information to the screen.
"div" elements are used as a container for other HTML elements.
"span" elements are used to display the characters of the word (or just blank underlines for not guesses chars).
"button" is for two different purposes. The first purpose was to display all letters from alphabet and take guesses from the user, the other purpose is to display a "Play again" prompt after the game finishes.
"h2" element is used for displaying the win-lose message to the user.

`handleGuess` function operates the business logic.
Main purpose of the business logic is registering the guess and checking the game status after each guess. This function is runned every time after user clicks on a button from alphabet to make a guess.

States and in-memory database is used as the database layer.
There are different states used in the application.

```js
const [wordToFound, setWordToFound] = useState("");
const [correctGuesses, setCorrectGuesses] = useState([]);
const [allGuesses, setAllGuesses] = useState([]);
const [remainingGuesses, setRemainingGuesses] = useState(6);
const [gameStatus, setGameStatus] = useState("playing");
```

These states are used for;

- storing the word to be found (words chosen randomly through an API)
- storing the correct guessed letters in an array
- storing all the guessed letters in an array to compare correct and wrong guesses
- remaining guess count to check the status of the game
- game status in 3 states such as "playing", "win" or "lost"

## Is a state-managed solution appropriate here?

ANSWER: Yes, a state-managed solution is appropriate for this application.
Which characters of the words is shown to the user, taking guesses from the user and storing in an array, following the status of the game are all scenarios which requires a state-management solution.
With each guess, the UI is rerender, either alphabet is changing with green/red colors, or the shown word is changing. So storing all those information in states is reasonable and efficient for the developer.

# b. Intelligent Choices (40 marks).

## Identify appropriate libraries and a toolstack. Think about how your choice of tools reflects the design. Can you avoid writing code (no code) or writing very little (low code)? Is this an entirely front-end application, back-end, or full-stack? NOTE: It will be important to think about how you find/choose words for the game.

ANSWER: The libraries used in this application are "react", "react-dom", "babel" and "react-scripts". React provides the react core libraries with all of the React features,
react-dom provides the manipulation of DOM with React and Babel provides the JSX syntax to be used for reducing the development time and allowing HTML format to be used in JavaScript (babel library is already used as a dependency for the other react libraries, so it is not directly installed from npm).
react-scripts gives the required cli commands for running the development server, building or testing the application.

The toolstack I used is VSCode for my code editor. Also, I am using a VCS (version control system), specifically Git. I am planbing to upload this project/repository to my GitHub for the cloud storing system using VCS Git.

The choice of the libraries and tools define how I write my code but at the end, my goal is to achieve the same design(product).

The frontend portion can leverage the benefits of no-code or low-code tools for designing the user interface such as drag-and-drop designs, or ready-to-use component libraries.
The actual implementation of the business logic would require writing code. However, some libraries and tools can streamline the development process, reducing the amount of code needed and improving overall efficiency.

This application can be considered as a front-end application.
It consists of UI, business logic and database. As I explained above, the business logic is just `handleGuess` function and the database layer is the states. This simple hangman game application does not require a backend server. It can just handle guessing and checking game status systems on the client-side with React. However, I used a public API (which results in someone's server) to generate random words for each game. If generating a random word for the game counts as a requirement for this game, that functionality should be done on the backend server, then the whole project could be a full-stack application. But with the current requirements of this test, it is a front-end application.

The words found for the game are fetched randomly through a public API, which gives a random English word on every refresh, with the help of an `useEffect` React hook.

# c. Implementation (100 marks). Do not get overly elaborate or bogged down on any one section.

## If you are having problems implementing something, replace it with a temporary function or class that identifies work that needs to be done later.

ANSWER: The implementation is done by scaffolding a create-react-app.
I chose creating a React app because I am more familiar using it and I wanted to take advantage of my code editor auto completion etc. in the Javascript files.
