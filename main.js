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
