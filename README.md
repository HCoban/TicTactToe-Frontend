# TicTacToe Frontend

This is a React implementation of classic TicTacToe game. The frontend is interacting with a [Rails Api](https://github.com/HCoban/TicTactToe-Backend).

## Usage

- Clone the repository `git clone https://github.com/HCoban/TicTactToe-Frontend.git`
- Go to directory `cd TicTactToe-Frontend`
- Setup webpack, run in terminal
  - either `webpack` to use root machine
  - or `docker-compose up` for docker container.
- Open `index.html` and play. Make sure backend server is running. See [Api](https://github.com/HCoban/TicTactToe-Backend) for instructions.
- Run tests with `npm run test`

## Technologies
- React
- Redux
- Webpack
- Docker
- Chai, jsdom
- AJAX

## Features

- Single-page application which benefits from React-Redux.
- Communication with the API is done through AJAX requests. 
- Token based authentication allows sharing a game and prevents it to be modified by others
- Game continues after a browser refresh
- Dynamic routing with react-router
- Test driven development

## Details

This app includes only one static HTML page `index.html`. The content is dynamically loaded into a `div` element.

Root page renders the `<Form />` component which contains the `reduxForm` used for creating a game. After successful creation of game, user is dynamically taken to `/games/:gameId` path which renders `<GameShow />` component.

`<GameShow />` component has three children: `<Header />`, `<CellList />`, and `<MoveLog />`. `<Header />` component is rendering instructions (eg. whose turn it is or if a game is completed). `<MoveLog />` components shows a history of moves. `<CellList />` component is a parent to 9 `<Cell />` components. Each `<Cell />` component shows a value ("X", "O", or empty) and contains a click action to create a new move. 

An example state representing the state shape is below.
```javascript
{
  cells: {
    A1: {
      value: "X",
      step: 1
    },
    B2: {
      value: "O",
      step: 2
    }
  },
  game: {
    1: {
      id: 1,
      playerOne: "Mark",
      playerTwo: "Elon",
      completed: false,
      winner: null
    }
  },
  error: null
}
```

I decided to name each 9 positions in the TicTacToe game as cells. Columns are represented as letters A to C whereas rows are represented as numbers from 1 to 3. In `state.cells`, a key `A1` would correspond to the cell positioned in column A and row 1. `value` in a `state.cells` object is the mark value, either a "X" or an "A". `step` shows the order of that move. For example, first move in the game has a `step` 1.

`state.game` stores information about the current game where the key is the game id and the value is a an object with 5 keys. `id`, `playerOne`, `playerTwo`, `completed`, and `winner` keys are self-explanatory.

`state.error` stores up to a single error a time. This will be HTTP status codes of the error if there is any error present. Status codes are converted to human readable messages in the `<Header />` component. 

During a game, a browser refresh would not cause stopping the game. Players can continue playing from the last step. In addition, game can even be completed in a different browser if the link is copied. 

If players would like to share game but do not want others to continue their game, they could simply copy the url excluding the token. This way unauthorized visitors will be able to see the game but won't be able to make any moves.

Game play logic is handled by the backend. API informs the client side regarding game status (winner, completed, etc.). For the game logic, API, and database schema please visit the [backend repository](https://github.com/HCoban/TicTactToe-Backend).