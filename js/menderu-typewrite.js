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
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「本当だメン！すごい量だメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 1){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/menderu-tentyo.png'　width='150' height='500'></center><div class='message'>「麺は極太、味は濃厚。ガッツリ食べてスタミナをつけたい人に向けた大盛ラーメンだよ。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 2){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「プチ、小、大のサイズがあるみたいだけど大は絶対食べきれないメン.。やっぱりお客さんは男の人ばかりなのかメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 3){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/menderu-tentyo.png'　width='150' height='500'></center><div class='message'>「そうだね。昼はサラリーマンや土木関係の方が多くて、夜は学生メインだね。でも休日には家族で食べに来てくれる人もいて、お母さんやお子さんも気に入ってくれてるよ。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }

    else if(buttonCounter == 4){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「なるほど。ところでこの土地にお店を出した理由は何かあるのかメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 5){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/menderu-tentyo.png'　width='150' height='500'></center><div class='message'>「一番の理由は学生さんが多いってことかな。一人暮らしの学生さんたちにはスタミナをつけてもらわなきゃね。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 6){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「最後にこのあたりのライバル店を教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 7){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/menderu-tentyo.png'　width='150' height='500'></center><div class='message'>「うーん、ライバル店は特にないかな。どこのお店もすごいところばかりだから、うちは自分にできることをやり続けるだけかな。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 8){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「ありがとうだメン！またスタミナをつけに食べに来るメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 9){
      location.href = "./ramenmap.html";
    }
}
