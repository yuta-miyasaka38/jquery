// text要素を取得して書き換え
$(function() {
    $("#btn").on("click",function(){
        var input = $("#box").text();
        $("#output").text(input);
    });
});
