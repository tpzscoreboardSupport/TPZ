let colors = ["black", "red", "blue" ,"green", "Yellow", "lime", "hotpink","orange"]
let SaveCollect = document.getElementById('collector');
SaveCollect.innerText = "[SAVE] ";
SaveCollect.style.fontSize = "70%";
let idx = 0;

setInterval (function () {
    SaveCollect.style.color = colors[idx];
    idx++;
    if (idx === colors.length){
        idx = 0;
    }
},80);


