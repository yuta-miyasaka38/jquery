$(function(){
    $("#ajax").click(function(){
        alert("①開始");
        $.ajax({url:"./get1.txt", success: function(data){
            $("<div>").text(data).css('color','red').appendTo("#output1");
        }});
        alert('③終了');
    });

    $("#setTimeout").click(function(){
        alert("①開始");
        setTimeout(function(){
            $("<div>").text("2秒経過").css('color','red').appendTo("#output2");
        });
        alert('③終了');
    });
});