$(function(){
    
    //0.5秒待ってから次の関数を実行
    var wait = function(){
        var d =$.Deferred();

        setTimeout(function(){
            d.resolve();
        },500);

        return d.promise();
    };

    //ajax
    $("#ajax").click(function(){
        $.ajax({url:"./roketstart1.txt"})
        .then(function(data){
                $("<div>").text(data).appendTo("#output");  //failの処理は書かなくてもOK
            }
            ,(function(){alert("error");}))
        .then(wait,(function(){alert("error");}))
        .then(function(){
            return $.ajax({url:"./roketstart2.txt"});
        })
        .then(function(data){
            $("<br>").appendTo("#output");
            $("<div>").text(data).appendTo("#output");
        })
        .then(wait)
        .then(function(){
            alert("2つ目のファイル読み込み完了")
        })
        .then(wait)
        .then(function(){
                return $.ajax({url:"./roketstart3.txt"})
            })

        .then(function(data){
            $("<br>").appendTo("#output");
            $("<div>").text(data).appendTo("#output");
        })
        .then(wait)
        .then(function(){
            $.ajax({url:"./roketstart-all.txt"})
            .then(function(data){
                $("<br>").appendTo("#output");
                $("<div>").text(data).appendTo("#output"); 
            })
            .then(wait)
            .then(function(){
                alert('deferredによるajaxの処理完了です')
            })
        })
    });

    //reload
    $("#reload").click(function(){
        location.reload();
    });
});