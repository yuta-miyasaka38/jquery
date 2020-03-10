$( function() {

    $( ".dialog1" ).dialog();
    $( ".dialog2" ).dialog();

    // アニメーションで開く
    $( ".dialog3" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
   
      $( "#opener" ).on( "click", function() {
        $( ".dialog3" ).dialog( "open" );
      });

    // 様々なアニメーションで開く
    $( ".dialog11" ).dialog({
        autoOpen: false,
        show: {
          effect: "show",
          duration: 1000
        },
        hide: {
          effect: "show",
          duration: 1000
        }
      });
   
      $( ".opener1" ).on( "click", function() {
        $( ".dialog11" ).dialog( "open" );
      });


    // 様々なアニメーションで開く
    $( ".dialog12" ).dialog({
        autoOpen: false,
        show: {
          effect: "clip",
          duration: 1000
        },
        hide: {
          effect: "clip",
          duration: 1000
        }
      });
   
      $( ".opener2" ).on( "click", function() {
        $( ".dialog12" ).dialog( "open" );
      });   


    // 様々なアニメーションで開く
    $( ".dialog13" ).dialog({
        autoOpen: false,
        show: {
          effect: "bounce",
          duration: 1000
        },
        hide: {
          effect: "bounce",
          duration: 1000
        }
      });
   
      $( ".opener3" ).on( "click", function() {
        $( ".dialog13" ).dialog( "open" );
      });    


    // 様々なアニメーションで開く
    $( ".dialog14" ).dialog({
        autoOpen: false,
        show: {
          effect: "drop",
          duration: 1000
        },
        hide: {
          effect: "drop",
          duration: 1000
        }
      });
   
      $( ".opener4" ).on( "click", function() {
        $( ".dialog14" ).dialog( "open" );
      });  
      
    // 様々なアニメーションで開く
    $( ".dialog15" ).dialog({
        autoOpen: false,
        show: {
          effect: "fold",
          duration: 1000
        },
        hide: {
          effect: "fold",
          duration: 1000
        }
      });
   
      $( ".opener5" ).on( "click", function() {
        $( ".dialog15" ).dialog( "open" );
      });  


    // 様々なアニメーションで開く
    $( ".dialog16" ).dialog({
        autoOpen: false,
        show: {
          effect: "silde",
          duration: 1000
        },
        hide: {
          effect: "slide",
          duration: 1000
        }
      });
   
      $( ".opener6" ).on( "click", function() {
        $( ".dialog16" ).dialog( "open" );
      }); 

    // 様々なアニメーションで開く
    $( ".dialog17" ).dialog({
        autoOpen: false,
        show: {
          effect: "explode",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
      });
   
      $( ".opener7" ).on( "click", function() {
        $( ".dialog17" ).dialog( "open" );
      }); 

    // 様々なアニメーションで開く
    $( ".dialog18" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "blind",
          duration: 1000
        }
      });
   
      $( ".opener8" ).on( "click", function() {
        $( ".dialog18" ).dialog( "open" );
      }); 



    // ⑥コーション＆ボタン
    $( ".dialog4" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,  //モーダル表時中の背景色の設定
        buttons: {
          "すべて削除": function() {
            $( this ).dialog( "close" );
          },
          "キャンセル": function() {
            $( this ).dialog( "close" );
          }
        }
      });
      

    //モーダルメッセージ
    $( ".dialog5" ).dialog({
        modal: true,
        buttons: {
          OK: function() {
            $( this ).dialog( "close" );
          }
        }
      });

      


    // モーダルのフォーム
    var dialog, form,
 
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),
    tips = $( ".validateTips" );

  function updateTips( t ) {
    tips
      .text( t )
      .addClass( "ui-state-highlight" );
    setTimeout(function() {
      tips.removeClass( "ui-state-highlight", 1500 );
    }, 500 );
  }

  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " +
        min + " and " + max + "." );
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }

  function addUser() {
    var valid = true;
    allFields.removeClass( "ui-state-error" );

    valid = valid && checkLength( name, "username", 3, 16 );
    valid = valid && checkLength( email, "email", 6, 80 );
    valid = valid && checkLength( password, "password", 5, 16 );

    valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
    valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
    valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

    if ( valid ) {
      $( "#users tbody" ).append( "<tr>" +
        "<td>" + name.val() + "</td>" +
        "<td>" + email.val() + "</td>" +
        "<td>" + password.val() + "</td>" +
      "</tr>" );
      dialog.dialog( "close" );
    }
    return valid;
  }

  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": addUser,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" );
    }
  });

  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addUser();
  });

  $( "#create-user" ).button().on( "click", function() {
    dialog.dialog( "open" );
  });


} );