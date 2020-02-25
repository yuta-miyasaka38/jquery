$( function() {
    
    $( ".resizable" ).resizable();

    // 画像のresizable
    $( "#resizableImg" ).resizable();

    // アニメーション
    $( ".resizableA" ).resizable({
        animate: true
    });

    //Container
    $( ".resizableC" ).resizable({
        containment: ".container",
      });

    // Container & Animate
      $( ".resizableAC").resizable({
        animate: true,
        containment: ".container2",
      });

    //アスペクト比を保つ
    $( ".resizableAspect" ).resizable({
        aspectRatio: 16 / 9
      });
 
    //Gridに合わせて拡大・縮小
    $( ".resizableG" ).resizable({
        grid: 50
    });

    //Grid & Aspect Ratio
    $('.resizableGAspect').resizable({
        grid: 50,
        aspectRatio: 16/9,
    })

} );