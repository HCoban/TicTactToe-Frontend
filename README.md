# TicTacToe Frontend

This is a React implementation TicTacToe game. The frontend is interacting with a [Rails Api](https://github.com/HCoban/TicTactToe-Backend).

## Usage

- Clone the repository `git clone https://github.com/HCoban/TicTactToe-Frontend.git`
- Go to directory `cd TicTactToe-Frontend`
- Setup webpack, run in terminal
  - either `webpack` to use root machine
  - or `docker-compose up` for docker container.
- Open `index.html` and play. Make sure backend server is running. See [Api](https://github.com/HCoban/TicTactToe-Backend) for instructions.

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

Root page renders the `<Form />` component which contains the `reduxForm` used for creating a game. After successful creation of game, user is dynamically taken to `/games/:gameId` path which renders `<GameShow />` component.

`<GameShow />` component has three children: `<Header />`, `<CellList />`, and `<MoveLog />`. `<Header />` component is rendering instructions (eg. whose turn it is or if a game is completed). `<MoveLog />` components shows a history of moves. `<CellList />` component is a parent to 9 `<Cell />` components. Each `<Cell />` component shows a value ("X", "O", or empty) and contains a click action to create a new move. 

Game play logic is handled by the backend. API informs the client side regarding game status (winner, completed, etc.)