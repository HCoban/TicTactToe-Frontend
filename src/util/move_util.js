import $ from "jquery";

const ROOT_URL = "http://localhost:3000";

export const createMove = ({ move, value, token }) => {
  return $.ajax({
    method: "POST",
    url: `${ROOT_URL}/api/moves`,
    data: { move: { token, value, move } }
  });
};
