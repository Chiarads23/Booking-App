// ● Bisognerebbe aggiungere un piccolo form dove poter inserire una nuova prenotazione. I campi di questo form saranno gli stessi che vengono restituiti da ogni singolo oggetto contenuto nell’array restituito dalla chiamata a “todos”

const newEl = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createList = (parent, userId, id, title) => {
  
    const listItemEl = newEl("li");
  listItemEl.className = "listItemEl";

  listItemEl.append(userId, id, title);
  parent.appendChild(listItemEl);
};

const pendingBookings = q(".pending-list");
const completedBookings = q(".completed-list");

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    data
      .filter((data) => data.completed === false)
      .map((data) =>
        createList(pendingBookings, data.userId, data.id, data.title));

    data
      .filter((data) => data.completed === true)
      .map((data) =>
        createList(completedBookings, data.userId, data.id, data.title));
  });
