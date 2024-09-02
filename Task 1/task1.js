var arr = ["","SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil" , "PhD"];
document.write("<b>Qualifications:</b><br><br>");
for(var i=1; i<arr.length;i++){
    document.write(i + ") " + arr[i] + ".<br>");
}