$( function() {
    
    //basic search
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    //group search
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
          this._super();
          this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
        _renderMenu: function( ul, items ) {
          var that = this,
            currentCategory = "";
          $.each( items, function( index, item ) {
            var li;
            if ( item.category != currentCategory ) {
              ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
              currentCategory = item.category;
            }
            li = that._renderItemData( ul, item );
            if ( item.category ) {
              li.attr( "aria-label", item.category + " : " + item.label );
            }
          });
        }
      });
      var data = [
        { label: "アメリカ", category: "北米" },
        { label: "カナダ", category: "北米" },
        { label: "America", category: "北米" },
        { label: "Canada", category: "北米" },
        { label: "日本", category: "Asia" },
        { label: "韓国", category: "Asia" },
        { label: "香港", category: "Asia" },
        { label: "中国", category: "Asia" },
        { label: "Japan", category: "Asia" },
        { label: "Korea", category: "Asia" },
        { label: "Honkon", category: "Asia" },
        { label: "China", category: "Asia" },
        { label: "タイ", category: "South-East-Asia" },
        { label: "ラオス", category: "South-East-Asia" },
        { label: "カンボジア", category: "South-East-Asia" },
        { label: "ベトナム", category: "South-East-Asia" },
        { label: "Thailand", category: "South-East-Asia" },
        { label: "Laos", category: "South-East-Asia" },
        { label: "Cambodia", category: "South-East-Asia" },
        { label: "Vietnam", category: "South-East-Asia" },
        { label: "イギリス", category: "Europ" },
        { label: "フランス", category: "Europ" },
        { label: "スペイン", category: "Europ" },
        { label: "ベルギー", category: "Europ" },
        { label: "オランダ", category: "Europ" },
        { label: "スイス", category: "Europ" },
        { label: "ドイツ", category: "Europ" },
        { label: "English", category: "Europ" },
        { label: "France", category: "Europ" },
        { label: "Spain", category: "Europ" },
        { label: "Belgim", category: "Europ" },
        { label: "Holand", category: "Europ" },
        { label: "Swiss", category: "Europ" },
        { label: "Dermany", category: "Europ" },
      ];
   
      $( "#search" ).catcomplete({
        delay: 0,
        source: data
      });


      //図と説明文も表示
      var projects = [
        {
          value: "日本",  //使わない
          label: "Japan", //suggestに表示
          desc: "首都は東京です", //suggestに表示
          icon: "japan.gif"
        },
        {
          value: "韓国",
          label: "Korea",
          desc: "首都はソウルです",
          icon: "korea.gif"
        },
        {
            value: "中国",
            label: "China",
            desc: "首都は北京です",
            icon: "china.gif"
          },
          {
            value: "タイ",
            label: "Thailand",
            desc: "首都はバンコクです",
            icon: "thailand.gif"
          },
          {
            value: "カンボジア",
            label: "cambodia",
            desc: "首都はプノンペンです",
            icon: "cambodia.gif"
          },
          {
            value: "ベトナム",
            label: "vietnam",
            desc: "首都はハノイです",
            icon: "vietnam.gif"
          }, 
      ];
   
      $( "#project" ).autocomplete({
        minLength: 0,
        source: projects,
        focus: function( event, ui ) {
          $( "#project" ).val( ui.item.label );
          return false;
        },
        select: function( event, ui ) {
          $( "#project" ).val( ui.item.label );
          $( "#project-id" ).val( ui.item.value );
          $( "#project-description" ).html( ui.item.desc );
          $( "#project-icon" ).attr( "src", "flags/" + ui.item.icon );
   
          return false;
        }
      })
      .autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
          .append( "<div>" + item.label + "<br>" + item.desc + "</div>" )
          .appendTo( ul );
      };


    //   スクロール表示
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags2" ).autocomplete({
        source: availableTags
      });


    //   複数表示
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      function split( val ) {
        return val.split( /,\s*/ );
      }
      function extractLast( term ) {
        return split( term ).pop();
      }
   
      $( "#tags3" )
        // don't navigate away from the field on tab when selecting an item
        .on( "keydown", function( event ) {
          if ( event.keyCode === $.ui.keyCode.TAB &&
              $( this ).autocomplete( "instance" ).menu.active ) {
            event.preventDefault();
          }
        })
        .autocomplete({
          minLength: 0,
          source: function( request, response ) {
            // delegate back to autocomplete, but extract the last term
            response( $.ui.autocomplete.filter(
              availableTags, extractLast( request.term ) ) );
          },
          focus: function() {
            // prevent value inserted on focus
            return false;
          },
          select: function( event, ui ) {
            var terms = split( this.value );
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push( ui.item.value );
            // add placeholder to get the comma-and-space at the end
            terms.push( "" );
            this.value = terms.join( ", " );
            return false;
          }
        });
  } );