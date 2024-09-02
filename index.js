const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById("welcomeMessage").textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector("#workoutInput").value;
    const workoutList = document.querySelector("#workoutList");
    const newWorkout = document.createElement("li");
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector("#submitWorkout").addEventListener("click", displayWorkoutRoutine);


const addNewGoal = () => {
    const goalInput = document.querySelector("#goalInput").value;
    const goalList = document.querySelector("#goalList");
    const goalItems = goalList.querySelectorAll("li");

    for (let i = 0; i < goalItems.length; i++) {
        if (goalItems[i].textContent === goalInput) {
            alert("Duplicate goal detected!");
            return;
        }
    }

    const newGoal = document.createElement("li");
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
var waterIntake = 0;
const updateWaterIntake = (change) => {
    if (waterIntake + change >= 0) { // Ensure water intake doesn't go below 0
        waterIntake += change;
    }
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault();
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
