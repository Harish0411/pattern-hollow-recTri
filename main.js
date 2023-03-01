let a = Number(prompt("Enter row/column to print hollow recTriangle"));

for(i=1; i<=a; i++){
    for(j=1; j<=i; j++){
	    	if(j==1||j==i||i==1||i==a){
		   document.write("*" + " ");
		}
		else{
		document.write("&nbsp&nbsp&nbsp");
	}
}
	document.write("<br>");
}