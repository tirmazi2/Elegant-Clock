let timer = null;
let currentDate = document.querySelector("h1");
let clockDisplay = document.querySelector("h2");
let quote = document.querySelector("#quote");
let focus = document.querySelector("#focus");

if (localStorage.getItem('focus')) {
    focus.value = localStorage.getItem('focus');
}

const todayFocus = () => {
    const value = focus.value;
    localStorage.setItem('focus', value);
    focus.disabled = true;
}

const getQuote = async () => {
    const res = await fetch('https://private-anon-afa0d85240-goquotes.apiary-proxy.com/api/v1/random?count=1');
    res.json().then(data => {
        quote.innerHTML = data.quotes[0].text;
    }
    )
};

function start() {
    let now = new Date();
    let date = now.toDateString();
    let clock = now.toLocaleTimeString();

    currentDate.innerHTML = clock;
    clockDisplay.innerHTML = date;
    timer = setTimeout("start()", 1000);
}

start();
getQuote();