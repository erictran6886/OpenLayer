(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{247:function(e,t,r){"use strict";r.r(t);var o=r(15),n=r(20),a=r(3),i=r(2),s=r(24),c=r(32),u=r(36),p=r(49),h=r(47),l=r(4),d=r(29),v=r(60),w=r(13),g=r(84),_=r(186),f=r(116),y=r(132),D={Drag:function(){p.b.call(this,{handleDownEvent:D.Drag.prototype.handleDownEvent,handleDragEvent:D.Drag.prototype.handleDragEvent,handleMoveEvent:D.Drag.prototype.handleMoveEvent,handleUpEvent:D.Drag.prototype.handleUpEvent}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}};Object(o.c)(D.Drag,p.b),D.Drag.prototype.handleDownEvent=function(e){var t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e});return t&&(this.coordinate_=e.coordinate,this.feature_=t),!!t},D.Drag.prototype.handleDragEvent=function(e){var t=e.coordinate[0]-this.coordinate_[0],r=e.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(t,r),this.coordinate_[0]=e.coordinate[0],this.coordinate_[1]=e.coordinate[1]},D.Drag.prototype.handleMoveEvent=function(e){if(this.cursor_){var t=e.map.forEachFeatureAtPixel(e.pixel,function(e){return e}),r=e.map.getTargetElement();t?r.style.cursor!=this.cursor_&&(this.previousCursor_=r.style.cursor,r.style.cursor=this.cursor_):void 0!==this.previousCursor_&&(r.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}},D.Drag.prototype.handleUpEvent=function(){return this.coordinate_=null,this.feature_=null,!1};var E=new n.a(new s.a([0,0])),m=new n.a(new c.a([[-1e7,1e6],[-1e6,3e6]])),b=new n.a(new u.b([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new a.a({interactions:Object(h.a)().extend([new D.Drag]),layers:[new l.a({source:new v.a({url:"https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure"})}),new d.a({source:new w.b({features:[E,m,b]}),style:new g.c({image:new _.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.95,src:"data/icon.png"}),stroke:new f.a({width:3,color:[255,0,0,1]}),fill:new y.a({color:[0,0,255,.6]})})})],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[247,0]]]);
//# sourceMappingURL=custom-interactions.js.map