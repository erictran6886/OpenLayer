(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{287:function(e,a,n){"use strict";n.r(a);var t=n(3),r=n(2),o=n(30),s=n(29),w=n(4),c=n(6),u=n(7),i=n(13),d=n(127),f=n(24),b=n(32),j=n(36),g=n(68),m=n(67),p=n(80),v=new i.b;fetch("data/geojson/roads-seoul.geojson").then(function(e){return e.json()}).then(function(e){var a=(new o.a).readFeatures(e,{featureProjection:"EPSG:3857"}),n=new jsts.io.OL3Parser;n.inject(f.a,b.a,d.a,j.b,g.a,m.a,p.a);for(var t=0;t<a.length;t++){var r=a[t],s=n.read(r.getGeometry()).buffer(40);r.setGeometry(n.write(s))}v.addFeatures(a)});var h=new s.a({source:v}),l=new w.a({source:new u.b});new t.a({layers:[l,h],target:document.getElementById("map"),view:new r.a({center:Object(c.f)([126.979293,37.528787]),zoom:15})})}},[[287,0]]]);
//# sourceMappingURL=jsts.js.map