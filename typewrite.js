var buttonCounter = 0; //カウンタ変数
function onClickButton(){
    if(buttonCounter == 0){
      target = document.getElementById("RewritingDiv");
      console.log(target)
      target.innerHTML ="<p>最初の書き換え</p>";
      buttonCounter++;
    }
    else if(buttonCounter == 1){
  document.getElementById("RewritingDiv").innerHTML =
      "<p>2回目の書き換え</p>";
  buttonCounter++;
    }
    else if(buttonCounter == 2){
  document.getElementById("RewritingDiv").innerHTML =
      "<p>3回目の書き換え．<br />最初に戻ります．</p>";
  buttonCounter = 0;
    }
}

// var imgFlag = 0;
// function onClickButton(){
//     if(imgFlag == 0){
//   document.getElementById("RewritingDiv").innerHTML =
//       "<img src='http://k.yimg.jp/images/top/sp2/cmn/logo-ns-131205.png' alt='Yahooのロゴ' />";
//   imgFlag = 1;
//     }
//     else{ //imgFlagが0以外の時
//   document.getElementById("RewritingDiv").innerHTML =
//       "<img src='https://www.google.co.jp/images/srpr/logo11w.png' alt='Googleのロゴ' />";
//   imgFlag = 0;
//     }

// }