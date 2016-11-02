google.maps.event.addDomListener(window, 'load', function()
{

    var latlng = new google.maps.LatLng( 35.624457, 139.400227 );
    var mapOptions = {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true
    };
    var mapObj = new google.maps.Map(document.getElementById('gmap'), mapOptions);

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({     //ゆなみ屋
      map: mapObj ,
      position: new google.maps.LatLng( 35.629559, 139.401380 ) ,
    }) ;
    new google.maps.event.addListener( markers[0] , 'click' , function gotoOthersite()
    {
      location.href ="http://yahoo.co.jp";
    }) ;

    markers[1] = new google.maps.Marker({     //極壱
      map: mapObj ,
      position: new google.maps.LatLng( 35.615973, 139.382682 ) ,
    }) ;
    new google.maps.event.addListener( markers[1] , 'click' , function gotoOthersite()
    {
      location.href ="http://google.com";
    }) ;

    markers[2] = new google.maps.Marker({     //ブンブン丸
      map: mapObj ,
      position: new google.maps.LatLng( 35.629797, 139.379690 ) ,
    })
      // 情報ウィンドウのインスタンスを格納する配列
      var infoWindows = [] ;
      // 1つ目の情報ウィンドウのインスタンスを作成する
      // [ new google.maps.InfoWindow() ]の引数にオプションオブジェクトを指定する
      infoWindows[0] = new google.maps.InfoWindow({
        content: "ゆなみ屋" ,
        position: latlng ,
      }) ;
      // 情報ウィンドウ(のインスタンス)を地図に設置(レンダリング)する
      infoWindows[0].open( mapObj , markers[0] ) ;
      infoWindows[1] = new google.maps.InfoWindow({
        content: "極壱" ,
        position: latlng ,
      }) ;
      infoWindows[1].open( mapObj , markers[1] ) ;
      infoWindows[2] = new google.maps.InfoWindow({
        content: "ブンブン丸" ,
        position: latlng ,
      }) ;
      infoWindows[2].open( mapObj , markers[2] ) ;
    }) ;
