var pl=0,Vo=1,ml=2;var Ho=1,na=2,mn=3,wn=0,Dt=1,jt=2,Dn=0,ri=1,Go=2,Wo=3,qo=4,gl=5,Wn=100,vl=101,_l=102,xl=103,yl=104,Ml=200,Sl=201,bl=202,El=203,Tr=204,Ar=205,Tl=206,Al=207,wl=208,Cl=209,Rl=210,Il=211,Pl=212,Dl=213,Ll=214,ia=0,sa=1,ra=2,ai=3,aa=4,oa=5,ca=6,la=7,Xo=0,Ul=1,Nl=2,Ln=0,Fl=1,Ol=2,Bl=3,ua=4,zl=5,kl=6,Vl=7;var Yo=300,fi=301,pi=302,ha=303,da=304,qs=306,wr=1e3,Gn=1001,Cr=1002,Jt=1003,Hl=1004;var Xs=1005;var on=1006,fa=1007;var Zn=1008;var un=1009,$o=1010,Zo=1011,Zi=1012,pa=1013,Jn=1014,gn=1015,Ji=1016,ma=1017,ga=1018,Ki=1020,Jo=35902,Ko=35899,jo=1021,Qo=1022,Qt=1023,Vi=1026,ji=1027,ec=1028,va=1029,tc=1030,_a=1031;var xa=1033,Ys=33776,$s=33777,Zs=33778,Js=33779,ya=35840,Ma=35841,Sa=35842,ba=35843,Ea=36196,Ta=37492,Aa=37496,wa=37808,Ca=37809,Ra=37810,Ia=37811,Pa=37812,Da=37813,La=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Va=36492,Ha=36494,Ga=36495,Wa=36283,qa=36284,Xa=36285,Ya=36286;var xs=2300,Rr=2301,Er=2302,Do=2400,Lo=2401,Uo=2402;var Gl=3200,Wl=3201;var nc=0,ql=1,Un="",Tt="srgb",oi="srgb-linear",ys="linear",Qe="srgb";var si=7680;var No=519,Xl=512,Yl=513,$l=514,ic=515,Zl=516,Jl=517,Kl=518,jl=519,Fo=35044;var sc="300 es",an=2e3,Ms=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=1234567,ms=Math.PI/180,Hi=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function rc(i,e){return(i%e+e)%e}function Qu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eh(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function th(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function nh(i,e=1){return e-Math.abs(rc(i,e*2)-e)}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ah(i,e){return i+Math.random()*(e-i)}function oh(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(qc=i);let e=qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*ms}function uh(i){return i*Hi}function hh(i){return(i&i-1)===0&&i!==0}function dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mi={DEG2RAD:ms,RAD2DEG:Hi,generateUUID:Qi,clamp:qe,euclideanModulo:rc,mapLinear:Qu,inverseLerp:eh,lerp:gs,damp:th,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:ch,degToRad:lh,radToDeg:uh,isPowerOfTwo:hh,ceilPowerOfTwo:dh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:Pt,denormalize:zi},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],p=r[a+0],f=r[a+1],v=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==p||c!==f||u!==v){let m=1-o,d=l*p+c*f+u*v+h*x,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let w=Math.sqrt(E),A=Math.atan2(w,d*T);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}let y=o*T;if(l=l*m+p*y,c=c*m+f*y,u=u*m+v*y,h=h*m+x*y,m===1-o){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*f-c*p,e[t+1]=l*v+u*p+c*h-o*f,e[t+2]=c*v+u*f+o*p-l*h,e[t+3]=u*v-o*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h-p*f*v;break;case"YXZ":this._x=p*u*h+c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h+p*f*v;break;case"ZXY":this._x=p*u*h-c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h-p*f*v;break;case"ZYX":this._x=p*u*h-c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h+p*f*v;break;case"YZX":this._x=p*u*h+c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h-p*f*v;break;case"XZY":this._x=p*u*h-c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h+p*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new P,Xc=new Rn,Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],v=n[8],x=s[0],m=s[3],d=s[6],T=s[1],E=s[4],y=s[7],w=s[2],A=s[5],I=s[8];return r[0]=a*x+o*T+l*w,r[3]=a*m+o*E+l*A,r[6]=a*d+o*y+l*I,r[1]=c*x+u*T+h*w,r[4]=c*m+u*E+h*A,r[7]=c*d+u*y+h*I,r[2]=p*x+f*T+v*w,r[5]=p*m+f*E+v*A,r[8]=p*d+f*y+v*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,p=o*l-u*r,f=c*r-a*l,v=t*h+n*p+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Ve;function ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ql(){let i=Ss("canvas");return i.style.display="block",i}var Yc={};function Gi(i){i in Yc||(Yc[i]=!0,console.warn(i))}function eu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $c=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mh(){let i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Ze=mh();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Ir=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ss("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gh=0,Wi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vh=0,lo=new P,Ut=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=on,a=Zn,o=Qt,l=un,c=i.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Qi(),this.name="",this.source=new Wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Yo;Ut.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,w=(d+1)/2,A=(u+p)/4,I=(h+x)/4,D=(v+m)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=I/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(h-x)/T,this.z=(p-u)/T,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Pr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),ar.subVectors(this.max,hs),Ci.subVectors(e.a,hs),Ri.subVectors(e.b,hs),Ii.subVectors(e.c,hs),Fn.subVectors(Ri,Ci),On.subVectors(Ii,Ri),ei.subVectors(Ci,Ii);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ei.z,ei.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!uo(t,Ci,Ri,Ii,ar)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,Ci,Ri,Ii,ar))?!1:(or.crossVectors(Fn,On),t=[or.x,or.y,or.z],uo(t,Ci,Ri,Ii,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,rr=new qn,Ci=new P,Ri=new P,Ii=new P,Fn=new P,On=new P,ei=new P,hs=new P,ar=new P,or=new P,ti=new P;function uo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);let o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var _h=new qn,ds=new P,ho=new P,qi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);let t=ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(ho)),this.expandByPoint(ds.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new P,fo=new P,cr=new P,Bn=new P,po=new P,lr=new P,mo=new P,Es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fo.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(fo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=Bn.dot(this.direction),l=-Bn.dot(cr),c=Bn.lengthSq(),u=Math.abs(1-a*a),h,p,f,v;if(u>0)if(h=a*l-o,p=a*o-l,v=r*u,h>=0)if(p>=-v)if(p<=v){let x=1/u;h*=x,p*=x,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fo).addScaledVector(cr,p),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){po.subVectors(t,e),lr.subVectors(n,e),mo.crossVectors(po,lr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);let l=o*this.direction.dot(lr.crossVectors(Bn,lr));if(l<0)return null;let c=o*this.direction.dot(po.cross(Bn));if(c<0||l+c>a)return null;let u=-o*Bn.dot(mo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,p,f,v,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,p,f,v,x,m)}set(e,t,n,s,r,a,o,l,c,u,h,p,f,v,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*h,v=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=p-x*c,t[9]=-o*l,t[2]=x-p*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*h,v=c*u,x=c*h;t[0]=p+x*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=x+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*h,v=c*u,x=c*h;t[0]=p-x*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*h,v=o*u,x=o*h;t[0]=l*u,t[4]=v*c-f,t[8]=p*c+x,t[1]=l*h,t[5]=x*c+p,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-p*h,t[8]=v*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+v,t[10]=p-x*h}else if(e.order==="XZY"){let p=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+x,t[5]=a*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,yh)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),zn.crossVectors(n,kt),zn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),zn.crossVectors(n,kt)),zn.normalize(),ur.crossVectors(kt,zn),s[0]=zn.x,s[4]=ur.x,s[8]=kt.x,s[1]=zn.y,s[5]=ur.y,s[9]=kt.y,s[2]=zn.z,s[6]=ur.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],v=n[2],x=n[6],m=n[10],d=n[14],T=n[3],E=n[7],y=n[11],w=n[15],A=s[0],I=s[4],D=s[8],b=s[12],S=s[1],L=s[5],B=s[9],k=s[13],Y=s[2],K=s[6],$=s[10],ie=s[14],q=s[3],oe=s[7],fe=s[11],Ae=s[15];return r[0]=a*A+o*S+l*Y+c*q,r[4]=a*I+o*L+l*K+c*oe,r[8]=a*D+o*B+l*$+c*fe,r[12]=a*b+o*k+l*ie+c*Ae,r[1]=u*A+h*S+p*Y+f*q,r[5]=u*I+h*L+p*K+f*oe,r[9]=u*D+h*B+p*$+f*fe,r[13]=u*b+h*k+p*ie+f*Ae,r[2]=v*A+x*S+m*Y+d*q,r[6]=v*I+x*L+m*K+d*oe,r[10]=v*D+x*B+m*$+d*fe,r[14]=v*b+x*k+m*ie+d*Ae,r[3]=T*A+E*S+y*Y+w*q,r[7]=T*I+E*L+y*K+w*oe,r[11]=T*D+E*B+y*$+w*fe,r[15]=T*b+E*k+y*ie+w*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],f=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*f-n*l*f)+x*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*p+s*a*h-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],f=e[11],v=e[12],x=e[13],m=e[14],d=e[15],T=h*m*c-x*p*c+x*l*f-o*m*f-h*l*d+o*p*d,E=v*p*c-u*m*c-v*l*f+a*m*f+u*l*d-a*p*d,y=u*x*c-v*h*c+v*o*f-a*x*f-u*o*d+a*h*d,w=v*h*l-u*x*l-v*o*p+a*x*p+u*o*m-a*h*m,A=t*T+n*E+s*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=T*I,e[1]=(x*p*r-h*m*r-x*s*f+n*m*f+h*s*d-n*p*d)*I,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*I,e[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*f-n*l*f)*I,e[4]=E*I,e[5]=(u*m*r-v*p*r+v*s*f-t*m*f-u*s*d+t*p*d)*I,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*d-t*l*d)*I,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*I,e[8]=y*I,e[9]=(v*h*r-u*x*r-v*n*f+t*x*f+u*n*d-t*h*d)*I,e[10]=(a*x*r-v*o*r+v*n*c-t*x*c-a*n*d+t*o*d)*I,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*I,e[12]=w*I,e[13]=(u*x*s-v*h*s+v*n*p-t*x*p-u*n*m+t*h*m)*I,e[14]=(v*o*s-a*x*s-v*n*l+t*x*l+a*n*m-t*o*m)*I,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*p+t*o*p)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,p=r*c,f=r*u,v=r*h,x=a*u,m=a*h,d=o*h,T=l*c,E=l*u,y=l*h,w=n.x,A=n.y,I=n.z;return s[0]=(1-(x+d))*w,s[1]=(f+y)*w,s[2]=(v-E)*w,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(p+d))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(v+E)*I,s[9]=(m-T)*I,s[10]=(1-(p+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Pi.set(s[0],s[1],s[2]).length(),a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let c=1/r,u=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),v,x;if(l)v=r/(a-r),x=a*r/(a-r);else if(o===an)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s),v,x;if(l)v=1/(a-r),x=a/(a-r);else if(o===an)v=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)v=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pi=new P,sn=new ut,xh=new P(0,0,0),yh=new P(1,1,1),zn=new P,ur=new P,kt=new P,Jc=new ut,Kc=new Rn,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Xi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mh=0,jc=new P,Di=new Rn,bn=new ut,hr=new P,fs=new P,Sh=new P,bh=new Rn,Qc=new P(1,0,0),el=new P(0,1,0),tl=new P(0,0,1),nl={type:"added"},Eh={type:"removed"},Li={type:"childadded",child:null},go={type:"childremoved",child:null},Ct=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new cn,n=new Rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Qc,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qc,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(fs,hr,this.up):bn.lookAt(hr,fs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(bn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nl),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eh),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new P(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new P,En=new P,vo=new P,Tn=new P,Ui=new P,Ni=new P,il=new P,_o=new P,xo=new P,yo=new P,Mo=new ht,So=new ht,bo=new ht,Hn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),En.subVectors(n,t),vo.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(En),l=rn.dot(vo),c=En.dot(En),u=En.dot(vo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let p=1/h,f=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mo.setScalar(0),So.setScalar(0),bo.setScalar(0),Mo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(bo,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),En.subVectors(e,t),rn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),_o.subVectors(e,n);let l=Ui.dot(_o),c=Ni.dot(_o);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,s);let u=Ui.dot(xo),h=Ni.dot(xo);if(u>=0&&h<=u)return t.copy(s);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ui,a);yo.subVectors(e,r);let f=Ui.dot(yo),v=Ni.dot(yo);if(v>=0&&f<=v)return t.copy(r);let x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ni,o);let m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return il.subVectors(r,s),o=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(il,o);let d=1/(m+x+p);return a=x*d,o=p*d,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=rc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(Et.copy(this),e),Math.round(qe(Et.r*255,0,255))*65536+Math.round(qe(Et.g*255,0,255))*256+Math.round(qe(Et.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Tt){Ze.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(dr);let n=gs(kn.h,dr.h,t),s=gs(kn.s,dr.s,t),r=gs(kn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Xe;Xe.NAMES=tu;var Th=0,Xn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=ri,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Ar,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},In=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new P,fr=new Te,Ah=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var Ts=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},wh=0,Zt=new ut,To=new Ct,Fi=new P,Vt=new qn,ps=new qn,Mt=new P,Gt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ac(e)?As:Ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Vt.min,ps.min),Vt.expandByPoint(Mt),Mt.addVectors(Vt.max,ps.max),Vt.expandByPoint(Mt)):(Vt.expandByPoint(ps.min),Vt.expandByPoint(ps.max))}Vt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Mt.add(Fi)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;let c=new P,u=new P,h=new P,p=new Te,f=new Te,v=new Te,x=new P,m=new P;function d(D,b,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),v.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(p),v.sub(p);let L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),o[D].add(x),o[b].add(x),o[S].add(x),l[D].add(m),l[b].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,b=T.length;D<b;++D){let S=T[D],L=S.start,B=S.count;for(let k=L,Y=L+B;k<Y;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new P,y=new P,w=new P,A=new P;function I(D){w.fromBufferAttribute(s,D),A.copy(w);let b=o[D];E.copy(b),E.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(A,b);let L=y.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,b=T.length;D<b;++D){let S=T[D],L=S.start,B=S.count;for(let k=L,Y=L+B;k<Y;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let p=0,f=e.count;p<f;p+=3){let v=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u),f=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let d=0;d<u;d++)p[v++]=c[f++]}return new Ht(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sl=new ut,ni=new Es,pr=new qi,rl=new P,mr=new P,gr=new P,vr=new P,Ao=new P,_r=new P,al=new P,xr=new P,ot=class extends Ct{constructor(e=new Gt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Ao.fromBufferAttribute(h,e),a?_r.addScaledVector(Ao,u):_r.addScaledVector(Ao.sub(t),u))}t.add(_r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(pr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(pr,rl)===null||ni.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(sl.copy(r).invert(),ni.copy(e.ray).applyMatrix4(sl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=p.length;v<x;v++){let m=p[v],d=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,w=E;y<w;y+=3){let A=o.getX(y),I=o.getX(y+1),D=o.getX(y+2);s=yr(this,d,e,n,c,u,h,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=v,d=x;m<d;m+=3){let T=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=yr(this,a,e,n,c,u,h,T,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=p.length;v<x;v++){let m=p[v],d=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,w=E;y<w;y+=3){let A=y,I=y+1,D=y+2;s=yr(this,d,e,n,c,u,h,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,d=x;m<d;m+=3){let T=m,E=m+1,y=m+2;s=yr(this,a,e,n,c,u,h,T,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ch(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wn,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:i}}function yr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);let u=Ch(i,e,t,n,mr,gr,vr,al);if(u){let h=new P;Hn.getBarycoord(al,mr,gr,vr,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,l,c,h,new Te)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,h,new Te)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};Hn.getNormal(mr,gr,vr,p.normal),u.face=p,u.barycoord=h}return u}var pn=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],p=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function v(x,m,d,T,E,y,w,A,I,D,b){let S=y/I,L=w/D,B=y/2,k=w/2,Y=A/2,K=I+1,$=D+1,ie=0,q=0,oe=new P;for(let fe=0;fe<$;fe++){let Ae=fe*L-k;for(let De=0;De<K;De++){let Ke=De*S-B;oe[x]=Ke*T,oe[m]=Ae*E,oe[d]=Y,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[d]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(De/I),h.push(1-fe/D),ie+=1}}for(let fe=0;fe<D;fe++)for(let Ae=0;Ae<I;Ae++){let De=p+Ae+K*fe,Ke=p+Ae+K*(fe+1),je=p+(Ae+1)+K*(fe+1),Ye=p+(Ae+1)+K*fe;l.push(De,Ke,Ye),l.push(Ke,je,Ye),q+=6}o.addGroup(f,q,b),f+=q,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=gi(i[t]);for(let s in n)e[s]=n[s]}return e}function Rh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var nu={clone:gi,merge:Rt},Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ws=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new P,ol=new Te,cl=new Te,At=class extends ws{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,ol,cl),t.subVectors(cl,ol)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oi=-90,Bi=1,Lr=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Oi,Bi,e,t);s.layers=this.layers,this.add(s);let r=new At(Oi,Bi,e,t);r.layers=this.layers,this.add(r);let a=new At(Oi,Bi,e,t);a.layers=this.layers,this.add(a);let o=new At(Oi,Bi,e,t);o.layers=this.layers,this.add(o);let l=new At(Oi,Bi,e,t);l.layers=this.layers,this.add(l);let c=new At(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Cs=class extends Ut{constructor(e=[],t=fi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ur=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new ot(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=on),new Lr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dh={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Rs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var wo=new P,Lh=new P,Uh=new Ve,dn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wo.subVectors(n,t).cross(Lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Uh.getNormalMatrix(e),s=this.coplanarPoint(wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new qi,Nh=new Te(.5,.5),Mr=new P,$i=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],f=r[7],v=r[8],x=r[9],m=r[10],d=r[11],T=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,d-v,w-T).normalize(),s[1].setComponents(c+a,f+u,d+v,w+T).normalize(),s[2].setComponents(c+o,f+h,d+x,w+E).normalize(),s[3].setComponents(c-o,f-h,d-x,w-E).normalize(),n)s[4].setComponents(l,p,m,y).normalize(),s[5].setComponents(c-l,f-p,d-m,w-y).normalize();else if(s[4].setComponents(c-l,f-p,d-m,w-y).normalize(),t===an)s[5].setComponents(c+l,f+p,d+m,w+y).normalize();else if(t===Ms)s[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=Nh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ds=class extends Ut{constructor(e,t,n=Jn,s,r,a,o=Jt,l=Jt,c,u=Vi,h=1){if(u!==Vi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ls=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Us=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pn=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],p=[],f=[],v=0,x=[],m=n/2,d=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(f,2));function T(){let y=new P,w=new P,A=0,I=(t-e)/n;for(let D=0;D<=r;D++){let b=[],S=D/r,L=S*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,Y=k*l+o,K=Math.sin(Y),$=Math.cos(Y);w.x=L*K,w.y=-S*n+m,w.z=L*$,h.push(w.x,w.y,w.z),y.set(K,I,$).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-S),b.push(v++)}x.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let S=x[b][D],L=x[b+1][D],B=x[b+1][D+1],k=x[b][D+1];(e>0||b!==0)&&(u.push(S,L,k),A+=3),(t>0||b!==r-1)&&(u.push(L,B,k),A+=3)}c.addGroup(d,A,0),d+=A}function E(y){let w=v,A=new Te,I=new P,D=0,b=y===!0?e:t,S=y===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),v++;let L=v;for(let B=0;B<=s;B++){let Y=B/s*l+o,K=Math.cos(Y),$=Math.sin(Y);I.x=b*$,I.y=m*S,I.z=b*K,h.push(I.x,I.y,I.z),p.push(0,S,0),A.x=K*.5+.5,A.y=$*.5*S+.5,f.push(A.x,A.y),v++}for(let B=0;B<s;B++){let k=w+B,Y=L+B;y===!0?u.push(Y,Y+1,k):u.push(Y+1,Y,k),D+=3}c.addGroup(d,D,y===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class i extends Pn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nr=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let E=new P,y=new P,w=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],y),f(t[A+2],w),l(E,y,w,T)}function l(T,E,y,w){let A=w+1,I=[];for(let D=0;D<=A;D++){I[D]=[];let b=T.clone().lerp(y,D/A),S=E.clone().lerp(y,D/A),L=A-D;for(let B=0;B<=L;B++)B===0&&D===A?I[D][B]=b:I[D][B]=b.clone().lerp(S,B/L)}for(let D=0;D<A;D++)for(let b=0;b<2*(A-D)-1;b++){let S=Math.floor(b/2);b%2===0?(p(I[D][S+1]),p(I[D+1][S]),p(I[D][S])):(p(I[D][S+1]),p(I[D+1][S+1]),p(I[D+1][S]))}}function c(T){let E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(T),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){let T=new P;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let y=m(T)/2/Math.PI+.5,w=d(T)/Math.PI+.5;a.push(y,1-w)}v(),h()}function h(){for(let T=0;T<a.length;T+=6){let E=a[T+0],y=a[T+2],w=a[T+4],A=Math.max(E,y,w),I=Math.min(E,y,w);A>.9&&I<.1&&(E<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),w<.2&&(a[T+4]+=1))}}function p(T){r.push(T.x,T.y,T.z)}function f(T,E){let y=T*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function v(){let T=new P,E=new P,y=new P,w=new P,A=new Te,I=new Te,D=new Te;for(let b=0,S=0;b<r.length;b+=9,S+=6){T.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),A.set(a[S+0],a[S+1]),I.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),w.copy(T).add(E).add(y).divideScalar(3);let L=m(w);x(A,S+0,T,L),x(I,S+2,E,L),x(D,S+4,y,L)}}function x(T,E,y,w){w<0&&T.x===1&&(a[E]=T.x-1),y.x===0&&y.z===0&&(a[E]=w/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Te:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ut;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends Kt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*h+this.aX,c=p*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fr=class extends Fs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sr=new P,Co=new cc,Ro=new cc,Io=new cc,Or=class extends Kt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),c=Sr);let h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Co.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,v,x,m),Ro.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,v,x,m),Io.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Io.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(Co.calc(l),Ro.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ll(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Fh(i,e){let t=1-i;return t*t*e}function Oh(i,e){return 2*(1-i)*i*e}function Bh(i,e){return i*i*e}function vs(i,e,t,n){return Fh(i,e)+Oh(i,t)+Bh(i,n)}function zh(i,e){let t=1-i;return t*t*t*e}function kh(i,e){let t=1-i;return 3*t*t*i*e}function Vh(i,e){return 3*(1-i)*i*i*e}function Hh(i,e){return i*i*i*e}function _s(i,e,t,n,s){return zh(i,e)+kh(i,t)+Vh(i,n)+Hh(i,s)}var Br=class extends Kt{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,s.x,r.x,a.x,o.x),_s(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zr=class extends Kt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_s(e,s.x,r.x,a.x,o.x),_s(e,s.y,r.y,a.y,o.y),_s(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kr=class extends Kt{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Kt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Kt{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ci=class extends Kt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y),vs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ll(o,l.x,c.x,u.x,h.x),ll(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Gh=Object.freeze({__proto__:null,ArcCurve:Fr,CatmullRomCurve3:Or,CubicBezierCurve:Br,CubicBezierCurve3:zr,EllipseCurve:Fs,LineCurve:kr,LineCurve3:Vr,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:ci,SplineCurve:Gr});var Os=class i extends Nr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var li=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,p=t/l,f=[],v=[],x=[],m=[];for(let d=0;d<u;d++){let T=d*p-a;for(let E=0;E<c;E++){let y=E*h-r;v.push(y,-T,0),x.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let E=T+c*d,y=T+c*(d+1),w=T+1+c*(d+1),A=T+1+c*d;f.push(E,y,A),f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bs=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,p=new P,f=[],v=[],x=[],m=[];for(let d=0;d<=n;d++){let T=[],E=d/n,y=0;d===0&&a===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),v.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(A+y,1-E),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){let E=u[d][T+1],y=u[d][T],w=u[d+1][T],A=u[d+1][T+1];(d!==0||a>0)&&f.push(E,y,A),(d!==n-1||l<Math.PI)&&f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zs=class i extends Gt{constructor(e=new ci(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Te,u=new P,h=[],p=[],f=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(f,2));function x(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),T(),d()}function m(E){u=e.getPointAt(E/t,u);let y=a.normals[E],w=a.binormals[E];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,D=Math.sin(I),b=-Math.cos(I);l.x=b*y.x+D*w.x,l.y=b*y.y+D*w.y,l.z=b*y.z+D*w.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let w=(s+1)*(E-1)+(y-1),A=(s+1)*E+(y-1),I=(s+1)*E+y,D=(s+1)*(E-1)+y;v.push(w,A,D),v.push(A,I,D)}}function T(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Gh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ui=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wr=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qr=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xr=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Do,endingEnd:Do}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lo:r=e,o=2*t-n;break;case Uo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lo:a=e,l=2*n-t;break;case Uo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),x=v*v,m=x*v,d=-p*m+2*p*x-p*v,T=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*v+1,E=(-1-f)*m+(1.5+f)*x+.5*v,y=f*m-f*x;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+T*a[c+w]+E*a[l+w]+y*a[h+w];return r}},Yr=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*h+a[l+p]*u;return r}},$r=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case Er:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return Er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Wh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Er,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,p=h-n,f=h+n;for(let v=0;v!==n;++v){let x=t[h+v];if(x!==t[p+v]||x!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wt.prototype.ValueTypeName="";Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=Rr;var Yn=class extends Wt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=xs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="color";var Jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="number";var Kr=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ks=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Wt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=xs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Wt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="vector";var Qr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},iu=new Qr,ea=class{constructor(e){this.manager=e!==void 0?e:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hs=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Po=new ut,ul=new P,hl=new P,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gs=class extends ws{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bo=class extends Oo{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Bo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ta=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var lc="\\[\\]\\.:\\/",qh=new RegExp("["+lc+"]","g"),uc="[^"+lc+"]",Xh="[^"+lc.replace("\\.","")+"]",Yh=/((?:WC+[\/:])*)/.source.replace("WC",uc),$h=/(WCOD+)?/.source.replace("WCOD",Xh),Zh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Jh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Kh=new RegExp("^"+Yh+$h+Zh+Jh+"$"),jh=["material","materials","bones","map"],zo=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qh,"")}static parseTrackName(e){let t=Kh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=zo;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var dl=new ut,di=class{constructor(e,t,n=0,s=1/0){this.ray=new Es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(e,t=!0,n=[]){return ko(e,this,n,t),n.sort(fl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ko(e[s],this,n,t);return n.sort(fl),n}};function fl(i,e){return i.distance-e.distance}function ko(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ko(r[a],e,t,!0)}}function hc(i,e,t,n){let s=Qh(n);switch(t){case jo:return i*e;case ec:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case _a:return i*e*2/s.components*s.byteLength;case Qo:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case xa:return i*e*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(i,16)*Math.max(e,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case un:case $o:return{byteLength:1,components:1};case Zi:case Zo:case Ji:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case Jn:case pa:case gn:return{byteLength:4,components:1};case Jo:case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function wu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function td(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<h.length;f++){let v=h[p],x=h[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,h[p]=x)}h.length=p+1;for(let f=0,v=h.length;f<v;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
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
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,md=`#ifdef USE_IRIDESCENCE
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
#endif`,gd=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qd=`PhysicalMaterial material;
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
#endif`,ef=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,df=`#if defined( USE_POINTS_UV )
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
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vf=`float getShadowMask() {
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
}`,Hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,yp=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Cp=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Ip=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Up=`uniform float rotation;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:nd,alphahash_pars_fragment:id,alphamap_fragment:sd,alphamap_pars_fragment:rd,alphatest_fragment:ad,alphatest_pars_fragment:od,aomap_fragment:cd,aomap_pars_fragment:ld,batching_pars_vertex:ud,batching_vertex:hd,begin_vertex:dd,beginnormal_vertex:fd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:yd,color_fragment:Md,color_pars_fragment:Sd,color_pars_vertex:bd,color_vertex:Ed,common:Td,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:wd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Rd,emissivemap_fragment:Id,emissivemap_pars_fragment:Pd,colorspace_fragment:Dd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Nd,envmap_pars_fragment:Fd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:$d,envmap_vertex:Bd,fog_vertex:zd,fog_pars_vertex:kd,fog_fragment:Vd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Wd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Xd,lights_pars_begin:Yd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Kd,lights_phong_pars_fragment:jd,lights_physical_fragment:Qd,lights_physical_pars_fragment:ef,lights_fragment_begin:tf,lights_fragment_maps:nf,lights_fragment_end:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:cf,map_fragment:lf,map_pars_fragment:uf,map_particle_fragment:hf,map_particle_pars_fragment:df,metalnessmap_fragment:ff,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:vf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:yf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:bf,normal_vertex:Ef,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Rf,opaque_fragment:If,packing:Pf,premultiplied_alpha_fragment:Df,project_vertex:Lf,dithering_fragment:Uf,dithering_pars_fragment:Nf,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:kf,shadowmask_pars_fragment:Vf,skinbase_vertex:Hf,skinning_pars_vertex:Gf,skinning_vertex:Wf,skinnormal_vertex:qf,specularmap_fragment:Xf,specularmap_pars_fragment:Yf,tonemapping_fragment:$f,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:Kf,uv_pars_fragment:jf,uv_pars_vertex:Qf,uv_vertex:ep,worldpos_vertex:tp,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:cp,depth_frag:lp,distanceRGBA_vert:up,distanceRGBA_frag:hp,equirect_vert:dp,equirect_frag:fp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:vp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:bp,meshphong_vert:Ep,meshphong_frag:Tp,meshphysical_vert:Ap,meshphysical_frag:wp,meshtoon_vert:Cp,meshtoon_frag:Rp,points_vert:Ip,points_frag:Pp,shadow_vert:Dp,shadow_frag:Lp,sprite_vert:Up,sprite_frag:Np},ue={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vn.physical={uniforms:Rt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var $a={r:0,b:0,g:0},vi=new cn,Fp=new ut;function Op(i,e,t,n,s,r,a){let o=new Xe(0),l=r===!0?0:1,c,u,h=null,p=0,f=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,w=v(E);w===null?d(o,l):w&&w.isColor&&(d(w,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let w=v(y);w&&(w.isCubeTexture||w.mapping===qs)?(u===void 0&&(u=new ot(new pn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:gi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(y.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(vi)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==Qe,(h!==w||p!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ot(new li(2,2),new ln({name:"BackgroundMaterial",uniforms:gi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,y){E.getRGB($a,oc(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m,dispose:T}}function Bp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(S,L,B,k,Y){let K=!1,$=h(k,B,L);r!==$&&(r=$,c(r.object)),K=f(S,k,B,Y),K&&v(S,k,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(S,L,B,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,L,B){let k=B.wireframe===!0,Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let $=K[k];return $===void 0&&($=p(l()),K[k]=$),$}function p(S){let L=[],B=[],k=[];for(let Y=0;Y<t;Y++)L[Y]=0,B[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,L,B,k){let Y=r.attributes,K=L.attributes,$=0,ie=B.getAttributes();for(let q in ie)if(ie[q].location>=0){let fe=Y[q],Ae=K[q];if(Ae===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function v(S,L,B,k){let Y={},K=L.attributes,$=0,ie=B.getAttributes();for(let q in ie)if(ie[q].location>=0){let fe=K[q];fe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),Y[q]=Ae,$++}r.attributes=Y,r.attributesNum=$,r.index=k}function x(){let S=r.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){let B=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;B[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),Y[S]!==L&&(i.vertexAttribDivisor(S,L),Y[S]=L)}function T(){let S=r.newAttributes,L=r.enabledAttributes;for(let B=0,k=L.length;B<k;B++)L[B]!==S[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function E(S,L,B,k,Y,K,$){$===!0?i.vertexAttribIPointer(S,L,B,Y,K):i.vertexAttribPointer(S,L,B,k,Y,K)}function y(S,L,B,k){x();let Y=k.attributes,K=B.getAttributes(),$=L.defaultAttributeValues;for(let ie in K){let q=K[ie];if(q.location>=0){let oe=Y[ie];if(oe===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let fe=oe.normalized,Ae=oe.itemSize,De=e.get(oe);if(De===void 0)continue;let Ke=De.buffer,je=De.type,Ye=De.bytesPerElement,j=je===i.INT||je===i.UNSIGNED_INT||oe.gpuType===pa;if(oe.isInterleavedBufferAttribute){let Q=oe.data,me=Q.stride,Ue=oe.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)d(q.location+be,Q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<q.locationSize;be++)m(q.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let be=0;be<q.locationSize;be++)E(q.location+be,Ae/q.locationSize,je,fe,me*Ye,(Ue+Ae/q.locationSize*be)*Ye,j)}else{if(oe.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)d(q.location+Q,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Q=0;Q<q.locationSize;Q++)E(q.location+Q,Ae/q.locationSize,je,fe,Ae*Ye,Ae/q.locationSize*Q*Ye,j)}}else if($!==void 0){let fe=$[ie];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(q.location,fe);break;case 3:i.vertexAttrib3fv(q.location,fe);break;case 4:i.vertexAttrib4fv(q.location,fe);break;default:i.vertexAttrib1fv(q.location,fe)}}}}T()}function w(){D();for(let S in n){let L=n[S];for(let B in L){let k=L[B];for(let Y in k)u(k[Y].object),delete k[Y];delete L[B]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let B in L){let k=L[B];for(let Y in k)u(k[Y].object),delete k[Y];delete L[B]}delete n[S.id]}function I(S){for(let L in n){let B=n[L];if(B[S.id]===void 0)continue;let k=B[S.id];for(let Y in k)u(k[Y].object),delete k[Y];delete B[S.id]}}function D(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function zp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,n,1)}function l(c,u,h,p){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*p[x];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Qt&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==gn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function Vp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){let v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,E=T*4,y=d.clippingState||null;l.value=y,y=u(v,p,E,f);for(let w=0;w!==E;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,v){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let d=f+x*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=f;E!==x;++E,y+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Hp(i){let e=new WeakMap;function t(a,o){return o===ha?a.mapping=fi:o===da&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ha||o===da)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ur(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ts=4,su=[.125,.215,.35,.446,.526,.582],yi=20,dc=new Gs,ru=new Xe,fc=null,pc=0,mc=0,gc=!1,xi=(1+Math.sqrt(5))/2,es=1/xi,au=[new P(-xi,es,0),new P(xi,es,0),new P(-es,0,xi),new P(es,0,xi),new P(0,xi,-es),new P(0,xi,es),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Gp=new P,Ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gp}=r;fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ji,format:Qt,colorSpace:oi,depthBuffer:!1},s=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=qp(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,s,r){let l=new At(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(ru),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new In({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new ot(new pn,x),d=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,d=!0):(x.color.copy(ru),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let w=this._cubeSize;Za(s,y*w,E>2?w:0,w,w),h.setRenderTarget(s),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=au[(s-r-1)%au.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ot(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let d=[],T=0;for(let I=0;I<yi;++I){let D=I/x,b=Math.exp(-D*D/2);d.push(b),I===0?T+=b:I<m&&(T+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:E}=this;p.dTheta.value=v,p.mipInt.value=E-n;let y=this._sizeLods[s],w=3*y*(s>E-ts?s-E+ts:0),A=4*(this._cubeSize-y);Za(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(h,dc)}};function Wp(i){let e=[],t=[],n=[],s=i,r=i-ts+1+su.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ts?l=su[a-i+ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,x=3,m=2,d=1,T=new Float32Array(x*v*f),E=new Float32Array(m*v*f),y=new Float32Array(d*v*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,D=A>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];T.set(b,x*v*A),E.set(p,m*v*A);let S=[A,A,A,A,A,A];y.set(S,d*v*A)}let w=new Gt;w.setAttribute("position",new Ht(T,x)),w.setAttribute("uv",new Ht(E,m)),w.setAttribute("faceIndex",new Ht(y,d)),e.push(w),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qp(i,e,t){let n=new Float32Array(yi),s=new P(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function cu(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function lu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function Xp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ha||l===da,u=l===fi||l===pi;if(c||u){let h=e.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Ka(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Ka(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,e,t,n){let s={},r=new WeakMap;function a(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(h){let p=[],f=h.index,v=h.attributes.position,x=0;if(f!==null){let T=f.array;x=f.version;for(let E=0,y=T.length;E<y;E+=3){let w=T[E+0],A=T[E+1],I=T[E+2];p.push(w,A,A,I,I,w)}}else if(v!==void 0){let T=v.array;x=v.version;for(let E=0,y=T.length/3-1;E<y;E+=3){let w=E+0,A=E+1,I=E+2;p.push(w,A,A,I,I,w)}}else return;let m=new(ac(p)?As:Ts)(p,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let p=r.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Zp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,p*a,v),t.update(f,n,v))}function u(p,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,v);let m=0;for(let d=0;d<v;d++)m+=f[d];t.update(m,n,1)}function h(p,f,v,x){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,v);let d=0;for(let T=0;T<v;T++)d+=f[T]*x[T];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kp(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==h){let b=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;f===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*w*4*h),I=new bs(A,y,w,h);I.type=gn,I.needsUpdate=!0;let D=E*4;for(let S=0;S<h;S++){let L=m[S],B=d[S],k=T[S],Y=y*w*4*S;for(let K=0;K<L.count;K++){let $=K*D;f===!0&&(s.fromBufferAttribute(L,K),A[Y+$+0]=s.x,A[Y+$+1]=s.y,A[Y+$+2]=s.z,A[Y+$+3]=0),v===!0&&(s.fromBufferAttribute(B,K),A[Y+$+4]=s.x,A[Y+$+5]=s.y,A[Y+$+6]=s.z,A[Y+$+7]=0),x===!0&&(s.fromBufferAttribute(k,K),A[Y+$+8]=s.x,A[Y+$+9]=s.y,A[Y+$+10]=s.z,A[Y+$+11]=k.itemSize===4?s.w:1)}}p={count:h,texture:I,size:new Te(y,w)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function jp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Cu=new Ut,uu=new Ds(1,1),Ru=new bs,Iu=new Dr,Pu=new Cs,hu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),_t(t,n)}}function sm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),_t(t,n)}}function rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),_t(t,n)}}function am(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=ic,r=uu):r=Cu,t.setTexture2D(e||r,s)}function mm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Iu,s)}function gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pu,s)}function vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ru,s)}function _m(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return cm;case 35669:case 35673:return lm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}function xm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){let t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function Mm(i,e){let t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function Sm(i,e){let t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function bm(i,e){let t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Em(i,e){let t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tm(i,e){let t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Am(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Cm(i,e){i.uniform3iv(this.addr,e)}function Rm(i,e){i.uniform4iv(this.addr,e)}function Im(i,e){i.uniform1uiv(this.addr,e)}function Pm(i,e){i.uniform2uiv(this.addr,e)}function Dm(i,e){i.uniform3uiv(this.addr,e)}function Lm(i,e){i.uniform4uiv(this.addr,e)}function Um(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cu,r[a])}function Nm(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Iu,r[a])}function Fm(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pu,r[a])}function Om(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ru,r[a])}function Bm(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return bm;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Im;case 36294:return Pm;case 36295:return Dm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}var _c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}},yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function gu(i,e){i.seq.push(e),i.map[e.id]=e}function zm(i,e,t){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),a=vc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gu(t,c===void 0?new _c(o,i,e):new xc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new yc(o),gu(t,h)),t=h}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var km=37297,Vm=0;function Hm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var _u=new Ve;function Gm(i){Ze._getMatrix(_u,Ze.workingColorSpace,i);let e=`mat3( ${_u.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Hm(i.getShaderSource(e),o)}else return r}function Wm(i,e){let t=Gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qm(i,e){let t;switch(e){case Fl:t="Linear";break;case Ol:t="Reinhard";break;case Bl:t="Cineon";break;case ua:t="ACESFilmic";break;case kl:t="AgX";break;case Vl:t="Neutral";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new P;function Xm(){Ze.getLuminanceCoefficients(Ja);let i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function $m(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ks(i){return i!==""}function yu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Jm,jm)}var Km=new Map;function jm(i,e){let t=Ge[e];if(t===void 0){let n=Km.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}var Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(Qm,eg)}function eg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===na?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ul:e="ENVMAP_BLENDING_MIX";break;case Nl:e="ENVMAP_BLENDING_ADD";break}return e}function rg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ag(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tg(t),c=ng(t),u=ig(t),h=sg(t),p=rg(t),f=Ym(t),v=$m(r),x=s.createProgram(),m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(m=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Mc(a),a=yu(a,t),a=Mu(a,t),o=Mc(o),o=yu(o,t),o=Mu(o,t),a=Su(a),o=Su(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=T+m+a,y=T+d+o,w=vu(s,s.VERTEX_SHADER,E),A=vu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(A)||"",K=B.trim(),$=k.trim(),ie=Y.trim(),q=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{let fe=xu(s,w,"vertex"),Ae=xu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+fe+`
`+Ae)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||ie==="")&&(oe=!1);oe&&(L.diagnostics={runnable:q,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:ie,prefix:d}})}s.deleteShader(w),s.deleteShader(A),D=new ns(s,x),b=Zm(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,km)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}var og=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bc(e),t.set(e,n)),n}},bc=class{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}};function cg(i,e,t,n,s,r,a){let o=new Xi,l=new Sc,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,B,k){let Y=B.fog,K=k.geometry,$=b.isMeshStandardMaterial?B.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),q=ie&&ie.mapping===qs?ie.image.height:null,oe=v[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=fe!==void 0?fe.length:0,De=0;K.morphAttributes.position!==void 0&&(De=1),K.morphAttributes.normal!==void 0&&(De=2),K.morphAttributes.color!==void 0&&(De=3);let Ke,je,Ye,j;if(oe){let We=vn[oe];Ke=We.vertexShader,je=We.fragmentShader}else Ke=b.vertexShader,je=b.fragmentShader,l.update(b),Ye=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);let Q=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,He=!!b.map,ft=!!b.matcap,C=!!ie,tt=!!b.aoMap,Oe=!!b.lightMap,Ie=!!b.bumpMap,xe=!!b.normalMap,it=!!b.displacementMap,ye=!!b.emissiveMap,ze=!!b.metalnessMap,mt=!!b.roughnessMap,z=b.anisotropy>0,_=b.clearcoat>0,g=b.dispersion>0,R=b.iridescence>0,N=b.sheen>0,H=b.transmission>0,V=z&&!!b.anisotropyMap,re=_&&!!b.clearcoatMap,Z=_&&!!b.clearcoatNormalMap,ae=_&&!!b.clearcoatRoughnessMap,pe=R&&!!b.iridescenceMap,ee=R&&!!b.iridescenceThicknessMap,le=N&&!!b.sheenColorMap,we=N&&!!b.sheenRoughnessMap,Se=!!b.specularMap,ce=!!b.specularColorMap,Ne=!!b.specularIntensityMap,U=H&&!!b.transmissionMap,te=H&&!!b.thicknessMap,se=!!b.gradientMap,ge=!!b.alphaMap,J=b.alphaTest>0,X=!!b.alphaHash,de=!!b.extensions,Ee=Ln;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let ke={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:je,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:oi,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:ft,envMap:C,envMapMode:C&&ie.mapping,envMapCubeUVHeight:q,aoMap:tt,lightMap:Oe,bumpMap:Ie,normalMap:xe,displacementMap:p&&it,emissiveMap:ye,normalMapObjectSpace:xe&&b.normalMapType===ql,normalMapTangentSpace:xe&&b.normalMapType===nc,metalnessMap:ze,roughnessMap:mt,anisotropy:z,anisotropyMap:V,clearcoat:_,clearcoatMap:re,clearcoatNormalMap:Z,clearcoatRoughnessMap:ae,dispersion:g,iridescence:R,iridescenceMap:pe,iridescenceThicknessMap:ee,sheen:N,sheenColorMap:le,sheenRoughnessMap:we,specularMap:Se,specularColorMap:ce,specularIntensityMap:Ne,transmission:H,transmissionMap:U,thicknessMap:te,gradientMap:se,opaque:b.transparent===!1&&b.blending===ri&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:J,alphaHash:X,combine:b.combine,mapUv:He&&x(b.map.channel),aoMapUv:tt&&x(b.aoMap.channel),lightMapUv:Oe&&x(b.lightMap.channel),bumpMapUv:Ie&&x(b.bumpMap.channel),normalMapUv:xe&&x(b.normalMap.channel),displacementMapUv:it&&x(b.displacementMap.channel),emissiveMapUv:ye&&x(b.emissiveMap.channel),metalnessMapUv:ze&&x(b.metalnessMap.channel),roughnessMapUv:mt&&x(b.roughnessMap.channel),anisotropyMapUv:V&&x(b.anisotropyMap.channel),clearcoatMapUv:re&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Z&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(b.sheenRoughnessMap.channel),specularMapUv:Se&&x(b.specularMap.channel),specularColorMapUv:ce&&x(b.specularColorMap.channel),specularIntensityMapUv:Ne&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:te&&x(b.thicknessMap.channel),alphaMapUv:ge&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xe||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(He||ge),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===Qe,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jt,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:de&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&b.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(S,b),E(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let S=v[b.type],L;if(S){let B=vn[S];L=nu.clone(B.uniforms)}else L=b.uniforms;return L}function w(b,S){let L;for(let B=0,k=u.length;B<k;B++){let Y=u[B];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new ag(i,S,b,r),u.push(L)),L}function A(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function I(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:D}}function lg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,p,f,v,x,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,p,f,v,x,m){let d=a(h,p,f,v,x,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):t.push(d)}function l(h,p,f,v,x,m){let d=a(h,p,f,v,x,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||ug),n.length>1&&n.sort(p||Eu),s.length>1&&s.sort(p||Eu)}function u(){for(let h=e,p=i.length;h<p;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function hg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Tu,i.set(n,[a])):s>=r.length?(a=new Tu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Xe};break;case"SpotLight":t={position:new P,direction:new P,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var pg=0;function mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gg(i){let e=new dg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ut,a=new ut;function o(c){let u=0,h=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,v=0,x=0,m=0,d=0,T=0,E=0,y=0,w=0,A=0,I=0;c.sort(mg);for(let b=0,S=c.length;b<S;b++){let L=c[b],B=L.color,k=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*k,h+=B.g*k,p+=B.b*k;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],k);I++}else if(L.isDirectionalLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=$,f++}else if(L.isSpotLight){let $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(B).multiplyScalar(k),$.distance=Y,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[x]=$;let ie=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,ie.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=ie.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=K,y++}x++}else if(L.isRectAreaLight){let $=e.get(L);$.color.copy(B).multiplyScalar(k),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=$,m++}else if(L.isPointLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=L.shadow.matrix,E++}n.point[v]=$,v++}else if(L.isHemisphereLight){let $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(k),$.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let D=n.hash;(D.directionalLength!==f||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=f,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=I,n.version=pg++)}function l(c,u){let h=0,p=0,f=0,v=0,x=0,m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){let E=c[d];if(E.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Au(i){let e=new gg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Au(i),e.set(s,[o])):r>=a.length?(o=new Au(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function yg(i,e,t){let n=new $i,s=new Te,r=new Te,a=new ht,o=new Wr({depthPacking:Wl}),l=new qr,c={},u=t.maxTextureSize,h={[wn]:Dt,[Dt]:wn,[jt]:jt},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let v=new Gt;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let d=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Dn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=d!==mn&&this.type===mn,Y=d===mn&&this.type!==mn;for(let K=0,$=A.length;K<$;K++){let ie=A[K],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let oe=q.getFrameExtents();if(s.multiply(oe),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,q.mapSize.y=r.y)),q.map===null||k===!0||Y===!0){let Ae=this.type!==mn?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new fn(s.x,s.y,Ae),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let fe=q.getViewportCount();for(let Ae=0;Ae<fe;Ae++){let De=q.getViewport(Ae);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),B.viewport(a),q.updateMatrices(ie,Ae),n=q.getFrustum(),y(I,D,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===mn&&T(q,D),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function T(A,I){let D=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,D,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,D,f,x,null)}function E(A,I,D,b){let S=null,L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=S.uuid,k=I.uuid,Y=c[B];Y===void 0&&(Y={},c[B]=Y);let K=Y[k];K===void 0&&(K=S.clone(),Y[k]=K,I.addEventListener("dispose",w)),S=K}if(S.visible=I.visible,S.wireframe=I.wireframe,b===mn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=D}return S}function y(A,I,D,b,S){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let k=e.update(A),Y=A.material;if(Array.isArray(Y)){let K=k.groups;for(let $=0,ie=K.length;$<ie;$++){let q=K[$],oe=Y[q.materialIndex];if(oe&&oe.visible){let fe=E(A,oe,b,S);A.onBeforeShadow(i,A,I,D,k,fe,q),i.renderBufferDirect(D,null,k,fe,A,q),A.onAfterShadow(i,A,I,D,k,fe,q)}}}else if(Y.visible){let K=E(A,Y,b,S);A.onBeforeShadow(i,A,I,D,k,K,null),i.renderBufferDirect(D,null,k,K,A,null),A.onAfterShadow(i,A,I,D,k,K,null)}}let B=A.children;for(let k=0,Y=B.length;k<Y;k++)y(B[k],I,D,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(let D in c){let b=c[D],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Mg={[ia]:sa,[ra]:ca,[aa]:la,[ai]:oa,[sa]:ia,[ca]:ra,[la]:aa,[oa]:ai};function Sg(i,e){function t(){let U=!1,te=new ht,se=null,ge=new ht(0,0,0,0);return{setMask:function(J){se!==J&&!U&&(i.colorMask(J,J,J,J),se=J)},setLocked:function(J){U=J},setClear:function(J,X,de,Ee,ke){ke===!0&&(J*=Ee,X*=Ee,de*=Ee),te.set(J,X,de,Ee),ge.equals(te)===!1&&(i.clearColor(J,X,de,Ee),ge.copy(te))},reset:function(){U=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,te=!1,se=null,ge=null,J=null;return{setReversed:function(X){if(te!==X){let de=e.get("EXT_clip_control");X?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),te=X;let Ee=J;J=null,this.setClear(Ee)}},getReversed:function(){return te},setTest:function(X){X?Q(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(X){se!==X&&!U&&(i.depthMask(X),se=X)},setFunc:function(X){if(te&&(X=Mg[X]),ge!==X){switch(X){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=X}},setLocked:function(X){U=X},setClear:function(X){J!==X&&(te&&(X=1-X),i.clearDepth(X),J=X)},reset:function(){U=!1,se=null,ge=null,J=null,te=!1}}}function s(){let U=!1,te=null,se=null,ge=null,J=null,X=null,de=null,Ee=null,ke=null;return{setTest:function(We){U||(We?Q(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(We){te!==We&&!U&&(i.stencilMask(We),te=We)},setFunc:function(We,Ot,yt){(se!==We||ge!==Ot||J!==yt)&&(i.stencilFunc(We,Ot,yt),se=We,ge=Ot,J=yt)},setOp:function(We,Ot,yt){(X!==We||de!==Ot||Ee!==yt)&&(i.stencilOp(We,Ot,yt),X=We,de=Ot,Ee=yt)},setLocked:function(We){U=We},setClear:function(We){ke!==We&&(i.clearStencil(We),ke=We)},reset:function(){U=!1,te=null,se=null,ge=null,J=null,X=null,de=null,Ee=null,ke=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,f=[],v=null,x=!1,m=null,d=null,T=null,E=null,y=null,w=null,A=null,I=new Xe(0,0,0),D=0,b=!1,S=null,L=null,B=null,k=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ie=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ie>=2);let oe=null,fe={},Ae=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ke=new ht().fromArray(Ae),je=new ht().fromArray(De);function Ye(U,te,se,ge){let J=new Uint8Array(4),X=i.createTexture();i.bindTexture(U,X),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<se;de++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(te+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return X}let j={};j[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ai),Ie(!1),xe(Vo),Q(i.CULL_FACE),tt(Dn);function Q(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function me(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ue(U,te){return h[U]!==te?(i.bindFramebuffer(U,te),h[U]=te,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function be(U,te){let se=f,ge=!1;if(U){se=p.get(te),se===void 0&&(se=[],p.set(te,se));let J=U.textures;if(se.length!==J.length||se[0]!==i.COLOR_ATTACHMENT0){for(let X=0,de=J.length;X<de;X++)se[X]=i.COLOR_ATTACHMENT0+X;se.length=J.length,ge=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ge=!0);ge&&i.drawBuffers(se)}function He(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let ft={[Wn]:i.FUNC_ADD,[vl]:i.FUNC_SUBTRACT,[_l]:i.FUNC_REVERSE_SUBTRACT};ft[xl]=i.MIN,ft[yl]=i.MAX;let C={[Ml]:i.ZERO,[Sl]:i.ONE,[bl]:i.SRC_COLOR,[Tr]:i.SRC_ALPHA,[Rl]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Tl]:i.DST_ALPHA,[El]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[Cl]:i.ONE_MINUS_DST_COLOR,[Al]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Pl]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Ll]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(U,te,se,ge,J,X,de,Ee,ke,We){if(U===Dn){x===!0&&(me(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),U!==gl){if(U!==m||We!==b){if((d!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,y=Wn),We)switch(U){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,E=null,w=null,A=null,I.set(0,0,0),D=0,m=U,b=We}return}J=J||te,X=X||se,de=de||ge,(te!==d||J!==y)&&(i.blendEquationSeparate(ft[te],ft[J]),d=te,y=J),(se!==T||ge!==E||X!==w||de!==A)&&(i.blendFuncSeparate(C[se],C[ge],C[X],C[de]),T=se,E=ge,w=X,A=de),(Ee.equals(I)===!1||ke!==D)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ke),I.copy(Ee),D=ke),m=U,b=!1}function Oe(U,te){U.side===jt?me(i.CULL_FACE):Q(i.CULL_FACE);let se=U.side===Dt;te&&(se=!se),Ie(se),U.blending===ri&&U.transparent===!1?tt(Dn):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function xe(U){U!==pl?(Q(i.CULL_FACE),U!==L&&(U===Vo?i.cullFace(i.BACK):U===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=U}function it(U){U!==B&&($&&i.lineWidth(U),B=U)}function ye(U,te,se){U?(Q(i.POLYGON_OFFSET_FILL),(k!==te||Y!==se)&&(i.polygonOffset(te,se),k=te,Y=se)):me(i.POLYGON_OFFSET_FILL)}function ze(U){U?Q(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function mt(U){U===void 0&&(U=i.TEXTURE0+K-1),oe!==U&&(i.activeTexture(U),oe=U)}function z(U,te,se){se===void 0&&(oe===null?se=i.TEXTURE0+K-1:se=oe);let ge=fe[se];ge===void 0&&(ge={type:void 0,texture:void 0},fe[se]=ge),(ge.type!==U||ge.texture!==te)&&(oe!==se&&(i.activeTexture(se),oe=se),i.bindTexture(U,te||j[U]),ge.type=U,ge.texture=te)}function _(){let U=fe[oe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(U){Ke.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function we(U){je.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Se(U,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let ge=se.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(te,U.name),se.set(U,ge))}function ce(U,te){let ge=c.get(te).get(U);l.get(te)!==ge&&(i.uniformBlockBinding(te,ge,U.__bindingPointIndex),l.set(te,ge))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,fe={},h={},p=new WeakMap,f=[],v=null,x=!1,m=null,d=null,T=null,E=null,y=null,w=null,A=null,I=new Xe(0,0,0),D=0,b=!1,S=null,L=null,B=null,k=null,Y=null,Ke.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:me,bindFramebuffer:Ue,drawBuffers:be,useProgram:He,setBlending:tt,setMaterial:Oe,setFlipSided:Ie,setCullFace:xe,setLineWidth:it,setPolygonOffset:ye,setScissorTest:ze,activeTexture:mt,bindTexture:z,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:R,texImage2D:pe,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:ce,texStorage2D:Z,texStorage3D:ae,texSubImage2D:N,texSubImage3D:H,compressedTexSubImage2D:V,compressedTexSubImage3D:re,scissor:le,viewport:we,reset:Ne}}function bg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,h,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,g){return f?new OffscreenCanvas(_,g):Ss("canvas")}function x(_,g,R){let N=1,H=z(_);if((H.width>R||H.height>R)&&(N=R/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let V=Math.floor(N*H.width),re=Math.floor(N*H.height);h===void 0&&(h=v(V,re));let Z=g?v(V,re):h;return Z.width=V,Z.height=re,Z.getContext("2d").drawImage(_,0,0,V,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+re+")."),Z}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),_;return _}function m(_){return _.generateMipmaps}function d(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(_,g,R,N,H=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let V=g;if(g===i.RED&&(R===i.FLOAT&&(V=i.R32F),R===i.HALF_FLOAT&&(V=i.R16F),R===i.UNSIGNED_BYTE&&(V=i.R8)),g===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(V=i.R8UI),R===i.UNSIGNED_SHORT&&(V=i.R16UI),R===i.UNSIGNED_INT&&(V=i.R32UI),R===i.BYTE&&(V=i.R8I),R===i.SHORT&&(V=i.R16I),R===i.INT&&(V=i.R32I)),g===i.RG&&(R===i.FLOAT&&(V=i.RG32F),R===i.HALF_FLOAT&&(V=i.RG16F),R===i.UNSIGNED_BYTE&&(V=i.RG8)),g===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(V=i.RG8UI),R===i.UNSIGNED_SHORT&&(V=i.RG16UI),R===i.UNSIGNED_INT&&(V=i.RG32UI),R===i.BYTE&&(V=i.RG8I),R===i.SHORT&&(V=i.RG16I),R===i.INT&&(V=i.RG32I)),g===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(V=i.RGB8UI),R===i.UNSIGNED_SHORT&&(V=i.RGB16UI),R===i.UNSIGNED_INT&&(V=i.RGB32UI),R===i.BYTE&&(V=i.RGB8I),R===i.SHORT&&(V=i.RGB16I),R===i.INT&&(V=i.RGB32I)),g===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),R===i.UNSIGNED_INT&&(V=i.RGBA32UI),R===i.BYTE&&(V=i.RGBA8I),R===i.SHORT&&(V=i.RGBA16I),R===i.INT&&(V=i.RGBA32I)),g===i.RGB&&(R===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),g===i.RGBA){let re=H?ys:Ze.getTransfer(N);R===i.FLOAT&&(V=i.RGBA32F),R===i.HALF_FLOAT&&(V=i.RGBA16F),R===i.UNSIGNED_BYTE&&(V=re===Qe?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(_,g){let R;return _?g===null||g===Jn||g===Ki?R=i.DEPTH24_STENCIL8:g===gn?R=i.DEPTH32F_STENCIL8:g===Zi&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Jn||g===Ki?R=i.DEPTH_COMPONENT24:g===gn?R=i.DEPTH_COMPONENT32F:g===Zi&&(R=i.DEPTH_COMPONENT16),R}function w(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Jt&&_.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function A(_){let g=_.target;g.removeEventListener("dispose",A),D(g),g.isVideoTexture&&u.delete(g)}function I(_){let g=_.target;g.removeEventListener("dispose",I),S(g)}function D(_){let g=n.get(_);if(g.__webglInit===void 0)return;let R=_.source,N=p.get(R);if(N){let H=N[g.__cacheKey];H.usedTimes--,H.usedTimes===0&&b(_),Object.keys(N).length===0&&p.delete(R)}n.remove(_)}function b(_){let g=n.get(_);i.deleteTexture(g.__webglTexture);let R=_.source,N=p.get(R);delete N[g.__cacheKey],a.memory.textures--}function S(_){let g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(g.__webglFramebuffer[N]))for(let H=0;H<g.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(g.__webglFramebuffer[N][H]);else i.deleteFramebuffer(g.__webglFramebuffer[N]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[N])}else{if(Array.isArray(g.__webglFramebuffer))for(let N=0;N<g.__webglFramebuffer.length;N++)i.deleteFramebuffer(g.__webglFramebuffer[N]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let N=0;N<g.__webglColorRenderbuffer.length;N++)g.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[N]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let R=_.textures;for(let N=0,H=R.length;N<H;N++){let V=n.get(R[N]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(R[N])}n.remove(_)}let L=0;function B(){L=0}function k(){let _=L;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),L+=1,_}function Y(_){let g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function K(_,g){let R=n.get(_);if(_.isVideoTexture&&ze(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&R.__version!==_.version){let N=_.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(R,_,g);return}}else _.isExternalTexture&&(R.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+g)}function $(_,g){let R=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){j(R,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+g)}function ie(_,g){let R=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){j(R,_,g);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+g)}function q(_,g){let R=n.get(_);if(_.version>0&&R.__version!==_.version){Q(R,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+g)}let oe={[wr]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},fe={[Jt]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ae={[Xl]:i.NEVER,[jl]:i.ALWAYS,[Yl]:i.LESS,[ic]:i.LEQUAL,[$l]:i.EQUAL,[Kl]:i.GEQUAL,[Zl]:i.GREATER,[Jl]:i.NOTEQUAL};function De(_,g){if(g.type===gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===fa||g.magFilter===Xs||g.magFilter===Zn||g.minFilter===on||g.minFilter===fa||g.minFilter===Xs||g.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,oe[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,oe[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,oe[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,fe[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Jt||g.minFilter!==Xs&&g.minFilter!==Zn||g.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(_,g){let R=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",A));let N=g.source,H=p.get(N);H===void 0&&(H={},p.set(N,H));let V=Y(g);if(V!==_.__cacheKey){H[V]===void 0&&(H[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),H[V].usedTimes++;let re=H[_.__cacheKey];re!==void 0&&(H[_.__cacheKey].usedTimes--,re.usedTimes===0&&b(g)),_.__cacheKey=V,_.__webglTexture=H[V].texture}return R}function je(_,g,R){return Math.floor(Math.floor(_/R)/g)}function Ye(_,g,R,N){let V=_.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,R,N,g.data);else{V.sort((ee,le)=>ee.start-le.start);let re=0;for(let ee=1;ee<V.length;ee++){let le=V[re],we=V[ee],Se=le.start+le.count,ce=je(we.start,g.width,4),Ne=je(le.start,g.width,4);we.start<=Se+1&&ce===Ne&&je(we.start+we.count-1,g.width,4)===ce?le.count=Math.max(le.count,we.start+we.count-le.start):(++re,V[re]=we)}V.length=re+1;let Z=i.getParameter(i.UNPACK_ROW_LENGTH),ae=i.getParameter(i.UNPACK_SKIP_PIXELS),pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,le=V.length;ee<le;ee++){let we=V[ee],Se=Math.floor(we.start/4),ce=Math.ceil(we.count/4),Ne=Se%g.width,U=Math.floor(Se/g.width),te=ce,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ne,U,te,se,R,N,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Z),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function j(_,g,R){let N=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(N=i.TEXTURE_3D);let H=Ke(_,g),V=g.source;t.bindTexture(N,_.__webglTexture,i.TEXTURE0+R);let re=n.get(V);if(V.version!==re.__version||H===!0){t.activeTexture(i.TEXTURE0+R);let Z=Ze.getPrimaries(Ze.workingColorSpace),ae=g.colorSpace===Un?null:Ze.getPrimaries(g.colorSpace),pe=g.colorSpace===Un||Z===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ee=x(g.image,!1,s.maxTextureSize);ee=mt(g,ee);let le=r.convert(g.format,g.colorSpace),we=r.convert(g.type),Se=E(g.internalFormat,le,we,g.colorSpace,g.isVideoTexture);De(N,g);let ce,Ne=g.mipmaps,U=g.isVideoTexture!==!0,te=re.__version===void 0||H===!0,se=V.dataReady,ge=w(g,ee);if(g.isDepthTexture)Se=y(g.format===ji,g.type),te&&(U?t.texStorage2D(i.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,le,we,null));else if(g.isDataTexture)if(Ne.length>0){U&&te&&t.texStorage2D(i.TEXTURE_2D,ge,Se,Ne[0].width,Ne[0].height);for(let J=0,X=Ne.length;J<X;J++)ce=Ne[J],U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(i.TEXTURE_2D,J,Se,ce.width,ce.height,0,le,we,ce.data);g.generateMipmaps=!1}else U?(te&&t.texStorage2D(i.TEXTURE_2D,ge,Se,ee.width,ee.height),se&&Ye(g,ee,le,we)):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,le,we,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Se,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,X=Ne.length;J<X;J++)if(ce=Ne[J],g.format!==Qt)if(le!==null)if(U){if(se)if(g.layerUpdates.size>0){let de=hc(ce.width,ce.height,g.format,g.type);for(let Ee of g.layerUpdates){let ke=ce.data.subarray(Ee*de/ce.data.BYTES_PER_ELEMENT,(Ee+1)*de/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ee,ce.width,ce.height,1,le,ke)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,le,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Se,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,le,we,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Se,ce.width,ce.height,ee.depth,0,le,we,ce.data)}else{U&&te&&t.texStorage2D(i.TEXTURE_2D,ge,Se,Ne[0].width,Ne[0].height);for(let J=0,X=Ne.length;J<X;J++)ce=Ne[J],g.format!==Qt?le!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(i.TEXTURE_2D,J,Se,ce.width,ce.height,0,le,we,ce.data)}else if(g.isDataArrayTexture)if(U){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Se,ee.width,ee.height,ee.depth),se)if(g.layerUpdates.size>0){let J=hc(ee.width,ee.height,g.format,g.type);for(let X of g.layerUpdates){let de=ee.data.subarray(X*J/ee.data.BYTES_PER_ELEMENT,(X+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,le,we,de)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(g.isData3DTexture)U?(te&&t.texStorage3D(i.TEXTURE_3D,ge,Se,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(g.isFramebufferTexture){if(te)if(U)t.texStorage2D(i.TEXTURE_2D,ge,Se,ee.width,ee.height);else{let J=ee.width,X=ee.height;for(let de=0;de<ge;de++)t.texImage2D(i.TEXTURE_2D,de,Se,J,X,0,le,we,null),J>>=1,X>>=1}}else if(Ne.length>0){if(U&&te){let J=z(Ne[0]);t.texStorage2D(i.TEXTURE_2D,ge,Se,J.width,J.height)}for(let J=0,X=Ne.length;J<X;J++)ce=Ne[J],U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le,we,ce):t.texImage2D(i.TEXTURE_2D,J,Se,le,we,ce);g.generateMipmaps=!1}else if(U){if(te){let J=z(ee);t.texStorage2D(i.TEXTURE_2D,ge,Se,J.width,J.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,we,ee)}else t.texImage2D(i.TEXTURE_2D,0,Se,le,we,ee);m(g)&&d(N),re.__version=V.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Q(_,g,R){if(g.image.length!==6)return;let N=Ke(_,g),H=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+R);let V=n.get(H);if(H.version!==V.__version||N===!0){t.activeTexture(i.TEXTURE0+R);let re=Ze.getPrimaries(Ze.workingColorSpace),Z=g.colorSpace===Un?null:Ze.getPrimaries(g.colorSpace),ae=g.colorSpace===Un||re===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let pe=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!pe&&!ee?le[X]=x(g.image[X],!0,s.maxCubemapSize):le[X]=ee?g.image[X].image:g.image[X],le[X]=mt(g,le[X]);let we=le[0],Se=r.convert(g.format,g.colorSpace),ce=r.convert(g.type),Ne=E(g.internalFormat,Se,ce,g.colorSpace),U=g.isVideoTexture!==!0,te=V.__version===void 0||N===!0,se=H.dataReady,ge=w(g,we);De(i.TEXTURE_CUBE_MAP,g);let J;if(pe){U&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ne,we.width,we.height);for(let X=0;X<6;X++){J=le[X].mipmaps;for(let de=0;de<J.length;de++){let Ee=J[de];g.format!==Qt?Se!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,Ne,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,Ee.width,Ee.height,Se,ce,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,Ne,Ee.width,Ee.height,0,Se,ce,Ee.data)}}}else{if(J=g.mipmaps,U&&te){J.length>0&&ge++;let X=z(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ne,X.width,X.height)}for(let X=0;X<6;X++)if(ee){U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,Se,ce,le[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,le[X].width,le[X].height,0,Se,ce,le[X].data);for(let de=0;de<J.length;de++){let ke=J[de].image[X].image;U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,ke.width,ke.height,Se,ce,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,Ne,ke.width,ke.height,0,Se,ce,ke.data)}}else{U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Se,ce,le[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,Se,ce,le[X]);for(let de=0;de<J.length;de++){let Ee=J[de];U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,Se,ce,Ee.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,Ne,Se,ce,Ee.image[X])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),V.__version=H.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function me(_,g,R,N,H,V){let re=r.convert(R.format,R.colorSpace),Z=r.convert(R.type),ae=E(R.internalFormat,re,Z,R.colorSpace),pe=n.get(g),ee=n.get(R);if(ee.__renderTarget=g,!pe.__hasExternalTextures){let le=Math.max(1,g.width>>V),we=Math.max(1,g.height>>V);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,V,ae,le,we,g.depth,0,re,Z,null):t.texImage2D(H,V,ae,le,we,0,re,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,ee.__webglTexture,0,it(g)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,ee.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(_,g,R){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){let N=g.depthTexture,H=N&&N.isDepthTexture?N.type:null,V=y(g.stencilBuffer,H),re=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=it(g);ye(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,V,g.width,g.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,_)}else{let N=g.textures;for(let H=0;H<N.length;H++){let V=N[H],re=r.convert(V.format,V.colorSpace),Z=r.convert(V.type),ae=E(V.internalFormat,re,Z,V.colorSpace),pe=it(g);R&&ye(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ae,g.width,g.height):ye(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ae,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=n.get(g.depthTexture);N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);let H=N.__webglTexture,V=it(g);if(g.depthTexture.format===Vi)ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(g.depthTexture.format===ji)ye(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function He(_){let g=n.get(_),R=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){let N=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),N){let H=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),g.__depthDisposeCallback=H}g.__boundDepthTexture=N}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let N=_.texture.mipmaps;N&&N.length>0?be(g.__webglFramebuffer[0],_):be(g.__webglFramebuffer,_)}else if(R){g.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[N]),g.__webglDepthbuffer[N]===void 0)g.__webglDepthbuffer[N]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[N],_,!1);else{let H=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,V)}}else{let N=_.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,_,!1);else{let H=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(_,g,R){let N=n.get(_);g!==void 0&&me(N.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&He(_)}function C(_){let g=_.texture,R=n.get(_),N=n.get(g);_.addEventListener("dispose",I);let H=_.textures,V=_.isWebGLCubeRenderTarget===!0,re=H.length>1;if(re||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=g.version,a.memory.textures++),V){R.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[Z]=[];for(let ae=0;ae<g.mipmaps.length;ae++)R.__webglFramebuffer[Z][ae]=i.createFramebuffer()}else R.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)R.__webglFramebuffer[Z]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(re)for(let Z=0,ae=H.length;Z<ae;Z++){let pe=n.get(H[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&ye(_)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Z=0;Z<H.length;Z++){let ae=H[Z];R.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[Z]);let pe=r.convert(ae.format,ae.colorSpace),ee=r.convert(ae.type),le=E(ae.internalFormat,pe,ee,ae.colorSpace,_.isXRRenderTarget===!0),we=it(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,le,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,R.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(R.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),De(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(R.__webglFramebuffer[Z][ae],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae);else me(R.__webglFramebuffer[Z],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,ae=H.length;Z<ae;Z++){let pe=H[Z],ee=n.get(pe),le=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(le=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),De(le,pe),me(R.__webglFramebuffer,_,pe,i.COLOR_ATTACHMENT0+Z,le,0),m(pe)&&d(le)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Z=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,N.__webglTexture),De(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)me(R.__webglFramebuffer[ae],_,g,i.COLOR_ATTACHMENT0,Z,ae);else me(R.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,Z,0);m(g)&&d(Z),t.unbindTexture()}_.depthBuffer&&He(_)}function tt(_){let g=_.textures;for(let R=0,N=g.length;R<N;R++){let H=g[R];if(m(H)){let V=T(_),re=n.get(H).__webglTexture;t.bindTexture(V,re),d(V),t.unbindTexture()}}}let Oe=[],Ie=[];function xe(_){if(_.samples>0){if(ye(_)===!1){let g=_.textures,R=_.width,N=_.height,H=i.COLOR_BUFFER_BIT,V=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(_),Z=g.length>1;if(Z)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let ae=_.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let ee=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,R,N,0,0,R,N,H,i.NEAREST),l===!0&&(Oe.length=0,Ie.length=0,Oe.push(i.COLOR_ATTACHMENT0+pe),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Oe.push(V),Ie.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let ee=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function it(_){return Math.min(s.maxSamples,_.samples)}function ye(_){let g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ze(_){let g=a.render.frame;u.get(_)!==g&&(u.set(_,g),_.update())}function mt(_,g){let R=_.colorSpace,N=_.format,H=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||R!==oi&&R!==Un&&(Ze.getTransfer(R)===Qe?(N!==Qt||H!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}function z(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=ft,this.setupRenderTarget=C,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function Eg(i,e){function t(n,s=Un){let r,a=Ze.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$o)return i.BYTE;if(n===Zo)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===jo)return i.ALPHA;if(n===Qo)return i.RGB;if(n===Qt)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===va)return i.RED_INTEGER;if(n===tc)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===Ys||n===$s||n===Zs||n===Js)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ca||n===Ra||n===Ia||n===Pa||n===Da||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ha||n===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===qa||n===Xa||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ls(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,v=null,x=typeof XRWebGLBinding<"u",m=new Ec,d={},T=t.getContextAttributes(),E=null,y=null,w=[],A=[],I=new Te,D=null,b=new At;b.viewport=new ht;let S=new At;S.viewport=new ht;let L=[b,S],B=new ta,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=w[j];return Q===void 0&&(Q=new Yi,w[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=w[j];return Q===void 0&&(Q=new Yi,w[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=w[j];return Q===void 0&&(Q=new Yi,w[j]=Q),Q.getHandSpace()};function K(j){let Q=A.indexOf(j.inputSource);if(Q===-1)return;let me=w[Q];me!==void 0&&(me.update(j.inputSource,j.frame,c||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let j=0;j<w.length;j++){let Q=A[j];Q!==null&&(A[j]=null,w[j].disconnect(Q))}k=null,Y=null,m.reset();for(let j in d)delete d[j];e.setRenderTarget(E),f=null,p=null,h=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,be=null;T.depth&&(be=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=T.stencil?ji:Vi,Ue=T.stencil?Ki:Jn);let He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new fn(p.textureWidth,p.textureHeight,{format:Qt,type:un,depthTexture:new Ds(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(j){for(let Q=0;Q<j.removed.length;Q++){let me=j.removed[Q],Ue=A.indexOf(me);Ue>=0&&(A[Ue]=null,w[Ue].disconnect(me))}for(let Q=0;Q<j.added.length;Q++){let me=j.added[Q],Ue=A.indexOf(me);if(Ue===-1){for(let He=0;He<w.length;He++)if(He>=A.length){A.push(me),Ue=He;break}else if(A[He]===null){A[He]=me,Ue=He;break}if(Ue===-1)break}let be=w[Ue];be&&be.connect(me)}}let q=new P,oe=new P;function fe(j,Q,me){q.setFromMatrixPosition(Q.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);let Ue=q.distanceTo(oe),be=Q.projectionMatrix.elements,He=me.projectionMatrix.elements,ft=be[14]/(be[10]-1),C=be[14]/(be[10]+1),tt=(be[9]+1)/be[5],Oe=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],xe=(He[8]+1)/He[0],it=ft*Ie,ye=ft*xe,ze=Ue/(-Ie+xe),mt=ze*-Ie;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(mt),j.translateZ(ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let z=ft+ze,_=C+ze,g=it-mt,R=ye+(Ue-mt),N=tt*C/_*z,H=Oe*C/_*z;j.projectionMatrix.makePerspective(g,R,N,H,z,_),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ae(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Q=j.near,me=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),B.near=S.near=b.near=Q,B.far=S.far=b.far=me,(k!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,Y=B.far),B.layers.mask=j.layers.mask|6,b.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let Ue=j.parent,be=B.cameras;Ae(B,Ue);for(let He=0;He<be.length;He++)Ae(be[He],Ue);be.length===2?fe(B,b,S):B.projectionMatrix.copy(b.projectionMatrix),De(j,B,Ue)};function De(j,Q,me){me===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return d[j]};let Ke=null;function je(j,Q){if(u=Q.getViewerPose(c||a),v=Q,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;me.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let C=0;C<me.length;C++){let tt=me[C],Oe=null;if(f!==null)Oe=f.getViewport(tt);else{let xe=h.getViewSubImage(p,tt);Oe=xe.viewport,C===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let Ie=L[C];Ie===void 0&&(Ie=new At,Ie.layers.enable(C),Ie.viewport=new ht,L[C]=Ie),Ie.matrix.fromArray(tt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(tt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),C===0&&(B.matrix.copy(Ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(Ie)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let C=h.getDepthInformation(me[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<me.length;C++){let tt=me[C].camera;if(tt){let Oe=d[tt];Oe||(Oe=new Ls,d[tt]=Oe);let Ie=h.getCameraImage(tt);Oe.sourceTexture=Ie}}}}for(let me=0;me<w.length;me++){let Ue=A[me],be=w[me];Ue!==null&&be!==void 0&&be.update(Ue,Q,c||a)}Ke&&Ke(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}let Ye=new wu;Ye.setAnimationLoop(je),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}},_i=new cn,wg=new ut;function Cg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,oc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=e.get(d),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,_i.copy(y),_i.x*=-1,_i.y*=-1,_i.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(_i)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=s[T.id];y===void 0&&(v(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",m));let w=E.program;n.updateUBOMapping(T,w);let A=e.render.frame;r[T.id]!==A&&(p(T),r[T.id]=A)}function u(T){let E=h();T.__bindingPointIndex=E;let y=i.createBuffer(),w=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let E=s[T.id],y=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,I=y.length;A<I;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,S=D.length;b<S;b++){let L=D[b];if(f(L,A,b,w)===!0){let B=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let K=0;K<k.length;K++){let $=k[K],ie=x($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,y,w){let A=T.value,I=E+"_"+y;if(w[I]===void 0)return typeof A=="number"||typeof A=="boolean"?w[I]=A:w[I]=A.clone(),!0;{let D=w[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(T){let E=T.uniforms,y=0,w=16;for(let I=0,D=E.length;I<D;I++){let b=Array.isArray(E[I])?E[I]:[E[I]];for(let S=0,L=b.length;S<L;S++){let B=b[S],k=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,K=k.length;Y<K;Y++){let $=k[Y],ie=x($),q=y%w,oe=q%ie.boundary,fe=q+oe;y+=oe,fe!==0&&w-fe<ie.storage&&(y+=w-fe),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ie.storage}}}let A=y%w;return A>0&&(y+=w-A),T.__size=y,T.__cache={},this}function x(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ja=class{constructor(e={}){let{canvas:t=Ql(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Tt;let A=0,I=0,D=null,b=-1,S=null,L=new ht,B=new ht,k=null,Y=new Xe(0),K=0,$=t.width,ie=t.height,q=1,oe=null,fe=null,Ae=new ht(0,0,$,ie),De=new ht(0,0,$,ie),Ke=!1,je=new $i,Ye=!1,j=!1,Q=new ut,me=new P,Ue=new ht,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function ft(){return D===null?q:1}let C=n;function tt(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){let F="webgl2";if(C=tt(F,M),C===null)throw tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,Ie,xe,it,ye,ze,mt,z,_,g,R,N,H,V,re,Z,ae,pe,ee,le,we,Se,ce,Ne;function U(){Oe=new Yp(C),Oe.init(),Se=new Eg(C,Oe),Ie=new kp(C,Oe,e,Se),xe=new Sg(C,Oe),Ie.reversedDepthBuffer&&p&&xe.buffers.depth.setReversed(!0),it=new Jp(C),ye=new lg,ze=new bg(C,Oe,xe,ye,Ie,Se,it),mt=new Hp(y),z=new Xp(y),_=new td(C),ce=new Bp(C,_),g=new $p(C,_,it,ce),R=new jp(C,g,_,it),ee=new Kp(C,Ie,ze),Z=new Vp(ye),N=new cg(y,mt,z,Oe,Ie,ce,Z),H=new Cg(y,ye),V=new hg,re=new vg(Oe),pe=new Op(y,mt,z,xe,R,f,l),ae=new yg(y,R,Ie),Ne=new Rg(C,it,Ie,xe),le=new zp(C,Oe,it),we=new Zp(C,Oe,it),it.programs=N.programs,y.capabilities=Ie,y.extensions=Oe,y.properties=ye,y.renderLists=V,y.shadowMap=ae,y.state=xe,y.info=it}U();let te=new Tc(y,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize($,ie,!1))},this.getSize=function(M){return M.set($,ie)},this.setSize=function(M,F,G=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ie=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set($*q,ie*q).floor()},this.setDrawingBufferSize=function(M,F,G){$=M,ie=F,q=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,F,G,W){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,F,G,W),xe.viewport(L.copy(Ae).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(De)},this.setScissor=function(M,F,G,W){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,F,G,W),xe.scissor(B.copy(De).multiplyScalar(q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){xe.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,G=!0){let W=0;if(M){let O=!1;if(D!==null){let ne=D.texture.format;O=ne===xa||ne===_a||ne===va}if(O){let ne=D.texture.type,he=ne===un||ne===Jn||ne===Zi||ne===Ki||ne===ma||ne===ga,Me=pe.getClearColor(),_e=pe.getClearAlpha(),Le=Me.r,Fe=Me.g,Ce=Me.b;he?(v[0]=Le,v[1]=Fe,v[2]=Ce,v[3]=_e,C.clearBufferuiv(C.COLOR,0,v)):(x[0]=Le,x[1]=Fe,x[2]=Ce,x[3]=_e,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}F&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",J,!1),pe.dispose(),V.dispose(),re.dispose(),ye.dispose(),mt.dispose(),z.dispose(),R.dispose(),ce.dispose(),Ne.dispose(),N.dispose(),te.dispose(),te.removeEventListener("sessionstart",yt),te.removeEventListener("sessionend",ls),jn.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=it.autoReset,F=ae.enabled,G=ae.autoUpdate,W=ae.needsUpdate,O=ae.type;U(),it.autoReset=M,ae.enabled=F,ae.autoUpdate=G,ae.needsUpdate=W,ae.type=O}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function X(M){let F=M.target;F.removeEventListener("dispose",X),de(F)}function de(M){Ee(M),ye.remove(M)}function Ee(M){let F=ye.get(M).programs;F!==void 0&&(F.forEach(function(G){N.releaseProgram(G)}),M.isShaderMaterial&&N.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,W,O,ne){F===null&&(F=be);let he=O.isMesh&&O.matrixWorld.determinant()<0,Me=Yu(M,F,G,W,O);xe.setMaterial(W,he);let _e=G.index,Le=1;if(W.wireframe===!0){if(_e=g.getWireframeAttribute(G),_e===void 0)return;Le=2}let Fe=G.drawRange,Ce=G.attributes.position,$e=Fe.start*Le,et=(Fe.start+Fe.count)*Le;ne!==null&&($e=Math.max($e,ne.start*Le),et=Math.min(et,(ne.start+ne.count)*Le)),_e!==null?($e=Math.max($e,0),et=Math.min(et,_e.count)):Ce!=null&&($e=Math.max($e,0),et=Math.min(et,Ce.count));let pt=et-$e;if(pt<0||pt===1/0)return;ce.setup(O,W,Me,G,_e);let st,nt=le;if(_e!==null&&(st=_.get(_e),nt=we,nt.setIndex(st)),O.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*ft()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(O.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),xe.setLineWidth(Re*ft()),O.isLineSegments?nt.setMode(C.LINES):O.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else O.isPoints?nt.setMode(C.POINTS):O.isSprite&&nt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Re=O._multiDrawStarts,ct=O._multiDrawCounts,Je=O._multiDrawCount,Bt=_e?_.get(_e).bytesPerElement:1,Ai=ye.get(W).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)Ai.setValue(C,"_gl_DrawID",zt),nt.render(Re[zt]/Bt,ct[zt])}else if(O.isInstancedMesh)nt.renderInstances($e,pt,O.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ct=Math.min(G.instanceCount,Re);nt.renderInstances($e,pt,ct)}else nt.render($e,pt)};function ke(M,F,G){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,sr(M,F,G),M.side=wn,M.needsUpdate=!0,sr(M,F,G),M.side=jt):sr(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),d=re.get(G),d.init(F),E.push(d),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let W=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){let Me=ne[he];ke(Me,G,O),W.add(Me)}else ke(ne,G,O),W.add(ne)}),d=E.pop(),W},this.compileAsync=function(M,F,G=null){let W=this.compile(M,F,G);return new Promise(O=>{function ne(){if(W.forEach(function(he){ye.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){O(M);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let We=null;function Ot(M){We&&We(M)}function yt(){jn.stop()}function ls(){jn.start()}let jn=new wu;jn.setAnimationLoop(Ot),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(M){We=M,te.setAnimationLoop(M),M===null?jn.stop():jn.start()},te.addEventListener("sessionstart",yt),te.addEventListener("sessionend",ls),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(F),F=te.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,D),d=re.get(M,E.length),d.init(F),E.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(Q,an,F.reversedDepth),j=this.localClippingEnabled,Ye=Z.init(this.clippingPlanes,j),m=V.get(M,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){let ne=y.xr.getDepthSensingMesh();ne!==null&&so(ne,F,-1/0,y.sortObjects)}so(M,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(oe,fe),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&pe.addToRenderList(m,M),this.info.render.frame++,Ye===!0&&Z.beginShadows();let G=d.state.shadowsArray;ae.render(G,M,F),Ye===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){let ne=F.cameras;if(O.length>0)for(let he=0,Me=ne.length;he<Me;he++){let _e=ne[he];Vc(W,O,M,_e)}He&&pe.render(M);for(let he=0,Me=ne.length;he<Me;he++){let _e=ne[he];kc(m,M,_e,_e.viewport)}}else O.length>0&&Vc(W,O,M,F),He&&pe.render(M),kc(m,M,F);D!==null&&I===0&&(ze.updateMultisampleRenderTarget(D),ze.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,F),ce.resetDefaultState(),b=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],Ye===!0&&Z.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function so(M,F,G,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||je.intersectsSprite(M)){W&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let he=R.update(M),Me=M.material;Me.visible&&m.push(M,he,Me,G,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||je.intersectsObject(M))){let he=R.update(M),Me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ue.copy(he.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(Me)){let _e=he.groups;for(let Le=0,Fe=_e.length;Le<Fe;Le++){let Ce=_e[Le],$e=Me[Ce.materialIndex];$e&&$e.visible&&m.push(M,he,$e,G,Ue.z,Ce)}}else Me.visible&&m.push(M,he,Me,G,Ue.z,null)}}let ne=M.children;for(let he=0,Me=ne.length;he<Me;he++)so(ne[he],F,G,W)}function kc(M,F,G,W){let O=M.opaque,ne=M.transmissive,he=M.transparent;d.setupLightsView(G),Ye===!0&&Z.setGlobalState(y.clippingPlanes,G),W&&xe.viewport(L.copy(W)),O.length>0&&ir(O,F,G),ne.length>0&&ir(ne,F,G),he.length>0&&ir(he,F,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Vc(M,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new fn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ji:un,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ne=d.state.transmissionRenderTarget[W.id],he=W.viewport||L;ne.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);let Me=y.getRenderTarget(),_e=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(Y),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),He&&pe.render(G);let Fe=y.toneMapping;y.toneMapping=Ln;let Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),Ye===!0&&Z.setGlobalState(y.clippingPlanes,W),ir(M,G,W),ze.updateMultisampleRenderTarget(ne),ze.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let et=0,pt=F.length;et<pt;et++){let st=F[et],nt=st.object,Re=st.geometry,ct=st.material,Je=st.group;if(ct.side===jt&&nt.layers.test(W.layers)){let Bt=ct.side;ct.side=Dt,ct.needsUpdate=!0,Hc(nt,G,W,Re,ct,Je),ct.side=Bt,ct.needsUpdate=!0,$e=!0}}$e===!0&&(ze.updateMultisampleRenderTarget(ne),ze.updateRenderTargetMipmap(ne))}y.setRenderTarget(Me,_e,Le),y.setClearColor(Y,K),Ce!==void 0&&(W.viewport=Ce),y.toneMapping=Fe}function ir(M,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=M.length;O<ne;O++){let he=M[O],Me=he.object,_e=he.geometry,Le=he.group,Fe=he.material;Fe.allowOverride===!0&&W!==null&&(Fe=W),Me.layers.test(G.layers)&&Hc(Me,F,G,_e,Fe,Le)}}function Hc(M,F,G,W,O,ne){M.onBeforeRender(y,F,G,W,O,ne),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,F,G,W,M,ne),O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,M,ne),O.side=wn,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,M,ne),O.side=jt):y.renderBufferDirect(G,F,W,O,M,ne),M.onAfterRender(y,F,G,W,O,ne)}function sr(M,F,G){F.isScene!==!0&&(F=be);let W=ye.get(M),O=d.state.lights,ne=d.state.shadowsArray,he=O.state.version,Me=N.getParameters(M,O.state,ne,F,G),_e=N.getProgramCacheKey(Me),Le=W.programs;W.environment=M.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(M.isMeshStandardMaterial?z:mt).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",X),Le=new Map,W.programs=Le);let Fe=Le.get(_e);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===he)return Wc(M,Me),Fe}else Me.uniforms=N.getUniforms(M),M.onBeforeCompile(Me,y),Fe=N.acquireProgram(Me,_e),Le.set(_e,Fe),W.uniforms=Me.uniforms;let Ce=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Z.uniform),Wc(M,Me),W.needsLights=Zu(M),W.lightsStateVersion=he,W.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Gc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=ns.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Wc(M,F){let G=ye.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Yu(M,F,G,W,O){F.isScene!==!0&&(F=be),ze.resetTextureUnits();let ne=F.fog,he=W.isMeshStandardMaterial?F.environment:null,Me=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:oi,_e=(W.isMeshStandardMaterial?z:mt).get(W.envMap||he),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,et=!!G.morphAttributes.color,pt=Ln;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=y.toneMapping);let st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=st!==void 0?st.length:0,Re=ye.get(W),ct=d.state.lights;if(Ye===!0&&(j===!0||M!==S)){let It=M===S&&W.id===b;Z.setState(W,M,It)}let Je=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ct.state.version||Re.outputColorSpace!==Me||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==_e||W.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Z.numPlanes||Re.numIntersection!==Z.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==Fe||Re.morphTargets!==Ce||Re.morphNormals!==$e||Re.morphColors!==et||Re.toneMapping!==pt||Re.morphTargetsCount!==nt)&&(Je=!0):(Je=!0,Re.__version=W.version);let Bt=Re.currentProgram;Je===!0&&(Bt=sr(W,F,O));let Ai=!1,zt=!1,us=!1,lt=Bt.getUniforms(),Yt=Re.uniforms;if(xe.useProgram(Bt.program)&&(Ai=!0,zt=!0,us=!0),W.id!==b&&(b=W.id,zt=!0),Ai||S!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(C,"projectionMatrix",M.projectionMatrix),lt.setValue(C,"viewMatrix",M.matrixWorldInverse);let Lt=lt.map.cameraPosition;Lt!==void 0&&Lt.setValue(C,me.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,zt=!0,us=!0)}if(O.isSkinnedMesh){lt.setOptional(C,O,"bindMatrix"),lt.setOptional(C,O,"bindMatrixInverse");let It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),lt.setValue(C,"boneTexture",It.boneTexture,ze))}O.isBatchedMesh&&(lt.setOptional(C,O,"batchingTexture"),lt.setValue(C,"batchingTexture",O._matricesTexture,ze),lt.setOptional(C,O,"batchingIdTexture"),lt.setValue(C,"batchingIdTexture",O._indirectTexture,ze),lt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&lt.setValue(C,"batchingColorTexture",O._colorsTexture,ze));let $t=G.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ee.update(O,G,Bt),(zt||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,lt.setValue(C,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yt.envMap.value=_e,Yt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),zt&&(lt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&$u(Yt,us),ne&&W.fog===!0&&H.refreshFogUniforms(Yt,ne),H.refreshMaterialUniforms(Yt,W,q,ie,d.state.transmissionRenderTarget[M.id]),ns.upload(C,Gc(Re),Yt,ze)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(C,Gc(Re),Yt,ze),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(C,"center",O.center),lt.setValue(C,"modelViewMatrix",O.modelViewMatrix),lt.setValue(C,"normalMatrix",O.normalMatrix),lt.setValue(C,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let It=W.uniformsGroups;for(let Lt=0,ro=It.length;Lt<ro;Lt++){let Qn=It[Lt];Ne.update(Qn,Bt),Ne.bind(Qn,Bt)}}return Bt}function $u(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,F,G){let W=ye.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=F,ye.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let G=ye.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let Ju=C.createFramebuffer();this.setRenderTarget=function(M,F=0,G=0){D=M,A=F,I=G;let W=!0,O=null,ne=!1,he=!1;if(M){let _e=ye.get(M);if(_e.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(_e.__hasExternalTextures)ze.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ce=M.depthTexture;if(_e.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(M.width!==Ce.image.width||M.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}let Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);let Fe=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][G]:O=Fe[F],ne=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?O=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[G]:O=Fe,L.copy(M.viewport),B.copy(M.scissor),k=M.scissorTest}else L.copy(Ae).multiplyScalar(q).floor(),B.copy(De).multiplyScalar(q).floor(),k=Ke;if(G!==0&&(O=Ju),xe.bindFramebuffer(C.FRAMEBUFFER,O)&&W&&xe.drawBuffers(M,O),xe.viewport(L),xe.scissor(B),xe.setScissorTest(k),ne){let _e=ye.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,G)}else if(he){let _e=F;for(let Le=0;Le<M.textures.length;Le++){let Fe=ye.get(M.textures[Le]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,G,_e)}}else if(M!==null&&G!==0){let _e=ye.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(M,F,G,W,O,ne,he,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){xe.bindFramebuffer(C.FRAMEBUFFER,_e);try{let Le=M.textures[Me],Fe=Le.format,Ce=Le.type;if(!Ie.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&G>=0&&G<=M.height-O&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(F,G,W,O,Se.convert(Fe),Se.convert(Ce),ne))}finally{let Le=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,W,O,ne,he,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(F>=0&&F<=M.width-W&&G>=0&&G<=M.height-O){xe.bindFramebuffer(C.FRAMEBUFFER,_e);let Le=M.textures[Me],Fe=Le.format,Ce=Le.type;if(!Ie.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(F,G,W,O,Se.convert(Fe),Se.convert(Ce),0);let et=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,et);let pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await eu(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer($e),C.deleteSync(pt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,G=0){let W=Math.pow(2,-G),O=Math.floor(M.image.width*W),ne=Math.floor(M.image.height*W),he=F!==null?F.x:0,Me=F!==null?F.y:0;ze.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,he,Me,O,ne),xe.unbindTexture()};let Ku=C.createFramebuffer(),ju=C.createFramebuffer();this.copyTextureToTexture=function(M,F,G=null,W=null,O=0,ne=null){ne===null&&(O!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let he,Me,_e,Le,Fe,Ce,$e,et,pt,st=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(G!==null)he=G.max.x-G.min.x,Me=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Fe=G.min.y,Ce=G.isBox3?G.min.z:0;else{let $t=Math.pow(2,-O);he=Math.floor(st.width*$t),Me=Math.floor(st.height*$t),M.isDataArrayTexture?_e=st.depth:M.isData3DTexture?_e=Math.floor(st.depth*$t):_e=1,Le=0,Fe=0,Ce=0}W!==null?($e=W.x,et=W.y,pt=W.z):($e=0,et=0,pt=0);let nt=Se.convert(F.format),Re=Se.convert(F.type),ct;F.isData3DTexture?(ze.setTexture3D(F,0),ct=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),ct=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let Je=C.getParameter(C.UNPACK_ROW_LENGTH),Bt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ai=C.getParameter(C.UNPACK_SKIP_PIXELS),zt=C.getParameter(C.UNPACK_SKIP_ROWS),us=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let lt=M.isDataArrayTexture||M.isData3DTexture,Yt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let $t=ye.get(M),It=ye.get(F),Lt=ye.get($t.__renderTarget),ro=ye.get(It.__renderTarget);xe.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,ro.__webglFramebuffer);for(let Qn=0;Qn<_e;Qn++)lt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,O,Ce+Qn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,ne,pt+Qn)),C.blitFramebuffer(Le,Fe,he,Me,$e,et,he,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ye.has(M)){let $t=ye.get(M),It=ye.get(F);xe.bindFramebuffer(C.READ_FRAMEBUFFER,Ku),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,ju);for(let Lt=0;Lt<_e;Lt++)lt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$t.__webglTexture,O,Ce+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$t.__webglTexture,O),Yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,ne,pt+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,It.__webglTexture,ne),O!==0?C.blitFramebuffer(Le,Fe,he,Me,$e,et,he,Me,C.COLOR_BUFFER_BIT,C.NEAREST):Yt?C.copyTexSubImage3D(ct,ne,$e,et,pt+Lt,Le,Fe,he,Me):C.copyTexSubImage2D(ct,ne,$e,et,Le,Fe,he,Me);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ct,ne,$e,et,pt,he,Me,_e,nt,Re,st.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,ne,$e,et,pt,he,Me,_e,nt,st.data):C.texSubImage3D(ct,ne,$e,et,pt,he,Me,_e,nt,Re,st):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ne,$e,et,he,Me,nt,Re,st.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ne,$e,et,st.width,st.height,nt,st.data):C.texSubImage2D(C.TEXTURE_2D,ne,$e,et,he,Me,nt,Re,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Bt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ai),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,us),ne===0&&F.generateMipmaps&&C.generateMipmap(ct),xe.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Kn={distance:6.8,pitch:.32,focusHeight:1.72,desktopFov:65,mobileFov:70},eo=class{constructor(e,t=[]){this.camera=e,this.obstacles=t,this.yaw=0,this.pitch=Kn.pitch,this.distance=Kn.distance,this.actualDistance=Kn.distance,this.target=new P,this.initialized=!1,this.ray=new di,this.ray.near=0,this.offset=new P,this.direction=new P,this.origin=new P,this.right=new P,this.up=new P,this.focus=new P,this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]]}rotate(e,t){this.yaw=mi.euclideanModulo(this.yaw-e*.006+Math.PI,Math.PI*2)-Math.PI,this.pitch=mi.clamp(this.pitch+t*.004,.16,1.08)}zoom(e){Number.isFinite(e)&&e>0&&(this.distance=mi.clamp(this.distance*e,4,15))}recenter(e=Math.PI){this.yaw=e-Math.PI,this.pitch=Kn.pitch}movement(e,t){let n=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*n+t*s,z:-e*s+t*n}}update(e,t,{snap:n=!1,reducedMotion:s=!1}={}){this.focus.copy(e),this.focus.y+=Kn.focusHeight,n||!this.initialized||s?this.target.copy(this.focus):this.target.lerp(this.focus,1-Math.exp(-14*t)),this.initialized=!0;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.sin(this.pitch),l=Math.cos(this.pitch);this.direction.set(r*l,o,a*l),this.right.set(a,0,-r),this.up.set(-r*o,l,-a*o);let c=this.distance;for(let[u,h]of this.sampleOffsets){this.origin.copy(this.target).addScaledVector(this.right,u).addScaledVector(this.up,h),this.ray.set(this.origin,this.direction),this.ray.far=this.distance+.35;let p=this.ray.intersectObjects(this.obstacles,!1)[0];p&&(c=Math.min(c,Math.max(.6,p.distance-.4)))}n||c<this.actualDistance||s?this.actualDistance=c:this.actualDistance=mi.lerp(this.actualDistance,c,1-Math.exp(-5*t)),this.offset.copy(this.direction).multiplyScalar(this.actualDistance),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}};function Du(i,e,{onTap:t=()=>{},blocked:n=()=>!1}={}){let s=new Map,r=0,a=()=>{let[f,v]=[...s.values()];return f&&v?Math.hypot(f.x-v.x,f.y-v.y):0},o=f=>{n()||f.button===1||(f.preventDefault(),s.set(f.pointerId,{x:f.clientX,y:f.clientY,startX:f.clientX,startY:f.clientY,button:f.button,moved:!1}),i.setPointerCapture?.(f.pointerId),s.size>1&&(s.forEach(v=>v.moved=!0),r=a()))},l=f=>{let v=s.get(f.pointerId);if(!v||n())return;f.preventDefault();let x=f.clientX-v.x,m=f.clientY-v.y;if(v.x=f.clientX,v.y=f.clientY,s.size>1){let d=a();r>0&&d>0&&e.zoom(r/d),r=d;return}!v.moved&&Math.hypot(v.x-v.startX,v.y-v.startY)>5?(v.moved=!0,e.rotate(v.x-v.startX,v.y-v.startY)):v.moved&&e.rotate(x,m)},c=f=>{let v=s.get(f.pointerId);if(!v)return;s.delete(f.pointerId),r=0;let x=v.moved||Math.hypot(f.clientX-v.startX,f.clientY-v.startY)>5;f.type==="pointerup"&&!x&&v.button===0&&!n()&&t(f.clientX,f.clientY),i.hasPointerCapture?.(f.pointerId)&&i.releasePointerCapture(f.pointerId)},u=f=>{n()||(f.preventDefault(),e.zoom(Math.exp(mi.clamp(f.deltaY,-200,200)*.0015)))},h=f=>f.preventDefault(),p=()=>{s.clear(),r=0};i.addEventListener("pointerdown",o),i.addEventListener("pointermove",l);for(let f of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(f,c);return i.addEventListener("wheel",u,{passive:!1}),i.addEventListener("contextmenu",h),{cancel:p}}var js=new P;function en(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let c=.5*a/(a+o),u=1-js.angleTo(i)/l;return Math.sign(js[t])===1?u*c:o/(a+o)+c+c*(1-u)}var to=class i extends pn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,v=h.length/6,x=new P,m=.5/a;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*r,h[d+1]=u.y*Math.sign(l.y)+c.y*r,h[d+2]=u.z*Math.sign(l.z)+c.z*r,p[d+0]=c.x,p[d+1]=c.y,p[d+2]=c.z,Math.floor(d/v)){case 0:x.set(1,0,0),f[T+0]=en(x,c,"z","y",r,n),f[T+1]=1-en(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[T+0]=1-en(x,c,"z","y",r,n),f[T+1]=1-en(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[T+0]=1-en(x,c,"x","z",r,e),f[T+1]=en(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[T+0]=1-en(x,c,"x","z",r,e),f[T+1]=1-en(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[T+0]=1-en(x,c,"x","y",r,e),f[T+1]=1-en(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[T+0]=en(x,c,"x","y",r,e),f[T+1]=1-en(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ig={height:2.84,torsoWidth:1.04,torsoHeight:1.04,armWidth:.48,armHeight:1.02,legWidth:.48,legHeight:1,headWidth:.76,headHeight:.68,footBottom:0},Cc=new Map;function Lu(i="#527f65",e="#d3a077",t="#44372d",n=null){let s=n||(x=>new ui({color:x,roughness:.58,metalness:0})),r=new wt,a=[],o=[];function l(x,m,d,T,E,y,w,A,I=r,D=.035){let b=[m,d,T,D].join(",");Cc.has(b)||Cc.set(b,new to(m,d,T,1,D));let S=new ot(Cc.get(b),s(E));return S.name=x,S.position.set(y,w,A),S.castShadow=!0,S.receiveShadow=!0,I.add(S),S}let c=l("avatar-torso",1.04,1.04,.56,i,0,1.52,0);o.push(c);let u=new ot(new Pn(.17,.17,.12,12),s(e));u.position.y=2.08,u.castShadow=!0,r.add(u);let h=new ot(new Pn(.38,.38,.68,16),s(e));h.name="avatar-head",h.position.set(0,2.44,0),h.castShadow=!0,h.receiveShadow=!0,r.add(h),l("avatar-hair",.79,.14,.73,t,0,2.77,-.025,r,.06),l("avatar-hair-back",.72,.27,.17,t,0,2.63,-.3,r,.03),l("avatar-hair-fringe",.39,.11,.12,t,-.15,2.7,.31,r,.025);for(let x of[-1,1]){let m=new wt;m.name=x<0?"avatar-arm-left":"avatar-arm-right",m.position.set(x*.78,2.03,0),r.add(m),o.push(l("avatar-sleeve",.48,.72,.56,i,0,-.36,0,m)),l("avatar-hand",.46,.3,.54,e,0,-.87,0,m);let d=new wt;d.name=x<0?"avatar-leg-left":"avatar-leg-right",d.position.set(x*.265,1,0),r.add(d),l("avatar-trouser",.48,.91,.54,"#344855",0,-.455,0,d),l("avatar-shoe",.5,.16,.64,"#f4f2e8",0,-.92,.045,d,.025),l("avatar-shoe-sole",.51,.045,.65,"#c9cec4",0,-.9775,.045,d,.012),a.push(m,d)}for(let x of[-1,1]){let m=new ot(new Bs(.043,8,6),s("#292c2c"));m.scale.set(1,1.2,.35),m.position.set(x*.13,2.47,.36),r.add(m)}let p=new ci(new P(-.14,2.34,.36),new P(0,2.23,.39),new P(.14,2.34,.36)),f=new ot(new zs(p,12,.012,5,!1),s("#694634"));r.add(f),l("avatar-pocket",.25,.25,.025,"#b9d4ab",.245,1.68,.293,r,.016),l("avatar-badge",.15,.065,.014,"#f1f5dc",.245,1.72,.313,r,.006),l("avatar-shirt-seam",.015,.68,.012,"#719479",0,1.54,.285,r,.004);let v=new ot(new Us(.74,24),new In({color:"#53694a",transparent:!0,opacity:.16,depthWrite:!1}));return v.rotation.x=-Math.PI/2,v.position.y=.012,r.add(v),r.userData.bodyHeight=Ig.height,{group:r,torso:c,limbs:a,shirtMeshes:o}}var Qs={bodyRadius:.5,deskTop:1.665,wallTop:3.76,walkSpeed:5.3};function Uu(i,e,t){if(t.some(s=>Math.abs(i-s.x)<=3.6&&Math.abs(e-s.z)<=2.85))return .39;let n=Math.hypot(i,e-1.2);return n<=1.25?.39:n<=3.1?.315:n<=4.1?.28:Math.abs(i)<=2.15&&e>=-13.7&&e<=13.3||Math.abs(i)<=14.5&&Math.abs(e)<=1.9?.195:Math.abs(i)<=10.5&&Math.abs(e-7.1)<=1.65?.19:.13}var dt=[],Pe=(i,e,t,n,s,r="")=>dt.push({id:dt.length+1,title:i,category:e,level:Math.floor(dt.length/10)+1,symptom:t,steps:n,confirm:s,note:r});Pe("Computador n\xE3o liga ao apertar Power","Energia","Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o bot\xE3o.",[["Tomada sem energia","Teste a tomada com um aparelho que voc\xEA sabe que funciona; n\xE3o introduza objetos nela.","Use outra tomada comprovadamente energizada. Se houver defeito na instala\xE7\xE3o, chame o respons\xE1vel."],["Cabo de for\xE7a desconectado da tomada","Observe se o plugue est\xE1 encaixado na tomada ou no filtro de linha.","Conecte o cabo corretamente; se usar filtro de linha, confira se ele est\xE1 ligado."],["Cabo desconectado da fonte","Observe a conex\xE3o na parte traseira do gabinete.","Com a alimenta\xE7\xE3o desligada, encaixe o cabo firmemente na fonte."],["Interruptor traseiro da fonte desligado","Se houver chave I/O, veja se est\xE1 em O. I/O n\xE3o \xE9 o seletor 115/230 V.","Coloque a chave I/O em I. Nunca mude o seletor de tens\xE3o por tentativa."],["Cabo de for\xE7a danificado","Inspecione o cabo desligado. Se n\xE3o houver dano vis\xEDvel, compare com outro compat\xEDvel e comprovadamente bom.","Substitua o cabo danificado ou que falhou no teste."],["Fonte ausente ou conex\xF5es internas soltas","Com o professor e o PC fora da tomada, confirme a presen\xE7a da fonte e os conectores da placa-m\xE3e, conforme o manual.","Se faltar fonte, instale uma compat\xEDvel. Se houver conex\xE3o solta, reconecte o conector correto."],["Falha da fonte, bot\xE3o ou placa-m\xE3e","Depois das etapas anteriores, o professor testa uma fonte compat\xEDvel conhecida e verifica o cabo do bot\xE3o no manual.","Substitua apenas a pe\xE7a cuja falha foi isolada. Encaminhe a placa-m\xE3e para diagn\xF3stico se persistir."]],"O computador volta a responder ao Power e come\xE7a a inicializa\xE7\xE3o.","Abrir a fonte n\xE3o faz parte do diagn\xF3stico. Ventoinha da fonte parada, sozinha, n\xE3o comprova defeito: alguns modelos t\xEAm modo sem rota\xE7\xE3o.");Pe("Monitor n\xE3o acende","V\xEDdeo","O monitor n\xE3o mostra imagem nem seu pr\xF3prio menu.",[["Monitor desligado","Aperte o bot\xE3o do monitor e procure o LED de energia.","Ligue o monitor."],["Cabo de energia mal conectado","Inspecione os dois extremos do cabo e a tomada.","Reconecte o cabo e use tomada energizada."],["Fonte externa ou cabo defeituoso","Se o monitor usa adaptador, compare apenas com modelo de tens\xE3o, polaridade e corrente compat\xEDveis.","Substitua o cabo ou adaptador cuja falha foi confirmada."],["Falha no monitor","Teste o monitor em outro computador e tente abrir o menu sem o cabo de v\xEDdeo.","Se continuar sem menu nem alimenta\xE7\xE3o, encaminhe para reparo ou substitua."]],"O menu pr\xF3prio do monitor aparece e o LED indica alimenta\xE7\xE3o.","N\xE3o abra o monitor: h\xE1 circuitos com tens\xE3o perigosa.");Pe("PC liga, mas o monitor mostra \u201Csem sinal\u201D","V\xEDdeo","H\xE1 luzes ou ventoinhas no gabinete, mas o monitor n\xE3o recebe v\xEDdeo.",[["Entrada de v\xEDdeo incorreta","Abra o menu do monitor e compare a entrada selecionada com o cabo usado.","Selecione HDMI, DisplayPort ou outra entrada realmente conectada."],["Cabo de v\xEDdeo solto ou defeituoso","Confira as duas pontas; teste outro cabo compat\xEDvel.","Reconecte ou substitua o cabo que falhou."],["Cabo na sa\xEDda de v\xEDdeo errada","Se h\xE1 placa de v\xEDdeo dedicada, confira se o cabo est\xE1 ligado nela. A sa\xEDda da placa-m\xE3e depende de v\xEDdeo integrado e configura\xE7\xE3o.","Conecte \xE0 sa\xEDda adequada ao conjunto instalado."],["Falha do monitor ou aus\xEAncia de POST","Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagn\xF3stico e consulte o caso 41.","Isole primeiro monitor/cabo; com o professor, investigue mem\xF3ria e v\xEDdeo se o PC n\xE3o concluir o autoteste."]],"A imagem de inicializa\xE7\xE3o aparece e o sistema pode ser exibido.","Ventoinhas girando n\xE3o garantem que o computador concluiu o POST.");Pe("Imagem pisca ou some durante o uso","V\xEDdeo","A tela perde a imagem por instantes, embora o computador continue funcionando.",[["Conex\xE3o frouxa","Confira se o cabo est\xE1 firme nas duas pontas, sem pux\xE1-lo lateralmente.","Reconecte e deixe folga no cabo."],["Cabo ou adaptador com defeito","Teste conex\xE3o direta e outro cabo compat\xEDvel com a resolu\xE7\xE3o usada.","Troque o cabo/adaptador que reproduz a falha."],["Resolu\xE7\xE3o ou frequ\xEAncia inadequada","Compare os ajustes de tela com as especifica\xE7\xF5es do monitor.","Use uma resolu\xE7\xE3o e frequ\xEAncia suportadas."],["Driver ou hardware de v\xEDdeo inst\xE1vel","Observe se come\xE7ou ap\xF3s atualiza\xE7\xE3o; compare com outro monitor e consulte os casos 37 e 44.","Reinstale ou reverta o driver oficial se houver rela\xE7\xE3o. Se persistir, pe\xE7a diagn\xF3stico da GPU."]],"A imagem permanece est\xE1vel no mesmo per\xEDodo e tarefa que antes provocavam a falha.");Pe("Imagem esticada, grande ou pouco n\xEDtida","V\xEDdeo","O sistema aparece, mas letras e propor\xE7\xF5es est\xE3o incorretas.",[["Resolu\xE7\xE3o diferente da nativa","Consulte a resolu\xE7\xE3o recomendada nas configura\xE7\xF5es de tela e no manual.","Ajuste para a resolu\xE7\xE3o nativa suportada pelo monitor."],["Escala de interface inadequada","Confira o ajuste de escala do sistema.","Escolha uma escala confort\xE1vel; compare sem mudar v\xE1rias op\xE7\xF5es ao mesmo tempo."],["Configura\xE7\xE3o do monitor incorreta","Confira propor\xE7\xE3o da imagem e ajustes do pr\xF3prio monitor.","Restaure a propor\xE7\xE3o correta; para VGA, use o ajuste autom\xE1tico do monitor se dispon\xEDvel."],["Driver de v\xEDdeo ausente ou incorreto","Veja se o sistema usa um driver b\xE1sico e se faltam op\xE7\xF5es de resolu\xE7\xE3o.","Instale o driver oficial compat\xEDvel com a GPU e o sistema."]],"Texto fica leg\xEDvel, c\xEDrculos ficam circulares e a resolu\xE7\xE3o correta est\xE1 dispon\xEDvel.");Pe("Teclado n\xE3o responde","Perif\xE9ricos","As teclas n\xE3o produzem resposta no sistema.",[["Conex\xE3o ou alimenta\xE7\xE3o ausente","Confira USB; se for sem fio, verifique pilhas, chave e receptor.","Reconecte, ligue ou substitua as pilhas."],["Porta ou intermedi\xE1rio com problema","Teste uma porta USB traseira, diretamente no PC, sem hub.","Use a porta funcional e retire o hub defeituoso."],["Falha do pr\xF3prio teclado","Teste o teclado em outro PC e outro teclado neste PC.","Substitua o teclado se a falha acompanh\xE1-lo."],["Problema no sistema ou controlador USB","Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.","Se funciona antes do sistema, revise drivers e configura\xE7\xF5es. Se v\xE1rias portas falham, encaminhe o controlador para diagn\xF3stico."]],"O teclado digita corretamente e responde ap\xF3s uma nova inicializa\xE7\xE3o.","Conectores PS/2 devem ser reconectados com o computador desligado.");Pe("Mouse n\xE3o move o ponteiro","Perif\xE9ricos","O ponteiro fica parado ou o mouse n\xE3o \xE9 reconhecido.",[["Mouse sem energia ou desconectado","Confira cabo, receptor USB, pilha e bot\xE3o liga/desliga.","Conecte e ligue o mouse; troque a pilha se necess\xE1rio."],["Sensor obstru\xEDdo ou superf\xEDcie inadequada","Observe a base e teste em superf\xEDcie opaca uniforme.","Limpe externamente o sensor com cuidado e use um mousepad adequado."],["Porta USB ou hub com falha","Teste diretamente numa USB traseira.","Use uma porta funcional ou substitua o hub confirmado como defeituoso."],["Defeito no mouse ou falha de software","Compare com outro mouse e teste este em outro computador.","Troque o mouse se a falha o acompanhar; se s\xF3 ocorre neste sistema, revise o driver e as op\xE7\xF5es de acessibilidade."]],"O ponteiro se move de forma cont\xEDnua e os cliques funcionam.");Pe("Computador n\xE3o emite som","\xC1udio","Um \xE1udio est\xE1 sendo reproduzido, mas n\xE3o \xE9 ouvido.",[["Volume zerado ou silenciado","Confira o volume do sistema, do aplicativo e da caixa de som.","Remova o sil\xEAncio e aumente gradualmente o volume."],["Caixa ou fone desconectado","Confira energia da caixa e conex\xE3o na sa\xEDda de \xE1udio correta.","Ligue a caixa e conecte ao conector de sa\xEDda indicado no manual."],["Dispositivo de sa\xEDda errado","Observe se o sistema envia \xE1udio ao monitor HDMI, Bluetooth ou outra sa\xEDda.","Selecione a sa\xEDda onde est\xE1 seu fone ou caixa."],["Falha do acess\xF3rio ou driver","Teste outro fone e observe o dispositivo no gerenciador do sistema.","Troque o acess\xF3rio que falhou; instale o driver oficial se o dispositivo n\xE3o estiver corretamente reconhecido."]],"Um som de teste \xE9 ouvido no dispositivo escolhido.");Pe("Fone ou microfone do painel frontal n\xE3o funciona","\xC1udio","As conex\xF5es frontais falham, mas as traseiras podem funcionar.",[["Plugue ou conector inadequado","Confira se est\xE1 na entrada correta e se o fone combinado precisa de adaptador compat\xEDvel.","Use a conex\xE3o adequada; entrada de microfone n\xE3o \xE9 sa\xEDda de fone."],["Entrada/sa\xEDda frontal n\xE3o selecionada","Confira as op\xE7\xF5es de \xE1udio e a detec\xE7\xE3o do conector.","Selecione o dispositivo frontal correto e ajuste a detec\xE7\xE3o conforme o software oficial."],["Defeito no fone ou no conector frontal","Teste o mesmo fone atr\xE1s e outro fone na frente.","Substitua o acess\xF3rio defeituoso ou encaminhe o conector frontal se s\xF3 ele falhar."],["Cabo interno HD AUDIO solto","Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.","Reconecte no header de \xE1udio correto. N\xE3o use por tentativa os headers USB."]],"As conex\xF5es frontais reproduzem ou capturam \xE1udio conforme sua fun\xE7\xE3o.");Pe("Sem acesso \xE0 rede pelo cabo","Rede","O computador n\xE3o acessa a rede usando Ethernet.",[["Cabo de rede desconectado","Confira as duas pontas e os indicadores de link, quando existirem.","Encaixe o cabo na porta do PC e do switch/roteador."],["Cabo ou porta de rede com defeito","Teste cabo conhecido e outra porta do switch.","Troque o cabo ou use a porta funcional."],["Adaptador desativado","Confira se a interface Ethernet est\xE1 habilitada no sistema.","Habilite o adaptador; se n\xE3o for reconhecido, instale o driver oficial."],["Falha na rede ou na configura\xE7\xE3o IP","Compare com outro computador na mesma rede e consulte o caso 22.","Use configura\xE7\xE3o autom\xE1tica se a rede fornece DHCP; encaminhe falhas gerais ao respons\xE1vel pela rede."]],"O computador obt\xE9m uma configura\xE7\xE3o de rede v\xE1lida e acessa os recursos autorizados.");Pe("Wi-Fi n\xE3o aparece ou n\xE3o conecta","Rede","O desktop n\xE3o mostra redes sem fio ou n\xE3o consegue entrar na rede.",[["Desktop sem adaptador Wi-Fi","Confira se h\xE1 adaptador instalado; muitos desktops t\xEAm apenas Ethernet.","Use Ethernet ou instale um adaptador Wi-Fi compat\xEDvel."],["Wi-Fi desligado ou antena ausente","Confira modo avi\xE3o, Wi-Fi e antenas externas do adaptador.","Ative o Wi-Fi e conecte as antenas previstas pelo fabricante."],["Senha errada ou sinal fraco","Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.","Corrija a credencial e reposicione o computador ou ponto de acesso."],["Driver ou incompatibilidade de banda","Veja se o adaptador aparece no sistema e suporta a banda da rede.","Instale o driver oficial; escolha uma rede/banda compat\xEDvel ou encaminhe o roteador ao respons\xE1vel."]],"A rede conecta e permanece est\xE1vel em um teste de navega\xE7\xE3o.");Pe("Pendrive n\xE3o aparece no explorador","Armazenamento","O pendrive est\xE1 conectado, mas n\xE3o aparece entre as unidades.",[["Conex\xE3o inadequada","Retire com seguran\xE7a se detectado e teste numa USB traseira sem hub.","Reconecte numa porta funcional."],["Falha do pendrive","Teste em outro PC e compare com outro pendrive na mesma porta.","Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recupera\xE7\xE3o."],["Unidade sem letra","Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.","Se h\xE1 parti\xE7\xE3o saud\xE1vel sem letra, atribua uma letra livre. N\xE3o inicialize nem formate uma unidade com dados."],["Sistema de arquivos danificado ou incompat\xEDvel","Observe se aparece RAW, n\xE3o alocado ou com sistema de arquivos n\xE3o suportado.","N\xE3o aceite formata\xE7\xE3o autom\xE1tica. Fa\xE7a backup/recupera\xE7\xE3o; s\xF3 depois prepare a unidade para o sistema correto."]],"A unidade aparece e arquivos de teste podem ser lidos; a remo\xE7\xE3o segura funciona.","Se o conte\xFAdo for importante, interrompa tentativas de escrita na unidade defeituosa.");Pe("Impressora n\xE3o imprime a partir do desktop","Perif\xE9ricos","O trabalho \xE9 enviado, mas a impress\xE3o n\xE3o sai.",[["Impressora sem condi\xE7\xF5es de imprimir","Confira energia, papel, tampa e avisos no painel.","Ligue e resolva o aviso f\xEDsico indicado, conforme o manual."],["Impressora errada ou conex\xE3o ausente","Confira a impressora escolhida e o cabo USB ou rede.","Selecione a impressora correta e restaure a conex\xE3o."],["Fila pausada ou trabalho travado","Veja a fila de impress\xE3o e o estado offline/pausado.","Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma p\xE1gina."],["Driver ou servi\xE7o com falha","Teste uma p\xE1gina interna da impressora e uma p\xE1gina pelo sistema.","Se a p\xE1gina interna sai, revise driver oficial, porta e servi\xE7o de impress\xE3o com o professor."]],"Uma p\xE1gina de teste enviada pelo computador \xE9 impressa.");Pe("Webcam n\xE3o mostra imagem","Perif\xE9ricos","O aplicativo abre, mas a imagem da c\xE2mera n\xE3o aparece.",[["Tampa de privacidade ou conex\xE3o","Confira a tampa f\xEDsica e o cabo USB.","Abra a tampa e conecte a c\xE2mera diretamente ao PC."],["C\xE2mera errada selecionada","Observe o dispositivo escolhido no aplicativo.","Selecione a webcam correta."],["Permiss\xE3o bloqueada ou c\xE2mera ocupada","Confira as permiss\xF5es de c\xE2mera e feche outro aplicativo que esteja usando-a.","Autorize o aplicativo necess\xE1rio e deixe a c\xE2mera livre para o teste."],["Driver ou c\xE2mera defeituosa","Teste outro aplicativo, porta USB e outro PC.","Atualize o driver oficial se necess\xE1rio; substitua a c\xE2mera se a falha a acompanhar."]],"A c\xE2mera mostra uma imagem no aplicativo autorizado.");Pe("Microfone n\xE3o capta voz","\xC1udio","A pessoa fala, mas o indicador de entrada n\xE3o se move.",[["Microfone silenciado ou desconectado","Confira bot\xE3o de mute, plugue e alimenta\xE7\xE3o quando aplic\xE1vel.","Remova o mute e conecte \xE0 entrada correta."],["Entrada ou n\xEDvel de captura incorreto","Confira o dispositivo selecionado e o n\xEDvel de entrada.","Escolha o microfone correto e ajuste o n\xEDvel sem saturar."],["Permiss\xE3o ou configura\xE7\xE3o do aplicativo","Teste a grava\xE7\xE3o do sistema e confira a permiss\xE3o do aplicativo.","Autorize o uso e selecione a entrada no aplicativo."],["Plugue incompat\xEDvel, driver ou defeito","Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.","Use adaptador compat\xEDvel, revise o driver oficial ou substitua o acess\xF3rio cuja falha foi confirmada."]],"Uma grava\xE7\xE3o curta reproduz a voz com clareza.");Pe("Segundo monitor n\xE3o \xE9 reconhecido","V\xEDdeo","S\xF3 um monitor funciona num desktop com dois monitores conectados.",[["Monitor ou entrada desligada","Confira energia e entrada do segundo monitor.","Ligue e selecione a entrada conectada."],["Modo de exibi\xE7\xE3o inadequado","Abra as op\xE7\xF5es de m\xFAltiplos monitores do sistema.","Escolha estender ou duplicar e use a op\xE7\xE3o de detectar."],["Cabo, adaptador ou porta inadequados","Teste o segundo monitor sozinho e confira o sentido de convers\xE3o do adaptador.","Use cabo/adaptador apropriado. Um divisor simples n\xE3o cria duas telas independentes."],["Limite de GPU ou sa\xEDda da placa-m\xE3e indispon\xEDvel","Consulte o n\xFAmero de telas suportadas e a disponibilidade do v\xEDdeo integrado.","Conecte a sa\xEDdas suportadas; revise driver e configura\xE7\xE3o conforme o manual."]],"As duas telas aparecem nas configura\xE7\xF5es e operam no modo escolhido.");Pe("Data e hora ficam incorretas","Sistema","O rel\xF3gio mostra hor\xE1rio errado ou perde o ajuste depois de desligar.",[["Fuso hor\xE1rio incorreto","Confira fuso e hora autom\xE1tica no sistema.","Selecione o fuso correto e sincronize a hora."],["Sincroniza\xE7\xE3o indispon\xEDvel","Confira a conex\xE3o e o servi\xE7o de hora; compare com rel\xF3gio confi\xE1vel.","Restaure a sincroniza\xE7\xE3o autorizada ou ajuste temporariamente a hora."],["Hora perdida tamb\xE9m na BIOS/UEFI","Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.","Se a hora do firmware permanece correta, investigue o sistema; se \xE9 perdida, avance para a bateria."],["Bateria da placa-m\xE3e esgotada","Confirme o tipo no manual e registre as configura\xE7\xF5es antes da interven\xE7\xE3o.","Com supervis\xE3o e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e op\xE7\xF5es necess\xE1rias."]],"O rel\xF3gio permanece correto ap\xF3s desligar e religar, inclusive depois do teste sem energia.");Pe("Computador demora muito para iniciar","Sistema","A inicializa\xE7\xE3o chega ao sistema, mas leva tempo excessivo.",[["Perif\xE9rico atrasando a partida","Compare a inicializa\xE7\xE3o sem pendrives e acess\xF3rios n\xE3o essenciais.","Remova o acess\xF3rio problem\xE1tico e revise sua configura\xE7\xE3o."],["Muitos aplicativos iniciando juntos","Observe aplicativos de inicializa\xE7\xE3o e seu impacto.","Desative apenas os desnecess\xE1rios; mantenha prote\xE7\xE3o e servi\xE7os essenciais."],["Pouco espa\xE7o ou atualiza\xE7\xE3o em andamento","Confira espa\xE7o livre e estado das atualiza\xE7\xF5es.","Libere espa\xE7o com ferramentas do sistema e deixe a atualiza\xE7\xE3o terminar."],["Armazenamento lento ou falhando","Fa\xE7a backup e compare sa\xFAde da unidade e uso de disco ap\xF3s iniciar.","Se a unidade falha, substitua ap\xF3s preservar os dados; se \xE9 apenas limita\xE7\xE3o de HDD, avalie SSD compat\xEDvel."]],"O tempo de partida melhora em duas inicializa\xE7\xF5es compar\xE1veis, sem remover servi\xE7os essenciais.");Pe("Computador fica lento durante o uso","Sistema","Programas abrem devagar e o sistema responde com atraso.",[["Excesso de tarefas abertas","Observe CPU, mem\xF3ria e disco no monitor de tarefas.","Feche tarefas n\xE3o utilizadas e compare o desempenho."],["Armazenamento quase cheio","Confira espa\xE7o dispon\xEDvel no disco do sistema.","Remova arquivos tempor\xE1rios com ferramenta do sistema e mova arquivos pr\xF3prios ap\xF3s backup."],["Aplicativo consumindo recursos ou malware","Identifique o processo de maior consumo e fa\xE7a uma verifica\xE7\xE3o com prote\xE7\xE3o confi\xE1vel.","Atualize ou corrija o aplicativo; siga o caso 26 se houver infec\xE7\xE3o."],["Limite de hardware, calor ou unidade com falha","Compare o consumo com os requisitos dos programas, temperaturas e sa\xFAde do disco.","Corrija a causa confirmada; amplie RAM/SSD se houver limita\xE7\xE3o, ou siga os casos de calor e armazenamento."]],"A tarefa usada como refer\xEAncia volta a responder bem; registre qual recurso causava a lentid\xE3o.");Pe("Um programa trava ou fecha sozinho","Sistema","Um aplicativo espec\xEDfico para de responder, enquanto outros podem continuar funcionando.",[["Arquivo ou opera\xE7\xE3o espec\xEDfica com erro","Teste um arquivo novo e registre a a\xE7\xE3o que provoca o travamento.","Recupere o arquivo de backup ou evite a opera\xE7\xE3o at\xE9 corrigir o problema identificado."],["Recursos insuficientes","Confira espa\xE7o, mem\xF3ria e os requisitos do aplicativo.","Feche tarefas desnecess\xE1rias e libere espa\xE7o; ajuste a carga ao hardware."],["Vers\xE3o, extens\xE3o ou instala\xE7\xE3o com problema","Teste sem extens\xF5es opcionais e veja se come\xE7ou ap\xF3s uma mudan\xE7a.","Atualize pelo fornecedor ou repare/reinstale o aplicativo ap\xF3s salvar dados e configura\xE7\xF5es."],["Problema geral de sistema ou hardware","Observe se v\xE1rios programas tamb\xE9m travam e consulte registros de erros.","Se a falha \xE9 geral, siga os casos 36, 43 e 46 com o professor."]],"A mesma a\xE7\xE3o que antes travava funciona em testes repetidos, sem perda dos arquivos.");Pe("Windows chega a uma tela de recupera\xE7\xE3o","Inicializa\xE7\xE3o","O computador liga, mas n\xE3o carrega normalmente o Windows.",[["Dispositivo externo interferindo","Retire m\xEDdias remov\xEDveis e registre a mensagem completa.","Reinicie sem m\xEDdias n\xE3o essenciais; se resolver, revise a ordem de boot."],["Falha na inicializa\xE7\xE3o do sistema","Confira se a unidade do sistema \xE9 detectada e use as op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Com o professor, tente Reparo de Inicializa\xE7\xE3o. Se o disco n\xE3o \xE9 detectado, siga o caso 29."],["Atualiza\xE7\xE3o ou driver recente","Veja se o problema come\xE7ou logo ap\xF3s uma mudan\xE7a. Tenha a chave de recupera\xE7\xE3o se houver criptografia.","Use as op\xE7\xF5es apropriadas de desinstalar atualiza\xE7\xE3o ou Restaura\xE7\xE3o do Sistema, ap\xF3s avaliar o backup."],["Sistema corrompido ou disco defeituoso","Preserve dados e verifique a sa\xFAde da unidade antes de reinstalar.","Se o disco estiver saud\xE1vel, repare/reinstale o sistema ap\xF3s backup. Se falha, substitua a unidade antes da instala\xE7\xE3o."]],"O sistema inicia, os arquivos preservados est\xE3o acess\xEDveis e a falha n\xE3o reaparece.","Op\xE7\xF5es de recupera\xE7\xE3o podem alterar dados e aplicativos. Obtenha backup e chave de recupera\xE7\xE3o antes de procedimentos invasivos.");Pe("Rede conecta, mas n\xE3o abre a internet","Rede","A interface tem link ou Wi-Fi conectado, mas os sites n\xE3o abrem.",[["Falha geral da rede","Teste outro dispositivo na mesma rede e mais de um site.","Se todos falham, encaminhe o roteador/provedor ao respons\xE1vel; se s\xF3 um site falha, n\xE3o altere todo o PC."],["Endere\xE7o IP ou gateway inv\xE1lido","Com o professor, veja IP, m\xE1scara e gateway; 169.254.x.x costuma indicar que o DHCP n\xE3o forneceu endere\xE7o.","Use DHCP se previsto pela rede e renove a conex\xE3o; corrija IP fixo somente com os dados do administrador."],["Falha na resolu\xE7\xE3o de nomes (DNS)","Compare conectividade com o gateway e resolu\xE7\xE3o de nomes, usando testes orientados.","Restaure o DNS previsto pela rede; n\xE3o coloque servidores aleat\xF3rios numa rede escolar."],["Proxy, VPN ou bloqueio de seguran\xE7a","Confira se come\xE7ou ap\xF3s ativar VPN/proxy e verifique as regras da rede.","Corrija a configura\xE7\xE3o autorizada ou encaminhe ao administrador. N\xE3o desative a prote\xE7\xE3o como solu\xE7\xE3o permanente."]],"Sites e servi\xE7os autorizados abrem; o aluno diferencia link, IP e DNS.");Pe("Conex\xE3o de rede cai frequentemente","Rede","O acesso funciona por um tempo e depois \xE9 interrompido.",[["Mau contato ou sinal fraco","Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.","Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas."],["Falha no equipamento de rede","Compare outros dispositivos e outra porta do switch.","Use a porta funcional e informe quedas gerais ao respons\xE1vel pela rede."],["Economia de energia ou driver do adaptador","Observe se a queda ocorre ap\xF3s inatividade e confira o driver oficial.","Atualize o driver e ajuste a economia de energia conforme a orienta\xE7\xE3o do fabricante."],["Defeito no adaptador","Teste um adaptador compat\xEDvel conhecido sob as mesmas condi\xE7\xF5es.","Substitua o adaptador apenas se o teste isolar a falha nele."]],"A conex\xE3o permanece est\xE1vel no intervalo e atividade que antes causavam a queda.");Pe("Bluetooth n\xE3o encontra ou n\xE3o conecta o acess\xF3rio","Perif\xE9ricos","Um fone, teclado ou mouse Bluetooth n\xE3o aparece ou falha ao parear.",[["Desktop sem Bluetooth ou r\xE1dio desligado","Confira se o PC tem adaptador e se Bluetooth est\xE1 ativado.","Ative o recurso ou instale adaptador compat\xEDvel."],["Acess\xF3rio fora do modo de pareamento","Confira carga e siga o procedimento do fabricante.","Carregue e coloque o acess\xF3rio em modo de pareamento perto do PC."],["Pareamento antigo ou liga\xE7\xE3o a outro dispositivo","Veja se o acess\xF3rio est\xE1 conectado a outro aparelho.","Desconecte do outro aparelho e refa\xE7a apenas o pareamento desse acess\xF3rio."],["Driver, antena ou adaptador com falha","Teste outro acess\xF3rio e confira driver e antenas compartilhadas, se previstas.","Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada."]],"O acess\xF3rio pareia e executa sua fun\xE7\xE3o ap\xF3s uma reconex\xE3o.");Pe("Disco do sistema est\xE1 quase cheio","Armazenamento","O sistema avisa falta de espa\xE7o e pode falhar ao instalar programas.",[["Lixeira e arquivos tempor\xE1rios acumulados","Confira o uso de armazenamento e revise a lixeira antes de apagar.","Use a limpeza do sistema e exclua apenas itens dispens\xE1veis."],["Arquivos pessoais grandes","Identifique v\xEDdeos, downloads e outros arquivos pr\xF3prios.","Fa\xE7a backup e mova o que n\xE3o precisa ficar no disco principal."],["Programas desnecess\xE1rios","Confira programas instalados e tamanho ocupado.","Desinstale pelos recursos do sistema o que n\xE3o ser\xE1 usado, preservando dados necess\xE1rios."],["Capacidade insuficiente para a rotina","Compare o espa\xE7o exigido pela turma com o dispon\xEDvel ap\xF3s a limpeza.","Planeje unidade maior compat\xEDvel e migra\xE7\xE3o com backup. N\xE3o apague pastas do sistema manualmente."]],"H\xE1 espa\xE7o para o uso e as atualiza\xE7\xF5es previstas, e os arquivos necess\xE1rios continuam acess\xEDveis.");Pe("Propagandas estranhas e programas desconhecidos","Sistema","Aparecem redirecionamentos, extens\xF5es desconhecidas ou alertas suspeitos.",[["Notifica\xE7\xF5es autorizadas por engano","Identifique se o alerta vem do navegador e de qual site.","Revogue a permiss\xE3o do site desconhecido; n\xE3o clique no alerta."],["Extens\xE3o ou programa indesejado","Revise extens\xF5es e instala\xE7\xF5es recentes com o professor.","Remova itens indesejados pelos mecanismos oficiais."],["Poss\xEDvel infec\xE7\xE3o","Atualize a prote\xE7\xE3o confi\xE1vel e execute uma verifica\xE7\xE3o completa; isole da rede se houver comportamento ativo suspeito.","Siga as a\xE7\xF5es de quarentena da prote\xE7\xE3o e a pol\xEDtica do laborat\xF3rio."],["Comprometimento persistente","Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.","Encaminhe ao respons\xE1vel; uma reinstala\xE7\xE3o limpa pode ser necess\xE1ria ap\xF3s backup verificado. Troque senhas num dispositivo confi\xE1vel se houve exposi\xE7\xE3o."]],"A prote\xE7\xE3o conclui a verifica\xE7\xE3o e os sintomas n\xE3o retornam ap\xF3s reiniciar e testar o navegador.","N\xE3o instale \u201Climpadores\u201D anunciados pelos pr\xF3prios alertas. Em m\xE1quinas da escola, informe o respons\xE1vel pelo laborat\xF3rio.");Pe("Windows Update falha repetidamente","Sistema","Uma atualiza\xE7\xE3o n\xE3o instala e mostra uma mensagem ou c\xF3digo de erro.",[["Reinicializa\xE7\xE3o pendente","Confira o aviso de reiniciar e registre o c\xF3digo de erro.","Salve o trabalho e reinicie pelo sistema."],["Internet, hora ou espa\xE7o inadequados","Confira rede, rel\xF3gio e espa\xE7o livre.","Corrija conex\xE3o/hora e libere espa\xE7o com ferramentas do sistema."],["Erro detect\xE1vel pelo solucionador oficial","Execute a ferramenta de solu\xE7\xE3o de problemas de atualiza\xE7\xE3o dispon\xEDvel no sistema.","Aplique a corre\xE7\xE3o indicada e tente novamente."],["Arquivos do sistema ou pacote com falha","Pesquise o c\xF3digo na documenta\xE7\xE3o oficial com o professor e preserve os dados.","Fa\xE7a o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir."]],"A atualiza\xE7\xE3o prevista conclui e o sistema reinicia normalmente.","N\xE3o desligue \xE0 for\xE7a enquanto a instala\xE7\xE3o estiver progredindo.");Pe("Mensagem \u201CNo bootable device\u201D ou \u201CBoot device not found\u201D","Inicializa\xE7\xE3o","O firmware informa que n\xE3o encontrou um sistema para iniciar.",[["M\xEDdia remov\xEDvel escolhida por engano","Confira se h\xE1 pendrive ou disco externo conectado.","Remova a m\xEDdia de teste e tente iniciar novamente."],["Ordem de boot incorreta","Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.","Selecione a entrada de inicializa\xE7\xE3o correta, conforme a instala\xE7\xE3o existente."],["Unidade do sistema n\xE3o detectada","Confira a lista de armazenamento do firmware.","Se a unidade n\xE3o aparece, siga o caso 29 para testar conex\xE3o e unidade."],["Carregador de boot danificado ou modo incompat\xEDvel","Veja se o disco \xE9 detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.","Restaure a configura\xE7\xE3o conhecida ou use Reparo de Inicializa\xE7\xE3o com o professor, preservando dados."]],"A entrada correta carrega o sistema ap\xF3s reiniciar.","N\xE3o formate por causa dessa mensagem; ela n\xE3o prova que os arquivos foram perdidos.");Pe("HD ou SSD n\xE3o aparece na BIOS/UEFI","Armazenamento","O firmware n\xE3o lista uma unidade que deveria estar instalada.",[["Unidade ausente ou slot incorreto","Com o professor, compare a instala\xE7\xE3o com o manual e o tipo da unidade.","Instale no conector compat\xEDvel; M.2 SATA e NVMe n\xE3o s\xE3o intercambi\xE1veis em todo slot."],["Conex\xE3o frouxa","PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixa\xE7\xE3o correta.","Reconecte com cuidado conforme o manual."],["Cabo, porta ou compartilhamento de pistas","Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.","Substitua o cabo que falhou ou use porta/slot dispon\xEDvel e compat\xEDvel."],["Defeito na unidade ou no controlador","Teste a unidade em equipamento compat\xEDvel e outra unidade neste PC, sem formatar.","Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-m\xE3e."]],"A unidade \xE9 identificada corretamente no firmware e seus dados podem ser verificados.");Pe("HD ou SSD novo aparece na BIOS, mas n\xE3o no sistema","Armazenamento","Uma unidade adicional \xE9 detectada pelo firmware, mas n\xE3o aparece no explorador.",[["Expectativa de aparecer antes de ser preparada","Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.","Se j\xE1 tem dados, n\xE3o inicialize. Se \xE9 nova e vazia, prossiga com o professor."],["Disco offline ou parti\xE7\xE3o sem letra","Confira estado do disco e das parti\xE7\xF5es existentes.","Coloque online se apropriado ou atribua letra livre \xE0 parti\xE7\xE3o saud\xE1vel."],["Unidade realmente nova, sem parti\xE7\xE3o","Confirme que n\xE3o cont\xE9m dados e que \xE9 a unidade correta.","Com supervis\xE3o, inicialize no esquema adequado e crie/formate um volume; essas a\xE7\xF5es apagam ou alteram estruturas de dados."],["Driver, sistema de arquivos ou compatibilidade","Se nem o gerenciador a detecta, confira controlador e driver; se tem parti\xE7\xE3o, confira compatibilidade.","Instale driver oficial ou use sistema compat\xEDvel para recuperar dados antes de qualquer convers\xE3o/formata\xE7\xE3o."]],"O volume esperado fica acess\xEDvel e um arquivo de teste pode ser salvo e lido.","Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.");Pe("Portas USB frontais n\xE3o funcionam","Perif\xE9ricos","Um dispositivo funciona atr\xE1s, mas n\xE3o nas portas da frente do gabinete.",[["Problema no dispositivo ou cabo","Teste o acess\xF3rio em USB traseira e outro acess\xF3rio na frente.","Substitua o cabo/acess\xF3rio se a falha o acompanhar."],["Dispositivo exige mais energia","Compare um dispositivo simples e o acess\xF3rio de maior consumo.","Use porta adequada ou hub alimentado compat\xEDvel; n\xE3o sobrecarregue a porta."],["Cabo interno do painel solto","Com o professor e PC desligado da tomada, confira o header USB pelo manual.","Reconecte o cabo ao header correto, respeitando orienta\xE7\xE3o e pinos."],["Conector frontal danificado","Inspecione portas e cabo com a alimenta\xE7\xE3o desconectada.","N\xE3o use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado."]],"Um dispositivo conhecido funciona nas portas frontais reparadas.");Pe("USB desconecta e reconecta sozinho","Perif\xE9ricos","O sistema toca repetidamente o som de desconex\xE3o de um dispositivo USB.",[["Cabo frouxo ou danificado","Observe se o problema acompanha um cabo espec\xEDfico e teste outro cabo adequado.","Substitua o cabo que falhou e elimine tens\xE3o sobre o conector."],["Hub ou extens\xE3o inadequados","Conecte o dispositivo diretamente a uma porta traseira.","Retire o intermedi\xE1rio defeituoso ou use hub alimentado apropriado."],["Energia ou driver do dispositivo","Compare com outra porta e revise driver e economia de energia, se a falha ocorre ap\xF3s inatividade.","Use alimenta\xE7\xE3o prevista pelo fabricante e atualize/ajuste o driver oficial."],["Defeito do acess\xF3rio ou controlador","Teste o acess\xF3rio noutro PC e v\xE1rios acess\xF3rios neste PC.","Troque o acess\xF3rio se a falha o acompanhar; se v\xE1rias portas falham, pe\xE7a diagn\xF3stico da placa-m\xE3e."]],"O dispositivo permanece conectado durante a tarefa que antes provocava a queda.");Pe("Gabinete faz muito barulho","Refrigera\xE7\xE3o","H\xE1 ru\xEDdo forte de ventoinha, vibra\xE7\xE3o ou raspagem.",[["Vibra\xE7\xE3o externa","Confira se o gabinete est\xE1 est\xE1vel e se algum objeto vibra encostado nele.","Estabilize o gabinete e retire objetos em contato."],["Cabo encostando numa ventoinha","Desligue, retire da tomada e, com o professor, inspecione sem p\xF4r a m\xE3o em ventoinha em movimento.","Prenda os cabos longe das h\xE9lices."],["Poeira ou fluxo de ar restrito","Confira filtros, entradas de ar e temperatura.","Limpe com m\xE9todo adequado ao manual e desobstrua a ventila\xE7\xE3o."],["Ventoinha desgastada ou unidade mec\xE2nica falhando","Identifique de onde vem o som; cliques de HDD com erros exigem preserva\xE7\xE3o de dados.","Substitua a ventoinha confirmada como defeituosa. Se \xE9 HDD, siga o caso 46. Se \xE9 a fonte, encaminhe sem abri-la."]],"O ru\xEDdo anormal desaparece e temperaturas continuam adequadas.");Pe("Computador fica muito quente","Refrigera\xE7\xE3o","H\xE1 temperaturas elevadas ou queda de desempenho durante o uso.",[["Ambiente ou sa\xEDdas de ar obstru\xEDdas","Observe posi\xE7\xE3o, entradas/sa\xEDdas e condi\xE7\xF5es do ambiente.","Afaste de obstru\xE7\xF5es e melhore a circula\xE7\xE3o de ar."],["Carga de trabalho excessiva","Compare temperatura em repouso e em uso com ferramenta confi\xE1vel e limites do fabricante.","Reduza tarefas desnecess\xE1rias e investigue a tarefa respons\xE1vel."],["Poeira ou ventoinha com problema","Com PC desconectado e professor, inspecione filtros, dissipadores e conex\xF5es.","Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado."],["Cooler mal instalado ou interface t\xE9rmica inadequada","Verifique fixa\xE7\xE3o e montagem conforme o manual, sem desmontar em m\xE1quina quente.","O professor reinstala o cooler e aplica interface t\xE9rmica conforme o fabricante."]],"As temperaturas ficam dentro dos limites do componente na tarefa de refer\xEAncia.","N\xE3o use um limite \xFAnico para toda CPU/GPU. N\xE3o abra a fonte nem use l\xEDquidos ou aspirador dom\xE9stico nas placas.");Pe("Computador desliga sozinho durante o uso","Energia","O PC apaga sem encerramento normal do sistema.",[["Alimenta\xE7\xE3o externa intermitente","Observe tomada, cabo e filtro; compare com ponto de energia confi\xE1vel.","Corrija a conex\xE3o ou use alimenta\xE7\xE3o est\xE1vel. Defeito el\xE9trico deve ser tratado pelo respons\xE1vel."],["Aquecimento excessivo","Observe temperaturas antes da falha, sem for\xE7ar desligamentos repetidos.","Siga o caso 34 para corrigir refrigera\xE7\xE3o."],["Configura\xE7\xE3o ou comando de desligamento","Confira eventos, op\xE7\xF5es de energia e rela\xE7\xE3o com um programa espec\xEDfico.","Corrija a configura\xE7\xE3o ou aplicativo identificado."],["Fonte ou hardware com falha","Com o professor, compare com fonte compat\xEDvel conhecida; investigue componentes se persistir.","Substitua s\xF3 a pe\xE7a isolada no teste. Um evento de desligamento inesperado sozinho n\xE3o identifica a fonte."]],"O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimenta\xE7\xE3o adequadas.");Pe("Computador inteiro congela","Sistema","Mouse, teclado e programas deixam de responder; pode ser necess\xE1rio reiniciar.",[["Sobrecarga tempor\xE1ria","Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.","Feche a tarefa problem\xE1tica se conseguir e reduza a carga."],["Aplicativo ou driver recente","Confira se come\xE7ou ap\xF3s instala\xE7\xE3o/atualiza\xE7\xE3o e consulte os registros.","Atualize ou reverta a mudan\xE7a identificada, ap\xF3s salvar dados."],["Aquecimento ou armazenamento com falha","Verifique temperaturas e sa\xFAde da unidade; preserve arquivos antes de testes extensos.","Corrija refrigera\xE7\xE3o ou siga o caso 46 se houver sinais de falha no disco."],["Mem\xF3ria ou outro hardware inst\xE1vel","Com o professor, teste mem\xF3ria e par\xE2metros padr\xE3o; consulte o caso 43.","Isole o m\xF3dulo/componente defeituoso e substitua apenas ap\xF3s confirmar."]],"O sistema continua respondendo em repeti\xE7\xE3o da atividade e em uso normal.","Reinicializa\xE7\xE3o for\xE7ada pode perder trabalho n\xE3o salvo; use apenas se o sistema realmente n\xE3o responder.");Pe("Tela preta depois que o Windows come\xE7a a carregar","V\xEDdeo","A imagem de firmware aparece, mas some ao entrar no sistema.",[["Sa\xEDda ou modo de exibi\xE7\xE3o incorreto","Confira o monitor escolhido, entrada e conex\xE3o; teste uma \xFAnica tela.","Use a sa\xEDda correta e um modo de exibi\xE7\xE3o suportado."],["Driver de v\xEDdeo com falha","Com o professor, acesse o modo de seguran\xE7a pelas op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Se h\xE1 imagem nesse modo, reverta/reinstale o driver oficial relacionado \xE0 falha."],["Aplicativo ou sess\xE3o do sistema com erro","Veja se aparece ponteiro ou se outro usu\xE1rio consegue iniciar sess\xE3o.","Desative a inicializa\xE7\xE3o do aplicativo identificado ou repare a sess\xE3o com backup das informa\xE7\xF5es."],["Corrup\xE7\xE3o do sistema ou GPU inst\xE1vel","Compare outra sa\xEDda/GPU compat\xEDvel e op\xE7\xF5es de recupera\xE7\xE3o do sistema.","Repare o sistema ap\xF3s backup se hardware estiver saud\xE1vel; encaminhe a GPU se a falha a acompanhar."]],"A imagem permanece vis\xEDvel durante a entrada no Windows e o uso de aplicativos.");Pe("Mem\xF3ria instalada n\xE3o aparece por completo","Mem\xF3ria","O total informado difere dos m\xF3dulos instalados ou a mem\xF3ria utiliz\xE1vel \xE9 menor.",[["Confus\xE3o entre mem\xF3ria instalada e utiliz\xE1vel","Compare BIOS/UEFI, sistema e mem\xF3ria reservada ao hardware.","Explique a reserva para v\xEDdeo integrado e diferen\xE7as de unidades; n\xE3o troque RAM por uma reserva normal."],["Limite do sistema ou da placa","Confira arquitetura do sistema, capacidade suportada e manual da placa-m\xE3e.","Use sistema de 64 bits e m\xF3dulos dentro dos limites, quando necess\xE1rio e compat\xEDvel."],["M\xF3dulo mal encaixado ou slot errado","Com PC desconectado e professor, confira travas e slots recomendados.","Reinstale os m\xF3dulos nos slots previstos pelo fabricante."],["M\xF3dulo, slot ou canal com defeito","Teste um m\xF3dulo por vez e compare slots permitidos, registrando resultados.","Substitua o m\xF3dulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"Firmware reconhece a capacidade esperada e o sistema informa uma reserva explic\xE1vel.");Pe("Computador deixa de iniciar ap\xF3s instalar RAM","Mem\xF3ria","A falha surge logo depois da troca ou amplia\xE7\xE3o da mem\xF3ria.",[["Treinamento inicial de mem\xF3ria","Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo ap\xF3s mudan\xE7as.","Aguarde o per\xEDodo indicado, sem reiniciar continuamente."],["M\xF3dulo mal encaixado ou posi\xE7\xE3o incorreta","Com professor e alimenta\xE7\xE3o desconectada, confira travas e slots indicados.","Reencaixe corretamente; n\xE3o force um m\xF3dulo de padr\xE3o diferente."],["M\xF3dulo incompat\xEDvel ou mistura inst\xE1vel","Confira gera\xE7\xE3o DDR, capacidade, tipo e especifica\xE7\xF5es; teste a configura\xE7\xE3o anterior.","Use m\xF3dulos compat\xEDveis e preferencialmente um conjunto validado para a placa."],["Perfil de mem\xF3ria ou m\xF3dulo defeituoso","Com o professor, teste um m\xF3dulo por vez em par\xE2metros padr\xE3o; reset de CMOS somente conforme o manual.","Desative perfil inst\xE1vel ou substitua o m\xF3dulo que falha tamb\xE9m em condi\xE7\xF5es padr\xE3o."]],"O PC conclui o POST, reconhece a RAM e passa por teste orientado de mem\xF3ria.");Pe("Mensagem \u201CCPU Fan Error\u201D ou erro de ventoinha","Refrigera\xE7\xE3o","O firmware informa que n\xE3o detectou corretamente a ventoinha do processador.",[["Aviso ap\xF3s uma manuten\xE7\xE3o","N\xE3o ignore; desligue e confira o que foi alterado.","Interrompa o uso at\xE9 confirmar a refrigera\xE7\xE3o do processador."],["Cooler conectado ao header errado","Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.","Conecte o cooler ao header previsto; bombas de water cooler seguem o manual espec\xEDfico."],["Cabo solto, h\xE9lice bloqueada ou ventoinha defeituosa","Inspecione conex\xF5es e obst\xE1culos sem energizar partes expostas.","Reconecte, retire a obstru\xE7\xE3o ou substitua a ventoinha que falhou."],["Limite de leitura incompat\xEDvel com a montagem","Se refrigera\xE7\xE3o est\xE1 comprovadamente funcional, compare rota\xE7\xE3o m\xEDnima e leitura com o manual.","O professor ajusta o monitoramento ao conjunto correto. N\xE3o desative o alerta para esconder um cooler parado."]],"A leitura de refrigera\xE7\xE3o \xE9 coerente, o alerta \xE9 resolvido e a temperatura permanece adequada.");Pe("PC n\xE3o conclui o POST: bipes ou LED de diagn\xF3stico","Inicializa\xE7\xE3o","O computador tem energia, mas n\xE3o chega \xE0 imagem inicial ou sinaliza um erro.",[["C\xF3digo ainda n\xE3o identificado","Anote padr\xE3o, dura\xE7\xE3o, cor e modelo exato da placa/PC.","Consulte a tabela espec\xEDfica do fabricante; n\xE3o use tabelas universais de bipes."],["Perif\xE9rico ou mudan\xE7a recente interferindo","Compare sem acess\xF3rios externos n\xE3o essenciais e registre a \xFAltima mudan\xE7a.","Remova o acess\xF3rio problem\xE1tico ou restaure a configura\xE7\xE3o anterior."],["Mem\xF3ria ou v\xEDdeo indicados pelo c\xF3digo","Com professor e PC desconectado, confira encaixes e teste componente compat\xEDvel conhecido.","Corrija a conex\xE3o ou substitua somente o m\xF3dulo/placa que falhou no teste."],["CPU, placa-m\xE3e ou firmware indicados pelo diagn\xF3stico","Revise compatibilidade e siga os testes do manual; configura\xE7\xE3o m\xEDnima exige supervis\xE3o.","Encaminhe para diagn\xF3stico t\xE9cnico. Atualiza\xE7\xE3o de BIOS n\xE3o deve ser feita por tentativa num PC inst\xE1vel."]],"O POST \xE9 conclu\xEDdo e o c\xF3digo de erro deixa de aparecer.","POST \xE9 o autoteste de hardware executado antes de carregar o sistema operacional.");Pe("Liga por poucos segundos e desliga","Energia","As ventoinhas come\xE7am a girar, mas o PC apaga antes de iniciar.",[["Perif\xE9rico externo causando prote\xE7\xE3o","Desconecte acess\xF3rios externos n\xE3o essenciais com o PC desligado.","Retire o perif\xE9rico/cabo que faz a falha retornar."],["Conector de energia interno incompleto","Professor, PC fora da tomada: confira ATX da placa e alimenta\xE7\xE3o da CPU pelo manual.","Conecte os cabos corretos da fonte; n\xE3o confunda EPS/CPU com PCIe/GPU."],["Cooler ausente, solto ou erro de montagem","Confira a presen\xE7a, fixa\xE7\xE3o e conex\xE3o da refrigera\xE7\xE3o.","Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler."],["Curto, fonte ou placa-m\xE3e defeituosos","Professor inspeciona parafusos soltos, espa\xE7adores e testa fonte compat\xEDvel com seus pr\xF3prios cabos.","Corrija a montagem se confirmado; substitua fonte/placa s\xF3 ap\xF3s isolamento t\xE9cnico."]],"O PC permanece ligado e conclui o POST sem aquecimento anormal.","Se houver cheiro de queimado, fa\xEDsca ou l\xEDquido, desconecte e encaminhe: n\xE3o repita testes de energiza\xE7\xE3o.");Pe("Erros no teste de mem\xF3ria RAM","Mem\xF3ria","Uma ferramenta de diagn\xF3stico acusa erros, ou falhas gerais apontam para a mem\xF3ria.",[["Perfil de frequ\xEAncia inst\xE1vel","Registre os ajustes e confira se XMP/EXPO ou overclock est\xE1 ativo.","Com o professor, teste nos par\xE2metros padr\xE3o suportados."],["Mau encaixe","PC fora da tomada: confira travas e slots recomendados.","Reencaixe segurando pelas bordas, com prote\xE7\xE3o contra descarga eletrost\xE1tica."],["M\xF3dulo com falha","Teste um m\xF3dulo por vez no slot recomendado e repita com m\xF3dulo conhecido.","Substitua o m\xF3dulo se o erro o acompanhar em configura\xE7\xF5es padr\xE3o."],["Slot, controlador ou combina\xE7\xE3o de m\xF3dulos","Compare m\xF3dulos bons em slots permitidos e consulte compatibilidade.","Use conjunto compat\xEDvel; se o erro acompanha slot/canal, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"A configura\xE7\xE3o final passa pelo teste completo escolhido e n\xE3o reproduz as falhas observadas.","Um teste sem erros reduz suspeitas, mas n\xE3o garante aus\xEAncia de toda falha intermitente. N\xE3o esfregue borracha nem aplique produtos caseiros nos contatos.");Pe("Quadrados, linhas ou cores estranhas na imagem","V\xEDdeo","Aparecem artefatos gr\xE1ficos, distor\xE7\xF5es ou blocos de cor.",[["Cabo ou monitor","Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.","Substitua o cabo/monitor cuja falha foi isolada."],["Aplicativo ou driver","Veja se ocorre s\xF3 num programa e se come\xE7ou ap\xF3s atualiza\xE7\xE3o.","Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial."],["Temperatura ou overclock","Confira temperatura e par\xE2metros da GPU e mem\xF3ria, sem for\xE7ar testes se estiver superaquecendo.","Restaure par\xE2metros padr\xE3o e corrija a refrigera\xE7\xE3o."],["Falha de GPU ou mem\xF3ria compartilhada","Compare imagem antes do sistema e teste GPU/RAM compat\xEDvel conhecida com o professor.","Se acompanha a GPU, encaminhe/substitua a placa; com v\xEDdeo integrado, investigue tamb\xE9m RAM e placa-m\xE3e."]],"A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.");Pe("Jogos ou programas 3D travam, mas o desktop funciona","V\xEDdeo","A falha aparece com carga gr\xE1fica mais alta.",[["Requisito ou configura\xE7\xE3o acima do hardware","Compare requisitos, resolu\xE7\xE3o e ajustes do programa.","Use configura\xE7\xF5es compat\xEDveis e teste uma carga menor."],["Programa ou driver com falha","Confira se outros programas 3D tamb\xE9m falham e registre o erro.","Atualize/repare o programa e use driver oficial compat\xEDvel."],["Aquecimento ou ajustes inst\xE1veis","Observe temperaturas e desative overclock/perfis inst\xE1veis com o professor.","Corrija a refrigera\xE7\xE3o e teste nos par\xE2metros padr\xE3o."],["GPU ou alimenta\xE7\xE3o inadequada","Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.","Use alimenta\xE7\xE3o prevista e substitua o componente cuja falha foi confirmada. N\xE3o continue for\xE7ando desligamentos."]],"A tarefa gr\xE1fica de refer\xEAncia funciona com ajustes suportados, sem travamento nem desligamento.");Pe("HD faz cliques ou unidade apresenta erros de leitura","Armazenamento","Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.",[["Ind\xEDcio de risco aos dados","Confira mensagens e ru\xEDdo; n\xE3o confunda acesso normal de HDD com cliques repetitivos de falha.","Pare usos n\xE3o essenciais. Se os dados s\xE3o insubstitu\xEDveis ou h\xE1 ru\xEDdo anormal, desligue e busque recupera\xE7\xE3o especializada."],["Conex\xE3o com mau contato","Se n\xE3o h\xE1 dano mec\xE2nico aparente e o professor autoriza teste, confira cabos com PC desconectado.","Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade."],["Alerta de sa\xFAde da unidade","Consulte indicadores SMART e diagn\xF3stico oficial, priorizando backup e evitando teste extenso em disco degradado.","Copie dados acess\xEDveis para outra unidade saud\xE1vel; alertas de falha justificam substitui\xE7\xE3o."],["Falha persistente da unidade","Se erros acompanham a unidade em conex\xE3o confi\xE1vel, trate como falha de armazenamento.","Substitua e restaure backup. Para dados n\xE3o recuperados, encaminhe a especialista."]],"Os dados preservados s\xE3o verificados e a unidade saud\xE1vel opera sem os erros anteriores.","N\xE3o abra HDD, n\xE3o use congelador e n\xE3o execute reparos que escrevem na unidade antes de avaliar a preserva\xE7\xE3o dos dados. SSD n\xE3o tem pe\xE7as m\xF3veis; ru\xEDdo mec\xE2nico n\xE3o vem dele.");Pe("Tela de erro de parada: BSOD","Sistema","O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela vers\xE3o.",[["C\xF3digo e contexto desconhecidos","Registre c\xF3digo de parada, hor\xE1rio, tarefa e mudan\xE7a recente; um c\xF3digo sozinho n\xE3o identifica uma pe\xE7a.","Guarde as informa\xE7\xF5es para comparar ocorr\xEAncias antes de alterar o PC."],["Driver, atualiza\xE7\xE3o ou acess\xF3rio recente","Compare sem o acess\xF3rio rec\xE9m-instalado e consulte hist\xF3rico de erros.","Reverta ou atualize o item relacionado \xE0 falha com fonte oficial."],["Arquivos do sistema, temperatura ou disco","Fa\xE7a backup, verifique registros, refrigera\xE7\xE3o e sa\xFAde da unidade.","Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho."],["RAM ou outro hardware inst\xE1vel","Com o professor, teste em par\xE2metros padr\xE3o, mem\xF3ria e componentes apontados pelos registros.","Substitua apenas o item cuja falha foi isolada; se necess\xE1rio, encaminhe an\xE1lise dos registros de falha."]],"A atividade que provocava a falha e o uso normal ficam est\xE1veis; registre se houve nova ocorr\xEAncia.");Pe("PC reinicia ou perde estabilidade ap\xF3s ativar XMP/EXPO","Mem\xF3ria","O defeito come\xE7a depois de alterar frequ\xEAncia ou temporiza\xE7\xF5es da mem\xF3ria.",[["Rela\xE7\xE3o com o ajuste n\xE3o confirmada","Registre o perfil ativado e compare com a configura\xE7\xE3o anterior.","Com o professor, desative o perfil e teste nos par\xE2metros padr\xE3o."],["Limite de compatibilidade do conjunto","Confira manual, lista de mem\xF3ria validada e capacidade/frequ\xEAncia suportadas pela CPU.","Use um perfil/configura\xE7\xE3o suportada e est\xE1vel; o perfil anunciado n\xE3o \xE9 garantia para todo conjunto."],["Mistura de m\xF3dulos ou slots inadequados","Confira se os m\xF3dulos s\xE3o de um conjunto validado e ocupam os slots recomendados.","Teste o conjunto apropriado nos slots corretos."],["Falha persistente em par\xE2metros padr\xE3o","Execute teste orientado de mem\xF3ria se o erro continua sem perfil.","Siga o caso 43; encaminhe firmware/controlador se m\xF3dulos bons tamb\xE9m falham."]],"O PC fica est\xE1vel e passa no teste de mem\xF3ria com a configura\xE7\xE3o final documentada.","Reset de CMOS s\xF3 conforme o manual, registrando ajustes e tendo a chave de recupera\xE7\xE3o do disco se necess\xE1ria.");Pe("Computador n\xE3o inicia depois de uma troca de pe\xE7as","Inicializa\xE7\xE3o","A falha aparece logo ap\xF3s trocar CPU, GPU, fonte ou outro componente.",[["Conex\xE3o esquecida durante a montagem","PC fora da tomada: professor compara cabos, v\xEDdeo e montagem com os manuais.","Corrija o encaixe/conector ausente sem for\xE7ar nem adaptar cabos indevidos."],["Pe\xE7a nova incompat\xEDvel","Confira modelo exato, socket, mem\xF3ria, pot\xEAncia e conectores necess\xE1rios.","Instale componente compat\xEDvel. Em fontes modulares, use apenas cabos aprovados para o modelo espec\xEDfico."],["CPU depende de vers\xE3o de BIOS espec\xEDfica","Consulte a lista oficial de CPUs e a vers\xE3o m\xEDnima de firmware.","Professor planeja atualiza\xE7\xE3o apenas pelo m\xE9todo oficial, com energia est\xE1vel e hardware/m\xE9todo compat\xEDvel."],["Pe\xE7a nova defeituosa ou dano de montagem","Compare com a configura\xE7\xE3o anterior, se segura; examine socket e fixa\xE7\xF5es sem tocar em pinos.","Se a falha acompanha a pe\xE7a nova, substitua; se h\xE1 dano f\xEDsico, encaminhe para reparo especializado."]],"O novo conjunto conclui o POST, reconhece as pe\xE7as e fica est\xE1vel no uso previsto.","Atualizar BIOS por tentativa pode inutilizar a placa. N\xE3o misture cabos modulares de fontes diferentes.");Pe("Suspeita de defeito na placa-m\xE3e","Inicializa\xE7\xE3o","Falhas persistem mesmo ap\xF3s verificar alimenta\xE7\xE3o, conex\xF5es e componentes b\xE1sicos.",[["Conclus\xE3o prematura","Revise o hist\xF3rico e confirme tomada, fonte, monitor, cabos e c\xF3digo de POST.","Resolva causas externas e documente tudo antes de condenar a placa."],["Configura\xE7\xE3o ou montagem inadequada","Professor confere conectores, espa\xE7adores, compatibilidade e par\xE2metros registrados.","Corrija montagem; restaure ajustes conforme o manual se houver evid\xEAncia de configura\xE7\xE3o incorreta."],["Outra pe\xE7a provoca o sintoma","Com professor, fa\xE7a teste m\xEDnimo previsto no manual usando fonte, RAM e v\xEDdeo compat\xEDveis conhecidos.","Troque uma vari\xE1vel por vez e substitua a pe\xE7a que comprovadamente causa o erro."],["Falha da placa-m\xE3e ou CPU ainda n\xE3o isolada","Se a falha persiste com pe\xE7as boas e montagem correta, s\xE3o necess\xE1rios testes t\xE9cnicos adicionais.","Encaminhe para bancada especializada; substitua a placa somente com evid\xEAncia suficiente. Reparos eletr\xF4nicos ficam fora desta pr\xE1tica."]],"H\xE1 um diagn\xF3stico documentado com testes comparativos ou encaminhamento justificado, seguido de valida\xE7\xE3o do reparo.","Inspe\xE7\xE3o visual sem danos n\xE3o prova que a placa est\xE1 boa. Fonte conhecida e compat\xEDvel \xE9 diferente de fonte apenas \u201Cnova\u201D.");var Nu=[{id:1,name:"Primeiros passos",short:"B\xE1sico",desc:"Energia, cabos e conex\xF5es externas."},{id:2,name:"Uso e configura\xE7\xF5es",short:"B\xE1sico +",desc:"Perif\xE9ricos, ajustes e desempenho."},{id:3,name:"Sistema e armazenamento",short:"Intermedi\xE1rio",desc:"Boot, rede, arquivos e recupera\xE7\xE3o."},{id:4,name:"Dentro do gabinete",short:"Intermedi\xE1rio +",desc:"Refrigera\xE7\xE3o, mem\xF3ria e conex\xF5es internas."},{id:5,name:"Isolamento de falhas",short:"Avan\xE7ado guiado",desc:"POST, testes comparativos e diagn\xF3stico t\xE9cnico."}];var Rc="amc-mundo-3d-v1",Ic="Preservar os dados, consultar o manual e fazer interven\xE7\xF5es internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.",ss=["Preparar","Investigar","Diagnosticar","Corrigir","Validar","Comunicar"],Mi=[{name:"Campus",color:"#647e4c",xp:0},{name:"Circuito",color:"#4e8b9f",xp:200},{name:"Criativo",color:"#ac7a50",xp:500},{name:"Especialista",color:"#8a72aa",xp:1e3}],Si=i=>(i.id-1)%i.steps.length,Pc=()=>({version:1,tutorial:!1,skin:0,quality:"auto",records:{}}),Fu=()=>({stage:0,tested:[],errors:0,hints:0}),_n=i=>Object.values(i.records).filter(e=>e.stage===6).length*100;function Dc(i){if(!i||typeof i!="object"||i.version!==1||!i.records||typeof i.records!="object"||Array.isArray(i.records))throw Error("Arquivo de progresso inv\xE1lido.");let e=Pc();e.tutorial=i.tutorial===!0,e.quality=["auto","low"].includes(i.quality)?i.quality:"auto";for(let t of dt){let n=i.records[t.id];if(!n||!Number.isInteger(n.stage)||n.stage<0||n.stage>6||!Array.isArray(n.tested))continue;let s=[...new Set(n.tested.filter(a=>Number.isInteger(a)&&a>=0&&a<t.steps.length))],r=n.stage>1&&!s.includes(Si(t))?1:n.stage;e.records[t.id]={stage:r,tested:s,errors:Number.isInteger(n.errors)&&n.errors>=0?Math.min(n.errors,1e5):0,hints:Number.isInteger(n.hints)&&n.hints>=0?Math.min(n.hints,1e5):0}}return e.skin=Number.isInteger(i.skin)&&Mi[i.skin]?.xp<=_n(e)?i.skin:0,e}function Lc(i,e){return e===0?[Ic,"Abrir a fonte para procurar a falha.","Substituir v\xE1rias pe\xE7as sem fazer testes."]:e===2?i.steps.map(t=>t[0]):e===3?i.steps.map(t=>t[2]):e===4?[i.confirm,"Encerrar sem repetir a tarefa que apresentava o defeito.","Considerar resolvido s\xF3 porque uma pe\xE7a foi trocada."]:e===5?["Registrar sintoma, evid\xEAncia, causa, a\xE7\xE3o e valida\xE7\xE3o; comunicar os limites e a supervis\xE3o necess\xE1ria.","Informar apenas \u201Cresolvido\u201D, sem registrar os testes.","Afirmar que todo computador com esse sintoma tem a mesma causa."]:[]}function Ou(i,e,t){let n=Lc(i,e.stage);if(!n.length||!Number.isInteger(t)||t<0||t>=n.length)return!1;let s=[2,3].includes(e.stage)?Si(i):0;return t!==s?(e.errors++,!1):(e.stage++,!0)}function Bu(i,e,t){return e.stage!==1||!Number.isInteger(t)||t<0||t>=i.steps.length?null:(e.tested.includes(t)||e.tested.push(t),t===Si(i)?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${i.steps[t][0]}. A falha permanece at\xE9 a corre\xE7\xE3o correspondente.`:"Resultado esperado nesta verifica\xE7\xE3o: essa hip\xF3tese foi descartada no cen\xE1rio. A falha continua. Compare outra vari\xE1vel, uma de cada vez.")}function zu(i,e){return e.stage===1&&e.tested.includes(Si(i))?(e.stage=2,!0):!1}var ve=i=>document.querySelector(i),St=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),xt=i=>String(i).padStart(2,"0"),ku={monitor:"M3 4h18v13H3z M8 21h8 M12 17v4",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18",flag:"M5 21V3 M5 4c5-4 9 4 14 0v10c-5 4-9-4-14 0",book:"M3 4c3-1 6 0 9 2 3-2 6-3 9-2v15c-3-1-6 0-9 2-3-2-6-3-9-2z M12 6v15",user:"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",spark:"m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7z",library:"M4 4h4v16H4z M11 4h3v16h-3z m6 1 3-1 3 15-3 1z",pin:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0 M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",map:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16",home:"m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9",close:"m6 6 12 12 M6 18 18 6",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2 M12 17h.01",settings:"m9 3-.5 3-2 1-2.5-1-2 3 2 2v2l-2 2 2 3 2.5-1 2 1 .5 3h6l.5-3 2-1 2.5 1 2-3-2-2v-2l2-2-2-3-2.5 1-2-1L15 3z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",bolt:"m13 2-9 12h7l-1 8 10-13h-7z",cpu:"M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3",layers:"m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",tool:"m14 6-3 3 4 4 3-3c4 7-3 10-7 6l-6 6-3-3 6-6C4 5 9 0 14 6",hand:"M8 12V5a2 2 0 0 1 4 0v7 M12 9a2 2 0 0 1 4 0v3 M16 10a2 2 0 0 1 4 0v5c0 4-3 6-6 6h-2c-3 0-4-2-5-4l-3-5c-1-2 1-3 3-1l3 3",check:"m5 12 4 4L20 5"},bi=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ku[i]||ku.monitor}"/></svg>`;function Hu(){document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=bi(i.dataset.icon))}var Ft=Nu.map((i,e)=>({...i,short:["Conex\xF5es essenciais","Ajustes & desempenho","Sistema & dados","Dentro do gabinete","Detetives de hardware"][e],icon:["bolt","settings","layers","cpu","tool"][e],color:["#8baf58","#c99a59","#739eaa","#9c87b1","#cf8e79"][e],soft:["#eaf0db","#f4e9d7","#e3edf0","#ece7f2","#f7e7df"][e],x:[-9,0,9,-6,6][e],z:[-5,-9,-5,6,6][e]})),Be=Pc(),os=!0;try{let i=localStorage.getItem(Rc);i&&(Be=Dc(JSON.parse(i)))}catch{os=!1}var Ei=null,tn=0,Nn="",er=!1,Pg="",Gu=null,Vu,Xt=null,qt=null,Nt=null,no=null,rs=i=>Be.records[i.id]||=Fu(),nr=()=>dt.filter(i=>Be.records[i.id]?.stage===6);function hn(i){ve("#toast").textContent=i,ve("#toast").hidden=!1,clearTimeout(Vu),Vu=setTimeout(()=>ve("#toast").hidden=!0,5e3)}function xn(){try{localStorage.setItem(Rc,JSON.stringify(Be)),os=!0}catch{os=!1}Wu()}function Wu(){let i=_n(Be),e=i>=1e3?3:i>=500?2:i>=200?1:0;ve("#xp").textContent=`${i} XP`,ve("#rank").textContent=["T\xE9cnico iniciante","Explorador t\xE9cnico","Solucionador","Especialista do campus"][e],ve("#rank-number").textContent=xt(e+1);let t=[0,200,500,1e3][e],n=[200,500,1e3,5e3][e];ve("#next-xp").textContent=i>=5e3?"campus restaurado":`pr\xF3ximo marco: ${n} XP`,ve("#xp-bar").style.width=`${Math.min(100,(i-t)/(n-t)*100)}%`;let s=dt.find(r=>Be.records[r.id]&&Be.records[r.id].stage<6)||dt.find(r=>Be.records[r.id]?.stage!==6);ve("#quest-title").textContent=s?i?"A pr\xF3xima descoberta":"Seu primeiro diagn\xF3stico":"Campus restaurado!",ve("#quest-desc").textContent=s?`OS ${xt(s.id)} \xB7 ${s.title}`:"Voc\xEA concluiu os 50 chamados. Explore seu percurso.",ve("#save-state").innerHTML=`<span class="live-dot"></span>${os?" Progresso salvo neste dispositivo":" Sem salvamento: exporte seu percurso"}`,ve("#save-state").classList.toggle("storage-warning",!os),ve("#station-strip").innerHTML=Ft.map(r=>{let a=nr().filter(o=>o.level===r.id).length;return`<button class="station-card" data-travel="${r.id}" style="--accent:${r.color};--soft:${r.soft}"><div class="station-card-top"><span>${bi(r.icon)}</span><span>ESTA\xC7\xC3O ${xt(r.id)} \u2197</span></div><h4>${r.short}</h4><p>${a} de 10 miss\xF5es resolvidas</p><div class="station-mini-track"><i style="width:${a*10}%"></i></div></button>`}).join(""),Xt&&Xt.refresh()}function yn(i,e,t,n){ve("#panel").open||(Gu=document.activeElement),Pg=n,ve("#panel-title").textContent=i,ve("#panel-kicker").textContent=e,ve("#panel-content").innerHTML=t,Hu(),ve("#panel").open||ve("#panel").showModal()}function Ti(){ve("#panel").open&&ve("#panel").close()}ve("#panel").addEventListener("close",()=>{Ei=null,Nn="",er=!1,Gu?.focus({preventScroll:!0})});ve("#close-panel").onclick=Ti;ve("#panel").addEventListener("click",i=>{if(i.target===ve("#panel")){let e=ve("#panel").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&Ti()}});function Nc(){yn("Sua pr\xF3xima habilidade come\xE7a aqui.","BOAS-VINDAS AO CAMPUS AMC",`<div class="intro-art" aria-hidden="true"><span>\u{1F333}</span><span>\u{1F9D1}\u{1F3FD}\u200D\u{1F527}</span><span>\u{1F5A5}\uFE0F</span></div><p class="dialog-copy">Voc\xEA \xE9 a nova pessoa da equipe t\xE9cnica! O laborat\xF3rio precisa de ajuda. Explore <strong>5 esta\xE7\xF5es e 50 chamados reais de aprendizagem</strong>, investigue as pistas e traga os computadores de volta \xE0 vida.</p><div class="instruction-grid"><div class="instruction"><strong>01 \xB7 Explore</strong><p>Use WASD ou setas para andar na dire\xE7\xE3o da c\xE2mera. Arraste o cen\xE1rio para olhar ao redor; use a roda do mouse ou uma pin\xE7a com dois dedos para zoom. No celular, use o controle para andar.</p></div><div class="instruction"><strong>02 \xB7 Investigue</strong><p>Aproxime-se da bancada e pressione E ou toque na m\xE3o. Teste uma hip\xF3tese por vez.</p></div><div class="instruction"><strong>03 \xB7 Conquiste</strong><p>Ganhe 100 XP por miss\xE3o resolvida e desbloqueie cores para o avatar. Errar faz parte!</p></div></div><p class="note">O progresso fica neste navegador. Voc\xEA pode export\xE1-lo em Meu percurso para continuar em outro dispositivo. Esta experi\xEAncia \xE9 individual, sem cron\xF4metro.</p><div class="actions"><button class="primary" data-start>Entrar no campus ${bi("globe")}</button><button class="secondary" data-list="0">Conhecer as miss\xF5es</button></div>`,"help")}function cs(i=tn){tn=Number(i);let e=dt.filter(t=>!tn||t.level===tn);yn(tn?Ft[tn-1].name:"Cada problema, uma descoberta.",`${tn?"ESTA\xC7\xC3O "+xt(tn):"CENTRAL DE MISS\xD5ES"} \xB7 ${e.length} CHAMADOS`,`${tn?`<p class="dialog-copy">${St(Ft[tn-1].desc)} Selecione um chamado para assumir a bancada.</p>`:""}<div class="station-filters">${[0,1,2,3,4,5].map(t=>`<button data-list="${t}" class="${t===tn?"selected":""}" aria-pressed="${t===tn}">${t?"Esta\xE7\xE3o "+xt(t):"Todas"}</button>`).join("")}</div><div class="mission-list">${e.map(t=>{let n=Be.records[t.id];return`<button class="mission-row" data-case="${t.id}"><span class="mission-num">${xt(t.id)}</span><div><strong>${St(t.title)}</strong><small>${St(t.category)} \xB7 Esta\xE7\xE3o ${xt(t.level)} \xB7 ${n?.stage===6?"100 XP conquistados":n?ss[n.stage]:"100 XP dispon\xEDveis"}</small></div><span class="status">${n?.stage===6?"\u2713":n?"Retomar \u2197":"Jogar \u2197"}</span></button>`}).join("")}</div>`,"missions")}function Fc(){yn("Para onde vamos?","MAPA DO CAMPUS",`<p class="dialog-copy">Escolha uma esta\xE7\xE3o. Seu avatar vai at\xE9 a bancada e abre os chamados daquele espa\xE7o. Todas as esta\xE7\xF5es est\xE3o dispon\xEDveis.</p><div class="map-list">${Ft.map(i=>`<button class="map-row" data-travel="${i.id}" style="--accent:${i.color};--soft:${i.soft}"><span>${xt(i.id)}</span><div><strong>${i.name}</strong><small>${i.desc} \xB7 ${nr().filter(e=>e.level===i.id).length}/10</small></div><b>\u2197</b></button>`).join("")}<button class="map-row" data-mentor><span>\u2726</span><div><strong>Pra\xE7a central \xB7 Mentora Lia</strong><small>Aprenda o m\xE9todo de diagn\xF3stico.</small></div><b>\u2197</b></button></div>`,"map")}function Uc(i){let e=dt.find(t=>t.id===Number(i));e&&(no=e.id,Ei=e.id,Nn="",er=!1,qt=null,Xt?.teleport(Ft[e.level-1]),rs(e),xn(),as())}var Dg=(i,e)=>i.map((t,n)=>({text:t,i:n,key:Math.sin((n+1)*97+e*31)})).sort((t,n)=>t.key-n.key);function as(){let i=dt.find(r=>r.id===Ei);if(!i)return;let e=rs(i),t=Si(i),n=i.steps[t];if(e.stage===6){yn("Mais um problema resolvido.","ORDEM DE SERVI\xC7O "+xt(i.id)+" \xB7 MISS\xC3O CONCLU\xCDDA",`<div class="reward"><div class="reward-symbol" aria-hidden="true">\u{1F3C6}</div><span class="xp-reward">100 XP conquistados</span><h3>O laborat\xF3rio conta com voc\xEA.</h3><p>${St(i.title)}<br>Voc\xEA investigou, corrigiu e validou o resultado na simula\xE7\xE3o.</p><div class="summary-list"><p><strong>Evid\xEAncia e causa</strong>${St(n[0])}</p><p><strong>Corre\xE7\xE3o indicada</strong>${St(n[2])}</p><p><strong>Valida\xE7\xE3o</strong>${St(i.confirm)}</p></div><p>Revis\xF5es feitas: ${e.errors}. Cada nova tentativa tamb\xE9m \xE9 aprendizagem.</p><div class="actions"><button class="primary" data-next="${i.id}">Pr\xF3xima miss\xE3o \u2192</button><button class="secondary" data-explore>Voltar ao campus</button></div></div>`,"mission");return}let s="";if(e.stage===1)s=`<h3 class="stage-heading">A bancada \xE9 sua. Vamos investigar?</h3><p class="stage-desc">Execute os testes e compare os resultados simulados. A ordem \xE9 sua; mude uma vari\xE1vel por vez.</p><div class="choices">${i.steps.map((r,a)=>`<div><button class="test-card" data-test="${a}"><span class="letter">${e.tested.includes(a)?"\u2713":xt(a+1)}</span><span>${St(r[1])}</span></button>${e.tested.includes(a)?`<div class="test-result"><strong>${a===t?"EVID\xCANCIA ENCONTRADA":"HIP\xD3TESE DESCARTADA"}</strong>${St(a===t?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${r[0]}.`:"Resultado esperado nesta verifica\xE7\xE3o; essa hip\xF3tese n\xE3o explica a falha simulada. Investigue outra vari\xE1vel.")}</div>`:""}</div>`).join("")}</div><div class="actions"><button class="primary" data-investigation-next>Formular diagn\xF3stico \u2192</button></div>`;else{let r=["Antes de tocar, prepare o atendimento.","","Qual causa \xE9 sustentada pela evid\xEAncia?","Qual a\xE7\xE3o resolve a causa investigada?","O reparo funcionou? Demonstre.","Deixe uma boa passagem de servi\xE7o."],a=["Escolha o protocolo para uma interven\xE7\xE3o segura.","","Use o resultado dos testes. Sintomas parecidos podem ter causas diferentes.",`Causa identificada: ${n[0]}`,"Selecione o resultado que precisa ser verificado para encerrar o chamado.","Sua equipe precisa entender o que foi feito e os limites dessa conclus\xE3o."];s=`<h3 class="stage-heading">${r[e.stage]}</h3><p class="stage-desc">${St(a[e.stage])}</p>${e.stage>=2?`<div class="test-result"><strong>EVID\xCANCIA DA INVESTIGA\xC7\xC3O</strong>${St(n[0])}</div>`:""}<div class="choices">${Dg(Lc(i,e.stage),i.id+e.stage).map((o,l)=>`<button class="choice" data-choice="${o.i}"><span class="letter">${String.fromCharCode(65+l)}</span><span>${St(o.text)}</span></button>`).join("")}</div>`}yn(i.title,`OS ${xt(i.id)} \xB7 ESTA\xC7\xC3O ${xt(i.level)} \xB7 ${i.category}`,`<div class="mission-meta"><span>ETAPA ${e.stage+1} DE 6 \xB7 ${ss[e.stage].toUpperCase()}</span><span>100 XP ao concluir \xB7 tentativas livres</span></div><div class="stage-track" aria-label="Etapa ${e.stage+1} de 6">${ss.map((r,a)=>`<span class="${a<e.stage?"done":a===e.stage?"current":""}" title="${r}"></span>`).join("")}</div><p class="scenario">${St(i.symptom)}</p>${Nn?`<div class="feedback" role="status">${St(Nn)}</div>`:""}${s}${er?`<div class="note"><strong>Mentora Lia:</strong> ${St(e.stage<2?"Comece pelas verifica\xE7\xF5es simples. O teste "+xt(t+1)+" pode revelar uma pista decisiva.":e.stage===2?"Compare sua hip\xF3tese com esta condi\xE7\xE3o observada: "+n[0]:e.stage===3?"A a\xE7\xE3o deve corrigir exatamente a causa observada: "+n[0]:e.stage===4?"Compare com o crit\xE9rio de confirma\xE7\xE3o: "+i.confirm:"Outra equipe deve conseguir seguir o seu racioc\xEDnio.")}</div>`:""}<div class="mission-tools"><button data-hint>\u2726 Pedir uma pista \xE0 Lia</button><span>Etapas salvas automaticamente</span></div>${i.note?`<p class="note">Cuidado do caso: ${St(i.note)}</p>`:""}`,"mission")}function Lg(i){let e=dt.find(r=>r.id===Ei);if(!e)return;let t=rs(e),n=t.stage,s=_n(Be);if(!Ou(e,t,Number(i))){Nn=["Antes de agir, preserve os dados e garanta a supervis\xE3o. Abrir fonte ou trocar pe\xE7as sem isolar a causa n\xE3o ajuda o diagn\xF3stico.","","Releia a evid\xEAncia do teste. Procure a causa que corresponde \xE0 condi\xE7\xE3o observada.","A corre\xE7\xE3o precisa responder \xE0 causa isolada, sem alterar v\xE1rias vari\xE1veis por tentativa.","Uma troca de pe\xE7a n\xE3o comprova o reparo. Repita a tarefa e confira o resultado esperado.","Registre o caminho completo: sintoma, teste, causa, corre\xE7\xE3o e valida\xE7\xE3o."][n],xn(),as();return}Nn="",xn(),t.stage===4&&hn("Corre\xE7\xE3o aplicada. Agora valide o funcionamento!"),t.stage===6&&(Xt?.celebrate(),hn("Miss\xE3o conclu\xEDda! +100 XP. O campus est\xE1 voltando \xE0 vida."),Mi.some(r=>r.xp>s&&r.xp<=_n(Be))&&setTimeout(()=>hn("Nova cor de uniforme dispon\xEDvel em Meu avatar!"),1800)),as(),ve("#panel").scrollTop=0}function Oc(){yn("Observe antes de trocar.","MENTORA LIA \xB7 PRA\xC7A CENTRAL",`<p class="dialog-copy">\u201CUma pe\xE7a nova n\xE3o \xE9 um diagn\xF3stico. <strong>O melhor t\xE9cnico sabe transformar uma observa\xE7\xE3o em uma decis\xE3o.</strong> Eu vou ajudar voc\xEA a fazer isso.\u201D</p><div class="instruction-grid"><div class="instruction"><strong>1 \xB7 Uma vari\xE1vel</strong><p>Verifique uma hip\xF3tese de cada vez. Compare com algo que funciona.</p></div><div class="instruction"><strong>2 \xB7 Uma evid\xEAncia</strong><p>N\xE3o conclua s\xF3 pelo sintoma. Execute o teste e leia o resultado.</p></div><div class="instruction"><strong>3 \xB7 Uma valida\xE7\xE3o</strong><p>Repita a tarefa depois de corrigir. Registre o que demonstrou.</p></div></div><p class="note">${Ic}</p><p class="dialog-copy">Os resultados s\xE3o did\xE1ticos, com uma causa designada por cen\xE1rio. A atividade n\xE3o faz diagn\xF3stico de computadores reais. XP indica seu percurso, e a avalia\xE7\xE3o final continua com o professor.</p><div class="actions"><button class="primary" data-list="1">Assumir meu primeiro chamado \u2192</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina e guia docente \u2197</a></div>`,"mentor")}function tr(){let i=nr();yn("Conhecimento que voc\xEA construiu.","MEU PERCURSO",`<div class="stats"><div class="stat"><strong>${_n(Be)}</strong><span>XP de aprendizagem</span></div><div class="stat"><strong>${i.length}/50</strong><span>miss\xF5es conclu\xEDdas</span></div><div class="stat"><strong>${Object.values(Be.records).filter(e=>e.stage<6).length}</strong><span>em investiga\xE7\xE3o</span></div></div><p class="dialog-copy">Seu registro \xE9 local e individual. Exporte para guardar uma c\xF3pia ou continuar em outro navegador. A importa\xE7\xE3o substitui este percurso ap\xF3s sua confirma\xE7\xE3o.</p><div class="actions"><button class="primary" data-export>Exportar progresso</button><button class="secondary" data-import>Importar progresso</button><button class="secondary" data-report>Baixar relat\xF3rio</button></div><p class="note">${os?"Salvamento ativo neste navegador.":"O armazenamento n\xE3o est\xE1 dispon\xEDvel. Exporte seu progresso antes de fechar a p\xE1gina."} XP n\xE3o \xE9 nota nem certifica\xE7\xE3o de pr\xE1tica profissional.</p><div class="mission-list">${dt.filter(e=>Be.records[e.id]).map(e=>`<button class="mission-row" data-case="${e.id}"><span class="mission-num">${Be.records[e.id].stage===6?"\u2713":xt(e.id)}</span><div><strong>${St(e.title)}</strong><small>${Be.records[e.id].stage===6?"Conclu\xEDdo na simula\xE7\xE3o":ss[Be.records[e.id].stage]} \xB7 ${Be.records[e.id].errors} revis\xF5es</small></div><span>\u2197</span></button>`).join("")||'<p class="dialog-copy">Seu percurso come\xE7a com uma descoberta. Assuma seu primeiro chamado!</p>'}</div>`,"journal")}function Bc(){let i=_n(Be);yn("Seu jeito de explorar.","MEU AVATAR",`<p class="dialog-copy">Cada problema resolvido abre novas possibilidades. Escolha a cor do uniforme do seu avatar.</p><div class="wardrobe">${Mi.map((e,t)=>`<button class="swatch ${Be.skin===t?"chosen":""}" data-skin="${t}" ${i<e.xp?"disabled":""} aria-label="${e.name}, ${e.xp} XP necess\xE1rios" aria-pressed="${Be.skin===t}"><i style="background:${e.color}"></i><span>${i<e.xp?e.xp+" XP":e.name}</span></button>`).join("")}</div><p class="note">Voc\xEA tem ${i} XP. As cores s\xE3o recompensas visuais; todas as miss\xF5es est\xE3o dispon\xEDveis desde o in\xEDcio.</p><div class="actions"><button class="primary" data-explore>Voltar ao campus \u2192</button></div>`,"avatar")}function Ug(){yn("Do seu jeito, no seu ritmo.","CONFIGURA\xC7\xD5ES",`<div class="settings-row"><div>Qualidade gr\xE1fica<small>Use o modo leve para poupar recursos no celular.</small></div><select id="quality"><option value="auto" ${Be.quality==="auto"?"selected":""}>Autom\xE1tica</option><option value="low" ${Be.quality==="low"?"selected":""}>Leve</option></select></div><p class="dialog-copy">Voc\xEA tamb\xE9m pode acessar todas as miss\xF5es pelos bot\xF5es, sem navegar pelo ambiente 3D. O jogo respeita a prefer\xEAncia do sistema por redu\xE7\xE3o de movimento.</p><div class="actions"><button class="secondary" data-list="0">Acessar miss\xF5es</button><button class="secondary" data-help>Como jogar</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina com recursos de acessibilidade \u2197</a></div>`,"settings")}function qu(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function Ng(){qu(JSON.stringify({...Be,format:"amc-mundo"},null,2),"operacao-bancada-progresso.json","application/json"),hn("Seu arquivo de progresso foi preparado.")}function Fg(){let i=["# Opera\xE7\xE3o Bancada \xB7 Meu percurso",`${nr().length}/50 miss\xF5es conclu\xEDdas na simula\xE7\xE3o. ${_n(Be)} XP.`,"XP n\xE3o \xE9 nota. A execu\xE7\xE3o real exige observa\xE7\xE3o docente."];for(let e of dt){let t=Be.records[e.id];if(t&&(i.push(`
## OS ${xt(e.id)} \xB7 ${e.title}`,`Situa\xE7\xE3o: ${t.stage===6?"conclu\xEDdo na simula\xE7\xE3o":ss[t.stage]}. Revis\xF5es: ${t.errors}.`),t.stage===6)){let n=e.steps[Si(e)];i.push("Sintoma: "+e.symptom,"Teste: "+n[1],"Causa: "+n[0],"Corre\xE7\xE3o: "+n[2],"Valida\xE7\xE3o: "+e.confirm)}}qu(i.join(`

`),"operacao-bancada-percurso.md","text/markdown")}ve("#import-file").addEventListener("change",async i=>{let e=i.target.files[0];if(e){try{if(e.size>1e6)throw Error("Arquivo muito grande.");let t=JSON.parse(await e.text());if(t.format!=="amc-mundo")throw Error("Use um arquivo exportado por este jogo.");let n=Dc(t);yn("Restaurar este percurso?","IMPORTAR PROGRESSO",`<p class="dialog-copy">O arquivo cont\xE9m <strong>${Object.values(n.records).filter(s=>s.stage===6).length} miss\xF5es conclu\xEDdas</strong> e ${_n(n)} XP. Ele substituir\xE1 o progresso atual deste navegador.</p><div class="actions"><button class="primary" id="confirm-import">Restaurar progresso</button><button class="secondary" data-journal>Cancelar</button></div>`,"import"),ve("#confirm-import").onclick=()=>{Be=n,Xt?.setSkin(),xn(),tr(),hn("Percurso restaurado.")}}catch(t){hn("N\xE3o foi poss\xEDvel importar: "+t.message)}i.target.value=""}});function Og(){let i=ve("#world"),e=new Is;e.background=new Xe("#cae7f2"),e.fog=new Rs("#cae7f2",48,95);let t=new At(60,1,.1,140),n=new ja({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(devicePixelRatio,Be.quality==="low"?1:1.7)),n.shadowMap.enabled=Be.quality!=="low",n.shadowMap.type=na,n.outputColorSpace=Tt,n.toneMapping=ua,n.toneMappingExposure=1.05,n.setClearColor("#cae7f2"),i.appendChild(n.domElement);let s=new wt;e.add(s),e.add(new Hs("#ffffed","#8a9b78",2.3));let r=new Ws("#fff6db",3.2);r.position.set(-15,27,16),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-27,r.shadow.camera.right=27,r.shadow.camera.top=27,r.shadow.camera.bottom=-27,r.shadow.camera.far=75,r.shadow.normalBias=.04,r.shadow.bias=-2e-4,e.add(r);let a=new Map,o=new Map,l=(z,_={})=>{let g=z+JSON.stringify(_);return a.has(g)||a.set(g,new ui({color:z,roughness:.58,metalness:.02,..._})),a.get(g)};function c(z,_,g,R,N,H,V,re=s){let Z=[z,_,g].join(",");o.has(Z)||o.set(Z,new pn(z,_,g));let ae=new ot(o.get(Z),l(R));return ae.position.set(N,H,V),ae.castShadow=!0,ae.receiveShadow=!0,re.add(ae),ae}function u(z,_,g,R,N,H,V,re=12,Z=s){let ae=new ot(new Pn(z,_,g,re),l(R));return ae.position.set(N,H,V),ae.castShadow=!0,ae.receiveShadow=!0,Z.add(ae),ae}function h(z,_,g,R,N,H=s){let V=new ot(new Os(z,0),l(_));return V.position.set(g,R,N),V.castShadow=!0,V.receiveShadow=!0,H.add(V),V}function p(z,_,g,R,N=4,H="#3e5b41",V=s){let re=document.createElement("canvas");re.width=640,re.height=144;let Z=re.getContext("2d");Z.fillStyle="#fafbe9",Z.fillRect(0,0,640,144),Z.fillStyle=H,Z.font="bold 52px sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(z,320,75,600);let ae=new Ps(re);ae.colorSpace=Tt;let pe=new ot(new li(N,N*144/640),new In({map:ae,side:jt}));return pe.position.set(_,g,R),V.add(pe),pe}c(36,1.4,31,"#789858",0,-1.1,0),c(36.4,.5,31.4,"#bdcca0",0,-.25,0),c(35.8,.18,30.8,"#9bc681",0,.04,0),c(4.3,.05,27,"#d7ded5",0,.16,-.2),c(29,.05,3.8,"#d7ded5",0,.17,0),c(21,.04,3.3,"#d7ded5",0,.17,7.1),u(4.1,4.1,.12,"#ebe5ce",0,.22,1.2,32),u(3.1,3.1,.03,"#d8dcb7",0,.3,1.2,32);let f=u(1.25,1.25,.04,"#eaf0da",0,.33,1.2,6);f.rotation.y=Math.PI/6,c(1.15,.06,.16,"#859a65",0,.37,1.2),c(.16,.06,1.15,"#859a65",0,.37,1.2);for(let z=-12;z<14;z+=1.4)c(.06,.02,.3,"#bfc6a9",1.72,.2,z);let v=[],x=[],m=[],d=[],T=[];function E(z,_,g,R){v.push({x:z,z:_,w:g/2+Qs.bodyRadius,d:R/2+Qs.bodyRadius})}function y(z,_,g,R){c(1.55,.12,.8,"#dee2d5",z,1.58,_,R),c(.12,.4,.12,"#5e6f65",z,1.8,_+.12,R),c(.58,.06,.32,"#728276",z,1.65,_+.1,R),c(1.35,.85,.12,"#52685b",z,2.2,_,R);let N=c(1.2,.67,.025,g,z,2.2,_+.075,R);c(1.02,.04,.32,"#f1f0df",z,1.7,_+.55,R);for(let H=0;H<3;H++)c(.8,.012,.018,"#b7c2aa",z,1.728,_+.47+H*.09,R);return c(.18,.06,.23,"#d4ddc8",z+.75,1.71,_+.5,R),c(.55,.92,.72,"#f0efde",z+1.15,1.98,_+.14,R),c(.42,.74,.03,"#d5ddc8",z+1.15,1.98,_+.52,R),c(.04,.04,.03,"#a9d871",z+1.15,2.23,_+.55,R),N}Ft.forEach((z,_)=>{let g=new wt;g.position.set(z.x,0,z.z),s.add(g),x.push(g),c(7.2,.22,5.7,"#e8eadb",0,.28,0,g),c(7.35,.12,5.85,z.color,0,.16,0,g),c(7.2,3.15,.2,"#e8eddf",0,1.965,-2.7,g),c(7.4,.28,.4,z.color,0,3.62,-2.72,g),c(.18,1.95,3.4,"#e0e8d6",-3.5,1.365,-1.2,g),c(.18,1.95,3.4,"#e0e8d6",3.5,1.365,-1.2,g),E(z.x,z.z-2.7,7.2,.25),E(z.x-3.5,z.z-1.2,.2,3.4),E(z.x+3.5,z.z-1.2,.2,3.4),c(6.6,.2,1.65,"#b5a17c",0,1.48,-.85,g),c(6.7,.11,1.7,"#d3c5a4",0,1.61,-.85,g),[-2.7,2.7].forEach(Z=>{c(.2,1.1,.2,"#8b9980",Z,.85,-1.35,g),c(.2,1.1,.2,"#8b9980",Z,.85,-.4,g)}),E(z.x,z.z-.85,6.6,1.65);let R=y(-1.7,-.95,"#a9be9d",g),N=y(1.35,-.95,"#a9be9d",g);m.push([R,N]),c(.8,.18,.75,"#8a9d72",-.95,.77,.75,g),c(.7,.8,.12,"#9caf87",-.95,1.15,1.08,g),c(.15,.42,.15,"#64795e",-.95,.5,.75,g),p(xt(_+1)+"  /  "+["CONEX\xD5ES","CONFIGURA\xC7\xD5ES","SISTEMA & DADOS","HARDWARE","DIAGN\xD3STICO"][_],0,3.12,-2.56,5.5,z.color,g),c(.9,1.9,.55,"#a7b593",-2.85,1.25,-1.9,g);for(let Z=0;Z<3;Z++)c(.85,.08,.55,"#e8e8d3",-2.85,.65+Z*.55,-1.88,g),c(.25,.3,.32,[z.color,"#c5bf9c","#c8d4b6"][Z],-2.85,.84+Z*.55,-1.85,g);let H=new wt;H.position.set(0,4.35,-1),g.add(H);let V=c(.46,.46,.46,z.color,0,0,0,H);V.rotation.z=Math.PI/4,V.rotation.x=Math.PI/4,d.push(H);let re=c(7,.02,5.5,z.color,0,.43,0,g);re.visible=!1,T.push({type:"station",id:z.id,group:g,hit:re})});function w(z,_,g=1){let R=new wt;R.position.set(z,0,_),R.scale.setScalar(g),s.add(R),u(.18,.26,2.7,"#a4946e",0,1.4,0,7,R),h(1.35,"#9cb57b",0,3.15,0,R),h(1.05,"#aec68a",-.65,3.45,.1,R),h(.95,"#b8ce92",.5,4,.1,R),E(z,_,.7,.7)}[[-15,-11,1],[-12,-12,.75],[14,-11,1.1],[16,-7,.8],[-16,0,.9],[16,2,1],[-14,9,.95],[-11,12,.7],[13,11,.9],[16,10,.65],[-3,-13,.6],[5,-13,.7]].forEach(z=>w(...z));function A(z,_){u(.8,.9,.4,"#c0c4a3",z,.35,_,8),h(.7,"#9eb47c",z,.8,_),h(.45,"#acc487",z+.45,.75,_+.12)}[[-14,-3],[14,-3],[-11,3],[11,3],[-3,12],[3,12],[-5,-11],[5,-11]].forEach(z=>A(...z));function I(z,_){u(.09,.12,3.6,"#8b9c7d",z,1.9,_,6),c(.55,.45,.55,"#f5f1cd",z,3.7,_),c(.65,.12,.65,"#8e9c7d",z,3.99,_)}[[-4,1],[4,1],[-13,-7],[13,-7],[-11,8],[11,8]].forEach(z=>I(...z));function D(z,_){c(3.3,.14,.65,"#bca17a",z,.8,_),c(3.3,.65,.1,"#c8ae83",z,1.25,_-.3),[-.85,.85].forEach(g=>c(.12,.6,.4,"#7f9172",z+g,.43,_)),E(z,_,3.3,.7)}D(-5,2),D(5,2),D(-12,4),D(12,4),c(.3,3.7,.3,"#738a61",-2,1.98,13.5),c(.3,3.7,.3,"#738a61",2,1.98,13.5),c(4.8,.8,.24,"#f2f0d7",0,3.6,13.5),p("CAMPUS AMC",0,3.62,13.65,4.4,"#587348");for(let z=0;z<22;z++){let _=Math.sin(z*13.1)*16,g=Math.cos(z*6.3)*13;if(!(Math.abs(_)<3||Math.abs(g)<2))for(let R=0;R<3;R++)u(.07,.1,.3,"#9cb478",_+R*.15,.28,g+R*.13,4)}let b=(z,_)=>Uu(z,_,Ft),S=(z,_,g)=>Lu(z,_,g,l),L=[];s.traverse(z=>{if(!(!z.isMesh||!z.visible)){for(let _=z.parent;_;_=_.parent)if(d.includes(_))return;L.push(z)}}),s.updateMatrixWorld(!0);let B=new eo(t,L),k=S(Mi[Be.skin].color);k.group.name="student-avatar",k.group.position.set(0,b(0,7)+.005,7),k.group.rotation.y=Math.PI,s.add(k.group);let Y=S("#d3a66f","#b9835d","#4b3c31");Y.group.position.set(-1.8,b(-1.8,3)+.005,3),Y.group.rotation.y=.3,s.add(Y.group),p("LIA \xB7 MENTORA",-1.8,3.1,3,2.8,"#7a8257");let K=new ot(new Ns(.17,.35,4),l("#f8ffb6"));K.position.set(0,3,0),K.rotation.z=Math.PI,k.group.add(K);let $=[];for(let z=0;z<22;z++){let _=c(.12,.12,.12,["#d2e996","#f4d58a","#9fc6bc"][z%3],0,-10,0);$.push({mesh:_,v:new P,life:0})}let ie=ve("#station-labels");ie.innerHTML=Ft.map(z=>`<span class="station-label" id="label-${z.id}" style="--accent:${z.color}"><b>${xt(z.id)}</b>${z.short}</span>`).join("");let q=1,oe=1;function fe(){q=Math.max(1,i.clientWidth),oe=Math.max(1,i.clientHeight),n.setSize(q,oe),t.aspect=q/oe,t.fov=t.aspect<.9?Kn.mobileFov:Kn.desktopFov,t.updateProjectionMatrix()}new ResizeObserver(fe).observe(i),fe();let De=new Set,Ke={x:0,y:0},je=!1,Ye=0,j=performance.now(),Q=!0,me=matchMedia("(prefers-reduced-motion: reduce)").matches,Ue;function be(){Ke={x:0,y:0},ve("#joystick-knob").style.transform=""}function He(){De.clear(),be(),Ue?.cancel()}addEventListener("keydown",z=>{if(ve("#panel").open||/INPUT|SELECT|TEXTAREA/.test(z.target.tagName))return;let _=z.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","e","m","r"].includes(_)&&z.preventDefault(),_==="e"&&!z.repeat?zc():_==="m"&&!z.repeat?Fc():_==="r"&&!z.repeat?B.recenter(k.group.rotation.y):De.add(_)}),addEventListener("keyup",z=>De.delete(z.key.toLowerCase())),addEventListener("blur",He),document.addEventListener("visibilitychange",()=>{Q=!document.hidden,He(),j=performance.now()}),ve("#panel").addEventListener("close",He);let ft=ve("#joystick"),C=null;function tt(z){let _=ft.getBoundingClientRect(),g=z.clientX-_.left-_.width/2,R=z.clientY-_.top-_.height/2,N=Math.hypot(g,R),H=N>32?32/N:1;Ke={x:g*H/32,y:R*H/32},ve("#joystick-knob").style.transform=`translate(${g*H}px,${R*H}px)`,qt=null}ft.addEventListener("pointerdown",z=>{C=z.pointerId,ft.setPointerCapture(z.pointerId),tt(z)}),ft.addEventListener("pointermove",z=>{z.pointerId===C&&tt(z)});for(let z of["pointerup","pointercancel","lostpointercapture"])ft.addEventListener(z,()=>{C=null,be()});let Oe=new di,Ie=new Te;Ue=Du(n.domElement,B,{blocked:()=>ve("#panel").open,onTap(z,_){let g=n.domElement.getBoundingClientRect();if(!g.width||!g.height)return;Ie.set((z-g.left)/g.width*2-1,-(_-g.top)/g.height*2+1),Oe.setFromCamera(Ie,t);let R=Oe.intersectObjects(x,!0).find(N=>N.object.visible);if(R){let N=Ft.find((H,V)=>{let re=R.object;for(;re;){if(re===x[V])return!0;re=re.parent}return!1});N&&Xu(N.id)}}}),ve("#camera-center").onclick=()=>B.recenter(k.group.rotation.y);function xe(z,_){return Math.abs(z)>17.2||Math.abs(_)>14.2?!0:v.some(g=>Math.abs(z-g.x)<g.w&&Math.abs(_-g.z)<g.d)}function it(z,_,g=null){let Z=J=>({x:-16.8+J%57*.6,z:-13.8+Math.floor(J/57)*.6}),ae=(J,X)=>Math.max(0,Math.min(56,Math.round((J- -16.8)/.6)))+57*Math.max(0,Math.min(46,Math.round((X- -13.8)/.6))),pe=J=>{let X=Z(J);return!xe(X.x,X.z)},ee=J=>{if(pe(J))return J;for(let X=1;X<7;X++)for(let de=-X;de<=X;de++)for(let Ee=-X;Ee<=X;Ee++){let ke=J%57+Ee,We=Math.floor(J/57)+de;if(ke>=0&&ke<57&&We>=0&&We<47&&pe(ke+We*57))return ke+We*57}return J},le=ee(ae(k.group.position.x,k.group.position.z)),we=ee(ae(z,_)),Se=J=>{let X=Z(J),de=Z(we);return Math.hypot(X.x-de.x,X.z-de.z)},ce=[le],Ne=new Map([[le,0]]),U=new Map,te=new Set,se=!1;for(;ce.length;){ce.sort((Ee,ke)=>Ne.get(Ee)+Se(Ee)-(Ne.get(ke)+Se(ke)));let J=ce.shift();if(J===we){se=!0;break}te.add(J);let X=J%57,de=Math.floor(J/57);for(let Ee=-1;Ee<=1;Ee++)for(let ke=-1;ke<=1;ke++){if(!ke&&!Ee)continue;let We=X+ke,Ot=de+Ee;if(We<0||We>=57||Ot<0||Ot>=47)continue;let yt=We+Ot*57;if(te.has(yt)||!pe(yt)||ke&&Ee&&(!pe(X+ke+de*57)||!pe(X+(de+Ee)*57)))continue;let ls=Ne.get(J)+.6*(ke&&Ee?Math.SQRT2:1);ls<(Ne.get(yt)??1/0)&&(U.set(yt,J),Ne.set(yt,ls),ce.includes(yt)||ce.push(yt))}}if(!se){hn("Escolha a esta\xE7\xE3o pelo menu de miss\xF5es para assumir a bancada.");return}let ge=[];for(let J=we;J!==le;J=U.get(J))ge.unshift(Z(J));ge.push(xe(z,_)?Z(we):{x:z,z:_}),qt={x:z,z:_,id:g,route:ge}}function ye(z,_,g){let R=k.group.position,N=g*Qs.walkSpeed,H=R.x+z*N,V=R.z+_*N;if(xe(H,R.z)||(R.x=H),xe(R.x,V)||(R.z=V),je=Math.abs(z)+Math.abs(_)>.06,je){let Z=Math.atan2(z,_)-k.group.rotation.y;Z=Math.atan2(Math.sin(Z),Math.cos(Z)),k.group.rotation.y+=Z*Math.min(1,g*14)}}function ze(){Ft.forEach((z,_)=>{let g=nr().filter(N=>N.level===z.id).length,R=no&&dt[no-1].level===z.id&&Be.records[no]?.stage>=4;m[_].forEach((N,H)=>N.material=l(g>H*5||R?"#bada8b":"#9db3a4",{emissive:g||R?"#496931":"#294035",emissiveIntensity:.12}))})}function mt(z){requestAnimationFrame(mt);let _=Math.min((z-j)/1e3,.045);if(j=z,!Q)return;if(Ye+=_,je=!1,!ve("#panel").open){let N=(De.has("d")||De.has("arrowright")?1:0)-(De.has("a")||De.has("arrowleft")?1:0)+Ke.x,H=(De.has("s")||De.has("arrowdown")?1:0)-(De.has("w")||De.has("arrowup")?1:0)+Ke.y;if(Math.abs(N)+Math.abs(H)>.08){qt=null;let V=Math.max(1,Math.hypot(N,H));N/=V,H/=V;let re=B.movement(N,H);ye(re.x,re.z,_)}else if(qt){let V=qt.route[0]||qt,re=V.x-k.group.position.x,Z=V.z-k.group.position.z,ae=Math.hypot(re,Z);if(ae<.04){if(qt.route.length&&qt.route.shift(),!qt.route.length){let pe=qt;qt=null,pe.id?cs(pe.id):Oc()}}else ye(re/ae,Z/ae,Math.min(_,ae/Qs.walkSpeed))}}k.limbs.forEach((N,H)=>N.rotation.x=je&&!me?Math.sin(Ye*11+(H<2?0:Math.PI))*.45*(H%2?1:-1):0),k.group.position.y=b(k.group.position.x,k.group.position.z)+.005+(je&&!me?Math.abs(Math.sin(Ye*11))*.025:0),K.position.y=3+(me?0:Math.sin(Ye*2)*.08),d.forEach((N,H)=>{N.position.y=4.35+(me?0:Math.sin(Ye*1.8+H)*.12),me||(N.rotation.y=Ye*.6)});let g=k.group.position;Nt=null;let R=1/0;for(let N of Ft){let H=Math.hypot(g.x-N.x,g.z-(N.z+1.7));H<3.9&&H<R&&(Nt={type:"station",id:N.id},R=H)}Math.hypot(g.x+1.8,g.z-3)<2.1&&(Nt={type:"mentor"}),ve("#interact").hidden=!Nt,ve("#interact span").textContent=Nt?.type==="mentor"?"Conversar com Lia":Nt?`Explorar esta\xE7\xE3o ${xt(Nt.id)}`:"Explorar bancada",ve("#mobile-interact").style.opacity=Nt?"1":".45",ve("#location-name").textContent=Nt?.type==="station"?Ft[Nt.id-1].name:Nt?"Pra\xE7a \xB7 Mentora Lia":"Pra\xE7a central",B.update(g,_,{reducedMotion:me});for(let N of Ft){let H=new P(N.x,4.95,N.z-1.1).project(t),V=ve("#label-"+N.id);V.style.left=`${(H.x*.5+.5)*q}px`,V.style.top=`${(-H.y*.5+.5)*oe}px`,V.style.opacity=H.z>-1&&H.z<1&&Math.abs(H.x)<.95&&Math.abs(H.y)<.85?"1":"0"}$.forEach(N=>{N.life<=0||(N.life-=_,N.mesh.visible=N.life>0,N.mesh.position.addScaledVector(N.v,_),N.v.y-=_*5,N.mesh.rotation.x+=_*3)}),n.render(e,t)}return requestAnimationFrame(mt),ve("#loading").hidden=!0,ve("#loading").style.display="none",ze(),{refresh:ze,navigate:it,teleport(z){He(),k.group.position.set(z.x,b(z.x,z.z+2.1)+.005,z.z+2.1),k.group.rotation.y=Math.PI,B.recenter(Math.PI),B.update(k.group.position,0,{snap:!0})},home(){He(),qt=null,k.group.position.set(0,b(0,7)+.005,7),k.group.rotation.y=Math.PI,B.recenter(Math.PI),B.update(k.group.position,0,{snap:!0})},setSkin(){k.shirtMeshes.forEach(z=>z.material=l(Mi[Be.skin].color))},quality(){n.setPixelRatio(Math.min(devicePixelRatio,Be.quality==="low"?1:1.7)),n.shadowMap.enabled=Be.quality!=="low",fe()},celebrate(){$.forEach(z=>{z.life=2,z.mesh.visible=!0,z.mesh.position.copy(k.group.position).add(new P(0,2.8,0)),z.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)})}}}function Xu(i){let e=Ft.find(t=>t.id===Number(i));if(e){if(Ti(),!Xt){cs(e.id);return}Xt.navigate(e.x,e.z+2.2,e.id),hn("A caminho da esta\xE7\xE3o "+xt(e.id)+". Voc\xEA tamb\xE9m pode usar WASD ou o controle virtual.")}}function zc(){ve("#panel").open||(Nt?.type==="mentor"?Oc():Nt?cs(Nt.id):hn("Aproxime-se de uma bancada ou escolha uma esta\xE7\xE3o no mapa."))}document.addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if("list"in t)cs(Number(t.list));else if("case"in t)Uc(t.case);else if("choice"in t)Lg(t.choice);else if("test"in t){let n=dt[Ei-1];Bu(n,rs(n),Number(t.test)),Nn="",xn(),as()}else if("investigationNext"in t){let n=dt[Ei-1];zu(n,rs(n))?Nn="":Nn="Ainda falta uma evid\xEAncia que explique a falha. Execute outras verifica\xE7\xF5es ou pe\xE7a uma pista \xE0 Lia.",xn(),as()}else if("hint"in t)rs(dt[Ei-1]).hints++,er=!er,xn(),as();else if("next"in t){let n=dt.find(s=>s.id>Number(t.next)&&Be.records[s.id]?.stage!==6)||dt.find(s=>Be.records[s.id]?.stage!==6);n?Uc(n.id):tr()}else if("travel"in t)Xu(t.travel);else if("start"in t)Be.tutorial=!0,xn(),Ti(),hn("Bem-vindo! Toque em uma esta\xE7\xE3o ou mova seu avatar pelo campus.");else if("explore"in t)Ti();else if("export"in t)Ng();else if("import"in t)ve("#import-file").click();else if("report"in t)Fg();else if("journal"in t)tr();else if("skin"in t){let n=Number(t.skin);Mi[n]?.xp<=_n(Be)&&(Be.skin=n,Xt?.setSkin(),xn(),Bc())}else"help"in t?Nc():"mentor"in t&&(Ti(),Xt?Xt.navigate(-1.5,4.2):Oc())});ve("#world-nav").onclick=()=>{Ti(),ve("#world").scrollIntoView({behavior:"smooth",block:"center"})};ve("#missions-nav").onclick=()=>cs(0);ve("#journal-nav").onclick=tr;ve("#avatar-nav").onclick=Bc;ve("#map-button").onclick=Fc;ve("#all-missions").onclick=()=>cs(0);ve("#help").onclick=Nc;ve("#settings").onclick=Ug;ve("#camera-reset").onclick=()=>{Xt?.home(),hn("Voc\xEA voltou \xE0 pra\xE7a central.")};ve("#interact").onclick=zc;ve("#mobile-interact").onclick=zc;ve("#quest-go").onclick=()=>{let i=dt.find(e=>Be.records[e.id]&&Be.records[e.id].stage<6)||dt.find(e=>Be.records[e.id]?.stage!==6);i?Uc(i.id):tr()};document.addEventListener("change",i=>{i.target.id==="quality"&&(Be.quality=i.target.value,Xt?.quality(),xn())});var io=document.createElement("nav");io.className="mobile-toolbar";io.setAttribute("aria-label","Navega\xE7\xE3o m\xF3vel");io.innerHTML=`<button id="mobile-map">${bi("map")}Campus</button><button data-list="0">${bi("flag")}Miss\xF5es</button><button data-journal>${bi("book")}Percurso</button><button id="mobile-avatar">${bi("user")}Avatar</button>`;document.body.append(io);ve("#mobile-map")?.addEventListener("click",Fc);ve("#mobile-avatar")?.addEventListener("click",Bc);Hu();Wu();try{Xt=Og()}catch(i){console.error("Mundo 3D indispon\xEDvel:",i),ve("#loading").style.display="none",ve("#world").innerHTML='<div id="world-fallback"><strong>Seu navegador n\xE3o disponibilizou o ambiente 3D.</strong><p>Todas as 50 miss\xF5es continuam dispon\xEDveis para jogar pelos bot\xF5es abaixo.</p><button class="primary" data-list="0">Abrir miss\xF5es</button></div>',ve("#station-labels").hidden=!0}Be.tutorial||setTimeout(Nc,650);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
