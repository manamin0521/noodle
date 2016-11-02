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
      "<center><img src='../picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「すごいきれいな盛り付けだメン！店内も清潔感があってラーメン屋さんとは思えないメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 1){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「お客様への気遣いは一番大事ですからね。すべてのお客様が満足して帰ってくれるように日々努力しています。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 2){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「なるほど！ところでお客さんはどんな人が多いんだメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 3){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「幅広い年代の方が食べに来てくれるので客層はとても広いです。そして女性の方にも食べやすいラーメンなので男女問わず気に入ってもらえると思います。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 4){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「確かに女の人も入りやすそうな雰囲気だメン。最後にこのお店のために努力していることを教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }

    else if(buttonCounter == 5){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「そうですね、一番大切にしていることは、店のスタイルを変えないことですね。うちのラーメンをおいしいと思って来てくれているお客様のために味はもちろんサービスも同じものを保ち続けることですね。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }





    else if(buttonCounter == 6){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='../picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「ありがとうだメン！また来たいと思えるいいお店だったメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 7){
      location.href ="../html/ramenmap2.html";
    }



}
