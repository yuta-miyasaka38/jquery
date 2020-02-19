// text要素の取得
$(function() {
    $("#btn1").click(function(){
        var extract = $("#textbox").text();
        $("#output").text(extract);
    });

// html要素を取得して書き換え
    $("#btn2").click(function(){
        var extract = $("#box").html();
        $("#output").text(extract);
    });

// html要素を取得して書き換え
    $("#btn3").click(function(){
        var extract = $("#box").html();
        $("#output").html(extract);
    });


// id属性の取得と表示
    $("#btn4").click(function(){
        var extract = $("textarea").attr("id");
        $("#output").text(extract);
    });


// id属性の取得と変更
    $("#btn5").click(function(){
        var setid = "textbox";
        $("textarea").attr("id","none");   //textareaのidを消去（noneにする）
        $("#box div").attr("id",setid); //大きなdivタグの中の、divタグ(”ボタンを押すと”)のidをtextboxに変更する

        contents = $("#"+setid).text();
        $("#output").text(contents);
    });

// rows属性の変更
$("#btn6").click(function(){
    $("textarea").attr({
        rows:1,
        cols:100,
        placeholder:"changed"
    });
    $("#output").text("rows:10→1, cols:30→100");
});


// 属性の削除
$("#btn7").click(function(){
    $("textarea").removeAttr("rows cols placeholder");
    $("#output").text("textareaデフォルト値");
});

// インライン属性の取得
$("#btn8").click(function(){
    var textcolor = $("#box div").css("color");
    var bgcolor = $("#box div").css("background");
    $("#output").text("文字色:"+textcolor+"、背景色:"+bgcolor);
});

// インライン属性の変更
$("#btn9").click(function(){
    $("#box > div").css({
        'color':'blue',
        'font-weight':'bold'
    });
    $("#box strong").css({
        'color':'white',
        'background':'red'
    });
    $("#output").text("文字色と背景色を変更");
});

// リロード
$("#btn10").click(function(){
    location.reload();
});


//大本の閉じカッコ
});