function ym(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="160",xm=0,Kc=1,Sm=2,xd=1,Sd=2,Kn=3,wi=0,jt=1,Dn=2,ni=0,Fr=1,wl=2,Jc=3,Zc=4,bm=5,Vi=100,wm=101,Em=102,Qc=103,eu=104,Tm=200,Mm=201,Am=202,Rm=203,El=204,Tl=205,Cm=206,Pm=207,Lm=208,Dm=209,Om=210,Im=211,Um=212,Nm=213,Fm=214,km=0,Bm=1,zm=2,Va=3,Gm=4,Vm=5,Hm=6,Wm=7,bd=0,jm=1,$m=2,yi=0,qm=1,Xm=2,Ym=3,Km=4,Jm=5,Zm=6,wd=300,Wr=301,jr=302,Ml=303,Al=304,lo=306,Rl=1e3,On=1001,Cl=1002,Bt=1003,tu=1004,To=1005,yn=1006,Qm=1007,Ds=1008,xi=1009,e_=1010,t_=1011,hc=1012,Ed=1013,pi=1014,mi=1015,ii=1016,Td=1017,Md=1018,Yi=1020,n_=1021,In=1023,i_=1024,r_=1025,Ki=1026,$r=1027,s_=1028,Ad=1029,a_=1030,Rd=1031,Cd=1033,Mo=33776,Ao=33777,Ro=33778,Co=33779,nu=35840,iu=35841,ru=35842,su=35843,Pd=36196,au=37492,ou=37496,lu=37808,cu=37809,uu=37810,hu=37811,du=37812,fu=37813,pu=37814,mu=37815,_u=37816,gu=37817,vu=37818,yu=37819,xu=37820,Su=37821,Po=36492,bu=36494,wu=36495,o_=36283,Eu=36284,Tu=36285,Mu=36286,Ld=3e3,Ji=3001,l_=3200,c_=3201,Dd=0,u_=1,xn="",At="srgb",ri="srgb-linear",dc="display-p3",co="display-p3-linear",Ha="linear",tt="srgb",Wa="rec709",ja="p3",or=7680,Au=519,h_=512,d_=513,f_=514,Od=515,p_=516,m_=517,__=518,g_=519,Ru=35044,Cu="300 es",Pl=1035,ei=2e3,$a=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lo=Math.PI/180,Ll=180/Math.PI;function Xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function v_(r,e){return(r%e+e)%e}function Do(r,e,t){return(1-t)*r+t*e}function Pu(r){return(r&r-1)===0&&r!==0}function Dl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],S=i[7],M=i[2],E=i[5],T=i[8];return s[0]=a*_+o*y+l*M,s[3]=a*p+o*v+l*E,s[6]=a*m+o*S+l*T,s[1]=c*_+u*y+h*M,s[4]=c*p+u*v+h*E,s[7]=c*m+u*S+h*T,s[2]=d*_+f*y+g*M,s[5]=d*p+f*v+g*E,s[8]=d*m+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Ve;function Id(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y_(){const r=qa("canvas");return r.style.display="block",r}const Lu={};function Es(r){r in Lu||(Lu[r]=!0,console.warn(r))}const Du=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[ri]:{transfer:Ha,primaries:Wa,toReference:r=>r,fromReference:r=>r},[At]:{transfer:tt,primaries:Wa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[co]:{transfer:Ha,primaries:ja,toReference:r=>r.applyMatrix3(Ou),fromReference:r=>r.applyMatrix3(Du)},[dc]:{transfer:tt,primaries:ja,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ou),fromReference:r=>r.applyMatrix3(Du).convertLinearToSRGB()}},x_=new Set([ri,co]),Xe={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!x_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ra[e].toReference,i=ra[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ra[r].primaries},getTransfer:function(r){return r===xn?Ha:ra[r].transfer}};function kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=qa("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=kr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S_=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Uo(i[a].image)):s.push(Uo(i[a]))}else s=Uo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b_=0;class cn extends rs{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=On,i=On,s=yn,a=Ds,o=In,l=xi,c=cn.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Xs(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?At:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Ji:Ld}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?At:xn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=wd;cn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,M=(m+1)/2,E=(u+d)/4,T=(h+_)/4,L=(g+p)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=T/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=L/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=L/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?At:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends w_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fd extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E_ extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-o;const m=l*d+c*f+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,m*y);p=Math.sin(p*E)/M,o=Math.sin(o*E)/M}const S=o*y;if(l=l*p+d*S,c=c*p+f*S,u=u*p+g*S,h=h*p+_*S,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new O,Iu=new Ys;class Ks{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),aa.subVectors(this.max,ds),cr.subVectors(e.a,ds),ur.subVectors(e.b,ds),hr.subVectors(e.c,ds),oi.subVectors(ur,cr),li.subVectors(hr,ur),Pi.subVectors(cr,hr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Pi.z,Pi.y,oi.z,0,-oi.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-oi.y,oi.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!Fo(t,cr,ur,hr,aa)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,cr,ur,hr,aa))?!1:(oa.crossVectors(oi,li),t=[oa.x,oa.y,oa.z],Fo(t,cr,ur,hr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new O,new O,new O,new O,new O,new O,new O,new O],En=new O,sa=new Ks,cr=new O,ur=new O,hr=new O,oi=new O,li=new O,Pi=new O,ds=new O,aa=new O,oa=new O,Li=new O;function Fo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Li.fromArray(r,s);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const T_=new Ks,fs=new O,ko=new O;class uo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):T_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(ko)),this.expandByPoint(fs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new O,Bo=new O,la=new O,ci=new O,zo=new O,ca=new O,Go=new O;class kd{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Bo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=ci.dot(this.direction),l=-ci.dot(la),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Bo).addScaledVector(la,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){zo.subVectors(t,e),ca.subVectors(n,e),Go.crossVectors(zo,ca);let a=this.direction.dot(Go),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(ca.crossVectors(ci,ca));if(l<0)return null;const c=o*this.direction.dot(zo.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(Go);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,A_)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ui.crossVectors(n,Zt),ui.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ui.crossVectors(n,Zt)),ui.normalize(),ua.crossVectors(Zt,ui),i[0]=ui.x,i[4]=ua.x,i[8]=Zt.x,i[1]=ui.y,i[5]=ua.y,i[9]=Zt.y,i[2]=ui.z,i[6]=ua.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],M=n[15],E=i[0],T=i[4],L=i[8],x=i[12],R=i[1],F=i[5],V=i[9],X=i[13],P=i[2],I=i[6],z=i[10],W=i[14],j=i[3],$=i[7],Y=i[11],ee=i[15];return s[0]=a*E+o*R+l*P+c*j,s[4]=a*T+o*F+l*I+c*$,s[8]=a*L+o*V+l*z+c*Y,s[12]=a*x+o*X+l*W+c*ee,s[1]=u*E+h*R+d*P+f*j,s[5]=u*T+h*F+d*I+f*$,s[9]=u*L+h*V+d*z+f*Y,s[13]=u*x+h*X+d*W+f*ee,s[2]=g*E+_*R+p*P+m*j,s[6]=g*T+_*F+p*I+m*$,s[10]=g*L+_*V+p*z+m*Y,s[14]=g*x+_*X+p*W+m*ee,s[3]=y*E+v*R+S*P+M*j,s[7]=y*T+v*F+S*I+M*$,s[11]=y*L+v*V+S*z+M*Y,s[15]=y*x+v*X+S*W+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+p*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*d*c+_*l*f-o*p*f-h*l*m+o*d*m,v=g*d*c-u*p*c-g*l*f+a*p*f+u*l*m-a*d*m,S=u*_*c-g*h*c+g*o*f-a*_*f-u*o*m+a*h*m,M=g*h*l-u*_*l-g*o*d+a*_*d+u*o*p-a*h*p,E=t*y+n*v+i*S+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*d*s-h*p*s-_*i*f+n*p*f+h*i*m-n*d*m)*T,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*T,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=v*T,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*T,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*T,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*T,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*T,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*T,e[12]=M*T,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,p=a*h,m=o*h,y=l*c,v=l*u,S=l*h,M=n.x,E=n.y,T=n.z;return i[0]=(1-(_+m))*M,i[1]=(f+S)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(f-S)*E,i[5]=(1-(d+m))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+v)*T,i[9]=(p-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=dr.set(i[0],i[1],i[2]).length();const a=dr.set(i[4],i[5],i[6]).length(),o=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/s,u=1/a,h=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ei){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===ei)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$a)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ei){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(o===ei)g=(a+s)*h,_=-2*h;else if(o===$a)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new O,Tn=new gt,M_=new O(0,0,0),A_=new O(1,1,1),ui=new O,ua=new O,Zt=new O,Uu=new gt,Nu=new Ys;class ho{constructor(e=0,t=0,n=0,i=ho.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ho.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const Fu=new O,fr=new Ys,qn=new gt,ha=new O,ps=new O,C_=new O,P_=new Ys,ku=new O(1,0,0),Bu=new O(0,1,0),zu=new O(0,0,1),L_={type:"added"},D_={type:"removed"};class Rt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new O,t=new ho,n=new Ys,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ps,ha,this.up):qn.lookAt(ha,ps,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),fr.setFromRotationMatrix(qn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(L_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new O,Xn=new O,Vo=new O,Yn=new O,pr=new O,mr=new O,Gu=new O,Ho=new O,Wo=new O,jo=new O;let da=!1;class Pn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),Xn.subVectors(n,t),Vo.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Xn),l=Mn.dot(Vo),c=Xn.dot(Xn),u=Xn.dot(Vo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,s,a,o,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Xn.subVectors(e,t),Mn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;pr.subVectors(i,n),mr.subVectors(s,n),Ho.subVectors(e,n);const l=pr.dot(Ho),c=mr.dot(Ho);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,i);const u=pr.dot(Wo),h=mr.dot(Wo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(pr,a);jo.subVectors(e,s);const f=pr.dot(jo),g=mr.dot(jo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mr,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Gu.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Gu,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function $o(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=v_(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$o(a,s,e+1/3),this.g=$o(a,s,e),this.b=$o(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Xe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(zt(Dt.r*255,0,255))*65536+Math.round(zt(Dt.g*255,0,255))*256+Math.round(zt(Dt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=At){Xe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(fa);const n=Do(hi.h,fa.h,t),i=Do(hi.s,fa.s,t),s=Do(hi.l,fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ce;Ce.NAMES=zd;let O_=0;class ss extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Fr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Tl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Js extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new O,pa=new Re;class Gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),e}}class Gd extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vd extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let I_=0;const mn=new gt,qo=new Rt,_r=new O,Qt=new Ks,ms=new Ks,wt=new O;class Hn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Vd:Gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Qt.min,ms.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,ms.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(ms.min),Qt.expandByPoint(ms.max))}Qt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),wt.add(_r)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new O,u[R]=new O;const h=new O,d=new O,f=new O,g=new Re,_=new Re,p=new Re,m=new O,y=new O;function v(R,F,V){h.fromArray(i,R*3),d.fromArray(i,F*3),f.fromArray(i,V*3),g.fromArray(a,R*2),_.fromArray(a,F*2),p.fromArray(a,V*2),d.sub(h),f.sub(h),_.sub(g),p.sub(g);const X=1/(_.x*p.y-p.x*_.y);isFinite(X)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(X),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(X),c[R].add(m),c[F].add(m),c[V].add(m),u[R].add(y),u[F].add(y),u[V].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,F=S.length;R<F;++R){const V=S[R],X=V.start,P=V.count;for(let I=X,z=X+P;I<z;I+=3)v(n[I+0],n[I+1],n[I+2])}const M=new O,E=new O,T=new O,L=new O;function x(R){T.fromArray(s,R*3),L.copy(T);const F=c[R];M.copy(F),M.sub(T.multiplyScalar(T.dot(F))).normalize(),E.crossVectors(L,F);const X=E.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=X}for(let R=0,F=S.length;R<F;++R){const V=S[R],X=V.start,P=V.count;for(let I=X,z=X+P;I<z;I+=3)x(n[I+0]),x(n[I+1]),x(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new gt,Di=new kd,ma=new uo,Hu=new O,gr=new O,vr=new O,yr=new O,Xo=new O,_a=new O,ga=new Re,va=new Re,ya=new Re,Wu=new O,ju=new O,$u=new O,xa=new O,Sa=new O;class an extends Rt{constructor(e=new Hn,t=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Xo.fromBufferAttribute(h,e),a?_a.addScaledVector(Xo,u):_a.addScaledVector(Xo.sub(t),u))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(ma.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ma,Hu)===null||Di.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Vu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,M=v;S<M;S+=3){const E=o.getX(S),T=o.getX(S+1),L=o.getX(S+2);i=ba(this,m,e,n,c,u,h,E,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);i=ba(this,a,e,n,c,u,h,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,M=v;S<M;S+=3){const E=S,T=S+1,L=S+2;i=ba(this,m,e,n,c,u,h,E,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,S=p+2;i=ba(this,a,e,n,c,u,h,y,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function U_(r,e,t,n,i,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===wi,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:r}}function ba(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,gr),r.getVertexPosition(l,vr),r.getVertexPosition(c,yr);const u=U_(r,e,t,n,gr,vr,yr,xa);if(u){i&&(ga.fromBufferAttribute(i,o),va.fromBufferAttribute(i,l),ya.fromBufferAttribute(i,c),u.uv=Pn.getInterpolation(xa,gr,vr,yr,ga,va,ya,new Re)),s&&(ga.fromBufferAttribute(s,o),va.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),u.uv1=Pn.getInterpolation(xa,gr,vr,yr,ga,va,ya,new Re),u.uv2=u.uv1),a&&(Wu.fromBufferAttribute(a,o),ju.fromBufferAttribute(a,l),$u.fromBufferAttribute(a,c),u.normal=Pn.getInterpolation(xa,gr,vr,yr,Wu,ju,$u,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Pn.getNormal(gr,vr,yr,h.normal),u.face=h}return u}class sr extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(h,2));function g(_,p,m,y,v,S,M,E,T,L,x){const R=S/T,F=M/L,V=S/2,X=M/2,P=E/2,I=T+1,z=L+1;let W=0,j=0;const $=new O;for(let Y=0;Y<z;Y++){const ee=Y*F-X;for(let te=0;te<I;te++){const H=te*R-V;$[_]=H*y,$[p]=ee*v,$[m]=P,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(te/T),h.push(1-Y/L),W+=1}}for(let Y=0;Y<L;Y++)for(let ee=0;ee<T;ee++){const te=d+ee+I*Y,H=d+ee+I*(Y+1),q=d+(ee+1)+I*(Y+1),re=d+(ee+1)+I*Y;l.push(te,H,re),l.push(H,q,re),j+=6}o.addGroup(f,j,x),f+=j,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=qr(r[t]);for(const i in n)e[i]=n[i]}return e}function N_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hd(r){return r.getRenderTarget()===null?r.outputColorSpace:Xe.workingColorSpace}const Xa={clone:qr,merge:kt};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends Wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,Sr=1;class B_ extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(xr,Sr,e,t);i.layers=this.layers,this.add(i);const s=new Ln(xr,Sr,e,t);s.layers=this.layers,this.add(s);const a=new Ln(xr,Sr,e,t);a.layers=this.layers,this.add(a);const o=new Ln(xr,Sr,e,t);o.layers=this.layers,this.add(o);const l=new Ln(xr,Sr,e,t);l.layers=this.layers,this.add(l);const c=new Ln(xr,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jd extends cn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?At:xn),this.texture=new jd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sr(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ni});s.uniforms.tEquirect.value=t;const a=new an(i,s),o=t.minFilter;return t.minFilter===Ds&&(t.minFilter=yn),new B_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Yo=new O,G_=new O,V_=new Ve;class ki{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yo.subVectors(n,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V_.getNormalMatrix(e),i=this.coplanarPoint(Yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new uo,wa=new O;class fc{constructor(e=new ki,t=new ki,n=new ki,i=new ki,s=new ki,a=new ki){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-f,S-m).normalize(),n[1].setComponents(l+s,d+c,p+f,S+m).normalize(),n[2].setComponents(l+a,d+u,p+g,S+y).normalize(),n[3].setComponents(l-a,d-u,p-g,S-y).normalize(),n[4].setComponents(l-o,d-h,p-_,S-v).normalize(),t===ei)n[5].setComponents(l+o,d+h,p+_,S+v).normalize();else if(t===$a)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wa.x=i.normal.x>0?e.max.x:e.min.x,wa.y=i.normal.y>0?e.max.y:e.min.y,wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Os extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*d-a;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,S=y+c*(m+1),M=y+1+c*(m+1),E=y+1+c*m;f.push(v,S,E),f.push(S,M,E)}this.setIndex(f),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}var W_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`struct PhysicalMaterial {
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
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,Wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
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
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R0=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Z0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lv=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dv=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
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
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:W_,alphahash_pars_fragment:j_,alphamap_fragment:$_,alphamap_pars_fragment:q_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:K_,aomap_pars_fragment:J_,batching_pars_vertex:Z_,batching_vertex:Q_,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:rg,clipping_planes_fragment:sg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:ug,color_pars_vertex:hg,color_vertex:dg,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:_g,displacementmap_vertex:gg,emissivemap_fragment:vg,emissivemap_pars_fragment:yg,colorspace_fragment:xg,colorspace_pars_fragment:Sg,envmap_fragment:bg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:Mg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Lg,lightmap_fragment:Dg,lightmap_pars_fragment:Og,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:kg,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:jg,lights_fragment_end:$g,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:Kg,map_fragment:Jg,map_pars_fragment:Zg,map_particle_fragment:Qg,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphcolor_vertex:i0,morphnormal_vertex:r0,morphtarget_pars_vertex:s0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:u0,normal_vertex:h0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:_0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:y0,project_vertex:x0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:M0,shadowmap_vertex:A0,shadowmask_pars_fragment:R0,skinbase_vertex:C0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:O0,specularmap_pars_fragment:I0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:k0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:G0,worldpos_vertex:V0,background_vert:H0,background_frag:W0,backgroundCube_vert:j0,backgroundCube_frag:$0,cube_vert:q0,cube_frag:X0,depth_vert:Y0,depth_frag:K0,distanceRGBA_vert:J0,distanceRGBA_frag:Z0,equirect_vert:Q0,equirect_frag:ev,linedashed_vert:tv,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:rv,meshlambert_vert:sv,meshlambert_frag:av,meshmatcap_vert:ov,meshmatcap_frag:lv,meshnormal_vert:cv,meshnormal_frag:uv,meshphong_vert:hv,meshphong_frag:dv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:_v,points_vert:gv,points_frag:vv,shadow_vert:yv,shadow_frag:xv,sprite_vert:Sv,sprite_frag:bv},ie={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},kn={basic:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:kt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:kt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:kt([ie.points,ie.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:kt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:kt([ie.common,ie.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:kt([ie.sprite,ie.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:kt([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:kt([ie.lights,ie.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};kn.physical={uniforms:kt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ea={r:0,b:0,g:0};function wv(r,e,t,n,i,s,a){const o=new Ce(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lo)?(u===void 0&&(u=new an(new sr(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:qr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(v.colorSpace)!==tt,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new an(new Os(2,2),new on({name:"BackgroundMaterial",uniforms:qr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Ea,Hd(r)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Ev(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(P,I,z,W,j){let $=!1;if(a){const Y=_(W,z,I);c!==Y&&(c=Y,f(c.object)),$=m(P,W,z,j),$&&y(P,W,z,j)}else{const Y=I.wireframe===!0;(c.geometry!==W.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=W.id,c.program=z.id,c.wireframe=Y,$=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,L(P,I,z,W),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,I,z){const W=z.wireframe===!0;let j=o[P.id];j===void 0&&(j={},o[P.id]=j);let $=j[I.id];$===void 0&&($={},j[I.id]=$);let Y=$[W];return Y===void 0&&(Y=p(d()),$[W]=Y),Y}function p(P){const I=[],z=[],W=[];for(let j=0;j<i;j++)I[j]=0,z[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:W,object:P,attributes:{},index:null}}function m(P,I,z,W){const j=c.attributes,$=I.attributes;let Y=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){const q=j[te];let re=$[te];if(re===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;Y++}return c.attributesNum!==Y||c.index!==W}function y(P,I,z,W){const j={},$=I.attributes;let Y=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){let q=$[te];q===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),j[te]=re,Y++}c.attributes=j,c.attributesNum=Y,c.index=W}function v(){const P=c.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function S(P){M(P,0)}function M(P,I){const z=c.newAttributes,W=c.enabledAttributes,j=c.attributeDivisors;z[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),j[P]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),j[P]=I)}function E(){const P=c.newAttributes,I=c.enabledAttributes;for(let z=0,W=I.length;z<W;z++)I[z]!==P[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function T(P,I,z,W,j,$,Y){Y===!0?r.vertexAttribIPointer(P,I,z,j,$):r.vertexAttribPointer(P,I,z,W,j,$)}function L(P,I,z,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=W.attributes,$=z.getAttributes(),Y=I.defaultAttributeValues;for(const ee in $){const te=$[ee];if(te.location>=0){let H=j[ee];if(H===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const q=H.normalized,re=H.itemSize,ge=t.get(H);if(ge===void 0)continue;const _e=ge.buffer,De=ge.type,Ie=ge.bytesPerElement,Ee=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||H.gpuType===Ed);if(H.isInterleavedBufferAttribute){const je=H.data,U=je.stride,Ut=H.offset;if(je.isInstancedInterleavedBuffer){for(let xe=0;xe<te.locationSize;xe++)M(te.location+xe,je.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let xe=0;xe<te.locationSize;xe++)S(te.location+xe);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let xe=0;xe<te.locationSize;xe++)T(te.location+xe,re/te.locationSize,De,q,U*Ie,(Ut+re/te.locationSize*xe)*Ie,Ee)}else{if(H.isInstancedBufferAttribute){for(let je=0;je<te.locationSize;je++)M(te.location+je,H.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let je=0;je<te.locationSize;je++)S(te.location+je);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let je=0;je<te.locationSize;je++)T(te.location+je,re/te.locationSize,De,q,re*Ie,re/te.locationSize*je*Ie,Ee)}}else if(Y!==void 0){const q=Y[ee];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(te.location,q);break;case 3:r.vertexAttrib3fv(te.location,q);break;case 4:r.vertexAttrib4fv(te.location,q);break;default:r.vertexAttrib1fv(te.location,q)}}}}E()}function x(){V();for(const P in o){const I=o[P];for(const z in I){const W=I[z];for(const j in W)g(W[j].object),delete W[j];delete I[z]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;const I=o[P.id];for(const z in I){const W=I[z];for(const j in W)g(W[j].object),delete W[j];delete I[z]}delete o[P.id]}function F(P){for(const I in o){const z=o[I];if(z[P.id]===void 0)continue;const W=z[P.id];for(const j in W)g(W[j].object),delete W[j];delete z[P.id]}}function V(){X(),u=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:X,dispose:x,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:E}}function Tv(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Mv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),M=v&&S,E=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function Av(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ki,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let S=m.clippingState||null;l.value=S,S=u(g,d,v,f);for(let M=0;M!==v;++M)S[M]=t[M];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Rv(r){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Wr:o===Al&&(a.mapping=jr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===Al)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new z_(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fo extends Wd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Or=4,qu=[.125,.215,.35,.446,.526,.582],Hi=20,Ko=new fo,Xu=new Ce;let Jo=null,Zo=0,Qo=0;const Bi=(1+Math.sqrt(5))/2,br=1/Bi,Yu=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Bi,br),new O(0,Bi,-br),new O(br,0,Bi),new O(-br,0,Bi),new O(Bi,br,0),new O(-Bi,br,0)];class Ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Zo,Qo),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ii,format:In,colorSpace:ri,depthBuffer:!1},i=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(s)),this._blurMaterial=Pv(s,e,t)}return i}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Ko)}_sceneToCubeUV(e,t,n,i){const o=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xu),u.toneMapping=yi,u.autoClear=!1;const f=new Js({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new an(new sr,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Xu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;Ta(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wr||e.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Yu[(i-1)%Yu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Hi;p>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let y=0;for(let T=0;T<Hi;++T){const L=T/_,x=Math.exp(-L*L/2);m.push(x),T===0?y+=x:T<p&&(y+=2*x)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],M=3*S*(i>v-Or?i-v+Or:0),E=4*(this._cubeSize-S);Ta(t,M,E,3*S,2*S),l.setRenderTarget(t),l.render(h,Ko)}}function Cv(r){const e=[],t=[],n=[];let i=r;const s=r-Or+1+qu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Or?l=qu[a-r+Or-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),v=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,L=E>2?0:-1,x=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(x,_*g*E),v.set(d,p*g*E);const R=[E,E,E,E,E,E];S.set(R,m*g*E)}const M=new Hn;M.setAttribute("position",new Gn(y,_)),M.setAttribute("uv",new Gn(v,p)),M.setAttribute("faceIndex",new Gn(S,m)),e.push(M),i>Or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Pv(r,e,t){const n=new Float32Array(Hi),i=new O(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pc(),fragmentShader:`

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

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Qu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

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
	`}function Lv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ml||l===Al,u=l===Wr||l===jr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ku(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ku(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ov(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,S=y.length;v<S;v+=3){const M=y[v+0],E=y[v+1],T=y[v+2];d.push(M,E,E,T,T,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const M=v+0,E=v+1,T=v+2;d.push(M,E,E,T,T,M)}}else return;const p=new(Id(d)?Vd:Gd)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Iv(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){r.drawElements(s,g,o,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,o,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,o,f,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Uv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nv(r,e){return r[0]-e[0]}function Fv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function kv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let I=function(){X.dispose(),s.delete(u),u.removeEventListener("dispose",I)};var f=I;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),M===!0&&(x=3);let R=u.attributes.position.count*x,F=1;R>e.maxTextureSize&&(F=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const V=new Float32Array(R*F*4*_),X=new Fd(V,R,F,_);X.type=mi,X.needsUpdate=!0;const P=x*4;for(let z=0;z<_;z++){const W=E[z],j=T[z],$=L[z],Y=R*F*4*z;for(let ee=0;ee<W.count;ee++){const te=ee*P;v===!0&&(a.fromBufferAttribute(W,ee),V[Y+te+0]=a.x,V[Y+te+1]=a.y,V[Y+te+2]=a.z,V[Y+te+3]=0),S===!0&&(a.fromBufferAttribute(j,ee),V[Y+te+4]=a.x,V[Y+te+5]=a.y,V[Y+te+6]=a.z,V[Y+te+7]=0),M===!0&&(a.fromBufferAttribute($,ee),V[Y+te+8]=a.x,V[Y+te+9]=a.y,V[Y+te+10]=a.z,V[Y+te+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:X,size:new Re(R,F)},s.set(u,p),u.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const M=_[S];M[0]=S,M[1]=d[S]}_.sort(Fv);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Nv);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const M=o[S],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+S)!==p[E]&&u.setAttribute("morphTarget"+S,p[E]),m&&u.getAttribute("morphNormal"+S)!==m[E]&&u.setAttribute("morphNormal"+S,m[E]),i[S]=T,y+=T):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Bv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class qd extends cn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=pi),n===void 0&&u===$r&&(n=Yi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xd=new cn,Yd=new qd(1,1);Yd.compareFunction=Od;const Kd=new Fd,Jd=new E_,Zd=new jd,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),rh=new Float32Array(4);function as(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=eh[i];if(s===void 0&&(s=new Float32Array(i),eh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function po(r,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function Hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function Wv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;rh.set(n),r.uniformMatrix2fv(this.addr,!1,rh),xt(t,n)}}function jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;ih.set(n),r.uniformMatrix3fv(this.addr,!1,ih),xt(t,n)}}function $v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;nh.set(n),r.uniformMatrix4fv(this.addr,!1,nh),xt(t,n)}}function qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function Jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function ey(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function ty(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Yd:Xd;t.setTexture2D(e||s,i)}function ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jd,i)}function iy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zd,i)}function ry(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kd,i)}function sy(r){switch(r){case 5126:return zv;case 35664:return Gv;case 35665:return Vv;case 35666:return Hv;case 35674:return Wv;case 35675:return jv;case 35676:return $v;case 5124:case 35670:return qv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return Zv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(r,e){r.uniform1fv(this.addr,e)}function oy(r,e){const t=as(e,this.size,2);r.uniform2fv(this.addr,t)}function ly(r,e){const t=as(e,this.size,3);r.uniform3fv(this.addr,t)}function cy(r,e){const t=as(e,this.size,4);r.uniform4fv(this.addr,t)}function uy(r,e){const t=as(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hy(r,e){const t=as(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dy(r,e){const t=as(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fy(r,e){r.uniform1iv(this.addr,e)}function py(r,e){r.uniform2iv(this.addr,e)}function my(r,e){r.uniform3iv(this.addr,e)}function _y(r,e){r.uniform4iv(this.addr,e)}function gy(r,e){r.uniform1uiv(this.addr,e)}function vy(r,e){r.uniform2uiv(this.addr,e)}function yy(r,e){r.uniform3uiv(this.addr,e)}function xy(r,e){r.uniform4uiv(this.addr,e)}function Sy(r,e,t){const n=this.cache,i=e.length,s=po(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xd,s[a])}function by(r,e,t){const n=this.cache,i=e.length,s=po(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jd,s[a])}function wy(r,e,t){const n=this.cache,i=e.length,s=po(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zd,s[a])}function Ey(r,e,t){const n=this.cache,i=e.length,s=po(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kd,s[a])}function Ty(r){switch(r){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return hy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return _y;case 5125:return gy;case 36294:return vy;case 36295:return yy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ey}}class My{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}}class Ry{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function sh(r,e){r.seq.push(e),r.map[e.id]=e}function Cy(r,e,t){const n=r.name,i=n.length;for(el.lastIndex=0;;){const s=el.exec(n),a=el.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){sh(t,c===void 0?new My(o,r,e):new Ay(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ry(o),sh(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Cy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ah(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Py=37297;let Ly=0;function Dy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Oy(r){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(r);let n;switch(e===t?n="":e===ja&&t===Wa?n="LinearDisplayP3ToLinearSRGB":e===Wa&&t===ja&&(n="LinearSRGBToLinearDisplayP3"),r){case ri:case co:return[n,"LinearTransferOETF"];case At:case dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function oh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Dy(r.getShaderSource(e),a)}else return i}function Iy(r,e){const t=Oy(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uy(r,e){let t;switch(e){case qm:t="Linear";break;case Xm:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case Km:t="ACESFilmic";break;case Zm:t="AgX";break;case Jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ny(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Fy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ir).join(`
`)}function ky(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function By(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ir(r){return r!==""}function lh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(r){return r.replace(zy,Vy)}const Gy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vy(r,e){let t=Ne[e];if(t===void 0){const n=Gy.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(Hy,Wy)}function Wy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function $y(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case jm:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function Yy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ky(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jy(t),c=$y(t),u=qy(t),h=Xy(t),d=Yy(t),f=t.isWebGL2?"":Ny(t),g=Fy(t),_=ky(s),p=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ir).join(`
`),y.length>0&&(y+=`
`)):(m=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),y=[f,hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==yi?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Iy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ol(a),a=lh(a,t),a=ch(a,t),o=Ol(o),o=lh(o,t),o=ch(o,t),a=uh(a),o=uh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+m+a,M=v+y+o,E=ah(i,i.VERTEX_SHADER,S),T=ah(i,i.FRAGMENT_SHADER,M);i.attachShader(p,E),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(V){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(E).trim(),I=i.getShaderInfoLog(T).trim();let z=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,E,T);else{const j=oh(i,E,"vertex"),$=oh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+j+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||I==="")&&(W=!1);W&&(V.diagnostics={runnable:z,programLog:X,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:y}})}i.deleteShader(E),i.deleteShader(T),x=new ka(i,p),R=By(i,p)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,Py)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}let Jy=0;class Zy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qy(e),t.set(e,n)),n}}class Qy{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}}function ex(r,e,t,n,i,s,a){const o=new Bd,l=new Zy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,R,F,V,X){const P=V.fog,I=X.geometry,z=x.isMeshStandardMaterial?V.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),j=W&&W.mapping===lo?W.image.height:null,$=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;I.morphAttributes.position!==void 0&&(te=1),I.morphAttributes.normal!==void 0&&(te=2),I.morphAttributes.color!==void 0&&(te=3);let H,q,re,ge;if($){const Nt=kn[$];H=Nt.vertexShader,q=Nt.fragmentShader}else H=x.vertexShader,q=x.fragmentShader,l.update(x),re=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const _e=r.getRenderTarget(),De=X.isInstancedMesh===!0,Ie=X.isBatchedMesh===!0,Ee=!!x.map,je=!!x.matcap,U=!!W,Ut=!!x.aoMap,xe=!!x.lightMap,Pe=!!x.bumpMap,fe=!!x.normalMap,it=!!x.displacementMap,Fe=!!x.emissiveMap,A=!!x.metalnessMap,b=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,J=x.iridescence>0,Q=x.sheen>0,pe=x.transmission>0,oe=k&&!!x.anisotropyMap,ue=Z&&!!x.clearcoatMap,we=Z&&!!x.clearcoatNormalMap,ke=Z&&!!x.clearcoatRoughnessMap,K=J&&!!x.iridescenceMap,qe=J&&!!x.iridescenceThicknessMap,He=Q&&!!x.sheenColorMap,Ae=Q&&!!x.sheenRoughnessMap,ve=!!x.specularMap,he=!!x.specularColorMap,Ue=!!x.specularIntensityMap,$e=pe&&!!x.transmissionMap,lt=pe&&!!x.thicknessMap,ze=!!x.gradientMap,ne=!!x.alphaMap,C=x.alphaTest>0,se=!!x.alphaHash,ae=!!x.extensions,Te=!!I.attributes.uv1,Se=!!I.attributes.uv2,Je=!!I.attributes.uv3;let Ze=yi;return x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:q,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ie,instancing:De,instancingColor:De&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ri,map:Ee,matcap:je,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:j,aoMap:Ut,lightMap:xe,bumpMap:Pe,normalMap:fe,displacementMap:d&&it,emissiveMap:Fe,normalMapObjectSpace:fe&&x.normalMapType===u_,normalMapTangentSpace:fe&&x.normalMapType===Dd,metalnessMap:A,roughnessMap:b,anisotropy:k,anisotropyMap:oe,clearcoat:Z,clearcoatMap:ue,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:qe,sheen:Q,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:ve,specularColorMap:he,specularIntensityMap:Ue,transmission:pe,transmissionMap:$e,thicknessMap:lt,gradientMap:ze,opaque:x.transparent===!1&&x.blending===Fr,alphaMap:ne,alphaTest:C,alphaHash:se,combine:x.combine,mapUv:Ee&&_(x.map.channel),aoMapUv:Ut&&_(x.aoMap.channel),lightMapUv:xe&&_(x.lightMap.channel),bumpMapUv:Pe&&_(x.bumpMap.channel),normalMapUv:fe&&_(x.normalMap.channel),displacementMapUv:it&&_(x.displacementMap.channel),emissiveMapUv:Fe&&_(x.emissiveMap.channel),metalnessMapUv:A&&_(x.metalnessMap.channel),roughnessMapUv:b&&_(x.roughnessMap.channel),anisotropyMapUv:oe&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:Ue&&_(x.specularIntensityMap.channel),transmissionMapUv:$e&&_(x.transmissionMap.channel),thicknessMapUv:lt&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(fe||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Je,pointsUvs:X.isPoints===!0&&!!I.attributes.uv&&(Ee||ne),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)R.push(F),R.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(y(R,x),v(R,x),R.push(r.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function y(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function v(x,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){const R=g[x.type];let F;if(R){const V=kn[R];F=Xa.clone(V.uniforms)}else F=x.uniforms;return F}function M(x,R){let F;for(let V=0,X=c.length;V<X;V++){const P=c[V];if(P.cacheKey===R){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Ky(r,R,x,s),c.push(F)),F}function E(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:L}}function tx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||nx),n.length>1&&n.sort(d||dh),i.length>1&&i.sort(d||dh)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function ix(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new fh,r.set(n,[a])):i>=s.length?(a=new fh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ce};break;case"SpotLight":t={position:new O,direction:new O,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function sx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ax=0;function ox(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lx(r,e){const t=new rx,n=sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,a=new gt,o=new gt;function l(u,h){let d=0,f=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,S=0,M=0,E=0,T=0,L=0,x=0;u.sort(ox);const R=h===!0?Math.PI:1;for(let V=0,X=u.length;V<X;V++){const P=u[V],I=P.color,z=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*z*R,f+=I.g*z*R,g+=I.b*z*R;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],z);x++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){const Y=P.shadow,ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(I).multiplyScalar(z*R),$.distance=W,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[m]=$;const Y=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[m]=Y.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.spotShadow[m]=ee,i.spotShadowMap[m]=j,E++}m++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(I).multiplyScalar(z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=$,y++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*R),$.distance=P.distance,$.decay=P.decay,P.castShadow){const Y=P.shadow,ee=n.get(P);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=P.shadow.matrix,M++}i.point[p]=$,p++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(z*R),$.groundColor.copy(P.groundColor).multiplyScalar(z*R),i.hemi[v]=$,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==y||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==M||F.numSpotShadows!==E||F.numSpotMaps!==T||F.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=x,F.directionalLength=_,F.pointLength=p,F.spotLength=m,F.rectAreaLength=y,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=M,F.numSpotShadows=E,F.numSpotMaps=T,F.numLightProbes=x,i.version=ax++)}function c(u,h){let d=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function ph(r,e){const t=new lx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cx(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ph(r,e),t.set(s,[l])):a>=o.length?(l=new ph(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ux extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
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
}`;function px(r,e,t){let n=new fc;const i=new Re,s=new Re,a=new Et,o=new ux({depthPacking:c_}),l=new hx,c={},u=t.maxTextureSize,h={[wi]:jt,[jt]:wi,[Dn]:Dn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let m=this.type;this.render=function(E,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const x=r.getRenderTarget(),R=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ni),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=m!==Kn&&this.type===Kn,P=m===Kn&&this.type!==Kn;for(let I=0,z=E.length;I<z;I++){const W=E[I],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const $=j.getFrameExtents();if(i.multiply($),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,j.mapSize.y=s.y)),j.map===null||X===!0||P===!0){const ee=this.type!==Kn?{minFilter:Bt,magFilter:Bt}:{};j.map!==null&&j.map.dispose(),j.map=new Un(i.x,i.y,ee),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Y=j.getViewportCount();for(let ee=0;ee<Y;ee++){const te=j.getViewport(ee);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),V.viewport(a),j.updateMatrices(W,ee),n=j.getFrustum(),S(T,L,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===Kn&&y(j,L),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(x,R,F)};function y(E,T){const L=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,L,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,L,f,_,null)}function v(E,T,L,x){let R=null;const F=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)R=F;else if(R=L.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=R.uuid,X=T.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let I=P[X];I===void 0&&(I=R.clone(),P[X]=I,T.addEventListener("dispose",M)),R=I}if(R.visible=T.visible,R.wireframe=T.wireframe,x===Kn?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const V=r.properties.get(R);V.light=L}return R}function S(E,T,L,x,R){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const X=e.update(E),P=E.material;if(Array.isArray(P)){const I=X.groups;for(let z=0,W=I.length;z<W;z++){const j=I[z],$=P[j.materialIndex];if($&&$.visible){const Y=v(E,$,x,R);E.onBeforeShadow(r,E,T,L,X,Y,j),r.renderBufferDirect(L,null,X,Y,E,j),E.onAfterShadow(r,E,T,L,X,Y,j)}}}else if(P.visible){const I=v(E,P,x,R);E.onBeforeShadow(r,E,T,L,X,I,null),r.renderBufferDirect(L,null,X,I,E,null),E.onAfterShadow(r,E,T,L,X,I,null)}}const V=E.children;for(let X=0,P=V.length;X<P;X++)S(V[X],T,L,x,R)}function M(E){E.target.removeEventListener("dispose",M);for(const L in c){const x=c[L],R=E.target.uuid;R in x&&(x[R].dispose(),delete x[R])}}}function mx(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const se=new Et;let ae=null;const Te=new Et(0,0,0,0);return{setMask:function(Se){ae!==Se&&!C&&(r.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){C=Se},setClear:function(Se,Je,Ze,St,Nt){Nt===!0&&(Se*=St,Je*=St,Ze*=St),se.set(Se,Je,Ze,St),Te.equals(se)===!1&&(r.clearColor(Se,Je,Ze,St),Te.copy(se))},reset:function(){C=!1,ae=null,Te.set(-1,0,0,0)}}}function s(){let C=!1,se=null,ae=null,Te=null;return{setTest:function(Se){Se?Ie(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(Se){se!==Se&&!C&&(r.depthMask(Se),se=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case km:r.depthFunc(r.NEVER);break;case Bm:r.depthFunc(r.ALWAYS);break;case zm:r.depthFunc(r.LESS);break;case Va:r.depthFunc(r.LEQUAL);break;case Gm:r.depthFunc(r.EQUAL);break;case Vm:r.depthFunc(r.GEQUAL);break;case Hm:r.depthFunc(r.GREATER);break;case Wm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Se}},setLocked:function(Se){C=Se},setClear:function(Se){Te!==Se&&(r.clearDepth(Se),Te=Se)},reset:function(){C=!1,se=null,ae=null,Te=null}}}function a(){let C=!1,se=null,ae=null,Te=null,Se=null,Je=null,Ze=null,St=null,Nt=null;return{setTest:function(Qe){C||(Qe?Ie(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!C&&(r.stencilMask(Qe),se=Qe)},setFunc:function(Qe,Ft,Nn){(ae!==Qe||Te!==Ft||Se!==Nn)&&(r.stencilFunc(Qe,Ft,Nn),ae=Qe,Te=Ft,Se=Nn)},setOp:function(Qe,Ft,Nn){(Je!==Qe||Ze!==Ft||St!==Nn)&&(r.stencilOp(Qe,Ft,Nn),Je=Qe,Ze=Ft,St=Nn)},setLocked:function(Qe){C=Qe},setClear:function(Qe){Nt!==Qe&&(r.clearStencil(Qe),Nt=Qe)},reset:function(){C=!1,se=null,ae=null,Te=null,Se=null,Je=null,Ze=null,St=null,Nt=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,M=null,E=null,T=null,L=null,x=new Ce(0,0,0),R=0,F=!1,V=null,X=null,P=null,I=null,z=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=$>=2);let ee=null,te={};const H=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),re=new Et().fromArray(H),ge=new Et().fromArray(q);function _e(C,se,ae,Te){const Se=new Uint8Array(4),Je=r.createTexture();r.bindTexture(C,Je),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<ae;Ze++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(se+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return Je}const De={};De[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(r.DEPTH_TEST),l.setFunc(Va),Fe(!1),A(Kc),Ie(r.CULL_FACE),fe(ni);function Ie(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function Ee(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function je(C,se){return f[C]!==se?(r.bindFramebuffer(C,se),f[C]=se,n&&(C===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=se),C===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(C,se){let ae=_,Te=!1;if(C)if(ae=g.get(se),ae===void 0&&(ae=[],g.set(se,ae)),C.isWebGLMultipleRenderTargets){const Se=C.texture;if(ae.length!==Se.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Je=0,Ze=Se.length;Je<Ze;Je++)ae[Je]=r.COLOR_ATTACHMENT0+Je;ae.length=Se.length,Te=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,Te=!0);Te&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ut(C){return p!==C?(r.useProgram(C),p=C,!0):!1}const xe={[Vi]:r.FUNC_ADD,[wm]:r.FUNC_SUBTRACT,[Em]:r.FUNC_REVERSE_SUBTRACT};if(n)xe[Qc]=r.MIN,xe[eu]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(xe[Qc]=C.MIN_EXT,xe[eu]=C.MAX_EXT)}const Pe={[Tm]:r.ZERO,[Mm]:r.ONE,[Am]:r.SRC_COLOR,[El]:r.SRC_ALPHA,[Om]:r.SRC_ALPHA_SATURATE,[Lm]:r.DST_COLOR,[Cm]:r.DST_ALPHA,[Rm]:r.ONE_MINUS_SRC_COLOR,[Tl]:r.ONE_MINUS_SRC_ALPHA,[Dm]:r.ONE_MINUS_DST_COLOR,[Pm]:r.ONE_MINUS_DST_ALPHA,[Im]:r.CONSTANT_COLOR,[Um]:r.ONE_MINUS_CONSTANT_COLOR,[Nm]:r.CONSTANT_ALPHA,[Fm]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(C,se,ae,Te,Se,Je,Ze,St,Nt,Qe){if(C===ni){m===!0&&(Ee(r.BLEND),m=!1);return}if(m===!1&&(Ie(r.BLEND),m=!0),C!==bm){if(C!==y||Qe!==F){if((v!==Vi||E!==Vi)&&(r.blendEquation(r.FUNC_ADD),v=Vi,E=Vi),Qe)switch(C){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.ONE,r.ONE);break;case Jc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,M=null,T=null,L=null,x.set(0,0,0),R=0,y=C,F=Qe}return}Se=Se||se,Je=Je||ae,Ze=Ze||Te,(se!==v||Se!==E)&&(r.blendEquationSeparate(xe[se],xe[Se]),v=se,E=Se),(ae!==S||Te!==M||Je!==T||Ze!==L)&&(r.blendFuncSeparate(Pe[ae],Pe[Te],Pe[Je],Pe[Ze]),S=ae,M=Te,T=Je,L=Ze),(St.equals(x)===!1||Nt!==R)&&(r.blendColor(St.r,St.g,St.b,Nt),x.copy(St),R=Nt),y=C,F=!1}function it(C,se){C.side===Dn?Ee(r.CULL_FACE):Ie(r.CULL_FACE);let ae=C.side===jt;se&&(ae=!ae),Fe(ae),C.blending===Fr&&C.transparent===!1?fe(ni):fe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const Te=C.stencilWrite;c.setTest(Te),Te&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){V!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),V=C)}function A(C){C!==xm?(Ie(r.CULL_FACE),C!==X&&(C===Kc?r.cullFace(r.BACK):C===Sm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),X=C}function b(C){C!==P&&(j&&r.lineWidth(C),P=C)}function k(C,se,ae){C?(Ie(r.POLYGON_OFFSET_FILL),(I!==se||z!==ae)&&(r.polygonOffset(se,ae),I=se,z=ae)):Ee(r.POLYGON_OFFSET_FILL)}function Z(C){C?Ie(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function J(C){C===void 0&&(C=r.TEXTURE0+W-1),ee!==C&&(r.activeTexture(C),ee=C)}function Q(C,se,ae){ae===void 0&&(ee===null?ae=r.TEXTURE0+W-1:ae=ee);let Te=te[ae];Te===void 0&&(Te={type:void 0,texture:void 0},te[ae]=Te),(Te.type!==C||Te.texture!==se)&&(ee!==ae&&(r.activeTexture(ae),ee=ae),r.bindTexture(C,se||De[C]),Te.type=C,Te.texture=se)}function pe(){const C=te[ee];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(C){re.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function $e(C){ge.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function lt(C,se){let ae=h.get(se);ae===void 0&&(ae=new WeakMap,h.set(se,ae));let Te=ae.get(C);Te===void 0&&(Te=r.getUniformBlockIndex(se,C.name),ae.set(C,Te))}function ze(C,se){const Te=h.get(se).get(C);u.get(se)!==Te&&(r.uniformBlockBinding(se,Te,C.__bindingPointIndex),u.set(se,Te))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ee=null,te={},f={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,M=null,E=null,T=null,L=null,x=new Ce(0,0,0),R=0,F=!1,V=null,X=null,P=null,I=null,z=null,re.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Ee,bindFramebuffer:je,drawBuffers:U,useProgram:Ut,setBlending:fe,setMaterial:it,setFlipSided:Fe,setCullFace:A,setLineWidth:b,setPolygonOffset:k,setScissorTest:Z,activeTexture:J,bindTexture:Q,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:ve,texImage3D:he,updateUBOMapping:lt,uniformBlockBinding:ze,texStorage2D:He,texStorage3D:Ae,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:K,compressedTexSubImage3D:qe,scissor:Ue,viewport:$e,reset:ne}}function _x(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):qa("canvas")}function _(A,b,k,Z){let J=1;if((A.width>Z||A.height>Z)&&(J=Z/Math.max(A.width,A.height)),J<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Q=b?Dl:Math.floor,pe=Q(J*A.width),oe=Q(J*A.height);h===void 0&&(h=g(pe,oe));const ue=k?g(pe,oe):h;return ue.width=pe,ue.height=oe,ue.getContext("2d").drawImage(A,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pe+"x"+oe+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Pu(A.width)&&Pu(A.height)}function m(A){return o?!1:A.wrapS!==On||A.wrapT!==On||A.minFilter!==Bt&&A.minFilter!==yn}function y(A,b){return A.generateMipmaps&&b&&A.minFilter!==Bt&&A.minFilter!==yn}function v(A){r.generateMipmap(A)}function S(A,b,k,Z,J=!1){if(o===!1)return b;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=b;if(b===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),b===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8)),b===r.RGBA){const pe=J?Ha:Xe.getTransfer(Z);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=pe===tt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(A,b,k){return y(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){return A===Bt||A===tu||A===To?r.NEAREST:r.LINEAR}function T(A){const b=A.target;b.removeEventListener("dispose",T),x(b),b.isVideoTexture&&u.delete(b)}function L(A){const b=A.target;b.removeEventListener("dispose",L),F(b)}function x(A){const b=n.get(A);if(b.__webglInit===void 0)return;const k=A.source,Z=d.get(k);if(Z){const J=Z[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(Z).length===0&&d.delete(k)}n.remove(A)}function R(A){const b=n.get(A);r.deleteTexture(b.__webglTexture);const k=A.source,Z=d.get(k);delete Z[b.__cacheKey],a.memory.textures--}function F(A){const b=A.texture,k=n.get(A),Z=n.get(b);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let Q=0;Q<k.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(k.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)r.deleteFramebuffer(k.__webglFramebuffer[J]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,Q=b.length;J<Q;J++){const pe=n.get(b[J]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(b[J])}n.remove(b),n.remove(A)}let V=0;function X(){V=0}function P(){const A=V;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),V+=1,A}function I(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function z(A,b){const k=n.get(A);if(A.isVideoTexture&&it(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,A,b);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function W(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){re(k,A,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function j(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){re(k,A,b);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function $(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ge(k,A,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}const Y={[Rl]:r.REPEAT,[On]:r.CLAMP_TO_EDGE,[Cl]:r.MIRRORED_REPEAT},ee={[Bt]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[To]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Qm]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},te={[h_]:r.NEVER,[g_]:r.ALWAYS,[d_]:r.LESS,[Od]:r.LEQUAL,[f_]:r.EQUAL,[__]:r.GEQUAL,[p_]:r.GREATER,[m_]:r.NOTEQUAL};function H(A,b,k){if(k?(r.texParameteri(A,r.TEXTURE_WRAP_S,Y[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Y[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Y[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ee[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ee[b.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==On||b.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,E(b.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==Bt&&b.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Bt||b.minFilter!==To&&b.minFilter!==Ds||b.type===mi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===ii&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function q(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const Z=b.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const Q=I(b);if(Q!==A.__cacheKey){J[Q]===void 0&&(J[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Q].usedTimes++;const pe=J[A.__cacheKey];pe!==void 0&&(J[A.__cacheKey].usedTimes--,pe.usedTimes===0&&R(b)),A.__cacheKey=Q,A.__webglTexture=J[Q].texture}return k}function re(A,b,k){let Z=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=r.TEXTURE_3D);const J=q(A,b),Q=b.source;t.bindTexture(Z,A.__webglTexture,r.TEXTURE0+k);const pe=n.get(Q);if(Q.version!==pe.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const oe=Xe.getPrimaries(Xe.workingColorSpace),ue=b.colorSpace===xn?null:Xe.getPrimaries(b.colorSpace),we=b.colorSpace===xn||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=m(b)&&p(b.image)===!1;let K=_(b.image,ke,!1,i.maxTextureSize);K=Fe(b,K);const qe=p(K)||o,He=s.convert(b.format,b.colorSpace);let Ae=s.convert(b.type),ve=S(b.internalFormat,He,Ae,b.colorSpace,b.isVideoTexture);H(Z,b,qe);let he;const Ue=b.mipmaps,$e=o&&b.isVideoTexture!==!0&&ve!==Pd,lt=pe.__version===void 0||J===!0,ze=M(b,K,qe);if(b.isDepthTexture)ve=r.DEPTH_COMPONENT,o?b.type===mi?ve=r.DEPTH_COMPONENT32F:b.type===pi?ve=r.DEPTH_COMPONENT24:b.type===Yi?ve=r.DEPTH24_STENCIL8:ve=r.DEPTH_COMPONENT16:b.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ki&&ve===r.DEPTH_COMPONENT&&b.type!==hc&&b.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=pi,Ae=s.convert(b.type)),b.format===$r&&ve===r.DEPTH_COMPONENT&&(ve=r.DEPTH_STENCIL,b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yi,Ae=s.convert(b.type))),lt&&($e?t.texStorage2D(r.TEXTURE_2D,1,ve,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,ve,K.width,K.height,0,He,Ae,null));else if(b.isDataTexture)if(Ue.length>0&&qe){$e&&lt&&t.texStorage2D(r.TEXTURE_2D,ze,ve,Ue[0].width,Ue[0].height);for(let ne=0,C=Ue.length;ne<C;ne++)he=Ue[ne],$e?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,Ae,he.data):t.texImage2D(r.TEXTURE_2D,ne,ve,he.width,he.height,0,He,Ae,he.data);b.generateMipmaps=!1}else $e?(lt&&t.texStorage2D(r.TEXTURE_2D,ze,ve,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,He,Ae,K.data)):t.texImage2D(r.TEXTURE_2D,0,ve,K.width,K.height,0,He,Ae,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,ve,Ue[0].width,Ue[0].height,K.depth);for(let ne=0,C=Ue.length;ne<C;ne++)he=Ue[ne],b.format!==In?He!==null?$e?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,He,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ve,he.width,he.height,K.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,He,Ae,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ve,he.width,he.height,K.depth,0,He,Ae,he.data)}else{$e&&lt&&t.texStorage2D(r.TEXTURE_2D,ze,ve,Ue[0].width,Ue[0].height);for(let ne=0,C=Ue.length;ne<C;ne++)he=Ue[ne],b.format!==In?He!==null?$e?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,He,Ae,he.data):t.texImage2D(r.TEXTURE_2D,ne,ve,he.width,he.height,0,He,Ae,he.data)}else if(b.isDataArrayTexture)$e?(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,ve,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,He,Ae,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,K.width,K.height,K.depth,0,He,Ae,K.data);else if(b.isData3DTexture)$e?(lt&&t.texStorage3D(r.TEXTURE_3D,ze,ve,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,He,Ae,K.data)):t.texImage3D(r.TEXTURE_3D,0,ve,K.width,K.height,K.depth,0,He,Ae,K.data);else if(b.isFramebufferTexture){if(lt)if($e)t.texStorage2D(r.TEXTURE_2D,ze,ve,K.width,K.height);else{let ne=K.width,C=K.height;for(let se=0;se<ze;se++)t.texImage2D(r.TEXTURE_2D,se,ve,ne,C,0,He,Ae,null),ne>>=1,C>>=1}}else if(Ue.length>0&&qe){$e&&lt&&t.texStorage2D(r.TEXTURE_2D,ze,ve,Ue[0].width,Ue[0].height);for(let ne=0,C=Ue.length;ne<C;ne++)he=Ue[ne],$e?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,He,Ae,he):t.texImage2D(r.TEXTURE_2D,ne,ve,He,Ae,he);b.generateMipmaps=!1}else $e?(lt&&t.texStorage2D(r.TEXTURE_2D,ze,ve,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Ae,K)):t.texImage2D(r.TEXTURE_2D,0,ve,He,Ae,K);y(b,qe)&&v(Z),pe.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ge(A,b,k){if(b.image.length!==6)return;const Z=q(A,b),J=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const Q=n.get(J);if(J.version!==Q.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);const pe=Xe.getPrimaries(Xe.workingColorSpace),oe=b.colorSpace===xn?null:Xe.getPrimaries(b.colorSpace),ue=b.colorSpace===xn||pe===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,ke=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!we&&!ke?K[ne]=_(b.image[ne],!1,!0,i.maxCubemapSize):K[ne]=ke?b.image[ne].image:b.image[ne],K[ne]=Fe(b,K[ne]);const qe=K[0],He=p(qe)||o,Ae=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),he=S(b.internalFormat,Ae,ve,b.colorSpace),Ue=o&&b.isVideoTexture!==!0,$e=Q.__version===void 0||Z===!0;let lt=M(b,qe,He);H(r.TEXTURE_CUBE_MAP,b,He);let ze;if(we){Ue&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,he,qe.width,qe.height);for(let ne=0;ne<6;ne++){ze=K[ne].mipmaps;for(let C=0;C<ze.length;C++){const se=ze[C];b.format!==In?Ae!==null?Ue?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ae,ve,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,he,se.width,se.height,0,Ae,ve,se.data)}}}else{ze=b.mipmaps,Ue&&$e&&(ze.length>0&&lt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,he,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(ke){Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Ae,ve,K[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,K[ne].width,K[ne].height,0,Ae,ve,K[ne].data);for(let C=0;C<ze.length;C++){const ae=ze[C].image[ne].image;Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,ae.width,ae.height,Ae,ve,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,he,ae.width,ae.height,0,Ae,ve,ae.data)}}else{Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,ve,K[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,Ae,ve,K[ne]);for(let C=0;C<ze.length;C++){const se=ze[C];Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ae,ve,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,he,Ae,ve,se.image[ne])}}}y(b,He)&&v(r.TEXTURE_CUBE_MAP),Q.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _e(A,b,k,Z,J,Q){const pe=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),ue=S(k.internalFormat,pe,oe,k.colorSpace);if(!n.get(b).__hasExternalTextures){const ke=Math.max(1,b.width>>Q),K=Math.max(1,b.height>>Q);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,ue,ke,K,b.depth,0,pe,oe,null):t.texImage2D(J,Q,ue,ke,K,0,pe,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),fe(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,n.get(k).__webglTexture,0,Pe(b)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,n.get(k).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(A,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||fe(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===mi?Z=r.DEPTH_COMPONENT32F:J.type===pi&&(Z=r.DEPTH_COMPONENT24));const Q=Pe(b);fe(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,Z,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,Z,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const Z=Pe(b);k&&fe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,b.width,b.height):fe(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const Z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<Z.length;J++){const Q=Z[J],pe=s.convert(Q.format,Q.colorSpace),oe=s.convert(Q.type),ue=S(Q.internalFormat,pe,oe,Q.colorSpace),we=Pe(b);k&&fe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ue,b.width,b.height):fe(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ue,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ue,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const Z=n.get(b.depthTexture).__webglTexture,J=Pe(b);if(b.depthTexture.format===Ki)fe(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(b.depthTexture.format===$r)fe(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const b=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,A)}else if(k){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=r.createRenderbuffer(),De(b.__webglDepthbuffer[Z],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),De(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(A,b,k){const Z=n.get(A);b!==void 0&&_e(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ee(A)}function U(A){const b=A.texture,k=n.get(A),Z=n.get(b);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=b.version,a.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,Q=A.isWebGLMultipleRenderTargets===!0,pe=p(A)||o;if(J){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let ue=0;ue<b.mipmaps.length;ue++)k.__webglFramebuffer[oe][ue]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){const oe=A.texture;for(let ue=0,we=oe.length;ue<we;ue++){const ke=n.get(oe[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&fe(A)===!1){const oe=Q?b:[b];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const we=oe[ue];k.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const ke=s.convert(we.format,we.colorSpace),K=s.convert(we.type),qe=S(we.internalFormat,ke,K,we.colorSpace,A.isXRRenderTarget===!0),He=Pe(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,qe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),De(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),H(r.TEXTURE_CUBE_MAP,b,pe);for(let oe=0;oe<6;oe++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)_e(k.__webglFramebuffer[oe][ue],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else _e(k.__webglFramebuffer[oe],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(b,pe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const oe=A.texture;for(let ue=0,we=oe.length;ue<we;ue++){const ke=oe[ue],K=n.get(ke);t.bindTexture(r.TEXTURE_2D,K.__webglTexture),H(r.TEXTURE_2D,ke,pe),_e(k.__webglFramebuffer,A,ke,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),y(ke,pe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?oe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Z.__webglTexture),H(oe,b,pe),o&&b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)_e(k.__webglFramebuffer[ue],A,b,r.COLOR_ATTACHMENT0,oe,ue);else _e(k.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,oe,0);y(b,pe)&&v(oe),t.unbindTexture()}A.depthBuffer&&Ee(A)}function Ut(A){const b=p(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Z=0,J=k.length;Z<J;Z++){const Q=k[Z];if(y(Q,b)){const pe=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(Q).__webglTexture;t.bindTexture(pe,oe),v(pe),t.unbindTexture()}}}function xe(A){if(o&&A.samples>0&&fe(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,Z=A.height;let J=r.COLOR_BUFFER_BIT;const Q=[],pe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let we=0;we<b.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let we=0;we<b.length;we++){Q.push(r.COLOR_ATTACHMENT0+we),A.depthBuffer&&Q.push(pe);const ke=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[we]),ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),ue){const K=n.get(b[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,J,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<b.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,oe.__webglColorRenderbuffer[we]);const ke=n.get(b[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Pe(A){return Math.min(i.maxSamples,A.samples)}function fe(A){const b=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function it(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Fe(A,b){const k=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pl||k!==ri&&k!==xn&&(Xe.getTransfer(k)===tt?o===!1?e.has("EXT_sRGB")===!0&&Z===In?(A.format=Pl,A.minFilter=yn,A.generateMipmaps=!1):b=Ud.sRGBToLinear(b):(Z!==In||J!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe}function gx(r,e,t){const n=t.isWebGL2;function i(s,a=xn){let o;const l=Xe.getTransfer(a);if(s===xi)return r.UNSIGNED_BYTE;if(s===Td)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Md)return r.UNSIGNED_SHORT_5_5_5_1;if(s===e_)return r.BYTE;if(s===t_)return r.SHORT;if(s===hc)return r.UNSIGNED_SHORT;if(s===Ed)return r.INT;if(s===pi)return r.UNSIGNED_INT;if(s===mi)return r.FLOAT;if(s===ii)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===n_)return r.ALPHA;if(s===In)return r.RGBA;if(s===i_)return r.LUMINANCE;if(s===r_)return r.LUMINANCE_ALPHA;if(s===Ki)return r.DEPTH_COMPONENT;if(s===$r)return r.DEPTH_STENCIL;if(s===Pl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===s_)return r.RED;if(s===Ad)return r.RED_INTEGER;if(s===a_)return r.RG;if(s===Rd)return r.RG_INTEGER;if(s===Cd)return r.RGBA_INTEGER;if(s===Mo||s===Ao||s===Ro||s===Co)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nu||s===iu||s===ru||s===su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ru)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===au)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ou)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===cu||s===uu||s===hu||s===du||s===fu||s===pu||s===mu||s===_u||s===gu||s===vu||s===yu||s===xu||s===Su)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===du)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_u)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xu)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Su)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Po||s===bu||s===wu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Po)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===o_||s===Eu||s===Tu||s===Mu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Po)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vx extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xx extends rs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],v=[],S=new Re;let M=null;const E=new Ln;E.layers.enable(1),E.viewport=new Et;const T=new Ln;T.layers.enable(2),T.viewport=new Et;const L=[E,T],x=new vx;x.layers.enable(1),x.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=y[H];return q===void 0&&(q=new tl,y[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=y[H];return q===void 0&&(q=new tl,y[H]=q),q.getGripSpace()},this.getHand=function(H){let q=y[H];return q===void 0&&(q=new tl,y[H]=q),q.getHandSpace()};function V(H){const q=v.indexOf(H.inputSource);if(q===-1)return;const re=y[q];re!==void 0&&(re.update(H.inputSource,H.frame,c||a),re.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",P);for(let H=0;H<y.length;H++){const q=v[H];q!==null&&(v[H]=null,y[H].disconnect(q))}R=null,F=null,e.setRenderTarget(p),f=null,d=null,h=null,i=null,m=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",X),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Un(f.framebufferWidth,f.framebufferHeight,{format:In,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,re=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?$r:Ki,re=_.stencil?Yi:pi);const _e={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(_e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Un(d.textureWidth,d.textureHeight,{format:In,type:xi,depthTexture:new qd(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(m);De.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(H){for(let q=0;q<H.removed.length;q++){const re=H.removed[q],ge=v.indexOf(re);ge>=0&&(v[ge]=null,y[ge].disconnect(re))}for(let q=0;q<H.added.length;q++){const re=H.added[q];let ge=v.indexOf(re);if(ge===-1){for(let De=0;De<y.length;De++)if(De>=v.length){v.push(re),ge=De;break}else if(v[De]===null){v[De]=re,ge=De;break}if(ge===-1)break}const _e=y[ge];_e&&_e.connect(re)}}const I=new O,z=new O;function W(H,q,re){I.setFromMatrixPosition(q.matrixWorld),z.setFromMatrixPosition(re.matrixWorld);const ge=I.distanceTo(z),_e=q.projectionMatrix.elements,De=re.projectionMatrix.elements,Ie=_e[14]/(_e[10]-1),Ee=_e[14]/(_e[10]+1),je=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],Ut=(_e[8]-1)/_e[0],xe=(De[8]+1)/De[0],Pe=Ie*Ut,fe=Ie*xe,it=ge/(-Ut+xe),Fe=it*-Ut;q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Fe),H.translateZ(it),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const A=Ie+it,b=Ee+it,k=Pe-Fe,Z=fe+(ge-Fe),J=je*Ee/b*A,Q=U*Ee/b*A;H.projectionMatrix.makePerspective(k,Z,J,Q,A,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function j(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;x.near=T.near=E.near=H.near,x.far=T.far=E.far=H.far,(R!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,F=x.far);const q=H.parent,re=x.cameras;j(x,q);for(let ge=0;ge<re.length;ge++)j(re[ge],q);re.length===2?W(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),$(H,x,q)};function $(H,q,re){re===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ll*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let Y=null;function ee(H,q){if(u=q.getViewerPose(c||a),g=q,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ge=!1;re.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let _e=0;_e<re.length;_e++){const De=re[_e];let Ie=null;if(f!==null)Ie=f.getViewport(De);else{const je=h.getViewSubImage(d,De);Ie=je.viewport,_e===0&&(e.setRenderTargetTextures(m,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(m))}let Ee=L[_e];Ee===void 0&&(Ee=new Ln,Ee.layers.enable(_e),Ee.viewport=new Et,L[_e]=Ee),Ee.matrix.fromArray(De.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(De.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),_e===0&&(x.matrix.copy(Ee.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(Ee)}}for(let re=0;re<y.length;re++){const ge=v[re],_e=y[re];ge!==null&&_e!==void 0&&_e.update(ge,q,c||a)}Y&&Y(H,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const te=new $d;te.setAnimationLoop(ee),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function Sx(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(y,M);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const S=r.createBuffer(),M=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,T=S.length;E<T;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let x=0,R=L.length;x<R;x++){const F=L[x];if(f(F,E,x,M)===!0){const V=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let I=0;I<X.length;I++){const z=X[I],W=_(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,V+P,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,S,M){const E=y.value,T=v+"_"+S;if(M[T]===void 0)return typeof E=="number"||typeof E=="boolean"?M[T]=E:M[T]=E.clone(),!0;{const L=M[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return M[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(y){const v=y.uniforms;let S=0;const M=16;for(let T=0,L=v.length;T<L;T++){const x=Array.isArray(v[T])?v[T]:[v[T]];for(let R=0,F=x.length;R<F;R++){const V=x[R],X=Array.isArray(V.value)?V.value:[V.value];for(let P=0,I=X.length;P<I;P++){const z=X[P],W=_(z),j=S%M;j!==0&&M-j<W.boundary&&(S+=M-j),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=W.storage}}}const E=S%M;return E>0&&(S+=M-E),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Qd{constructor(e={}){const{canvas:t=y_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let S=!1,M=0,E=0,T=null,L=-1,x=null;const R=new Et,F=new Et;let V=null;const X=new Ce(0);let P=0,I=t.width,z=t.height,W=1,j=null,$=null;const Y=new Et(0,0,I,z),ee=new Et(0,0,I,z);let te=!1;const H=new fc;let q=!1,re=!1,ge=null;const _e=new gt,De=new Re,Ie=new O,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return T===null?W:1}let U=n;function Ut(w,D){for(let B=0;B<w.length;B++){const G=w[B],N=t.getContext(G,D);if(N!==null)return N}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),U=Ut(D,w),U===null)throw Ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xe,Pe,fe,it,Fe,A,b,k,Z,J,Q,pe,oe,ue,we,ke,K,qe,He,Ae,ve,he,Ue,$e;function lt(){xe=new Dv(U),Pe=new Mv(U,xe,e),xe.init(Pe),he=new gx(U,xe,Pe),fe=new mx(U,xe,Pe),it=new Uv(U),Fe=new tx,A=new _x(U,xe,fe,Fe,Pe,he,it),b=new Rv(v),k=new Lv(v),Z=new H_(U,Pe),Ue=new Ev(U,xe,Z,Pe),J=new Ov(U,Z,it,Ue),Q=new Bv(U,J,Z,it),He=new kv(U,Pe,A),ke=new Av(Fe),pe=new ex(v,b,k,xe,Pe,Ue,ke),oe=new Sx(v,Fe),ue=new ix,we=new cx(xe,Pe),qe=new wv(v,b,k,fe,Q,d,l),K=new px(v,Q,Pe),$e=new bx(U,it,Pe,fe),Ae=new Tv(U,xe,it,Pe),ve=new Iv(U,xe,it,Pe),it.programs=pe.programs,v.capabilities=Pe,v.extensions=xe,v.properties=Fe,v.renderLists=ue,v.shadowMap=K,v.state=fe,v.info=it}lt();const ze=new xx(v,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(I,z,!1))},this.getSize=function(w){return w.set(I,z)},this.setSize=function(w,D,B=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,z=D,t.width=Math.floor(w*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(I*W,z*W).floor()},this.setDrawingBufferSize=function(w,D,B){I=w,z=D,W=B,t.width=Math.floor(w*B),t.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,D,B,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,D,B,G),fe.viewport(R.copy(Y).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,D,B,G){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,D,B,G),fe.scissor(F.copy(ee).multiplyScalar(W).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){fe.setScissorTest(te=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,D=!0,B=!0){let G=0;if(w){let N=!1;if(T!==null){const le=T.texture.format;N=le===Cd||le===Rd||le===Ad}if(N){const le=T.texture.type,me=le===xi||le===pi||le===hc||le===Yi||le===Td||le===Md,be=qe.getClearColor(),Me=qe.getClearAlpha(),Be=be.r,Le=be.g,Oe=be.b;me?(f[0]=Be,f[1]=Le,f[2]=Oe,f[3]=Me,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Be,g[1]=Le,g[2]=Oe,g[3]=Me,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT),B&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),we.dispose(),Fe.dispose(),b.dispose(),k.dispose(),Q.dispose(),Ue.dispose(),$e.dispose(),pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Nt),ze.removeEventListener("sessionend",Qe),ge&&(ge.dispose(),ge=null),Ft.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=it.autoReset,D=K.enabled,B=K.autoUpdate,G=K.needsUpdate,N=K.type;lt(),it.autoReset=w,K.enabled=D,K.autoUpdate=B,K.needsUpdate=G,K.type=N}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const D=w.target;D.removeEventListener("dispose",ae),Te(D)}function Te(w){Se(w),Fe.remove(w)}function Se(w){const D=Fe.get(w).programs;D!==void 0&&(D.forEach(function(B){pe.releaseProgram(B)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,G,N,le){D===null&&(D=Ee);const me=N.isMesh&&N.matrixWorld.determinant()<0,be=mm(w,D,B,G,N);fe.setMaterial(G,me);let Me=B.index,Be=1;if(G.wireframe===!0){if(Me=J.getWireframeAttribute(B),Me===void 0)return;Be=2}const Le=B.drawRange,Oe=B.attributes.position;let ht=Le.start*Be,Jt=(Le.start+Le.count)*Be;le!==null&&(ht=Math.max(ht,le.start*Be),Jt=Math.min(Jt,(le.start+le.count)*Be)),Me!==null?(ht=Math.max(ht,0),Jt=Math.min(Jt,Me.count)):Oe!=null&&(ht=Math.max(ht,0),Jt=Math.min(Jt,Oe.count));const bt=Jt-ht;if(bt<0||bt===1/0)return;Ue.setup(N,G,be,B,Me);let Wn,rt=Ae;if(Me!==null&&(Wn=Z.get(Me),rt=ve,rt.setIndex(Wn)),N.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*je()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(N.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),fe.setLineWidth(Ge*je()),N.isLineSegments?rt.setMode(U.LINES):N.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else N.isPoints?rt.setMode(U.POINTS):N.isSprite&&rt.setMode(U.TRIANGLES);if(N.isBatchedMesh)rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)rt.renderInstances(ht,bt,N.count);else if(B.isInstancedBufferGeometry){const Ge=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,So=Math.min(B.instanceCount,Ge);rt.renderInstances(ht,bt,So)}else rt.render(ht,bt)};function Je(w,D,B){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,ia(w,D,B),w.side=wi,w.needsUpdate=!0,ia(w,D,B),w.side=Dn):ia(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),p=we.get(B),p.init(),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(v._useLegacyLights);const G=new Set;return w.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const be=le[me];Je(be,B,N),G.add(be)}else Je(le,B,N),G.add(le)}),y.pop(),p=null,G},this.compileAsync=function(w,D,B=null){const G=this.compile(w,D,B);return new Promise(N=>{function le(){if(G.forEach(function(me){Fe.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){N(w);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function St(w){Ze&&Ze(w)}function Nt(){Ft.stop()}function Qe(){Ft.start()}const Ft=new $d;Ft.setAnimationLoop(St),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(w){Ze=w,ze.setAnimationLoop(w),w===null?Ft.stop():Ft.start()},ze.addEventListener("sessionstart",Nt),ze.addEventListener("sessionend",Qe),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(D),D=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,T),p=we.get(w,y.length),p.init(),y.push(p),_e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(_e),re=this.localClippingEnabled,q=ke.init(this.clippingPlanes,re),_=ue.get(w,m.length),_.init(),m.push(_),Nn(w,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,$),this.info.render.frame++,q===!0&&ke.beginShadows();const B=p.state.shadowsArray;if(K.render(B,w,D),q===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,w),p.setupLights(v._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let N=0,le=G.length;N<le;N++){const me=G[N];Wc(_,w,me,me.viewport)}}else Wc(_,w,D);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,D),Ue.resetDefaultState(),L=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Nn(w,D,B,G){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){G&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const me=Q.update(w),be=w.material;be.visible&&_.push(w,me,be,B,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){const me=Q.update(w),be=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(be)){const Me=me.groups;for(let Be=0,Le=Me.length;Be<Le;Be++){const Oe=Me[Be],ht=be[Oe.materialIndex];ht&&ht.visible&&_.push(w,me,ht,B,Ie.z,Oe)}}else be.visible&&_.push(w,me,be,B,Ie.z,null)}}const le=w.children;for(let me=0,be=le.length;me<be;me++)Nn(le[me],D,B,G)}function Wc(w,D,B,G){const N=w.opaque,le=w.transmissive,me=w.transparent;p.setupLightsView(B),q===!0&&ke.setGlobalState(v.clippingPlanes,B),le.length>0&&pm(N,le,D,B),G&&fe.viewport(R.copy(G)),N.length>0&&na(N,D,B),le.length>0&&na(le,D,B),me.length>0&&na(me,D,B),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function pm(w,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const le=Pe.isWebGL2;ge===null&&(ge=new Un(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ii:xi,minFilter:Ds,samples:le?4:0})),v.getDrawingBufferSize(De),le?ge.setSize(De.x,De.y):ge.setSize(Dl(De.x),Dl(De.y));const me=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(X),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=yi,na(w,B,G),A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge);let Me=!1;for(let Be=0,Le=D.length;Be<Le;Be++){const Oe=D[Be],ht=Oe.object,Jt=Oe.geometry,bt=Oe.material,Wn=Oe.group;if(bt.side===Dn&&ht.layers.test(G.layers)){const rt=bt.side;bt.side=jt,bt.needsUpdate=!0,jc(ht,B,G,Jt,bt,Wn),bt.side=rt,bt.needsUpdate=!0,Me=!0}}Me===!0&&(A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge)),v.setRenderTarget(me),v.setClearColor(X,P),v.toneMapping=be}function na(w,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,le=w.length;N<le;N++){const me=w[N],be=me.object,Me=me.geometry,Be=G===null?me.material:G,Le=me.group;be.layers.test(B.layers)&&jc(be,D,B,Me,Be,Le)}}function jc(w,D,B,G,N,le){w.onBeforeRender(v,D,B,G,N,le),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,D,B,G,w,le),N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=jt,N.needsUpdate=!0,v.renderBufferDirect(B,D,G,N,w,le),N.side=wi,N.needsUpdate=!0,v.renderBufferDirect(B,D,G,N,w,le),N.side=Dn):v.renderBufferDirect(B,D,G,N,w,le),w.onAfterRender(v,D,B,G,N,le)}function ia(w,D,B){D.isScene!==!0&&(D=Ee);const G=Fe.get(w),N=p.state.lights,le=p.state.shadowsArray,me=N.state.version,be=pe.getParameters(w,N.state,le,D,B),Me=pe.getProgramCacheKey(be);let Be=G.programs;G.environment=w.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||G.environment),Be===void 0&&(w.addEventListener("dispose",ae),Be=new Map,G.programs=Be);let Le=Be.get(Me);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===me)return qc(w,be),Le}else be.uniforms=pe.getUniforms(w),w.onBuild(B,be,v),w.onBeforeCompile(be,v),Le=pe.acquireProgram(be,Me),Be.set(Me,Le),G.uniforms=be.uniforms;const Oe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),qc(w,be),G.needsLights=gm(w),G.lightsStateVersion=me,G.needsLights&&(Oe.ambientLightColor.value=N.state.ambient,Oe.lightProbe.value=N.state.probe,Oe.directionalLights.value=N.state.directional,Oe.directionalLightShadows.value=N.state.directionalShadow,Oe.spotLights.value=N.state.spot,Oe.spotLightShadows.value=N.state.spotShadow,Oe.rectAreaLights.value=N.state.rectArea,Oe.ltc_1.value=N.state.rectAreaLTC1,Oe.ltc_2.value=N.state.rectAreaLTC2,Oe.pointLights.value=N.state.point,Oe.pointLightShadows.value=N.state.pointShadow,Oe.hemisphereLights.value=N.state.hemi,Oe.directionalShadowMap.value=N.state.directionalShadowMap,Oe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Oe.spotShadowMap.value=N.state.spotShadowMap,Oe.spotLightMatrix.value=N.state.spotLightMatrix,Oe.spotLightMap.value=N.state.spotLightMap,Oe.pointShadowMap.value=N.state.pointShadowMap,Oe.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function $c(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=ka.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function qc(w,D){const B=Fe.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function mm(w,D,B,G,N){D.isScene!==!0&&(D=Ee),A.resetTextureUnits();const le=D.fog,me=G.isMeshStandardMaterial?D.environment:null,be=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ri,Me=(G.isMeshStandardMaterial?k:b).get(G.envMap||me),Be=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!B.morphAttributes.position,ht=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let bt=yi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=v.toneMapping);const Wn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=Wn!==void 0?Wn.length:0,Ge=Fe.get(G),So=p.state.lights;if(q===!0&&(re===!0||w!==x)){const pn=w===x&&G.id===L;ke.setState(G,w,pn)}let ct=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==So.state.version||Ge.outputColorSpace!==be||N.isBatchedMesh&&Ge.batching===!1||!N.isBatchedMesh&&Ge.batching===!0||N.isInstancedMesh&&Ge.instancing===!1||!N.isInstancedMesh&&Ge.instancing===!0||N.isSkinnedMesh&&Ge.skinning===!1||!N.isSkinnedMesh&&Ge.skinning===!0||N.isInstancedMesh&&Ge.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ge.instancingColor===!1&&N.instanceColor!==null||Ge.envMap!==Me||G.fog===!0&&Ge.fog!==le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ke.numPlanes||Ge.numIntersection!==ke.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==Le||Ge.morphTargets!==Oe||Ge.morphNormals!==ht||Ge.morphColors!==Jt||Ge.toneMapping!==bt||Pe.isWebGL2===!0&&Ge.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,Ge.__version=G.version);let Ri=Ge.currentProgram;ct===!0&&(Ri=ia(G,D,N));let Xc=!1,us=!1,bo=!1;const Pt=Ri.getUniforms(),Ci=Ge.uniforms;if(fe.useProgram(Ri.program)&&(Xc=!0,us=!0,bo=!0),G.id!==L&&(L=G.id,us=!0),Xc||x!==w){Pt.setValue(U,"projectionMatrix",w.projectionMatrix),Pt.setValue(U,"viewMatrix",w.matrixWorldInverse);const pn=Pt.map.cameraPosition;pn!==void 0&&pn.setValue(U,Ie.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Pt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,us=!0,bo=!0)}if(N.isSkinnedMesh){Pt.setOptional(U,N,"bindMatrix"),Pt.setOptional(U,N,"bindMatrixInverse");const pn=N.skeleton;pn&&(Pe.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Pt.setValue(U,"boneTexture",pn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Pt.setOptional(U,N,"batchingTexture"),Pt.setValue(U,"batchingTexture",N._matricesTexture,A));const wo=B.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&Pe.isWebGL2===!0)&&He.update(N,B,Ri),(us||Ge.receiveShadow!==N.receiveShadow)&&(Ge.receiveShadow=N.receiveShadow,Pt.setValue(U,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ci.envMap.value=Me,Ci.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),us&&(Pt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&_m(Ci,bo),le&&G.fog===!0&&oe.refreshFogUniforms(Ci,le),oe.refreshMaterialUniforms(Ci,G,W,z,ge),ka.upload(U,$c(Ge),Ci,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ka.upload(U,$c(Ge),Ci,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(U,"center",N.center),Pt.setValue(U,"modelViewMatrix",N.modelViewMatrix),Pt.setValue(U,"normalMatrix",N.normalMatrix),Pt.setValue(U,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const pn=G.uniformsGroups;for(let Eo=0,vm=pn.length;Eo<vm;Eo++)if(Pe.isWebGL2){const Yc=pn[Eo];$e.update(Yc,Ri),$e.bind(Yc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function _m(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function gm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,D,B){Fe.get(w.texture).__webglTexture=D,Fe.get(w.depthTexture).__webglTexture=B;const G=Fe.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const B=Fe.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){T=w,M=D,E=B;let G=!0,N=null,le=!1,me=!1;if(w){const Me=Fe.get(w);Me.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Me.__webglFramebuffer===void 0?A.setupRenderTarget(w):Me.__hasExternalTextures&&A.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Le=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?N=Le[D][B]:N=Le[D],le=!0):Pe.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?N=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[B]:N=Le,R.copy(w.viewport),F.copy(w.scissor),V=w.scissorTest}else R.copy(Y).multiplyScalar(W).floor(),F.copy(ee).multiplyScalar(W).floor(),V=te;if(fe.bindFramebuffer(U.FRAMEBUFFER,N)&&Pe.drawBuffers&&G&&fe.drawBuffers(w,N),fe.viewport(R),fe.scissor(F),fe.setScissorTest(V),le){const Me=Fe.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,B)}else if(me){const Me=Fe.get(w.texture),Be=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,Be)}L=-1},this.readRenderTargetPixels=function(w,D,B,G,N,le,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){fe.bindFramebuffer(U.FRAMEBUFFER,be);try{const Me=w.texture,Be=Me.format,Le=Me.type;if(Be!==In&&he.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Le===ii&&(xe.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==xi&&he.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===mi&&(Pe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-G&&B>=0&&B<=w.height-N&&U.readPixels(D,B,G,N,he.convert(Be),he.convert(Le),le)}finally{const Me=T!==null?Fe.get(T).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(w,D,B=0){const G=Math.pow(2,-B),N=Math.floor(D.image.width*G),le=Math.floor(D.image.height*G);A.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,w.x,w.y,N,le),fe.unbindTexture()},this.copyTextureToTexture=function(w,D,B,G=0){const N=D.image.width,le=D.image.height,me=he.convert(B.format),be=he.convert(B.type);A.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,w.x,w.y,N,le,me,be,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,w.x,w.y,me,be,D.image),G===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B,G,N=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=w.max.x-w.min.x+1,me=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,Me=he.convert(G.format),Be=he.convert(G.type);let Le;if(G.isData3DTexture)A.setTexture3D(G,0),Le=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Oe=U.getParameter(U.UNPACK_ROW_LENGTH),ht=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jt=U.getParameter(U.UNPACK_SKIP_PIXELS),bt=U.getParameter(U.UNPACK_SKIP_ROWS),Wn=U.getParameter(U.UNPACK_SKIP_IMAGES),rt=B.isCompressedTexture?B.mipmaps[N]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Le,N,D.x,D.y,D.z,le,me,be,Me,Be,rt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,N,D.x,D.y,D.z,le,me,be,Me,rt.data)):U.texSubImage3D(Le,N,D.x,D.y,D.z,le,me,be,Me,Be,rt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wn),N===0&&G.generateMipmaps&&U.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,fe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dc?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===co?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Ji:Ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?At:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wx extends Qd{}wx.prototype.isWebGL1Renderer=!0;class Ex extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ef extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mh=new O,_h=new O,gh=new gt,nl=new kd,Ma=new uo;class Tx extends Rt{constructor(e=new Hn,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mh.fromBufferAttribute(t,i-1),_h.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mh.distanceTo(_h);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;gh.copy(i).invert(),nl.copy(e.ray).applyMatrix4(gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,u=new O,h=new O,d=new O,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=m,S=y-1;v<S;v+=f){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,E),nl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=m,S=y-1;v<S;v+=f){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),nl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const vh=new O,yh=new O;class Mx extends Tx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vh.fromBufferAttribute(t,i),yh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vh.distanceTo(yh);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mc extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ax extends mc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tf extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const il=new gt,xh=new O,Sh=new O;class Rx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cx extends Rx{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Px extends tf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wh(){return(typeof performance>"u"?Date:performance).now()}class Lx extends Mx{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Hn;u.setAttribute("position",new un(l,3)),u.setAttribute("color",new un(c,3));const h=new ef({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);function Dx(){const r=new Qd({antialias:!0,alpha:!0});return r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.type=Sd,window.addEventListener("resize",()=>{r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2))}),r}function Ox(){const r=new Ex;return r.background=new Ce(2105381),r}function Ix(){const r=window.innerWidth/window.innerHeight,e=14,t=new fo(e*r/-2,e*r/2,e/2,e/-2,1,1e3);return t.position.set(20,20,20),t.lookAt(0,0,0),window.addEventListener("resize",()=>{const n=window.innerWidth/window.innerHeight;t.left=-e*n/2,t.right=e*n/2,t.top=e/2,t.bottom=-e/2,t.updateProjectionMatrix()}),t}function Ux(r){const e=new Px(16777215,.4);r.add(e);const t=new bh(16772565,1.2);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=50;const n=8;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-.001,r.add(t);const i=new bh(14019327,.6);return i.position.set(-10,10,-5),r.add(i),{ambientLight:e,dirLight:t,rimLight:i}}const rf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nx=new fo(-1,1,1,-1,0,1);class Fx extends Hn{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const kx=new Fx;class sf{constructor(e){this._mesh=new an(kx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bx extends Zs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xa.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Eh extends Zs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class zx extends Zs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bx(rf),this.copyPass.material.blending=ni,this.clock=new nf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eh!==void 0&&(a instanceof Eh?n=!0:a instanceof zx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vx extends Zs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Hx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xr extends Zs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(s,a,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Un(s,a,{type:ii});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Un(s,a,{type:ii});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=Hx;this.highPassUniforms=Xa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=rf;this.copyUniforms=Xa.clone(u.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Js,this.fsQuad=new sf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
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
				}`})}}Xr.BlurDirectionX=new Re(1,0);Xr.BlurDirectionY=new Re(0,1);function Wx(r,e,t){const n=new Gx(r),i=new Vx(e,t);n.addPass(i);const s=new Xr(new Re(window.innerWidth,window.innerHeight),.4,.4,.85);return n.addPass(s),window.addEventListener("resize",()=>{n.setSize(window.innerWidth,window.innerHeight)}),n}class jx{constructor(){this.startX=0,this.startY=0,this.threshold=50,this.listeners=[],this.init()}init(){window.addEventListener("touchstart",this.handleTouchStart.bind(this)),window.addEventListener("touchend",this.handleTouchEnd.bind(this)),window.addEventListener("mousedown",this.handleMouseDown.bind(this)),window.addEventListener("mouseup",this.handleMouseUp.bind(this))}onSwipe(e){this.listeners.push(e)}emitSwipe(e){this.listeners.forEach(t=>t(e))}handleTouchStart(e){this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY}handleTouchEnd(e){const t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;this.processSwipe(t,n)}handleMouseDown(e){this.startX=e.clientX,this.startY=e.clientY}handleMouseUp(e){this.processSwipe(e.clientX,e.clientY)}processSwipe(e,t){const n=e-this.startX,i=t-this.startY;Math.abs(n)<this.threshold&&Math.abs(i)<this.threshold||(Math.abs(n)>Math.abs(i)?n>0?this.emitSwipe("right"):this.emitSwipe("left"):i>0?this.emitSwipe("down"):this.emitSwipe("up"))}}const _s=new O;function _n(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;_s.copy(e),_s[n]=0,_s.normalize();const c=.5*a/(a+o),u=1-_s.angleTo(r)/l;return Math.sign(_s[t])===1?u*c:o/(a+o)+c+c*(1-u)}class $x extends sr{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new O,l=new O,c=new O(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,g=new O,_=.5/i;for(let p=0,m=0;p<u.length;p+=3,m+=2)switch(o.fromArray(u,p),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[p+0]=c.x*Math.sign(o.x)+l.x*s,u[p+1]=c.y*Math.sign(o.y)+l.y*s,u[p+2]=c.z*Math.sign(o.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=_n(g,l,"z","y",s,n),d[m+1]=1-_n(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),d[m+0]=1-_n(g,l,"z","y",s,n),d[m+1]=1-_n(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),d[m+0]=1-_n(g,l,"x","z",s,e),d[m+1]=_n(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),d[m+0]=1-_n(g,l,"x","z",s,e),d[m+1]=1-_n(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),d[m+0]=1-_n(g,l,"x","y",s,e),d[m+1]=1-_n(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),d[m+0]=_n(g,l,"x","y",s,e),d[m+1]=1-_n(g,l,"y","x",s,t);break}}}const Th=[{id:1,name:"Neon Classic",colors:[16726832,16749824,16763904,3458905,51134,3191039,5789398,11490014,16723285],background:2105381,iceColor:11197951,floorColor:2763306},{id:2,name:"Ocean Depths",colors:[16711782,65484,26367,65382,16763904,16724736,10027263,52479,16776960],background:662062,iceColor:8965375,floorColor:1714746},{id:3,name:"Sunset Fire",colors:[16711680,16737792,16763904,65280,52479,26367,10027263,16711884,16776960],background:2759178,iceColor:16755421,floorColor:3811866},{id:4,name:"Forest Magic",colors:[65280,16711935,65535,16737792,26367,16763904,10027263,16711782,65433],background:666138,iceColor:10092492,floorColor:1718826},{id:5,name:"Cosmic Purple",colors:[16711935,65535,16763904,65280,16711782,26367,16737792,10027263,16776960],background:1706538,iceColor:13408767,floorColor:2759226}];function _c(r){const e=Math.floor((r-1)/10);return Th[Math.min(e,Th.length-1)]}function Mh(r,e){return r.colors[e%r.colors.length]}class qx{constructor(e,t,n,i="normal",s=null){this.x=e,this.z=t,this.colorId=n,this.type=i,this.value=1,this.isMerging=!1,this.theme=s;const a=new $x(.9,.9,.9,4,.1);let o;if(this.type==="ice"){const l=s?s.iceColor:11197951;o=new Ax({color:l,transmission:.6,opacity:.8,transparent:!0,roughness:.1,metalness:.1,thickness:1,ior:1.5,emissive:l,emissiveIntensity:.1})}else{const l=s?Mh(s,n):16726832;o=new mc({color:l,roughness:.4,metalness:.1,envMapIntensity:1.5})}this.mesh=new an(a,o),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.updatePosition(e,t)}updatePosition(e,t){this.x=e,this.z=t,this.mesh.position.set(e,.5,t)}upgrade(){this.type!=="ice"&&(this.value*=2,this.colorId++,this.theme&&this.mesh.material.color.setHex(Mh(this.theme,this.colorId)))}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function Xx(r){if(r.grid)return r.grid.map(s=>[...s]);const e=r.size,t=[];for(let s=0;s<e;s++){const a=new Array(e).fill(0);t.push(a)}let n=0,i=0;for(;n<r.iceCount&&i<100;){const s=Math.floor(Math.random()*e),a=Math.floor(Math.random()*e);t[s][a]===0&&(t[s][a]=100,n++),i++}for(let s=0;s<e;s++)for(let a=0;a<e;a++)t[s][a]===0&&Math.random()<.3&&(t[s][a]=Math.floor(Math.random()*r.maxColors)+1);return t}function Jn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function af(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yr={duration:.5,overwrite:!1,delay:0},gc,Ct,nt,Sn=1e8,Ke=1/Sn,Il=Math.PI*2,Yx=Il/4,Kx=0,of=Math.sqrt,Jx=Math.cos,Zx=Math.sin,Tt=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},si=function(e){return typeof e=="number"},vc=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},yc=function(){return typeof window<"u"},Aa=function(e){return ut(e)||Tt(e)},lf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,Ul=/(?:-?\.?\d|\.)+/gi,cf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uf=/[+-]=-?[.\d]+/,hf=/[^,'"\[\]\s]+/gi,Qx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,Fn,Nl,xc,dn={},Ya={},df,ff=function(e){return(Ya=Kr(e,dn))&&Kt},Sc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Is=function(e,t){return!t&&console.warn(e)},pf=function(e,t){return e&&(dn[e]=t)&&Ya&&(Ya[e]=t)||dn},Us=function(){return 0},eS={suppressEvents:!0,isStart:!0,kill:!1},Ba={suppressEvents:!0,kill:!1},tS={suppressEvents:!0},bc={},Si=[],Fl={},mf,tn={},sl={},Ah=30,za=[],wc="",Ec=function(e){var t=e[0],n,i;if(Vn(t)||ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=za.length;i--&&!za[i].targetTest(t););n=za[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bf(e[i],n)))||e.splice(i,1);return e},Zi=function(e){return e._gsap||Ec(bn(e))[0]._gsap},_f=function(e,t,n){return(n=e[t])&&ut(n)?e[t]():vc(n)&&e.getAttribute&&e.getAttribute(t)||n},qt=function(e,t){return(e=e.split(",")).forEach(t)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},Br=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},nS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=Si.length,t=Si.slice(0),n,i;for(Fl={},Si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tc=function(e){return!!(e._initted||e._startAt||e.add)},gf=function(e,t,n,i){Si.length&&!Ct&&Ka(),e.render(t,n,!!(Ct&&t<0&&Tc(e))),Si.length&&!Ct&&Ka()},vf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hf).length<2?t:Tt(e)?e.trim():e},yf=function(e){return e},fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},iS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Kr=function(e,t){for(var n in t)e[n]=t[n];return e},Rh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ts=function(e){var t=e.parent||at,n=e.keyframes?iS(It(e.keyframes)):fn;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},rS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},xf=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},mo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ei=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kl=function(e,t,n,i){return e._startAt&&(Ct?e._startAt.revert(Ba):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},aS=function r(e){return!e||e._ts&&r(e.parent)},Ch=function(e){return e._repeat?Jr(e._tTime,e=e.duration()+e._rDelay)*e:0},Jr=function(e,t){var n=Math.floor(e=_t(e/t));return e&&n===e?n-1:n},Za=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_o=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ke)||0))},go=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_o(e),n._dirty||Qi(n,e)),e},Sf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Za(e.rawTime(),t),(!t._dur||Qs(0,t.totalDuration(),n)-t._tTime>Ke)&&t.render(n,!0)),Qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ke}},Bn=function(e,t,n,i){return t.parent&&Ei(t),t._start=_t((si(n)?n:n||e!==at?gn(e,n,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xf(e,t,"_first","_last",e._sort?"_start":0),Bl(t)||(e._recent=t),i||Sf(e,t),e._ts<0&&go(e,e._tTime),e},bf=function(e,t){return(dn.ScrollTrigger||Sc("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},wf=function(e,t,n,i,s){if(Ac(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ct&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mf!==nn.frame)return Si.push(e),e._lazy=[s,i],1},oS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&oS(e)&&!(!e._initted&&Bl(e))||(e._ts<0||e._dp._ts<0)&&!Bl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Qs(0,e._tDur,t),u=Jr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Jr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ct||i||e._zTime===Ke||!t&&e._zTime){if(!e._initted&&wf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ke:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&kl(e,t,n,!0),e._onUpdate&&!n&&ln(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ei(e,1),!n&&!Ct&&(ln(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zr=function(e,t,n,i){var s=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:_t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&go(e,e._tTime=e._tDur*o),e.parent&&_o(e),n||Qi(e.parent,e),e},Ph=function(e){return e instanceof Vt?Qi(e):Zr(e,e._dur)},uS={_start:0,endTime:Us,totalDuration:Us},gn=function r(e,t,n){var i=e.labels,s=e._recent||uS,a=e.duration()>=Sn?s.endTime(!1):e._dur,o,l,c;return Tt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(It(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ms=function(e,t,n){var i=si(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;a.immediateRender=$t(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new mt(t[0],a,t[s+1])},Mi=function(e,t){return e||e===0?t(e):t},Qs=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!Tt(e)||!(t=Qx.exec(e))?"":t[1]},hS=function(e,t,n){return Mi(n,function(i){return Qs(e,t,i)})},zl=[].slice,Ef=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==Fn},dS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Tt(i)&&!t||Ef(i,1)?(s=n).push.apply(s,bn(i)):n.push(i)})||n},bn=function(e,t,n){return nt&&!t&&nt.selector?nt.selector(e):Tt(e)&&!n&&(Nl||!Qr())?zl.call((t||xc).querySelectorAll(e),0):It(e)?dS(e,n):Ef(e)?zl.call(e,0):e?[e]:[]},Gl=function(e){return e=bn(e)[0]||Is("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bn(t,n.querySelectorAll?n:n===e?Is("Invalid scope")||xc.createElement("div"):e)}},Tf=function(e){return e.sort(function(){return .5-Math.random()})},Mf=function(e){if(ut(e))return e;var t=Vn(e)?e:{each:e},n=er(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Tt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=a[_],m,y,v,S,M,E,T,L,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!x){for(T=-Sn;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=a[_]=[],m=l?Math.min(x,_)*u-.5:i%x,y=x===Sn?0:l?_*h/x-.5:i/x|0,T=0,L=Sn,E=0;E<_;E++)v=E%x-m,S=y-(E/x|0),p[E]=M=c?Math.abs(c==="y"?S:v):of(v*v+S*S),M>T&&(T=M),M<L&&(L=M);i==="random"&&Tf(p),p.max=T-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ot(t.amount||t.each)||0,n=n&&_<0?Nf(n):n}return _=(p[d]-p.min)/p.max||0,_t(p.b+(n?n(_):_)*p.v)+p.u}},Vl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(si(n)?0:Ot(n))}},Af=function(e,t){var n=It(e),i,s;return!n&&Vn(e)&&(i=n=e.radius||Sn,e.values?(e=bn(e.values),(s=!si(e[0]))&&(i*=i)):e=Vl(e.increment)),Mi(t,n?ut(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Sn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||si(a)?u:u+Ot(a)}:Vl(e))},Rf=function(e,t,n,i){return Mi(It(e)?!t:n===!0?!!(n=0):!i,function(){return It(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},pS=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},mS=function(e,t,n){return Pf(e,t,0,1,n)},Cf=function(e,t,n){return Mi(n,function(i){return e[~~t(i)]})},_S=function r(e,t,n){var i=t-e;return It(e)?Cf(e,r(0,e.length),t):Mi(n,function(s){return(i+(s-e)%i)%i+e})},gS=function r(e,t,n){var i=t-e,s=i*2;return It(e)?Cf(e,r(0,e.length-1),t):Mi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ns=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?hf:Ul),n+=e.substr(t,i-t)+Rf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Pf=function(e,t,n,i,s){var a=t-e,o=i-n;return Mi(s,function(l){return n+((l-e)/a*o||0)})},vS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Tt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(It(e)&&!It(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Kr(It(e)?[]:{},e));if(!u){for(l in t)Mc.call(o,e,l,"get",t[l]);s=function(g){return Pc(g,o)||(a?e.p:e)}}}return Mi(n,s)},Lh=function(e,t,n){var i=e.labels,s=Sn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ln=function(e,t,n){var i=e.vars,s=i[t],a=nt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Si.length&&Ka(),o&&(nt=o),u=l?s.apply(c,l):s.call(c),nt=a,u},Ss=function(e){return Ei(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ct),e.progress()<1&&ln(e,"onInterrupt"),e},Nr,Lf=[],Df=function(e){if(e)if(e=!e.name&&e.default||e,yc()||e.headless){var t=e.name,n=ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Us,render:Pc,add:Mc,kill:IS,modifier:OS,rawVars:0},a={targetTest:0,get:0,getSetter:Cc,aliases:{},register:0};if(Qr(),e!==i){if(tn[t])return;fn(i,fn(Ja(e,s),a)),Kr(i.prototype,Kr(s,Ja(e,a))),tn[i.prop=t]=i,e.targetTest&&(za.push(i),bc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pf(t,i),e.register&&e.register(Kt,i,Xt)}else Lf.push(e)},Ye=255,bs={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},al=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},Of=function(e,t,n){var i=e?si(e)?[e>>16,e>>8&Ye,e&Ye]:0:bs.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bs[e])i=bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ul),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=al(l+1/3,s,a),i[1]=al(l,s,a),i[2]=al(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(cf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ul)||bs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ye,a=i[1]/Ye,o=i[2]/Ye,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},If=function(e){var t=[],n=[],i=-1;return e.split(bi).forEach(function(s){var a=s.match(Ur)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dh=function(e,t,n){var i="",s=(e+i).match(bi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Of(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=If(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(bi,"1").split(Ur),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(bi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},bi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),yS=/hsl[a]?\(/,Uf=function(e){var t=e.join(" "),n;if(bi.lastIndex=0,bi.test(t))return n=yS.test(t),e[1]=Dh(e[1],n),e[0]=Dh(e[0],n,If(e[1])),!0},Fs,nn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,y=p===!0,v,S,M,E;if((m>e||m<0)&&(n+=m-t),i+=m,M=i-n,v=M-a,(v>0||y)&&(E=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=v+(v>=s?4:s-v),S=1),y||(l=c(_)),S)for(f=0;f<o.length;f++)o[f](M,d,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){df&&(!Nl&&yc()&&(Fn=Nl=window,xc=Fn.document||{},dn.gsap=Kt,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(Kt.version),ff(Ya||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),Lf.forEach(Df)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Fs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fs=0,c=Us},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,y){var v=m?function(S,M,E,T){p(S,M,E,T),h.remove(v)}:p;return h.remove(p),o[y?"unshift":"push"](v),Qr(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},h}(),Qr=function(){return!Fs&&nn.wake()},We={},xS=/^[\d.\-M][\d.\-,\s]/,SS=/["']/g,bS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(SS,"").trim():+c,i=l.substr(o+1).trim();return t},wS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ES=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bS(t[1])]:wS(e).split(",").map(vf)):We._CE&&xS.test(e)?We._CE("",e):n},Nf=function(e){return function(t){return 1-e(1-t)}},Ff=function r(e,t){for(var n=e._first,i;n;)n instanceof Vt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},er=function(e,t){return e&&(ut(e)?e:We[e]||ES(e))||t},ar=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return qt(e,function(o){We[o]=dn[o]=s,We[a=o.toLowerCase()]=n;for(var l in s)We[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=s[l]}),s},kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ol=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Il*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kf(o);return s=Il/s,l.config=function(c,u){return r(e,c,u)},l},ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kf(n);return i.config=function(s){return r(e,s)},i};qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ar(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;ar("Elastic",ol("in"),ol("out"),ol());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ar("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ar("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ar("Circ",function(r){return-(of(1-r*r)-1)});ar("Sine",function(r){return r===1?1:-Jx(r*Yx)+1});ar("Back",ll("in"),ll("out"),ll());We.SteppedEase=We.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ke;return function(o){return((i*Qs(0,a,o)|0)+s)*n}}};Yr.ease=We["quad.out"];qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return wc+=r+","+r+"Params,"});var Bf=function(e,t){this.id=Kx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_f,this.set=t?t.getSetter:Cc},ks=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zr(this,+t.duration,1,1),this.data=t.data,nt&&(this._ctx=nt,nt.data.push(this)),Fs||nn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(go(this,n),!s._dp||s.parent||Sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ch(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ch(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Jr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ke?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ke?0:this._rts,this.totalTime(Qs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_o(this),sS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ke&&(this._tTime-=Ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Za(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tS);var i=Ct;return Ct=n,Tc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ct=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ph(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i)),this._dur||(this._zTime=-Ke),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ke)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=ut(n)?n:yf,o=function(){var c=i.then;i.then=null,ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ss(this)},r}();fn(ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ke,_prom:0,_ps:!1,_rts:1});var Vt=function(r){af(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$t(n.sortChildren),at&&Bn(n.parent||at,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&bf(Jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ms(0,arguments,this),this},t.from=function(i,s,a){return Ms(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ms(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ts(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mt(i,s,gn(this,a),1),this},t.call=function(i,s,a){return Bn(this,mt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new mt(i,a,gn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ts(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ts(o).immediateRender=$t(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_t(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,y,v,S,M,E,T;if(this!==at&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,v=this._ts,m=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=_t(u%p),u===l?(_=this._repeat,d=c):(M=_t(u/p),_=~~M,_&&_===M&&(d=c,_--),d>c&&(d=c)),M=Jr(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),E&&_&1&&(d=c-d,T=1),_!==M&&!this._lock){var L=E&&M&1,x=L===(E&&_&1);if(_<M&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(T?0:_t(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Ff(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=cS(this,_t(o),_t(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!M&&(ln(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-Ke);break}}f=g}else{f=this._last;for(var R=i<0?i:d;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||Ct&&Tc(f)),d!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=R?-Ke:Ke);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-Ke)._zTime=d>=o?1:-1,this._ts))return this._start=S,_o(this),this.render(i,s,a);this._onUpdate&&!s&&ln(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ei(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ln(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(si(s)||(s=gn(this,s,i)),!(i instanceof ks)){if(It(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Tt(i))return this.addLabel(i,s);if(ut(i))i=mt.delayedCall(0,i);else return this}return this!==i?Bn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof mt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Tt(i)?this.removeLabel(i):ut(i)?this.killTweensOf(i):(i.parent===this&&mo(this,i),i===this._recent&&(this._recent=this._last),Qi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=gn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=mt.delayedCall(0,s||Us,a);return o.data="isPause",this._hasPause=1,Bn(this,o,gn(this,i))},t.removePause=function(i){var s=this._first;for(i=gn(this,i);s;)s._start===i&&s.data==="isPause"&&Ei(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_i!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=bn(i),l=this._first,c=si(s),u;l;)l instanceof mt?nS(l._targets,o)&&(c?(!_i||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=gn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=mt.to(a,fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ke,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Zr(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,fn({startAt:{time:gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lh(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lh(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ke)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qi(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Sn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Bn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Zr(a,a===at&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(at._ts&&(gf(at,Za(i,at)),mf=nn.frame),nn.frame>=Ah){Ah+=hn.autoSleep||120;var s=at._first;if((!s||!s._ts)&&hn.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},e}(ks);fn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var TS=function(e,t,n,i,s,a,o){var l=new Xt(this._pt,e,t,0,1,jf,null,s),c=0,u=0,h,d,f,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ns(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(rl)||[];h=rl.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Br(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(uf.test(i)||m)&&(l.e=0),this._pt=l,l},Mc=function(e,t,n,i,s,a,o,l,c,u){ut(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:ut(h)?c?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=ut(h)?c?PS:Hf:Rc,g;if(Tt(i)&&(~i.indexOf("random(")&&(i=Ns(i)),i.charAt(1)==="="&&(g=Br(d,i)+(Ot(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Hl)return!isNaN(d*i)&&i!==""?(g=new Xt(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?DS:Wf,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Sc(t,i),TS.call(this,e,t,d,i,f,l||hn.stringFilter,c))},MS=function(e,t,n,i,s){if(ut(e)&&(e=As(e,s,t,n,i)),!Vn(e)||e.style&&e.nodeType||It(e)||lf(e))return Tt(e)?As(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=As(e[o],s,t,n,i);return a},zf=function(e,t,n,i,s,a){var o,l,c,u;if(tn[e]&&(o=new tn[e]).init(s,o.rawVars?t[e]:MS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Nr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_i,Hl,Ac=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!gc,S=e.timeline,M,E,T,L,x,R,F,V,X,P,I,z,W;if(S&&(!d||!s)&&(s="none"),e._ease=er(s,Yr.ease),e._yEase=h?Nf(er(h===!0?s:h,Yr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(V=p[0]?Zi(p[0]).harness:0,z=V&&i[V.prop],M=Ja(i,bc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Ba:eS),_._lazy=0),a){if(Ei(e._startAt=mt.set(p,fn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&$t(l),startAt:null,delay:0,onUpdate:c&&function(){return ln(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct||!o&&!f)&&e._startAt.revert(Ba),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),T=fn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$t(l),immediateRender:o,stagger:0,parent:m},M),z&&(T[V.prop]=z),Ei(e._startAt=mt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct?e._startAt.revert(Ba):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ke,Ke);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$t(l)||l&&!g,E=0;E<p.length;E++){if(x=p[E],F=x._gsap||Ec(p)[E]._gsap,e._ptLookup[E]=P={},Fl[F.id]&&Si.length&&Ka(),I=y===p?E:y.indexOf(x),V&&(X=new V).init(x,z||M,e,I,y)!==!1&&(e._pt=L=new Xt(e._pt,x,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(j){P[j]=L}),X.priority&&(R=1)),!V||z)for(T in M)tn[T]&&(X=zf(T,M,e,I,x,y))?X.priority&&(R=1):P[T]=L=Mc.call(e,x,T,"get",M[T],I,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),v&&e._pt&&(_i=e,at.killTweensOf(x,P,e.globalTime(t)),W=!e.parent,_i=0),e._pt&&l&&(Fl[F.id]=1)}R&&$f(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&S.render(Sn,!0,!0)},AS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Hl=1,e.vars[t]="+=0",Ac(e,o),Hl=0,l?Is(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=dt(n)+Ot(h.e)),h.b&&(h.b=u.s+Ot(h.b))},RS=function(e,t){var n=e[0]?Zi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Kr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},CS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(It(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},As=function(e,t,n,i,s){return ut(e)?e.call(t,n,i,s):Tt(e)&&~e.indexOf("random(")?Ns(e):e},Gf=wc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vf={};qt(Gf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vf[r]=1});var mt=function(r){af(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ts(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||at,v=(It(n)||lf(n)?si(n[0]):"length"in i)?[n]:bn(n),S,M,E,T,L,x,R,F;if(o._targets=v.length?Ec(v):Is("GSAP target "+n+" not found. https://gsap.com",!hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Aa(c)||Aa(u)){if(i=o.vars,S=o.timeline=new Vt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Jn(o),S._start=0,d||Aa(c)||Aa(u)){if(T=v.length,R=d&&Mf(d),Vn(d))for(L in d)~Gf.indexOf(L)&&(F||(F={}),F[L]=d[L]);for(M=0;M<T;M++)E=Ja(i,Vf),E.stagger=0,m&&(E.yoyoEase=m),F&&Kr(E,F),x=v[M],E.duration=+As(c,Jn(o),M,x,v),E.delay=(+As(u,Jn(o),M,x,v)||0)-o._delay,!d&&T===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),S.to(x,E,R?R(M,x,v):0),S._ease=We.none;S.duration()?c=u=0:o.timeline=0}else if(g){Ts(fn(S.vars.defaults,{ease:"none"})),S._ease=er(g.ease||i.ease||"none");var V=0,X,P,I;if(It(g))g.forEach(function(z){return S.to(v,z,">")}),S.duration();else{E={};for(L in g)L==="ease"||L==="easeEach"||CS(L,g[L],E,g.easeEach);for(L in E)for(X=E[L].sort(function(z,W){return z.t-W.t}),V=0,M=0;M<X.length;M++)P=X[M],I={ease:P.e,duration:(P.t-(M?X[M-1].t:0))/100*c},I[L]=P.v,S.to(v,I,V),V+=I.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!gc&&(_i=Jn(o),at.killTweensOf(v),_i=0),Bn(y,Jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===_t(y._time)&&$t(h)&&aS(Jn(o))&&y.data!=="nested")&&(o._tTime=-Ke,o.render(Math.max(0,-u)||0)),p&&bf(Jn(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ke&&!u?l:i<Ke?0:i,d,f,g,_,p,m,y,v,S;if(!c)lS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=_t(h%_),h===l?(g=this._repeat,d=c):(p=_t(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,d=c-d),p=Jr(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(v&&this._yEase&&Ff(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(_t(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(wf(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&h&&!s&&!p&&(ln(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&kl(this,i,s,a),ln(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ln(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&kl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ei(this,1),!s&&!(u&&!o)&&(h||o||m)&&(ln(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Fs||nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ac(this,c),u=this._ease(c/this._dur),AS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(go(this,0),this.parent||xf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ct),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_i&&_i.vars.overwrite!==!0)._first||Ss(this),this.parent&&a!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?bn(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&rS(o,l))return s==="all"&&(this._pt=0),Ss(this);for(h=this._op=this._op||[],s!=="all"&&(Tt(s)&&(_={},qt(s,function(y){return _[y]=1}),s=_),s=RS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&mo(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ss(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ms(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ms(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return at.killTweensOf(i,s,a)},e}(ks);fn(mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qt("staggerTo,staggerFrom,staggerFromTo",function(r){mt[r]=function(){var e=new Vt,t=zl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rc=function(e,t,n){return e[t]=n},Hf=function(e,t,n){return e[t](n)},PS=function(e,t,n,i){return e[t](i.fp,n)},LS=function(e,t,n){return e.setAttribute(t,n)},Cc=function(e,t){return ut(e[t])?Hf:vc(e[t])&&e.setAttribute?LS:Rc},Wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},OS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},IS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?mo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},US=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$f=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Xt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wf,this.d=l||this,this.set=c||Rc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=US,this.m=n,this.mt=s,this.tween=i},r}();qt(wc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return bc[r]=1});dn.TweenMax=dn.TweenLite=mt;dn.TimelineLite=dn.TimelineMax=Vt;at=new Vt({sortChildren:!1,defaults:Yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=Uf;var tr=[],Ga={},NS=[],Oh=0,FS=0,cl=function(e){return(Ga[e]||NS).map(function(t){return t()})},Wl=function(){var e=Date.now(),t=[];e-Oh>2&&(cl("matchMediaInit"),tr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Fn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),cl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Oh=e,cl("matchMedia"))},qf=function(){function r(t,n){this.selector=n&&Gl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=FS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ut(n)&&(s=i,i=n,n=ut);var a=this,o=function(){var c=nt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Gl(s)),nt=a,h=i.apply(a,arguments),ut(h)&&a._r.push(h),nt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ut?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=nt;nt=null,n(this),nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof mt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof mt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=tr.length;a--;)tr[a].id===this.id&&tr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),kS=function(){function r(t){this.contexts=[],this.scope=t,nt&&nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Vn(n)||(n={matches:n});var a=new qf(0,s||this.scope),o=a.conditions={},l,c,u;nt&&!a.selector&&(a.selector=nt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Fn.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wl):l.addEventListener("change",Wl)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Df(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,n,i){Tt(e)&&(e=bn(e)[0]);var s=Zi(e||{}).get,a=n?yf:vf;return n==="native"&&(n=""),e&&(t?a((tn[t]&&tn[t].get||s)(e,t,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=bn(e),e.length>1){var i=e.map(function(u){return Kt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=tn[t],o=Zi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Nr._pt=0,h.init(e,n?u+n:u,Nr,0,[e]),h.render(1,h),Nr._pt&&Pc(1,Nr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Kt.to(e,fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,Yr.ease)),Rh(Yr,e||{})},config:function(e){return Rh(hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!dn[o]&&Is(t+" effect requires "+o+" plugin.")}),sl[t]=function(o,l,c){return n(bn(o),fn(l||{},s),c)},a&&(Vt.prototype[t]=function(o,l,c){return this.add(sl[t](o,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):We},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,s;for(n.smoothChildTiming=$t(e.smoothChildTiming),at.remove(n),n._dp=0,n._time=n._tTime=at._time,i=at._first;i;)s=i._next,(t||!(!i._dur&&i instanceof mt&&i.vars.onComplete===i._targets[0]))&&Bn(n,i,i._start-i._delay),i=s;return Bn(at,n,0),n},context:function(e,t){return e?new qf(e,t):nt},matchMedia:function(e){return new kS(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wl()},addEventListener:function(e,t){var n=Ga[e]||(Ga[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ga[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:_S,wrapYoyo:gS,distribute:Mf,random:Rf,snap:Af,normalize:mS,getUnit:Ot,clamp:hS,splitColor:Of,toArray:bn,selector:Gl,mapRange:Pf,pipe:fS,unitize:pS,interpolate:vS,shuffle:Tf},install:ff,effects:sl,ticker:nn,updateRoot:Vt.updateRoot,plugins:tn,globalTimeline:at,core:{PropTween:Xt,globals:pf,Tween:mt,Timeline:Vt,Animation:ks,getCache:Zi,_removeLinkedListItem:mo,reverting:function(){return Ct},context:function(e){return e&&nt&&(nt.data.push(e),e._ctx=nt),nt},suppressOverwrites:function(e){return gc=e}}};qt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qa[r]=mt[r]});nn.add(Vt.updateRoot);Nr=Qa.to({},{duration:0});var BS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=BS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ul=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Tt(s)&&(l={},qt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}zS(o,s)}}}},Kt=Qa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ct?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ul("roundProps",Vl),ul("modifiers"),ul("snap",Af))||Qa;mt.version=Vt.version=Kt.version="3.13.0";df=1;yc()&&Qr();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ih,gi,zr,Lc,qi,Uh,Dc,GS=function(){return typeof window<"u"},ai={},zi=180/Math.PI,Gr=Math.PI/180,wr=Math.atan2,Nh=1e8,Oc=/([A-Z])/g,VS=/(left|right|width|margin|padding|x)/i,HS=/[\s,\(]\S/,zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$S=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qS=function(e,t,n){return e.style[t]=n},XS=function(e,t,n){return e.style.setProperty(t,n)},YS=function(e,t,n){return e._gsap[t]=n},KS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},JS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ZS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ot="transform",Yt=ot+"Origin",QS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ai&&s){if(this.tfm=this.tfm||{},e!=="transform")e=zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[e]=a.x?a[e]:Qn(i,e),e===Yt&&(this.tfm.zOrigin=a.zOrigin);else return zn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ot)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yt,t,"")),e=ot}(s||t)&&this.props.push(e,t,s[e])},Kf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Oc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dc(),(!s||!s.isStart)&&!n[ot]&&(Kf(n),i.zOrigin&&n[Yt]&&(n[Yt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jf=function(e,t){var n={target:e,props:[],revert:eb,save:QS};return e._gsap||Kt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Zf,$l=function(e,t){var n=gi.createElementNS?gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gi.createElement(e);return n&&n.style?n:gi.createElement(e)},wn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Oc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,es(t)||t,1)||""},Fh="O,Moz,ms,Ms,Webkit".split(","),es=function(e,t,n){var i=t||qi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Fh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Fh[a]:"")+e},ql=function(){GS()&&window.document&&(Ih=window,gi=Ih.document,zr=gi.documentElement,qi=$l("div")||{style:{}},$l("div"),ot=es(ot),Yt=ot+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zf=!!es("perspective"),Dc=Kt.core.reverting,Lc=1)},kh=function(e){var t=e.ownerSVGElement,n=$l("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zr.removeChild(n),s},Bh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qf=function(e){var t,n;try{t=e.getBBox()}catch{t=kh(e),n=1}return t&&(t.width||t.height)||n||(t=kh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Bh(e,["x","cx","x1"])||0,y:+Bh(e,["y","cy","y1"])||0,width:0,height:0}:t},ep=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qf(e))},nr=function(e,t){if(t){var n=e.style,i;t in ai&&t!==Yt&&(t=ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Oc,"-$1").toLowerCase())):n.removeAttribute(t)}},vi=function(e,t,n,i,s,a){var o=new Xt(e._pt,t,n,0,1,a?Yf:Xf);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},zh={deg:1,rad:1,turn:1},tb={grid:1,flex:1},Ti=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=qi.style,l=VS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||zh[i]||zh[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&ep(e),(f||a==="%")&&(ai[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],dt(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===gi||!_.appendChild)&&(_=gi.body),p=_._gsap,p&&f&&p.width&&l&&p.time===nn.time&&!p.uncache)return dt(s/p.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,g=e[u],y?e.style[t]=y:nr(e,t)}else(f||a==="%")&&!tb[wn(_,"display")]&&(o.position=wn(e,"position")),_===e&&(o.position="static"),_.appendChild(qi),g=qi[u],_.removeChild(qi),o.position="absolute";return l&&f&&(p=Zi(_),p.time=nn.time,p.width=_[u]),dt(d?g*s/h:g&&s?h/g*s:0)},Qn=function(e,t,n,i){var s;return Lc||ql(),t in zn&&t!=="transform"&&(t=zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(s=zs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:to(wn(e,Yt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=eo[t]&&eo[t](e,t,n)||wn(e,t)||_f(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ti(e,t,s,n)+n:s},nb=function(e,t,n,i){if(!n||n==="none"){var s=es(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new Xt(this._pt,e.style,t,0,1,jf),l=0,c=0,u,h,d,f,g,_,p,m,y,v,S,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=wn(e,t)||i,_?e.style[t]=_:nr(e,t)),u=[n,i],Uf(u),n=u[0],i=u[1],d=n.match(Ur)||[],M=i.match(Ur)||[],M.length){for(;h=Ur.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),p.charAt(1)==="="&&(p=Br(f,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=Ur.lastIndex-v.length,v||(v=v||hn.units[t]||S,l===i.length&&(i+=v,o.e+=v)),S!==v&&(f=Ti(e,t,_,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Yf:Xf;return uf.test(i)&&(o.e=0),this._pt=o,o},Gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ib=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gh[n]||n,t[1]=Gh[i]||i,t.join(" ")},rb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ai[o]&&(l=1,o=o==="transformOrigin"?Yt:ot),nr(n,o);l&&(nr(n,ot),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zs(n,1),a.uncache=1,Kf(i)))}},eo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xt(e._pt,t,n,0,0,rb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Bs=[1,0,0,1,0,0],tp={},np=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vh=function(e){var t=wn(e,ot);return np(t)?Bs:t.substr(7).match(cf).map(dt)},Ic=function(e,t){var n=e._gsap||Zi(e),i=e.style,s=Vh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Bs:s):(s===Bs&&!e.offsetParent&&e!==zr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,zr.appendChild(e)),s=Vh(e),l?i.display=l:nr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Ic(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,T,L,x;n?l!==Bs&&(T=f*p-g*_)&&(L=S*(p/T)+M*(-_/T)+(_*y-p*m)/T,x=S*(-g/T)+M*(f/T)-(f*y-g*m)/T,S=L,M=x):(E=Qf(e),S=E.x+(~v[0].indexOf("%")?S/100*E.width:S),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(m=S-c,y=M-u,o.xOffset=h+(m*f+y*_)-m,o.yOffset=d+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Yt]="0px 0px",a&&(vi(a,o,"xOrigin",c,S),vi(a,o,"yOrigin",u,M),vi(a,o,"xOffset",h,o.xOffset),vi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},zs=function(e,t){var n=e._gsap||new Bf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wn(e,Yt)||"0",u,h,d,f,g,_,p,m,y,v,S,M,E,T,L,x,R,F,V,X,P,I,z,W,j,$,Y,ee,te,H,q,re;return u=h=d=_=p=m=y=v=S=0,f=g=1,n.svg=!!(e.getCTM&&ep(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ot]!=="none"?l[ot]:"")),i.scale=i.rotate=i.translate="none"),T=Ic(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Xl(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==Bs&&(F=T[0],V=T[1],X=T[2],P=T[3],u=I=T[4],h=z=T[5],T.length===6?(f=Math.sqrt(F*F+V*V),g=Math.sqrt(P*P+X*X),_=F||V?wr(V,F)*zi:0,y=X||P?wr(X,P)*zi+_:0,y&&(g*=Math.abs(Math.cos(y*Gr))),n.svg&&(u-=M-(M*F+E*X),h-=E-(M*V+E*P))):(re=T[6],H=T[7],Y=T[8],ee=T[9],te=T[10],q=T[11],u=T[12],h=T[13],d=T[14],L=wr(re,te),p=L*zi,L&&(x=Math.cos(-L),R=Math.sin(-L),W=I*x+Y*R,j=z*x+ee*R,$=re*x+te*R,Y=I*-R+Y*x,ee=z*-R+ee*x,te=re*-R+te*x,q=H*-R+q*x,I=W,z=j,re=$),L=wr(-X,te),m=L*zi,L&&(x=Math.cos(-L),R=Math.sin(-L),W=F*x-Y*R,j=V*x-ee*R,$=X*x-te*R,q=P*R+q*x,F=W,V=j,X=$),L=wr(V,F),_=L*zi,L&&(x=Math.cos(L),R=Math.sin(L),W=F*x+V*R,j=I*x+z*R,V=V*x-F*R,z=z*x-I*R,F=W,I=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=dt(Math.sqrt(F*F+V*V+X*X)),g=dt(Math.sqrt(z*z+re*re)),L=wr(I,z),y=Math.abs(L)>2e-4?L*zi:0,S=q?1/(q<0?-q:q):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!np(wn(e,ot)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=dt(f),n.scaleY=dt(g),n.rotation=dt(_)+o,n.rotationX=dt(p)+o,n.rotationY=dt(m)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yt]=to(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?ab:Zf?ip:sb,n.uncache=0,n},to=function(e){return(e=e.split(" "))[0]+" "+e[1]},hl=function(e,t,n){var i=Ot(t);return dt(parseFloat(t)+parseFloat(Ti(e,"x",n+"px",i)))+i},sb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ip(e,t)},Ii="0deg",gs="0px",Ui=") ",ip=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,S="",M=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==Ii||u!==Ii)){var E=parseFloat(u)*Gr,T=Math.sin(E),L=Math.cos(E),x;E=parseFloat(h)*Gr,x=Math.cos(E),a=hl(y,a,T*x*-v),o=hl(y,o,-Math.sin(E)*-v),l=hl(y,l,L*x*-v+v)}p!==gs&&(S+="perspective("+p+Ui),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||a!==gs||o!==gs||l!==gs)&&(S+=l!==gs||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ui),c!==Ii&&(S+="rotate("+c+Ui),u!==Ii&&(S+="rotateY("+u+Ui),h!==Ii&&(S+="rotateX("+h+Ui),(d!==Ii||f!==Ii)&&(S+="skew("+d+", "+f+Ui),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ui),y.style[ot]=S||"translate(0, 0)"},ab=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(a),S=parseFloat(o),M,E,T,L,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gr,c*=Gr,M=Math.cos(l)*h,E=Math.sin(l)*h,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=Gr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,L*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,E*=x)),M=dt(M),E=dt(E),T=dt(T),L=dt(L)):(M=h,L=d,E=T=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=Ti(f,"x",a,"px"),S=Ti(f,"y",o,"px")),(g||_||p||m)&&(v=dt(v+g-(g*M+_*T)+p),S=dt(S+_-(g*E+_*L)+m)),(i||s)&&(x=f.getBBox(),v=dt(v+i/100*x.width),S=dt(S+s/100*x.height)),x="matrix("+M+","+E+","+T+","+L+","+v+","+S+")",f.setAttribute("transform",x),y&&(f.style[ot]=x)},ob=function(e,t,n,i,s){var a=360,o=Tt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Nh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Nh)%a-~~(c/a)*a)),e._pt=d=new Xt(e._pt,t,n,i,c,WS),d.e=u,d.u="deg",e._props.push(n),d},Hh=function(e,t){for(var n in t)e[n]=t[n];return e},lb=function(e,t,n){var i=Hh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ot]=t,o=zs(n,1),nr(n,ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ot],a[ot]=t,o=zs(n,1),a[ot]=c);for(l in ai)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Ot(c),g=Ot(u),h=f!==g?Ti(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Xt(e._pt,o,l,h,d-h,jl),e._pt.u=g||0,e._props.push(l));Hh(o,i)};qt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});eo[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Qn(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var rp={name:"css",register:ql,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,y,v,S,M,E,T,L;Lc||ql(),this.styles=this.styles||Jf(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(tn[_]&&zf(_,t,n,i,e,s)))){if(f=typeof u,g=eo[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ns(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",bi.lastIndex=0,bi.test(c)||(p=Ot(c),m=Ot(u)),m?p!==m&&(c=Ti(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Tt(c)&&~c.indexOf("random(")&&(c=Ns(c)),Ot(c+"")||c==="auto"||(c+=hn.units[_]||Ot(Qn(e,_))||""),(c+"").charAt(1)==="="&&(c=Qn(e,_))):c=Qn(e,_),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in zn&&(_==="autoAlpha"&&(d===1&&Qn(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,o.visibility),vi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ai,v){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=wn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||zs(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Xt(this._pt,o,ot,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Xt(this._pt,M,"scaleY",M.scaleY,(y?Br(M.scaleY,y+h):h)-M.scaleY||0,jl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Yt,0,o[Yt]),u=ib(u),M.svg?Xl(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&vi(this,M,"zOrigin",M.zOrigin,m),vi(this,o,_,to(c),to(u)));continue}else if(_==="svgOrigin"){Xl(e,u,1,E,0,this);continue}else if(_ in tp){ob(this,M,_,d,y?Br(d,y+u):u);continue}else if(_==="smoothOrigin"){vi(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){lb(this,u,e);continue}}else _ in o||(_=es(_)||_);if(v||(h||h===0)&&(d||d===0)&&!HS.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),m=Ot(u)||(_ in hn.units?hn.units[_]:p),p!==m&&(d=Ti(e,_,c,m)),this._pt=new Xt(this._pt,v?M:o,_,d,(y?Br(d,y+h):h)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?$S:jl),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=jS);else if(_ in o)nb.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Sc(_,u);continue}v||(_ in o?L.push(_,0,o[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),a.push(_)}}T&&$f(this)},render:function(e,t){if(t.tween._time||!Dc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qn,aliases:zn,getSetter:function(e,t,n){var i=zn[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==Yt&&(e._gsap.x||Qn(e,"x"))?n&&Uh===n?t==="scale"?KS:YS:(Uh=n||{})&&(t==="scale"?JS:ZS):e.style&&!vc(e.style[t])?qS:~t.indexOf("-")?XS:Cc(e,t)},core:{_removeProperty:nr,_getMatrix:Ic}};Kt.utils.checkPrefix=es;Kt.core.getStyleSaver=Jf;(function(r,e,t,n){var i=qt(r+","+e+","+t,function(s){ai[s]=1});qt(e,function(s){hn.units[s]="deg",tp[s]=1}),zn[i[13]]=r+","+e,qt(n,function(s){var a=s.split(":");zn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){hn.units[r]="px"});Kt.registerPlugin(rp);var ea=Kt.registerPlugin(rp)||Kt;ea.core.Tween;function Wh(r,e,t,n=.2){return new Promise(i=>{ea.to(r.position,{x:e,z:t,duration:n,ease:"power2.out",onComplete:i})})}function cb(r){ea.to(r.scale,{x:1.2,y:1.2,z:1.2,duration:.1,yoyo:!0,repeat:1,ease:"power1.inOut"})}function ub(r){return new Promise(e=>{ea.to(r.scale,{x:0,y:0,z:0,duration:.2,ease:"back.in(2)",onComplete:e})})}function hb(r,e){return!r||!e?!1:r.colorId===e.colorId&&!r.isMerging&&!e.isMerging}class db{constructor(e){this.scene=e,this.particles=[]}emit(e,t,n,i=10){const s=new sr(.15,.15,.15),a=new Js({color:n});for(let o=0;o<i;o++){const l=new an(s,a);l.position.set(e,.5,t);const c=(Math.random()-.5)*4,u=Math.random()*3+1,h=(Math.random()-.5)*4;this.scene.add(l),this.particles.push({mesh:l,velX:c,velY:u,velZ:h,life:1})}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];if(n.life-=e*1.5,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(t,1);continue}n.velY-=9.8*e,n.mesh.position.x+=n.velX*e,n.mesh.position.y+=n.velY*e,n.mesh.position.z+=n.velZ*e,n.mesh.rotation.x+=n.velZ*e*2,n.mesh.rotation.z-=n.velX*e*2,n.mesh.scale.setScalar(n.life)}}}const Pr=[{id:1,size:3,maxColors:2,iceCount:1},{id:2,size:4,maxColors:2,iceCount:2},{id:3,size:4,maxColors:3,iceCount:2},{id:4,size:4,maxColors:3,iceCount:3},{id:5,size:4,maxColors:3,iceCount:3},{id:6,size:5,maxColors:4,iceCount:4},{id:7,size:5,maxColors:4,iceCount:4},{id:8,size:5,maxColors:4,iceCount:5},{id:9,size:5,maxColors:5,iceCount:5},{id:10,size:5,maxColors:5,iceCount:6},{id:11,size:5,maxColors:5,iceCount:5},{id:12,size:5,maxColors:5,iceCount:6},{id:13,size:5,maxColors:6,iceCount:6},{id:14,size:5,maxColors:6,iceCount:6},{id:15,size:5,maxColors:6,iceCount:7},{id:16,size:6,maxColors:6,iceCount:7},{id:17,size:6,maxColors:6,iceCount:8},{id:18,size:6,maxColors:7,iceCount:8},{id:19,size:6,maxColors:7,iceCount:9},{id:20,size:6,maxColors:7,iceCount:9},{id:21,size:6,maxColors:7,iceCount:8},{id:22,size:6,maxColors:7,iceCount:9},{id:23,size:6,maxColors:8,iceCount:9},{id:24,size:6,maxColors:8,iceCount:10},{id:25,size:7,maxColors:8,iceCount:10},{id:26,size:7,maxColors:8,iceCount:11},{id:27,size:7,maxColors:8,iceCount:11},{id:28,size:7,maxColors:9,iceCount:12},{id:29,size:7,maxColors:9,iceCount:12},{id:30,size:7,maxColors:9,iceCount:13},{id:31,size:7,maxColors:9,iceCount:12},{id:32,size:7,maxColors:9,iceCount:13},{id:33,size:7,maxColors:9,iceCount:13},{id:34,size:8,maxColors:9,iceCount:14},{id:35,size:8,maxColors:9,iceCount:14},{id:36,size:8,maxColors:9,iceCount:15},{id:37,size:8,maxColors:9,iceCount:15},{id:38,size:8,maxColors:9,iceCount:16},{id:39,size:8,maxColors:9,iceCount:16},{id:40,size:8,maxColors:9,iceCount:17},{id:41,size:8,maxColors:9,iceCount:16},{id:42,size:8,maxColors:9,iceCount:17},{id:43,size:8,maxColors:9,iceCount:17},{id:44,size:8,maxColors:9,iceCount:18},{id:45,size:9,maxColors:9,iceCount:18},{id:46,size:9,maxColors:9,iceCount:19},{id:47,size:9,maxColors:9,iceCount:19},{id:48,size:9,maxColors:9,iceCount:20},{id:49,size:9,maxColors:9,iceCount:20},{id:50,size:9,maxColors:9,iceCount:21}];function sp(r){if(r<=Pr.length)return Pr[r-1];const e=Pr[Pr.length-1],t=r-Pr.length,n=Math.floor(t/5),i=Math.floor(t/3);return{id:r,size:Math.min(10,e.size+n),maxColors:9,iceCount:Math.min(Math.floor((e.size+n)**2*.3),e.iceCount+i),grid:null}}class fb{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.enabled=!0}playMove(){if(!this.enabled)return;this.resumeContext();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.1),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.start(),e.stop(this.ctx.currentTime+.1)}playMerge(){if(!this.enabled)return;this.resumeContext();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.ctx.destination),e.type="sine",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(500,this.ctx.currentTime+.1),t.gain.setValueAtTime(0,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.05,this.ctx.currentTime+.05),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),e.start(),e.stop(this.ctx.currentTime+.3)}playIceBreak(){if(!this.enabled)return;this.resumeContext();const e=this.ctx.sampleRate*.3,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<e;o++)n[o]=Math.random()*2-1;const i=this.ctx.createBufferSource();i.buffer=t;const s=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1500,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.2),i.connect(a),a.connect(s),s.connect(this.ctx.destination),s.gain.setValueAtTime(.5,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),i.start()}resumeContext(){this.ctx.state==="suspended"&&this.ctx.resume()}}const Rs=new fb;class pb{constructor(e,t=4,n=1){this.scene=e,this.size=t,this.level=n;const i=sp(n);this.maxColors=i.maxColors,this.theme=_c(n),this.grid=[],this.group=new xs,this.isAnimating=!1,this.iceLeft=0,this.statsListeners=[],this.gameOverListeners=[],this.levelCompleteListeners=[];const s=(t-1)/2;this.group.position.set(-s,0,-s),this.scene.add(this.group),this.particles=new db(this.group),this.createFloor(),this.initLevel(i)}update(e){this.particles.update(e)}onStatsChange(e){this.statsListeners.push(e)}onGameOver(e){this.gameOverListeners.push(e)}onLevelComplete(e){this.levelCompleteListeners.push(e)}updateStats(){this.statsListeners.forEach(e=>e(this.iceLeft,this.level)),this.iceLeft}createFloor(){const e=this.theme?this.theme.floorColor:2763306,t=(this.size-1)/2,n=new Os(this.size,this.size),i=new mc({color:e,side:Dn}),s=new an(n,i);s.rotation.x=-Math.PI/2,s.position.set(t,0,t),s.receiveShadow=!0,this.group.add(s);const a=new Os(this.size+.4,this.size+.4),o=new Js({color:0,transparent:!0,opacity:.5,side:Dn}),l=new an(a,o);l.rotation.x=-Math.PI/2,l.position.set(t,-.05,t),this.group.add(l);const c=new Lx(this.size,this.size,4473924,3355443);c.position.set(t,.01,t),this.group.add(c)}initLevel(e){const t=Xx(e);this.grid=Array(this.size).fill(null).map(()=>Array(this.size).fill(null)),this.iceLeft=0;for(let n=0;n<this.size;n++)for(let i=0;i<this.size;i++){const s=t[n][i];s===100?(this.addCube(n,i,0,"ice"),this.iceLeft++):s>0&&this.addCube(n,i,s-1,"normal")}setTimeout(()=>this.updateStats(),0)}addCube(e,t,n,i="normal"){const s=new qx(e,t,n,i,this.theme);this.grid[e][t]=s,this.group.add(s.mesh)}removeCube(e){this.group.remove(e.mesh),e.dispose()}checkIceBreak(e,t){[{x:e+1,z:t},{x:e-1,z:t},{x:e,z:t+1},{x:e,z:t-1}].forEach(i=>{if(i.x>=0&&i.x<this.size&&i.z>=0&&i.z<this.size){const s=this.grid[i.x][i.z];if(s&&s.type==="ice"){this.grid[i.x][i.z]=null,this.iceLeft--,Rs.playIceBreak(),ub(s.mesh).then(()=>{this.removeCube(s)});const a=this.theme?this.theme.iceColor:11197951;this.particles.emit(s.x,s.z,a,15)}}}),this.updateStats()}async move(e){if(this.isAnimating)return;this.isAnimating=!0;for(let h=0;h<this.size;h++)for(let d=0;d<this.size;d++)this.grid[h][d]&&(this.grid[h][d].isMerging=!1);let t=!1;const n=[],i={x:0,z:0};e==="up"&&(i.z=-1),e==="down"&&(i.z=1),e==="left"&&(i.x=-1),e==="right"&&(i.x=1);const s=i.x===1?this.size-1:0,a=i.x===1?-1:this.size,o=i.x===1?-1:1,l=i.z===1?this.size-1:0,c=i.z===1?-1:this.size,u=i.z===1?-1:1;for(let h=s;h!==a;h+=o)for(let d=l;d!==c;d+=u){const f=this.grid[h][d];if(!f||f.type==="ice")continue;let g=h+i.x,_=d+i.z,p=h,m=d,y=null;for(;g>=0&&g<this.size&&_>=0&&_<this.size;){const v=this.grid[g][_];if(!v)p=g,m=_,g+=i.x,_+=i.z;else{if(v.type==="ice")break;hb(f,v)&&(y=v,p=g,m=_);break}}(p!==h||m!==d)&&(t=!0,this.grid[h][d]=null,y?(y.isMerging=!0,n.push(Wh(f.mesh,p,m).then(()=>{this.removeCube(f),y.upgrade(),cb(y.mesh),Rs.playMerge(),y.isMerging=!1,this.checkIceBreak(p,m)}))):(this.grid[p][m]=f,f.x=p,f.z=m,n.push(Wh(f.mesh,p,m))))}t&&(Rs.playMove(),await Promise.all(n),this.iceLeft===0?this.levelCompleteListeners.forEach(h=>h()):this.spawnRandom()),this.isAnimating=!1,this.iceLeft>0&&this.checkGameOver()}spawnRandom(){const e=[];for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++)this.grid[t][n]||e.push({x:t,z:n});if(e.length>0){const t=e[Math.floor(Math.random()*e.length)];this.addCube(t.x,t.z,Math.floor(Math.random()*this.maxColors));const n=this.grid[t.x][t.z];n.mesh.scale.set(0,0,0),ea.to(n.mesh.scale,{x:1,y:1,z:1,duration:.2})}}checkGameOver(){for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++)if(!this.grid[e][t])return;for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++){const n=this.grid[e][t];if(!(!n||n.type==="ice")){if(e<this.size-1){const i=this.grid[e+1][t];if(i&&i.type!=="ice"&&i.colorId===n.colorId||!i)return}if(t<this.size-1){const i=this.grid[e][t+1];if(i&&i.type!=="ice"&&i.colorId===n.colorId||!i)return}}}this.gameOverListeners.forEach(e=>e())}}const dl="color-swipe-3d-save",ts={getData(){const r=localStorage.getItem(dl);return r?JSON.parse(r):{maxLevel:1,currentLevel:1,gamertag:null}},saveData(r,e,t){const n={maxLevel:r,currentLevel:e,gamertag:t};localStorage.setItem(dl,JSON.stringify(n))},unlockLevel(r){const e=this.getData();r>e.maxLevel&&(e.maxLevel=r,this.saveData(e.maxLevel,e.currentLevel,e.gamertag))},setCurrentLevel(r){const e=this.getData();e.currentLevel=r,this.saveData(e.maxLevel,e.currentLevel,e.gamertag)},setGamertag(r){const e=this.getData();e.gamertag=r,this.saveData(e.maxLevel,e.currentLevel,e.gamertag)},resetData(){localStorage.removeItem(dl)}};var Yl=function(r,e){return Yl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Yl(r,e)};function ap(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Yl(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var no=function(){return no=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},no.apply(this,arguments)};function os(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function op(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(s=(i<3?a(s):i>3?a(e,t,s):a(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}function lp(r,e){return function(t,n){e(t,n,r)}}function cp(r,e,t,n,i,s){function a(m){if(m!==void 0&&typeof m!="function")throw new TypeError("Function expected");return m}for(var o=n.kind,l=o==="getter"?"get":o==="setter"?"set":"value",c=!e&&r?n.static?r:r.prototype:null,u=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),h,d=!1,f=t.length-1;f>=0;f--){var g={};for(var _ in n)g[_]=_==="access"?{}:n[_];for(var _ in n.access)g.access[_]=n.access[_];g.addInitializer=function(m){if(d)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a(m||null))};var p=(0,t[f])(o==="accessor"?{get:u.get,set:u.set}:u[l],g);if(o==="accessor"){if(p===void 0)continue;if(p===null||typeof p!="object")throw new TypeError("Object expected");(h=a(p.get))&&(u.get=h),(h=a(p.set))&&(u.set=h),(h=a(p.init))&&i.unshift(h)}else(h=a(p))&&(o==="field"?i.unshift(h):u[l]=h)}c&&Object.defineProperty(c,n.name,u),d=!0}function up(r,e,t){for(var n=arguments.length>2,i=0;i<e.length;i++)t=n?e[i].call(r,t):e[i].call(r);return n?t:void 0}function hp(r){return typeof r=="symbol"?r:"".concat(r)}function dp(r,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(r,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function fp(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)}function ce(r,e,t,n){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(n.next(u))}catch(h){a(h)}}function l(u){try{c(n.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):i(u.value).then(o,l)}c((n=n.apply(r,e||[])).next())})}function pp(r,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,i,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(c){return function(u){return l([c,u])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(n=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,i=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(r,t)}catch(u){c=[6,u],i=0}finally{n=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var vo=Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]};function mp(r,e){for(var t in r)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&vo(e,r,t)}function io(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Uc(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,s=[],a;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(o){a={error:o}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s}function _p(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(Uc(arguments[e]));return r}function gp(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),i=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,i++)n[i]=s[a];return n}function vp(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}function ns(r){return this instanceof ns?(this.v=r,this):new ns(r)}function yp(r,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(r,e||[]),i,s=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(f){return function(g){return Promise.resolve(g).then(f,h)}}function o(f,g){n[f]&&(i[f]=function(_){return new Promise(function(p,m){s.push([f,_,p,m])>1||l(f,_)})},g&&(i[f]=g(i[f])))}function l(f,g){try{c(n[f](g))}catch(_){d(s[0][3],_)}}function c(f){f.value instanceof ns?Promise.resolve(f.value.v).then(u,h):d(s[0][2],f)}function u(f){l("next",f)}function h(f){l("throw",f)}function d(f,g){f(g),s.shift(),s.length&&l(s[0][0],s[0][1])}}function xp(r){var e,t;return e={},n("next"),n("throw",function(i){throw i}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(i,s){e[i]=r[i]?function(a){return(t=!t)?{value:ns(r[i](a)),done:!1}:s?s(a):a}:s}}function Sp(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r[Symbol.asyncIterator],t;return e?e.call(r):(r=typeof io=="function"?io(r):r[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(s){t[s]=r[s]&&function(a){return new Promise(function(o,l){a=r[s](a),i(o,l,a.done,a.value)})}}function i(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}function bp(r,e){return Object.defineProperty?Object.defineProperty(r,"raw",{value:e}):r.raw=e,r}var mb=Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e},Kl=function(r){return Kl=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},Kl(r)};function wp(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t=Kl(r),n=0;n<t.length;n++)t[n]!=="default"&&vo(e,r,t[n]);return mb(e,r),e}function Ep(r){return r&&r.__esModule?r:{default:r}}function Tp(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)}function Mp(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t}function Ap(r,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof r=="function"?e===r:r.has(e)}function Rp(r,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,i;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(i=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");i&&(n=function(){try{i.call(this)}catch(s){return Promise.reject(s)}}),r.stack.push({value:e,dispose:n,async:t})}else t&&r.stack.push({async:!0});return e}var _b=typeof SuppressedError=="function"?SuppressedError:function(r,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=r,n.suppressed=e,n};function Cp(r){function e(s){r.error=r.hasError?new _b(s,r.error,"An error was suppressed during disposal."):s,r.hasError=!0}var t,n=0;function i(){for(;t=r.stack.pop();)try{if(!t.async&&n===1)return n=0,r.stack.push(t),Promise.resolve().then(i);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return n|=2,Promise.resolve(s).then(i,function(a){return e(a),i()})}else n|=1}catch(a){e(a)}if(n===1)return r.hasError?Promise.reject(r.error):Promise.resolve();if(r.hasError)throw r.error}return i()}function Pp(r,e){return typeof r=="string"&&/^\.\.?\//.test(r)?r.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,n,i,s,a){return n?e?".jsx":".js":i&&(!s||!a)?t:i+s+"."+a.toLowerCase()+"js"}):r}const gb={__extends:ap,__assign:no,__rest:os,__decorate:op,__param:lp,__esDecorate:cp,__runInitializers:up,__propKey:hp,__setFunctionName:dp,__metadata:fp,__awaiter:ce,__generator:pp,__createBinding:vo,__exportStar:mp,__values:io,__read:Uc,__spread:_p,__spreadArrays:gp,__spreadArray:vp,__await:ns,__asyncGenerator:yp,__asyncDelegator:xp,__asyncValues:Sp,__makeTemplateObject:bp,__importStar:wp,__importDefault:Ep,__classPrivateFieldGet:Tp,__classPrivateFieldSet:Mp,__classPrivateFieldIn:Ap,__addDisposableResource:Rp,__disposeResources:Cp,__rewriteRelativeImportExtension:Pp},vb=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Rp,get __assign(){return no},__asyncDelegator:xp,__asyncGenerator:yp,__asyncValues:Sp,__await:ns,__awaiter:ce,__classPrivateFieldGet:Tp,__classPrivateFieldIn:Ap,__classPrivateFieldSet:Mp,__createBinding:vo,__decorate:op,__disposeResources:Cp,__esDecorate:cp,__exportStar:mp,__extends:ap,__generator:pp,__importDefault:Ep,__importStar:wp,__makeTemplateObject:bp,__metadata:fp,__param:lp,__propKey:hp,__read:Uc,__rest:os,__rewriteRelativeImportExtension:Pp,__runInitializers:up,__setFunctionName:dp,__spread:_p,__spreadArray:vp,__spreadArrays:gp,__values:io,default:gb},Symbol.toStringTag,{value:"Module"})),yb=r=>r?(...e)=>r(...e):(...e)=>fetch(...e);class Nc extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}}class xb extends Nc{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class jh extends Nc{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class $h extends Nc{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Jl;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(Jl||(Jl={}));class Sb{constructor(e,{headers:t={},customFetch:n,region:i=Jl.Any}={}){this.url=e,this.headers=t,this.region=i,this.fetch=yb(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return ce(this,arguments,void 0,function*(t,n={}){var i;let s,a;try{const{headers:o,method:l,body:c,signal:u,timeout:h}=n;let d={},{region:f}=n;f||(f=this.region);const g=new URL(`${this.url}/${t}`);f&&f!=="any"&&(d["x-region"]=f,g.searchParams.set("forceFunctionRegion",f));let _;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",_=c):typeof c=="string"?(d["Content-Type"]="text/plain",_=c):typeof FormData<"u"&&c instanceof FormData?_=c:(d["Content-Type"]="application/json",_=JSON.stringify(c)):_=c;let p=u;h&&(a=new AbortController,s=setTimeout(()=>a.abort(),h),u?(p=a.signal,u.addEventListener("abort",()=>a.abort())):p=a.signal);const m=yield this.fetch(g.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:_,signal:p}).catch(M=>{throw new xb(M)}),y=m.headers.get("x-relay-error");if(y&&y==="true")throw new jh(m);if(!m.ok)throw new $h(m);let v=((i=m.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),S;return v==="application/json"?S=yield m.json():v==="application/octet-stream"||v==="application/pdf"?S=yield m.blob():v==="text/event-stream"?S=m:v==="multipart/form-data"?S=yield m.formData():S=yield m.text(),{data:S,error:null,response:m}}catch(o){return{data:null,error:o,response:o instanceof $h||o instanceof jh?o.context:void 0}}finally{s&&clearTimeout(s)}})}}function bb(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}var Gt={};const ls=bb(vb);var Ra={},Ca={},Pa={},La={},Da={},Oa={},qh;function Lp(){if(qh)return Oa;qh=1,Object.defineProperty(Oa,"__esModule",{value:!0});class r extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return Oa.default=r,Oa}var Xh;function Dp(){if(Xh)return Da;Xh=1,Object.defineProperty(Da,"__esModule",{value:!0});const e=ls.__importDefault(Lp());class t{constructor(i){var s,a;this.shouldThrowOnError=!1,this.method=i.method,this.url=i.url,this.headers=new Headers(i.headers),this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=(s=i.shouldThrowOnError)!==null&&s!==void 0?s:!1,this.signal=i.signal,this.isMaybeSingle=(a=i.isMaybeSingle)!==null&&a!==void 0?a:!1,i.fetch?this.fetch=i.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,s){return this.headers=new Headers(this.headers),this.headers.set(i,s),this}then(i,s){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const a=this.fetch;let o=a(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async l=>{var c,u,h,d;let f=null,g=null,_=null,p=l.status,m=l.statusText;if(l.ok){if(this.method!=="HEAD"){const M=await l.text();M===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((c=this.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text"))?g=M:g=JSON.parse(M))}const v=(u=this.headers.get("Prefer"))===null||u===void 0?void 0:u.match(/count=(exact|planned|estimated)/),S=(h=l.headers.get("content-range"))===null||h===void 0?void 0:h.split("/");v&&S&&S.length>1&&(_=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(g)&&(g.length>1?(f={code:"PGRST116",details:`Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},g=null,_=null,p=406,m="Not Acceptable"):g.length===1?g=g[0]:g=null)}else{const v=await l.text();try{f=JSON.parse(v),Array.isArray(f)&&l.status===404&&(g=[],f=null,p=200,m="OK")}catch{l.status===404&&v===""?(p=204,m="No Content"):f={message:v}}if(f&&this.isMaybeSingle&&(!((d=f==null?void 0:f.details)===null||d===void 0)&&d.includes("0 rows"))&&(f=null,p=200,m="OK"),f&&this.shouldThrowOnError)throw new e.default(f)}return{error:f,data:g,count:_,status:p,statusText:m}});return this.shouldThrowOnError||(o=o.catch(l=>{var c,u,h,d,f,g;let _="";const p=l==null?void 0:l.cause;if(p){const m=(c=p==null?void 0:p.message)!==null&&c!==void 0?c:"",y=(u=p==null?void 0:p.code)!==null&&u!==void 0?u:"";_=`${(h=l==null?void 0:l.name)!==null&&h!==void 0?h:"FetchError"}: ${l==null?void 0:l.message}`,_+=`

Caused by: ${(d=p==null?void 0:p.name)!==null&&d!==void 0?d:"Error"}: ${m}`,y&&(_+=` (${y})`),p!=null&&p.stack&&(_+=`
${p.stack}`)}else _=(f=l==null?void 0:l.stack)!==null&&f!==void 0?f:"";return{error:{message:`${(g=l==null?void 0:l.name)!==null&&g!==void 0?g:"FetchError"}: ${l==null?void 0:l.message}`,details:_,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),o.then(i,s)}returns(){return this}overrideTypes(){return this}}return Da.default=t,Da}var Yh;function Op(){if(Yh)return La;Yh=1,Object.defineProperty(La,"__esModule",{value:!0});const e=ls.__importDefault(Dp());class t extends e.default{select(i){let s=!1;const a=(i??"*").split("").map(o=>/\s/.test(o)&&!s?"":(o==='"'&&(s=!s),o)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(i,{ascending:s=!0,nullsFirst:a,foreignTable:o,referencedTable:l=o}={}){const c=l?`${l}.order`:"order",u=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${u?`${u},`:""}${i}.${s?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:s,referencedTable:a=s}={}){const o=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(o,`${i}`),this}range(i,s,{foreignTable:a,referencedTable:o=a}={}){const l=typeof o>"u"?"offset":`${o}.offset`,c=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(l,`${i}`),this.url.searchParams.set(c,`${s-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:i=!1,verbose:s=!1,settings:a=!1,buffers:o=!1,wal:l=!1,format:c="text"}={}){var u;const h=[i?"analyze":null,s?"verbose":null,a?"settings":null,o?"buffers":null,l?"wal":null].filter(Boolean).join("|"),d=(u=this.headers.get("Accept"))!==null&&u!==void 0?u:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${d}"; options=${h};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(i){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${i}`),this}}return La.default=t,La}var Kh;function Fc(){if(Kh)return Pa;Kh=1,Object.defineProperty(Pa,"__esModule",{value:!0});const e=ls.__importDefault(Op()),t=new RegExp("[,()]");class n extends e.default{eq(s,a){return this.url.searchParams.append(s,`eq.${a}`),this}neq(s,a){return this.url.searchParams.append(s,`neq.${a}`),this}gt(s,a){return this.url.searchParams.append(s,`gt.${a}`),this}gte(s,a){return this.url.searchParams.append(s,`gte.${a}`),this}lt(s,a){return this.url.searchParams.append(s,`lt.${a}`),this}lte(s,a){return this.url.searchParams.append(s,`lte.${a}`),this}like(s,a){return this.url.searchParams.append(s,`like.${a}`),this}likeAllOf(s,a){return this.url.searchParams.append(s,`like(all).{${a.join(",")}}`),this}likeAnyOf(s,a){return this.url.searchParams.append(s,`like(any).{${a.join(",")}}`),this}ilike(s,a){return this.url.searchParams.append(s,`ilike.${a}`),this}ilikeAllOf(s,a){return this.url.searchParams.append(s,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(s,a){return this.url.searchParams.append(s,`ilike(any).{${a.join(",")}}`),this}regexMatch(s,a){return this.url.searchParams.append(s,`match.${a}`),this}regexIMatch(s,a){return this.url.searchParams.append(s,`imatch.${a}`),this}is(s,a){return this.url.searchParams.append(s,`is.${a}`),this}isDistinct(s,a){return this.url.searchParams.append(s,`isdistinct.${a}`),this}in(s,a){const o=Array.from(new Set(a)).map(l=>typeof l=="string"&&t.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(s,`in.(${o})`),this}contains(s,a){return typeof a=="string"?this.url.searchParams.append(s,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(s,`cs.{${a.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(a)}`),this}containedBy(s,a){return typeof a=="string"?this.url.searchParams.append(s,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(s,`cd.{${a.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(a)}`),this}rangeGt(s,a){return this.url.searchParams.append(s,`sr.${a}`),this}rangeGte(s,a){return this.url.searchParams.append(s,`nxl.${a}`),this}rangeLt(s,a){return this.url.searchParams.append(s,`sl.${a}`),this}rangeLte(s,a){return this.url.searchParams.append(s,`nxr.${a}`),this}rangeAdjacent(s,a){return this.url.searchParams.append(s,`adj.${a}`),this}overlaps(s,a){return typeof a=="string"?this.url.searchParams.append(s,`ov.${a}`):this.url.searchParams.append(s,`ov.{${a.join(",")}}`),this}textSearch(s,a,{config:o,type:l}={}){let c="";l==="plain"?c="pl":l==="phrase"?c="ph":l==="websearch"&&(c="w");const u=o===void 0?"":`(${o})`;return this.url.searchParams.append(s,`${c}fts${u}.${a}`),this}match(s){return Object.entries(s).forEach(([a,o])=>{this.url.searchParams.append(a,`eq.${o}`)}),this}not(s,a,o){return this.url.searchParams.append(s,`not.${a}.${o}`),this}or(s,{foreignTable:a,referencedTable:o=a}={}){const l=o?`${o}.or`:"or";return this.url.searchParams.append(l,`(${s})`),this}filter(s,a,o){return this.url.searchParams.append(s,`${a}.${o}`),this}}return Pa.default=n,Pa}var Jh;function Ip(){if(Jh)return Ca;Jh=1,Object.defineProperty(Ca,"__esModule",{value:!0});const e=ls.__importDefault(Fc());class t{constructor(i,{headers:s={},schema:a,fetch:o}){this.url=i,this.headers=new Headers(s),this.schema=a,this.fetch=o}select(i,s){const{head:a=!1,count:o}=s??{},l=a?"HEAD":"GET";let c=!1;const u=(i??"*").split("").map(h=>/\s/.test(h)&&!c?"":(h==='"'&&(c=!c),h)).join("");return this.url.searchParams.set("select",u),o&&this.headers.append("Prefer",`count=${o}`),new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(i,{count:s,defaultToNull:a=!0}={}){var o;const l="POST";if(s&&this.headers.append("Prefer",`count=${s}`),a||this.headers.append("Prefer","missing=default"),Array.isArray(i)){const c=i.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);this.url.searchParams.set("columns",u.join(","))}}return new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}upsert(i,{onConflict:s,ignoreDuplicates:a=!1,count:o,defaultToNull:l=!0}={}){var c;const u="POST";if(this.headers.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),s!==void 0&&this.url.searchParams.set("on_conflict",s),o&&this.headers.append("Prefer",`count=${o}`),l||this.headers.append("Prefer","missing=default"),Array.isArray(i)){const h=i.reduce((d,f)=>d.concat(Object.keys(f)),[]);if(h.length>0){const d=[...new Set(h)].map(f=>`"${f}"`);this.url.searchParams.set("columns",d.join(","))}}return new e.default({method:u,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}update(i,{count:s}={}){var a;const o="PATCH";return s&&this.headers.append("Prefer",`count=${s}`),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}delete({count:i}={}){var s;const a="DELETE";return i&&this.headers.append("Prefer",`count=${i}`),new e.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch})}}return Ca.default=t,Ca}var Zh;function wb(){if(Zh)return Ra;Zh=1,Object.defineProperty(Ra,"__esModule",{value:!0});const r=ls,e=r.__importDefault(Ip()),t=r.__importDefault(Fc());class n{constructor(s,{headers:a={},schema:o,fetch:l}={}){this.url=s,this.headers=new Headers(a),this.schemaName=o,this.fetch=l}from(s){if(!s||typeof s!="string"||s.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");const a=new URL(`${this.url}/${s}`);return new e.default(a,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(s){return new n(this.url,{headers:this.headers,schema:s,fetch:this.fetch})}rpc(s,a={},{head:o=!1,get:l=!1,count:c}={}){var u;let h;const d=new URL(`${this.url}/rpc/${s}`);let f;o||l?(h=o?"HEAD":"GET",Object.entries(a).filter(([_,p])=>p!==void 0).map(([_,p])=>[_,Array.isArray(p)?`{${p.join(",")}}`:`${p}`]).forEach(([_,p])=>{d.searchParams.append(_,p)})):(h="POST",f=a);const g=new Headers(this.headers);return c&&g.set("Prefer",`count=${c}`),new t.default({method:h,url:d,headers:g,schema:this.schemaName,body:f,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch})}}return Ra.default=n,Ra}Object.defineProperty(Gt,"__esModule",{value:!0});var Up=Gt.PostgrestError=jp=Gt.PostgrestBuilder=Hp=Gt.PostgrestTransformBuilder=Gp=Gt.PostgrestFilterBuilder=Bp=Gt.PostgrestQueryBuilder=Fp=Gt.PostgrestClient=void 0;const cs=ls,Np=cs.__importDefault(wb());var Fp=Gt.PostgrestClient=Np.default;const kp=cs.__importDefault(Ip());var Bp=Gt.PostgrestQueryBuilder=kp.default;const zp=cs.__importDefault(Fc());var Gp=Gt.PostgrestFilterBuilder=zp.default;const Vp=cs.__importDefault(Op());var Hp=Gt.PostgrestTransformBuilder=Vp.default;const Wp=cs.__importDefault(Dp());var jp=Gt.PostgrestBuilder=Wp.default;const $p=cs.__importDefault(Lp());Up=Gt.PostgrestError=$p.default;var qp=Gt.default={PostgrestClient:Np.default,PostgrestQueryBuilder:kp.default,PostgrestFilterBuilder:zp.default,PostgrestTransformBuilder:Vp.default,PostgrestBuilder:Wp.default,PostgrestError:$p.default};const Eb=ym({__proto__:null,get PostgrestBuilder(){return jp},get PostgrestClient(){return Fp},get PostgrestError(){return Up},get PostgrestFilterBuilder(){return Gp},get PostgrestQueryBuilder(){return Bp},get PostgrestTransformBuilder(){return Hp},default:qp},[Gt]),{PostgrestClient:Tb,PostgrestQueryBuilder:pT,PostgrestFilterBuilder:mT,PostgrestTransformBuilder:_T,PostgrestBuilder:gT,PostgrestError:vT}=qp||Eb;class Mb{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const t=process.versions;if(t&&t.node){const n=t.node,i=parseInt(n.replace(/^v/,"").split(".")[0]);return i>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${i} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${i} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const n=this.getWebSocketConstructor();return new n(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Ab="2.86.0",Rb=`realtime-js/${Ab}`,Xp="1.0.0",Cb="2.0.0",Qh=Xp,Zl=1e4,Pb=1e3,Lb=100;var Wi;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(Wi||(Wi={}));var vt;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(vt||(vt={}));var Cn;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(Cn||(Cn={}));var Ql;(function(r){r.websocket="websocket"})(Ql||(Ql={}));var ji;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(ji||(ji={}));class Db{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,n;const i=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,i)}_encodeJsonUserBroadcastPush(e){var t,n;const i=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(i)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,n){var i,s;const a=e.topic,o=(i=e.ref)!==null&&i!==void 0?i:"",l=(s=e.join_ref)!==null&&s!==void 0?s:"",c=e.payload.event,u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(u).length===0?"":JSON.stringify(u);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let g=new DataView(f),_=0;g.setUint8(_++,this.KINDS.userBroadcastPush),g.setUint8(_++,l.length),g.setUint8(_++,o.length),g.setUint8(_++,a.length),g.setUint8(_++,c.length),g.setUint8(_++,h.length),g.setUint8(_++,t),Array.from(l,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(o,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(a,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(c,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(h,m=>g.setUint8(_++,m.charCodeAt(0)));var p=new Uint8Array(f.byteLength+n.byteLength);return p.set(new Uint8Array(f),0),p.set(new Uint8Array(n),f.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return t(n)}if(typeof e=="string"){const n=JSON.parse(e),[i,s,a,o,l]=n;return t({join_ref:i,ref:s,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),n=t.getUint8(0),i=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,i)}}_decodeUserBroadcast(e,t,n){const i=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+i));l=l+i;const u=n.decode(e.slice(l,l+s));l=l+s;const h=n.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,g={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>t.includes(n)))}}class Yp{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var et;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(et||(et={}));const ed=(r,e,t={})=>{var n;const i=(n=t.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=Ob(a,r,e,i),s),{}):{}},Ob=(r,e,t,n)=>{const i=e.find(o=>o.name===r),s=i==null?void 0:i.type,a=t[r];return s&&!n.includes(s)?Kp(s,a):ec(a)},Kp=(r,e)=>{if(r.charAt(0)==="_"){const t=r.slice(1,r.length);return Fb(e,t)}switch(r){case et.bool:return Ib(e);case et.float4:case et.float8:case et.int2:case et.int4:case et.int8:case et.numeric:case et.oid:return Ub(e);case et.json:case et.jsonb:return Nb(e);case et.timestamp:return kb(e);case et.abstime:case et.date:case et.daterange:case et.int4range:case et.int8range:case et.money:case et.reltime:case et.text:case et.time:case et.timestamptz:case et.timetz:case et.tsrange:case et.tstzrange:return ec(e);default:return ec(e)}},ec=r=>r,Ib=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},Ub=r=>{if(typeof r=="string"){const e=parseFloat(r);if(!Number.isNaN(e))return e}return r},Nb=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch(e){return console.log(`JSON parse error: ${e}`),r}return r},Fb=(r,e)=>{if(typeof r!="string")return r;const t=r.length-1,n=r[t];if(r[0]==="{"&&n==="}"){let s;const a=r.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>Kp(e,o))}return r},kb=r=>typeof r=="string"?r.replace(" ","T"):r,Jp=r=>{const e=new URL(r);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};class fl{constructor(e,t,n={},i=Zl){this.channel=e,this.event=t,this.payload=n,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var td;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(td||(td={}));class Cs{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(t==null?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},i=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Cs.syncState(this.state,i,s,a),this.pendingDiffs.forEach(l=>{this.state=Cs.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},i=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Cs.syncDiff(this.state,i,s,a),o())}),this.onJoin((i,s,a)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:a})}),this.onLeave((i,s,a)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,i){const s=this.cloneDeep(e),a=this.transformState(t),o={},l={};return this.map(s,(c,u)=>{a[c]||(l[c]=u)}),this.map(a,(c,u)=>{const h=s[c];if(h){const d=u.map(p=>p.presence_ref),f=h.map(p=>p.presence_ref),g=u.filter(p=>f.indexOf(p.presence_ref)<0),_=h.filter(p=>d.indexOf(p.presence_ref)<0);g.length>0&&(o[c]=g),_.length>0&&(l[c]=_)}else o[c]=u}),this.syncDiff(s,{joins:o,leaves:l},n,i)}static syncDiff(e,t,n,i){const{joins:s,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),i||(i=()=>{}),this.map(s,(o,l)=>{var c;const u=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),u.length>0){const h=e[o].map(f=>f.presence_ref),d=u.filter(f=>h.indexOf(f.presence_ref)<0);e[o].unshift(...d)}n(o,u,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const u=l.map(h=>h.presence_ref);c=c.filter(h=>u.indexOf(h.presence_ref)<0),e[o]=c,i(o,c,l),c.length===0&&delete e[o]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const i=e[n];return"metas"in i?t[n]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):t[n]=i,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var nd;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(nd||(nd={}));var Ps;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(Ps||(Ps={}));var Zn;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(Zn||(Zn={}));class kc{constructor(e,t={config:{}},n){var i,s;if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=vt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new fl(this,Cn.join,this.params,this.timeout),this.rejoinTimer=new Yp(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=vt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=vt.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=vt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=vt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=vt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Cn.reply,{},(a,o)=>{this._trigger(this._replyEventName(o),a)}),this.presence=new Cs(this),this.broadcastEndpointURL=Jp(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((s=(i=this.params.config)===null||i===void 0?void 0:i.broadcast)===null||s===void 0)&&s.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){var n,i,s;if(this.socket.isConnected()||this.socket.connect(),this.state==vt.closed){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&i!==void 0?i:[],u=!!this.bindings[Ps.PRESENCE]&&this.bindings[Ps.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,h={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>e==null?void 0:e(Zn.CHANNEL_ERROR,f)),this._onClose(()=>e==null?void 0:e(Zn.CLOSED)),this.updateJoinPayload(Object.assign({config:d},h)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:f})=>{var g;if(this.socket.setAuth(),f===void 0){e==null||e(Zn.SUBSCRIBED);return}else{const _=this.bindings.postgres_changes,p=(g=_==null?void 0:_.length)!==null&&g!==void 0?g:0,m=[];for(let y=0;y<p;y++){const v=_[y],{filter:{event:S,schema:M,table:E,filter:T}}=v,L=f&&f[y];if(L&&L.event===S&&L.schema===M&&L.table===E&&L.filter===T)m.push(Object.assign(Object.assign({},v),{id:L.id}));else{this.unsubscribe(),this.state=vt.errored,e==null||e(Zn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=m,e&&e(Zn.SUBSCRIBED);return}}).receive("error",f=>{this.state=vt.errored,e==null||e(Zn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(f).join(", ")||"error")))}).receive("timeout",()=>{e==null||e(Zn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){return this.state===vt.joined&&e===Ps.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,n)}async httpSend(e,t,n={}){var i;const s=this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"";if(t==null)return Promise.reject("Payload is required for httpSend()");const a={method:"POST",headers:{Authorization:s,apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},o=await this._fetchWithTimeout(this.broadcastEndpointURL,a,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);if(o.status===202)return{success:!0};let l=o.statusText;try{const c=await o.json();l=c.error||c.message||l}catch{}return Promise.reject(new Error(l))}async send(e,t={}){var n,i;if(!this._canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:a}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=vt.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Cn.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(i=>{n=new fl(this,Cn.leave,{},e),n.receive("ok",()=>{t(),i("ok")}).receive("timeout",()=>{t(),i("timed out")}).receive("error",()=>{i("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=vt.closed,this.bindings={}}async _fetchWithTimeout(e,t,n){const i=new AbortController,s=setTimeout(()=>i.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:i.signal}));return clearTimeout(s),a}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new fl(this,e,t,n);return this._canPush()?i.send():this._addToPushBuffer(i),i}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>Lb){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var i,s;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:u}=Cn;if(n&&[o,l,c,u].indexOf(a)>=0&&n!==this._joinRef())return;let d=this._onMessage(a,t,n);if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(f=>{var g,_,p;return((g=f.filter)===null||g===void 0?void 0:g.event)==="*"||((p=(_=f.filter)===null||_===void 0?void 0:_.event)===null||p===void 0?void 0:p.toLocaleLowerCase())===a}).map(f=>f.callback(d,n)):(s=this.bindings[a])===null||s===void 0||s.filter(f=>{var g,_,p,m,y,v;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in f){const S=f.id,M=(g=f.filter)===null||g===void 0?void 0:g.event;return S&&((_=t.ids)===null||_===void 0?void 0:_.includes(S))&&(M==="*"||(M==null?void 0:M.toLocaleLowerCase())===((p=t.data)===null||p===void 0?void 0:p.type.toLocaleLowerCase()))}else{const S=(y=(m=f==null?void 0:f.filter)===null||m===void 0?void 0:m.event)===null||y===void 0?void 0:y.toLocaleLowerCase();return S==="*"||S===((v=t==null?void 0:t.event)===null||v===void 0?void 0:v.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===a}).map(f=>{if(typeof d=="object"&&"ids"in d){const g=d.data,{schema:_,table:p,commit_timestamp:m,type:y,errors:v}=g;d=Object.assign(Object.assign({},{schema:_,table:p,commit_timestamp:m,eventType:y,new:{},old:{},errors:v}),this._getPayloadRecords(g))}f.callback(d,n)})}_isClosed(){return this.state===vt.closed}_isJoined(){return this.state===vt.joined}_isJoining(){return this.state===vt.joining}_isLeaving(){return this.state===vt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const i=e.toLocaleLowerCase(),s={type:i,filter:t,callback:n};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&kc.isEqual(i.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Cn.close,{},e)}_onError(e){this._on(Cn.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=vt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=ed(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=ed(e.columns,e.old_record)),t}}const pl=()=>{},Ia={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Bb=[1e3,2e3,5e3,1e4],zb=1e4,Gb=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Vb{constructor(e,t){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Zl,this.transport=null,this.heartbeatIntervalMs=Ia.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=pl,this.ref=0,this.reconnectTimer=null,this.vsn=Qh,this.logger=pl,this.conn=null,this.sendBuffer=[],this.serializer=new Db,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=i=>i?(...s)=>i(...s):(...s)=>fetch(...s),!(!((n=t==null?void 0:t.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${Ql.websocket}`,this.httpEndpoint=Jp(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=Mb.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(e?this.conn.close(e,t??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Wi.connecting:return ji.Connecting;case Wi.open:return ji.Open;case Wi.closing:return ji.Closing;default:return ji.Closed}}isConnected(){return this.connectionState()===ji.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const n=`realtime:${e}`,i=this.getChannels().find(s=>s.topic===n);if(i)return i;{const s=new kc(`realtime:${e}`,t,this);return this.channels.push(s),s}}push(e){const{topic:t,event:n,payload:i,ref:s}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${t} ${n} (${s})`,i),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(Pb,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},Ia.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply")try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error")}catch(c){this.log("error","error in heartbeat callback",c)}t.ref&&t.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:i,payload:s,ref:a}=t,o=a?`(${a})`:"",l=s.status||"";this.log("receive",`${l} ${n} ${i} ${o}`.trim(),s),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(i,s,a)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){if(this.conn){if(this.conn.readyState===Wi.open||this.conn.readyState===Wi.connecting)try{this.conn.close()}catch(e){this.log("error","Error closing connection",e)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(t=>{this.log("error","error waiting for auth on connect",t),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(Cn.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",i=new URLSearchParams(t);return`${e}${n}${i}`}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([Gb],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t;e?t=e:this.accessToken?t=await this.accessToken():t=this.accessTokenValue,this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(n=>{const i={access_token:t,version:Rb};t&&n.updateJoinPayload(i),n.joinedOnce&&n._isJoined()&&n._push(Cn.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(n=>{try{n(t)}catch(i){this.log("error",`error in ${e} callback`,i)}})}catch(n){this.log("error",`error triggering ${e} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new Yp(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ia.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,n,i,s,a,o,l,c,u,h,d,f;switch(this.transport=(t=e==null?void 0:e.transport)!==null&&t!==void 0?t:null,this.timeout=(n=e==null?void 0:e.timeout)!==null&&n!==void 0?n:Zl,this.heartbeatIntervalMs=(i=e==null?void 0:e.heartbeatIntervalMs)!==null&&i!==void 0?i:Ia.HEARTBEAT_INTERVAL,this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(a=e==null?void 0:e.accessToken)!==null&&a!==void 0?a:null,this.heartbeatCallback=(o=e==null?void 0:e.heartbeatCallback)!==null&&o!==void 0?o:pl,this.vsn=(l=e==null?void 0:e.vsn)!==null&&l!==void 0?l:Qh,e!=null&&e.params&&(this.params=e.params),e!=null&&e.logger&&(this.logger=e.logger),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(c=e==null?void 0:e.reconnectAfterMs)!==null&&c!==void 0?c:g=>Bb[g-1]||zb,this.vsn){case Xp:this.encode=(u=e==null?void 0:e.encode)!==null&&u!==void 0?u:(g,_)=>_(JSON.stringify(g)),this.decode=(h=e==null?void 0:e.decode)!==null&&h!==void 0?h:(g,_)=>_(JSON.parse(g));break;case Cb:this.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:this.serializer.encode.bind(this.serializer),this.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl}}}class yo extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function st(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}class Hb extends yo{constructor(e,t,n){super(e),this.name="StorageApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class tc extends yo{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}const Bc=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),Wb=()=>Response,nc=r=>{if(Array.isArray(r))return r.map(t=>nc(t));if(typeof r=="function"||r!==Object(r))return r;const e={};return Object.entries(r).forEach(([t,n])=>{const i=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[i]=nc(n)}),e},jb=r=>{if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},$b=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r),ml=r=>{var e;return r.msg||r.message||r.error_description||(typeof r.error=="string"?r.error:(e=r.error)===null||e===void 0?void 0:e.message)||JSON.stringify(r)},qb=(r,e,t)=>ce(void 0,void 0,void 0,function*(){const n=yield Wb();r instanceof n&&!(t!=null&&t.noResolveJson)?r.json().then(i=>{const s=r.status||500,a=(i==null?void 0:i.statusCode)||s+"";e(new Hb(ml(i),s,a))}).catch(i=>{e(new tc(ml(i),i))}):e(new tc(ml(r),r))}),Xb=(r,e,t,n)=>{const i={method:r,headers:(e==null?void 0:e.headers)||{}};return r==="GET"||!n?i:(jb(n)?(i.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i.body=JSON.stringify(n)):i.body=n,e!=null&&e.duplex&&(i.duplex=e.duplex),Object.assign(Object.assign({},i),t))};function ta(r,e,t,n,i,s){return ce(this,void 0,void 0,function*(){return new Promise((a,o)=>{r(t,Xb(e,n,i,s)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>qb(l,o,n))})})}function Gs(r,e,t,n){return ce(this,void 0,void 0,function*(){return ta(r,"GET",e,t,n)})}function Rn(r,e,t,n,i){return ce(this,void 0,void 0,function*(){return ta(r,"POST",e,n,i,t)})}function ic(r,e,t,n,i){return ce(this,void 0,void 0,function*(){return ta(r,"PUT",e,n,i,t)})}function Yb(r,e,t,n){return ce(this,void 0,void 0,function*(){return ta(r,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),n)})}function zc(r,e,t,n,i){return ce(this,void 0,void 0,function*(){return ta(r,"DELETE",e,n,i,t)})}class Kb{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return ce(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(st(e))return{data:null,error:e};throw e}})}}var Zp;class Jb{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Zp]="BlobDownloadBuilder",this.promise=null}asStream(){return new Kb(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}execute(){return ce(this,void 0,void 0,function*(){try{return{data:yield(yield this.downloadFn()).blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(st(e))return{data:null,error:e};throw e}})}}Zp=Symbol.toStringTag;const Zb={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},id={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class Qb{constructor(e,t={},n,i){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=n,this.fetch=Bc(i)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,n,i){return ce(this,void 0,void 0,function*(){try{let s;const a=Object.assign(Object.assign({},id),i);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&n instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",n)):typeof FormData<"u"&&n instanceof FormData?(s=n,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),l&&!s.has("metadata")&&s.append("metadata",this.encodeMetadata(l))):(s=n,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers&&(o=Object.assign(Object.assign({},o),i.headers));const c=this._removeEmptyFolders(t),u=this._getFinalPath(c),h=yield(e=="PUT"?ic:Rn)(this.fetch,`${this.url}/object/${u}`,s,Object.assign({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{data:{path:c,id:h.Id,fullPath:h.Key},error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(st(s))return{data:null,error:s};throw s}})}upload(e,t,n){return ce(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,n)})}uploadToSignedUrl(e,t,n,i){return ce(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),a=this._getFinalPath(s),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",t);try{let l;const c=Object.assign({upsert:id.upsert},i),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const h=yield ic(this.fetch,o.toString(),l,{headers:u});return{data:{path:s,fullPath:h.Key},error:null}}catch(l){if(this.shouldThrowOnError)throw l;if(st(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return ce(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e);const i=Object.assign({},this.headers);t!=null&&t.upsert&&(i["x-upsert"]="true");const s=yield Rn(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:i}),a=new URL(this.url+s.url),o=a.searchParams.get("token");if(!o)throw new yo("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(st(n))return{data:null,error:n};throw n}})}update(e,t,n){return ce(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,n)})}move(e,t,n){return ce(this,void 0,void 0,function*(){try{return{data:yield Rn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}copy(e,t,n){return ce(this,void 0,void 0,function*(){try{return{data:{path:(yield Rn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}createSignedUrl(e,t,n){return ce(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e),s=yield Rn(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:t},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const a=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${a}`)},{data:s,error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}createSignedUrls(e,t,n){return ce(this,void 0,void 0,function*(){try{const i=yield Rn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),s=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:i.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${s}`):null})),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}download(e,t){const i=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),a=s?`?${s}`:"",o=this._getFinalPath(e),l=()=>Gs(this.fetch,`${this.url}/${i}/${o}${a}`,{headers:this.headers,noResolveJson:!0});return new Jb(l,this.shouldThrowOnError)}info(e){return ce(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const n=yield Gs(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:nc(n),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(st(n))return{data:null,error:n};throw n}})}exists(e){return ce(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield Yb(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(st(n)&&n instanceof tc){const i=n.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:n}}throw n}})}getPublicUrl(e,t){const n=this._getFinalPath(e),i=[],s=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";s!==""&&i.push(s);const o=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});l!==""&&i.push(l);let c=i.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${n}${c}`)}}}remove(e){return ce(this,void 0,void 0,function*(){try{return{data:yield zc(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}list(e,t,n){return ce(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},Zb),t),{prefix:e||""});return{data:yield Rn(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},n),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}listV2(e,t){return ce(this,void 0,void 0,function*(){try{const n=Object.assign({},e);return{data:yield Rn(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},t),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(st(n))return{data:null,error:n};throw n}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const Qp="2.86.0",em={"X-Client-Info":`storage-js/${Qp}`};class ew{constructor(e,t={},n,i){this.shouldThrowOnError=!1;const s=new URL(e);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase.")),this.url=s.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},em),t),this.fetch=Bc(n)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(e){return ce(this,void 0,void 0,function*(){try{const t=this.listBucketOptionsToQueryString(e);return{data:yield Gs(this.fetch,`${this.url}/bucket${t}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}getBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Gs(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}createBucket(e){return ce(this,arguments,void 0,function*(t,n={public:!1}){try{return{data:yield Rn(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(st(i))return{data:null,error:i};throw i}})}updateBucket(e,t){return ce(this,void 0,void 0,function*(){try{return{data:yield ic(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(st(n))return{data:null,error:n};throw n}})}emptyBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Rn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield zc(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}listBucketOptionsToQueryString(e){const t={};return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}}var Vs=class extends Error{constructor(r,e){var t;super(r),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function tw(r,e,t){const n=new URL(e,r);if(t)for(const[i,s]of Object.entries(t))s!==void 0&&n.searchParams.set(i,s);return n.toString()}async function nw(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function iw(r){const e=r.fetchImpl??globalThis.fetch;return{async request({method:t,path:n,query:i,body:s,headers:a}){const o=tw(r.baseUrl,n,i),l=await nw(r.auth),c=await e(o,{method:t,headers:{...s?{"Content-Type":"application/json"}:{},...l,...a},body:s?JSON.stringify(s):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!c.ok){const f=h?d:void 0,g=f==null?void 0:f.error;throw new Vs((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function Ua(r){return r.join("")}var rw=class{constructor(r,e=""){this.client=r,this.prefix=e}async listNamespaces(r){const e=r?{parent:Ua(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(r,e){const t={namespace:r.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ua(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ua(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ua(r.namespace)}`}),!0}catch(e){if(e instanceof Vs&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(r,e){try{return await this.createNamespace(r,e)}catch(t){if(t instanceof Vs&&t.status===409)return;throw t}}};function Er(r){return r.join("")}var sw=class{constructor(r,e="",t){this.client=r,this.prefix=e,this.accessDelegation=t}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables`})).data.identifiers}async createTable(r,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(r,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables/${r.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(r,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(r){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables/${r.name}`,headers:e})).data.metadata}async tableExists(r){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Er(r.namespace)}/tables/${r.name}`,headers:e}),!0}catch(t){if(t instanceof Vs&&t.status===404)return!1;throw t}}async createTableIfNotExists(r,e){try{return await this.createTable(r,e)}catch(t){if(t instanceof Vs&&t.status===409)return await this.loadTable({namespace:r.namespace,name:e.name});throw t}}},aw=class{constructor(r){var n;let e="v1";r.catalogName&&(e+=`/${r.catalogName}`);const t=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=iw({baseUrl:t,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=(n=r.accessDelegation)==null?void 0:n.join(","),this.namespaceOps=new rw(this.client,e),this.tableOps=new sw(this.client,e,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,e){return this.namespaceOps.createNamespace(r,e)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,e){return this.tableOps.createTable(r,e)}async updateTable(r,e){return this.tableOps.updateTable(r,e)}async dropTable(r,e){await this.tableOps.dropTable(r,e)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,e){return this.namespaceOps.createNamespaceIfNotExists(r,e)}async createTableIfNotExists(r,e){return this.tableOps.createTableIfNotExists(r,e)}};class ow{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},em),t),this.fetch=Bc(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Rn(this.fetch,`${this.url}/bucket`,{name:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}listBuckets(e){return ce(this,void 0,void 0,function*(){try{const t=new URLSearchParams;(e==null?void 0:e.limit)!==void 0&&t.set("limit",e.limit.toString()),(e==null?void 0:e.offset)!==void 0&&t.set("offset",e.offset.toString()),e!=null&&e.sortColumn&&t.set("sortColumn",e.sortColumn),e!=null&&e.sortOrder&&t.set("sortOrder",e.sortOrder),e!=null&&e.search&&t.set("search",e.search);const n=t.toString(),i=n?`${this.url}/bucket?${n}`:`${this.url}/bucket`;return{data:yield Gs(this.fetch,i,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield zc(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(st(t))return{data:null,error:t};throw t}})}from(e){if(!$b(e))throw new yo("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");return new aw({baseUrl:this.url,catalogName:e,auth:{type:"custom",getHeaders:()=>ce(this,void 0,void 0,function*(){return this.headers})},fetch:this.fetch})}}const Gc={"X-Client-Info":`storage-js/${Qp}`,"Content-Type":"application/json"};class tm extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}}function rn(r){return typeof r=="object"&&r!==null&&"__isStorageVectorsError"in r}class _l extends tm{constructor(e,t,n){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class lw extends tm{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}}var rd;(function(r){r.InternalError="InternalError",r.S3VectorConflictException="S3VectorConflictException",r.S3VectorNotFoundException="S3VectorNotFoundException",r.S3VectorBucketNotEmpty="S3VectorBucketNotEmpty",r.S3VectorMaxBucketsExceeded="S3VectorMaxBucketsExceeded",r.S3VectorMaxIndexesExceeded="S3VectorMaxIndexesExceeded"})(rd||(rd={}));const Vc=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),cw=r=>{if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},sd=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),uw=(r,e,t)=>ce(void 0,void 0,void 0,function*(){if(r&&typeof r=="object"&&"status"in r&&"ok"in r&&typeof r.status=="number"&&!(t!=null&&t.noResolveJson)){const i=r.status||500,s=r;if(typeof s.json=="function")s.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||i+"";e(new _l(sd(a),i,o))}).catch(()=>{const a=i+"",o=s.statusText||`HTTP ${i} error`;e(new _l(o,i,a))});else{const a=i+"",o=s.statusText||`HTTP ${i} error`;e(new _l(o,i,a))}}else e(new lw(sd(r),r))}),hw=(r,e,t,n)=>{const i={method:r,headers:(e==null?void 0:e.headers)||{}};return n?(cw(n)?(i.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i.body=JSON.stringify(n)):i.body=n,Object.assign(Object.assign({},i),t)):i};function dw(r,e,t,n,i,s){return ce(this,void 0,void 0,function*(){return new Promise((a,o)=>{r(t,hw(e,n,i,s)).then(l=>{if(!l.ok)throw l;if(n!=null&&n.noResolveJson)return l;const c=l.headers.get("content-type");return!c||!c.includes("application/json")?{}:l.json()}).then(l=>a(l)).catch(l=>uw(l,o,n))})})}function sn(r,e,t,n,i){return ce(this,void 0,void 0,function*(){return dw(r,"POST",e,n,i,t)})}class fw{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Gc),t),this.fetch=Vc(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createIndex(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield sn(this.fetch,`${this.url}/CreateIndex`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}getIndex(e,t){return ce(this,void 0,void 0,function*(){try{return{data:yield sn(this.fetch,`${this.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(rn(n))return{data:null,error:n};throw n}})}listIndexes(e){return ce(this,void 0,void 0,function*(){try{return{data:yield sn(this.fetch,`${this.url}/ListIndexes`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}deleteIndex(e,t){return ce(this,void 0,void 0,function*(){try{return{data:(yield sn(this.fetch,`${this.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}))||{},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(rn(n))return{data:null,error:n};throw n}})}}class pw{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Gc),t),this.fetch=Vc(n)}throwOnError(){return this.shouldThrowOnError=!0,this}putVectors(e){return ce(this,void 0,void 0,function*(){try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return{data:(yield sn(this.fetch,`${this.url}/PutVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}getVectors(e){return ce(this,void 0,void 0,function*(){try{return{data:yield sn(this.fetch,`${this.url}/GetVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}listVectors(e){return ce(this,void 0,void 0,function*(){try{if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return{data:yield sn(this.fetch,`${this.url}/ListVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}queryVectors(e){return ce(this,void 0,void 0,function*(){try{return{data:yield sn(this.fetch,`${this.url}/QueryVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}deleteVectors(e){return ce(this,void 0,void 0,function*(){try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return{data:(yield sn(this.fetch,`${this.url}/DeleteVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}}class mw{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Gc),t),this.fetch=Vc(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield sn(this.fetch,`${this.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}getBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield sn(this.fetch,`${this.url}/GetVectorBucket`,{vectorBucketName:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}listBuckets(){return ce(this,arguments,void 0,function*(e={}){try{return{data:yield sn(this.fetch,`${this.url}/ListVectorBuckets`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield sn(this.fetch,`${this.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(rn(t))return{data:null,error:t};throw t}})}}class _w extends mw{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new gw(this.url,this.headers,e,this.fetch)}createBucket(e){const t=Object.create(null,{createBucket:{get:()=>super.createBucket}});return ce(this,void 0,void 0,function*(){return t.createBucket.call(this,e)})}getBucket(e){const t=Object.create(null,{getBucket:{get:()=>super.getBucket}});return ce(this,void 0,void 0,function*(){return t.getBucket.call(this,e)})}listBuckets(){const e=Object.create(null,{listBuckets:{get:()=>super.listBuckets}});return ce(this,arguments,void 0,function*(t={}){return e.listBuckets.call(this,t)})}deleteBucket(e){const t=Object.create(null,{deleteBucket:{get:()=>super.deleteBucket}});return ce(this,void 0,void 0,function*(){return t.deleteBucket.call(this,e)})}}class gw extends fw{constructor(e,t,n,i){super(e,t,i),this.vectorBucketName=n}createIndex(e){const t=Object.create(null,{createIndex:{get:()=>super.createIndex}});return ce(this,void 0,void 0,function*(){return t.createIndex.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName}))})}listIndexes(){const e=Object.create(null,{listIndexes:{get:()=>super.listIndexes}});return ce(this,arguments,void 0,function*(t={}){return e.listIndexes.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName}))})}getIndex(e){const t=Object.create(null,{getIndex:{get:()=>super.getIndex}});return ce(this,void 0,void 0,function*(){return t.getIndex.call(this,this.vectorBucketName,e)})}deleteIndex(e){const t=Object.create(null,{deleteIndex:{get:()=>super.deleteIndex}});return ce(this,void 0,void 0,function*(){return t.deleteIndex.call(this,this.vectorBucketName,e)})}index(e){return new vw(this.url,this.headers,this.vectorBucketName,e,this.fetch)}}class vw extends pw{constructor(e,t,n,i,s){super(e,t,s),this.vectorBucketName=n,this.indexName=i}putVectors(e){const t=Object.create(null,{putVectors:{get:()=>super.putVectors}});return ce(this,void 0,void 0,function*(){return t.putVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}getVectors(e){const t=Object.create(null,{getVectors:{get:()=>super.getVectors}});return ce(this,void 0,void 0,function*(){return t.getVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}listVectors(){const e=Object.create(null,{listVectors:{get:()=>super.listVectors}});return ce(this,arguments,void 0,function*(t={}){return e.listVectors.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}queryVectors(e){const t=Object.create(null,{queryVectors:{get:()=>super.queryVectors}});return ce(this,void 0,void 0,function*(){return t.queryVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}deleteVectors(e){const t=Object.create(null,{deleteVectors:{get:()=>super.deleteVectors}});return ce(this,void 0,void 0,function*(){return t.deleteVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}}class yw extends ew{constructor(e,t={},n,i){super(e,t,n,i)}from(e){return new Qb(this.url,this.headers,e,this.fetch)}get vectors(){return new _w(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new ow(this.url+"/iceberg",this.headers,this.fetch)}}const xw="2.86.0";let ws="";typeof Deno<"u"?ws="deno":typeof document<"u"?ws="web":typeof navigator<"u"&&navigator.product==="ReactNative"?ws="react-native":ws="node";const Sw={"X-Client-Info":`supabase-js-${ws}/${xw}`},bw={headers:Sw},ww={schema:"public"},Ew={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Tw={},Mw=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),Aw=()=>Headers,Rw=(r,e,t)=>{const n=Mw(t),i=Aw();return async(s,a)=>{var o;const l=(o=await e())!==null&&o!==void 0?o:r;let c=new i(a==null?void 0:a.headers);return c.has("apikey")||c.set("apikey",r),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(s,Object.assign(Object.assign({},a),{headers:c}))}};function Cw(r){return r.endsWith("/")?r:r+"/"}function Pw(r,e){var t,n;const{db:i,auth:s,realtime:a,global:o}=r,{db:l,auth:c,realtime:u,global:h}=e,d={db:Object.assign(Object.assign({},l),i),auth:Object.assign(Object.assign({},c),s),realtime:Object.assign(Object.assign({},u),a),storage:{},global:Object.assign(Object.assign(Object.assign({},h),o),{headers:Object.assign(Object.assign({},(t=h==null?void 0:h.headers)!==null&&t!==void 0?t:{}),(n=o==null?void 0:o.headers)!==null&&n!==void 0?n:{})}),accessToken:async()=>""};return r.accessToken?d.accessToken=r.accessToken:delete d.accessToken,d}function Lw(r){const e=r==null?void 0:r.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Cw(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const nm="2.86.0",Lr=30*1e3,rc=3,gl=rc*Lr,Dw="http://localhost:9999",Ow="supabase.auth.token",Iw={"X-Client-Info":`gotrue-js/${nm}`},sc="X-Supabase-Api-Version",im={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Uw=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Nw=10*60*1e3;class Hs extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}}function de(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class Fw extends Hs{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function kw(r){return de(r)&&r.name==="AuthApiError"}class $i extends Hs{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class Ai extends Hs{constructor(e,t,n,i){super(e,n,i),this.name=t,this.status=n}}class en extends Ai{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Bw(r){return de(r)&&r.name==="AuthSessionMissingError"}class Tr extends Ai{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Na extends Ai{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Fa extends Ai{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function zw(r){return de(r)&&r.name==="AuthImplicitGrantRedirectError"}class ad extends Ai{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class ac extends Ai{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function vl(r){return de(r)&&r.name==="AuthRetryableFetchError"}class od extends Ai{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}}class oc extends Ai{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ro="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),ld=` 	
\r=`.split(""),Gw=(()=>{const r=new Array(128);for(let e=0;e<r.length;e+=1)r[e]=-1;for(let e=0;e<ld.length;e+=1)r[ld[e].charCodeAt(0)]=-2;for(let e=0;e<ro.length;e+=1)r[ro[e].charCodeAt(0)]=e;return r})();function cd(r,e,t){if(r!==null)for(e.queue=e.queue<<8|r,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(ro[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(ro[n]),e.queuedBits-=6}}function rm(r,e,t){const n=Gw[r];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function ud(r){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},s=a=>{Ww(a,n,t)};for(let a=0;a<r.length;a+=1)rm(r.charCodeAt(a),i,s);return e.join("")}function Vw(r,e){if(r<=127){e(r);return}else if(r<=2047){e(192|r>>6),e(128|r&63);return}else if(r<=65535){e(224|r>>12),e(128|r>>6&63),e(128|r&63);return}else if(r<=1114111){e(240|r>>18),e(128|r>>12&63),e(128|r>>6&63),e(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function Hw(r,e){for(let t=0;t<r.length;t+=1){let n=r.charCodeAt(t);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(r.charCodeAt(t+1)-56320&65535|i)+65536,t+=1}Vw(n,e)}}function Ww(r,e,t){if(e.utf8seq===0){if(r<=127){t(r);return}for(let n=1;n<6;n+=1)if(!(r>>7-n&1)){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=r&31;else if(e.utf8seq===3)e.codepoint=r&15;else if(e.utf8seq===4)e.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|r&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Vr(r){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};for(let i=0;i<r.length;i+=1)rm(r.charCodeAt(i),t,n);return new Uint8Array(e)}function jw(r){const e=[];return Hw(r,t=>e.push(t)),new Uint8Array(e)}function Xi(r){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};return r.forEach(i=>cd(i,t,n)),cd(null,t,n),e.join("")}function $w(r){return Math.round(Date.now()/1e3)+r}function qw(){return Symbol("auth-callback")}const Mt=()=>typeof window<"u"&&typeof document<"u",Ni={tested:!1,writable:!1},sm=()=>{if(!Mt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ni.tested)return Ni.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),Ni.tested=!0,Ni.writable=!0}catch{Ni.tested=!0,Ni.writable=!1}return Ni.writable};function Xw(r){const e={},t=new URL(r);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((i,s)=>{e[s]=i})}catch{}return t.searchParams.forEach((n,i)=>{e[i]=n}),e}const am=r=>r?(...e)=>r(...e):(...e)=>fetch(...e),Yw=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",Dr=async(r,e,t)=>{await r.setItem(e,JSON.stringify(t))},Fi=async(r,e)=>{const t=await r.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},di=async(r,e)=>{await r.removeItem(e)};class xo{constructor(){this.promise=new xo.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}xo.promiseConstructor=Promise;function yl(r){const e=r.split(".");if(e.length!==3)throw new oc("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!Uw.test(e[n]))throw new oc("JWT not in base64url format");return{header:JSON.parse(ud(e[0])),payload:JSON.parse(ud(e[1])),signature:Vr(e[2]),raw:{header:e[0],payload:e[1]}}}async function Kw(r){return await new Promise(e=>{setTimeout(()=>e(null),r)})}function Jw(r,e){return new Promise((n,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await r(s);if(!e(s,null,a)){n(a);return}}catch(a){if(!e(s,a)){i(a);return}}})()})}function Zw(r){return("0"+r.toString(16)).substr(-2)}function Qw(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let i="";for(let s=0;s<56;s++)i+=t.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(e),Array.from(e,Zw).join("")}async function eE(r){const t=new TextEncoder().encode(r),n=await crypto.subtle.digest("SHA-256",t),i=new Uint8Array(n);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}async function tE(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const t=await eE(r);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Mr(r,e,t=!1){const n=Qw();let i=n;t&&(i+="/PASSWORD_RECOVERY"),await Dr(r,`${e}-code-verifier`,i);const s=await tE(n);return[s,n===s?"plain":"s256"]}const nE=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function iE(r){const e=r.headers.get(sc);if(!e||!e.match(nE))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function rE(r){if(!r)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(r<=e)throw new Error("JWT has expired")}function sE(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const aE=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Ar(r){if(!aE.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function xl(){const r={};return new Proxy(r,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function oE(r,e){return new Proxy(r,{get:(t,n,i)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const s=n.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,n,i)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,n,i)}})}function hd(r){return JSON.parse(JSON.stringify(r))}const Gi=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),lE=[502,503,504];async function dd(r){var e;if(!Yw(r))throw new ac(Gi(r),0);if(lE.includes(r.status))throw new ac(Gi(r),r.status);let t;try{t=await r.json()}catch(s){throw new $i(Gi(s),s)}let n;const i=iE(r);if(i&&i.getTime()>=im["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new od(Gi(t),r.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new en}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new od(Gi(t),r.status,t.weak_password.reasons);throw new Fw(Gi(t),r.status||500,n)}const cE=(r,e,t,n)=>{const i={method:r,headers:(e==null?void 0:e.headers)||{}};return r==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),t))};async function ye(r,e,t,n){var i;const s=Object.assign({},n==null?void 0:n.headers);s[sc]||(s[sc]=im["2024-01-01"].name),n!=null&&n.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const a=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await uE(r,e,t+o,{headers:s,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function uE(r,e,t,n,i,s){const a=cE(e,n,i,s);let o;try{o=await r(t,Object.assign({},a))}catch(l){throw console.error(l),new ac(Gi(l),0)}if(o.ok||await dd(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(l){await dd(l)}}function An(r){var e;let t=null;fE(r)&&(t=Object.assign({},r),r.expires_at||(t.expires_at=$w(r.expires_in)));const n=(e=r.user)!==null&&e!==void 0?e:r;return{data:{session:t,user:n},error:null}}function fd(r){const e=An(r);return!e.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=r.weak_password),e}function fi(r){var e;return{data:{user:(e=r.user)!==null&&e!==void 0?e:r},error:null}}function hE(r){return{data:r,error:null}}function dE(r){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:s}=r,a=os(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function pd(r){return r}function fE(r){return r.access_token&&r.refresh_token&&r.expires_in}const Sl=["global","local","others"];class pE{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=am(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,t=Sl[0]){if(Sl.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Sl.join(", ")}`);try{return await ye(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(de(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await ye(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:fi})}catch(n){if(de(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=os(e,["options"]),i=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await ye(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:dE,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(de(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await ye(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:fi})}catch(t){if(de(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,i,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await ye(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(s=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:pd});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),p=JSON.parse(g.split(";")[1].split("=")[1]);c[`${p}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(de(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){Ar(e);try{return await ye(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:fi})}catch(t){if(de(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){Ar(e);try{return await ye(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:fi})}catch(n){if(de(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){Ar(e);try{return await ye(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:fi})}catch(n){if(de(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){Ar(e.userId);try{const{data:t,error:n}=await ye(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:t,error:n}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _deleteFactor(e){Ar(e.userId),Ar(e.id);try{return{data:await ye(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,n,i,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await ye(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(s=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:pd});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),p=JSON.parse(g.split(";")[1].split("=")[1]);c[`${p}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(de(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await ye(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await ye(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await ye(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(de(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await ye(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(de(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await ye(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(de(t))return{data:null,error:t};throw t}}}function md(r={}){return{getItem:e=>r[e]||null,setItem:(e,t)=>{r[e]=t},removeItem:e=>{delete r[e]}}}const Rr={debug:!!(globalThis&&sm()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class om extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class mE extends om{}async function _E(r,e,t){Rr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),Rr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async i=>{if(i){Rr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,i.name);try{return await t()}finally{Rr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,i.name)}}else{if(e===0)throw Rr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new mE(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(Rr.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}function gE(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function lm(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function vE(r){return parseInt(r,16)}function yE(r){const e=new TextEncoder().encode(r);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function xE(r){var e;const{chainId:t,domain:n,expirationTime:i,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:d}=r;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=r.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const f=lm(r.address),g=u?`${u}://${n}`:n,_=r.statement?`${r.statement}
`:"",p=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let m=`URI: ${h}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(i&&(m+=`
Expiration Time: ${i.toISOString()}`),o&&(m+=`
Not Before: ${o.toISOString()}`),l&&(m+=`
Request ID: ${l}`),c){let y=`
Resources:`;for(const v of c){if(!v||typeof v!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);y+=`
- ${v}`}m+=y}return`${p}
${m}`}class pt extends Error{constructor({message:e,code:t,cause:n,name:i}){var s;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(s=i??(n instanceof Error?n.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}}class so extends pt{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function SE({error:r,options:e}){var t,n,i;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(e.signal instanceof AbortSignal)return new pt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new pt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(e.mediation==="conditional"&&((n=s.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new pt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new pt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new pt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new pt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new pt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new pt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const a=window.location.hostname;if(cm(a)){if(s.rp.id!==a)return new pt({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new pt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new pt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new pt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new pt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function bE({error:r,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(e.signal instanceof AbortSignal)return new pt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new pt({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const n=window.location.hostname;if(cm(n)){if(t.rpId!==n)return new pt({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new pt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new pt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new pt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class wE{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const EE=new wE;function TE(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:e,user:t,excludeCredentials:n}=r,i=os(r,["challenge","user","excludeCredentials"]),s=Vr(e).buffer,a=Object.assign(Object.assign({},t),{id:Vr(t.id).buffer}),o=Object.assign(Object.assign({},i),{challenge:s,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Vr(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function ME(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:e,allowCredentials:t}=r,n=os(r,["challenge","allowCredentials"]),i=Vr(e).buffer,s=Object.assign(Object.assign({},n),{challenge:i});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Vr(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function AE(r){var e;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const t=r;return{id:r.id,rawId:r.id,response:{attestationObject:Xi(new Uint8Array(r.response.attestationObject)),clientDataJSON:Xi(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function RE(r){var e;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const t=r,n=r.getClientExtensionResults(),i=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:Xi(new Uint8Array(i.authenticatorData)),clientDataJSON:Xi(new Uint8Array(i.clientDataJSON)),signature:Xi(new Uint8Array(i.signature)),userHandle:i.userHandle?Xi(new Uint8Array(i.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function cm(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function _d(){var r,e;return!!(Mt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator==null?void 0:navigator.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function CE(r){try{const e=await navigator.credentials.create(r);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new so("Browser returned unexpected credential type",e)}:{data:null,error:new so("Empty credential response",e)}}catch(e){return{data:null,error:SE({error:e,options:r})}}}async function PE(r){try{const e=await navigator.credentials.get(r);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new so("Browser returned unexpected credential type",e)}:{data:null,error:new so("Empty credential response",e)}}catch(e){return{data:null,error:bE({error:e,options:r})}}}const LE={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},DE={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function ao(...r){const e=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),t=i=>i instanceof ArrayBuffer||ArrayBuffer.isView(i),n={};for(const i of r)if(i)for(const s in i){const a=i[s];if(a!==void 0)if(Array.isArray(a))n[s]=a;else if(t(a))n[s]=a;else if(e(a)){const o=n[s];e(o)?n[s]=ao(o,a):n[s]=ao(a)}else n[s]=a}return n}function OE(r,e){return ao(LE,r,e||{})}function IE(r,e){return ao(DE,r,e||{})}class UE{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:i},s){try{const{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};const l=i??EE.createNewAbortSignal();if(a.webauthn.type==="create"){const{user:c}=a.webauthn.credential_options.publicKey;c.name||(c.name=`${c.id}:${n}`),c.displayName||(c.displayName=c.name)}switch(a.webauthn.type){case"create":{const c=OE(a.webauthn.credential_options.publicKey,s==null?void 0:s.create),{data:u,error:h}=await CE({publicKey:c,signal:l});return u?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:u}},error:null}:{data:null,error:h}}case"request":{const c=IE(a.webauthn.credential_options.publicKey,s==null?void 0:s.request),{data:u,error:h}=await PE(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:c,signal:l}));return u?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:u}},error:null}:{data:null,error:h}}}}catch(a){return de(a)?{data:null,error:a}:{data:null,error:new $i("Unexpected error in challenge",a)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},s){if(!t)return{data:null,error:new Hs("rpId is required for WebAuthn authentication")};try{if(!_d())return{data:null,error:new $i("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:i},{request:s});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return de(a)?{data:null,error:a}:{data:null,error:new $i("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},s){if(!t)return{data:null,error:new Hs("rpId is required for WebAuthn registration")};try{if(!_d())return{data:null,error:new $i("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u==null?void 0:u.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:i},{create:s});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return de(a)?{data:null,error:a}:{data:null,error:new $i("Unexpected error in register",a)}}}}gE();const NE={url:Dw,storageKey:Ow,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Iw,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1};async function gd(r,e,t){return await t()}const Cr={};class Ws{get jwks(){var e,t;return(t=(e=Cr[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Cr[this.storageKey]=Object.assign(Object.assign({},Cr[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Cr[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Cr[this.storageKey]=Object.assign(Object.assign({},Cr[this.storageKey]),{cachedAt:e})}constructor(e){var t,n,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},NE),e);if(this.storageKey=s.storageKey,this.instanceID=(t=Ws.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,Ws.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&Mt()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.admin=new pE({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=am(s.fetch),this.lock=s.lock||gd,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,s.lock?this.lock=s.lock:Mt()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=_E:this.lock=gd,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new UE(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:sm()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=md(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=md(this.memoryStorage)),Mt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${nm}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{let t={},n="none";if(Mt()&&(t=Xw(window.location.href),this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce")),Mt()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:s}=await this._getSessionFromURL(t,n);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),zw(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return await this._removeSession(),{error:s}}const{session:a,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return de(t)?this._returnResult({error:t}):this._returnResult({error:new $i("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,i;try{const s=await ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:An}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(de(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,n,i;try{let s;if("email"in e){const{email:u,password:h,options:d}=e;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await Mr(this.storage,this.storageKey)),s=await ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d==null?void 0:d.emailRedirectTo,body:{email:u,password:h,data:(t=d==null?void 0:d.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:f,code_challenge_method:g},xform:An})}else if("phone"in e){const{phone:u,password:h,options:d}=e;s=await ye(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:h,data:(n=d==null?void 0:d.data)!==null&&n!==void 0?n:{},channel:(i=d==null?void 0:d.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:An})}else throw new Na("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(de(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await ye(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:fd})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await ye(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:fd})}else throw new Na("You must provide either an email or phone number and a password");const{data:n,error:i}=t;if(i)return this._returnResult({data:{user:null,session:null},error:i});if(!n||!n.session||!n.user){const s=new Tr;return this._returnResult({data:{user:null,session:null},error:s})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,n,i,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,n,i,s,a,o,l,c,u,h,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:p,statement:m,options:y}=e;let v;if(Mt())if(typeof p=="object")v=p;else{const x=window;if("ethereum"in x&&typeof x.ethereum=="object"&&"request"in x.ethereum&&typeof x.ethereum.request=="function")v=x.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(y!=null&&y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");v=p}const S=new URL((t=y==null?void 0:y.url)!==null&&t!==void 0?t:window.location.href),M=await v.request({method:"eth_requestAccounts"}).then(x=>x).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!M||M.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const E=lm(M[0]);let T=(n=y==null?void 0:y.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!T){const x=await v.request({method:"eth_chainId"});T=vE(x)}const L={domain:S.host,address:E,statement:m,uri:S.href,version:"1",chainId:T,nonce:(i=y==null?void 0:y.signInWithEthereum)===null||i===void 0?void 0:i.nonce,issuedAt:(a=(s=y==null?void 0:y.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=y==null?void 0:y.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=y==null?void 0:y.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=y==null?void 0:y.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=y==null?void 0:y.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=xE(L),g=await v.request({method:"personal_sign",params:[yE(f),E]})}try{const{data:_,error:p}=await ye(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:An});if(p)throw p;if(!_||!_.session||!_.user){const m=new Tr;return this._returnResult({data:{user:null,session:null},error:m})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:p})}catch(_){if(de(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,n,i,s,a,o,l,c,u,h,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:p,wallet:m,statement:y,options:v}=e;let S;if(Mt())if(typeof m=="object")S=m;else{const E=window;if("solana"in E&&typeof E.solana=="object"&&("signIn"in E.solana&&typeof E.solana.signIn=="function"||"signMessage"in E.solana&&typeof E.solana.signMessage=="function"))S=E.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(v!=null&&v.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=m}const M=new URL((t=v==null?void 0:v.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in S&&S.signIn){const E=await S.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},v==null?void 0:v.signInWithSolana),{version:"1",domain:M.host,uri:M.href}),y?{statement:y}:null));let T;if(Array.isArray(E)&&E[0]&&typeof E[0]=="object")T=E[0];else if(E&&typeof E=="object"&&"signedMessage"in E&&"signature"in E)T=E;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in T&&"signature"in T&&(typeof T.signedMessage=="string"||T.signedMessage instanceof Uint8Array)&&T.signature instanceof Uint8Array)g=typeof T.signedMessage=="string"?T.signedMessage:new TextDecoder().decode(T.signedMessage),_=T.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in S)||typeof S.signMessage!="function"||!("publicKey"in S)||typeof S!="object"||!S.publicKey||!("toBase58"in S.publicKey)||typeof S.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${M.host} wants you to sign in with your Solana account:`,S.publicKey.toBase58(),...y?["",y,""]:[""],"Version: 1",`URI: ${M.href}`,`Issued At: ${(i=(n=v==null?void 0:v.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((s=v==null?void 0:v.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${v.signInWithSolana.notBefore}`]:[],...!((a=v==null?void 0:v.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${v.signInWithSolana.expirationTime}`]:[],...!((o=v==null?void 0:v.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${v.signInWithSolana.chainId}`]:[],...!((l=v==null?void 0:v.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${v.signInWithSolana.nonce}`]:[],...!((c=v==null?void 0:v.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${v.signInWithSolana.requestId}`]:[],...!((h=(u=v==null?void 0:v.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...v.signInWithSolana.resources.map(T=>`- ${T}`)]:[]].join(`
`);const E=await S.signMessage(new TextEncoder().encode(g),"utf8");if(!E||!(E instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=E}}try{const{data:p,error:m}=await ye(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:Xi(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:An});if(m)throw m;if(!p||!p.session||!p.user){const y=new Tr;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:Object.assign({},p),error:m})}catch(p){if(de(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async _exchangeCodeForSession(e){const t=await Fi(this.storage,`${this.storageKey}-code-verifier`),[n,i]=(t??"").split("/");try{const{data:s,error:a}=await ye(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:An});if(await di(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!s||!s.session||!s.user){const o=new Tr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:i??null}),error:a})}catch(s){if(de(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(e){try{const{options:t,provider:n,token:i,access_token:s,nonce:a}=e,o=await ye(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:An}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new Tr;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,n,i,s,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Mr(this.storage,this.storageKey));const{error:h}=await ye(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l==null?void 0:l.data)!==null&&t!==void 0?t:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:u}=await ye(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u})}throw new Na("You must provide either an email or phone number.")}catch(o){if(de(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,n;try{let i,s;"options"in e&&(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await ye(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:An});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(de(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithSSO(e){var t,n,i,s,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await Mr(this.storage,this.storageKey));const c=await ye(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:hE});return!((s=c.data)===null||s===void 0)&&s.url&&Mt()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(de(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new en;const{error:i}=await ye(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:i})})}catch(e){if(de(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:n,type:i,options:s}=e,{error:a}=await ye(this.fetch,"POST",t,{headers:this.headers,body:{email:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if("phone"in e){const{phone:n,type:i,options:s}=e,{data:a,error:o}=await ye(this.fetch,"POST",t,{headers:this.headers,body:{phone:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o})}throw new Na("You must provide either an email or phone number and a type")}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Fi(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<gl:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await Fi(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=xl()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=oE(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:i,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{session:null},error:s}):this._returnResult({data:{session:i},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await ye(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:fi}):await this._useSession(async t=>{var n,i,s;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new en}:await ye(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&s!==void 0?s:void 0,xform:fi})})}catch(t){if(de(t))return Bw(t)&&(await this._removeSession(),await di(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{const{data:i,error:s}=n;if(s)throw s;if(!i.session)throw new en;const a=i.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await Mr(this.storage,this.storageKey));const{data:c,error:u}=await ye(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t==null?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:fi});if(u)throw u;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(n){if(de(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new en;const t=Date.now()/1e3;let n=t,i=!0,s=null;const{payload:a}=yl(e.access_token);if(a.exp&&(n=a.exp,i=n<=t),i){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(de(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new en;const{data:i,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):i?this._returnResult({data:{user:i.user,session:i},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(de(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){try{if(!Mt())throw new Fa("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Fa(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new ad("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Fa("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new ad("No code detected.");const{data:y,error:v}=await this._exchangeCodeForSession(e.code);if(v)throw v;const S=new URL(window.location.href);return S.searchParams.delete("code"),window.history.replaceState(window.history.state,"",S.toString()),{data:{session:y.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:i,access_token:s,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=e;if(!s||!o||!a||!c)throw new Fa("No session defined in URL");const u=Math.round(Date.now()/1e3),h=parseInt(o);let d=u+h;l&&(d=parseInt(l));const f=d-u;f*1e3<=Lr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${h}s`);const g=d-h;u-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,d,u):u-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,d,u);const{data:_,error:p}=await this._getUser(s);if(p)throw p;const m={provider_token:n,provider_refresh_token:i,access_token:s,expires_in:h,expires_at:d,refresh_token:a,token_type:c,user:_.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:m,redirectType:e.type},error:null})}catch(n){if(de(n))return this._returnResult({data:{session:null,redirectType:null},error:n});throw n}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await Fi(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const{data:i,error:s}=t;if(s)return this._returnResult({error:s});const a=(n=i.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(kw(o)&&(o.status===404||o.status===401||o.status===403)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await di(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const t=qw(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,i;try{const{data:{session:s},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}})}async resetPasswordForEmail(e,t={}){let n=null,i=null;this.flowType==="pkce"&&([n,i]=await Mr(this.storage,this.storageKey,!0));try{return await ye(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(de(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:n,error:i}=await this._useSession(async s=>{var a,o,l,c,u;const{data:h,error:d}=s;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await ye(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(i)throw i;return Mt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),this._returnResult({data:{provider:e.provider,url:n==null?void 0:n.url},error:null})}catch(n){if(de(n))return this._returnResult({data:{provider:e.provider,url:null},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var n;try{const{error:i,data:{session:s}}=t;if(i)throw i;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await ye(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=s==null?void 0:s.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:An}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new Tr}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(i){if(de(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,i;const{data:s,error:a}=t;if(a)throw a;return await ye(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(n=s.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const n=Date.now();return await Jw(async i=>(i>0&&await Kw(200*Math.pow(2,i-1)),this._debug(t,"refreshing attempt",i),await ye(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:An})),(i,s)=>{const a=200*Math.pow(2,i);return s&&vl(s)&&Date.now()+a-n<Lr})}catch(n){if(this._debug(t,"error",n),de(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),Mt()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await Fi(this.storage,this.storageKey);if(i&&this.userStorage){let a=await Fi(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:i.user},await Dr(this.userStorage,this.storageKey+"-user",a)),i.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:xl()}else if(i&&!i.user&&!i.user){const a=await Fi(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(i.user=a.user,await di(this.storage,this.storageKey+"-user"),await Dr(this.storage,this.storageKey,i)):i.user=xl()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const s=((t=i.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<gl;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${gl}s`),s){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(console.error(a),vl(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(i.access_token);!o&&(a!=null&&a.user)?(i.user=a.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new en;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new xo;const{data:s,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!s.session)throw new en;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const o={data:s.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(s){if(this._debug(i,"error",s),de(s)){const a={data:null,error:s};return vl(s)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,t,n=!0){const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Dr(this.userStorage,this.storageKey+"-user",{user:t.user});const i=Object.assign({},t);delete i.user;const s=hd(i);await Dr(this.storage,this.storageKey,s)}else{const i=hd(t);await Dr(this.storage,this.storageKey,i)}}async _removeSession(){this._debug("#_removeSession()"),await di(this.storage,this.storageKey),await di(this.storage,this.storageKey+"-code-verifier"),await di(this.storage,this.storageKey+"-user"),this.userStorage&&await di(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Mt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Lr);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/Lr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Lr}ms, refresh threshold is ${rc} ticks`),i<=rc&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof om)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Mt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){const i=[`provider=${encodeURIComponent(t)}`];if(n!=null&&n.redirectTo&&i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&i.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[s,a]=await Mr(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});i.push(o.toString())}if(n!=null&&n.queryParams){const s=new URLSearchParams(n.queryParams);i.push(s.toString())}return n!=null&&n.skipBrowserRedirect&&i.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${i.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:i,error:s}=t;return s?this._returnResult({data:null,error:s}):await ye(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,i;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await ye(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:i,error:s}=t;if(s)return this._returnResult({data:null,error:s});const a=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?AE(e.webauthn.credential_response):RE(e.webauthn.credential_response)})}:{code:e.code}),{data:o,error:l}=await ye(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:a,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return l?this._returnResult({data:null,error:l}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),this._returnResult({data:o,error:l}))})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:i,error:s}=t;if(s)return this._returnResult({data:null,error:s});const a=await ye(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});if(a.error)return a;const{data:o}=a;if(o.type!=="webauthn")return{data:o,error:null};switch(o.webauthn.type){case"create":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:TE(o.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:ME(o.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}})}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const i={all:[],phone:[],totp:[],webauthn:[]};for(const s of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])i.all.push(s),s.status==="verified"&&i[s.factor_type].push(s);return{data:i,error:null}}async _getAuthenticatorAssuranceLevel(){var e,t;const{data:{session:n},error:i}=await this.getSession();if(i)return this._returnResult({data:null,error:i});if(!n)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=yl(n.access_token);let a=null;s.aal&&(a=s.aal);let o=a;((t=(e=n.user.factors)===null||e===void 0?void 0:e.filter(u=>u.status==="verified"))!==null&&t!==void 0?t:[]).length>0&&(o="aal2");const c=s.amr||[];return{data:{currentLevel:a,nextLevel:o,currentAuthenticationMethods:c},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;return i?this._returnResult({data:null,error:i}):n?await ye(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new en})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!i)return this._returnResult({data:null,error:new en});const a=await ye(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Mt()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(de(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!i)return this._returnResult({data:null,error:new en});const a=await ye(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Mt()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(de(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await ye(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new en})})}catch(e){if(de(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;return i?this._returnResult({data:null,error:i}):n?(await ye(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new en})})}catch(t){if(de(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+Nw>i)return n;const{data:s,error:a}=await ye(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=i,n=s.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});n=f.session.access_token}const{header:i,payload:s,signature:a,raw:{header:o,payload:l}}=yl(n);t!=null&&t.allowExpired||rE(s.exp);const c=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:s,header:i,signature:a},error:null}}const u=sE(i.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,jw(`${o}.${l}`)))throw new oc("Invalid JWT signature");return{data:{claims:s,header:i,signature:a},error:null}}catch(n){if(de(n))return this._returnResult({data:null,error:n});throw n}}}Ws.nextInstanceID={};const FE=Ws;class kE extends FE{constructor(e){super(e)}}class BE{constructor(e,t,n){var i,s,a;this.supabaseUrl=e,this.supabaseKey=t;const o=Lw(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",o),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",o),this.storageUrl=new URL("storage/v1",o),this.functionsUrl=new URL("functions/v1",o);const l=`sb-${o.hostname.split(".")[0]}-auth-token`,c={db:ww,realtime:Tw,auth:Object.assign(Object.assign({},Ew),{storageKey:l}),global:bw},u=Pw(n??{},c);this.storageKey=(i=u.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(s=u.global.headers)!==null&&s!==void 0?s:{},u.accessToken?(this.accessToken=u.accessToken,this.auth=new Proxy({},{get:(h,d)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=u.auth)!==null&&a!==void 0?a:{},this.headers,u.global.fetch),this.fetch=Rw(t,this._getAccessToken.bind(this),u.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},u.realtime)),this.accessToken&&this.accessToken().then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new Tb(new URL("rest/v1",o).href,{headers:this.headers,schema:u.db.schema,fetch:this.fetch}),this.storage=new yw(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),u.accessToken||this._listenForAuthEvents()}get functions(){return new Sb(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e,t;if(this.accessToken)return await this.accessToken();const{data:n}=await this.auth.getSession();return(t=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:this.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:i,userStorage:s,storageKey:a,flowType:o,lock:l,debug:c,throwOnError:u},h,d){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new kE({url:this.authUrl.href,headers:Object.assign(Object.assign({},f),h),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:i,userStorage:s,flowType:o,lock:l,debug:c,throwOnError:u,fetch:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(g=>g.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new Vb(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,n)=>{this._handleTokenChanged(t,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(e,t,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const zE=(r,e,t)=>new BE(r,e,t);function GE(){if(typeof window<"u"||typeof process>"u")return!1;const r=process.version;if(r==null)return!1;const e=r.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}GE()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const VE="https://bmtakltiolhxzcfigezu.supabase.co",HE="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdGFrbHRpb2xoeHpjZmlnZXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2Njc0MjksImV4cCI6MjA4MDI0MzQyOX0.36i3gjYj_GABawB06aNAepSKHr8acNjeO2Fkc3VayH0",vs=zE(VE,HE),oo={async getLeaderboard(){try{const{data:r,error:e}=await vs.from("leaderboard").select("*").order("level",{ascending:!1}).limit(50);return e?(console.error("Error fetching leaderboard:",e),[]):r}catch(r){return console.error("Supabase exception:",r),[]}},async updateScore(r,e){if(r)try{const{data:t,error:n}=await vs.from("leaderboard").select("*").eq("gamertag",r).single();if(n&&n.code!=="PGRST116"){console.error("Error checking user:",n);return}if(t){if(e>t.level){const{error:i}=await vs.from("leaderboard").update({level:e,updated_at:new Date}).eq("id",t.id);i&&console.error("Error updating score:",i)}}else{const{error:i}=await vs.from("leaderboard").insert([{gamertag:r,level:e}]);i&&console.error("Error inserting score:",i)}}catch(t){console.error("Supabase update exception:",t)}},async isGamertagTaken(r){try{const{data:e,error:t}=await vs.from("leaderboard").select("gamertag").ilike("gamertag",r).maybeSingle();return t?(console.error("Error checking gamertag:",t),!1):!!e}catch(e){return console.error("Gamertag check exception:",e),!1}},async resetLeaderboard(){console.warn("Remote leaderboard reset requires admin privileges.")}},um=Dx();document.getElementById("game-container").appendChild(um.domElement);const Ls=Ox(),WE=Ix();Ux(Ls);const jE=Wx(um,Ls,WE);let vn=null;const $E=new nf,hm=ts.getData();let Wt=hm.currentLevel,Hr=hm.gamertag,Hc=!1,lc=0;const qE=document.getElementById("level"),vd=document.getElementById("score"),js=document.getElementById("game-over"),$s=document.getElementById("level-complete"),XE=document.getElementById("restart-btn"),YE=document.getElementById("next-level-btn"),cc=document.getElementById("legend-container"),ir=document.getElementById("level-selector"),yd=document.getElementById("levels-grid"),KE=document.getElementById("close-levels-btn"),qs=document.getElementById("gamertag-modal"),JE=document.getElementById("gamertag-input"),ys=document.getElementById("save-gamertag-btn"),is=document.getElementById("leaderboard-modal"),bl=document.getElementById("leaderboard-list"),ZE=document.getElementById("close-leaderboard-btn"),QE=document.getElementById("nav-levels"),eT=document.getElementById("nav-leaderboard"),tT=document.getElementById("nav-guide"),nT=document.getElementById("btn-up"),iT=document.getElementById("btn-down"),rT=document.getElementById("btn-left"),sT=document.getElementById("btn-right");function aT(r,e){vd.textContent=`Ice Blocks: ${r}`,vd.style.color=r===0?"#64ff7b":"#aaddff",qE.textContent=`Level: ${e}`}function oT(){cc.innerHTML="";const r=_c(Wt),e=Math.min(r.colors.length,9);for(let t=0;t<e;t++){const n=r.colors[t].toString(16).padStart(6,"0"),i=document.createElement("div");i.className="legend-item",i.style.backgroundColor=`#${n}`,cc.appendChild(i)}}function lT(){yd.innerHTML="";const r=ts.getData().maxLevel,e=Math.max(Pr.length+2,r+1);for(let t=1;t<=e;t++){const n=document.createElement("div");n.className="level-btn",n.textContent=t,t>r?n.classList.add("locked"):n.addEventListener("click",()=>{ir.classList.add("hidden"),rr(t)}),t===Wt&&n.classList.add("active"),yd.appendChild(n)}}async function cT(){bl.innerHTML="<div>Loading...</div>";const r=await oo.getLeaderboard();bl.innerHTML="",r.forEach((e,t)=>{const n=document.createElement("div");n.className="leaderboard-entry",e.gamertag===Hr&&n.classList.add("highlight"),n.innerHTML=`
            <span>#${t+1} ${e.gamertag}</span>
            <span>Lvl ${e.level}</span>
        `,bl.appendChild(n)})}function uT(){return Hr?!0:(qs.classList.remove("hidden"),!1)}ys.addEventListener("click",async()=>{const r=JE.value.trim();if(r.length<3){alert("Gamertag must be at least 3 characters.");return}if(ys.disabled=!0,ys.textContent="Checking...",await oo.isGamertagTaken(r)){alert("Gamertag already taken! Please choose another."),ys.disabled=!1,ys.textContent="Start Playing";return}Hr=r,ts.setGamertag(Hr),qs.classList.add("hidden"),await oo.updateScore(Hr,ts.getData().maxLevel),rr(Wt)});function hT(){js.classList.remove("hidden")}function dT(){const r=Wt+1;ts.unlockLevel(r),oo.updateScore(Hr,r),lc++,$s.classList.remove("hidden"),lc%5===0&&setTimeout(()=>{dm()},500)}function rr(r=1){if(!uT())return;vn&&(Ls.remove(vn.group),vn=null),r===1&&(lc=0),Wt=r,ts.setCurrentLevel(Wt);const e=_c(Wt);Ls.background=new Ce(e.background);const t=sp(r);vn=new pb(Ls,t.size,Wt),vn.onStatsChange(aT),vn.onGameOver(hT),vn.onLevelComplete(dT),oT(),js.classList.add("hidden"),$s.classList.add("hidden"),ir.classList.add("hidden"),is.classList.add("hidden")}rr(Wt);const fT=new jx;function ti(r){js.classList.contains("hidden")&&$s.classList.contains("hidden")&&ir.classList.contains("hidden")&&qs.classList.contains("hidden")&&is.classList.contains("hidden")&&vn.move(r)}fT.onSwipe(ti);nT.addEventListener("click",()=>ti("up"));iT.addEventListener("click",()=>ti("down"));rT.addEventListener("click",()=>ti("left"));sT.addEventListener("click",()=>ti("right"));window.addEventListener("keydown",r=>{r.key==="ArrowUp"&&ti("up"),r.key==="ArrowDown"&&ti("down"),r.key==="ArrowLeft"&&ti("left"),r.key==="ArrowRight"&&ti("right"),(r.key===" "||r.key==="Spacebar")&&(r.preventDefault(),vn&&js.classList.contains("hidden")&&$s.classList.contains("hidden")&&ir.classList.contains("hidden")&&qs.classList.contains("hidden")&&is.classList.contains("hidden")&&rr(Wt+1)),(r.key==="-"||r.key==="_")&&(r.preventDefault(),vn&&Wt>1&&js.classList.contains("hidden")&&$s.classList.contains("hidden")&&ir.classList.contains("hidden")&&qs.classList.contains("hidden")&&is.classList.contains("hidden")&&rr(Wt-1))});XE.addEventListener("click",()=>{dm(),setTimeout(()=>{rr(Wt)},100)});YE.addEventListener("click",()=>{rr(Wt+1)});QE.addEventListener("click",()=>{lT(),ir.classList.remove("hidden")});KE.addEventListener("click",()=>{ir.classList.add("hidden")});eT.addEventListener("click",async()=>{await cT(),is.classList.remove("hidden")});ZE.addEventListener("click",()=>{is.classList.add("hidden")});tT.addEventListener("click",()=>{cc.classList.toggle("hidden")});function dm(){let r=0;const e=10,t=()=>{r++;const n=window.sdk||window.SDK||(typeof sdk<"u"?sdk:null);if(n&&typeof n.showBanner=="function"){console.log("Showing GameMonetize ad...");try{n.showBanner()}catch(i){console.error("Error showing ad:",i)}}else r<e?setTimeout(t,200):console.warn("SDK not available after",e,"attempts")};setTimeout(t,100)}window.setSdkReady=function(){console.log("SDK Ready flag set")};window.gamePause=function(){Hc=!0,Rs.enabled=!1};window.gameResume=function(){Hc=!1,Rs.enabled=!0};function fm(){if(requestAnimationFrame(fm),Hc)return;const r=$E.getDelta();vn&&vn.update(r),jE.render()}fm();
