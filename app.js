// Initialize tap counters
let longDriftCount = 0;
let shortDriftCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Select buttons
    const longDriftBtn = document.querySelector(".left-btn");
    const shortDriftBtn = document.querySelector(".right-btn");

    // Select the metrics section
    const metricsDiv = document.querySelector(".metrics");

    // Create a container for the counts
    const countContainer = document.createElement("div");
    countContainer.classList.add("count-container");

    // Create counter display elements
    const longDriftDisplay = document.createElement("p");
    const shortDriftDisplay = document.createElement("p");

    longDriftDisplay.id = "long-drift-count";
    shortDriftDisplay.id = "short-drift-count";

    // Append elements inside the count container
    countContainer.appendChild(longDriftDisplay);
    countContainer.appendChild(shortDriftDisplay);

    // Append the count container inside the metrics section
    metricsDiv.appendChild(countContainer);

    // Update the counter display
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

    // Initialize counters
    updateCounters();
});
