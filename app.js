const startText = document.getElementsByTagName("h2")[0];
const codePara = document.getElementById("code");
const keyPara = document.getElementById("key");
const whichPara = document.getElementById("which");

const infoBox = document.getElementById("key-info-container");
console.log(infoBox);


document.addEventListener("keypress", (event) => {
    infoBox.style.display = "flex";
    startText.display = "hidden";

    startText.textContent = event.which;
    codePara.textContent = event.code;
    keyPara.textContent = event.key;
    whichPara.textContent = event.which;
});

