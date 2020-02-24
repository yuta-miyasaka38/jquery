$( function() {

    // defualt
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();

    //connect list
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
      }).disableSelection();

    //placeholder highlight
    $( ".placeholder" ).sortable({
        placeholder: "ui-state-highlight"
      });
    $( ".placeholder" ).disableSelection();



    // 塊でソート不可 exclude item
    $( "#sortable3" ).sortable({
        items: "li:not(.ui-state-disabled)"
    });
    $( "#sortable3 li").disableSelection();


    //一部ソート不可 exclude item
    $( "#sortable4" ).sortable({
        cancel: ".ui-state-disabled"
    });

    $( "#sortable4 li" ).disableSelection();

});

