$(function(){
    $("#ajax").click(function(){
        $.ajax({
            
            //１リクエスト送信先URL
            //２成功時の処理：Ajax通信成功時にレスポンスデータ受け取り&処理実行(ここではテキストで出力)
            url:"./text1.txt",
            success: function(data){
                $("#output").text(data);
            }
        });
    });

    $("#reload").click(function(){
        location.reload();
    });


    //callback地獄　※入れ子　順番に読み込む処理
    $("#callback").click(function(){
        $.ajax({url:"./roketstart1.txt", success: function(data){
            $("<div>").text(data).appendTo("#output");
        }  //ajax successのfunctionの閉じカッコ ｝のあとに「;」は不要。中身には必要
        });

        //500msec待ち(1)
        setTimeout(function(){
            $.ajax({url: "./roketstart2.txt", success: function(data){
                $('<br>').appendTo("#output");
                $("<div>").text(data).appendTo("#output");

                        //500msec待ち(2)
                setTimeout(function(){
                    $.ajax({url: "./roketstart3.txt", success: function(data){
                        $('<br>').appendTo("#output");
                        $("<div>").text(data).appendTo("#output");
                        } 
                    });
                },500);
                } 
            });
        },500);
    });


    //callback地獄 時間軸でずらす
    $("#callbacktimer").click(function(){
        $.ajax({url:"./roketstart1.txt", success: function(data){
            $("<div>").text(data).appendTo("#output");
        }});

        setTimeout(function(){
            $.ajax({url:"./roketstart2.txt", success: function(data){
                $("<br>").appendTo("#output");
                $("<div>").text(data).appendTo("#output");
            }});
        },500);

        setTimeout(function(){
            $.ajax({url:"./roketstart3.txt", success: function(data){
                $("<br>").appendTo("#output");
                $("<div>").text(data).appendTo("#output");
            }});
        },500+500);

        setTimeout(function(){
            $.ajax({url:"./text1.txt", success: function(data){
                $("<br>").appendTo("#output");
                $("<div>").text(data).appendTo("#output");
            }});
        },500*3);
    });

});