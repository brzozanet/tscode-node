import express from "express";
import { users } from "./db/users.js";

const PORT = 3000;
const MENU =
  "<a href=/>Homepage</a> | <a href=contact>Contact</a> | <a href=users>Users</a>";

const server = express();

server.get("/", (request, response) => {
  response.send(`<h1>Homepage</h1>${MENU}`);
  console.log(request.url);
});

server.get("/contact", (request, response) => {
  response.send(`<h1>Contact</h1>${MENU}`);
  console.log(request.url);
});

server.get("/users", (request, response) => {
  const usersList = users
    .map((user) => {
      return `<li>${user.name} (id: ${user.id})</li>`;
    })
    .join("");

  response.send(
    `<h1>Users</h1><h3>Found ${users.length} users</h3><ul>${usersList}</ul>${MENU}`
  );
  console.log(request.url);
});

server.get("/users/:userId", (request, response) => {
  const userId = Number(request.params.userId);
  const user = users.find((user) => user.id === userId);

  if (user) {
    response.send(
      `<h1>User:</h1> <h3>${user.name}</h3><h3>${user.email}</h3>${MENU}`
    );
    console.log(request.url);
  }
});

server.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});
