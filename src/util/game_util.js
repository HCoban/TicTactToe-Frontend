import $ from 'jquery';

const ROOT_URL = 'http://localhost:3000';

export const createGame = (players) => {
  return $.ajax({
    method: 'POST',
    url: `${ROOT_URL}/api/games`,
    data: { 
      game: { 
        player_one_name: players.playerOneName,
        player_two_name: players.playerTwoName
      }
    }
  })
}

export const requestGame = (id) => {
  return $.ajax({
    method: 'GET',
    url: `${ROOT_URL}/api/games/${id}`
  })
}