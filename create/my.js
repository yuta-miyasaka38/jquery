$(function(){
    $('#create').click(function(){
        var a1 =$('<a>').text('aタグを生成');
        $("#output").append(a1);
        console.log("a1[0]:",a1);
        
        var a2 =$('<a href="https://jquery.com/">').text('jqueryトップへのリンク');
        console.log("a2[0]:",a2[0]);

        var a3 =$('<a>').attr('id','a3');
        console.log("a3[0]:",a3[0]);

        var a4 =$('<a>').attr({
            'id':'a4',
            'href':'https://jquery.com/',
            'name': 'create',
            'alt':'aタグをjQueryで生成'
        });
        console.log("a4[0]:",a4[0]);

        var a5 =$('<a alt="1">'+'<a alt="2">'+'<a alt="3">'+'<a alt="4">'+'<a alt="5">');
        console.log("a5[0]:",a5[0]);
        console.log("a5[1]:",a5[1]);
        console.log("a5[2]:",a5[2]);
        console.log("a5[3]:",a5[3]);

        var h1 =$('<h1>').text("jQueryでh1タグを生成");
        console.log("h1[0]:",h1[0]);

        var div =$('<div>').attr('class','box');
        console.log("div[0]:",div[0]);

        var divText =$('<div>').attr('class','text').text('jQueryでdivタグを生成').css({
                'color':'red',
                'background':'yellow'
            });
        console.log("divText[0]:",divText[0]);

    });
});