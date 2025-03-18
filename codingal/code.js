function main() {
    palindrome(prompt("enter a JS.String"));
}

function palindrome(string) {
    var input = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var reversedInput = input.split('').reverse().join('');
    
    if (input === reversedInput) {
        document.getElementById("display").innerHTML = "<span> \"" + string + "\" is a palindrome </span>"
    } else {
        document.getElementById("display").innerHTML = "<span> \"" + string + "\" is not a palindrome </span>"
    }
}