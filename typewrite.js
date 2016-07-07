var buttonCounter = 0;
function onClickButton(){
  console.log("OK")
  
    if(buttonCounter == 0){
  document.getElementById(".RewritingDiv").innerHTML =
      "<p>最初の書き換え<a class="switch" onclick="onClickButton();"><u>▽</u></a></p>;"
  buttonCounter++;
    }
    else if(buttonCounter == 1){
  document.getElementById(".RewritingDiv").innerHTML =
      "<p>2回目の書き換え"<a class="switch" onclick="onClickButton();><u>▽</u></a></p>;"
  buttonCounter++;
    }
    else if(buttonCounter == 2){
  document.getElementById(".RewritingDiv").innerHTML =
      "<p>3回目の書き換え．<br />最初に戻ります<a class="switch" onclick="onClickButton();"><u>▽</u></a></p>;"
  buttonCounter = 0;
    }