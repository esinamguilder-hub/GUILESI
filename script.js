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

});
