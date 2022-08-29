DROP TABLE "service_itens" cascade;
DROP TABLE "round" cascade;
DROP TABLE "points_posts" cascade;
DROP TABLE "occurrence" cascade;
DROP TABLE "service_itens" cascade;
DROP TABLE "post" cascade;
DROP TABLE "panic" cascade;
DROP TABLE "users" cascade;
DROP TABLE "point_itens" cascade;
DROP TABLE "itens" cascade;
DROP TABLE "service_point" cascade;
DROP TABLE "service-day" cascade;
DROP TABLE "location" cascade;
DROP TABLE "company" cascade;



    const lati = Number(updateroundStats.latitude);
    const longi = Number(updateroundStats.longitude);

    var proximoLati = lati*1.0001;
    var proximoLongi = longi*1.0001;
    
    var calculoLatitude = Number(lati.toFixed(7)) - Number(proximoLati.toFixed(7));
    var calculoLongitude = Number(longi.toFixed(7)) - Number(proximoLongi.toFixed(7))

    if((Number(calculoLatitude.toFixed(7)) < 0.003 && Number(calculoLatitude.toFixed(7)) > 0.001) && (Number(calculoLongitude.toFixed(7)) < 0.006 && Number(calculoLongitude.toFixed(7)) > 0.001) &&
    (updateroundStats.locale === servicePointFind.locale)){
      console.log("Próximo");
    }else{
      console.log("Distante");
    }