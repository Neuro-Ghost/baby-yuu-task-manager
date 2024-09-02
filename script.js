document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const clearAllBtn = document.getElementById("clear-all-btn");

    // Array of playful messages
    const messages = [
        "Hehe, it's so funny to see you try!",
        "Good luck!",
        "Why even try, smh.",
        "NERDDDD",
        "Keep going, you're almost there!",
        "Seriously?",
        "Just give up already!",
        "Wow, you're still here?",
        "You're doing great... maybe.",
        "Nice try!",
        "Not bad, for a nerd!"
    ];

    // Array of initial cat image URLs
    const initialCatImages  = [
        "https://media.tenor.com/VdIKn05yIh8AAAAM/cat-sleep.gif",
        "https://www.cutecatgifs.com/wp-content/uploads/2014/07/cute-aww.gif",
        "https://25.media.tumblr.com/c6cfe4e9c0818f665c7a22d10c9afcba/tumblr_mkzo8lp1hK1snc4fmo1_500.gif",
        "https://media.tenor.com/QcCLjiic51kAAAAM/diva-happy.gif",
        "https://media.tenor.com/ljz6HI7ZlokAAAAM/cat-cats.gif"
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

    // Your existing task management code...
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
            clearAllBtn.style.display = "inline-block"; // Show the button
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="flex justify-between items-center">
                <span>${taskText}</span>
                <input type="datetime-local" class="expected-completion">
                <button class="complete-btn bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">Completed</button>
                <button class="delete-btn bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Delete</button>
            </div>
        `;

        const completeBtn = li.querySelector(".complete-btn");
        completeBtn.addEventListener("click", function () {
            li.classList.toggle("completed");
            // Show a different cat image when the task is completed
            showCompletionCat();
        });

        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
            // Check the number of tasks to show/hide the "Clear All" button
            if (taskList.children.length === 0) {
                clearAllBtn.style.display = "none"; // Hide the button
            }
        });

        // Use setTimeout to add the animation class after a slight delay
        setTimeout(function () {
            li.classList.add("task-entry");
        }, 10);

        taskList.appendChild(li);

        // Show a cute cat each time a new task is added
        showCuteCat();
    }

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });

    clearAllBtn.addEventListener("click", function () {
        taskList.innerHTML = ""; // Clear all tasks
        clearAllBtn.style.display = "none"; // Hide the button
    });
});
