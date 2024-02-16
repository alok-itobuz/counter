const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const counterOutput = document.getElementById("counter");

let timer = 10;

let val = 0,
  score = 0;
const increase = () => val++;

const decrease = () => val--;

const resetValue = () => (val = 0);

const changeValue = (e, fun) => {
  e.preventDefault();
  fun();
  score++;
  if (val > 0) counterOutput.style.color = "green";
  else if (val < 0) counterOutput.style.color = "red";
  else counterOutput.style.color = "blue";

  counterOutput.textContent = val;
};
plus.addEventListener("click", (e) => changeValue(e, increase));
reset.addEventListener("click", (e) => changeValue(e, resetValue));
minus.addEventListener("click", (e) => changeValue(e, decrease));

//---------
const counterTime = document.getElementById("counter-time");

const interval = setInterval(intervalFunction, 1000);
function intervalFunction() {
  timer--;
  console.log(timer);
  counterTime.textContent = `You've ${timer} second to change number.`;
  if (!timer) {
    const res = prompt(
      `BOOM💥.. Your score is ${score}.. wanna play again? type Yes/No`
    );
    timer = 10;
    val = 0;
    clearInterval(interval);
    score = 0;
    if (res.toString().toLowerCase() === "yes") {
      counterOutput.textContent = val;
      counterTime.textContent = `You've 10 second to change number.`;
      setInterval(intervalFunction, 1000);
    }
  }
}
