(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Nr18:function(t,i,s){"use strict";var h=s("S/j/"),n=s("d/Gc"),e=s("ne8i");t.exports=function(t){for(var i=h(this),s=e(i.length),r=arguments.length,a=n(r>1?arguments[1]:void 0,s),o=r>2?arguments[2]:void 0,c=void 0===o?s:n(o,s);c>a;)i[a++]=t;return i}},RXBc:function(t,i,s){"use strict";s.r(i);s("Vd3H"),s("bHtr"),s("Zz4T");var h=s("q1tI"),n=s.n(h),e=s("vrFN"),r=s("Wbzz"),a=(s("sg+I"),s("k0iR")),o=s.n(a);var c=function t(i,s,h){this.Pt=function(){var t=this.fl+this.z,i=this.fl/t;return{x:this.x*i,y:this.y*i,scale:i}},this.set=function(t,i,s){return this.x=t,this.y=i,this.z=s,this},this.len=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},this.add=function(t,i){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},this.sub=function(t,i){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},this.subv=function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this},this.scale=function(t){return this.x*=t,this.y*=t,this.z*=t,this},this.lowscale=function(t){if(0!==t){var i=1/t;this.x*=i,this.y*=i,this.z*=i}else this.x=0,this.y=0,this.z=0;return this},this.dst=function(t){return Math.sqrt(this.dsq(t))},this.dsq=function(t){var i=this.x-t.x,s=this.y-t.y,h=this.z-t.z;return i*i+s*s+h*h},this.cross=function(t,i){var s=this.x,h=this.y,n=this.z;return this.x=h*t.z-n*t.y,this.y=n*t.x-s*t.z,this.z=s*t.y-h*t.x,this},this.p=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},this.level=function(){return this.lowscale(this.len())},this.copy=function(){return new t(this.x,this.y,this.z)},this.x=i||0,this.y=s||0,this.z=h||0,this.fl=1e3},l=function(){this.matrix=function(){this.bbase.vtx(),this.leftwing.vtx(),this.rightwing.vtx(),this.leftwing.wingY(this.wY),this.rightwing.wingY(this.wY),this.bbase.rotY(this.rot.y),this.bbase.rotZ(this.rot.z),this.leftwing.rotY(this.rot.y),this.leftwing.rotZ(this.rot.z),this.rightwing.rotY(this.rot.y),this.rightwing.rotZ(this.rot.z),this.bbase.trans(this.pos),this.leftwing.trans(this.pos),this.rightwing.trans(this.pos)},this.draw=function(){this.bbase.draw(),this.leftwing.draw(),this.rightwing.draw()},this.tri=function(t){var i,s,h,n;return n=f.v[f.beak[t][0]],i=new c(n[0],n[1],n[2]),n=f.v[f.beak[t][1]],s=new c(n[0],n[1],n[2]),n=f.v[f.beak[t][2]],h=new c(n[0],n[1],n[2]),new v(i,s,h)},this.wang=function(t){var i=f.v[f.beak[1][1]];this.rot.x=Math.atan2(t,i[0])},this.zpos=function(){var t=this.bbase._z(),i=this.leftwing._z(),s=this.rightwing._z();return Math.min(t,i,s)},this.wing=function(t){this.wY=t},this.base=0,this.left=1,this.right=2,this.pos=new c,this.rot=new c,this.bbase=this.tri(this.base),this.leftwing=this.tri(this.left),this.rightwing=this.tri(this.right)},u=function(){this._coll=function(t){this.coll=t},this.param=function(t,i,s){this.width=t,this.height=i,this.depth=s},this.run=function(t){this.coll&&(this.vtr.set(-this.width,this.pos.y,this.pos.z),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr),this.vtr.set(this.width,this.pos.y,this.pos.z),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr),this.vtr.set(this.pos.x,-this.height,this.pos.z),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr),this.vtr.set(this.pos.x,this.height,this.pos.z),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr),this.vtr.set(this.pos.x,this.pos.y,-this.depth),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr),this.vtr.set(this.pos.x,this.pos.y,this.depth),this.vtr=this.detect(this.vtr),this.vtr.scale(5),this.accel.add(this.vtr)),Math.random()>.5&&this.fly(t),this.move()},this.fly=function(t){this.ept&&this.accel.add(this.meet(this.ept,.005)),this.accel.add(this.line(t)),this.accel.add(this.togeth(t)),this.accel.add(this.apart(t))},this.move=function(){this.vel.add(this.accel);var t=this.vel.len();t>this.msp&&this.vel.lowscale(t/this.msp),this.pos.add(this.vel),this.accel.set(0,0,0)},this.detect=function(t){var i=new c;return i.copy(this.pos),i.sub(t),i.scale(1/this.pos.dsq(t)),i},this.rep=function(t){var i=this.pos.dst(t);if(i<150){var s=new c;s.subv(this.pos,t),s.scale(.5/i),this.accel.add(s)}},this.meet=function(t,i){var s=new c;return s.subv(t,this.pos),s.scale(i),s},this.line=function(t){for(var i,s=new c,h=0,n=0,e=t.length;n<e;n++)if(!(Math.random()>.6)){var r=(i=t[n]).pos.dst(this.pos);r>0&&r<=this.area&&(s.add(i.vel),h++)}if(h>0){s.lowscale(h);var a=s.len();a>this.mfrc&&s.lowscale(a/this.mfrc)}return s},this.togeth=function(t){for(var i,s,h=new c,n=new c,e=0,r=0,a=t.length;r<a;r++)Math.random()>.6||(s=(i=t[r]).pos.dst(this.pos))>0&&s<=this.area&&(h.add(i.pos),e++);e>0&&h.lowscale(e),n.subv(h,this.pos);var o=n.len();return o>this.mfrc&&n.lowscale(o/this.mfrc),n},this.apart=function(t){for(var i,s,h=new c,n=new c,e=0,r=t.length;e<r;e++)Math.random()>.6||(s=(i=t[e]).pos.dst(this.pos))>0&&s<=this.area&&(n.subv(this.pos,i.pos),n.level(),n.lowscale(s),h.add(n));return h},this.vtr=new c,this.width=600,this.height=600,this.depth=300,this.ept=null,this.area=200,this.msp=4,this.mfrc=.1,this.coll=!1,this.pos=new c,this.vel=new c,this.accel=new c},v=function(t,i,s){this.draw=function(){var t=[this.Vtxs[0].Pt().x,this.Vtxs[0].Pt().y],i=[this.Vtxs[1].Pt().x,this.Vtxs[1].Pt().y],s=[this.Vtxs[2].Pt().x,this.Vtxs[2].Pt().y],h=this.col();f.$.fillStyle=h,f.$.strokeStyle=h,f.$.lineWidth=.1,f.$.beginPath(),f.$.moveTo(t[0],t[1]),f.$.lineTo(i[0],i[1]),f.$.lineTo(s[0],s[1]),f.$.lineTo(t[0],t[1]),f.$.closePath(),f.$.fill(),f.$.stroke()},this.rotX=function(t){var i=t;this.Vtxs.forEach((function(t,s,h){f.Matrix.rotX(t,i)}))},this.rotY=function(t){var i=t;this.Vtxs.forEach((function(t,s,h){f.Matrix.rotY(t,i)}))},this.rotZ=function(t){var i=t;this.Vtxs.forEach((function(t,s,h){f.Matrix.rotZ(t,i)}))},this.trans=function(t){var i=t;this.Vtxs.forEach((function(t,s,h){f.Matrix.trans(t,[i.x,i.y,i.z])}))},this.vtx=function(t){for(var i=0;i<3;i++){var s=this.mainv[i].x,h=this.mainv[i].y,n=this.mainv[i].z;this.Vtxs[i].x=s,this.Vtxs[i].y=h,this.Vtxs[i].z=n}},this.wingY=function(t){this.Vtxs[0].y=t},this._z=function(){return Math.min(this.Vtxs[0].z,this.Vtxs[1].z,this.Vtxs[2].z)},this.col=function(){var t=new c(1,1,1),i=this.norm(),s=this.Vtxs[0].copy(),h=s.sub(f.V);h.level();var n=(s=this.Vtxs[0].copy()).sub(f.L);n.level();var e=n.p(i),r=i.copy();r.scale(e),r.scale(2);var a=n.copy();a.sub(r),r.scale(-1),e=Math.max(r.p(n),0);var o=this.bv.copy();o.scale(e),o.scale(o,.3),r=o.copy();var l=a.copy();l.scale(-1),e=Math.pow(Math.max(l.p(h)),20),(l=t.copy()).scale(.3*e);var u=this.bv.copy();return u.scale(.7),r.add(l),r.add(u),"rgb("+Math.floor(75*r.x)+","+Math.floor(75*r.y)+","+Math.floor(75*r.z)+")"},this.norm=function(){var t=this.Vtxs[0],i=this.Vtxs[1],s=this.Vtxs[2];return s.sub(i),t.sub(s),s.cross(t),s.level(),s},this.mainv=[t.copy(),i.copy(),s.copy()],this.Vtxs=[t.copy(),i.copy(),s.copy()],this.bv=new c(.5,.5,.8)},f={def:function(t,i,s){return i&&this.e(t.prototype,i),s&&this.e(t,s),t},e:function(t,i){for(var s in i)t[s]=i[s];return t},v:[[5,0,0],[-5,-2,1],[-5,0,0],[-5,-2,-1],[0,2,-6],[0,2,6],[2,0,0],[-3,0,0]],beak:[[0,1,2],[4,7,6],[5,6,7]],L:null,V:{x:0,y:0,z:5e3},obj:{},Matrix:{rotX:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[1,0,0],e[1]=[0,n,h],e[2]=[0,-h,n];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},rotY:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[n,0,h],e[1]=[0,1,0],e[2]=[-h,0,n];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},rotZ:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[n,h,0],e[1]=[-h,n,0],e[2]=[0,0,1];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},trans:function(t,i){t.x+=i[0],t.y+=i[1],t.z+=i[2]},scale:function(t,i){t.x*=i[0],t.y*=i[1],t.z*=i[2]},mm:function(t,i){var s=[];return s[0]=t[0]*i[0][0]+t[1]*i[1][0]+t[2]*i[2][0],s[1]=t[0]*i[0][1]+t[1]*i[1][1]+t[2]*i[2][1],s[2]=t[0]*i[0][2]+t[1]*i[1][2]+t[2]*i[2][2],s}}},d=function(t){var i,s;function h(i){var s;return(s=t.call(this,i)||this).Bird={def:function(t,i,s){return i&&this.e(t.prototype,i),s&&this.e(t,s),t},e:function(t,i){for(var s in i)t[s]=i[s];return t},v:[[5,0,0],[-5,-2,1],[-5,0,0],[-5,-2,-1],[0,2,-6],[0,2,6],[2,0,0],[-3,0,0]],beak:[[0,1,2],[4,7,6],[5,6,7]],L:null,V:{x:0,y:0,z:5e3},obj:{},Matrix:{rotX:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[1,0,0],e[1]=[0,n,h],e[2]=[0,-h,n];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},rotY:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[n,0,h],e[1]=[0,1,0],e[2]=[-h,0,n];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},rotZ:function(t,i){var s=[t.x,t.y,t.z],h=Math.sin(i),n=Math.cos(i),e=[];e[0]=[n,h,0],e[1]=[-h,n,0],e[2]=[0,0,1];var r=this.mm(s,e);t.x=r[0],t.y=r[1],t.z=r[2]},trans:function(t,i){t.x+=i[0],t.y+=i[1],t.z+=i[2]},scale:function(t,i){t.x*=i[0],t.y*=i[1],t.z*=i[2]},mm:function(t,i){var s=[];return s[0]=t[0]*i[0][0]+t[1]*i[1][0]+t[2]*i[2][0],s[1]=t[0]*i[0][1]+t[1]*i[1][1]+t[2]*i[2][1],s[2]=t[0]*i[0][2]+t[1]*i[1][2]+t[2]*i[2][2],s}}},s.draw=function(t){f.$=t.getContext("2d"),f.canv={w:t.width=window.innerWidth,h:t.height=window.innerHeight},f.L=new c(0,2e3,5e3),f.V=new c(0,0,5e3);for(var i=[],s=[],h=0;h<100;h++){var n=s[h]=new u;n.pos.x=800*Math.random()-400,n.pos.y=800*Math.random()-400,n.pos.z=800*Math.random()-400,n.vel.x=2*Math.random()-1,n.vel.y=2*Math.random()-1,n.vel.z=2*Math.random()-1,n._coll(!0),n.param(400,400,800);var e=i[h]=new l;e.phase=Math.floor(62.83*Math.random()),e.pos=s[h].pos}!function t(){f.$.setTransform(1,0,0,1,0,0),f.$.translate(f.canv.w/2,f.canv.h/2),f.$.clearRect(-f.canv.w/2,-f.canv.h/2,f.canv.w,f.canv.h),f.$.scale(1,-1);var h=[];s.forEach((function(t,n,e){var r=s[n];r.run(s);var a=i[n];a.rot.y=Math.atan2(-r.vel.z,r.vel.x),a.rot.z=Math.asin(r.vel.y/r.vel.len()),a.phase=(a.phase+(Math.max(0,a.rot.z)+.1))%62.83,a.wing(5*Math.sin(a.phase)),a.matrix(),h.push({z:a.zpos(),o:a})})),h.sort((function(t,i){return t.z<i.z?-1:t.z>i.z?1:0})),h.forEach((function(t,i,s){t.o.draw()})),window.requestAnimationFrame(t)}()},s.bgImage=null,s.dude=null,s.birds=null,s}s=t,(i=h).prototype=Object.create(s.prototype),i.prototype.constructor=i,i.__proto__=s;var a=h.prototype;return a.componentDidMount=function(){var t=this.birds;this.draw(t)},a.render=function(){var t=this;return n.a.createElement("div",null,n.a.createElement(e.a,{title:"Home"}),n.a.createElement("canvas",{ref:function(i){return t.birds=i},id:"canv"}),n.a.createElement("div",{className:"title-main"},n.a.createElement("p",{className:"top-titles"},"Tristan // Developer"),n.a.createElement("p",{className:"top-titles"},n.a.createElement(r.Link,{to:"/blog"},"博客"))),n.a.createElement("div",{className:"cpoyright"},n.a.createElement("a",{href:"http://beian.miit.gov.cn"},"滇ICP备18008459号")),n.a.createElement("div",{ref:function(i){return t.dude=i},className:"dude"},n.a.createElement("img",{src:o.a,alt:"Me on a big Rock"})),n.a.createElement("div",{ref:function(i){return t.bgImage=i},className:"bg-image"}))},h}(n.a.Component);i.default=d},Zz4T:function(t,i,s){"use strict";s("OGtf")("sub",(function(t){return function(){return t(this,"sub","","")}}))},bHtr:function(t,i,s){var h=s("XKFU");h(h.P,"Array",{fill:s("Nr18")}),s("nGyu")("fill")},k0iR:function(t,i,s){t.exports=s.p+"static/dude2-d7b4185bd37f726fb926d005bd605076.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-34143dd58280adbf15e8.js.map