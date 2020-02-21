$(function(){ 
    //toggle
    $('#toggle').click(function(){
        $('#output').toggle();
    });

    $('#toggleSlow').click(function(){
        $('#output').toggle('slow');
    });

    $('#toggleFast').click(function(){
        $('#output').toggle('fast');
    });

    $('#toggle2000').click(function(){
        $('#output').toggle(2000);
    });
  
    
    //fadeToggle
    $('#fadeToggle').click(function(){
        $('#output').fadeToggle();
    });

    $('#fadeToggleSlow').click(function(){
        $('#output').fadeToggle('slow');
    });

    $('#fadeToggleFast').click(function(){
        $('#output').fadeToggle('fast');
    });

    $('#fadeToggle2000').click(function(){
        $('#output').fadeToggle(2000);
    });

    //slideToggle
    $('#slideToggle').click(function(){
        $('#output').slideToggle();
    });

    $('#slideToggleSlow').click(function(){
        $('#output').slideToggle('slow');
    });

    $('#slideToggleFast').click(function(){
        $('#output').slideToggle('fast');
    });

    $('#slideToggle2000').click(function(){
        $('#output').slideToggle(2000);
    });

    //toggleClass
    $('#toggleClass').click(function(){
        $('#output').toggleClass('bgcolor');
    });

    $('#toggleClassSlow').click(function(){
        $('#output').toggleClass('bgcolor','slow');
    });

    $('#toggleClassFast').click(function(){
        $('#output').toggleClass('bgcolor','fast');
    });

    $('#toggleClass2000').click(function(){
        $('#output').toggleClass('bgcolor',2000);
    });

    //toggleClass2
    $('#toggleClassSmall').click(function(){
        $('#output').toggleClass('small');
    });

    $('#toggleClassLarge').click(function(){
        $('#output').toggleClass('large');
    });

    $('#toggleClassDisplay').click(function(){
        $('#output').toggleClass('display');
    });    

});