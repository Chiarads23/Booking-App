// Descrizione
// Il cliente ci ha richiesto una piccola web app, per separare in due blocchi, le prenotazioni già “completed” da quelle non completate (completed === false).
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem", 
//     "completed": false} 


// Linee guida
// Endpoint che restituisce degli appuntamenti di test:
// https://jsonplaceholder.typicode.com/todos

// Consiglio: Le prenotazioni (oggetti dell’array) che riceverai hanno già una proprietà “completed” che può essere true o false

// Layout
//  prenotazioni ancora da gestire (completed=== false);  “Prenotazioni in attesa”.
// lista delle visite concluse (completed === true); “Visite completate”.

// Il cliente ci ha richiesto anche questa cosa ma cerchiamo di capire se possiamo farla:
// ● Bisognerebbe aggiungere un piccolo form dove poter inserire una nuova
// prenotazione. I campi di questo form saranno gli stessi che vengono restituiti da ogni singolo oggetto contenuto nell’array restituito dalla chiamata a “todos”

// const BASE_URL= "https://jsonplaceholder.typicode.com/todos";

// fetch("https://jsonplaceholder.typicode.com/todos")
