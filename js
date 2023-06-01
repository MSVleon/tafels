function myFunction() {
    let a = 1; let b = 2; let c = 3; let d = 4; let e = 5; let f = 6;  let g = 7; let h = 8; let i = 9; let j = 10;
    var x = document.getElementById("tafel").value;
    var result = "1 x " + x + " = " + x * a + "<br>" + 
    "2 x " + x + " = " + x * b + "<br>" + 
    "3 x " + x + " = " + x * c + "<br>" + 
    "4 x " + x + " = " + x * d + "<br>" + 
    "5 x " + x + " = " + x * e + "<br>" + 
    "6 x " + x + " = " + x * f + "<br>" + 
    "7 x " + x + " = " + x * g + "<br>" + 
    "8 x " + x + " = " + x * h + "<br>" + 
    "9 x " + x + " = " + x * i + "<br>" + 
    "10 x " + x + " = " + x * j;
    document.getElementById("demo").innerHTML = result;
}
