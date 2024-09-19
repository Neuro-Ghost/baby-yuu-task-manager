document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const clearAllBtn = document.getElementById("clear-all-btn");

    const messages = [
      "G fucking G's",
"Everyones good at something..."
    ];

    const initialCatImages  = [
        "https://media.tenor.com/VdIKn05yIh8AAAAM/cat-sleep.gif",
        "https://www.cutecatgifs.com/wp-content/uploads/2014/07/cute-aww.gif",
        "https://25.media.tumblr.com/c6cfe4e9c0818f665c7a22d10c9afcba/tumblr_mkzo8lp1hK1snc4fmo1_500.gif",
        "https://media.tenor.com/QcCLjiic51kAAAAM/diva-happy.gif",
        "https://media.tenor.com/ljz6HI7ZlokAAAAM/cat-cats.gif",
        "https://media.tenor.com/igcX5hdPWD4AAAAM/eating-cats.gif",
        "https://i.pinimg.com/originals/b2/03/42/b203427f5041a1dbc1a61bdeed3ca909.gif",
        "https://media.tenor.com/z-N6G4F6nb8AAAAM/cat-cute.gif"
    ];

    const completedCatImages = [
        "https://i.makeagif.com/media/7-28-2016/LHHsiF.gif",
    ];

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
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
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

        const daySelection = li.querySelector(".day-selection");
        daySelection.addEventListener("change", function () {
            saveTasks();
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
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    clearAllBtn.addEventListener("click", () => {
        taskList.innerHTML = "";
        saveTasks();
    });

    loadTasks();
});
