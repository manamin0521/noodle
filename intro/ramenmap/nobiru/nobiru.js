<!--
document.open();
document.write("<img src='../nobiru/men1.png' width='300' height='500' name='war' />");
document.close();
// -->
var sw=1;
image=new Array(30);
image[1]="../nobiru/men1.png";
image[2]="../nobiru/men2.png";
image[3]="../nobiru/men3.png";
image[4]="../nobiru/men4.png";
image[5]="../nobiru/men5.png";
image[6]="../nobiru/men6.png";
image[7]="../nobiru/men7.png";
image[7.5]="../nobiru/men7.5.png";
image[8]="../nobiru/men8.png";
image[9]="../nobiru/men9.png";
image[10]="../nobiru/men10.png";
image[11]="../nobiru/men11.png";
image[12]="../nobiru/men12.png";
image[13]="../nobiru/men13.png";
image[14]="../nobiru/men14.png";
image[15]="../nobiru/men15.png";
image[16]="../nobiru/men16.png";
image[17]="../nobiru/men17.png";
image[18]="../nobiru/men18.png";
image[19]="../nobiru/men19.png";
image[20]="../nobiru/men20.png";
image[21]="../nobiru/men21.png";
image[22]="../nobiru/men22.png";
image[23]="../nobiru/men23.png";
image[24]="../nobiru/men24.png";
image[25]="../nobiru/men25.png";
image[26]="../nobiru/men26.png";
image[27]="../nobiru/men27.png";
image[28]="../nobiru/men28.png";
image[29]="../nobiru/men29.png";
image[30]="../nobiru/men30.png";

hyouji();
function hyouji()
{
  setTimeout("hyouji()",200);
  document.war.src=image[sw];
  sw=sw+1
  if (sw>30){sw=1;}
}


//-->
