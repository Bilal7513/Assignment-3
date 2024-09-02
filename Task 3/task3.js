var color = ["Blue", "Red", "Black", "Yellow", "Purple"];
document.write(color+ ".");

color.splice(0,0,prompt("What color do you want to add at the beginning of the array?"));
document.write("<br><br>A: " + color+ ".");

color.push(prompt("What color do you want to add at the end of the array?"));
document.write("<br><br>B: " + color+ ".");

color.splice(0,0,"White", "Brown");
document.write("<br><br>C: " + color+ ".");

color.shift();
document.write("<br><br>D: " + color+ ".");

color.pop();
document.write("<br><br>E: " + color+ ".");

var add = parseInt((prompt("At which index you want to add color in array?")));
var addcolor = (prompt("And what color do you want to add in the array?"));
color.splice(add,0,addcolor);
document.write("<br><br>F: " + color+ ".");

var del = parseInt((prompt("At which index you want to delete color in array?")));
var delcolor = parseInt((prompt("And how many colors do you want to delete in the array?")));
color.splice(del,delcolor);
document.write("<br><br>G: " + color+ ".");
