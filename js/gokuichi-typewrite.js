var buttonCounter = 0; //カウンタ変数
    $(function() {
      showmessage();
    });
    function showmessage(){
    $(".message").t({
        speed : 50,
        speed_vary : false,
        delay: 1,
    })
    };

function onClickButton(){
    if(buttonCounter == 0){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「こんにちはだメン！今日は『極壱』のことを色々教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 1){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/gokuichi-tentyo.png'　width='150' height='500'></center><div class='message'>「うちは今年で創業３年目。特に若い人に美味しく食べてもらえるラーメンを追求しています。だから、スープも濃厚、チャーシューも食べ応えのあるものにしています。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 2){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「たしかに若い人には、この濃さがクセになりそうだメン！ところでどうしてこの土地にお店を構えたんだメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 3){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/gokuichi-tentyo.png'　width='150' height='500'></center><div class='message'>「元々、うちの店は堀之内にありました。大学生のお客さんが多いので、大学生の方が使いやすいように2015年2月に南大沢駅の近くに移転しました。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 4){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「最後にこのあたりのライバル店を教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 5){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/gokuichi-tentyo.png'　width='150' height='500'></center><div class='message'>「丸重さんは、近いし同じ濃いスープなので意識しています。ですけど、ラーメンを食べる人が増えると嬉しいので、ライバルであり仲間だと思っています。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 6){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「ありがとうだメン！また学校帰りに寄りたいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 7){
      location.href ="../ramenmap2.html";
    }
}
