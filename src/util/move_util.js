const ROOT_URL = 'http://localhost:3000';

export const createMove = move => (
  $.ajax({
    method: 'POST',
    url: `${ROOT_URL}/moves`,
    data: move
  })
);