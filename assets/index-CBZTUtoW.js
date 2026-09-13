(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="170",Sl=0,Ra=1,El=2,Bo=1,ko=2,hn=3,wn=0,Pe=1,dn=2,bn=0,Si=1,wa=2,Ia=3,Pa=4,Ml=5,Hn=100,Tl=101,yl=102,Al=103,bl=104,Cl=200,Rl=201,wl=202,Il=203,vr=204,Sr=205,Pl=206,Dl=207,Ll=208,Nl=209,Ul=210,Fl=211,Ol=212,Bl=213,kl=214,Er=0,Mr=1,Tr=2,Ti=3,yr=4,Ar=5,br=6,Cr=7,Go=0,Gl=1,Vl=2,Cn=0,Hl=1,zl=2,Wl=3,Vo=4,Xl=5,ql=6,Yl=7,Ho=300,yi=301,Ai=302,Rr=303,wr=304,Us=306,Wn=1e3,Xn=1001,Ir=1002,Ke=1003,$l=1004,ns=1005,Ye=1006,Hs=1007,An=1008,mn=1009,zo=1010,Wo=1011,Ki=1012,aa=1013,qn=1014,un=1015,Ji=1016,oa=1017,la=1018,bi=1020,Xo=35902,qo=1021,Yo=1022,$e=1023,$o=1024,Ko=1025,Ei=1026,Ci=1027,jo=1028,ca=1029,Zo=1030,ha=1031,da=1033,As=33776,bs=33777,Cs=33778,Rs=33779,Pr=35840,Dr=35841,Lr=35842,Nr=35843,Ur=36196,Fr=37492,Or=37496,Br=37808,kr=37809,Gr=37810,Vr=37811,Hr=37812,zr=37813,Wr=37814,Xr=37815,qr=37816,Yr=37817,$r=37818,Kr=37819,jr=37820,Zr=37821,ws=36492,Jr=36494,Qr=36495,Jo=36283,ta=36284,ea=36285,na=36286,Kl=3200,jl=3201,Qo=0,Zl=1,yn="",ke="srgb",Di="srgb-linear",Fs="linear",jt="srgb",jn=7680,Da=519,Jl=512,Ql=513,tc=514,tl=515,ec=516,nc=517,ic=518,sc=519,La=35044,Na="300 es",fn=2e3,Ps=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ua=1234567;const Yi=Math.PI/180,Ri=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function ua(i,t){return(i%t+t)%t}function rc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ac(i,t,e){return i!==t?(e-i)/(t-i):0}function $i(i,t,e){return(1-e)*i+e*t}function oc(i,t,e,n){return $i(i,t,1-Math.exp(-e*n))}function lc(i,t=1){return t-Math.abs(ua(i,t*2)-t)}function cc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uc(i,t){return i+Math.random()*(t-i)}function fc(i){return i*(.5-Math.random())}function pc(i){i!==void 0&&(Ua=i);let t=Ua+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mc(i){return i*Yi}function gc(i){return i*Ri}function _c(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const be={DEG2RAD:Yi,RAD2DEG:Ri,generateUUID:Li,clamp:Ae,euclideanModulo:ua,mapLinear:rc,inverseLerp:ac,lerp:$i,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:hc,randInt:dc,randFloat:uc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:_c,ceilPowerOfTwo:xc,floorPowerOfTwo:vc,setQuaternionFromProperEuler:Sc,normalize:Te,denormalize:ui};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,s,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],d=s[6],T=s[1],y=s[4],E=s[7],F=s[2],b=s[5],R=s[8];return r[0]=a*x+o*T+l*F,r[3]=a*p+o*y+l*b,r[6]=a*d+o*E+l*R,r[1]=c*x+h*T+u*F,r[4]=c*p+h*y+u*b,r[7]=c*d+h*E+u*R,r[2]=f*x+m*T+g*F,r[5]=f*p+m*y+g*b,r[8]=f*d+m*E+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Lt;function el(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ec(){const i=ji("canvas");return i.style.display="block",i}const Fa={};function Xi(i){i in Fa||(Fa[i]=!0,console.warn(i))}function Mc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?Fs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Oa=[.64,.33,.3,.6,.15,.06],Ba=[.2126,.7152,.0722],ka=[.3127,.329],Ga=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Di]:{primaries:Oa,whitePoint:ka,transfer:Fs,toXYZ:Ga,fromXYZ:Va,luminanceCoefficients:Ba,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Oa,whitePoint:ka,transfer:jt,toXYZ:Ga,fromXYZ:Va,luminanceCoefficients:Ba,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Zn;class Ac{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=ji("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bc=0;class nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ws(s[a].image)):r.push(Ws(s[a]))}else r=Ws(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ac.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Me extends $n{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ye,a=An,o=$e,l=mn,c=Me.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Li(),this.name="",this.source=new nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Ho;Me.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(m+1)/2,F=(d+1)/2,b=(h+f)/4,R=(u+x)/4,L=(g+p)/4;return y>E&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=R/n):E>F?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=b/s,r=L/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=R/r,s=L/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Rc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class il extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wc extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*x,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const F=Math.sqrt(y),b=Math.atan2(F,d*T);p=Math.sin(p*b)/F,o=Math.sin(o*b)/F}const E=o*T;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,u=u*p+x*E,p===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new C,Ha=new Dn;class Qi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),ss.subVectors(this.max,Bi),Jn.subVectors(t.a,Bi),Qn.subVectors(t.b,Bi),ti.subVectors(t.c,Bi),xn.subVectors(Qn,Jn),vn.subVectors(ti,Qn),Nn.subVectors(Jn,ti);let e=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-Nn.z,Nn.y,xn.z,0,-xn.x,vn.z,0,-vn.x,Nn.z,0,-Nn.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-Nn.y,Nn.x,0];return!qs(e,Jn,Qn,ti,ss)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,Jn,Qn,ti,ss))?!1:(rs.crossVectors(xn,vn),e=[rs.x,rs.y,rs.z],qs(e,Jn,Qn,ti,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new C,new C,new C,new C,new C,new C,new C,new C],He=new C,is=new Qi,Jn=new C,Qn=new C,ti=new C,xn=new C,vn=new C,Nn=new C,Bi=new C,ss=new C,rs=new C,Un=new C;function qs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Un.fromArray(i,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=t.dot(Un),c=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ic=new Qi,ki=new C,Ys=new C;class Os{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ic.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Ys)),this.expandByPoint(ki.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new C,$s=new C,as=new C,Sn=new C,Ks=new C,os=new C,js=new C;class fa{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$s.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub($s);const r=t.distanceTo(e)*.5,a=-this.direction.dot(as),o=Sn.dot(this.direction),l=-Sn.dot(as),c=Sn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($s).addScaledVector(as,f),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){Ks.subVectors(e,t),os.subVectors(n,t),js.crossVectors(Ks,os);let a=this.direction.dot(js),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const l=o*this.direction.dot(os.crossVectors(Sn,os));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(Sn));if(c<0||l+c>a)return null;const h=-o*Sn.dot(js);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ei.setFromMatrixColumn(t,0).length(),r=1/ei.setFromMatrixColumn(t,1).length(),a=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pc,t,Dc)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),En.crossVectors(n,Ne),En.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),En.crossVectors(n,Ne)),En.normalize(),ls.crossVectors(Ne,En),s[0]=En.x,s[4]=ls.x,s[8]=Ne.x,s[1]=En.y,s[5]=ls.y,s[9]=Ne.y,s[2]=En.z,s[6]=ls.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],d=n[14],T=n[3],y=n[7],E=n[11],F=n[15],b=s[0],R=s[4],L=s[8],M=s[12],S=s[1],w=s[5],V=s[9],G=s[13],X=s[2],j=s[6],W=s[10],J=s[14],z=s[3],rt=s[7],ut=s[11],Tt=s[15];return r[0]=a*b+o*S+l*X+c*z,r[4]=a*R+o*w+l*j+c*rt,r[8]=a*L+o*V+l*W+c*ut,r[12]=a*M+o*G+l*J+c*Tt,r[1]=h*b+u*S+f*X+m*z,r[5]=h*R+u*w+f*j+m*rt,r[9]=h*L+u*V+f*W+m*ut,r[13]=h*M+u*G+f*J+m*Tt,r[2]=g*b+x*S+p*X+d*z,r[6]=g*R+x*w+p*j+d*rt,r[10]=g*L+x*V+p*W+d*ut,r[14]=g*M+x*G+p*J+d*Tt,r[3]=T*b+y*S+E*X+F*z,r[7]=T*R+y*w+E*j+F*rt,r[11]=T*L+y*V+E*W+F*ut,r[15]=T*M+y*G+E*J+F*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+x*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],d=t[15],T=u*p*c-x*f*c+x*l*m-o*p*m-u*l*d+o*f*d,y=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,E=h*x*c-g*u*c+g*o*m-a*x*m-h*o*d+a*u*d,F=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,b=e*T+n*y+s*E+r*F;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=T*R,t[1]=(x*f*r-u*p*r-x*s*m+n*p*m+u*s*d-n*f*d)*R,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*d+n*l*d)*R,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*R,t[4]=y*R,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*d+e*f*d)*R,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*R,t[8]=E*R,t[9]=(g*u*r-h*x*r-g*n*m+e*x*m+h*n*d-e*u*d)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*R,t[12]=F*R,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*p+e*u*p)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,x=a*h,p=a*u,d=o*u,T=l*c,y=l*h,E=l*u,F=n.x,b=n.y,R=n.z;return s[0]=(1-(x+d))*F,s[1]=(m+E)*F,s[2]=(g-y)*F,s[3]=0,s[4]=(m-E)*b,s[5]=(1-(f+d))*b,s[6]=(p+T)*b,s[7]=0,s[8]=(g+y)*R,s[9]=(p-T)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ei.set(s[0],s[1],s[2]).length();const a=ei.set(s[4],s[5],s[6]).length(),o=ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ze.copy(this);const c=1/r,h=1/a,u=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===fn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ps)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,m=(n+s)*h;let g,x;if(o===fn)g=(a+r)*u,x=-2*u;else if(o===Ps)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new C,ze=new ne,Pc=new C(0,0,0),Dc=new C(1,1,1),En=new C,ls=new C,Ne=new C,za=new ne,Wa=new Dn;class le{constructor(t=0,e=0,n=0,s=le.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}le.DEFAULT_ORDER="XYZ";class pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lc=0;const Xa=new C,ni=new Dn,on=new ne,cs=new C,Gi=new C,Nc=new C,Uc=new Dn,qa=new C(1,0,0),Ya=new C(0,1,0),$a=new C(0,0,1),Ka={type:"added"},Fc={type:"removed"},ii={type:"childadded",child:null},Zs={type:"childremoved",child:null};class pe extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new C,e=new le,n=new Dn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Lt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Ya,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Xa.copy(t).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Ya,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Gi,cs,this.up):on.lookAt(cs,Gi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(on),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),ii.child=t,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fc),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),ii.child=t,this.dispatchEvent(ii),ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Uc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new C(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new C,ln=new C,Js=new C,cn=new C,si=new C,ri=new C,ja=new C,Qs=new C,tr=new C,er=new C,nr=new Jt,ir=new Jt,sr=new Jt;class qe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),ln.subVectors(n,e),Js.subVectors(t,e);const a=We.dot(We),o=We.dot(ln),l=We.dot(Js),c=ln.dot(ln),h=ln.dot(Js),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return nr.setScalar(0),ir.setScalar(0),sr.setScalar(0),nr.fromBufferAttribute(t,e),ir.fromBufferAttribute(t,n),sr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nr,r.x),a.addScaledVector(ir,r.y),a.addScaledVector(sr,r.z),a}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),ln.subVectors(t,e),We.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),We.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;si.subVectors(s,n),ri.subVectors(r,n),Qs.subVectors(t,n);const l=si.dot(Qs),c=ri.dot(Qs);if(l<=0&&c<=0)return e.copy(n);tr.subVectors(t,s);const h=si.dot(tr),u=ri.dot(tr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(si,a);er.subVectors(t,r);const m=si.dot(er),g=ri.dot(er);if(g>=0&&m<=g)return e.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ri,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ja.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(ja,o);const d=1/(p+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function rr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=ua(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rr(a,r,t+1/3),this.g=rr(a,r,t),this.b=rr(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=sl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Wt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ae(Ee.r*255,0,255))*65536+Math.round(Ae(Ee.g*255,0,255))*256+Math.round(Ae(Ee.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ke){Wt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(hs);const n=$i(Mn.h,hs.h,e),s=$i(Mn.s,hs.s,e),r=$i(Mn.l,hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Vt;Vt.NAMES=sl;let Oc=0;class Ni extends $n{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Li(),this.name="",this.blending=Si,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=Sr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new le,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new C,ds=new Xt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class rl extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class al extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bc=0;const Be=new ne,ar=new pe,ai=new C,Ue=new Qi,Vi=new Qi,_e=new C;class Ze extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(el(t)?al:rl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ue.min,Vi.min),Ue.expandByPoint(_e),_e.addVectors(Ue.max,Vi.max),Ue.expandByPoint(_e)):(Ue.expandByPoint(Vi.min),Ue.expandByPoint(Vi.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(t,c),_e.add(ai)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;const c=new C,h=new C,u=new C,f=new Xt,m=new Xt,g=new Xt,x=new C,p=new C;function d(L,M,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[L].add(x),o[M].add(x),o[S].add(x),l[L].add(p),l[M].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,M=T.length;L<M;++L){const S=T[L],w=S.start,V=S.count;for(let G=w,X=w+V;G<X;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new C,E=new C,F=new C,b=new C;function R(L){F.fromBufferAttribute(s,L),b.copy(F);const M=o[L];y.copy(M),y.sub(F.multiplyScalar(F.dot(M))).normalize(),E.crossVectors(b,M);const w=E.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,w)}for(let L=0,M=T.length;L<M;++L){const S=T[L],w=S.start,V=S.count;for(let G=w,X=w+V;G<X;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new ne,Fn=new fa,us=new Os,Ja=new C,fs=new C,ps=new C,ms=new C,or=new C,gs=new C,Qa=new C,_s=new C;class Q extends pe{constructor(t=new Ze,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(or.fromBufferAttribute(u,t),a?gs.addScaledVector(or,h):gs.addScaledVector(or.sub(e),h))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(us.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(us,Ja)===null||Fn.origin.distanceToSquared(Ja)>(t.far-t.near)**2))&&(Za.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(Za),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,F=y;E<F;E+=3){const b=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);s=xs(this,d,t,n,c,h,u,b,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const T=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);s=xs(this,a,t,n,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,F=y;E<F;E+=3){const b=E,R=E+1,L=E+2;s=xs(this,d,t,n,c,h,u,b,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const T=p,y=p+1,E=p+2;s=xs(this,a,t,n,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function kc(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wn,o),l===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_s);return c<e.near||c>e.far?null:{distance:c,point:_s.clone(),object:i}}function xs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,fs),i.getVertexPosition(l,ps),i.getVertexPosition(c,ms);const h=kc(i,t,e,n,fs,ps,ms,Qa);if(h){const u=new C;qe.getBarycoord(Qa,fs,ps,ms,u),s&&(h.uv=qe.getInterpolatedAttribute(s,o,l,c,u,new Xt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,l,c,u,new Xt)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};qe.getNormal(fs,ps,ms,f.normal),h.face=f,h.barycoord=u}return h}class gt extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function g(x,p,d,T,y,E,F,b,R,L,M){const S=E/R,w=F/L,V=E/2,G=F/2,X=b/2,j=R+1,W=L+1;let J=0,z=0;const rt=new C;for(let ut=0;ut<W;ut++){const Tt=ut*w-G;for(let Ft=0;Ft<j;Ft++){const Qt=Ft*S-V;rt[x]=Qt*T,rt[p]=Tt*y,rt[d]=X,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[d]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/R),u.push(1-ut/L),J+=1}}for(let ut=0;ut<L;ut++)for(let Tt=0;Tt<R;Tt++){const Ft=f+Tt+j*ut,Qt=f+Tt+j*(ut+1),Y=f+(Tt+1)+j*(ut+1),nt=f+(Tt+1)+j*ut;l.push(Ft,Qt,nt),l.push(Qt,Y,nt),z+=6}o.addGroup(m,z,M),m+=z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Gc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Vc={clone:wi,merge:ye};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Gc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ii extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new C,to=new Xt,eo=new Xt;class Ie extends Ii{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ri*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,to,eo),e.subVectors(eo,to)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,li=1;class Wc extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(oi,li,t,e);s.layers=this.layers,this.add(s);const r=new Ie(oi,li,t,e);r.layers=this.layers,this.add(r);const a=new Ie(oi,li,t,e);a.layers=this.layers,this.add(a);const o=new Ie(oi,li,t,e);o.layers=this.layers,this.add(o);const l=new Ie(oi,li,t,e);l.layers=this.layers,this.add(l);const c=new Ie(oi,li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ll extends Me{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xc extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ll(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:bn});r.uniforms.tEquirect.value=e;const a=new Q(s,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=Ye),new Wc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const lr=new C,qc=new C,Yc=new Lt;class Gn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lr.subVectors(n,e).cross(qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yc.getNormalMatrix(t),s=this.coplanarPoint(lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Os,vs=new C;class ma{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],T=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-d).normalize(),n[1].setComponents(l+r,f+c,p+m,E+d).normalize(),n[2].setComponents(l+a,f+h,p+g,E+T).normalize(),n[3].setComponents(l-a,f-h,p-g,E-T).normalize(),n[4].setComponents(l-o,f-u,p-x,E-y).normalize(),e===fn)n[5].setComponents(l+o,f+u,p+x,E+y).normalize();else if(e===Ps)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vs.x=s.normal.x>0?t.max.x:t.min.x,vs.y=s.normal.y>0?t.max.y:t.min.y,vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $c(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const x=u[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class de extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){const T=d*f-a;for(let y=0;y<c;y++){const E=y*u-r;g.push(E,-T,0),x.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const y=T+c*d,E=T+c*(d+1),F=T+1+c*(d+1),b=T+1+c*d;m.push(y,E,b),m.push(E,F,b)}this.setIndex(m),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
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
#endif`,nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lh=`#ifdef USE_IRIDESCENCE
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
#endif`,ch=`#ifdef USE_BUMPMAP
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fh=`#ifdef USE_GRADIENTMAP
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
}`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qh=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Yh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,$h=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
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
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sd=`#if defined( USE_POINTS_UV )
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
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,eu=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nu=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,iu=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ru=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,cu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hu=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,du=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uu=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,fu=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pu=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,mu=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gu=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,_u=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xu=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,vu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Su=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Eu=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Tu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,yu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Au=`uniform vec3 color;
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
}`,bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Cu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ut={alphahash_fragment:Kc,alphahash_pars_fragment:jc,alphamap_fragment:Zc,alphamap_pars_fragment:Jc,alphatest_fragment:Qc,alphatest_pars_fragment:th,aomap_fragment:eh,aomap_pars_fragment:nh,batching_pars_vertex:ih,batching_vertex:sh,begin_vertex:rh,beginnormal_vertex:ah,bsdfs:oh,iridescence_fragment:lh,bumpmap_pars_fragment:ch,clipping_planes_fragment:hh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:uh,clipping_planes_vertex:fh,color_fragment:ph,color_pars_fragment:mh,color_pars_vertex:gh,color_vertex:_h,common:xh,cube_uv_reflection_fragment:vh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Eh,displacementmap_vertex:Mh,emissivemap_fragment:Th,emissivemap_pars_fragment:yh,colorspace_fragment:Ah,colorspace_pars_fragment:bh,envmap_fragment:Ch,envmap_common_pars_fragment:Rh,envmap_pars_fragment:wh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Vh,envmap_vertex:Ph,fog_vertex:Dh,fog_pars_vertex:Lh,fog_fragment:Nh,fog_pars_fragment:Uh,gradientmap_pars_fragment:Fh,lightmap_pars_fragment:Oh,lights_lambert_fragment:Bh,lights_lambert_pars_fragment:kh,lights_pars_begin:Gh,lights_toon_fragment:Hh,lights_toon_pars_fragment:zh,lights_phong_fragment:Wh,lights_phong_pars_fragment:Xh,lights_physical_fragment:qh,lights_physical_pars_fragment:Yh,lights_fragment_begin:$h,lights_fragment_maps:Kh,lights_fragment_end:jh,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:Jh,logdepthbuf_pars_vertex:Qh,logdepthbuf_vertex:td,map_fragment:ed,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:sd,metalnessmap_fragment:rd,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:hd,morphtarget_vertex:dd,normal_fragment_begin:ud,normal_fragment_maps:fd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:Ed,opaque_fragment:Md,packing:Td,premultiplied_alpha_fragment:yd,project_vertex:Ad,dithering_fragment:bd,dithering_pars_fragment:Cd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Pd,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ld,skinbase_vertex:Nd,skinning_pars_vertex:Ud,skinning_vertex:Fd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:kd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Vd,transmission_fragment:Hd,transmission_pars_fragment:zd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,worldpos_vertex:Yd,background_vert:$d,background_frag:Kd,backgroundCube_vert:jd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Qd,depth_vert:tu,depth_frag:eu,distanceRGBA_vert:nu,distanceRGBA_frag:iu,equirect_vert:su,equirect_frag:ru,linedashed_vert:au,linedashed_frag:ou,meshbasic_vert:lu,meshbasic_frag:cu,meshlambert_vert:hu,meshlambert_frag:du,meshmatcap_vert:uu,meshmatcap_frag:fu,meshnormal_vert:pu,meshnormal_frag:mu,meshphong_vert:gu,meshphong_frag:_u,meshphysical_vert:xu,meshphysical_frag:vu,meshtoon_vert:Su,meshtoon_frag:Eu,points_vert:Mu,points_frag:Tu,shadow_vert:yu,shadow_frag:Au,sprite_vert:bu,sprite_frag:Cu},it={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},tn={basic:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ye([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ye([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ye([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ye([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ye([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ye([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ye([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ye([it.lights,it.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};tn.physical={uniforms:ye([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ss={r:0,b:0,g:0},Bn=new le,Ru=new ne;function wu(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function x(T){let y=!1;const E=g(T);E===null?d(o,l):E&&E.isColor&&(d(E,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Us)?(h===void 0&&(h=new Q(new gt(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:wi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(y.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ru.makeRotationFromEuler(Bn)),h.material.toneMapped=Wt.getTransfer(E.colorSpace)!==jt,(u!==E||f!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Q(new de(2,2),new Pn({name:"BackgroundMaterial",uniforms:wi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(E.colorSpace)!==jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,y){T.getRGB(Ss,ol(i)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:x,addToRenderList:p}}function Iu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,w,V,G,X){let j=!1;const W=u(G,V,w);r!==W&&(r=W,c(r.object)),j=m(S,G,V,X),j&&g(S,G,V,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(S,w,V,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,w,V){const G=V.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let j=X[w.id];j===void 0&&(j={},X[w.id]=j);let W=j[G];return W===void 0&&(W=f(l()),j[G]=W),W}function f(S){const w=[],V=[],G=[];for(let X=0;X<e;X++)w[X]=0,V[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,w,V,G){const X=r.attributes,j=w.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){const ut=X[z];let Tt=j[z];if(Tt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function g(S,w,V,G){const X={},j=w.attributes;let W=0;const J=V.getAttributes();for(const z in J)if(J[z].location>=0){let ut=j[z];ut===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),X[z]=Tt,W++}r.attributes=X,r.attributesNum=W,r.index=G}function x(){const S=r.newAttributes;for(let w=0,V=S.length;w<V;w++)S[w]=0}function p(S){d(S,0)}function d(S,w){const V=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;V[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),X[S]!==w&&(i.vertexAttribDivisor(S,w),X[S]=w)}function T(){const S=r.newAttributes,w=r.enabledAttributes;for(let V=0,G=w.length;V<G;V++)w[V]!==S[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function y(S,w,V,G,X,j,W){W===!0?i.vertexAttribIPointer(S,w,V,X,j):i.vertexAttribPointer(S,w,V,G,X,j)}function E(S,w,V,G){x();const X=G.attributes,j=V.getAttributes(),W=w.defaultAttributeValues;for(const J in j){const z=j[J];if(z.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const ut=rt.normalized,Tt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;const Qt=Ft.buffer,Y=Ft.type,nt=Ft.bytesPerElement,St=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===aa;if(rt.isInterleavedBufferAttribute){const at=rt.data,Ct=at.stride,It=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<z.locationSize;Ot++)d(z.location+Ot,at.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<z.locationSize;Ot++)p(z.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<z.locationSize;Ot++)y(z.location+Ot,Tt/z.locationSize,Y,ut,Ct*nt,(It+Tt/z.locationSize*Ot)*nt,St)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)d(z.location+at,rt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<z.locationSize;at++)p(z.location+at);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let at=0;at<z.locationSize;at++)y(z.location+at,Tt/z.locationSize,Y,ut,Tt*nt,Tt/z.locationSize*at*nt,St)}}else if(W!==void 0){const ut=W[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(z.location,ut);break;case 3:i.vertexAttrib3fv(z.location,ut);break;case 4:i.vertexAttrib4fv(z.location,ut);break;default:i.vertexAttrib1fv(z.location,ut)}}}}T()}function F(){L();for(const S in n){const w=n[S];for(const V in w){const G=w[V];for(const X in G)h(G[X].object),delete G[X];delete w[V]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const V in w){const G=w[V];for(const X in G)h(G[X].object),delete G[X];delete w[V]}delete n[S.id]}function R(S){for(const w in n){const V=n[w];if(V[S.id]===void 0)continue;const G=V[S.id];for(const X in G)h(G[X].object),delete G[X];delete V[S.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function Pu(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Du(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:F,maxSamples:b}}function Lu(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const T=r?0:n,y=T*4;let E=d.clippingState||null;l.value=E,E=h(g,f,y,m);for(let F=0;F!==y;++F)E[F]=e[F];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const d=m+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,E=m;y!==x;++y,E+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Nu(i){let t=new WeakMap;function e(a,o){return o===Rr?a.mapping=yi:o===wr&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rr||o===wr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class hl extends Ii{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,no=[.125,.215,.35,.446,.526,.582],zn=20,cr=new hl,io=new Vt;let hr=null,dr=0,ur=0,fr=!1;const Vn=(1+Math.sqrt(5))/2,ci=1/Vn,so=[new C(-Vn,ci,0),new C(Vn,ci,0),new C(-ci,0,Vn),new C(ci,0,Vn),new C(0,Vn,-ci),new C(0,Vn,ci),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class ro{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,dr,ur),this._renderer.xr.enabled=fr,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ji,format:$e,colorSpace:Di,depthBuffer:!1},s=ao(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(r)),this._blurMaterial=Fu(r,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,s){const o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(io),h.toneMapping=Cn,h.autoClear=!1;const m=new In({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new Q(new gt,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(io),x=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;Es(s,T*y,d>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===yi||t.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=so[(s-r-1)%so.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Q(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const d=[];let T=0;for(let R=0;R<zn;++R){const L=R/x,M=Math.exp(-L*L/2);d.push(M),R===0?T+=M:R<p&&(T+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const E=this._sizeLods[s],F=3*E*(s>y-fi?s-y+fi:0),b=4*(this._cubeSize-E);Es(e,F,b,3*E,2*E),l.setRenderTarget(e),l.render(u,cr)}}function Uu(i){const t=[],e=[],n=[];let s=i;const r=i-fi+1+no.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-fi?l=no[a-i+fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,T=new Float32Array(x*g*m),y=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,L=b>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];T.set(M,x*g*b),y.set(f,p*g*b);const S=[b,b,b,b,b,b];E.set(S,d*g*b)}const F=new Ze;F.setAttribute("position",new en(T,x)),F.setAttribute("uv",new en(y,p)),F.setAttribute("faceIndex",new en(E,d)),t.push(F),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ao(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fu(i,t,e){const n=new Float32Array(zn),s=new C(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function oo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function lo(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function Ou(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rr||l===wr,h=l===yi||l===Ai;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ro(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ro(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ku(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const x=m[g];for(let p=0,d=x.length;p<d;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let y=0,E=T.length;y<E;y+=3){const F=T[y+0],b=T[y+1],R=T[y+2];f.push(F,b,b,R,R,F)}}else if(g!==void 0){const T=g.array;x=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const F=y+0,b=y+1,R=y+2;f.push(F,b,b,R,R,F)}}else return;const p=new(el(f)?al:rl)(f,1);p.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gu(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function u(f,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,g);let d=0;for(let T=0;T<g;T++)d+=m[T]*x[T];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hu(i,t,e){const n=new WeakMap,s=new Jt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let F=o.attributes.position.count*E,b=1;F>t.maxTextureSize&&(b=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const R=new Float32Array(F*b*4*u),L=new il(R,F,b,u);L.type=un,L.needsUpdate=!0;const M=E*4;for(let w=0;w<u;w++){const V=d[w],G=T[w],X=y[w],j=F*b*4*w;for(let W=0;W<V.count;W++){const J=W*M;g===!0&&(s.fromBufferAttribute(V,W),R[j+J+0]=s.x,R[j+J+1]=s.y,R[j+J+2]=s.z,R[j+J+3]=0),x===!0&&(s.fromBufferAttribute(G,W),R[j+J+4]=s.x,R[j+J+5]=s.y,R[j+J+6]=s.z,R[j+J+7]=0),p===!0&&(s.fromBufferAttribute(X,W),R[j+J+8]=s.x,R[j+J+9]=s.y,R[j+J+10]=s.z,R[j+J+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new Xt(F,b)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zu(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class dl extends Me{constructor(t,e,n,s,r,a,o,l,c,h=Ei){if(h!==Ei&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=qn),n===void 0&&h===Ci&&(n=bi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ul=new Me,co=new dl(1,1),fl=new il,pl=new wc,ml=new ll,ho=[],uo=[],fo=new Float32Array(16),po=new Float32Array(9),mo=new Float32Array(4);function Ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ho[s];if(r===void 0&&(r=new Float32Array(s),ho[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bs(i,t){let e=uo[t];e===void 0&&(e=new Int32Array(t),uo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function $u(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;mo.set(n),i.uniformMatrix2fv(this.addr,!1,mo),ge(e,n)}}function Ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;po.set(n),i.uniformMatrix3fv(this.addr,!1,po),ge(e,n)}}function ju(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;fo.set(n),i.uniformMatrix4fv(this.addr,!1,fo),ge(e,n)}}function Zu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(co.compareFunction=tl,r=co):r=ul,e.setTexture2D(t||r,s)}function of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pl,s)}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ml,s)}function cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fl,s)}function hf(i){switch(i){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return Yu;case 35674:return $u;case 35675:return Ku;case 35676:return ju;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return Qu;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return sf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function df(i,t){i.uniform1fv(this.addr,t)}function uf(i,t){const e=Ui(t,this.size,2);i.uniform2fv(this.addr,e)}function ff(i,t){const e=Ui(t,this.size,3);i.uniform3fv(this.addr,e)}function pf(i,t){const e=Ui(t,this.size,4);i.uniform4fv(this.addr,e)}function mf(i,t){const e=Ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gf(i,t){const e=Ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _f(i,t){const e=Ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xf(i,t){i.uniform1iv(this.addr,t)}function vf(i,t){i.uniform2iv(this.addr,t)}function Sf(i,t){i.uniform3iv(this.addr,t)}function Ef(i,t){i.uniform4iv(this.addr,t)}function Mf(i,t){i.uniform1uiv(this.addr,t)}function Tf(i,t){i.uniform2uiv(this.addr,t)}function yf(i,t){i.uniform3uiv(this.addr,t)}function Af(i,t){i.uniform4uiv(this.addr,t)}function bf(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ul,r[a])}function Cf(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pl,r[a])}function Rf(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ml,r[a])}function wf(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fl,r[a])}function If(i){switch(i){case 5126:return df;case 35664:return uf;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return vf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return Mf;case 36294:return Tf;case 36295:return yf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return wf}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hf(e.type)}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=If(e.type)}}class Lf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function go(i,t){i.seq.push(t),i.map[t.id]=t}function Nf(i,t,e){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),a=pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){go(e,c===void 0?new Pf(o,i,t):new Df(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Lf(o),go(e,u)),e=u}}}class Is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _o(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Uf=37297;let Ff=0;function Of(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xo=new Lt;function Bf(i){Wt._getMatrix(xo,Wt.workingColorSpace,i);const t=`mat3( ${xo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Fs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Of(i.getShaderSource(t),a)}else return s}function kf(i,t){const e=Bf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gf(i,t){let e;switch(t){case Hl:e="Linear";break;case zl:e="Reinhard";break;case Wl:e="Cineon";break;case Vo:e="ACESFilmic";break;case ql:e="AgX";break;case Yl:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new C;function Vf(){Wt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qi(i){return i!==""}function So(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Xf,Yf)}const qf=new Map;function Yf(i,t){let e=Ut[t];if(e===void 0){const n=qf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(i){return i.replace($f,Kf)}function Kf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function To(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ko?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Ai:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Qf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function tp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ep(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=jf(e),c=Zf(e),h=Jf(e),u=Qf(e),f=tp(e),m=Hf(e),g=zf(r),x=s.createProgram();let p,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),d.length>0&&(d+=`
`)):(p=[To(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),d=[To(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Gf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,kf("linearToOutputTexel",e.outputColorSpace),Vf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),a=ia(a),a=So(a,e),a=Eo(a,e),o=ia(o),o=So(o,e),o=Eo(o,e),a=Mo(a),o=Mo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+p+a,E=T+d+o,F=_o(s,s.VERTEX_SHADER,y),b=_o(s,s.FRAGMENT_SHADER,E);s.attachShader(x,F),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(w){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(F).trim(),X=s.getShaderInfoLog(b).trim();let j=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,F,b);else{const J=vo(s,F,"vertex"),z=vo(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+J+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||X==="")&&(W=!1);W&&(w.diagnostics={runnable:j,programLog:V,vertexShader:{log:G,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(F),s.deleteShader(b),L=new Is(s,x),M=Wf(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Uf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=b,this}let np=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sp(t),e.set(t,n)),n}}class sp{constructor(t){this.id=np++,this.code=t,this.usedTimes=0}}function rp(i,t,e,n,s,r,a){const o=new pa,l=new ip,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,w,V,G){const X=V.fog,j=G.geometry,W=M.isMeshStandardMaterial?V.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),z=J&&J.mapping===Us?J.image.height:null,rt=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let Qt,Y,nt,St;if(rt){const Kt=tn[rt];Qt=Kt.vertexShader,Y=Kt.fragmentShader}else Qt=M.vertexShader,Y=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),St=l.getFragmentShaderID(M);const at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),It=G.isInstancedMesh===!0,Ot=G.isBatchedMesh===!0,oe=!!M.map,Ht=!!M.matcap,he=!!J,U=!!M.aoMap,Fe=!!M.lightMap,Bt=!!M.bumpMap,kt=!!M.normalMap,At=!!M.displacementMap,ie=!!M.emissiveMap,yt=!!M.metalnessMap,A=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,q=M.sheen>0,Et=M.transmission>0,ot=_&&!!M.anisotropyMap,ft=O&&!!M.clearcoatMap,zt=O&&!!M.clearcoatNormalMap,tt=O&&!!M.clearcoatRoughnessMap,pt=Z&&!!M.iridescenceMap,bt=Z&&!!M.iridescenceThicknessMap,Rt=q&&!!M.sheenColorMap,mt=q&&!!M.sheenRoughnessMap,Gt=!!M.specularMap,Nt=!!M.specularColorMap,te=!!M.specularIntensityMap,P=Et&&!!M.transmissionMap,st=Et&&!!M.thicknessMap,H=!!M.gradientMap,K=!!M.alphaMap,ht=M.alphaTest>0,lt=!!M.alphaHash,Pt=!!M.extensions;let ce=Cn;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ve={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:Qt,fragmentShader:Y,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&G._colorsTexture!==null,instancing:It,instancingColor:It&&G.instanceColor!==null,instancingMorph:It&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Di,alphaToCoverage:!!M.alphaToCoverage,map:oe,matcap:Ht,envMap:he,envMapMode:he&&J.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:Fe,bumpMap:Bt,normalMap:kt,displacementMap:f&&At,emissiveMap:ie,normalMapObjectSpace:kt&&M.normalMapType===Zl,normalMapTangentSpace:kt&&M.normalMapType===Qo,metalnessMap:yt,roughnessMap:A,anisotropy:_,anisotropyMap:ot,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:zt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:te,transmission:Et,transmissionMap:P,thicknessMap:st,gradientMap:H,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:lt,combine:M.combine,mapUv:oe&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:Fe&&x(M.lightMap.channel),bumpMapUv:Bt&&x(M.bumpMap.channel),normalMapUv:kt&&x(M.normalMap.channel),displacementMapUv:At&&x(M.displacementMap.channel),emissiveMapUv:ie&&x(M.emissiveMap.channel),metalnessMapUv:yt&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:ot&&x(M.anisotropyMap.channel),clearcoatMapUv:ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(M.sheenRoughnessMap.channel),specularMapUv:Gt&&x(M.specularMap.channel),specularColorMapUv:Nt&&x(M.specularColorMap.channel),specularIntensityMapUv:te&&x(M.specularIntensityMap.channel),transmissionMapUv:P&&x(M.transmissionMap.channel),thicknessMapUv:st&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(kt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(oe||K),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:oe&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&M.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)S.push(w),S.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(T(S,M),y(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const S=g[M.type];let w;if(S){const V=tn[S];w=Vc.clone(V.uniforms)}else w=M.uniforms;return w}function F(M,S){let w;for(let V=0,G=h.length;V<G;V++){const X=h[V];if(X.cacheKey===S){w=X,++w.usedTimes;break}}return w===void 0&&(w=new ep(i,S,M,r),h.push(w)),w}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:F,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:L}}function ap(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ao(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,g,x,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),t++,d}function o(u,f,m,g,x,p){const d=a(u,f,m,g,x,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,g,x,p){const d=a(u,f,m,g,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||op),n.length>1&&n.sort(f||yo),s.length>1&&s.sort(f||yo)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ao,i.set(n,[a])):s>=r.length?(a=new Ao,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Vt};break;case"SpotLight":e={position:new C,direction:new C,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dp=0;function up(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fp(i){const t=new cp,e=hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new ne,a=new ne;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,T=0,y=0,E=0,F=0,b=0,R=0;c.sort(up);for(let M=0,S=c.length;M<S;M++){const w=c[M],V=w.color,G=w.intensity,X=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=V.r*G,u+=V.g*G,f+=V.b*G;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],G);R++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,z=e.get(w);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=w.shadow.matrix,T++}n.directional[m]=W,m++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(V).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[x]=W;const J=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,J.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[x]=J.matrix,w.castShadow){const z=e.get(w);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=j,E++}x++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(V).multiplyScalar(G),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=W,p++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const J=w.shadow,z=e.get(w);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(G),W.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[d]=W,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==T||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==F||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+F-b,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.directionalLength=m,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=T,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=F,L.numLightProbes=R,n.version=dp++)}function l(c,h){let u=0,f=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const y=c[d];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function bo(i){const t=new fp(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new bo(i),t.set(s,[o])):r>=a.length?(o=new bo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class mp extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gp extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function vp(i,t,e){let n=new ma;const s=new Xt,r=new Xt,a=new Jt,o=new mp({depthPacking:jl}),l=new gp,c={},h=e.maxTextureSize,u={[wn]:Pe,[Pe]:wn,[dn]:dn},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:_p,fragmentShader:xp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Q(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(b,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending(bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=d!==hn&&this.type===hn,X=d===hn&&this.type!==hn;for(let j=0,W=b.length;j<W;j++){const J=b[j],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const rt=z.getFrameExtents();if(s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||G===!0||X===!0){const Tt=this.type!==hn?{minFilter:Ke,magFilter:Ke}:{};z.map!==null&&z.map.dispose(),z.map=new Yn(s.x,s.y,Tt),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ut=z.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const Ft=z.getViewport(Tt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),V.viewport(a),z.updateMatrices(J,Tt),n=z.getFrustum(),E(R,L,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===hn&&T(z,L),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,w)};function T(b,R){const L=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,L,m,x,null)}function y(b,R,L,M){let S=null;const w=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)S=w;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=S.uuid,G=R.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let j=X[G];j===void 0&&(j=S.clone(),X[G]=j,R.addEventListener("dispose",F)),S=j}if(S.visible=R.visible,S.wireframe=R.wireframe,M===hn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=L}return S}function E(b,R,L,M,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===hn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const G=t.update(b),X=b.material;if(Array.isArray(X)){const j=G.groups;for(let W=0,J=j.length;W<J;W++){const z=j[W],rt=X[z.materialIndex];if(rt&&rt.visible){const ut=y(b,rt,M,S);b.onBeforeShadow(i,b,R,L,G,ut,z),i.renderBufferDirect(L,null,G,ut,b,z),b.onAfterShadow(i,b,R,L,G,ut,z)}}}else if(X.visible){const j=y(b,X,M,S);b.onBeforeShadow(i,b,R,L,G,j,null),i.renderBufferDirect(L,null,G,j,b,null),b.onAfterShadow(i,b,R,L,G,j,null)}}const V=b.children;for(let G=0,X=V.length;G<X;G++)E(V[G],R,L,M,S)}function F(b){b.target.removeEventListener("dispose",F);for(const L in c){const M=c[L],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Sp={[Er]:Mr,[Tr]:br,[yr]:Cr,[Ti]:Ar,[Mr]:Er,[br]:Tr,[Cr]:yr,[Ar]:Ti};function Ep(i,t){function e(){let P=!1;const st=new Jt;let H=null;const K=new Jt(0,0,0,0);return{setMask:function(ht){H!==ht&&!P&&(i.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){P=ht},setClear:function(ht,lt,Pt,ce,ve){ve===!0&&(ht*=ce,lt*=ce,Pt*=ce),st.set(ht,lt,Pt,ce),K.equals(st)===!1&&(i.clearColor(ht,lt,Pt,ce),K.copy(st))},reset:function(){P=!1,H=null,K.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,H=null,K=null,ht=null;return{setReversed:function(lt){if(st!==lt){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ht;ht=null,this.setClear(ce)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(lt){H!==lt&&!P&&(i.depthMask(lt),H=lt)},setFunc:function(lt){if(st&&(lt=Sp[lt]),K!==lt){switch(lt){case Er:i.depthFunc(i.NEVER);break;case Mr:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case br:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){P=!1,H=null,K=null,ht=null,st=!1}}}function s(){let P=!1,st=null,H=null,K=null,ht=null,lt=null,Pt=null,ce=null,ve=null;return{setTest:function(Kt){P||(Kt?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!P&&(i.stencilMask(Kt),st=Kt)},setFunc:function(Kt,Ge,nn){(H!==Kt||K!==Ge||ht!==nn)&&(i.stencilFunc(Kt,Ge,nn),H=Kt,K=Ge,ht=nn)},setOp:function(Kt,Ge,nn){(lt!==Kt||Pt!==Ge||ce!==nn)&&(i.stencilOp(Kt,Ge,nn),lt=Kt,Pt=Ge,ce=nn)},setLocked:function(Kt){P=Kt},setClear:function(Kt){ve!==Kt&&(i.clearStencil(Kt),ve=Kt)},reset:function(){P=!1,st=null,H=null,K=null,ht=null,lt=null,Pt=null,ce=null,ve=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,T=null,y=null,E=null,F=null,b=null,R=new Vt(0,0,0),L=0,M=!1,S=null,w=null,V=null,G=null,X=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=J>=2);let rt=null,ut={};const Tt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Qt=new Jt().fromArray(Tt),Y=new Jt().fromArray(Ft);function nt(P,st,H,K){const ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(P,lt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<H;Pt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}const St={};St[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Ti),Bt(!1),kt(Ra),at(i.CULL_FACE),U(bn);function at(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ct(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function It(P,st){return u[P]!==st?(i.bindFramebuffer(P,st),u[P]=st,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(P,st){let H=m,K=!1;if(P){H=f.get(st),H===void 0&&(H=[],f.set(st,H));const ht=P.textures;if(H.length!==ht.length||H[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Pt=ht.length;lt<Pt;lt++)H[lt]=i.COLOR_ATTACHMENT0+lt;H.length=ht.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function oe(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Ht={[Hn]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};Ht[Al]=i.MIN,Ht[bl]=i.MAX;const he={[Cl]:i.ZERO,[Rl]:i.ONE,[wl]:i.SRC_COLOR,[vr]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Ll]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Il]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[Nl]:i.ONE_MINUS_DST_COLOR,[Dl]:i.ONE_MINUS_DST_ALPHA,[Fl]:i.CONSTANT_COLOR,[Ol]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[kl]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,st,H,K,ht,lt,Pt,ce,ve,Kt){if(P===bn){x===!0&&(Ct(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),P!==Ml){if(P!==p||Kt!==M){if((d!==Hn||E!==Hn)&&(i.blendEquation(i.FUNC_ADD),d=Hn,E=Hn),Kt)switch(P){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,y=null,F=null,b=null,R.set(0,0,0),L=0,p=P,M=Kt}return}ht=ht||st,lt=lt||H,Pt=Pt||K,(st!==d||ht!==E)&&(i.blendEquationSeparate(Ht[st],Ht[ht]),d=st,E=ht),(H!==T||K!==y||lt!==F||Pt!==b)&&(i.blendFuncSeparate(he[H],he[K],he[lt],he[Pt]),T=H,y=K,F=lt,b=Pt),(ce.equals(R)===!1||ve!==L)&&(i.blendColor(ce.r,ce.g,ce.b,ve),R.copy(ce),L=ve),p=P,M=!1}function Fe(P,st){P.side===dn?Ct(i.CULL_FACE):at(i.CULL_FACE);let H=P.side===Pe;st&&(H=!H),Bt(H),P.blending===Si&&P.transparent===!1?U(bn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function kt(P){P!==Sl?(at(i.CULL_FACE),P!==w&&(P===Ra?i.cullFace(i.BACK):P===El?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),w=P}function At(P){P!==V&&(W&&i.lineWidth(P),V=P)}function ie(P,st,H){P?(at(i.POLYGON_OFFSET_FILL),(G!==st||X!==H)&&(i.polygonOffset(st,H),G=st,X=H)):Ct(i.POLYGON_OFFSET_FILL)}function yt(P){P?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+j-1),rt!==P&&(i.activeTexture(P),rt=P)}function _(P,st,H){H===void 0&&(rt===null?H=i.TEXTURE0+j-1:H=rt);let K=ut[H];K===void 0&&(K={type:void 0,texture:void 0},ut[H]=K),(K.type!==P||K.texture!==st)&&(rt!==H&&(i.activeTexture(H),rt=H),i.bindTexture(P,st||St[P]),K.type=P,K.texture=st)}function O(){const P=ut[rt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(P){Qt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Qt.copy(P))}function mt(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Gt(P,st){let H=c.get(st);H===void 0&&(H=new WeakMap,c.set(st,H));let K=H.get(P);K===void 0&&(K=i.getUniformBlockIndex(st,P.name),H.set(P,K))}function Nt(P,st){const K=c.get(st).get(P);l.get(st)!==K&&(i.uniformBlockBinding(st,K,P.__bindingPointIndex),l.set(st,K))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ut={},u={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,T=null,y=null,E=null,F=null,b=null,R=new Vt(0,0,0),L=0,M=!1,S=null,w=null,V=null,G=null,X=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Ct,bindFramebuffer:It,drawBuffers:Ot,useProgram:oe,setBlending:U,setMaterial:Fe,setFlipSided:Bt,setCullFace:kt,setLineWidth:At,setPolygonOffset:ie,setScissorTest:yt,activeTexture:A,bindTexture:_,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pt,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:zt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Et,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:te}}function Co(i,t,e,n){const s=Mp(n);switch(e){case qo:return i*t;case $o:return i*t;case Ko:return i*t*2;case jo:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case Zo:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case Yo:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case da:return i*t*4/s.components*s.byteLength;case As:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Nr:return Math.max(i,16)*Math.max(t,8)/4;case Pr:case Lr:return Math.max(i,8)*Math.max(t,8)/2;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ws:case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(i){switch(i){case mn:case zo:return{byteLength:1,components:1};case Ki:case Wo:case Ji:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case qn:case aa:case un:return{byteLength:4,components:1};case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return m?new OffscreenCanvas(A,_):ji("canvas")}function x(A,_,O){let $=1;const Z=yt(A);if((Z.width>O||Z.height>O)&&($=O/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor($*Z.width),Et=Math.floor($*Z.height);u===void 0&&(u=g(q,Et));const ot=_?g(q,Et):u;return ot.width=q,ot.height=Et,ot.getContext("2d").drawImage(A,0,0,q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Et+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,O,$,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=_;if(_===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const Et=Z?Fs:Wt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Et===jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function E(A,_){let O;return A?_===null||_===qn||_===bi?O=i.DEPTH24_STENCIL8:_===un?O=i.DEPTH32F_STENCIL8:_===Ki&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===bi?O=i.DEPTH_COMPONENT24:_===un?O=i.DEPTH_COMPONENT32F:_===Ki&&(O=i.DEPTH_COMPONENT16),O}function F(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==Ye?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){const _=A.target;_.removeEventListener("dispose",b),L(_),_.isVideoTexture&&h.delete(_)}function R(A){const _=A.target;_.removeEventListener("dispose",R),S(_)}function L(A){const _=n.get(A);if(_.__webglInit===void 0)return;const O=A.source,$=f.get(O);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(A),Object.keys($).length===0&&f.delete(O)}n.remove(A)}function M(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const O=A.source,$=f.get(O);delete $[_.__cacheKey],a.memory.textures--}function S(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let $=0,Z=O.length;$<Z;$++){const q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(A)}let w=0;function V(){w=0}function G(){const A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const O=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function W(A,_){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function J(A,_){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function z(A,_){const O=n.get(A);if(A.version>0&&O.__version!==A.version){nt(O,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const rt={[Wn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ut={[Ke]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Hs]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Tt={[Jl]:i.NEVER,[sc]:i.ALWAYS,[Ql]:i.LESS,[tl]:i.LEQUAL,[tc]:i.EQUAL,[ic]:i.GEQUAL,[ec]:i.GREATER,[nc]:i.NOTEQUAL};function Ft(A,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ye||_.magFilter===Hs||_.magFilter===ns||_.magFilter===An||_.minFilter===Ye||_.minFilter===Hs||_.minFilter===ns||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,rt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,rt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,rt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==ns&&_.minFilter!==An||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qt(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const q=X(_);if(q!==A.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[q].usedTimes++;const Et=Z[A.__cacheKey];Et!==void 0&&(Z[A.__cacheKey].usedTimes--,Et.usedTimes===0&&M(_)),A.__cacheKey=q,A.__webglTexture=Z[q].texture}return O}function Y(A,_,O){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=Qt(A,_),q=_.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+O);const Et=n.get(q);if(q.version!==Et.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const ot=Wt.getPrimaries(Wt.workingColorSpace),ft=_.colorSpace===yn?null:Wt.getPrimaries(_.colorSpace),zt=_.colorSpace===yn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let tt=x(_.image,!1,s.maxTextureSize);tt=ie(_,tt);const pt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type);let Rt=y(_.internalFormat,pt,bt,_.colorSpace,_.isVideoTexture);Ft($,_);let mt;const Gt=_.mipmaps,Nt=_.isVideoTexture!==!0,te=Et.__version===void 0||Z===!0,P=q.dataReady,st=F(_,tt);if(_.isDepthTexture)Rt=E(_.format===Ci,_.type),te&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,bt,null));else if(_.isDataTexture)if(Gt.length>0){Nt&&te&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let H=0,K=Gt.length;H<K;H++)mt=Gt[H],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(i.TEXTURE_2D,H,Rt,mt.width,mt.height,0,pt,bt,mt.data);_.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(i.TEXTURE_2D,st,Rt,tt.width,tt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,bt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Gt[0].width,Gt[0].height,tt.depth);for(let H=0,K=Gt.length;H<K;H++)if(mt=Gt[H],_.format!==$e)if(pt!==null)if(Nt){if(P)if(_.layerUpdates.size>0){const ht=Co(mt.width,mt.height,_.format,_.type);for(const lt of _.layerUpdates){const Pt=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,lt,mt.width,mt.height,1,pt,Pt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Rt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,bt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Rt,mt.width,mt.height,tt.depth,0,pt,bt,mt.data)}else{Nt&&te&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Gt[0].width,Gt[0].height);for(let H=0,K=Gt.length;H<K;H++)mt=Gt[H],_.format!==$e?pt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(i.TEXTURE_2D,H,Rt,mt.width,mt.height,0,pt,bt,mt.data)}else if(_.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,tt.width,tt.height,tt.depth),P)if(_.layerUpdates.size>0){const H=Co(tt.width,tt.height,_.format,_.type);for(const K of _.layerUpdates){const ht=tt.data.subarray(K*H/tt.data.BYTES_PER_ELEMENT,(K+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,pt,bt,ht)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(_.isData3DTexture)Nt?(te&&e.texStorage3D(i.TEXTURE_3D,st,Rt,tt.width,tt.height,tt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(_.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,Rt,tt.width,tt.height);else{let H=tt.width,K=tt.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,H,K,0,pt,bt,null),H>>=1,K>>=1}}else if(Gt.length>0){if(Nt&&te){const H=yt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,H.width,H.height)}for(let H=0,K=Gt.length;H<K;H++)mt=Gt[H],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,pt,bt,mt):e.texImage2D(i.TEXTURE_2D,H,Rt,pt,bt,mt);_.generateMipmaps=!1}else if(Nt){if(te){const H=yt(tt);e.texStorage2D(i.TEXTURE_2D,st,Rt,H.width,H.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,pt,bt,tt);p(_)&&d($),Et.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function nt(A,_,O){if(_.image.length!==6)return;const $=Qt(A,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const q=n.get(Z);if(Z.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const Et=Wt.getPrimaries(Wt.workingColorSpace),ot=_.colorSpace===yn?null:Wt.getPrimaries(_.colorSpace),ft=_.colorSpace===yn||Et===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const zt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!zt&&!tt?pt[K]=x(_.image[K],!0,s.maxCubemapSize):pt[K]=tt?_.image[K].image:_.image[K],pt[K]=ie(_,pt[K]);const bt=pt[0],Rt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),Gt=y(_.internalFormat,Rt,mt,_.colorSpace),Nt=_.isVideoTexture!==!0,te=q.__version===void 0||$===!0,P=Z.dataReady;let st=F(_,bt);Ft(i.TEXTURE_CUBE_MAP,_);let H;if(zt){Nt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,bt.width,bt.height);for(let K=0;K<6;K++){H=pt[K].mipmaps;for(let ht=0;ht<H.length;ht++){const lt=H[ht];_.format!==$e?Rt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Rt,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Gt,lt.width,lt.height,0,Rt,mt,lt.data)}}}else{if(H=_.mipmaps,Nt&&te){H.length>0&&st++;const K=yt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Rt,mt,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,pt[K].width,pt[K].height,0,Rt,mt,pt[K].data);for(let ht=0;ht<H.length;ht++){const Pt=H[ht].image[K].image;Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Pt.width,Pt.height,Rt,mt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Gt,Pt.width,Pt.height,0,Rt,mt,Pt.data)}}else{Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,Rt,mt,pt[K]);for(let ht=0;ht<H.length;ht++){const lt=H[ht];Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Rt,mt,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Gt,Rt,mt,lt.image[K])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),q.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function St(A,_,O,$,Z,q){const Et=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),ft=y(O.internalFormat,Et,ot,O.colorSpace),zt=n.get(_),tt=n.get(O);if(tt.__renderTarget=_,!zt.__hasExternalTextures){const pt=Math.max(1,_.width>>q),bt=Math.max(1,_.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ft,pt,bt,_.depth,0,Et,ot,null):e.texImage2D(Z,q,ft,pt,bt,0,Et,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,tt.__webglTexture,0,Bt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=E(_.stencilBuffer,Z),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Bt(_);kt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],Et=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),ft=y(q.internalFormat,Et,ot,q.colorSpace),zt=Bt(_);O&&kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ft,_.width,_.height):kt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=$.__webglTexture,q=Bt(_);if(_.depthTexture.format===Ei)kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Ci)kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function It(A){const _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=$}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,A)}else if(O){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),at(_.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),at(_.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,_,O){const $=n.get(A);_!==void 0&&St($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&It(A)}function oe(A){const _=A.texture,O=n.get(A),$=n.get(_);A.addEventListener("dispose",R);const Z=A.textures,q=A.isWebGLCubeRenderTarget===!0,Et=Z.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)O.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ot=0,ft=Z.length;ot<ft;ot++){const zt=n.get(Z[ot]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&kt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ft=Z[ot];O.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const zt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=y(ft.internalFormat,zt,tt,ft.colorSpace,A.isXRRenderTarget===!0),bt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),at(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)St(O.__webglFramebuffer[ot][ft],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else St(O.__webglFramebuffer[ot],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,ft=Z.length;ot<ft;ot++){const zt=Z[ot],tt=n.get(zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ft(i.TEXTURE_2D,zt),St(O.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Ft(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)St(O.__webglFramebuffer[ft],A,_,i.COLOR_ATTACHMENT0,ot,ft);else St(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ot,0);p(_)&&d(ot),e.unbindTexture()}A.depthBuffer&&It(A)}function Ht(A){const _=A.textures;for(let O=0,$=_.length;O<$;O++){const Z=_[O];if(p(Z)){const q=T(A),Et=n.get(Z).__webglTexture;e.bindTexture(q,Et),d(q),e.unbindTexture()}}}const he=[],U=[];function Fe(A){if(A.samples>0){if(kt(A)===!1){const _=A.textures,O=A.width,$=A.height;let Z=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),ot=_.length>1;if(ot)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const zt=n.get(_[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,Z,i.NEAREST),l===!0&&(he.length=0,U.length=0,he.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const zt=n.get(_[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function kt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function At(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ie(A,_){const O=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Di&&O!==yn&&(Wt.getTransfer(O)===jt?($!==$e||Z!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ot,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=St,this.useMultisampledRTT=kt}function yp(i,t){function e(n,s=yn){let r;const a=Wt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.BYTE;if(n===Wo)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===qo)return i.ALPHA;if(n===Yo)return i.RGB;if(n===$e)return i.RGBA;if(n===$o)return i.LUMINANCE;if(n===Ko)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===Zo)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===As||n===bs||n===Cs||n===Rs)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Dr||n===Lr||n===Nr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ur||n===Fr||n===Or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ur||n===Fr)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Br||n===kr||n===Gr||n===Vr||n===Hr||n===zr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===jr||n===Zr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Br)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===Jr||n===Qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ws)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ap extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Me,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:Cp,fragmentShader:Rp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new de(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ip extends $n{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const x=new wp,p=e.getContextAttributes();let d=null,T=null;const y=[],E=[],F=new Xt;let b=null;const R=new Ie;R.viewport=new Jt;const L=new Ie;L.viewport=new Jt;const M=[R,L],S=new Ap;let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=y[Y];return nt===void 0&&(nt=new mr,y[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=y[Y];return nt===void 0&&(nt=new mr,y[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=y[Y];return nt===void 0&&(nt=new mr,y[Y]=nt),nt.getHandSpace()};function G(Y){const nt=E.indexOf(Y.inputSource);if(nt===-1)return;const St=y[nt];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||a),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<y.length;Y++){const nt=E[Y];nt!==null&&(E[Y]=null,y[Y].disconnect(nt))}w=null,V=null,x.reset(),t.setRenderTarget(d),m=null,f=null,u=null,s=null,T=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Yn(m.framebufferWidth,m.framebufferHeight,{format:$e,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,St=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Ci:Ei,St=p.stencil?bi:qn);const Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Yn(f.textureWidth,f.textureHeight,{format:$e,type:mn,depthTexture:new dl(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Y){for(let nt=0;nt<Y.removed.length;nt++){const St=Y.removed[nt],at=E.indexOf(St);at>=0&&(E[at]=null,y[at].disconnect(St))}for(let nt=0;nt<Y.added.length;nt++){const St=Y.added[nt];let at=E.indexOf(St);if(at===-1){for(let It=0;It<y.length;It++)if(It>=E.length){E.push(St),at=It;break}else if(E[It]===null){E[It]=St,at=It;break}if(at===-1)break}const Ct=y[at];Ct&&Ct.connect(St)}}const W=new C,J=new C;function z(Y,nt,St){W.setFromMatrixPosition(nt.matrixWorld),J.setFromMatrixPosition(St.matrixWorld);const at=W.distanceTo(J),Ct=nt.projectionMatrix.elements,It=St.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),oe=Ct[14]/(Ct[10]+1),Ht=(Ct[9]+1)/Ct[5],he=(Ct[9]-1)/Ct[5],U=(Ct[8]-1)/Ct[0],Fe=(It[8]+1)/It[0],Bt=Ot*U,kt=Ot*Fe,At=at/(-U+Fe),ie=At*-U;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const yt=Ot+At,A=oe+At,_=Bt-ie,O=kt+(at-ie),$=Ht*oe/A*yt,Z=he*oe/A*yt;Y.projectionMatrix.makePerspective(_,O,$,Z,yt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,St=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(St=x.depthFar)),S.near=L.near=R.near=nt,S.far=L.far=R.far=St,(w!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,V=S.far),R.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;const at=Y.parent,Ct=S.cameras;rt(S,at);for(let It=0;It<Ct.length;It++)rt(Ct[It],at);Ct.length===2?z(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),ut(Y,S,at)};function ut(Y,nt,St){St===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ri*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Tt=null;function Ft(Y,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const St=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let at=!1;St.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let It=0;It<St.length;It++){const Ot=St[It];let oe=null;if(m!==null)oe=m.getViewport(Ot);else{const he=u.getViewSubImage(f,Ot);oe=he.viewport,It===0&&(t.setRenderTargetTextures(T,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(T))}let Ht=M[It];Ht===void 0&&(Ht=new Ie,Ht.layers.enable(It),Ht.viewport=new Jt,M[It]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(oe.x,oe.y,oe.width,oe.height),It===0&&(S.matrix.copy(Ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(Ht)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const It=u.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&x.init(t,It,s.renderState)}}for(let St=0;St<y.length;St++){const at=E[St],Ct=y[St];at!==null&&Ct!==void 0&&Ct.update(at,nt,c||a)}Tt&&Tt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Qt=new cl;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){Tt=Y},this.dispose=function(){}}}const kn=new le,Pp=new ne;function Dp(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,ol(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,T,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=t.get(d),y=T.envMap,E=T.envMapRotation;y&&(p.envMap.value=y,kn.copy(E),kn.x*=-1,kn.y*=-1,kn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(kn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const T=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const E=y.program;n.uniformBlockBinding(T,E)}function c(T,y){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",p));const F=y.program;n.updateUBOMapping(T,F);const b=t.render.frame;r[T.id]!==b&&(f(T),r[T.id]=b)}function h(T){const y=u();T.__bindingPointIndex=y;const E=i.createBuffer(),F=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=s[T.id],E=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,R=E.length;b<R;b++){const L=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,S=L.length;M<S;M++){const w=L[M];if(m(w,b,M,F)===!0){const V=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let j=0;j<G.length;j++){const W=G[j],J=x(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+X,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,y,E,F){const b=T.value,R=y+"_"+E;if(F[R]===void 0)return typeof b=="number"||typeof b=="boolean"?F[R]=b:F[R]=b.clone(),!0;{const L=F[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return F[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(T){const y=T.uniforms;let E=0;const F=16;for(let R=0,L=y.length;R<L;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,w=M.length;S<w;S++){const V=M[S],G=Array.isArray(V.value)?V.value:[V.value];for(let X=0,j=G.length;X<j;X++){const W=G[X],J=x(W),z=E%F,rt=z%J.boundary,ut=z+rt;E+=rt,ut!==0&&F-ut<J.storage&&(E+=F-ut),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=J.storage}}}const b=E%F;return b>0&&(E+=F-b),T.__size=E,T.__cache={},this}function x(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Np{constructor(t={}){const{canvas:e=Ec(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Cn,this.toneMappingExposure=1;const E=this;let F=!1,b=0,R=0,L=null,M=-1,S=null;const w=new Jt,V=new Jt;let G=null;const X=new Vt(0);let j=0,W=e.width,J=e.height,z=1,rt=null,ut=null;const Tt=new Jt(0,0,W,J),Ft=new Jt(0,0,W,J);let Qt=!1;const Y=new ma;let nt=!1,St=!1;const at=new ne,Ct=new ne,It=new C,Ot=new Jt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function he(){return L===null?z:1}let U=n;function Fe(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const D="webgl2";if(U=Fe(D,v),U===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,kt,At,ie,yt,A,_,O,$,Z,q,Et,ot,ft,zt,tt,pt,bt,Rt,mt,Gt,Nt,te,P;function st(){Bt=new Bu(U),Bt.init(),Nt=new yp(U,Bt),kt=new Du(U,Bt,t,Nt),At=new Ep(U,Bt),kt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ie=new Vu(U),yt=new ap,A=new Tp(U,Bt,At,yt,kt,Nt,ie),_=new Nu(E),O=new Ou(E),$=new $c(U),te=new Iu(U,$),Z=new ku(U,$,ie,te),q=new zu(U,Z,$,ie),Rt=new Hu(U,kt,A),tt=new Lu(yt),Et=new rp(E,_,O,Bt,kt,te,tt),ot=new Dp(E,yt),ft=new lp,zt=new pp(Bt),bt=new wu(E,_,O,At,q,m,l),pt=new vp(E,q,kt),P=new Lp(U,ie,kt,At),mt=new Pu(U,Bt,ie),Gt=new Gu(U,Bt,ie),ie.programs=Et.programs,E.capabilities=kt,E.extensions=Bt,E.properties=yt,E.renderLists=ft,E.shadowMap=pt,E.state=At,E.info=ie}st();const H=new Ip(E,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(W,J,!1))},this.getSize=function(v){return v.set(W,J)},this.setSize=function(v,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,J=D,e.width=Math.floor(v*z),e.height=Math.floor(D*z),B===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*z,J*z).floor()},this.setDrawingBufferSize=function(v,D,B){W=v,J=D,z=B,e.width=Math.floor(v*B),e.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,D,B,k){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,D,B,k),At.viewport(w.copy(Tt).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,D,B,k){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,D,B,k),At.scissor(V.copy(Ft).multiplyScalar(z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){At.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(v=!0,D=!0,B=!0){let k=0;if(v){let N=!1;if(L!==null){const et=L.texture.format;N=et===da||et===ha||et===ca}if(N){const et=L.texture.type,ct=et===mn||et===qn||et===Ki||et===bi||et===oa||et===la,_t=bt.getClearColor(),xt=bt.getClearAlpha(),wt=_t.r,Dt=_t.g,vt=_t.b;ct?(g[0]=wt,g[1]=Dt,g[2]=vt,g[3]=xt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=wt,x[1]=Dt,x[2]=vt,x[3]=xt,U.clearBufferiv(U.COLOR,0,x))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),B&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),zt.dispose(),yt.dispose(),_.dispose(),O.dispose(),q.dispose(),te.dispose(),P.dispose(),Et.dispose(),H.dispose(),H.removeEventListener("sessionstart",Sa),H.removeEventListener("sessionend",Ea),Ln.stop()};function K(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const v=ie.autoReset,D=pt.enabled,B=pt.autoUpdate,k=pt.needsUpdate,N=pt.type;st(),ie.autoReset=v,pt.enabled=D,pt.autoUpdate=B,pt.needsUpdate=k,pt.type=N}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pt(v){const D=v.target;D.removeEventListener("dispose",Pt),ce(D)}function ce(v){ve(v),yt.remove(v)}function ve(v){const D=yt.get(v).programs;D!==void 0&&(D.forEach(function(B){Et.releaseProgram(B)}),v.isShaderMaterial&&Et.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,k,N,et){D===null&&(D=oe);const ct=N.isMesh&&N.matrixWorld.determinant()<0,_t=_l(v,D,B,k,N);At.setMaterial(k,ct);let xt=B.index,wt=1;if(k.wireframe===!0){if(xt=Z.getWireframeAttribute(B),xt===void 0)return;wt=2}const Dt=B.drawRange,vt=B.attributes.position;let qt=Dt.start*wt,ee=(Dt.start+Dt.count)*wt;et!==null&&(qt=Math.max(qt,et.start*wt),ee=Math.min(ee,(et.start+et.count)*wt)),xt!==null?(qt=Math.max(qt,0),ee=Math.min(ee,xt.count)):vt!=null&&(qt=Math.max(qt,0),ee=Math.min(ee,vt.count));const se=ee-qt;if(se<0||se===1/0)return;te.setup(N,k,_t,B,xt);let Ce,Yt=mt;if(xt!==null&&(Ce=$.get(xt),Yt=Gt,Yt.setIndex(Ce)),N.isMesh)k.wireframe===!0?(At.setLineWidth(k.wireframeLinewidth*he()),Yt.setMode(U.LINES)):Yt.setMode(U.TRIANGLES);else if(N.isLine){let Mt=k.linewidth;Mt===void 0&&(Mt=1),At.setLineWidth(Mt*he()),N.isLineSegments?Yt.setMode(U.LINES):N.isLineLoop?Yt.setMode(U.LINE_LOOP):Yt.setMode(U.LINE_STRIP)}else N.isPoints?Yt.setMode(U.POINTS):N.isSprite&&Yt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,sn=N._multiDrawCounts,$t=N._multiDrawCount,Ve=xt?$.get(xt).bytesPerElement:1,Kn=yt.get(k).currentProgram.getUniforms();for(let Le=0;Le<$t;Le++)Kn.setValue(U,"_gl_DrawID",Le),Yt.render(Mt[Le]/Ve,sn[Le])}else if(N.isInstancedMesh)Yt.renderInstances(qt,se,N.count);else if(B.isInstancedBufferGeometry){const Mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,sn=Math.min(B.instanceCount,Mt);Yt.renderInstances(qt,se,sn)}else Yt.render(qt,se)};function Kt(v,D,B){v.transparent===!0&&v.side===dn&&v.forceSinglePass===!1?(v.side=Pe,v.needsUpdate=!0,es(v,D,B),v.side=wn,v.needsUpdate=!0,es(v,D,B),v.side=dn):es(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),d=zt.get(B),d.init(D),y.push(d),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const _t=et[ct];Kt(_t,B,N),k.add(_t)}else Kt(et,B,N),k.add(et)}),y.pop(),d=null,k},this.compileAsync=function(v,D,B=null){const k=this.compile(v,D,B);return new Promise(N=>{function et(){if(k.forEach(function(ct){yt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){N(v);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ge=null;function nn(v){Ge&&Ge(v)}function Sa(){Ln.stop()}function Ea(){Ln.start()}const Ln=new cl;Ln.setAnimationLoop(nn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(v){Ge=v,H.setAnimationLoop(v),v===null?Ln.stop():Ln.start()},H.addEventListener("sessionstart",Sa),H.addEventListener("sessionend",Ea),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,L),d=zt.get(v,y.length),d.init(D),y.push(d),Ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,St),p=ft.get(v,T.length),p.init(),T.push(p),H.enabled===!0&&H.isPresenting===!0){const et=E.xr.getDepthSensingMesh();et!==null&&Vs(et,D,-1/0,E.sortObjects)}Vs(v,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(rt,ut),Ht=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ht&&bt.addToRenderList(p,v),this.info.render.frame++,nt===!0&&tt.beginShadows();const B=d.state.shadowsArray;pt.render(B,v,D),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(d.setupLights(),D.isArrayCamera){const et=D.cameras;if(N.length>0)for(let ct=0,_t=et.length;ct<_t;ct++){const xt=et[ct];Ta(k,N,v,xt)}Ht&&bt.render(v);for(let ct=0,_t=et.length;ct<_t;ct++){const xt=et[ct];Ma(p,v,xt,xt.viewport)}}else N.length>0&&Ta(k,N,v,D),Ht&&bt.render(v),Ma(p,v,D);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(E,v,D),te.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],nt===!0&&tt.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Vs(v,D,B,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){k&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ct);const ct=q.update(v),_t=v.material;_t.visible&&p.push(v,ct,_t,B,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){const ct=q.update(v),_t=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ot.copy(ct.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(Ct)),Array.isArray(_t)){const xt=ct.groups;for(let wt=0,Dt=xt.length;wt<Dt;wt++){const vt=xt[wt],qt=_t[vt.materialIndex];qt&&qt.visible&&p.push(v,ct,qt,B,Ot.z,vt)}}else _t.visible&&p.push(v,ct,_t,B,Ot.z,null)}}const et=v.children;for(let ct=0,_t=et.length;ct<_t;ct++)Vs(et[ct],D,B,k)}function Ma(v,D,B,k){const N=v.opaque,et=v.transmissive,ct=v.transparent;d.setupLightsView(B),nt===!0&&tt.setGlobalState(E.clippingPlanes,B),k&&At.viewport(w.copy(k)),N.length>0&&ts(N,D,B),et.length>0&&ts(et,D,B),ct.length>0&&ts(ct,D,B),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ta(v,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ji:mn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const et=d.state.transmissionRenderTarget[k.id],ct=k.viewport||w;et.setSize(ct.z,ct.w);const _t=E.getRenderTarget();E.setRenderTarget(et),E.getClearColor(X),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),Ht&&bt.render(B);const xt=E.toneMapping;E.toneMapping=Cn;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),nt===!0&&tt.setGlobalState(E.clippingPlanes,k),ts(v,B,k),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,qt=D.length;vt<qt;vt++){const ee=D[vt],se=ee.object,Ce=ee.geometry,Yt=ee.material,Mt=ee.group;if(Yt.side===dn&&se.layers.test(k.layers)){const sn=Yt.side;Yt.side=Pe,Yt.needsUpdate=!0,ya(se,B,k,Ce,Yt,Mt),Yt.side=sn,Yt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}E.setRenderTarget(_t),E.setClearColor(X,j),wt!==void 0&&(k.viewport=wt),E.toneMapping=xt}function ts(v,D,B){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,et=v.length;N<et;N++){const ct=v[N],_t=ct.object,xt=ct.geometry,wt=k===null?ct.material:k,Dt=ct.group;_t.layers.test(B.layers)&&ya(_t,D,B,xt,wt,Dt)}}function ya(v,D,B,k,N,et){v.onBeforeRender(E,D,B,k,N,et),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(E,D,B,k,v,et),N.transparent===!0&&N.side===dn&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,E.renderBufferDirect(B,D,k,N,v,et),N.side=wn,N.needsUpdate=!0,E.renderBufferDirect(B,D,k,N,v,et),N.side=dn):E.renderBufferDirect(B,D,k,N,v,et),v.onAfterRender(E,D,B,k,N,et)}function es(v,D,B){D.isScene!==!0&&(D=oe);const k=yt.get(v),N=d.state.lights,et=d.state.shadowsArray,ct=N.state.version,_t=Et.getParameters(v,N.state,et,D,B),xt=Et.getProgramCacheKey(_t);let wt=k.programs;k.environment=v.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(v.isMeshStandardMaterial?O:_).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Pt),wt=new Map,k.programs=wt);let Dt=wt.get(xt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ct)return ba(v,_t),Dt}else _t.uniforms=Et.getUniforms(v),v.onBeforeCompile(_t,E),Dt=Et.acquireProgram(_t,xt),wt.set(xt,Dt),k.uniforms=_t.uniforms;const vt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=tt.uniform),ba(v,_t),k.needsLights=vl(v),k.lightsStateVersion=ct,k.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.directionalShadowMap.value=N.state.directionalShadowMap,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotShadowMap.value=N.state.spotShadowMap,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMap.value=N.state.pointShadowMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Aa(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Is.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ba(v,D){const B=yt.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function _l(v,D,B,k,N){D.isScene!==!0&&(D=oe),A.resetTextureUnits();const et=D.fog,ct=k.isMeshStandardMaterial?D.environment:null,_t=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Di,xt=(k.isMeshStandardMaterial?O:_).get(k.envMap||ct),wt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),vt=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,ee=!!B.morphAttributes.color;let se=Cn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(se=E.toneMapping);const Ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=Ce!==void 0?Ce.length:0,Mt=yt.get(k),sn=d.state.lights;if(nt===!0&&(St===!0||v!==S)){const Oe=v===S&&k.id===M;tt.setState(k,v,Oe)}let $t=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==sn.state.version||Mt.outputColorSpace!==_t||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==xt||k.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==wt||Mt.vertexTangents!==Dt||Mt.morphTargets!==vt||Mt.morphNormals!==qt||Mt.morphColors!==ee||Mt.toneMapping!==se||Mt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,Mt.__version=k.version);let Ve=Mt.currentProgram;$t===!0&&(Ve=es(k,D,N));let Kn=!1,Le=!1,Fi=!1;const re=Ve.getUniforms(),Je=Mt.uniforms;if(At.useProgram(Ve.program)&&(Kn=!0,Le=!0,Fi=!0),k.id!==M&&(M=k.id,Le=!0),Kn||S!==v){At.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),Tc(at),yc(at),re.setValue(U,"projectionMatrix",at)):re.setValue(U,"projectionMatrix",v.projectionMatrix),re.setValue(U,"viewMatrix",v.matrixWorldInverse);const gn=re.map.cameraPosition;gn!==void 0&&gn.setValue(U,It.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&re.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Le=!0,Fi=!0)}if(N.isSkinnedMesh){re.setOptional(U,N,"bindMatrix"),re.setOptional(U,N,"bindMatrixInverse");const Oe=N.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),re.setValue(U,"boneTexture",Oe.boneTexture,A))}N.isBatchedMesh&&(re.setOptional(U,N,"batchingTexture"),re.setValue(U,"batchingTexture",N._matricesTexture,A),re.setOptional(U,N,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",N._indirectTexture,A),re.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",N._colorsTexture,A));const Oi=B.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Rt.update(N,B,Ve),(Le||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,re.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Je.envMap.value=xt,Je.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Je.envMapIntensity.value=D.environmentIntensity),Le&&(re.setValue(U,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&xl(Je,Fi),et&&k.fog===!0&&ot.refreshFogUniforms(Je,et),ot.refreshMaterialUniforms(Je,k,z,J,d.state.transmissionRenderTarget[v.id]),Is.upload(U,Aa(Mt),Je,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Is.upload(U,Aa(Mt),Je,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&re.setValue(U,"center",N.center),re.setValue(U,"modelViewMatrix",N.modelViewMatrix),re.setValue(U,"normalMatrix",N.normalMatrix),re.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Oe=k.uniformsGroups;for(let gn=0,_n=Oe.length;gn<_n;gn++){const Ca=Oe[gn];P.update(Ca,Ve),P.bind(Ca,Ve)}}return Ve}function xl(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function vl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,D,B){yt.get(v.texture).__webglTexture=D,yt.get(v.depthTexture).__webglTexture=B;const k=yt.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const B=yt.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,B=0){L=v,b=D,R=B;let k=!0,N=null,et=!1,ct=!1;if(v){const xt=yt.get(v);if(xt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(v);else if(xt.__hasExternalTextures)A.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const vt=v.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&yt.has(vt)&&(v.width!==vt.image.width||v.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);const Dt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?N=Dt[D][B]:N=Dt[D],et=!0):v.samples>0&&A.useMultisampledRTT(v)===!1?N=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[B]:N=Dt,w.copy(v.viewport),V.copy(v.scissor),G=v.scissorTest}else w.copy(Tt).multiplyScalar(z).floor(),V.copy(Ft).multiplyScalar(z).floor(),G=Qt;if(At.bindFramebuffer(U.FRAMEBUFFER,N)&&k&&At.drawBuffers(v,N),At.viewport(w),At.scissor(V),At.setScissorTest(G),et){const xt=yt.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,B)}else if(ct){const xt=yt.get(v.texture),wt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,wt)}M=-1},this.readRenderTargetPixels=function(v,D,B,k,N,et,ct){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){At.bindFramebuffer(U.FRAMEBUFFER,_t);try{const xt=v.texture,wt=xt.format,Dt=xt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&B>=0&&B<=v.height-N&&U.readPixels(D,B,k,N,Nt.convert(wt),Nt.convert(Dt),et)}finally{const xt=L!==null?yt.get(L).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,k,N,et,ct){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const xt=v.texture,wt=xt.format,Dt=xt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-k&&B>=0&&B<=v.height-N){At.bindFramebuffer(U.FRAMEBUFFER,_t);const vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,B,k,N,Nt.convert(wt),Nt.convert(Dt),0);const qt=L!==null?yt.get(L).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,qt);const ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Mc(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(vt),U.deleteSync(ee),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,B=0){v.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(v.image.width*k),et=Math.floor(v.image.height*k),ct=D!==null?D.x:0,_t=D!==null?D.y:0;A.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ct,_t,N,et),At.unbindTexture()},this.copyTextureToTexture=function(v,D,B=null,k=null,N=0){v.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let et,ct,_t,xt,wt,Dt,vt,qt,ee;const se=v.isCompressedTexture?v.mipmaps[N]:v.image;B!==null?(et=B.max.x-B.min.x,ct=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,wt=B.min.y,Dt=B.isBox3?B.min.z:0):(et=se.width,ct=se.height,_t=se.depth||1,xt=0,wt=0,Dt=0),k!==null?(vt=k.x,qt=k.y,ee=k.z):(vt=0,qt=0,ee=0);const Ce=Nt.convert(D.format),Yt=Nt.convert(D.type);let Mt;D.isData3DTexture?(A.setTexture3D(D,0),Mt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Mt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Mt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const sn=U.getParameter(U.UNPACK_ROW_LENGTH),$t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ve=U.getParameter(U.UNPACK_SKIP_PIXELS),Kn=U.getParameter(U.UNPACK_SKIP_ROWS),Le=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);const Fi=v.isDataArrayTexture||v.isData3DTexture,re=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Je=yt.get(v),Oi=yt.get(D),Oe=yt.get(Je.__renderTarget),gn=yt.get(Oi.__renderTarget);At.bindFramebuffer(U.READ_FRAMEBUFFER,Oe.__webglFramebuffer),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let _n=0;_n<_t;_n++)Fi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,N,Dt+_n),v.isDepthTexture?(re&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(D).__webglTexture,N,ee+_n),U.blitFramebuffer(xt,wt,et,ct,vt,qt,et,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):re?U.copyTexSubImage3D(Mt,N,vt,qt,ee+_n,xt,wt,et,ct):U.copyTexSubImage2D(Mt,N,vt,qt,ee+_n,xt,wt,et,ct);At.bindFramebuffer(U.READ_FRAMEBUFFER,null),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(Mt,N,vt,qt,ee,et,ct,_t,Ce,Yt,se.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,N,vt,qt,ee,et,ct,_t,Ce,se.data):U.texSubImage3D(Mt,N,vt,qt,ee,et,ct,_t,Ce,Yt,se):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,vt,qt,et,ct,Ce,Yt,se.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,vt,qt,se.width,se.height,Ce,se.data):U.texSubImage2D(U.TEXTURE_2D,N,vt,qt,et,ct,Ce,Yt,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,sn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le),N===0&&D.generateMipmaps&&U.generateMipmap(Mt),At.unbindTexture()},this.copyTextureToTexture3D=function(v,D,B=null,k=null,N=0){return v.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,v=arguments[2],D=arguments[3],N=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,B,k,N)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&A.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?A.setTextureCube(v,0):v.isData3DTexture?A.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?A.setTexture2DArray(v,0):A.setTexture2D(v,0),At.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,At.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class _a{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Up extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new le,this.environmentIntensity=1,this.environmentRotation=new le,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ds=new C,Ls=new C,Ro=new ne,Hi=new fa,Ts=new Os,gr=new C,wo=new C;class Fp extends pe{constructor(t=new Ze,e=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ds.fromBufferAttribute(e,s-1),Ls.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ds.distanceTo(Ls);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=r,t.ray.intersectsSphere(Ts)===!1)return;Ro.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const d=h.getX(x),T=h.getX(x+1),y=ys(this,t,Hi,l,d,T);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(m),d=ys(this,t,Hi,l,x,p);d&&e.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const d=ys(this,t,Hi,l,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=ys(this,t,Hi,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ys(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ds.fromBufferAttribute(a,s),Ls.fromBufferAttribute(a,r),e.distanceSqToSegment(Ds,Ls,gr,wo)>n)return;gr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gr);if(!(l<t.near||l>t.far))return{distance:l,point:wo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class xe extends Me{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class je extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const x=[],p=n/2;let d=0;T(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(m,2));function T(){const E=new C,F=new C;let b=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const M=[],S=L/r,w=S*(e-t)+t;for(let V=0;V<=s;V++){const G=V/s,X=G*l+o,j=Math.sin(X),W=Math.cos(X);F.x=w*j,F.y=-S*n+p,F.z=w*W,u.push(F.x,F.y,F.z),E.set(j,R,W).normalize(),f.push(E.x,E.y,E.z),m.push(G,1-S),M.push(g++)}x.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const S=x[M][L],w=x[M+1][L],V=x[M+1][L+1],G=x[M][L+1];(t>0||M!==0)&&(h.push(S,w,G),b+=3),(e>0||M!==r-1)&&(h.push(w,V,G),b+=3)}c.addGroup(d,b,0),d+=b}function y(E){const F=g,b=new Xt,R=new C;let L=0;const M=E===!0?t:e,S=E===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let V=0;V<=s;V++){const X=V/s*l+o,j=Math.cos(X),W=Math.sin(X);R.x=M*W,R.y=p*S,R.z=M*j,u.push(R.x,R.y,R.z),f.push(0,S,0),b.x=j*.5+.5,b.y=W*.5*S+.5,m.push(b.x,b.y),g++}for(let V=0;V<s;V++){const G=F+V,X=w+V;E===!0?h.push(X,X+1,G):h.push(X+1,X,G),L+=3}c.addGroup(d,L,E===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ks extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,m=[],g=[],x=[],p=[];for(let d=0;d<=n;d++){const T=[],y=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let F=0;F<=e;F++){const b=F/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(b+E,1-y),T.push(c++)}h.push(T)}for(let d=0;d<n;d++)for(let T=0;T<e;T++){const y=h[d][T+1],E=h[d][T],F=h[d+1][T],b=h[d+1][T+1];(d!==0||a>0)&&m.push(y,E,b),(d!==n-1||l<Math.PI)&&m.push(E,F,b)}this.setIndex(m),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dt extends Ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new le,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Io={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Op{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Bp=new Op;class xa{constructor(t){this.manager=t!==void 0?t:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class kp extends xa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Io.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ji("img");function l(){h(),Io.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Zi extends xa{constructor(t){super(t)}load(t,e,n,s){const r=new Me,a=new kp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Gs extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const _r=new ne,Po=new C,Do=new C;class va{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Po.setFromMatrixPosition(t.matrixWorld),e.position.copy(Po),Do.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Do),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends va{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ri*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Vp extends Gs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Lo=new ne,zi=new C,xr=new C;class Hp extends va{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(zi),xr.copy(n.position),xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xr),n.updateMatrixWorld(),s.makeTranslation(-zi.x,-zi.y,-zi.z),Lo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo)}}class zp extends Gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wp extends va{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qp extends Gs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=No(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=No();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function No(){return performance.now()}const Uo=new ne;class $p{constructor(t,e,n=0,s=1/0){this.ray=new fa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uo),this}intersectObject(t,e=!0,n=[]){return sa(t,this,n,e),n.sort(Fo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sa(t[s],this,n,e);return n.sort(Fo),n}}function Fo(i,t){return i.distance-t.distance}function sa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)sa(r[a],t,e,!0)}}class Kp extends $n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);class jp{scene;camera;renderer;xrRig;clock;updatables=new Set;container;constructor(t="app"){const e=document.getElementById(t);if(!e)throw new Error(`Contenedor DOM con id '${t}' no encontrado.`);this.container=e,this.clock=new Yp,this.scene=new Up,this.scene.background=new Vt(463134),this.scene.fog=new _a(463134,.035);const n=window.innerWidth/window.innerHeight;this.camera=new Ie(75,n,.05,50),this.camera.position.set(0,1.65,-1.2),this.camera.lookAt(0,1.3,.5),this.xrRig=new ae,this.xrRig.name="XR_Rig",this.xrRig.add(this.camera),this.scene.add(this.xrRig),this.renderer=new Np({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ko,this.renderer.toneMapping=Vo,this.renderer.toneMappingExposure=1.1,this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this)),this.setupLighting(),this.startLoop()}setupLighting(){const t=new qp(14412542,.85);this.scene.add(t);const e=new Vp(16777215,2.5);e.position.set(0,3.1,.2),e.target.position.set(0,1,.2),e.angle=Math.PI/3,e.penumbra=.5,e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=5,e.shadow.bias=-.001,this.scene.add(e),this.scene.add(e.target);const n=new Xp(14870768,.6);n.position.set(2,2.8,-2),this.scene.add(n)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}addUpdatable(t){this.updatables.add(t)}removeUpdatable(t){this.updatables.delete(t)}startLoop(){this.renderer.setAnimationLoop((t,e)=>{const n=Math.min(this.clock.getDelta(),.1),s=this.clock.getElapsedTime();for(const r of this.updatables)r(n,s);this.renderer.render(this.scene,this.camera)})}}class Pi{static createButton(t,e={}){const n=document.createElement("button");function s(){let c=null;async function h(m){m.addEventListener("end",u),await t.xr.setSession(m),n.textContent="EXIT VR",c=m}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(m=>{console.warn(m)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="VR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?s():a(),c&&Pi.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Pi.xrSessionIsGranted=!0})}}}Pi.xrSessionIsGranted=!1;Pi.registerSessionGrantedListener();class pi{static instance;listeners=new Map;constructor(){}static getInstance(){return pi.instance||(pi.instance=new pi),pi.instance}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this.listeners.get(t);n&&(n.delete(e),n.size===0&&this.listeners.delete(t))}emit(t,e){const n=this.listeners.get(t);n&&n.forEach(s=>{try{s(e)}catch(r){console.error(`[EventBus] Error in handler for event '${t}':`,r)}})}}const I=pi.getInstance();class Zp{isXRPresenting=!1;controllers=[];hands=[];renderer;xrRig;constructor(t,e){this.renderer=t,this.xrRig=e,this.setupVRButton(),this.setupControllers(),this.setupHands(),this.setupSessionListeners()}setupVRButton(){const t=Pi.createButton(this.renderer);t.id="VRButton",document.body.appendChild(t);const e=()=>{t.textContent&&t.textContent.toUpperCase().includes("ENTER")?t.classList.add("vr-ready"):t.classList.remove("vr-ready")};e(),new MutationObserver(e).observe(t,{childList:!0,characterData:!0,subtree:!0})}setupControllers(){const t=()=>{const e=new Ze().setFromPoints([new C(0,0,0),new C(0,0,-2.5)]),n=new gl({color:30453,transparent:!0,opacity:.75}),s=new Fp(e,n);return s.name="LaserRay",s};for(let e=0;e<2;e++){const n=this.renderer.xr.getController(e),s=t();n.add(s),this.xrRig.add(n);const r=this.renderer.xr.getControllerGrip(e),a=new Q(new je(.02,.025,.12),new dt({color:1976635,roughness:.5,metalness:.8}));a.rotation.x=Math.PI/4,r.add(a),this.xrRig.add(r),n.addEventListener("selectstart",()=>{I.emit("VR_TRIGGER_DOWN",{controllerIndex:e,controller:n})}),n.addEventListener("selectend",()=>{I.emit("VR_TRIGGER_UP",{controllerIndex:e,controller:n})}),n.addEventListener("squeezestart",()=>{I.emit("VR_GRIP_DOWN",{controllerIndex:e,controller:n})}),n.addEventListener("squeezeend",()=>{I.emit("VR_GRIP_UP",{controllerIndex:e,controller:n})}),this.controllers.push({index:e,controller:n,grip:r,ray:s})}}setupHands(){for(let t=0;t<2;t++){const e=this.renderer.xr.getHand(t);this.xrRig.add(e),this.hands.push(e),e.addEventListener("pinchstart",()=>{I.emit("VR_HAND_PINCH_START",{handIndex:t,hand:e})}),e.addEventListener("pinchend",()=>{I.emit("VR_HAND_PINCH_END",{handIndex:t,hand:e})})}}setupSessionListeners(){this.renderer.xr.addEventListener("sessionstart",()=>{this.isXRPresenting=!0,this.xrRig.position.set(0,0,-1.35),this.xrRig.rotation.y=Math.PI,console.log("[XRManager] WebXR Session activa en Meta Quest / Visor con calibración de operador."),I.emit("XR_SESSION_STATE",!0),I.emit("SIMULATION_STARTED");const t=document.getElementById("blocker");t&&(t.style.display="none")}),this.renderer.xr.addEventListener("sessionend",()=>{this.isXRPresenting=!1,this.xrRig.position.set(0,0,0),this.xrRig.rotation.y=0,console.log("[XRManager] WebXR Session finalizada."),I.emit("XR_SESSION_STATE",!1)})}getActiveRaycasters(){const t=[];for(const e of this.controllers){const n=new ne;n.identity().extractRotation(e.controller.matrixWorld);const s=new C;e.controller.getWorldPosition(s);const r=new C(0,0,-1).applyMatrix4(n);t.push({origin:s,direction:r})}return t}getControllerGamepads(){const t=this.renderer.xr.getSession();if(!t)return{};const e={};for(const n of t.inputSources)n.gamepad&&(n.handedness==="right"?e.right=n.gamepad:n.handedness==="left"&&(e.left=n.gamepad));return e}updateLocomotion(t){if(!this.isXRPresenting)return;const{left:e,right:n}=this.getControllerGamepads();if(e&&e.axes&&e.axes.length>=4){const s=e.axes[2],r=e.axes[3],a=.15;if(Math.abs(s)>a||Math.abs(r)>a){const o=2*t,l=new C;this.renderer.xr.getCamera().getWorldDirection(l),l.y=0,l.normalize();const c=new C;c.crossVectors(l,new C(0,1,0)).normalize(),this.xrRig.position.addScaledVector(l,-r*o),this.xrRig.position.addScaledVector(c,s*o),this.xrRig.position.x=be.clamp(this.xrRig.position.x,-2.4,2.4),this.xrRig.position.z=be.clamp(this.xrRig.position.z,-3.4,-.6)}}if(n&&n.axes&&n.axes.length>=4){const s=n.axes[2];Math.abs(s)>.35&&(this.xrRig.rotation.y-=s*1.5*t)}}}class Jp{group;constructor(){this.group=new ae,this.group.name="Room_PC_PUMA",this.createFloor(),this.createCeiling(),this.createWalls(),this.createInstitutionalSign(),this.createCeilingLamps(),this.createStudentZonePlaceholders()}createFloor(){const t=new de(8,8,32,32),e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#E2E8F0",n.fillRect(0,0,512,512),n.strokeStyle="#CBD5E1",n.lineWidth=4;const s=64;for(let c=0;c<=512;c+=s)n.beginPath(),n.moveTo(c,0),n.lineTo(c,512),n.stroke();for(let c=0;c<=512;c+=s)n.beginPath(),n.moveTo(0,c),n.lineTo(512,c),n.stroke();const r=new xe(e);r.wrapS=Wn,r.wrapT=Wn,r.repeat.set(4,4);const a=new dt({map:r,roughness:.45,metalness:.1});new Zi().load("textures/floor_tiles.png",c=>{c.wrapS=Wn,c.wrapT=Wn,c.repeat.set(4,4),a.map=c,a.needsUpdate=!0},void 0,()=>{});const l=new Q(t,a);l.rotation.x=-Math.PI/2,l.receiveShadow=!0,this.group.add(l)}createCeiling(){const t=new de(8,8),e=new dt({color:16317180,roughness:.8}),n=new Q(t,e);n.position.y=3.2,n.rotation.x=Math.PI/2,this.group.add(n)}createWalls(){const s=new dt({color:15659766,roughness:.85}),r=new dt({color:11081,roughness:.6}),a=new dt({color:13999887,roughness:.4,metalness:.3}),o=(l,c,h)=>{const u=new Q(new gt(8,3.2,.2),s);u.position.set(l,3.2/2,c),u.rotation.y=h,u.receiveShadow=!0,this.group.add(u);const f=new Q(new gt(8,.25,.2+.01),r);f.position.set(l,1.3,c),f.rotation.y=h,this.group.add(f);const m=new Q(new gt(8,.05,.2+.012),a);m.position.set(l,1.45,c),m.rotation.y=h,this.group.add(m);const g=new Q(new gt(8,.12,.2+.015),new dt({color:3359061,roughness:.7}));g.position.set(l,.06,c),g.rotation.y=h,this.group.add(g)};o(0,-4,0),o(0,4,0),o(-4,0,Math.PI/2),o(4,0,Math.PI/2)}createInstitutionalSign(){const t=document.createElement("canvas");t.width=1024,t.height=256;const e=t.getContext("2d");e.fillStyle="#002B49",e.fillRect(0,0,1024,256),e.strokeStyle="#D59F0F",e.lineWidth=12,e.strokeRect(6,6,1012,244),e.fillStyle="#D59F0F",e.font="bold 36px sans-serif",e.textAlign="center",e.fillText("UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO",512,60),e.fillStyle="#FFFFFF",e.font="900 80px sans-serif",e.fillText("PC PUMA",512,150),e.fillStyle="#94A3B8",e.font="600 30px sans-serif",e.fillText("MÓDULO DE PRÉSTAMO Y OPERACIÓN TECNOLÓGICA",512,205);const n=new xe(t),s=new de(3.2,.8),r=new dt({map:n,roughness:.3,metalness:.1}),a=new Zi;a.load("images/wall_banner.png",f=>{r.map=f,r.needsUpdate=!0},void 0,()=>{});const o=new Q(s,r);o.position.set(0,2.3,-3.88),this.group.add(o);const l=document.createElement("canvas");l.width=512,l.height=768;const c=l.getContext("2d");c.fillStyle="#FFFFFF",c.fillRect(0,0,512,768),c.strokeStyle="#0076F5",c.lineWidth=12,c.strokeRect(6,6,500,756),c.fillStyle="#003B7A",c.font="bold 30px sans-serif",c.textAlign="center",c.fillText("REGLAMENTO OFICIAL",256,55),c.font="bold 22px sans-serif",c.fillText("PROGRAMA PC PUMA UNAM",256,95),c.fillStyle="#475569",c.font="16px sans-serif",c.textAlign="left",c.fillText("• Préstamo máximo: 2 horas por turno.",40,160),c.fillText("• Presentar credencial UNAM vigente.",40,200),c.fillText("• Peritaje de 5 puntos al recibir el equipo.",40,240),c.fillText("• Resguardo y carga obligatoria en Carro 01.",40,280),c.fillText("• Cualquier anomalía debe reportarse al operador.",40,320);const h=new dt({map:new xe(l),roughness:.35});a.load("images/poster_rules.png",f=>{h.map=f,h.needsUpdate=!0},void 0,()=>{});const u=new Q(new de(.85,1.25),h);u.position.set(-3.88,1.85,-.6),u.rotation.y=Math.PI/2,this.group.add(u)}createCeilingLamps(){const t=[[-1.8,3.18,-1.5],[1.8,3.18,-1.5],[-1.8,3.18,1.8],[1.8,3.18,1.8]],e=new gt(1.2,.05,.6),n=new dt({color:16777215,emissive:16317180,emissiveIntensity:.9,roughness:.2});t.forEach(([s,r,a])=>{const o=new Q(e,n);o.position.set(s,r,a),this.group.add(o)})}createStudentZonePlaceholders(){const t=new dt({color:13358561,roughness:.5}),e=new dt({color:3359061,roughness:.3,metalness:.7}),n=(o,l)=>{const c=new ae,h=new Q(new gt(1.8,.06,.9),t);h.position.y=.74,h.castShadow=!0,h.receiveShadow=!0,c.add(h),[[-.82,.36,-.37],[.82,.36,-.37],[-.82,.36,.37],[.82,.36,.37]].forEach(([f,m,g])=>{const x=new Q(new je(.025,.025,.72),e);x.position.set(f,m,g),x.castShadow=!0,c.add(x)}),c.position.set(o,0,l),this.group.add(c)},s=new dt({color:11081,roughness:.5}),r=new dt({color:1976635,metalness:.8,roughness:.3}),a=(o,l,c=0)=>{const h=new ae,u=new Q(new gt(.42,.04,.42),s);u.position.y=.44,u.castShadow=!0,h.add(u);const f=new Q(new gt(.42,.35,.03),s);f.position.set(0,.7,-.19),f.castShadow=!0,h.add(f),[[-.18,.22,-.18],[.18,.22,-.18],[-.18,.22,.18],[.18,.22,.18]].forEach(([g,x,p])=>{const d=new Q(new je(.015,.015,.44),r);d.position.set(g,x,p),d.castShadow=!0,h.add(d)}),[-.18,.18].forEach(g=>{const x=new Q(new je(.012,.012,.28),r);x.position.set(g,.56,-.19),h.add(x)}),h.position.set(o,0,l),h.rotation.y=c,this.group.add(h)};n(-1.6,2.6),n(1.6,2.6),a(-1.6,2.05,0),a(-1.6,3.15,Math.PI),a(1.6,2.05,0),a(1.6,3.15,Math.PI),this.createEntranceDoor()}createEntranceDoor(){const t=new ae,e=new dt({color:11081,roughness:.4}),n=new dt({color:14870768,roughness:.6}),s=new dt({color:3718648,roughness:.1,transparent:!0,opacity:.55}),r=new Q(new gt(1.4,2.4,.05),n);r.position.set(0,1.2,0),t.add(r);const a=new Q(new gt(.44,.95,.06),s);a.position.set(-.32,1.35,0),t.add(a);const o=new Q(new gt(.44,.95,.06),s);o.position.set(.32,1.35,0),t.add(o);const l=new Q(new gt(1.5,2.5,.07),e);l.position.set(0,1.25,-.01),t.add(l);const c=document.createElement("canvas");c.width=512,c.height=128;const h=c.getContext("2d");h.fillStyle="#002B49",h.fillRect(0,0,512,128),h.strokeStyle="#D59F0F",h.lineWidth=6,h.strokeRect(3,3,506,122),h.fillStyle="#10B981",h.font="bold 30px sans-serif",h.textAlign="center",h.fillText("ACCESO GENERAL",256,48),h.fillStyle="#FFFFFF",h.font="bold 22px sans-serif",h.fillText("SALA DE ESTUDIO PC PUMA",256,92);const u=new xe(c),f=new Q(new de(1.2,.3),new In({map:u}));f.position.set(0,2.62,-.04),f.rotation.y=Math.PI,t.add(f),t.position.set(.65,0,3.88),this.group.add(t)}}class Qp{group;deliverySurfaceY=1.05;credentialTrayWorldPos=new C(.38,1.08,.12);trayBorderMat;constructor(){this.group=new ae,this.group.name="Counter_PC_PUMA",this.createMainCounter(),this.createDeliveryZone(),this.createCredentialTray(),this.createSideCounter(),I.on("CREDENTIAL_TRAY_HIGHLIGHT",t=>{this.setTrayHighlight(t)})}createMainCounter(){const s=new dt({color:11081,roughness:.5,metalness:.1}),r=new Q(new gt(3.2,1.05,.75),s);r.position.set(0,1.05/2,0),r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const a=new dt({color:15857145,roughness:.25,metalness:.15}),o=new Q(new gt(3.2+.1,.05,.75+.1),a);o.position.set(0,1.05+.025,0),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const l=new dt({color:13999887,roughness:.3,metalness:.4}),c=new Q(new gt(3.2,.06,.02),l);c.position.set(0,.85,.75/2+.01),this.group.add(c);const h=document.createElement("canvas");h.width=512,h.height=128;const u=h.getContext("2d");u.fillStyle="#002B49",u.fillRect(0,0,512,128),u.fillStyle="#D59F0F",u.font="bold 44px sans-serif",u.textAlign="center",u.fillText("• PC PUMA •",256,75);const f=new xe(h),m=new Q(new de(1.2,.3),new dt({map:f,roughness:.4}));m.position.set(0,.55,.75/2+.01),this.group.add(m)}createDeliveryZone(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#1E293B",e.fillRect(0,0,512,512),e.strokeStyle="#D59F0F",e.lineWidth=8,e.setLineDash([20,10]),e.strokeRect(10,10,492,492),e.fillStyle="#E2E8F0",e.font="bold 28px sans-serif",e.textAlign="center",e.fillText("ZONA DE ENTREGA",256,230),e.fillText("Y RECEPCIÓN",256,270);const n=new xe(t),s=new Q(new de(.7,.5),new dt({map:n,roughness:.6}));s.rotation.x=-Math.PI/2,s.position.set(.65,1.077,.05),s.receiveShadow=!0,this.group.add(s)}createCredentialTray(){const n=document.createElement("canvas");n.width=512,n.height=384;const s=n.getContext("2d");s.fillStyle="#001E33",s.fillRect(0,0,512,384),s.strokeStyle="#D59F0F",s.lineWidth=12,s.strokeRect(8,8,496,368),s.fillStyle="#D59F0F",s.font="bold 36px sans-serif",s.textAlign="center",s.fillText("🪪 BANDEJA DE ENTREGA",256,115),s.fillStyle="#FFFFFF",s.font="bold 28px sans-serif",s.fillText("DEVOLVER CREDENCIAL",256,195),s.fillStyle="#10B981",s.font="bold 22px monospace",s.fillText("▼ ENTREGAR / SOLTAR AQUÍ ▼",256,280);const r=new xe(n),a=new dt({map:r,roughness:.35,metalness:.2}),o=new Q(new de(.28,.2),a);o.rotation.x=-Math.PI/2,o.position.set(.38,1.078,.12),o.receiveShadow=!0,this.group.add(o),this.trayBorderMat=new dt({color:13999887,emissive:13999887,emissiveIntensity:.35,roughness:.3,metalness:.6});const l=new Q(new gt(.28+.02,.012,.2+.02),this.trayBorderMat);l.position.set(.38,1.074,.12),l.receiveShadow=!0,this.group.add(l)}setTrayHighlight(t){this.trayBorderMat&&(this.trayBorderMat.emissive.setHex(t?1096065:13999887),this.trayBorderMat.emissiveIntensity=t?.95:.35)}createSideCounter(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#1E293B",e.fillRect(0,0,512,512),e.strokeStyle="#F59E0B",e.lineWidth=14,e.strokeRect(8,8,496,496),e.fillStyle="#D59F0F",e.font="bold 32px sans-serif",e.textAlign="center",e.fillText("ESTACIÓN CARRO 01",256,120),e.fillStyle="#FFFFFF",e.font="bold 22px monospace",e.fillText("PC PUMA • RESGUARDO",256,256),e.fillText("Y RECARGA ACTIVA",256,290),e.fillStyle="#10B981",e.font="bold 20px monospace",e.fillText("ALIMENTACIÓN 120V OK",256,410);const n=new xe(t),s=new Q(new de(1.05,1.25),new dt({map:n,roughness:.6}));s.rotation.x=-Math.PI/2,s.position.set(-1.85,.002,-1.65),s.receiveShadow=!0,this.group.add(s);const r=new dt({color:16096779,roughness:.4,metalness:.5}),a=new Q(new gt(.04,.03,1.15),r);a.position.set(-2.28,.015,-1.65),a.castShadow=!0,this.group.add(a);const o=new dt({color:3359061,roughness:.5}),l=new Q(new gt(.12,.2,.08),o);l.position.set(-2.38,.65,-1.65),this.group.add(l);const c=new dt({color:1096065,emissive:1096065,emissiveIntensity:.9}),h=new Q(new ks(.012,8,8),c);h.position.set(-2.32,.7,-1.65),this.group.add(h)}}class tm{group;doorHinge;doorHandle;isDoorOpen=!1;targetDoorAngle=0;currentDoorAngle=0;slotLeds=[];bayHitboxes=[];slotLocalPositions=[];occupiedSlots=new Map;cartWidth=.88;cartHeight=1.28;cartDepth=.68;constructor(){this.group=new ae,this.group.name="StorageCart_01",this.buildCartBody(),this.buildSlots();const{hinge:t,handle:e}=this.buildFrontDoor();this.doorHinge=t,this.doorHandle=e,this.group.position.set(-1.85,0,-1.65),this.group.rotation.y=Math.PI/2,this.occupiedSlots.set(1,null),this.occupiedSlots.set(2,"laptop_02"),this.occupiedSlots.set(3,"laptop_03"),this.occupiedSlots.set(4,"laptop_04"),this.occupiedSlots.set(5,"laptop_05")}buildCartBody(){const t=this.cartWidth,e=this.cartHeight,n=this.cartDepth,s=new dt({color:7731,roughness:.4,metalness:.5}),r=new Q(new gt(t,.04,n),s);r.position.y=e,r.castShadow=!0,this.group.add(r);const a=document.createElement("canvas");a.width=512,a.height=128;const o=a.getContext("2d");o.fillStyle="#002B49",o.fillRect(0,0,512,128),o.fillStyle="#D59F0F",o.font="bold 36px sans-serif",o.textAlign="center",o.fillText("CARRO 01 • RESGUARDO",256,52),o.fillStyle="#FFFFFF",o.font="bold 22px monospace",o.fillText("PC PUMA TECNOLOGÍA UNAM",256,92);const l=new xe(a),c=new Q(new de(t*.85,.13),new dt({map:l,roughness:.4}));c.position.set(0,e+.085,n/2+.002),this.group.add(c);const h=new Q(new gt(t,.06,n),s);h.position.y=.14,h.castShadow=!0,this.group.add(h);const u=new Q(new gt(t,e-.14,.03),s);u.position.set(0,(e+.14)/2,-n/2+.015),u.castShadow=!0,this.group.add(u);const f=new Q(new gt(.03,e-.14,n),s);f.position.set(-t/2+.015,(e+.14)/2,0),f.castShadow=!0,this.group.add(f);const m=new Q(new gt(.03,e-.14,n),s);m.position.set(t/2-.015,(e+.14)/2,0),m.castShadow=!0,this.group.add(m);const g=new dt({color:1976635,roughness:.8});[[-t/2+.1,-n/2+.1],[t/2-.1,-n/2+.1],[-t/2+.1,n/2-.1],[t/2-.1,n/2-.1]].forEach(([T,y])=>{const E=new Q(new je(.055,.055,.04,16),g);E.rotation.z=Math.PI/2,E.position.set(T,.06,y),E.castShadow=!0,this.group.add(E)});const p=new dt({color:13999887,metalness:.8,roughness:.3}),d=new Q(new je(.018,.018,t*.75),p);d.rotation.z=Math.PI/2,d.position.set(0,e-.06,-n/2-.07),this.group.add(d)}buildSlots(){const t=new dt({color:3359061,metalness:.5,roughness:.5}),e=5,n=.28,s=.19;for(let r=0;r<e;r++){const a=n+r*s,o=new Q(new gt(.8,.015,.6),t);o.position.set(0,a,0),o.receiveShadow=!0,this.group.add(o);const l=new dt({color:4674921,metalness:.7,roughness:.3}),c=new Q(new gt(.01,.015,.35),l);c.position.set(-.2,a+.01,.02),this.group.add(c);const h=new Q(new gt(.01,.015,.35),l);h.position.set(.2,a+.01,.02),this.group.add(h),this.slotLocalPositions.push(new C(0,a+.015,.02));const u=new gt(.78,.17,.58),f=new In({visible:!1,transparent:!0,opacity:0}),m=new Q(u,f);m.position.set(0,a+.09,.02),m.userData={isBayHitbox:!0,slotIndex:r+1},this.group.add(m),this.bayHitboxes.push(m);const g=document.createElement("canvas");g.width=160,g.height=80;const x=g.getContext("2d");x.fillStyle="#0F172A",x.fillRect(0,0,160,80),x.strokeStyle="#D59F0F",x.lineWidth=4,x.strokeRect(4,4,152,72),x.fillStyle="#D59F0F",x.font="bold 36px monospace",x.textAlign="center",x.fillText(`0${r+1}`,80,52);const p=new xe(g),d=new Q(new de(.09,.045),new dt({map:p,roughness:.3}));d.position.set(-.32,a+.05,this.cartDepth/2-.035),this.group.add(d);let T=1096065,y=1096065,E=.9;r===0?(T=3359061,y=0,E=0):r===2&&(T=16096779,y=16096779);const F=new dt({color:T,emissive:y,emissiveIntensity:E}),b=new Q(new ks(.012,16,16),F);b.position.set(-.23,a+.05,this.cartDepth/2-.035),this.group.add(b),this.slotLeds.push(b)}}buildFrontDoor(){const t=new ae;t.position.set(-this.cartWidth/2+.015,(this.cartHeight+.14)/2,this.cartDepth/2),this.group.add(t);const e=this.cartWidth-.04,n=this.cartHeight-.18,s=new dt({color:1976635,roughness:.15,metalness:.1,transparent:!0,opacity:.55}),r=new Q(new gt(e,n,.014),s);r.position.set(e/2,0,0),r.castShadow=!0,t.add(r);const a=new dt({color:13999887,roughness:.2,metalness:.8}),o=new Q(new gt(.03,.24,.05),a);return o.position.set(e-.05,0,.035),o.name="CartDoor_Handle",t.add(o),{hinge:t,handle:o}}openDoor(){this.isDoorOpen||(this.isDoorOpen=!0,this.targetDoorAngle=-be.degToRad(110),I.emit("CART_DOOR_TOGGLED",!0))}closeDoor(){this.isDoorOpen&&(this.isDoorOpen=!1,this.targetDoorAngle=0,I.emit("CART_DOOR_TOGGLED",!1))}toggleDoor(){this.isDoorOpen?this.closeDoor():this.openDoor()}getSlotWorldPosition(t){const n=(this.slotLocalPositions[t-1]||this.slotLocalPositions[0]).clone();return this.group.localToWorld(n),n}getWorldEuler(){return new le(0,this.group.rotation.y,0)}getBayHitboxes(){return this.bayHitboxes}setSlotOccupied(t,e){this.occupiedSlots.set(t,e),e?e.includes("03")?this.setSlotLed(t,"maintenance"):this.setSlotLed(t,"charging"):this.setSlotLed(t,"empty")}isSlotOccupied(t){return!!this.occupiedSlots.get(t)}getFirstAvailableSlot(){for(let t=1;t<=5;t++)if(!this.isSlotOccupied(t))return t;return 1}setSlotLed(t,e){const n=this.slotLeds[t-1];if(!n)return;const s=n.material;e==="charging"||e==="full"?(s.color.setHex(1096065),s.emissive.setHex(1096065),s.emissiveIntensity=.9):e==="maintenance"?(s.color.setHex(16096779),s.emissive.setHex(16096779),s.emissiveIntensity=.9):(s.color.setHex(3359061),s.emissive.setHex(0),s.emissiveIntensity=0)}findNearestSlot(t,e=1.2){let n=-1,s=1/0;for(let r=1;r<=5;r++){const a=this.getSlotWorldPosition(r),o=t.distanceTo(a);o<s&&o<=e&&(s=o,n=r)}return n!==-1?{slotIndex:n,position:this.getSlotWorldPosition(n)}:null}update(t){this.currentDoorAngle=be.lerp(this.currentDoorAngle,this.targetDoorAngle,t*7),this.doorHinge.rotation.y=this.currentDoorAngle}}class mi{static instance;items=new Map;constructor(){this.initializeInventory()}static getInstance(){return mi.instance||(mi.instance=new mi),mi.instance}initializeInventory(){const t=[{id:"laptop_01",name:"Laptop 01",tag:"PC-PUMA-01",slotNumber:1,status:"EN_MOSTRADOR",batteryLevel:100,chargerOk:!0,hasPhysicalDamage:!1,notes:"Ubicada en zona de mostrador para pruebas"},{id:"laptop_02",name:"Laptop 02",tag:"PC-PUMA-02",slotNumber:2,status:"DISPONIBLE",batteryLevel:98,chargerOk:!0,hasPhysicalDamage:!1,notes:"Resguardada en Bahía 02 lista para préstamo"},{id:"laptop_03",name:"Laptop 03",tag:"PC-PUMA-03",slotNumber:3,status:"MANTENIMIENTO",batteryLevel:45,chargerOk:!0,hasPhysicalDamage:!0,notes:"En revisión de bisagra y actualización de software"},{id:"laptop_04",name:"Laptop 04",tag:"PC-PUMA-04",slotNumber:4,status:"DISPONIBLE",batteryLevel:100,chargerOk:!0,hasPhysicalDamage:!1,notes:"Resguardada en Bahía 04 lista para préstamo"},{id:"laptop_05",name:"Laptop 05",tag:"PC-PUMA-05",slotNumber:5,status:"DISPONIBLE",batteryLevel:95,chargerOk:!0,hasPhysicalDamage:!1,notes:"Resguardada en Bahía 05 lista para préstamo"}];for(const e of t)this.items.set(e.id,e)}getAllItems(){return Array.from(this.items.values())}getItem(t){return this.items.get(t)}updateStatus(t,e){const n=this.items.get(t);n&&n.status!==e&&(n.status=e,I.emit("INVENTORY_UPDATED",{item:n,allItems:this.getAllItems()}))}}const Rn=mi.getInstance();class gi{static instance;currentState="WAITING_STUDENT";currentLoan=null;metrics={completedLoans:0,inspectedReturns:0,incidentCount:0,mistakesCount:0,totalScore:0,efficiencyPercent:100};constructor(){this.setupListeners()}static getInstance(){return gi.instance||(gi.instance=new gi),gi.instance}setupListeners(){I.on("CREDENTIAL_SCANNED",()=>{(this.currentState==="WAITING_STUDENT"||this.currentState==="STUDENT_AT_COUNTER")&&this.setState("CREDENTIAL_SCANNED")}),I.on("USER_VALIDATION_TOGGLED",t=>{t&&this.setState("USER_VALIDATED")}),I.on("OBJECT_GRABBED",t=>{t.id.includes("laptop")&&(this.currentState==="USER_VALIDATED"||this.currentState==="EQUIPMENT_SELECTED")&&this.setState("EQUIPMENT_IN_HAND")}),I.on("INVENTORY_UPDATED",t=>{t.item.status==="EN_MOSTRADOR"&&(this.currentState==="EQUIPMENT_IN_HAND"||this.currentState==="USER_VALIDATED"||this.currentState==="EQUIPMENT_SELECTED")&&this.setState("EQUIPMENT_DELIVERED")}),I.on("STUDENT_RECEIVED_LAPTOP",t=>{const e=t.laptopId==="laptop_02"?"PC-PUMA-02":t.laptopId==="laptop_01"?"PC-PUMA-01":t.laptopId.toUpperCase();this.registerActiveLoan(t.laptopId,e,t.studentName,t.accountNumber,t.career)}),I.on("LAPTOP_RETURNED_TO_COUNTER",()=>{this.currentLoan&&(this.currentLoan.status="EN_REVISION"),this.setState("RETURN_PENDING_INSPECTION")}),I.on("INSPECTION_DECISION_MADE",t=>{this.currentLoan&&(this.currentLoan.inspectionVerdict=t,this.metrics.inspectedReturns++,t==="INCIDENCIA"&&this.metrics.incidentCount++),t==="BUEN_ESTADO"?this.setState("INSPECTED_CONFORME"):this.setState("INSPECTED_INCIDENCIA")}),I.on("INCIDENT_ACT_SIGNED",()=>{this.currentLoan&&(this.currentLoan.inspectionVerdict="INCIDENCIA"),this.setState("INSPECTED_INCIDENCIA")}),I.on("LAPTOP_SNAPPED_TO_CART",t=>{}),I.on("STUDENT_RECEIVED_CREDENTIAL_RETURN",()=>{this.currentLoan&&this.finalizeLoan()})}setState(t){this.currentState!==t&&(this.currentState=t,I.emit("LOAN_STATE_CHANGED",t),t==="EQUIPMENT_DELIVERED"&&this.registerActiveLoan("laptop_02","PC-PUMA-02"))}registerActiveLoan(t,e,n="Juan Pérez López",s="32145678",r="Facultad de Ingeniería"){const a=Math.floor(1e3+Math.random()*9e3);this.currentLoan={loanId:`PUMA-2026-${a}`,studentName:n,accountNumber:s,career:r,laptopId:t,laptopTag:e,startTime:new Date,durationSeconds:0,inspectionVerdict:null,status:"ACTIVO"},this.setState("LOAN_ACTIVE"),I.emit("LOAN_ACTIVE_STARTED",this.currentLoan)}requestReturn(){this.currentState==="LOAN_ACTIVE"&&(this.setState("RETURN_IN_PROGRESS"),I.emit("REQUEST_STUDENT_RETURN"))}finalizeLoan(){this.currentLoan&&(this.currentLoan.endTime=new Date,this.currentLoan.durationSeconds=Math.round((this.currentLoan.endTime.getTime()-this.currentLoan.startTime.getTime())/1e3),this.currentLoan.status="FINALIZADO",this.metrics.completedLoans++,this.metrics.totalScore=1250,this.metrics.efficiencyPercent=100,this.setState("LOAN_COMPLETED"),I.emit("LOAN_COMPLETED_SUCCESSFULLY",{loan:this.currentLoan,metrics:this.metrics}))}resetLoan(){this.currentLoan=null,this.metrics={completedLoans:0,inspectedReturns:0,incidentCount:0,mistakesCount:0,totalScore:1e3,efficiencyPercent:100},this.setState("WAITING_STUDENT")}}const fe=gi.getInstance();class _i{static instance;currentScore=1e3;streak=1;maxStreakReached=1;shiftTimeSeconds=0;isShiftActive=!1;completedLoans=0;inspectedReturns=0;detectedIncidents=0;mistakesCount=0;history=[];constructor(){this.setupListeners()}static getInstance(){return _i.instance||(_i.instance=new _i),_i.instance}setupListeners(){I.on("SIMULATION_STARTED",()=>{this.isShiftActive=!0}),I.on("CREDENTIAL_SCANNED",()=>{this.addPoints("Escaneo conforme de credencial NFC",50,!0)}),I.on("USER_VALIDATION_TOGGLED",t=>{t&&this.addPoints("Validación de matrícula y estatus regular en sistema",50,!0)}),I.on("STUDENT_RECEIVED_CREDENTIAL",()=>{this.addPoints("Devolución reglamentaria de credencial al alumno",50,!0)}),I.on("STUDENT_RECEIVED_LAPTOP",()=>{this.completedLoans++,this.addPoints("Préstamo y entrega de laptop conforme a protocolo",100,!0)}),I.on("INSPECTION_DECISION_MADE",t=>{this.inspectedReturns++,t==="INCIDENCIA"?(this.detectedIncidents++,this.addPoints("Detección y reporte oportuno de incidencia técnica",100,!0)):this.addPoints("Peritaje de 5 puntos conforme sin anomalías",100,!0)}),I.on("LAPTOP_SNAPPED_TO_CART",()=>{this.addPoints("Resguardo y conexión de recarga en Carro 01",50,!0)}),I.on("INCIDENT_ACT_SIGNED",()=>{this.addPoints("Levantamiento y firma de Acta de Incidencia Oficial UNAM (Art. 24)",150,!0)}),I.on("LOAN_REJECTED_SANCTION",()=>{this.addPoints("Detección de sanción previa y rechazo reglamentario (Art. 31)",100,!0)}),I.on("STUDENT_RECEIVED_CREDENTIAL_REJECTED",()=>{this.addPoints("Devolución reglamentaria de credencial tras rechazo",50,!0)}),I.on("STUDENT_RECEIVED_CREDENTIAL_RETURN",()=>{this.addPoints("Devolución final de credencial y cierre de trámite",50,!0),this.mistakesCount===0&&this.addPoints("Bono de Excelencia Operativa UNAM (Ciclo sin errores)",100,!1)})}addPoints(t,e,n=!0){const s=this.streak,r=e*s;this.currentScore+=r;const a={reason:t,points:r,multiplier:s,timestamp:this.getFormattedShiftTime()};this.history.unshift(a),n&&(this.streak=Math.min(5,this.streak+1),this.streak>this.maxStreakReached&&(this.maxStreakReached=this.streak)),I.emit("SCORE_UPDATED",{score:this.currentScore,streak:this.streak,added:r,reason:t}),I.emit("FLOATING_SCORE_DISPLAY",{text:`+${r} PTS`,streak:s>1?`RACHA x${s} 🔥`:void 0,isBonus:!0})}deductPoints(t,e){this.currentScore=Math.max(0,this.currentScore-e),this.streak=1,this.mistakesCount++;const n={reason:`[PENALIZACIÓN] ${t}`,points:-e,multiplier:1,timestamp:this.getFormattedShiftTime()};this.history.unshift(n),I.emit("SCORE_UPDATED",{score:this.currentScore,streak:this.streak,deducted:e,reason:t}),I.emit("FLOATING_SCORE_DISPLAY",{text:`-${e} PTS`,streak:"RACHA PERDIDA",isBonus:!1})}update(t){this.isShiftActive&&(this.shiftTimeSeconds+=t)}getFormattedShiftTime(){const t=Math.floor(this.shiftTimeSeconds),e=Math.floor(t/60),n=t%60,s=r=>r<10?"0"+r:""+r;return`${s(e)}:${s(n)}`}getOperatorRank(){return this.currentScore>=1800?"OPERADOR EXPERTO (EXCELENCIA UNAM)":this.currentScore>=1400?"OPERADOR SENIOR":this.currentScore>=1e3?"OPERADOR CAPACITADO":"OPERADOR EN INDUCCIÓN"}getEfficiencyPercent(){const e=this.mistakesCount*8;return Math.max(70,Math.min(100,100-e))}getSecurityPercent(){return this.mistakesCount===0?98:88}getInventoryPercent(){return 96}resetShift(){this.currentScore=1e3,this.streak=1,this.maxStreakReached=1,this.shiftTimeSeconds=0,this.isShiftActive=!0,this.completedLoans=0,this.inspectedReturns=0,this.detectedIncidents=0,this.mistakesCount=0,this.history=[],I.emit("SHIFT_RESET"),I.emit("SCORE_UPDATED",{score:this.currentScore,streak:1,added:0,reason:"Reinicio de turno"})}}const Zt=_i.getInstance();class em{config;group;leftLeg;rightLeg;leftKnee;rightKnee;leftArm;rightArm;head;torso;speechBubble;speechCanvas;speechCtx;speechTex;speechTimer=0;isWalking=!1;isSeated=!1;walkTime=0;targetPosition=null;walkSpeed=1.6;heldLaptop=null;constructor(t){this.config=t,this.group=new ae,this.group.name=`StudentNPC_${this.config.name.replace(/\s+/g,"_")}`,this.buildHumanoidModel(),this.buildSpeechBubble()}buildHumanoidModel(){const t=new dt({color:16109765,roughness:.6}),e=new dt({color:this.config.jacketColor,roughness:.5}),n=new dt({color:this.config.pantsColor,roughness:.6}),s=new dt({color:this.config.hairColor,roughness:.8}),r=new dt({color:16317180,roughness:.4}),a=new dt({color:3359061,roughness:.7});this.torso=new ae,this.torso.position.set(0,.82,0);const o=new Q(new gt(.38,.52,.22),e);o.position.y=.26,o.castShadow=!0,this.torso.add(o);const l=new Q(new gt(.384,.04,.224),new dt({color:13999887,metalness:.5,roughness:.4}));l.position.y=.22,this.torso.add(l);const c=new Q(new gt(.3,.38,.14),a);c.position.set(0,.28,-.16),c.castShadow=!0,this.torso.add(c);const h=new Q(new je(.06,.06,.08),t);h.position.y=.56,this.torso.add(h),this.group.add(this.torso),this.head=new ae,this.head.position.set(0,1.45,0);const u=new Q(new gt(.2,.22,.2),t);u.position.y=.11,u.castShadow=!0,this.head.add(u);const f=new Q(new gt(.22,.1,.22),s);f.position.y=.21,this.head.add(f);const m=new In({color:1976635}),g=new Q(new gt(.03,.03,.01),m);g.position.set(-.05,.12,.105),this.head.add(g);const x=new Q(new gt(.03,.03,.01),m);x.position.set(.05,.12,.105),this.head.add(x),this.group.add(this.head);const p=T=>{const y=new ae,E=T?-1:1;y.position.set(E*.24,1.34,0);const F=new Q(new gt(.1,.26,.11),e);F.position.y=-.13,F.castShadow=!0,y.add(F);const b=new Q(new gt(.08,.14,.09),t);return b.position.y=-.32,b.castShadow=!0,y.add(b),this.group.add(y),y};this.leftArm=p(!0),this.rightArm=p(!1);const d=T=>{const y=new ae,E=T?-1:1;y.position.set(E*.11,.82,0);const F=new Q(new gt(.12,.38,.13),n);F.position.y=-.19,F.castShadow=!0,y.add(F);const b=new ae;b.position.set(0,-.38,0);const R=new Q(new gt(.11,.38,.12),n);R.position.y=-.19,R.castShadow=!0,b.add(R);const L=new Q(new gt(.13,.09,.18),r);return L.position.set(0,-.38,.02),L.castShadow=!0,b.add(L),y.add(b),this.group.add(y),T?this.leftKnee=b:this.rightKnee=b,y};this.leftLeg=d(!0),this.rightLeg=d(!1)}buildSpeechBubble(){this.speechCanvas=document.createElement("canvas"),this.speechCanvas.width=512,this.speechCanvas.height=256,this.speechCtx=this.speechCanvas.getContext("2d"),this.speechTex=new xe(this.speechCanvas),this.speechTex.generateMipmaps=!1,this.speechTex.minFilter=Ye;const t=new In({map:this.speechTex,transparent:!0,depthWrite:!1});this.speechBubble=new Q(new de(1.2,.6),t),this.speechBubble.position.set(0,2.05,0),this.speechBubble.visible=!1,this.group.add(this.speechBubble)}say(t,e=4.5){const n=this.speechCtx,s=this.speechCanvas.width,r=this.speechCanvas.height;n.clearRect(0,0,s,r),n.fillStyle="rgba(255, 255, 255, 0.98)",n.strokeStyle="#0076F5",n.lineWidth=5,n.beginPath(),n.roundRect(10,10,s-20,r-50,24),n.fill(),n.stroke(),n.beginPath(),n.moveTo(s/2-20,r-50),n.lineTo(s/2,r-10),n.lineTo(s/2+20,r-50),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#003B7A",n.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',n.textAlign="center",n.fillText(`${this.config.name} (${this.config.career})`,s/2,50),n.fillStyle="#1E293B",n.font='600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const a=t.split(" ");let o="",l=95;for(let c=0;c<a.length;c++){const h=o+a[c]+" ";n.measureText(h).width>s-60&&c>0?(n.fillText(o,s/2,l),o=a[c]+" ",l+=32):o=h}n.fillText(o,s/2,l),this.speechTex.needsUpdate=!0,this.speechBubble.visible=!0,this.speechTimer=e}setTarget(t,e=1.6){this.targetPosition=t.clone(),this.walkSpeed=e,this.isWalking=!0}receiveLaptop(t){this.heldLaptop=t,this.group.add(t.group),t.group.position.set(0,1.05,.28),t.group.rotation.set(.2,0,0),t.setOpen(!1),this.leftArm.rotation.x=-Math.PI/3,this.rightArm.rotation.x=-Math.PI/3}sitAtDesk(t){if(this.isSeated=!0,this.isWalking=!1,this.targetPosition=null,this.group.position.set(t.x,-.36,t.z),this.group.rotation.set(0,0,0),this.leftLeg.rotation.x=-Math.PI/2,this.rightLeg.rotation.x=-Math.PI/2,this.leftKnee.rotation.x=Math.PI/2,this.rightKnee.rotation.x=Math.PI/2,this.heldLaptop){const e=this.group.parent;e&&e.add(this.heldLaptop.group),this.heldLaptop.group.position.set(t.x,.77,t.z+.35),this.heldLaptop.group.rotation.set(0,Math.PI,0),this.heldLaptop.setOpen(!0)}this.leftArm.rotation.x=-Math.PI/2.7,this.rightArm.rotation.x=-Math.PI/2.7}standFromDesk(){this.isSeated=!1,this.isWalking=!1,this.targetPosition=null,this.group.position.y=0,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.leftKnee.rotation.set(0,0,0),this.rightKnee.rotation.set(0,0,0),this.heldLaptop&&(this.heldLaptop.setOpen(!1),this.group.add(this.heldLaptop.group),this.heldLaptop.group.position.set(0,1.05,.28),this.heldLaptop.group.rotation.set(.2,0,0),this.leftArm.rotation.x=-Math.PI/3,this.rightArm.rotation.x=-Math.PI/3)}returnLaptopToCounter(){if(!this.heldLaptop)return null;const t=this.heldLaptop;this.heldLaptop=null;const e=this.group.parent;return e&&e.add(t.group),t.group.position.set(.65,1.101,.05),t.group.rotation.set(0,-Math.PI/8,0),t.setOpen(!1),this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,t}exitRoom(t){this.setTarget(t,1.35)}update(t,e){if(this.speechTimer>0&&(this.speechTimer-=t,this.speechTimer<=0&&(this.speechBubble.visible=!1)),this.speechBubble.visible){const n=new C;this.speechBubble.getWorldPosition(n),this.speechBubble.lookAt(e.x,n.y,e.z)}if(this.isSeated){this.walkTime+=t*5,this.leftArm.rotation.x=-Math.PI/2.7+Math.sin(this.walkTime*2.5)*.03,this.rightArm.rotation.x=-Math.PI/2.7+Math.cos(this.walkTime*2.5)*.03;return}if(!this.isWalking){this.walkTime+=t*1.8,this.torso.position.y=.82+Math.sin(this.walkTime)*.005;return}if(this.isWalking&&this.targetPosition){const n=this.group.position,s=new C().subVectors(this.targetPosition,n);if(s.y=0,s.length()>.08){s.normalize();const a=Math.atan2(s.x,s.z);this.group.rotation.y=be.lerp(this.group.rotation.y,a,t*8),n.addScaledVector(s,this.walkSpeed*t),this.walkTime+=t*7.5;const o=Math.sin(this.walkTime)*.55;this.leftLeg.rotation.x=o,this.rightLeg.rotation.x=-o,this.leftKnee.rotation.x=Math.max(0,-o*.5),this.rightKnee.rotation.x=Math.max(0,o*.5),this.heldLaptop||(this.leftArm.rotation.x=-o*.45,this.rightArm.rotation.x=o*.45),this.torso.position.y=.82+Math.abs(Math.sin(this.walkTime))*.03}else this.isWalking=!1,this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftKnee.rotation.x=0,this.rightKnee.rotation.x=0,this.heldLaptop||(this.leftArm.rotation.x=0,this.rightArm.rotation.x=0),this.torso.position.y=.82}}}class xi{static instance;ctx=null;masterGain=null;masterVolume=.8;constructor(){this.setupUnlockListeners(),this.setupEventSounds()}static getInstance(){return xi.instance||(xi.instance=new xi),xi.instance}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get audioDestination(){if(!this.ctx)throw new Error("AudioContext not initialized");return this.masterGain||(this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)),this.masterGain}setVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),this.ctx&&this.masterGain&&this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime)}setupUnlockListeners(){const t=()=>{this.initContext(),window.removeEventListener("click",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("click",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}setupEventSounds(){I.on("CREDENTIAL_SCANNED",()=>{this.playNFCSuccessBeep()}),I.on("SCREEN_TAB_CHANGED",()=>{this.playClickSound()}),I.on("USER_VALIDATION_TOGGLED",t=>{t?this.playSuccessChime():this.playClickSound()}),I.on("OBJECT_GRABBED",()=>{this.playGrabSound()}),I.on("OBJECT_RELEASED",()=>{this.playDropSound()}),I.on("CART_DOOR_TOGGLED",t=>{this.playDoorSound(t)}),I.on("INSPECTION_DECISION_MADE",t=>{t==="BUEN_ESTADO"?this.playSuccessChime():this.playWarningBeep()}),I.on("TUTORIAL_TASK_COMPLETED",()=>{this.playTaskCompleteSound()}),I.on("LAPTOP_SNAPPED_TO_CART",()=>{this.playDockSound()}),I.on("SCORE_UPDATED",t=>{this.playScoreBonusSound(t.streak)}),I.on("PENALTY_APPLIED",()=>{this.playPenaltySound()}),I.on("SETTING_VOLUME_CHANGED",t=>{this.setVolume(t)})}playNFCSuccessBeep(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,t),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.01,t+.12),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.12);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(1760,t+.1),r.gain.setValueAtTime(0,t),r.gain.setValueAtTime(.3,t+.1),r.gain.exponentialRampToValueAtTime(.01,t+.35),s.connect(r),r.connect(this.audioDestination),s.start(t+.1),s.stop(t+.35)}playClickSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(400,t+.04),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.04)}playGrabSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(440,t+.08),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.01,t+.08),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.08)}playDropSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(80,t+.1),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.1),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.1)}playDoorSound(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="square";const r=t?300:450,a=t?450:250;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(a,e+.15),s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(s),s.connect(this.audioDestination),n.start(e),n.stop(e+.15)}playSuccessChime(){if(!this.ctx)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=t+s*.07;r.type="sine",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.18,o),a.gain.exponentialRampToValueAtTime(.01,o+.25),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.25)})}playWarningBeep(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(320,t),e.frequency.setValueAtTime(260,t+.1),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.25)}playTaskCompleteSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(700,t),e.frequency.exponentialRampToValueAtTime(1400,t+.18),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.2),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.2)}playThudSound(){this.playDropSound()}playVictoryChime(){this.playSuccessChime()}playDockSound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(60,t+.06),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.06),[659.25,830.61,987.77].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain(),c=t+.04+a*.07;o.type="sine",o.frequency.setValueAtTime(r,c),l.gain.setValueAtTime(.18,c),l.gain.exponentialRampToValueAtTime(.01,c+.22),o.connect(l),l.connect(this.ctx.destination),o.start(c),o.stop(c+.22)})}playScoreBonusSound(t=1){if(!this.ctx)return;const e=this.ctx.currentTime,n=523.25*Math.pow(1.1,Math.min(5,t)-1),s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),s.frequency.exponentialRampToValueAtTime(n*1.5,e+.15),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.01,e+.15),s.connect(r),r.connect(this.audioDestination),s.start(e),s.stop(e+.15)}playPenaltySound(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(80,t+.25),n.gain.setValueAtTime(.22,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.audioDestination),e.start(t),e.stop(t+.25)}}const Qe=xi.getInstance(),Re=[{id:"student_juan_perez",name:"Juan Pérez López",accountNumber:"32145678",career:"Facultad de Ingeniería",jacketColor:11081,pantsColor:1976635,hairColor:2042167,academicStatus:"REGULAR",hasIncidentOnReturn:!1,welcomeMessage:"¡Hola! Vengo a solicitar un préstamo de laptop para mi práctica.",returnMessage:"Aquí tienes la laptop y mi credencial para registrar la devolución. ¿Todo en orden?"},{id:"student_sofia_ramirez",name:"Sofía Ramírez Mendoza",accountNumber:"31987452",career:"Facultad de Ciencias",jacketColor:9117247,pantsColor:3359061,hairColor:4861464,academicStatus:"REGULAR",hasIncidentOnReturn:!0,incidentType:"Fisura en panel LCD por golpe en mesa de estudio",welcomeMessage:"¡Hola, buenas tardes! Vengo a solicitar una laptop para avanzar mi tesis.",returnMessage:"Hola operador... vengo a devolver el equipo, pero tuve un accidente en la mesa y se golpeó la pantalla..."},{id:"student_carlos_mendoza",name:"Carlos Mendoza Rivas",accountNumber:"32098411",career:"Facultad de Derecho",jacketColor:1013358,pantsColor:988970,hairColor:1120295,academicStatus:"SANCIONADO",sanctionReason:"Suspensión activa por adeudo previo (Folio INC-8821)",hasIncidentOnReturn:!1,welcomeMessage:"¡Hola! Necesito una laptop para consultar jurisprudencia, por favor."}];class Ns{static instance;student;currentState="ENTERING";currentStudentIndex=0;entrancePos=new C(.65,0,3.7);counterPos=new C(.65,0,.55);workChairPos=new C(-1.6,0,2.05);scene;credentialRef;laptopsRef=[];studySessionTimeout=null;isCredentialScanned=!1;isUserValidated=!1;hasStudentReceivedCredentialInitial=!1;isReturnCredentialScanned=!1;isLaptopStoredInCart=!1;hasReturnedCredentialFinal=!1;isSimulationStarted=!1;constructor(t){Ns.instance=this,this.scene=t,this.loadStudent(0),this.setupListeners()}static getInstance(){return Ns.instance}getCurrentStudent(){return Re[this.currentStudentIndex]||Re[0]}loadStudent(t){if(t>=Re.length)return;this.currentStudentIndex=t;const e=Re[t];this.student&&this.scene.remove(this.student.group),this.student=new em(e),this.student.group.position.copy(this.entrancePos),this.student.group.rotation.y=Math.PI,this.scene.add(this.student.group),this.credentialRef&&(this.credentialRef.updateStudentData(e.name,e.accountNumber,e.career),this.credentialRef.group.visible=!1,this.credentialRef.group.position.set(.35,1.102,.12),this.credentialRef.group.rotation.set(0,-Math.PI/10,0)),this.currentState="ENTERING",this.isCredentialScanned=!1,this.isUserValidated=!1,this.hasStudentReceivedCredentialInitial=!1,this.isReturnCredentialScanned=!1,this.isLaptopStoredInCart=!1,this.hasReturnedCredentialFinal=!1,I.emit("ACTIVE_STUDENT_CHANGED",{student:e,index:t+1,total:Re.length})}advanceToNextStudent(){const t=this.currentStudentIndex+1;if(t<Re.length){const e=Re[t];I.emit("NEXT_STUDENT_APPROACHING",{student:e,queueIndex:t+1,totalQueue:Re.length}),setTimeout(()=>{this.loadStudent(t),this.startStudentFlow()},3200)}else I.emit("ALL_STUDENTS_COMPLETED")}setCredential(t){this.credentialRef=t}setLaptops(t){this.laptopsRef=t}setupListeners(){I.on("SIMULATION_STARTED",()=>{this.isSimulationStarted||(this.isSimulationStarted=!0,this.startStudentFlow())}),I.on("CREDENTIAL_SCANNED",()=>{this.isCredentialScanned=!0,this.currentState==="AT_COUNTER"?(this.currentState="WAITING_VALIDATION",this.student.say("¡Perfecto! Ya leyó mi credencial. Valida mis datos en el monitor.",4)):this.currentState==="AT_COUNTER_RETURNING"&&(this.isReturnCredentialScanned=!0,this.student.say("¡Excelente! Ya registraste la credencial de devolución. Ahora por favor revisa el equipo.",4.5),I.emit("RETURN_CREDENTIAL_SCANNED"))}),I.on("USER_VALIDATION_TOGGLED",t=>{this.isUserValidated=t,t&&(this.currentState==="WAITING_VALIDATION"||this.currentState==="AT_COUNTER"||this.currentState==="ENTERING")&&this.currentState!=="ENTERING"&&(this.currentState="WAITING_EQUIPMENT",I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!0),this.student.say("¡Excelente! Mis datos están validados. Por favor devuélveme mi credencial en la bandeja para recibir la laptop.",4.5))}),I.on("INVENTORY_UPDATED",t=>{if(t.item.status==="EN_MOSTRADOR"){const e=this.laptopsRef.find(n=>n.id===t.item.id);if(!e)return;if(this.currentState==="WAITING_EQUIPMENT"){if(!this.hasStudentReceivedCredentialInitial){this.student.say("Por favor devuélveme primero mi credencial de estudiante en la bandeja para recibir la laptop.",4.5);return}e.isMaintenance?this.student.say("Disculpa, este equipo tiene etiqueta de mantenimiento. ¿Podrías darme uno funcional por favor?",4.5):this.deliverLaptopToStudent(e)}else this.currentState==="AT_COUNTER"?this.student.say("Por favor escanea primero mi credencial y valida mis datos en el monitor.",4):this.currentState==="WAITING_VALIDATION"&&this.student.say("Por favor confirma mi validación en la pantalla antes de entregarme el equipo.",4)}}),I.on("LAPTOP_SNAPPED_TO_CART",()=>{this.currentState==="AT_COUNTER_RETURNING"&&(this.isLaptopStoredInCart=!0,I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!0),this.student.say("¡Equipo resguardado con éxito! Por favor devuélveme mi credencial en la bandeja para retirarme.",4.5))}),I.on("REQUEST_STUDENT_RETURN",()=>{this.startReturnFlow()}),I.on("INSPECTION_DECISION_MADE",t=>{this.currentState==="AT_COUNTER_RETURNING"&&(t==="BUEN_ESTADO"?(this.student.say("¡Excelente! Dictamen conforme. Resguarda la laptop en el Carro 01 y devuélveme mi credencial.",5),Qe.playVictoryChime()):(this.student.say("Entendido, firmaré el reporte de incidencia. Resguarda la laptop y devuélveme mi credencial.",5),Qe.playWarningBeep()))}),I.on("LOAN_REJECTED_SANCTION",()=>{(this.currentState==="AT_COUNTER"||this.currentState==="WAITING_VALIDATION")&&(this.currentState="AT_COUNTER_REJECTED",I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!0),Qe.playWarningBeep(),this.student.say("Entiendo, tengo que pasar a la coordinación a resolver mi adeudo antes de solicitar equipo. Por favor devuélveme mi credencial en la bandeja.",5))}),I.on("INCIDENT_ACT_SIGNED",()=>{this.currentState==="AT_COUNTER_RETURNING"&&this.student.say("Comprendo la situación. Firmaré el acta de incidencia en la coordinación. Por favor devuélveme mi credencial.",5)}),I.on("SHIFT_RESET",()=>{this.resetNPC()})}checkForLaptopOnCounter(){if(this.currentState!=="WAITING_EQUIPMENT"||!this.hasStudentReceivedCredentialInitial)return;const t=this.laptopsRef.find(e=>!e.isGrabbed()&&Rn.getItem(e.id)?.status==="EN_MOSTRADOR"&&!e.isMaintenance);t&&this.deliverLaptopToStudent(t)}startStudentFlow(){const t=Re[this.currentStudentIndex];setTimeout(()=>{this.student.setTarget(this.counterPos,1.4),this.student.say(t.welcomeMessage,4)},1200)}deliverLaptopToStudent(t){this.currentState="RECEIVING_EQUIPMENT",this.student.say("¡Muchas gracias! Voy a la mesa a avanzar mi proyecto.",4.5),I.emit("STUDENT_RECEIVED_LAPTOP",{laptopId:t.id,studentName:this.student.config.name,accountNumber:this.student.config.accountNumber,career:this.student.config.career}),setTimeout(()=>{this.student.receiveLaptop(t),Rn.updateStatus(t.id,"PRESTADO"),fe.registerActiveLoan(t.id,t.tag,this.student.config.name,this.student.config.accountNumber,this.student.config.career),this.currentState="WALKING_TO_DESK",this.student.setTarget(this.workChairPos,1.3)},1200)}startReturnFlow(){if(this.currentState!=="WORKING"&&this.currentState!=="WALKING_TO_DESK")return;this.studySessionTimeout&&(clearTimeout(this.studySessionTimeout),this.studySessionTimeout=null),this.currentState==="WORKING"&&this.student.standFromDesk();const t=Re[this.currentStudentIndex];this.student.heldLaptop&&t.hasIncidentOnReturn&&this.student.heldLaptop.setVisualDefect(!0,t.incidentType||"FISURA EN PANTALLA LCD"),this.currentState="RETURNING_TO_COUNTER",this.student.say(t.returnMessage||"¡Listo! Ya terminé mi práctica de laboratorio. Voy a devolver la laptop al mostrador.",4.5),setTimeout(()=>{this.student.setTarget(this.counterPos,1.3)},600)}resetNPC(){this.studySessionTimeout&&(clearTimeout(this.studySessionTimeout),this.studySessionTimeout=null),this.currentState="ENTERING",this.isCredentialScanned=!1,this.isUserValidated=!1,this.hasStudentReceivedCredentialInitial=!1,this.isReturnCredentialScanned=!1,this.isLaptopStoredInCart=!1,this.hasReturnedCredentialFinal=!1,this.student.standFromDesk(),this.student.group.visible=!0,this.student.group.position.copy(this.entrancePos),this.student.group.rotation.y=Math.PI,this.credentialRef&&(this.credentialRef.group.visible=!1),this.isSimulationStarted&&this.startStudentFlow()}update(t,e){if(this.student.update(t,e),this.currentState==="ENTERING"&&!this.student.isWalking&&this.student.group.position.distanceTo(this.counterPos)<.25){this.student.group.rotation.y=Math.PI,this.credentialRef&&(this.credentialRef.group.visible=!0,Qe.playThudSound());const s=Re[this.currentStudentIndex];this.isUserValidated?(this.currentState="WAITING_EQUIPMENT",this.student.say("¡Hola! Veo que ya validaste mis datos. Devuélveme mi credencial para recibir la laptop.",4)):this.isCredentialScanned?(this.currentState="WAITING_VALIDATION",this.student.say("¡Hola! Ya escaneaste mi credencial. Por favor confirma mi validación en el monitor.",4)):(this.currentState="AT_COUNTER",this.student.say(s.welcomeMessage,4.5)),I.emit("STUDENT_AT_COUNTER",{studentName:this.student.config.name})}if(this.currentState==="WALKING_TO_DESK"&&!this.student.isWalking&&this.student.group.position.distanceTo(this.workChairPos)<.2&&(this.currentState="WORKING",this.student.sitAtDesk(this.workChairPos),this.student.say("Listo, comenzando a trabajar en la laptop.",4),Qe.playVictoryChime(),I.emit("STUDENT_STARTED_WORKING",{studentName:this.student.config.name}),this.studySessionTimeout=setTimeout(()=>{this.startReturnFlow()},18e3)),this.currentState==="RETURNING_TO_COUNTER"&&!this.student.isWalking&&this.student.group.position.distanceTo(this.counterPos)<.2){this.currentState="AT_COUNTER_RETURNING",this.student.group.rotation.y=Math.PI;const s=this.student.returnLaptopToCounter();s&&(Rn.updateStatus(s.id,"EN_MOSTRADOR"),I.emit("LAPTOP_RETURNED_TO_COUNTER",{laptopId:s.id,laptop:s})),this.credentialRef&&(this.credentialRef.group.position.set(.35,1.102,.12),this.credentialRef.group.rotation.set(0,-Math.PI/10,0),this.credentialRef.group.visible=!0),this.isReturnCredentialScanned=!1,this.isLaptopStoredInCart=!1,this.hasReturnedCredentialFinal=!1;const r=Re[this.currentStudentIndex];Qe.playThudSound(),this.student.say(r.returnMessage||"Aquí tienes la laptop y mi credencial para registrar la devolución. ¿Todo en orden?",5),I.emit("LOAN_RETURN_READY_FOR_INSPECTION")}if(this.credentialRef&&this.credentialRef.group.visible){const n=new C;this.credentialRef.group.getWorldPosition(n);const s=new C(.38,1.08,.12),r=n.distanceTo(s),a=this.counterPos,o=Math.hypot(n.x-a.x,n.z-a.z),l=r<.5||o<.85&&n.y>.85&&n.y<1.45,c=this.credentialRef.isGrabbed()&&(r<.4||o<.65);(this.credentialRef.isGrabbed()?c:l)&&(this.currentState==="WAITING_EQUIPMENT"&&this.isUserValidated&&!this.hasStudentReceivedCredentialInitial&&(this.credentialRef.release(),this.credentialRef.group.visible=!1,this.hasStudentReceivedCredentialInitial=!0,Qe.playVictoryChime(),this.student.say("¡Muchas gracias por devolverme mi credencial! Ahora quedo a la espera de la laptop.",4.5),I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!1),I.emit("STUDENT_RECEIVED_CREDENTIAL",{studentName:this.student.config.name}),this.checkForLaptopOnCounter()),this.currentState==="AT_COUNTER_RETURNING"&&this.isLaptopStoredInCart&&this.isReturnCredentialScanned&&!this.hasReturnedCredentialFinal&&(this.credentialRef.release(),this.credentialRef.group.visible=!1,this.hasReturnedCredentialFinal=!0,Qe.playVictoryChime(),this.student.say("¡Todo en orden y completo! Muchas gracias por la atención y por entregarme mi credencial. ¡Hasta luego!",5),I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!1),I.emit("STUDENT_RECEIVED_CREDENTIAL_RETURN",{studentName:this.student.config.name}),setTimeout(()=>{this.currentState="EXITING",this.student.exitRoom(this.entrancePos)},1600)),this.currentState==="AT_COUNTER_REJECTED"&&(this.credentialRef.release(),this.credentialRef.group.visible=!1,Qe.playVictoryChime(),this.student.say("Gracias por devolverme mi credencial. Pasaré a la coordinación a resolver mi adeudo. ¡Hasta luego!",5),I.emit("CREDENTIAL_TRAY_HIGHLIGHT",!1),I.emit("STUDENT_RECEIVED_CREDENTIAL_REJECTED",{studentName:this.student.config.name}),setTimeout(()=>{this.currentState="EXITING",this.student.exitRoom(this.entrancePos)},1600)))}this.currentState==="EXITING"&&!this.student.isWalking&&this.student.group.position.distanceTo(this.entrancePos)<.25&&(this.currentState="COMPLETED",this.student.group.visible=!1,I.emit("STUDENT_EXITED_ROOM",{studentName:this.student.config.name}),this.advanceToNextStudent())}}class nm{canvas;ctx;texture;currentTab="INICIO";hoveredButtonId=null;buttons=[];isUserValidated=!1;isCredentialScanned=!1;selectedLaptopForLoan="Laptop 02";inspectionDecision="NONE";activeStudent=Re[0];incidentActSigned=!1;loanRejected=!1;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=640,this.ctx=this.canvas.getContext("2d"),this.texture=new xe(this.canvas),this.texture.generateMipmaps=!0,this.texture.minFilter=An,I.on("INVENTORY_UPDATED",()=>{this.render()}),I.on("LOAN_STATE_CHANGED",()=>{this.render()}),I.on("LOAN_ACTIVE_STARTED",()=>{this.render()}),I.on("CREDENTIAL_SCANNED",()=>{this.isCredentialScanned=!0,this.currentTab==="INICIO"||this.currentTab==="USUARIO"?this.setTab("USUARIO"):this.render()}),I.on("SCORE_UPDATED",()=>{this.render()}),I.on("ACTIVE_STUDENT_CHANGED",t=>{this.activeStudent=t.student,this.isCredentialScanned=!1,this.isUserValidated=!1,this.inspectionDecision="NONE",this.incidentActSigned=!1,this.loanRejected=!1,this.render()}),I.on("ALL_STUDENTS_COMPLETED",()=>{this.setTab("RESULTADOS")}),I.on("INCIDENT_ACT_SIGNED",()=>{this.incidentActSigned=!0,this.render()}),I.on("LOAN_REJECTED_SANCTION",()=>{this.loanRejected=!0,this.render()}),I.on("SHIFT_RESET",()=>{this.activeStudent=Re[0],this.isUserValidated=!1,this.isCredentialScanned=!1,this.inspectionDecision="NONE",this.incidentActSigned=!1,this.loanRejected=!1,this.setTab("INICIO")}),I.on("LOAN_RETURN_READY_FOR_INSPECTION",()=>{this.setTab("INSPECCION")}),I.on("LOAN_COMPLETED_SUCCESSFULLY",()=>{this.setTab("RESULTADOS")}),this.render()}setTab(t){this.currentTab=t,this.render(),I.emit("SCREEN_TAB_CHANGED",t)}handlePointerMove(t,e){const n=t*this.canvas.width,s=(1-e)*this.canvas.height;let r=null;for(const a of this.buttons)if(n>=a.x&&n<=a.x+a.w&&s>=a.y&&s<=a.y+a.h){r=a.id;break}r!==this.hoveredButtonId&&(this.hoveredButtonId=r,this.render())}handlePointerClick(t,e){const n=t*this.canvas.width,s=(1-e)*this.canvas.height;for(const r of this.buttons)if(n>=r.x&&n<=r.x+r.w&&s>=r.y&&s<=r.y+r.h)return r.action(),this.render(),!0;return!1}render(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height;switch(this.buttons=[],t.fillStyle="#020C17",t.fillRect(0,0,e,n),this.renderHeader(e),this.renderNavBar(e),this.currentTab){case"INICIO":this.renderViewInicio(e,n);break;case"USUARIO":this.renderViewUsuario(e,n);break;case"INVENTARIO":this.renderViewInventario(e,n);break;case"PRESTAMO":this.renderViewPrestamo(e,n);break;case"DEVOLUCION":this.renderViewDevolucion(e,n);break;case"INSPECCION":this.renderViewInspeccion(e,n);break;case"RESULTADOS":this.renderViewResultados(e,n);break}this.renderFooter(e,n),this.texture.needsUpdate=!0}renderHeader(t){const e=this.ctx;e.fillStyle="#002B49",e.fillRect(0,0,t,50),e.fillStyle="#D59F0F",e.font="bold 20px sans-serif",e.fillText("PC PUMA • SISTEMA INTEGRAL DE PRÉSTAMO TECNOLÓGICO",20,33),e.fillStyle="#38BDF8",e.font="bold 15px monospace",e.fillText(`⏱ TURNO: ${Zt.getFormattedShiftTime()}`,570,33),e.fillStyle="#10B981",e.font="bold 16px monospace",e.textAlign="right";const n=Zt.streak>1?` • 🔥 x${Zt.streak}`:"";e.fillText(`⭐ ${Zt.currentScore.toLocaleString()} PTS${n}`,t-20,33),e.textAlign="left",e.strokeStyle="#D59F0F",e.lineWidth=3,e.beginPath(),e.moveTo(0,50),e.lineTo(t,50),e.stroke()}renderNavBar(t){const e=[{id:"INICIO",label:"1. INICIO"},{id:"USUARIO",label:"2. USUARIO"},{id:"INVENTARIO",label:"3. INVENTARIO"},{id:"PRESTAMO",label:"4. PRÉSTAMO"},{id:"DEVOLUCION",label:"5. DEVOLUCIÓN"},{id:"INSPECCION",label:"6. INSPECCIÓN"},{id:"RESULTADOS",label:"7. RESULTADOS"}],n=(t-20)/e.length,s=42,r=56;e.forEach((a,o)=>{const l=10+o*n,c=this.currentTab===a.id,h=this.hoveredButtonId===`tab_${a.id}`;this.registerButton({id:`tab_${a.id}`,x:l,y:r,w:n-4,h:s,label:a.label,bgColor:c?"#D59F0F":h?"#003D66":"#001E33",activeBgColor:"#EAB308",textColor:c?"#001726":"#E2E8F0",action:()=>this.setTab(a.id)})})}renderViewInicio(t,e){const n=this.ctx;n.fillStyle="rgba(0, 43, 73, 0.4)",n.fillRect(30,115,t-60,200),n.strokeStyle="#00B4D8",n.lineWidth=1.5,n.strokeRect(30,115,t-60,200),n.fillStyle="#D59F0F",n.font="bold 28px sans-serif",n.fillText("MÓDULO DE OPERACIÓN PC PUMA",55,160),n.fillStyle="#E2E8F0",n.font="18px sans-serif",n.fillText("Bienvenido al simulador interactivo de gestión de laptops.",55,198),n.fillText("Atiende a los estudiantes, valida su credencial, asigna equipos y supervisa su devolución.",55,226),n.fillStyle="#10B981",n.font="bold 18px monospace",n.fillText("● ESTADO DEL MÓDULO: ABIERTO Y LISTO PARA ATENCIÓN",55,275);const s=280,r=65,a=345;this.registerButton({id:"btn_ir_usuario",x:55,y:a,w:s,h:r,label:"👤 VALIDAR USUARIO",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#FFFFFF",action:()=>this.setTab("USUARIO")}),this.registerButton({id:"btn_ir_inventario",x:370,y:a,w:s,h:r,label:"📦 VER CARRO 01",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#FFFFFF",action:()=>this.setTab("INVENTARIO")}),this.registerButton({id:"btn_ir_inspeccion",x:685,y:a,w:s,h:r,label:"🔍 INSPECCIONAR EQUIPO",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#FFFFFF",action:()=>this.setTab("INSPECCION")})}renderViewUsuario(t,e){const n=this.ctx,s=this.activeStudent.academicStatus==="SANCIONADO";n.fillStyle="rgba(15, 23, 42, 0.7)",n.fillRect(40,115,t-80,420),n.strokeStyle=s?"rgba(239, 68, 68, 0.6)":"rgba(213, 159, 15, 0.4)",n.strokeRect(40,115,t-80,420),n.fillStyle=s?"#EF4444":"#D59F0F",n.font="bold 24px sans-serif",n.fillText("DATOS DEL ESTUDIANTE SOLICITANTE",70,155),this.isCredentialScanned?(n.fillStyle="#10B981",n.font="bold 14px sans-serif",n.fillText(`📡 CREDENCIAL LEÍDA POR SENSOR NFC EN MOSTRADOR [ID: ${this.activeStudent.accountNumber}]`,70,185)):(n.fillStyle="#94A3B8",n.font="14px sans-serif",n.fillText("📡 Esperando lectura en el lector NFC del mostrador...",70,185)),[{label:"Nombre:",val:this.activeStudent.name,color:"#FFFFFF"},{label:"Número de cuenta:",val:this.activeStudent.accountNumber,color:"#FFFFFF"},{label:"Tipo de usuario:",val:"Alumno UNAM",color:"#FFFFFF"},{label:"Facultad / Escuela:",val:this.activeStudent.career,color:"#FFFFFF"},{label:"Estatus académico:",val:s?"✖ RESTRINGIDO / SANCIONADO":"ACTIVO REGULAR",color:s?"#EF4444":"#10B981"},{label:"Préstamos activos:",val:"0 equipos",color:"#FFFFFF"},{label:"Sanciones acumuladas:",val:s?"1 ACTIVA (Adeudo PC-PUMA-01)":"0 incidencias",color:s?"#EF4444":"#10B981"}].forEach((a,o)=>{const l=220+o*32;n.fillStyle="#94A3B8",n.font="16px sans-serif",n.fillText(a.label,70,l),n.fillStyle=a.color,n.font="bold 17px monospace",n.fillText(a.val,280,l)}),s?(n.fillStyle="rgba(239, 68, 68, 0.16)",n.fillRect(570,160,380,110),n.strokeStyle="#EF4444",n.lineWidth=1.5,n.strokeRect(570,160,380,110),n.fillStyle="#EF4444",n.font="bold 16px sans-serif",n.fillText("⛔ RESTRICCIÓN NORMATIVA VIGENTE",586,190),n.fillStyle="#CBD5E1",n.font="13px sans-serif",n.fillText(this.activeStudent.sanctionReason||"Adeudo de equipo previo",586,218),n.fillText("Art. 31: Denegación obligatoria de préstamo.",586,240),this.registerButton({id:"btn_rechazar_prestamo",x:570,y:290,w:380,h:65,label:this.loanRejected?"✔ RECHAZO REGISTRADO":"[ ✖ RECHAZAR PRÉSTAMO POR NORMA ]",bgColor:this.loanRejected?"#475569":"#DC2626",activeBgColor:this.loanRejected?"#64748B":"#B91C1C",textColor:"#FFFFFF",action:()=>{this.loanRejected||(this.loanRejected=!0,I.emit("LOAN_REJECTED_SANCTION"),this.render())}}),this.loanRejected&&(n.fillStyle="#10B981",n.font="bold 16px sans-serif",n.fillText("✔ Rechazo fundado registrado (+100 PTS)",570,390),n.fillStyle="#94A3B8",n.font="14px sans-serif",n.fillText("➔ Devuelve la credencial a Carlos en el mostrador.",570,420))):(n.fillStyle=this.isUserValidated?"#10B981":"#F59E0B",n.font="bold 20px sans-serif",n.fillText(this.isUserValidated?"✔ USUARIO VALIDADO CORRECTAMENTE":"⚠ PENDIENTE DE VALIDACIÓN",600,230),this.registerButton({id:"btn_validar_usuario",x:600,y:270,w:320,h:60,label:this.isUserValidated?"REVOCAR VALIDACIÓN":"[ VALIDAR USUARIO ]",bgColor:this.isUserValidated?"#475569":"#10B981",activeBgColor:this.isUserValidated?"#64748B":"#059669",textColor:"#FFFFFF",action:()=>{this.isUserValidated=!this.isUserValidated,I.emit("USER_VALIDATION_TOGGLED",this.isUserValidated),this.isUserValidated&&this.setTab("PRESTAMO")}}),this.isUserValidated&&this.registerButton({id:"btn_pasar_prestamo",x:600,y:350,w:320,h:60,label:"SELECCIONAR EQUIPO ➔",bgColor:"#D59F0F",activeBgColor:"#EAB308",textColor:"#001726",action:()=>this.setTab("PRESTAMO")}))}renderViewInventario(t,e){const n=this.ctx;n.fillStyle="#D59F0F",n.font="bold 24px sans-serif",n.fillText("INVENTARIO EN VIVO • CARRO 01 (RESGUARDO TECNOLÓGICO)",40,145);const s=Rn.getAllItems(),r=175,a=65;s.forEach((o,l)=>{const c=r+l*(a+10);n.fillStyle="rgba(15, 23, 42, 0.7)",n.fillRect(40,c,t-80,a),n.strokeStyle=o.status==="MANTENIMIENTO"?"#F59E0B":"rgba(255, 255, 255, 0.1)",n.strokeRect(40,c,t-80,a),n.fillStyle="#D59F0F",n.font="bold 18px monospace",n.fillText(`BAHÍA 0${o.slotNumber}`,60,c+38),n.fillStyle="#FFFFFF",n.font="bold 18px sans-serif",n.fillText(`${o.name} (${o.tag})`,180,c+38),n.fillStyle="#38BDF8",n.font="16px monospace",n.fillText(`⚡ ${o.batteryLevel}%`,480,c+38);let h="#10B981";o.status==="MANTENIMIENTO"&&(h="#F59E0B"),o.status==="EN_MANOS"&&(h="#38BDF8"),o.status==="EN_MOSTRADOR"&&(h="#A855F7"),n.fillStyle=h,n.font="bold 16px sans-serif",n.fillText(`[ ${o.status} ]`,620,c+38),n.fillStyle="#94A3B8",n.font="13px sans-serif",n.fillText(o.notes,780,c+38)})}renderViewPrestamo(t,e){const n=this.ctx;n.fillStyle="#D59F0F",n.font="bold 24px sans-serif",n.fillText("ASIGNACIÓN Y ENTREGA DE EQUIPO",40,145),n.fillStyle="rgba(15, 23, 42, 0.8)",n.fillRect(40,165,t-80,140),n.strokeStyle="#00B4D8",n.strokeRect(40,165,t-80,140),n.fillStyle="#E2E8F0",n.font="18px sans-serif",n.fillText("1. Selecciona una laptop disponible del Carro 01:",60,205),["Laptop 01","Laptop 02","Laptop 04","Laptop 05"].forEach((r,a)=>{const o=this.selectedLaptopForLoan===r;this.registerButton({id:`sel_${r}`,x:60+a*215,y:225,w:195,h:55,label:`${o?"✔ ":""}${r}`,bgColor:o?"#10B981":"#002B49",activeBgColor:o?"#059669":"#004578",textColor:"#FFFFFF",action:()=>{this.selectedLaptopForLoan=r,this.render()}})}),fe.currentLoan?(n.fillStyle="rgba(16, 185, 129, 0.15)",n.fillRect(40,320,t-80,200),n.strokeStyle="#10B981",n.strokeRect(40,320,t-80,200),n.fillStyle="#10B981",n.font="bold 22px sans-serif",n.fillText("✔ PRÉSTAMO ACTIVO ASIGNADO SATISFACTORIAMENTE",65,355),n.fillStyle="#FFFFFF",n.font="bold 20px monospace",n.fillText(`FOLIO: ${fe.currentLoan.loanId} • EQUIPO: ${fe.currentLoan.laptopTag}`,65,395),n.fillStyle="#CBD5E1",n.font="16px sans-serif",n.fillText(`Alumno: ${fe.currentLoan.studentName} (${fe.currentLoan.career})`,65,430),n.fillText(`Hora de inicio: ${fe.currentLoan.startTime.toLocaleTimeString()} • Estado: Sesión activa en sala de estudio`,65,458),this.registerButton({id:"btn_pedir_devolucion_prestamo",x:65,y:470,w:360,h:42,label:"🔔 SOLICITAR DEVOLUCIÓN DE EQUIPO",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#D59F0F",action:()=>{fe.requestReturn(),this.setTab("DEVOLUCION")}})):(n.fillStyle="rgba(0, 43, 73, 0.6)",n.fillRect(40,320,t-80,200),n.strokeStyle="#D59F0F",n.strokeRect(40,320,t-80,200),n.fillStyle="#D59F0F",n.font="bold 20px sans-serif",n.fillText("INSTRUCCIÓN OPERATIVA AL OPERADOR:",65,355),n.fillStyle="#FFFFFF",n.font="21px monospace",n.fillText(`➔ TOMA ${this.selectedLaptopForLoan.toUpperCase()} DEL CARRO 01 Y COLÓCALA EN EL MOSTRADOR`,65,395),n.fillStyle="#94A3B8",n.font="16px sans-serif",n.fillText("1. Camina físicamente hacia el Carro 01 situado a tu izquierda (puedes usar [F] o [E]).",65,430),n.fillText("2. Al soltar la laptop en el mostrador, Juan la tomará en sus manos automáticamente.",65,458),n.fillText("3. Juan se sentará en la mesa de estudio y el folio de préstamo quedará registrado.",65,486))}renderViewDevolucion(t,e){const n=this.ctx;n.fillStyle="#D59F0F",n.font="bold 24px sans-serif",n.fillText("RECEPCIÓN Y DEVOLUCIÓN DE EQUIPO",40,145),n.fillStyle="rgba(15, 23, 42, 0.8)",n.fillRect(40,165,t-80,340),n.strokeStyle="rgba(255, 255, 255, 0.15)",n.strokeRect(40,165,t-80,340);const s=fe.currentLoan;n.fillStyle="#FFFFFF",n.font="bold 20px sans-serif",n.fillText("EQUIPO EN PRÉSTAMO / ESPERADO PARA DEVOLUCIÓN:",70,205),n.fillStyle="#38BDF8",n.font="bold 26px monospace",n.fillText(s?`${s.laptopTag} (${s.laptopId.toUpperCase()})`:"Laptop 02 • PC-PUMA-02",70,245),n.fillStyle="#CBD5E1",n.font="17px sans-serif",n.fillText(`Usuario solicitante: ${s?s.studentName:"Juan Pérez López"} (${s?s.accountNumber:"32145678"})`,70,285),n.fillText(`Facultad / Escuela: ${s?s.career:"Facultad de Ingeniería"}`,70,315),n.fillText(`Folio de Préstamo: ${s?s.loanId:"PUMA-2026-0842"}`,70,345);let r="● Estudiante realizando sesión de trabajo en sala de estudio",a="#38BDF8";fe.currentState==="RETURN_IN_PROGRESS"?(r="⏳ Estudiante en camino al mostrador para entregar equipo...",a="#F59E0B"):fe.currentState==="RETURN_PENDING_INSPECTION"?(r="✔ EQUIPO DEPOSITADO EN MOSTRADOR • PENDIENTE DE INSPECCIÓN TÉCNICA",a="#10B981"):fe.currentState==="INSPECTED_CONFORME"?(r="✔ INSPECCIÓN CONFORME • DEVUELVE EL EQUIPO A LA BAHÍA DEL CARRO 01",a="#10B981"):fe.currentState==="LOAN_COMPLETED"&&(r="✔ PRÉSTAMO Y DEVOLUCIÓN COMPLETADOS CON ÉXITO",a="#10B981"),n.fillStyle=a,n.font="bold 18px monospace",n.fillText(r,70,385),fe.currentState==="LOAN_ACTIVE"&&this.registerButton({id:"btn_pedir_devolucion",x:70,y:420,w:360,h:60,label:"🔔 SOLICITAR DEVOLUCIÓN",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#D59F0F",action:()=>{fe.requestReturn(),this.render()}}),this.registerButton({id:"btn_ir_a_inspeccionar",x:fe.currentState==="LOAN_ACTIVE"?460:70,y:420,w:360,h:60,label:"INICIAR INSPECCIÓN FÍSICA ➔",bgColor:"#D59F0F",activeBgColor:"#EAB308",textColor:"#001726",action:()=>this.setTab("INSPECCION")})}renderViewInspeccion(t,e){const n=this.ctx;n.fillStyle="#D59F0F",n.font="bold 24px sans-serif",n.fillText("INSPECCIÓN DIAGNÓSTICA DE EQUIPO DE CÓMPUTO",40,145);const s=fe.currentLoan;n.fillStyle="rgba(15, 23, 42, 0.7)",n.fillRect(40,165,480,340),n.strokeStyle="rgba(255, 255, 255, 0.15)",n.strokeRect(40,165,480,340),n.fillStyle="#38BDF8",n.font="bold 18px sans-serif",n.fillText(`EQUIPO: ${s?s.laptopTag:"PC-PUMA-02"} • PROTOCOLO UNAM:`,65,205),["✔ Pantalla: Sin fracturas, rayones ni artefactos","✔ Bisagras y chasis: Estructura firme y alineada","✔ Teclado y Trackpad: Sin teclas sueltas ni derrame","✔ Cargador original: Conector en buen estado","✔ Puertos USB/HDMI: Limpios y funcionales"].forEach((c,h)=>{n.fillStyle="#E2E8F0",n.font="16px monospace",n.fillText(c,65,245+h*32)}),n.fillStyle="#94A3B8",n.font="14px sans-serif",n.fillText("Revisa visualmente el equipo depositado en el mostrador.",65,430),n.fillText("Al emitir dictamen, resguarda la laptop en el Carro 01.",65,455);const a=545;n.fillStyle="rgba(0, 43, 73, 0.5)",n.fillRect(a,165,435,340),n.strokeStyle="#D59F0F",n.strokeRect(a,165,435,340),n.fillStyle="#D59F0F",n.font="bold 20px sans-serif",n.fillText("DICTAMEN OPERATIVO FINAL:",a+25,205);const o=this.inspectionDecision==="BUEN_ESTADO";this.registerButton({id:"btn_buen_estado",x:a+25,y:235,w:385,h:70,label:"✔ EQUIPO EN BUEN ESTADO",bgColor:o?"#059669":"#10B981",activeBgColor:"#047857",textColor:"#FFFFFF",action:()=>{this.inspectionDecision="BUEN_ESTADO",I.emit("INSPECTION_DECISION_MADE","BUEN_ESTADO"),this.render()}});const l=this.inspectionDecision==="INCIDENCIA";this.registerButton({id:"btn_incidencia",x:a+25,y:325,w:385,h:70,label:"✖ EQUIPO CON INCIDENCIA",bgColor:l?"#DC2626":"#EF4444",activeBgColor:"#B91C1C",textColor:"#FFFFFF",action:()=>{this.inspectionDecision="INCIDENCIA",I.emit("INSPECTION_DECISION_MADE","INCIDENCIA"),this.render()}}),this.inspectionDecision==="INCIDENCIA"?(n.fillStyle="#EF4444",n.font="bold 15px sans-serif",n.fillText("DICTAMEN: EQUIPO CON DAÑO FÍSICO",a+25,412),n.fillStyle="#CBD5E1",n.font="12px monospace",n.fillText(`Falla: ${this.activeStudent.incidentType||"Fisura en panel LCD"}`,a+25,430),this.registerButton({id:"btn_firmar_acta_incidencia",x:a+25,y:442,w:385,h:52,label:this.incidentActSigned?"✔ ACTA UNAM REGISTRADA (+150 PTS)":"[ 📋 FIRMAR ACTA Y ENVIAR A TALLER ]",bgColor:this.incidentActSigned?"#475569":"#D97706",activeBgColor:this.incidentActSigned?"#64748B":"#B45309",textColor:"#FFFFFF",action:()=>{this.incidentActSigned||(this.incidentActSigned=!0,I.emit("INCIDENT_ACT_SIGNED"),Rn.updateStatus("laptop_02","MANTENIMIENTO"),this.render())}})):this.inspectionDecision==="BUEN_ESTADO"?(n.fillStyle="#10B981",n.font="bold 18px sans-serif",n.fillText("Dictamen: RECEPCIÓN CONFORME",a+25,425),n.fillStyle="#FFFFFF",n.font="14px monospace",n.fillText("➔ Lleva la laptop a la Bahía 02 del Carro 01",a+25,460)):(n.fillStyle="#94A3B8",n.font="bold 18px sans-serif",n.fillText("Decisión pendiente de registrar",a+25,435))}renderViewResultados(t,e){const n=this.ctx;n.fillStyle="#D59F0F",n.font="bold 22px sans-serif",n.fillText("EVALUACIÓN INTEGRAL DEL OPERADOR • RESULTADOS OFICIALES UNAM",30,132);const s=30,r=460;n.fillStyle="rgba(0, 43, 73, 0.75)",n.fillRect(s,145,r,175),n.strokeStyle="#D59F0F",n.lineWidth=2,n.strokeRect(s,145,r,175),n.fillStyle="#94A3B8",n.font="bold 13px sans-serif",n.fillText("PUNTUACIÓN GLOBAL INSTITUCIONAL:",s+20,172),n.fillStyle="#D59F0F",n.font="bold 36px monospace",n.fillText(`⭐ ${Zt.currentScore.toLocaleString()} PTS`,s+20,212),n.fillStyle="#10B981",n.font="bold 16px sans-serif",n.fillText(`🏅 ${Zt.getOperatorRank()}`,s+20,245),n.fillStyle="#E2E8F0",n.font="14px monospace",n.fillText(`🔥 Racha Máxima: x${Zt.maxStreakReached} (Actual: x${Zt.streak})`,s+20,276),n.fillText(`⏱ Tiempo Total de Turno: ${Zt.getFormattedShiftTime()}`,s+20,302),n.fillStyle="rgba(15, 23, 42, 0.8)",n.fillRect(s,335,r,175),n.strokeStyle="rgba(255, 255, 255, 0.15)",n.lineWidth=1.5,n.strokeRect(s,335,r,175),n.fillStyle="#38BDF8",n.font="bold 14px sans-serif",n.fillText("ÍNDICES INSTITUCIONALES DE DESEMPEÑO:",s+20,360);const a=(g,x,p,d,T)=>{n.fillStyle="#CBD5E1",n.font="13px sans-serif",n.fillText(g,p,d),n.fillStyle="#FFFFFF",n.font="bold 13px monospace",n.textAlign="right",n.fillText(`${x}%`,p+T,d),n.textAlign="left",n.fillStyle="rgba(255, 255, 255, 0.1)",n.fillRect(p,d+6,T,9),n.fillStyle=x>=90?"#10B981":x>=75?"#F59E0B":"#EF4444",n.fillRect(p,d+6,T*x/100,9)},o=r-40;a("Eficiencia Operativa en Módulo:",Zt.getEfficiencyPercent(),s+20,390,o),a("Seguridad de Datos y Protocolo:",Zt.getSecurityPercent(),s+20,435,o),a("Control y Precisión de Inventario:",Zt.getInventoryPercent(),s+20,480,o),this.registerButton({id:"btn_ir_inventario_res",x:s,y:525,w:r,h:50,label:"📦 REVISAR INVENTARIO CARRO 01",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#FFFFFF",action:()=>this.setTab("INVENTARIO")});const l=510,c=484,h=[{label:"Préstamos Conformes",val:`${Zt.completedLoans} eq.`},{label:"Peritajes Conformes",val:`${Zt.inspectedReturns} rev.`},{label:"Incidencias Reportadas",val:`${Zt.detectedIncidents}`},{label:"Omisiones / Fallas",val:`${Zt.mistakesCount}`}],u=234,f=55;h.forEach((g,x)=>{const p=x%2,d=Math.floor(x/2),T=l+p*(u+16),y=145+d*(f+12);n.fillStyle="rgba(15, 23, 42, 0.8)",n.fillRect(T,y,u,f),n.strokeStyle="rgba(255, 255, 255, 0.12)",n.strokeRect(T,y,u,f),n.fillStyle="#94A3B8",n.font="12px sans-serif",n.fillText(g.label,T+12,y+22),n.fillStyle="#FFFFFF",n.font="bold 18px monospace",n.fillText(g.val,T+12,y+44)}),n.fillStyle="rgba(0, 30, 55, 0.85)",n.fillRect(l,280,c,160),n.strokeStyle="rgba(213, 159, 15, 0.4)",n.strokeRect(l,280,c,160),n.fillStyle="#D59F0F",n.font="bold 14px sans-serif",n.fillText("CASOS DEL TURNO • ATENCIÓN A USUARIOS UNAM:",l+16,305),[{num:"1.",name:"Juan Pérez (Ingeniería)",desc:"Préstamo y devolución conforme",status:"✔ COMPLETADO",color:"#10B981"},{num:"2.",name:"Sofía Ramírez (Ciencias)",desc:"Fisura en LCD • Acta UNAM levantada",status:"✔ SANCIONADA",color:"#F59E0B"},{num:"3.",name:"Carlos Mendoza (Derecho)",desc:"Adeudo previo • Rechazo por norma",status:"✔ RESTRINGIDO",color:"#38BDF8"}].forEach((g,x)=>{const p=335+x*30;n.fillStyle="#FFFFFF",n.font="bold 13px monospace",n.fillText(g.num,l+16,p),n.fillStyle="#CBD5E1",n.font="12px sans-serif",n.fillText(`${g.name}: ${g.desc}`,l+38,p),n.fillStyle=g.color,n.font="bold 12px monospace",n.textAlign="right",n.fillText(g.status,l+c-16,p),n.textAlign="left"}),this.registerButton({id:"btn_iniciar_nuevo_turno",x:l,y:455,w:c,h:55,label:"🔄 INICIAR NUEVO TURNO / REINICIAR CICLO",bgColor:"#D59F0F",activeBgColor:"#EAB308",textColor:"#001726",action:()=>{Zt.resetShift(),fe.resetLoan(),this.inspectionDecision="NONE",this.isUserValidated=!1,this.isCredentialScanned=!1,I.emit("SHIFT_RESET"),this.setTab("INICIO")}}),this.registerButton({id:"btn_volver_inicio_res",x:l,y:525,w:c,h:50,label:"🏠 MENÚ PRINCIPAL",bgColor:"#002B49",activeBgColor:"#00406C",textColor:"#FFFFFF",action:()=>this.setTab("INICIO")})}renderFooter(t,e){const n=this.ctx;n.fillStyle="#001E33",n.fillRect(0,e-45,t,45),n.fillStyle="#64748B",n.font="14px sans-serif",n.fillText("Meta Quest 3S / Desktop Mode • WebXR Interactive Screen API",20,e-17),n.fillStyle="#10B981",n.font="bold 14px monospace",n.textAlign="right",n.fillText("CONEXIÓN CARRO 01: ONLINE [5/5 SLOTS]",t-20,e-17),n.textAlign="left"}registerButton(t){this.buttons.push(t);const e=this.hoveredButtonId===t.id,n=this.ctx;n.fillStyle=e?t.activeBgColor||"#D59F0F":t.bgColor||"#002B49",n.beginPath(),n.roundRect(t.x,t.y,t.w,t.h,8),n.fill(),e&&(n.strokeStyle="#FFFFFF",n.lineWidth=2,n.stroke()),n.fillStyle=t.textColor||"#FFFFFF",n.font="bold 15px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t.label,t.x+t.w/2,t.y+t.h/2),n.textAlign="left",n.textBaseline="alphabetic"}}class im{group;screenMesh;screenUI;constructor(){this.group=new ae,this.group.name="Operator_Computer",this.screenUI=new nm;const{monitorGroup:t,screenMesh:e}=this.createMonitor();this.screenMesh=e,this.group.add(t),this.createPeripherals(),this.group.position.set(-.55,1.075,-.05)}createMonitor(){const t=new ae,e=new dt({color:1976635,roughness:.3,metalness:.7}),n=new Q(new je(.15,.18,.018,24),e);n.position.y=.009,n.receiveShadow=!0,t.add(n);const s=new Q(new gt(.05,.36,.04),e);s.position.set(0,.19,.03),s.castShadow=!0,t.add(s);const r=new Q(new gt(.86,.52,.025),new dt({color:988970,roughness:.4}));r.position.set(0,.38,0),r.castShadow=!0,t.add(r);const a=new Q(new gt(.86,.008,.027),new dt({color:13999887,metalness:.6,roughness:.3}));a.position.set(0,.125,0),t.add(a);const o=new dt({map:this.screenUI.texture,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:this.screenUI.texture,emissiveIntensity:.85}),l=new Q(new de(.82,.48),o);return l.position.set(0,.38,-.013),l.rotation.y=Math.PI,l.name="Computer_Screen",t.add(l),{monitorGroup:t,screenMesh:l}}createPeripherals(){const t=new dt({color:1976635,roughness:.5}),e=new Q(new gt(.44,.015,.15),t);e.position.set(0,.008,-.22),e.castShadow=!0,this.group.add(e);const n=new dt({color:11081,roughness:.8}),s=new Q(new gt(.2,.002,.22),n);s.position.set(.32,.001,-.22),this.group.add(s);const r=new dt({color:3359061,roughness:.3}),a=new Q(new gt(.06,.025,.1),r);a.position.set(.32,.013,-.22),a.castShadow=!0,this.group.add(a);const o=new dt({color:988970,roughness:.4,metalness:.6}),l=new Q(new gt(.12,.35,.38),o);l.position.set(-.52,.175,0),l.castShadow=!0,this.group.add(l)}}class we{id;slotIndex;tag;isMaintenance;group;baseMesh;lidGroup;materialsToHighlight=[];screenCanvas;screenTex;screenMat;_isGrabbed=!1;isClosed=!1;holdOffset=new C(0,-.12,-.45);holdRotation=new le(.15,0,0);constructor(t){this.id=t.id,this.slotIndex=t.slotIndex,this.tag=t.tag,this.isMaintenance=!!t.isMaintenance,this.isClosed=!!t.startsClosed,this.group=new ae,this.group.name=`Laptop_${this.tag}`,this.buildLaptopGeometry(),this.group.position.copy(t.initialPosition),t.initialRotation&&this.group.rotation.copy(t.initialRotation)}buildLaptopGeometry(){const s=new dt({color:this.isMaintenance?3882822:4674921,roughness:.35,metalness:.8});this.materialsToHighlight.push(s);const r=new gt(.32,.016,.22);this.baseMesh=new Q(r,s),this.baseMesh.position.y=.016/2,this.baseMesh.castShadow=!0,this.baseMesh.receiveShadow=!0,this.group.add(this.baseMesh);const a=new dt({color:988970,roughness:.7}),o=new Q(new gt(.32*.88,.002,.22*.48),a);o.position.set(0,.016+.001,-.22*.08),this.group.add(o);const l=new Q(new gt(.32*.32,.001,.22*.28),new dt({color:3359061,roughness:.4}));l.position.set(0,.016+.001,.22*.28),this.group.add(l);const c=document.createElement("canvas");c.width=256,c.height=64;const h=c.getContext("2d");h.fillStyle=this.isMaintenance?"#DC2626":"#D59F0F",h.fillRect(0,0,256,64),h.fillStyle=this.isMaintenance?"#FFFFFF":"#002B49",h.font="bold 22px monospace",h.textAlign="center",h.fillText(this.isMaintenance?`${this.tag} [FALLA]`:this.tag,128,40);const u=new xe(c),f=new Q(new de(.08,.02),new dt({map:u,roughness:.5}));f.rotation.x=-Math.PI/2,f.position.set(.32*.34,.016+.0015,.22*.32),this.group.add(f),this.lidGroup=new ae,this.lidGroup.position.set(0,.016,-.22/2);const m=new dt({color:3359061,roughness:.3,metalness:.8});this.materialsToHighlight.push(m);const g=new Q(new gt(.32,.22,.008),m);g.position.set(0,.22/2,0),g.castShadow=!0,this.lidGroup.add(g),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=512,this.screenCanvas.height=320,this.drawNormalScreen(),this.screenTex=new xe(this.screenCanvas),this.screenMat=new dt({map:this.screenTex,emissive:this.isMaintenance?8330525:1981066,emissiveIntensity:.45,roughness:.2});const x=new Zi;x.load("textures/laptop_wallpaper.png",y=>{this.screenMat.map=y,this.screenMat.needsUpdate=!0},void 0,()=>{});const p=new Q(new de(.32*.92,.22*.86),this.screenMat);p.position.set(0,.22/2,.005),this.lidGroup.add(p);const d=new dt({transparent:!0,roughness:.35,metalness:.2});x.load("textures/laptop_lid_logo.png",y=>{d.map=y,d.needsUpdate=!0},void 0,()=>{x.load("pc_puma_logo.png",y=>{d.map=y,d.needsUpdate=!0})});const T=new Q(new de(.12,.06),d);T.position.set(0,.22/2,-.005),T.rotation.y=Math.PI,this.lidGroup.add(T),this.isClosed?this.lidGroup.rotation.x=0:this.lidGroup.rotation.x=be.degToRad(65),this.group.add(this.lidGroup),this.group.traverse(y=>{y instanceof Q&&(y.castShadow=!0,y.receiveShadow=!0)})}setOpen(t){this.isClosed=!t;const e=t?be.degToRad(65):0;this.lidGroup.rotation.x=e}getRaycastTargets(){return[this.baseMesh,this.lidGroup]}setHover(t){const e=t?13999887:0,n=t?.35:0;for(const s of this.materialsToHighlight)s.emissive.setHex(e),s.emissiveIntensity=n}grab(t){if(this._isGrabbed)return;this._isGrabbed=!0,this.setHover(!1),this.setOpen(!0),t.add(this.group),t instanceof Ii?(this.group.position.copy(this.holdOffset),this.group.rotation.copy(this.holdRotation)):(this.group.position.set(0,.02,-.22),this.group.rotation.set(.1,0,0))}rotateHeld(t){this._isGrabbed&&(this.group.rotation.y+=t)}adjustDistance(t){if(!this._isGrabbed)return;const e=this.group.parent instanceof Ii,n=e?-.85:-.55,s=e?-.22:-.08;this.group.position.z=be.clamp(this.group.position.z+t,n,s)}release(t,e){if(!this._isGrabbed)return;this._isGrabbed=!1;const n=new C,s=new Dn;if(this.group.getWorldPosition(n),this.group.getWorldQuaternion(s),t)this.group.position.copy(t);else{const r=n.y>.9?1.075:.02;this.group.position.set(n.x,r,n.z)}if(e)this.group.rotation.copy(e);else{const r=new le().setFromQuaternion(s,"YXZ");this.group.rotation.set(0,r.y,0)}}isGrabbed(){return this._isGrabbed}update(t){}drawNormalScreen(){const t=this.screenCanvas.getContext("2d");this.isMaintenance?(t.fillStyle="#450a0a",t.fillRect(0,0,512,320),t.fillStyle="#EF4444",t.font="bold 30px sans-serif",t.textAlign="center",t.fillText("EN MANTENIMIENTO",256,120),t.fillStyle="#FFFFFF",t.font="18px monospace",t.fillText("Falla reportada en bisagra",256,170),t.fillText(`ID: ${this.tag}`,256,210)):(t.fillStyle="#002B49",t.fillRect(0,0,512,320),t.fillStyle="#D59F0F",t.font="bold 28px sans-serif",t.textAlign="center",t.fillText("PC PUMA OS",256,120),t.fillStyle="#FFFFFF",t.font="20px sans-serif",t.fillText(`${this.tag} • DISPONIBLE`,256,165),t.fillStyle="#38BDF8",t.font="16px monospace",t.fillText("Batería: 100% | Red UNAM OK",256,220))}setVisualDefect(t,e="FISURA EN PANEL LCD"){const n=this.screenCanvas.getContext("2d");t?(n.fillStyle="#0f172a",n.fillRect(0,0,512,320),n.strokeStyle="#EF4444",n.lineWidth=4,n.beginPath(),n.moveTo(80,40),n.lineTo(210,150),n.lineTo(170,190),n.lineTo(320,280),n.moveTo(210,150),n.lineTo(310,120),n.lineTo(440,170),n.stroke(),n.strokeStyle="#FCA5A5",n.lineWidth=2,n.beginPath(),n.moveTo(210,150),n.lineTo(240,220),n.moveTo(310,120),n.lineTo(360,60),n.stroke(),n.fillStyle="#DC2626",n.fillRect(40,95,432,50),n.fillStyle="#FFFFFF",n.font="bold 22px sans-serif",n.textAlign="center",n.fillText("⚠ DAÑO FÍSICO DETECTADO",256,128),n.fillStyle="#F8FAFC",n.font="bold 16px monospace",n.fillText(e,256,180),n.fillStyle="#D59F0F",n.font="bold 14px sans-serif",n.fillText("ART. 24 REGLAMENTO PC PUMA • REQUIERE SANCIÓN",256,220),this.screenMat.emissive.setHex(10033947),this.screenMat.emissiveIntensity=.7):(this.drawNormalScreen(),this.screenMat.emissive.setHex(this.isMaintenance?8330525:1981066),this.screenMat.emissiveIntensity=.45),this.screenTex.needsUpdate=!0}}class Xe{id="credential_juan_perez";group;cardMesh;hitBox;material;_isGrabbed=!1;frontCanvas=null;frontTex=null;currentStudentName="JUAN PÉREZ LÓPEZ";currentAccountNumber="32145678";currentCareer="FACULTAD DE INGENIERÍA";initialPosition=new C(.35,1.102,.12);initialRotation=new le(0,-Math.PI/10,0);holdOffset=new C(.12,-.1,-.38);holdRotation=new le(.15,-.08,0);constructor(){this.group=new ae,this.group.name="Credential_UNAM_3D";const t=.086,e=.054,n=.002,s=this.createFrontTexture(),r=this.createBackTexture(),a=new dt({color:16317180,roughness:.5}),o=new dt({map:s,roughness:.35,metalness:.1}),l=new dt({map:r,roughness:.4,metalness:.1}),c=new Zi;c.load("textures/credential_front.png",g=>{o.map=g,o.needsUpdate=!0},void 0,()=>{}),c.load("textures/credential_back.png",g=>{l.map=g,l.needsUpdate=!0},void 0,()=>{}),this.material=o;const h=[a,a,a,a,o,l],u=new gt(t,e,n);this.cardMesh=new Q(u,h),this.cardMesh.castShadow=!0,this.cardMesh.receiveShadow=!0,this.cardMesh.rotation.x=-Math.PI/2,this.group.add(this.cardMesh);const f=new gt(.24,.14,.2),m=new In({visible:!1});this.hitBox=new Q(f,m),this.hitBox.name="Credential_HitBox",this.group.add(this.hitBox),this.group.position.copy(this.initialPosition),this.group.rotation.copy(this.initialRotation)}updateStudentData(t,e,n){this.currentStudentName=t.toUpperCase(),this.currentAccountNumber=e,this.currentCareer=n.toUpperCase(),this.frontCanvas&&this.frontTex&&(this.drawFrontCanvas(this.frontCanvas),this.frontTex.needsUpdate=!0)}drawFrontCanvas(t){const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height);const n=e.createLinearGradient(0,0,512,320);n.addColorStop(0,"#002B49"),n.addColorStop(1,"#001A2E"),e.fillStyle=n,e.fillRect(0,0,512,320),e.fillStyle="#D59F0F",e.fillRect(0,0,512,45),e.fillRect(0,310,512,10),e.fillStyle="#002B49",e.font="bold 15px sans-serif",e.textAlign="center",e.fillText("UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO",256,28),e.fillStyle="#E2E8F0",e.fillRect(25,65,120,150),e.strokeStyle="#D59F0F",e.lineWidth=4,e.strokeRect(25,65,120,150),e.fillStyle="#002B49",e.beginPath(),e.arc(85,120,30,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(85,185,45,30,0,Math.PI,0,!0),e.fill(),e.fillStyle="#D59F0F",e.font="bold 36px serif",e.textAlign="center",e.fillText("UNAM",85,270),e.textAlign="left",e.fillStyle="#D59F0F",e.font="bold 13px sans-serif",e.fillText("CREDENCIAL DE ALUMNO",165,80),e.fillStyle="#FFFFFF",e.font="bold 21px sans-serif",e.fillText(this.currentStudentName,165,115),e.fillStyle="#94A3B8",e.font="13px sans-serif",e.fillText("NO. DE CUENTA:",165,145),e.fillStyle="#38BDF8",e.font="bold 20px monospace",e.fillText(this.currentAccountNumber,165,172),e.fillStyle="#94A3B8",e.font="13px sans-serif",e.fillText("CARRERA:",165,202),e.fillStyle="#FFFFFF",e.font="bold 15px sans-serif",e.fillText(this.currentCareer,165,224),e.fillStyle="#EAB308",e.fillRect(430,75,45,35),e.strokeStyle="#CA8A04",e.lineWidth=2,e.strokeRect(430,75,45,35),e.fillStyle="#002B49",e.font="bold 16px sans-serif",e.textAlign="center",e.fillText("((•))",452,98)}createFrontTexture(){return this.frontCanvas=document.createElement("canvas"),this.frontCanvas.width=512,this.frontCanvas.height=320,this.drawFrontCanvas(this.frontCanvas),this.frontTex=new xe(this.frontCanvas),this.frontTex}createBackTexture(){const t=document.createElement("canvas");t.width=512,t.height=320;const e=t.getContext("2d");e.fillStyle="#F8FAFC",e.fillRect(0,0,512,320),e.fillStyle="#1E293B",e.fillRect(0,30,512,60),e.fillStyle="#0F172A";const n=60,s=130;for(let a=n;a<450;a+=6){const o=a*7%5===0;e.fillRect(a,s,o?4:2,60)}e.fillStyle="#64748B",e.font="bold 12px monospace",e.textAlign="center",e.fillText("* 3 2 1 4 5 6 7 8 *",256,210),e.font="10px sans-serif",e.fillText("Esta credencial es intransferible y acredita como alumno regular.",256,260),e.fillText("Servicio de Préstamo PC PUMA • UNAM",256,280);const r=new xe(t);return r.generateMipmaps=!0,r}getRaycastTargets(){return[this.hitBox,this.cardMesh]}setHover(t){const e=t?13999887:0,n=t?.6:0;this.material.emissive.setHex(e),this.material.emissiveIntensity=n}grab(t){if(this._isGrabbed)return;this._isGrabbed=!0,this.setHover(!1),this.cardMesh.rotation.x=0,t.add(this.group),t instanceof Ii?(this.group.position.copy(this.holdOffset),this.group.rotation.copy(this.holdRotation)):(this.group.position.set(0,.03,-.12),this.group.rotation.set(.1,0,0))}rotateHeld(t){this._isGrabbed&&(this.group.rotation.y+=t)}adjustDistance(t){if(!this._isGrabbed)return;const e=this.group.parent instanceof Ii,n=e?-.8:-.45,s=e?-.16:-.04;this.group.position.z=be.clamp(this.group.position.z+t,n,s)}release(t,e){if(!this._isGrabbed)return;this._isGrabbed=!1,this.cardMesh.rotation.x=-Math.PI/2;const n=new C,s=new Dn;if(this.group.getWorldPosition(n),this.group.getWorldQuaternion(s),t)this.group.position.copy(t);else{const r=n.y>.9?1.102:.005;this.group.position.set(n.x,r,n.z)}if(e)this.group.rotation.copy(e);else{const r=new le().setFromQuaternion(s,"YXZ");this.group.rotation.set(0,r.y,0)}}isGrabbed(){return this._isGrabbed}update(t){}}class sm{group;targetPad;statusLed;scannerLight;placementHitBox;ledMat;padMat;isScanning=!1;scanCooldown=0;lastScannedId=null;hasScannedCurrentPlacement=!1;constructor(){this.group=new ae,this.group.name="NFC_Scanner_Device";const t=new dt({color:988970,roughness:.35,metalness:.7}),e=new Q(new gt(.16,.025,.16),t);e.position.y=.0125,e.castShadow=!0,e.receiveShadow=!0,this.group.add(e);const n=new Q(new gt(.165,.006,.165),new dt({color:13999887,metalness:.8,roughness:.3}));n.position.y=.018,this.group.add(n);const s=document.createElement("canvas");s.width=256,s.height=256;const r=s.getContext("2d");r.fillStyle="#002B49",r.fillRect(0,0,256,256),r.strokeStyle="#D59F0F",r.lineWidth=8,r.beginPath(),r.arc(128,128,90,0,Math.PI*2),r.stroke(),r.fillStyle="#D59F0F",r.font="bold 36px sans-serif",r.textAlign="center",r.fillText("NFC",128,115),r.font="bold 52px sans-serif",r.fillText("((•))",128,175);const a=new xe(s);this.padMat=new dt({map:a,roughness:.4,emissive:46296,emissiveIntensity:.25}),new Zi().load("textures/nfc_pad.png",h=>{this.padMat.map=h,this.padMat.needsUpdate=!0},void 0,()=>{}),this.targetPad=new Q(new de(.13,.13),this.padMat),this.targetPad.rotation.x=-Math.PI/2,this.targetPad.position.y=.026,this.targetPad.receiveShadow=!0,this.group.add(this.targetPad),this.ledMat=new dt({color:46296,emissive:46296,emissiveIntensity:.9,roughness:.2}),this.statusLed=new Q(new je(.01,.01,.005,16),this.ledMat),this.statusLed.position.set(0,.027,.065),this.group.add(this.statusLed),this.scannerLight=new zp(46296,1,.8),this.scannerLight.position.set(0,.08,0),this.group.add(this.scannerLight);const l=new gt(.32,.25,.32),c=new In({visible:!1});this.placementHitBox=new Q(l,c),this.placementHitBox.position.set(0,.1,0),this.placementHitBox.name="NFC_Placement_HitBox",this.group.add(this.placementHitBox),this.group.position.set(.1,1.1,-.2)}getPlacementTargets(){return[this.placementHitBox,this.targetPad,this.group]}checkProximity(t,e){const n=new C;this.group.getWorldPosition(n);const s=n.distanceTo(t);if(s<=.2){if(!this.hasScannedCurrentPlacement&&this.scanCooldown<=0)return this.hasScannedCurrentPlacement=!0,this.triggerScan(e),!0}else s>.32&&(this.hasScannedCurrentPlacement=!1);return!1}snapCredential(t){const e=new C;this.group.getWorldPosition(e);const n=new C(e.x,1.127,e.z),s=new le(0,0,0);t.release(n,s),this.hasScannedCurrentPlacement=!0,this.triggerScan(t.id)}triggerScan(t){this.scanCooldown>0&&this.lastScannedId===t||(this.isScanning=!0,this.scanCooldown=2.5,this.lastScannedId=t,this.ledMat.color.setHex(1096065),this.ledMat.emissive.setHex(1096065),this.ledMat.emissiveIntensity=1.6,this.scannerLight.color.setHex(1096065),this.scannerLight.intensity=2.5,I.emit("CREDENTIAL_SCANNED",{id:t,studentName:"Juan Pérez López",accountNumber:"32145678",faculty:"Facultad de Ingeniería",status:"ACTIVO"}),setTimeout(()=>{this.resetToIdle()},1400))}resetToIdle(){this.isScanning=!1,this.ledMat.color.setHex(46296),this.ledMat.emissive.setHex(46296),this.ledMat.emissiveIntensity=.9,this.scannerLight.color.setHex(46296),this.scannerLight.intensity=1}update(t){if(this.scanCooldown>0&&(this.scanCooldown-=t),!this.isScanning){const e=(Math.sin(Date.now()*.005)+1)*.5;this.ledMat.emissiveIntensity=.6+e*.4}}getLastScannedId(){return this.lastScannedId}}const hi=new le(0,0,0,"YXZ"),di=new C,rm={type:"change"},am={type:"lock"},om={type:"unlock"},Oo=Math.PI/2;class lm extends Kp{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=cm.bind(this),this._onPointerlockChange=hm.bind(this),this._onPointerlockError=dm.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;di.setFromMatrixColumn(e.matrix,0),di.crossVectors(e.up,di),e.position.addScaledVector(di,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;di.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(di,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function cm(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;hi.setFromQuaternion(n.quaternion),hi.y-=t*.002*this.pointerSpeed,hi.x-=e*.002*this.pointerSpeed,hi.x=Math.max(Oo-this.maxPolarAngle,Math.min(Oo-this.minPolarAngle,hi.x)),n.quaternion.setFromEuler(hi),this.dispatchEvent(rm)}function hm(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(am),this.isLocked=!0):(this.dispatchEvent(om),this.isLocked=!1)}function dm(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class um{controls;isLocked=!1;camera;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;rotateLeft=!1;rotateRight=!1;distanceIn=!1;distanceOut=!1;hasGameStarted=!1;velocity=new C;direction=new C;bounds={minX:-2.4,maxX:2.4,minZ:-3.4,maxZ:-.6};blocker;startBtn;constructor(t,e){this.camera=t,this.controls=new lm(this.camera,document.body),this.blocker=document.getElementById("blocker"),this.startBtn=document.getElementById("btn-start"),this.setupPointerLock(),this.setupKeyboard()}setupPointerLock(){this.startBtn&&this.blocker&&(this.startBtn.addEventListener("click",()=>{this.hasGameStarted||(this.hasGameStarted=!0,I.emit("SIMULATION_STARTED")),this.controls.lock()}),this.controls.addEventListener("lock",()=>{this.isLocked=!0,this.hasGameStarted||(this.hasGameStarted=!0,I.emit("SIMULATION_STARTED")),this.blocker&&(this.blocker.style.opacity="0",setTimeout(()=>{this.blocker&&(this.blocker.style.display="none")},300)),I.emit("DESKTOP_LOCKED",!0)}),this.controls.addEventListener("unlock",()=>{this.isLocked=!1,this.blocker&&(this.blocker.style.display="flex",setTimeout(()=>{this.blocker&&(this.blocker.style.opacity="1")},10)),I.emit("DESKTOP_LOCKED",!1)}))}setupKeyboard(){const t=r=>{switch(r.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"KeyE":I.emit("INTERACTION_TRIGGER");break;case"KeyF":I.emit("INTERACTION_SMART_ACTION"),I.emit("INTERACTION_PLACE_NFC");break;case"KeyQ":this.rotateLeft=!0;break;case"KeyR":this.rotateRight=!0;break;case"KeyX":this.distanceIn=!0;break;case"KeyY":case"KeyZ":this.distanceOut=!0;break}},e=r=>{switch(r.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"KeyQ":this.rotateLeft=!1;break;case"KeyR":this.rotateRight=!1;break;case"KeyX":this.distanceIn=!1;break;case"KeyY":case"KeyZ":this.distanceOut=!1;break}},n=r=>{this.isLocked&&r.button===0&&I.emit("INTERACTION_TRIGGER")},s=r=>{if(this.isLocked){const a=r.deltaY<0?.045:-.045;I.emit("INTERACTION_ADJUST_DISTANCE",a)}};window.addEventListener("keydown",t),window.addEventListener("keyup",e),window.addEventListener("mousedown",n),window.addEventListener("wheel",s,{passive:!0})}update(t){if(!this.isLocked)return;this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();const e=3.5;(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*e*10*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*e*10*t);const n=this.velocity.length()*t;n>.005&&I.emit("PLAYER_MOVED",n),this.controls.moveRight(-this.velocity.x*t),this.controls.moveForward(-this.velocity.z*t),this.rotateLeft&&I.emit("INTERACTION_ROTATE_HELD",-2.5*t),this.rotateRight&&I.emit("INTERACTION_ROTATE_HELD",2.5*t),this.distanceIn&&I.emit("INTERACTION_ADJUST_DISTANCE",.6*t),this.distanceOut&&I.emit("INTERACTION_ADJUST_DISTANCE",-.6*t),this.camera.position.y=1.65,this.camera.position.x=be.clamp(this.camera.position.x,this.bounds.minX,this.bounds.maxX),this.camera.position.z=be.clamp(this.camera.position.z,this.bounds.minZ,this.bounds.maxZ)}}class fm{camera;scene;xrManager;computer;cart;nfcScanner;credential;grabbables=[];raycaster=new $p;hoveredGrabbable=null;heldGrabbable=null;isHoveringScreen=!1;lastScreenUV=null;isHoveringCartDoor=!1;isHoveringNFCPlacement=!1;isHoveringCart=!1;hoveredBayIndex=null;isStudentWaitingCredential=!1;nfcSnapCooldown=0;heldHolder=null;constructor(t,e,n){this.camera=t,this.scene=e,this.xrManager=n,this.setupEventListeners()}registerGrabbable(t){this.grabbables.push(t)}unregisterGrabbable(t){const e=this.grabbables.indexOf(t);e!==-1&&this.grabbables.splice(e,1)}setComputer(t){this.computer=t}setCart(t){this.cart=t}setNFCScanner(t){this.nfcScanner=t}setCredential(t){this.credential=t}setupEventListeners(){I.on("INTERACTION_TRIGGER",()=>{this.handleAction(this.camera)}),I.on("INTERACTION_SMART_ACTION",()=>{this.handleSmartAction(this.camera)}),I.on("CREDENTIAL_TRAY_HIGHLIGHT",t=>{this.isStudentWaitingCredential=t}),I.on("STUDENT_RECEIVED_CREDENTIAL",()=>{this.isStudentWaitingCredential=!1}),I.on("STUDENT_RECEIVED_CREDENTIAL_RETURN",()=>{this.isStudentWaitingCredential=!1}),I.on("STUDENT_RECEIVED_CREDENTIAL_REJECTED",()=>{this.isStudentWaitingCredential=!1}),I.on("INTERACTION_PLACE_NFC",()=>{this.heldGrabbable instanceof Xe&&!this.isStudentWaitingCredential&&this.placeCredentialOnNFC()}),I.on("STUDENT_RECEIVED_LAPTOP",t=>{const e=this.grabbables.find(n=>n.id===t.laptopId);e&&this.unregisterGrabbable(e)}),I.on("LAPTOP_RETURNED_TO_COUNTER",t=>{t.laptop&&!this.grabbables.includes(t.laptop)&&this.registerGrabbable(t.laptop)}),I.on("VR_TRIGGER_DOWN",t=>{this.handleAction(t.controller)}),I.on("VR_TRIGGER_UP",t=>{this.handleVRRelease(t.controller)}),I.on("VR_GRIP_DOWN",t=>{this.heldGrabbable instanceof we&&(this.isHoveringCart||this.isNearCart())?this.dockLaptopToCart(this.hoveredBayIndex||void 0):this.handleAction(t.controller)}),I.on("VR_GRIP_UP",t=>{this.handleVRRelease(t.controller)}),I.on("VR_HAND_PINCH_START",t=>{this.handleAction(t.hand)}),I.on("VR_HAND_PINCH_END",t=>{this.handleVRRelease(t.hand)}),I.on("INTERACTION_ROTATE_HELD",t=>{this.heldGrabbable&&this.heldGrabbable.rotateHeld?.(t)}),I.on("INTERACTION_ADJUST_DISTANCE",t=>{this.heldGrabbable&&this.heldGrabbable.adjustDistance?.(t)})}handleAction(t){if(this.heldGrabbable){if(this.heldGrabbable instanceof Xe&&(this.isHoveringNFCPlacement||this.isNearNFCScanner())){this.placeCredentialOnNFC();return}if(this.heldGrabbable instanceof we&&this.isHoveringCart){this.dockLaptopToCart(this.hoveredBayIndex||void 0);return}this.releaseObject();return}if(this.hoveredGrabbable&&!this.hoveredGrabbable.isGrabbed()){this.cart&&!this.cart.isDoorOpen&&this.isLaptopInsideCart(this.hoveredGrabbable)&&this.cart.openDoor(),this.grabObject(this.hoveredGrabbable,t);return}if(this.hoveredBayIndex&&this.cart&&this.cart.isSlotOccupied(this.hoveredBayIndex)){this.takeLaptopFromCart(t,this.hoveredBayIndex);return}if(this.isHoveringScreen&&this.computer&&this.lastScreenUV){this.computer.screenUI.handlePointerClick(this.lastScreenUV.x,this.lastScreenUV.y);return}if(this.isHoveringCartDoor&&this.cart){this.cart.toggleDoor();return}}handleSmartAction(t){if(this.heldGrabbable instanceof Xe){this.isStudentWaitingCredential||this.isNearStudent()?this.deliverCredentialToTray():this.placeCredentialOnNFC();return}if(this.heldGrabbable instanceof we){this.isHoveringCart||this.isNearCart()?this.dockLaptopToCart(this.hoveredBayIndex||void 0):this.releaseObject();return}if(!this.heldGrabbable){if(this.isHoveringCart||this.isNearCart()||this.hoveredBayIndex){this.takeLaptopFromCart(t,this.hoveredBayIndex||void 0);return}if(this.isNearNFCScanner()&&this.credential&&!this.credential.isGrabbed()){this.grabObject(this.credential,t);return}}}dockLaptopToCart(t){if(!this.cart||!(this.heldGrabbable instanceof we))return;const e=this.heldGrabbable;this.heldGrabbable=null,this.cart.isDoorOpen||this.cart.openDoor();let n=t;n||(this.cart.isSlotOccupied(e.slotIndex)?n=this.cart.getFirstAvailableSlot():n=e.slotIndex);const s=this.cart.getSlotWorldPosition(n),r=this.cart.getWorldEuler();this.scene.attach(e.group),e.setOpen(!1),e.release(s,r);const a=e.isMaintenance?"MANTENIMIENTO":"DISPONIBLE";Rn.updateStatus(e.id,a),this.cart.setSlotOccupied(n,e.id),I.emit("LAPTOP_SNAPPED_TO_CART",{id:e.id,slotIndex:n}),I.emit("OBJECT_RELEASED",{id:e.id,name:e.tag})}takeLaptopFromCart(t,e){if(!this.cart)return;let n=null,s=e;if(s)n=this.grabbables.find(r=>r instanceof we&&r.slotIndex===s&&!r.isGrabbed())||null;else for(let r=1;r<=5;r++){const a=this.grabbables.find(o=>o instanceof we&&o.slotIndex===r&&!o.isGrabbed());if(a){n=a,s=r;break}}n&&(this.cart.isDoorOpen||this.cart.openDoor(),this.grabObject(n,t),s&&this.cart.setSlotOccupied(s,null))}isLaptopInsideCart(t){if(!this.cart||!(t instanceof we))return!1;const e=new C;t.group.getWorldPosition(e);const n=new C;return this.cart.group.getWorldPosition(n),e.distanceTo(n)<.8}isNearCart(){if(!this.cart)return!1;const t=new C;return this.cart.group.getWorldPosition(t),this.camera.position.distanceTo(t)<2.5}grabObject(t,e){this.heldGrabbable=t,this.heldHolder=e,this.nfcSnapCooldown=1,t.grab(e),t instanceof we?(Rn.updateStatus(t.id,"EN_MANOS"),this.cart&&this.cart.setSlotOccupied(t.slotIndex,null),I.emit("OBJECT_GRABBED",{id:t.id,name:`${t.tag} (${t.isMaintenance?"Mantenimiento":"Disponible"})`})):t instanceof Xe?I.emit("OBJECT_GRABBED",{id:t.id,name:"Credencial UNAM (Juan Pérez López)"}):I.emit("OBJECT_GRABBED",{id:t.id,name:t.id})}placeCredentialOnNFC(){if(!(this.heldGrabbable instanceof Xe)||!this.nfcScanner)return;const t=this.heldGrabbable;this.heldGrabbable=null,this.heldHolder=null,this.scene.attach(t.group),this.nfcScanner.snapCredential(t),I.emit("OBJECT_RELEASED",{id:t.id,name:"Credencial UNAM"})}deliverCredentialToTray(){if(!(this.heldGrabbable instanceof Xe))return;const t=this.heldGrabbable;this.heldGrabbable=null,this.heldHolder=null,this.scene.attach(t.group);const e=new C(.38,1.102,.12),n=new le(0,-Math.PI/10,0);t.release(e,n),I.emit("OBJECT_RELEASED",{id:t.id,name:"Credencial UNAM"})}isNearStudent(){const t=new C;this.credential&&this.credential.group.getWorldPosition(t);const e=new C(.65,1.1,.55);return t.distanceTo(e)<1.35}isNearNFCScanner(){if(!this.nfcScanner||!this.credential||this.nfcSnapCooldown>0)return!1;const t=new C,e=new C;return this.credential.group.getWorldPosition(t),this.nfcScanner.group.getWorldPosition(e),t.distanceTo(e)<.2}handleVRRelease(t){if(!this.heldGrabbable||this.heldHolder&&this.heldHolder!==t&&!(this.heldHolder.parent===t.parent))return;const e=this.heldGrabbable;if(e instanceof Xe){if(this.nfcScanner&&this.nfcSnapCooldown<=0){const n=new C;this.nfcScanner.group.getWorldPosition(n);const s=new C;if(e.group.getWorldPosition(s),s.distanceTo(n)<.2){this.placeCredentialOnNFC();return}}this.releaseObject();return}if(e instanceof we){if(this.cart&&(this.isHoveringCart||this.isNearCart())){this.dockLaptopToCart(this.hoveredBayIndex||void 0);return}this.releaseObject();return}this.releaseObject()}releaseObject(){if(!this.heldGrabbable)return;const t=this.heldGrabbable;this.heldGrabbable=null,this.heldHolder=null;const e=new C,n=new Dn;if(t.group.getWorldPosition(e),t.group.getWorldQuaternion(n),this.scene.attach(t.group),t instanceof we){if(this.cart&&this.isHoveringCart){const o=this.cart.findNearestSlot(e,.75);if(o){this.dockLaptopToCart(o.slotIndex);return}}const s=be.clamp(e.x,-.4,.9),r=be.clamp(e.z,-.4,.4),a=new C(s,1.101,r);t.release(a,new le(0,-Math.PI/8,0)),Rn.updateStatus(t.id,"EN_MOSTRADOR"),I.emit("OBJECT_RELEASED",{id:t.id,name:t.tag})}else if(t instanceof Xe){if(this.nfcScanner&&this.nfcSnapCooldown<=0){const c=new C;if(this.nfcScanner.group.getWorldPosition(c),e.distanceTo(c)<.22){this.nfcScanner.snapCredential(t),I.emit("OBJECT_RELEASED",{id:t.id,name:"Credencial UNAM"});return}}const s=new C(.38,1.08,.12),r=e.distanceTo(s),a=e.x>.1&&e.z>-.35&&e.z<.5;if(r<.5||a){t.release(new C(.38,1.102,.12),new le(0,-Math.PI/10,0)),I.emit("OBJECT_RELEASED",{id:t.id,name:"Credencial UNAM"});return}const o=be.clamp(e.x,-.4,.9),l=be.clamp(e.z,-.4,.4);t.release(new C(o,1.102,l)),I.emit("OBJECT_RELEASED",{id:t.id,name:"Credencial UNAM"})}else t.release(),I.emit("OBJECT_RELEASED",{id:t.id,name:t.id})}update(t){if(this.nfcSnapCooldown>0&&(this.nfcSnapCooldown-=t),this.nfcScanner&&this.credential){const o=new C;this.credential.group.getWorldPosition(o),this.nfcScanner.checkProximity(o,this.credential.id),this.nfcScanner.update(t)}const e=[];if(this.xrManager.isXRPresenting?e.push(...this.xrManager.getActiveRaycasters()):(this.raycaster.setFromCamera(new Xt(0,0),this.camera),e.push({origin:this.raycaster.ray.origin,direction:this.raycaster.ray.direction})),this.heldGrabbable){this.heldGrabbable.update(t);const o=this.xrManager.getControllerGamepads();if(o.right&&o.right.buttons){const l=o.right.buttons[4]?.pressed,c=o.right.buttons[5]?.pressed,h=Math.abs(o.right.axes?.[2]||0)>.25?o.right.axes[2]:0,u=2.5*t;c?this.heldGrabbable.rotateHeld?.(u):l?this.heldGrabbable.rotateHeld?.(-u):h!==0&&this.heldGrabbable.rotateHeld?.(h*u)}if(o.left&&o.left.buttons){const l=o.left.buttons[4]?.pressed,c=o.left.buttons[5]?.pressed,h=.45*t;l?this.heldGrabbable.adjustDistance?.(h):c&&this.heldGrabbable.adjustDistance?.(-h)}if(this.heldGrabbable instanceof Xe&&this.nfcScanner){let l=!1;for(const c of e)if(this.raycaster.set(c.origin,c.direction),this.raycaster.far=3,this.raycaster.intersectObjects(this.nfcScanner.getPlacementTargets(),!0).length>0){l=!0;break}this.isHoveringNFCPlacement=l,this.isStudentWaitingCredential?I.emit("OBJECT_HOVER_START",{id:"deliver_student_card",prompt:"[Q/R] Rotar | [X/Y] Zoom | [F] Entregar al Alumno | [E] Dejar en Bandeja",key:"F"}):l||this.isNearNFCScanner()?I.emit("OBJECT_HOVER_START",{id:"nfc_placement",prompt:"[Q/R] Rotar | [X/Y o Rueda] Zoom | [F] Colocar en NFC | [E] Soltar",key:"F"}):I.emit("OBJECT_HOVER_START",{id:"holding_card",prompt:"[Q/R] Rotar | [X/Y o Rueda] Zoom | [E] Soltar en Mostrador | [F] Lector NFC",key:"E"});return}if(this.heldGrabbable instanceof we&&this.cart){let l=null,c=!1;for(const h of e){this.raycaster.set(h.origin,h.direction),this.raycaster.far=3.5;const u=this.raycaster.intersectObjects(this.cart.getBayHitboxes(),!0);if(u.length>0&&u[0].object.userData?.slotIndex){l=u[0].object.userData.slotIndex,c=!0;break}if(this.raycaster.intersectObject(this.cart.group,!0).length>0){c=!0;break}}if(this.hoveredBayIndex=l,this.isHoveringCart=c,c){const h=l?`Bahía 0${l}`:"Bahía del Carro 01";I.emit("OBJECT_HOVER_START",{id:"dock_laptop",prompt:`[Q/R] Rotar | [X/Y o Rueda] Zoom | [F] Guardar en ${h} | [E] Entregar`,key:"F"})}else I.emit("OBJECT_HOVER_START",{id:"holding_laptop",prompt:"[Q/R] Rotar | [X/Y o Rueda] Zoom | [E] Entregar en Mostrador | [F] Carro",key:"E"});return}return}let n=!1,s=!1,r=null,a=null;for(const o of e){this.raycaster.set(o.origin,o.direction),this.raycaster.far=3.5;for(const l of this.grabbables)if(this.raycaster.intersectObjects(l.getRaycastTargets(),!0).length>0){a=l;break}if(a)break;if(this.cart){const l=this.raycaster.intersectObjects(this.cart.getBayHitboxes(),!0);if(l.length>0&&l[0].object.userData?.slotIndex){r=l[0].object.userData.slotIndex;break}}if(this.computer){const l=this.raycaster.intersectObject(this.computer.screenMesh,!1);if(l.length>0&&l[0].uv){n=!0,this.lastScreenUV=l[0].uv,this.computer.screenUI.handlePointerMove(l[0].uv.x,l[0].uv.y);break}}if(this.cart&&this.raycaster.intersectObjects([this.cart.doorHandle,this.cart.doorHinge],!0).length>0){s=!0;break}}if(this.hoveredBayIndex=r,n!==this.isHoveringScreen&&(this.isHoveringScreen=n,this.isHoveringScreen?I.emit("OBJECT_HOVER_START",{id:"computer_screen",prompt:"Interactuar con Pantalla PC PUMA",key:"E"}):I.emit("OBJECT_HOVER_END","computer_screen")),s!==this.isHoveringCartDoor)if(this.isHoveringCartDoor=s,this.isHoveringCartDoor&&this.cart){const o=this.cart.isDoorOpen?"Cerrar Carro 01":"Abrir Carro 01";I.emit("OBJECT_HOVER_START",{id:"cart_door",prompt:o,key:"E"})}else I.emit("OBJECT_HOVER_END","cart_door");if(r&&!a&&this.cart&&this.cart.isSlotOccupied(r)){I.emit("OBJECT_HOVER_START",{id:`bay_${r}`,prompt:`[E] o [F] Tomar Laptop 0${r}`,key:"E"});return}if(a!==this.hoveredGrabbable&&(this.hoveredGrabbable&&(this.hoveredGrabbable.setHover(!1),I.emit("OBJECT_HOVER_END",this.hoveredGrabbable.id)),this.hoveredGrabbable=a,this.hoveredGrabbable)){this.hoveredGrabbable.setHover(!0);let o="Tomar Objeto",l="E";this.hoveredGrabbable instanceof we?(o=`[E] Tomar ${this.hoveredGrabbable.tag}  |  [F] Extraer rápido`,l="E"):this.hoveredGrabbable instanceof Xe&&(o="Tomar Credencial UNAM",l="E"),I.emit("OBJECT_HOVER_START",{id:this.hoveredGrabbable.id,prompt:o,key:l})}}}class pm{reticle;actionPrompt;promptText;statusMode;statusHolding;statusState;statusScore;statusStreak;statusTimer;floatingContainer;constructor(){this.reticle=document.getElementById("reticle"),this.actionPrompt=document.getElementById("action-prompt"),this.promptText=document.getElementById("prompt-text"),this.statusMode=document.getElementById("status-mode"),this.statusHolding=document.getElementById("status-holding"),this.statusState=document.getElementById("status-state"),this.statusScore=document.getElementById("status-score"),this.statusStreak=document.getElementById("status-streak"),this.statusTimer=document.getElementById("status-timer"),this.floatingContainer=document.getElementById("floating-scores-container"),this.setupEventListeners(),this.setupMenuModals()}setupEventListeners(){const t=document.getElementById("status-panel"),e=document.getElementById("controls-guide"),n=document.getElementById("reticle");I.on("SIMULATION_STARTED",()=>{t?.classList.remove("pre-start-hidden"),e?.classList.remove("pre-start-hidden"),n?.classList.remove("pre-start-hidden")}),I.on("OBJECT_HOVER_START",s=>{if(this.reticle&&this.reticle.classList.add("active"),this.actionPrompt&&this.promptText){const r=this.actionPrompt.querySelector(".key-badge");r&&(r.textContent=s.key||"E"),this.promptText.textContent=s.prompt,this.actionPrompt.classList.remove("hidden")}}),I.on("OBJECT_HOVER_END",()=>{this.reticle&&this.reticle.classList.remove("active"),this.actionPrompt&&this.actionPrompt.classList.add("hidden")}),I.on("OBJECT_GRABBED",s=>{if(this.reticle&&(this.reticle.classList.remove("active"),this.reticle.classList.add("holding")),this.actionPrompt&&this.promptText){const r=this.actionPrompt.querySelector(".key-badge");r&&(r.textContent="Q/R • X/Y"),this.promptText.textContent="Rotar / Zoom  |  [E] Soltar en Mostrador  |  [F] Acción Rápida",this.actionPrompt.classList.remove("hidden")}this.statusHolding&&(this.statusHolding.textContent=s.name,this.statusHolding.style.color="#38BDF8"),this.statusState&&(this.statusState.textContent="Manipulando Equipo")}),I.on("OBJECT_RELEASED",()=>{this.reticle&&this.reticle.classList.remove("holding"),this.actionPrompt&&this.actionPrompt.classList.add("hidden"),this.statusHolding&&(this.statusHolding.textContent="Libre",this.statusHolding.style.color="#FFFFFF"),this.statusState&&(this.statusState.textContent="Operador Activo")}),I.on("XR_SESSION_STATE",s=>{this.statusMode&&(this.statusMode.textContent=s?"WebXR (Meta Quest)":"Escritorio (WASD)",this.statusMode.style.color=s?"#10B981":"#FFFFFF");const r=document.getElementById("hud-overlay");r&&(r.style.opacity=s?"0.2":"1.0")}),I.on("SCORE_UPDATED",s=>{this.statusScore&&(this.statusScore.textContent=`${s.score.toLocaleString()} PTS`),this.statusStreak&&(this.statusStreak.textContent=`x${s.streak} ${s.streak>1?"🔥":""}`,this.statusStreak.style.color=s.streak>1?"#F59E0B":"#10B981")}),I.on("FLOATING_SCORE_DISPLAY",s=>{this.showFloatingScore(s)})}showFloatingScore(t){if(!this.floatingContainer)return;const e=document.createElement("div");e.className=`floating-score-item ${t.isBonus?"bonus":"penalty"}`,e.innerHTML=`
      <span class="score-val">${t.text}</span>
      ${t.streak?`<span class="score-streak">${t.streak}</span>`:""}
    `,this.floatingContainer.appendChild(e),setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.remove()},400)},1800)}setupMenuModals(){const t=document.getElementById("btn-controls"),e=document.getElementById("modal-controls"),n=document.getElementById("btn-close-controls"),s=document.getElementById("btn-modal-controls-ok"),r=document.getElementById("btn-settings"),a=document.getElementById("modal-settings"),o=document.getElementById("btn-close-settings"),l=document.getElementById("btn-modal-settings-save"),c=T=>{T&&T.classList.remove("hidden")},h=T=>{T&&T.classList.add("hidden")};t?.addEventListener("click",T=>{T.stopPropagation(),c(e)}),n?.addEventListener("click",T=>{T.stopPropagation(),h(e)}),s?.addEventListener("click",T=>{T.stopPropagation(),h(e)}),r?.addEventListener("click",T=>{T.stopPropagation(),c(a)}),o?.addEventListener("click",T=>{T.stopPropagation(),h(a)}),l?.addEventListener("click",T=>{T.stopPropagation(),h(a)});const u=document.getElementById("btn-scores"),f=document.getElementById("modal-scores"),m=document.getElementById("btn-close-scores"),g=document.getElementById("btn-modal-scores-ok"),x=()=>{const T=document.getElementById("modal-score-val"),y=document.getElementById("modal-rank-val"),E=document.getElementById("modal-streak-val"),F=document.getElementById("modal-loans-count"),b=document.getElementById("modal-inspections-count"),R=document.getElementById("modal-incidents-count"),L=document.getElementById("modal-shift-time"),M=document.getElementById("modal-score-history");T&&(T.textContent=Zt.currentScore.toLocaleString()),y&&(y.textContent=Zt.getOperatorRank()),E&&(E.textContent=`x${Zt.maxStreakReached}`),F&&(F.textContent=Zt.completedLoans.toString()),b&&(b.textContent=Zt.inspectedReturns.toString()),R&&(R.textContent=Zt.detectedIncidents.toString()),L&&(L.textContent=Zt.getFormattedShiftTime()),M&&(Zt.history.length===0?M.innerHTML='<div class="history-empty">Inicia tu turno pulsando EMPEZAR para registrar actividades.</div>':M.innerHTML=Zt.history.slice(0,8).map(S=>{const w=S.points>=0?"bonus":"penalty",V=S.points>=0?`+${S.points}`:`${S.points}`;return`
                <div class="history-item-row">
                  <span class="hist-time">[${S.timestamp}]</span>
                  <span class="hist-reason">${S.reason}</span>
                  <span class="hist-pts ${w}">${V} PTS</span>
                </div>
              `}).join(""))};u?.addEventListener("click",T=>{T.stopPropagation(),x(),c(f)}),m?.addEventListener("click",T=>{T.stopPropagation(),h(f)}),g?.addEventListener("click",T=>{T.stopPropagation(),h(f)});const p=document.getElementById("setting-volume"),d=document.getElementById("volume-val");p?.addEventListener("input",()=>{d&&(d.textContent=`${p.value}%`),I.emit("SETTING_VOLUME_CHANGED",parseInt(p.value,10)/100)})}update(){this.statusTimer&&(this.statusTimer.textContent=Zt.getFormattedShiftTime())}}class vi{static instance;tasks=[{id:"task_receive_student",title:"1. Recepción del Estudiante",description:"Recibe a Juan Pérez López en el mostrador de atención PC PUMA.",hint:"Espera a que el alumno llegue al mostrador con su credencial universitaria.",completed:!1},{id:"task_scan_nfc",title:"2. Escaneo en Lector NFC",description:"Toma la credencial de Juan y colócala en el lector NFC con diana dorada (o pulsa [F]).",hint:"Acerca la credencial al lector NFC del mostrador hasta escuchar el tono y ver el LED verde.",completed:!1},{id:"task_validate",title:"3. Validación en Computadora",description:'En el monitor ampliado de 32", haz click en el botón [ VALIDAR USUARIO ].',hint:"Apunta a la pantalla y pulsa [ VALIDAR USUARIO ] para confirmar al alumno.",completed:!1},{id:"task_return_cred_loan",title:"4. Devolver Credencial al Alumno",description:"Toma la credencial del sensor NFC y entrégala a Juan sobre el mostrador.",hint:"Coloca la credencial frente a Juan en el mostrador para que la reciba.",completed:!1},{id:"task_deliver_laptop",title:"5. Asignación y Entrega de Laptop",description:"Acércate al Carro 01, toma la Laptop 02 con [E] o [F] y colócala en el mostrador.",hint:"Apunta a la Bahía 02 y pulsa [E] o [F] para extraer la Laptop 02 y deposítala en la zona de entrega.",completed:!1},{id:"task_return_reception",title:"6. Recepción de Devolución",description:"Recibe a Juan de regreso en el mostrador con el equipo y su credencial.",hint:"Espera el término de su práctica o pulsa [ 🔔 SOLICITAR DEVOLUCIÓN ] en la pestaña DEVOLUCIÓN.",completed:!1},{id:"task_scan_return_nfc",title:"7. Re-escaneo de Credencial en Sensor",description:"Toma la credencial de Juan y pásala nuevamente por el sensor NFC.",hint:"Coloca la credencial en el sensor NFC para registrar la recepción del folio.",completed:!1},{id:"task_inspect",title:"8. Peritaje e Inspección Técnica",description:"En la pestaña 6. INSPECCIÓN, revisa el equipo y emite dictamen [ ✔ EQUIPO EN BUEN ESTADO ].",hint:"Apunta a la pantalla y haz click en [ ✔ EQUIPO EN BUEN ESTADO ] para dar visto bueno.",completed:!1},{id:"task_return_to_cart",title:"9. Resguardo en Carro 01",description:"Toma la Laptop 02 con [E] o Click y presiona [F] cerca del Carro 01 para guardarla.",hint:"Acércate al Carro 01 y pulsa [F] (o [E]/Click) para guardarla y conectarla a carga en la Bahía 02.",completed:!1},{id:"task_return_cred_final",title:"10. Devolver Credencial al Alumno",description:"Toma la credencial del sensor NFC y deposítala frente a Juan para finalizar el trámite.",hint:"Coloca la credencial en el mostrador frente a Juan para que la tome y concluya el trámite.",completed:!1},{id:"task_view_results",title:"11. Balance y Resultados de Operación",description:"En el monitor, abre la pestaña 7. RESULTADOS y consulta las métricas del préstamo.",hint:"Haz click en la pestaña RESULTADOS para ver la puntuación oficial y rango institucional UNAM.",completed:!1}];currentStepIndex=0;totalDistanceWalked=0;constructor(){this.setupListeners()}static getInstance(){return vi.instance||(vi.instance=new vi),vi.instance}setupListeners(){I.on("STUDENT_AT_COUNTER",()=>{this.completeTask("task_receive_student")}),I.on("PLAYER_MOVED",t=>{this.totalDistanceWalked+=t}),I.on("CREDENTIAL_SCANNED",()=>{this.completeTask("task_scan_nfc")}),I.on("USER_VALIDATION_TOGGLED",t=>{t&&this.completeTask("task_validate")}),I.on("STUDENT_RECEIVED_CREDENTIAL",()=>{this.completeTask("task_return_cred_loan")}),I.on("STUDENT_RECEIVED_LAPTOP",()=>{this.completeTask("task_deliver_laptop")}),I.on("LOAN_RETURN_READY_FOR_INSPECTION",()=>{this.completeTask("task_return_reception")}),I.on("RETURN_CREDENTIAL_SCANNED",()=>{this.completeTask("task_scan_return_nfc")}),I.on("INSPECTION_DECISION_MADE",()=>{this.completeTask("task_inspect")}),I.on("LAPTOP_SNAPPED_TO_CART",()=>{this.tasks.find(t=>t.id==="task_inspect")?.completed&&this.completeTask("task_return_to_cart")}),I.on("STUDENT_RECEIVED_CREDENTIAL_RETURN",()=>{this.completeTask("task_return_cred_final")}),I.on("SCREEN_TAB_CHANGED",t=>{t==="RESULTADOS"&&this.completeTask("task_view_results")})}completeTask(t){const e=this.tasks.find(n=>n.id===t);e&&!e.completed&&(e.completed=!0,this.updateCurrentStep(),I.emit("TUTORIAL_TASK_COMPLETED",{task:e,progress:this.getProgressPercentage(),currentTask:this.getCurrentTask(),allCompleted:this.isAllCompleted()}),this.isAllCompleted()&&I.emit("TUTORIAL_FINISHED"))}updateCurrentStep(){const t=this.tasks.findIndex(e=>!e.completed);this.currentStepIndex=t!==-1?t:this.tasks.length}getCurrentTask(){return this.currentStepIndex<this.tasks.length?this.tasks[this.currentStepIndex]:null}getProgressPercentage(){const t=this.tasks.filter(e=>e.completed).length;return Math.round(t/this.tasks.length*100)}isAllCompleted(){return this.tasks.every(t=>t.completed)}resetTutorial(){this.tasks.forEach(t=>t.completed=!1),this.currentStepIndex=0,this.totalDistanceWalked=0,I.emit("TUTORIAL_RESET")}}const Wi=vi.getInstance();class mm{container;banner;modal=null;isCollapsed=!1;currentStudentInfo="Juan Pérez López (1/3)";constructor(){this.container=document.createElement("div"),this.container.id="checklist-panel",this.container.classList.add("pre-start-hidden"),this.banner=document.createElement("div"),this.banner.id="tutorial-banner",this.banner.classList.add("pre-start-hidden"),document.body.appendChild(this.container),document.body.appendChild(this.banner),this.setupEventListeners(),this.render(),this.updateBanner()}setupEventListeners(){I.on("SIMULATION_STARTED",()=>{this.container.classList.remove("pre-start-hidden"),this.banner.classList.remove("pre-start-hidden"),this.container.classList.add("panel-fade-in"),this.banner.classList.add("banner-fade-in")}),I.on("ACTIVE_STUDENT_CHANGED",t=>{this.currentStudentInfo=`${t.student.name} (${t.index}/${t.total})`,this.render(),this.updateBanner()}),I.on("NEXT_STUDENT_APPROACHING",t=>{this.currentStudentInfo=`Siguiente: ${t.student.name} (${t.queueIndex}/${t.totalQueue})...`,this.render(),this.updateBanner()}),I.on("ALL_STUDENTS_COMPLETED",()=>{this.currentStudentInfo="✔ 3/3 Alumnos Atendidos",this.render(),this.updateBanner()}),I.on("TUTORIAL_TASK_COMPLETED",()=>{this.render(),this.updateBanner()}),I.on("TUTORIAL_FINISHED",()=>{this.render(),this.updateBanner(),this.showCelebrationModal()}),I.on("TUTORIAL_RESET",()=>{this.render(),this.updateBanner(),this.modal&&(this.modal.remove(),this.modal=null)})}render(){const t=Wi.getProgressPercentage(),e=Wi.tasks,n=e.filter(r=>r.completed).length;this.container.innerHTML=`
      <div class="checklist-header">
        <div class="checklist-title-group">
          <span class="checklist-icon">📋</span>
          <div>
            <h3 class="checklist-title">Checklist de Operación</h3>
            <span class="checklist-subtitle">PC PUMA • ${this.currentStudentInfo}</span>
          </div>
        </div>
        <button id="btn-toggle-checklist" class="btn-toggle" title="Minimizar / Expandir">
          ${this.isCollapsed?"▼":"▲"}
        </button>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${t}%"></div>
      </div>
      <div class="progress-label">
        <span>Progreso: <strong>${t}%</strong></span>
        <span>(${n} de ${e.length} tareas)</span>
      </div>

      <div class="checklist-body ${this.isCollapsed?"collapsed":""}">
        ${e.map((r,a)=>{const l=Wi.getCurrentTask()?.id===r.id;return`
            <div class="task-item ${r.completed?"completed":""} ${l?"active":""}">
              <div class="task-check">
                ${r.completed?"✔":a+1}
              </div>
              <div class="task-content">
                <span class="task-name">${r.title}</span>
                <span class="task-desc">${r.description}</span>
              </div>
            </div>
          `}).join("")}
      </div>
    `;const s=document.getElementById("btn-toggle-checklist");s&&s.addEventListener("click",r=>{r.stopPropagation(),this.isCollapsed=!this.isCollapsed,this.render()})}updateBanner(){const t=Wi.getCurrentTask();t?(this.banner.innerHTML=`
        <div class="banner-badge">MISIÓN ACTUAL</div>
        <div class="banner-text"><strong>${t.title}:</strong> ${t.hint}</div>
      `,this.banner.classList.remove("hidden")):this.banner.classList.add("hidden")}showCelebrationModal(){this.modal||(this.modal=document.createElement("div"),this.modal.id="celebration-modal",this.modal.innerHTML=`
      <div class="modal-card">
        <div class="modal-badge">UNAM • PC PUMA XR</div>
        <h2>¡Ciclo Operativo Concluido con Éxito!</h2>
        <p class="modal-subtitle">Has completado el ciclo integral de préstamo, devolución, peritaje y resguardo</p>

        <div class="modal-achievements">
          <div class="achieve-row"><span>✔ Recepción de Juan y validación de Credencial NFC</span><strong>100%</strong></div>
          <div class="achieve-row"><span>✔ Extracción y entrega de Laptop 02</span><strong>100%</strong></div>
          <div class="achieve-row"><span>✔ Sesión de estudio y recepción de devolución</span><strong>100%</strong></div>
          <div class="achieve-row"><span>✔ Peritaje técnico conforme a norma institucional</span><strong>100%</strong></div>
          <div class="achieve-row"><span>✔ Resguardo final en Carro 01 y cierre de folio</span><strong>100%</strong></div>
        </div>

        <div class="modal-buttons">
          <button id="btn-reset-tutorial" class="btn-modal-secondary">Reiniciar Misión</button>
          <button id="btn-close-modal" class="btn-modal-primary">Continuar en Modo Libre</button>
        </div>
      </div>
    `,document.body.appendChild(this.modal),document.getElementById("btn-close-modal")?.addEventListener("click",()=>{this.modal&&(this.modal.remove(),this.modal=null)}),document.getElementById("btn-reset-tutorial")?.addEventListener("click",()=>{Wi.resetTutorial()}))}}class gm{engine;xrManager;room;counter;cart;computer;nfcScanner;credential;laptops=[];desktopControls;interactionSystem;hud;checklistUI;loanManager;npcManager;scoreManager;constructor(){console.log("[PC PUMA XR] Iniciando Fase 6: Sistema Competitivo de Puntuación y Evaluación Integral..."),Qe.playClickSound(),this.engine=new jp("app"),this.xrManager=new Zp(this.engine.renderer,this.engine.xrRig),this.room=new Jp,this.engine.scene.add(this.room.group),this.counter=new Qp,this.engine.scene.add(this.counter.group),this.cart=new tm,this.engine.scene.add(this.cart.group),this.computer=new im,this.engine.scene.add(this.computer.group),this.nfcScanner=new sm,this.engine.scene.add(this.nfcScanner.group),this.credential=new Xe,this.credential.group.visible=!1,this.engine.scene.add(this.credential.group),this.interactionSystem=new fm(this.engine.camera,this.engine.scene,this.xrManager),this.interactionSystem.setComputer(this.computer),this.interactionSystem.setCart(this.cart),this.interactionSystem.setNFCScanner(this.nfcScanner),this.interactionSystem.setCredential(this.credential),this.interactionSystem.registerGrabbable(this.credential),this.setupLaptops(),this.loanManager=fe,this.npcManager=new Ns(this.engine.scene),this.npcManager.setCredential(this.credential),this.npcManager.setLaptops(this.laptops),this.scoreManager=Zt,this.desktopControls=new um(this.engine.camera),this.hud=new pm,this.checklistUI=new mm,this.engine.addUpdatable(t=>{this.xrManager.updateLocomotion(t),this.desktopControls.update(t),this.interactionSystem.update(t),this.cart.update(t),this.npcManager.update(t,this.engine.camera.position),this.scoreManager.update(t),this.hud.update()}),console.log("[PC PUMA XR] Fase 6 activa y totalmente operativa.")}setupLaptops(){const t=new le(0,this.cart.group.rotation.y,0),e=new we({id:"laptop_01",slotIndex:1,tag:"PC-PUMA-01",initialPosition:new C(.65,1.08,.05),initialRotation:new le(0,-Math.PI/8,0),startsClosed:!1});this.laptops.push(e),this.engine.scene.add(e.group),this.interactionSystem.registerGrabbable(e),[{slot:2,tag:"PC-PUMA-02",isMaintenance:!1},{slot:3,tag:"PC-PUMA-03",isMaintenance:!0},{slot:4,tag:"PC-PUMA-04",isMaintenance:!1},{slot:5,tag:"PC-PUMA-05",isMaintenance:!1}].forEach(s=>{const r=this.cart.getSlotWorldPosition(s.slot),a=new we({id:`laptop_0${s.slot}`,slotIndex:s.slot,tag:s.tag,initialPosition:r,initialRotation:t,isMaintenance:s.isMaintenance,startsClosed:!0});this.laptops.push(a),this.engine.scene.add(a.group),this.interactionSystem.registerGrabbable(a),this.cart.setSlotOccupied(s.slot,a.id)})}}window.addEventListener("DOMContentLoaded",()=>{new gm});
