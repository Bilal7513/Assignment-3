var arr1 = [72, 'a', 58, 95, 'b', 72, 'a', 65, 'b', 89, 95, 'a', 65, 95, 'b', 89, 58, 12];
document.write(arr1);
 
var arr2 = [...new Set(arr1)];
document.write("<br><br>" + arr2);