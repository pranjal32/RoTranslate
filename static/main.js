const berekenen = document.getElementById("berekenen");

function load(){
    berekenen.innerHTML = `Strings: <input type="text" id="strings" name="strings" value="0"> Price per String: <input type="text" id="pps" name="pps" value="80"> <br>Price without tax: <span id="pwout" >0</span><br>Price with tax (30%): <span id="pwith" >0</span><br> <button onclick="berekenrbux()">Calculate</button><br><span id="calculation"></span>`
}
load()
function berekenrbux(){
    const strings = document.getElementById("strings");
    const pps = document.getElementById("pps");
    const pwout = document.getElementById("pwout");
    const pwith = document.getElementById("pwith");
    const calculation = document.getElementById("calculation");
    var calculation2 = strings.value * pps.value
    pwout.innerHTML = calculation2
    var calculationwith = calculation2 * 1.43
    pwith.innerHTML = Math.round(calculationwith);
    calculation.innerHTML = `(${strings.value}*${pps.value})*1.43=${Math.round(calculationwith)}`
}
