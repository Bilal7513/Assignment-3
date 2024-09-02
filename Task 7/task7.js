var a = new Set([10,20,4,40,60,70]);
var b = new Set([1,2,3,4,5,6,7,8,9,10]);

var arr = [...b,...a];
var union = [...new Set(arr)];
document.write(union);
