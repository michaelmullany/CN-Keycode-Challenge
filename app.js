const codePara = document.getElementById("code");
const keyPara = document.getElementById("key");
const whichPara = document.getElementById("which");

console.log(codePara);

document.addEventListener("keypress", (event) => {
    codePara.textContent = event.code;
    keyPara.textContent = event.key;
    whichPara.textContent = event.which;
});

