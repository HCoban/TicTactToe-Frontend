import $ from 'jquery';

const ROOT_URL = 'http://localhost:3000';


export const createMove = (move, value) => (
  $.ajax({
    method: 'POST',
    url: `${ROOT_URL}/api/moves`,
    data: { move, value }
  })
);