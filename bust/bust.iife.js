(()=>{var Ab=Object.defineProperty;var bd=Object.getOwnPropertySymbols;var Eb=Object.prototype.hasOwnProperty,Lb=Object.prototype.propertyIsEnumerable;var cc=(Lt,dt,St)=>dt in Lt?Ab(Lt,dt,{enumerable:!0,configurable:!0,writable:!0,value:St}):Lt[dt]=St,Md=(Lt,dt)=>{for(var St in dt||(dt={}))Eb.call(dt,St)&&cc(Lt,St,dt[St]);if(bd)for(var St of bd(dt))Lb.call(dt,St)&&cc(Lt,St,dt[St]);return Lt};var Re=(Lt,dt,St)=>(cc(Lt,typeof dt!="symbol"?dt+"":dt,St),St);var lM=function(Lt){"use strict";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dt="133",St=0,uc=1,Td=2,hc=1,wd=2,Wr=3,Ui=0,nt=1,di=2,fc=1,Dn=0,Xr=1,$a=2,dc=3,pc=4,Sd=5,Oi=100,Ad=101,Ed=102,mc=103,gc=104,Ld=200,Pd=201,Fd=202,Rd=203,_c=204,xc=205,Cd=206,Id=207,Nd=208,Dd=209,Ud=210,Od=0,Bd=1,zd=2,Ka=3,kd=4,Gd=5,Hd=6,Vd=7,Os=0,Wd=1,Xd=2,pi=0,Yd=1,Qd=2,vc=3,yc=4,qd=5,bc=300,Bs=301,zs=302,eo=303,to=304,ks=306,no=307,Bi=1e3,Pt=1001,Gs=1002,st=1003,io=1004,ro=1005,lt=1006,Mc=1007,zi=1008,Un=1009,jd=1010,Zd=1011,Hs=1012,Jd=1013,Vs=1014,vn=1015,ki=1016,$d=1017,Kd=1018,ep=1019,Yr=1020,tp=1021,mi=1022,ct=1023,np=1024,ip=1025,rp=ct,Gi=1026,Qr=1027,sp=1028,ap=1029,op=1030,lp=1031,cp=1032,up=1033,Tc=33776,wc=33777,Sc=33778,Ac=33779,Ec=35840,Lc=35841,Pc=35842,Fc=35843,hp=36196,Rc=37492,Cc=37496,fp=37808,dp=37809,pp=37810,mp=37811,gp=37812,_p=37813,xp=37814,vp=37815,yp=37816,bp=37817,Mp=37818,Tp=37819,wp=37820,Sp=37821,Ap=36492,Ep=37840,Lp=37841,Pp=37842,Fp=37843,Rp=37844,Cp=37845,Ip=37846,Np=37847,Dp=37848,Up=37849,Op=37850,Bp=37851,zp=37852,kp=37853,Gp=2200,Hp=2201,Vp=2202,qr=2300,Hi=2301,so=2302,Vi=2400,Wi=2401,Ws=2402,ao=2500,Ic=2501,Wp=0,Xp=1,Nc=2,xt=3e3,Ut=3001,oo=3007,lo=3002,Yp=3003,Dc=3004,Uc=3005,Oc=3006,Qp=3200,qp=3201,gi=0,jp=1,co=7680,Zp=519,jr=35044,Xs=35048,Bc="300 es";class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}let Ys=1234567;const Zr=Math.PI/180,Jr=180/Math.PI,pt=[];for(let a=0;a<256;a++)pt[a]=(a<16?"0":"")+a.toString(16);const Jp=typeof crypto!="undefined"&&"randomUUID"in crypto;function Xt(){if(Jp)return crypto.randomUUID().toUpperCase();const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[a&255]+pt[a>>8&255]+pt[a>>16&255]+pt[a>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toUpperCase()}function Ft(a,e,t){return Math.max(e,Math.min(t,a))}function uo(a,e){return(a%e+e)%e}function $p(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Kp(a,e,t){return a!==e?(t-a)/(e-a):0}function $r(a,e,t){return(1-t)*a+t*e}function em(a,e,t,n){return $r(a,e,1-Math.exp(-t*n))}function tm(a,e=1){return e-Math.abs(uo(a,e*2)-e)}function nm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function im(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function rm(a,e){return a+Math.floor(Math.random()*(e-a+1))}function sm(a,e){return a+Math.random()*(e-a)}function am(a){return a*(.5-Math.random())}function om(a){return a!==void 0&&(Ys=a%2147483647),Ys=Ys*16807%2147483647,(Ys-1)/2147483646}function lm(a){return a*Zr}function cm(a){return a*Jr}function ho(a){return(a&a-1)==0&&a!==0}function zc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function kc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function um(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),m=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*m,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*m,o*c);break;case"ZYZ":a.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var hm=Object.freeze({__proto__:null,DEG2RAD:Zr,RAD2DEG:Jr,generateUUID:Xt,clamp:Ft,euclideanModulo:uo,mapLinear:$p,inverseLerp:Kp,lerp:$r,damp:em,pingpong:tm,smoothstep:nm,smootherstep:im,randInt:rm,randFloat:sm,randFloatSpread:am,seededRandom:om,degToRad:lm,radToDeg:cm,isPowerOfTwo:ho,ceilPowerOfTwo:zc,floorPowerOfTwo:kc,setQuaternionFromProperEuler:um});class Y{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Y.prototype.isVector2=!0;class mt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=i[0],x=i[3],p=i[6],_=i[1],b=i[4],y=i[7],M=i[2],S=i[5],v=i[8];return r[0]=s*g+o*_+l*M,r[3]=s*x+o*b+l*S,r[6]=s*p+o*y+l*v,r[1]=c*g+u*_+h*M,r[4]=c*x+u*b+h*S,r[7]=c*p+u*y+h*v,r[2]=f*g+d*_+m*M,r[5]=f*x+d*b+m*S,r[8]=f*p+d*y+m*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}mt.prototype.isMatrix3=!0;function Gc(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,n=a.length;t<n;++t)a[t]>e&&(e=a[t]);return e}function Qs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let Xi;class Yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Qs("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let fm=0;class at extends On{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=Pt,i=Pt,r=lt,s=zi,o=ct,l=Un,c=1,u=xt){super();Object.defineProperty(this,"id",{value:fm++}),this.uuid=Xt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Xt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(fo(i[s].image)):r.push(fo(i[s]))}else r=fo(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}at.DEFAULT_IMAGE=void 0,at.DEFAULT_MAPPING=bc,at.prototype.isTexture=!0;function fo(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?Yi.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ge{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const s=.01,o=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<s&&Math.abs(h-g)<s&&Math.abs(m-x)<s){if(Math.abs(u+f)<o&&Math.abs(h+g)<o&&Math.abs(m+x)<o&&Math.abs(c+d+p-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,M=(p+1)/2,S=(u+f)/4,v=(h+g)/4,P=(m+x)/4;return b>y&&b>M?b<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=S/n,r=v/n):y>M?y<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=P/i):M<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=v/r,i=P/r),this.set(n,i,r,t),this}let _=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(x-m)/_,this.y=(h-g)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ge.prototype.isVector4=!0;class Rt extends On{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t),this.texture=new at(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Md({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.prototype.isWebGLRenderTarget=!0;class dm extends Rt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}dm.prototype.isWebGLMultipleRenderTargets=!0;class Hc extends Rt{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Hc.prototype.isWebGLMultisampleRenderTarget=!0;class At{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],m=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let x=1-o;const p=l*f+c*d+u*m+h*g,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const M=Math.sqrt(b),S=Math.atan2(M,p*_);x=Math.sin(x*S)/M,o=Math.sin(o*S)/M}const y=o*_;if(l=l*x+f*y,c=c*x+d*y,u=u*x+m*y,h=h*x+g*y,x===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],m=r[s+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}At.prototype.isQuaternion=!0;class E{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}E.prototype.isVector3=!0;const po=new E,Vc=new At;class Yt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox),mo.applyMatrix4(e.matrixWorld),this.union(mo));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kr),Kr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),qs.subVectors(this.max,es),Qi.subVectors(e.a,es),qi.subVectors(e.b,es),ji.subVectors(e.c,es),Bn.subVectors(qi,Qi),zn.subVectors(ji,qi),_i.subVectors(Qi,ji);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-_i.z,_i.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,_i.z,0,-_i.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-_i.y,_i.x,0];return!go(t,Qi,qi,ji,qs)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Qi,qi,ji,qs))?!1:(js.crossVectors(Bn,zn),t=[js.x,js.y,js.z],go(t,Qi,qi,ji,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Yt.prototype.isBox3=!0;const yn=[new E,new E,new E,new E,new E,new E,new E,new E],Kr=new E,mo=new Yt,Qi=new E,qi=new E,ji=new E,Bn=new E,zn=new E,_i=new E,es=new E,qs=new E,js=new E,xi=new E;function go(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){xi.fromArray(a,r);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const pm=new Yt,Wc=new E,_o=new E,xo=new E;class vi{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(xo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return _o.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wc.copy(e.center).add(_o)),this.expandByPoint(Wc.copy(e.center).sub(_o)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new E,vo=new E,Zs=new E,kn=new E,yo=new E,Js=new E,bo=new E;class Zi{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(vo);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Zs),o=kn.dot(this.direction),l=-kn.dot(Zs),c=kn.lengthSq(),u=Math.abs(1-s*s);let h,f,d,m;if(u>0)if(h=s*l-o,f=s*o-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Zs).multiplyScalar(f).add(vo),d}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,r){yo.subVectors(t,e),Js.subVectors(n,e),bo.crossVectors(yo,Js);let s=this.direction.dot(bo),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(Js.crossVectors(kn,Js));if(l<0)return null;const c=o*this.direction.dot(yo.cross(kn));if(c<0||l+c>s)return null;const u=-o*kn.dot(bo);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,o,l,c,u,h,f,d,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),s=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,m=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=m+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f+g*o,t[4]=m*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-m,t[6]=g+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f-g*o,t[4]=-s*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=s*u,t[9]=g-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,m=o*u,g=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,m=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=s*l,d=s*c,m=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=s*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Gn.crossVectors(n,Ot),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Gn.crossVectors(n,Ot)),Gn.normalize(),$s.crossVectors(Ot,Gn),i[0]=Gn.x,i[4]=$s.x,i[8]=Ot.x,i[1]=Gn.y,i[5]=$s.y,i[9]=Ot.y,i[2]=Gn.z,i[6]=$s.z,i[10]=Ot.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],x=n[10],p=n[14],_=n[3],b=n[7],y=n[11],M=n[15],S=i[0],v=i[4],P=i[8],R=i[12],I=i[1],L=i[5],q=i[9],C=i[13],N=i[2],U=i[6],D=i[10],k=i[14],Z=i[3],ae=i[7],ue=i[11],te=i[15];return r[0]=s*S+o*I+l*N+c*Z,r[4]=s*v+o*L+l*U+c*ae,r[8]=s*P+o*q+l*D+c*ue,r[12]=s*R+o*C+l*k+c*te,r[1]=u*S+h*I+f*N+d*Z,r[5]=u*v+h*L+f*U+d*ae,r[9]=u*P+h*q+f*D+d*ue,r[13]=u*R+h*C+f*k+d*te,r[2]=m*S+g*I+x*N+p*Z,r[6]=m*v+g*L+x*U+p*ae,r[10]=m*P+g*q+x*D+p*ue,r[14]=m*R+g*C+x*k+p*te,r[3]=_*S+b*I+y*N+M*Z,r[7]=_*v+b*L+y*U+M*ae,r[11]=_*P+b*q+y*D+M*ue,r[15]=_*R+b*C+y*k+M*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+x*(+t*c*h-t*o*d-r*s*h+n*s*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],x=e[14],p=e[15],_=h*x*c-g*f*c+g*l*d-o*x*d-h*l*p+o*f*p,b=m*f*c-u*x*c-m*l*d+s*x*d+u*l*p-s*f*p,y=u*g*c-m*h*c+m*o*d-s*g*d-u*o*p+s*h*p,M=m*h*l-u*g*l-m*o*f+s*g*f+u*o*x-s*h*x,S=t*_+n*b+i*y+r*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/S;return e[0]=_*v,e[1]=(g*f*r-h*x*r-g*i*d+n*x*d+h*i*p-n*f*p)*v,e[2]=(o*x*r-g*l*r+g*i*c-n*x*c-o*i*p+n*l*p)*v,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*v,e[4]=b*v,e[5]=(u*x*r-m*f*r+m*i*d-t*x*d-u*i*p+t*f*p)*v,e[6]=(m*l*r-s*x*r-m*i*c+t*x*c+s*i*p-t*l*p)*v,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*v,e[8]=y*v,e[9]=(m*h*r-u*g*r-m*n*d+t*g*d+u*n*p-t*h*p)*v,e[10]=(s*g*r-m*o*r+m*n*c-t*g*c-s*n*p+t*o*p)*v,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*d-t*o*d)*v,e[12]=M*v,e[13]=(u*g*i-m*h*i+m*n*f-t*g*f-u*n*x+t*h*x)*v,e[14]=(m*o*i-s*g*i-m*n*l+t*g*l+s*n*x-t*o*x)*v,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*v,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,m=r*h,g=s*u,x=s*h,p=o*h,_=l*c,b=l*u,y=l*h,M=n.x,S=n.y,v=n.z;return i[0]=(1-(g+p))*M,i[1]=(d+y)*M,i[2]=(m-b)*M,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(x+_)*S,i[7]=0,i[8]=(m+b)*v,i[9]=(x-_)*v,i[10]=(1-(f+g))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const s=Ji.set(i[4],i[5],i[6]).length(),o=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,u=1/s,h=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}de.prototype.isMatrix4=!0;const Ji=new E,en=new de,mm=new E(0,0,0),gm=new E(1,1,1),Gn=new E,$s=new E,Ot=new E,Xc=new de,Yc=new At;class $i{constructor(e=0,t=0,n=0,i=$i.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new E(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}$i.prototype.isEuler=!0,$i.DefaultOrder="XYZ",$i.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mo{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let _m=0;const Qc=new E,Ki=new At,Mn=new de,Ks=new E,ts=new E,xm=new E,vm=new At,qc=new E(1,0,0),jc=new E(0,1,0),Zc=new E(0,0,1),ym={type:"added"},Jc={type:"removed"};class Ce extends On{constructor(){super();Object.defineProperty(this,"id",{value:_m++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DefaultUp.clone();const e=new E,t=new $i,n=new At,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new mt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ts,Ks,this.up):Mn.lookAt(Ks,ts,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ce.DefaultUp=new E(0,1,0),Ce.DefaultMatrixAutoUpdate=!0,Ce.prototype.isObject3D=!0;const tn=new E,Tn=new E,To=new E,wn=new E,er=new E,tr=new E,$c=new E,wo=new E,So=new E,Ao=new E;class it{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),Tn.subVectors(n,t),To.subVectors(e,t);const s=tn.dot(tn),o=tn.dot(Tn),l=tn.dot(To),c=Tn.dot(Tn),u=Tn.dot(To),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,m=(s*u-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,wn),l.set(0,0),l.addScaledVector(r,wn.x),l.addScaledVector(s,wn.y),l.addScaledVector(o,wn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Tn.subVectors(e,t),tn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),tn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return it.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return it.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return it.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return it.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return it.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;er.subVectors(i,n),tr.subVectors(r,n),wo.subVectors(e,n);const l=er.dot(wo),c=tr.dot(wo);if(l<=0&&c<=0)return t.copy(n);So.subVectors(e,i);const u=er.dot(So),h=tr.dot(So);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(er,s);Ao.subVectors(e,r);const d=er.dot(Ao),m=tr.dot(Ao);if(m>=0&&d<=m)return t.copy(r);const g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(tr,o);const x=u*m-d*h;if(x<=0&&h-u>=0&&d-m>=0)return $c.subVectors(r,i),o=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector($c,o);const p=1/(x+g+f);return s=g*p,o=f*p,t.copy(n).addScaledVector(er,s).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bm=0;class ot extends On{constructor(){super();Object.defineProperty(this,"id",{value:bm++}),this.uuid=Xt(),this.name="",this.type="Material",this.fog=!0,this.blending=Xr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.format=ct,this.transparent=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===fc;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ct&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ot.prototype.isMaterial=!0;const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Eo(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Lo(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}class ie{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=uo(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Eo(r,i,e+1/3),this.g=Eo(r,i,e),this.b=Eo(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Kc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let o,l;const c=(s+r)/2;if(s===r)o=0,l=0;else{const u=r-s;switch(l=c<=.5?u/(r+s):u/(2-r-s),r){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(ea);const n=$r(nn.h,ea.h,t),i=$r(nn.s,ea.s,t),r=$r(nn.l,ea.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ie.NAMES=Kc,ie.prototype.isColor=!0,ie.prototype.r=1,ie.prototype.g=1,ie.prototype.b=1;class rn extends ot{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}rn.prototype.isMeshBasicMaterial=!0;const Xe=new E,ta=new Y;class Ke{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=jr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ie),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new Y),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new E),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ge),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ke.prototype.isBufferAttribute=!0;class eu extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tu extends Ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mm extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Mm.prototype.isFloat16BufferAttribute=!0;class Ye extends Ke{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tm=0;const Qt=new de,Fo=new Ce,nr=new E,Bt=new Yt,ns=new Yt,ut=new E;class ke extends On{constructor(){super();Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)>65535?tu:eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Bt.min,ns.min),Bt.expandByPoint(ut),ut.addVectors(Bt.max,ns.max),Bt.expandByPoint(ut)):(Bt.expandByPoint(ns.min),Bt.expandByPoint(ns.max))}Bt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),ut.add(nr)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ke(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new E,u[I]=new E;const h=new E,f=new E,d=new E,m=new Y,g=new Y,x=new Y,p=new E,_=new E;function b(I,L,q){h.fromArray(i,I*3),f.fromArray(i,L*3),d.fromArray(i,q*3),m.fromArray(s,I*2),g.fromArray(s,L*2),x.fromArray(s,q*2),f.sub(h),d.sub(h),g.sub(m),x.sub(m);const C=1/(g.x*x.y-x.x*g.y);!isFinite(C)||(p.copy(f).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(C),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(C),c[I].add(p),c[L].add(p),c[q].add(p),u[I].add(_),u[L].add(_),u[q].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,L=y.length;I<L;++I){const q=y[I],C=q.start,N=q.count;for(let U=C,D=C+N;U<D;U+=3)b(n[U+0],n[U+1],n[U+2])}const M=new E,S=new E,v=new E,P=new E;function R(I){v.fromArray(r,I*3),P.copy(v);const L=c[I];M.copy(L),M.sub(v.multiplyScalar(v.dot(L))).normalize(),S.crossVectors(P,L);const C=S.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=C}for(let I=0,L=y.length;I<L;++I){const q=y[I],C=q.start,N=q.count;for(let U=C,D=C+N;U<D;U+=3)R(n[U+0]),R(n[U+1]),R(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new E,r=new E,s=new E,o=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),g=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,s.length-c);for(let h=0,f=c;h<u;h++,f++)s[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Ke(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ke.prototype.isBufferGeometry=!0;const nu=new de,ir=new Zi,Ro=new vi,Hn=new E,Vn=new E,Wn=new E,Co=new E,Io=new E,No=new E,na=new E,ia=new E,ra=new E,sa=new Y,aa=new Y,oa=new Y,Do=new E,la=new E;class Oe extends Ce{constructor(e=new ke,t=new rn){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),e.ray.intersectsSphere(Ro)===!1)||(nu.copy(r).invert(),ir.copy(e.ray).applyMatrix4(nu),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,x=d.length;g<x;g++){const p=d[g],_=i[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,S=y;M<S;M+=3){const v=o.getX(M),P=o.getX(M+1),R=o.getX(M+2);s=ca(this,_,e,ir,l,c,u,h,f,v,P,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,_=x;p<_;p+=3){const b=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);s=ca(this,i,e,ir,l,c,u,h,f,b,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,x=d.length;g<x;g++){const p=d[g],_=i[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,S=y;M<S;M+=3){const v=M,P=M+1,R=M+2;s=ca(this,_,e,ir,l,c,u,h,f,v,P,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,_=x;p<_;p+=3){const b=p,y=p+1,M=p+2;s=ca(this,i,e,ir,l,c,u,h,f,b,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Oe.prototype.isMesh=!0;function wm(a,e,t,n,i,r,s,o){let l;if(e.side===nt?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side!==di,o),l===null)return null;la.copy(o),la.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:a}}function ca(a,e,t,n,i,r,s,o,l,c,u,h){Hn.fromBufferAttribute(i,c),Vn.fromBufferAttribute(i,u),Wn.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(r&&f){na.set(0,0,0),ia.set(0,0,0),ra.set(0,0,0);for(let m=0,g=r.length;m<g;m++){const x=f[m],p=r[m];x!==0&&(Co.fromBufferAttribute(p,c),Io.fromBufferAttribute(p,u),No.fromBufferAttribute(p,h),s?(na.addScaledVector(Co,x),ia.addScaledVector(Io,x),ra.addScaledVector(No,x)):(na.addScaledVector(Co.sub(Hn),x),ia.addScaledVector(Io.sub(Vn),x),ra.addScaledVector(No.sub(Wn),x)))}Hn.add(na),Vn.add(ia),Wn.add(ra)}a.isSkinnedMesh&&(a.boneTransform(c,Hn),a.boneTransform(u,Vn),a.boneTransform(h,Wn));const d=wm(a,e,t,n,Hn,Vn,Wn,Do);if(d){o&&(sa.fromBufferAttribute(o,c),aa.fromBufferAttribute(o,u),oa.fromBufferAttribute(o,h),d.uv=it.getUV(Do,Hn,Vn,Wn,sa,aa,oa,new Y)),l&&(sa.fromBufferAttribute(l,c),aa.fromBufferAttribute(l,u),oa.fromBufferAttribute(l,h),d.uv2=it.getUV(Do,Hn,Vn,Wn,sa,aa,oa,new Y));const m={a:c,b:u,c:h,normal:new E,materialIndex:0};it.getNormal(Hn,Vn,Wn,m.normal),d.face=m}return d}class rr extends ke{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,i,s,2),m("x","z","y",1,-1,e,n,-t,i,s,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function m(g,x,p,_,b,y,M,S,v,P,R){const I=y/v,L=M/P,q=y/2,C=M/2,N=S/2,U=v+1,D=P+1;let k=0,Z=0;const ae=new E;for(let ue=0;ue<D;ue++){const te=ue*L-C;for(let be=0;be<U;be++){const W=be*I-q;ae[g]=W*_,ae[x]=te*b,ae[p]=N,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[x]=0,ae[p]=S>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(be/v),h.push(1-ue/P),k+=1}}for(let ue=0;ue<P;ue++)for(let te=0;te<v;te++){const be=f+te+U*ue,W=f+te+U*(ue+1),J=f+(te+1)+U*(ue+1),pe=f+(te+1)+U*ue;l.push(be,W,pe),l.push(W,J,pe),Z+=6}o.addGroup(d,Z,R),d+=Z,f+=k}}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vt(a){const e={};for(let t=0;t<a.length;t++){const n=sr(a[t]);for(const i in n)e[i]=n[i]}return e}const ua={clone:sr,merge:vt};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends ot{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Sm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}zt.prototype.isShaderMaterial=!0;class Uo extends Ce{constructor(){super();this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Uo.prototype.isCamera=!0;class yt extends Uo{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}yt.prototype.isPerspectiveCamera=!0;const ar=90,or=1;class Oo extends Ce{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new yt(ar,or,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new E(1,0,0)),this.add(i);const r=new yt(ar,or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new E(-1,0,0)),this.add(r);const s=new yt(ar,or,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new E(0,1,0)),this.add(s);const o=new yt(ar,or,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new E(0,-1,0)),this.add(o);const l=new yt(ar,or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,1)),this.add(l);const c=new yt(ar,or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class ha extends at{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs;super(e,t,n,i,r,s,o,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ha.prototype.isCubeTexture=!0;class iu extends Rt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new ha(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rr(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nt,blending:Dn});r.uniforms.tEquirect.value=t;const s=new Oe(i,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=lt),new Oo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}iu.prototype.isWebGLCubeRenderTarget=!0;const Bo=new E,Em=new E,Lm=new mt;class Sn{constructor(e=new E(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bo.subVectors(n,t).cross(Em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Sn.prototype.isPlane=!0;const lr=new vi,fa=new E;class da{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,s=new Sn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],m=n[10],g=n[11],x=n[12],p=n[13],_=n[14],b=n[15];return t[0].setComponents(o-i,h-l,g-f,b-x).normalize(),t[1].setComponents(o+i,h+l,g+f,b+x).normalize(),t[2].setComponents(o+r,h+c,g+d,b+p).normalize(),t[3].setComponents(o-r,h-c,g-d,b-p).normalize(),t[4].setComponents(o-s,h-u,g-m,b-_).normalize(),t[5].setComponents(o+s,h+u,g+m,b+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Pm(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(m=5121),{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class pa extends ke{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],g=[],x=[];for(let p=0;p<u;p++){const _=p*f-s;for(let b=0;b<c;b++){const y=b*h-r;m.push(y,-_,0),g.push(0,0,1),x.push(b/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const b=_+c*p,y=_+c*(p+1),M=_+1+c*(p+1),S=_+1+c*p;d.push(b,y,S),d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(x,2))}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um="vec3 transformed = vec3( position );",Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
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
}`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`
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
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`vec3 diffuse = vec3( 1.0 );
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
#endif`,gg=`uniform bool receiveShadow;
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
#endif`,_g=`#if defined( USE_ENVMAP )
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Mg=`PhysicalMaterial material;
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
#endif`,Tg=`struct PhysicalMaterial {
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
}`,wg=`
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rg=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_MORPHNORMALS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Gg=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#ifdef USE_SHADOWMAP
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
#endif`,r_=`#ifdef USE_SHADOWMAP
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
#endif`,s_=`#ifdef USE_SHADOWMAP
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
#endif`,a_=`float getShadowMask() {
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
}`,o_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
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
#endif`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,x_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,v_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,y_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,b_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,M_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ee={alphamap_fragment:Fm,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Im,aomap_fragment:Nm,aomap_pars_fragment:Dm,begin_vertex:Um,beginnormal_vertex:Om,bsdfs:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:Ym,color_vertex:Qm,common:qm,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:$m,emissivemap_fragment:Km,emissivemap_pars_fragment:eg,encodings_fragment:tg,encodings_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:rg,envmap_pars_fragment:sg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:ug,fog_pars_fragment:hg,gradientmap_pars_fragment:fg,lightmap_fragment:dg,lightmap_pars_fragment:pg,lights_lambert_vertex:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:vg,lights_phong_fragment:yg,lights_phong_pars_fragment:bg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Tg,lights_fragment_begin:wg,lights_fragment_maps:Sg,lights_fragment_end:Ag,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Fg,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Ig,map_particle_pars_fragment:Ng,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ug,morphnormal_vertex:Og,morphtarget_pars_vertex:Bg,morphtarget_vertex:zg,normal_fragment_begin:kg,normal_fragment_maps:Gg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:qg,output_fragment:jg,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:$g,dithering_fragment:Kg,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:r_,shadowmap_vertex:s_,shadowmask_pars_fragment:a_,skinbase_vertex:o_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:u_,specularmap_fragment:h_,specularmap_pars_fragment:f_,tonemapping_fragment:d_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:__,uv_pars_vertex:x_,uv_vertex:v_,uv2_pars_fragment:y_,uv2_pars_vertex:b_,uv2_vertex:M_,worldpos_vertex:T_,background_vert:`varying vec2 vUv;
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
}`},ne={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}}},ln={basic:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:vt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:vt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:vt([ne.points,ne.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:vt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:vt([ne.common,ne.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:vt([ne.sprite,ne.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:vt([ne.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:vt([ne.common,ne.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:vt([ne.lights,ne.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ln.physical={uniforms:vt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new ie(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new ie(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new ie(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function w_(a,e,t,n,i){const r=new ie(0);let s=0,o,l,c=null,u=0,h=null;function f(m,g){let x=!1,p=g.isScene===!0?g.background:null;p&&p.isTexture&&(p=e.get(p));const _=a.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?d(r,s):p&&p.isColor&&(d(p,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ks)?(l===void 0&&(l=new Oe(new rr(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:sr(ln.cube.uniforms),vertexShader:ln.cube.vertexShader,fragmentShader:ln.cube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==a.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=a.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Oe(new pa(2,2),new zt({name:"BackgroundMaterial",uniforms:sr(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==a.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,h=a.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function d(m,g){t.buffers.color.setClear(m.r,m.g,m.b,g,i)}return{getClearColor:function(){return r},setClearColor:function(m,g=1){r.set(m),s=g,d(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(m){s=m,d(r,s)},render:f}}function S_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=g(null);let c=l;function u(C,N,U,D,k){let Z=!1;if(s){const ae=m(D,U,N);c!==ae&&(c=ae,f(c.object)),Z=x(D,k),Z&&p(D,k)}else{const ae=N.wireframe===!0;(c.geometry!==D.id||c.program!==U.id||c.wireframe!==ae)&&(c.geometry=D.id,c.program=U.id,c.wireframe=ae,Z=!0)}C.isInstancedMesh===!0&&(Z=!0),k!==null&&t.update(k,34963),Z&&(v(C,N,U,D),k!==null&&a.bindBuffer(34963,t.get(k).buffer))}function h(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function f(C){return n.isWebGL2?a.bindVertexArray(C):r.bindVertexArrayOES(C)}function d(C){return n.isWebGL2?a.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function m(C,N,U){const D=U.wireframe===!0;let k=o[C.id];k===void 0&&(k={},o[C.id]=k);let Z=k[N.id];Z===void 0&&(Z={},k[N.id]=Z);let ae=Z[D];return ae===void 0&&(ae=g(h()),Z[D]=ae),ae}function g(C){const N=[],U=[],D=[];for(let k=0;k<i;k++)N[k]=0,U[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:C,attributes:{},index:null}}function x(C,N){const U=c.attributes,D=C.attributes;let k=0;for(const Z in D){const ae=U[Z],ue=D[Z];if(ae===void 0||ae.attribute!==ue||ae.data!==ue.data)return!0;k++}return c.attributesNum!==k||c.index!==N}function p(C,N){const U={},D=C.attributes;let k=0;for(const Z in D){const ae=D[Z],ue={};ue.attribute=ae,ae.data&&(ue.data=ae.data),U[Z]=ue,k++}c.attributes=U,c.attributesNum=k,c.index=N}function _(){const C=c.newAttributes;for(let N=0,U=C.length;N<U;N++)C[N]=0}function b(C){y(C,0)}function y(C,N){const U=c.newAttributes,D=c.enabledAttributes,k=c.attributeDivisors;U[C]=1,D[C]===0&&(a.enableVertexAttribArray(C),D[C]=1),k[C]!==N&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),k[C]=N)}function M(){const C=c.newAttributes,N=c.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==C[U]&&(a.disableVertexAttribArray(U),N[U]=0)}function S(C,N,U,D,k,Z){n.isWebGL2===!0&&(U===5124||U===5125)?a.vertexAttribIPointer(C,N,U,k,Z):a.vertexAttribPointer(C,N,U,D,k,Z)}function v(C,N,U,D){if(n.isWebGL2===!1&&(C.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const k=D.attributes,Z=U.getAttributes(),ae=N.defaultAttributeValues;for(const ue in Z){const te=Z[ue];if(te.location>=0){let be=k[ue];if(be===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const W=be.normalized,J=be.itemSize,pe=t.get(be);if(pe===void 0)continue;const G=pe.buffer,xe=pe.type,Te=pe.bytesPerElement;if(be.isInterleavedBufferAttribute){const oe=be.data,he=oe.stride,Ae=be.offset;if(oe&&oe.isInstancedInterleavedBuffer){for(let V=0;V<te.locationSize;V++)y(te.location+V,oe.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let V=0;V<te.locationSize;V++)b(te.location+V);a.bindBuffer(34962,G);for(let V=0;V<te.locationSize;V++)S(te.location+V,J/te.locationSize,xe,W,he*Te,(Ae+J/te.locationSize*V)*Te)}else{if(be.isInstancedBufferAttribute){for(let oe=0;oe<te.locationSize;oe++)y(te.location+oe,be.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let oe=0;oe<te.locationSize;oe++)b(te.location+oe);a.bindBuffer(34962,G);for(let oe=0;oe<te.locationSize;oe++)S(te.location+oe,J/te.locationSize,xe,W,J*Te,J/te.locationSize*oe*Te)}}else if(ae!==void 0){const W=ae[ue];if(W!==void 0)switch(W.length){case 2:a.vertexAttrib2fv(te.location,W);break;case 3:a.vertexAttrib3fv(te.location,W);break;case 4:a.vertexAttrib4fv(te.location,W);break;default:a.vertexAttrib1fv(te.location,W)}}}}M()}function P(){L();for(const C in o){const N=o[C];for(const U in N){const D=N[U];for(const k in D)d(D[k].object),delete D[k];delete N[U]}delete o[C]}}function R(C){if(o[C.id]===void 0)return;const N=o[C.id];for(const U in N){const D=N[U];for(const k in D)d(D[k].object),delete D[k];delete N[U]}delete o[C.id]}function I(C){for(const N in o){const U=o[N];if(U[C.id]===void 0)continue;const D=U[C.id];for(const k in D)d(D[k].object),delete D[k];delete U[C.id]}}function L(){q(),c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:b,disableUnusedAttributes:M}}function A_(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function E_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),m=a.getParameter(34076),g=a.getParameter(34921),x=a.getParameter(36347),p=a.getParameter(36348),_=a.getParameter(36349),b=f>0,y=s||e.has("OES_texture_float"),M=b&&y,S=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:S}}function L_(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Sn,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const m=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=a.get(h);if(!i||m===null||m.length===0||r&&!x)r?u(null):c();else{const _=r?0:n,b=_*4;let y=p.clippingState||null;l.value=y,y=u(m,f,b,d);for(let M=0;M!==b;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const g=h!==null?h.length:0;let x=null;if(g!==0){if(x=l.value,m!==!0||x===null){const p=d+g*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,y=d;b!==g;++b,y+=4)s.copy(h[b]).applyMatrix4(_,o),s.normal.toArray(x,y),x[y+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function P_(a){let e=new WeakMap;function t(s,o){return o===eo?s.mapping=Bs:o===to&&(s.mapping=zs),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===eo||o===to)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=a.getRenderTarget(),u=new iu(l.height/2);return u.fromEquirectangularTexture(a,s),e.set(s,u),a.setRenderTarget(c),s.addEventListener("dispose",i),t(u.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class cr extends Uo{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}cr.prototype.isOrthographicCamera=!0;class is extends zt{constructor(e){super(e);this.type="RawShaderMaterial"}}is.prototype.isRawShaderMaterial=!0;const ur=4,Xn=8,cn=Math.pow(2,Xn),su=[.125,.215,.35,.446,.526,.582],au=Xn-ur+1+su.length,hr=20,Yn={[xt]:0,[Ut]:1,[lo]:2,[Dc]:3,[Uc]:4,[Oc]:5,[oo]:6},zo=new cr,{_lodPlanes:rs,_sizeLods:ou,_sigmas:ma}=R_(),lu=new ie;let ko=null;const yi=(1+Math.sqrt(5))/2,fr=1/yi,cu=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,yi,fr),new E(0,yi,-fr),new E(fr,0,yi),new E(-fr,0,yi),new E(yi,fr,0),new E(-yi,fr,0)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=C_(hr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ko=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=du(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=fu(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<rs.length;e++)rs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ko),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e){ko=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:st,minFilter:st,generateMipmaps:!1,type:Un,format:rp,encoding:F_(e)?e.encoding:lo,depthBuffer:!1},n=hu(t);return n.depthBuffer=!e,this._pingPongRenderTarget=hu(t),n}_compileMaterial(e){const t=new Oe(rs[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){const r=90,s=1,o=new yt(r,s,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.outputEncoding,d=u.toneMapping;u.getClearColor(lu),u.toneMapping=pi,u.outputEncoding=xt,u.autoClear=!1;const m=new rn({name:"PMREM.Background",side:nt,depthWrite:!1,depthTest:!1}),g=new Oe(new rr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(lu),x=!0);for(let _=0;_<6;_++){const b=_%3;b==0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):b==1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_])),ga(i,b*cn,_>2?cn:0,cn,cn),u.setRenderTarget(i),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.outputEncoding=f,u.autoClear=h,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ct&&t.type===Un&&t.encoding===Ut?e.value=Yn[xt]:e.value=Yn[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=du()):this._equirectShader==null&&(this._equirectShader=fu());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new Oe(rs[0],i),s=i.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(s.inputEncoding,e),this._setEncoding(s.outputEncoding,t.texture),ga(t,0,0,3*cn,2*cn),n.setRenderTarget(t),n.render(r,zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<au;i++){const r=Math.sqrt(ma[i]*ma[i]-ma[i-1]*ma[i-1]),s=cu[(i-1)%cu.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(rs[i],c),f=c.uniforms,d=ou[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hr-1),g=r/m,x=isFinite(r)?1+Math.floor(u*g):hr;x>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hr}`);const p=[];let _=0;for(let S=0;S<hr;++S){const v=S/g,P=Math.exp(-v*v/2);p.push(P),S==0?_+=P:S<x&&(_+=2*P)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o),f.dTheta.value=m,f.mipInt.value=Xn-n,this._setEncoding(f.inputEncoding,e.texture),this._setEncoding(f.outputEncoding,e.texture);const b=ou[i],y=3*Math.max(0,cn-2*b),M=(i===0?0:2*cn)+2*b*(i>Xn-ur?i-Xn+ur:0);ga(t,y,M,3*b,2*b),l.setRenderTarget(t),l.render(h,zo)}}function F_(a){return a===void 0||a.type!==Un?!1:a.encoding===xt||a.encoding===Ut||a.encoding===oo}function R_(){const a=[],e=[],t=[];let n=Xn;for(let i=0;i<au;i++){const r=Math.pow(2,n);e.push(r);let s=1/r;i>Xn-ur?s=su[i-Xn+ur-1]:i==0&&(s=0),t.push(s);const o=1/(r-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=2,g=1,x=new Float32Array(d*f*h),p=new Float32Array(m*f*h),_=new Float32Array(g*f*h);for(let y=0;y<h;y++){const M=y%3*2/3-1,S=y>2?0:-1,v=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];x.set(v,d*f*y),p.set(u,m*f*y);const P=[y,y,y,y,y,y];_.set(P,g*f*y)}const b=new ke;b.setAttribute("position",new Ke(x,d)),b.setAttribute("uv",new Ke(p,m)),b.setAttribute("faceIndex",new Ke(_,g)),a.push(b),n>ur&&n--}return{_lodPlanes:a,_sizeLods:e,_sigmas:t}}function hu(a){const e=new Rt(3*cn,3*cn,a);return e.texture.mapping=ks,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ga(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function C_(a){const e=new Float32Array(a),t=new E(0,1,0);return new is({name:"SphericalGaussianBlur",defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Yn[xt]},outputEncoding:{value:Yn[xt]}},vertexShader:Go(),fragmentShader:`

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

			${Ho()}

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fu(){const a=new Y(1,1);return new is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:Yn[xt]},outputEncoding:{value:Yn[xt]}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ho()}

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function du(){return new is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Yn[xt]},outputEncoding:{value:Yn[xt]}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ho()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}function Ho(){return`

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
	`}function I_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===eo||l===to,u=l===Bs||l===zs;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const f=a.getRenderTarget();t===null&&(t=new uu(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),a.setRenderTarget(f),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function N_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function D_(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],34962);const d=h.morphAttributes;for(const m in d){const g=d[m];for(let x=0,p=g.length;x<p;x++)e.update(g[x],34962)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let g=0;if(d!==null){const _=d.array;g=d.version;for(let b=0,y=_.length;b<y;b+=3){const M=_[b+0],S=_[b+1],v=_[b+2];f.push(M,S,S,v,v,M)}}else{const _=m.array;g=m.version;for(let b=0,y=_.length/3-1;b<y;b+=3){const M=b+0,S=b+1,v=b+2;f.push(M,S,S,v,v,M)}}const x=new(Gc(f)>65535?tu:eu)(f,1);x.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,x)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function U_(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,m){if(m===0)return;let g,x;if(i)g=a,x="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,d,o,f*l,m),t.update(d,r,m)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function O_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Vo extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Vo.prototype.isDataTexture2DArray=!0;function B_(a,e){return a[0]-e[0]}function z_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function pu(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function k_(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new E,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position.length;let g=r.get(u);if(g===void 0||g.count!==m){g!==void 0&&g.texture.dispose();const _=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,y=u.morphAttributes.normal||[],M=u.attributes.position.count,S=_===!0?2:1;let v=M*S,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*P*4*m),I=new Vo(R,v,P,m);I.format=ct,I.type=vn;const L=S*4;for(let q=0;q<m;q++){const C=b[q],N=y[q],U=v*P*4*q;for(let D=0;D<C.count;D++){s.fromBufferAttribute(C,D),C.normalized===!0&&pu(s,C);const k=D*L;R[U+k+0]=s.x,R[U+k+1]=s.y,R[U+k+2]=s.z,R[U+k+3]=0,_===!0&&(s.fromBufferAttribute(N,D),N.normalized===!0&&pu(s,N),R[U+k+4]=s.x,R[U+k+5]=s.y,R[U+k+6]=s.z,R[U+k+7]=0)}}g={count:m,texture:I,size:new Y(v,P)},r.set(u,g)}let x=0;for(let _=0;_<d.length;_++)x+=d[_];const p=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",p),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<m;y++){const M=g[y];M[0]=y,M[1]=d[y]}g.sort(z_);for(let y=0;y<8;y++)y<m&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(B_);const x=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=o[y],S=M[0],v=M[1];S!==Number.MAX_SAFE_INTEGER&&v?(x&&u.getAttribute("morphTarget"+y)!==x[S]&&u.setAttribute("morphTarget"+y,x[S]),p&&u.getAttribute("morphNormal"+y)!==p[S]&&u.setAttribute("morphNormal"+y,p[S]),i[y]=v,_+=v):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function G_(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class mu extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}mu.prototype.isDataTexture3D=!0;const gu=new at,H_=new Vo,V_=new mu,_u=new ha,xu=[],vu=[],yu=new Float32Array(16),bu=new Float32Array(9),Mu=new Float32Array(4);function dr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=xu[i];if(r===void 0&&(r=new Float32Array(i),xu[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Et(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function bt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Tu(a,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function W_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function X_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;a.uniform2fv(this.addr,e),bt(t,e)}}function Y_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;a.uniform3fv(this.addr,e),bt(t,e)}}function Q_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;a.uniform4fv(this.addr,e),bt(t,e)}}function q_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Mu.set(n),a.uniformMatrix2fv(this.addr,!1,Mu),bt(t,n)}}function j_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;bu.set(n),a.uniformMatrix3fv(this.addr,!1,bu),bt(t,n)}}function Z_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;yu.set(n),a.uniformMatrix4fv(this.addr,!1,yu),bt(t,n)}}function J_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function $_(a,e){const t=this.cache;Et(t,e)||(a.uniform2iv(this.addr,e),bt(t,e))}function K_(a,e){const t=this.cache;Et(t,e)||(a.uniform3iv(this.addr,e),bt(t,e))}function ex(a,e){const t=this.cache;Et(t,e)||(a.uniform4iv(this.addr,e),bt(t,e))}function tx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function nx(a,e){const t=this.cache;Et(t,e)||(a.uniform2uiv(this.addr,e),bt(t,e))}function ix(a,e){const t=this.cache;Et(t,e)||(a.uniform3uiv(this.addr,e),bt(t,e))}function rx(a,e){const t=this.cache;Et(t,e)||(a.uniform4uiv(this.addr,e),bt(t,e))}function sx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||gu,i)}function ax(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||V_,i)}function ox(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||_u,i)}function lx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||H_,i)}function cx(a){switch(a){case 5126:return W_;case 35664:return X_;case 35665:return Y_;case 35666:return Q_;case 35674:return q_;case 35675:return j_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return $_;case 35668:case 35672:return K_;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function ux(a,e){a.uniform1fv(this.addr,e)}function hx(a,e){const t=dr(e,this.size,2);a.uniform2fv(this.addr,t)}function fx(a,e){const t=dr(e,this.size,3);a.uniform3fv(this.addr,t)}function dx(a,e){const t=dr(e,this.size,4);a.uniform4fv(this.addr,t)}function px(a,e){const t=dr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function mx(a,e){const t=dr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function gx(a,e){const t=dr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function _x(a,e){a.uniform1iv(this.addr,e)}function xx(a,e){a.uniform2iv(this.addr,e)}function vx(a,e){a.uniform3iv(this.addr,e)}function yx(a,e){a.uniform4iv(this.addr,e)}function bx(a,e){a.uniform1uiv(this.addr,e)}function Mx(a,e){a.uniform2uiv(this.addr,e)}function Tx(a,e){a.uniform3uiv(this.addr,e)}function wx(a,e){a.uniform4uiv(this.addr,e)}function Sx(a,e,t){const n=e.length,i=Tu(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||gu,i[r])}function Ax(a,e,t){const n=e.length,i=Tu(t,n);a.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||_u,i[r])}function Ex(a){switch(a){case 5126:return ux;case 35664:return hx;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return bx;case 36294:return Mx;case 36295:return Tx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35680:case 36300:case 36308:case 36293:return Ax}}function Lx(a,e,t){this.id=a,this.addr=t,this.cache=[],this.setValue=cx(e.type)}function wu(a,e,t){this.id=a,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Ex(e.type)}wu.prototype.updateCache=function(a){const e=this.cache;a instanceof Float32Array&&e.length!==a.length&&(this.cache=new Float32Array(a.length)),bt(e,a)};function Su(a){this.id=a,this.seq=[],this.map={}}Su.prototype.setValue=function(a,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.setValue(a,e[s.id],t)}};const Wo=/(\w+)(\])?(\[|\.)?/g;function Au(a,e){a.seq.push(e),a.map[e.id]=e}function Px(a,e,t){const n=a.name,i=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),s=Wo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Au(t,c===void 0?new Lx(o,a,e):new wu(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Su(o),Au(t,h)),t=h}}}function Qn(a,e){this.seq=[],this.map={};const t=a.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=a.getActiveUniform(e,n),r=a.getUniformLocation(e,i.name);Px(i,r,this)}}Qn.prototype.setValue=function(a,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(a,t,n)},Qn.prototype.setOptional=function(a,e,t){const n=e[t];n!==void 0&&this.setValue(a,t,n)},Qn.upload=function(a,e,t,n){for(let i=0,r=e.length;i!==r;++i){const s=e[i],o=t[s.id];o.needsUpdate!==!1&&s.setValue(a,o.value,n)}},Qn.seqWithValue=function(a,e){const t=[];for(let n=0,i=a.length;n!==i;++n){const r=a[n];r.id in e&&t.push(r)}return t};function Eu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Fx=0;function Rx(a){const e=a.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Lu(a){switch(a){case xt:return["Linear","( value )"];case Ut:return["sRGB","( value )"];case lo:return["RGBE","( value )"];case Dc:return["RGBM","( value, 7.0 )"];case Uc:return["RGBM","( value, 16.0 )"];case Oc:return["RGBD","( value, 256.0 )"];case oo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Yp:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Pu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Rx(a.getShaderSource(e))}function pr(a,e){const t=Lu(e);return"vec4 "+a+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Cx(a,e){const t=Lu(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ix(a,e){let t;switch(e){case Yd:t="Linear";break;case Qd:t="Reinhard";break;case vc:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(a){return[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Dx(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ss(a){return a!==""}function Fu(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(a){return a.replace(Ox,Bx)}function Bx(a,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xo(t)}const zx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(a){return a.replace(kx,Iu).replace(zx,Gx)}function Gx(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Iu(a,e,t,n)}function Iu(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Wr&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case ks:case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case zs:case no:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Os:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case Xd:e="ENVMAP_BLENDING_ADD";break}return e}function Yx(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Hx(t),c=Vx(t),u=Wx(t),h=Xx(t),f=a.gammaFactor>0?a.gammaFactor:1,d=t.isWebGL2?"":Nx(t),m=Dx(r),g=i.createProgram();let x,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[m].filter(ss).join(`
`),x.length>0&&(x+=`
`),p=[d,m].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(x=[Nu(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[d,Nu(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ee.tonemapping_pars_fragment:"",t.toneMapping!==pi?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===mi?"#define OPAQUE":"",Ee.encodings_pars_fragment,t.map?pr("mapTexelToLinear",t.mapEncoding):"",t.matcap?pr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?pr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?pr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?pr("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?pr("lightMapTexelToLinear",t.lightMapEncoding):"",Cx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),s=Xo(s),s=Fu(s,t),s=Ru(s,t),o=Xo(o),o=Fu(o,t),o=Ru(o,t),s=Cu(s),o=Cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Bc?"":"out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=_+x+s,y=_+p+o,M=Eu(i,35633,b),S=Eu(i,35632,y);if(i.attachShader(g,M),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(M).trim(),L=i.getShaderInfoLog(S).trim();let q=!0,C=!0;if(i.getProgramParameter(g,35714)===!1){q=!1;const N=Pu(i,M,"vertex"),U=Pu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+R+`
`+N+`
`+U)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(I===""||L==="")&&(C=!1);C&&(this.diagnostics={runnable:q,programLog:R,vertexShader:{log:I,prefix:x},fragmentShader:{log:L,prefix:p}})}i.deleteShader(M),i.deleteShader(S);let v;this.getUniforms=function(){return v===void 0&&(v=new Qn(i,g)),v};let P;return this.getAttributes=function(){return P===void 0&&(P=Ux(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=S,this}function Qx(a,e,t,n,i,r,s){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function x(v){const R=v.skeleton.bones;if(u)return 1024;{const L=Math.floor((h-20)/4),q=Math.min(L,R.length);return q<R.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+R.length+" bones. This GPU supports "+q+"."),0):q}}function p(v){let P;return v&&v.isTexture?P=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),P=v.texture.encoding):P=xt,l&&v&&v.isTexture&&v.format===ct&&v.type===Un&&v.encoding===Ut&&(P=xt),P}function _(v,P,R,I,L){const q=I.fog,C=v.isMeshStandardMaterial?I.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||C),U=m[v.type],D=L.isSkinnedMesh?x(L):0;v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let k,Z;if(U){const W=ln[U];k=W.vertexShader,Z=W.fragmentShader}else k=v.vertexShader,Z=v.fragmentShader;const ae=a.getRenderTarget(),ue=v.alphaTest>0,te=v.clearcoat>0;return{isWebGL2:l,shaderID:U,shaderName:v.type,vertexShader:k,fragmentShader:Z,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ae!==null?p(ae.texture):a.outputEncoding,map:!!v.map,mapEncoding:p(v.map),matcap:!!v.matcap,matcapEncoding:p(v.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:p(N),envMapCubeUV:!!N&&(N.mapping===ks||N.mapping===no),lightMap:!!v.lightMap,lightMapEncoding:p(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:p(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===jp,tangentSpaceNormalMap:v.normalMapType===gi,clearcoat:te,clearcoatMap:te&&!!v.clearcoatMap,clearcoatRoughnessMap:te&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:te&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularTintMap:!!v.specularTintMap,specularTintMapEncoding:p(v.specularTintMap),alphaMap:!!v.alphaMap,alphaTest:ue,gradientMap:!!v.gradientMap,sheen:v.sheen>0,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.geometry&&!!L.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.geometry&&!!L.geometry.attributes.color&&L.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularTintMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularTintMap)&&!!v.displacementMap,fog:!!q,useFog:v.fog,fogExp2:q&&q.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:L.isSkinnedMesh===!0&&D>0,maxBones:D,useVertexTexture:u,morphTargets:!!L.geometry&&!!L.geometry.morphAttributes.position,morphNormals:!!L.geometry&&!!L.geometry.morphAttributes.normal,morphTargetsCount:!!L.geometry&&!!L.geometry.morphAttributes.position?L.geometry.morphAttributes.position.length:0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:pi,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===nt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function b(v){const P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.fragmentShader),P.push(v.vertexShader)),v.defines!==void 0)for(const R in v.defines)P.push(R),P.push(v.defines[R]);if(v.isRawShaderMaterial===!1){for(let R=0;R<g.length;R++)P.push(v[g[R]]);P.push(a.outputEncoding),P.push(a.gammaFactor)}return P.push(v.customProgramCacheKey),P.join()}function y(v){const P=m[v.type];let R;if(P){const I=ln[P];R=ua.clone(I.uniforms)}else R=v.uniforms;return R}function M(v,P){let R;for(let I=0,L=o.length;I<L;I++){const q=o[I];if(q.cacheKey===P){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Yx(a,P,v,r),o.push(R)),R}function S(v){if(--v.usedTimes==0){const P=o.indexOf(v);o[P]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:_,getProgramCacheKey:b,getUniforms:y,acquireProgram:M,releaseProgram:S,programs:o}}function qx(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function jx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.program!==e.program?a.program.id-e.program.id:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Du(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Uu(a){const e=[];let t=0;const n=[],i=[],r=[],s={id:-1};function o(){t=0,n.length=0,i.length=0,r.length=0}function l(d,m,g,x,p,_){let b=e[t];const y=a.get(g);return b===void 0?(b={id:d.id,object:d,geometry:m,material:g,program:y.program||s,groupOrder:x,renderOrder:d.renderOrder,z:p,group:_},e[t]=b):(b.id=d.id,b.object=d,b.geometry=m,b.material=g,b.program=y.program||s,b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=p,b.group=_),t++,b}function c(d,m,g,x,p,_){const b=l(d,m,g,x,p,_);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):n.push(b)}function u(d,m,g,x,p,_){const b=l(d,m,g,x,p,_);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):n.unshift(b)}function h(d,m){n.length>1&&n.sort(d||jx),i.length>1&&i.sort(m||Du),r.length>1&&r.sort(m||Du)}function f(){for(let d=t,m=e.length;d<m;d++){const g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:c,unshift:u,finish:f,sort:h}}function Zx(a){let e=new WeakMap;function t(i,r){let s;return e.has(i)===!1?(s=new Uu(a),e.set(i,[s])):r>=e.get(i).length?(s=new Uu(a),e.get(i).push(s)):s=e.get(i)[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function Jx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ie};break;case"SpotLight":t={position:new E,direction:new E,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new E,halfWidth:new E,halfHeight:new E};break}return a[e.id]=t,t}}}function $x(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Kx=0;function e0(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function t0(a,e){const t=new Jx,n=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new E);const r=new E,s=new de,o=new de;function l(u,h){let f=0,d=0,m=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,x=0,p=0,_=0,b=0,y=0,M=0,S=0;u.sort(e0);const v=h!==!0?Math.PI:1;for(let R=0,I=u.length;R<I;R++){const L=u[R],q=L.color,C=L.intensity,N=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=q.r*C*v,d+=q.g*C*v,m+=q.b*C*v;else if(L.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(L.sh.coefficients[D],C);else if(L.isDirectionalLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){const k=L.shadow,Z=n.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=L.shadow.matrix,y++}i.directional[g]=D,g++}else if(L.isSpotLight){const D=t.get(L);if(D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(q).multiplyScalar(C*v),D.distance=N,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,L.castShadow){const k=L.shadow,Z=n.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=U,i.spotShadowMatrix[p]=L.shadow.matrix,S++}i.spot[p]=D,p++}else if(L.isRectAreaLight){const D=t.get(L);D.color.copy(q).multiplyScalar(C),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=D,_++}else if(L.isPointLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*v),D.distance=L.distance,D.decay=L.decay,L.castShadow){const k=L.shadow,Z=n.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[x]=Z,i.pointShadowMap[x]=U,i.pointShadowMatrix[x]=L.shadow.matrix,M++}i.point[x]=D,x++}else if(L.isHemisphereLight){const D=t.get(L);D.skyColor.copy(L.color).multiplyScalar(C*v),D.groundColor.copy(L.groundColor).multiplyScalar(C*v),i.hemi[b]=D,b++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;const P=i.hash;(P.directionalLength!==g||P.pointLength!==x||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==b||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==S)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=S,P.directionalLength=g,P.pointLength=x,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=b,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=S,i.version=Kx++)}function c(u,h){let f=0,d=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let _=0,b=u.length;_<b;_++){const y=u[_];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(y.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),M.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Ou(a,e){const t=new t0(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function n0(a,e){let t=new WeakMap;function n(r,s=0){let o;return t.has(r)===!1?(o=new Ou(a,e),t.set(r,[o])):s>=t.get(r).length?(o=new Ou(a,e),t.get(r).push(o)):o=t.get(r)[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bu extends ot{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Bu.prototype.isMeshDepthMaterial=!0;class zu extends ot{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}zu.prototype.isMeshDistanceMaterial=!0;const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`;function ku(a,e,t){let n=new da;const i=new Y,r=new Y,s=new Ge,o=new Bu({depthPacking:qp}),l=new zu,c={},u=t.maxTextureSize,h={0:nt,1:Ui,2:di},f=new zt({uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4},samples:{value:8}},vertexShader:i0,fragmentShader:r0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ke;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc,this.render=function(y,M,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const v=a.getRenderTarget(),P=a.getActiveCubeFace(),R=a.getActiveMipmapLevel(),I=a.state;I.setBlending(Dn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let L=0,q=y.length;L<q;L++){const C=y[L],N=C.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const U=N.getFrameExtents();if(i.multiply(U),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,N.mapSize.y=r.y)),N.map===null&&!N.isPointLightShadow&&this.type===Wr){const k={minFilter:lt,magFilter:lt,format:ct};N.map=new Rt(i.x,i.y,k),N.map.texture.name=C.name+".shadowMap",N.mapPass=new Rt(i.x,i.y,k),N.camera.updateProjectionMatrix()}if(N.map===null){const k={minFilter:st,magFilter:st,format:ct};N.map=new Rt(i.x,i.y,k),N.map.texture.name=C.name+".shadowMap",N.camera.updateProjectionMatrix()}a.setRenderTarget(N.map),a.clear();const D=N.getViewportCount();for(let k=0;k<D;k++){const Z=N.getViewport(k);s.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(s),N.updateMatrices(C,k),n=N.getFrustum(),b(M,S,N.camera,C,this.type)}!N.isPointLightShadow&&this.type===Wr&&p(N,S),N.needsUpdate=!1}x.needsUpdate=!1,a.setRenderTarget(v,P,R)};function p(y,M){const S=e.update(g);f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,f.uniforms.samples.value=y.blurSamples,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(M,null,S,f,g,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,d.uniforms.samples.value=y.blurSamples,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(M,null,S,d,g,null)}function _(y,M,S,v,P,R,I){let L=null;const q=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(q!==void 0?L=q:L=v.isPointLight===!0?l:o,a.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const C=L.uuid,N=S.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let D=U[N];D===void 0&&(D=L.clone(),U[N]=D),L=D}return L.visible=S.visible,L.wireframe=S.wireframe,I===Wr?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:h[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(v.matrixWorld),L.nearDistance=P,L.farDistance=R),L}function b(y,M,S,v,P){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Wr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const L=e.update(y),q=y.material;if(Array.isArray(q)){const C=L.groups;for(let N=0,U=C.length;N<U;N++){const D=C[N],k=q[D.materialIndex];if(k&&k.visible){const Z=_(y,L,k,v,S.near,S.far,P);a.renderBufferDirect(S,null,L,Z,y,D)}}}else if(q.visible){const C=_(y,L,q,v,S.near,S.far,P);a.renderBufferDirect(S,null,L,C,y,null)}}const I=y.children;for(let L=0,q=I.length;L<q;L++)b(I[L],M,S,v,P)}}function s0(a,e,t){const n=t.isWebGL2;function i(){let F=!1;const se=new Ge;let Q=null;const ce=new Ge(0,0,0,0);return{setMask:function(fe){Q!==fe&&!F&&(a.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){F=fe},setClear:function(fe,Pe,Tt,wt,hi){hi===!0&&(fe*=wt,Pe*=wt,Tt*=wt),se.set(fe,Pe,Tt,wt),ce.equals(se)===!1&&(a.clearColor(fe,Pe,Tt,wt),ce.copy(se))},reset:function(){F=!1,Q=null,ce.set(-1,0,0,0)}}}function r(){let F=!1,se=null,Q=null,ce=null;return{setTest:function(fe){fe?J(2929):pe(2929)},setMask:function(fe){se!==fe&&!F&&(a.depthMask(fe),se=fe)},setFunc:function(fe){if(Q!==fe){if(fe)switch(fe){case Od:a.depthFunc(512);break;case Bd:a.depthFunc(519);break;case zd:a.depthFunc(513);break;case Ka:a.depthFunc(515);break;case kd:a.depthFunc(514);break;case Gd:a.depthFunc(518);break;case Hd:a.depthFunc(516);break;case Vd:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);Q=fe}},setLocked:function(fe){F=fe},setClear:function(fe){ce!==fe&&(a.clearDepth(fe),ce=fe)},reset:function(){F=!1,se=null,Q=null,ce=null}}}function s(){let F=!1,se=null,Q=null,ce=null,fe=null,Pe=null,Tt=null,wt=null,hi=null;return{setTest:function(tt){F||(tt?J(2960):pe(2960))},setMask:function(tt){se!==tt&&!F&&(a.stencilMask(tt),se=tt)},setFunc:function(tt,In,Nn){(Q!==tt||ce!==In||fe!==Nn)&&(a.stencilFunc(tt,In,Nn),Q=tt,ce=In,fe=Nn)},setOp:function(tt,In,Nn){(Pe!==tt||Tt!==In||wt!==Nn)&&(a.stencilOp(tt,In,Nn),Pe=tt,Tt=In,wt=Nn)},setLocked:function(tt){F=tt},setClear:function(tt){hi!==tt&&(a.clearStencil(tt),hi=tt)},reset:function(){F=!1,se=null,Q=null,ce=null,fe=null,Pe=null,Tt=null,wt=null,hi=null}}}const o=new i,l=new r,c=new s;let u={},h=null,f={},d=null,m=!1,g=null,x=null,p=null,_=null,b=null,y=null,M=null,S=!1,v=null,P=null,R=null,I=null,L=null;const q=a.getParameter(35661);let C=!1,N=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),C=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),C=N>=2);let D=null,k={};const Z=a.getParameter(3088),ae=a.getParameter(2978),ue=new Ge().fromArray(Z),te=new Ge().fromArray(ae);function be(F,se,Q){const ce=new Uint8Array(4),fe=a.createTexture();a.bindTexture(F,fe),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let Pe=0;Pe<Q;Pe++)a.texImage2D(se+Pe,0,6408,1,1,0,6408,5121,ce);return fe}const W={};W[3553]=be(3553,3553,1),W[34067]=be(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),J(2929),l.setFunc(Ka),j(!1),ee(uc),J(2884),Ae(Dn);function J(F){u[F]!==!0&&(a.enable(F),u[F]=!0)}function pe(F){u[F]!==!1&&(a.disable(F),u[F]=!1)}function G(F){F!==h&&(a.bindFramebuffer(36160,F),h=F)}function xe(F,se){return se===null&&h!==null&&(se=h),f[F]!==se?(a.bindFramebuffer(F,se),f[F]=se,n&&(F===36009&&(f[36160]=se),F===36160&&(f[36009]=se)),!0):!1}function Te(F){return d!==F?(a.useProgram(F),d=F,!0):!1}const oe={[Oi]:32774,[Ad]:32778,[Ed]:32779};if(n)oe[mc]=32775,oe[gc]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(oe[mc]=F.MIN_EXT,oe[gc]=F.MAX_EXT)}const he={[Ld]:0,[Pd]:1,[Fd]:768,[_c]:770,[Ud]:776,[Nd]:774,[Cd]:772,[Rd]:769,[xc]:771,[Dd]:775,[Id]:773};function Ae(F,se,Q,ce,fe,Pe,Tt,wt){if(F===Dn){m===!0&&(pe(3042),m=!1);return}if(m===!1&&(J(3042),m=!0),F!==Sd){if(F!==g||wt!==S){if((x!==Oi||b!==Oi)&&(a.blendEquation(32774),x=Oi,b=Oi),wt)switch(F){case Xr:a.blendFuncSeparate(1,771,1,771);break;case $a:a.blendFunc(1,1);break;case dc:a.blendFuncSeparate(0,0,769,771);break;case pc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Xr:a.blendFuncSeparate(770,771,1,771);break;case $a:a.blendFunc(770,1);break;case dc:a.blendFunc(0,769);break;case pc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,_=null,y=null,M=null,g=F,S=wt}return}fe=fe||se,Pe=Pe||Q,Tt=Tt||ce,(se!==x||fe!==b)&&(a.blendEquationSeparate(oe[se],oe[fe]),x=se,b=fe),(Q!==p||ce!==_||Pe!==y||Tt!==M)&&(a.blendFuncSeparate(he[Q],he[ce],he[Pe],he[Tt]),p=Q,_=ce,y=Pe,M=Tt),g=F,S=null}function V(F,se){F.side===di?pe(2884):J(2884);let Q=F.side===nt;se&&(Q=!Q),j(Q),F.blending===Xr&&F.transparent===!1?Ae(Dn):Ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const ce=F.stencilWrite;c.setTest(ce),ce&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(32926):pe(32926)}function j(F){v!==F&&(F?a.frontFace(2304):a.frontFace(2305),v=F)}function ee(F){F!==St?(J(2884),F!==P&&(F===uc?a.cullFace(1029):F===Td?a.cullFace(1028):a.cullFace(1032))):pe(2884),P=F}function me(F){F!==R&&(C&&a.lineWidth(F),R=F)}function re(F,se,Q){F?(J(32823),(I!==se||L!==Q)&&(a.polygonOffset(se,Q),I=se,L=Q)):pe(32823)}function A(F){F?J(3089):pe(3089)}function w(F){F===void 0&&(F=33984+q-1),D!==F&&(a.activeTexture(F),D=F)}function H(F,se){D===null&&w();let Q=k[D];Q===void 0&&(Q={type:void 0,texture:void 0},k[D]=Q),(Q.type!==F||Q.texture!==se)&&(a.bindTexture(F,se||W[F]),Q.type=F,Q.texture=se)}function $(){const F=k[D];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(F){ue.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function we(F){te.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function ge(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},D=null,k={},h=null,f={},d=null,m=!1,g=null,x=null,p=null,_=null,b=null,y=null,M=null,S=!1,v=null,P=null,R=null,I=null,L=null,ue.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:J,disable:pe,bindFramebuffer:xe,bindXRFramebuffer:G,useProgram:Te,setBlending:Ae,setMaterial:V,setFlipSided:j,setCullFace:ee,setLineWidth:me,setPolygonOffset:re,setScissorTest:A,activeTexture:w,bindTexture:H,unbindTexture:$,compressedTexImage2D:K,texImage2D:le,texImage3D:Me,scissor:_e,viewport:we,reset:ge}}function a0(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=new WeakMap;let d,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function g(A,w){return m?new OffscreenCanvas(A,w):Qs("canvas")}function x(A,w,H,$){let K=1;if((A.width>$||A.height>$)&&(K=$/Math.max(A.width,A.height)),K<1||w===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const le=w?kc:Math.floor,Me=le(K*A.width),_e=le(K*A.height);d===void 0&&(d=g(Me,_e));const we=H?g(Me,_e):d;return we.width=Me,we.height=_e,we.getContext("2d").drawImage(A,0,0,Me,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+_e+")."),we}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return ho(A.width)&&ho(A.height)}function _(A){return o?!1:A.wrapS!==Pt||A.wrapT!==Pt||A.minFilter!==st&&A.minFilter!==lt}function b(A,w){return A.generateMipmaps&&w&&A.minFilter!==st&&A.minFilter!==lt}function y(A,w,H,$,K=1){a.generateMipmap(A);const le=n.get(w);le.__maxMipLevel=Math.log2(Math.max(H,$,K))}function M(A,w,H,$){if(o===!1)return w;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=w;return w===6403&&(H===5126&&(K=33326),H===5131&&(K=33325),H===5121&&(K=33321)),w===6407&&(H===5126&&(K=34837),H===5131&&(K=34843),H===5121&&(K=32849)),w===6408&&(H===5126&&(K=34836),H===5131&&(K=34842),H===5121&&(K=$===Ut?35907:32856)),(K===33325||K===33326||K===34842||K===34836)&&e.get("EXT_color_buffer_float"),K}function S(A){return A===st||A===io||A===ro?9728:9729}function v(A){const w=A.target;w.removeEventListener("dispose",v),R(w),w.isVideoTexture&&f.delete(w),s.memory.textures--}function P(A){const w=A.target;w.removeEventListener("dispose",P),I(w)}function R(A){const w=n.get(A);w.__webglInit!==void 0&&(a.deleteTexture(w.__webglTexture),n.remove(A))}function I(A){const w=A.texture,H=n.get(A),$=n.get(w);if(!!A){if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)a.deleteFramebuffer(H.__webglFramebuffer[K]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[K]);else a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&a.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let K=0,le=w.length;K<le;K++){const Me=n.get(w[K]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),s.memory.textures--),n.remove(w[K])}n.remove(w),n.remove(A)}}let L=0;function q(){L=0}function C(){const A=L;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),L+=1,A}function N(A,w){const H=n.get(A);if(A.isVideoTexture&&V(A),A.version>0&&H.__version!==A.version){const $=A.image;if($===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,A,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,H.__webglTexture)}function U(A,w){const H=n.get(A);if(A.version>0&&H.__version!==A.version){be(H,A,w);return}t.activeTexture(33984+w),t.bindTexture(35866,H.__webglTexture)}function D(A,w){const H=n.get(A);if(A.version>0&&H.__version!==A.version){be(H,A,w);return}t.activeTexture(33984+w),t.bindTexture(32879,H.__webglTexture)}function k(A,w){const H=n.get(A);if(A.version>0&&H.__version!==A.version){W(H,A,w);return}t.activeTexture(33984+w),t.bindTexture(34067,H.__webglTexture)}const Z={[Bi]:10497,[Pt]:33071,[Gs]:33648},ae={[st]:9728,[io]:9984,[ro]:9986,[lt]:9729,[Mc]:9985,[zi]:9987};function ue(A,w,H){if(H?(a.texParameteri(A,10242,Z[w.wrapS]),a.texParameteri(A,10243,Z[w.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,Z[w.wrapR]),a.texParameteri(A,10240,ae[w.magFilter]),a.texParameteri(A,10241,ae[w.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(w.wrapS!==Pt||w.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,S(w.magFilter)),a.texParameteri(A,10241,S(w.minFilter)),w.minFilter!==st&&w.minFilter!==lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(w.type===vn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function te(A,w){A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",v),A.__webglTexture=a.createTexture(),s.memory.textures++)}function be(A,w,H){let $=3553;w.isDataTexture2DArray&&($=35866),w.isDataTexture3D&&($=32879),te(A,w),t.activeTexture(33984+H),t.bindTexture($,A.__webglTexture),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const K=_(w)&&p(w.image)===!1,le=x(w.image,K,!1,u),Me=p(le)||o,_e=r.convert(w.format);let we=r.convert(w.type),ge=M(w.internalFormat,_e,we,w.encoding);ue($,w,Me);let F;const se=w.mipmaps;if(w.isDepthTexture)ge=6402,o?w.type===vn?ge=36012:w.type===Vs?ge=33190:w.type===Yr?ge=35056:ge=33189:w.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Gi&&ge===6402&&w.type!==Hs&&w.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Hs,we=r.convert(w.type)),w.format===Qr&&ge===6402&&(ge=34041,w.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Yr,we=r.convert(w.type))),t.texImage2D(3553,0,ge,le.width,le.height,0,_e,we,null);else if(w.isDataTexture)if(se.length>0&&Me){for(let Q=0,ce=se.length;Q<ce;Q++)F=se[Q],t.texImage2D(3553,Q,ge,F.width,F.height,0,_e,we,F.data);w.generateMipmaps=!1,A.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,ge,le.width,le.height,0,_e,we,le.data),A.__maxMipLevel=0;else if(w.isCompressedTexture){for(let Q=0,ce=se.length;Q<ce;Q++)F=se[Q],w.format!==ct&&w.format!==mi?_e!==null?t.compressedTexImage2D(3553,Q,ge,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Q,ge,F.width,F.height,0,_e,we,F.data);A.__maxMipLevel=se.length-1}else if(w.isDataTexture2DArray)t.texImage3D(35866,0,ge,le.width,le.height,le.depth,0,_e,we,le.data),A.__maxMipLevel=0;else if(w.isDataTexture3D)t.texImage3D(32879,0,ge,le.width,le.height,le.depth,0,_e,we,le.data),A.__maxMipLevel=0;else if(se.length>0&&Me){for(let Q=0,ce=se.length;Q<ce;Q++)F=se[Q],t.texImage2D(3553,Q,ge,_e,we,F);w.generateMipmaps=!1,A.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,ge,_e,we,le),A.__maxMipLevel=0;b(w,Me)&&y($,w,le.width,le.height),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function W(A,w,H){if(w.image.length!==6)return;te(A,w),t.activeTexture(33984+H),t.bindTexture(34067,A.__webglTexture),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const $=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),K=w.image[0]&&w.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!$&&!K?le[Q]=x(w.image[Q],!1,!0,c):le[Q]=K?w.image[Q].image:w.image[Q];const Me=le[0],_e=p(Me)||o,we=r.convert(w.format),ge=r.convert(w.type),F=M(w.internalFormat,we,ge,w.encoding);ue(34067,w,_e);let se;if($){for(let Q=0;Q<6;Q++){se=le[Q].mipmaps;for(let ce=0;ce<se.length;ce++){const fe=se[ce];w.format!==ct&&w.format!==mi?we!==null?t.compressedTexImage2D(34069+Q,ce,F,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Q,ce,F,fe.width,fe.height,0,we,ge,fe.data)}}A.__maxMipLevel=se.length-1}else{se=w.mipmaps;for(let Q=0;Q<6;Q++)if(K){t.texImage2D(34069+Q,0,F,le[Q].width,le[Q].height,0,we,ge,le[Q].data);for(let ce=0;ce<se.length;ce++){const Pe=se[ce].image[Q].image;t.texImage2D(34069+Q,ce+1,F,Pe.width,Pe.height,0,we,ge,Pe.data)}}else{t.texImage2D(34069+Q,0,F,we,ge,le[Q]);for(let ce=0;ce<se.length;ce++){const fe=se[ce];t.texImage2D(34069+Q,ce+1,F,we,ge,fe.image[Q])}}A.__maxMipLevel=se.length}b(w,_e)&&y(34067,w,Me.width,Me.height),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function J(A,w,H,$,K){const le=r.convert(H.format),Me=r.convert(H.type),_e=M(H.internalFormat,le,Me,H.encoding);K===32879||K===35866?t.texImage3D(K,0,_e,w.width,w.height,w.depth,0,le,Me,null):t.texImage2D(K,0,_e,w.width,w.height,0,le,Me,null),t.bindFramebuffer(36160,A),a.framebufferTexture2D(36160,$,K,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(A,w,H){if(a.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let $=33189;if(H){const K=w.depthTexture;K&&K.isDepthTexture&&(K.type===vn?$=36012:K.type===Vs&&($=33190));const le=Ae(w);a.renderbufferStorageMultisample(36161,le,$,w.width,w.height)}else a.renderbufferStorage(36161,$,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){if(H){const $=Ae(w);a.renderbufferStorageMultisample(36161,$,35056,w.width,w.height)}else a.renderbufferStorage(36161,34041,w.width,w.height);a.framebufferRenderbuffer(36160,33306,36161,A)}else{const $=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,K=r.convert($.format),le=r.convert($.type),Me=M($.internalFormat,K,le,$.encoding);if(H){const _e=Ae(w);a.renderbufferStorageMultisample(36161,_e,Me,w.width,w.height)}else a.renderbufferStorage(36161,Me,w.width,w.height)}a.bindRenderbuffer(36161,null)}function G(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===Gi)a.framebufferTexture2D(36160,36096,3553,$,0);else if(w.depthTexture.format===Qr)a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function xe(A){const w=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=a.createRenderbuffer(),pe(w.__webglDepthbuffer[$],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),pe(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Te(A){const w=A.texture,H=n.get(A),$=n.get(w);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture=a.createTexture(),$.__version=w.version,s.memory.textures++);const K=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,Me=A.isWebGLMultisampleRenderTarget===!0,_e=w.isDataTexture3D||w.isDataTexture2DArray,we=p(A)||o;if(o&&w.format===mi&&(w.type===vn||w.type===ki)&&(w.format=ct,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)H.__webglFramebuffer[ge]=a.createFramebuffer()}else if(H.__webglFramebuffer=a.createFramebuffer(),le)if(i.drawBuffers){const ge=A.texture;for(let F=0,se=ge.length;F<se;F++){const Q=n.get(ge[F]);Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Me)if(o){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const ge=r.convert(w.format),F=r.convert(w.type),se=M(w.internalFormat,ge,F,w.encoding),Q=Ae(A);a.renderbufferStorageMultisample(36161,Q,se,A.width,A.height),t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(K){t.bindTexture(34067,$.__webglTexture),ue(34067,w,we);for(let ge=0;ge<6;ge++)J(H.__webglFramebuffer[ge],A,w,36064,34069+ge);b(w,we)&&y(34067,w,A.width,A.height),t.unbindTexture()}else if(le){const ge=A.texture;for(let F=0,se=ge.length;F<se;F++){const Q=ge[F],ce=n.get(Q);t.bindTexture(3553,ce.__webglTexture),ue(3553,Q,we),J(H.__webglFramebuffer,A,Q,36064+F,3553),b(Q,we)&&y(3553,Q,A.width,A.height)}t.unbindTexture()}else{let ge=3553;_e&&(o?ge=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ge,$.__webglTexture),ue(ge,w,we),J(H.__webglFramebuffer,A,w,36064,ge),b(w,we)&&y(ge,w,A.width,A.height,A.depth),t.unbindTexture()}A.depthBuffer&&xe(A)}function oe(A){const w=p(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let $=0,K=H.length;$<K;$++){const le=H[$];if(b(le,w)){const Me=A.isWebGLCubeRenderTarget?34067:3553,_e=n.get(le).__webglTexture;t.bindTexture(Me,_e),y(Me,le,A.width,A.height),t.unbindTexture()}}}function he(A){if(A.isWebGLMultisampleRenderTarget)if(o){const w=A.width,H=A.height;let $=16384;A.depthBuffer&&($|=256),A.stencilBuffer&&($|=1024);const K=n.get(A);t.bindFramebuffer(36008,K.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,K.__webglFramebuffer),a.blitFramebuffer(0,0,w,H,0,0,w,H,$,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,K.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ae(A){return o&&A.isWebGLMultisampleRenderTarget?Math.min(h,A.samples):0}function V(A){const w=s.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}let j=!1,ee=!1;function me(A,w){A&&A.isWebGLRenderTarget&&(j===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),j=!0),A=A.texture),N(A,w)}function re(A,w){A&&A.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),A=A.texture),k(A,w)}this.allocateTextureUnit=C,this.resetTextureUnits=q,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=D,this.setTextureCube=k,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=he,this.safeSetTexture2D=me,this.safeSetTextureCube=re}function o0(a,e,t){const n=t.isWebGL2;function i(r){let s;if(r===Un)return 5121;if(r===$d)return 32819;if(r===Kd)return 32820;if(r===ep)return 33635;if(r===jd)return 5120;if(r===Zd)return 5122;if(r===Hs)return 5123;if(r===Jd)return 5124;if(r===Vs)return 5125;if(r===vn)return 5126;if(r===ki)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===tp)return 6406;if(r===mi)return 6407;if(r===ct)return 6408;if(r===np)return 6409;if(r===ip)return 6410;if(r===Gi)return 6402;if(r===Qr)return 34041;if(r===sp)return 6403;if(r===ap)return 36244;if(r===op)return 33319;if(r===lp)return 33320;if(r===cp)return 36248;if(r===up)return 36249;if(r===Tc||r===wc||r===Sc||r===Ac)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ec||r===Lc||r===Pc||r===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hp)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Rc||r===Cc)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(r===Rc)return s.COMPRESSED_RGB8_ETC2;if(r===Cc)return s.COMPRESSED_RGBA8_ETC2_EAC}if(r===fp||r===dp||r===pp||r===mp||r===gp||r===_p||r===xp||r===vp||r===yp||r===bp||r===Mp||r===Tp||r===wp||r===Sp||r===Ep||r===Lp||r===Pp||r===Fp||r===Rp||r===Cp||r===Ip||r===Np||r===Dp||r===Up||r===Op||r===Bp||r===zp||r===kp)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?r:null;if(r===Ap)return s=e.get("EXT_texture_compression_bptc"),s!==null?r:null;if(r===Yr)return n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Gu extends yt{constructor(e=[]){super();this.cameras=e}}Gu.prototype.isArrayCamera=!0;class qn extends Ce{constructor(){super();this.type="Group"}}qn.prototype.isGroup=!0;const l0={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0))),c&&e.hand){s=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const _=new qn;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[g.jointName]=_,c.add(_)}const p=c.joints[g.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class c0 extends On{constructor(e,t){super();const n=this,i=e.state;let r=null,s=1,o=null,l="local-floor",c=null,u=null,h=null,f=null,d=null,m=!1,g=null,x=null,p=null,_=null,b=null,y=null;const M=[],S=new Map,v=new yt;v.layers.enable(1),v.viewport=new Ge;const P=new yt;P.layers.enable(2),P.viewport=new Ge;const R=[v,P],I=new Gu;I.layers.enable(1),I.layers.enable(2);let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=M[W];return J===void 0&&(J=new Yo,M[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=M[W];return J===void 0&&(J=new Yo,M[W]=J),J.getGripSpace()},this.getHand=function(W){let J=M[W];return J===void 0&&(J=new Yo,M[W]=J),J.getHandSpace()};function C(W){const J=S.get(W.inputSource);J&&J.dispatchEvent({type:W.type,data:W.inputSource})}function N(){S.forEach(function(W,J){W.disconnect(J)}),S.clear(),L=null,q=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),h&&t.deleteFramebuffer(h),g&&t.deleteFramebuffer(g),x&&t.deleteRenderbuffer(x),p&&t.deleteRenderbuffer(p),h=null,g=null,x=null,p=null,d=null,f=null,u=null,r=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){l=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",N),r.addEventListener("inputsourceschange",U);const J=t.getContextAttributes();if(J.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const pe={antialias:J.antialias,alpha:J.alpha,depth:J.depth,stencil:J.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d})}else if(t instanceof WebGLRenderingContext){const pe={antialias:!0,alpha:J.alpha,depth:J.depth,stencil:J.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({layers:[d]})}else{m=J.antialias;let pe=null;J.depth&&(y=256,J.stencil&&(y|=1024),b=J.stencil?33306:36096,pe=J.stencil?35056:33190);const G={colorFormat:J.alpha?32856:32849,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(G),h=t.createFramebuffer(),r.updateRenderState({layers:[f]}),m&&(g=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,f.textureWidth,f.textureHeight),i.bindFramebuffer(36160,g),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),pe!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,pe,f.textureWidth,f.textureHeight),t.framebufferRenderbuffer(36160,b,36161,p),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await r.requestReferenceSpace(l),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(W){const J=r.inputSources;for(let pe=0;pe<M.length;pe++)S.set(J[pe],M[pe]);for(let pe=0;pe<W.removed.length;pe++){const G=W.removed[pe],xe=S.get(G);xe&&(xe.dispatchEvent({type:"disconnected",data:G}),S.delete(G))}for(let pe=0;pe<W.added.length;pe++){const G=W.added[pe],xe=S.get(G);xe&&xe.dispatchEvent({type:"connected",data:G})}}const D=new E,k=new E;function Z(W,J,pe){D.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);const G=D.distanceTo(k),xe=J.projectionMatrix.elements,Te=pe.projectionMatrix.elements,oe=xe[14]/(xe[10]-1),he=xe[14]/(xe[10]+1),Ae=(xe[9]+1)/xe[5],V=(xe[9]-1)/xe[5],j=(xe[8]-1)/xe[0],ee=(Te[8]+1)/Te[0],me=oe*j,re=oe*ee,A=G/(-j+ee),w=A*-j;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(w),W.translateZ(A),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const H=oe+A,$=he+A,K=me-w,le=re+(G-w),Me=Ae*he/$*H,_e=V*he/$*H;W.projectionMatrix.makePerspective(K,le,Me,_e,H,$)}function ae(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;I.near=P.near=v.near=W.near,I.far=P.far=v.far=W.far,(L!==I.near||q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,q=I.far);const J=W.parent,pe=I.cameras;ae(I,J);for(let xe=0;xe<pe.length;xe++)ae(pe[xe],J);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),W.position.copy(I.position),W.quaternion.copy(I.quaternion),W.scale.copy(I.scale),W.matrix.copy(I.matrix),W.matrixWorld.copy(I.matrixWorld);const G=W.children;for(let xe=0,Te=G.length;xe<Te;xe++)G[xe].updateMatrixWorld(!0);pe.length===2?Z(I,v,P):I.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(W){f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let ue=null;function te(W,J){if(c=J.getViewerPose(o),_=J,c!==null){const G=c.views;d!==null&&i.bindXRFramebuffer(d.framebuffer);let xe=!1;G.length!==I.cameras.length&&(I.cameras.length=0,xe=!0);for(let Te=0;Te<G.length;Te++){const oe=G[Te];let he=null;if(d!==null)he=d.getViewport(oe);else{const V=u.getViewSubImage(f,oe);i.bindXRFramebuffer(h),V.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,b,3553,V.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,V.colorTexture,0),he=V.viewport}const Ae=R[Te];Ae.matrix.fromArray(oe.transform.matrix),Ae.projectionMatrix.fromArray(oe.projectionMatrix),Ae.viewport.set(he.x,he.y,he.width,he.height),Te===0&&I.matrix.copy(Ae.matrix),xe===!0&&I.cameras.push(Ae)}m&&(i.bindXRFramebuffer(g),y!==null&&t.clear(y))}const pe=r.inputSources;for(let G=0;G<M.length;G++){const xe=M[G],Te=pe[G];xe.update(Te,J,o)}if(ue&&ue(W,J),m){const G=f.textureWidth,xe=f.textureHeight;i.bindFramebuffer(36008,g),i.bindFramebuffer(36009,h),t.invalidateFramebuffer(36008,[b]),t.invalidateFramebuffer(36009,[b]),t.blitFramebuffer(0,0,G,xe,0,0,G,xe,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,g)}_=null}const be=new ru;be.setAnimationLoop(te),this.setAnimationLoop=function(W){ue=W},this.dispose=function(){}}}function u0(a){function e(p,_){p.fogColor.value.copy(_.color),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function t(p,_,b,y,M){_.isMeshBasicMaterial?n(p,_):_.isMeshLambertMaterial?(n(p,_),l(p,_)):_.isMeshToonMaterial?(n(p,_),u(p,_)):_.isMeshPhongMaterial?(n(p,_),c(p,_)):_.isMeshStandardMaterial?(n(p,_),_.isMeshPhysicalMaterial?f(p,_,M):h(p,_)):_.isMeshMatcapMaterial?(n(p,_),d(p,_)):_.isMeshDepthMaterial?(n(p,_),m(p,_)):_.isMeshDistanceMaterial?(n(p,_),g(p,_)):_.isMeshNormalMaterial?(n(p,_),x(p,_)):_.isLineBasicMaterial?(i(p,_),_.isLineDashedMaterial&&r(p,_)):_.isPointsMaterial?s(p,_,b,y):_.isSpriteMaterial?o(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function n(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap),_.specularMap&&(p.specularMap.value=_.specularMap),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const b=a.get(_).envMap;if(b){p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio;const S=a.get(b).__maxMipLevel;S!==void 0&&(p.maxMipLevel.value=S)}_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity);let y;_.map?y=_.map:_.specularMap?y=_.specularMap:_.displacementMap?y=_.displacementMap:_.normalMap?y=_.normalMap:_.bumpMap?y=_.bumpMap:_.roughnessMap?y=_.roughnessMap:_.metalnessMap?y=_.metalnessMap:_.alphaMap?y=_.alphaMap:_.emissiveMap?y=_.emissiveMap:_.clearcoatMap?y=_.clearcoatMap:_.clearcoatNormalMap?y=_.clearcoatNormalMap:_.clearcoatRoughnessMap?y=_.clearcoatRoughnessMap:_.specularIntensityMap?y=_.specularIntensityMap:_.specularTintMap?y=_.specularTintMap:_.transmissionMap?y=_.transmissionMap:_.thicknessMap&&(y=_.thicknessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let M;_.aoMap?M=_.aoMap:_.lightMap&&(M=_.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function i(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity}function r(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function s(p,_,b,y){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*b,p.scale.value=y*.5,_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);let M;_.map?M=_.map:_.alphaMap&&(M=_.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map),_.alphaMap&&(p.alphaMap.value=_.alphaMap),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);let b;_.map?b=_.map:_.alphaMap&&(b=_.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,_){_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap)}function c(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===nt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===nt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function u(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===nt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===nt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function h(p,_){p.roughness.value=_.roughness,p.metalness.value=_.metalness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===nt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===nt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),a.get(_).envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_,b){h(p,_),p.ior.value=_.ior,_.sheen>0&&(p.sheenTint.value.copy(_.sheenTint).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),p.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===nt&&p.clearcoatNormalScale.value.negate())),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap),p.attenuationDistance.value=_.attenuationDistance,p.attenuationTint.value.copy(_.attenuationTint)),p.specularIntensity.value=_.specularIntensity,p.specularTint.value.copy(_.specularTint),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap),_.specularTintMap&&(p.specularTintMap.value=_.specularTintMap)}function d(p,_){_.matcap&&(p.matcap.value=_.matcap),_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===nt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===nt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function m(p,_){_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}function g(p,_){_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),p.referencePosition.value.copy(_.referencePosition),p.nearDistance.value=_.nearDistance,p.farDistance.value=_.farDistance}function x(p,_){_.bumpMap&&(p.bumpMap.value=_.bumpMap,p.bumpScale.value=_.bumpScale,_.side===nt&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,p.normalScale.value.copy(_.normalScale),_.side===nt&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function h0(){const a=Qs("canvas");return a.style.display="block",a}function He(a={}){const e=a.canvas!==void 0?a.canvas:h0(),t=a.context!==void 0?a.context:null,n=a.alpha!==void 0?a.alpha:!1,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=xt,this.physicallyCorrectLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const g=this;let x=!1,p=0,_=0,b=null,y=-1,M=null;const S=new Ge,v=new Ge;let P=null,R=e.width,I=e.height,L=1,q=null,C=null;const N=new Ge(0,0,R,I),U=new Ge(0,0,R,I);let D=!1;const k=[],Z=new da;let ae=!1,ue=!1,te=null;const be=new de,W=new E,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return b===null?L:1}let G=t;function xe(T,O){for(let z=0;z<T.length;z++){const B=T[z],X=e.getContext(B,O);if(X!==null)return X}return null}try{const T={alpha:n,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",wt,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),G=xe(O,T),G===null)throw xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,oe,he,Ae,V,j,ee,me,re,A,w,H,$,K,le,Me,_e,we,ge,F,se,Q,ce;function fe(){Te=new N_(G),oe=new E_(G,Te,a),Te.init(oe),Q=new o0(G,Te,oe),he=new s0(G,Te,oe),k[0]=1029,Ae=new O_(G),V=new qx,j=new a0(G,Te,he,V,oe,Q,Ae),ee=new P_(g),me=new I_(g),re=new Pm(G,oe),ce=new S_(G,Te,re,oe),A=new D_(G,re,Ae,ce),w=new G_(G,A,re,Ae),ge=new k_(G,oe,j),Me=new L_(V),H=new Qx(g,ee,me,Te,oe,ce,Me),$=new u0(V),K=new Zx(V),le=new n0(Te,oe),we=new w_(g,ee,he,w,o),_e=new ku(g,w,oe),F=new A_(G,Te,Ae,oe),se=new U_(G,Te,Ae,oe),Ae.programs=H.programs,g.capabilities=oe,g.extensions=Te,g.properties=V,g.renderLists=K,g.shadowMap=_e,g.state=he,g.info=Ae}fe();const Pe=new c0(g,G);this.xr=Pe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(R,I,!1))},this.getSize=function(T){return T.set(R,I)},this.setSize=function(T,O,z){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,I=O,e.width=Math.floor(T*L),e.height=Math.floor(O*L),z!==!1&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(R*L,I*L).floor()},this.setDrawingBufferSize=function(T,O,z){R=T,I=O,L=z,e.width=Math.floor(T*z),e.height=Math.floor(O*z),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,O,z,B){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,O,z,B),he.viewport(S.copy(N).multiplyScalar(L).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,O,z,B){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,O,z,B),he.scissor(v.copy(U).multiplyScalar(L).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(T){he.setScissorTest(D=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){C=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(T,O,z){let B=0;(T===void 0||T)&&(B|=16384),(O===void 0||O)&&(B|=256),(z===void 0||z)&&(B|=1024),G.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),K.dispose(),le.dispose(),V.dispose(),ee.dispose(),me.dispose(),w.dispose(),ce.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",md),Pe.removeEventListener("sessionend",gd),te&&(te.dispose(),te=null),Ri.stop()};function Tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Ae.autoReset,O=_e.enabled,z=_e.autoUpdate,B=_e.needsUpdate,X=_e.type;fe(),Ae.autoReset=T,_e.enabled=O,_e.autoUpdate=z,_e.needsUpdate=B,_e.type=X}function hi(T){const O=T.target;O.removeEventListener("dispose",hi),tt(O)}function tt(T){In(T),V.remove(T)}function In(T){const O=V.get(T).programs;O!==void 0&&O.forEach(function(z){H.releaseProgram(z)})}function Nn(T,O){T.render(function(z){g.renderBufferImmediate(z,O)})}this.renderBufferImmediate=function(T,O){ce.initAttributes();const z=V.get(T);T.hasPositions&&!z.position&&(z.position=G.createBuffer()),T.hasNormals&&!z.normal&&(z.normal=G.createBuffer()),T.hasUvs&&!z.uv&&(z.uv=G.createBuffer()),T.hasColors&&!z.color&&(z.color=G.createBuffer());const B=O.getAttributes();T.hasPositions&&(G.bindBuffer(34962,z.position),G.bufferData(34962,T.positionArray,35048),ce.enableAttribute(B.position.location),G.vertexAttribPointer(B.position.location,3,5126,!1,0,0)),T.hasNormals&&(G.bindBuffer(34962,z.normal),G.bufferData(34962,T.normalArray,35048),ce.enableAttribute(B.normal.location),G.vertexAttribPointer(B.normal.location,3,5126,!1,0,0)),T.hasUvs&&(G.bindBuffer(34962,z.uv),G.bufferData(34962,T.uvArray,35048),ce.enableAttribute(B.uv.location),G.vertexAttribPointer(B.uv.location,2,5126,!1,0,0)),T.hasColors&&(G.bindBuffer(34962,z.color),G.bufferData(34962,T.colorArray,35048),ce.enableAttribute(B.color.location),G.vertexAttribPointer(B.color.location,3,5126,!1,0,0)),ce.disableUnusedAttributes(),G.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,O,z,B,X,Se){O===null&&(O=J);const ve=X.isMesh&&X.matrixWorld.determinant()<0,ye=yd(T,O,z,B,X);he.setMaterial(B,ve);let Le=z.index;const ze=z.attributes.position;if(Le===null){if(ze===void 0||ze.count===0)return}else if(Le.count===0)return;let Fe=1;B.wireframe===!0&&(Le=A.getWireframeAttribute(z),Fe=2),ce.setup(X,B,ye,z,Le);let De,Je=F;Le!==null&&(De=re.get(Le),Je=se,Je.setIndex(De));const Ci=Le!==null?Le.count:ze.count,Ue=z.drawRange.start*Fe,Ds=z.drawRange.count*Fe,Qe=Se!==null?Se.start*Fe:0,Ii=Se!==null?Se.count*Fe:1/0,Ni=Math.max(Ue,Qe),Di=Math.min(Ci,Ue+Ds,Qe+Ii)-1,fi=Math.max(0,Di-Ni+1);if(fi!==0){if(X.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*pe()),Je.setMode(1)):Je.setMode(4);else if(X.isLine){let $e=B.linewidth;$e===void 0&&($e=1),he.setLineWidth($e*pe()),X.isLineSegments?Je.setMode(1):X.isLineLoop?Je.setMode(2):Je.setMode(3)}else X.isPoints?Je.setMode(0):X.isSprite&&Je.setMode(4);if(X.isInstancedMesh)Je.renderInstances(Ni,fi,X.count);else if(z.isInstancedBufferGeometry){const $e=Math.min(z.instanceCount,z._maxInstanceCount);Je.renderInstances(Ni,fi,$e)}else Je.render(Ni,fi)}},this.compile=function(T,O){f=le.get(T),f.init(),m.push(f),T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(g.physicallyCorrectLights),T.traverse(function(z){const B=z.material;if(B)if(Array.isArray(B))for(let X=0;X<B.length;X++){const Se=B[X];lc(Se,T,z)}else lc(B,T,z)}),m.pop(),f=null};let oc=null;function bb(T){oc&&oc(T)}function md(){Ri.stop()}function gd(){Ri.start()}const Ri=new ru;Ri.setAnimationLoop(bb),typeof window!="undefined"&&Ri.setContext(window),this.setAnimationLoop=function(T){oc=T,Pe.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},Pe.addEventListener("sessionstart",md),Pe.addEventListener("sessionend",gd),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(O),O=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,b),f=le.get(T,m.length),f.init(),m.push(f),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(be),ue=this.localClippingEnabled,ae=Me.init(this.clippingPlanes,ue,O),h=K.get(T,d.length),h.init(),d.push(h),_d(T,O,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(q,C),ae===!0&&Me.beginShadows();const z=f.state.shadowsArray;if(_e.render(z,T,O),ae===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),we.render(h,T),f.setupLights(g.physicallyCorrectLights),O.isArrayCamera){const B=O.cameras;for(let X=0,Se=B.length;X<Se;X++){const ve=B[X];xd(h,T,ve,ve.viewport)}}else xd(h,T,O);b!==null&&(j.updateMultisampleRenderTarget(b),j.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(g,T,O),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1),ce.resetDefaultState(),y=-1,M=null,m.pop(),m.length>0?f=m[m.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function _d(T,O,z,B){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){B&&W.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);const ve=w.update(T),ye=T.material;ye.visible&&h.push(T,ve,ye,z,W.z,null)}}else if(T.isImmediateRenderObject)B&&W.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be),h.push(T,null,T.material,z,W.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ae.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ae.render.frame),!T.frustumCulled||Z.intersectsObject(T))){B&&W.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);const ve=w.update(T),ye=T.material;if(Array.isArray(ye)){const Le=ve.groups;for(let ze=0,Fe=Le.length;ze<Fe;ze++){const De=Le[ze],Je=ye[De.materialIndex];Je&&Je.visible&&h.push(T,ve,Je,z,W.z,De)}}else ye.visible&&h.push(T,ve,ye,z,W.z,null)}}const Se=T.children;for(let ve=0,ye=Se.length;ve<ye;ve++)_d(Se[ve],O,z,B)}function xd(T,O,z,B){const X=T.opaque,Se=T.transmissive,ve=T.transparent;f.setupLightsView(z),Se.length>0&&Mb(X,O,z),B&&he.viewport(S.copy(B)),X.length>0&&Ja(X,O,z),Se.length>0&&Ja(Se,O,z),ve.length>0&&Ja(ve,O,z)}function Mb(T,O,z){if(te===null){const ve=s===!0&&oe.isWebGL2===!0?Hc:Rt;te=new ve(1024,1024,{generateMipmaps:!0,type:Q.convert(ki)!==null?ki:Un,minFilter:zi,magFilter:st,wrapS:Pt,wrapT:Pt})}const B=g.getRenderTarget();g.setRenderTarget(te),g.clear();const X=g.toneMapping;g.toneMapping=pi,Ja(T,O,z),g.toneMapping=X,j.updateMultisampleRenderTarget(te),j.updateRenderTargetMipmap(te),g.setRenderTarget(B)}function Ja(T,O,z){const B=O.isScene===!0?O.overrideMaterial:null;for(let X=0,Se=T.length;X<Se;X++){const ve=T[X],ye=ve.object,Le=ve.geometry,ze=B===null?ve.material:B,Fe=ve.group;ye.layers.test(z.layers)&&Tb(ye,O,z,Le,ze,Fe)}}function Tb(T,O,z,B,X,Se){if(T.onBeforeRender(g,O,z,B,X,Se),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(g,O,z,B,T,Se),T.isImmediateRenderObject){const ve=yd(z,O,B,X,T);he.setMaterial(X),ce.reset(),Nn(T,ve)}else X.transparent===!0&&X.side===di?(X.side=nt,X.needsUpdate=!0,g.renderBufferDirect(z,O,B,X,T,Se),X.side=Ui,X.needsUpdate=!0,g.renderBufferDirect(z,O,B,X,T,Se),X.side=di):g.renderBufferDirect(z,O,B,X,T,Se);T.onAfterRender(g,O,z,B,X,Se)}function lc(T,O,z){O.isScene!==!0&&(O=J);const B=V.get(T),X=f.state.lights,Se=f.state.shadowsArray,ve=X.state.version,ye=H.getParameters(T,X.state,Se,O,z),Le=H.getProgramCacheKey(ye);let ze=B.programs;B.environment=T.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(T.isMeshStandardMaterial?me:ee).get(T.envMap||B.environment),ze===void 0&&(T.addEventListener("dispose",hi),ze=new Map,B.programs=ze);let Fe=ze.get(Le);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ve)return vd(T,ye),Fe}else ye.uniforms=H.getUniforms(T),T.onBuild(ye,g),T.onBeforeCompile(ye,g),Fe=H.acquireProgram(ye,Le),ze.set(Le,Fe),B.uniforms=ye.uniforms;const De=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Me.uniform),vd(T,ye),B.needsLights=Sb(T),B.lightsStateVersion=ve,B.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotShadowMatrix.value=X.state.spotShadowMatrix,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const Je=Fe.getUniforms(),Ci=Qn.seqWithValue(Je.seq,De);return B.currentProgram=Fe,B.uniformsList=Ci,Fe}function vd(T,O){const z=V.get(T);z.outputEncoding=O.outputEncoding,z.instancing=O.instancing,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents}function yd(T,O,z,B,X){O.isScene!==!0&&(O=J),j.resetTextureUnits();const Se=O.fog,ve=B.isMeshStandardMaterial?O.environment:null,ye=b===null?g.outputEncoding:b.texture.encoding,Le=(B.isMeshStandardMaterial?me:ee).get(B.envMap||ve),ze=B.vertexColors===!0&&!!z&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!B.normalMap&&!!z&&!!z.attributes.tangent,De=!!z&&!!z.morphAttributes.position,Je=!!z&&!!z.morphAttributes.normal,Ci=!!z&&!!z.morphAttributes.position?z.morphAttributes.position.length:0,Ue=V.get(B),Ds=f.state.lights;if(ae===!0&&(ue===!0||T!==M)){const on=T===M&&B.id===y;Me.setState(B,T,on)}let Qe=!1;B.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ds.state.version||Ue.outputEncoding!==ye||X.isInstancedMesh&&Ue.instancing===!1||!X.isInstancedMesh&&Ue.instancing===!0||X.isSkinnedMesh&&Ue.skinning===!1||!X.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Le||B.fog&&Ue.fog!==Se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Me.numPlanes||Ue.numIntersection!==Me.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Fe||Ue.morphTargets!==De||Ue.morphNormals!==Je||oe.isWebGL2===!0&&Ue.morphTargetsCount!==Ci)&&(Qe=!0):(Qe=!0,Ue.__version=B.version);let Ii=Ue.currentProgram;Qe===!0&&(Ii=lc(B,O,X));let Ni=!1,Di=!1,fi=!1;const $e=Ii.getUniforms(),Us=Ue.uniforms;if(he.useProgram(Ii.program)&&(Ni=!0,Di=!0,fi=!0),B.id!==y&&(y=B.id,Di=!0),Ni||M!==T){if($e.setValue(G,"projectionMatrix",T.projectionMatrix),oe.logarithmicDepthBuffer&&$e.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Di=!0,fi=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const on=$e.map.cameraPosition;on!==void 0&&on.setValue(G,W.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$e.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||X.isSkinnedMesh)&&$e.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){$e.setOptional(G,X,"bindMatrix"),$e.setOptional(G,X,"bindMatrixInverse");const on=X.skeleton;on&&(oe.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),$e.setValue(G,"boneTexture",on.boneTexture,j),$e.setValue(G,"boneTextureSize",on.boneTextureSize)):$e.setOptional(G,on,"boneMatrices"))}return!!z&&(z.morphAttributes.position!==void 0||z.morphAttributes.normal!==void 0)&&ge.update(X,z,B,Ii),(Di||Ue.receiveShadow!==X.receiveShadow)&&(Ue.receiveShadow=X.receiveShadow,$e.setValue(G,"receiveShadow",X.receiveShadow)),Di&&($e.setValue(G,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&wb(Us,fi),Se&&B.fog&&$.refreshFogUniforms(Us,Se),$.refreshMaterialUniforms(Us,B,L,I,te),Qn.upload(G,Ue.uniformsList,Us,j)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qn.upload(G,Ue.uniformsList,Us,j),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$e.setValue(G,"center",X.center),$e.setValue(G,"modelViewMatrix",X.modelViewMatrix),$e.setValue(G,"normalMatrix",X.normalMatrix),$e.setValue(G,"modelMatrix",X.matrixWorld),Ii}function wb(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Sb(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return b},this.setRenderTarget=function(T,O=0,z=0){b=T,p=O,_=z,T&&V.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T);let B=null,X=!1,Se=!1;if(T){const ye=T.texture;(ye.isDataTexture3D||ye.isDataTexture2DArray)&&(Se=!0);const Le=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(B=Le[O],X=!0):T.isWebGLMultisampleRenderTarget?B=V.get(T).__webglMultisampledFramebuffer:B=Le,S.copy(T.viewport),v.copy(T.scissor),P=T.scissorTest}else S.copy(N).multiplyScalar(L).floor(),v.copy(U).multiplyScalar(L).floor(),P=D;if(he.bindFramebuffer(36160,B)&&oe.drawBuffers){let ye=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Le=T.texture;if(k.length!==Le.length||k[0]!==36064){for(let ze=0,Fe=Le.length;ze<Fe;ze++)k[ze]=36064+ze;k.length=Le.length,ye=!0}}else(k.length!==1||k[0]!==36064)&&(k[0]=36064,k.length=1,ye=!0);else(k.length!==1||k[0]!==1029)&&(k[0]=1029,k.length=1,ye=!0);ye&&(oe.isWebGL2?G.drawBuffers(k):Te.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}if(he.viewport(S),he.scissor(v),he.setScissorTest(P),X){const ye=V.get(T.texture);G.framebufferTexture2D(36160,36064,34069+O,ye.__webglTexture,z)}else if(Se){const ye=V.get(T.texture),Le=O||0;G.framebufferTextureLayer(36160,36064,ye.__webglTexture,z||0,Le)}y=-1},this.readRenderTargetPixels=function(T,O,z,B,X,Se,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){he.bindFramebuffer(36160,ye);try{const Le=T.texture,ze=Le.format,Fe=Le.type;if(ze!==ct&&Q.convert(ze)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Fe===ki&&(Te.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==Un&&Q.convert(Fe)!==G.getParameter(35738)&&!(Fe===vn&&(oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?O>=0&&O<=T.width-B&&z>=0&&z<=T.height-X&&G.readPixels(O,z,B,X,Q.convert(ze),Q.convert(Fe),Se):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=b!==null?V.get(b).__webglFramebuffer:null;he.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(T,O,z=0){const B=Math.pow(2,-z),X=Math.floor(O.image.width*B),Se=Math.floor(O.image.height*B);let ve=Q.convert(O.format);oe.isWebGL2&&(ve===6407&&(ve=32849),ve===6408&&(ve=32856)),j.setTexture2D(O,0),G.copyTexImage2D(3553,z,ve,T.x,T.y,X,Se,0),he.unbindTexture()},this.copyTextureToTexture=function(T,O,z,B=0){const X=O.image.width,Se=O.image.height,ve=Q.convert(z.format),ye=Q.convert(z.type);j.setTexture2D(z,0),G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment),O.isDataTexture?G.texSubImage2D(3553,B,T.x,T.y,X,Se,ve,ye,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(3553,B,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,ve,O.mipmaps[0].data):G.texSubImage2D(3553,B,T.x,T.y,ve,ye,O.image),B===0&&z.generateMipmaps&&G.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,O,z,B,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,ye=T.max.z-T.min.z+1,Le=Q.convert(B.format),ze=Q.convert(B.type);let Fe;if(B.isDataTexture3D)j.setTexture3D(B,0),Fe=32879;else if(B.isDataTexture2DArray)j.setTexture2DArray(B,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment);const De=G.getParameter(3314),Je=G.getParameter(32878),Ci=G.getParameter(3316),Ue=G.getParameter(3315),Ds=G.getParameter(32877),Qe=z.isCompressedTexture?z.mipmaps[0]:z.image;G.pixelStorei(3314,Qe.width),G.pixelStorei(32878,Qe.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),z.isDataTexture||z.isDataTexture3D?G.texSubImage3D(Fe,X,O.x,O.y,O.z,Se,ve,ye,Le,ze,Qe.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,X,O.x,O.y,O.z,Se,ve,ye,Le,Qe.data)):G.texSubImage3D(Fe,X,O.x,O.y,O.z,Se,ve,ye,Le,ze,Qe),G.pixelStorei(3314,De),G.pixelStorei(32878,Je),G.pixelStorei(3316,Ci),G.pixelStorei(3315,Ue),G.pixelStorei(32877,Ds),X===0&&B.generateMipmaps&&G.generateMipmap(Fe),he.unbindTexture()},this.initTexture=function(T){j.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){p=0,_=0,b=null,he.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Hu extends He{}Hu.prototype.isWebGL1Renderer=!0;class _a{constructor(e,t=1,n=1e3){this.name="",this.color=new ie(e),this.near=t,this.far=n}clone(){return new _a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}_a.prototype.isFog=!0;class xa extends Ce{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}xa.prototype.isScene=!0;class mr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}mr.prototype.isInterleavedBuffer=!0;const et=new E;class gr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}gr.prototype.isInterleavedBufferAttribute=!0;class Vu extends ot{constructor(e){super();this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Vu.prototype.isSpriteMaterial=!0;let _r;const as=new E,xr=new E,vr=new E,yr=new Y,os=new Y,Wu=new de,va=new E,ls=new E,ya=new E,Xu=new Y,Qo=new Y,Yu=new Y;class f0 extends Ce{constructor(e){super();if(this.type="Sprite",_r===void 0){_r=new ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mr(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new gr(n,3,0,!1)),_r.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=_r,this.material=e!==void 0?e:new Vu,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),Wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-vr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;ba(va.set(-.5,-.5,0),vr,s,xr,i,r),ba(ls.set(.5,-.5,0),vr,s,xr,i,r),ba(ya.set(.5,.5,0),vr,s,xr,i,r),Xu.set(0,0),Qo.set(1,0),Yu.set(1,1);let o=e.ray.intersectTriangle(va,ls,ya,!1,as);if(o===null&&(ba(ls.set(-.5,.5,0),vr,s,xr,i,r),Qo.set(0,1),o=e.ray.intersectTriangle(va,ya,ls,!1,as),o===null))return;const l=e.ray.origin.distanceTo(as);l<e.near||l>e.far||t.push({distance:l,point:as.clone(),uv:it.getUV(as,va,ls,ya,Xu,Qo,Yu,new Y),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}f0.prototype.isSprite=!0;function ba(a,e,t,n,i,r){yr.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(os.x=r*yr.x-i*yr.y,os.y=i*yr.x+r*yr.y):os.copy(yr),a.copy(e),a.x+=os.x,a.y+=os.y,a.applyMatrix4(Wu)}const Qu=new E,qu=new Ge,ju=new Ge,d0=new E,Zu=new de;class qo extends Oe{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new de,this.bindMatrixInverse=new de}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ge,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;qu.fromBufferAttribute(i.attributes.skinIndex,e),ju.fromBufferAttribute(i.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=ju.getComponent(r);if(s!==0){const o=qu.getComponent(r);Zu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(d0.copy(Qu).applyMatrix4(Zu),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}qo.prototype.isSkinnedMesh=!0;class jo extends Ce{constructor(){super();this.type="Bone"}}jo.prototype.isBone=!0;class Ju extends at{constructor(e=null,t=1,n=1,i,r,s,o,l,c=st,u=st,h,f){super(null,s,o,l,c,u,i,r,h,f);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ju.prototype.isDataTexture=!0;const $u=new de,p0=new de;class Zo{constructor(e=[],t=[]){this.uuid=Xt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new de)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new de;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:p0;$u.multiplyMatrices(o,t[r]),$u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Zo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=zc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,ct,vn);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new jo),this.bones.push(s),this.boneInverses.push(new de().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Jo extends Ke{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Jo.prototype.isInstancedBufferAttribute=!0;const Ku=new de,eh=new de,Ma=[],cs=new Oe;class m0 extends Oe{constructor(e,t,n){super(e,t);this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ku),eh.multiplyMatrices(n,Ku),cs.matrixWorld=eh,cs.raycast(e,Ma);for(let s=0,o=Ma.length;s<o;s++){const l=Ma[s];l.instanceId=r,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}m0.prototype.isInstancedMesh=!0;class br extends ot{constructor(e){super();this.type="LineBasicMaterial",this.color=new ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}br.prototype.isLineBasicMaterial=!0;const th=new E,nh=new E,ih=new de,$o=new Zi,Ta=new vi;class wa extends Ce{constructor(e=new ke,t=new br){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)th.fromBufferAttribute(t,i-1),nh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=th.distanceTo(nh);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;ih.copy(i).invert(),$o.copy(e.ray).applyMatrix4(ih);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,u=new E,h=new E,f=new E,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,x=n.attributes.position;if(m!==null){const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let b=p,y=_-1;b<y;b+=d){const M=m.getX(b),S=m.getX(b+1);if(c.fromBufferAttribute(x,M),u.fromBufferAttribute(x,S),$o.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),_=Math.min(x.count,s.start+s.count);for(let b=p,y=_-1;b<y;b+=d){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),$o.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}wa.prototype.isLine=!0;const rh=new E,sh=new E;class Sa extends wa{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rh.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(sh);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Sa.prototype.isLineSegments=!0;class ah extends wa{constructor(e,t){super(e,t);this.type="LineLoop"}}ah.prototype.isLineLoop=!0;class Ko extends ot{constructor(e){super();this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ko.prototype.isPointsMaterial=!0;const oh=new de,el=new Zi,Aa=new vi,Ea=new E;class lh extends Ce{constructor(e=new ke,t=new Ko){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;oh.copy(i).invert(),el.copy(e.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=f,g=d;m<g;m++){const x=c.getX(m);Ea.fromBufferAttribute(h,x),ch(Ea,x,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let m=f,g=d;m<g;m++)Ea.fromBufferAttribute(h,m),ch(Ea,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}lh.prototype.isPoints=!0;function ch(a,e,t,n,i,r,s){const o=el.distanceSqToPoint(a);if(o<t){const l=new E;el.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class g0 extends at{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c);this.format=o!==void 0?o:mi,this.minFilter=s!==void 0?s:lt,this.magFilter=r!==void 0?r:lt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}g0.prototype.isVideoTexture=!0;class _0 extends at{constructor(e,t,n,i,r,s,o,l,c,u,h,f){super(null,s,o,l,c,u,i,r,h,f);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}_0.prototype.isCompressedTexture=!0;class x0 extends at{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c);this.needsUpdate=!0}}x0.prototype.isCanvasTexture=!0;class v0 extends at{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gi&&(n=Hs),n===void 0&&u===Qr&&(n=Yr);super(null,i,r,s,o,l,u,n,c);this.image={width:e,height:t},this.magFilter=o!==void 0?o:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1}}v0.prototype.isDepthTexture=!0,new E,new E,new E,new it;class qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(s-u)/f;return(i+d)/(r-1)}getTangent(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new Y:new E);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],s=[],o=new E,l=new de;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new E)}r[0]=new E,s[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ft(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ft(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),s[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class La extends qt{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Y,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}La.prototype.isEllipseCurve=!0;class uh extends La{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s);this.type="ArcCurve"}}uh.prototype.isArcCurve=!0;function tl(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,u,h){let f=(s-r)/c-(o-r)/(c+u)+(o-s)/u,d=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,d*=u,i(s,o,f,d)},calc:function(r){const s=r*r,o=s*r;return a+e*r+t*s+n*o}}}const Pa=new E,nl=new tl,il=new tl,rl=new tl;class hh extends qt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Pa.subVectors(i[0],i[1]).add(i[0]),c=Pa);const h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Pa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),nl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,g,x),il.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,g,x),rl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,g,x)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),il.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),rl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(nl.calc(l),il.calc(l),rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}hh.prototype.isCatmullRomCurve3=!0;function fh(a,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function y0(a,e){const t=1-a;return t*t*e}function b0(a,e){return 2*(1-a)*a*e}function M0(a,e){return a*a*e}function us(a,e,t,n){return y0(a,e)+b0(a,t)+M0(a,n)}function T0(a,e){const t=1-a;return t*t*t*e}function w0(a,e){const t=1-a;return 3*t*t*a*e}function S0(a,e){return 3*(1-a)*a*a*e}function A0(a,e){return a*a*a*e}function hs(a,e,t,n,i){return T0(a,e)+w0(a,t)+S0(a,n)+A0(a,i)}class sl extends qt{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(hs(e,i.x,r.x,s.x,o.x),hs(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}sl.prototype.isCubicBezierCurve=!0;class dh extends qt{constructor(e=new E,t=new E,n=new E,i=new E){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(hs(e,i.x,r.x,s.x,o.x),hs(e,i.y,r.y,s.y,o.y),hs(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dh.prototype.isCubicBezierCurve3=!0;class Fa extends qt{constructor(e=new Y,t=new Y){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Fa.prototype.isLineCurve=!0;class E0 extends qt{constructor(e=new E,t=new E){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class al extends qt{constructor(e=new Y,t=new Y,n=new Y){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(us(e,i.x,r.x,s.x),us(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}al.prototype.isQuadraticBezierCurve=!0;class ph extends qt{constructor(e=new E,t=new E,n=new E){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(us(e,i.x,r.x,s.x),us(e,i.y,r.y,s.y),us(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ph.prototype.isQuadraticBezierCurve3=!0;class ol extends qt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(fh(o,l.x,c.x,u.x,h.x),fh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}ol.prototype.isSplineCurve=!0;var mh=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:hh,CubicBezierCurve:sl,CubicBezierCurve3:dh,EllipseCurve:La,LineCurve:Fa,LineCurve3:E0,QuadraticBezierCurve:al,QuadraticBezierCurve3:ph,SplineCurve:ol});class L0 extends qt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Fa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mh[i.type]().fromJSON(i))}return this}}class ll extends L0{constructor(e){super();this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fa(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new al(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const o=new sl(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,o,l),this}absellipse(e,t,n,i,r,s,o,l){const c=new La(e,t,n,i,r,s,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fs extends ll{constructor(e){super(e);this.uuid=Xt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ll().fromJSON(i))}return this}}const P0={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=gh(a,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,l,c,u,h,f,d;if(n&&(r=N0(a,e,r,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let m=t;m<i;m+=t)h=a[m],f=a[m+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?1/d:0}return ds(r,s,t,o,l,d),s}};function gh(a,e,t,n,i){let r,s;if(i===X0(a,e,t,n)>0)for(r=e;r<t;r+=n)s=vh(r,a[r],a[r+1],s);else for(r=t-n;r>=e;r-=n)s=vh(r,a[r],a[r+1],s);return s&&Ra(s,s.next)&&(ms(s),s=s.next),s}function jn(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(Ra(t,t.next)||je(t.prev,t,t.next)===0)){if(ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ds(a,e,t,n,i,r,s){if(!a)return;!s&&r&&z0(a,n,i,r);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,r?R0(a,n,i,r):F0(a)){e.push(l.i/t),e.push(a.i/t),e.push(c.i/t),ms(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=C0(jn(a),e,t),ds(a,e,t,n,i,r,2)):s===2&&I0(a,e,t,n,i,r):ds(jn(a),e,t,n,i,r,1);break}}}function F0(a){const e=a.prev,t=a,n=a.next;if(je(e,t,n)>=0)return!1;let i=a.next.next;for(;i!==a.prev;){if(Mr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&je(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function R0(a,e,t,n){const i=a.prev,r=a,s=a.next;if(je(i,r,s)>=0)return!1;const o=i.x<r.x?i.x<s.x?i.x:s.x:r.x<s.x?r.x:s.x,l=i.y<r.y?i.y<s.y?i.y:s.y:r.y<s.y?r.y:s.y,c=i.x>r.x?i.x>s.x?i.x:s.x:r.x>s.x?r.x:s.x,u=i.y>r.y?i.y>s.y?i.y:s.y:r.y>s.y?r.y:s.y,h=cl(o,l,e,t,n),f=cl(c,u,e,t,n);let d=a.prevZ,m=a.nextZ;for(;d&&d.z>=h&&m&&m.z<=f;){if(d!==a.prev&&d!==a.next&&Mr(i.x,i.y,r.x,r.y,s.x,s.y,d.x,d.y)&&je(d.prev,d,d.next)>=0||(d=d.prevZ,m!==a.prev&&m!==a.next&&Mr(i.x,i.y,r.x,r.y,s.x,s.y,m.x,m.y)&&je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=h;){if(d!==a.prev&&d!==a.next&&Mr(i.x,i.y,r.x,r.y,s.x,s.y,d.x,d.y)&&je(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=f;){if(m!==a.prev&&m!==a.next&&Mr(i.x,i.y,r.x,r.y,s.x,s.y,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function C0(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!Ra(i,r)&&_h(i,n,n.next,r)&&ps(i,r)&&ps(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),ms(n),ms(n.next),n=a=r),n=n.next}while(n!==a);return jn(n)}function I0(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&H0(s,o)){let l=xh(s,o);s=jn(s,s.next),l=jn(l,l.next),ds(s,e,t,n,i,r),ds(l,e,t,n,i,r);return}o=o.next}s=s.next}while(s!==a)}function N0(a,e,t,n){const i=[];let r,s,o,l,c;for(r=0,s=e.length;r<s;r++)o=e[r]*n,l=r<s-1?e[r+1]*n:a.length,c=gh(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(G0(c));for(i.sort(D0),r=0;r<i.length;r++)U0(i[r],t),t=jn(t,t.next);return t}function D0(a,e){return a.x-e.x}function U0(a,e){if(e=O0(a,e),e){const t=xh(e,a);jn(e,e.next),jn(t,t.next)}}function O0(a,e){let t=e;const n=a.x,i=a.y;let r=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(n===r)return s;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&Mr(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ps(t,a)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&B0(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function B0(a,e){return je(a.prev,a,e.prev)<0&&je(e.next,a,a.next)<0}function z0(a,e,t,n){let i=a;do i.z===null&&(i.z=cl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,k0(i)}function k0(a){let e,t,n,i,r,s,o,l,c=1;do{for(t=a,a=null,r=null,s=0;t;){for(s++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return a}function cl(a,e,t,n,i){return a=32767*(a-t)*i,e=32767*(e-n)*i,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function G0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Mr(a,e,t,n,i,r,s,o){return(i-s)*(e-o)-(a-s)*(r-o)>=0&&(a-s)*(n-o)-(t-s)*(e-o)>=0&&(t-s)*(r-o)-(i-s)*(n-o)>=0}function H0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!V0(a,e)&&(ps(a,e)&&ps(e,a)&&W0(a,e)&&(je(a.prev,a,e.prev)||je(a,e.prev,e))||Ra(a,e)&&je(a.prev,a,a.next)>0&&je(e.prev,e,e.next)>0)}function je(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Ra(a,e){return a.x===e.x&&a.y===e.y}function _h(a,e,t,n){const i=Ia(je(a,e,t)),r=Ia(je(a,e,n)),s=Ia(je(t,n,a)),o=Ia(je(t,n,e));return!!(i!==r&&s!==o||i===0&&Ca(a,t,e)||r===0&&Ca(a,n,e)||s===0&&Ca(t,a,n)||o===0&&Ca(t,e,n))}function Ca(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Ia(a){return a>0?1:a<0?-1:0}function V0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&_h(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function ps(a,e){return je(a.prev,a,a.next)<0?je(a,e,a.next)>=0&&je(a,a.prev,e)>=0:je(a,e,a.prev)<0||je(a,a.next,e)<0}function W0(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function xh(a,e){const t=new ul(a.i,a.x,a.y),n=new ul(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vh(a,e,t,n){const i=new ul(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ms(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ul(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X0(a,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}class Zn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yh(e),bh(n,e);let s=e.length;t.forEach(yh);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,bh(n,t[l]);const o=P0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function bh(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Tr extends ke{constructor(e=new fs([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Y0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,y=!1,M,S,v,P;p&&(b=p.getSpacedPoints(u),y=!0,f=!1,M=p.computeFrenetFrames(u,!1),S=new E,v=new E,P=new E),f||(x=0,d=0,m=0,g=0);const R=o.extractPoints(c);let I=R.shape;const L=R.holes;if(!Zn.isClockWise(I)){I=I.reverse();for(let V=0,j=L.length;V<j;V++){const ee=L[V];Zn.isClockWise(ee)&&(L[V]=ee.reverse())}}const C=Zn.triangulateShape(I,L),N=I;for(let V=0,j=L.length;V<j;V++){const ee=L[V];I=I.concat(ee)}function U(V,j,ee){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(ee).add(V)}const D=I.length,k=C.length;function Z(V,j,ee){let me,re,A;const w=V.x-j.x,H=V.y-j.y,$=ee.x-V.x,K=ee.y-V.y,le=w*w+H*H,Me=w*K-H*$;if(Math.abs(Me)>Number.EPSILON){const _e=Math.sqrt(le),we=Math.sqrt($*$+K*K),ge=j.x-H/_e,F=j.y+w/_e,se=ee.x-K/we,Q=ee.y+$/we,ce=((se-ge)*K-(Q-F)*$)/(w*K-H*$);me=ge+w*ce-V.x,re=F+H*ce-V.y;const fe=me*me+re*re;if(fe<=2)return new Y(me,re);A=Math.sqrt(fe/2)}else{let _e=!1;w>Number.EPSILON?$>Number.EPSILON&&(_e=!0):w<-Number.EPSILON?$<-Number.EPSILON&&(_e=!0):Math.sign(H)===Math.sign(K)&&(_e=!0),_e?(me=-H,re=w,A=Math.sqrt(le)):(me=w,re=H,A=Math.sqrt(le/2))}return new Y(me/A,re/A)}const ae=[];for(let V=0,j=N.length,ee=j-1,me=V+1;V<j;V++,ee++,me++)ee===j&&(ee=0),me===j&&(me=0),ae[V]=Z(N[V],N[ee],N[me]);const ue=[];let te,be=ae.concat();for(let V=0,j=L.length;V<j;V++){const ee=L[V];te=[];for(let me=0,re=ee.length,A=re-1,w=me+1;me<re;me++,A++,w++)A===re&&(A=0),w===re&&(w=0),te[me]=Z(ee[me],ee[A],ee[w]);ue.push(te),be=be.concat(te)}for(let V=0;V<x;V++){const j=V/x,ee=d*Math.cos(j*Math.PI/2),me=m*Math.sin(j*Math.PI/2)+g;for(let re=0,A=N.length;re<A;re++){const w=U(N[re],ae[re],me);xe(w.x,w.y,-ee)}for(let re=0,A=L.length;re<A;re++){const w=L[re];te=ue[re];for(let H=0,$=w.length;H<$;H++){const K=U(w[H],te[H],me);xe(K.x,K.y,-ee)}}}const W=m+g;for(let V=0;V<D;V++){const j=f?U(I[V],be[V],W):I[V];y?(v.copy(M.normals[0]).multiplyScalar(j.x),S.copy(M.binormals[0]).multiplyScalar(j.y),P.copy(b[0]).add(v).add(S),xe(P.x,P.y,P.z)):xe(j.x,j.y,0)}for(let V=1;V<=u;V++)for(let j=0;j<D;j++){const ee=f?U(I[j],be[j],W):I[j];y?(v.copy(M.normals[V]).multiplyScalar(ee.x),S.copy(M.binormals[V]).multiplyScalar(ee.y),P.copy(b[V]).add(v).add(S),xe(P.x,P.y,P.z)):xe(ee.x,ee.y,h/u*V)}for(let V=x-1;V>=0;V--){const j=V/x,ee=d*Math.cos(j*Math.PI/2),me=m*Math.sin(j*Math.PI/2)+g;for(let re=0,A=N.length;re<A;re++){const w=U(N[re],ae[re],me);xe(w.x,w.y,h+ee)}for(let re=0,A=L.length;re<A;re++){const w=L[re];te=ue[re];for(let H=0,$=w.length;H<$;H++){const K=U(w[H],te[H],me);y?xe(K.x,K.y+b[u-1].y,b[u-1].x+ee):xe(K.x,K.y,h+ee)}}}J(),pe();function J(){const V=i.length/3;if(f){let j=0,ee=D*j;for(let me=0;me<k;me++){const re=C[me];Te(re[2]+ee,re[1]+ee,re[0]+ee)}j=u+x*2,ee=D*j;for(let me=0;me<k;me++){const re=C[me];Te(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let j=0;j<k;j++){const ee=C[j];Te(ee[2],ee[1],ee[0])}for(let j=0;j<k;j++){const ee=C[j];Te(ee[0]+D*u,ee[1]+D*u,ee[2]+D*u)}}n.addGroup(V,i.length/3-V,0)}function pe(){const V=i.length/3;let j=0;G(N,j),j+=N.length;for(let ee=0,me=L.length;ee<me;ee++){const re=L[ee];G(re,j),j+=re.length}n.addGroup(V,i.length/3-V,1)}function G(V,j){let ee=V.length;for(;--ee>=0;){const me=ee;let re=ee-1;re<0&&(re=V.length-1);for(let A=0,w=u+x*2;A<w;A++){const H=D*A,$=D*(A+1),K=j+me+H,le=j+re+H,Me=j+re+$,_e=j+me+$;oe(K,le,Me,_e)}}}function xe(V,j,ee){l.push(V),l.push(j),l.push(ee)}function Te(V,j,ee){he(V),he(j),he(ee);const me=i.length/3,re=_.generateTopUV(n,i,me-3,me-2,me-1);Ae(re[0]),Ae(re[1]),Ae(re[2])}function oe(V,j,ee,me){he(V),he(j),he(me),he(j),he(ee),he(me);const re=i.length/3,A=_.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Ae(A[0]),Ae(A[1]),Ae(A[3]),Ae(A[1]),Ae(A[2]),Ae(A[3])}function he(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2])}function Ae(V){r.push(V.x),r.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mh[i.type]().fromJSON(i)),new Tr(n,e.options)}}const Y0={generateTopUV:function(a,e,t,n,i){const r=e[t*3],s=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Y(r,s),new Y(o,l),new Y(c,u)]},generateSideWallUV:function(a,e,t,n,i,r){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],g=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new Y(s,1-l),new Y(c,1-h),new Y(f,1-m),new Y(g,1-p)]:[new Y(o,1-l),new Y(u,1-h),new Y(d,1-m),new Y(x,1-p)]}};function Q0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const r=a[n];t.shapes.push(r.uuid)}else t.shapes.push(a.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hl extends ke{constructor(e=new fs([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(s,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=m.length;x<p;x++){const _=m[x];Zn.isClockWise(_)===!0&&(m[x]=_.reverse())}const g=Zn.triangulateShape(d,m);for(let x=0,p=m.length;x<p;x++){const _=m[x];d=d.concat(_)}for(let x=0,p=d.length;x<p;x++){const _=d[x];i.push(_.x,_.y,0),r.push(0,0,1),s.push(_.x,_.y)}for(let x=0,p=g.length;x<p;x++){const _=g[x],b=_[0]+h,y=_[1]+h,M=_[2]+h;n.push(b,y,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return q0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new hl(n,e.curveSegments)}}function q0(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,n=a.length;t<n;t++){const i=a[t];e.shapes.push(i.uuid)}else e.shapes.push(a.uuid);return e}class fl extends ke{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new E,f=new E,d=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const _=[],b=p/n;let y=0;p==0&&s==0?y=.5/t:p==n&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const S=M/t;h.x=-e*Math.cos(i+S*r)*Math.sin(s+b*o),h.y=e*Math.cos(s+b*o),h.z=e*Math.sin(i+S*r)*Math.sin(s+b*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),x.push(S+y,1-b),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const b=u[p][_+1],y=u[p][_],M=u[p+1][_],S=u[p+1][_+1];(p!==0||s>0)&&d.push(b,y,S),(p!==n-1||l<Math.PI)&&d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(x,2))}static fromJSON(e){return new fl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class j0 extends ot{constructor(e){super();this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}j0.prototype.isShadowMaterial=!0;class Jn extends ot{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Jn.prototype.isMeshStandardMaterial=!0;class wr extends Jn{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new ie(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new ie(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenTint.copy(e.sheenTint),this.sheenRoughness=e.sheenRoughness,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}wr.prototype.isMeshPhysicalMaterial=!0;class Z0 extends ot{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ie(16777215),this.specular=new ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Z0.prototype.isMeshPhongMaterial=!0;class J0 extends ot{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}J0.prototype.isMeshToonMaterial=!0;class $0 extends ot{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}$0.prototype.isMeshNormalMaterial=!0;class Mh extends ot{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Mh.prototype.isMeshLambertMaterial=!0;class K0 extends ot{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}K0.prototype.isMeshMatcapMaterial=!0;class ev extends br{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}ev.prototype.isLineDashedMaterial=!0;const qe={arraySlice:function(a,e,t){return qe.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i},flattenJSON:function(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)},subclip:function(a,e,t,n,i=30){const r=a.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*i;if(!(m<t||m>=n)){h.push(c.times[d]);for(let g=0;g<u;++g)f.push(c.values[d*u+g])}}h.length!==0&&(c.times=qe.convertArray(h,c.times.constructor),c.values=qe.convertArray(f,c.values.constructor),s.push(c))}r.tracks=s;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(a,e=0,t=a,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=o.times.length-1;let g;if(r<=o.times[0]){const p=u,_=h-u;g=qe.arraySlice(o.values,p,_)}else if(r>=o.times[m]){const p=m*h+u,_=p+h-u;g=qe.arraySlice(o.values,p,_)}else{const p=o.createInterpolant(),_=u,b=h-u;p.evaluate(r),g=qe.arraySlice(p.resultBuffer,_,b)}l==="quaternion"&&new At().fromArray(g).normalize().conjugate().toArray(g);const x=c.times.length;for(let p=0;p<x;++p){const _=p*d+f;if(l==="quaternion")At.multiplyQuaternionsFlat(c.values,_,g,0,c.values,_);else{const b=d-f*2;for(let y=0;y<b;++y)c.values[_+y]-=g[y]}}}return a.blendMode=Ic,a}};class An{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}An.prototype.beforeStart_=An.prototype.copySampleValue_,An.prototype.afterEnd_=An.prototype.copySampleValue_;class tv extends An{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Wi:r=e,o=2*t-n;break;case Ws:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wi:s=e,l=2*n-t;break;case Ws:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),g=m*m,x=g*m,p=-f*x+2*f*g-f*m,_=(1+f)*x+(-1.5-2*f)*g+(-.5+f)*m+1,b=(-1-d)*x+(1.5+d)*g+.5*m,y=d*x-d*g;for(let M=0;M!==o;++M)r[M]=p*s[u+M]+_*s[c+M]+b*s[l+M]+y*s[h+M];return r}}class Th extends An{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class nv extends An{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qe.convertArray(t,this.TimeBufferType),this.values=qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qe.convertArray(e.times,Array),values:qe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return so}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=qe.arraySlice(n,r,s),this.values=qe.arraySlice(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&qe.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=qe.arraySlice(this.times),t=qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===so,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const g=t[h+m];if(g!==t[f+m]||g!==t[d+m]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=qe.arraySlice(e,0,s),this.values=qe.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=qe.arraySlice(this.times,0),t=qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}un.prototype.TimeBufferType=Float32Array,un.prototype.ValueBufferType=Float32Array,un.prototype.DefaultInterpolation=Hi;class Sr extends un{}Sr.prototype.ValueTypeName="bool",Sr.prototype.ValueBufferType=Array,Sr.prototype.DefaultInterpolation=qr,Sr.prototype.InterpolantFactoryMethodLinear=void 0,Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class wh extends un{}wh.prototype.ValueTypeName="color";class gs extends un{}gs.prototype.ValueTypeName="number";class iv extends An{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)At.slerpFlat(r,0,s,c-o,s,c,l);return r}}class bi extends un{InterpolantFactoryMethodLinear(e){return new iv(this.times,this.values,this.getValueSize(),e)}}bi.prototype.ValueTypeName="quaternion",bi.prototype.DefaultInterpolation=Hi,bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends un{}Ar.prototype.ValueTypeName="string",Ar.prototype.ValueBufferType=Array,Ar.prototype.DefaultInterpolation=qr,Ar.prototype.InterpolantFactoryMethodLinear=void 0,Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends un{}_s.prototype.ValueTypeName="vector";class dl{constructor(e,t=-1,n,i=ao){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(sv(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=qe.getKeyframeOrder(l);l=qe.sortedArray(l,1,u),c=qe.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,g){if(d.length!==0){const x=[],p=[];qe.flattenJSON(d,x,p,m),x.length!==0&&g.push(new h(f,x,p))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let g=0;g<f[m].morphTargets.length;g++)d[f[m].morphTargets[g]]=-1;for(const g in d){const x=[],p=[];for(let _=0;_!==f[m].morphTargets.length;++_){const b=f[m];x.push(b.time),p.push(b.morphTarget===g?1:0)}i.push(new gs(".morphTargetInfluence["+g+"]",x,p))}l=d.length*(s||1)}else{const d=".bones["+t[h].name+"]";n(_s,d+".position",f,"pos",i),n(bi,d+".quaternion",f,"rot",i),n(_s,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return wh;case"quaternion":return bi;case"bool":case"boolean":return Sr;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function sv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rv(a.type);if(a.times===void 0){const t=[],n=[];qe.flattenJSON(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Er={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class av{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const ov=new av;class En{constructor(e){this.manager=e!==void 0?e:ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const sn={};class pl extends En{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Er.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(sn[e]!==void 0){sn[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const u=l[1],h=!!l[2];let f=l[3];f=decodeURIComponent(f),h&&(f=atob(f));try{let d;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const g=new Uint8Array(f.length);for(let p=0;p<f.length;p++)g[p]=f.charCodeAt(p);m==="blob"?d=new Blob([g.buffer],{type:u}):d=g.buffer;break;case"document":d=new DOMParser().parseFromString(f,u);break;case"json":d=JSON.parse(f);break;default:d=f;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{sn[e]=[],sn[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){const h=this.response,f=sn[e];if(delete sn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Er.add(e,h);for(let d=0,m=f.length;d<m;d++){const g=f[d];g.onLoad&&g.onLoad(h)}r.manager.itemEnd(e)}else{for(let d=0,m=f.length;d<m;d++){const g=f[d];g.onError&&g.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){const h=sn[e];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onProgress&&m.onProgress(u)}},!1),c.addEventListener("error",function(u){const h=sn[e];delete sn[e];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){const h=sn[e];delete sn[e];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sh extends En{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Er.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Qs("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class lv extends En{constructor(e){super(e)}load(e,t,n,i){const r=new ha,s=new Sh(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class ml extends En{constructor(e){super(e)}load(e,t,n,i){const r=new at,s=new Sh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class hn extends Ce{constructor(e,t=1){super();this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}hn.prototype.isLight=!0;class cv extends hn{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.groundColor=new ie(t)}copy(e){return hn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}cv.prototype.isHemisphereLight=!0;const Ah=new de,Eh=new E,Lh=new E;class gl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ph extends gl{constructor(){super(new yt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Jr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ph.prototype.isSpotLightShadow=!0;class Fh extends hn{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t);this.type="SpotLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Fh.prototype.isSpotLight=!0;const Rh=new de,xs=new E,_l=new E;class Ch extends gl{constructor(){super(new yt(90,1,.5,500));this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(xs),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}}Ch.prototype.isPointLightShadow=!0;class Na extends hn{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Na.prototype.isPointLight=!0;class Ih extends gl{constructor(){super(new cr(-5,5,5,-5,.5,500))}}Ih.prototype.isDirectionalLightShadow=!0;class xl extends hn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=new Ce,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}xl.prototype.isDirectionalLight=!0;class uv extends hn{constructor(e,t){super(e,t);this.type="AmbientLight"}}uv.prototype.isAmbientLight=!0;class hv extends hn{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}hv.prototype.isRectAreaLight=!0;class Nh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Nh.prototype.isSphericalHarmonics3=!0;class vl extends hn{constructor(e=new Nh,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}vl.prototype.isLightProbe=!0;class Lr{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class fv extends ke{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}fv.prototype.isInstancedBufferGeometry=!0;class Dh extends En{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Er.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Er.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}Dh.prototype.isImageBitmapLoader=!0;let Da;const dv={getContext:function(){return Da===void 0&&(Da=new(window.AudioContext||window.webkitAudioContext)),Da},setContext:function(a){Da=a}};class pv extends En{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new pl(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0);dv.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class mv extends vl{constructor(e,t,n=1){super(void 0,n);const i=new ie().set(e),r=new ie().set(t),s=new E(i.r,i.g,i.b),o=new E(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}}mv.prototype.isHemisphereLightProbe=!0;class gv extends vl{constructor(e,t=1){super(void 0,t);const n=new ie().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}gv.prototype.isAmbientLightProbe=!0;class Uh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oh(){return(typeof performance=="undefined"?Date:performance).now()}class _v extends Ce{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class xv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){At.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;At.multiplyQuaternionsFlat(e,s,e,t,e,n),At.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*s+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}}const yl="\\[\\]\\.:\\/",vv=new RegExp("["+yl+"]","g"),bl="[^"+yl+"]",yv="[^"+yl.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",bl),Mv=/(WCOD+)?/.source.replace("WCOD",yv),Tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Sv=new RegExp("^"+bv+Mv+Tv+wv+"$"),Av=["material","materials","bones"];class Ev{constructor(e,t,n){const i=n||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){const t=Sv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=Ev,Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray],Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,o=new Array(s),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ic:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulateAdditive(o);break;case ao:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===Vp;if(e===0)return r===-1?i:s&&(r&1)==1?t-i:i;if(n===Gp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Wi,i.endingEnd=Wi):(e?i.endingStart=this.zeroSlopeAtStart?Wi:Vi:i.endingStart=Ws,t?i.endingEnd=this.zeroSlopeAtEnd?Wi:Vi:i.endingEnd=Ws)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}class Pv extends On{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let m=u[d];if(m!==void 0)s[h]=m;else{if(m=s[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;m=new xv(Be.create(n,d,g),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),s[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Th(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?dl.findByName(i,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=ao),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new Lv(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?dl.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Pv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Fv extends mr{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Fv.prototype.isInstancedInterleavedBuffer=!0;class Rv extends Ce{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Rv.prototype.isImmediateRenderObject=!0;const $n=new E,Ua=new de,Ml=new de;class Cv extends Sa{constructor(e){const t=Bh(e),n=new ke,i=[],r=[],s=new ie(0,0,1),o=new ie(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ye(i,3)),n.setAttribute("color",new Ye(r,3));const l=new br({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ml.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Ua.multiplyMatrices(Ml,o.matrixWorld),$n.setFromMatrixPosition(Ua),i.setXYZ(s,$n.x,$n.y,$n.z),Ua.multiplyMatrices(Ml,o.parent.matrixWorld),$n.setFromMatrixPosition(Ua),i.setXYZ(s+1,$n.x,$n.y,$n.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Bh(a){const e=[];a&&a.isBone&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,Bh(a.children[t]));return e}class Iv extends Sa{constructor(e=10,t=10,n=4473924,i=8947848){n=new ie(n),i=new ie(i);const r=t/2,s=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=t;f++,m+=s){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const g=f===r?n:i;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new ke;u.setAttribute("position",new Ye(l,3)),u.setAttribute("color",new Ye(c,3));const h=new br({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}}const Nv=new Float32Array(1);new Int32Array(Nv.buffer),qt.create=function(a,e){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(qt.prototype),a.prototype.constructor=a,a.prototype.getPoint=e,a},ll.prototype.fromPoints=function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)},Iv.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Cv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},En.prototype.extractUrlBase=function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Lr.extractUrlBase(a)},En.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Yt.prototype.center=function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)},Yt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Yt.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},Yt.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},Yt.prototype.size=function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)},vi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},da.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)},mt.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},mt.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},mt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},mt.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},mt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},mt.prototype.getInverse=function(a){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},de.prototype.extractPosition=function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)},de.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},de.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)},de.prototype.setRotationFromQuaternion=function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)},de.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},de.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},de.prototype.multiplyVector4=function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},de.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},de.prototype.rotateAxis=function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)},de.prototype.crossVector=function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},de.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},de.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},de.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},de.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},de.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},de.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},de.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},de.prototype.makeFrustum=function(a,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,e,n,t,i,r)},de.prototype.getInverse=function(a){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},Sn.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)},At.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)},At.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Zi.prototype.isIntersectionBox=function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},Zi.prototype.isIntersectionPlane=function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)},Zi.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},it.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},it.prototype.barycoordFromPoint=function(a,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,e)},it.prototype.midpoint=function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)},it.prototypenormal=function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)},it.prototype.plane=function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)},it.barycoordFromPoint=function(a,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),it.getBarycoord(a,e,t,n,i)},it.normal=function(a,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),it.getNormal(a,e,t,n)},fs.prototype.extractAllPoints=function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)},fs.prototype.extrude=function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Tr(this,a)},fs.prototype.makeGeometry=function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new hl(this,a)},Y.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},Y.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},E.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},E.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},E.prototype.getPositionFromMatrix=function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)},E.prototype.getScaleFromMatrix=function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)},E.prototype.getColumnFromMatrix=function(a,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,a)},E.prototype.applyProjection=function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)},E.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},E.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},E.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ge.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},Ge.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ce.prototype.getChildByName=function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)},Ce.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Ce.prototype.translate=function(a,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,a)},Ce.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Ce.prototype.applyMatrix=function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(Ce.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Oe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Oe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Wp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),qo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},yt.prototype.setLens=function(a,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(a)},Object.defineProperties(hn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}}),Object.defineProperties(Ke.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xs)}}}),Ke.prototype.setDynamic=function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Xs:jr),this},Ke.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ke.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},ke.prototype.addIndex=function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)},ke.prototype.addAttribute=function(a,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new Ke(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(a,e)},ke.prototype.addDrawCall=function(a,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,e)},ke.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},ke.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},ke.prototype.removeAttribute=function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)},ke.prototype.applyMatrix=function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(ke.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),mr.prototype.setDynamic=function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Xs:jr),this},mr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Tr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Tr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Tr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},xa.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(ot.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ie}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===fc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(zt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}}),He.prototype.clearTarget=function(a,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(e,t,n)},He.prototype.animate=function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)},He.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},He.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},He.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},He.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},He.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},He.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},He.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},He.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},He.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},He.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},He.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},He.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},He.prototype.enableScissorTest=function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)},He.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},He.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},He.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},He.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},He.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},He.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},He.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},He.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},He.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},He.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(He.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?Ut:xt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(ku.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}}),_v.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new pv().load(a,function(n){e.setBuffer(n)}),this},Oo.prototype.updateCubeMap=function(a,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,e)},Oo.prototype.clear=function(a,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(a,e,t,n)},Yi.crossOrigin=void 0,Yi.loadTexture=function(a,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new ml;i.setCrossOrigin(this.crossOrigin);const r=i.load(a,t,void 0,n);return e&&(r.mapping=e),r},Yi.loadTextureCube=function(a,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new lv;i.setCrossOrigin(this.crossOrigin);const r=i.load(a,t,void 0,n);return e&&(r.mapping=e),r},Yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dt}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dt);class vs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Dv=new cr(-1,1,1,-1,0,1),Tl=new ke;Tl.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),Tl.setAttribute("uv",new Ye([0,2,0,0,2,0],2));class zh{constructor(e){this._mesh=new Oe(Tl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var Oa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};const kh={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Pr extends vs{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Y(e.x,e.y):new Y(256,256),this.clearColor=new ie(0,0,0);const r={minFilter:lt,magFilter:lt,format:ct};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(s,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Rt(s,o,r);d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Rt(s,o,r);m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}kh===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=kh;this.highPassUniforms=ua.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new Y(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Oa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=Oa;this.copyUniforms=ua.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new zt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ie,this.oldClearAlpha=1,this.basic=new rn,this.fsQuad=new zh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new Y(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Pr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Pr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new zt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Pr.BlurDirectionX=new Y(1,0),Pr.BlurDirectionY=new Y(0,1);class Ba extends vs{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ua.clone(e.uniforms),this.material=new zt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Gh extends vs{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Uv extends vs{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hh{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:lt,magFilter:lt,format:ct},i=e.getSize(new Y);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Oa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ba===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ba(Oa),this.clock=new Uh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gh!==void 0&&(s instanceof Gh?n=!0:s instanceof Uv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new cr(-1,1,1,-1,0,1);const Vh=new ke;Vh.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),Vh.setAttribute("uv",new Ye([0,2,0,0,2,0],2));class Ov extends vs{constructor(e,t,n,i,r){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ie}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}const Bv={uniforms:{tDiffuse:{value:null},resolution:{value:new Y(1/1024,1/512)}},vertexShader:`

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
		}`};function Ln(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Wh(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fr={duration:.5,overwrite:!1,delay:0},wl,fn=1e8,Ve=1/fn,Sl=Math.PI*2,zv=Sl/4,kv=0,Xh=Math.sqrt,Gv=Math.cos,Hv=Math.sin,gt=function(e){return typeof e=="string"},ht=function(e){return typeof e=="function"},Pn=function(e){return typeof e=="number"},Al=function(e){return typeof e=="undefined"},Fn=function(e){return typeof e=="object"},It=function(e){return e!==!1},Yh=function(){return typeof window!="undefined"},Qh=function(e){return ht(e)||gt(e)},qh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,El=/(?:-?\.?\d|\.)+/gi,jh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zh=/[+-]=-?[.\d]+/,Jh=/[^,'"\[\]\s]+/gi,Vv=/[\d.+\-=]+(?:e[-+]\d*)*/i,Ze,dn,Pl,Fl,Gt={},za={},$h,Kh=function(e){return(za=Ir(e,Gt))&&mn},Rl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ka=function(e,t){return!t&&console.warn(e)},ef=function(e,t){return e&&(Gt[e]=t)&&za&&(za[e]=t)||Gt},Cr=function(){return 0},Cl={},Kn=[],Il={},tf,Ht={},Nl={},nf=30,Ga=[],Dl="",Ul=function(e){var t=e[0],n,i;if(Fn(t)||ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ga.length;i--&&!Ga[i].targetTest(t););n=Ga[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ff(e[i],n)))||e.splice(i,1);return e},Mi=function(e){return e._gsap||Ul(Jt(e))[0]._gsap},rf=function(e,t,n){return(n=e[t])&&ht(n)?e[t]():Al(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},rt=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Wv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ha=function(){var e=Kn.length,t=Kn.slice(0),n,i;for(Il={},Kn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sf=function(e,t,n,i){Kn.length&&Ha(),e.render(t,n,i),Kn.length&&Ha()},af=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jh).length<2?t:gt(e)?e.trim():e},of=function(e){return e},jt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xv=function(e,t){for(var n in t)n in e||n==="duration"||n==="ease"||(e[n]=t[n])},Ir=function(e,t){for(var n in t)e[n]=t[n];return e},lf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ol=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ys=function(e){var t=e.parent||Ze,n=e.keyframes?Xv:jt;if(It(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qv=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Va=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ei=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ti=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jv=function a(e){return!e||e._ts&&a(e.parent)},cf=function(e){return e._repeat?Nr(e._tTime,e=e.duration()+e._rDelay)*e:0},Nr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xa=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ve)||0))},uf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xa(e),n._dirty||Ti(n,e)),e},hf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Wa(e.rawTime(),t),(!t._dur||Ms(0,t.totalDuration(),n)-t._tTime>Ve)&&t.render(n,!0)),Ti(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ve}},pn=function(e,t,n,i){return t.parent&&ei(t),t._start=Mt((Pn(n)?n:n||e!==Ze?Zt(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qv(e,t,"_first","_last",e._sort?"_start":0),Bl(t)||(e._recent=t),i||hf(e,t),e},ff=function(e,t){return(Gt.ScrollTrigger||Rl("scrollTrigger",t))&&Gt.ScrollTrigger.create(t,e)},df=function(e,t,n,i){if(xy(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tf!==Kt.frame)return Kn.push(e),e._lazy=[t,i],1},Zv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Bl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Jv=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&Zv(e)&&!(!e._initted&&Bl(e))||(e._ts<0||e._dp._ts<0)&&!Bl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ms(0,e._tDur,t),u=Nr(l,o),h=Nr(e._tTime,o),e._yoyo&&u&1&&(s=1-s),u!==h&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||i||e._zTime===Ve||!t&&e._zTime){if(!e._initted&&df(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ve:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&ei(e,1),n||($t(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$v=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(!i._dur&&i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(!i._dur&&i.data==="isPause"&&i._start<t)return i;i=i._prev}},Dr=function(e,t,n,i){var r=e._repeat,s=Mt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Mt(s*(r+1)+e._rDelay*r):s,o&&!i?uf(e,e._tTime=e._tDur*o):e.parent&&Xa(e),n||Ti(e.parent,e),e},pf=function(e){return e instanceof Nt?Ti(e):Dr(e,e._dur)},Kv={_start:0,endTime:Cr,totalDuration:Cr},Zt=function a(e,t,n){var i=e.labels,r=e._recent||Kv,s=e.duration()>=fn?r.endTime(!1):e._dur,o,l,c;return gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},bs=function(e,t,n){var i=Pn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;s.immediateRender=It(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new ft(t[0],s,t[r+1])},ti=function(e,t){return e||e===0?t(e):t},Ms=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e){if(typeof e!="string")return"";var t=Vv.exec(e);return t?e.substr(t.index+t[0].length):""},ey=function(e,t,n){return ti(n,function(i){return Ms(e,t,i)})},zl=[].slice,mf=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==dn},ty=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return gt(i)&&!t||mf(i,1)?(r=n).push.apply(r,Jt(i)):n.push(i)})||n},Jt=function(e,t,n){return gt(e)&&!n&&(Pl||!Or())?zl.call((t||Fl).querySelectorAll(e),0):kt(e)?ty(e,n):mf(e)?zl.call(e,0):e?[e]:[]},ny=function(e){return e=Jt(e)[0]||ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jt(t,n.querySelectorAll?n:n===e?ka("Invalid scope")||Fl.createElement("div"):e)}},gf=function(e){return e.sort(function(){return .5-Math.random()})},_f=function(e){if(ht(e))return e;var t=Fn(e)?e:{each:e},n=Br(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return gt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,m){var g=(m||t).length,x=s[g],p,_,b,y,M,S,v,P,R;if(!x){if(R=t.grid==="auto"?0:(t.grid||[1,fn])[1],!R){for(v=-fn;v<(v=m[R++].getBoundingClientRect().left)&&R<g;);R--}for(x=s[g]=[],p=l?Math.min(R,g)*u-.5:i%R,_=l?g*h/R-.5:i/R|0,v=0,P=fn,S=0;S<g;S++)b=S%R-p,y=_-(S/R|0),x[S]=M=c?Math.abs(c==="y"?y:b):Xh(b*b+y*y),M>v&&(v=M),M<P&&(P=M);i==="random"&&gf(x),x.max=v-P,x.min=P,x.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(R>g?g-1:c?c==="y"?g/R:R:Math.max(R,g/R))||0)*(i==="edges"?-1:1),x.b=g<0?r-g:r,x.u=Wt(t.amount||t.each)||0,n=n&&g<0?Ef(n):n}return g=(x[f]-x.min)/x.max||0,Mt(x.b+(n?n(g):g)*x.v)+x.u}},kl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Pn(n)?0:Wt(n))}},xf=function(e,t){var n=kt(e),i,r;return!n&&Fn(e)&&(i=n=e.radius||fn,e.values?(e=Jt(e.values),(r=!Pn(e[0]))&&(i*=i)):e=kl(e.increment)),ti(t,n?ht(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=fn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Pn(s)?u:u+Wt(s)}:kl(e))},vf=function(e,t,n,i){return ti(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},iy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},ry=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},sy=function(e,t,n){return bf(e,t,0,1,n)},yf=function(e,t,n){return ti(n,function(i){return e[~~t(i)]})},ay=function a(e,t,n){var i=t-e;return kt(e)?yf(e,a(0,e.length),t):ti(n,function(r){return(i+(r-e)%i)%i+e})},oy=function a(e,t,n){var i=t-e,r=i*2;return kt(e)?yf(e,a(0,e.length-1),t):ti(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ts=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Jh:El),n+=e.substr(t,i-t)+vf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},bf=function(e,t,n,i,r){var s=t-e,o=i-n;return ti(r,function(l){return n+((l-e)/s*o||0)})},ly=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=gt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(m){m*=h;var g=Math.min(f,~~m);return u[g](m-g)},n=t}else i||(e=Ir(kt(e)?[]:{},e));if(!u){for(l in t)Wl.call(o,e,l,"get",t[l]);r=function(m){return Ql(m,o)||(s?e.p:e)}}}return ti(n,r)},Mf=function(e,t,n){var i=e.labels,r=fn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},$t=function(e,t,n){var i=e.vars,r=i[t],s,o;if(!!r)return s=i[t+"Params"],o=i.callbackScope||e,n&&Kn.length&&Ha(),s?r.apply(o,s):r.call(o)},ws=function(e){return ei(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&$t(e,"onInterrupt"),e},Ur,cy=function(e){e=!e.name&&e.default||e;var t=e.name,n=ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Cr,render:Ql,add:Wl,kill:Sy,modifier:wy,rawVars:0},s={targetTest:0,get:0,getSetter:Yl,aliases:{},register:0};if(Or(),e!==i){if(Ht[t])return;jt(i,jt(Ol(e,r),s)),Ir(i.prototype,Ir(r,Ol(e,s))),Ht[i.prop=t]=i,e.targetTest&&(Ga.push(i),Cl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ef(t,i),e.register&&e.register(mn,i,Dt)},We=255,Ss={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Gl=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*We+.5|0},Tf=function(e,t,n){var i=e?Pn(e)?[e>>16,e>>8&We,e&We]:0:Ss.black,r,s,o,l,c,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ss[e])i=Ss[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&We,i&We,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&We,e&We]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(El),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Gl(l+1/3,r,s),i[1]=Gl(l,r,s),i[2]=Gl(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(jh),n&&i.length<4&&(i[3]=1),i}else i=e.match(El)||Ss.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/We,s=i[1]/We,o=i[2]/We,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},wf=function(e){var t=[],n=[],i=-1;return e.split(ni).forEach(function(r){var s=r.match(Rr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Sf=function(e,t,n){var i="",r=(e+i).match(ni),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Tf(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=wf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ni,"1").split(Rr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(ni),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},ni=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ss)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),uy=/hsl[a]?\(/,Af=function(e){var t=e.join(" "),n;if(ni.lastIndex=0,ni.test(t))return n=uy.test(t),e[1]=Sf(e[1],n),e[0]=Sf(e[0],n,wf(e[1])),!0},Ya,Kt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,d,m=function g(x){var p=a()-i,_=x===!0,b,y,M,S;if(p>e&&(n+=p-t),i+=p,M=i-n,b=M-s,(b>0||_)&&(S=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=b+(b>=r?4:r-b),y=1),_||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](M,f,S,x)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(x){return f/(1e3/(x||60))},wake:function(){$h&&(!Pl&&Yh()&&(dn=Pl=window,Fl=dn.document||{},Gt.gsap=mn,(dn.gsapVersions||(dn.gsapVersions=[])).push(mn.version),Kh(za||dn.GreenSockGlobals||!dn.gsap&&dn||{}),u=dn.requestAnimationFrame),l&&h.sleep(),c=u||function(x){return setTimeout(x,s-h.time*1e3+1|0)},Ya=1,m(2))},sleep:function(){(u?dn.cancelAnimationFrame:clearTimeout)(l),Ya=0,c=Cr},lagSmoothing:function(x,p){e=x||1/Ve,t=Math.min(p,e,0)},fps:function(x){r=1e3/(x||240),s=h.time*1e3+r},add:function(x){o.indexOf(x)<0&&o.push(x),Or()},remove:function(x){var p;~(p=o.indexOf(x))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Or=function(){return!Ya&&Kt.wake()},Ie={},hy=/^[\d.\-M][\d.\-,\s]/,fy=/["']/g,dy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(fy,"").trim():+c,i=l.substr(o+1).trim();return t},py=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},my=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[dy(t[1])]:py(e).split(",").map(af)):Ie._CE&&hy.test(e)?Ie._CE("",e):n},Ef=function(e){return function(t){return 1-e(1-t)}},Lf=function a(e,t){for(var n=e._first,i;n;)n instanceof Nt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Br=function(e,t){return e&&(ht(e)?e:Ie[e]||my(e))||t},wi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Vt(e,function(o){Ie[o]=Gt[o]=r,Ie[s=o.toLowerCase()]=n;for(var l in r)Ie[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[o+"."+l]=r[l]}),r},Pf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hl=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Sl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hv((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pf(o);return r=Sl/r,l.config=function(c,u){return a(e,c,u)},l},Vl=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Pf(n);return i.config=function(r){return a(e,r)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;wi(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn,wi("Elastic",Hl("in"),Hl("out"),Hl()),function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};wi("Bounce",function(s){return 1-r(1-s)},r)}(7.5625,2.75),wi("Expo",function(a){return a?Math.pow(2,10*(a-1)):0}),wi("Circ",function(a){return-(Xh(1-a*a)-1)}),wi("Sine",function(a){return a===1?1:-Gv(a*zv)+1}),wi("Back",Vl("in"),Vl("out"),Vl()),Ie.SteppedEase=Ie.steps=Gt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-Ve;return function(o){return((i*Ms(0,s,o)|0)+r)*n}}},Fr.ease=Ie["quad.out"],Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Dl+=a+","+a+"Params,"});var Ff=function(e,t){this.id=kv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:rf,this.set=t?t.getSetter:Yl},As=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Dr(this,+t.duration,1,1),this.data=t.data,Ya||Kt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(uf(this,n),!r._dp||r.parent||hf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Nr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ve?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ve?0:this._rts,qv(this.totalTime(Ms(-this._delay,this._tDur,i),!0)),Xa(this),this},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ve&&(this._tTime-=Ve)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(It(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zt(this,n),It(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,It(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ve:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ve,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ve)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=ht(n)?n:of,o=function(){var c=i.then;i.then=null,ht(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ws(this)},a}();jt(As.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ve,_prom:0,_ps:!1,_rts:1});var Nt=function(a){Wh(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=It(n.sortChildren),Ze&&pn(n.parent||Ze,Ln(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ff(Ln(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return bs(0,arguments,this),this},t.from=function(i,r,s){return bs(1,arguments,this),this},t.fromTo=function(i,r,s,o){return bs(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,ys(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ft(i,r,Zt(this,s),1),this},t.call=function(i,r,s){return pn(this,ft.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new ft(i,s,Zt(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,ys(s).immediateRender=It(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,ys(o).immediateRender=It(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Mt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,g,x,p,_,b,y,M,S,v;if(this!==Ze&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,b=this._ts,p=!b,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,x=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,r,s);if(f=Mt(u%x),u===l?(g=this._repeat,f=c):(g=~~(u/x),g&&g===u/x&&(f=c,g--),f>c&&(f=c)),M=Nr(this._tTime,x),!o&&this._tTime&&M!==g&&(M=g),S&&g&1&&(f=c-f,v=1),g!==M&&!this._lock){var P=S&&M&1,R=P===(S&&g&1);if(g<M&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(v?0:Mt(g*x)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Lf(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=$v(this,Mt(o),Mt(f)),_&&(u-=f-(f=_._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&($t(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&_!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!p){_=0,m&&(u+=this._zTime=-Ve);break}}d=m}else{d=this._last;for(var I=i<0?i:f;d;){if(m=d._prev,(d._act||I<=d._end)&&d._ts&&_!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!p){_=0,m&&(u+=this._zTime=I?-Ve:Ve);break}}d=m}}if(_&&!r&&(this.pause(),_.render(f>=o?0:-Ve)._zTime=f>=o?1:-1,this._ts))return this._start=y,Xa(this),this.render(i,r,s);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ei(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Pn(r)||(r=Zt(this,r,i)),!(i instanceof As)){if(kt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(gt(i))return this.addLabel(i,r);if(ht(i))i=ft.delayedCall(0,i);else return this}return this!==i?pn(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ft?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return gt(i)?this.removeLabel(i):ht(i)?this.killTweensOf(i):(Va(this,i),i===this._recent&&(this._recent=this._last),Ti(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=ft.delayedCall(0,r||Cr,s);return o.data="isPause",this._hasPause=1,pn(this,o,Zt(this,i))},t.removePause=function(i){var r=this._first;for(i=Zt(this,i);r;)r._start===i&&r.data==="isPause"&&ei(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)ii!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Jt(i),l=this._first,c=Pn(r),u;l;)l instanceof ft?Wv(l._targets,o)&&(c?(!ii||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Zt(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=ft.to(s,jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||Ve,onStart:function(){if(s.pause(),!d){var x=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());m._dur!==x&&Dr(m,x,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,jt({startAt:{time:Zt(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Mf(this,Zt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Mf(this,Zt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ve)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Ti(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ti(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=fn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,pn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Dr(s,s===Ze&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(Ze._ts&&(sf(Ze,Wa(i,Ze)),tf=Kt.frame),Kt.frame>=nf){nf+=Ct.autoSleep||120;var r=Ze._first;if((!r||!r._ts)&&Ct.autoSleep&&Kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kt.sleep()}}},e}(As);jt(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var gy=function(e,t,n,i,r,s,o){var l=new Dt(this._pt,e,t,0,1,Df,null,r),c=0,u=0,h,f,d,m,g,x,p,_;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ts(i)),s&&(_=[n,i],s(_,e,t),n=_[0],i=_[1]),f=n.match(Ll)||[];h=Ll.exec(i);)m=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(x=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:x,c:m.charAt(1)==="="?parseFloat(m.substr(2))*(m.charAt(0)==="-"?-1:1):parseFloat(m)-x,m:d&&d<4?Math.round:0},c=Ll.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zh.test(i)||p)&&(l.e=0),this._pt=l,l},Wl=function(e,t,n,i,r,s,o,l,c){ht(i)&&(i=i(r||0,e,s));var u=e[t],h=n!=="get"?n:ht(u)?c?e[t.indexOf("set")||!ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=ht(u)?c?by:If:Xl,d;if(gt(i)&&(~i.indexOf("random(")&&(i=Ts(i)),i.charAt(1)==="="&&(d=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(Wt(h)||0),(d||d===0)&&(i=d))),h!==i)return!isNaN(h*i)&&i!==""?(d=new Dt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?Ty:Nf,0,f),c&&(d.fp=c),o&&d.modifier(o,this,e),this._pt=d):(!u&&!(t in e)&&Rl(t,i),gy.call(this,e,t,h,i,f,l||Ct.stringFilter,c))},_y=function(e,t,n,i,r){if(ht(e)&&(e=Es(e,r,t,n,i)),!Fn(e)||e.style&&e.nodeType||kt(e)||qh(e))return gt(e)?Es(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=Es(e[o],r,t,n,i);return s},Rf=function(e,t,n,i,r,s){var o,l,c,u;if(Ht[e]&&(o=new Ht[e]).init(r,o.rawVars?t[e]:_y(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Dt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ur))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ii,xy=function a(e,t){var n=e.vars,i=n.ease,r=n.startAt,s=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,m=n.autoRevert,g=e._dur,x=e._startAt,p=e._targets,_=e.parent,b=_&&_.data==="nested"?_.parent._targets:p,y=e._overwrite==="auto"&&!wl,M=e.timeline,S,v,P,R,I,L,q,C,N,U,D,k,Z;if(M&&(!d||!i)&&(i="none"),e._ease=Br(i,Fr.ease),e._yEase=f?Ef(Br(f===!0?i:f,Fr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!n.runBackwards,!M){if(C=p[0]?Mi(p[0]).harness:0,k=C&&n[C.prop],S=Ol(n,Cl),x&&x.render(-1,!0).kill(),r)if(ei(e._startAt=ft.set(p,jt({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:It(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!s&&!m&&e._startAt.render(-1,!0),s){if(t>0&&!m&&(e._startAt=0),g&&t<=0){t&&(e._zTime=t);return}}else m===!1&&(e._startAt=0);else if(h&&g){if(x)!m&&(e._startAt=0);else if(t&&(s=!1),P=jt({overwrite:!1,data:"isFromStart",lazy:s&&It(o),immediateRender:s,stagger:0,parent:_},S),k&&(P[C.prop]=k),ei(e._startAt=ft.set(p,P)),t<0&&e._startAt.render(-1,!0),!s)a(e._startAt,Ve);else if(!t)return}for(e._pt=0,o=g&&It(o)||o&&!g,v=0;v<p.length;v++){if(I=p[v],q=I._gsap||Ul(p)[v]._gsap,e._ptLookup[v]=U={},Il[q.id]&&Kn.length&&Ha(),D=b===p?v:b.indexOf(I),C&&(N=new C).init(I,k||S,e,D,b)!==!1&&(e._pt=R=new Dt(e._pt,I,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(ae){U[ae]=R}),N.priority&&(L=1)),!C||k)for(P in S)Ht[P]&&(N=Rf(P,S,e,D,I,b))?N.priority&&(L=1):U[P]=R=Wl.call(e,I,P,"get",S[P],D,b,0,n.stringFilter);e._op&&e._op[v]&&e.kill(I,e._op[v]),y&&e._pt&&(ii=e,Ze.killTweensOf(I,U,e.globalTime(t)),Z=!e.parent,ii=0),e._pt&&o&&(Il[q.id]=1)}L&&Uf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Z},vy=function(e,t){var n=e[0]?Mi(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Ir({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Es=function(e,t,n,i,r){return ht(e)?e.call(t,n,i,r):gt(e)&&~e.indexOf("random(")?Ts(e):e},Cf=Dl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",yy=(Cf+",id,stagger,delay,duration,paused,scrollTrigger").split(","),ft=function(a){Wh(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:ys(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,x=l.scrollTrigger,p=l.yoyoEase,_=i.parent||Ze,b=(kt(n)||qh(n)?Pn(n[0]):"length"in i)?[n]:Jt(n),y,M,S,v,P,R,I,L;if(o._targets=b.length?Ul(b):ka("GSAP target "+n+" not found. https://greensock.com",!Ct.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||f||Qh(c)||Qh(u)){if(i=o.vars,y=o.timeline=new Nt({data:"nested",defaults:g||{}}),y.kill(),y.parent=y._dp=Ln(o),y._start=0,m)ys(jt(y.vars.defaults,{ease:"none"})),f?b.forEach(function(q,C){return m.forEach(function(N,U){return y.to(q,N,U?">":C*f)})}):m.forEach(function(q){return y.to(b,q,">")});else{if(v=b.length,I=f?_f(f):Cr,Fn(f))for(P in f)~Cf.indexOf(P)&&(L||(L={}),L[P]=f[P]);for(M=0;M<v;M++){S={};for(P in i)yy.indexOf(P)<0&&(S[P]=i[P]);S.stagger=0,p&&(S.yoyoEase=p),L&&Ir(S,L),R=b[M],S.duration=+Es(c,Ln(o),M,R,b),S.delay=(+Es(u,Ln(o),M,R,b)||0)-o._delay,!f&&v===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),y.to(R,S,I(M,R,b))}y.duration()?c=u=0:o.timeline=0}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!wl&&(ii=Ln(o),Ze.killTweensOf(b),ii=0),pn(_,Ln(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!m&&o._start===Mt(_._time)&&It(h)&&jv(Ln(o))&&_.data!=="nested")&&(o._tTime=-Ve,o.render(Math.max(0,-u))),x&&ff(Ln(o),x),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i>l-Ve&&i>=0?l:i<Ve?0:i,h,f,d,m,g,x,p,_,b;if(!c)Jv(this,i,r,s);else if(u!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,_=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(h=Mt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),x=this._yoyo&&d&1,x&&(b=this._yEase,h=c-h),g=Nr(this._tTime,m),h===o&&!s&&this._initted)return this;d!==g&&(_&&this._yEase&&Lf(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=s=1,this.render(Mt(m*d),!0).invalidate()._lock=0))}if(!this._initted){if(df(this,i<0?i:h,s,r))return this._tTime=0,this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(b||this._ease)(h/c),this._from&&(this.ratio=p=1-p),h&&!o&&!r&&($t(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(p,f.d),f=f._next;_&&_.render(i<0?i:!h&&x?-Ve:_._dur*p,r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,s),$t(this,"onUpdate")),this._repeat&&d!==g&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ei(this,1),!r&&!(i<0&&!o)&&(u||o)&&($t(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ws(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ii&&ii.vars.overwrite!==!0)._first||ws(this),this.parent&&s!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Jt(i):o,c=this._ptLookup,u=this._pt,h,f,d,m,g,x,p;if((!r||r==="all")&&Yv(o,l))return r==="all"&&(this._pt=0),ws(this);for(h=this._op=this._op||[],r!=="all"&&(gt(r)&&(g={},Vt(r,function(_){return g[_]=1}),r=g),r=vy(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,m=f,d={}):(d=h[p]=h[p]||{},m=r);for(g in m)x=f&&f[g],x&&((!("kill"in x.d)||x.d.kill(g)===!0)&&Va(this,x,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ws(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return bs(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return bs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return Ze.killTweensOf(i,r,s)},e}(As);jt(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Vt("staggerTo,staggerFrom,staggerFromTo",function(a){ft[a]=function(){var e=new Nt,t=zl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Xl=function(e,t,n){return e[t]=n},If=function(e,t,n){return e[t](n)},by=function(e,t,n,i){return e[t](i.fp,n)},My=function(e,t,n){return e.setAttribute(t,n)},Yl=function(e,t){return ht(e[t])?If:Al(e[t])&&e.setAttribute?My:Xl},Nf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ty=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Df=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ql=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wy=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Sy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Va(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ay=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Uf=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Dt=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||Nf,this.d=l||this,this.set=c||Xl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ay,this.m=n,this.mt=r,this.tween=i},a}();Vt(Dl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Cl[a]=1}),Gt.TweenMax=Gt.TweenLite=ft,Gt.TimelineLite=Gt.TimelineMax=Nt,Ze=new Nt({sortChildren:!1,defaults:Fr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ct.stringFilter=Af;var Qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return cy(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return Ze.getTweensOf(e,t)},getProperty:function(e,t,n,i){gt(e)&&(e=Jt(e)[0]);var r=Mi(e||{}).get,s=n?of:af;return n==="native"&&(n=""),e&&(t?s((Ht[t]&&Ht[t].get||r)(e,t,n,i)):function(o,l,c){return s((Ht[o]&&Ht[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Jt(e),e.length>1){var i=e.map(function(u){return mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Ht[t],o=Mi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;Ur._pt=0,h.init(e,n?u+n:u,Ur,0,[e]),h.render(1,h),Ur._pt&&Ql(1,Ur)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},isTweening:function(e){return Ze.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Br(e.ease,Fr.ease)),lf(Fr,e||{})},config:function(e){return lf(Ct,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ht[o]&&!Gt[o]&&ka(t+" effect requires "+o+" plugin.")}),Nl[t]=function(o,l,c){return n(Jt(o),jt(l||{},r),c)},s&&(Nt.prototype[t]=function(o,l,c){return this.add(Nl[t](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=Br(t)},parseEase:function(e,t){return arguments.length?Br(e,t):Ie},getById:function(e){return Ze.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,r;for(n.smoothChildTiming=It(e.smoothChildTiming),Ze.remove(n),n._dp=0,n._time=n._tTime=Ze._time,i=Ze._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ft&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=r;return pn(Ze,n,0),n},utils:{wrap:ay,wrapYoyo:oy,distribute:_f,random:vf,snap:xf,normalize:sy,getUnit:Wt,clamp:ey,splitColor:Tf,toArray:Jt,selector:ny,mapRange:bf,pipe:iy,unitize:ry,interpolate:ly,shuffle:gf},install:Kh,effects:Nl,ticker:Kt,updateRoot:Nt.updateRoot,plugins:Ht,globalTimeline:Ze,core:{PropTween:Dt,globals:ef,Tween:ft,Timeline:Nt,Animation:As,getCache:Mi,_removeLinkedListItem:Va,suppressOverwrites:function(e){return wl=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Qa[a]=ft[a]}),Kt.add(Nt.updateRoot),Ur=Qa.to({},{duration:0});var Ey=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ly=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Ey(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},ql=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(gt(r)&&(l={},Vt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ly(o,r)}}}},mn=Qa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o;for(s in t)o=this.add(e,"setAttribute",(e.getAttribute(s)||0)+"",t[s],i,r,0,0,s),o&&(o.op=s),this._props.push(s)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},ql("roundProps",kl),ql("modifiers"),ql("snap",xf))||Qa;ft.version=Nt.version=mn.version="3.8.0",$h=1,Yh()&&Or(),Ie.Power0,Ie.Power1,Ie.Power2,Ie.Power3,Ie.Power4,Ie.Linear,Ie.Quad,Ie.Cubic,Ie.Quart,Ie.Quint,Ie.Strong,Ie.Elastic,Ie.Back,Ie.SteppedEase,Ie.Bounce;var gn=Ie.Sine;Ie.Expo,Ie.Circ;/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Of,ri,zr,jl,Si,Bf,Py=function(){return typeof window!="undefined"},si={},Ai=180/Math.PI,kr=Math.PI/180,Gr=Math.atan2,zf=1e8,kf=/([A-Z])/g,Fy=/(?:left|right|width|margin|padding|x)/i,Ry=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ny=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Hf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Dy=function(e,t,n){return e.style[t]=n},Uy=function(e,t,n){return e.style.setProperty(t,n)},Oy=function(e,t,n){return e._gsap[t]=n},By=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zy=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},ky=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},_t="transform",oi=_t+"Origin",Wf,Zl=function(e,t){var n=ri.createElementNS?ri.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ri.createElement(e);return n.style?n:ri.createElement(e)},Rn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Hr(t)||t,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),Hr=function(e,t,n){var i=t||Si,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Xf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Xf[s]:"")+e},Jl=function(){Py()&&window.document&&(Of=window,ri=Of.document,zr=ri.documentElement,Si=Zl("div")||{style:{}},Zl("div"),_t=Hr(_t),oi=_t+"Origin",Si.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wf=!!Hr("perspective"),jl=1)},$l=function a(e){var t=Zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(zr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch(o){}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),zr.removeChild(t),this.style.cssText=r,s},Yf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qf=function(e){var t;try{t=e.getBBox()}catch(n){t=$l.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===$l||(t=$l.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Yf(e,["x","cx","x1"])||0,y:+Yf(e,["y","cy","y1"])||0,width:0,height:0}:t},qf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qf(e))},Ls=function(e,t){if(t){var n=e.style;t in si&&t!==oi&&(t=_t),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(kf,"-$1").toLowerCase())):n.removeAttribute(t)}},li=function(e,t,n,i,r,s){var o=new Dt(e._pt,t,n,0,1,s?Vf:Hf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},jf={deg:1,rad:1,turn:1},ci=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Si.style,l=Fy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,g,x,p;return i===s||!r||jf[i]||jf[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),p=e.getCTM&&qf(e),(d||s==="%")&&(si[t]||~t.indexOf("adius"))?(m=p?e.getBBox()[l?"width":"height"]:e[u],rt(d?r/m*h:r/100*m)):(o[l?"width":"height"]=h+(f?s:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ri||!g.appendChild)&&(g=ri.body),x=g._gsap,x&&d&&x.width&&l&&x.time===Kt.time?rt(r/x.width*h):((d||s==="%")&&(o.position=Rn(e,"position")),g===e&&(o.position="static"),g.appendChild(Si),m=Si[u],g.removeChild(Si),o.position="absolute",l&&d&&(x=Mi(g),x.time=Kt.time,x.width=g[u]),rt(f?m*r/h:m&&r?h/m*r:0))))},Vr=function(e,t,n,i){var r;return jl||Jl(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),si[t]&&t!=="transform"?(r=Fs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ja(Rn(e,oi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=qa[t]&&qa[t](e,t,n)||Rn(e,t)||rf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ci(e,t,r,n)+n:r},Gy=function(e,t,n,i){if(!n||n==="none"){var r=Hr(t,e,1),s=r&&Rn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Rn(e,"borderTopColor"))}var o=new Dt(this._pt,e.style,t,0,1,Df),l=0,c=0,u,h,f,d,m,g,x,p,_,b,y,M,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Rn(e,t)||i,e.style[t]=n),u=[n,i],Af(u),n=u[0],i=u[1],f=n.match(Rr)||[],S=i.match(Rr)||[],S.length){for(;h=Rr.exec(i);)x=h[0],_=i.substring(l,h.index),m?m=(m+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(m=1),x!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),M=x.charAt(1)==="="?+(x.charAt(0)+"1"):0,M&&(x=x.substr(2)),p=parseFloat(x),b=x.substr((p+"").length),l=Rr.lastIndex-b.length,b||(b=b||Ct.units[t]||y,l===i.length&&(i+=b,o.e+=b)),y!==b&&(d=ci(e,t,g,b)||0),o._pt={_next:o._pt,p:_||c===1?_:",",s:d,c:M?M*p:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Vf:Hf;return Zh.test(i)&&(o.e=0),this._pt=o,o},Zf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Zf[n]||n,t[1]=Zf[i]||i,t.join(" ")},Vy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],si[o]&&(l=1,o=o==="transformOrigin"?oi:_t),Ls(n,o);l&&(Ls(n,_t),s&&(s.svg&&n.removeAttribute("transform"),Fs(n,1),s.uncache=1))}},qa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Dt(e._pt,t,n,0,0,Vy);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],Jf={},$f=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kf=function(e){var t=Rn(e,_t);return $f(t)?Ps:t.substr(7).match(jh).map(rt)},Kl=function(e,t){var n=e._gsap||Mi(e),i=e.style,r=Kf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ps:r):(r===Ps&&!e.offsetParent&&e!==zr&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextSibling,zr.appendChild(e)),r=Kf(e),l?i.display=l:Ls(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):zr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ec=function(e,t,n,i,r,s){var o=e._gsap,l=r||Kl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],m=l[1],g=l[2],x=l[3],p=l[4],_=l[5],b=t.split(" "),y=parseFloat(b[0])||0,M=parseFloat(b[1])||0,S,v,P,R;n?l!==Ps&&(v=d*x-m*g)&&(P=y*(x/v)+M*(-g/v)+(g*_-x*p)/v,R=y*(-m/v)+M*(d/v)-(d*_-m*p)/v,y=P,M=R):(S=Qf(e),y=S.x+(~b[0].indexOf("%")?y/100*S.width:y),M=S.y+(~(b[1]||b[0]).indexOf("%")?M/100*S.height:M)),i||i!==!1&&o.smooth?(p=y-c,_=M-u,o.xOffset=h+(p*d+_*g)-p,o.yOffset=f+(p*m+_*x)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[oi]="0px 0px",s&&(li(s,o,"xOrigin",c,y),li(s,o,"yOrigin",u,M),li(s,o,"xOffset",h,o.xOffset),li(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Fs=function(e,t){var n=e._gsap||new Ff(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=Rn(e,oi)||"0",c,u,h,f,d,m,g,x,p,_,b,y,M,S,v,P,R,I,L,q,C,N,U,D,k,Z,ae,ue,te,be,W,J;return c=u=h=m=g=x=p=_=b=0,f=d=1,n.svg=!!(e.getCTM&&qf(e)),S=Kl(e,n.svg),n.svg&&(D=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ec(e,D||l,!!D||n.originIsAbsolute,n.smooth!==!1,S)),y=n.xOrigin||0,M=n.yOrigin||0,S!==Ps&&(I=S[0],L=S[1],q=S[2],C=S[3],c=N=S[4],u=U=S[5],S.length===6?(f=Math.sqrt(I*I+L*L),d=Math.sqrt(C*C+q*q),m=I||L?Gr(L,I)*Ai:0,p=q||C?Gr(q,C)*Ai+m:0,p&&(d*=Math.abs(Math.cos(p*kr))),n.svg&&(c-=y-(y*I+M*q),u-=M-(y*L+M*C))):(J=S[6],be=S[7],ae=S[8],ue=S[9],te=S[10],W=S[11],c=S[12],u=S[13],h=S[14],v=Gr(J,te),g=v*Ai,v&&(P=Math.cos(-v),R=Math.sin(-v),D=N*P+ae*R,k=U*P+ue*R,Z=J*P+te*R,ae=N*-R+ae*P,ue=U*-R+ue*P,te=J*-R+te*P,W=be*-R+W*P,N=D,U=k,J=Z),v=Gr(-q,te),x=v*Ai,v&&(P=Math.cos(-v),R=Math.sin(-v),D=I*P-ae*R,k=L*P-ue*R,Z=q*P-te*R,W=C*R+W*P,I=D,L=k,q=Z),v=Gr(L,I),m=v*Ai,v&&(P=Math.cos(v),R=Math.sin(v),D=I*P+L*R,k=N*P+U*R,L=L*P-I*R,U=U*P-N*R,I=D,N=k),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,x=180-x),f=rt(Math.sqrt(I*I+L*L+q*q)),d=rt(Math.sqrt(U*U+J*J)),v=Gr(N,U),p=Math.abs(v)>2e-4?v*Ai:0,b=W?1/(W<0?-W:W):0),n.svg&&(D=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$f(Rn(e,_t)),D&&e.setAttribute("transform",D))),Math.abs(p)>90&&Math.abs(p)<270&&(r?(f*=-1,p+=m<=0?180:-180,m+=m<=0?180:-180):(d*=-1,p+=p<=0?180:-180)),n.x=c-((n.xPercent=c&&(n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=rt(f),n.scaleY=rt(d),n.rotation=rt(m)+o,n.rotationX=rt(g)+o,n.rotationY=rt(x)+o,n.skewX=p+o,n.skewY=_+o,n.transformPerspective=b+s,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[oi]=ja(l)),n.xOffset=n.yOffset=0,n.force3D=Ct.force3D,n.renderTransform=n.svg?Xy:Wf?ed:Wy,n.uncache=0,n},ja=function(e){return(e=e.split(" "))[0]+" "+e[1]},tc=function(e,t,n){var i=Wt(t);return rt(parseFloat(t)+parseFloat(ci(e,"x",n+"px",i)))+i},Wy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ed(e,t)},Ei="0deg",Rs="0px",Li=") ",ed=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,x=n.transformPerspective,p=n.force3D,_=n.target,b=n.zOrigin,y="",M=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==Ei||u!==Ei)){var S=parseFloat(u)*kr,v=Math.sin(S),P=Math.cos(S),R;S=parseFloat(h)*kr,R=Math.cos(S),s=tc(_,s,v*R*-b),o=tc(_,o,-Math.sin(S)*-b),l=tc(_,l,P*R*-b+b)}x!==Rs&&(y+="perspective("+x+Li),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||s!==Rs||o!==Rs||l!==Rs)&&(y+=l!==Rs||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Li),c!==Ei&&(y+="rotate("+c+Li),u!==Ei&&(y+="rotateY("+u+Li),h!==Ei&&(y+="rotateX("+h+Li),(f!==Ei||d!==Ei)&&(y+="skew("+f+", "+d+Li),(m!==1||g!==1)&&(y+="scale("+m+", "+g+Li),_.style[_t]=y||"translate(0, 0)"},Xy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,g=n.yOrigin,x=n.xOffset,p=n.yOffset,_=n.forceCSS,b=parseFloat(s),y=parseFloat(o),M,S,v,P,R;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=kr,c*=kr,M=Math.cos(l)*h,S=Math.sin(l)*h,v=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=kr,R=Math.tan(c-u),R=Math.sqrt(1+R*R),v*=R,P*=R,u&&(R=Math.tan(u),R=Math.sqrt(1+R*R),M*=R,S*=R)),M=rt(M),S=rt(S),v=rt(v),P=rt(P)):(M=h,P=f,S=v=0),(b&&!~(s+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=ci(d,"x",s,"px"),y=ci(d,"y",o,"px")),(m||g||x||p)&&(b=rt(b+m-(m*M+g*v)+x),y=rt(y+g-(m*S+g*P)+p)),(i||r)&&(R=d.getBBox(),b=rt(b+i/100*R.width),y=rt(y+r/100*R.height)),R="matrix("+M+","+S+","+v+","+P+","+b+","+y+")",d.setAttribute("transform",R),_&&(d.style[_t]=R)},Yy=function(e,t,n,i,r,s){var o=360,l=gt(r),c=parseFloat(r)*(l&&~r.indexOf("rad")?Ai:1),u=s?c*s:c-i,h=i+u+"deg",f,d;return l&&(f=r.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*zf)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*zf)%o-~~(u/o)*o)),e._pt=d=new Dt(e._pt,t,n,i,u,Cy),d.e=h,d.u="deg",e._props.push(n),d},td=function(e,t){for(var n in t)e[n]=t[n];return e},Qy=function(e,t,n){var i=td({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[_t]=t,o=Fs(n,1),Ls(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],s[_t]=t,o=Fs(n,1),s[_t]=c);for(l in si)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Wt(c),m=Wt(u),h=d!==m?ci(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new Dt(e._pt,o,l,h,f-h,Gf),e._pt.u=m||0,e._props.push(l));td(o,i)};Vt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});qa[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(m){return Vr(o,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(m,g){return d[m]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var nd={name:"css",register:Jl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,m,g,x,p,_,b,y,M,S,v;jl||Jl();for(g in t)if(g!=="autoRound"&&(u=t[g],!(Ht[g]&&Rf(g,t,n,i,e,r)))){if(d=typeof u,m=qa[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ts(u)),m)m(this,e,g,u,n)&&(v=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ni.lastIndex=0,ni.test(c)||(x=Wt(c),p=Wt(u)),p?x!==p&&(c=ci(e,g,c,p)+p):x&&(u+=x),this.add(o,"setProperty",c,u,i,r,0,0,g),s.push(g);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],g in Ct.units&&!Wt(c)&&(c+=Ct.units[g]),gt(c)&&~c.indexOf("random(")&&(c=Ts(c)),(c+"").charAt(1)==="="&&(c=Vr(e,g))):c=Vr(e,g),f=parseFloat(c),_=d==="string"&&u.charAt(1)==="="?+(u.charAt(0)+"1"):0,_&&(u=u.substr(2)),h=parseFloat(u),g in ai&&(g==="autoAlpha"&&(f===1&&Vr(e,"visibility")==="hidden"&&h&&(f=0),li(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in si,b){if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Fs(e,t.parseTransform),S=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Dt(this._pt,o,_t,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new Dt(this._pt,M,"scaleY",M.scaleY,(_?_*h:h-M.scaleY)||0),s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){u=Hy(u),M.svg?ec(e,u,0,S,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&li(this,M,"zOrigin",M.zOrigin,p),li(this,o,g,ja(c),ja(u)));continue}else if(g==="svgOrigin"){ec(e,u,1,S,0,this);continue}else if(g in Jf){Yy(this,M,g,f,u,_);continue}else if(g==="smoothOrigin"){li(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){Qy(this,u,e);continue}}else g in o||(g=Hr(g)||g);if(b||(h||h===0)&&(f||f===0)&&!Ry.test(u)&&g in o)x=(c+"").substr((f+"").length),h||(h=0),p=Wt(u)||(g in Ct.units?Ct.units[g]:x),x!==p&&(f=ci(e,g,c,p)),this._pt=new Dt(this._pt,b?M:o,g,f,_?_*h:h-f,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Ny:Gf),this._pt.u=p||0,x!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Iy);else if(g in o)Gy.call(this,e,g,c,u);else if(g in e)this.add(e,g,c||e[g],u,i,r);else{Rl(g,u);continue}s.push(g)}}v&&Uf(this)},get:Vr,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in si&&t!==oi&&(e._gsap.x||Vr(e,"x"))?n&&Bf===n?t==="scale"?By:Oy:(Bf=n||{})&&(t==="scale"?zy:ky):e.style&&!Al(e.style[t])?Dy:~t.indexOf("-")?Uy:Yl(e,t)},core:{_removeProperty:Ls,_getMatrix:Kl}};mn.utils.checkPrefix=Hr,function(a,e,t,n){var i=Vt(a+","+e+","+t,function(r){si[r]=1});Vt(e,function(r){Ct.units[r]="deg",Jf[r]=1}),ai[i[13]]=a+","+e,Vt(n,function(r){var s=r.split(":");ai[s[1]]=i[s[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Ct.units[a]="px"}),mn.registerPlugin(nd);var nc=mn.registerPlugin(nd)||mn;nc.core.Tween;class qy extends En{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $y(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new sb(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Lr.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={};if(typeof e=="string")r=e;else if(Lr.decodeText(new Uint8Array(e,0,4))===id){try{s[Ne.KHR_BINARY_GLTF]=new ab(e)}catch(h){i&&i(h);return}r=s[Ne.KHR_BINARY_GLTF].content}else r=Lr.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xb(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case Ne.KHR_MATERIALS_UNLIT:s[h]=new Jy;break;case Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[h]=new cb;break;case Ne.KHR_DRACO_MESH_COMPRESSION:s[h]=new ob(l,this.dracoLoader);break;case Ne.KHR_TEXTURE_TRANSFORM:s[h]=new lb;break;case Ne.KHR_MESH_QUANTIZATION:s[h]=new ub;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}}function jy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Zy{constructor(e){this.parser=e,this.name=Ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ie(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Na(u),c.distance=h;break;case"spot":c=new Fh(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Jy{constructor(){this.name=Ne.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const i=[];e.color=new ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture))}return Promise.all(i)}}class $y{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Y(o,o)}return Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class eb{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const o=s.attenuationColor||[1,1,1];return t.attenuationTint=new ie(o[0],o[1],o[2]),Promise.all(r)}}class tb{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nb{constructor(e){this.parser=e,this.name=Ne.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularTint=new ie(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularTintMap",s.specularColorTexture).then(function(l){l.encoding=Ut})),Promise.all(r)}}class ib{constructor(e){this.parser=e,this.name=Ne.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=n.images[r.source],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s,o)}}class rb{constructor(e){this.parser=e,this.name=Ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sb{constructor(e){this.name=Ne.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,s.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new ArrayBuffer(u*h),d=new Uint8Array(o[0],l,c);return s.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})}else return null}}const id="glTF",Cs=12,rd={JSON:1313821514,BIN:5130562};class ab{constructor(e){this.name=Ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs);if(this.header={magic:Lr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Cs,i=new DataView(e,Cs);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===rd.JSON){const l=new Uint8Array(e,Cs+r,s);this.content=Lr.decodeText(l)}else if(o===rd.BIN){const l=Cs+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ob{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ne.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=rc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=rc[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Is[f.componentType];c[h]=d,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const m=f.attributes[d],g=l[d];g!==void 0&&(m.normalized=g)}h(f)},o,c)})})}}class lb{constructor(){this.name=Ne.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ic extends Jn{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new ie().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class cb{constructor(){this.name=Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return ic}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ie(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new ie(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ie(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s))}return Promise.all(r)}createMaterial(e){const t=new ic(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=gi,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class ub{constructor(){this.name=Ne.KHR_MESH_QUANTIZATION}}class Pi extends An{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}}Pi.prototype.beforeStart_=Pi.prototype.copySampleValue_,Pi.prototype.afterEnd_=Pi.prototype.copySampleValue_,Pi.prototype.interpolate_=function(a,e,t,n){const i=this.resultBuffer,r=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,c=n-e,u=(t-e)/c,h=u*u,f=h*u,d=a*l,m=d-l,g=-2*f+3*h,x=f-h,p=1-g,_=x-h+u;for(let b=0;b!==s;b++){const y=r[m+b+s],M=r[m+b+o]*c,S=r[d+b+s],v=r[d+b]*c;i[b]=p*y+_*M+g*S+x*v}return i};const hb=new At;class fb extends Pi{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hb.fromArray(r).normalize().toArray(r),r}}const Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sd={9728:st,9729:lt,9984:io,9985:Mc,9986:ro,9987:zi},ad={33071:Pt,33648:Gs,10497:Bi},od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},db={CUBICSPLINE:void 0,LINEAR:Hi,STEP:qr},sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ld(a,e){return typeof a!="string"||a===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(a)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(a)||/^data:.*,.*$/i.test(a)||/^blob:.*$/i.test(a)?a:e+a)}function pb(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),a.DefaultMaterial}function Ns(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mb(a,e,t){let n=!1,i=!1;for(let o=0,l=e.length;o<l;o++){const c=e[o];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(a);const r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;r.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;s.push(u)}}return Promise.all([Promise.all(r),Promise.all(s)]).then(function(o){const l=o[0],c=o[1];return n&&(a.morphAttributes.position=l),i&&(a.morphAttributes.normal=c),a.morphTargetsRelative=!0,a})}function gb(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _b(a){const e=a.extensions&&a.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+cd(e.attributes):t=a.indices+":"+cd(a.attributes)+":"+a.mode,t}function cd(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function ac(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class xb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Dh(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Ns(r,o,i),Fi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ld(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=od[i.type],c=Is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,x;if(d&&d!==h){const p=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(_);b||(g=new c(o,p*d,i.count*d/u),b=new mr(g,d/u),t.cache.add(_,b)),x=new gr(b,l,f%d/u,m)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),x=new Ke(g,l,m);if(i.sparse!==void 0){const p=od.SCALAR,_=Is[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new _(s[1],b,i.sparse.count*p),S=new c(s[2],y,i.sparse.count*l);o!==null&&(x=new Ke(x.array.slice(),x.itemSize,x.normalized));for(let v=0,P=M.length;v<P;v++){const R=M[v];if(x.setX(R,S[v*l]),l>=2&&x.setY(R,S[v*l+1]),l>=3&&x.setZ(R,S[v*l+2]),l>=4&&x.setW(R,S[v*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],r=t.images[i.source];let s=this.textureLoader;if(r.uri){const o=n.manager.getHandler(r.uri);o!==null&&(s=o)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,n){const i=this,r=this.json,s=this.options,o=r.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(d){h=!0;const m=new Blob([d],{type:t.mimeType});return u=c.createObjectURL(m),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(d){return new Promise(function(m,g){let x=m;n.isImageBitmapLoader===!0&&(x=function(p){const _=new at(p);_.needsUpdate=!0,m(_)}),n.load(ld(d,s.path),x,void 0,g)})}).then(function(d){h===!0&&c.revokeObjectURL(u),d.flipY=!1,o.name&&(d.name=o.name);const g=(r.samplers||{})[o.sampler]||{};return d.magFilter=sd[g.magFilter]||lt,d.minFilter=sd[g.minFilter]||zi,d.wrapS=ad[g.wrapS]||Bi,d.wrapT=ad[g.wrapT]||Bi,i.associations.set(d,{textures:e}),d}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=f,f}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Ne.KHR_TEXTURE_TRANSFORM]){const s=n.extensions!==void 0?n.extensions[Ne.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const o=i.associations.get(r);r=i.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(r,s),i.associations.set(r,o)}}return e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ko,ot.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new br,ot.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Jn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else if(l[Ne.KHR_MATERIALS_UNLIT]){const h=i[Ne.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ie(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=di);const u=r.alphaMode||sc.OPAQUE;if(u===sc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.format=mi,o.transparent=!1,u===sc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==rn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Y(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==rn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==rn&&(o.emissive=new ie().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==rn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture)),Promise.all(c).then(function(){let h;return s===ic?h=i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new s(o),r.name&&(h.name=r.name),h.map&&(h.map.encoding=Ut),h.emissiveMap&&(h.emissiveMap.encoding=Ut),Fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ns(i,h,r),h})}createUniqueName(e){const t=Be.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hd(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=_b(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=hd(new ke,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?pb(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const g=u[d],x=s[d];let p;const _=c[d];if(x.mode===Cn.TRIANGLES||x.mode===Cn.TRIANGLE_STRIP||x.mode===Cn.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new qo(g,_):new Oe(g,_),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),x.mode===Cn.TRIANGLE_STRIP?p.geometry=fd(p.geometry,Xp):x.mode===Cn.TRIANGLE_FAN&&(p.geometry=fd(p.geometry,Nc));else if(x.mode===Cn.LINES)p=new Sa(g,_);else if(x.mode===Cn.LINE_STRIP)p=new wa(g,_);else if(x.mode===Cn.LINE_LOOP)p=new ah(g,_);else if(x.mode===Cn.POINTS)p=new lh(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&gb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),x.extensions&&Ns(i,p,x),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new qn;t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(hm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new cr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,m=d.node!==void 0?d.node:d.id,g=n.parameters!==void 0?n.parameters[f.input]:f.input,x=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",g)),s.push(this.getDependency("accessor",x)),o.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],m=c[4],g=[];for(let p=0,_=u.length;p<_;p++){const b=u[p],y=h[p],M=f[p],S=d[p],v=m[p];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let P;switch(ui[v.path]){case ui.weights:P=gs;break;case ui.rotation:P=bi;break;case ui.position:case ui.scale:default:P=_s;break}const R=b.name?b.name:b.uuid,I=S.interpolation!==void 0?db[S.interpolation]:Hi,L=[];ui[v.path]===ui.weights?b.traverse(function(C){C.isMesh===!0&&C.morphTargetInfluences&&L.push(C.name?C.name:C.uuid)}):L.push(R);let q=M.array;if(M.normalized){const C=ac(q.constructor),N=new Float32Array(q.length);for(let U=0,D=q.length;U<D;U++)N[U]=q[U]*C;q=N}for(let C=0,N=L.length;C<N;C++){const U=new P(L[C]+"."+ui[v.path],y.array,q,I);S.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(k){const Z=this instanceof bi?fb:Pi;return new Z(this.times,this.values,this.getValueSize()/3,k)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(U)}}const x=n.name?n.name:"animation_"+e;return new dl(x,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new jo:o.length>1?l=new qn:o.length===1?l=o[0]:l=new Ce,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=s),Fi(l,r),r.extensions&&Ns(n,l,r),r.matrix!==void 0){const c=new de;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new qn;i.name&&(s.name=r.createUniqueName(i.name)),Fi(s,i),i.extensions&&Ns(n,s,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(ud(o[c],s,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof ot||f instanceof at)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}}function ud(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(o){s=o;const l=[];for(let c=0,u=s.joints.length;c<u;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=o.length;h<f;h++){const d=o[h];if(d){c.push(d);const m=new de;s.inverseBindMatrices!==void 0&&m.fromArray(s.inverseBindMatrices.array,h*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[h])}l.bind(new Zo(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];s.push(ud(u,r,t,n))}}return Promise.all(s)})}function vb(a,e,t){const n=e.attributes,i=new Yt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){const u=ac(Is[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new E,l=new E;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const g=ac(Is[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new vi;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function hd(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=rc[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return Fi(a,e),vb(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mb(a,e.targets,t):a})}function fd(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Nc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2==0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r}var an;(function(a){a[a.a0=2]="a0",a[a.a1=1]="a1"})(an||(an={}));var _n;(function(a){a.a0="#ffffff",a.a1="#34075a",a.a2="#14062b",a.a3="brown",a.a4="cyan",a.a5="orange",a.a6="red"})(_n||(_n={}));const dd=new ml,xn=class extends On{constructor(e){super();Re(this,"a0",!1);Re(this,"a1",new Ce);Re(this,"a2",[]);Re(this,"a5");Re(this,"a6");this.a5=xn.a3.clone(),this.a5.map=e.a1?dd.load(e.a1):null,this.a6=xn.a4.clone(),new qy().load(e.a0,t=>{this.b0(t),this.a0=!0,this.dispatchEvent({type:"ready"})})}static get a3(){return xn._a3||(xn._a3=new Jn({metalness:.5,roughness:1,envMapIntensity:.3})),xn._a3}static get a4(){return xn._a4||(xn._a4=new is({vertexShader:`
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
        `,uniforms:{time:{value:0}}})),xn._a4}b0(e){const t=new Ce;this.a1.add(t);for(let n=e.scene.children.length-1;n>=0;--n){const i=e.scene.children[n];if(!(i instanceof Oe))continue;i.material=this.a5;const r=new Ce;t.add(r),i.updateMatrix(),r.applyMatrix4(i.matrix),i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),r.add(i);const s=i.children.filter(c=>c instanceof Oe),o=s.find(({name:c})=>c.includes("top")),l=s.find(({name:c})=>c.includes("bottom"));o&&(o.material=this.a6,o.layers.enable(an.a1),o.visible=!1),l&&(l.material=this.a6,l.layers.enable(an.a1),l.visible=!1),this.a2.push({a0:r,a1:r.position.clone(),a2:o,a3:l})}}b1(e,t){!this.a0||(this.a1.children[0].position.x=Math.cos(e*.001)*.01,this.a1.children[0].position.y=Math.sin(e*.002)*.01,t&&(this.a1.children[0].rotation.y=t.x),this.a2.forEach((n,i)=>{const r=Math.max(0,Math.min(1,Math.abs(n.a1.y-n.a0.position.y))),s=i*1e3,o=(e+s)*.001,l=(e+s)*.002;n.a0.children[0].position.x=Math.sin(o)*.1*r,n.a0.children[0].position.y=Math.cos(l)*.1*r,n.a0.children[0].rotation.y=Math.sin(o)*.2*r,n.a0.children[0].rotation.z=Math.cos(o)*.2*r}),this.a6.uniforms.time.value=e*.05)}};let Za=xn;Re(Za,"_a3"),Re(Za,"_a4");class yb extends xa{constructor(){super();const e=new rr,t=new Jn({metalness:0,side:nt}),n=new Oe(e,t);n.scale.setScalar(10),this.add(n);const i=new Na(16777215,10,0,2);this.add(i);const r=new Mh({emissive:16777215,emissiveIntensity:10}),s=new Oe(e,r.clone());s.material.color.set(16711680),s.position.set(-5,2,0),s.scale.set(.1,1,1),this.add(s);const o=new Oe(e,r.clone());o.material.color.set(16777215),o.position.set(0,5,0),o.scale.set(2,.1,2),this.add(o);const l=new Oe(e,r.clone());l.material.color.set(255),l.position.set(2,1,5),l.scale.set(1.5,2,.1),this.add(l);const c=new Oe(e,r.clone());c.material.color.set(255),c.position.set(0,-5,0),c.scale.set(1.5,.1,1.5),this.add(c)}b0(){this.traverse(e=>{var t,n;e instanceof Oe&&((t=e==null?void 0:e.material)==null||t.dispose(),(n=e==null?void 0:e.geometry)==null||n.dispose())})}}class pd{constructor(e){Re(this,"a0");Re(this,"a1");Re(this,"a2");Re(this,"a3");Re(this,"a4");Re(this,"a5");Re(this,"a6");Re(this,"a7");Re(this,"a8");Re(this,"a9");Re(this,"a10",new rn({color:"black"}));Re(this,"a11");Re(this,"a12");Re(this,"a13");Re(this,"a14");Re(this,"a15");Re(this,"a16");Re(this,"a17");Re(this,"a18");Re(this,"a19",new Uh);Re(this,"a20",0);Re(this,"a21",0);Re(this,"a22",0);Re(this,"a23",new Y);Re(this,"a24",new Y(0,0));Re(this,"a25",new Y(0,0));Re(this,"a26");this.a0=e.$viewport;const{offsetWidth:t,offsetHeight:n}=this.a0;this.a22=document.documentElement.scrollHeight||document.body.scrollHeight,this.a23.set(t,n),this.a1=new Hu,this.a1.setClearColor(_n.a2),this.a1.physicallyCorrectLights=!0,this.a1.outputEncoding=Ut,this.a1.toneMapping=yc,this.a1.toneMapping=vc,this.a1.setSize(t,n),this.a1.setPixelRatio(e.forcePixelRatio||Math.min(window.devicePixelRatio||1,2)),this.a0.appendChild(this.a1.domElement),this.a2=new xa,this.a3=new yt(45,t/n,.1,20),this.a3.position.z=6,this.a3.userData.lookAt=new E(0,0,0);const i=new Ov(this.a2,this.a3),r=new Pr(new Y(t,n),2,1,.15);this.a6=new Hh(this.a1),this.a6.renderTarget1.texture.encoding=this.a6.renderTarget2.texture.encoding=Ut,this.a6.renderToScreen=!1,this.a6.addPass(i),this.a6.addPass(r),this.a4=new Ba({vertexShader:`
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

      float blendOverlay(float base, float blend) {
        return base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend));
      }
      
      vec3 blendOverlay(vec3 base, vec3 blend) {
        return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
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
      `,uniforms:{time:{value:null},baseTexture:{value:null},bloomTexture:{value:null}}},"baseTexture"),this.a4.needsSwap=!0,this.a5=new Ba(Bv),this.a5.uniforms.resolution.value.set(1/t,1/n),this.a7=new Hh(this.a1),this.a7.renderTarget1.texture.encoding=this.a7.renderTarget2.texture.encoding=Ut,this.a7.addPass(i),this.a7.addPass(this.a4),this.a7.addPass(this.a5),this.a8=new Mo,this.a8.set(an.a1),this.a9=new Mo,this.a9.set(an.a0);const s=new uu(this.a1),o=new yb;this.a2.environment=s.fromScene(o).texture,s.dispose(),o.b0(),this.a2.fog=new _a(_n.a1,4,10);const l=new fl(1,18,18),c=new Jn({roughness:1,metalness:1,envMapIntensity:1});if(this.a12=new Oe(l,c.clone()),this.a12.material.color.set(_n.a3),this.a12.layers.enable(an.a1),this.a12.position.set(1,0,-2),this.a2.add(this.a12),this.a13=new Oe(l,c.clone()),this.a13.material.color.set(_n.a4),this.a13.position.set(0,5,-2),this.a13.layers.enable(an.a1),this.a2.add(this.a13),this.a14=new Oe(l,c.clone()),this.a14.material.color.set(_n.a5),this.a14.position.set(3,5,-2),this.a14.layers.enable(an.a1),this.a2.add(this.a14),this.a15=new Oe(l,c.clone()),this.a15.material.color.set(_n.a6),this.a15.position.set(-3.5,5,-2),this.a15.layers.enable(an.a1),this.a2.add(this.a15),e.gradientUrl){this.a16=new Oe(new pa(4,4),new rn({map:dd.load(e.gradientUrl),transparent:!0})),this.a16.position.z=-2,this.a16.scale.set(2,2,1),this.a16.layers.enable(an.a0),this.a2.add(this.a16);const u=this.a16.clone();u.position.x=3,u.position.z=this.a16.position.z-.1,this.a2.add(u);const h=this.a16.clone();u.position.x=-3,u.position.z=this.a16.position.z-.2,this.a2.add(h)}this.a17=new Na(_n.a1,60),this.a17.position.set(-3,2,0),this.a2.add(this.a17),this.a18=new xl(_n.a0,1),this.a18.position.set(3,2,4),this.a2.add(this.a18),nc.fromTo(this.a18,{intensity:1},{intensity:.8,duration:2,yoyo:!0,repeat:-1,ease:gn.easeInOut}),this.a11=new Za({a0:e.modelUrl,a1:e.diffuseUrl}),this.a2.add(this.a11.a1),this.a26=this.b0(),this.b1=this.b1.bind(this),this.b2=this.b2.bind(this),this.b3=this.b3.bind(this),this.a19.start(),window.addEventListener("mousemove",this.b1),window.addEventListener("resize",this.b2),window.requestAnimationFrame(this.b3)}b0(){const e=8,t=1,n=nc.timeline({paused:!0,defaults:{duration:t}});Array.from(Array(e)).forEach((r,s)=>{n.addLabel(s.toString(),s*t)}),n.set({},{},(e-1)*t);function i(r){r.userData.a0==null&&(r.userData.a0=r.position.y);const s=Math.min(.5,Math.abs(r.position.y-r.userData.a0));r.userData.a0=r.position.y,r.scale.set(1-s,1+s,1)}return n.to(this.a12.position,{y:-5,duration:2,onUpdate:i.bind(null,this.a12)},"0"),n.to(this.a13.position,{y:-5,duration:2,onUpdate:i.bind(null,this.a13)},"1"),n.to(this.a14.position,{y:-5,duration:2,onUpdate:i.bind(null,this.a14)},"2"),n.to(this.a15.position,{y:-5,duration:2,onUpdate:i.bind(null,this.a15)},"5"),this.a11.a1.position.set(1.75,-.5,1),n.to(this.a11.a1.position,{x:-3,ease:gn.easeInOut,duration:7},"0"),n.to(this.a11.a1.position,{y:-1,ease:gn.easeOut,duration:2},"0"),n.to(this.a11.a1.position,{z:2,ease:gn.easeInOut,duration:2},"0"),n.to(this.a11.a1.rotation,{y:2,ease:gn.easeInOut,duration:7},"0"),this.a11.addEventListener("ready",()=>{n.to(this.a11.a5,{metalness:.8},"0"),n.to(this.a11.a5,{metalness:.5},"2"),n.to(this.a11.a5,{metalness:1},"3+=0.5"),n.set(this.a11.a2[4].a3||{},{visible:!0},"1"),n.set(this.a11.a2[3].a2||{},{visible:!0},"1"),n.set(this.a11.a2[3].a3||{},{visible:!0},"1+=0.1"),n.set(this.a11.a2[2].a2||{},{visible:!0},"1+=0.1"),n.set(this.a11.a2[2].a3||{},{visible:!0},"1+=0.1"),n.set(this.a11.a2[1].a2||{},{visible:!0},"1+=0.2"),n.to(this.a11.a2[4].a0.position,{y:"+=0.2"},"1"),n.to(this.a11.a2[3].a0.position,{y:"+=0.14"},"1+=0.1"),n.to(this.a11.a2[2].a0.position,{y:"+=0.04"},"1+=0.2"),n.to(this.a11.a2[4].a0.position,{y:"-=0.2"},"2+=0.2"),n.to(this.a11.a2[3].a0.position,{y:"-=0.14"},"2+=0.2"),n.to(this.a11.a2[2].a0.position,{y:"-=0.04"},"2+=0.2"),n.set(this.a11.a2[4].a3||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[3].a2||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[3].a3||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[2].a2||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[2].a3||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[1].a2||{},{visible:!1},"2+=1.2"),n.set(this.a11.a2[4].a3||{},{visible:!0},"3+=0.5"),n.set(this.a11.a2[3].a2||{},{visible:!0},"3+=0.5"),n.set(this.a11.a2[3].a3||{},{visible:!0},"3+=0.6"),n.set(this.a11.a2[2].a2||{},{visible:!0},"3+=0.6"),n.set(this.a11.a2[2].a3||{},{visible:!0},"3+=0.7"),n.set(this.a11.a2[1].a2||{},{visible:!0},"3+=0.7"),n.set(this.a11.a2[1].a3||{},{visible:!0},"3+=0.7"),n.set(this.a11.a2[0].a2||{},{visible:!0},"3+=0.7"),n.to(this.a11.a2[4].a0.position,{y:"+=0.4"},"3+=0.5"),n.to(this.a11.a2[3].a0.position,{y:"+=0.3"},"3+=0.6"),n.to(this.a11.a2[2].a0.position,{y:"+=0.23"},"3+=0.7"),n.to(this.a11.a2[1].a0.position,{y:"+=0.14"},"3+=0.8"),n.to(this.a11.a2[0].a0.position,{y:"-=0.25"},"3+=0.7"),n.set(this.a11.a2[4].a3||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[3].a2||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[3].a3||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[2].a2||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[2].a3||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[1].a2||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[1].a3||{},{visible:!1},"6+=0.5"),n.set(this.a11.a2[0].a2||{},{visible:!1},"6+=0.5"),n.to(this.a11.a2[4].a0.position,{y:"-=0.4",ease:gn.easeInOut},"6-=0.5"),n.to(this.a11.a2[3].a0.position,{y:"-=0.3",ease:gn.easeInOut},"6-=0.5"),n.to(this.a11.a2[2].a0.position,{y:"-=0.23",ease:gn.easeInOut},"6-=0.5"),n.to(this.a11.a2[1].a0.position,{y:"-=0.14",ease:gn.easeInOut},"6-=0.5"),n.to(this.a11.a2[0].a0.position,{y:"+=0.25",ease:gn.easeInOut},"6-=0.5")}),n}b1(e){const{clientX:t,clientY:n}=e;this.a25.set(t/this.a23.x*2-1,-(n/this.a23.y)*2+1)}b2(){const{offsetWidth:e,offsetHeight:t}=this.a0;this.a22=document.documentElement.scrollHeight||document.body.scrollHeight,this.a23.set(e,t),this.a1.setSize(e,t),this.a3.aspect=e/t,this.a3.updateProjectionMatrix(),this.a5.uniforms.resolution.value.set(1/e,1/t),this.a6.setSize(e,t),this.a7.setSize(e,t)}b3(){window.requestAnimationFrame(this.b3),this.a24.lerp(this.a25,.01);const e=(document.documentElement.scrollTop||document.body.scrollTop)/(this.a22-this.a23.height);this.a21=e,this.a20+=(this.a21-this.a20)*.05,this.a26.progress(this.a20);const t=this.a19.getElapsedTime()*1e3;t>6e5&&(this.a19.stop(),this.a19.start()),this.a4.uniforms.time.value=t*.01,this.a11.b1(t),this.a3.position.x=-this.a24.x*.2,this.a3.position.y=-this.a24.y*.2,this.a3.lookAt(this.a3.userData.lookAt),this.b5()}b4(e){this.a2.traverse(t=>{if(!(!(t instanceof Oe)||this.a8.test(t.layers))){if(this.a9.test(t.layers)){t.visible=!e;return}e?(t.userData.a1=t.material,t.material=this.a10):t.material=t.userData.a1}})}b5(){this.b4(!0),this.a6.render(),this.b4(!1),this.a4.uniforms.bloomTexture.value=this.a6.renderTarget2.texture,this.a7.render()}}return window.BustScene=pd,window.onBustSceneLoaded&&window.onBustSceneLoaded(),Lt.BustScene=pd,Object.defineProperty(Lt,"__esModule",{value:!0}),Lt[Symbol.toStringTag]="Module",Lt}({});})();
