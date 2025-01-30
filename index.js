const countValue = document.querySelector('#counter');

function increment () {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the updated value to UI
    countValue.innerText = value;
};

function decrement () {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;
    //set the updated value to UI
    countValue.innerText = value;
}

