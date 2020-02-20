$(function(){
    $('#append').click(function(){
        var $div1 = $('<div>').text('③append()でタグを生成').css('color','blue').attr('id','div1');
        $('#target').append($div1);
    });

    $('#prepend').click(function(){
        var $div2 = $('<div>').text('①prepend()でタグを作成').css('color','green').attr('id','div2');
        $('#target').prepend($div2);
    });

    
    // 存在しないタグにくっつけようとした場合
    // #targetのタグを、$div3にくっつける。※この時点でdiv3はページ上にない　→ 消える
    // $('#appendTo').click(function(){
    //     var $div3 = $('<div>').text('③appendTo()でタグを作成');
    //     $('#target').appendTo($div3);
    // });

    $('#appendTo').click(function(){
        $('<div>').text('④appendTo()でタグを作成').css('color','yellow').appendTo('#target').attr('id','div3');
    });

    $('#prependTo').click(function(){
        $('<div>').text('②prependTo()でタグを作成').css('color','red').prependTo('#target').attr('id','div4');
    });

    //存在しない要素(#AAAA)にappendでくっつける　→ 何も起こらない
    $('#test1').click(function(){
        var $div1 = $('<div>').text('③append()でタグを生成').css('color','blue').attr('id','div1');
        $('#AAAA').append($div1);
    });

    
    $('#test2').click(function(){
        var $div5 = $('<div>').text('③append()でタグを生成').css('color','blue').attr('id','div1');
        $('#target').appendTo($div5);
    });

    $('#reload').click(function(){
        location.reload();
    });

});