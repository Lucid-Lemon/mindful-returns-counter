// Initialize tap counters
let longDriftCount = 0;
let shortDriftCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Select buttons
    const longDriftBtn = document.querySelector(".left-btn");
    const shortDriftBtn = document.querySelector(".right-btn");

    // Select the existing counter display elements
    const longDriftDisplay = document.getElementById("long-drift-count");
    const shortDriftDisplay = document.getElementById("short-drift-count");

    // Function to update the counter display
    function updateCounters() {
        longDriftDisplay.textContent = `Long Drift: ${longDriftCount}`;
        shortDriftDisplay.textContent = `Short Drift: ${shortDriftCount}`;
    }

    // Event listeners for counting taps
    longDriftBtn.addEventListener("click", () => {
        longDriftCount++;
        updateCounters();
        console.log(`Long Drift tapped! Total: ${longDriftCount}`);
    });

    shortDriftBtn.addEventListener("click", () => {
        shortDriftCount++;
        updateCounters();
        console.log(`Short Drift tapped! Total: ${shortDriftCount}`);
    });

    // Select the reset button
    const resetBtn = document.getElementById("reset-btn");

    // Reset counter values
    resetBtn.addEventListener("click", () => {
        longDriftCount = 0;
        shortDriftCount = 0;
        updateCounters();
    });

    // Initialize counters
    updateCounters();
});
