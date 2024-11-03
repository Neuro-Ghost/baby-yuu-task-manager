document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const clearAllBtn = document.getElementById("clear-all-btn");
const audio = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const loopBtn = document.getElementById('loop-btn');

let isPlaying = false;
let isLooping = false;


function showMoodPopup() {
  const lastCheck = localStorage.getItem("lastMoodCheck");
  const today = new Date().toDateString();

  if (lastCheck !== today) {
    const popup = document.getElementById("moodPopup");
    popup.style.display = "block";
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.style.transition = "opacity 0.5s ease";
      popup.style.opacity = "1";
    }, 50); // Delay to allow display to trigger before opacity transition
  }
}

function selectMood(mood) {
  const today = new Date().toDateString();
  localStorage.setItem("lastMoodCheck", today);

  let moodLog = JSON.parse(localStorage.getItem("moodLog")) || [];
  moodLog.push({ date: today, mood });
  localStorage.setItem("moodLog", JSON.stringify(moodLog));

  const popup = document.getElementById("moodPopup");
  // Start fade-out transition
  popup.style.opacity = "0";
  // Wait for the transition to complete, then hide the popup
  setTimeout(() => {
    popup.style.display = "none"; // Hide after fade out
  }, 500); // Duration must match the CSS transition
}

// Show the popup on page load if needed
window.onload = showMoodPopup;




playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶';
    } else {
        audio.play();
    playBtn.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
});

loopBtn.addEventListener('click', () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopBtn.textContent = isLooping ? '∞' : '∞ ⊘';
});

    const messages = [
        "G fucking G's",
        "Everyone's good at something..."
    ];

    const initialCatImages = [
        "https://38.media.tumblr.com/457b296c98ddd69f5327b8b5881e4ffe/tumblr_nedxajZ0hW1tw5bhko1_400.gif",
        "https://64.media.tumblr.com/bf764f6e75024cd690b1c11e1b0eed15/18a26cfa8ad7e0da-14/s250x400/fab9def043d1a713e9cae44e8fe42971afa135bc.gif"
      
    ];

    const completedCatImages = [
        "https://i.makeagif.com/media/7-28-2016/LHHsiF.gif",
    ];

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the current day of the week
    function getCurrentDayIndex() {
        return new Date().getDay();
    }

    // Calculate the day difference relative to the current day
    function getDayDifference(selectedDay) {
        const currentDayIndex = getCurrentDayIndex();
        const selectedDayIndex = daysOfWeek.indexOf(selectedDay);
        const difference = (selectedDayIndex - currentDayIndex + 7) % 7;
        return difference;
    }

    // Function to sort tasks based on the selected day relative to the current day
    function sortTasks() {
        const tasks = [...taskList.querySelectorAll("li")];
        
        tasks.sort((a, b) => {
            const dayA = a.querySelector(".day-selection").value;
            const dayB = b.querySelector(".day-selection").value;
            return getDayDifference(dayA) - getDayDifference(dayB);
        });

        taskList.innerHTML = ''; // Clear the list
        tasks.forEach(task => taskList.appendChild(task)); // Re-add sorted tasks
    }

    function createRandomTextBox() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const textBox = document.createElement("div");

        textBox.textContent = randomMessage;
        textBox.style.position = "absolute";
        textBox.style.left = `${Math.random() * 90}vw`;
        textBox.style.top = `${Math.random() * 90}vh`;
        textBox.style.backgroundColor = "#ffcccb";
        textBox.style.padding = "10px";
        textBox.style.borderRadius = "5px";
        textBox.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)";
        textBox.style.fontSize = "14px";
        textBox.style.color = "#333";
        textBox.style.opacity = "0";
        textBox.style.transition = "opacity 1s";

        document.body.appendChild(textBox);

        setTimeout(() => {
            textBox.style.opacity = "1";
        }, 10);

        setTimeout(() => {
            textBox.remove();
        }, 5000);
    }

    function startRandomTextBoxes() {
        setInterval(() => {
            createRandomTextBox();
        }, Math.random() * 90000 + 30000);
    }

    startRandomTextBoxes();

    function showCuteCat() {
        const catImage = document.createElement("img");
        const randomImage = initialCatImages[Math.floor(Math.random() * initialCatImages.length)];
        catImage.src = randomImage;
        catImage.alt = "Cute Cat";
        catImage.style.position = "absolute";
        catImage.style.left = `${Math.random() * 80}vw`;
        catImage.style.top = `${Math.random() * 80}vh`;
        catImage.style.width = "150px";
        catImage.style.height = "150px";
        catImage.style.borderRadius = "15px";
        catImage.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        catImage.style.transition = "opacity 1s, transform 1s";
        catImage.style.opacity = "0";
        catImage.style.transform = "scale(0.5)";

        document.body.appendChild(catImage);

        setTimeout(() => {
            catImage.style.opacity = "1";
            catImage.style.transform = "scale(1)";
        }, 10);

        setTimeout(() => {
            catImage.remove();
        }, 5000);
    }

    function showCompletionCat() {
        const catImage = document.createElement("img");
        const randomImage = completedCatImages[Math.floor(Math.random() * completedCatImages.length)];
        catImage.src = randomImage;
        catImage.alt = "Completion Cat";
        catImage.style.position = "absolute";
        catImage.style.left = `${Math.random() * 80}vw`;
        catImage.style.top = `${Math.random() * 80}vh`;
        catImage.style.width = "150px";
        catImage.style.height = "150px";
        catImage.style.borderRadius = "15px";
        catImage.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        catImage.style.transition = "opacity 1s, transform 1s";
        catImage.style.opacity = "0";
        catImage.style.transform = "scale(0.5)";

        document.body.appendChild(catImage);

        setTimeout(() => {
            catImage.style.opacity = "1";
            catImage.style.transform = "scale(1)";
        }, 10);

        setTimeout(() => {
            catImage.remove();
        }, 5000);
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(li => {
            const taskText = li.querySelector("span").textContent;
            const isCompleted = li.classList.contains("completed");
            const selectedDay = li.querySelector(".day-selection").value;

            tasks.push({
                text: taskText,
                completed: isCompleted,
                day: selectedDay
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            tasks.forEach(task => {
                addTask(task.text, task.completed, task.day);
            });
        }
    }

   function addTask(taskText, isCompleted = false, selectedDay = '') {
    const li = document.createElement("li");

    let dayOptions = daysOfWeek.map(day => {
        return `<option value="${day}" ${day === selectedDay ? 'selected' : ''}>${day}</option>`;
    }).join('');

    li.innerHTML = `
        <div class="flex justify-between items-center">
            <select class="day-selection">
                ${dayOptions}
            </select>
            <span>${taskText}</span>
            <br>
            <button class="complete-btn">Completed</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    setTimeout(() => {
        li.classList.add("show");
    }, 10);

    if (isCompleted) {
        li.classList.add("completed");
    }

    // Play sound effect for added task
    const taskAddedSound = document.getElementById('taskAddedSound');
    taskAddedSound.currentTime = 0; // Reset to the beginning
    taskAddedSound.play(); // Play the sound

    const daySelection = li.querySelector(".day-selection");
    daySelection.addEventListener("change", function () {
        saveTasks();
        sortTasks();  // Sort tasks when day is changed
    });

    const completeBtn = li.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        showCompletionCat();
        saveTasks();
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        li.classList.remove("show");
        setTimeout(() => {
            li.remove();
            saveTasks();
        }, 500);
    });

    saveTasks();
    showCuteCat();
    sortTasks();  // Sort tasks when a new task is added
}


    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });

    clearAllBtn.addEventListener("click", function () {
        taskList.querySelectorAll("li").forEach(li => li.remove());
        localStorage.removeItem("tasks");
    });

    loadTasks();
});
