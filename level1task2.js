// colour changing button task
const btn = document.getElementById('colorButton');

btn.addEventListener('click', function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  btn.style.backgroundColor = "#" + randomColor;
});

// alert greeting based on time task
const now = new Date();

const hour = now.getHours();

let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

alert(greeting);

// basic calc to add two numbers task
const button = document.getElementById('addBtn');

button.addEventListener('click', function() {
  const firstNum = document.getElementById('num1').value;
  const secondNum = document.getElementById('num2').value;

  const sum = Number(firstNum) + Number(secondNum);

  document.getElementById('result').textContent = sum;
});
