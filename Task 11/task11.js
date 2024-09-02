var bkry = ["cake", "apple pie", "cookie" , "chips" , "patties" , "pan cake"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;
for(var i=0; i<bkry.length; i++){
    if(bkry[i] == order){
        document.write(order + " is <b>avalible</b> at index " + i + " in our bakery.");
        found = true;
        break;
    }
}
if(!found){
document.write("We are sorry. "+ order + " is <b>not avalible</b> in our bakery.");
}
