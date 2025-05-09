let count = 0;

function addItem() {
    count++;
    document.getElementById('item-count').innerText = count;
}

function removeItem() {
    if (count > 0) {
        count--;
        document.getElementById('item-count').innerText = count;
    }
}

function setLightMode() {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "black";
}

function setDarkMode() {
    document.body.style.backgroundColor = "rgb(40, 40, 40)";
    document.body.style.color = "white";
}