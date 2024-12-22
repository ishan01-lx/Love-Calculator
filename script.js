function check() {
    // Retrieve the input values and trim whitespace
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    // Validate input: Check if either field is empty
    if (name1 === "" || name2 === "") {
        alert("Both names must be entered!");
        return; // Stop further execution
    }

    // Generate a love percentage (randomized for fun)
    let lovePercentage = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

    // Display the result in the 'result' element
    document.getElementById("result").innerText = 
        `Your love is ${lovePercentage}% strong!`;

    // Optionally, add a fun message based on the percentage
    if (lovePercentage > 80) {
        document.getElementById("result").innerText += " Wow, you're a match made in heaven!";
    } else if (lovePercentage > 50) {
        document.getElementById("result").innerText += " Things are looking pretty good!";
    } else {
        document.getElementById("result").innerText += " There's room for improvement, but don't lose hope!";
    }
}
