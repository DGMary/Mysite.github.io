$(document).ready(function(){$(".select").styler(),$(".burger-menu").on("click",function(e){e.preventDefault(),$(this).hasClass("opened")?$(this).removeClass("opened"):$(this).addClass("opened")}),$(".partner__slider").not(".slick-initialized").slick({slidesToShow:4,slidesToScroll:1,dots:!1,arrows:!0,infinite:!1,autoplay:!0,responsive:[{breakpoint:1023,settings:{infinite:!0,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:8e3}}]}),$(".review__slider").not(".slick-initialized").slick({centerMode:!0,slidesToShow:3,infinite:!0,arrows:!0,accessibility:!1,touchMove:!1,dots:!0}),$(".grid").masonry({itemSelector:".grid-item"});var e=new ol.layer.Tile({source:new ol.source.OSM}),o=new ol.Map({target:"map",layers:[e],view:new ol.View({center:ol.proj.fromLonLat([36.1457,49.9947]),zoom:6})}),i=new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat([36.1457,49.9947]))}),r=new ol.source.Vector({features:[i]}),t=new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.75,src:"img/marker.svg"})}),s=new ol.layer.Vector({source:r,style:t});o.addLayer(s)});