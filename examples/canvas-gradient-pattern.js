(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{238:function(e,t,o){"use strict";o.r(t);var a=o(3),r=o(2),n=o(30),l=o(44),d=o(29),i=o(6),c=o(13),w=o(132),p=o(84),s=o(116),u=document.createElement("canvas"),g=u.getContext("2d"),h=l.b,f=function(){var e=g.createLinearGradient(0,0,512*h,0);return e.addColorStop(0,"red"),e.addColorStop(1/6,"orange"),e.addColorStop(2/6,"yellow"),e.addColorStop(.5,"green"),e.addColorStop(4/6,"aqua"),e.addColorStop(5/6,"blue"),e.addColorStop(1,"purple"),e}(),b=(u.width=8*h,u.height=8*h,g.fillStyle="white",g.fillRect(0,0,u.width,u.height),g.fillStyle="rgba(102, 0, 102, 0.5)",g.beginPath(),g.arc(4*h,4*h,3*h,0,2*Math.PI),g.fill(),g.fillStyle="rgb(55, 0, 170)",g.beginPath(),g.arc(4*h,4*h,1.5*h,0,2*Math.PI),g.fill(),g.createPattern(u,"repeat")),S=new w.a,C=new p.c({fill:S,stroke:new s.a({color:"#333",width:2})}),y=new d.a({source:new c.b({url:"data/geojson/countries.geojson",format:new n.a}),style:function(e){var t=e.getId();return S.setColor(t>"J"?f:b),C}});new a.a({layers:[y],target:"map",view:new r.a({center:Object(i.f)([16,48]),zoom:3})})}},[[238,0]]]);
//# sourceMappingURL=canvas-gradient-pattern.js.map