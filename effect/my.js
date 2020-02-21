$(function(){

    //basic
    $("#hide").click(function(){
        $("#output").hide();
    });

    $("#show").click(function(){
        $("#output").show();
    });
    
    $("#toggle").click(function(){
        $("#output").toggle();
    });

    //slow
    $("#toggleSlow").click(function(){
        $("#output").toggle("slow");
    });

    $("#toggleSlowSwing").click(function(){
        $("#output").toggle("slow","swing");
    });

    $("#toggleSlowLinear").click(function(){
        $("#output").toggle("slow","linear");
    });

    //fast
    $("#toggleFast").click(function(){
        $("#output").toggle("fast");
    });

    $("#toggleFastSwing").click(function(){
        $("#output").toggle("fast","swing");
    });

    $("#toggleFastLinear").click(function(){
        $("#output").toggle("fast","linear");
    });

    //time
    $("#toggle2000").click(function(){
        $("#output").toggle(2000);
    });

    $("#toggle2000Swing").click(function(){
        $("#output").toggle(2000, "swing");
    });

    $("#toggle2000Linear").click(function(){
        $("#output").toggle(2000, "linear");
    });

    $("#toggle5000").click(function(){
        $("#output").toggle(5000);
    });

    //※shape※
    //basic
    $("#hideB").click(function(){
        $("#output2").hide();
    });

    $("#showB").click(function(){
        $("#output2").show();
    });
    
    $("#toggleB").click(function(){
        $("#output2").toggle();
    });

    //slow
    $("#toggleSlowB").click(function(){
        $("#output2").toggle("slow");
    });

    $("#toggleSlowSwingB").click(function(){
        $("#output2").toggle("slow","swing");
    });

    $("#toggleSlowLinearB").click(function(){
        $("#output2").toggle("slow","linear");
    });

    //fast
    $("#toggleFastB").click(function(){
        $("#output2").toggle("fast");
    });

    $("#toggleFastSwingB").click(function(){
        $("#output2").toggle("fast","swing");
    });

    $("#toggleFastLinearB").click(function(){
        $("#output2").toggle("fast","linear");
    });

    //time
    $("#toggle2000B").click(function(){
        $("#output2").toggle(2000);
    });

    $("#toggle2000SwingB").click(function(){
        $("#output2").toggle(2000, "swing");
    });

    $("#toggle2000LinearB").click(function(){
        $("#output2").toggle(2000, "linear");
    });

    $("#toggle5000B").click(function(){
        $("#output2").toggle(5000);
    });

    //function 処理完了したらテキストを表示
    $('#function').click(function(){
        $('#output').toggle('normal', function(){
            $('#done').text('functionにより「処理が完了しました」のテキストを表示しています').css('color','red');
        });
    });

    //reload
    $('#reload').click(function(){
        location.reload();
    });    
});