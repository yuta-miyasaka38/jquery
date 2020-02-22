$(function(){
    
    //Hello
    function hello(name){
        return 'こんにちは' + name + 'さん';
    }

    $('#hello').click(function(){
        var inputName = $('#inputName').val();
        $('<div>').text(hello(inputName)).appendTo("#output1");   
    });

    //Add
    function add(A,B){
        return A*B;
    }

    $('#multi').click(function(){
        var inputA = $('#inputA').val();
        var inputB = $('#inputB').val();
        $('<div>').text(add(inputA,inputB)).appendTo("#output2");   
    });

});