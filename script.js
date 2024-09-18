document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const clearAllBtn = document.getElementById("clear-all-btn");

    // Array of playful messages
const messages = [
    "Oh, you're really trying, huh? Cute!",
    "Almost there... or are you?",
    "Look at you, thinking you’re so smart!",
    "Still here? You must *really* want it!",
    "Wow, you're like... kinda impressive, maybe.",
    "Haha, keep it up! Don’t let the struggle win!",
    "Oh come on, even a nerd can do this!",
    "Pssst... you might actually be good at this!",
    "You're doing it! I’m shocked!",
    "Keep going! I can *almost* take you seriously now.",
    "Oof, that was close! You’ve got this... right?"
];


    // Array of initial cat image URLs
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

    // Array of cat image URLs for completed tasks
    const completedCatImages = [
        "https://i.makeagif.com/media/7-28-2016/LHHsiF.gif",
    ];

    // Function to create a random text box
    function createRandomTextBox() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const textBox = document.createElement("div");

        textBox.textContent = randomMessage;
        textBox.style.position = "absolute";
        textBox.style.left = `${Math.random() * 90}vw`; // Random horizontal position
        textBox.style.top = `${Math.random() * 90}vh`;  // Random vertical position
        textBox.style.backgroundColor = "#ffcccb"; // Light pink background
        textBox.style.padding = "10px";
        textBox.style.borderRadius = "5px";
        textBox.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)";
        textBox.style.fontSize = "14px";
        textBox.style.color = "#333";
        textBox.style.opacity = "0"; // Start hidden
        textBox.style.transition = "opacity 1s"; // Fade-in effect

        document.body.appendChild(textBox);

        // Fade in the text box
        setTimeout(() => {
            textBox.style.opacity = "1";
        }, 10);

        // Remove the text box after 5 seconds
        setTimeout(() => {
            textBox.remove();
        }, 5000);
    }

    // Function to create random text boxes at random intervals
    function startRandomTextBoxes() {
        setInterval(() => {
            createRandomTextBox();
            // Random interval between 30 seconds (30000 ms) and 2 minutes (120000 ms)
        }, Math.random() * 90000 + 30000);
    }

    startRandomTextBoxes();

    // Function to show a random cute cat image from the initial array
    function showCuteCat() {
        const catImage = document.createElement("img");

        // Choose a random cat image URL from the initial array
        const randomImage = initialCatImages[Math.floor(Math.random() * initialCatImages.length)];
        catImage.src = randomImage;
        catImage.alt = "Cute Cat"; // Add alt text for accessibility
        catImage.style.position = "absolute";
        catImage.style.left = `${Math.random() * 80}vw`; // Random horizontal position
        catImage.style.top = `${Math.random() * 80}vh`;  // Random vertical position
        catImage.style.width = "150px"; // Set width
        catImage.style.height = "150px"; // Set height
        catImage.style.borderRadius = "15px"; // Rounded corners
        catImage.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)"; // Add shadow for a floating effect
        catImage.style.transition = "opacity 1s, transform 1s"; // Fade-in and scale effect
        catImage.style.opacity = "0"; // Start hidden
        catImage.style.transform = "scale(0.5)"; // Start scaled down

        document.body.appendChild(catImage);

        // Fade in and scale up the cat image
        setTimeout(() => {
            catImage.style.opacity = "1";
            catImage.style.transform = "scale(1)";
        }, 10);

        // Remove the cat image after 5 seconds
        setTimeout(() => {
            catImage.remove();
        }, 5000);
    }

    // Function to show a random cute cat image from the completed array
    function showCompletionCat() {
        const catImage = document.createElement("img");

        // Choose a random cat image URL from the completed array
        const randomImage = completedCatImages[Math.floor(Math.random() * completedCatImages.length)];
        catImage.src = randomImage;
        catImage.alt = "Completion Cat"; // Add alt text for accessibility
        catImage.style.position = "absolute";
        catImage.style.left = `${Math.random() * 80}vw`; // Random horizontal position
        catImage.style.top = `${Math.random() * 80}vh`;  // Random vertical position
        catImage.style.width = "150px"; // Set width
        catImage.style.height = "150px"; // Set height
        catImage.style.borderRadius = "15px"; // Rounded corners
        catImage.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)"; // Add shadow for a floating effect
        catImage.style.transition = "opacity 1s, transform 1s"; // Fade-in and scale effect
        catImage.style.opacity = "0"; // Start hidden
        catImage.style.transform = "scale(0.5)"; // Start scaled down

        document.body.appendChild(catImage);

        // Fade in and scale up the cat image
        setTimeout(() => {
            catImage.style.opacity = "1";
            catImage.style.transform = "scale(1)";
        }, 10);

        // Remove the cat image after 5 seconds
        setTimeout(() => {
            catImage.remove();
        }, 5000);
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const taskText = li.querySelector('span').textContent;
            const isCompleted = li.classList.contains('completed');
            const completionTime = li.querySelector('.expected-completion').value;
            tasks.push({ taskText, isCompleted, completionTime });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            savedTasks.forEach(task => {
                addTask(task.taskText, task.isCompleted, task.completionTime);
            });
        }
    }

    // Load tasks when page loads
    loadTasks();

    // Modify the addTask function to include localStorage
// Function to add task with animation
function addTask(taskText, isCompleted = false, completionTime = '') {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="flex justify-between items-center">
            <span>${taskText}</span>
            <input type="datetime-local" class="expected-completion" value="${completionTime}">
            <button class="complete-btn">Completed</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add to task list and trigger animation
    taskList.appendChild(li);
    setTimeout(() => {
        li.classList.add("show");
    }, 10);

    if (isCompleted) {
        li.classList.add("completed");
        li.classList.add("show"); // Show completed animation
    }

    const completeBtn = li.querySelector(".complete-btn");
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        li.classList.add("show"); // Ensure the completed animation is shown
        showCompletionCat(); // Show completion cat
        saveTasks(); // Save the updated tasks
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        li.classList.remove("show"); // Trigger hide animation
        setTimeout(() => {
            li.remove();
            saveTasks(); // Save the updated tasks
            if (taskList.children.length === 0) {
                clearAllBtn.style.display = "none"; // Hide the button if no tasks
            }
        }, 500); // Match the animation duration
    });

    saveTasks(); // Save tasks when a new one is added
    showCuteCat();
}


    // Clear all tasks button - include localStorage clearing
    clearAllBtn.addEventListener("click", function () {
        taskList.innerHTML = ""; // Clear all tasks
        localStorage.removeItem('tasks'); // Clear localStorage
        clearAllBtn.style.display = "none"; // Hide the button
    });

    // Event listener for adding tasks
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
            clearAllBtn.style.display = "inline-block"; // Show the button
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
 
  

 
});
