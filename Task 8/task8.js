var count = Array();
for(var i=0; i<15; i++){
    count[i] = i + 1;
}
document.write("Counting: " + count);


var revcount = Array();
for(var j=0; j<=10; j++){
    revcount[j] = j;
}
revcount.shift();
document.write("<br>Reverse Counting: " + revcount.reverse());


var even = Array();
for(var a=0; a<=10; a++){
    even[a] = a *2;
}
document.write("<br>Even: " + even);

var odd = Array();
for(var b=0; b<=10; b++){
    odd[b] = (b * 2) - 1;
}
odd.shift();
document.write("<br>Odd: " + odd);

var series = Array();
for(var c=0; c<=10; c++){
    series[c] = c *2 + "k ";
}
series.shift();
document.write("<br>Series: " + series);