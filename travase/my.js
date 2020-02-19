$(function(){
    // 一つ前の要素
    $("#prevBtn").click(function(){
        $(this).prev().text("prev()で隣接する一つ前の要素を書き換え").css({
            'color':'white',
            'font-size':'1.2em',
            'background':'black'
        });
    });

    // 一つ後ろの要素
    $("#nextBtn").click(function(){
        $(this).next().text("next()で隣接する一つ後ろの要素を書き換え").css({
            'color':'white',
            'font-size':'1.2em',
            'background':'black'
        });
    });

    // prevAllで前の要素全てを書き換え
    $("#prevAll").click(function(){
        $(this).prevAll().text("prevAll()で前の要素全て書き換え").css({
            'color':'red',
            'background':''
        });
    });

    // prevAll('h3')で前の指定したタグのみ書き換え
    $("#prevSelect").click(function(){
        $(this).prevAll('h3').text("prevAll('h3')で前のh3タグのみ書き換え").css({
            'color':'black',
            'background':'yellow'
        });
    });


    // nextAll('h3')で後ろの指定したタグのみ書き換え
    $("#nextSelect").click(function(){
        $(this).nextAll('h3').text("nextAll('h3')で後ろのh3タグのみ書き換え").css({
            'color':'black',
            'background':'yellow'
        });
    });    


    // nextAll()で後ろの全て書き換え
    $("#nextAll").click(function(){
        $(this).nextAll().text("nextAll('')で前の要素全て書き換え").css({
            'color':'blue',
            'background':''
        });
    });    

    
    // リロード
    $("#reload").click(function(){
        location.reload();
    });    

});