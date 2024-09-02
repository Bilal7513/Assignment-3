var a = [24, 53, 78, 91, 12];
var b = a[0];  
for(var i=1; i<a.length; i++){
    if(b < a[i]){
        b = a[i];
    }
}
document.write(a);
document.write("<br>The largest number is " + b);