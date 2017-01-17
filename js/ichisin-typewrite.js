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
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「こんにちはだメン！今日は一信のことをいろいろ教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 1){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「うちは二種類のラーメンを提供していて鶏精湯スープをベースに魚介を合わせた『和節醤油』、５種類の塩の旨みを凝縮した鯛出汁のダシが香る『鯛出汁旨塩』があります。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 2){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「おお！どっちもおいしそうだメン！ところでどうしてこの土地にお店を構えたんだメン？」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 3){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「この堀之内を選んだ理由は、ここに特別何かがあったからではなく、人との繋がりでたまたまここになった感じですね。お客さんはあっさり系ということで年配の方が中心ですが最近は近くの学生のお客さんも増えてきましたね。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 4){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「最後に店長さんの一信への思いを教えてほしいメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 5){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ichisin-tentyo.png'　width='150' height='500'></center><div class='message'>「お客さんにも仕事にも、嘘をつかないことですね。お客さんに満足して帰ってもらうための努力は絶対に欠かせません。」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 6){
      document.getElementById("RewritingDiv").innerHTML =
      "<center><img src='./picture/ra1.png' alt='ラーメンくん' /></center><div class='message'>「店長さん、ありがとうだメン！また食べに来るメン！」<a href='#' class='switch' onclick='onClickButton();'><u>▼</u></a></div>";
      buttonCounter++;
      setTimeout(showmessage(), 5000);
    }
    else if(buttonCounter == 7){
      location.href ="../ramenmap.html";
    }
}
