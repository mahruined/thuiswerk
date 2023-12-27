var buttonClickCounts = {
    1: 0,
    2: 0,
    3: 0
};

var lastClickedButton = null;
var activeRound = 1;

function changeImages(buttonNumber) {
    if (lastClickedButton === buttonNumber || buttonClickCounts[buttonNumber] === -1) {
        // Prevent clicking the same button in the same round or a disabled button
        return;
    }

    // Increment the click count for the specific button
    buttonClickCounts[buttonNumber]++;

    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    switch (buttonNumber) {
        case 1:
            image1.src = "images/1.jpg";
            image2.src = "images/bg1.jpg";
            break;
        case 2:
            image1.src = "images/2.jpg";
            image2.src = "images/bg2.jpg";
            break;
        case 3:
            image1.src = "images/3.jpg";
            image2.src = "images/bg3.jpg";
            break;
    }

    // Update the button text with the click count
    updateButtonClickCount(buttonNumber);

    // Set background color to red and disable the last clicked button only if it's not the first round
    if (lastClickedButton !== null && activeRound > 1) {
        document.getElementById('button' + lastClickedButton).style.backgroundColor = 'red';
        document.getElementById('button' + lastClickedButton).disabled = true;
    }

    // Update last clicked button
    lastClickedButton = buttonNumber;

    // Check if all buttons are clicked in the current round
    if (buttonClickCounts[1] > 0 && buttonClickCounts[2] > 0 && buttonClickCounts[3] > 0) {
        // Reset the active round and enable all buttons for the next round
        activeRound++;
        resetButtons();
    }
}

function updateButtonClickCount(buttonNumber) {
    var button = document.getElementById('button' + buttonNumber);
    button.textContent = buttonClickCounts[buttonNumber];
}

function resetButtons() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById('button' + i).style.backgroundColor = ''; // Reset background color
        document.getElementById('button' + i).disabled = false; // Enable the button
        buttonClickCounts[i] = 0; // Reset click count
    }

    lastClickedButton = null; // Reset last clicked button
}
