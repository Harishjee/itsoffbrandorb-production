(()=>{var xv=Object.defineProperty;var Hd=Object.getOwnPropertySymbols;var _v=Object.prototype.hasOwnProperty,yv=Object.prototype.propertyIsEnumerable;var ql=(Lt,xt,_t)=>xt in Lt?xv(Lt,xt,{enumerable:!0,configurable:!0,writable:!0,value:_t}):Lt[xt]=_t,Gd=(Lt,xt)=>{for(var _t in xt||(xt={}))_v.call(xt,_t)&&ql(Lt,_t,xt[_t]);if(Hd)for(var _t of Hd(xt))yv.call(xt,_t)&&ql(Lt,_t,xt[_t]);return Lt};var we=(Lt,xt,_t)=>(ql(Lt,typeof xt!="symbol"?xt+"":xt,_t),_t);var Mv=function(Lt){"use strict";const xt=0,_t=1,kd=2,Zl=1,In=3,Hi=0,st=1,gi=2,Gr=0,Dn=1,Bs=2,Jl=3,Kl=4,Vd=5,Gi=100,Wd=101,Xd=102,$l=103,eh=104,Yd=200,jd=201,Qd=202,qd=203,th=204,rh=205,Zd=206,Jd=207,Kd=208,$d=209,ep=210,tp=0,rp=1,ip=2,Hs=3,np=4,ap=5,sp=6,op=7,vi=0,Pa=301,Ra=302,Gs=303,ks=304,Fa=306,Vs=307,ki=1e3,yt=1001,Ca=1002,$e=1003,Ws=1004,Xs=1005,Ye=1006,ih=1007,xi=1008,ar=1009,lp=1010,hp=1011,Na=1012,up=1013,Ia=1014,Qt=1015,dr=1016,cp=1017,dp=1018,pp=1019,Un=1020,fp=1021,wr=1022,lt=1023,mp=1024,gp=1025,nh=lt,Vi=1026,On=1027,vp=1028,xp=1029,_p=1030,yp=1031,bp=1032,Mp=1033,ah=33776,sh=33777,oh=33778,lh=33779,hh=35840,uh=35841,ch=35842,dh=35843,Tp=36196,ph=37492,fh=37496,wp=37808,Sp=37809,Ap=37810,Ep=37811,Lp=37812,Pp=37813,Rp=37814,Fp=37815,Cp=37816,Np=37817,Ip=37818,Dp=37819,Up=37820,Op=37821,zp=36492,Bp=37840,Hp=37841,Gp=37842,kp=37843,Vp=37844,Wp=37845,Xp=37846,Yp=37847,jp=37848,Qp=37849,qp=37850,Zp=37851,Jp=37852,Kp=37853,zn=2300,Wi=2301,mh=2400,gh=2401,pt=3e3,Ut=3001,$p=3201,_i=0,ef=1,Bn=35044,Da=35048,vh="300 es";class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners!==void 0){const r=this._listeners[e];r===void 0||(t=r.indexOf(t))!==-1&&r.splice(t,1)}}dispatchEvent(e){if(this._listeners!==void 0){const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}}}let Ua=1234567;const Hn=Math.PI/180,Gn=180/Math.PI,ft=[];for(let n=0;n<256;n++)ft[n]=(n<16?"0":"")+n.toString(16);const tf=typeof crypto!="undefined"&&"randomUUID"in crypto;function qt(){if(tf)return crypto.randomUUID().toUpperCase();var n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(ft[255&n]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]+"-"+ft[255&e]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[63&t|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[255&r]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toUpperCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Ys(n,e){return(n%e+e)%e}function kn(n,e,t){return(1-t)*n+t*e}function js(n){return(n&n-1)==0&&n!==0}function xh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _h(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}var rf=Object.freeze({__proto__:null,DEG2RAD:Hn,RAD2DEG:Gn,generateUUID:qt,clamp:Pt,euclideanModulo:Ys,mapLinear:function(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:kn,damp:function(n,e,t,r){return kn(n,e,1-Math.exp(-t*r))},pingpong:function(n,e=1){return e-Math.abs(Ys(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:t<=n?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:t<=n?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(Ua=n%2147483647),Ua=16807*Ua%2147483647,(Ua-1)/2147483646},degToRad:function(n){return n*Hn},radToDeg:function(n){return n*Gn},isPowerOfTwo:js,ceilPowerOfTwo:xh,floorPowerOfTwo:_h,setQuaternionFromProperEuler:function(n,e,t,r,i){const a=Math.cos,s=Math.sin;var o=a(t/2),l=s(t/2),h=a((e+r)/2),u=s((e+r)/2),p=a((e-r)/2),c=s((e-r)/2),d=a((r-e)/2),f=s((r-e)/2);switch(i){case"XYX":n.set(o*u,l*p,l*c,o*h);break;case"YZY":n.set(l*c,o*u,l*p,o*h);break;case"ZXZ":n.set(l*p,l*c,o*u,o*h);break;case"XZX":n.set(o*u,l*f,l*d,o*h);break;case"YXY":n.set(l*d,o*u,l*f,o*h);break;case"ZYZ":n.set(l*f,l*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}});class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){var t=this.x,r=this.y,e=e.elements;return this.x=e[0]*t+e[3]*r+e[6],this.y=e[1]*t+e[4]*r+e[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){var t=this.x-e.x,e=this.y-e.y;return t*t+e*e}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){var r=Math.cos(t),i=Math.sin(t),a=this.x-e.x,t=this.y-e.y;return this.x=a*r-t*i+e.x,this.y=a*i+t*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Z.prototype.isVector2=!0;class mt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,i,a,s,o,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements;return e=e.elements,t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){return e=e.elements,this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){var r=e.elements,i=t.elements;const a=this.elements;var s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],p=r[7],c=r[2],d=r[5],f=r[8],m=i[0],g=i[3],v=i[6],y=i[1],x=i[4],e=i[7],t=i[2],r=i[5],i=i[8];return a[0]=s*m+o*y+l*t,a[3]=s*g+o*x+l*r,a[6]=s*v+o*e+l*i,a[1]=h*m+u*y+p*t,a[4]=h*g+u*x+p*r,a[7]=h*v+u*e+p*i,a[2]=c*m+d*y+f*t,a[5]=c*g+d*x+f*r,a[8]=c*v+d*e+f*i,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){var e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],e=e[8];return t*s*e-t*o*h-r*a*e+r*o*l+i*a*h-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],p=u*s-o*h,c=o*l-u*a,d=h*a-s*l,f=t*p+r*c+i*d;if(f==0)return this.set(0,0,0,0,0,0,0,0,0);var m=1/f;return e[0]=p*m,e[1]=(i*h-u*r)*m,e[2]=(o*r-i*s)*m,e[3]=c*m,e[4]=(u*t-i*l)*m,e[5]=(i*a-o*t)*m,e[6]=d*m,e[7]=(r*l-h*t)*m,e[8]=(s*t-r*a)*m,this}transpose(){var e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,a,s,o){var l=Math.cos(a),a=Math.sin(a);return this.set(r*l,r*a,-r*(l*s+a*o)+s+e,-i*a,i*l,-i*(-a*s+l*o)+o+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){var t=Math.cos(e),r=Math.sin(e);const i=this.elements;var a=i[0],s=i[3],o=i[6],l=i[1],h=i[4],e=i[7];return i[0]=t*a+r*l,i[3]=t*s+r*h,i[6]=t*o+r*e,i[1]=-r*a+t*l,i[4]=-r*s+t*h,i[7]=-r*o+t*e,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){var t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function yh(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,r=n.length;t<r;++t)n[t]>e&&(e=n[t]);return e}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}mt.prototype.isMatrix3=!0;let Xi;class Yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Oa("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Xi}return 2048<t.width||2048<t.height?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let nf=0;class je extends kr{constructor(e=je.DEFAULT_IMAGE,t=je.DEFAULT_MAPPING,r=yt,i=yt,a=Ye,s=xi,o=lt,l=ar,h=1,u=pt){super(),Object.defineProperty(this,"id",{value:nf++}),this.uuid=qt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){var t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=qt()),!t&&e.images[i.uuid]===void 0){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Qs(i[s].image)):a.push(Qs(i[s]))}else a=Qs(i);e.images[i.uuid]={uuid:i.uuid,url:a}}r.image=i.uuid}return t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||1<e.x)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||1<e.y)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}function Qs(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Yi.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}je.DEFAULT_IMAGE=void 0,je.DEFAULT_MAPPING=300,je.prototype.isTexture=!0;class De{constructor(e=0,t=0,r=0,i=1){this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){var t=this.x,r=this.y,i=this.z,a=this.w,e=e.elements;return this.x=e[0]*t+e[4]*r+e[8]*i+e[12]*a,this.y=e[1]*t+e[5]*r+e[9]*i+e[13]*a,this.z=e[2]*t+e[6]*r+e[10]*i+e[14]*a,this.w=e[3]*t+e[7]*r+e[11]*i+e[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,a;var s=e.elements,o=s[0],l=s[4],h=s[8],u=s[1],p=s[5],c=s[9],d=s[2],f=s[6],m=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-d)<.01&&Math.abs(c-f)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+d)<.1&&Math.abs(c+f)<.1&&Math.abs(o+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;var g=(o+1)/2,v=(p+1)/2,y=(m+1)/2,x=(l+u)/4,e=(h+d)/4,s=(c+f)/4;return v<g&&y<g?a=g<.01?(r=0,i=.707106781):(r=Math.sqrt(g),i=x/r,e/r):y<v?a=v<.01?(r=.707106781,i=0,.707106781):(i=Math.sqrt(v),r=x/i,s/i):y<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(y),r=e/a,i=s/a),this.set(r,i,a,t),this}let _=Math.sqrt((f-c)*(f-c)+(h-d)*(h-d)+(u-l)*(u-l));return Math.abs(_)<.001&&(_=1),this.x=(f-c)/_,this.y=(h-d)/_,this.z=(u-l)/_,this.w=Math.acos((o+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}De.prototype.isVector4=!0;class Rt extends kr{constructor(e,t,r={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new De(0,0,e,t),this.scissorTest=!1,this.viewport=new De(0,0,e,t),this.texture=new je(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=r.generateMipmaps!==void 0&&r.generateMipmaps,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Ye,this.depthBuffer=r.depthBuffer===void 0||r.depthBuffer,this.stencilBuffer=r.stencilBuffer!==void 0&&r.stencilBuffer,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){this.width===e&&this.height===t&&this.depth===r||(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Gd({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.prototype.isWebGLRenderTarget=!0,class extends Rt{};class bh extends Rt{constructor(e,t,r){super(e,t,r),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}bh.prototype.isWebGLMultisampleRenderTarget=!0;class Zt{constructor(e=0,t=0,r=0,i=1){this._x=e,this._y=t,this._z=r,this._w=i}static slerp(e,t,r,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,i)}static slerpFlat(e,t,r,i,a,s,o){let l=r[i+0],h=r[i+1],u=r[i+2],p=r[i+3];var c=a[s+0],d=a[s+1],f=a[s+2],r=a[s+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=u,void(e[t+3]=p);if(o===1)return e[t+0]=c,e[t+1]=d,e[t+2]=f,void(e[t+3]=r);if(p!==r||l!==c||h!==d||u!==f){let m=1-o;i=l*c+h*d+u*f+p*r,a=0<=i?1:-1,s=1-i*i,s>Number.EPSILON&&(s=Math.sqrt(s),i=Math.atan2(s,i*a),m=Math.sin(m*i)/s,o=Math.sin(o*i)/s),a=o*a,l=l*m+c*a,h=h*m+d*a,u=u*m+f*a,p=p*m+r*a,m===1-o&&(o=1/Math.sqrt(l*l+h*h+u*u+p*p),l*=o,h*=o,u*=o,p*=o)}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,i,a,s){var o=r[i],l=r[i+1],h=r[i+2],u=r[i+3],p=a[s],r=a[s+1],i=a[s+2],s=a[s+3];return e[t]=o*s+u*p+l*i-h*r,e[t+1]=l*s+u*r+h*p-o*i,e[t+2]=h*s+u*i+o*r-l*p,e[t+3]=u*s-o*p-l*r-h*i,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var r=e._x,i=e._y,a=e._z,s=e._order;const o=Math.cos,l=Math.sin;var h=o(r/2),u=o(i/2),p=o(a/2),c=l(r/2),d=l(i/2),f=l(a/2);switch(s){case"XYZ":this._x=c*u*p+h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p-c*d*f;break;case"YXZ":this._x=c*u*p+h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p+c*d*f;break;case"ZXY":this._x=c*u*p-h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p-c*d*f;break;case"ZYX":this._x=c*u*p-h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p+c*d*f;break;case"YZX":this._x=c*u*p+h*d*f,this._y=h*d*p+c*u*f,this._z=h*u*f-c*d*p,this._w=h*u*p-c*d*f;break;case"XZY":this._x=c*u*p-h*d*f,this._y=h*d*p-c*u*f,this._z=h*u*f+c*d*p,this._w=h*u*p+c*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){var r=t/2,t=Math.sin(r);return this._x=e.x*t,this._y=e.y*t,this._z=e.z*t,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){var t,r=e.elements,i=r[0],a=r[4],s=r[8],o=r[1],l=r[5],h=r[9],u=r[2],p=r[6],e=r[10],r=i+l+e;return 0<r?(r=.5/Math.sqrt(r+1),this._w=.25/r,this._x=(p-h)*r,this._y=(s-u)*r,this._z=(o-a)*r):l<i&&e<i?(t=2*Math.sqrt(1+i-l-e),this._w=(p-h)/t,this._x=.25*t,this._y=(a+o)/t,this._z=(s+u)/t):e<l?(t=2*Math.sqrt(1+l-i-e),this._w=(s-u)/t,this._x=(a+o)/t,this._y=.25*t,this._z=(h+p)/t):(l=2*Math.sqrt(1+e-i-l),this._w=(o-a)/l,this._x=(s+u)/l,this._y=(h+p)/l,this._z=.25*l),this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=r,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){var r=this.angleTo(e);return r===0?this:(r=Math.min(1,t/r),this.slerp(e,r),this)}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){var e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(this._x=this._x*(e=1/e),this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){var r=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,e=t._z,t=t._w;return this._x=r*t+s*o+i*e-a*l,this._y=i*t+s*l+a*o-r*e,this._z=a*t+s*e+r*l-i*o,this._w=s*t-r*o-i*l-a*e,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);var r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),1<=o)return this._w=s,this._x=r,this._y=i,this._z=a,this;var l=1-o*o;if(l<=Number.EPSILON){var h=1-t;return this._w=h*s+t*this._w,this._x=h*r+t*this._x,this._y=h*i+t*this._y,this._z=h*a+t*this._z,this.normalize(),this._onChangeCallback(),this}return e=Math.sqrt(l),h=Math.atan2(e,o),l=Math.sin((1-t)*h)/e,e=Math.sin(t*h)/e,this._w=s*l+this._w*e,this._x=r*l+this._x*e,this._y=i*l+this._y*e,this._z=a*l+this._z*e,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}random(){var e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),e=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(e),r*Math.cos(e),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Zt.prototype.isQuaternion=!0;class R{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){var t=this.x,r=this.y,i=this.z,e=e.elements;return this.x=e[0]*t+e[3]*r+e[6]*i,this.y=e[1]*t+e[4]*r+e[7]*i,this.z=e[2]*t+e[5]*r+e[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){var t=this.x,r=this.y,i=this.z,a=e.elements,e=1/(a[3]*t+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*i+a[12])*e,this.y=(a[1]*t+a[5]*r+a[9]*i+a[13])*e,this.z=(a[2]*t+a[6]*r+a[10]*i+a[14])*e,this}applyQuaternion(e){var t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,h=l*t+s*i-o*r,u=l*r+o*t-a*i,e=l*i+a*r-s*t,i=-a*t-s*r-o*i;return this.x=h*l+i*-a+u*-o-e*-s,this.y=u*l+i*-s+e*-a-h*-o,this.z=e*l+i*-o+h*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){var t=this.x,r=this.y,i=this.z,e=e.elements;return this.x=e[0]*t+e[4]*r+e[8]*i,this.y=e[1]*t+e[5]*r+e[9]*i,this.z=e[2]*t+e[6]*r+e[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){var r=e.x,i=e.y,a=e.z,s=t.x,e=t.y,t=t.z;return this.x=i*t-a*e,this.y=a*s-r*t,this.z=r*e-i*s,this}projectOnVector(e){var t=e.lengthSq();return t===0?this.set(0,0,0):(t=e.dot(this)/t,this.copy(e).multiplyScalar(t))}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){var t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:(t=this.dot(e)/t,Math.acos(Pt(t,-1,1)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){var t=this.x-e.x,r=this.y-e.y,e=this.z-e.z;return t*t+r*r+e*e}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){var i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){return e=e.elements,this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(e){var t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),e=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=e,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){var e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const qs=new R,Mh=new Zt;class Jt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,i=1/0,a=-1/0,s=-1/0,o=-1/0;for(let p=0,c=e.length;p<c;p+=3){var l=e[p],h=e[p+1],u=e[p+2];l<t&&(t=l),h<r&&(r=h),u<i&&(i=u),l>a&&(a=l),h>s&&(s=h),u>o&&(o=u)}return this.min.set(t,r,i),this.max.set(a,s,o),this}setFromBufferAttribute(e){let t=1/0,r=1/0,i=1/0,a=-1/0,s=-1/0,o=-1/0;for(let p=0,c=e.count;p<c;p++){var l=e.getX(p),h=e.getY(p),u=e.getZ(p);l<t&&(t=l),h<r&&(r=h),u<i&&(i=u),l>a&&(a=l),h>s&&(s=h),u>o&&(o=u)}return this.min.set(t,r,i),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){return t=Vn.copy(t).multiplyScalar(.5),this.min.copy(e).sub(t),this.max.copy(e).add(t),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox),Zs.applyMatrix4(e.matrixWorld),this.union(Zs));var r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return r=0<e.normal.x?(t=e.normal.x*this.min.x,e.normal.x*this.max.x):(t=e.normal.x*this.max.x,e.normal.x*this.min.x),0<e.normal.y?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),0<e.normal.z?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){return!this.isEmpty()&&(this.getCenter(Wn),za.subVectors(this.max,Wn),ji.subVectors(e.a,Wn),Qi.subVectors(e.b,Wn),qi.subVectors(e.c,Wn),Vr.subVectors(Qi,ji),Wr.subVectors(qi,Qi),yi.subVectors(ji,qi),!!Js([0,-Vr.z,Vr.y,0,-Wr.z,Wr.y,0,-yi.z,yi.y,Vr.z,0,-Vr.x,Wr.z,0,-Wr.x,yi.z,0,-yi.x,-Vr.y,Vr.x,0,-Wr.y,Wr.x,0,-yi.y,yi.x,0],ji,Qi,qi,za)&&!!Js([1,0,0,0,1,0,0,0,1],ji,Qi,qi,za)&&(Ba.crossVectors(Vr,Wr),Js([Ba.x,Ba.y,Ba.z],ji,Qi,qi,za)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Vn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Jt.prototype.isBox3=!0;const Sr=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,Zs=new Jt,ji=new R,Qi=new R,qi=new R,Vr=new R,Wr=new R,yi=new R,Wn=new R,za=new R,Ba=new R,bi=new R;function Js(n,e,t,r,i){for(let h=0,u=n.length-3;h<=u;h+=3){bi.fromArray(n,h);var a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),s=e.dot(bi),o=t.dot(bi),l=r.dot(bi);if(Math.max(-Math.max(s,o,l),Math.min(s,o,l))>a)return!1}return!0}const af=new Jt,Th=new R,Ks=new R,$s=new R;class Mi{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):af.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){var r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){$s.subVectors(e,this.center);var t=$s.lengthSq();return t>this.radius*this.radius&&(t=.5*((e=Math.sqrt(t))-this.radius),this.center.add($s.multiplyScalar(t/e)),this.radius+=t),this}union(e){return Ks.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Th.copy(e.center).add(Ks)),this.expandByPoint(Th.copy(e.center).sub(Ks)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ar=new R,eo=new R,Ha=new R,Xr=new R,to=new R,Ga=new R,ro=new R;class Zi{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){return t.subVectors(e,this.origin),e=t.dot(this.direction),e<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(e).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){var t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.direction).multiplyScalar(t).add(this.origin),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){eo.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(eo);var a=.5*e.distanceTo(t),s=-this.direction.dot(Ha),o=Xr.dot(this.direction),l=-Xr.dot(Ha),e=Xr.lengthSq(),t=Math.abs(1-s*s);let h,u,p,c;return p=0<t?(h=s*l-o,u=s*o-l,c=a*t,0<=h?u>=-c?u<=c?(t=1/t,h*=t,u*=t,h*(h+s*u+2*o)+u*(s*h+u+2*l)+e):(u=a,h=Math.max(0,-(s*u+o)),-h*h+u*(u+2*l)+e):(u=-a,h=Math.max(0,-(s*u+o)),-h*h+u*(u+2*l)+e):u<=-c?(h=Math.max(0,-(-s*a+o)),u=0<h?-a:Math.min(Math.max(-a,-l),a),-h*h+u*(u+2*l)+e):u<=c?(h=0,u=Math.min(Math.max(-a,-l),a),u*(u+2*l)+e):(h=Math.max(0,-(s*a+o)),u=0<h?a:Math.min(Math.max(-a,-l),a),-h*h+u*(u+2*l)+e)):(u=0<s?-a:a,h=Math.max(0,-(s*u+o)),-h*h+u*(u+2*l)+e),r&&r.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ha).multiplyScalar(u).add(eo),p}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);var r=Ar.dot(this.direction),i=Ar.dot(Ar)-r*r,e=e.radius*e.radius;return e<i?null:(e=Math.sqrt(e-i),i=r-e,e=r+e,i<0&&e<0?null:i<0?this.at(e,t):this.at(i,t))}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){var t=e.normal.dot(this.direction);return t===0?e.distanceToPoint(this.origin)===0?0:null:(t=-(this.origin.dot(e.normal)+e.constant)/t,0<=t?t:null)}intersectPlane(e,t){return e=this.distanceToPlane(e),e===null?null:this.at(e,t)}intersectsPlane(e){var t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,s,o,l;var h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,c=this.origin;return i=0<=h?(r=(e.min.x-c.x)*h,(e.max.x-c.x)*h):(r=(e.max.x-c.x)*h,(e.min.x-c.x)*h),s=0<=u?(a=(e.min.y-c.y)*u,(e.max.y-c.y)*u):(a=(e.max.y-c.y)*u,(e.min.y-c.y)*u),r>s||a>i?null:((a>r||r!=r)&&(r=a),(s<i||i!=i)&&(i=s),l=0<=p?(o=(e.min.z-c.z)*p,(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,(e.min.z-c.z)*p),r>l||o>i?null:((o>r||r!=r)&&(r=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(0<=r?r:i,t)))}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,r,i,a){to.subVectors(t,e),Ga.subVectors(r,e),ro.crossVectors(to,Ga);let s=this.direction.dot(ro),o;if(0<s){if(i)return null;o=1}else{if(!(s<0))return null;o=-1,s=-s}return Xr.subVectors(this.origin,e),i=o*this.direction.dot(Ga.crossVectors(Xr,Ga)),i<0||(e=o*this.direction.dot(to.cross(Xr)),e<0)||i+e>s?null:(e=-o*Xr.dot(ro),e<0?null:this.at(e/s,a))}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,i,a,s,o,l,h,u,p,c,d,f,m,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=i,v[1]=a,v[5]=s,v[9]=o,v[13]=l,v[2]=h,v[6]=u,v[10]=p,v[14]=c,v[3]=d,v[7]=f,v[11]=m,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(e){const t=this.elements;return e=e.elements,t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){return e=e.elements,this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements;var r=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),a=1/Ji.setFromMatrixColumn(e,1).length(),e=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*e,t[9]=r[9]*e,t[10]=r[10]*e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements;var r,i,a,s,o,l,h,u,p,c,d,f=e.x,m=e.y,g=e.z,v=Math.cos(f),y=Math.sin(f),x=Math.cos(m),_=Math.sin(m),f=Math.cos(g),m=Math.sin(g);return e.order==="XYZ"?(r=v*f,a=v*m,i=y*f,g=y*m,t[0]=x*f,t[4]=-x*m,t[8]=_,t[1]=a+i*_,t[5]=r-g*_,t[9]=-y*x,t[2]=g-r*_,t[6]=i+a*_,t[10]=v*x):e.order==="YXZ"?(s=x*f,r=x*m,i=_*f,a=_*m,t[0]=s+a*y,t[4]=i*y-r,t[8]=v*_,t[1]=v*m,t[5]=v*f,t[9]=-y,t[2]=r*y-i,t[6]=a+s*y,t[10]=v*x):e.order==="ZXY"?(h=x*f,s=x*m,o=_*f,l=_*m,t[0]=h-l*y,t[4]=-v*m,t[8]=o+s*y,t[1]=s+o*y,t[5]=v*f,t[9]=l-h*y,t[2]=-v*_,t[6]=y,t[10]=v*x):e.order==="ZYX"?(o=v*f,l=v*m,u=y*f,h=y*m,t[0]=x*f,t[4]=u*_-l,t[8]=o*_+h,t[1]=x*m,t[5]=h*_+o,t[9]=l*_-u,t[2]=-_,t[6]=y*x,t[10]=v*x):e.order==="YZX"?(c=v*x,u=v*_,p=y*x,d=y*_,t[0]=x*f,t[4]=d-c*m,t[8]=p*m+u,t[1]=m,t[5]=v*f,t[9]=-y*f,t[2]=-_*f,t[6]=u*m+p,t[10]=c-d*m):e.order==="XZY"&&(p=v*x,c=v*_,d=y*x,e=y*_,t[0]=x*f,t[4]=-m,t[8]=_*f,t[1]=p*m+e,t[5]=v*f,t[9]=c*m-d,t[2]=d*m-c,t[6]=y*f,t[10]=e*m+p),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,of)}lookAt(e,t,r){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Yr.crossVectors(r,Ot),Yr.lengthSq()===0&&(Math.abs(r.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Yr.crossVectors(r,Ot)),Yr.normalize(),ka.crossVectors(Ot,Yr),i[0]=Yr.x,i[4]=ka.x,i[8]=Ot.x,i[1]=Yr.y,i[5]=ka.y,i[9]=Ot.y,i[2]=Yr.z,i[6]=ka.z,i[10]=Ot.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){var r=e.elements,i=t.elements;const a=this.elements;var s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],p=r[5],c=r[9],d=r[13],f=r[2],m=r[6],g=r[10],v=r[14],y=r[3],x=r[7],_=r[11],T=r[15],b=i[0],M=i[4],A=i[8],N=i[12],I=i[1],C=i[5],O=i[9],D=i[13],F=i[2],U=i[6],H=i[10],z=i[14],e=i[3],t=i[7],r=i[11],i=i[15];return a[0]=s*b+o*I+l*F+h*e,a[4]=s*M+o*C+l*U+h*t,a[8]=s*A+o*O+l*H+h*r,a[12]=s*N+o*D+l*z+h*i,a[1]=u*b+p*I+c*F+d*e,a[5]=u*M+p*C+c*U+d*t,a[9]=u*A+p*O+c*H+d*r,a[13]=u*N+p*D+c*z+d*i,a[2]=f*b+m*I+g*F+v*e,a[6]=f*M+m*C+g*U+v*t,a[10]=f*A+m*O+g*H+v*r,a[14]=f*N+m*D+g*z+v*i,a[3]=y*b+x*I+_*F+T*e,a[7]=y*M+x*C+_*U+T*t,a[11]=y*A+x*O+_*H+T*r,a[15]=y*N+x*D+_*z+T*i,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){var e=this.elements,t=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],h=e[13],u=e[2],p=e[6],c=e[10],d=e[14];return e[3]*(+a*l*p-i*h*p-a*o*c+r*h*c+i*o*d-r*l*d)+e[7]*(+t*l*d-t*h*c+a*s*c-i*s*d+i*h*u-a*l*u)+e[11]*(+t*h*p-t*o*d-a*s*p+r*s*d+a*o*u-r*h*u)+e[15]*(-i*o*u-t*l*p+t*o*c+i*s*p-r*s*c+r*l*u)}transpose(){const e=this.elements;var t=e[1];return e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],p=e[9],c=e[10],d=e[11],f=e[12],m=e[13],g=e[14],v=e[15],y=p*g*h-m*c*h+m*l*d-o*g*d-p*l*v+o*c*v,x=f*c*h-u*g*h-f*l*d+s*g*d+u*l*v-s*c*v,_=u*m*h-f*p*h+f*o*d-s*m*d-u*o*v+s*p*v,T=f*p*l-u*m*l-f*o*c+s*m*c+u*o*g-s*p*g;var b=t*y+r*x+i*_+a*T;return b==0?this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0):(b=1/b,e[0]=y*b,e[1]=(m*c*a-p*g*a-m*i*d+r*g*d+p*i*v-r*c*v)*b,e[2]=(o*g*a-m*l*a+m*i*h-r*g*h-o*i*v+r*l*v)*b,e[3]=(p*l*a-o*c*a-p*i*h+r*c*h+o*i*d-r*l*d)*b,e[4]=x*b,e[5]=(u*g*a-f*c*a+f*i*d-t*g*d-u*i*v+t*c*v)*b,e[6]=(f*l*a-s*g*a-f*i*h+t*g*h+s*i*v-t*l*v)*b,e[7]=(s*c*a-u*l*a+u*i*h-t*c*h-s*i*d+t*l*d)*b,e[8]=_*b,e[9]=(f*p*a-u*m*a-f*r*d+t*m*d+u*r*v-t*p*v)*b,e[10]=(s*m*a-f*o*a+f*r*h-t*m*h-s*r*v+t*o*v)*b,e[11]=(u*o*a-s*p*a-u*r*h+t*p*h+s*r*d-t*o*d)*b,e[12]=T*b,e[13]=(u*m*i-f*p*i+f*r*c-t*m*c-u*r*g+t*p*g)*b,e[14]=(f*o*i-s*m*i-f*r*l+t*m*l+s*r*g-t*o*g)*b,e[15]=(s*p*i-u*o*i+u*r*l-t*p*l-s*r*c+t*o*c)*b,this)}scale(e){const t=this.elements;var r=e.x,i=e.y,e=e.z;return t[0]*=r,t[4]*=i,t[8]*=e,t[1]*=r,t[5]*=i,t[9]*=e,t[2]*=r,t[6]*=i,t[10]*=e,t[3]*=r,t[7]*=i,t[11]*=e,this}getMaxScaleOnAxis(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,e))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){var t=Math.cos(e),e=Math.sin(e);return this.set(1,0,0,0,0,t,-e,0,0,e,t,0,0,0,0,1),this}makeRotationY(e){var t=Math.cos(e),e=Math.sin(e);return this.set(t,0,e,0,0,1,0,0,-e,0,t,0,0,0,0,1),this}makeRotationZ(e){var t=Math.cos(e),e=Math.sin(e);return this.set(t,-e,0,0,e,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){var r=Math.cos(t),i=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,t=a*s,e=a*o;return this.set(t*s+r,t*o-i*l,t*l+i*o,0,t*o+i*l,e*o+r,e*l-i*s,0,t*l-i*o,e*l+i*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements;var a=t._x,s=t._y,o=t._z,l=t._w,h=a+a,u=s+s,p=o+o,c=a*h,d=a*u,f=a*p,t=s*u,a=s*p,s=o*p,o=l*h,h=l*u,u=l*p,l=r.x,p=r.y,r=r.z;return i[0]=(1-(t+s))*l,i[1]=(d+u)*l,i[2]=(f-h)*l,i[3]=0,i[4]=(d-u)*p,i[5]=(1-(c+s))*p,i[6]=(a+o)*p,i[7]=0,i[8]=(f+h)*r,i[9]=(a-o)*r,i[10]=(1-(c+t))*r,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){var i=this.elements;let a=Ji.set(i[0],i[1],i[2]).length();var s=Ji.set(i[4],i[5],i[6]).length(),o=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],sr.copy(this);var l=1/a,e=1/s,i=1/o;return sr.elements[0]*=l,sr.elements[1]*=l,sr.elements[2]*=l,sr.elements[4]*=e,sr.elements[5]*=e,sr.elements[6]*=e,sr.elements[8]*=i,sr.elements[9]*=i,sr.elements[10]*=i,t.setFromRotationMatrix(sr),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,i,a,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements;var l=2*a/(r-i),h=(t+e)/(t-e),r=(r+i)/(r-i),i=-(s+a)/(s-a),s=-2*s*a/(s-a);return o[0]=2*a/(t-e),o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=r,o[13]=0,o[2]=0,o[6]=0,o[10]=i,o[14]=s,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,r,i,a,s){const o=this.elements;var l=1/(t-e),h=1/(r-i),u=1/(s-a),e=(t+e)*l,i=(r+i)*h,a=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-e,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-i,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-a,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){var t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){var r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}ce.prototype.isMatrix4=!0;const Ji=new R,sr=new ce,sf=new R(0,0,0),of=new R(1,1,1),Yr=new R,ka=new R,Ot=new R,wh=new ce,Sh=new Zt;class Ki{constructor(e=0,t=0,r=0,i=Ki.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){var e=e.elements,i=e[0],a=e[4],s=e[8],o=e[1],l=e[5],h=e[9],u=e[2],p=e[6],c=e[10];switch(t){case"XYZ":this._y=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,c),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,c),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(o,i));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,c),this._z=Math.atan2(o,i)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(s,c));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ki.prototype.isEuler=!0,Ki.DefaultOrder="XYZ",Ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class io{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let lf=0;const Ah=new R,$i=new Zt,Er=new ce,Va=new R,Xn=new R,hf=new R,uf=new Zt,Eh=new R(1,0,0),Lh=new R(0,1,0),Ph=new R(0,0,1),cf={type:"added"},Rh={type:"removed"};class Se extends kr{constructor(){super(),Object.defineProperty(this,"id",{value:lf++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DefaultUp.clone();var e=new R;const t=new Ki,r=new Zt;var i=new R(1,1,1);t._onChange(function(){r.setFromEuler(t,!1)}),r._onChange(function(){t.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new mt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Se.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Va.copy(e):Va.set(e,t,r),r=this.parent,this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Xn,Va,this.up):Er.lookAt(Va,Xn,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Er),this.quaternion.premultiply($i.invert()))}add(e){if(1<arguments.length){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),(e.parent=this).children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(1<arguments.length){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}var t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){var r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible!==!1){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e=!(this.matrixWorldNeedsUpdate=!1));const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){var t,r,i,a,s,o=e===void 0||typeof e=="string";const l={};o&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},l.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const h={};function u(g,v){return g[v.uuid]===void 0&&(g[v.uuid]=v.toJSON(e)),v.uuid}if(h.uuid=this.uuid,h.type=this.type,this.name!==""&&(h.name=this.name),this.castShadow===!0&&(h.castShadow=!0),this.receiveShadow===!0&&(h.receiveShadow=!0),this.visible===!1&&(h.visible=!1),this.frustumCulled===!1&&(h.frustumCulled=!1),this.renderOrder!==0&&(h.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(h.userData=this.userData),h.layers=this.layers.mask,h.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(h.matrixAutoUpdate=!1),this.isInstancedMesh&&(h.type="InstancedMesh",h.count=this.count,h.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(h.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?h.background=this.background.toJSON():this.background.isTexture&&(h.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(h.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){h.geometry=u(e.geometries,this.geometry);var p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){var c=p.shapes;if(Array.isArray(c))for(let g=0,v=c.length;g<v;g++){var d=c[g];u(e.shapes,d)}else u(e.shapes,c)}}if(this.isSkinnedMesh&&(h.bindMode=this.bindMode,h.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),h.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let v=0,y=this.material.length;v<y;v++)g.push(u(e.materials,this.material[v]));h.material=g}else h.material=u(e.materials,this.material);if(0<this.children.length){h.children=[];for(let g=0;g<this.children.length;g++)h.children.push(this.children[g].toJSON(e).object)}if(0<this.animations.length){h.animations=[];for(let g=0;g<this.animations.length;g++){var f=this.animations[g];h.animations.push(u(e.animations,f))}}return o&&(t=m(e.geometries),r=m(e.materials),i=m(e.textures),a=m(e.images),s=m(e.shapes),p=m(e.skeletons),o=m(e.animations),0<t.length&&(l.geometries=t),0<r.length&&(l.materials=r),0<i.length&&(l.textures=i),0<a.length&&(l.images=a),0<s.length&&(l.shapes=s),0<p.length&&(l.skeletons=p),0<o.length&&(l.animations=o)),l.object=h,l;function m(g){const v=[];for(const y in g){const x=g[y];delete x.metadata,v.push(x)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Se.DefaultUp=new R(0,1,0),Se.DefaultMatrixAutoUpdate=!0,Se.prototype.isObject3D=!0;const or=new R,Lr=new R,no=new R,Pr=new R,en=new R,tn=new R,Fh=new R,ao=new R,so=new R,oo=new R;class ot{constructor(e=new R,t=new R,r=new R){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){return i.subVectors(r,t),or.subVectors(e,t),i.cross(or),t=i.lengthSq(),0<t?i.multiplyScalar(1/Math.sqrt(t)):i.set(0,0,0)}static getBarycoord(e,t,r,i,a){or.subVectors(i,t),Lr.subVectors(r,t),no.subVectors(e,t);var s=or.dot(or),o=or.dot(Lr),i=or.dot(no),r=Lr.dot(Lr),e=Lr.dot(no),t=s*r-o*o;return t==0?a.set(-2,-1,-1):(t=1/t,r=(r*i-o*e)*t,t*=s*e-o*i,a.set(1-r-t,t,r))}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Pr),0<=Pr.x&&0<=Pr.y&&Pr.x+Pr.y<=1}static getUV(e,t,r,i,a,s,o,l){return this.getBarycoord(e,t,r,i,Pr),l.set(0,0),l.addScaledVector(a,Pr.x),l.addScaledVector(s,Pr.y),l.addScaledVector(o,Pr.z),l}static isFrontFacing(e,t,r,i){return or.subVectors(r,t),Lr.subVectors(e,t),or.cross(Lr).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),.5*or.cross(Lr).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,a){return ot.getUV(e,this.a,this.b,this.c,t,r,i,a)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){var r=this.a,i=this.b,a=this.c;let s,o;en.subVectors(i,r),tn.subVectors(a,r),ao.subVectors(e,r);var l=en.dot(ao),h=tn.dot(ao);if(l<=0&&h<=0)return t.copy(r);so.subVectors(e,i);var u=en.dot(so),p=tn.dot(so);if(0<=u&&p<=u)return t.copy(i);var c=l*p-u*h;if(c<=0&&0<=l&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(en,s);oo.subVectors(e,a);var d=en.dot(oo),e=tn.dot(oo);return 0<=e&&d<=e?t.copy(a):(l=d*h-l*e,l<=0&&0<=h&&e<=0?(o=h/(h-e),t.copy(r).addScaledVector(tn,o)):(h=u*e-d*p,h<=0&&0<=p-u&&0<=d-e?(Fh.subVectors(a,i),o=(p-u)/(p-u+(d-e)),t.copy(i).addScaledVector(Fh,o)):(h=1/(h+l+c),s=l*h,o=c*h,t.copy(r).addScaledVector(en,s).addScaledVector(tn,o))))}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let df=0;class ke extends kr{constructor(){super(),Object.defineProperty(this,"id",{value:df++}),this.uuid=qt(),this.name="",this.type="Material",this.fog=!0,this.blending=Dn,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.format=lt,this.transparent=!1,this.blendSrc=th,this.blendDst=rh,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){0<this._alphaTest!=0<e&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){var t=e[r];if(t!==void 0)if(r!=="shading"){const i=this[r];i!==void 0?i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[r]=t:console.warn("THREE."+this.type+": '"+r+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1;else console.warn("THREE.Material: '"+r+"' parameter is undefined.")}}toJSON(e){var t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}return r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(r.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(r.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(r.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(r.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Dn&&(r.blending=this.blending),this.side!==Hi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.format!==lt&&(r.format=this.format),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),0<this.alphaTest&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),1<this.wireframeLinewidth&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t&&(t=i(e.textures),e=i(e.images),0<t.length&&(r.textures=t),0<e.length&&(r.images=e)),r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){var i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ke.prototype.isMaterial=!0;const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function lo(n,e,t){return t<0&&(t+=1),1<t&&--t,t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}function ho(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function uo(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}class se{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){return e=Ys(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0?this.r=this.g=this.b=r:(this.r=lo(t=2*r-(r=r<=.5?r*(1+t):r+t-r*t),r,e+1/3),this.g=lo(t,r,e),this.b=lo(t,r,e-1/3)),this}setStyle(e){function t(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let h;var i=r[1],a=r[2];switch(i){case"rgb":case"rgba":if(h=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(h[1],10))/255,this.g=Math.min(255,parseInt(h[2],10))/255,this.b=Math.min(255,parseInt(h[3],10))/255,t(h[4]),this;if(h=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(h[1],10))/100,this.g=Math.min(100,parseInt(h[2],10))/100,this.b=Math.min(100,parseInt(h[3],10))/100,t(h[4]),this;break;case"hsl":case"hsla":if(h=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){var s=parseFloat(h[1])/360,o=parseInt(h[2],10)/100,l=parseInt(h[3],10)/100;return t(h[4]),this.setHSL(s,o,l)}}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const h=r[1];if(i=h.length,i===3)return this.r=parseInt(h.charAt(0)+h.charAt(0),16)/255,this.g=parseInt(h.charAt(1)+h.charAt(1),16)/255,this.b=parseInt(h.charAt(2)+h.charAt(2),16)/255,this;if(i===6)return this.r=parseInt(h.charAt(0)+h.charAt(1),16)/255,this.g=parseInt(h.charAt(2)+h.charAt(3),16)/255,this.b=parseInt(h.charAt(4)+h.charAt(5),16)/255,this}return e&&0<e.length?this.setColorName(e):this}setColorName(e){var t=Ch[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){return t=0<t?1/t:1,this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){var t=this.r,r=this.g,i=this.b,a=Math.max(t,r,i),s=Math.min(t,r,i);let o,l;var h=(s+a)/2;if(s===a)o=0,l=0;else{var u=a-s;switch(l=h<=.5?u/(a+s):u/(2-a-s),a){case t:o=(r-i)/u+(r<i?6:0);break;case r:o=(i-t)/u+2;break;case i:o=(t-r)/u+4}o/=6}return e.h=o,e.s=l,e.l=h,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,r){return this.getHSL(lr),lr.h+=e,lr.s+=t,lr.l+=r,this.setHSL(lr.h,lr.s,lr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Wa);var r=kn(lr.h,Wa.h,t),e=kn(lr.s,Wa.s,t),t=kn(lr.l,Wa.l,t);return this.setHSL(r,e,t),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}se.NAMES=Ch,se.prototype.isColor=!0,se.prototype.r=1,se.prototype.g=1,se.prototype.b=1;class hr extends ke{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}hr.prototype.isMeshBasicMaterial=!0;const He=new R,Xa=new Z;class et{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=Bn,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new se),t[r++]=s.r,t[r++]=s.g,t[r++]=s.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new Z),t[r++]=s.x,t[r++]=s.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new R),t[r++]=s.x,t[r++]=s.y,t[r++]=s.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new De),t[r++]=s.x,t[r++]=s.y,t[r++]=s.z,t[r++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bn&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}et.prototype.isBufferAttribute=!0;class Nh extends et{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ih extends et{constructor(e,t,r){super(new Uint32Array(e),t,r)}}(class extends et{});class Ve extends et{constructor(e,t,r){super(new Float32Array(e),t,r)}}let pf=0;const Kt=new ce,co=new Se,rn=new R,zt=new Jt,Yn=new Jt,ht=new R;class Ue extends kr{constructor(){super(),Object.defineProperty(this,"id",{value:pf++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(65535<yh(e)?Ih:Nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;var i;r!==void 0&&(i=new mt().getNormalMatrix(e),r.applyNormalMatrix(i),r.needsUpdate=!0);const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,r){return Kt.makeTranslation(e,t,r),this.applyMatrix4(Kt),this}scale(e,t,r){return Kt.makeScale(e,t,r),this.applyMatrix4(Kt),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rn).negate(),this.translate(rn.x,rn.y,rn.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){var r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);var e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){var r=t[i];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);var e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){const s=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let l=0,h=t.length;l<h;l++){var r=t[l];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(zt.min,Yn.min),zt.expandByPoint(ht),ht.addVectors(zt.max,Yn.max),zt.expandByPoint(ht)):(zt.expandByPoint(Yn.min),zt.expandByPoint(Yn.max))}zt.getCenter(s);let o=0;for(let l=0,h=e.count;l<h;l++)ht.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ht));if(t)for(let l=0,h=t.length;l<h;l++){var i=t[l],a=this.morphTargetsRelative;for(let u=0,p=i.count;u<p;u++)ht.fromBufferAttribute(i,u),a&&(rn.fromBufferAttribute(e,u),ht.add(rn)),o=Math.max(o,s.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){var e=this.index,t=this.attributes;if(e!==null&&t.position!==void 0&&t.normal!==void 0&&t.uv!==void 0){let O=function(D){I.fromArray(u,3*D),C.copy(I);var F=d[D];A.copy(F),A.sub(I.multiplyScalar(I.dot(F))).normalize(),N.crossVectors(C,F),F=N.dot(f[D])<0?-1:1,c[4*D]=A.x,c[4*D+1]=A.y,c[4*D+2]=A.z,c[4*D+3]=F};var r=e.array;const h=t.position.array,u=t.normal.array,p=t.uv.array;var i=h.length/3;t.tangent===void 0&&this.setAttribute("tangent",new et(new Float32Array(4*i),4));const c=t.tangent.array,d=[],f=[];for(let D=0;D<i;D++)d[D]=new R,f[D]=new R;const m=new R,g=new R,v=new R,y=new Z,x=new Z,_=new Z,T=new R,b=new R;let M=this.groups;M.length===0&&(M=[{start:0,count:r.length}]);for(let D=0,F=M.length;D<F;++D){var a=M[D],s=a.start;for(let U=s,H=s+a.count;U<H;U+=3)(function(z,W,ee){m.fromArray(h,3*z),g.fromArray(h,3*W),v.fromArray(h,3*ee),y.fromArray(p,2*z),x.fromArray(p,2*W),_.fromArray(p,2*ee),g.sub(m),v.sub(m),x.sub(y),_.sub(y);var q=1/(x.x*_.y-_.x*x.y);isFinite(q)&&(T.copy(g).multiplyScalar(_.y).addScaledVector(v,-x.y).multiplyScalar(q),b.copy(v).multiplyScalar(x.x).addScaledVector(g,-_.x).multiplyScalar(q),d[z].add(T),d[W].add(T),d[ee].add(T),f[z].add(b),f[W].add(b),f[ee].add(b))})(r[U+0],r[U+1],r[U+2])}const A=new R,N=new R,I=new R,C=new R;for(let D=0,F=M.length;D<F;++D){var o=M[D],l=o.start;for(let U=l,H=l+o.count;U<H;U+=3)O(r[U+0]),O(r[U+1]),O(r[U+2])}}else console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)")}computeVertexNormals(){const e=this.index;var t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new et(new Float32Array(3*t.count),3),this.setAttribute("normal",s);else for(let m=0,g=s.count;m<g;m++)s.setXYZ(m,0,0,0);const o=new R,l=new R,h=new R,u=new R,p=new R,c=new R,d=new R,f=new R;if(e)for(let m=0,g=e.count;m<g;m+=3){var r=e.getX(m+0),i=e.getX(m+1),a=e.getX(m+2);o.fromBufferAttribute(t,r),l.fromBufferAttribute(t,i),h.fromBufferAttribute(t,a),d.subVectors(h,l),f.subVectors(o,l),d.cross(f),u.fromBufferAttribute(s,r),p.fromBufferAttribute(s,i),c.fromBufferAttribute(s,a),u.add(d),p.add(d),c.add(d),s.setXYZ(r,u.x,u.y,u.z),s.setXYZ(i,p.x,p.y,p.z),s.setXYZ(a,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),h.fromBufferAttribute(t,m+2),d.subVectors(h,l),f.subVectors(o,l),d.cross(f),s.setXYZ(m+0,d.x,d.y,d.z),s.setXYZ(m+1,d.x,d.y,d.z),s.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(e,t){if(e&&e.isBufferGeometry){t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var r=this.attributes;for(const o in r)if(e.attributes[o]!==void 0){const l=r[o].array;var i=e.attributes[o],a=i.array,i=i.itemSize*t,s=Math.min(a.length,l.length-i);for(let h=0,u=i;h<s;h++,u++)l[u]=a[h]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e)}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(p,c){const d=p.array;var f=p.itemSize,m=p.normalized;const g=new d.constructor(c.length*f);let v=0,y=0;for(let x=0,_=c.length;x<_;x++){v=p.isInterleavedBufferAttribute?c[x]*p.data.stride+p.offset:c[x]*f;for(let T=0;T<f;T++)g[y++]=d[v++]}return new et(g,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ue;var r=this.index.array,i=this.attributes;for(const p in i){var a=e(i[p],r);t.setAttribute(p,a)}var s=this.morphAttributes;for(const p in s){const c=[];var o=s[p];for(let d=0,f=o.length;d<f;d++){var l=e(o[d],r);c.push(l)}t.morphAttributes[p]=c}t.morphTargetsRelative=this.morphTargetsRelative;var h=this.groups;for(let p=0,c=h.length;p<c;p++){var u=h[p];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),0<Object.keys(this.userData).length&&(e.userData=this.userData),this.parameters!==void 0){var t=this.parameters;for(const h in t)t[h]!==void 0&&(e[h]=t[h]);return e}e.data={attributes:{}};var r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});var i=this.attributes;for(const h in i){const u=i[h];e.data.attributes[h]=u.toJSON(e.data)}const a={};let s=!1;for(const h in this.morphAttributes){var o=this.morphAttributes[h];const u=[];for(let p=0,c=o.length;p<c;p++){const d=o[p];u.push(d.toJSON(e.data))}0<u.length&&(a[h]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative),r=this.groups,0<r.length&&(e.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));var i=e.attributes;for(const u in i){const p=i[u];this.setAttribute(u,p.clone(t))}var a=e.morphAttributes;for(const u in a){const p=[],c=a[u];for(let d=0,f=c.length;d<f;d++)p.push(c[d].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;var s=e.groups;for(let u=0,p=s.length;u<p;u++){var o=s[u];this.addGroup(o.start,o.count,o.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.prototype.isBufferGeometry=!0;const Dh=new ce,nn=new Zi,po=new Mi,jr=new R,Qr=new R,qr=new R,fo=new R,mo=new R,go=new R,Ya=new R,ja=new R,Qa=new R,qa=new Z,Za=new Z,Ja=new Z,vo=new R,Ka=new R;class Qe extends Se{constructor(e=new Ue,t=new hr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,r=Object.keys(t);if(0<r.length){var i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){var a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else e=e.morphTargets,e!==void 0&&0<e.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}raycast(e,t){const r=this.geometry;var i=this.material,a=this.matrixWorld;if(i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),po.copy(r.boundingSphere),po.applyMatrix4(a),e.ray.intersectsSphere(po)!==!1&&(Dh.copy(a).invert(),nn.copy(e.ray).applyMatrix4(Dh),r.boundingBox===null||nn.intersectsBox(r.boundingBox)!==!1))){let D;if(r.isBufferGeometry){const F=r.index;var s=r.attributes.position,o=r.morphAttributes.position,l=r.morphTargetsRelative,h=r.attributes.uv,u=r.attributes.uv2,p=r.groups,c=r.drawRange;if(F!==null)if(Array.isArray(i))for(let U=0,H=p.length;U<H;U++){var d=p[U],f=i[d.materialIndex];for(let z=Math.max(d.start,c.start),W=Math.min(F.count,Math.min(d.start+d.count,c.start+c.count));z<W;z+=3){var m=F.getX(z),g=F.getX(z+1),v=F.getX(z+2);D=$a(this,f,e,nn,s,o,l,h,u,m,g,v),D&&(D.faceIndex=Math.floor(z/3),D.face.materialIndex=d.materialIndex,t.push(D))}}else for(let U=Math.max(0,c.start),H=Math.min(F.count,c.start+c.count);U<H;U+=3){var y=F.getX(U),x=F.getX(U+1),_=F.getX(U+2);D=$a(this,i,e,nn,s,o,l,h,u,y,x,_),D&&(D.faceIndex=Math.floor(U/3),t.push(D))}else if(s!==void 0)if(Array.isArray(i))for(let U=0,H=p.length;U<H;U++){var T=p[U],b=i[T.materialIndex];for(let z=Math.max(T.start,c.start),W=Math.min(s.count,Math.min(T.start+T.count,c.start+c.count));z<W;z+=3){var M=z,A=z+1,N=z+2;D=$a(this,b,e,nn,s,o,l,h,u,M,A,N),D&&(D.faceIndex=Math.floor(z/3),D.face.materialIndex=T.materialIndex,t.push(D))}}else for(let U=Math.max(0,c.start),H=Math.min(s.count,c.start+c.count);U<H;U+=3){var I=U,C=U+1,O=U+2;D=$a(this,i,e,nn,s,o,l,h,u,I,C,O),D&&(D.faceIndex=Math.floor(U/3),t.push(D))}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function $a(n,e,t,r,i,a,s,o,l,h,u,p){jr.fromBufferAttribute(i,h),Qr.fromBufferAttribute(i,u),qr.fromBufferAttribute(i,p);var c=n.morphTargetInfluences;if(a&&c){Ya.set(0,0,0),ja.set(0,0,0),Qa.set(0,0,0);for(let g=0,v=a.length;g<v;g++){var d=c[g],f=a[g];d!==0&&(fo.fromBufferAttribute(f,h),mo.fromBufferAttribute(f,u),go.fromBufferAttribute(f,p),s?(Ya.addScaledVector(fo,d),ja.addScaledVector(mo,d),Qa.addScaledVector(go,d)):(Ya.addScaledVector(fo.sub(jr),d),ja.addScaledVector(mo.sub(Qr),d),Qa.addScaledVector(go.sub(qr),d)))}jr.add(Ya),Qr.add(ja),qr.add(Qa)}n.isSkinnedMesh&&(n.boneTransform(h,jr),n.boneTransform(u,Qr),n.boneTransform(p,qr));const m=function(g,v,y,x,_,T,b,M){let A;return A=v.side===st?x.intersectTriangle(b,T,_,!0,M):x.intersectTriangle(_,T,b,v.side!==gi,M),A===null?null:(Ka.copy(M),Ka.applyMatrix4(g.matrixWorld),(M=y.ray.origin.distanceTo(Ka))<y.near||M>y.far?null:{distance:M,point:Ka.clone(),object:g})}(n,e,t,r,jr,Qr,qr,vo);return m&&(o&&(qa.fromBufferAttribute(o,h),Za.fromBufferAttribute(o,u),Ja.fromBufferAttribute(o,p),m.uv=ot.getUV(vo,jr,Qr,qr,qa,Za,Ja,new Z)),l&&(qa.fromBufferAttribute(l,h),Za.fromBufferAttribute(l,u),Ja.fromBufferAttribute(l,p),m.uv2=ot.getUV(vo,jr,Qr,qr,qa,Za,Ja,new Z)),l={a:h,b:u,c:p,normal:new R,materialIndex:0},ot.getNormal(jr,Qr,qr,l.normal),m.face=l),m}Qe.prototype.isMesh=!0;class jn extends Ue{constructor(e=1,t=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],h=[],u=[],p=[];let c=0,d=0;function f(m,g,v,y,x,_,T,b,M,A,N){var I=_/M,C=T/A,O=_/2,D=T/2,F=b/2,U=M+1,H=A+1;let z=0,W=0;const ee=new R;for(let w=0;w<H;w++){var q=w*C-D;for(let K=0;K<U;K++){var Q=K*I-O;ee[m]=Q*y,ee[g]=q*x,ee[v]=F,h.push(ee.x,ee.y,ee.z),ee[m]=0,ee[g]=0,ee[v]=0<b?1:-1,u.push(ee.x,ee.y,ee.z),p.push(K/M),p.push(1-w/A),z+=1}}for(let w=0;w<A;w++)for(let K=0;K<M;K++){var S=c+K+U*w,L=c+K+U*(w+1),k=c+(K+1)+U*(w+1),X=c+(K+1)+U*w;l.push(S,L,X),l.push(L,k,X),W+=6}o.addGroup(d,W,N),d+=W,c+=z}f("z","y","x",-1,-1,r,t,e,s,a,0),f("z","y","x",1,-1,r,t,-e,s,a,1),f("x","z","y",1,1,e,r,t,i,s,2),f("x","z","y",1,-1,e,r,-t,i,s,3),f("x","y","z",1,-1,e,t,r,i,a,4),f("x","y","z",-1,-1,e,t,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(p,2))}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function an(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function bt(n){const e={};for(let r=0;r<n.length;r++){var t=an(n[r]);for(const i in t)e[i]=t[i]}return e}const es={clone:an,merge:bt};class Bt extends ke{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=an(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}0<Object.keys(this.defines).length&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return 0<Object.keys(r).length&&(t.extensions=r),t}}Bt.prototype.isShaderMaterial=!0;class xo extends Se{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}xo.prototype.isCamera=!0;class Mt extends xo{constructor(e=50,t=1,r=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){e=.5*this.getFilmHeight()/e,this.fov=2*Gn*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){var e=Math.tan(.5*Hn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Gn*Math.atan(Math.tan(.5*Hn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){var e=this.near;let t=e*Math.tan(.5*Hn*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i;var s,o=this.view;this.view!==null&&this.view.enabled&&(s=o.fullWidth,l=o.fullHeight,a+=o.offsetX*i/s,t-=o.offsetY*r/l,i*=o.width/s,r*=o.height/l);var l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Mt.prototype.isPerspectiveCamera=!0;class _o extends Se{constructor(e,t,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget===!0){this.renderTarget=r;const i=new Mt(90,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const a=new Mt(90,1,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new R(-1,0,0)),this.add(a);const s=new Mt(90,1,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new R(0,1,0)),this.add(s);const o=new Mt(90,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Mt(90,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const h=new Mt(90,1,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new R(0,0,-1)),this.add(h)}else console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.")}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;var[i,a,s,o,l,h]=this.children,u=e.xr.enabled,p=e.getRenderTarget();e.xr.enabled=!1;var c=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,a),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=c,e.setRenderTarget(r,5),e.render(t,h),e.setRenderTarget(p),e.xr.enabled=u}}class ts extends je{constructor(e,t,r,i,a,s,o,l,h,u){super(e=e!==void 0?e:[],t=t!==void 0?t:Pa,r,i,a,s,o,l,h,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ts.prototype.isCubeTexture=!0;class Uh extends Rt{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r),super(e,e,t),t=t||{},this.texture=new ts(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ye,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=lt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;var r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jn(5,5,5);const a=new Bt({name:"CubemapFromEquirect",uniforms:an(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:st,blending:Gr});a.uniforms.tEquirect.value=t;const s=new Qe(i,a);return i=t.minFilter,t.minFilter===xi&&(t.minFilter=Ye),new _o(1,10,this).update(e,s),t.minFilter=i,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){var a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(a)}}Uh.prototype.isWebGLCubeRenderTarget=!0;const yo=new R,ff=new R,mf=new mt;class Rr{constructor(e=new R(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){return t=yo.subVectors(r,t).cross(ff.subVectors(e,t)).normalize(),this.setFromNormalAndCoplanarPoint(t,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){var r=e.delta(yo),i=this.normal.dot(r);return i===0?this.distanceToPoint(e.start)===0?t.copy(e.start):null:(i=-(e.start.dot(this.normal)+this.constant)/i,i<0||1<i?null:t.copy(r).multiplyScalar(i).add(e.start))}intersectsLine(e){var t=this.distanceToPoint(e.start),e=this.distanceToPoint(e.end);return t<0&&0<e||e<0&&0<t}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){t=t||mf.getNormalMatrix(e);const r=this.coplanarPoint(yo).applyMatrix4(e);return t=this.normal.applyMatrix3(t).normalize(),this.constant=-r.dot(t),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Rr.prototype.isPlane=!0;const sn=new Mi,rs=new R;class is{constructor(e=new Rr,t=new Rr,r=new Rr,i=new Rr,a=new Rr,s=new Rr){this.planes=[e,t,r,i,a,s]}set(e,t,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes;var r=e.elements,i=r[0],a=r[1],s=r[2],o=r[3],l=r[4],h=r[5],u=r[6],p=r[7],c=r[8],d=r[9],f=r[10],m=r[11],g=r[12],v=r[13],e=r[14],r=r[15];return t[0].setComponents(o-i,p-l,m-c,r-g).normalize(),t[1].setComponents(o+i,p+l,m+c,r+g).normalize(),t[2].setComponents(o+a,p+h,m+d,r+v).normalize(),t[3].setComponents(o-a,p-h,m-d,r-v).normalize(),t[4].setComponents(o-s,p-u,m-f,r-e).normalize(),t[5].setComponents(o+s,p+u,m+f,r+e).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const t=this.planes;var r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){var t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(rs.x=(0<i.normal.x?e.max:e.min).x,rs.y=(0<i.normal.y?e.max:e.min).y,rs.z=(0<i.normal.z?e.max:e.min).z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let n=null,e=!1,t=null,r=null;function i(a,s){t(a,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function gf(n,e){const t=e.isWebGL2,r=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),r.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);var a=r.get(i);a&&(n.deleteBuffer(a.buffer),r.delete(i))},update:function(i,a){if(i.isGLBufferAttribute){var s=r.get(i);(!s||s.version<i.version)&&r.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version})}else{i.isInterleavedBufferAttribute&&(i=i.data);const o=r.get(i);o===void 0?r.set(i,function(l,h){var u=l.array,p=l.usage,c=n.createBuffer();n.bindBuffer(h,c),n.bufferData(h,u,p),l.onUploadCallback();let d=5126;return u instanceof Float32Array?d=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?d=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):d=5123:u instanceof Int16Array?d=5122:u instanceof Uint32Array?d=5125:u instanceof Int32Array?d=5124:u instanceof Int8Array?d=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(d=5121),{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}(i,a)):o.version<i.version&&(function(l,h,u){const p=h.array,c=h.updateRange;n.bindBuffer(u,l),c.count===-1?n.bufferSubData(u,0,p):(t?n.bufferSubData(u,c.offset*p.BYTES_PER_ELEMENT,p,c.offset,c.count):n.bufferSubData(u,c.offset*p.BYTES_PER_ELEMENT,p.subarray(c.offset,c.offset+c.count)),c.count=-1)}(o.buffer,i,a),o.version=i.version)}}}}class ns extends Ue{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};var a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(i),h=o+1,u=l+1,p=e/o,c=t/l;const d=[],f=[],m=[],g=[];for(let M=0;M<u;M++){var v=M*c-s;for(let A=0;A<h;A++){var y=A*p-a;f.push(y,-v,0),m.push(0,0,1),g.push(A/o),g.push(1-M/l)}}for(let M=0;M<l;M++)for(let A=0;A<o;A++){var x=A+h*M,_=A+h*(M+1),T=A+1+h*(M+1),b=A+1+h*M;d.push(x,_,b),d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(g,2))}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}const ye={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}}},pr={basic:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new se(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new se(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:bt([ae.points,ae.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:bt([ae.common,ae.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:bt([ae.sprite,ae.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},cube:{uniforms:bt([ae.envmap,{opacity:{value:1}}]),vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:bt([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:bt([ae.lights,ae.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};function vf(n,e,t,r,i){const a=new se(0);let s=0,o,l,h=null,u=0,p=null;function c(d,f){t.buffers.color.setClear(d.r,d.g,d.b,f,i)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),s=f,c(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,c(a,s)},render:function(d,f){let m=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=e.get(g));const v=n.xr;(f=v.getSession&&v.getSession())&&f.environmentBlendMode==="additive"&&(g=null),g===null?c(a,s):g&&g.isColor&&(c(g,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Fa)?(l===void 0&&(l=new Qe(new jn(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:an(pr.cube.uniforms),vertexShader:pr.cube.vertexShader,fragmentShader:pr.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h===g&&u===g.version&&p===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),d.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new Qe(new ns(2,2),new Bt({name:"BackgroundMaterial",uniforms:an(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&p===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),d.unshift(o,o.geometry,o.material,0,0,null))}}}function xf(n,e,t,r){const i=n.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},l=c(null);let h=l;function u(_){return r.isWebGL2?n.bindVertexArray(_):a.bindVertexArrayOES(_)}function p(_){return r.isWebGL2?n.deleteVertexArray(_):a.deleteVertexArrayOES(_)}function c(_){const T=[],b=[],M=[];for(let A=0;A<i;A++)T[A]=0,b[A]=0,M[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:b,attributeDivisors:M,object:_,attributes:{},index:null}}function d(){const _=h.newAttributes;for(let T=0,b=_.length;T<b;T++)_[T]=0}function f(_){m(_,0)}function m(_,T){const b=h.newAttributes,M=h.enabledAttributes,A=h.attributeDivisors;b[_]=1,M[_]===0&&(n.enableVertexAttribArray(_),M[_]=1),A[_]!==T&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_,T),A[_]=T)}function g(){var _=h.newAttributes;const T=h.enabledAttributes;for(let b=0,M=T.length;b<M;b++)T[b]!==_[b]&&(n.disableVertexAttribArray(b),T[b]=0)}function v(_,T,b,M,A,N){r.isWebGL2!==!0||b!==5124&&b!==5125?n.vertexAttribPointer(_,T,b,M,A,N):n.vertexAttribIPointer(_,T,b,A,N)}function y(){x(),h!==l&&(h=l,u(h.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(_,T,b,M,A){let N=!1;var I;s?(I=function(C,O,D){D=D.wireframe===!0;let F=o[C.id];F===void 0&&(F={},o[C.id]=F);let U=F[O.id];U===void 0&&(U={},F[O.id]=U);let H=U[D];return H===void 0&&(H=c(r.isWebGL2?n.createVertexArray():a.createVertexArrayOES()),U[D]=H),H}(M,b,T),h!==I&&(h=I,u(h.object)),N=function(C,O){var D=h.attributes,F=C.attributes;let U=0;for(const W in F){var H=D[W],z=F[W];if(H===void 0||H.attribute!==z||H.data!==z.data)return!0;U++}return h.attributesNum!==U||h.index!==O}(M,A),N&&function(C,O){const D={},F=C.attributes;let U=0;for(const z in F){var H=F[z];const W={};(W.attribute=H).data&&(W.data=H.data),D[z]=W,U++}h.attributes=D,h.attributesNum=U,h.index=O}(M,A)):(I=T.wireframe===!0,h.geometry===M.id&&h.program===b.id&&h.wireframe===I||(h.geometry=M.id,h.program=b.id,h.wireframe=I,N=!0)),_.isInstancedMesh===!0&&(N=!0),A!==null&&t.update(A,34963),N&&(function(C,O,D,F){if(!(r.isWebGL2===!1&&(C.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)){d();var U=F.attributes,H=D.getAttributes(),z=O.defaultAttributeValues;for(const P in H){var W=H[P];if(0<=W.location){let V=U[P];if(V===void 0&&(P==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),P==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),V!==void 0){var ee=V.normalized,q=V.itemSize,Q=t.get(V);if(Q!==void 0){var S=Q.buffer,L=Q.type,k=Q.bytesPerElement;if(V.isInterleavedBufferAttribute){var X=V.data,w=X.stride,K=V.offset;if(X&&X.isInstancedInterleavedBuffer){for(let B=0;B<W.locationSize;B++)m(W.location+B,X.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let B=0;B<W.locationSize;B++)f(W.location+B);n.bindBuffer(34962,S);for(let B=0;B<W.locationSize;B++)v(W.location+B,q/W.locationSize,L,ee,w*k,(K+q/W.locationSize*B)*k)}else{if(V.isInstancedBufferAttribute){for(let B=0;B<W.locationSize;B++)m(W.location+B,V.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let B=0;B<W.locationSize;B++)f(W.location+B);n.bindBuffer(34962,S);for(let B=0;B<W.locationSize;B++)v(W.location+B,q/W.locationSize,L,ee,q*k,q/W.locationSize*B*k)}}}else if(z!==void 0){var oe=z[P];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(W.location,oe);break;case 3:n.vertexAttrib3fv(W.location,oe);break;case 4:n.vertexAttrib4fv(W.location,oe);break;default:n.vertexAttrib1fv(W.location,oe)}}}}g()}}(_,T,b,M),A!==null&&n.bindBuffer(34963,t.get(A).buffer))},reset:y,resetDefaultState:x,dispose:function(){y();for(const _ in o){const T=o[_];for(const b in T){const M=T[b];for(const A in M)p(M[A].object),delete M[A];delete T[b]}delete o[_]}},releaseStatesOfGeometry:function(_){if(o[_.id]!==void 0){const T=o[_.id];for(const b in T){const M=T[b];for(const A in M)p(M[A].object),delete M[A];delete T[b]}delete o[_.id]}},releaseStatesOfProgram:function(_){for(const T in o){const b=o[T];if(b[_.id]!==void 0){const M=b[_.id];for(const A in M)p(M[A].object),delete M[A];delete b[_.id]}}},initAttributes:d,enableAttribute:f,disableUnusedAttributes:g}}function _f(n,e,t,r){const i=r.isWebGL2;let a;this.setMode=function(s){a=s},this.render=function(s,o){n.drawArrays(a,s,o),t.update(o,a,1)},this.renderInstances=function(s,o,l){if(l!==0){let h,u;if(i)h=n,u="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](a,s,o,l),t.update(o,a,l)}}}function yf(n,e,t){let r;function i(_){if(_==="highp"){if(0<n.getShaderPrecisionFormat(35633,36338).precision&&0<n.getShaderPrecisionFormat(35632,36338).precision)return"highp";_="mediump"}return _==="mediump"&&0<n.getShaderPrecisionFormat(35633,36337).precision&&0<n.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var a=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";var o=i(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);var l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),p=n.getParameter(35660),c=n.getParameter(3379),d=n.getParameter(34076),f=n.getParameter(34921),m=n.getParameter(36347),g=n.getParameter(36348),v=n.getParameter(36349),y=0<p,x=a||e.has("OES_texture_float"),o=y&&x,t=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:function(){return r!==void 0||(r=e.has("EXT_texture_filter_anisotropic")===!0?(_=e.get("EXT_texture_filter_anisotropic"),n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)):0),r;var _},getMaxPrecision:i,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:c,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:o,maxSamples:t}}function bf(n){const e=this;let t=null,r=0,i=!1,a=!1;const s=new Rr,o=new mt,l={value:null,needsUpdate:!1};function h(){l.value!==t&&(l.value=t,l.needsUpdate=0<r),e.numPlanes=r,e.numIntersection=0}function u(p,c,d,f){var m=p!==null?p.length:0;let g=null;if(m!==0){if(g=l.value,f!==!0||g===null){var f=d+4*m,v=c.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,_=d;x!==m;++x,_+=4)s.copy(p[x]).applyMatrix4(v,o),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c,d){var f=p.length!==0||c||r!==0||i;return i=c,t=u(p,d,0),r=p.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,h()},this.setState=function(p,c,d){var f=p.clippingPlanes,m=p.clipIntersection,g=p.clipShadows;const v=n.get(p);if(!i||f===null||f.length===0||a&&!g)a?u(null):h();else{var g=a?0:r,y=4*g;let _=v.clippingState||null;l.value=_,_=u(f,c,y,d);for(let T=0;T!==y;++T)_[T]=t[T];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function Mf(n){let e=new WeakMap;function t(i,a){return a===Gs?i.mapping=Pa:a===ks&&(i.mapping=Ra),i}function r(i){const a=i.target;a.removeEventListener("dispose",r);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){var a=i.mapping;if(a===Gs||a===ks){if(e.has(i))return t(e.get(i).texture,i.mapping);var s=i.image;if(s&&0<s.height){a=n.getRenderTarget();const o=new Uh(s.height/2);return o.fromEquirectangularTexture(n,i),e.set(i,o),n.setRenderTarget(a),i.addEventListener("dispose",r),t(o.texture,i.mapping)}return null}}return i},dispose:function(){e=new WeakMap}}}pr.physical={uniforms:bt([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new se(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new se(1,1,1)},specularTintMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};class on extends xo{constructor(e=-1,t=1,r=1,i=-1,a=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+t,l=i-t;this.view!==null&&this.view.enabled&&(i=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom,a+=i*this.view.offsetX,s=a+i*this.view.width,o-=t*this.view.offsetY,l=o-t*this.view.height),this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}on.prototype.isOrthographicCamera=!0;class Qn extends Bt{constructor(e){super(e),this.type="RawShaderMaterial"}}Qn.prototype.isRawShaderMaterial=!0;const fr=Math.pow(2,8),zh=[.125,.215,.35,.446,.526,.582],Bh=5+zh.length,Zr={[pt]:0,[Ut]:1,3002:2,3004:3,3005:4,3006:5,3007:6},bo=new on,{_lodPlanes:qn,_sizeLods:Hh,_sigmas:as}=Tf(),Gh=new se;let Mo=null;var it=(1+Math.sqrt(5))/2,$t=1/it;const kh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,it,$t),new R(0,it,-$t),new R($t,0,it),new R(-$t,0,it),new R(it,$t,0),new R(-it,$t,0)];class Vh{constructor(e){var t,r;this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=(t=20,r=new Float32Array(t),e=new R(0,1,0),e=new Qn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e},inputEncoding:{value:Zr[pt]},outputEncoding:{value:Zr[pt]}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${wo()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Mo=this._renderer.getRenderTarget();var a=this._allocateTargets();return this._sceneToCubeUV(e,r,i,a),0<t&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Yh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Xh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<qn.length;e++)qn[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Mo),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e){Mo=this._renderer.getRenderTarget();var t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){var t,t={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:ar,format:nh,encoding:(t=e)===void 0||t.type!==ar||t.encoding!==pt&&t.encoding!==Ut&&t.encoding!==3007?3002:e.encoding,depthBuffer:!1};const r=Wh(t);return r.depthBuffer=!e,this._pingPongRenderTarget=Wh(t),r}_compileMaterial(e){e=new Qe(qn[0],e),this._renderer.compile(e,bo)}_sceneToCubeUV(e,t,r,i){const a=new Mt(90,1,t,r);var s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1];const l=this._renderer;var h=l.autoClear,u=l.outputEncoding,t=l.toneMapping;l.getClearColor(Gh),l.toneMapping=vi,l.outputEncoding=pt,l.autoClear=!1;const p=new hr({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),c=new Qe(new jn,p);let d=!1;r=e.background,r?r.isColor&&(p.color.copy(r),e.background=null,d=!0):(p.color.copy(Gh),d=!0);for(let m=0;m<6;m++){var f=m%3;f==0?(a.up.set(0,s[m],0),a.lookAt(o[m],0,0)):f==1?(a.up.set(0,0,s[m]),a.lookAt(0,o[m],0)):(a.up.set(0,s[m],0),a.lookAt(0,0,o[m])),ss(i,f*fr,2<m?fr:0,fr,fr),l.setRenderTarget(i),d&&l.render(c,a),l.render(e,a)}c.geometry.dispose(),c.material.dispose(),l.toneMapping=t,l.outputEncoding=u,l.autoClear=h,e.background=r}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===lt&&t.type===ar&&t.encoding===Ut?e.value=Zr[pt]:e.value=Zr[t.encoding]}_textureToCubeUV(e,t){const r=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Yh()):this._equirectShader==null&&(this._equirectShader=Xh());var i=e.isCubeTexture?this._cubemapShader:this._equirectShader,a=new Qe(qn[0],i);const s=i.uniforms;(s.envMap.value=e).isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(s.inputEncoding,e),this._setEncoding(s.outputEncoding,t.texture),ss(t,0,0,3*fr,2*fr),r.setRenderTarget(t),r.render(a,bo)}_applyPMREM(e){const t=this._renderer;var r=t.autoClear;t.autoClear=!1;for(let s=1;s<Bh;s++){var i=Math.sqrt(as[s]*as[s]-as[s-1]*as[s-1]),a=kh[(s-1)%kh.length];this._blur(e,s-1,s,i,a)}t.autoClear=r}_blur(e,t,r,i,a){var s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,s,o){const l=this._renderer;var h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");var u=new Qe(qn[i],h);const p=h.uniforms;var h=Hh[r]-1,h=isFinite(a)?Math.PI/(2*h):2*Math.PI/39,c=a/h,d=isFinite(a)?1+Math.floor(3*c):20;20<d&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to 20`);const f=[];let m=0;for(let y=0;y<20;++y){const x=y/c;var g=Math.exp(-x*x/2);f.push(g),y==0?m+=g:y<d&&(m+=2*g)}for(let y=0;y<f.length;y++)f[y]=f[y]/m;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o),p.dTheta.value=h,p.mipInt.value=8-r,this._setEncoding(p.inputEncoding,e.texture),this._setEncoding(p.outputEncoding,e.texture),e=Hh[i];const v=3*Math.max(0,fr-2*e);i=(i===0?0:2*fr)+2*e*(4<i?i-8+4:0),ss(t,v,i,3*e,2*e),l.setRenderTarget(t),l.render(u,bo)}}function Tf(){const n=[],e=[],t=[];let r=8;for(let h=0;h<Bh;h++){var i=Math.pow(2,r);e.push(i);let u=1/i;4<h?u=zh[h-8+4-1]:h==0&&(u=0),t.push(u);var a=1/(i-1),i=-a/2,a=1+a/2,s=[i,i,a,i,a,a,i,i,a,a,i,a];const p=new Float32Array(108),c=new Float32Array(72),d=new Float32Array(36);for(let m=0;m<6;m++){var o=m%3*2/3-1,l=2<m?0:-1;p.set([o,l,0,o+2/3,l,0,o+2/3,1+l,0,o,l,0,o+2/3,1+l,0,o,1+l,0],18*m),c.set(s,12*m),l=[m,m,m,m,m,m],d.set(l,6*m)}const f=new Ue;f.setAttribute("position",new et(p,3)),f.setAttribute("uv",new et(c,2)),f.setAttribute("faceIndex",new et(d,1)),n.push(f),4<r&&r--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function Wh(n){const e=new Rt(3*fr,3*fr,n);return e.texture.mapping=Fa,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ss(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Xh(){var n=new Z(1,1);return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:Zr[pt]},outputEncoding:{value:Zr[pt]}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${wo()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Yh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Zr[pt]},outputEncoding:{value:Zr[pt]}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${wo()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wo(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function wf(n){let e=new WeakMap,t=null;function r(i){const a=i.target;a.removeEventListener("dispose",r);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){var a=i.mapping,s=a===Gs||a===ks,o=a===Pa||a===Ra;if(s||o)return e.has(i)?e.get(i).texture:(a=i.image,s&&a&&0<a.height||o&&a&&function(l){let h=0;for(let u=0;u<6;u++)l[u]!==void 0&&h++;return h===6}(a)?(a=n.getRenderTarget(),t===null&&(t=new Vh(n)),s=s?t.fromEquirectangular(i):t.fromCubemap(i),e.set(i,s),n.setRenderTarget(a),i.addEventListener("dispose",r),s.texture):null)}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Sf(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){var i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Af(n,e,t,r){const i={},a=new WeakMap;function s(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const u in h.attributes)e.remove(h.attributes[u]);h.removeEventListener("dispose",s),delete i[h.id],l=a.get(h),l&&(e.remove(l),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){const h=[];var u=l.index,p=l.attributes.position;let c=0;if(u!==null){var d=u.array;c=u.version;for(let b=0,M=d.length;b<M;b+=3){var f=d[b+0],m=d[b+1],g=d[b+2];h.push(f,m,m,g,g,f)}}else{var v=p.array;c=p.version;for(let b=0,M=v.length/3-1;b<M;b+=3){var y=b+0,x=b+1,_=b+2;h.push(y,x,x,_,_,y)}}const T=new(65535<yh(h)?Ih:Nh)(h,1);T.version=c,v=a.get(l),v&&e.remove(v),a.set(l,T)}return{get:function(l,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h},update:function(l){var h=l.attributes;for(const c in h)e.update(h[c],34962);var u=l.morphAttributes;for(const c in u){var p=u[c];for(let d=0,f=p.length;d<f;d++)e.update(p[d],34962)}},getWireframeAttribute:function(l){var h,u=a.get(l);return(!u||(h=l.index)!==null&&u.version<h.version)&&o(l),a.get(l)}}}function Ef(n,e,t,r){const i=r.isWebGL2;let a,s,o;this.setMode=function(l){a=l},this.setIndex=function(l){s=l.type,o=l.bytesPerElement},this.render=function(l,h){n.drawElements(a,h,s,l*o),t.update(h,a,1)},this.renderInstances=function(l,h,u){if(u!==0){let p,c;if(i)p=n,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");p[c](a,h,s,l*o,u),t.update(h,a,u)}}}function Lf(n){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,r,i){switch(e.calls++,r){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r)}}}}class So extends je{constructor(e=null,t=1,r=1,i=1){super(null),this.image={data:e,width:t,height:r,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}function Pf(n,e){return n[0]-e[0]}function Rf(n,e){return Math.abs(e[1])-Math.abs(n[1])}function jh(n,e){let t=1;e=(e.isInterleavedBufferAttribute?e.data:e).array,e instanceof Int8Array?t=127:e instanceof Int16Array?t=32767:e instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",e),n.divideScalar(t)}function Ff(n,e,t){const r={},i=new Float32Array(8),a=new WeakMap,s=new R,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,u,p){var c=l.morphTargetInfluences;if(e.isWebGL2===!0){var d=h.morphAttributes.position.length;let O=a.get(h);if(O===void 0||O.count!==d){O!==void 0&&O.texture.dispose();var f=h.morphAttributes.normal!==void 0,m=h.morphAttributes.position,g=h.morphAttributes.normal||[],v=f==!0?2:1;let F=h.attributes.position.count*v,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const H=new Float32Array(F*U*4*d),z=new So(H,F,U,d);z.format=lt,z.type=Qt;var y=4*v;for(let W=0;W<d;W++){var x=m[W],_=g[W],T=F*U*4*W;for(let ee=0;ee<x.count;ee++){s.fromBufferAttribute(x,ee),x.normalized===!0&&jh(s,x);var b=ee*y;H[T+b]=s.x,H[T+b+1]=s.y,H[T+b+2]=s.z,!(H[T+b+3]=0)==f&&(s.fromBufferAttribute(_,ee),_.normalized===!0&&jh(s,_),H[T+b+4]=s.x,H[T+b+5]=s.y,H[T+b+6]=s.z,H[T+b+7]=0)}}O={count:d,texture:z,size:new Z(F,U)},a.set(h,O)}let D=0;for(let F=0;F<c.length;F++)D+=c[F];v=h.morphTargetsRelative?1:1-D,p.getUniforms().setValue(n,"morphTargetBaseInfluence",v),p.getUniforms().setValue(n,"morphTargetInfluences",c),p.getUniforms().setValue(n,"morphTargetsTexture",O.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",O.size)}else{var M=c===void 0?0:c.length;let O=r[h.id];if(O===void 0||O.length!==M){O=[];for(let F=0;F<M;F++)O[F]=[F,0];r[h.id]=O}for(let F=0;F<M;F++){const U=O[F];U[0]=F,U[1]=c[F]}O.sort(Rf);for(let F=0;F<8;F++)F<M&&O[F][1]?(o[F][0]=O[F][0],o[F][1]=O[F][1]):(o[F][0]=Number.MAX_SAFE_INTEGER,o[F][1]=0);o.sort(Pf);var A=h.morphAttributes.position,N=h.morphAttributes.normal;let D=0;for(let F=0;F<8;F++){var I=o[F],C=I[0],I=I[1];C!==Number.MAX_SAFE_INTEGER&&I?(A&&h.getAttribute("morphTarget"+F)!==A[C]&&h.setAttribute("morphTarget"+F,A[C]),N&&h.getAttribute("morphNormal"+F)!==N[C]&&h.setAttribute("morphNormal"+F,N[C]),i[F]=I,D+=I):(A&&h.hasAttribute("morphTarget"+F)===!0&&h.deleteAttribute("morphTarget"+F),N&&h.hasAttribute("morphNormal"+F)===!0&&h.deleteAttribute("morphNormal"+F),i[F]=0)}v=h.morphTargetsRelative?1:1-D,p.getUniforms().setValue(n,"morphTargetBaseInfluence",v),p.getUniforms().setValue(n,"morphTargetInfluences",i)}}}}function Cf(n,e,t,r){let i=new WeakMap;function a(s){const o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){var o=r.render.frame,l=s.geometry,l=e.get(s,l);return i.get(l)!==o&&(e.update(l),i.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),t.update(s.instanceMatrix,34962),s.instanceColor!==null&&t.update(s.instanceColor,34962)),l},dispose:function(){i=new WeakMap}}}So.prototype.isDataTexture2DArray=!0;class Qh extends je{constructor(e=null,t=1,r=1,i=1){super(null),this.image={data:e,width:t,height:r,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Qh.prototype.isDataTexture3D=!0;const qh=new je,Nf=new So,If=new Qh,Zh=new ts,Jh=[],Kh=[],$h=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function ln(n,e,t){const r=n[0];if(r<=0||0<r)return n;var i=e*t;let a=Jh[i];if(a===void 0&&(a=new Float32Array(i),Jh[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function At(n,e){if(n.length===e.length){for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return;return 1}}function Tt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ru(n,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Df(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Uf(n,e){const t=this.cache;e.x!==void 0?t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y):At(t,e)||(n.uniform2fv(this.addr,e),Tt(t,e))}function Of(n,e){const t=this.cache;e.x!==void 0?t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z):e.r!==void 0?t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b):At(t,e)||(n.uniform3fv(this.addr,e),Tt(t,e))}function zf(n,e){const t=this.cache;e.x!==void 0?t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w):At(t,e)||(n.uniform4fv(this.addr,e),Tt(t,e))}function Bf(n,e){var t=this.cache,r=e.elements;r===void 0?At(t,e)||(n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)):At(t,r)||(tu.set(r),n.uniformMatrix2fv(this.addr,!1,tu),Tt(t,r))}function Hf(n,e){var t=this.cache,r=e.elements;r===void 0?At(t,e)||(n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)):At(t,r)||(eu.set(r),n.uniformMatrix3fv(this.addr,!1,eu),Tt(t,r))}function Gf(n,e){var t=this.cache,r=e.elements;r===void 0?At(t,e)||(n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)):At(t,r)||($h.set(r),n.uniformMatrix4fv(this.addr,!1,$h),Tt(t,r))}function kf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vf(n,e){var t=this.cache;At(t,e)||(n.uniform2iv(this.addr,e),Tt(t,e))}function Wf(n,e){var t=this.cache;At(t,e)||(n.uniform3iv(this.addr,e),Tt(t,e))}function Xf(n,e){var t=this.cache;At(t,e)||(n.uniform4iv(this.addr,e),Tt(t,e))}function Yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jf(n,e){var t=this.cache;At(t,e)||(n.uniform2uiv(this.addr,e),Tt(t,e))}function Qf(n,e){var t=this.cache;At(t,e)||(n.uniform3uiv(this.addr,e),Tt(t,e))}function qf(n,e){var t=this.cache;At(t,e)||(n.uniform4uiv(this.addr,e),Tt(t,e))}function Zf(n,e,t){const r=this.cache;var i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.safeSetTexture2D(e||qh,i)}function Jf(n,e,t){const r=this.cache;var i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||If,i)}function Kf(n,e,t){const r=this.cache;var i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.safeSetTextureCube(e||Zh,i)}function $f(n,e,t){const r=this.cache;var i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||Nf,i)}function em(n,e){n.uniform1fv(this.addr,e)}function tm(n,e){e=ln(e,this.size,2),n.uniform2fv(this.addr,e)}function rm(n,e){e=ln(e,this.size,3),n.uniform3fv(this.addr,e)}function im(n,e){e=ln(e,this.size,4),n.uniform4fv(this.addr,e)}function nm(n,e){e=ln(e,this.size,4),n.uniformMatrix2fv(this.addr,!1,e)}function am(n,e){e=ln(e,this.size,9),n.uniformMatrix3fv(this.addr,!1,e)}function sm(n,e){e=ln(e,this.size,16),n.uniformMatrix4fv(this.addr,!1,e)}function om(n,e){n.uniform1iv(this.addr,e)}function lm(n,e){n.uniform2iv(this.addr,e)}function hm(n,e){n.uniform3iv(this.addr,e)}function um(n,e){n.uniform4iv(this.addr,e)}function cm(n,e){n.uniform1uiv(this.addr,e)}function dm(n,e){n.uniform2uiv(this.addr,e)}function pm(n,e){n.uniform3uiv(this.addr,e)}function fm(n,e){n.uniform4uiv(this.addr,e)}function mm(n,e,t){var r=e.length,i=ru(t,r);n.uniform1iv(this.addr,i);for(let a=0;a!==r;++a)t.safeSetTexture2D(e[a]||qh,i[a])}function gm(n,e,t){var r=e.length,i=ru(t,r);n.uniform1iv(this.addr,i);for(let a=0;a!==r;++a)t.safeSetTextureCube(e[a]||Zh,i[a])}function vm(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=function(r){switch(r){case 5126:return Df;case 35664:return Uf;case 35665:return Of;case 35666:return zf;case 35674:return Bf;case 35675:return Hf;case 35676:return Gf;case 5124:case 35670:return kf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return Yf;case 36294:return jf;case 36295:return Qf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return $f}}(e.type)}function iu(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(r){switch(r){case 5126:return em;case 35664:return tm;case 35665:return rm;case 35666:return im;case 35674:return nm;case 35675:return am;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return cm;case 36294:return dm;case 36295:return pm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35680:case 36300:case 36308:case 36293:return gm}}(e.type)}function nu(n){this.id=n,this.seq=[],this.map={}}iu.prototype.updateCache=function(n){var e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Tt(e,n)},nu.prototype.setValue=function(n,e,t){var r=this.seq;for(let i=0,a=r.length;i!==a;++i){const s=r[i];s.setValue(n,e[s.id],t)}};const Ao=/(\w+)(\])?(\[|\.)?/g;function au(n,e){n.seq.push(e),n.map[e.id]=e}function Jr(n,e){this.seq=[],this.map={};var t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){var r=n.getActiveUniform(e,i);(function(a,s,o){var l=a.name,h=l.length;for(Ao.lastIndex=0;;){var u=Ao.exec(l),p=Ao.lastIndex;let d=u[1];var c=u[2]==="]",u=u[3];if(c&&(d|=0),u===void 0||u==="["&&p+2===h){au(o,new(u===void 0?vm:iu)(d,a,s));break}{let f=o.map[d];f===void 0&&(f=new nu(d),au(o,f)),o=f}}})(r,n.getUniformLocation(e,r.name),this)}}function su(n,e,t){return e=n.createShader(e),n.shaderSource(e,t),n.compileShader(e),e}Jr.prototype.setValue=function(n,e,t,r){const i=this.map[e];i!==void 0&&i.setValue(n,t,r)},Jr.prototype.setOptional=function(n,e,t){e=e[t],e!==void 0&&this.setValue(n,t,e)},Jr.upload=function(n,e,t,r){for(let i=0,a=e.length;i!==a;++i){const s=e[i],o=t[s.id];o.needsUpdate!==!1&&s.setValue(n,o.value,r)}},Jr.seqWithValue=function(n,e){const t=[];for(let i=0,a=n.length;i!==a;++i){var r=n[i];r.id in e&&t.push(r)}return t};let xm=0;function ou(n){switch(n){case pt:return["Linear","( value )"];case Ut:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function lu(n,e,t){var r=n.getShaderParameter(e,35713),i=n.getShaderInfoLog(e).trim();return r&&i===""?"":t.toUpperCase()+`

`+i+`

`+function(a){const s=a.split(`
`);for(let o=0;o<s.length;o++)s[o]=o+1+": "+s[o];return s.join(`
`)}(n.getShaderSource(e))}function hn(n,e){return e=ou(e),"vec4 "+n+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function Zn(n){return n!==""}function hu(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(n){return n.replace(_m,ym)}function ym(n,e){var t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}const bm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(n){return n.replace(Mm,du).replace(bm,Tm)}function Tm(n,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),du(0,e,t,r)}function du(n,e,t,r){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function pu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(n,e,t,r){const i=n.getContext();var a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=function(M){let A="SHADOWMAP_TYPE_BASIC";return M.shadowMapType===Zl?A="SHADOWMAP_TYPE_PCF":M.shadowMapType===2?A="SHADOWMAP_TYPE_PCF_SOFT":M.shadowMapType===In&&(A="SHADOWMAP_TYPE_VSM"),A}(t),h=function(M){let A="ENVMAP_TYPE_CUBE";if(M.envMap)switch(M.envMapMode){case Pa:case Ra:A="ENVMAP_TYPE_CUBE";break;case Fa:case Vs:A="ENVMAP_TYPE_CUBE_UV"}return A}(t),u=function(M){let A="ENVMAP_MODE_REFLECTION";if(M.envMap)switch(M.envMapMode){case Ra:case Vs:A="ENVMAP_MODE_REFRACTION"}return A}(t),p=function(M){let A="ENVMAP_BLENDING_NONE";if(M.envMap)switch(M.combine){case 0:A="ENVMAP_BLENDING_MULTIPLY";break;case 1:A="ENVMAP_BLENDING_MIX";break;case 2:A="ENVMAP_BLENDING_ADD"}return A}(t),c=0<n.gammaFactor?n.gammaFactor:1;const d=t.isWebGL2?"":function(M){return[M.extensionDerivatives||M.envMapCubeUV||M.bumpMap||M.tangentSpaceNormalMap||M.clearcoatNormalMap||M.flatShading||M.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(M.extensionFragDepth||M.logarithmicDepthBuffer)&&M.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",M.extensionDrawBuffers&&M.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(M.extensionShaderTextureLOD||M.envMap||M.transmission)&&M.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zn).join(`
`)}(t),f=function(M){const A=[];for(const I in M){var N=M[I];N!==!1&&A.push("#define "+I+" "+N)}return A.join(`
`)}(a),m=i.createProgram();let g,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[f].filter(Zn).join(`
`),0<g.length&&(g+=`
`),v=[d,f].filter(Zn).join(`
`),0<v.length&&(v+=`
`)):(g=[pu(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+c,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),v=[d,pu(t),"#define SHADER_NAME "+t.shaderName,f,"#define GAMMA_FACTOR "+c,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ye.tonemapping_pars_fragment:"",t.toneMapping!==vi?function(M,A){let N;switch(A){case 1:N="Linear";break;case 2:N="Reinhard";break;case 3:N="OptimizedCineon";break;case 4:N="ACESFilmic";break;case 5:N="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),N="Linear"}return"vec3 "+M+"( vec3 color ) { return "+N+"ToneMapping( color ); }"}("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===wr?"#define OPAQUE":"",ye.encodings_pars_fragment,t.map?hn("mapTexelToLinear",t.mapEncoding):"",t.matcap?hn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?hn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?hn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?hn("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?hn("lightMapTexelToLinear",t.lightMapEncoding):"",(x="linearToOutputTexel",_=ou(_=t.outputEncoding),"vec4 "+x+"( vec4 value ) { return LinearTo"+_[0]+_[1]+"; }"),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zn).join(`
`)),s=uu(hu(Eo(s),t),t),o=uu(hu(Eo(o),t),t),s=cu(s),o=cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===vh?"":"out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);var p=y+g+s,l=y+v+o,x=su(i,35633,p),_=su(i,35632,l);if(i.attachShader(m,x),i.attachShader(m,_),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),n.debug.checkShaderErrors){s=i.getProgramInfoLog(m).trim(),o=i.getShaderInfoLog(x).trim(),p=i.getShaderInfoLog(_).trim();let M=!0,A=!0;i.getProgramParameter(m,35714)===!1?(M=!1,l=lu(i,x,"vertex"),n=lu(i,_,"fragment"),console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+s+`
`+l+`
`+n)):s!==""?console.warn("THREE.WebGLProgram: Program Info Log:",s):o!==""&&p!==""||(A=!1),A&&(this.diagnostics={runnable:M,programLog:s,vertexShader:{log:o,prefix:g},fragmentShader:{log:p,prefix:v}})}i.deleteShader(x),i.deleteShader(_);let T;this.getUniforms=function(){return T===void 0&&(T=new Jr(i,m)),T};let b;return this.getAttributes=function(){return b===void 0&&(b=function(M,A){const N={};var I=M.getProgramParameter(A,35721);for(let D=0;D<I;D++){var C=M.getActiveAttrib(A,D),O=C.name;let F=1;C.type===35674&&(F=2),C.type===35675&&(F=3),C.type===35676&&(F=4),N[O]={type:C.type,location:M.getAttribLocation(A,O),locationSize:F}}return N}(i,m)),b},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=xm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=_,this}function Sm(n,e,t,r,i,a,s){const o=[],l=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.floatVertexTextures,p=i.maxVertexUniforms,c=i.vertexTextures;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function g(v){let y;return y=v&&v.isTexture?v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),v.texture.encoding):pt,l&&v&&v.isTexture&&v.format===lt&&v.type===ar&&v.encoding===Ut&&(y=pt),y}return{getParameters:function(v,y,x,_,T){var b=_.fog,M=v.isMeshStandardMaterial?_.environment:null,A=(v.isMeshStandardMaterial?t:e).get(v.envMap||M),_=f[v.type],M=T.isSkinnedMesh?(C=(O=T).skeleton.bones,u?1024:(O=p,O=Math.floor((O-20)/4),(O=Math.min(O,C.length))<C.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+C.length+" bones. This GPU supports "+O+"."),0):O)):0;v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let N,I;I=_?(D=pr[_],N=D.vertexShader,D.fragmentShader):(N=v.vertexShader,v.fragmentShader);var C=n.getRenderTarget(),O=0<v.alphaTest,D=0<v.clearcoat;return{isWebGL2:l,shaderID:_,shaderName:v.type,vertexShader:N,fragmentShader:I,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:c,outputEncoding:C!==null?g(C.texture):n.outputEncoding,map:!!v.map,mapEncoding:g(v.map),matcap:!!v.matcap,matcapEncoding:g(v.matcap),envMap:!!A,envMapMode:A&&A.mapping,envMapEncoding:g(A),envMapCubeUV:!!A&&(A.mapping===Fa||A.mapping===Vs),lightMap:!!v.lightMap,lightMapEncoding:g(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:g(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ef,tangentSpaceNormalMap:v.normalMapType===_i,clearcoat:D,clearcoatMap:D&&!!v.clearcoatMap,clearcoatRoughnessMap:D&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:D&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularTintMap:!!v.specularTintMap,specularTintMapEncoding:g(v.specularTintMap),alphaMap:!!v.alphaMap,alphaTest:O,gradientMap:!!v.gradientMap,sheen:0<v.sheen,transmission:0<v.transmission,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!T.geometry&&!!T.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.geometry&&!!T.geometry.attributes.color&&T.geometry.attributes.color.itemSize===4,vertexUvs:!!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatMap||v.clearcoatRoughnessMap||v.clearcoatNormalMap||v.displacementMap||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularTintMap),uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||0<v.transmission||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularTintMap||!v.displacementMap),fog:!!b,useFog:v.fog,fogExp2:b&&b.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:T.isSkinnedMesh===!0&&0<M,maxBones:M,useVertexTexture:u,morphTargets:!!T.geometry&&!!T.geometry.morphAttributes.position,morphNormals:!!T.geometry&&!!T.geometry.morphAttributes.normal,morphTargetsCount:T.geometry&&T.geometry.morphAttributes.position?T.geometry.morphAttributes.position.length:0,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&0<x.length,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:vi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gi,flipSided:v.side===st,depthPacking:v.depthPacking!==void 0&&v.depthPacking,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}},getProgramCacheKey:function(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.fragmentShader),y.push(v.vertexShader)),v.defines!==void 0)for(const x in v.defines)y.push(x),y.push(v.defines[x]);if(v.isRawShaderMaterial===!1){for(let x=0;x<m.length;x++)y.push(v[m[x]]);y.push(n.outputEncoding),y.push(n.gammaFactor)}return y.push(v.customProgramCacheKey),y.join()},getUniforms:function(v){var y=f[v.type];let x;return x=y?(y=pr[y],es.clone(y.uniforms)):v.uniforms,x},acquireProgram:function(v,y){let x;for(let T=0,b=o.length;T<b;T++){var _=o[T];if(_.cacheKey===y){x=_,++x.usedTimes;break}}return x===void 0&&(x=new wm(n,y,v,a),o.push(x)),x},releaseProgram:function(v){var y;--v.usedTimes==0&&(y=o.indexOf(v),o[y]=o[o.length-1],o.pop(),v.destroy())},programs:o}}function Am(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,r){n.get(e)[t]=r},dispose:function(){n=new WeakMap}}}function Em(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mu(n){const e=[];let t=0;const r=[],i=[],a=[],s={id:-1};function o(l,h,u,p,c,d){let f=e[t];var m=n.get(u);return f===void 0?(f={id:l.id,object:l,geometry:h,material:u,program:m.program||s,groupOrder:p,renderOrder:l.renderOrder,z:c,group:d},e[t]=f):(f.id=l.id,f.object=l,f.geometry=h,f.material=u,f.program=m.program||s,f.groupOrder=p,f.renderOrder=l.renderOrder,f.z=c,f.group=d),t++,f}return{opaque:r,transmissive:i,transparent:a,init:function(){t=0,r.length=0,i.length=0,a.length=0},push:function(l,h,u,p,c,d){d=o(l,h,u,p,c,d),(0<u.transmission?i:u.transparent===!0?a:r).push(d)},unshift:function(l,h,u,p,c,d){d=o(l,h,u,p,c,d),(0<u.transmission?i:u.transparent===!0?a:r).unshift(d)},finish:function(){for(let l=t,h=e.length;l<h;l++){const u=e[l];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.program=null,u.group=null}},sort:function(l,h){1<r.length&&r.sort(l||Em),1<i.length&&i.sort(h||fu),1<a.length&&a.sort(h||fu)}}}function Lm(n){let e=new WeakMap;return{get:function(t,r){let i;return e.has(t)===!1?(i=new mu(n),e.set(t,[i])):r>=e.get(t).length?(i=new mu(n),e.get(t).push(i)):i=e.get(t)[r],i},dispose:function(){e=new WeakMap}}}function Pm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new se};break;case"SpotLight":t={position:new R,direction:new R,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new R,halfWidth:new R,halfHeight:new R}}return n[e.id]=t,t}}}let Rm=0;function Fm(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Cm(n,e){const t=new Pm,r=function(){const l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let u;switch(h.type){case"DirectionalLight":case"SpotLight":u={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":u={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=u,u}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new R);const a=new R,s=new ce,o=new ce;return{setup:function(l,h){let u=0,p=0,c=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,f=0,m=0,g=0,v=0,y=0,x=0,_=0;l.sort(Fm);var T=h!==!0?Math.PI:1;for(let D=0,F=l.length;D<F;D++){var b=l[D],M=b.color,A=b.intensity,N=b.distance,I=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=M.r*A*T,p+=M.g*A*T,c+=M.b*A*T;else if(b.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(b.sh.coefficients[U],A);else if(b.isDirectionalLight){const U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){var C=b.shadow;const H=r.get(b);H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=b.shadow.matrix,y++}i.directional[d]=U,d++}else if(b.isSpotLight){const U=t.get(b);if(U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(M).multiplyScalar(A*T),U.distance=N,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,b.castShadow){N=b.shadow;const H=r.get(b);H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.spotShadow[m]=H,i.spotShadowMap[m]=I,i.spotShadowMatrix[m]=b.shadow.matrix,_++}i.spot[m]=U,m++}else if(b.isRectAreaLight){const U=t.get(b);U.color.copy(M).multiplyScalar(A),U.halfWidth.set(.5*b.width,0,0),U.halfHeight.set(0,.5*b.height,0),i.rectArea[g]=U,g++}else if(b.isPointLight){const U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity*T),U.distance=b.distance,U.decay=b.decay,b.castShadow){M=b.shadow;const H=r.get(b);H.shadowBias=M.bias,H.shadowNormalBias=M.normalBias,H.shadowRadius=M.radius,H.shadowMapSize=M.mapSize,H.shadowCameraNear=M.camera.near,H.shadowCameraFar=M.camera.far,i.pointShadow[f]=H,i.pointShadowMap[f]=I,i.pointShadowMatrix[f]=b.shadow.matrix,x++}i.point[f]=U,f++}else if(b.isHemisphereLight){const U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(A*T),U.groundColor.copy(b.groundColor).multiplyScalar(A*T),i.hemi[v]=U,v++}}0<g&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=c;const O=i.hash;O.directionalLength===d&&O.pointLength===f&&O.spotLength===m&&O.rectAreaLength===g&&O.hemiLength===v&&O.numDirectionalShadows===y&&O.numPointShadows===x&&O.numSpotShadows===_||(i.directional.length=d,i.spot.length=m,i.rectArea.length=g,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=_,O.directionalLength=d,O.pointLength=f,O.spotLength=m,O.rectAreaLength=g,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=x,O.numSpotShadows=_,i.version=Rm++)},setupView:function(l,h){let u=0,p=0,c=0,d=0,f=0;var m=h.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){var g=l[v];if(g.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),u++}else if(g.isSpotLight){const x=i.spot[c];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),c++}else if(g.isRectAreaLight){const x=i.rectArea[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(.5*g.width,0,0),x.halfHeight.set(0,.5*g.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),d++}else if(g.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),p++}else if(g.isHemisphereLight){const x=i.hemi[f];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),x.direction.normalize(),f++}}},state:i}}function gu(n,e){const t=new Cm(n,e),r=[],i=[];return{init:function(){r.length=0,i.length=0},state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:function(a){t.setup(r,a)},setupLightsView:function(a){t.setupView(r,a)},pushLight:function(a){r.push(a)},pushShadow:function(a){i.push(a)}}}function Nm(n,e){let t=new WeakMap;return{get:function(r,i=0){let a;return t.has(r)===!1?(a=new gu(n,e),t.set(r,[a])):i>=t.get(r).length?(a=new gu(n,e),t.get(r).push(a)):a=t.get(r)[i],a},dispose:function(){t=new WeakMap}}}class vu extends ke{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}vu.prototype.isMeshDepthMaterial=!0;class xu extends ke{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}xu.prototype.isMeshDistanceMaterial=!0;const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _u(n,e,t){let r=new is;const i=new Z,a=new Z,s=new De,o=new vu({depthPacking:$p}),l=new xu,h={},u=t.maxTextureSize,p={0:st,1:Hi,2:gi},c=new Bt({uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4},samples:{value:8}},vertexShader:Im,fragmentShader:Dm}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const f=new Ue;f.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qe(f,c),g=this;function v(y,x,_,T,b,M,A){let N=null;var I=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N=I!==void 0?I:T.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&0<_.alphaTest){y=N.uuid,I=_.uuid;let C=h[y];C===void 0&&(C={},h[y]=C);let O=C[I];O===void 0&&(O=N.clone(),C[I]=O),N=O}return N.visible=_.visible,N.wireframe=_.wireframe,A===In?N.side=_.shadowSide!==null?_.shadowSide:_.side:N.side=_.shadowSide!==null?_.shadowSide:p[_.side],N.alphaMap=_.alphaMap,N.alphaTest=_.alphaTest,N.clipShadows=_.clipShadows,N.clippingPlanes=_.clippingPlanes,N.clipIntersection=_.clipIntersection,N.displacementMap=_.displacementMap,N.displacementScale=_.displacementScale,N.displacementBias=_.displacementBias,N.wireframeLinewidth=_.wireframeLinewidth,N.linewidth=_.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(T.matrixWorld),N.nearDistance=b,N.farDistance=M),N}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl,this.render=function(y,x,_){if(g.enabled!==!1&&(g.autoUpdate!==!1||g.needsUpdate!==!1)&&y.length!==0){var T=n.getRenderTarget(),b=n.getActiveCubeFace(),M=n.getActiveMipmapLevel();const F=n.state;F.setBlending(Gr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let U=0,H=y.length;U<H;U++){var A=y[U];const z=A.shadow;if(z!==void 0){if(z.autoUpdate!==!1||z.needsUpdate!==!1){i.copy(z.mapSize);var N,I,C=z.getFrameExtents();i.multiply(C),a.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/C.x),i.x=a.x*C.x,z.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/C.y),i.y=a.y*C.y,z.mapSize.y=a.y)),z.map!==null||z.isPointLightShadow||this.type!==In||(N={minFilter:Ye,magFilter:Ye,format:lt},z.map=new Rt(i.x,i.y,N),z.map.texture.name=A.name+".shadowMap",z.mapPass=new Rt(i.x,i.y,N),z.camera.updateProjectionMatrix()),z.map===null&&(I={minFilter:$e,magFilter:$e,format:lt},z.map=new Rt(i.x,i.y,I),z.map.texture.name=A.name+".shadowMap",z.camera.updateProjectionMatrix()),n.setRenderTarget(z.map),n.clear();var O=z.getViewportCount();for(let W=0;W<O;W++){var D=z.getViewport(W);s.set(a.x*D.x,a.y*D.y,a.x*D.z,a.y*D.w),F.viewport(s),z.updateMatrices(A,W),r=z.getFrustum(),function ee(q,Q,S,L,k){if(q.visible===!1)return;if(q.layers.test(Q.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&k===In)&&(!q.frustumCulled||r.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,q.matrixWorld);const K=e.update(q),oe=q.material;if(Array.isArray(oe)){const P=K.groups;for(let V=0,B=P.length;V<B;V++){const re=P[V],$=oe[re.materialIndex];if($&&$.visible){const ue=v(q,K,$,L,S.near,S.far,k);n.renderBufferDirect(S,null,K,ue,q,re)}}}else if(oe.visible){const P=v(q,K,oe,L,S.near,S.far,k);n.renderBufferDirect(S,null,K,P,q,null)}}const w=q.children;for(let K=0,oe=w.length;K<oe;K++)ee(w[K],Q,S,L,k)}(x,_,z.camera,A,this.type)}z.isPointLightShadow||this.type!==In||(C=z,N=_,I=void 0,I=e.update(m),c.uniforms.shadow_pass.value=C.map.texture,c.uniforms.resolution.value=C.mapSize,c.uniforms.radius.value=C.radius,c.uniforms.samples.value=C.blurSamples,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,I,c,m,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,d.uniforms.samples.value=C.blurSamples,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,I,d,m,null)),z.needsUpdate=!1}}else console.warn("THREE.WebGLShadowMap:",A,"has no shadow.")}g.needsUpdate=!1,n.setRenderTarget(T,b,M)}}}function Um(n,e,t){const r=t.isWebGL2,i=new function(){let P=!1;const V=new De;let B=null;const re=new De(0,0,0,0);return{setMask:function($){B===$||P||(n.colorMask($,$,$,$),B=$)},setLocked:function($){P=$},setClear:function($,ue,be,de,Ne){Ne===!0&&($*=de,ue*=de,be*=de),V.set($,ue,be,de),re.equals(V)===!1&&(n.clearColor($,ue,be,de),re.copy(V))},reset:function(){P=!1,B=null,re.set(-1,0,0,0)}}},a=new function(){let P=!1,V=null,B=null,re=null;return{setTest:function($){($?q:Q)(2929)},setMask:function($){V===$||P||(n.depthMask($),V=$)},setFunc:function($){if(B!==$){if($)switch($){case tp:n.depthFunc(512);break;case rp:n.depthFunc(519);break;case ip:n.depthFunc(513);break;case Hs:n.depthFunc(515);break;case np:n.depthFunc(514);break;case ap:n.depthFunc(518);break;case sp:n.depthFunc(516);break;case op:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);B=$}},setLocked:function($){P=$},setClear:function($){re!==$&&(n.clearDepth($),re=$)},reset:function(){P=!1,V=null,B=null,re=null}}},s=new function(){let P=!1,V=null,B=null,re=null,$=null,ue=null,be=null,de=null,Ne=null;return{setTest:function(Fe){P||(Fe?q:Q)(2960)},setMask:function(Fe){V===Fe||P||(n.stencilMask(Fe),V=Fe)},setFunc:function(Fe,Me,fe){B===Fe&&re===Me&&$===fe||(n.stencilFunc(Fe,Me,fe),B=Fe,re=Me,$=fe)},setOp:function(Fe,Me,fe){ue===Fe&&be===Me&&de===fe||(n.stencilOp(Fe,Me,fe),ue=Fe,be=Me,de=fe)},setLocked:function(Fe){P=Fe},setClear:function(Fe){Ne!==Fe&&(n.clearStencil(Fe),Ne=Fe)},reset:function(){P=!1,V=null,B=null,re=null,$=null,ue=null,be=null,de=null,Ne=null}}};let o={},l=null,h={},u=null,p=!1,c=null,d=null,f=null,m=null,g=null,v=null,y=null,x=!1,_=null,T=null,b=null,M=null,A=null;const N=n.getParameter(35661);let I=!1,C=0;const O=n.getParameter(7938);O.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=1<=C):O.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=2<=C);let D=null,F={};var U=n.getParameter(3088),t=n.getParameter(2978);const H=new De().fromArray(U),z=new De().fromArray(t);function W(P,V,B){var re=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let ue=0;ue<B;ue++)n.texImage2D(V+ue,0,6408,1,1,0,6408,5121,re);return $}const ee={};function q(P){o[P]!==!0&&(n.enable(P),o[P]=!0)}function Q(P){o[P]!==!1&&(n.disable(P),o[P]=!1)}ee[3553]=W(3553,3553,1),ee[34067]=W(34067,34069,6),i.setClear(0,0,0,1),a.setClear(1),s.setClear(0),q(2929),a.setFunc(Hs),X(!1),w(_t),q(2884),k(Gr);const S={[Gi]:32774,[Wd]:32778,[Xd]:32779};r?(S[$l]=32775,S[eh]=32776):(e=e.get("EXT_blend_minmax"))!==null&&(S[$l]=e.MIN_EXT,S[eh]=e.MAX_EXT);const L={[Yd]:0,[jd]:1,[Qd]:768,[th]:770,[ep]:776,[Kd]:774,[Zd]:772,[qd]:769,[rh]:771,[$d]:775,[Jd]:773};function k(P,V,B,re,$,ue,be,de){if(P!==Gr){if(p===!1&&(q(3042),p=!0),P===Vd)$=$||V,ue=ue||B,be=be||re,V===d&&$===g||(n.blendEquationSeparate(S[V],S[$]),d=V,g=$),B===f&&re===m&&ue===v&&be===y||(n.blendFuncSeparate(L[B],L[re],L[ue],L[be]),f=B,m=re,v=ue,y=be),c=P,x=null;else if(P!==c||de!==x){if(d===Gi&&g===Gi||(n.blendEquation(32774),d=Gi,g=Gi),de)switch(P){case Dn:n.blendFuncSeparate(1,771,1,771);break;case Bs:n.blendFunc(1,1);break;case Jl:n.blendFuncSeparate(0,0,769,771);break;case Kl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}else switch(P){case Dn:n.blendFuncSeparate(770,771,1,771);break;case Bs:n.blendFunc(770,1);break;case Jl:n.blendFunc(0,769);break;case Kl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P)}f=null,m=null,v=null,y=null,c=P,x=de}}else p===!0&&(Q(3042),p=!1)}function X(P){_!==P&&(P?n.frontFace(2304):n.frontFace(2305),_=P)}function w(P){P!==xt?(q(2884),P!==T&&(P===_t?n.cullFace(1029):P===kd?n.cullFace(1028):n.cullFace(1032))):Q(2884),T=P}function K(P,V,B){P?(q(32823),M===V&&A===B||(n.polygonOffset(V,B),M=V,A=B)):Q(32823)}function oe(P){P===void 0&&(P=33984+N-1),D!==P&&(n.activeTexture(P),D=P)}return{buffers:{color:i,depth:a,stencil:s},enable:q,disable:Q,bindFramebuffer:function(P,V){return V===null&&l!==null&&(V=l),h[P]!==V&&(n.bindFramebuffer(P,V),h[P]=V,r&&(P===36009&&(h[36160]=V),P===36160&&(h[36009]=V)),!0)},bindXRFramebuffer:function(P){P!==l&&(n.bindFramebuffer(36160,P),l=P)},useProgram:function(P){return u!==P&&(n.useProgram(P),u=P,!0)},setBlending:k,setMaterial:function(P,V){(P.side===gi?Q:q)(2884);let B=P.side===st;V&&(B=!B),X(B),P.blending===Dn&&P.transparent===!1?k(Gr):k(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),i.setMask(P.colorWrite),V=P.stencilWrite,s.setTest(V),V&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),K(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),(P.alphaToCoverage===!0?q:Q)(32926)},setFlipSided:X,setCullFace:w,setLineWidth:function(P){P!==b&&(I&&n.lineWidth(P),b=P)},setPolygonOffset:K,setScissorTest:function(P){(P?q:Q)(3089)},activeTexture:oe,bindTexture:function(P,V){D===null&&oe();let B=F[D];B===void 0&&(B={type:void 0,texture:void 0},F[D]=B),B.type===P&&B.texture===V||(n.bindTexture(P,V||ee[P]),B.type=P,B.texture=V)},unbindTexture:function(){const P=F[D];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}},scissor:function(P){H.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),H.copy(P))},viewport:function(P){z.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),z.copy(P))},reset:function(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),r===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},D=null,F={},l=null,h={},u=null,p=!1,c=null,d=null,f=null,m=null,g=null,v=null,y=null,x=!1,_=null,T=null,b=null,M=null,A=null,H.set(0,0,n.canvas.width,n.canvas.height),z.set(0,0,n.canvas.width,n.canvas.height),i.reset(),a.reset(),s.reset()}}}function Om(n,e,t,r,i,a,s){const o=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,u=i.maxTextureSize,p=i.maxSamples,c=new WeakMap;let d,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function m(S,L){return f?new OffscreenCanvas(S,L):Oa("canvas")}function g(S,L,k,X){let w=1;if((S.width>X||S.height>X)&&(w=X/Math.max(S.width,S.height)),w<1||L===!0){if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const K=L?_h:Math.floor;X=K(w*S.width),L=K(w*S.height),d===void 0&&(d=m(X,L));const oe=k?m(X,L):d;return oe.width=X,oe.height=L,oe.getContext("2d").drawImage(S,0,0,X,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+X+"x"+L+")."),oe}return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S}return S}function v(S){return js(S.width)&&js(S.height)}function y(S,L){return S.generateMipmaps&&L&&S.minFilter!==$e&&S.minFilter!==Ye}function x(S,L,k,X,w=1){n.generateMipmap(S);const K=r.get(L);K.__maxMipLevel=Math.log2(Math.max(k,X,w))}function _(S,L,k,X){if(o===!1)return L;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let w=L;return L===6403&&(k===5126&&(w=33326),k===5131&&(w=33325),k===5121&&(w=33321)),L===6407&&(k===5126&&(w=34837),k===5131&&(w=34843),k===5121&&(w=32849)),L===6408&&(k===5126&&(w=34836),k===5131&&(w=34842),k===5121&&(w=X===Ut?35907:32856)),w!==33325&&w!==33326&&w!==34842&&w!==34836||e.get("EXT_color_buffer_float"),w}function T(S){return S===$e||S===Ws||S===Xs?9728:9729}function b(S){const L=S.target;var k;L.removeEventListener("dispose",b),k=L,(S=r.get(k)).__webglInit!==void 0&&(n.deleteTexture(S.__webglTexture),r.remove(k)),L.isVideoTexture&&c.delete(L),s.memory.textures--}function M(S){const L=S.target;L.removeEventListener("dispose",M),function(k){var X=k.texture,w=r.get(k),K=r.get(X);if(k){if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),s.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let P=0;P<6;P++)n.deleteFramebuffer(w.__webglFramebuffer[P]),w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[P]);else n.deleteFramebuffer(w.__webglFramebuffer),w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer&&n.deleteRenderbuffer(w.__webglColorRenderbuffer),w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer);if(k.isWebGLMultipleRenderTargets)for(let P=0,V=X.length;P<V;P++){var oe=r.get(X[P]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),s.memory.textures--),r.remove(X[P])}r.remove(X),r.remove(k)}}(L)}let A=0;function N(S,L){var k,X=r.get(S);if(S.isVideoTexture&&(w=S,k=s.render.frame,c.get(w)!==k&&(c.set(w,k),w.update())),0<S.version&&X.__version!==S.version){var w=S.image;if(w===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(w.complete!==!1)return void U(X,S,L);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+L),t.bindTexture(3553,X.__webglTexture)}function I(S,L){var k=r.get(S);0<S.version&&k.__version!==S.version?function(X,w,K){if(w.image.length===6){F(X,w),t.activeTexture(33984+K),t.bindTexture(34067,X.__webglTexture),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);var oe=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),P=w.image[0]&&w.image[0].isDataTexture;const Ne=[];for(let fe=0;fe<6;fe++)Ne[fe]=oe||P?P?w.image[fe].image:w.image[fe]:g(w.image[fe],!1,!0,h);var V=Ne[0],K=v(V)||o,B=a.convert(w.format),re=a.convert(w.type),$=_(w.internalFormat,B,re,w.encoding);D(34067,w,K);let Me;if(oe){for(let fe=0;fe<6;fe++){Me=Ne[fe].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){var ue=Me[Ce];w.format!==lt&&w.format!==wr?B!==null?t.compressedTexImage2D(34069+fe,Ce,$,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+fe,Ce,$,ue.width,ue.height,0,B,re,ue.data)}}X.__maxMipLevel=Me.length-1}else{Me=w.mipmaps;for(let fe=0;fe<6;fe++)if(P){t.texImage2D(34069+fe,0,$,Ne[fe].width,Ne[fe].height,0,B,re,Ne[fe].data);for(let Ce=0;Ce<Me.length;Ce++){var be=Me[Ce].image[fe].image;t.texImage2D(34069+fe,Ce+1,$,be.width,be.height,0,B,re,be.data)}}else{t.texImage2D(34069+fe,0,$,B,re,Ne[fe]);for(let Ce=0;Ce<Me.length;Ce++){var de=Me[Ce];t.texImage2D(34069+fe,Ce+1,$,B,re,de.image[fe])}}X.__maxMipLevel=Me.length}y(w,K)&&x(34067,w,V.width,V.height),X.__version=w.version,w.onUpdate&&w.onUpdate(w)}}(k,S,L):(t.activeTexture(33984+L),t.bindTexture(34067,k.__webglTexture))}const C={[ki]:10497,[yt]:33071,[Ca]:33648},O={[$e]:9728,[Ws]:9984,[Xs]:9986,[Ye]:9729,[ih]:9985,[xi]:9987};function D(S,L,k){k?(n.texParameteri(S,10242,C[L.wrapS]),n.texParameteri(S,10243,C[L.wrapT]),S!==32879&&S!==35866||n.texParameteri(S,32882,C[L.wrapR]),n.texParameteri(S,10240,O[L.magFilter]),n.texParameteri(S,10241,O[L.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),S!==32879&&S!==35866||n.texParameteri(S,32882,33071),L.wrapS===yt&&L.wrapT===yt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,T(L.magFilter)),n.texParameteri(S,10241,T(L.minFilter)),L.minFilter!==$e&&L.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0&&(k=e.get("EXT_texture_filter_anisotropic"),L.type===Qt&&e.has("OES_texture_float_linear")===!1||o===!1&&L.type===dr&&e.has("OES_texture_half_float_linear")===!1||(1<L.anisotropy||r.get(L).__currentAnisotropy)&&(n.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),r.get(L).__currentAnisotropy=L.anisotropy))}function F(S,L){S.__webglInit===void 0&&(S.__webglInit=!0,L.addEventListener("dispose",b),S.__webglTexture=n.createTexture(),s.memory.textures++)}function U(S,L,k){let X=3553;L.isDataTexture2DArray&&(X=35866),L.isDataTexture3D&&(X=32879),F(S,L),t.activeTexture(33984+k),t.bindTexture(X,S.__webglTexture),n.pixelStorei(37440,L.flipY),n.pixelStorei(37441,L.premultiplyAlpha),n.pixelStorei(3317,L.unpackAlignment),n.pixelStorei(37443,0);var k=(w=L,!o&&(w.wrapS!==yt||w.wrapT!==yt||w.minFilter!==$e&&w.minFilter!==Ye)&&v(L.image)===!1),w=g(L.image,k,!1,u),k=v(w)||o,K=a.convert(L.format);let oe=a.convert(L.type),P=_(L.internalFormat,K,oe,L.encoding);D(X,L,k);let V;var B=L.mipmaps;if(L.isDepthTexture)P=6402,o?P=L.type===Qt?36012:L.type===Ia?33190:L.type===Un?35056:33189:L.type===Qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Vi&&P===6402&&L.type!==Na&&L.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Na,oe=a.convert(L.type)),L.format===On&&P===6402&&(P=34041,L.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Un,oe=a.convert(L.type))),t.texImage2D(3553,0,P,w.width,w.height,0,K,oe,null);else if(L.isDataTexture)if(0<B.length&&k){for(let re=0,$=B.length;re<$;re++)V=B[re],t.texImage2D(3553,re,P,V.width,V.height,0,K,oe,V.data);L.generateMipmaps=!1,S.__maxMipLevel=B.length-1}else t.texImage2D(3553,0,P,w.width,w.height,0,K,oe,w.data),S.__maxMipLevel=0;else if(L.isCompressedTexture){for(let re=0,$=B.length;re<$;re++)V=B[re],L.format!==lt&&L.format!==wr?K!==null?t.compressedTexImage2D(3553,re,P,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,re,P,V.width,V.height,0,K,oe,V.data);S.__maxMipLevel=B.length-1}else if(L.isDataTexture2DArray)t.texImage3D(35866,0,P,w.width,w.height,w.depth,0,K,oe,w.data),S.__maxMipLevel=0;else if(L.isDataTexture3D)t.texImage3D(32879,0,P,w.width,w.height,w.depth,0,K,oe,w.data),S.__maxMipLevel=0;else if(0<B.length&&k){for(let re=0,$=B.length;re<$;re++)V=B[re],t.texImage2D(3553,re,P,K,oe,V);L.generateMipmaps=!1,S.__maxMipLevel=B.length-1}else t.texImage2D(3553,0,P,K,oe,w),S.__maxMipLevel=0;y(L,k)&&x(X,L,w.width,w.height),S.__version=L.version,L.onUpdate&&L.onUpdate(L)}function H(S,L,k,X,w){var K=a.convert(k.format),oe=a.convert(k.type),P=_(k.internalFormat,K,oe,k.encoding);w===32879||w===35866?t.texImage3D(w,0,P,L.width,L.height,L.depth,0,K,oe,null):t.texImage2D(w,0,P,L.width,L.height,0,K,oe,null),t.bindFramebuffer(36160,S),n.framebufferTexture2D(36160,X,w,r.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function z(S,L,k){if(n.bindRenderbuffer(36161,S),L.depthBuffer&&!L.stencilBuffer){let K=33189;k?((w=L.depthTexture)&&w.isDepthTexture&&(w.type===Qt?K=36012:w.type===Ia&&(K=33190)),w=ee(L),n.renderbufferStorageMultisample(36161,w,K,L.width,L.height)):n.renderbufferStorage(36161,K,L.width,L.height),n.framebufferRenderbuffer(36160,36096,36161,S)}else{var X,w;L.depthBuffer&&L.stencilBuffer?(k?(X=ee(L),n.renderbufferStorageMultisample(36161,X,35056,L.width,L.height)):n.renderbufferStorage(36161,34041,L.width,L.height),n.framebufferRenderbuffer(36160,33306,36161,S)):(w=L.isWebGLMultipleRenderTargets===!0?L.texture[0]:L.texture,X=a.convert(w.format),S=a.convert(w.type),w=_(w.internalFormat,X,S,w.encoding),k?(k=ee(L),n.renderbufferStorageMultisample(36161,k,w,L.width,L.height)):n.renderbufferStorage(36161,w,L.width,L.height))}n.bindRenderbuffer(36161,null)}function W(S){const L=r.get(S);var k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,X),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(r.get(w.depthTexture).__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0),X=r.get(w.depthTexture).__webglTexture,w.depthTexture.format===Vi)n.framebufferTexture2D(36160,36096,3553,X,0);else{if(w.depthTexture.format!==On)throw new Error("Unknown depthTexture format");n.framebufferTexture2D(36160,33306,3553,X,0)}})(L.__webglFramebuffer,S)}else if(k){L.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,L.__webglFramebuffer[X]),L.__webglDepthbuffer[X]=n.createRenderbuffer(),z(L.__webglDepthbuffer[X],S,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),z(L.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ee(S){return o&&S.isWebGLMultisampleRenderTarget?Math.min(p,S.samples):0}let q=!1,Q=!1;this.allocateTextureUnit=function(){var S=A;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),A+=1,S},this.resetTextureUnits=function(){A=0},this.setTexture2D=N,this.setTexture2DArray=function(S,L){var k=r.get(S);0<S.version&&k.__version!==S.version?U(k,S,L):(t.activeTexture(33984+L),t.bindTexture(35866,k.__webglTexture))},this.setTexture3D=function(S,L){var k=r.get(S);0<S.version&&k.__version!==S.version?U(k,S,L):(t.activeTexture(33984+L),t.bindTexture(32879,k.__webglTexture))},this.setTextureCube=I,this.setupRenderTarget=function(S){const L=S.texture,k=r.get(S),X=r.get(L);S.addEventListener("dispose",M),S.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture=n.createTexture(),X.__version=L.version,s.memory.textures++);var w,K=S.isWebGLCubeRenderTarget===!0,oe=S.isWebGLMultipleRenderTargets===!0,P=S.isWebGLMultisampleRenderTarget===!0,V=L.isDataTexture3D||L.isDataTexture2DArray,B=v(S)||o;if(!o||L.format!==wr||L.type!==Qt&&L.type!==dr||(L.format=lt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){k.__webglFramebuffer=[];for(let de=0;de<6;de++)k.__webglFramebuffer[de]=n.createFramebuffer()}else if(k.__webglFramebuffer=n.createFramebuffer(),oe)if(i.drawBuffers){var re=S.texture;for(let de=0,Ne=re.length;de<Ne;de++){const Fe=r.get(re[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else P&&(o?(k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,k.__webglColorRenderbuffer),w=a.convert(L.format),P=a.convert(L.type),w=_(L.internalFormat,w,P,L.encoding),P=ee(S),n.renderbufferStorageMultisample(36161,P,w,S.width,S.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),z(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)):console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."));if(K){t.bindTexture(34067,X.__webglTexture),D(34067,L,B);for(let de=0;de<6;de++)H(k.__webglFramebuffer[de],S,L,36064,34069+de);y(L,B)&&x(34067,L,S.width,S.height),t.unbindTexture()}else if(oe){var $=S.texture;for(let de=0,Ne=$.length;de<Ne;de++){var ue=$[de],be=r.get(ue);t.bindTexture(3553,be.__webglTexture),D(3553,ue,B),H(k.__webglFramebuffer,S,ue,36064+de,3553),y(ue,B)&&x(3553,ue,S.width,S.height)}t.unbindTexture()}else{let de=3553;V&&(o?(V=L.isDataTexture3D,de=V?32879:35866):console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(de,X.__webglTexture),D(de,L,B),H(k.__webglFramebuffer,S,L,36064,de),y(L,B)&&x(de,L,S.width,S.height,S.depth),t.unbindTexture()}S.depthBuffer&&W(S)},this.updateRenderTargetMipmap=function(S){var L=v(S)||o,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let oe=0,P=k.length;oe<P;oe++){var X,w,K=k[oe];y(K,L)&&(X=S.isWebGLCubeRenderTarget?34067:3553,w=r.get(K).__webglTexture,t.bindTexture(X,w),x(X,K,S.width,S.height),t.unbindTexture())}},this.updateMultisampleRenderTarget=function(S){if(S.isWebGLMultisampleRenderTarget)if(o){var L=S.width,k=S.height;let X=16384;S.depthBuffer&&(X|=256),S.stencilBuffer&&(X|=1024),S=r.get(S),t.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,S.__webglFramebuffer),n.blitFramebuffer(0,0,L,k,0,0,L,k,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(S,L){S&&S.isWebGLRenderTarget&&(q===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),q=!0),S=S.texture),N(S,L)},this.safeSetTextureCube=function(S,L){S&&S.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),S=S.texture),I(S,L)}}function zm(n,e,t){const r=t.isWebGL2;return{convert:function(i){let a;if(i===ar)return 5121;if(i===cp)return 32819;if(i===dp)return 32820;if(i===pp)return 33635;if(i===lp)return 5120;if(i===hp)return 5122;if(i===Na)return 5123;if(i===up)return 5124;if(i===Ia)return 5125;if(i===Qt)return 5126;if(i===dr)return r?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===fp)return 6406;if(i===wr)return 6407;if(i===lt)return 6408;if(i===mp)return 6409;if(i===gp)return 6410;if(i===Vi)return 6402;if(i===On)return 34041;if(i===vp)return 6403;if(i===xp)return 36244;if(i===_p)return 33319;if(i===yp)return 33320;if(i===bp)return 36248;if(i===Mp)return 36249;if(i===ah||i===sh||i===oh||i===lh){if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===ah)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===hh||i===uh||i===ch||i===dh){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Tp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===ph||i===fh)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(i===ph)return a.COMPRESSED_RGB8_ETC2;if(i===fh)return a.COMPRESSED_RGBA8_ETC2_EAC}return i===wp||i===Sp||i===Ap||i===Ep||i===Lp||i===Pp||i===Rp||i===Fp||i===Cp||i===Np||i===Ip||i===Dp||i===Up||i===Op||i===Bp||i===Hp||i===Gp||i===kp||i===Vp||i===Wp||i===Xp||i===Yp||i===jp||i===Qp||i===qp||i===Zp||i===Jp||i===Kp?(a=e.get("WEBGL_compressed_texture_astc"),a!==null?i:null):i===zp?(a=e.get("EXT_texture_compression_bptc"),a!==null?i:null):i===Un?r?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class yu extends Mt{constructor(e=[]){super(),this.cameras=e}}yu.prototype.isArrayCamera=!0;class Kr extends Se{constructor(){super(),this.type="Group"}}Kr.prototype.isGroup=!0;const Bm={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bm))),h&&e.hand){s=!0;for(const d of e.hand.values()){var u=t.getJointPose(d,r);if(h.joints[d.jointName]===void 0){const m=new Kr;m.matrixAutoUpdate=!1,m.visible=!1,h.joints[d.jointName]=m,h.add(m)}const f=h.joints[d.jointName];u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=u.radius),f.visible=u!==null}const c=h.joints["index-finger-tip"];var p=h.joints["thumb-tip"],p=c.position.distanceTo(p.position);h.inputState.pinching&&.025<p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=.015&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),h!==null&&(h.visible=s!==null),this}}class Hm extends kr{constructor(e,t){super();const r=this,i=e.state;let a=null,s=1,o=null,l="local-floor",h=null,u=null,p=null,c=null,d=null,f=!1,m=null,g=null,v=null,y=null,x=null,_=null;const T=[],b=new Map,M=new Mt;M.layers.enable(1),M.viewport=new De;const A=new Mt;A.layers.enable(2),A.viewport=new De;const N=[M,A],I=new yu;I.layers.enable(1),I.layers.enable(2);let C=null,O=null;function D(Q){const S=b.get(Q.inputSource);S&&S.dispatchEvent({type:Q.type,data:Q.inputSource})}function F(){b.forEach(function(Q,S){Q.disconnect(S)}),b.clear(),C=null,O=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),p&&t.deleteFramebuffer(p),m&&t.deleteFramebuffer(m),g&&t.deleteRenderbuffer(g),v&&t.deleteRenderbuffer(v),p=null,m=null,g=null,v=null,d=null,c=null,u=null,a=null,q.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}function U(Q){var S=a.inputSources;for(let X=0;X<T.length;X++)b.set(S[X],T[X]);for(let X=0;X<Q.removed.length;X++){var L=Q.removed[X];const w=b.get(L);w&&(w.dispatchEvent({type:"disconnected",data:L}),b.delete(L))}for(let X=0;X<Q.added.length;X++){var k=Q.added[X];const w=b.get(k);w&&w.dispatchEvent({type:"connected",data:k})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let S=T[Q];return S===void 0&&(S=new Lo,T[Q]=S),S.getTargetRaySpace()},this.getControllerGrip=function(Q){let S=T[Q];return S===void 0&&(S=new Lo,T[Q]=S),S.getGripSpace()},this.getHand=function(Q){let S=T[Q];return S===void 0&&(S=new Lo,T[Q]=S),S.getHandSpace()},this.setFramebufferScaleFactor=function(Q){s=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",F),a.addEventListener("inputsourceschange",U),Q=t.getContextAttributes(),Q.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0){var S={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,t,S),a.updateRenderState({baseLayer:d})}else if(t instanceof WebGLRenderingContext)S={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:s},d=new XRWebGLLayer(a,t,S),a.updateRenderState({layers:[d]});else{f=Q.antialias;let L=null;Q.depth&&(_=256,Q.stencil&&(_|=1024),x=Q.stencil?33306:36096,L=Q.stencil?35056:33190),Q={colorFormat:Q.alpha?32856:32849,depthFormat:L,scaleFactor:s},u=new XRWebGLBinding(a,t),c=u.createProjectionLayer(Q),p=t.createFramebuffer(),a.updateRenderState({layers:[c]}),f&&(m=t.createFramebuffer(),g=t.createRenderbuffer(),t.bindRenderbuffer(36161,g),t.renderbufferStorageMultisample(36161,4,32856,c.textureWidth,c.textureHeight),i.bindFramebuffer(36160,m),t.framebufferRenderbuffer(36160,36064,36161,g),t.bindRenderbuffer(36161,null),L!==null&&(v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,L,c.textureWidth,c.textureHeight),t.framebufferRenderbuffer(36160,x,36161,v),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await a.requestReferenceSpace(l),q.setContext(a),q.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};const H=new R,z=new R;function W(Q,S){S===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(S.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a!==null){I.near=A.near=M.near=Q.near,I.far=A.far=M.far=Q.far,C===I.near&&O===I.far||(a.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,O=I.far);var S=Q.parent,L=I.cameras;W(I,S);for(let X=0;X<L.length;X++)W(L[X],S);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),Q.position.copy(I.position),Q.quaternion.copy(I.quaternion),Q.scale.copy(I.scale),Q.matrix.copy(I.matrix),Q.matrixWorld.copy(I.matrixWorld);const k=Q.children;for(let X=0,w=k.length;X<w;X++)k[X].updateMatrixWorld(!0);L.length===2?function(X,w,K){H.setFromMatrixPosition(w.matrixWorld),z.setFromMatrixPosition(K.matrixWorld);var oe=H.distanceTo(z),P=w.projectionMatrix.elements,V=K.projectionMatrix.elements,B=P[14]/(P[10]-1),re=P[14]/(P[10]+1),$=(P[9]+1)/P[5],ue=(P[9]-1)/P[5],be=(P[8]-1)/P[0],K=(V[8]+1)/V[0],P=B*be,V=B*K,be=(K=oe/(K-be))*-be;w.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(K),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),B+=K,K=re+K,X.projectionMatrix.makePerspective(P-be,oe-be+V,$*re/K*B,ue*re/K*B,B,K)}(I,M,A):I.projectionMatrix.copy(M.projectionMatrix)}},this.getCamera=function(){return I},this.getFoveation=function(){return c!==null?c.fixedFoveation:d!==null?d.fixedFoveation:void 0},this.setFoveation=function(Q){c!==null&&(c.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let ee=null;const q=new Oh;q.setAnimationLoop(function(Q,S){if(h=S.getViewerPose(o),y=S,h!==null){var L=h.views;d!==null&&i.bindXRFramebuffer(d.framebuffer);let P=!1;L.length!==I.cameras.length&&(I.cameras.length=0,P=!0);for(let V=0;V<L.length;V++){var k,X=L[V];let B=null;B=d!==null?d.getViewport(X):(k=u.getViewSubImage(c,X),i.bindXRFramebuffer(p),k.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,k.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,k.colorTexture,0),k.viewport);const re=N[V];re.matrix.fromArray(X.transform.matrix),re.projectionMatrix.fromArray(X.projectionMatrix),re.viewport.set(B.x,B.y,B.width,B.height),V===0&&I.matrix.copy(re.matrix),P===!0&&I.cameras.push(re)}f&&(i.bindXRFramebuffer(m),_!==null&&t.clear(_))}var w,K=a.inputSources;for(let P=0;P<T.length;P++){const V=T[P];var oe=K[P];V.update(oe,S,o)}ee&&ee(Q,S),f&&(w=c.textureWidth,Q=c.textureHeight,i.bindFramebuffer(36008,m),i.bindFramebuffer(36009,p),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,w,Q,0,0,w,Q,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,m)),y=null}),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}function Gm(n){function e(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map),i.alphaMap&&(r.alphaMap.value=i.alphaMap),i.specularMap&&(r.specularMap.value=i.specularMap),0<i.alphaTest&&(r.alphaTest.value=i.alphaTest);var a=n.get(i).envMap;a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio,(a=n.get(a).__maxMipLevel)!==void 0&&(r.maxMipLevel.value=a)),i.lightMap&&(r.lightMap.value=i.lightMap,r.lightMapIntensity.value=i.lightMapIntensity),i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity);let s;i.map?s=i.map:i.specularMap?s=i.specularMap:i.displacementMap?s=i.displacementMap:i.normalMap?s=i.normalMap:i.bumpMap?s=i.bumpMap:i.roughnessMap?s=i.roughnessMap:i.metalnessMap?s=i.metalnessMap:i.alphaMap?s=i.alphaMap:i.emissiveMap?s=i.emissiveMap:i.clearcoatMap?s=i.clearcoatMap:i.clearcoatNormalMap?s=i.clearcoatNormalMap:i.clearcoatRoughnessMap?s=i.clearcoatRoughnessMap:i.specularIntensityMap?s=i.specularIntensityMap:i.specularTintMap?s=i.specularTintMap:i.transmissionMap?s=i.transmissionMap:i.thicknessMap&&(s=i.thicknessMap),s!==void 0&&(s.isWebGLRenderTarget&&(s=s.texture),s.matrixAutoUpdate===!0&&s.updateMatrix(),r.uvTransform.value.copy(s.matrix));let o;i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),r.uv2Transform.value.copy(o.matrix))}function t(r,i){r.roughness.value=i.roughness,r.metalness.value=i.metalness,i.roughnessMap&&(r.roughnessMap.value=i.roughnessMap),i.metalnessMap&&(r.metalnessMap.value=i.metalnessMap),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap),i.bumpMap&&(r.bumpMap.value=i.bumpMap,r.bumpScale.value=i.bumpScale,i.side===st&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,r.normalScale.value.copy(i.normalScale),i.side===st&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),n.get(i).envMap&&(r.envMapIntensity.value=i.envMapIntensity)}return{refreshFogUniforms:function(r,i){r.fogColor.value.copy(i.color),i.isFog?(r.fogNear.value=i.near,r.fogFar.value=i.far):i.isFogExp2&&(r.fogDensity.value=i.density)},refreshMaterialUniforms:function(r,i,a,s,o){var l,h,u,p;i.isMeshBasicMaterial?e(r,i):i.isMeshLambertMaterial?(e(r,i),u=r,(p=i).emissiveMap&&(u.emissiveMap.value=p.emissiveMap)):i.isMeshToonMaterial?(e(r,i),function(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap),d.bumpMap&&(c.bumpMap.value=d.bumpMap,c.bumpScale.value=d.bumpScale,d.side===st&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,c.normalScale.value.copy(d.normalScale),d.side===st&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias)}(r,i)):i.isMeshPhongMaterial?(e(r,i),function(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap),d.bumpMap&&(c.bumpMap.value=d.bumpMap,c.bumpScale.value=d.bumpScale,d.side===st&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,c.normalScale.value.copy(d.normalScale),d.side===st&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias)}(r,i)):i.isMeshStandardMaterial?(e(r,i),i.isMeshPhysicalMaterial?function(c,d,f){t(c,d),c.ior.value=d.ior,0<d.sheen&&(c.sheenTint.value.copy(d.sheenTint).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness),0<d.clearcoat&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),c.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===st&&c.clearcoatNormalScale.value.negate())),0<d.transmission&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=f.texture,c.transmissionSamplerSize.value.set(f.width,f.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap),c.attenuationDistance.value=d.attenuationDistance,c.attenuationTint.value.copy(d.attenuationTint)),c.specularIntensity.value=d.specularIntensity,c.specularTint.value.copy(d.specularTint),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap),d.specularTintMap&&(c.specularTintMap.value=d.specularTintMap)}(r,i,o):t(r,i)):i.isMeshMatcapMaterial?(e(r,i),function(c,d){d.matcap&&(c.matcap.value=d.matcap),d.bumpMap&&(c.bumpMap.value=d.bumpMap,c.bumpScale.value=d.bumpScale,d.side===st&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,c.normalScale.value.copy(d.normalScale),d.side===st&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias)}(r,i)):i.isMeshDepthMaterial?(e(r,i),l=r,(h=i).displacementMap&&(l.displacementMap.value=h.displacementMap,l.displacementScale.value=h.displacementScale,l.displacementBias.value=h.displacementBias)):i.isMeshDistanceMaterial?(e(r,i),function(c,d){d.displacementMap&&(c.displacementMap.value=d.displacementMap,c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),c.referencePosition.value.copy(d.referencePosition),c.nearDistance.value=d.nearDistance,c.farDistance.value=d.farDistance}(r,i)):i.isMeshNormalMaterial?(e(r,i),function(c,d){d.bumpMap&&(c.bumpMap.value=d.bumpMap,c.bumpScale.value=d.bumpScale,d.side===st&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,c.normalScale.value.copy(d.normalScale),d.side===st&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias)}(r,i)):i.isLineBasicMaterial?(l=i,(h=r).diffuse.value.copy(l.color),h.opacity.value=l.opacity,i.isLineDashedMaterial&&(h=i,(l=r).dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale)):i.isPointsMaterial?function(c,d,f,m){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*f,c.scale.value=.5*m,d.map&&(c.map.value=d.map),d.alphaMap&&(c.alphaMap.value=d.alphaMap),0<d.alphaTest&&(c.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),c.uvTransform.value.copy(g.matrix))}(r,i,a,s):i.isSpriteMaterial?function(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map),d.alphaMap&&(c.alphaMap.value=d.alphaMap),0<d.alphaTest&&(c.alphaTest.value=d.alphaTest);let f;d.map?f=d.map:d.alphaMap&&(f=d.alphaMap),f!==void 0&&(f.matrixAutoUpdate===!0&&f.updateMatrix(),c.uvTransform.value.copy(f.matrix))}(r,i):i.isShadowMaterial?(r.color.value.copy(i.color),r.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function Oe(n={}){const e=n.canvas!==void 0?n.canvas:function(){const E=Oa("canvas");return E.style.display="block",E}(),t=n.context!==void 0?n.context:null,r=n.alpha!==void 0&&n.alpha,i=n.depth===void 0||n.depth,a=n.stencil===void 0||n.stencil,s=n.antialias!==void 0&&n.antialias,o=n.premultipliedAlpha===void 0||n.premultipliedAlpha,l=n.preserveDrawingBuffer!==void 0&&n.preserveDrawingBuffer,h=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0&&n.failIfMajorPerformanceCaveat;let p=null,c=null;const d=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=pt,this.physicallyCorrectLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;const m=this;let g=!1,v=0,y=0,x=null,_=-1,T=null;const b=new De,M=new De;let A=null,N=e.width,I=e.height,C=1,O=null,D=null;const F=new De(0,0,N,I),U=new De(0,0,N,I);let H=!1;const z=[],W=new is;let ee=!1,q=!1,Q=null;const S=new ce,L=new R,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function X(){return x===null?C:1}let w=t;function K(E,Y){for(let j=0;j<E.length;j++){var G=E[j],G=e.getContext(G,Y);if(G!==null)return G}return null}try{var oe={alpha:r,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Mr,!1),e.addEventListener("webglcontextrestored",Ke,!1),w===null){const E=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&E.shift(),w=K(E,oe),w===null)throw K(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}w.getShaderPrecisionFormat===void 0&&(w.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let P,V,B,re,$,ue,be,de,Ne,Fe,Me,fe,Ce,Dt,te,he,ie,me,Le,Je,Pe,Te,We;function nr(){P=new Sf(w),V=new yf(w,P,n),P.init(V),Te=new zm(w,P,V),B=new Um(w,P,V),z[0]=1029,re=new Lf(w),$=new Am,ue=new Om(w,P,B,$,V,Te,re),be=new Mf(m),de=new wf(m),Ne=new gf(w,V),We=new xf(w,P,Ne,V),Fe=new Af(w,Ne,re,We),Me=new Cf(w,Fe,Ne,re),Le=new Ff(w,V,ue),he=new bf($),fe=new Sm(m,be,de,P,V,We,he),Ce=new Gm($),Dt=new Lm($),te=new Nm(P,V),me=new vf(m,be,B,Me,o),ie=new _u(m,Me,V),Je=new _f(w,P,re,V),Pe=new Ef(w,P,re,V),re.programs=fe.programs,m.capabilities=V,m.extensions=P,m.properties=$,m.renderLists=Dt,m.shadowMap=ie,m.state=B,m.info=re}nr();const at=new Hm(m,w);function Mr(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;var E=re.autoReset,Y=ie.enabled,G=ie.autoUpdate,j=ie.needsUpdate,J=ie.type;nr(),re.autoReset=E,ie.enabled=Y,ie.autoUpdate=G,ie.needsUpdate=j,ie.type=J}function Ea(E){const Y=E.target;Y.removeEventListener("dispose",Ea),function(G){const j=$.get(G).programs;j!==void 0&&j.forEach(function(J){fe.releaseProgram(J)})}(E=Y),$.remove(E)}this.xr=at,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=P.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=P.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(E){E!==void 0&&(C=E,this.setSize(N,I,!1))},this.getSize=function(E){return E.set(N,I)},this.setSize=function(E,Y,G){at.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(N=E,I=Y,e.width=Math.floor(E*C),e.height=Math.floor(Y*C),G!==!1&&(e.style.width=E+"px",e.style.height=Y+"px"),this.setViewport(0,0,E,Y))},this.getDrawingBufferSize=function(E){return E.set(N*C,I*C).floor()},this.setDrawingBufferSize=function(E,Y,G){N=E,I=Y,C=G,e.width=Math.floor(E*G),e.height=Math.floor(Y*G),this.setViewport(0,0,E,Y)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,Y,G,j){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,Y,G,j),B.viewport(b.copy(F).multiplyScalar(C).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,Y,G,j){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,Y,G,j),B.scissor(M.copy(U).multiplyScalar(C).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){B.setScissorTest(H=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E,Y,G){let j=0;E!==void 0&&!E||(j|=16384),Y!==void 0&&!Y||(j|=256),G!==void 0&&!G||(j|=1024),w.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mr,!1),e.removeEventListener("webglcontextrestored",Ke,!1),Dt.dispose(),te.dispose(),$.dispose(),be.dispose(),de.dispose(),Me.dispose(),We.dispose(),at.dispose(),at.removeEventListener("sessionstart",Dd),at.removeEventListener("sessionend",Ud),Q&&(Q.dispose(),Q=null),zi.stop()},this.renderBufferImmediate=function(E,Y){We.initAttributes();const G=$.get(E);E.hasPositions&&!G.position&&(G.position=w.createBuffer()),E.hasNormals&&!G.normal&&(G.normal=w.createBuffer()),E.hasUvs&&!G.uv&&(G.uv=w.createBuffer()),E.hasColors&&!G.color&&(G.color=w.createBuffer()),Y=Y.getAttributes(),E.hasPositions&&(w.bindBuffer(34962,G.position),w.bufferData(34962,E.positionArray,35048),We.enableAttribute(Y.position.location),w.vertexAttribPointer(Y.position.location,3,5126,!1,0,0)),E.hasNormals&&(w.bindBuffer(34962,G.normal),w.bufferData(34962,E.normalArray,35048),We.enableAttribute(Y.normal.location),w.vertexAttribPointer(Y.normal.location,3,5126,!1,0,0)),E.hasUvs&&(w.bindBuffer(34962,G.uv),w.bufferData(34962,E.uvArray,35048),We.enableAttribute(Y.uv.location),w.vertexAttribPointer(Y.uv.location,2,5126,!1,0,0)),E.hasColors&&(w.bindBuffer(34962,G.color),w.bufferData(34962,E.colorArray,35048),We.enableAttribute(Y.color.location),w.vertexAttribPointer(Y.color.location,3,5126,!1,0,0)),We.disableUnusedAttributes(),w.drawArrays(4,0,E.count),E.count=0},this.renderBufferDirect=function(E,Y,G,j,J,ge){Y===null&&(Y=k);var ne=J.isMesh&&J.matrixWorld.determinant()<0,xe=Bd(E,Y,G,j,J);B.setMaterial(j,ne);let _e=G.index;if(E=G.attributes.position,_e===null){if(E===void 0||E.count===0)return}else if(_e.count===0)return;let ve=1;j.wireframe===!0&&(_e=Fe.getWireframeAttribute(G),ve=2),We.setup(J,j,xe,G,_e);let le=Je;_e!==null&&(Ge=Ne.get(_e),le=Pe,le.setIndex(Ge));var Y=(_e!==null?_e:E).count,ne=G.drawRange.start*ve,xe=G.drawRange.count*ve,Ge=ge!==null?ge.start*ve:0,E=ge!==null?ge.count*ve:1/0,ge=Math.max(ne,Ge),E=Math.min(Y,ne+xe,Ge+E)-1,E=Math.max(0,E-ge+1);if(E!==0){if(J.isMesh)j.wireframe===!0?(B.setLineWidth(j.wireframeLinewidth*X()),le.setMode(1)):le.setMode(4);else if(J.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),B.setLineWidth(Ie*X()),J.isLineSegments?le.setMode(1):J.isLineLoop?le.setMode(2):le.setMode(3)}else J.isPoints?le.setMode(0):J.isSprite&&le.setMode(4);J.isInstancedMesh?le.renderInstances(ge,E,J.count):G.isInstancedBufferGeometry?(G=Math.min(G.instanceCount,G._maxInstanceCount),le.renderInstances(ge,E,G)):le.render(ge,E)}},this.compile=function(E,Y){c=te.get(E),c.init(),f.push(c),E.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(c.pushLight(G),G.castShadow&&c.pushShadow(G))}),c.setupLights(m.physicallyCorrectLights),E.traverse(function(G){var j=G.material;if(j)if(Array.isArray(j))for(let J=0;J<j.length;J++)jl(j[J],E,G);else jl(j,E,G)}),f.pop(),c=null};let fi=null;function Dd(){zi.stop()}function Ud(){zi.start()}const zi=new Oh;function Od(E,Y,G,j){var J=E.opaque,ge=E.transmissive,E=E.transparent;c.setupLightsView(G),0<ge.length&&function(ne,xe,_e){if(Q===null){const Ge=s===!0&&V.isWebGL2===!0?bh:Rt;Q=new Ge(1024,1024,{generateMipmaps:!0,type:Te.convert(dr)!==null?dr:ar,minFilter:xi,magFilter:$e,wrapS:yt,wrapT:yt})}var ve=m.getRenderTarget();m.setRenderTarget(Q),m.clear();var le=m.toneMapping;m.toneMapping=vi,zs(ne,xe,_e),m.toneMapping=le,ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q),m.setRenderTarget(ve)}(J,Y,G),j&&B.viewport(b.copy(j)),0<J.length&&zs(J,Y,G),0<ge.length&&zs(ge,Y,G),0<E.length&&zs(E,Y,G)}function zs(E,Y,G){var j=Y.isScene===!0?Y.overrideMaterial:null;for(let xe=0,_e=E.length;xe<_e;xe++){var J=E[xe];const ve=J.object;var ge=J.geometry,ne=j===null?J.material:j,J=J.group;ve.layers.test(G.layers)&&function(le,Ge,Ie,rt,pe,dt){{var Et;le.onBeforeRender(m,Ge,Ie,rt,pe,dt),le.modelViewMatrix.multiplyMatrices(Ie.matrixWorldInverse,le.matrixWorld),le.normalMatrix.getNormalMatrix(le.modelViewMatrix),pe.onBeforeRender(m,Ge,Ie,rt,le,dt),le.isImmediateRenderObject?(Et=Bd(Ie,Ge,rt,pe,le),B.setMaterial(pe),We.reset(),function(Tr,mi){Tr.render(function(Bi){m.renderBufferImmediate(Bi,mi)})}(le,Et)):pe.transparent===!0&&pe.side===gi?(pe.side=st,pe.needsUpdate=!0,m.renderBufferDirect(Ie,Ge,rt,pe,le,dt),pe.side=Hi,pe.needsUpdate=!0,m.renderBufferDirect(Ie,Ge,rt,pe,le,dt),pe.side=gi):m.renderBufferDirect(Ie,Ge,rt,pe,le,dt)}le.onAfterRender(m,Ge,Ie,rt,pe,dt)}(ve,Y,G,ge,ne,J)}}function jl(E,Y,G){Y.isScene!==!0&&(Y=k);const j=$.get(E);var J=c.state.lights,ge=c.state.shadowsArray,ne=J.state.version;const xe=fe.getParameters(E,J.state,ge,Y,G);G=fe.getProgramCacheKey(xe);let _e=j.programs;j.environment=E.isMeshStandardMaterial?Y.environment:null,j.fog=Y.fog,j.envMap=(E.isMeshStandardMaterial?de:be).get(E.envMap||j.environment),_e===void 0&&(E.addEventListener("dispose",Ea),_e=new Map,j.programs=_e);let ve=_e.get(G);if(ve!==void 0){if(j.currentProgram===ve&&j.lightsStateVersion===ne)return zd(E,xe),ve}else xe.uniforms=fe.getUniforms(E),E.onBuild(xe,m),E.onBeforeCompile(xe,m),ve=fe.acquireProgram(xe,G),_e.set(G,ve),j.uniforms=xe.uniforms;const le=j.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(le.clippingPlanes=he.uniform),zd(E,xe),j.needsLights=(E=E).isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0,j.lightsStateVersion=ne,j.needsLights&&(le.ambientLightColor.value=J.state.ambient,le.lightProbe.value=J.state.probe,le.directionalLights.value=J.state.directional,le.directionalLightShadows.value=J.state.directionalShadow,le.spotLights.value=J.state.spot,le.spotLightShadows.value=J.state.spotShadow,le.rectAreaLights.value=J.state.rectArea,le.ltc_1.value=J.state.rectAreaLTC1,le.ltc_2.value=J.state.rectAreaLTC2,le.pointLights.value=J.state.point,le.pointLightShadows.value=J.state.pointShadow,le.hemisphereLights.value=J.state.hemi,le.directionalShadowMap.value=J.state.directionalShadowMap,le.directionalShadowMatrix.value=J.state.directionalShadowMatrix,le.spotShadowMap.value=J.state.spotShadowMap,le.spotShadowMatrix.value=J.state.spotShadowMatrix,le.pointShadowMap.value=J.state.pointShadowMap,le.pointShadowMatrix.value=J.state.pointShadowMatrix),J=ve.getUniforms(),J=Jr.seqWithValue(J.seq,le),j.currentProgram=ve,j.uniformsList=J,ve}function zd(E,Y){const G=$.get(E);G.outputEncoding=Y.outputEncoding,G.instancing=Y.instancing,G.skinning=Y.skinning,G.morphTargets=Y.morphTargets,G.morphNormals=Y.morphNormals,G.morphTargetsCount=Y.morphTargetsCount,G.numClippingPlanes=Y.numClippingPlanes,G.numIntersection=Y.numClipIntersection,G.vertexAlphas=Y.vertexAlphas,G.vertexTangents=Y.vertexTangents}function Bd(E,Y,G,j,J){Y.isScene!==!0&&(Y=k),ue.resetTextureUnits();var ge=Y.fog,ne=j.isMeshStandardMaterial?Y.environment:null,xe=x===null?m.outputEncoding:x.texture.encoding,_e=(j.isMeshStandardMaterial?de:be).get(j.envMap||ne),ve=j.vertexColors===!0&&!!G&&!!G.attributes.color&&G.attributes.color.itemSize===4,le=!!j.normalMap&&!!G&&!!G.attributes.tangent,Ge=!!G&&!!G.morphAttributes.position,Ie=!!G&&!!G.morphAttributes.normal,rt=G&&G.morphAttributes.position?G.morphAttributes.position.length:0;const pe=$.get(j);var dt=c.state.lights;ee===!0&&(q!==!0&&E===T||(ne=E===T&&j.id===_,he.setState(j,E,ne)));let Et=!1;j.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==dt.state.version||pe.outputEncoding!==xe||J.isInstancedMesh&&pe.instancing===!1||!J.isInstancedMesh&&pe.instancing===!0||J.isSkinnedMesh&&pe.skinning===!1||!J.isSkinnedMesh&&pe.skinning===!0||pe.envMap!==_e||j.fog&&pe.fog!==ge||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==he.numPlanes||pe.numIntersection!==he.numIntersection)||pe.vertexAlphas!==ve||pe.vertexTangents!==le||pe.morphTargets!==Ge||pe.morphNormals!==Ie||V.isWebGL2===!0&&pe.morphTargetsCount!==rt)&&(Et=!0):(Et=!0,pe.__version=j.version);let Tr=pe.currentProgram;Et===!0&&(Tr=jl(j,Y,J));let mi=!1,Bi=!1,Ql=!1;const St=Tr.getUniforms(),La=pe.uniforms;if(B.useProgram(Tr.program)&&(mi=!0,Bi=!0,Ql=!0),j.id!==_&&(_=j.id,Bi=!0),mi||T!==E){if(St.setValue(w,"projectionMatrix",E.projectionMatrix),V.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,Bi=!0,Ql=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Hr=St.map.cameraPosition;Hr!==void 0&&Hr.setValue(w,L.setFromMatrixPosition(E.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||J.isSkinnedMesh)&&St.setValue(w,"viewMatrix",E.matrixWorldInverse)}if(J.isSkinnedMesh){St.setOptional(w,J,"bindMatrix"),St.setOptional(w,J,"bindMatrixInverse");const Hr=J.skeleton;Hr&&(V.floatVertexTextures?(Hr.boneTexture===null&&Hr.computeBoneTexture(),St.setValue(w,"boneTexture",Hr.boneTexture,ue),St.setValue(w,"boneTextureSize",Hr.boneTextureSize)):St.setOptional(w,Hr,"boneMatrices"))}return!G||G.morphAttributes.position===void 0&&G.morphAttributes.normal===void 0||Le.update(J,G,j,Tr),!Bi&&pe.receiveShadow===J.receiveShadow||(pe.receiveShadow=J.receiveShadow,St.setValue(w,"receiveShadow",J.receiveShadow)),Bi&&(St.setValue(w,"toneMappingExposure",m.toneMappingExposure),pe.needsLights&&(E=La,G=Ql,E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G),ge&&j.fog&&Ce.refreshFogUniforms(La,ge),Ce.refreshMaterialUniforms(La,j,C,I,Q),Jr.upload(w,pe.uniformsList,La,ue)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jr.upload(w,pe.uniformsList,La,ue),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(w,"center",J.center),St.setValue(w,"modelViewMatrix",J.modelViewMatrix),St.setValue(w,"normalMatrix",J.normalMatrix),St.setValue(w,"modelMatrix",J.matrixWorld),Tr}zi.setAnimationLoop(function(E){fi&&fi(E)}),typeof window!="undefined"&&zi.setContext(window),this.setAnimationLoop=function(E){fi=E,at.setAnimationLoop(E),E===null?zi.stop():zi.start()},at.addEventListener("sessionstart",Dd),at.addEventListener("sessionend",Ud),this.render=function(E,Y){if(Y===void 0||Y.isCamera===!0){if(g!==!0){E.autoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(Y),Y=at.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,Y,x),c=te.get(E,f.length),c.init(),f.push(c),S.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W.setFromProjectionMatrix(S),q=this.localClippingEnabled,ee=he.init(this.clippingPlanes,q,Y),p=Dt.get(E,d.length),p.init(),d.push(p),function ge(ne,xe,_e,ve){if(ne.visible===!1)return;if(ne.layers.test(xe.layers)){if(ne.isGroup)_e=ne.renderOrder;else if(ne.isLOD)ne.autoUpdate===!0&&ne.update(xe);else if(ne.isLight)c.pushLight(ne),ne.castShadow&&c.pushShadow(ne);else if(ne.isSprite){if(!ne.frustumCulled||W.intersectsSprite(ne)){ve&&L.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(S);const Ie=Me.update(ne),rt=ne.material;rt.visible&&p.push(ne,Ie,rt,_e,L.z,null)}}else if(ne.isImmediateRenderObject)ve&&L.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(S),p.push(ne,null,ne.material,_e,L.z,null);else if((ne.isMesh||ne.isLine||ne.isPoints)&&(ne.isSkinnedMesh&&ne.skeleton.frame!==re.render.frame&&(ne.skeleton.update(),ne.skeleton.frame=re.render.frame),!ne.frustumCulled||W.intersectsObject(ne))){ve&&L.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(S);const Ie=Me.update(ne),rt=ne.material;if(Array.isArray(rt)){const pe=Ie.groups;for(let dt=0,Et=pe.length;dt<Et;dt++){const Tr=pe[dt],mi=rt[Tr.materialIndex];mi&&mi.visible&&p.push(ne,Ie,mi,_e,L.z,Tr)}}else rt.visible&&p.push(ne,Ie,rt,_e,L.z,null)}}const Ge=ne.children;for(let Ie=0,rt=Ge.length;Ie<rt;Ie++)ge(Ge[Ie],xe,_e,ve)}(E,Y,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(O,D),ee===!0&&he.beginShadows();var G=c.state.shadowsArray;if(ie.render(G,E,Y),ee===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(p,E),c.setupLights(m.physicallyCorrectLights),Y.isArrayCamera){var j=Y.cameras;for(let ge=0,ne=j.length;ge<ne;ge++){var J=j[ge];Od(p,E,J,J.viewport)}}else Od(p,E,Y);x!==null&&(ue.updateMultisampleRenderTarget(x),ue.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(m,E,Y),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1),We.resetDefaultState(),_=-1,T=null,f.pop(),c=0<f.length?f[f.length-1]:null,d.pop(),p=0<d.length?d[d.length-1]:null}}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTarget=function(E,Y=0,G=0){x=E,v=Y,y=G,E&&$.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E);let j=null,J=!1,ge=!1;var ne;if(A=E?(((ne=E.texture).isDataTexture3D||ne.isDataTexture2DArray)&&(ge=!0),ne=$.get(E).__webglFramebuffer,E.isWebGLCubeRenderTarget?(j=ne[Y],J=!0):j=E.isWebGLMultisampleRenderTarget?$.get(E).__webglMultisampledFramebuffer:ne,b.copy(E.viewport),M.copy(E.scissor),E.scissorTest):(b.copy(F).multiplyScalar(C).floor(),M.copy(U).multiplyScalar(C).floor(),H),B.bindFramebuffer(36160,j)&&V.drawBuffers){let xe=!1;if(E)if(E.isWebGLMultipleRenderTargets){const _e=E.texture;if(z.length!==_e.length||z[0]!==36064){for(let ve=0,le=_e.length;ve<le;ve++)z[ve]=36064+ve;z.length=_e.length,xe=!0}}else z.length===1&&z[0]===36064||(z[0]=36064,z.length=1,xe=!0);else z.length===1&&z[0]===1029||(z[0]=1029,z.length=1,xe=!0);xe&&(V.isWebGL2?w.drawBuffers(z):P.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}B.viewport(b),B.scissor(M),B.setScissorTest(A),J?(ne=$.get(E.texture),w.framebufferTexture2D(36160,36064,34069+Y,ne.__webglTexture,G)):ge&&(E=$.get(E.texture),Y=Y||0,w.framebufferTextureLayer(36160,36064,E.__webglTexture,G||0,Y)),_=-1},this.readRenderTargetPixels=function(E,Y,G,j,J,ge,ne){if(E&&E.isWebGLRenderTarget){let Ge=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ne!==void 0&&(Ge=Ge[ne]),Ge){B.bindFramebuffer(36160,Ge);try{var xe=E.texture,_e=xe.format,ve=xe.type;if(_e!==lt&&Te.convert(_e)!==w.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");var le=ve===dr&&(P.has("EXT_color_buffer_half_float")||V.isWebGL2&&P.has("EXT_color_buffer_float"));if(!(ve===ar||Te.convert(ve)===w.getParameter(35738)||ve===Qt&&(V.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float"))||le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");w.checkFramebufferStatus(36160)===36053?0<=Y&&Y<=E.width-j&&0<=G&&G<=E.height-J&&w.readPixels(Y,G,j,J,Te.convert(_e),Te.convert(ve),ge):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ie=x!==null?$.get(x).__webglFramebuffer:null;B.bindFramebuffer(36160,Ie)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(E,Y,G=0){var j=Math.pow(2,-G),J=Math.floor(Y.image.width*j),j=Math.floor(Y.image.height*j);let ge=Te.convert(Y.format);V.isWebGL2&&(ge===6407&&(ge=32849),ge===6408&&(ge=32856)),ue.setTexture2D(Y,0),w.copyTexImage2D(3553,G,ge,E.x,E.y,J,j,0),B.unbindTexture()},this.copyTextureToTexture=function(E,Y,G,j=0){var J=Y.image.width,ge=Y.image.height,ne=Te.convert(G.format),xe=Te.convert(G.type);ue.setTexture2D(G,0),w.pixelStorei(37440,G.flipY),w.pixelStorei(37441,G.premultiplyAlpha),w.pixelStorei(3317,G.unpackAlignment),Y.isDataTexture?w.texSubImage2D(3553,j,E.x,E.y,J,ge,ne,xe,Y.image.data):Y.isCompressedTexture?w.compressedTexSubImage2D(3553,j,E.x,E.y,Y.mipmaps[0].width,Y.mipmaps[0].height,ne,Y.mipmaps[0].data):w.texSubImage2D(3553,j,E.x,E.y,ne,xe,Y.image),j===0&&G.generateMipmaps&&w.generateMipmap(3553),B.unbindTexture()},this.copyTextureToTexture3D=function(E,Y,G,j,J=0){if(m.isWebGL1Renderer)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");else{var ge=E.max.x-E.min.x+1,ne=E.max.y-E.min.y+1,xe=E.max.z-E.min.z+1,_e=Te.convert(j.format),ve=Te.convert(j.type);let Et;if(j.isDataTexture3D)ue.setTexture3D(j,0),Et=32879;else{if(!j.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ue.setTexture2DArray(j,0),Et=35866}w.pixelStorei(37440,j.flipY),w.pixelStorei(37441,j.premultiplyAlpha),w.pixelStorei(3317,j.unpackAlignment);var le=w.getParameter(3314),Ge=w.getParameter(32878),Ie=w.getParameter(3316),rt=w.getParameter(3315),pe=w.getParameter(32877),dt=G.isCompressedTexture?G.mipmaps[0]:G.image;w.pixelStorei(3314,dt.width),w.pixelStorei(32878,dt.height),w.pixelStorei(3316,E.min.x),w.pixelStorei(3315,E.min.y),w.pixelStorei(32877,E.min.z),G.isDataTexture||G.isDataTexture3D?w.texSubImage3D(Et,J,Y.x,Y.y,Y.z,ge,ne,xe,_e,ve,dt.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),w.compressedTexSubImage3D(Et,J,Y.x,Y.y,Y.z,ge,ne,xe,_e,dt.data)):w.texSubImage3D(Et,J,Y.x,Y.y,Y.z,ge,ne,xe,_e,ve,dt),w.pixelStorei(3314,le),w.pixelStorei(32878,Ge),w.pixelStorei(3316,Ie),w.pixelStorei(3315,rt),w.pixelStorei(32877,pe),J===0&&j.generateMipmaps&&w.generateMipmap(Et),B.unbindTexture()}},this.initTexture=function(E){ue.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){v=0,y=0,x=null,B.reset(),We.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bu extends Oe{}bu.prototype.isWebGL1Renderer=!0;class os{constructor(e,t=1,r=1e3){this.name="",this.color=new se(e),this.near=t,this.far=r}clone(){return new os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}os.prototype.isFog=!0;class Po extends Se{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Po.prototype.isScene=!0;class un{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bn,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[r+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer),e=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]);const t=new this.constructor(e,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}un.prototype.isInterleavedBuffer=!0;const tt=new R;class ls{constructor(e,t,r,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e!==void 0)return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);{console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const r=[];for(let i=0;i<this.count;i++){var t=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[t+a])}return new et(new this.array.constructor(r),this.itemSize,this.normalized)}}toJSON(e){if(e!==void 0)return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};{console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const r=[];for(let i=0;i<this.count;i++){var t=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[t+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}}}ls.prototype.isInterleavedBufferAttribute=!0;class km extends ke{constructor(e){super(),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}km.prototype.isSpriteMaterial=!0,class extends Se{};const Mu=new R,Tu=new De,wu=new De,Vm=new R,Su=new ce;class Ro extends Qe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ce,this.bindMatrixInverse=new ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new De,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);var r=1/e.manhattanLength();r!=1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){var r=this.skeleton,i=this.geometry;Tu.fromBufferAttribute(i.attributes.skinIndex,e),wu.fromBufferAttribute(i.attributes.skinWeight,e),Mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){var a,s=wu.getComponent(o);s!==0&&(a=Tu.getComponent(o),Su.multiplyMatrices(r.bones[a].matrixWorld,r.boneInverses[a]),t.addScaledVector(Vm.copy(Mu).applyMatrix4(Su),s))}return t.applyMatrix4(this.bindMatrixInverse)}}Ro.prototype.isSkinnedMesh=!0;class Fo extends Se{constructor(){super(),this.type="Bone"}}Fo.prototype.isBone=!0;class Co extends je{constructor(e=null,t=1,r=1,i,a,s,o,l,h=$e,u=$e,p,c){super(null,s,o,l,h,u,i,a,p,c),this.image={data:e,width:t,height:r},this.magFilter=h,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Co.prototype.isDataTexture=!0;const Au=new ce,Wm=new ce;class No{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){var e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,i=this.bones.length;r<i;r++)this.boneInverses.push(new ce)}}calculateInverses(){for(let e=this.boneInverses.length=0,t=this.bones.length;e<t;e++){const r=new ce;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){var e=this.bones,t=this.boneInverses,r=this.boneMatrices;const i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){var a=e[s]?e[s].matrixWorld:Wm;Au.multiplyMatrices(a,t[s]),Au.toArray(r,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){var e=xh(e=Math.sqrt(4*this.bones.length));e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);var r=new Co(t,e,e,lt,Qt);return this.boneMatrices=t,this.boneTexture=r,this.boneTextureSize=e,this}getBoneByName(e){for(let r=0,i=this.bones.length;r<i;r++){var t=this.bones[r];if(t.name===e)return t}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){var r=e.bones[i];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Fo),this.bones.push(s),this.boneInverses.push(new ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;var t=this.bones,r=this.boneInverses;for(let a=0,s=t.length;a<s;a++){var i=t[a];e.bones.push(i.uuid);const o=r[a];e.boneInverses.push(o.toArray())}return e}}class Xm extends et{constructor(e,t,r,i=1){typeof r=="number"&&(i=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,r),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Xm.prototype.isInstancedBufferAttribute=!0,class extends Qe{};class Ti extends ke{constructor(e){super(),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Ti.prototype.isLineBasicMaterial=!0;const Eu=new R,Lu=new R,Pu=new ce,Io=new Zi,hs=new Mi;class us extends Se{constructor(e=new Ue,t=new Ti){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){var t=e.attributes.position;const r=[0];for(let i=1,a=t.count;i<a;i++)Eu.fromBufferAttribute(t,i-1),Lu.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=Eu.distanceTo(Lu);e.setAttribute("lineDistance",new Ve(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const r=this.geometry;var i=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hs.copy(r.boundingSphere),hs.applyMatrix4(i),hs.radius+=a,e.ray.intersectsSphere(hs)!==!1){Pu.copy(i).invert(),Io.copy(e.ray).applyMatrix4(Pu);var a=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;const f=new R,m=new R,g=new R,v=new R;var l=this.isLineSegments?2:1;if(r.isBufferGeometry){const y=r.index;var h,u=r.attributes.position;if(y!==null)for(let x=Math.max(0,s.start),_=Math.min(y.count,s.start+s.count)-1;x<_;x+=l){var p=y.getX(x),c=y.getX(x+1);f.fromBufferAttribute(u,p),m.fromBufferAttribute(u,c),o<Io.distanceSqToSegment(f,m,v,g)||(v.applyMatrix4(this.matrixWorld),(c=e.ray.origin.distanceTo(v))<e.near||c>e.far||t.push({distance:c,point:g.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this}))}else for(let x=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count)-1;x<_;x+=l)f.fromBufferAttribute(u,x),m.fromBufferAttribute(u,x+1),o<Io.distanceSqToSegment(f,m,v,g)||(v.applyMatrix4(this.matrixWorld),(h=e.ray.origin.distanceTo(v))<e.near||h>e.far||t.push({distance:h,point:g.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this}))}else r.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}updateMorphTargets(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,r=Object.keys(t);if(0<r.length){var i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){var a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else e=e.morphTargets,e!==void 0&&0<e.length&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}us.prototype.isLine=!0;const Ru=new R,Fu=new R;class cn extends us{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){var t=e.attributes.position;const r=[];for(let i=0,a=t.count;i<a;i+=2)Ru.fromBufferAttribute(t,i),Fu.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Ru.distanceTo(Fu);e.setAttribute("lineDistance",new Ve(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}cn.prototype.isLineSegments=!0;class Cu extends us{constructor(e,t){super(e,t),this.type="LineLoop"}}Cu.prototype.isLineLoop=!0;class Do extends ke{constructor(e){super(),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Do.prototype.isPointsMaterial=!0;const Nu=new ce,Uo=new Zi,cs=new Mi,ds=new R;class Iu extends Se{constructor(e=new Ue,t=new Do){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry;var i=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cs.copy(r.boundingSphere),cs.applyMatrix4(i),cs.radius+=a,e.ray.intersectsSphere(cs)!==!1){Nu.copy(i).invert(),Uo.copy(e.ray).applyMatrix4(Nu);var a=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(r.isBufferGeometry){const p=r.index;var l=r.attributes.position;if(p!==null)for(let c=Math.max(0,s.start),d=Math.min(p.count,s.start+s.count);c<d;c++){var h=p.getX(c);ds.fromBufferAttribute(l,h),Du(ds,h,o,i,e,t,this)}else for(let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);c<d;c++)ds.fromBufferAttribute(l,c),Du(ds,c,o,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}updateMorphTargets(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,r=Object.keys(t);if(0<r.length){var i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){var a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else e=e.morphTargets,e!==void 0&&0<e.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}function Du(n,e,t,r,i,a,s){var o=Uo.distanceSqToPoint(n);if(o<t){const l=new R;Uo.closestPointToPoint(n,l),l.applyMatrix4(r),r=i.ray.origin.distanceTo(l),r<i.near||r>i.far||a.push({distance:r,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}Iu.prototype.isPoints=!0,class extends je{constructor(n,e,t,r,i,a,s,o,l){super(n,e,t,r,i,a,s,o,l),this.format=s!==void 0?s:wr,this.minFilter=a!==void 0?a:Ye,this.magFilter=i!==void 0?i:Ye,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in n&&n.requestVideoFrameCallback(function u(){h.needsUpdate=!0,n.requestVideoFrameCallback(u)})}clone(){return new this.constructor(this.image).copy(this)}update(){var n=this.image;!("requestVideoFrameCallback"in n)&&n.readyState>=n.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}.prototype.isVideoTexture=!0,class extends je{constructor(n,e,t,r,i,a,s,o,l,h){if((h=h!==void 0?h:Vi)!==Vi&&h!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,i,a,s,o,h,t=(t=t===void 0&&h===Vi?Na:t)===void 0&&h===On?Un:t,l),this.image={width:n,height:e},this.magFilter=s!==void 0?s:$e,this.minFilter=o!==void 0?o:$e,this.flipY=!1,this.generateMipmaps=!1}}.prototype.isDepthTexture=class extends je{constructor(n,e,t,r,i,a,s,o,l){super(n,e,t,r,i,a,s,o,l),this.needsUpdate=!0}}.prototype.isCanvasTexture=class extends je{constructor(n,e,t,r,i,a,s,o,l,h,u,p){super(null,a,s,o,l,h,r,i,u,p),this.image={width:e,height:t},this.mipmaps=n,this.flipY=!1,this.generateMipmaps=!1}}.prototype.isCompressedTexture=!0,new R,new R,new R,new ot;class Ht{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){return e=this.getUtoTmapping(e),this.getPoint(e,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){var e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,i=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)r=this.getPoint(s/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){var r=this.getLengths();let i=0;var a=r.length;let s;s=t||e*r[a-1];let o=0,l=a-1,h;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),(h=r[i]-s)<0)o=i+1;else{if(!(0<h)){l=i;break}l=i-1}return i=l,r[i]===s?i/(a-1):(t=r[i],e=r[i+1],t=(s-t)/(e-t),(i+t)/(a-1))}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),1<i&&(i=1);var a=this.getPoint(r),e=this.getPoint(i);const s=t||new(a.isVector2?Z:R);return s.copy(e).sub(a).normalize(),s}getTangentAt(e,t){return e=this.getUtoTmapping(e),this.getTangent(e,t)}computeFrenetFrames(e,t){const r=new R,i=[],a=[],s=[],o=new R,l=new ce;for(let m=0;m<=e;m++){var h=m/e;i[m]=this.getTangentAt(h,new R)}a[0]=new R,s[0]=new R;let u=Number.MAX_VALUE;var p,c=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);c<=u&&(u=c,r.set(1,0,0)),d<=u&&(u=d,r.set(0,1,0)),f<=u&&r.set(0,0,1),o.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],o),s[0].crossVectors(i[0],a[0]);for(let m=1;m<=e;m++)a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON&&(o.normalize(),p=Math.acos(Pt(i[m-1].dot(i[m]),-1,1)),a[m].applyMatrix4(l.makeRotationAxis(o,p))),s[m].crossVectors(i[m],a[m]);if(t===!0){let m=Math.acos(Pt(a[0].dot(a[e]),-1,1));m/=e,0<i[0].dot(o.crossVectors(a[0],a[e]))&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),s[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ps extends Ht{constructor(e=0,t=0,r=1,i=1,a=0,s=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const r=t||new Z;var i=2*Math.PI;let a=this.aEndAngle-this.aStartAngle;for(var s=Math.abs(a)<Number.EPSILON;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(a=s?0:i),this.aClockwise!==!0||s||(a===i?a=-i:a-=i);var o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);return this.aRotation!==0&&(t=Math.cos(this.aRotation),s=Math.sin(this.aRotation),e=l-this.aX,o=h-this.aY,l=e*t-o*s+this.aX,h=e*s+o*t+this.aY),r.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ps.prototype.isEllipseCurve=!0;class Uu extends ps{constructor(e,t,r,i,a,s){super(e,t,r,r,i,a,s),this.type="ArcCurve"}}function Oo(){let n=0,e=0,t=0,r=0;function i(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,r=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,h){i(s,o,h*(o-a),h*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,h,u,p){h=(s-a)/h-(o-a)/(h+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+p)+(l-o)/p,i(s,o,h*=u,p*=u)},calc:function(a){var s=a*a,o=s*a;return n+e*a+t*s+r*o}}}Uu.prototype.isArcCurve=!0;const fs=new R,zo=new Oo,Bo=new Oo,Ho=new Oo;class Ou extends Ht{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new R){const r=t;var i=this.points,t=i.length,e=(t-(this.closed?0:1))*e;let a=Math.floor(e),s=e-a;this.closed?a+=0<a?0:(Math.floor(Math.abs(a)/t)+1)*t:s===0&&a===t-1&&(a=t-2,s=1);let o,l;o=this.closed||0<a?i[(a-1)%t]:(fs.subVectors(i[0],i[1]).add(i[0]),fs);const h=i[a%t],u=i[(a+1)%t];if(l=this.closed||a+2<t?i[(a+2)%t]:(fs.subVectors(i[t-1],i[t-2]).add(i[t-1]),fs),this.curveType==="centripetal"||this.curveType==="chordal"){t=this.curveType==="chordal"?.5:.25;let p=Math.pow(o.distanceToSquared(h),t),c=Math.pow(h.distanceToSquared(u),t),d=Math.pow(u.distanceToSquared(l),t);c<1e-4&&(c=1),p<1e-4&&(p=c),d<1e-4&&(d=c),zo.initNonuniformCatmullRom(o.x,h.x,u.x,l.x,p,c,d),Bo.initNonuniformCatmullRom(o.y,h.y,u.y,l.y,p,c,d),Ho.initNonuniformCatmullRom(o.z,h.z,u.z,l.z,p,c,d)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(o.x,h.x,u.x,l.x,this.tension),Bo.initCatmullRom(o.y,h.y,u.y,l.y,this.tension),Ho.initCatmullRom(o.z,h.z,u.z,l.z,this.tension));return r.set(zo.calc(s),Bo.calc(s),Ho.calc(s)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){var t=e.points[r];this.points.push(new R().fromArray(t))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zu(n,e,t,r,i){var a=.5*(r-e),e=.5*(i-t),i=n*n;return(2*t-2*r+a+e)*(n*i)+(-3*t+3*r-2*a-e)*i+a*n+t}function Jn(n,e,t,r){return(i=1-(i=n))*i*e+2*(1-n)*n*t+n*n*r;var i}function Kn(n,e,t,r,i){return(a=1-(a=n))*a*a*e+3*(e=1-n)*e*n*t+3*(1-n)*n*n*r+n*n*n*i;var a}class Go extends Ht{constructor(e=new Z,t=new Z,r=new Z,i=new Z){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new Z){const r=t;var i=this.v0,a=this.v1,s=this.v2,t=this.v3;return r.set(Kn(e,i.x,a.x,s.x,t.x),Kn(e,i.y,a.y,s.y,t.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Go.prototype.isCubicBezierCurve=Ou.prototype.isCatmullRomCurve3=!0;class Bu extends Ht{constructor(e=new R,t=new R,r=new R,i=new R){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new R){const r=t;var i=this.v0,a=this.v1,s=this.v2,t=this.v3;return r.set(Kn(e,i.x,a.x,s.x,t.x),Kn(e,i.y,a.y,s.y,t.y),Kn(e,i.z,a.z,s.z,t.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ms extends Ht{constructor(e=new Z,t=new Z){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const r=t||new Z;return r.copy(this.v2).sub(this.v1).normalize(),r}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ms.prototype.isLineCurve=Bu.prototype.isCubicBezierCurve3=!0;class ko extends Ht{constructor(e=new Z,t=new Z,r=new Z){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Z){const r=t;var i=this.v0,a=this.v1,t=this.v2;return r.set(Jn(e,i.x,a.x,t.x),Jn(e,i.y,a.y,t.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ko.prototype.isQuadraticBezierCurve=!0;class Hu extends Ht{constructor(e=new R,t=new R,r=new R){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new R){const r=t;var i=this.v0,a=this.v1,t=this.v2;return r.set(Jn(e,i.x,a.x,t.x),Jn(e,i.y,a.y,t.y),Jn(e,i.z,a.z,t.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vo extends Ht{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const r=t;var i=this.points,a=(i.length-1)*e,s=Math.floor(a),o=a-s,t=i[s===0?s:s-1],e=i[s],a=i[s>i.length-2?i.length-1:s+1],s=i[s>i.length-3?i.length-1:s+2];return r.set(zu(o,t.x,e.x,a.x,s.x),zu(o,t.y,e.y,a.y,s.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){var t=e.points[r];this.points.push(new Z().fromArray(t))}return this}}Vo.prototype.isSplineCurve=Hu.prototype.isQuadraticBezierCurve3=!0;var Gu=Object.freeze({__proto__:null,ArcCurve:Uu,CatmullRomCurve3:Ou,CubicBezierCurve:Go,CubicBezierCurve3:Bu,EllipseCurve:ps,LineCurve:ms,LineCurve3:class extends Ht{constructor(n=new R,e=new R){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=n,this.v2=e}getPoint(n,e=new R){const t=e;return n===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(n).add(this.v1)),t}getPointAt(n,e){return this.getPoint(n,e)}copy(n){return super.copy(n),this.v1.copy(n.v1),this.v2.copy(n.v2),this}toJSON(){const n=super.toJSON();return n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this}},QuadraticBezierCurve:ko,QuadraticBezierCurve3:Hu,SplineCurve:Vo});class Ym extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0);var t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ms(t,e))}getPoint(e,t){var r=e*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=r){var s=i[a]-r;const l=this.curves[a];var o=l.getLength();return l.getPointAt(o===0?0:1-s/o,t)}a++}return null}getLength(){var e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const h=l[o];var i=h&&h.isEllipseCurve?2*e:h&&(h.isLineCurve||h.isLineCurve3)?1:h&&h.isSplineCurve?e*h.points.length:e,a=h.getPoints(i);for(let u=0;u<a.length;u++){var s=a[u];r&&r.equals(s)||(t.push(s),r=s)}}return this.autoClose&&1<t.length&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let r=0,i=e.curves.length;r<i;r++){var t=e.curves[r];this.curves.push(new Gu[t.type]().fromJSON(t))}return this}}class Wo extends Ym{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){var r=new ms(this.currentPoint.clone(),new Z(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){return t=new ko(this.currentPoint.clone(),new Z(e,t),new Z(r,i)),this.curves.push(t),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,s){return i=new Go(this.currentPoint.clone(),new Z(e,t),new Z(r,i),new Z(a,s)),this.curves.push(i),this.currentPoint.set(a,s),this}splineThru(e){var t=[this.currentPoint.clone()].concat(e),t=new Vo(t);return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,s){var o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,r,i,a,s),this}absarc(e,t,r,i,a,s){return this.absellipse(e,t,r,r,i,a,s),this}ellipse(e,t,r,i,a,s,o,l){var h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,r,i,a,s,o,l),this}absellipse(e,t,r,i,a,s,o,l){const h=new ps(e,t,r,i,a,s,o,l);if(0<this.curves.length){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}return this.curves.push(h),l=h.getPoint(1),this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $n extends Wo{constructor(e){super(e),this.uuid=qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let r=0,i=e.holes.length;r<i;r++){var t=e.holes[r];this.holes.push(new Wo().fromJSON(t))}return this}}const jm={triangulate:function(n,e,t=2){var r=e&&e.length,i=r?e[0]*t:n.length;let a=ku(n,0,i,t,!0);var s=[];if(!a||a.next===a.prev)return s;let o,l,h,u,p,c,d;if(r&&(a=function(f,m,g,v){const y=[];let x,_,T,b,M;for(x=0,_=m.length;x<_;x++)T=m[x]*v,b=x<_-1?m[x+1]*v:f.length,M=ku(f,T,b,v,!1),M===M.next&&(M.steiner=!0),y.push(function(A){let N=A,I=A;for(;(N.x<I.x||N.x===I.x&&N.y<I.y)&&(I=N),N=N.next,N!==A;);return I}(M));for(y.sort(Qm),x=0;x<y.length;x++)(function(A,N){(N=function(I,C){let O=C;var D=I.x,F=I.y;let U=-1/0,H;do if(F<=O.y&&F>=O.next.y&&O.next.y!==O.y){var z=O.x+(F-O.y)*(O.next.x-O.x)/(O.next.y-O.y);if(z<=D&&z>U){if((U=z)===D){if(F===O.y)return O;if(F===O.next.y)return O.next}H=O.x<O.next.x?O:O.next}}while(O=O.next,O!==C);if(!H)return null;if(D===U)return H;var W=H,ee=H.x,q=H.y;let Q=1/0,S;for(O=H;D>=O.x&&O.x>=ee&&D!==O.x&&dn(F<q?D:U,F,ee,q,F<q?U:D,F,O.x,O.y)&&(S=Math.abs(F-O.y)/(D-O.x),ta(O,I)&&(S<Q||S===Q&&(O.x>H.x||O.x===H.x&&function(L,k){return qe(L.prev,L,k.prev)<0&&qe(k.next,L,L.next)<0}(H,O)))&&(H=O,Q=S)),O=O.next,O!==W;);return H}(A,N))&&(A=Wu(N,A),$r(N,N.next),$r(A,A.next))})(y[x],g),g=$r(g,g.next);return g}(n,e,a,t)),n.length>80*t){o=h=n[0],l=u=n[1];for(let f=t;f<i;f+=t)p=n[f],c=n[f+1],p<o&&(o=p),c<l&&(l=c),p>h&&(h=p),c>u&&(u=c);d=Math.max(h-o,u-l),d=d!==0?1/d:0}return ea(a,s,t,o,l,d),s}};function ku(n,e,t,r,i){let a,s;if(i===0<function(o,l,h,u){let p=0;for(let c=l,d=h-u;c<h;c+=u)p+=(o[d]-o[c])*(o[c+1]+o[d+1]),d=c;return p}(n,e,t,r))for(a=e;a<t;a+=r)s=Xu(a,n[a],n[a+1],s);else for(a=t-r;a>=e;a-=r)s=Xu(a,n[a],n[a+1],s);return s&&gs(s,s.next)&&(ra(s),s=s.next),s}function $r(n,e){if(!n)return n;e=e||n;let t=n,r;do if(r=!1,t.steiner||!gs(t,t.next)&&qe(t.prev,t,t.next)!==0)t=t.next;else{if(ra(t),t=e=t.prev,t===t.next)break;r=!0}while(r||t!==e);return e}function ea(n,e,t,r,i,a,s){if(n){!s&&a&&function(u,p,c,d){let f=u;for(;f.z===null&&(f.z=Xo(f.x,f.y,p,c,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next,f!==u;);f.prevZ.nextZ=null,f.prevZ=null,function(m){let g,v,y,x,_,T,b,M,A=1;do for(v=m,m=null,_=null,T=0;v;){for(T++,y=v,b=0,g=0;g<A&&(b++,y=y.nextZ,y);g++);for(M=A;0<b||0<M&&y;)b!==0&&(M===0||!y||v.z<=y.z)?(x=v,v=v.nextZ,b--):(x=y,y=y.nextZ,M--),_?_.nextZ=x:m=x,x.prevZ=_,_=x;v=y}while(_.nextZ=null,A*=2,1<T)}(f)}(n,r,i,a);let o=n,l,h;for(;n.prev!==n.next;)if(l=n.prev,h=n.next,a?function(u,p,c,d){var f=u.prev,m=u,g=u.next;if(0<=qe(f,m,g))return!1;var v=(f.x<m.x?f.x<g.x?f:g:m.x<g.x?m:g).x,y=(f.y<m.y?f.y<g.y?f:g:m.y<g.y?m:g).y,x=(f.x>m.x?f.x>g.x?f:g:m.x>g.x?m:g).x,_=(f.y>m.y?f.y>g.y?f:g:m.y>g.y?m:g).y,T=Xo(v,y,p,c,d),b=Xo(x,_,p,c,d);let M=u.prevZ,A=u.nextZ;for(;M&&M.z>=T&&A&&A.z<=b;){if(M!==u.prev&&M!==u.next&&dn(f.x,f.y,m.x,m.y,g.x,g.y,M.x,M.y)&&0<=qe(M.prev,M,M.next)||(M=M.prevZ,A!==u.prev&&A!==u.next&&dn(f.x,f.y,m.x,m.y,g.x,g.y,A.x,A.y)&&0<=qe(A.prev,A,A.next)))return!1;A=A.nextZ}for(;M&&M.z>=T;){if(M!==u.prev&&M!==u.next&&dn(f.x,f.y,m.x,m.y,g.x,g.y,M.x,M.y)&&0<=qe(M.prev,M,M.next))return!1;M=M.prevZ}for(;A&&A.z<=b;){if(A!==u.prev&&A!==u.next&&dn(f.x,f.y,m.x,m.y,g.x,g.y,A.x,A.y)&&0<=qe(A.prev,A,A.next))return!1;A=A.nextZ}return!0}(n,r,i,a):function(u){var p=u.prev,c=u,d=u.next;if(0<=qe(p,c,d))return!1;let f=u.next.next;for(;f!==u.prev;){if(dn(p.x,p.y,c.x,c.y,d.x,d.y,f.x,f.y)&&0<=qe(f.prev,f,f.next))return!1;f=f.next}return!0}(n))e.push(l.i/t),e.push(n.i/t),e.push(h.i/t),ra(n),n=h.next,o=h.next;else if((n=h)===o){s?s===1?ea(n=function(u,p,c){let d=u;do{var f=d.prev,m=d.next.next;!gs(f,m)&&Vu(f,d,d.next,m)&&ta(f,m)&&ta(m,f)&&(p.push(f.i/c),p.push(d.i/c),p.push(m.i/c),ra(d),ra(d.next),d=u=m),d=d.next}while(d!==u);return $r(d)}($r(n),e,t),e,t,r,i,a,2):s===2&&function(u,p,c,d,f,m){let g=u;do{let y=g.next.next;for(;y!==g.prev;){if(g.i!==y.i&&function(x,_){return x.next.i!==_.i&&x.prev.i!==_.i&&!function(T,b){let M=T;do if(M.i!==T.i&&M.next.i!==T.i&&M.i!==b.i&&M.next.i!==b.i&&Vu(M,M.next,T,b))return!0;while(M=M.next,M!==T);return!1}(x,_)&&(ta(x,_)&&ta(_,x)&&function(T,b){let M=T,A=!1;for(var N=(T.x+b.x)/2,I=(T.y+b.y)/2;M.y>I!=M.next.y>I&&M.next.y!==M.y&&N<(M.next.x-M.x)*(I-M.y)/(M.next.y-M.y)+M.x&&(A=!A),M=M.next,M!==T;);return A}(x,_)&&(qe(x.prev,x,_.prev)||qe(x,_.prev,_))||gs(x,_)&&0<qe(x.prev,x,x.next)&&0<qe(_.prev,_,_.next))}(g,y)){var v=Wu(g,y);return g=$r(g,g.next),v=$r(v,v.next),ea(g,p,c,d,f,m),ea(v,p,c,d,f,m)}y=y.next}}while(g=g.next,g!==u)}(n,e,t,r,i,a):ea($r(n),e,t,r,i,a,1);break}}}function Qm(n,e){return n.x-e.x}function Xo(n,e,t,r,i){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-t)*i)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function dn(n,e,t,r,i,a,s,o){return 0<=(i-s)*(e-o)-(n-s)*(a-o)&&0<=(n-s)*(r-o)-(t-s)*(e-o)&&0<=(t-s)*(a-o)-(i-s)*(r-o)}function qe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gs(n,e){return n.x===e.x&&n.y===e.y}function Vu(n,e,t,r){var i=xs(qe(n,e,t)),a=xs(qe(n,e,r)),s=xs(qe(t,r,n)),o=xs(qe(t,r,e));return i!==a&&s!==o||i===0&&vs(n,t,e)||a===0&&vs(n,r,e)||s===0&&vs(t,n,r)||!(o!==0||!vs(t,e,r))}function vs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xs(n){return 0<n?1:n<0?-1:0}function ta(n,e){return qe(n.prev,n,n.next)<0?0<=qe(n,e,n.next)&&0<=qe(n,n.prev,e):qe(n,e,n.prev)<0||qe(n,n.next,e)<0}function Wu(n,e){const t=new Yo(n.i,n.x,n.y),r=new Yo(e.i,e.x,e.y),i=n.next,a=e.prev;return(n.next=e).prev=n,t.next=i,i.prev=t,r.next=t,t.prev=r,a.next=r,r.prev=a,r}function Xu(n,e,t,r){const i=new Yo(n,e,t);return r?(i.next=r.next,(i.prev=r).next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ra(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class ei{static area(e){var t=e.length;let r=0;for(let i=t-1,a=0;a<t;i=a++)r+=e[i].x*e[a].y-e[a].x*e[i].y;return .5*r}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){var r=[];const i=[],a=[];Yu(e),ju(r,e);let s=e.length;t.forEach(Yu);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,ju(r,t[l]);const o=jm.triangulate(r,i);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Yu(n){var e=n.length;2<e&&n[e-1].equals(n[0])&&n.pop()}function ju(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pn extends Ue{constructor(e=new $n([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,i=[],a=[];for(let s=0,o=e.length;s<o;s++)(function(l){const h=[],u=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1;let c=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:qm;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),c=t.amount);let _,T=!1,b,M,A,N;y&&(_=y.getSpacedPoints(p),T=!0,d=!1,b=y.computeFrenetFrames(p,!1),M=new R,A=new R,N=new R),d||(v=0,f=0,m=0,g=0),l=l.extractPoints(u);let I=l.shape;const C=l.holes;if(!ei.isClockWise(I)){I=I.reverse();for(let te=0,he=C.length;te<he;te++){const ie=C[te];ei.isClockWise(ie)&&(C[te]=ie.reverse())}}const D=ei.triangulateShape(I,C),F=I;for(let te=0,he=C.length;te<he;te++){var U=C[te];I=I.concat(U)}function H(te,he,ie){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().multiplyScalar(ie).add(te)}const z=I.length,W=D.length;function ee(te,he,ie){let me,Le,Je;var Pe=te.x-he.x,Te=te.y-he.y,We=ie.x-te.x,nr=ie.y-te.y,at=Pe*Pe+Te*Te;if(Math.abs(Pe*nr-Te*We)>Number.EPSILON){var Mr=Math.sqrt(at),Ke=Math.sqrt(We*We+nr*nr),Ea=he.x-Te/Mr,Mr=he.y+Pe/Mr,Ke=((ie.x-nr/Ke-Ea)*nr-(ie.y+We/Ke-Mr)*We)/(Pe*nr-Te*We);if(me=Ea+Pe*Ke-te.x,Le=Mr+Te*Ke-te.y,te=me*me+Le*Le,te<=2)return new Z(me,Le);Je=Math.sqrt(te/2)}else{let fi=!1;Pe>Number.EPSILON?We>Number.EPSILON&&(fi=!0):Pe<-Number.EPSILON?We<-Number.EPSILON&&(fi=!0):Math.sign(Te)===Math.sign(nr)&&(fi=!0),Je=fi?(me=-Te,Le=Pe,Math.sqrt(at)):(me=Pe,Le=Te,Math.sqrt(at/2))}return new Z(me/Je,Le/Je)}const q=[];for(let te=0,he=F.length,ie=he-1,me=te+1;te<he;te++,ie++,me++)ie===he&&(ie=0),me===he&&(me=0),q[te]=ee(F[te],F[ie],F[me]);const Q=[];let S,L=q.concat();for(let te=0,he=C.length;te<he;te++){var k=C[te];S=[];for(let ie=0,me=k.length,Le=me-1,Je=ie+1;ie<me;ie++,Le++,Je++)Le===me&&(Le=0),Je===me&&(Je=0),S[ie]=ee(k[ie],k[Le],k[Je]);Q.push(S),L=L.concat(S)}for(let te=0;te<v;te++){var X=te/v,w=f*Math.cos(X*Math.PI/2);const he=m*Math.sin(X*Math.PI/2)+g;for(let ie=0,me=F.length;ie<me;ie++){var K=H(F[ie],q[ie],he);Me(K.x,K.y,-w)}for(let ie=0,me=C.length;ie<me;ie++){var oe=C[ie];S=Q[ie];for(let Le=0,Je=oe.length;Le<Je;Le++){var P=H(oe[Le],S[Le],he);Me(P.x,P.y,-w)}}}const V=m+g;for(let te=0;te<z;te++){var B=d?H(I[te],L[te],V):I[te];T?(A.copy(b.normals[0]).multiplyScalar(B.x),M.copy(b.binormals[0]).multiplyScalar(B.y),N.copy(_[0]).add(A).add(M),Me(N.x,N.y,N.z)):Me(B.x,B.y,0)}for(let te=1;te<=p;te++)for(let he=0;he<z;he++){var re=d?H(I[he],L[he],V):I[he];T?(A.copy(b.normals[te]).multiplyScalar(re.x),M.copy(b.binormals[te]).multiplyScalar(re.y),N.copy(_[te]).add(A).add(M),Me(N.x,N.y,N.z)):Me(re.x,re.y,c/p*te)}for(let te=v-1;0<=te;te--){var $=te/v,ue=f*Math.cos($*Math.PI/2);const he=m*Math.sin($*Math.PI/2)+g;for(let ie=0,me=F.length;ie<me;ie++){var be=H(F[ie],q[ie],he);Me(be.x,be.y,c+ue)}for(let ie=0,me=C.length;ie<me;ie++){var de=C[ie];S=Q[ie];for(let Le=0,Je=de.length;Le<Je;Le++){var Ne=H(de[Le],S[Le],he);T?Me(Ne.x,Ne.y+_[p-1].y,_[p-1].x+ue):Me(Ne.x,Ne.y,c+ue)}}}function Fe(te,he){let ie=te.length;for(;0<=--ie;){var me=ie;let Pe=ie-1;Pe<0&&(Pe=te.length-1);for(let Te=0,We=p+2*v;Te<We;Te++){var Le=z*Te,Je=z*(Te+1);(function(nr,at,Mr,Ke){Ce(nr),Ce(at),Ce(Ke),Ce(at),Ce(Mr),Ce(Ke),Ke=i.length/3,Ke=x.generateSideWallUV(r,i,Ke-6,Ke-3,Ke-2,Ke-1),Dt(Ke[0]),Dt(Ke[1]),Dt(Ke[3]),Dt(Ke[1]),Dt(Ke[2]),Dt(Ke[3])})(he+me+Le,he+Pe+Le,he+Pe+Je,he+me+Je)}}}function Me(te,he,ie){h.push(te),h.push(he),h.push(ie)}function fe(te,he,ie){Ce(te),Ce(he),Ce(ie),ie=i.length/3,ie=x.generateTopUV(r,i,ie-3,ie-2,ie-1),Dt(ie[0]),Dt(ie[1]),Dt(ie[2])}function Ce(te){i.push(h[3*te+0]),i.push(h[3*te+1]),i.push(h[3*te+2])}function Dt(te){a.push(te.x),a.push(te.y)}(function(){var te,he=i.length/3;if(d){let Pe=0*z;for(let Te=0;Te<W;Te++){var ie=D[Te];fe(ie[2]+Pe,ie[1]+Pe,ie[0]+Pe)}te=p+2*v,Pe=z*te;for(let Te=0;Te<W;Te++){var me=D[Te];fe(me[0]+Pe,me[1]+Pe,me[2]+Pe)}}else{for(let Pe=0;Pe<W;Pe++){var Le=D[Pe];fe(Le[2],Le[1],Le[0])}for(let Pe=0;Pe<W;Pe++){var Je=D[Pe];fe(Je[0]+z*p,Je[1]+z*p,Je[2]+z*p)}}r.addGroup(he,i.length/3-he,0)})(),function(){var te=i.length/3;let he=0;Fe(F,he),he+=F.length;for(let me=0,Le=C.length;me<Le;me++){var ie=C[me];Fe(ie,he),he+=ie.length}r.addGroup(te,i.length/3-te,1)}()})(e[s]);this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(a,2)),this.computeVertexNormals()}toJSON(){var e=super.toJSON();return function(t,r,i){if(i.shapes=[],Array.isArray(t))for(let s=0,o=t.length;s<o;s++){var a=t[s];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return r.extrudePath!==void 0&&(i.options.extrudePath=r.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const r=[];for(let s=0,o=e.shapes.length;s<o;s++){var i=t[e.shapes[s]];r.push(i)}var a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Gu[a.type]().fromJSON(a)),new pn(r,e.options)}}const qm={generateTopUV:function(n,e,t,r,i){var a=e[3*t],s=e[3*t+1],o=e[3*r],t=e[3*r+1],r=e[3*i],i=e[3*i+1];return[new Z(a,s),new Z(o,t),new Z(r,i)]},generateSideWallUV:function(n,e,t,r,i,a){var s=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*r],u=e[3*r+1],p=e[3*r+2],c=e[3*i],d=e[3*i+1],t=e[3*i+2],r=e[3*a],i=e[3*a+1],a=e[3*a+2];return Math.abs(o-u)<Math.abs(s-h)?[new Z(s,1-l),new Z(h,1-p),new Z(c,1-t),new Z(r,1-a)]:[new Z(o,1-l),new Z(u,1-p),new Z(d,1-t),new Z(i,1-a)]}};class jo extends Ue{constructor(e=new $n([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],i=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,l,u),o+=l,l=0;function h(u){var p=i.length/3,u=u.extractPoints(t);let c=u.shape;const d=u.holes;ei.isClockWise(c)===!1&&(c=c.reverse());for(let _=0,T=d.length;_<T;_++){const b=d[_];ei.isClockWise(b)===!0&&(d[_]=b.reverse())}var f=ei.triangulateShape(c,d);for(let _=0,T=d.length;_<T;_++){var m=d[_];c=c.concat(m)}for(let _=0,T=c.length;_<T;_++){var g=c[_];i.push(g.x,g.y,0),a.push(0,0,1),s.push(g.x,g.y)}for(let _=0,T=f.length;_<T;_++){var v=f[_],y=v[0]+p,x=v[1]+p,v=v[2]+p;r.push(y,x,v),l+=3}}this.setIndex(r),this.setAttribute("position",new Ve(i,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(s,2))}toJSON(){var e=super.toJSON();return function(t,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){var i=t[a];r.shapes.push(i.uuid)}else r.shapes.push(t.uuid);return r}(this.parameters.shapes,e)}static fromJSON(e,t){const r=[];for(let a=0,s=e.shapes.length;a<s;a++){var i=t[e.shapes[a]];r.push(i)}return new jo(r,e.curveSegments)}}class Qo extends Ue{constructor(e=1,t=32,r=16,i=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));var l=Math.min(s+o,Math.PI);let h=0;const u=[],p=new R,c=new R,d=[],f=[],m=[],g=[];for(let M=0;M<=r;M++){const A=[];var v=M/r;let N=0;M==0&&s==0?N=.5/t:M==r&&l==Math.PI&&(N=-.5/t);for(let I=0;I<=t;I++){var y=I/t;p.x=-e*Math.cos(i+y*a)*Math.sin(s+v*o),p.y=e*Math.cos(s+v*o),p.z=e*Math.sin(i+y*a)*Math.sin(s+v*o),f.push(p.x,p.y,p.z),c.copy(p).normalize(),m.push(c.x,c.y,c.z),g.push(y+N,1-v),A.push(h++)}u.push(A)}for(let M=0;M<r;M++)for(let A=0;A<t;A++){var x=u[M][A+1],_=u[M][A],T=u[M+1][A],b=u[M+1][A+1];(M!==0||0<s)&&d.push(x,_,b),(M!==r-1||l<Math.PI)&&d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(g,2))}static fromJSON(e){return new Qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}(class extends ke{constructor(n){super(),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this}}).prototype.isShadowMaterial=!0;class wi extends ke{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}wi.prototype.isMeshStandardMaterial=!0;class fn extends wi{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new se(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new se(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){0<this._sheen!=0<e&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){0<this._clearcoat!=0<e&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){0<this._transmission!=0<e&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenTint.copy(e.sheenTint),this.sheenRoughness=e.sheenRoughness,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}fn.prototype.isMeshPhysicalMaterial=!0,class extends ke{constructor(n){super(),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.specular.copy(n.specular),this.shininess=n.shininess,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this}}.prototype.isMeshPhongMaterial=!0,class extends ke{constructor(n){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.gradientMap=n.gradientMap,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this}}.prototype.isMeshToonMaterial=!0,class extends ke{constructor(n){super(),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this}}.prototype.isMeshLambertMaterial=class extends ke{constructor(n){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(n)}copy(n){return super.copy(n),this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.flatShading=n.flatShading,this}}.prototype.isMeshNormalMaterial=!0,class extends ke{constructor(n){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(n)}copy(n){return super.copy(n),this.defines={MATCAP:""},this.color.copy(n.color),this.matcap=n.matcap,this.map=n.map,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.flatShading=n.flatShading,this}}.prototype.isMeshMatcapMaterial=!0,class extends Ti{constructor(n){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(n)}copy(n){return super.copy(n),this.scale=n.scale,this.dashSize=n.dashSize,this.gapSize=n.gapSize,this}}.prototype.isLineDashedMaterial=!0;const Xe={arraySlice:function(n,e,t){return Xe.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){var e=n.length;const t=new Array(e);for(let r=0;r!==e;++r)t[r]=r;return t.sort(function(r,i){return n[r]-n[i]}),t},sortedArray:function(n,e,t){var r=n.length;const i=new n.constructor(r);for(let s=0,o=0;o!==r;++s){var a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=n[a+l]}return i},flattenJSON:function(n,e,t,r){let i=1,a=n[0];for(;a!==void 0&&a[r]===void 0;)a=n[i++];if(a!==void 0){let s=a[r];if(s!==void 0)if(Array.isArray(s))for(;s=a[r],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=n[i++],a!==void 0;);else if(s.toArray!==void 0)for(;s=a[r],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=n[i++],a!==void 0;);else for(;s=a[r],s!==void 0&&(e.push(a.time),t.push(s)),a=n[i++],a!==void 0;);}},subclip:function(n,e,t,r,i=30){const a=n.clone();a.name=e;const s=[];for(let u=0;u<a.tracks.length;++u){const p=a.tracks[u];var o=p.getValueSize();const c=[],d=[];for(let f=0;f<p.times.length;++f){var l=p.times[f]*i;if(!(l<t||r<=l)){c.push(p.times[f]);for(let m=0;m<o;++m)d.push(p.values[f*o+m])}}c.length!==0&&(p.times=Xe.convertArray(c,p.times.constructor),p.values=Xe.convertArray(d,p.values.constructor),s.push(p))}a.tracks=s;let h=1/0;for(let u=0;u<a.tracks.length;++u)h>a.tracks[u].times[0]&&(h=a.tracks[u].times[0]);for(let u=0;u<a.tracks.length;++u)a.tracks[u].shift(-1*h);return a.resetDuration(),a},makeClipAdditive:function(n,e=0,t=n,r=30){var i=t.tracks.length,a=e/(r=r<=0?30:r);for(let m=0;m<i;++m){const g=t.tracks[m],v=g.ValueTypeName;if(v!=="bool"&&v!=="string"){const y=n.tracks.find(function(x){return x.name===g.name&&x.ValueTypeName===v});if(y!==void 0){let x=0;var s=g.getValueSize();g.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(x=s/3);let _=0;var o=y.getValueSize();y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(_=o/3);var l=g.times.length-1;let T;if(a<=g.times[0]){var h=x,u=s-x;T=Xe.arraySlice(g.values,h,u)}else if(a>=g.times[l]){var l=l*s+x,p=l+s-x;T=Xe.arraySlice(g.values,l,p)}else{const b=g.createInterpolant();p=x,s=s-x,b.evaluate(a),T=Xe.arraySlice(b.resultBuffer,p,s)}v==="quaternion"&&new Zt().fromArray(T).normalize().conjugate().toArray(T);var c=y.times.length;for(let b=0;b<c;++b){var d=b*o+_;if(v==="quaternion")Zt.multiplyQuaternionsFlat(y.values,d,T,0,y.values,d);else{var f=o-2*_;for(let M=0;M<f;++M)y.values[d+M]-=T[M]}}}}}return n.blendMode=2501,n}};class Fr{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){var t=this.parameterPositions;let r=this._cachedIndex,i=t[r],a=t[r-1];t:{e:{let u;r:{i:if(!(e<i)){for(var s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,a)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}u=t.length;break r}if(e>=a)break t;var o=t[1];e<o&&(r=2,a=o);for(var l=r-2;;){if(a===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(r===l)break;if(i=a,a=t[--r-1],e>=a)break e}u=r,r=0}for(;r<u;){var h=r+u>>>1;e<t[h]?u=h:r=1+h}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,a,e)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let s=0;s!==i;++s)t[s]=r[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Fr.prototype.beforeStart_=Fr.prototype.copySampleValue_,Fr.prototype.afterEnd_=Fr.prototype.copySampleValue_;class Zm extends Fr{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,r){var i=this.parameterPositions;let a=e-2,s=e+1,o=i[a],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case gh:a=e,o=2*t-r;break;case 2402:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=r}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:s=e,l=2*r-t;break;case 2402:s=1,l=r+i[1]-i[0];break;default:s=e-1,l=t}var h=.5*(r-t),u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-r),this._offsetPrev=a*u,this._offsetNext=s*u}interpolate_(e,t,r,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,d=this._weightNext,f=(r-t)/(i-t),m=f*f,g=m*f;var v=-c*g+2*c*m-c*f,y=(1+c)*g+(-1.5-2*c)*m+(-.5+c)*f+1,x=(-1-d)*g+(1.5+d)*m+.5*f,_=d*g-d*m;for(let T=0;T!==o;++T)a[T]=v*s[u+T]+y*s[h+T]+x*s[l+T]+_*s[p+T];return a}}class Jm extends Fr{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(r-t)/(i-t),p=1-u;for(let c=0;c!==o;++c)a[c]=s[h+c]*p+s[l+c]*u;return a}}class Km extends Fr{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mr{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xe.convertArray(t,this.TimeBufferType),this.values=Xe.convertArray(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;var i;return t.toJSON!==this.toJSON?r=t.toJSON(e):(r={name:e.name,times:Xe.convertArray(e.times,Array),values:Xe.convertArray(e.values,Array)},(i=e.getInterpolation())!==e.DefaultInterpolation&&(r.interpolation=i)),r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zn:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t!==void 0)return this.createInterpolant=t,this;var r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(r);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",r),this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zn;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){var r,i=this.times,a=i.length;let s=0,o=a-1;for(;s!==a&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;return++o,s===0&&o===a||(s>=o&&(o=Math.max(o,1),s=o-1),r=this.getValueSize(),this.times=Xe.arraySlice(i,s,o),this.values=Xe.arraySlice(this.values,s*r,o*r)),this}validate(){let e=!0;var t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);var r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let h=0;h!==a;h++){var o=r[h];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,o,s),e=!1;break}s=o}if(i!==void 0&&Xe.isTypedArray(i))for(let h=0,u=i.length;h!==u;++h){var l=i[h];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,l),e=!1;break}}return e}optimize(){const e=Xe.arraySlice(this.times),t=Xe.arraySlice(this.values),r=this.getValueSize(),i=this.getInterpolation()===2302,a=e.length-1;let s=1;for(let f=1;f<a;++f){let m=!1;var o=e[f];if(o!==e[f+1]&&(f!==1||o!==e[0]))if(i)m=!0;else{var l=f*r,h=l-r,u=l+r;for(let g=0;g!==r;++g){var p=t[l+g];if(p!==t[h+g]||p!==t[u+g]){m=!0;break}}}if(m){if(f!==s){e[s]=e[f];var c=f*r,d=s*r;for(let g=0;g!==r;++g)t[d+g]=t[c+g]}++s}}if(0<a){e[s]=e[a];for(let f=a*r,m=s*r,g=0;g!==r;++g)t[m+g]=t[f+g];++s}return s!==e.length?(this.times=Xe.arraySlice(e,0,s),this.values=Xe.arraySlice(t,0,s*r)):(this.times=e,this.values=t),this}clone(){var e=Xe.arraySlice(this.times,0),t=Xe.arraySlice(this.values,0);const r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mr.prototype.TimeBufferType=Float32Array,mr.prototype.ValueBufferType=Float32Array,mr.prototype.DefaultInterpolation=Wi;class mn extends mr{}mn.prototype.ValueTypeName="bool",mn.prototype.ValueBufferType=Array,mn.prototype.DefaultInterpolation=zn,mn.prototype.InterpolantFactoryMethodLinear=void 0,mn.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends mr{}Qu.prototype.ValueTypeName="color";class ia extends mr{}ia.prototype.ValueTypeName="number";class $m extends Fr{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){var a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(r-t)/(i-t);let h=e*o;for(var u=h+o;h!==u;h+=4)Zt.slerpFlat(a,0,s,h-o,s,h,l);return a}}class Si extends mr{InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}}Si.prototype.ValueTypeName="quaternion",Si.prototype.DefaultInterpolation=Wi,Si.prototype.InterpolantFactoryMethodSmooth=void 0;class gn extends mr{}gn.prototype.ValueTypeName="string",gn.prototype.ValueBufferType=Array,gn.prototype.DefaultInterpolation=zn,gn.prototype.InterpolantFactoryMethodLinear=void 0,gn.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends mr{}class eg{constructor(e,t=-1,r,i=2500){this.name=e,this.tracks=r,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,i=1/(e.fps||1);for(let s=0,o=r.length;s!==o;++s)t.push(function(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const h=function(c){switch(c.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ia;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return Qu;case"quaternion":return Si;case"bool":case"boolean":return mn;case"string":return gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+c)}(l.type);{var u,p;l.times===void 0&&(u=[],p=[],Xe.flattenJSON(l.keys,u,p,"value"),l.times=u,l.values=p)}return h.parse!==void 0?h.parse(l):new h(l.name,l.times,l.values,l.interpolation)}(r[s]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],r=e.tracks;e={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=r.length;i!==a;++i)t.push(mr.toJSON(r[i]));return e}static CreateFromMorphTargetSequence(e,t,r,i){var a=t.length;const s=[];for(let l=0;l<a;l++){let h=[],u=[];h.push((l+a-1)%a,l,(l+1)%a),u.push(0,1,0);var o=Xe.getKeyframeOrder(h);h=Xe.sortedArray(h,1,o),u=Xe.sortedArray(u,1,o),i||h[0]!==0||(h.push(a),u.push(u[0])),s.push(new ia(".morphTargetInfluences["+t[l].name+"]",h,u).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;Array.isArray(e)||(r=e.geometry&&e.geometry.animations||e.animations);for(let i=0;i<r.length;i++)if(r[i].name===t)return r[i];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const i={};var a=/^([\w-]*?)([\d]+)$/;for(let l=0,h=e.length;l<h;l++){const u=e[l];var s=u.name.match(a);if(s&&1<s.length){s=s[1];let p=i[s];p||(i[s]=p=[]),p.push(u)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,r));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;function r(d,f,m,g,v){var y,x;m.length!==0&&(y=[],x=[],Xe.flattenJSON(m,y,x,g),y.length!==0&&v.push(new d(f,y,x)))}const i=[];var a=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;var h=e.hierarchy||[];for(let d=0;d<h.length;d++){var u=h[d].keys;if(u&&u.length!==0)if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let g=0;g<u[m].morphTargets.length;g++)f[u[m].morphTargets[g]]=-1;for(const g in f){const v=[],y=[];for(let x=0;x!==u[m].morphTargets.length;++x){var p=u[m];v.push(p.time),y.push(p.morphTarget===g?1:0)}i.push(new ia(".morphTargetInfluence["+g+"]",v,y))}l=f.length*(s||1)}else{var c=".bones["+t[d].name+"]";r(na,c+".position",u,"pos",i),r(Si,c+".quaternion",u,"rot",i),r(na,c+".scale",u,"scl",i)}}return i.length===0?null:new this(a,l,i,o)}resetDuration(){let e=0;for(let r=0,i=this.tracks.length;r!==i;++r){var t=this.tracks[r];e=Math.max(e,t.times[t.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}const vn={enabled:!(na.prototype.ValueTypeName="vector"),files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},tg=new class{constructor(n,e,t){const r=this;let i=!1,a=0,s=0,o;const l=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(h){s++,i===!1&&r.onStart!==void 0&&r.onStart(h,a,s),i=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,s),a===s&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){return h=l.indexOf(h),h!==-1&&l.splice(h,2),this},this.getHandler=function(h){for(let p=0,c=l.length;p<c;p+=2){const d=l[p];var u=l[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return u}return null}}};class Cr{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ur={};class qo extends Cr{constructor(e){super(e)}load(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=vn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;if(ur[e]===void 0){var o=e.match(/^data:(.*?)(;base64)?,(.*)$/);let p;if(o){var l=o[1],h=!!o[2];let c=o[3];c=decodeURIComponent(c),h&&(c=atob(c));try{let d;var u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":const f=new Uint8Array(c.length);for(let g=0;g<c.length;g++)f[g]=c.charCodeAt(g);d=u==="blob"?new Blob([f.buffer],{type:l}):f.buffer;break;case"document":d=new DOMParser().parseFromString(c,l);break;case"json":d=JSON.parse(c);break;default:d=c}setTimeout(function(){t&&t(d),a.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),a.manager.itemError(e),a.manager.itemEnd(e)},0)}}else{ur[e]=[],ur[e].push({onLoad:t,onProgress:r,onError:i}),p=new XMLHttpRequest,p.open("GET",e,!0),p.addEventListener("load",function(c){var d=this.response,f=ur[e];if(delete ur[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),vn.add(e,d);for(let m=0,g=f.length;m<g;m++){const v=f[m];v.onLoad&&v.onLoad(d)}a.manager.itemEnd(e)}else{for(let m=0,g=f.length;m<g;m++){const v=f[m];v.onError&&v.onError(c)}a.manager.itemError(e),a.manager.itemEnd(e)}},!1),p.addEventListener("progress",function(c){var d=ur[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onProgress&&g.onProgress(c)}},!1),p.addEventListener("error",function(c){var d=ur[e];delete ur[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onError&&g.onError(c)}a.manager.itemError(e),a.manager.itemEnd(e)},!1),p.addEventListener("abort",function(c){var d=ur[e];delete ur[e];for(let f=0,m=d.length;f<m;f++){const g=d[f];g.onError&&g.onError(c)}a.manager.itemError(e),a.manager.itemEnd(e)},!1),this.responseType!==void 0&&(p.responseType=this.responseType),this.withCredentials!==void 0&&(p.withCredentials=this.withCredentials),p.overrideMimeType&&p.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const c in this.requestHeader)p.setRequestHeader(c,this.requestHeader[c]);p.send(null)}return a.manager.itemStart(e),p}ur[e].push({onLoad:t,onProgress:r,onError:i})}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qu extends Cr{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=vn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Oa("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1),vn.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class rg extends Cr{constructor(e){super(e)}load(e,t,r,i){const a=new ts,s=new qu(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;for(let l=0;l<e.length;++l)(function(h){s.load(e[h],function(u){a.images[h]=u,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,i)})(l);return a}}class ig extends Cr{constructor(e){super(e)}load(e,t,r,i){const a=this,s=new Co,o=new qo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(l){l=a.parse(l),l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:yt,s.wrapT=l.wrapT!==void 0?l.wrapT:yt,s.magFilter=l.magFilter!==void 0?l.magFilter:Ye,s.minFilter=l.minFilter!==void 0?l.minFilter:Ye,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=xi),l.mipmapCount===1&&(s.minFilter=Ye),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l))},r,i),s}}class _s extends Cr{constructor(e){super(e)}load(e,t,r,i){const a=new je,s=new qu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,i),a}}class Gt extends Se{constructor(e,t=1){super(),this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Gt.prototype.isLight=!0,class extends Gt{constructor(n,e,t){super(n,t),this.type="HemisphereLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.groundColor=new se(e)}copy(n){return Gt.prototype.copy.call(this,n),this.groundColor.copy(n.groundColor),this}}.prototype.isHemisphereLight=!0;const Zu=new ce,Ju=new R,Ku=new R;class Zo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(t.projectionMatrix),r.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $u extends Zo{constructor(){super(new Mt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera;var r=2*Gn*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;r===t.fov&&i===t.aspect&&a===t.far||(t.fov=r,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}$u.prototype.isSpotLightShadow=!0;class ec extends Gt{constructor(e,t,r=0,i=Math.PI/3,a=0,s=1){super(e,t),this.type="SpotLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.distance=r,this.angle=i,this.penumbra=a,this.decay=s,this.shadow=new $u}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ec.prototype.isSpotLight=!0;const tc=new ce,aa=new R,Jo=new R;class rc extends Zo{constructor(){super(new Mt(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix;var a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),r.position.copy(aa),Jo.copy(r.position),Jo.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Jo),r.updateMatrixWorld(),i.makeTranslation(-aa.x,-aa.y,-aa.z),tc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc)}}rc.prototype.isPointLightShadow=!0;class Ko extends Gt{constructor(e,t,r=0,i=1){super(e,t),this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new rc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Ko.prototype.isPointLight=!0;class ic extends Zo{constructor(){super(new on(-5,5,5,-5,.5,500))}}ic.prototype.isDirectionalLightShadow=!0;class $o extends Gt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.shadow=new ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}$o.prototype.isDirectionalLight=!0;class nc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){var r=e.x,i=e.y,a=e.z,e=this.coefficients;return t.copy(e[0]).multiplyScalar(.282095),t.addScaledVector(e[1],.488603*i),t.addScaledVector(e[2],.488603*a),t.addScaledVector(e[3],.488603*r),t.addScaledVector(e[4],r*i*1.092548),t.addScaledVector(e[5],i*a*1.092548),t.addScaledVector(e[6],.315392*(3*a*a-1)),t.addScaledVector(e[7],r*a*1.092548),t.addScaledVector(e[8],.546274*(r*r-i*i)),t}getIrradianceAt(e,t){var r=e.x,i=e.y,a=e.z,e=this.coefficients;return t.copy(e[0]).multiplyScalar(.886227),t.addScaledVector(e[1],1.023328*i),t.addScaledVector(e[2],1.023328*a),t.addScaledVector(e[3],1.023328*r),t.addScaledVector(e[4],.858086*r*i),t.addScaledVector(e[5],.858086*i*a),t.addScaledVector(e[6],.743125*a*a-.247708),t.addScaledVector(e[7],.858086*r*a),t.addScaledVector(e[8],.429043*(r*r-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(e.coefficients[r],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let r=0;r<9;r++)this.coefficients[r].lerp(e.coefficients[r],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const r=this.coefficients;for(let i=0;i<9;i++)r[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const r=this.coefficients;for(let i=0;i<9;i++)r[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){var r=e.x,i=e.y,e=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*e,t[3]=.488603*r,t[4]=1.092548*r*i,t[5]=1.092548*i*e,t[6]=.315392*(3*e*e-1),t[7]=1.092548*r*e,t[8]=.546274*(r*r-i*i)}}nc.prototype.isSphericalHarmonics3=class extends Gt{constructor(n,e,t=10,r=10){super(n,e),this.type="RectAreaLight",this.width=t,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(n){this.intensity=n/(this.width*this.height*Math.PI)}copy(n){return super.copy(n),this.width=n.width,this.height=n.height,this}toJSON(n){const e=super.toJSON(n);return e.object.width=this.width,e.object.height=this.height,e}}.prototype.isRectAreaLight=class extends Gt{constructor(n,e){super(n,e),this.type="AmbientLight"}}.prototype.isAmbientLight=!0;class el extends Gt{constructor(e=new nc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}el.prototype.isLightProbe=!0;class xn{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let r=0,i=e.length;r<i;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch(r){return t}}static extractUrlBase(e){var t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}(class extends Ue{});class ac extends Cr{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=vn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){vn.add(e,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){i&&i(l),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}ac.prototype.isImageBitmapLoader=!0,class extends el{constructor(n,e,t=1){super(void 0,t);var r=new se().set(n),t=new se().set(e),n=new R(r.r,r.g,r.b),e=new R(t.r,t.g,t.b),r=Math.sqrt(Math.PI),t=r*Math.sqrt(.75);this.sh.coefficients[0].copy(n).add(e).multiplyScalar(r),this.sh.coefficients[1].copy(n).sub(e).multiplyScalar(t)}}.prototype.isHemisphereLightProbe=!0,class extends el{constructor(n,e=1){super(void 0,e);n=new se().set(n),this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}.prototype.isAmbientLightProbe=!0;class sc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;return this.autoStart&&!this.running?(this.start(),0):(this.running&&(t=oc(),e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e),e);var t}}function oc(){return(typeof performance=="undefined"?Date:performance).now()}(class extends Se{});var Nr="\\[\\]\\.:\\/";const ng=new RegExp("["+Nr+"]","g");var sa="[^"+Nr+"]",Ai="[^"+Nr.replace("\\.","")+"]",Ir=/((?:WC+[\/:])*)/.source.replace("WC",sa),it=/(WCOD+)?/.source.replace("WCOD",Ai),$t=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sa),Nr=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sa);const ag=new RegExp("^"+Ir+it+$t+Nr+"$"),sg=["material","materials","bones"];class Re{constructor(e,t,r){this.path=t,this.parsedPath=r||Re.parseTrackName(t),this.node=Re.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return new(e&&e.isAnimationObjectGroup?Re.Composite:Re)(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){var t=ag.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]};var i=r.nodeName&&r.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1&&(t=r.nodeName.substring(i+1),sg.indexOf(t)!==-1&&(r.nodeName=r.nodeName.substring(0,i),r.objectName=t)),r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){var r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const i=function(a){for(let o=0;o<a.length;o++){var s=a[o];if(s.name===t||s.uuid===t||(s=i(s.children),s))return s}return null};if(e=i(e.children),e)return e}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){var r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)e[t++]=r[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;var t=this.parsedPath,r=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=Re.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,e){if(r){let o=t.objectIndex;switch(r){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===o){o=l;break}break;default:if(e[r]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[r]}if(o!==void 0){if(e[o]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[o]}}var s=e[i];if(s!==void 0){let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}else t=t.nodeName,console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+i+" but it wasn't found.",e)}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Re.Composite=class{constructor(n,e,t){t=t||Re.parseTrackName(e),this._targetGroup=n,this._bindings=n.subscribe_(e,t)}getValue(n,e){this.bind();const t=this._targetGroup.nCachedObjects_,r=this._bindings[t];r!==void 0&&r.getValue(n,e)}setValue(n,e){const t=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=t.length;r!==i;++r)t[r].setValue(n,e)}bind(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray],Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class extends kr{},new Float32Array(1),class extends un{constructor(n,e,t=1){super(n,e),this.meshPerAttribute=t}copy(n){return super.copy(n),this.meshPerAttribute=n.meshPerAttribute,this}clone(n){const e=super.clone(n);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(n){const e=super.toJSON(n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}.prototype.isInstancedInterleavedBuffer=!0,class extends Se{};const ti=new R,ys=new ce,tl=new ce,lc=new Float32Array(1),og=new Int32Array(lc.buffer);class rl{static toHalfFloat(e){65504<e&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),e=65504),lc[0]=e;var t=og[0];let r=t>>16&32768,i=t>>12&2047;return e=t>>23&255,e<103||(142<e?(r|=31744,r|=(e==255?0:1)&&8388607&t):e<113?(i|=2048,r|=(i>>114-e)+(i>>113-e&1)):(r|=e-112<<10|i>>1,r+=1&i)),r}}Ht.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(Ht.prototype),(n.prototype.constructor=n).prototype.getPoint=e,n},Wo.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)},class extends cn{constructor(n=10,e=10,t=4473924,r=8947848){t=new se(t),r=new se(r);var i=e/2,a=n/e,s=n/2;const o=[],l=[];for(let u=0,p=0,c=-s;u<=e;u++,c+=a){o.push(-s,0,c,s,0,c),o.push(c,0,-s,c,0,s);const d=u===i?t:r;d.toArray(l,p),p+=3,d.toArray(l,p),p+=3,d.toArray(l,p),p+=3,d.toArray(l,p),p+=3}const h=new Ue;h.setAttribute("position",new Ve(o,3)),h.setAttribute("color",new Ve(l,3)),n=new Ti({vertexColors:!0,toneMapped:!1}),super(h,n),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends cn{constructor(n){var e=function h(u){const p=[];u&&u.isBone&&p.push(u);for(let c=0;c<u.children.length;c++)p.push.apply(p,h(u.children[c]));return p}(n);const t=new Ue,r=[],i=[];var a=new se(0,0,1),s=new se(0,1,0);for(let h=0;h<e.length;h++){var o=e[h];o.parent&&o.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(a.r,a.g,a.b),i.push(s.r,s.g,s.b))}t.setAttribute("position",new Ve(r,3)),t.setAttribute("color",new Ve(i,3));var l=new Ti({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(t,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=n,this.bones=e,this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(n){var e=this.bones;const t=this.geometry,r=t.getAttribute("position");tl.copy(this.root.matrixWorld).invert();for(let a=0,s=0;a<e.length;a++){var i=e[a];i.parent&&i.parent.isBone&&(ys.multiplyMatrices(tl,i.matrixWorld),ti.setFromMatrixPosition(ys),r.setXYZ(s,ti.x,ti.y,ti.z),ys.multiplyMatrices(tl,i.parent.matrixWorld),ti.setFromMatrixPosition(ys),r.setXYZ(s+1,ti.x,ti.y,ti.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(n)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Cr.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),xn.extractUrlBase(n)},Cr.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Jt.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)},Jt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Jt.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},Jt.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)},Jt.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)},Mi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},is.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)},mt.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)},mt.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},mt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},mt.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)},mt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},mt.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()},ce.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)},ce.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)},ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)},ce.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)},ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ce.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},ce.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ce.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)},ce.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ce.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)},ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ce.prototype.makeFrustum=function(n,e,t,r,i,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,r,t,i,a)},ce.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()},Rr.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)},Zt.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)},Zt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Zi.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)},Zi.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)},Zi.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)},ot.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},ot.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)},ot.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)},ot.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)},ot.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)},ot.barycoordFromPoint=function(n,e,t,r,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(n,e,t,r,i)},ot.normal=function(n,e,t,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(n,e,t,r)},$n.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)},$n.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new pn(this,n)},$n.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new jo(this,n)},Z.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},Z.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},R.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)},R.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)},R.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)},R.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)},R.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},R.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)},R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},De.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)},De.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Se.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)},Se.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Se.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)},Se.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Se.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)},Object.defineProperties(Se.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Qe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Qe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Ro.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Mt.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)},Object.defineProperties(Gt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}}),Object.defineProperties(et.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Da},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Da)}}}),et.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Da:Bn),this},et.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},et.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Ue.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)},Ue.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new et(e,arguments[2])))},Ue.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)},Ue.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},Ue.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},Ue.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)},Ue.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)},Object.defineProperties(Ue.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),un.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Da:Bn),this},un.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},pn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},pn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},pn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Po.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(ke.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(Bt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}}),Oe.prototype.clearTarget=function(n,e,t,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,r)},Oe.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)},Oe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Oe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Oe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Oe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Oe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Oe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Oe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Oe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Oe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Oe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Oe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Oe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Oe.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)},Oe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Oe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Oe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Oe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Oe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Oe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Oe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Oe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Oe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Oe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Oe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?Ut:pt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(_u.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}}),_o.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)},_o.prototype.clear=function(n,e,t,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,r)},Yi.crossOrigin=void 0,Yi.loadTexture=function(n,e,t,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new _s;i.setCrossOrigin(this.crossOrigin);const a=i.load(n,t,void 0,r);return e&&(a.mapping=e),a},Yi.loadTextureCube=function(n,e,t,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new rg;i.setCrossOrigin(this.crossOrigin);const a=i.load(n,t,void 0,r);return e&&(a.mapping=e),a},Yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"133"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="133");class oa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const lg=new on(-1,1,1,-1,0,1),il=new Ue;il.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),il.setAttribute("uv",new Ve([0,2,0,0,2,0],2));class hc{constructor(e){this._mesh=new Qe(il,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var uc={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};const cc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _n extends oa{constructor(e,t,r,i){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=i,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new se(0,0,0);var a={minFilter:Ye,magFilter:Ye,format:lt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(s,o,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Rt(s,o,a);u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new Rt(s,o,a);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}e=cc,this.highPassUniforms=es.clone(e.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,defines:{}}),this.separableBlurMaterials=[];var l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Z(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t=uc,this.copyUniforms=es.clone(t.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Bt({uniforms:this.copyUniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:Bs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new hr,this.fsQuad=new hc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let r=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(r,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,i),this.renderTargetsVertical[a].setSize(r,i),this.separableBlurMaterials[a].uniforms.texSize.value=new Z(r,i),r=Math.round(r/2),i=Math.round(i/2)}render(e,t,r,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();var s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new Bt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}_n.BlurDirectionX=new Z(1,0),_n.BlurDirectionY=new Z(0,1);class bs extends oa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=es.clone(e.uniforms),this.material=new Bt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hc(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}}class dc extends oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){var i=e.getContext();const a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;o=this.inverse?(s=0,1):(s=1,0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class hg extends oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class pc{constructor(e,t){var r,i;this.renderer=e,t===void 0?(r={minFilter:Ye,magFilter:Ye,format:lt},i=e.getSize(new Z),this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,(t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"):(this._pixelRatio=1,this._width=t.width,this._height=t.height),this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],bs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new bs(uc),this.clock=new sc}swapBuffers(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){e=this.passes.indexOf(e),e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());var t=this.renderer.getRenderTarget();let r=!1;for(let a=0,s=this.passes.length;a<s;a++){const o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),o.needsSwap){if(r){var i=this.renderer.getContext();const l=this.renderer.state.buffers.stencil;l.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}dc!==void 0&&(o instanceof dc?r=!0:o instanceof hg&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){var t;e===void 0&&(t=this.renderer.getSize(new Z),this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)),this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;var r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new on(-1,1,1,-1,0,1);const fc=new Ue;fc.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),fc.setAttribute("uv",new Ve([0,2,0,0,2,0],2));class ug extends oa{constructor(e,t,r,i,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,r){var i=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}class cg extends ig{constructor(e){super(e),this.type=dr}parse(e){const t=-1,r=1,i=2,a=3,s=4,o=function(D,F){switch(D){case r:console.error("THREE.RGBELoader Read Error: "+(F||""));break;case i:console.error("THREE.RGBELoader Write Error: "+(F||""));break;case a:console.error("THREE.RGBELoader Bad File Format: "+(F||""));break;default:case s:console.error("THREE.RGBELoader: Error: "+(F||""))}return t},l=1,h=2,u=4,p=`
`,c=function(D,F,U){F=F||1024;let H=D.pos,z=-1,W=0,ee="",q=String.fromCharCode.apply(null,new Uint16Array(D.subarray(H,H+128)));for(;(z=q.indexOf(p))<0&&W<F&&H<D.byteLength;)ee+=q,W+=q.length,H+=128,q+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(H,H+128)));return-1<z&&(U!==!1&&(D.pos+=W+z+1),ee+q.slice(0,z))},d=new Uint8Array(e);d.pos=0;var f,m,g,v,y,x,_,T,b,M,A=function(D){const F=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,W={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ee,q;if(D.pos>=D.byteLength||!(ee=c(D)))return o(r,"no header found");if(!(q=ee.match(/^#\?(\S+)/)))return o(a,"bad initial token");for(W.valid|=l,W.programtype=q[1],W.string+=ee+`
`;ee=c(D),ee!==!1;)if(W.string+=ee+`
`,ee.charAt(0)!=="#"){if((q=ee.match(F))&&(W.gamma=parseFloat(q[1],10)),(q=ee.match(U))&&(W.exposure=parseFloat(q[1],10)),(q=ee.match(H))&&(W.valid|=h,W.format=q[1]),(q=ee.match(z))&&(W.valid|=u,W.height=parseInt(q[1],10),W.width=parseInt(q[2],10)),W.valid&h&&W.valid&u)break}else W.comments+=ee+`
`;return W.valid&h?W.valid&u?W:o(a,"missing image size specifier"):o(a,"missing format specifier")}(d);if(t!==A){var N=A.width,e=A.height,I=function(F,U,H){var z=U;if(z<8||32767<z||F[0]!==2||F[1]!==2||128&F[2])return new Uint8Array(F);if(z!==(F[2]<<8|F[3]))return o(a,"wrong scanline width");const W=new Uint8Array(4*U*H);if(!W.length)return o(s,"unable to allocate buffer space");let ee=0,q=0;var Q=4*z;const S=new Uint8Array(4),L=new Uint8Array(Q);let k=H;for(;0<k&&q<F.byteLength;){if(q+4>F.byteLength)return o(r);if(S[0]=F[q++],S[1]=F[q++],S[2]=F[q++],S[3]=F[q++],S[0]!=2||S[1]!=2||(S[2]<<8|S[3])!=z)return o(a,"bad rgbe scanline format");let P=0,V;for(;P<Q&&q<F.byteLength;){V=F[q++];var X=128<V;if(X&&(V-=128),V===0||P+V>Q)return o(a,"bad scanline data");if(X){var w=F[q++];for(let B=0;B<V;B++)L[P++]=w}else L.set(F.subarray(q,q+V),P),P+=V,q+=V}var K=z;for(let B=0;B<K;B++){var oe=0;W[ee]=L[B+0],oe+=z,W[ee+1]=L[B+oe],oe+=z,W[ee+2]=L[B+oe],oe+=z,W[ee+3]=L[B+oe],ee+=4}k--}return W}(d.subarray(d.pos),N,e);if(t!==I){let F,U,H,z;switch(this.type){case ar:F=I,U=nh,H=ar;break;case Qt:z=I.length/4;var C=new Float32Array(3*z);for(let W=0;W<z;W++)x=I,_=4*W,T=C,b=3*W,M=void 0,M=x[_+3],M=Math.pow(2,M-128)/255,T[b+0]=x[_+0]*M,T[b+1]=x[_+1]*M,T[b+2]=x[_+2]*M;F=C,U=wr,H=Qt;break;case dr:z=I.length/4;var O=new Uint16Array(3*z);for(let W=0;W<z;W++)f=I,m=4*W,g=O,v=3*W,y=void 0,y=f[m+3],y=Math.pow(2,y-128)/255,g[v+0]=rl.toHalfFloat(Math.min(f[m+0]*y,65504)),g[v+1]=rl.toHalfFloat(Math.min(f[m+1]*y,65504)),g[v+2]=rl.toHalfFloat(Math.min(f[m+2]*y,65504));F=O,U=wr,H=dr;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:N,height:e,data:F,header:A.string,gamma:A.gamma,exposure:A.exposure,format:U,type:H}}}return null}setDataType(e){return this.type=e,this}load(e,t,r,i){return super.load(e,function(a,s){switch(a.type){case ar:a.encoding=3002,a.minFilter=$e,a.magFilter=$e,a.generateMipmaps=!1,a.flipY=!0;break;case Qt:case dr:a.encoding=pt,a.minFilter=Ye,a.magFilter=Ye,a.generateMipmaps=!1,a.flipY=!0}t&&t(a,s)},r,i)}}const dg={uniforms:{tDiffuse:{value:null},resolution:{value:new Z(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`};function Dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mc(n,e){n.prototype=Object.create(e.prototype),(n.prototype.constructor=n).__proto__=e}function Ft(n){return n!==!1}function gc(){return typeof window!="undefined"}function vc(n){return ut(n)||gt(n)}function xc(n){return(Ls=bn(n,Xt))&&_r}function Ms(n,e){return!e&&console.warn(n)}function _c(n,e){return n&&(Xt[n]=e)&&Ls&&(Ls[n]=e)||Xt}function yn(){return 0}function kt(n,e){return(n=n.split(",")).forEach(e)||n}function yc(n,e,t,r){ii.length&&Rs(),n.render(e,t,r),ii.length&&Rs()}function bc(n){return n}function er(n,e){for(var t in e)t in n||(n[t]=e[t]);return n}function pg(n,e){for(var t in e)t in n||t==="duration"||t==="ease"||(n[t]=e[t])}function bn(n,e){for(var t in e)n[t]=e[t];return n}function nl(n,e){for(var t in e)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(n[t]=Or(e[t])?nl(n[t]||(n[t]={}),e[t]):e[t]);return n}function al(n,e){var t,r={};for(t in n)t in e||(r[t]=n[t]);return r}function la(n){var e=n.parent||Ze,t=n.keyframes?pg:er;if(Ft(n.inherit))for(;e;)t(n,e.vars.defaults),e=e.parent||e._dp;return n}function ri(n,e){!n.parent||e&&!n.parent.autoRemoveChildren||n.parent.remove(n),n._act=0}function Mc(n){return!n||n._ts&&Mc(n.parent)}function Tc(n){return n._repeat?Mn(n._tTime,n=n.duration()+n._rDelay)*n:0}function Mn(n,e){return e=Math.floor(n/=e),n&&e===n?e-1:e}function Ts(n,e){return(n-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function wc(n,e){var t;if((e._time||e._initted&&!e._dur)&&(t=Ts(n.rawTime(),e),(!e._dur||ua(0,e.totalDuration(),t)-e._tTime>ze)&&e.render(t,!0)),Fi(n,e)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(t=n;t._dp;)0<=t.rawTime()&&t.totalTime(t._tTime),t=t._dp;n._zTime=-ze}}function gr(n,e,t,r){return e.parent&&ri(e),e._start=wt((Ur(t)?t:t||n!==Ze?Vt(n,t,e):n._time)+e._delay),e._end=wt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function(i,a,s,o,l){s===void 0&&(s="_first");var h,u=i[o=o===void 0?"_last":o];if(l)for(h=a[l];u&&u[l]>h;)u=u._prev;u?(a._next=u._next,u._next=a):(a._next=i[s],i[s]=a),a._next?a._next._prev=a:i[o]=a,a._prev=u,a.parent=a._dp=i}(n,e,"_first","_last",n._sort?"_start":0),sl(e)||(n._recent=e),r||wc(n,e),n}function Sc(n,e){return(Xt.ScrollTrigger||Tl("scrollTrigger",e))&&Xt.ScrollTrigger.create(e,n)}function Ac(n,e,t,r){return Ag(n,e),n._initted?!t&&n._pt&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&zc!==ir.frame?(ii.push(n),n._lazy=[e,r]):void 0:1}function Ec(n){return(n=n.parent)&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||Ec(n))}function sl(n){return(n=n.data)==="isFromStart"||n==="isStart"}function Tn(n,e,t,r){var i=n._repeat,a=wt(e)||0;return(e=n._tTime/n._tDur)&&!r&&(n._time*=a/n._dur),n._dur=a,n._tDur=i?i<0?1e10:wt(a*(i+1)+n._rDelay*i):a,e&&!r?jc(n,n._tTime=n._tDur*e):n.parent&&Cs(n),t||Fi(n.parent,n),n}function Lc(n){return n instanceof Nt?Fi(n):Tn(n,n._dur)}function Vt(n,e,t){var r,i,a,s=n.labels,o=n._recent||_g,l=n.duration()>=xr?o.endTime(!1):n._dur;return gt(e)&&(isNaN(e)||e in s)?(i=e.charAt(0),a=e.substr(-1)==="%",r=e.indexOf("="),i==="<"||i===">"?(0<=r&&(e=e.replace(/=/,"")),(i==="<"?o._start:o.endTime(0<=o._repeat))+(parseFloat(e.substr(1))||0)*(a?(r<0?o:t).totalDuration()/100:1)):r<0?(e in s||(s[e]=l),s[e]):(i=parseFloat(e.charAt(r-1)+e.substr(r+1)),a&&t&&(i=i/100*(Wt(t)?t[0]:t).totalDuration()),1<r?Vt(n,e.substr(0,r-1),t)+i:l+i)):e==null?l:+e}function ha(n,e,t){var r,i,a=Ur(e[1]),s=(a?2:1)+(n<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=t,n){for(r=o,i=t;i&&!("immediateRender"in r);)r=i.vars.defaults||{},i=Ft(i.vars.inherit)&&i.parent;o.immediateRender=Ft(r.immediateRender),n<2?o.runBackwards=1:o.startAt=e[s-1]}return new ct(e[0],o,e[1+s])}function ua(n,e,t){return t<n?n:e<t?e:t}function Pc(n){if(ut(n))return n;var e=Or(n)?n:{each:n},t=Ln(e.ease),r=e.from||0,i=parseFloat(e.base)||0,a={},n=0<r&&r<1,s=isNaN(r)||n,o=e.axis,l=r,h=r;return gt(r)?l=h={center:.5,edges:.5,end:1}[r]||0:!n&&s&&(l=r[0],h=r[1]),function(u,p,c){var d,f,m,g,v,y,x,_,T=(c||e).length,b=a[T];if(!b){if(!(_=e.grid==="auto"?0:(e.grid||[1,xr])[1])){for(y=-xr;y<(y=c[_++].getBoundingClientRect().left)&&_<T;);_--}for(b=a[T]=[],d=s?Math.min(_,T)*l-.5:r%_,f=s?T*h/_-.5:r/_|0,x=xr,v=y=0;v<T;v++)m=v%_-d,g=f-(v/_|0),b[v]=g=o?Math.abs(o==="y"?g:m):Bc(m*m+g*g),y<g&&(y=g),g<x&&(x=g);r==="random"&&qc(b),b.max=y-x,b.min=x,b.v=T=(parseFloat(e.amount)||parseFloat(e.each)*(T<_?T-1:o?o==="y"?T/_:_:Math.max(_,T/_))||0)*(r==="edges"?-1:1),b.b=T<0?i-T:i,b.u=jt(e.amount||e.each)||0,t=t&&T<0?Kc(t):t}return T=(b[u]-b.min)/b.max||0,wt(b.b+(t?t(T):T)*b.v)+b.u}}function ol(n){var e=Math.pow(10,((n+"").split(".")[1]||"").length);return function(t){var r=Math.round(parseFloat(t)/n)*n*e;return(r-r%1)/e+(Ur(t)?0:jt(t))}}function Rc(n,e,t,r){return ni(Wt(n)?!e:t===!0?!!(t=0):!r,function(){return Wt(n)?n[~~(Math.random()*n.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((n-t/2+Math.random()*(e-n+.99*t))/t)*t*r)/r})}function Fc(n,e,t){return ni(t,function(r){return n[~~e(r)]})}function Cc(n,e,t,r,i){var a=e-n,s=r-t;return ni(i,function(o){return t+((o-n)/a*s||0)})}function Nc(n,e,t){var r,i,a,s=n.labels,o=xr;for(r in s)(i=s[r]-e)<0==!!t&&i&&o>(i=Math.abs(i))&&(a=r,o=i);return a}function tr(n,e,t){var r=n.vars,i=r[e];return i&&(e=r[e+"Params"],n=r.callbackScope||n,t&&ii.length&&Rs(),e?i.apply(n,e):i.call(n))}function ca(n){return ri(n),n.scrollTrigger&&n.scrollTrigger.kill(!1),n.progress()<1&&tr(n,"onInterrupt"),n}function ll(n,e,t){return(6*(n=n<0?n+1:1<n?n-1:n)<1?e+(t-e)*n*6:n<.5?t:3*n<2?e+(t-e)*(2/3-n)*6:e)*Be+.5|0}function Ic(n,e,t){var r,i,a,s,o="",l=(n+o).match(ai),h=e?"hsla(":"rgba(",u=0;if(!l)return n;if(l=l.map(function(p){return(p=Zc(p,e,1))&&h+(e?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),t&&(a=Jc(n),(r=t.c).join(o)!==a.c.join(o)))for(s=(i=n.replace(ai,"1").split(An)).length-1;u<s;u++)o+=i[u]+(~r.indexOf(u)?l.shift()||h+"0,0,0,0)":(a.length?a:l.length?l:t).shift());if(!i)for(s=(i=n.split(ai)).length-1;u<s;u++)o+=i[u]+l[u];return o+i[s]}function Dc(n){var e=n.join(" ");if(ai.lastIndex=0,ai.test(e))return e=yg.test(e),n[1]=Ic(n[1],e),n[0]=Ic(n[0],e,Jc(n[1])),!0}function ws(n,e){for(var t,r=n._first;r;)r instanceof Nt?ws(r,e):!r.vars.yoyoEase||r._yoyo&&r._repeat||r._yoyo===e||(r.timeline?ws(r.timeline,e):(t=r._ease,r._ease=r._yEase,r._yEase=t,r._yoyo=e)),r=r._next}function Ei(n,e,t,r){t===void 0&&(t=function(s){return 1-e(1-s)}),r===void 0&&(r=function(s){return s<.5?e(2*s)/2:1-e(2*(1-s))/2});var i,a={easeIn:e,easeOut:t,easeInOut:r};return kt(n,function(s){for(var o in Ae[s]=Xt[s]=a,Ae[i=s.toLowerCase()]=t,a)Ae[i+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=Ae[s+"."+o]=a[o]}),1}function Uc(n){return function(e){return e<.5?(1-n(1-2*e))/2:.5+n(2*(e-.5))/2}}var hl,Ze,vr,ul,cl,Oc,zc,Ss,dl,pl,fl,ml,wn,gl,As,vl,Es,xl,da,pa,Li,Pi,fa,Ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Sn={duration:.5,overwrite:!1,delay:0},xr=1e8,ze=1/xr,_l=2*Math.PI,fg=_l/4,mg=0,Bc=Math.sqrt,gg=Math.cos,vg=Math.sin,gt=function(n){return typeof n=="string"},ut=function(n){return typeof n=="function"},Ur=function(n){return typeof n=="number"},yl=function(n){return n===void 0},Or=function(n){return typeof n=="object"},Hc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,bl=/(?:-?\.?\d|\.)+/gi,Gc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,An=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kc=/[+-]=-?[.\d]+/,Vc=/[^,'"\[\]\s]+/gi,xg=/[\d.+\-=]+(?:e[-+]\d*)*/i,Xt={},Ls={},Tl=function(n,e){return console.warn("Invalid property",n,"set to",e,"Missing plugin? gsap.registerPlugin()")},wl={},ii=[],Sl={},Yt={},Al={},Wc=30,Ps=[],El="",Ll=function(n){var e,t,r=n[0];if(Or(r)||ut(r)||(n=[n]),!(e=(r._gsap||{}).harness)){for(t=Ps.length;t--&&!Ps[t].targetTest(r););e=Ps[t]}for(t=n.length;t--;)n[t]&&(n[t]._gsap||(n[t]._gsap=new ed(n[t],e)))||n.splice(t,1);return n},Ri=function(n){return n._gsap||Ll(rr(n))[0]._gsap},Xc=function(n,e,t){return(t=n[e])&&ut(t)?n[e]():yl(t)&&n.getAttribute&&n.getAttribute(e)||t},nt=function(n){return Math.round(1e5*n)/1e5||0},wt=function(n){return Math.round(1e7*n)/1e7||0},Rs=function(){var n,e,t=ii.length,r=ii.slice(0);for(Sl={},n=ii.length=0;n<t;n++)(e=r[n])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},Yc=function(n){var e=parseFloat(n);return(e||e===0)&&(n+"").match(Vc).length<2?e:gt(n)?n.trim():n},Fs=function(n,e,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var i=e._prev,a=e._next;i?i._next=a:n[t]===e&&(n[t]=a),a?a._prev=i:n[r]===e&&(n[r]=i),e._next=e._prev=e.parent=null},Fi=function(n,e){if(n&&(!e||e._end>n._dur||e._start<0))for(var t=n;t;)t._dirty=1,t=t.parent;return n},Cs=function(n){return n._end=wt(n._start+(n._tDur/Math.abs(n._ts||n._rts||ze)||0))},jc=function(n,e){var t=n._dp;return t&&t.smoothChildTiming&&n._ts&&(n._start=wt(t._time-(0<n._ts?e/n._ts:((n._dirty?n.totalDuration():n._tDur)-e)/-n._ts)),Cs(n),t._dirty||Fi(t,n)),n},_g={_start:0,endTime:yn,totalDuration:yn},ni=function(n,e){return n||n===0?e(n):e},jt=function(n){if(typeof n!="string")return"";var e=xg.exec(n);return e?n.substr(e.index+e[0].length):""},Pl=[].slice,Qc=function(n,e){return n&&Or(n)&&"length"in n&&(!e&&!n.length||n.length-1 in n&&Or(n[0]))&&!n.nodeType&&n!==vr},rr=function(n,e,t){return!gt(n)||t||!ul&&En()?Wt(n)?(r=t,i===void 0&&(i=[]),n.forEach(function(a){return gt(a)&&!r||Qc(a,1)?i.push.apply(i,rr(a)):i.push(a)})||i):Qc(n)?Pl.call(n,0):n?[n]:[]:Pl.call((e||cl).querySelectorAll(n),0);var r,i},qc=function(n){return n.sort(function(){return .5-Math.random()})},Ai=function(n,e){var t,r,i=Wt(n);return!i&&Or(n)&&(t=i=n.radius||xr,n.values?(n=rr(n.values),(r=!Ur(n[0]))&&(t*=t)):n=ol(n.increment)),ni(e,i?ut(n)?function(a){return r=n(a),Math.abs(r-a)<=t?r:a}:function(a){for(var s,o,l=parseFloat(r?a.x:a),h=parseFloat(r?a.y:0),u=xr,p=0,c=n.length;c--;)(s=r?(s=n[c].x-l)*s+(o=n[c].y-h)*o:Math.abs(n[c]-l))<u&&(u=s,p=c);return p=!t||u<=t?n[p]:a,r||p===a||Ur(a)?p:p+jt(a)}:ol(n))},sa=function n(e,t,r){var i=t-e;return Wt(e)?Fc(e,n(0,e.length),t):ni(r,function(a){return(i+(a-e)%i)%i+e})},Ir=function n(e,t,r){var i=t-e,a=2*i;return Wt(e)?Fc(e,n(0,e.length-1),t):ni(r,function(s){return e+(i<(s=(a+(s-e)%a)%a||0)?a-s:s)})},ma=function(n){for(var e,t,r,i,a=0,s="";~(e=n.indexOf("random(",a));)r=n.indexOf(")",e),i=n.charAt(e+7)==="[",t=n.substr(e+7,r-e-7).match(i?Vc:bl),s+=n.substr(a,e-a)+Rc(i?t:+t[0],i?0:+t[1],+t[2]||1e-5),a=r+1;return s+n.substr(a,n.length-a)},it=function n(e,t,r,i){var a=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!a){var s,o,l,h,u,p=gt(e),c={};if(r===!0&&(i=1)&&(r=null),p)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(l=[],h=e.length,u=h-2,o=1;o<h;o++)l.push(n(e[o-1],e[o]));h--,a=function(d){d*=h;var f=Math.min(u,~~d);return l[f](d-f)},r=t}else i||(e=bn(Wt(e)?[]:{},e));if(!l){for(s in t)Fl.call(c,e,s,"get",t[s]);a=function(d){return Cl(d,c),p?e.p:e}}}return ni(r,a)},Be=255,ga={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Zc=function(n,e,t){var r,i,a,s,o,l,h,u=n?Ur(n)?[n>>16,n>>8&Be,n&Be]:0:ga.black;if(!u){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),ga[n])u=ga[n];else if(n.charAt(0)==="#"){if((n=n.length<6?"#"+(r=n.charAt(1))+r+(i=n.charAt(2))+i+(a=n.charAt(3))+a+(n.length===5?n.charAt(4)+n.charAt(4):""):n).length===9)return[(u=parseInt(n.substr(1,6),16))>>16,u>>8&Be,u&Be,parseInt(n.substr(7),16)/255];u=[(n=parseInt(n.substr(1),16))>>16,n>>8&Be,n&Be]}else if(n.substr(0,3)==="hsl")if(u=h=n.match(bl),e){if(~n.indexOf("="))return u=n.match(Gc),t&&u.length<4&&(u[3]=1),u}else s=+u[0]%360/360,o=+u[1]/100,r=2*(l=+u[2]/100)-(i=l<=.5?l*(o+1):l+o-l*o),3<u.length&&(u[3]*=1),u[0]=ll(s+1/3,r,i),u[1]=ll(s,r,i),u[2]=ll(s-1/3,r,i);else u=n.match(bl)||ga.transparent;u=u.map(Number)}return e&&!h&&(r=u[0]/Be,i=u[1]/Be,a=u[2]/Be,l=((n=Math.max(r,i,a))+(e=Math.min(r,i,a)))/2,n===e?s=o=0:(h=n-e,o=.5<l?h/(2-n-e):h/(n+e),s=n===r?(i-a)/h+(i<a?6:0):n===i?(a-r)/h+2:(r-i)/h+4,s*=60),u[0]=~~(s+.5),u[1]=~~(100*o+.5),u[2]=~~(100*l+.5)),t&&u.length<4&&(u[3]=1),u},Jc=function(n){var e=[],t=[],r=-1;return n.split(ai).forEach(function(i){i=i.match(An)||[],e.push.apply(e,i),t.push(r+=i.length+1)}),e.c=t,e},ai=function(){var n,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(n in ga)e+="|"+n+"\\b";return new RegExp(e+")","gi")}(),yg=/hsl[a]?\(/,ir=(gl=Date.now,As=500,vl=33,Es=gl(),xl=Es,pa=da=1e3/240,Pi={time:0,frame:0,tick:function(){Rl(!0)},deltaRatio:function(n){return ml/(1e3/(n||60))},wake:function(){Oc&&(!ul&&gc()&&(vr=ul=window,cl=vr.document||{},Xt.gsap=_r,(vr.gsapVersions||(vr.gsapVersions=[])).push(_r.version),xc(Ls||vr.GreenSockGlobals||!vr.gsap&&vr||{}),fl=vr.requestAnimationFrame),dl&&Pi.sleep(),pl=fl||function(n){return setTimeout(n,pa-1e3*Pi.time+1|0)},Ss=1,Rl(2))},sleep:function(){(fl?vr.cancelAnimationFrame:clearTimeout)(dl),Ss=0,pl=yn},lagSmoothing:function(n,e){As=n||1/ze,vl=Math.min(e,As,0)},fps:function(n){da=1e3/(n||240),pa=1e3*Pi.time+da},add:function(n){Li.indexOf(n)<0&&Li.push(n),En()},remove:function(n){~(n=Li.indexOf(n))&&Li.splice(n,1)&&n<=wn&&wn--},_listeners:Li=[]}),En=function(){return!Ss&&ir.wake()},Ae={},bg=/^[\d.\-M][\d.\-,\s]/,Mg=/["']/g,Tg=function(n){for(var e,t,r,i={},a=n.substr(1,n.length-3).split(":"),s=a[0],o=1,l=a.length;o<l;o++)t=a[o],e=o!==l-1?t.lastIndexOf(","):t.length,r=t.substr(0,e),i[s]=isNaN(r)?r.replace(Mg,"").trim():+r,s=t.substr(e+1).trim();return i},wg=function(n){var e=n.indexOf("(")+1,t=n.indexOf(")"),r=n.indexOf("(",e);return n.substring(e,~r&&r<t?n.indexOf(")",t+1):t)},Kc=function(n){return function(e){return 1-n(1-e)}},Ln=function(n,e){return n&&(ut(n)?n:Ae[n]||(r=((t=n)+"").split("("),(n=Ae[r[0]])&&1<r.length&&n.config?n.config.apply(null,~t.indexOf("{")?[Tg(r[1])]:wg(t).split(",").map(Yc)):Ae._CE&&bg.test(t)?Ae._CE("",t):n))||e;var t,r},$t=function n(e,t,r){function i(l){return l===1?1:a*Math.pow(2,-10*l)*vg((l-s)*o)+1}var a=1<=t?t:1,s=(o=(r||(e?.3:.45))/(t<1?t:1))/_l*(Math.asin(1/a)||0),t=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:Uc(i),o=_l/o;return t.config=function(l,h){return n(e,l,h)},t},Nr=function n(e,t){t===void 0&&(t=1.70158);function r(a){return a?--a*a*((t+1)*a+t)+1:0}var i=e==="out"?r:e==="in"?function(a){return 1-r(1-a)}:Uc(r);return i.config=function(a){return n(e,a)},i};function Rl(n){var e,t,r,i=gl()-xl,a=n===!0;if(As<i&&(Es+=i-vl),(0<(i=(t=(xl+=i)-Es)-pa)||a)&&(r=++Pi.frame,ml=t-1e3*Pi.time,Pi.time=t/=1e3,pa+=i+(da<=i?4:da-i),e=1),a||(dl=pl(Rl)),e)for(wn=0;wn<Li.length;wn++)Li[wn](t,ml,r,n)}function $c(n){return n<1/2.75?fa*n*n:n<1/2.75*2?fa*Math.pow(n-1.5/2.75,2)+.75:n<1/2.75*2.5?fa*(n-=2.25/2.75)*n+.9375:fa*Math.pow(n-2.625/2.75,2)+.984375}kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ei(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(2*r,t)/2:1-Math.pow(2*(1-r),t)/2})}),Ae.Linear.easeNone=Ae.none=Ae.Linear.easeIn,Ei("Elastic",$t("in"),$t("out"),$t()),fa=7.5625,Ei("Bounce",function(n){return 1-$c(1-n)},$c),Ei("Expo",function(n){return n?Math.pow(2,10*(n-1)):0}),Ei("Circ",function(n){return-(Bc(1-n*n)-1)}),Ei("Sine",function(n){return n===1?1:1-gg(n*fg)}),Ei("Back",Nr("in"),Nr("out"),Nr()),Ae.SteppedEase=Ae.steps=Xt.SteppedEase={config:function(n,e){var t=1/(n=n===void 0?1:n),r=n+(e?0:1),i=e?1:0,a=1-ze;return function(s){return((r*ua(0,a,s)|0)+i)*t}}},Sn.ease=Ae["quad.out"],kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return El+=n+","+n+"Params,"});var ed=function(n,e){this.id=mg++,(n._gsap=this).target=n,this.harness=e,this.get=e?e.get:Xc,this.set=e?e.getSetter:Il},va=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tn(this,+t.duration,1,1),this.data=t.data,Ss||ir.wake()}var e=n.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Tn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(En(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(jc(this,t),!i._dp||i.parent||wc(i,this);i&&i.parent;)i.parent._time!==i._start+(0<=i._ts?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ze||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),yc(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Tc(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Tc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,r){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*i,r):this._repeat?Mn(this._tTime,i)+1:1},e.timeScale=function(t){if(!arguments.length)return this._rts===-ze?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ts(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-ze?0:this._rts,function(i){for(var a=i.parent;a&&a.parent;)a._dirty=1,a.totalDuration(),a=a.parent}(this.totalTime(ua(-this._delay,this._tDur,r),!0)),Cs(this),this},e.paused=function(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(En(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ze&&(this._tTime-=ze)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var r=this.parent||this._dp;return!r||!r._sort&&this.parent||gr(r,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(Ft(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ts(r.rawTime(t),this):this._tTime:this._tTime},e.globalTime=function(t){for(var r=this,i=arguments.length?t:r.rawTime();r;)i=r._start+i/(r._ts||1),r=r._dp;return i},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Lc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,Lc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(Vt(this,t),Ft(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,Ft(r))},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ze,this},e.isActive=function(){var t,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&this._initted&&r.isActive()&&(t=r.rawTime(!0))>=i&&t<this.endTime(!0)-ze))},e.eventCallback=function(t,r,i){var a=this.vars;return 1<arguments.length?(r?(a[t]=r,i&&(a[t+"Params"]=i),t==="onUpdate"&&(this._onUpdate=r)):delete a[t],this):a[t]},e.then=function(t){var r=this;return new Promise(function(i){function a(){var o=r.then;r.then=null,ut(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=o),i(s),r.then=o}var s=ut(t)?t:bc;r._initted&&r.totalProgress()===1&&0<=r._ts||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ca(this)},n}();er(va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ze,_prom:0,_ps:!1,_rts:1});var Nt=function(n){function e(r,i){var a;return(a=n.call(this,r=r===void 0?{}:r)||this).labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=Ft(r.sortChildren),Ze&&gr(r.parent||Ze,Dr(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&Sc(Dr(a),r.scrollTrigger),a}mc(e,n);var t=e.prototype;return t.to=function(r,i,a){return ha(0,arguments,this),this},t.from=function(r,i,a){return ha(1,arguments,this),this},t.fromTo=function(r,i,a,s){return ha(2,arguments,this),this},t.set=function(r,i,a){return i.duration=0,i.parent=this,la(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new ct(r,i,Vt(this,a),1),this},t.call=function(r,i,a){return gr(this,ct.delayedCall(0,r,i),a)},t.staggerTo=function(r,i,a,s,o,l,h){return a.duration=i,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new ct(r,a,Vt(this,o)),this},t.staggerFrom=function(r,i,a,s,o,l,h){return a.runBackwards=1,la(a).immediateRender=Ft(a.immediateRender),this.staggerTo(r,i,a,s,o,l,h)},t.staggerFromTo=function(r,i,a,s,o,l,h,u){return s.startAt=a,la(s).immediateRender=Ft(s.immediateRender),this.staggerTo(r,i,s,o,l,h,u)},t.render=function(r,i,a){var s,o,l,h,u,p,c,d,f,m,g=this._time,v=this._dirty?this.totalDuration():this._tDur,y=this._dur,x=r<=0?0:wt(r),_=this._zTime<0!=r<0&&(this._initted||!y);if((x=this!==Ze&&v<x&&0<=r?v:x)!==this._tTime||a||_){if(g!==this._time&&y&&(x+=this._time-g,r+=this._time-g),s=x,d=this._start,u=!(c=this._ts),_&&(y||(g=this._zTime),!r&&i||(this._zTime=r)),this._repeat){if(T=this._yoyo,h=y+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(100*h+r,i,a);if(s=wt(x%h),x===v?(l=this._repeat,s=y):((l=~~(x/h))&&l===x/h&&(s=y,l--),y<s&&(s=y)),f=Mn(this._tTime,h),T&&1&l&&(s=y-s,m=1),l!==(f=!g&&this._tTime&&f!==l?l:f)&&!this._lock){var _=T&&1&f,T=_===(T&&1&l),g=(_=l<f?!_:_)?0:y;if(this._lock=1,this.render(g||(m?0:wt(l*h)),i,!y)._lock=0,this._tTime=x,!i&&this.parent&&tr(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1),g&&g!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(y=this._dur,v=this._tDur,T&&(this._lock=2,this.render(g=_?y:-1e-4,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;ws(this,m)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=function(A,N,I){var C;if(N<I)for(C=A._first;C&&C._start<=I;){if(!C._dur&&C.data==="isPause"&&C._start>N)return C;C=C._next}else for(C=A._last;C&&C._start>=I;){if(!C._dur&&C.data==="isPause"&&C._start<N)return C;C=C._prev}}(this,wt(g),wt(s)))&&(x-=s-(s=p._start)),this._tTime=x,this._time=s,this._act=!c,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,g=0),!g&&s&&!i&&(tr(this,"onStart"),this._tTime!==x))return this;if(g<=s&&0<=r)for(b=this._first;b;){if(o=b._next,(b._act||s>=b._start)&&b._ts&&p!==b){if(b.parent!==this)return this.render(r,i,a);if(b.render(0<b._ts?(s-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(s-b._start)*b._ts,i,a),s!==this._time||!this._ts&&!u){p=0,o&&(x+=this._zTime=-ze);break}}b=o}else for(var b=this._last,M=r<0?r:s;b;){if(o=b._prev,(b._act||M<=b._end)&&b._ts&&p!==b){if(b.parent!==this)return this.render(r,i,a);if(b.render(0<b._ts?(M-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(M-b._start)*b._ts,i,a),s!==this._time||!this._ts&&!u){p=0,o&&(x+=this._zTime=M?-ze:ze);break}}b=o}if(p&&!i&&(this.pause(),p.render(g<=s?0:-ze)._zTime=g<=s?1:-1,this._ts))return this._start=d,Cs(this),this.render(r,i,a);this._onUpdate&&!i&&tr(this,"onUpdate",!0),(x===v&&v>=this.totalDuration()||!x&&g)&&(d!==this._start&&Math.abs(c)===Math.abs(this._ts)||this._lock||(!r&&y||!(x===v&&0<this._ts||!x&&this._ts<0)||ri(this,1),i||r<0&&!g||!x&&!g&&v||(tr(this,x===v&&0<=r?"onComplete":"onReverseComplete",!0),!this._prom||x<v&&0<this.timeScale()||this._prom())))}return this},t.add=function(r,i){var a=this;if(Ur(i)||(i=Vt(this,i,r)),!(r instanceof va)){if(Wt(r))return r.forEach(function(s){return a.add(s,i)}),this;if(gt(r))return this.addLabel(r,i);if(!ut(r))return this;r=ct.delayedCall(0,r)}return this!==r?gr(this,r,i):this},t.getChildren=function(r,i,a,s){r===void 0&&(r=!0),i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=-xr);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof ct?i&&o.push(l):(a&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,i,a)))),l=l._next;return o},t.getById=function(r){for(var i=this.getChildren(1,1,1),a=i.length;a--;)if(i[a].vars.id===r)return i[a]},t.remove=function(r){return gt(r)?this.removeLabel(r):ut(r)?this.killTweensOf(r):(Fs(this,r),r===this._recent&&(this._recent=this._last),Fi(this))},t.totalTime=function(r,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(ir.time-(0<this._ts?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,i),this._forcing=0,this):this._tTime},t.addLabel=function(r,i){return this.labels[r]=Vt(this,i),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,i,a){return a=ct.delayedCall(0,i||yn,a),a.data="isPause",this._hasPause=1,gr(this,a,Vt(this,r))},t.removePause=function(r){var i=this._first;for(r=Vt(this,r);i;)i._start===r&&i.data==="isPause"&&ri(i),i=i._next},t.killTweensOf=function(r,i,a){for(var s=this.getTweensOf(r,a),o=s.length;o--;)si!==s[o]&&s[o].kill(r,i);return this},t.getTweensOf=function(r,i){for(var a,s=[],o=rr(r),l=this._first,h=Ur(i);l;)l instanceof ct?function(u,p){for(var c=p.length,d=0;u.indexOf(p[d])<0&&++d<c;);return d<c}(l._targets,o)&&(h?(!si||l._initted&&l._ts)&&l.globalTime(0)<=i&&l.globalTime(l.totalDuration())>i:!i||l.isActive())&&s.push(l):(a=l.getTweensOf(o,i)).length&&s.push.apply(s,a),l=l._next;return s},t.tweenTo=function(r,i){i=i||{};var a,s=this,o=Vt(s,r),r=i,l=r.startAt,h=r.onStart,u=r.onStartParams,r=r.immediateRender,p=ct.to(s,er({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:i.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||ze,onStart:function(){var c;s.pause(),a||(c=i.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale()),p._dur!==c&&Tn(p,c,0,1).render(p._time,!0,!0),a=1),h&&h.apply(p,u||[])}},i));return r?p.render(0):p},t.tweenFromTo=function(r,i,a){return this.tweenTo(i,er({startAt:{time:Vt(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Nc(this,Vt(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Nc(this,Vt(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ze)},t.shiftChildren=function(r,i,a){a===void 0&&(a=0);for(var s,o=this._first,l=this.labels;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(i)for(s in l)l[s]>=a&&(l[s]+=r);return Fi(this)},t.invalidate=function(){var r=this._first;for(this._lock=0;r;)r.invalidate(),r=r._next;return n.prototype.invalidate.call(this)},t.clear=function(r){r===void 0&&(r=!0);for(var i,a=this._first;a;)i=a._next,this.remove(a),a=i;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Fi(this)},t.totalDuration=function(r){var i,a,s,o=0,l=this,h=l._last,u=xr;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(s=l.parent;h;)i=h._prev,h._dirty&&h.totalDuration(),u<(a=h._start)&&l._sort&&h._ts&&!l._lock?(l._lock=1,gr(l,h,a-h._delay,1)._lock=0):u=a,a<0&&h._ts&&(o-=a,(!s&&!l._dp||s&&s.smoothChildTiming)&&(l._start+=a/l._ts,l._time-=a,l._tTime-=a),l.shiftChildren(-a,!1,-1/0),u=0),h._end>o&&h._ts&&(o=h._end),h=i;Tn(l,l===Ze&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Ze._ts&&(yc(Ze,Ts(r,Ze)),zc=ir.frame),ir.frame>=Wc){Wc+=Ct.autoSleep||120;var i=Ze._first;if((!i||!i._ts)&&Ct.autoSleep&&ir._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||ir.sleep()}}},e}(va);er(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Fl(n,e,t,r,i,a,s,o,l){ut(r)&&(r=r(i||0,n,a));var h,i=n[e],a=t!=="get"?t:ut(i)?l?n[e.indexOf("set")||!ut(n["get"+e.substr(3)])?e:"get"+e.substr(3)](l):n[e]():i,t=ut(i)?l?Fg:ad:Nl;if(gt(r)&&(r=~r.indexOf("random(")?ma(r):r).charAt(1)==="="&&(!(h=parseFloat(a)+parseFloat(r.substr(2))*(r.charAt(0)==="-"?-1:1)+(jt(a)||0))&&h!==0||(r=h)),a!==r)return isNaN(a*r)||r===""?(i||e in n||Tl(e,r),Sg.call(this,n,e,a,r,t,o||Ct.stringFilter,l)):(h=new It(this._pt,n,e,+a||0,r-(a||0),typeof i=="boolean"?Ng:sd,0,t),l&&(h.fp=l),s&&h.modifier(s,this,n),this._pt=h)}function td(n,e,t,r,i,a){var s,o,l,h;if(Yt[n]&&(s=new Yt[n]).init(i,s.rawVars?e[n]:function(u,p,c,d,f){if(ut(u)&&(u=xa(u,f,p,c,d)),!Or(u)||u.style&&u.nodeType||Wt(u)||Hc(u))return gt(u)?xa(u,f,p,c,d):u;var m,g={};for(m in u)g[m]=xa(u[m],f,p,c,d);return g}(e[n],r,i,a,t),t,r,a)!==!1&&(t._pt=o=new It(t._pt,i,n,0,1,s.render,s,0,s.priority),t!==_a))for(l=t._ptLookup[t._targets.indexOf(i)],h=s._props.length;h--;)l[s._props[h]]=o;return s}var si,Sg=function(n,e,t,r,i,a,s){var o,l,h,u,p,c=new It(this._pt,n,e,0,1,id,null,i),d=0,f=0;for(c.b=t,c.e=r,t+="",(i=~(r+="").indexOf("random("))&&(r=ma(r)),a&&(a(a=[t,r],n,e),t=a[0],r=a[1]),o=t.match(Ml)||[];p=Ml.exec(r);)h=p[0],u=r.substring(d,p.index),l?l=(l+1)%5:u.substr(-5)==="rgba("&&(l=1),h!==o[f++]&&(p=parseFloat(o[f-1])||0,c._pt={_next:c._pt,p:u||f===1?u:",",s:p,c:h.charAt(1)==="="?parseFloat(h.substr(2))*(h.charAt(0)==="-"?-1:1):parseFloat(h)-p,m:l&&l<4?Math.round:0},d=Ml.lastIndex);return c.c=d<r.length?r.substring(d,r.length):"",c.fp=s,(kc.test(r)||i)&&(c.e=0),this._pt=c},Ag=function n(e,t){var r,i,a,s,o,l,h,u,p,c,d,f,m,g=e.vars,v=g.ease,y=g.startAt,x=g.immediateRender,_=g.lazy,T=g.onUpdate,b=g.onUpdateParams,M=g.callbackScope,A=g.runBackwards,N=g.yoyoEase,I=g.keyframes,C=g.autoRevert,O=e._dur,D=e._startAt,F=e._targets,U=e.parent,H=U&&U.data==="nested"?U.parent._targets:F,z=e._overwrite==="auto"&&!hl,W=e.timeline;if(e._ease=Ln(v=!W||I&&v?v:"none",Sn.ease),e._yEase=N?Kc(Ln(N===!0?v:N,Sn.ease)):0,N&&e._yoyo&&!e._repeat&&(N=e._yEase,e._yEase=e._ease,e._ease=N),e._from=!W&&!!g.runBackwards,!W){if(f=(u=F[0]?Ri(F[0]).harness:0)&&g[u.prop],r=al(g,wl),D&&D.render(-1,!0).kill(),y)if(ri(e._startAt=ct.set(F,er({data:"isStart",overwrite:!1,parent:U,immediateRender:!0,lazy:Ft(_),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:M,stagger:0},y))),t<0&&!x&&!C&&e._startAt.render(-1,!0),x){if(0<t&&!C&&(e._startAt=0),O&&t<=0)return void(t&&(e._zTime=t))}else C===!1&&(e._startAt=0);else if(A&&O)if(D)C||(e._startAt=0);else if(a=er({overwrite:!1,data:"isFromStart",lazy:(x=t?!1:x)&&Ft(_),immediateRender:x,stagger:0,parent:U},r),f&&(a[u.prop]=f),ri(e._startAt=ct.set(F,a)),t<0&&e._startAt.render(-1,!0),x){if(!t)return}else n(e._startAt,ze);for(e._pt=0,_=O&&Ft(_)||_&&!O,i=0;i<F.length;i++){if(h=(o=F[i])._gsap||Ll(F)[i]._gsap,e._ptLookup[i]=c={},Sl[h.id]&&ii.length&&Rs(),d=H===F?i:H.indexOf(o),u&&(p=new u).init(o,f||r,e,d,H)!==!1&&(e._pt=s=new It(e._pt,o,p.name,0,1,p.render,p,0,p.priority),p._props.forEach(function(ee){c[ee]=s}),p.priority&&(l=1)),!u||f)for(a in r)Yt[a]&&(p=td(a,r,e,d,o,H))?p.priority&&(l=1):c[a]=s=Fl.call(e,o,a,"get",r[a],d,H,0,g.stringFilter);e._op&&e._op[i]&&e.kill(o,e._op[i]),z&&e._pt&&(si=e,Ze.killTweensOf(o,c,e.globalTime(t)),m=!e.parent,si=0),e._pt&&_&&(Sl[h.id]=1)}l&&nd(e),e._onInit&&e._onInit(e)}e._onUpdate=T,e._initted=(!e._op||e._pt)&&!m},xa=function(n,e,t,r,i){return ut(n)?n.call(e,t,r,i):gt(n)&&~n.indexOf("random(")?ma(n):n},rd=El+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Eg=(rd+",id,stagger,delay,duration,paused,scrollTrigger").split(","),ct=function(n){function e(r,i,a,s){typeof i=="number"&&(a.duration=i,i=a,a=null);var o,l,h,u,p,c,d,f,m,g=(o=n.call(this,s?i:la(i))||this).vars,v=g.duration,y=g.delay,x=g.immediateRender,_=g.stagger,T=g.overwrite,b=g.keyframes,M=g.defaults,s=g.scrollTrigger,A=g.yoyoEase,g=i.parent||Ze,N=(Wt(r)||Hc(r)?Ur(r[0]):"length"in i)?[r]:rr(r);if(o._targets=N.length?Ll(N):Ms("GSAP target "+r+" not found. https://greensock.com",!Ct.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=T,b||_||vc(v)||vc(y)){if(i=o.vars,(l=o.timeline=new Nt({data:"nested",defaults:M||{}})).kill(),l.parent=l._dp=Dr(o),l._start=0,b)la(er(l.vars.defaults,{ease:"none"})),_?N.forEach(function(I,C){return b.forEach(function(O,D){return l.to(I,O,D?">":C*_)})}):b.forEach(function(I){return l.to(N,I,">")});else{if(p=N.length,f=_?Pc(_):yn,Or(_))for(c in _)~rd.indexOf(c)&&((m=m||{})[c]=_[c]);for(h=0;h<p;h++){for(c in u={},i)Eg.indexOf(c)<0&&(u[c]=i[c]);u.stagger=0,A&&(u.yoyoEase=A),m&&bn(u,m),d=N[h],u.duration=+xa(v,Dr(o),h,d,N),u.delay=(+xa(y,Dr(o),h,d,N)||0)-o._delay,!_&&p===1&&u.delay&&(o._delay=y=u.delay,o._start+=y,u.delay=0),l.to(d,u,f(h,d,N))}l.duration()?v=y=0:o.timeline=0}v||o.duration(v=l.duration())}else o.timeline=0;return T!==!0||hl||(si=Dr(o),Ze.killTweensOf(N),si=0),gr(g,Dr(o),a),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(x||!v&&!b&&o._start===wt(g._time)&&Ft(x)&&Mc(Dr(o))&&g.data!=="nested")&&(o._tTime=-ze,o.render(Math.max(0,-y))),s&&Sc(Dr(o),s),o}mc(e,n);var t=e.prototype;return t.render=function(r,i,a){var s,o,l,h,u,p,c,d,f,m=this._time,g=this._tDur,v=this._dur,y=g-ze<r&&0<=r?g:r<ze?0:r;if(v){if(y!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=r<0){if(s=y,d=this.timeline,this._repeat){if(h=v+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(100*h+r,i,a);if(s=wt(y%h),y===g?(l=this._repeat,s=v):((l=~~(y/h))&&l===y/h&&(s=v,l--),v<s&&(s=v)),(p=this._yoyo&&1&l)&&(f=this._yEase,s=v-s),u=Mn(this._tTime,h),s===m&&!a&&this._initted)return this;l!==u&&(d&&this._yEase&&ws(d,p),!this.vars.repeatRefresh||p||this._lock||(this._lock=a=1,this.render(wt(h*l),!0).invalidate()._lock=0))}if(!this._initted){if(Ac(this,r<0?r:s,a,i))return this._tTime=0,this;if(v!==this._dur)return this.render(r,i,a)}if(this._tTime=y,this._time=s,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=c=(f||this._ease)(s/v),this._from&&(this.ratio=c=1-c),s&&!m&&!i&&(tr(this,"onStart"),this._tTime!==y))return this;for(o=this._pt;o;)o.r(c,o.d),o=o._next;d&&d.render(r<0?r:!s&&p?-ze:d._dur*c,i,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!i&&(r<0&&this._startAt&&this._startAt.render(r,!0,a),tr(this,"onUpdate")),this._repeat&&l!==u&&this.vars.onRepeat&&!i&&this.parent&&tr(this,"onRepeat"),y!==this._tDur&&y||this._tTime!==y||(r<0&&this._startAt&&!this._onUpdate&&this._startAt.render(r,!0,!0),!r&&v||!(y===this._tDur&&0<this._ts||!y&&this._ts<0)||ri(this,1),i||r<0&&!m||!y&&!m||(tr(this,y===g?"onComplete":"onReverseComplete",!0),!this._prom||y<g&&0<this.timeScale()||this._prom()))}}else(function(x,_,T,b){var M,A,N,I=x.ratio,C=_<0||!_&&(!x._start&&Ec(x)&&(x._initted||!sl(x))||(x._ts<0||x._dp._ts<0)&&!sl(x))?0:1,O=x._rDelay,D=0;if(O&&x._repeat&&(D=ua(0,x._tDur,_),A=Mn(D,O),N=Mn(x._tTime,O),x._yoyo&&1&A&&(C=1-C),A!==N&&(I=1-C,x.vars.repeatRefresh&&x._initted&&x.invalidate())),C!==I||b||x._zTime===ze||!_&&x._zTime){if(x._initted||!Ac(x,_,b,T)){for(N=x._zTime,x._zTime=_||(T?ze:0),T=T||_&&!N,x.ratio=C,x._from&&(C=1-C),x._time=0,x._tTime=D,M=x._pt;M;)M.r(C,M.d),M=M._next;x._startAt&&_<0&&x._startAt.render(_,!0,!0),x._onUpdate&&!T&&tr(x,"onUpdate"),D&&x._repeat&&!T&&x.parent&&tr(x,"onRepeat"),(_>=x._tDur||_<0)&&x.ratio===C&&(C&&ri(x,1),T||(tr(x,C?"onComplete":"onReverseComplete",!0),x._prom&&x._prom()))}}else x._zTime||(x._zTime=_)})(this,r,i,a);return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),n.prototype.invalidate.call(this)},t.kill=function(r,i){if(i===void 0&&(i="all"),!(r||i&&i!=="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,i,si&&si.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Tn(this,this._dur*this.timeline._tDur/a,0,1),this}var s,o,l,h,u,p,c,d=this._targets,f=r?rr(r):d,m=this._ptLookup,r=this._pt;if((!i||i==="all")&&function(g,v){for(var y=g.length,x=y===v.length;x&&y--&&g[y]===v[y];);return y<0}(d,f))return i==="all"&&(this._pt=0),ca(this);for(s=this._op=this._op||[],i!=="all"&&(gt(i)&&(u={},kt(i,function(g){return u[g]=1}),i=u),i=function(g,v){var y,x,_,T,g=g[0]?Ri(g[0]).harness:0,b=g&&g.aliases;if(!b)return v;for(x in y=bn({},v),b)if(x in y)for(_=(T=b[x].split(",")).length;_--;)y[T[_]]=y[x];return y}(d,i)),c=d.length;c--;)if(~f.indexOf(d[c]))for(u in o=m[c],i==="all"?(s[c]=i,h=o,l={}):(l=s[c]=s[c]||{},h=i),h)(p=o&&o[u])&&("kill"in p.d&&p.d.kill(u)!==!0||Fs(this,p,"_pt"),delete o[u]),l!=="all"&&(l[u]=1);return this._initted&&!this._pt&&r&&ca(this),this},e.to=function(r,i){return new e(r,i,arguments[2])},e.from=function(r,i){return ha(1,arguments)},e.delayedCall=function(r,i,a,s){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:i,onReverseComplete:i,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(r,i,a){return ha(2,arguments)},e.set=function(r,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(r,i)},e.killTweensOf=function(r,i,a){return Ze.killTweensOf(r,i,a)},e}(va);er(ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),kt("staggerTo,staggerFrom,staggerFromTo",function(n){ct[n]=function(){var e=new Nt,t=Pl.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});function id(n,e){var t=e._pt,r="";if(!n&&e.b)r=e.b;else if(n===1&&e.e)r=e.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*n):Math.round(1e4*(t.s+t.c*n))/1e4)+r,t=t._next;r+=e.c}e.set(e.t,e.p,r,e)}function Cl(n,e){for(var t=e._pt;t;)t.r(n,t.d),t=t._next}function Lg(n,e,t,r){for(var i,a=this._pt;a;)i=a._next,a.p===r&&a.modifier(n,e,t),a=i}function Pg(n){for(var e,t,r=this._pt;r;)t=r._next,r.p===n&&!r.op||r.op===n?Fs(this,r,"_pt"):r.dep||(e=1),r=t;return!e}function Rg(n,e,t,r){r.mSet(n,e,r.m.call(r.tween,t,r.mt),r)}function nd(n){for(var e,t,r,i,a=n._pt;a;){for(e=a._next,t=r;t&&t.pr>a.pr;)t=t._next;(a._prev=t?t._prev:i)?a._prev._next=a:r=a,(a._next=t)?t._prev=a:i=a,a=e}n._pt=r}var Nl=function(n,e,t){return n[e]=t},ad=function(n,e,t){return n[e](t)},Fg=function(n,e,t,r){return n[e](r.fp,t)},Cg=function(n,e,t){return n.setAttribute(e,t)},Il=function(n,e){return ut(n[e])?ad:yl(n[e])&&n.setAttribute?Cg:Nl},sd=function(n,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*n))/1e6,e)},Ng=function(n,e){return e.set(e.t,e.p,!!(e.s+e.c*n),e)},It=function(){function n(e,t,r,i,a,s,o,l,h){this.t=t,this.s=i,this.c=a,this.p=r,this.r=s||sd,this.d=o||this,this.set=l||Nl,this.pr=h||0,(this._next=e)&&(e._prev=this)}return n.prototype.modifier=function(e,t,r){this.mSet=this.mSet||this.set,this.set=Rg,this.m=e,this.mt=r,this.tween=t},n}();kt(El+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return wl[n]=1}),Xt.TweenMax=Xt.TweenLite=ct,Xt.TimelineLite=Xt.TimelineMax=Nt,Ze=new Nt({sortChildren:!1,defaults:Sn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ct.stringFilter=Dc;var Ns={registerPlugin:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.forEach(function(r){var i=(r=!r.name&&r.default||r).name,a=ut(r),s=i&&!a&&r.init?function(){this._props=[]}:r,o={init:yn,render:Cl,add:Fl,kill:Pg,modifier:Lg,rawVars:0},a={targetTest:0,get:0,getSetter:Il,aliases:{},register:0};if(En(),r!==s){if(Yt[i])return;er(s,er(al(r,o),a)),bn(s.prototype,bn(o,al(r,a))),Yt[s.prop=i]=s,r.targetTest&&(Ps.push(s),wl[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}_c(i,s),r.register&&r.register(_r,s,It)})},timeline:function(n){return new Nt(n)},getTweensOf:function(n,e){return Ze.getTweensOf(n,e)},getProperty:function(n,e,t,r){gt(n)&&(n=rr(n)[0]);var i=Ri(n||{}).get,a=t?bc:Yc;return t==="native"&&(t=""),n&&(e?a((Yt[e]&&Yt[e].get||i)(n,e,t,r)):function(s,o,l){return a((Yt[s]&&Yt[s].get||i)(n,s,o,l))})},quickSetter:function(n,e,t){if(1<(n=rr(n)).length){var r=n.map(function(h){return _r.quickSetter(h,e,t)}),i=r.length;return function(h){for(var u=i;u--;)r[u](h)}}n=n[0]||{};var a=Yt[e],s=Ri(n),o=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;_a._pt=0,u.init(n,t?h+t:h,_a,0,[n]),u.render(1,u),_a._pt&&Cl(1,_a)}:s.set(n,o);return a?l:function(h){return l(n,o,t?h+t:h,s,1)}},isTweening:function(n){return 0<Ze.getTweensOf(n,!0).length},defaults:function(n){return n&&n.ease&&(n.ease=Ln(n.ease,Sn.ease)),nl(Sn,n||{})},config:function(n){return nl(Ct,n||{})},registerEffect:function(n){var e=n.name,t=n.effect,r=n.plugins,i=n.defaults,n=n.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Yt[a]&&!Xt[a]&&Ms(e+" effect requires "+a+" plugin.")}),Al[e]=function(a,s,o){return t(rr(a),er(s||{},i),o)},n&&(Nt.prototype[e]=function(a,s,o){return this.add(Al[e](a,Or(s)?s:(o=s)&&{},this),o)})},registerEase:function(n,e){Ae[n]=Ln(e)},parseEase:function(n,e){return arguments.length?Ln(n,e):Ae},getById:function(n){return Ze.getById(n)},exportRoot:function(n,e){var t,r,i=new Nt(n=n===void 0?{}:n);for(i.smoothChildTiming=Ft(n.smoothChildTiming),Ze.remove(i),i._dp=0,i._time=i._tTime=Ze._time,t=Ze._first;t;)r=t._next,!e&&!t._dur&&t instanceof ct&&t.vars.onComplete===t._targets[0]||gr(i,t,t._start-t._delay),t=r;return gr(Ze,i,0),i},utils:{wrap:sa,wrapYoyo:Ir,distribute:Pc,random:Rc,snap:Ai,normalize:function(n,e,t){return Cc(n,e,0,1,t)},getUnit:jt,clamp:function(n,e,t){return ni(t,function(r){return ua(n,e,r)})},splitColor:Zc,toArray:rr,selector:function(n){return n=rr(n)[0]||Ms("Invalid scope")||{},function(e){var t=n.current||n.nativeElement||n;return rr(e,t.querySelectorAll?t:t===n?Ms("Invalid scope")||cl.createElement("div"):n)}},mapRange:Cc,pipe:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(r){return e.reduce(function(i,a){return a(i)},r)}},unitize:function(n,e){return function(t){return n(parseFloat(t))+(e||jt(t))}},interpolate:it,shuffle:qc},install:xc,effects:Al,ticker:ir,updateRoot:Nt.updateRoot,plugins:Yt,globalTimeline:Ze,core:{PropTween:It,globals:_c,Tween:ct,Timeline:Nt,Animation:va,getCache:Ri,_removeLinkedListItem:Fs,suppressOverwrites:function(n){return hl=n}}};kt("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ns[n]=ct[n]}),ir.add(Nt.updateRoot);var _a=Ns.to({},{duration:0}),Ig=function(n,e){for(var t=n._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},Ir=function(n,e){return{name:n,rawVars:1,init:function(t,r,i){i._onInit=function(a){var s,o;if(gt(r)&&(s={},kt(r,function(l){return s[l]=1}),r=s),e){for(o in s={},r)s[o]=e(r[o]);r=s}(function(l,h){var u,p,c,d=l._targets;for(u in h)for(p=d.length;p--;)(c=(c=l._ptLookup[p][u])&&c.d)&&(c=c._pt?Ig(c,u):c)&&c.modifier&&c.modifier(h[u],l,d[p],u)})(a,r)}}}},_r=Ns.registerPlugin({name:"attr",init:function(n,e,t,r,i){var a,s;for(a in e)(s=this.add(n,"setAttribute",(n.getAttribute(a)||0)+"",e[a],r,i,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function(n,e){for(var t=e.length;t--;)this.add(n,t,n[t]||0,e[t])}},Ir("roundProps",ol),Ir("modifiers"),Ir("snap",Ai))||Ns;ct.version=Nt.version=_r.version="3.8.0",Oc=1,gc()&&En(),Ae.Power0,Ae.Power1,Ae.Power2,Ae.Power3,Ae.Power4,Ae.Linear,Ae.Quad,Ae.Cubic,Ae.Quart,Ae.Quint,Ae.Strong,Ae.Elastic,Ae.Back,Ae.SteppedEase,Ae.Bounce;var yr=Ae.Sine;Ae.Expo,Ae.Circ;function od(n,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*n))/1e4+e.u,e)}function Dg(n,e){return e.set(e.t,e.p,n===1?e.e:Math.round(1e4*(e.s+e.c*n))/1e4+e.u,e)}function Ug(n,e){return e.set(e.t,e.p,n?Math.round(1e4*(e.s+e.c*n))/1e4+e.u:e.b,e)}function Og(n,e){n=e.s+e.c*n,e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)}function ld(n,e){return e.set(e.t,e.p,n?e.e:e.b,e)}function hd(n,e){return e.set(e.t,e.p,n!==1?e.b:e.e,e)}function zg(n,e,t){return n.style[e]=t}function Bg(n,e,t){return n.style.setProperty(e,t)}function Hg(n,e,t){return n._gsap[e]=t}function Gg(n,e,t){return n._gsap.scaleX=n._gsap.scaleY=t}function kg(n,e,t,r,i){(n=n._gsap).scaleX=n.scaleY=t,n.renderTransform(i,n)}function Vg(n,e,t,r,i){(n=n._gsap)[e]=t,n.renderTransform(i,n)}function Dl(){Yg()&&window.document&&(pd=window,oi=pd.document,Rn=oi.documentElement,Ci=Bl("div")||{style:{}},Bl("div"),vt=Nn(vt),ui=vt+"Origin",Ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",md=!!Nn("perspective"),zl=1)}function Is(n){var e,t=Bl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,a=this.style.cssText;if(Rn.appendChild(t),t.appendChild(this),this.style.display="block",n)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Is}catch(s){}else this._gsapBBox&&(e=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),Rn.removeChild(t),this.style.cssText=a,e}function ud(n,e){for(var t=e.length;t--;)if(n.hasAttribute(e[t]))return n.getAttribute(e[t])}function Pn(n,e,t,r){var i;return zl||Dl(),e in hi&&e!=="transform"&&~(e=hi[e]).indexOf(",")&&(e=e.split(",")[0]),li[e]&&e!=="transform"?(i=Ma(n,r),i=e!=="transformOrigin"?i[e]:i.svg?i.origin:Us(zr(n,ui))+" "+i.zOrigin+"px"):(i=n.style[e])&&i!=="auto"&&!r&&!~(i+"").indexOf("calc(")||(i=Ds[e]&&Ds[e](n,e,t)||zr(n,e)||Xc(n,e)||(e==="opacity"?1:0)),t&&!~(i+"").trim().indexOf(" ")?di(n,e,i,t)+t:i}function Wg(n,e,t,r){var i;t&&t!=="none"||((a=(i=Nn(e,n,1))&&zr(n,i,1))&&a!==t?(e=i,t=a):e==="borderColor"&&(t=zr(n,"borderTopColor")));var a,s,o,l,h,u,p,c,d,f,m=new It(this._pt,n.style,e,0,1,id),g=0,v=0;if(m.b=t,m.e=r,t+="",(r+="")==="auto"&&(n.style[e]=r,r=zr(n,e)||r,n.style[e]=t),Dc(a=[t,r]),r=a[1],s=(t=a[0]).match(An)||[],(r.match(An)||[]).length){for(;u=An.exec(r);)c=u[0],p=r.substring(g,u.index),l?l=(l+1)%5:p.substr(-5)!=="rgba("&&p.substr(-5)!=="hsla("||(l=1),c!==(h=s[v++]||"")&&(o=parseFloat(h)||0,d=h.substr((o+"").length),(f=c.charAt(1)==="="?+(c.charAt(0)+"1"):0)&&(c=c.substr(2)),u=parseFloat(c),c=c.substr((u+"").length),g=An.lastIndex-c.length,c||(c=c||Ct.units[e]||d,g===r.length&&(r+=c,m.e+=c)),d!==c&&(o=di(n,e,h,c)||0),m._pt={_next:m._pt,p:p||v===1?p:",",s:o,c:f?f*u:u-o,m:l&&l<4||e==="zIndex"?Math.round:0});m.c=g<r.length?r.substring(g,r.length):""}else m.r=e==="display"&&r==="none"?hd:ld;return kc.test(r)&&(m.e=0),this._pt=m}function Xg(n,e){if(e.tween&&e.tween._time===e.tween._dur){var t,r,i,a=e.t,s=a.style,o=e.u,e=a._gsap;if(o==="all"||o===!0)s.cssText="",r=1;else for(i=(o=o.split(",")).length;-1<--i;)t=o[i],li[t]&&(r=1,t=t==="transformOrigin"?ui:vt),ya(a,t);r&&(ya(a,vt),e&&(e.svg&&a.removeAttribute("transform"),Ma(a,1),e.uncache=1))}}function cd(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n}function Ul(n,e,t,r,i,a){var s,o,l=n._gsap,h=i||Hl(n,!0),u=l.xOrigin||0,p=l.yOrigin||0,c=l.xOffset||0,d=l.yOffset||0,f=h[0],m=h[1],g=h[2],v=h[3],y=h[4],x=h[5],_=e.split(" "),T=parseFloat(_[0])||0,i=parseFloat(_[1])||0;t?h!==ba&&(s=f*v-m*g)&&(o=T*(-m/s)+i*(f/s)-(f*x-m*y)/s,T=T*(v/s)+i*(-g/s)+(g*x-v*y)/s,i=o):(T=(o=xd(n)).x+(~_[0].indexOf("%")?T/100*o.width:T),i=o.y+(~(_[1]||_[0]).indexOf("%")?i/100*o.height:i)),r||r!==!1&&l.smooth?(l.xOffset=c+((y=T-u)*f+(x=i-p)*g)-y,l.yOffset=d+(y*m+x*v)-x):l.xOffset=l.yOffset=0,l.xOrigin=T,l.yOrigin=i,l.smooth=!!r,l.origin=e,l.originIsAbsolute=!!t,n.style[ui]="0px 0px",a&&(ci(a,l,"xOrigin",u,T),ci(a,l,"yOrigin",p,i),ci(a,l,"xOffset",c,l.xOffset),ci(a,l,"yOffset",d,l.yOffset)),n.setAttribute("data-svg-origin",T+" "+i)}function Ol(n,e,t){var r=jt(e);return nt(parseFloat(e)+parseFloat(di(n,"x",t+"px",r)))+r}function dd(n,e){for(var t in e)n[t]=e[t];return n}var pd,oi,Rn,zl,Ci,fd,md,Yg=function(){return typeof window!="undefined"},li={},Ni=180/Math.PI,Fn=Math.PI/180,Cn=Math.atan2,gd=/([A-Z])/g,jg=/(?:left|right|width|margin|padding|x)/i,Qg=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vt="transform",ui=vt+"Origin",Bl=function(n,e){return e=oi.createElementNS?oi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):oi.createElement(n),e.style?e:oi.createElement(n)},zr=function n(e,t,r){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gd,"-$1").toLowerCase())||i.getPropertyValue(t)||!r&&n(e,Nn(t)||t,1)||""},vd="O,Moz,ms,Ms,Webkit".split(","),Nn=function(n,e,t){var r=(e||Ci).style,i=5;if(n in r&&!t)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);i--&&!(vd[i]+n in r););return i<0?null:(i===3?"ms":0<=i?vd[i]:"")+n},xd=function(n){var e;try{e=n.getBBox()}catch(t){e=Is.call(n,!0)}return!(e=e&&(e.width||e.height)||n.getBBox===Is?e:Is.call(n,!0))||e.width||e.x||e.y?e:{x:+ud(n,["x","cx","x1"])||0,y:+ud(n,["y","cy","y1"])||0,width:0,height:0}},_d=function(n){return!(!n.getCTM||n.parentNode&&!n.ownerSVGElement||!xd(n))},ya=function(n,e){e&&(n=n.style,e in li&&e!==ui&&(e=vt),n.removeProperty?(e.substr(0,2)!=="ms"&&e.substr(0,6)!=="webkit"||(e="-"+e),n.removeProperty(e.replace(gd,"-$1").toLowerCase())):n.removeAttribute(e))},ci=function(n,e,t,r,i,a){return a=new It(n._pt,e,t,0,1,a?hd:ld),(n._pt=a).b=r,a.e=i,n._props.push(t),a},yd={deg:1,rad:1,turn:1},di=function n(e,t,r,i){var a,s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",l=Ci.style,h=jg.test(t),u=e.tagName.toLowerCase()==="svg",p=(u?"client":"offset")+(h?"Width":"Height"),c=i==="px",d=i==="%";return i===o||!s||yd[i]||yd[o]?s:(o==="px"||c||(s=n(e,t,r,"px")),r=e.getCTM&&_d(e),!d&&o!=="%"||!li[t]&&!~t.indexOf("adius")?(l[h?"width":"height"]=100+(c?o:i),i=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,(u=(i=!(i=r?(e.ownerSVGElement||{}).parentNode:i)||i===oi||!i.appendChild?oi.body:i)._gsap)&&d&&u.width&&h&&u.time===ir.time?nt(s/u.width*100):(!d&&o!=="%"||(l.position=zr(e,"position")),i===e&&(l.position="static"),i.appendChild(Ci),a=Ci[p],i.removeChild(Ci),l.position="absolute",h&&d&&((u=Ri(i)).time=ir.time,u.width=i[p]),nt(c?a*s/100:a&&s?100/a*s:0))):(a=r?e.getBBox()[h?"width":"height"]:e[p],nt(d?s/a*100:s/100*a)))},bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ds={clearProps:function(n,e,t,r,i){if(i.data!=="isFromStart")return e=n._pt=new It(n._pt,e,t,0,0,Xg),e.u=r,e.pr=-10,e.tween=i,n._props.push(t),1}},ba=[1,0,0,1,0,0],Md={},Td=function(n){return n=zr(n,vt),cd(n)?ba:n.substr(7).match(Gc).map(nt)},Hl=function(n,e){var t,r,i,a=n._gsap||Ri(n),s=n.style,o=Td(n);return a.svg&&n.getAttribute("transform")?(o=[(r=n.transform.baseVal.consolidate().matrix).a,r.b,r.c,r.d,r.e,r.f]).join(",")==="1,0,0,1,0,0"?ba:o:(o!==ba||n.offsetParent||n===Rn||a.svg||(r=s.display,s.display="block",(a=n.parentNode)&&n.offsetParent||(i=1,t=n.nextSibling,Rn.appendChild(n)),o=Td(n),r?s.display=r:ya(n,"display"),i&&(t?a.insertBefore(n,t):a?a.appendChild(n):Rn.removeChild(n))),e&&6<o.length?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ma=function(n,e){var t=n._gsap||new ed(n);if("x"in t&&!e&&!t.uncache)return t;var r,i,a,s,o,l,h,u,p,c,d,f,m,g,v,y,x,_,T,b,M,A,N,I,C,O=n.style,D=t.scaleX<0,F=zr(n,ui)||"0",U=r=i=s=o=l=h=u=0,H=a=1;return t.svg=!(!n.getCTM||!_d(n)),p=Hl(n,t.svg),t.svg&&(_=(!t.uncache||F==="0px 0px")&&!e&&n.getAttribute("data-svg-origin"),Ul(n,_||F,!!_||t.originIsAbsolute,t.smooth!==!1,p)),A=t.xOrigin||0,I=t.yOrigin||0,p!==ba&&(f=p[0],m=p[1],g=p[2],v=p[3],U=y=p[4],r=x=p[5],p.length===6?(H=Math.sqrt(f*f+m*m),a=Math.sqrt(v*v+g*g),s=f||m?Cn(m,f)*Ni:0,(h=g||v?Cn(g,v)*Ni+s:0)&&(a*=Math.abs(Math.cos(h*Fn))),t.svg&&(U-=A-(A*f+I*g),r-=I-(A*m+I*v))):(C=p[6],N=p[7],M=p[8],e=p[9],A=p[10],I=p[11],U=p[12],r=p[13],i=p[14],o=(p=Cn(C,A))*Ni,p&&(_=y*(c=Math.cos(-p))+M*(d=Math.sin(-p)),T=x*c+e*d,b=C*c+A*d,M=y*-d+M*c,e=x*-d+e*c,A=C*-d+A*c,I=N*-d+I*c,y=_,x=T,C=b),l=(p=Cn(-g,A))*Ni,p&&(c=Math.cos(-p),I=v*(d=Math.sin(-p))+I*c,f=_=f*c-M*d,m=T=m*c-e*d,g=b=g*c-A*d),s=(p=Cn(m,f))*Ni,p&&(_=f*(c=Math.cos(p))+m*(d=Math.sin(p)),T=y*c+x*d,m=m*c-f*d,x=x*c-y*d,f=_,y=T),o&&359.9<Math.abs(o)+Math.abs(s)&&(o=s=0,l=180-l),H=nt(Math.sqrt(f*f+m*m+g*g)),a=nt(Math.sqrt(x*x+C*C)),p=Cn(y,x),h=2e-4<Math.abs(p)?p*Ni:0,u=I?1/(I<0?-I:I):0),t.svg&&(_=n.getAttribute("transform"),t.forceCSS=n.setAttribute("transform","")||!cd(zr(n,vt)),_&&n.setAttribute("transform",_))),90<Math.abs(h)&&Math.abs(h)<270&&(D?(H*=-1,h+=s<=0?180:-180,s+=s<=0?180:-180):(a*=-1,h+=h<=0?180:-180)),t.x=U-((t.xPercent=U&&(t.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-U)?-50:0)))?n.offsetWidth*t.xPercent/100:0)+"px",t.y=r-((t.yPercent=r&&(t.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-r)?-50:0)))?n.offsetHeight*t.yPercent/100:0)+"px",t.z=i+"px",t.scaleX=nt(H),t.scaleY=nt(a),t.rotation=nt(s)+"deg",t.rotationX=nt(o)+"deg",t.rotationY=nt(l)+"deg",t.skewX=h+"deg",t.skewY="0deg",t.transformPerspective=u+"px",(t.zOrigin=parseFloat(F.split(" ")[2])||0)&&(O[ui]=Us(F)),t.xOffset=t.yOffset=0,t.force3D=Ct.force3D,t.renderTransform=t.svg?Zg:md?wd:qg,t.uncache=0,t},Us=function(n){return(n=n.split(" "))[0]+" "+n[1]},qg=function(n,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,wd(n,e)},Ii="0deg",Ta="0px",Di=") ",wd=function(n,e){var t=e||this,r=t.xPercent,i=t.yPercent,a=t.x,s=t.y,o=t.z,l=t.rotation,h=t.rotationY,u=t.rotationX,p=t.skewX,c=t.skewY,d=t.scaleX,f=t.scaleY,m=t.transformPerspective,g=t.force3D,v=t.target,y=t.zOrigin,x="",_=g==="auto"&&n&&n!==1||g===!0;!y||u===Ii&&h===Ii||(e=parseFloat(h)*Fn,t=Math.sin(e),n=Math.cos(e),e=parseFloat(u)*Fn,g=Math.cos(e),a=Ol(v,a,t*g*-y),s=Ol(v,s,-Math.sin(e)*-y),o=Ol(v,o,n*g*-y+y)),m!==Ta&&(x+="perspective("+m+Di),(r||i)&&(x+="translate("+r+"%, "+i+"%) "),!_&&a===Ta&&s===Ta&&o===Ta||(x+=o!==Ta||_?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Di),l!==Ii&&(x+="rotate("+l+Di),h!==Ii&&(x+="rotateY("+h+Di),u!==Ii&&(x+="rotateX("+u+Di),p===Ii&&c===Ii||(x+="skew("+p+", "+c+Di),d===1&&f===1||(x+="scale("+d+", "+f+Di),v.style[vt]=x||"translate(0, 0)"},Zg=function(n,e){var t,r,i,a,s,o=e||this,l=o.xPercent,h=o.yPercent,u=o.x,p=o.y,c=o.rotation,d=o.skewX,f=o.skewY,m=o.scaleX,g=o.scaleY,v=o.target,y=o.xOrigin,x=o.yOrigin,_=o.xOffset,T=o.yOffset,b=o.forceCSS,e=parseFloat(u),o=parseFloat(p),c=parseFloat(c),d=parseFloat(d);(f=parseFloat(f))&&(d+=f=parseFloat(f),c+=f),c||d?(c*=Fn,d*=Fn,t=Math.cos(c)*m,r=Math.sin(c)*m,i=Math.sin(c-d)*-g,a=Math.cos(c-d)*g,d&&(f*=Fn,s=Math.tan(d-f),i*=s=Math.sqrt(1+s*s),a*=s,f&&(s=Math.tan(f),t*=s=Math.sqrt(1+s*s),r*=s)),t=nt(t),r=nt(r),i=nt(i),a=nt(a)):(t=m,a=g,r=i=0),(e&&!~(u+"").indexOf("px")||o&&!~(p+"").indexOf("px"))&&(e=di(v,"x",u,"px"),o=di(v,"y",p,"px")),(y||x||_||T)&&(e=nt(e+y-(y*t+x*i)+_),o=nt(o+x-(y*r+x*a)+T)),(l||h)&&(s=v.getBBox(),e=nt(e+l/100*s.width),o=nt(o+h/100*s.height)),v.setAttribute("transform",s="matrix("+t+","+r+","+i+","+a+","+e+","+o+")"),b&&(v.style[vt]=s)};kt("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",i="Bottom",a="Left",s=(e<3?[t,r,i,a]:[t+a,t+r,i+r,i+a]).map(function(o){return e<2?n+o:"border"+o+n});Ds[1<e?"border"+n:n]=function(o,l,h,u,p){var c,d;if(arguments.length<4)return c=s.map(function(f){return Pn(o,f,h)}),(d=c.join(" ")).split(c[0]).length===5?c[0]:d;c=(u+"").split(" "),d={},s.forEach(function(f,m){return d[f]=c[m]=c[m]||c[(m-1)/2|0]}),o.init(l,d,p)}});var Gl,it={name:"css",register:Dl,targetTest:function(n){return n.style&&n.nodeType},init:function(n,e,t,r,i){var a,s,o,l,h,u,p,c,d,f,m,g,v,y,x,_,T,b,M,A,N,I=this._props,C=n.style,O=t.vars.startAt;for(h in zl||Dl(),e)if(h!=="autoRound"&&(s=e[h],!Yt[h]||!td(h,e,t,r,n,i))){if(_=Ds[h],(T=(T=typeof s)==="function"?typeof(s=s.call(t,r,n,i)):T)==="string"&&~s.indexOf("random(")&&(s=ma(s)),_)_(this,n,h,s,t)&&(v=1);else if(h.substr(0,2)==="--")a=(getComputedStyle(n).getPropertyValue(h)+"").trim(),s+="",ai.lastIndex=0,ai.test(a)||(u=jt(a),p=jt(s)),p?u!==p&&(a=di(n,h,a,p)+p):u&&(s+=u),this.add(C,"setProperty",a,s,r,i,0,0,h),I.push(h);else if(T!=="undefined"){if(O&&h in O?(a=typeof O[h]=="function"?O[h].call(t,r,n,i):O[h],h in Ct.units&&!jt(a)&&(a+=Ct.units[h]),((a=gt(a)&&~a.indexOf("random(")?ma(a):a)+"").charAt(1)==="="&&(a=Pn(n,h))):a=Pn(n,h),l=parseFloat(a),(c=T==="string"&&s.charAt(1)==="="?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),h in hi&&(h==="autoAlpha"&&(l===1&&Pn(n,"visibility")==="hidden"&&o&&(l=0),ci(this,C,"visibility",l?"inherit":"hidden",o?"inherit":"hidden",!o)),h!=="scale"&&h!=="transform"&&~(h=hi[h]).indexOf(",")&&(h=h.split(",")[0])),d=h in li)if(f||((m=n._gsap).renderTransform&&!e.parseTransform||Ma(n,e.parseTransform),g=e.smoothOrigin!==!1&&m.smooth,(f=this._pt=new It(this._pt,C,vt,0,1,m.renderTransform,m,0,-1)).dep=1),h==="scale")this._pt=new It(this._pt,m,"scaleY",m.scaleY,(c?c*o:o-m.scaleY)||0),I.push("scaleY",h),h+="X";else{if(h==="transformOrigin"){N=A=M=void 0,M=(b=s).split(" "),A=M[0],N=M[1]||"50%",A!=="top"&&A!=="bottom"&&N!=="left"&&N!=="right"||(b=A,A=N,N=b),M[0]=bd[A]||A,M[1]=bd[N]||N,s=M.join(" "),m.svg?Ul(n,s,0,g,0,this):((p=parseFloat(s.split(" ")[2])||0)!==m.zOrigin&&ci(this,m,"zOrigin",m.zOrigin,p),ci(this,C,h,Us(a),Us(s)));continue}if(h==="svgOrigin"){Ul(n,s,1,g,0,this);continue}if(h in Md){y=this,x=m,_=h,T=l,b=c,N=A=void 0,A=gt(M=s),N=parseFloat(M)*(A&&~M.indexOf("rad")?Ni:1),N=T+(b=b?N*b:N-T)+"deg",A&&((M=M.split("_")[1])==="short"&&(b%=360)!=b%180&&(b+=b<0?360:-360),M==="cw"&&b<0?b=(b+36e9)%360-360*~~(b/360):M==="ccw"&&0<b&&(b=(b-36e9)%360-360*~~(b/360))),y._pt=b=new It(y._pt,x,_,T,b,Dg),b.e=N,b.u="deg",y._props.push(_);continue}if(h==="smoothOrigin"){ci(this,m,"smooth",m.smooth,s);continue}if(h==="force3D"){m[h]=s;continue}if(h==="transform"){(function(D,F,U){var H,z,W,ee,q,Q,S=dd({},U._gsap),L=U.style;for(z in S.svg?(W=U.getAttribute("transform"),U.setAttribute("transform",""),L[vt]=F,H=Ma(U,1),ya(U,vt),U.setAttribute("transform",W)):(W=getComputedStyle(U)[vt],L[vt]=F,H=Ma(U,1),L[vt]=W),li)(W=S[z])!==(q=H[z])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(z)<0&&(ee=jt(W)!==(Q=jt(q))?di(U,z,W,Q):parseFloat(W),q=parseFloat(q),D._pt=new It(D._pt,H,z,ee,q-ee,od),D._pt.u=Q||0,D._props.push(z));dd(H,S)})(this,s,n);continue}}else h in C||(h=Nn(h)||h);if(d||(o||o===0)&&(l||l===0)&&!Qg.test(s)&&h in C)o=o||0,(u=(a+"").substr((l+"").length))!==(p=jt(s)||(h in Ct.units?Ct.units[h]:u))&&(l=di(n,h,a,p)),this._pt=new It(this._pt,d?m:C,h,l,c?c*o:o-l,d||p!=="px"&&h!=="zIndex"||e.autoRound===!1?od:Og),this._pt.u=p||0,u!==p&&p!=="%"&&(this._pt.b=a,this._pt.r=Ug);else if(h in C)Wg.call(this,n,h,a,s);else{if(!(h in n)){Tl(h,s);continue}this.add(n,h,a||n[h],s,r,i)}I.push(h)}}v&&nd(this)},get:Pn,aliases:hi,getSetter:function(n,e,t){var r=hi[e];return(e=r&&r.indexOf(",")<0?r:e)in li&&e!==ui&&(n._gsap.x||Pn(n,"x"))?t&&fd===t?e==="scale"?Gg:Hg:(fd=t||{})&&(e==="scale"?kg:Vg):n.style&&!yl(n.style[e])?zg:~e.indexOf("-")?Bg:Il(n,e)},core:{_removeProperty:ya,_getMatrix:Hl}};_r.utils.checkPrefix=Nn,Gl=kt((Ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Ai="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(n){li[n]=1}),kt(Ai,function(n){Ct.units[n]="deg",Md[n]=1}),hi[Gl[13]]=Ir+","+Ai,kt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(n){n=n.split(":"),hi[n[1]]=Gl[n[0]]}),kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ct.units[n]="px"}),_r.registerPlugin(it);var cr,wa,kl=_r.registerPlugin(it)||_r;kl.core.Tween,(it=cr=cr||{})[it.None=2]="None",it[it.Bloom=1]="Bloom",(it=wa=wa||{}).White="#ffffff",it.DarkPurple="#34075a";class Jg extends Cr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new lv(t)})}load(e,t,r,i){const a=this;let s;s=this.resourcePath!==""?this.resourcePath:this.path!==""?this.path:xn.extractUrlBase(e),this.manager.itemStart(e);function o(h){i?i(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)}const l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{a.parse(h,s,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},r,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,i){let a;const s={},o={};if(typeof e=="string")a=e;else if(xn.decodeText(new Uint8Array(e,0,4))===Sd){try{s[Ee.KHR_BINARY_GLTF]=new hv(e)}catch(p){return void(i&&i(p))}a=s[Ee.KHR_BINARY_GLTF].content}else a=xn.decodeText(new Uint8Array(e));var l=JSON.parse(a);if(l.asset===void 0||l.asset.version[0]<2)i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{const p=new vv(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){var h=this.pluginCallbacks[c](p);o[h.name]=h,s[h.name]=!0}if(l.extensionsUsed)for(let c=0;c<l.extensionsUsed.length;++c){var u=l.extensionsUsed[c];const d=l.extensionsRequired||[];switch(u){case Ee.KHR_MATERIALS_UNLIT:s[u]=new ev;break;case Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[u]=new dv;break;case Ee.KHR_DRACO_MESH_COMPRESSION:s[u]=new uv(l,this.dracoLoader);break;case Ee.KHR_TEXTURE_TRANSFORM:s[u]=new cv;break;case Ee.KHR_MESH_QUANTIZATION:s[u]=new pv;break;default:0<=d.indexOf(u)&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}p.setExtensions(s),p.setPlugins(o),p.parse(r,i)}}}function Kg(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class $g{constructor(e){this.parser=e,this.name=Ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser;var t=this.parser.json.nodes||[];for(let i=0,a=t.length;i<a;i++){var r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser;var r="light:"+e;let i=t.cache.get(r);if(i)return i;var a=t.json;const s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const l=new se(16777215);s.color!==void 0&&l.fromArray(s.color);var h=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new $o(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Ko(l),o.distance=h;break;case"spot":o=new ec(l),o.distance=h,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),i=Promise.resolve(o),t.cache.add(r,i),i}createNodeAttachment(e){const t=this,r=this.parser;e=r.json.nodes[e];const i=(e.extensions&&e.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(a){return r._getNodeRef(t.cache,i,a)})}}class ev{constructor(){this.name=Ee.KHR_MATERIALS_UNLIT}getMaterialType(){return hr}extendParams(e,t,r){const i=[];e.color=new se(1,1,1),e.opacity=1;var a=t.pbrMetallicRoughness;return a&&(Array.isArray(a.baseColorFactor)&&(t=a.baseColorFactor,e.color.fromArray(t),e.opacity=t[3]),a.baseColorTexture!==void 0&&i.push(r.assignTexture(e,"map",a.baseColorTexture))),Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return e=this.parser.json.materials[e],e.extensions&&e.extensions[this.name]?fn:null}extendMaterialParams(e,t){const r=this.parser;if(e=r.json.materials[e],!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=[];return e=e.extensions[this.name],e.clearcoatFactor!==void 0&&(t.clearcoat=e.clearcoatFactor),e.clearcoatTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatMap",e.clearcoatTexture)),e.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=e.clearcoatRoughnessFactor),e.clearcoatRoughnessTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatRoughnessMap",e.clearcoatRoughnessTexture)),e.clearcoatNormalTexture!==void 0&&(i.push(r.assignTexture(t,"clearcoatNormalMap",e.clearcoatNormalTexture)),e.clearcoatNormalTexture.scale!==void 0&&(e=e.clearcoatNormalTexture.scale,t.clearcoatNormalScale=new Z(e,e))),Promise.all(i)}}class rv{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return e=this.parser.json.materials[e],e.extensions&&e.extensions[this.name]?fn:null}extendMaterialParams(e,t){const r=this.parser;if(e=r.json.materials[e],!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=[];return e=e.extensions[this.name],e.transmissionFactor!==void 0&&(t.transmission=e.transmissionFactor),e.transmissionTexture!==void 0&&i.push(r.assignTexture(t,"transmissionMap",e.transmissionTexture)),Promise.all(i)}}class iv{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_VOLUME}getMaterialType(e){return e=this.parser.json.materials[e],e.extensions&&e.extensions[this.name]?fn:null}extendMaterialParams(e,t){const r=this.parser;if(e=r.json.materials[e],!e.extensions||!e.extensions[this.name])return Promise.resolve();const i=[];return e=e.extensions[this.name],t.thickness=e.thicknessFactor!==void 0?e.thicknessFactor:0,e.thicknessTexture!==void 0&&i.push(r.assignTexture(t,"thicknessMap",e.thicknessTexture)),t.attenuationDistance=e.attenuationDistance||0,e=e.attenuationColor||[1,1,1],t.attenuationTint=new se(e[0],e[1],e[2]),Promise.all(i)}}class nv{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_IOR}getMaterialType(e){return e=this.parser.json.materials[e],e.extensions&&e.extensions[this.name]?fn:null}extendMaterialParams(e,t){return e=this.parser.json.materials[e],!e.extensions||!e.extensions[this.name]?Promise.resolve():(e=e.extensions[this.name],t.ior=e.ior!==void 0?e.ior:1.5,Promise.resolve())}}class av{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_SPECULAR}getMaterialType(e){return e=this.parser.json.materials[e],e.extensions&&e.extensions[this.name]?fn:null}extendMaterialParams(e,t){const r=this.parser;var i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];return e=i.extensions[this.name],t.specularIntensity=e.specularFactor!==void 0?e.specularFactor:1,e.specularTexture!==void 0&&a.push(r.assignTexture(t,"specularIntensityMap",e.specularTexture)),i=e.specularColorFactor||[1,1,1],t.specularTint=new se(i[0],i[1],i[2]),e.specularColorTexture!==void 0&&a.push(r.assignTexture(t,"specularTintMap",e.specularColorTexture).then(function(s){s.encoding=Ut})),Promise.all(a)}}class sv{constructor(e){this.parser=e,this.name=Ee.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json;var i=r.textures[e];if(!i.extensions||!i.extensions[this.name])return null;var a=i.extensions[this.name],i=r.images[a.source],a=t.options.ktx2Loader;if(a)return t.loadTextureImage(e,i,a);if(r.extensionsRequired&&0<=r.extensionsRequired.indexOf(this.name))throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}}class ov{constructor(e){this.parser=e,this.name=Ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,i=r.json;var a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;a=a.extensions[t];const s=i.images[a.source];let o=r.textureLoader;return!s.uri||(a=r.options.manager.getHandler(s.uri))!==null&&(o=a),this.detectSupport().then(function(l){if(l)return r.loadTextureImage(e,s,o);if(i.extensionsRequired&&0<=i.extensionsRequired.indexOf(t))throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lv{constructor(e){this.name=Ee.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json;if(e=t.bufferViews[e],e.extensions&&e.extensions[this.name]){const r=e.extensions[this.name];e=this.parser.getDependency("buffer",r.buffer);const i=this.parser.options.meshoptDecoder;if(i&&i.supported)return Promise.all([e,i.ready]).then(function(a){var s=r.byteOffset||0,o=r.byteLength||0,l=r.count,h=r.byteStride,u=new ArrayBuffer(l*h),o=new Uint8Array(a[0],s,o);return i.decodeGltfBuffer(new Uint8Array(u),l,h,o,r.mode,r.filter),u});if(t.extensionsRequired&&0<=t.extensionsRequired.indexOf(this.name))throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return null}}const Sd="glTF",Ad={JSON:1313821514,BIN:5130562};class hv{constructor(e){this.name=Ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12);if(this.header={magic:xn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");var r=this.header.length-12;const i=new DataView(e,12);let a=0;for(;a<r;){var s=i.getUint32(a,!0);a+=4;var o,l=i.getUint32(a,!0);a+=4,l===Ad.JSON?(o=new Uint8Array(e,12+a,s),this.content=xn.decodeText(o)):l===Ad.BIN&&(l=12+a,this.body=e.slice(l,l+s)),a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ee.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){var r=this.json;const i=this.dracoLoader;var a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes;const o={},l={},h={};for(const f in s){var u=Wl[f]||f.toLowerCase();o[u]=s[f]}for(const f in e.attributes){var p,c,d=Wl[f]||f.toLowerCase();s[f]!==void 0&&(p=r.accessors[e.attributes[f]],c=Sa[p.componentType],h[d]=c,l[d]=p.normalized===!0)}return t.getDependency("bufferView",a).then(function(f){return new Promise(function(m){i.decodeDracoFile(f,function(g){for(const y in g.attributes){const x=g.attributes[y];var v=l[y];v!==void 0&&(x.normalized=v)}m(g)},o,h)})})}}class cv{constructor(){this.name=Ee.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vl extends wi{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),r=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),a=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const h in o)l.uniforms[h]=o[h];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",r).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",a).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){(o.specularMap.value=l)?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){(o.glossinessMap.value=l)?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class dv{constructor(){this.name=Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Vl}extendParams(e,t,r){var i=t.extensions[this.name];e.color=new se(1,1,1),e.opacity=1;const a=[];return Array.isArray(i.diffuseFactor)&&(t=i.diffuseFactor,e.color.fromArray(t),e.opacity=t[3]),i.diffuseTexture!==void 0&&a.push(r.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new se(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new se(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0&&(i=i.specularGlossinessTexture,a.push(r.assignTexture(e,"glossinessMap",i)),a.push(r.assignTexture(e,"specularMap",i))),Promise.all(a)}createMaterial(e){const t=new Vl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=_i,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class pv{constructor(){this.name=Ee.KHR_MESH_QUANTIZATION}}class Ui extends Fr{constructor(e,t,r,i){super(e,t,r,i)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let s=0;s!==i;s++)t[s]=r[a+s];return t}}Ui.prototype.beforeStart_=Ui.prototype.copySampleValue_,Ui.prototype.afterEnd_=Ui.prototype.copySampleValue_,Ui.prototype.interpolate_=function(n,e,t,r){const i=this.resultBuffer;var a=this.sampleValues,s=this.valueSize,o=2*s,l=3*s,h=r-e,r=(t-e)/h,t=r*r,e=t*r,u=n*l,p=u-l,c=-2*e+3*t,d=e-t,f=1-c,m=d-t+r;for(let _=0;_!==s;_++){var g=a[p+_+s],v=a[p+_+o]*h,y=a[u+_+s],x=a[u+_]*h;i[_]=f*g+m*v+c*y+d*x}return i};const fv=new Zt;class mv extends Ui{interpolate_(e,t,r,i){return i=super.interpolate_(e,t,r,i),fv.fromArray(i).normalize().toArray(i),i}}const Br={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:$e,9729:Ye,9984:Ws,9985:ih,9986:Xs,9987:xi},Ld={33071:yt,33648:Ca,10497:ki},Pd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gv={CUBICSPLINE:void 0,LINEAR:Wi,STEP:zn},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rd(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}function Aa(n,e,t){for(const r in t.extensions)n[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function Oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fd(n){let e="";var t=Object.keys(n).sort();for(let r=0,i=t.length;r<i;r++)e+=t[r]+":"+n[t[r]]+";";return e}function Yl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class vv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kg,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new ac(this.options.manager):this.textureLoader=new _s(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,i=this.json,a=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:r,userData:{}};Aa(a,o,i),Oi(o,i),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[];var t=this.json.skins||[];const r=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){var i=t[s].joints;for(let l=0,h=i.length;l<h;l++)e[i[l]].isBone=!0}for(let s=0,o=e.length;s<o;s++){var a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(r[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const i=r.clone(),a=(s,o)=>{var l,h,u=this.associations.get(s);u!=null&&this.associations.set(o,u);for([l,h]of s.children.entries())a(h,o.children[l])};return a(r,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){var r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let a=0;a<t.length;a++){var i=e(t[a]);i&&r.push(i)}return r}getDependency(e,t){var r=e+":"+t;let i=this.cache.get(r);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(r,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,s){return r.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ee.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,s){r.load(Rd(t.uri,i.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){var i=t.byteLength||0,a=t.byteOffset||0;return r.slice(a,a+i)})}loadAccessor(e){const t=this,r=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(s){var o=s[0],l=Pd[i.type];const h=Sa[i.componentType];var u=h.BYTES_PER_ELEMENT,p=u*l,c=i.byteOffset||0,d=i.bufferView!==void 0?r.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0;let m,g;if(d&&d!==p){var v=Math.floor(c/d),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let b=t.cache.get(p);b||(m=new h(o,v*d,i.count*d/u),b=new un(m,d/u),t.cache.add(p,b)),g=new ls(b,l,c%d/u,f)}else m=o===null?new h(i.count*l):new h(o,c,i.count*l),g=new et(m,l,f);if(i.sparse!==void 0){u=Pd.SCALAR;const T=Sa[i.sparse.indices.componentType];var c=i.sparse.indices.byteOffset||0,f=i.sparse.values.byteOffset||0,y=new T(s[1],c,i.sparse.count*u),x=new h(s[2],f,i.sparse.count*l);o!==null&&(g=new et(g.array.slice(),g.itemSize,g.normalized));for(let A=0,N=y.length;A<N;A++){var _=y[A];if(g.setX(_,x[A*l]),2<=l&&g.setY(_,x[A*l+1]),3<=l&&g.setZ(_,x[A*l+2]),4<=l&&g.setW(_,x[A*l+3]),5<=l)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){var t=this.json;const r=this.options;var i=t.textures[e],t=t.images[i.source];let a=this.textureLoader;return!t.uri||(i=r.manager.getHandler(t.uri))!==null&&(a=i),this.loadTextureImage(e,t,a)}loadTextureImage(e,t,r){const i=this,a=this.json,s=this.options,o=a.textures[e];var l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=self.URL||self.webkitURL;let u=t.uri||"",p=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(d){return p=!0,d=new Blob([d],{type:t.mimeType}),u=h.createObjectURL(d),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");var c=Promise.resolve(u).then(function(d){return new Promise(function(f,m){let g=f;r.isImageBitmapLoader===!0&&(g=function(v){const y=new je(v);y.needsUpdate=!0,f(y)}),r.load(Rd(d,s.path),g,void 0,m)})}).then(function(d){p===!0&&h.revokeObjectURL(u),d.flipY=!1,o.name&&(d.name=o.name);var f=(a.samplers||{})[o.sampler]||{};return d.magFilter=Ed[f.magFilter]||Ye,d.minFilter=Ed[f.minFilter]||xi,d.wrapS=Ld[f.wrapS]||ki,d.wrapT=Ld[f.wrapT]||ki,i.associations.set(d,{textures:e}),d}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=c}assignTexture(e,t,r){const i=this;return this.getDependency("texture",r.index).then(function(a){var s,o;return r.texCoord===void 0||r.texCoord==0||t==="aoMap"&&r.texCoord==1||console.warn("THREE.GLTFLoader: Custom UV set "+r.texCoord+" for texture "+t+" not yet supported."),!i.extensions[Ee.KHR_TEXTURE_TRANSFORM]||(s=r.extensions!==void 0?r.extensions[Ee.KHR_TEXTURE_TRANSFORM]:void 0)&&(o=i.associations.get(a),a=i.extensions[Ee.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),i.associations.set(a,o)),e[t]=a})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;var i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){var o="PointsMaterial:"+r.uuid;let l=this.cache.get(o);l||(l=new Do,ke.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(e.isLine){o="LineBasicMaterial:"+r.uuid;let l=this.cache.get(o);l||(l=new Ti,ke.prototype.copy.call(l,r),l.color.copy(r.color),this.cache.add(o,l)),r=l}if(i||a||s){let l="ClonedMaterial:"+r.uuid+":";r.isGLTFSpecularGlossinessMaterial&&(l+="specular-glossiness:"),i&&(l+="derivative-tangents:"),a&&(l+="vertex-colors:"),s&&(l+="flat-shading:");let h=this.cache.get(l);h||(h=r.clone(),a&&(h.vertexColors=!0),s&&(h.flatShading=!0),i&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(l,h),this.associations.set(h,this.associations.get(r))),r=h}r.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=r}getMaterialType(){return wi}loadMaterial(e){const t=this;var r=this.json;const i=this.extensions,a=r.materials[e];let s;const o={};r=a.extensions||{};const l=[];if(r[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else if(r[Ee.KHR_MATERIALS_UNLIT]){const u=i[Ee.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{var h=a.pbrMetallicRoughness||{};o.color=new se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)&&(r=h.baseColorFactor,o.color.fromArray(r),o.opacity=r[3]),h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}return a.doubleSided===!0&&(o.side=gi),h=a.alphaMode||Xl.OPAQUE,h===Xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.format=wr,o.transparent=!1,h===Xl.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==hr&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Z(1,1),a.normalTexture.scale!==void 0&&(h=a.normalTexture.scale,o.normalScale.set(h,h))),a.occlusionTexture!==void 0&&s!==hr&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==hr&&(o.emissive=new se().fromArray(a.emissiveFactor)),a.emissiveTexture!==void 0&&s!==hr&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture)),Promise.all(l).then(function(){let u;return u=s===Vl?i[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):new s(o),a.name&&(u.name=a.name),u.map&&(u.map.encoding=Ut),u.emissiveMap&&(u.emissiveMap.encoding=Ut),Oi(u,a),t.associations.set(u,{materials:e}),a.extensions&&Aa(i,u,a),u})}createUniqueName(e){var t=Re.sanitizeNodeName(e||"");let r=t;for(let i=1;this.nodeNamesUsed[r];++i)r=t+"_"+i;return this.nodeNamesUsed[r]=!0,r}loadGeometries(e){const t=this,r=this.extensions,i=this.primitiveCache,a=[];for(let h=0,u=e.length;h<u;h++){var s=e[h],o=function(p){var c=p.extensions&&p.extensions[Ee.KHR_DRACO_MESH_COMPRESSION];let d;return d=c?"draco:"+c.bufferView+":"+c.indices+":"+Fd(c.attributes):p.indices+":"+Fd(p.attributes)+":"+p.mode,d}(s),l=i[o];if(l)a.push(l.promise);else{let p;p=s.extensions&&s.extensions[Ee.KHR_DRACO_MESH_COMPRESSION]?function(c){return r[Ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return Cd(d,c,t)})}(s):Cd(new Ue,s,t),i[o]={primitive:s,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this;var r=this.json;const i=this.extensions,a=r.meshes[e],s=a.primitives,o=[];for(let h=0,u=s.length;h<u;h++){var l=s[h].material===void 0?((l=this.cache).DefaultMaterial===void 0&&(l.DefaultMaterial=new wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),l.DefaultMaterial):this.getDependency("material",s[h].material);o.push(l)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(h){var u=h.slice(0,h.length-1),p=h[h.length-1];const c=[];for(let v=0,y=p.length;v<y;v++){var d=p[v],f=s[v];let x;var m=u[v];if(f.mode===Br.TRIANGLES||f.mode===Br.TRIANGLE_STRIP||f.mode===Br.TRIANGLE_FAN||f.mode===void 0)x=new(a.isSkinnedMesh===!0?Ro:Qe)(d,m),x.isSkinnedMesh!==!0||x.geometry.attributes.skinWeight.normalized||x.normalizeSkinWeights(),f.mode===Br.TRIANGLE_STRIP?x.geometry=Nd(x.geometry,1):f.mode===Br.TRIANGLE_FAN&&(x.geometry=Nd(x.geometry,2));else if(f.mode===Br.LINES)x=new cn(d,m);else if(f.mode===Br.LINE_STRIP)x=new us(d,m);else if(f.mode===Br.LINE_LOOP)x=new Cu(d,m);else{if(f.mode!==Br.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);x=new Iu(d,m)}0<Object.keys(x.geometry.morphAttributes).length&&function(_,T){if(_.updateMorphTargets(),T.weights!==void 0)for(let M=0,A=T.weights.length;M<A;M++)_.morphTargetInfluences[M]=T.weights[M];if(T.extras&&Array.isArray(T.extras.targetNames)){var b=T.extras.targetNames;if(_.morphTargetInfluences.length===b.length){_.morphTargetDictionary={};for(let M=0,A=b.length;M<A;M++)_.morphTargetDictionary[b[M]]=M}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Oi(x,a),f.extensions&&Aa(i,x,f),t.assignFinalMaterial(x),c.push(x)}for(let v=0,y=c.length;v<y;v++)t.associations.set(c[v],{meshes:e,primitives:v});if(c.length===1)return c[0];const g=new Kr;t.associations.set(g,{meshes:e});for(let v=0,y=c.length;v<y;v++)g.add(c[v]);return g})}loadCamera(e){let t;var r=this.json.cameras[e],e=r[r.type];if(e)return r.type==="perspective"?t=new Mt(rf.radToDeg(e.yfov),e.aspectRatio||1,e.znear||1,e.zfar||2e6):r.type==="orthographic"&&(t=new on(-e.xmag,e.xmag,e.ymag,-e.ymag,e.znear,e.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),Oi(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){e=this.json.skins[e];const t={joints:e.joints};return e.inverseBindMatrices===void 0?Promise.resolve(t):this.getDependency("accessor",e.inverseBindMatrices).then(function(r){return t.inverseBindMatrices=r,t})}loadAnimation(e){const t=this.json.animations[e],r=[],i=[],a=[],s=[],o=[];for(let d=0,f=t.channels.length;d<f;d++){var l=t.channels[d],h=t.samplers[l.sampler],u=l.target,p=u.node!==void 0?u.node:u.id,c=t.parameters!==void 0?t.parameters[h.input]:h.input,l=t.parameters!==void 0?t.parameters[h.output]:h.output;r.push(this.getDependency("node",p)),i.push(this.getDependency("accessor",c)),a.push(this.getDependency("accessor",l)),s.push(h),o.push(u)}return Promise.all([Promise.all(r),Promise.all(i),Promise.all(a),Promise.all(s),Promise.all(o)]).then(function(d){var f=d[0],m=d[1],g=d[2],v=d[3],y=d[4];const x=[];for(let C=0,O=f.length;C<O;C++){const D=f[C];var _=m[C],T=g[C],b=v[C],M=y[C];if(D!==void 0){D.updateMatrix(),D.matrixAutoUpdate=!0;let F;switch(pi[M.path]){case pi.weights:F=ia;break;case pi.rotation:F=Si;break;case pi.position:case pi.scale:default:F=na}var A=D.name||D.uuid,N=b.interpolation!==void 0?gv[b.interpolation]:Wi;const U=[];pi[M.path]===pi.weights?D.traverse(function(z){z.isMesh===!0&&z.morphTargetInfluences&&U.push(z.name||z.uuid)}):U.push(A);let H=T.array;if(T.normalized){var I=Yl(H.constructor);const z=new Float32Array(H.length);for(let W=0,ee=H.length;W<ee;W++)z[W]=H[W]*I;H=z}for(let z=0,W=U.length;z<W;z++){const ee=new F(U[z]+"."+pi[M.path],_.array,H,N);b.interpolation==="CUBICSPLINE"&&(ee.createInterpolant=function(q){const Q=this instanceof Si?mv:Ui;return new Q(this.times,this.values,this.getValueSize()/3,q)},ee.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(ee)}}}return d=t.name||"animation_"+e,new eg(d,void 0,x)})}createNodeMesh(e){var t=this.json;const r=this,i=t.nodes[e];return i.mesh===void 0?null:r.getDependency("mesh",i.mesh).then(function(a){const s=r._getNodeRef(r.meshCache,i.mesh,a);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){var t=this.json;const r=this.extensions,i=this,a=t.nodes[e],s=a.name?i.createUniqueName(a.name):"";return function(){const o=[];var l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(h){return i._getNodeRef(i.cameraCache,a.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),Promise.all(o)}().then(function(o){let l;if(l=a.isBone===!0?new Fo:1<o.length?new Kr:o.length===1?o[0]:new Se,l!==o[0])for(let h=0,u=o.length;h<u;h++)l.add(o[h]);if(a.name&&(l.userData.name=a.name,l.name=s),Oi(l,a),a.extensions&&Aa(r,l,a),a.matrix!==void 0){const h=new ce;h.fromArray(a.matrix),l.applyMatrix4(h)}else a.translation!==void 0&&l.position.fromArray(a.translation),a.rotation!==void 0&&l.quaternion.fromArray(a.rotation),a.scale!==void 0&&l.scale.fromArray(a.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){var t=this.json,r=this.extensions,e=this.json.scenes[e];const i=this,a=new Kr;e.name&&(a.name=i.createUniqueName(e.name)),Oi(a,e),e.extensions&&Aa(r,a,e);var s=e.nodes||[];const o=[];for(let l=0,h=s.length;l<h;l++)o.push(function u(p,c,d,f){const m=d.nodes[p];return f.getDependency("node",p).then(function(g){if(m.skin===void 0)return g;let v;return f.getDependency("skin",m.skin).then(function(y){v=y;const x=[];for(let _=0,T=v.joints.length;_<T;_++)x.push(f.getDependency("node",v.joints[_]));return Promise.all(x)}).then(function(y){return g.traverse(function(x){if(x.isMesh){const _=[],T=[];for(let b=0,M=y.length;b<M;b++){const A=y[b];if(A){_.push(A);const N=new ce;v.inverseBindMatrices!==void 0&&N.fromArray(v.inverseBindMatrices.array,16*b),T.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',v.joints[b])}x.bind(new No(_,T),x.matrixWorld)}}),g})}).then(function(g){c.add(g);const v=[];if(m.children){const y=m.children;for(let x=0,_=y.length;x<_;x++){const T=y[x];v.push(u(T,g,d,f))}}return Promise.all(v)})}(s[l],a,t,i));return Promise.all(o).then(function(){return i.associations=(l=>{const h=new Map;for(var[u,p]of i.associations)(u instanceof ke||u instanceof je)&&h.set(u,p);return l.traverse(c=>{var d=i.associations.get(c);d!=null&&h.set(c,d)}),h})(a),a})}}function Cd(n,e,t){var r,i=e.attributes;const a=[];for(const o in i){var s=Wl[o]||o.toLowerCase();s in n.attributes||a.push(function(l,h){return t.getDependency("accessor",l).then(function(u){n.setAttribute(h,u)})}(i[o],s))}return e.indices===void 0||n.index||(r=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)}),a.push(r)),Oi(n,e),function(o,l,h){var u=l.attributes;const p=new Jt;if(u.POSITION!==void 0){var c=h.json.accessors[u.POSITION],d=c.min,u=c.max;if(d!==void 0&&u!==void 0){p.set(new R(d[0],d[1],d[2]),new R(u[0],u[1],u[2])),c.normalized&&(c=Yl(Sa[c.componentType]),p.min.multiplyScalar(c),p.max.multiplyScalar(c));var f=l.targets;if(f!==void 0){const _=new R,T=new R;for(let b=0,M=f.length;b<M;b++){var m,g,v=f[b];v.POSITION!==void 0&&(m=(g=h.json.accessors[v.POSITION]).min,v=g.max,m!==void 0&&v!==void 0?(T.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),T.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),T.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),g.normalized&&(g=Yl(Sa[g.componentType]),T.multiplyScalar(g)),_.max(T)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."))}p.expandByVector(_)}o.boundingBox=p;const x=new Mi;p.getCenter(x.center),x.radius=p.min.distanceTo(p.max)/2,o.boundingSphere=x}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}(n,e,t),Promise.all(a).then(function(){return e.targets!==void 0?function(o,l,h){let u=!1,p=!1;for(let v=0,y=l.length;v<y;v++){var c=l[v];if(c.POSITION!==void 0&&(u=!0),c.NORMAL!==void 0&&(p=!0),u&&p)break}if(!u&&!p)return Promise.resolve(o);const d=[],f=[];for(let v=0,y=l.length;v<y;v++){var m,g=l[v];u&&(m=g.POSITION!==void 0?h.getDependency("accessor",g.POSITION):o.attributes.position,d.push(m)),p&&(g=g.NORMAL!==void 0?h.getDependency("accessor",g.NORMAL):o.attributes.normal,f.push(g))}return Promise.all([Promise.all(d),Promise.all(f)]).then(function(v){var y=v[0],v=v[1];return u&&(o.morphAttributes.position=y),p&&(o.morphAttributes.normal=v),o.morphTargetsRelative=!0,o})}(n,e.targets,t):n})}function Nd(n,e){let t=n.getIndex();if(t===null){const o=[];var r=n.getAttribute("position");if(r===void 0)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n;for(let l=0;l<r.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}var i=t.count-2;const a=[];if(e===2)for(let o=1;o<=i;o++)a.push(t.getX(0)),a.push(t.getX(o)),a.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2==0?(a.push(t.getX(o)),a.push(t.getX(o+1)),a.push(t.getX(o+2))):(a.push(t.getX(o+2)),a.push(t.getX(o+1)),a.push(t.getX(o)));a.length/3!=i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(a),s}const br=class extends kr{constructor(e){we(this,"a0",!1);we(this,"a1",new Se);we(this,"a2",[]);we(this,"a5");we(this,"a6");super(),this.a5=br.a3.clone(),this.a5.map=e.a1?new _s().load(e.a1):null,this.a6=br.a4.clone(),new Jg().load(e.a0,t=>{this.b0(t),this.a0=!0,this.dispatchEvent({type:"ready"})})}static get a3(){return br._a3||(br._a3=new wi({metalness:.5,roughness:1,envMapIntensity:.3})),br._a3}static get a4(){return br._a4||(br._a4=new Qn({vertexShader:`
        attribute vec3 position;
        attribute vec2 uv;
  
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;
  
        varying vec2 vUv;
  
        void main() {
          vUv = uv;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,fragmentShader:`
        precision highp float;
  
        uniform float time;
        
        varying vec2 vUv;
  
        //	Simplex 3D Noise 
        //	by Ian McEwan, Ashima Arts
        //
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  
        float snoise(vec3 v){ 
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
          // First corner
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 =   v - i + dot(i, C.xxx) ;
  
          // Other corners
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
  
          //  x0 = x0 - 0. + 0.0 * C 
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1. + 3.0 * C.xxx;
  
          // Permutations
          i = mod(i, 289.0 ); 
          vec4 p = permute( permute( permute( 
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
          // Gradients
          // ( N*N points uniformly over a square, mapped onto an octahedron.)
          float n_ = 1.0/7.0; // N=7
          vec3  ns = n_ * D.wyz - D.xzx;
  
          vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
  
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
  
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
  
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
  
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
  
          //Normalise gradients
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
  
          // Mix final noise value
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                        dot(p2,x2), dot(p3,x3) ) );
        }
  
        void main() {
          float noise = (snoise(vec3(vUv * 3.0, time * 0.01))) * 0.3;
    
          gl_FragColor = vec4(vUv + noise, 1.0, 1.0);
        }
        `,uniforms:{time:{value:0}}})),br._a4}b0(e){const t=new Se;this.a1.add(t);for(let r=e.scene.children.length-1;0<=r;--r){const i=e.scene.children[r];if(i instanceof Qe){i.material=this.a5;const a=new Se;t.add(a),i.updateMatrix(),a.applyMatrix4(i.matrix),i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),a.add(i);const s=i.children.filter(h=>h instanceof Qe),o=s.find(({name:h})=>h.includes("top")),l=s.find(({name:h})=>h.includes("bottom"));o&&(o.material=this.a6,o.layers.enable(cr.Bloom),o.visible=!1),l&&(l.material=this.a6,l.layers.enable(cr.Bloom),l.visible=!1),this.a2.push({a0:a,a1:a.position.clone(),a2:o,a3:l})}}}b1(e,t){this.a0&&(this.a1.children[0].position.x=.01*Math.cos(.001*e),this.a1.children[0].position.y=.01*Math.sin(.002*e),t&&(this.a1.children[0].rotation.y=t.x),this.a2.forEach((r,i)=>{var a=Math.max(0,Math.min(1,Math.abs(r.a1.y-r.a0.position.y))),i=1e3*i;r.a0.children[0].position.x=.1*Math.sin(.001*(e+i))*a,r.a0.children[0].position.y=.1*Math.cos(.002*(e+i))*a,r.a0.children[0].rotation.y=.2*Math.sin(.001*(e+i))*a,r.a0.children[0].rotation.z=.2*Math.cos(.001*(e+i))*a}),this.a6.uniforms.time.value=.05*e)}};let Os=br;we(Os,"_a3"),we(Os,"_a4");class Id{constructor(e){we(this,"a0");we(this,"a1");we(this,"a2");we(this,"a3");we(this,"a4");we(this,"a5");we(this,"a6");we(this,"a7");we(this,"a8");we(this,"a9");we(this,"a10",new hr({color:"black"}));we(this,"a11");we(this,"a12");we(this,"a13");we(this,"a14");we(this,"a15");we(this,"a16");we(this,"a17");we(this,"a18");we(this,"a19",new sc);we(this,"a20",0);we(this,"a21",0);we(this,"a22",0);we(this,"a23",new Z);we(this,"a24",new Z(0,0));we(this,"a25",new Z(0,0));we(this,"a26");this.a0=e.$viewport;var{offsetWidth:t,offsetHeight:r}=this.a0;this.a22=document.documentElement.scrollHeight||document.body.scrollHeight,this.a23.set(t,r),this.a1=new bu,this.a1.setClearColor("#14062b"),this.a1.physicallyCorrectLights=!0,this.a1.outputEncoding=Ut,this.a1.toneMapping=4,this.a1.toneMapping=3,this.a1.setSize(t,r),this.a1.setPixelRatio(e.forcePixelRatio||Math.min(window.devicePixelRatio||1,2)),this.a0.appendChild(this.a1.domElement),this.a2=new Po,this.a3=new Mt(45,t/r,.1,20),this.a3.position.z=6,this.a3.userData.lookAt=new R(0,0,0);var i=new ug(this.a2,this.a3),a=new _n(new Z(t,r),2,1,.15);this.a6=new pc(this.a1),this.a6.renderTarget1.texture.encoding=this.a6.renderTarget2.texture.encoding=Ut,this.a6.renderToScreen=!1,this.a6.addPass(i),this.a6.addPass(a),this.a4=new bs({vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      `,fragmentShader:`
      uniform float time;
      uniform sampler2D baseTexture;
      uniform sampler2D bloomTexture;

      varying vec2 vUv;

      float random(vec2 p) {
        vec2 K1 = vec2(23.14069263277926, 2.665144142690225);
        return fract(cos(dot(p, K1)) * 12345.6789);
      }

      // https://github.com/jamieowen/glsl-blend
      float blendOverlay(float base, float blend) {
        return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
      }
      
      vec3 blendOverlay(vec3 base, vec3 blend) {
        return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
      }
      
      vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
        return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
      }

      void main() {
        vec2 grainUv = vUv;
        grainUv.y *= random(vec2(grainUv.y, time));

        float grain = random(grainUv) * 0.1;

        vec4 baseColor = texture2D(baseTexture, vUv);
        vec4 bloomColor = texture2D(bloomTexture, vUv); 

        vec4 color = vec4(blendOverlay(baseColor.rgb, bloomColor.rgb), 0.0);
        color.rgb += grain;

        gl_FragColor = color;
      }
      `,uniforms:{time:{value:null},baseTexture:{value:null},bloomTexture:{value:this.a6.renderTarget2}}},"baseTexture"),this.a4.needsSwap=!0,this.a5=new bs(dg),this.a5.uniforms.resolution.value.set(1/t,1/r),this.a7=new pc(this.a1),this.a7.renderTarget1.texture.encoding=this.a7.renderTarget2.texture.encoding=Ut,this.a7.addPass(i),this.a7.addPass(this.a4),this.a7.addPass(this.a5),this.a8=new io,this.a8.set(cr.Bloom),this.a9=new io,this.a9.set(cr.None),e.envUrl&&new cg().load(e.envUrl,o=>{const l=new Vh(this.a1);o=l.fromEquirectangular(o).texture,this.a2.environment=o,l.dispose()}).dispose(),this.a2.fog=new os(wa.DarkPurple,4,10),i=new Qo(1,18,18);const s=new wi({roughness:1,metalness:1,envMapIntensity:1});if(this.a12=new Qe(i,s.clone()),this.a12.material.color.set("brown"),this.a12.layers.enable(cr.Bloom),this.a12.position.set(1,0,-2),this.a2.add(this.a12),this.a13=new Qe(i,s.clone()),this.a13.material.color.set("cyan"),this.a13.position.set(0,5,-2),this.a13.layers.enable(cr.Bloom),this.a2.add(this.a13),this.a14=new Qe(i,s.clone()),this.a14.material.color.set("orange"),this.a14.position.set(3,5,-2),this.a14.layers.enable(cr.Bloom),this.a2.add(this.a14),this.a15=new Qe(i,s.clone()),this.a15.material.color.set("red"),this.a15.position.set(-3.5,5,-2),this.a15.layers.enable(cr.Bloom),this.a2.add(this.a15),e.gradientUrl){this.a16=new Qe(new ns(4,4),new hr({map:new _s().load(e.gradientUrl),transparent:!0})),this.a16.position.z=-2,this.a16.scale.set(2,2,1),this.a16.layers.enable(cr.None),this.a2.add(this.a16);const o=this.a16.clone();o.position.x=3,o.position.z=this.a16.position.z-.1,this.a2.add(o),i=this.a16.clone(),o.position.x=-3,o.position.z=this.a16.position.z-.2,this.a2.add(i)}this.a17=new Ko(wa.DarkPurple,60),this.a17.position.set(-3,2,0),this.a2.add(this.a17),this.a18=new $o(wa.White,1),this.a18.position.set(3,2,4),this.a2.add(this.a18),kl.fromTo(this.a18,{intensity:1},{intensity:.8,duration:2,yoyo:!0,repeat:-1,ease:yr.easeInOut}),this.a11=new Os({a0:e.modelUrl,a1:e.diffuseUrl}),this.a2.add(this.a11.a1),this.a26=this.b0(),this.b1=this.b1.bind(this),this.b2=this.b2.bind(this),this.b3=this.b3.bind(this),this.a19.start(),window.addEventListener("mousemove",this.b1),window.addEventListener("resize",this.b2),window.requestAnimationFrame(this.b3)}b0(){const e=kl.timeline({paused:!0,defaults:{duration:1}});function t(r){r.userData.previousY==null&&(r.userData.previousY=r.position.y);var i=Math.min(.5,Math.abs(r.position.y-r.userData.previousY));r.userData.previousY=r.position.y,r.scale.set(1-i,1+i,1)}return Array.from(Array(8)).forEach((r,i)=>{e.addLabel(`section-${i}`,+i)}),e.set({},{},7),e.to(this.a12.position,{y:-5,duration:2,onUpdate:t.bind(null,this.a12)},"section-0"),e.to(this.a13.position,{y:-5,duration:2,onUpdate:t.bind(null,this.a13)},"section-1"),e.to(this.a14.position,{y:-5,duration:2,onUpdate:t.bind(null,this.a14)},"section-2"),e.to(this.a15.position,{y:-5,duration:2,onUpdate:t.bind(null,this.a15)},"section-5"),this.a11.a1.position.set(1.75,-.5,1),e.to(this.a11.a1.position,{x:-3,ease:yr.easeInOut,duration:7},"section-0"),e.to(this.a11.a1.position,{y:-1,ease:yr.easeOut,duration:2},"section-0"),e.to(this.a11.a1.position,{z:2,ease:yr.easeInOut,duration:2},"section-0"),e.to(this.a11.a1.rotation,{y:2,ease:yr.easeInOut,duration:7},"section-0"),this.a16&&e.to(this.a16,{y:-2,duration:7},"section-0"),this.a11.addEventListener("ready",()=>{e.to(this.a11.a5,{metalness:.8},"section-0"),e.to(this.a11.a5,{metalness:.5},"section-2"),e.to(this.a11.a5,{metalness:1},"section-3+=0.5"),e.set(this.a11.a2[4].a3||{},{visible:!0},"section-1"),e.set(this.a11.a2[3].a2||{},{visible:!0},"section-1"),e.set(this.a11.a2[3].a3||{},{visible:!0},"section-1+=0.1"),e.set(this.a11.a2[2].a2||{},{visible:!0},"section-1+=0.1"),e.set(this.a11.a2[2].a3||{},{visible:!0},"section-1+=0.1"),e.set(this.a11.a2[1].a2||{},{visible:!0},"section-1+=0.2"),e.to(this.a11.a2[4].a0.position,{y:"+=0.2"},"section-1"),e.to(this.a11.a2[3].a0.position,{y:"+=0.14"},"section-1+=0.1"),e.to(this.a11.a2[2].a0.position,{y:"+=0.04"},"section-1+=0.2"),e.to(this.a11.a2[4].a0.position,{y:"-=0.2"},"section-2+=0.2"),e.to(this.a11.a2[3].a0.position,{y:"-=0.14"},"section-2+=0.2"),e.to(this.a11.a2[2].a0.position,{y:"-=0.04"},"section-2+=0.2"),e.set(this.a11.a2[4].a3||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[3].a2||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[3].a3||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[2].a2||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[2].a3||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[1].a2||{},{visible:!1},"section-2+=1.2"),e.set(this.a11.a2[4].a3||{},{visible:!0},"section-3+=0.5"),e.set(this.a11.a2[3].a2||{},{visible:!0},"section-3+=0.5"),e.set(this.a11.a2[3].a3||{},{visible:!0},"section-3+=0.6"),e.set(this.a11.a2[2].a2||{},{visible:!0},"section-3+=0.6"),e.set(this.a11.a2[2].a3||{},{visible:!0},"section-3+=0.7"),e.set(this.a11.a2[1].a2||{},{visible:!0},"section-3+=0.7"),e.set(this.a11.a2[1].a3||{},{visible:!0},"section-3+=0.7"),e.set(this.a11.a2[0].a2||{},{visible:!0},"section-3+=0.7"),e.to(this.a11.a2[4].a0.position,{y:"+=0.4"},"section-3+=0.5"),e.to(this.a11.a2[3].a0.position,{y:"+=0.3"},"section-3+=0.6"),e.to(this.a11.a2[2].a0.position,{y:"+=0.23"},"section-3+=0.7"),e.to(this.a11.a2[1].a0.position,{y:"+=0.14"},"section-3+=0.8"),e.to(this.a11.a2[0].a0.position,{y:"-=0.25"},"section-3+=0.7"),e.set(this.a11.a2[4].a3||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[3].a2||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[3].a3||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[2].a2||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[2].a3||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[1].a2||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[1].a3||{},{visible:!1},"section-6+=0.5"),e.set(this.a11.a2[0].a2||{},{visible:!1},"section-6+=0.5"),e.to(this.a11.a2[4].a0.position,{y:"-=0.4",ease:yr.easeInOut},"section-6-=0.5"),e.to(this.a11.a2[3].a0.position,{y:"-=0.3",ease:yr.easeInOut},"section-6-=0.5"),e.to(this.a11.a2[2].a0.position,{y:"-=0.23",ease:yr.easeInOut},"section-6-=0.5"),e.to(this.a11.a2[1].a0.position,{y:"-=0.14",ease:yr.easeInOut},"section-6-=0.5"),e.to(this.a11.a2[0].a0.position,{y:"+=0.25",ease:yr.easeInOut},"section-6-=0.5")}),e}b1(e){var{clientX:t,clientY:e}=e;this.a25.set(t/this.a23.x*2-1,2*-(e/this.a23.y)+1)}b2(){var{offsetWidth:e,offsetHeight:t}=this.a0;this.a22=document.documentElement.scrollHeight||document.body.scrollHeight,this.a23.set(e,t),this.a1.setSize(e,t),this.a3.aspect=e/t,this.a3.updateProjectionMatrix(),this.a5.uniforms.resolution.value.set(1/e,1/t),this.a6.setSize(e,t),this.a7.setSize(e,t)}b3(){window.requestAnimationFrame(this.b3),this.a24.lerp(this.a25,.01);var e=(document.documentElement.scrollTop||document.body.scrollTop)/(this.a22-this.a23.height);this.a21=e,this.a20+=.05*(this.a21-this.a20),this.a26.progress(this.a20),e=1e3*this.a19.getElapsedTime(),6e5<e&&(this.a19.stop(),this.a19.start()),this.a4.uniforms.time.value=.01*e,this.a11.b1(e),this.a3.position.x=.2*-this.a24.x,this.a3.position.y=.2*-this.a24.y,this.a3.lookAt(this.a3.userData.lookAt),this.b5()}b4(e){this.a2.traverse(t=>{t instanceof Qe&&!this.a8.test(t.layers)&&(this.a9.test(t.layers)?t.visible=!e:e?(t.userData.material=t.material,t.material=this.a10):t.material=t.userData.material)})}b5(){this.b4(!0),this.a6.render(),this.b4(!1),this.a7.render()}}return window.BustScene=Id,window.onBustSceneLoaded&&window.onBustSceneLoaded(),Lt.BustScene=Id,Object.defineProperty(Lt,"__esModule",{value:!0}),Lt[Symbol.toStringTag]="Module",Lt}({});})();
