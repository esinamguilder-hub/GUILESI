function toggleMode() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

window.onload = function() {
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }
}
window.addEventListener("load", () => {

const score =
localStorage.getItem("lastScore");

if(score){

const box =
document.getElementById("savedScore");

if(box){
box.innerHTML =
"Previous Score: " + score + "/10";
}

}
function calculateScore() {

let score = 0;

document
.querySelectorAll('input[type="radio"]:checked')
.forEach(answer => {
    score += Number(answer.value);
});

let grade = "";

if(score >= 8) grade = "A1";
else if(score >= 7) grade = "B2";
else if(score >= 6) grade = "B3";
else if(score >= 5) grade = "C4";
else if(score >= 4) grade = "C5";
else if(score >= 3) grade = "C6";
else grade = "F9";

document.getElementById("result").innerHTML =
`🏆 Score: ${score}/10 | Grade: ${grade}`;

localStorage.setItem("lastScore", score);
}
    window.onload = function(){

const score =
localStorage.getItem("lastScore");

if(score){
document.getElementById("savedScore")
.innerHTML =
"📊 Previous Score: " + score + "/10";
}

    }
    window.onload = function(){

let score =
localStorage.getItem("lastScore");

if(score && document.getElementById("scoreDisplay")){
document.getElementById("scoreDisplay").innerHTML =
"Latest Score: " + score + "/10";
}

    }
});
