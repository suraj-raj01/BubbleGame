var time = 90;
var score = 0;
var hit = 0;

function increaseScore() {
    score+=10;
    document.querySelector("#score").textContent = score;
}

function hitNumber() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitnumber").textContent = hit;
}

function timer() {
    setInterval(function(){
        time--;
        if(time >=0){
            var e = document.querySelector("#timer").innerHTML = time;
        }else{
            clearInterval(e);
            document.getElementById("message").style.display= "block"
            document.querySelector("#totalscore").textContent = score;
            document.querySelector("#btn").addEventListener("click",function(){
                document.getElementById("message").style = 'none';
                location.reload();
            })
        }
    },1000)
}

function makeBubble() {
    var clutter = "";
    for (let index = 0; index < 176; index++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottommenu").innerHTML = clutter;
}

document.querySelector("#bottommenu").addEventListener("click", function(det){
    var checkNumber = Number(det.target.textContent);
    if(checkNumber === hit){
        increaseScore();
        hitNumber();
        makeBubble();
    }
});

makeBubble();
timer();
hitNumber();