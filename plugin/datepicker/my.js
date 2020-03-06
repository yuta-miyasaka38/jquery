$( function() {

    $( ".datepicker" ).datepicker();

    //formatを変更
    $( ".datepicker2" ).datepicker({
        dateFormat: 'yy/mm/dd (DD)'
    });

    //標題の設定
    $( ".datepicker3" ).datepicker({
        yearSuffix: "年",
        showMonthAfterYear: true,
        monthNames:['1月', '2月', '3月', 'AAA', '5月', 'BBB', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNamesMin:['日', 'CCC', '火', '水', 'DDD', '金', '土']
    });

    //入力値を日本語にする
    $( ".datepicker4" ).datepicker({
        dateFormat: 'yy年m月d日 (DD)',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
    });

    //選択日の指定（今日起点）
    $( ".datepicker5" ).datepicker({
        defaultDate: +70
    });

    //日本仕様（月曜始まり、デフォルト1年後選択）
    $( ".datepicker6" ).datepicker({
        
        // カレンダーの設定
        yearSuffix: "年",
        showMonthAfterYear: true,
        monthNames:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNamesMin:['日', '月', '火', '水', '木', '金', '土'],
        firstDay: 1,

        // 出力の設定
        dateFormat: 'yy年m月d日 (DD)',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],

        // デフォルトの選択
        defaultDate: '+2y'
    });


    //最大 選択可能日付
    $( ".datepicker7" ).datepicker({
        maxDate:'+5w',
        hideIfNoPrevNext:true
    });


    //最小 選択可能日付
    $( ".datepicker8" ).datepicker({
        minDate:'+1w',
    });


    //最大(今日)、最小(2ヶ月前)
    $( ".datepicker9" ).datepicker({
        maxDate:new Date(),
        minDate: '-2m',
        hideIfNoPrevNext:true
    });



    //土曜始まり
    $( ".datepicker10" ).datepicker({
        firstDay: 6
    });
    
   

} );