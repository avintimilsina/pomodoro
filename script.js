//Develop tab functionality

//1. Select all tabs from the list

const pomodoroTab = document.getElementById("pomodoro");
const shortBreakTab = document.getElementById("shortBreak");
const longBreakTab = document.getElementById("longBreak");

const pomodoroContent = document.getElementById("pomodoro-content");
const shortBreakContent = document.getElementById("shortbreak-content");
const longBreakContent = document.getElementById("longbreak-content");



//2. Add click event listener to each tab
//3. Remove all active tab class from tab list
//4. Add active class to selected tab
//5. Remove all active class from tab content
//6. Add active class to selected tab content

pomodoroTab.addEventListener("click", function () {


  shortBreakTab.classList.remove("active");
  longBreakTab.classList.remove("active");
  pomodoroTab.classList.add("active");

  pomodoroContent.classList.add("active");
  shortBreakContent.classList.remove("active");
  longBreakContent.classList.remove("active");

});

shortBreakTab.addEventListener("click", function () {
  pomodoroTab.classList.remove("active");
  longBreakTab.classList.remove("active");
  shortBreakTab.classList.add("active");


  pomodoroContent.classList.remove("active");
  shortBreakContent.classList.add("active");
  longBreakContent.classList.remove("active");

});

longBreakTab.addEventListener("click", function () {
  pomodoroTab.classList.remove("active");
  shortBreakTab.classList.remove("active");
  longBreakTab.classList.add("active");


  pomodoroContent.classList.remove("active");
  shortBreakContent.classList.remove("active");
  longBreakContent.classList.add("active");

});

// Timer to develop

function timer(seconds) {
  const now = Date.now();
  const then = now + (seconds * 1000);

  const timerInterval = setInterval(function () {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    displayTime(secondsLeft, pomodoroTime);
    displayTime(secondsLeft,shortBreakTime);
    displayTime(secondsLeft,longBreakTime);

    if (secondsLeft < 1) {
      clearInterval(timerInterval);
    }

  }, 1000);

};

function displayTime(seconds, element) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  console.log({ minute, second });

  element.innerText = minute + " : " + second;
}
const pomodoroTime = document.getElementById("pomodoroTime");
const shortBreakTime = document.getElementById("shortBreakTime");
const longBreakTime = document.getElementB  yId("longBreakTime");

const pomodoroButton = document.getElementById("pomodoroButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");

pomodoroButton.addEventListener("click", function () {
  const pomodoroTotalTime = 1500;
  timer(pomodoroTotalTime);
});

shortBreakButton.addEventListener("click", function () {
  const shortBreakTotalTime = 300;
  timer(shortBreakTotalTime);
});
longBreakButton.addEventListener("click", function () {
  const longBreakTotalTime = 900;
  timer(longBreakTotalTime);
});




