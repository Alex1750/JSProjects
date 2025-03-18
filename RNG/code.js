function main() {
    RNG();
}
function RNG() {
    var max = prompt("Max?");
    var out = Math.round(Math.random() * max);
    document.getElementById("display").innerHTML = "<span>" + out + "</span>";
    alert(out);
}