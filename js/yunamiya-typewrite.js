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
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「こんにちはだメン！たくさん種類があるけど、この店のおすすめのラーメンはどれだメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 1){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ゆなみや店長.png'　width='150' height='500'></center><div class='message'>「うちのラーメンは全部がおすすめです！すべてのラーメンにそれぞれこだわりがあって、中には麺を中華鍋で炒めることもあります。しいて言うなら、この夏新しく冷やしつけ麺を始めるからぜひ食べに来てほしいですね！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 2){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「確かに全部おいしそうだメン！ところでこの場所にお店を出したのには何か理由があるのかメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 3){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ゆなみや店長.png'　width='150' height='500'></center><div class='message'>「僕は２年前まで１０年間、北海道でラーメン屋をやっていました。そして仕事の関係でこっちに引っ越してきて、落ち着いたらまたラーメン屋をやろうと思っていました。そこでたまたまここの物件が空いてたから、またお店を出した感じですね。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }

    else if(buttonCounter == 4){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「なるほど！ところでこのあたりに店長さんが意識してるライバル店とかはあるのかメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 5){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ゆなみや店長.png'　width='150' height='500'></center><div class='message'>「そうだな～。ライバル店というより仲の良いお店でいうと、堀之内だと二郎、社井田、南大沢だとこうらく、まる重ですね。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 6){
       document.getElementById("RewritingDiv").innerHTML =
     "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「おお！そのお店にも行ってみたいメン！店長さん、今日はありがとうだメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
     else if(buttonCounter == 7){
       location.href = "../ramenmap2.html";

    }
}
