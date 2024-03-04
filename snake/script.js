const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [{ x: 10 * box, y: 10 * box }]; // kigyó kezdőpozíciója
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box }; // alma kezdőpozíciója
let score = 0; // pontszám kezdeti értéke

let d; // irány változó
document.addEventListener('keydown', direction); // billentyűlenyomás eseményfigyelő hozzáadása

function direction(event) {
  if (event.keyCode == 37 && d != 'RIGHT') { // balra nyíl lenyomva és nem jobbra néz a kígyó
    d = 'LEFT'; // balra mozgás
  } else if (event.keyCode == 38 && d != 'DOWN') { // felfelé nyíl lenyomva és nem lefelé néz a kígyó
    d = 'UP'; // felfelé mozgás
  } else if (event.keyCode == 39 && d != 'LEFT') { // jobbra nyíl lenyomva és nem balra néz a kígyó
    d = 'RIGHT'; // jobbra mozgás
  } else if (event.keyCode == 40 && d != 'UP') { // lefelé nyíl lenyomva és nem felfelé néz a kígyó
    d = 'DOWN'; // lefelé mozgás
  }
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true; // ütközés történt
    }
  }
  return false; // nincs ütközés
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i === 0) ? 'green' : 'white'; // fej zöld, test fehér
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box); // alma kirajzolása

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d === 'LEFT') snakeX -= box;
  if (d === 'UP') snakeY -= box;
  if (d === 'RIGHT') snakeX += box;
  if (d === 'DOWN') snakeY += box;

  if (snakeX == food.x && snakeY == food.y) {
    score++; // pontszám növelése
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box }; // új alam pozíciója
  } else {
    snake.pop(); // kígyó farokdarabjának eltávolítása
  }

  let newHead = { x: snakeX, y: snakeY }; // új fej pozíciója

  if (snakeX < box || snakeX >= 20 * box || snakeY < box || snakeY >= 20 * box || collision(newHead, snake)) {
    clearInterval(game); // játék vége
  }

  snake.unshift(newHead); // új fej hozzáadása a kígyóhoz

  ctx.fillStyle = 'black';
  ctx.font = '45px Changa one';
  ctx.fillText(score, 2 * box, 1.6 * box); // pontszám kirajzolása
}

let game = setInterval(draw, 100); // játék ciklus
