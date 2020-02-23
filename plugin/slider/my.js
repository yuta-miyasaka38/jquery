$( function() {

    // default slider
    $( "#slider" ).slider();

    //color picker
    function hexFromRGB(r, g, b) {
        var hex = [
          r.toString( 16 ),
          g.toString( 16 ),
          b.toString( 16 )
        ];
        $.each( hex, function( nr, val ) {
          if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
          }
        });
        return hex.join( "" ).toUpperCase();
      }
      function refreshSwatch() {
        var red = $( "#red" ).slider( "value" ),
          green = $( "#green" ).slider( "value" ),
          blue = $( "#blue" ).slider( "value" ),
          hex = hexFromRGB( red, green, blue );
        $( "#swatch" ).css( "background-color", "#" + hex );
      }
   
      $( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
      });
      $( "#red" ).slider( "value", 255 );
      $( "#green" ).slider( "value", 140 );
      $( "#blue" ).slider( "value", 60 );


    //multipul sliders
        // setup master volume
        $( "#master" ).slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true
        });
        // setup graphic EQ
        $( "#eq > span" ).each(function() {
            // read initial values from markup and remove that
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical"
            });
        });

    // Range slider
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 1000, 3000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "￥" + ui.values[ 0 ] + " - ￥" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "￥" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ￥" + $( "#slider-range" ).slider( "values", 1 ) );

    //snap to increase
    $( "#slider2" ).slider({
        value:1000,
        min: 0,
        max: 10000,
        step: 500,
        slide: function( event, ui ) {
          $( "#amount2" ).val( "￥" + ui.value );
        }
      });
      $( "#amount2" ).val( "￥" + $( "#slider2" ).slider( "value" ) );


    //vertical slider
    $( "#slider-range3" ).slider({
        orientation: "vertical",
        range: true,
        values: [ 17, 67 ],
        slide: function( event, ui ) {
          $( "#amount3" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount3" ).val( "$" + $( "#slider-range3" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range3" ).slider( "values", 1 ) );

});