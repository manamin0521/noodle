var buttonCounter = 0; //カウンタ変数
function onClickButton(){
    if(buttonCounter == 0){
      target = document.getElementById("RewritingDiv");
      console.log(target)
      target.innerHTML =
      "<center><img src='./ra1.png' alt='ラーメンくん' /></center>";
      "<p>最初の書き換え</p>";
      buttonCounter++;
    }
    else if(buttonCounter == 1){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 2){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ra1.png' alt='ラーメンくん' /></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 3){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    } 
    else if(buttonCounter == 4){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 5){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ra1.png' alt='ラーメンくん' /></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 6){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    } else if(buttonCounter == 7){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 8){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ra1.png' alt='ラーメンくん' /></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 9){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ゆなみや店長.png'　width='150' height='500'></center>";
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    } 
    else if(buttonCounter == 10){
  document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./ra1.png' alt='ラーメンくん' /></center>";
      "<p>3回目の書き換え</p>";
  buttonCounter = 0;
    }
}