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

function resetCount() {
    count = 0;
    document.getElementById('item-count').innerText = count;
}

function setLightMode() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "black";

    document.querySelector('.light-mode').classList.add('active');
    document.querySelector('.dark-mode').classList.remove('active');
}

function setDarkMode() {
    document.body.style.backgroundColor = "#212529";
    document.body.style.color = "white";

    document.querySelector('.dark-mode').classList.add('active');
    document.querySelector('.light-mode').classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
    setLightMode();
});