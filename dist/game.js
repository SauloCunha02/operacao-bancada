var hl=0,Oo=1,dl=2;var Bo=1,Qr=2,mn=3,wn=0,Dt=1,jt=2,Dn=0,si=1,zo=2,ko=3,Vo=4,fl=5,Wn=100,pl=101,ml=102,gl=103,vl=104,_l=200,xl=201,yl=202,Ml=203,Sr=204,br=205,Sl=206,bl=207,El=208,Tl=209,Al=210,wl=211,Cl=212,Rl=213,Il=214,ea=0,ta=1,na=2,ri=3,ia=4,sa=5,ra=6,aa=7,Ho=0,Pl=1,Dl=2,Ln=0,Ll=1,Ul=2,Nl=3,Fl=4,Ol=5,Bl=6,zl=7;var Go=300,di=301,fi=302,oa=303,ca=304,Gs=306,Er=1e3,Gn=1001,Tr=1002,Jt=1003,kl=1004;var Ws=1005;var on=1006,la=1007;var Zn=1008;var un=1009,Wo=1010,qo=1011,$i=1012,ua=1013,Jn=1014,gn=1015,Zi=1016,ha=1017,da=1018,Ji=1020,Xo=35902,Yo=35899,$o=1021,Zo=1022,Qt=1023,ki=1026,Ki=1027,Jo=1028,fa=1029,Ko=1030,pa=1031;var ma=1033,qs=33776,Xs=33777,Ys=33778,$s=33779,ga=35840,va=35841,_a=35842,xa=35843,ya=36196,Ma=37492,Sa=37496,ba=37808,Ea=37809,Ta=37810,Aa=37811,wa=37812,Ca=37813,Ra=37814,Ia=37815,Pa=37816,Da=37817,La=37818,Ua=37819,Na=37820,Fa=37821,Oa=36492,Ba=36494,za=36495,ka=36283,Va=36284,Ha=36285,Ga=36286;var vs=2300,Ar=2301,Mr=2302,Co=2400,Ro=2401,Io=2402;var Vl=3200,Hl=3201;var jo=0,Gl=1,Un="",Tt="srgb",ai="srgb-linear",_s="linear",et="srgb";var ii=7680;var Po=519,Wl=512,ql=513,Xl=514,Qo=515,Yl=516,$l=517,Zl=518,Jl=519,Do=35044;var ec="300 es",an=2e3,xs=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=1234567,fs=Math.PI/180,Vi=180/Math.PI;function ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function tc(i,e){return(i%e+e)%e}function Ju(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ku(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function ju(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function Qu(i,e=1){return e-Math.abs(tc(i,e*2)-e)}function eh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ih(i,e){return i+Math.random()*(e-i)}function sh(i){return i*(.5-Math.random())}function rh(i){i!==void 0&&(Hc=i);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(i){return i*fs}function oh(i){return i*Vi}function ch(i){return(i&i-1)===0&&i!==0}function lh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hh(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pi={DEG2RAD:fs,RAD2DEG:Vi,generateUUID:ji,clamp:We,euclideanModulo:tc,mapLinear:Ju,inverseLerp:Ku,lerp:ps,damp:ju,pingpong:Qu,smoothstep:eh,smootherstep:th,randInt:nh,randFloat:ih,randFloatSpread:sh,seededRandom:rh,degToRad:ah,radToDeg:oh,isPowerOfTwo:ch,ceilPowerOfTwo:lh,floorPowerOfTwo:uh,setQuaternionFromProperEuler:hh,normalize:Pt,denormalize:Bi},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],p=r[a+0],f=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==p||c!==f||u!==v){let m=1-o,d=l*p+c*f+u*v+h*_,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let w=Math.sqrt(E),A=Math.atan2(w,d*T);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}let y=o*T;if(l=l*m+p*y,c=c*m+f*y,u=u*m+v*y,h=h*m+_*y,m===1-o){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*f-c*p,e[t+1]=l*v+u*p+c*h-o*f,e[t+2]=c*v+u*f+o*p-l*h,e[t+3]=u*v-o*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h-p*f*v;break;case"YXZ":this._x=p*u*h+c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h+p*f*v;break;case"ZXY":this._x=p*u*h-c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h-p*f*v;break;case"ZYX":this._x=p*u*h-c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h+p*f*v;break;case"YZX":this._x=p*u*h+c*f*v,this._y=c*f*h+p*u*v,this._z=c*u*v-p*f*h,this._w=c*u*h-p*f*v;break;case"XZY":this._x=p*u*h-c*f*v,this._y=c*f*h-p*u*v,this._z=c*u*v+p*f*h,this._w=c*u*h+p*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new P,Gc=new Rn,Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],v=n[8],_=s[0],m=s[3],d=s[6],T=s[1],E=s[4],y=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*_+o*T+l*w,r[3]=a*m+o*E+l*A,r[6]=a*d+o*y+l*R,r[1]=c*_+u*T+h*w,r[4]=c*m+u*E+h*A,r[7]=c*d+u*y+h*R,r[2]=p*_+f*T+v*w,r[5]=p*m+f*E+v*A,r[8]=p*d+f*y+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,p=o*l-u*r,f=c*r-a*l,v=t*h+n*p+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},io=new Ve;function nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kl(){let i=ys("canvas");return i.style.display="block",i}var Wc={};function Hi(i){i in Wc||(Wc[i]=!0,console.warn(i))}function jl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?_s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:_s,toXYZ:qc,fromXYZ:Xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:qc,fromXYZ:Xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Je=dh();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,wr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=ys("canvas")),Ai.width=e.width,Ai.height=e.height;let s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fh=0,Gi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ph=0,ro=new P,Ut=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=on,a=Zn,o=Qt,l=un,c=i.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ji(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Go;Ut.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,w=(d+1)/2,A=(u+p)/4,R=(h+_)/4,L=(v+m)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=R/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(h-_)/T,this.z=(p-u)/T,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Cr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ms=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ir.subVectors(this.max,ls),wi.subVectors(e.a,ls),Ci.subVectors(e.b,ls),Ri.subVectors(e.c,ls),Fn.subVectors(Ci,wi),On.subVectors(Ri,Ci),Qn.subVectors(wi,Ri);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ao(t,wi,Ci,Ri,ir)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,wi,Ci,Ri,ir))?!1:(sr.crossVectors(Fn,On),t=[sr.x,sr.y,sr.z],ao(t,wi,Ci,Ri,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,nr=new qn,wi=new P,Ci=new P,Ri=new P,Fn=new P,On=new P,Qn=new P,ls=new P,ir=new P,sr=new P,ei=new P;function ao(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);let o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var mh=new qn,us=new P,oo=new P,Wi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(oo)),this.expandByPoint(us.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new P,co=new P,rr=new P,Bn=new P,lo=new P,ar=new P,uo=new P,Ss=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){co.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(co);let r=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=Bn.dot(this.direction),l=-Bn.dot(rr),c=Bn.lengthSq(),u=Math.abs(1-a*a),h,p,f,v;if(u>0)if(h=a*l-o,p=a*o-l,v=r*u,h>=0)if(p>=-v)if(p<=v){let _=1/u;h*=_,p*=_,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(co).addScaledVector(rr,p),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){lo.subVectors(t,e),ar.subVectors(n,e),uo.crossVectors(lo,ar);let a=this.direction.dot(uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);let l=o*this.direction.dot(ar.crossVectors(Bn,ar));if(l<0)return null;let c=o*this.direction.dot(lo.cross(Bn));if(c<0||l+c>a)return null;let u=-o*Bn.dot(uo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,p,f,v,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,p,f,v,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,p,f,v,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*h,v=c*u,_=c*h;t[0]=p+_*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*h,v=c*u,_=c*h;t[0]=p-_*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*h,v=o*u,_=o*h;t[0]=l*u,t[4]=v*c-f,t[8]=p*c+_,t[1]=l*h,t[5]=_*c+p,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-p*h,t[8]=v*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+v,t[10]=p-_*h}else if(e.order==="XZY"){let p=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+_,t[5]=a*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),zn.crossVectors(n,zt),zn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),zn.crossVectors(n,zt)),zn.normalize(),or.crossVectors(zt,zn),s[0]=zn.x,s[4]=or.x,s[8]=zt.x,s[1]=zn.y,s[5]=or.y,s[9]=zt.y,s[2]=zn.z,s[6]=or.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],v=n[2],_=n[6],m=n[10],d=n[14],T=n[3],E=n[7],y=n[11],w=n[15],A=s[0],R=s[4],L=s[8],b=s[12],S=s[1],D=s[5],N=s[9],G=s[13],X=s[2],Z=s[6],Y=s[10],ae=s[14],W=s[3],le=s[7],me=s[11],ge=s[15];return r[0]=a*A+o*S+l*X+c*W,r[4]=a*R+o*D+l*Z+c*le,r[8]=a*L+o*N+l*Y+c*me,r[12]=a*b+o*G+l*ae+c*ge,r[1]=u*A+h*S+p*X+f*W,r[5]=u*R+h*D+p*Z+f*le,r[9]=u*L+h*N+p*Y+f*me,r[13]=u*b+h*G+p*ae+f*ge,r[2]=v*A+_*S+m*X+d*W,r[6]=v*R+_*D+m*Z+d*le,r[10]=v*L+_*N+m*Y+d*me,r[14]=v*b+_*G+m*ae+d*ge,r[3]=T*A+E*S+y*X+w*W,r[7]=T*R+E*D+y*Z+w*le,r[11]=T*L+E*N+y*Y+w*me,r[15]=T*b+E*G+y*ae+w*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],f=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*f-n*l*f)+_*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*p+s*a*h-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],f=e[11],v=e[12],_=e[13],m=e[14],d=e[15],T=h*m*c-_*p*c+_*l*f-o*m*f-h*l*d+o*p*d,E=v*p*c-u*m*c-v*l*f+a*m*f+u*l*d-a*p*d,y=u*_*c-v*h*c+v*o*f-a*_*f-u*o*d+a*h*d,w=v*h*l-u*_*l-v*o*p+a*_*p+u*o*m-a*h*m,A=t*T+n*E+s*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=T*R,e[1]=(_*p*r-h*m*r-_*s*f+n*m*f+h*s*d-n*p*d)*R,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*R,e[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*f-n*l*f)*R,e[4]=E*R,e[5]=(u*m*r-v*p*r+v*s*f-t*m*f-u*s*d+t*p*d)*R,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*d-t*l*d)*R,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*R,e[8]=y*R,e[9]=(v*h*r-u*_*r-v*n*f+t*_*f+u*n*d-t*h*d)*R,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*d+t*o*d)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(u*_*s-v*h*s+v*n*p-t*_*p-u*n*m+t*h*m)*R,e[14]=(v*o*s-a*_*s-v*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*p+t*o*p)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,p=r*c,f=r*u,v=r*h,_=a*u,m=a*h,d=o*h,T=l*c,E=l*u,y=l*h,w=n.x,A=n.y,R=n.z;return s[0]=(1-(_+d))*w,s[1]=(f+y)*w,s[2]=(v-E)*w,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(p+d))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(v+E)*R,s[9]=(m-T)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let c=1/r,u=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),v,_;if(l)v=r/(a-r),_=a*r/(a-r);else if(o===an)v=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===xs)v=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s),v,_;if(l)v=1/(a-r),_=a/(a-r);else if(o===an)v=-2/(a-r),_=-(a+r)/(a-r);else if(o===xs)v=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new P,sn=new ht,gh=new P(0,0,0),vh=new P(1,1,1),zn=new P,or=new P,zt=new P,Yc=new ht,$c=new Rn,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_h=0,Zc=new P,Pi=new Rn,bn=new ht,cr=new P,hs=new P,xh=new P,yh=new Rn,Jc=new P(1,0,0),Kc=new P(0,1,0),jc=new P(0,0,1),Qc={type:"added"},Mh={type:"removed"},Di={type:"childadded",child:null},ho={type:"childremoved",child:null},Ct=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new cn,n=new Rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hs,cr,this.up):bn.lookAt(cr,hs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new P(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new P,En=new P,fo=new P,Tn=new P,Li=new P,Ui=new P,el=new P,po=new P,mo=new P,go=new P,vo=new dt,_o=new dt,xo=new dt,Hn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),En.subVectors(n,t),fo.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(En),l=rn.dot(fo),c=En.dot(En),u=En.dot(fo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let p=1/h,f=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vo.setScalar(0),_o.setScalar(0),xo.setScalar(0),vo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),En.subVectors(e,t),rn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Li.subVectors(s,n),Ui.subVectors(r,n),po.subVectors(e,n);let l=Li.dot(po),c=Ui.dot(po);if(l<=0&&c<=0)return t.copy(n);mo.subVectors(e,s);let u=Li.dot(mo),h=Ui.dot(mo);if(u>=0&&h<=u)return t.copy(s);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Li,a);go.subVectors(e,r);let f=Li.dot(go),v=Ui.dot(go);if(v>=0&&f<=v)return t.copy(r);let _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ui,o);let m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return el.subVectors(r,s),o=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(el,o);let d=1/(m+_+p);return a=_*d,o=p*d,t.copy(n).addScaledVector(Li,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=tc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yo(a,r,e+1/3),this.g=yo(a,r,e),this.b=yo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.workingToColorSpace(Et.copy(this),e),Math.round(We(Et.r*255,0,255))*65536+Math.round(We(Et.g*255,0,255))*256+Math.round(We(Et.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Tt){Je.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(lr);let n=ps(kn.h,lr.h,t),s=ps(kn.s,lr.s,t),r=ps(kn.l,lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new qe;qe.NAMES=Ql;var Sh=0,Xn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=si,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=br,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},In=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new P,ur=new we,bh=0,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}};var bs=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eh=0,Zt=new ht,Mo=new Ct,Ni=new P,kt=new qn,ds=new qn,yt=new P,Ht=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?Es:bs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(kt.min,ds.min),kt.expandByPoint(yt),yt.addVectors(kt.max,ds.max),kt.expandByPoint(yt)):(kt.expandByPoint(ds.min),kt.expandByPoint(ds.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),yt.add(Ni)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;let c=new P,u=new P,h=new P,p=new we,f=new we,v=new we,_=new P,m=new P;function d(L,b,S){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),v.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(p),v.sub(p);let D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(D),o[L].add(_),o[b].add(_),o[S].add(_),l[L].add(m),l[b].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,b=T.length;L<b;++L){let S=T[L],D=S.start,N=S.count;for(let G=D,X=D+N;G<X;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let E=new P,y=new P,w=new P,A=new P;function R(L){w.fromBufferAttribute(s,L),A.copy(w);let b=o[L];E.copy(b),E.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(A,b);let D=y.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,D)}for(let L=0,b=T.length;L<b;++L){let S=T[L],D=S.start,N=S.count;for(let G=D,X=D+N;G<X;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let p=0,f=e.count;p<f;p+=3){let v=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u),f=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let d=0;d<u;d++)p[v++]=c[f++]}return new Vt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=new ht,ti=new Ss,hr=new Wi,nl=new P,dr=new P,fr=new P,pr=new P,So=new P,mr=new P,il=new P,gr=new P,ct=class extends Ct{constructor(e=new Ht,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(So.fromBufferAttribute(h,e),a?mr.addScaledVector(So,u):mr.addScaledVector(So.sub(t),u))}t.add(mr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(hr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(hr,nl)===null||ti.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){let m=p[v],d=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,w=E;y<w;y+=3){let A=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);s=vr(this,d,e,n,c,u,h,A,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=v,d=_;m<d;m+=3){let T=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=vr(this,a,e,n,c,u,h,T,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){let m=p[v],d=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,w=E;y<w;y+=3){let A=y,R=y+1,L=y+2;s=vr(this,d,e,n,c,u,h,A,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,d=_;m<d;m+=3){let T=m,E=m+1,y=m+2;s=vr(this,a,e,n,c,u,h,T,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Th(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wn,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:i}}function vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,dr),i.getVertexPosition(l,fr),i.getVertexPosition(c,pr);let u=Th(i,e,t,n,dr,fr,pr,il);if(u){let h=new P;Hn.getBarycoord(il,dr,fr,pr,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,l,c,h,new we)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,h,new we)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};Hn.getNormal(dr,fr,pr,p.normal),u.face=p,u.barycoord=h}return u}var pn=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],p=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function v(_,m,d,T,E,y,w,A,R,L,b){let S=y/R,D=w/L,N=y/2,G=w/2,X=A/2,Z=R+1,Y=L+1,ae=0,W=0,le=new P;for(let me=0;me<Y;me++){let ge=me*D-G;for(let ke=0;ke<Z;ke++){let Ke=ke*S-N;le[_]=Ke*T,le[m]=ge*E,le[d]=X,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[d]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(ke/R),h.push(1-me/L),ae+=1}}for(let me=0;me<L;me++)for(let ge=0;ge<R;ge++){let ke=p+ge+Z*me,Ke=p+ge+Z*(me+1),Qe=p+(ge+1)+Z*(me+1),$e=p+(ge+1)+Z*me;l.push(ke,Ke,$e),l.push(Ke,Qe,$e),W+=6}o.addGroup(f,W,b),f+=W,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rt(i){let e={};for(let t=0;t<i.length;t++){let n=mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ah(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var eu={clone:mi,merge:Rt},wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ts=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new P,sl=new we,rl=new we,At=class extends Ts{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,sl,rl),t.subVectors(rl,sl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,Ir=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new At(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let a=new At(Fi,Oi,e,t);a.layers=this.layers,this.add(a);let o=new At(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let l=new At(Fi,Oi,e,t);l.layers=this.layers,this.add(l);let c=new At(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},As=class extends Ut{constructor(e=[],t=di,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pr=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new As(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=on),new Ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rh={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ws=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var bo=new P,Ih=new P,Ph=new Ve,dn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bo.subVectors(n,t).cross(Ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ph.getNormalMatrix(e),s=this.coplanarPoint(bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new Wi,Dh=new we(.5,.5),_r=new P,Yi=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],f=r[7],v=r[8],_=r[9],m=r[10],d=r[11],T=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,d-v,w-T).normalize(),s[1].setComponents(c+a,f+u,d+v,w+T).normalize(),s[2].setComponents(c+o,f+h,d+_,w+E).normalize(),s[3].setComponents(c-o,f-h,d-_,w-E).normalize(),n)s[4].setComponents(l,p,m,y).normalize(),s[5].setComponents(c-l,f-p,d-m,w-y).normalize();else if(s[4].setComponents(c-l,f-p,d-m,w-y).normalize(),t===an)s[5].setComponents(c+l,f+p,d+m,w+y).normalize();else if(t===xs)s[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);let t=Dh.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Is=class extends Ut{constructor(e,t,n=Jn,s,r,a,o=Jt,l=Jt,c,u=ki,h=1){if(u!==ki&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ps=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ds=class i extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pn=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],p=[],f=[],v=0,_=[],m=n/2,d=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(f,2));function T(){let y=new P,w=new P,A=0,R=(t-e)/n;for(let L=0;L<=r;L++){let b=[],S=L/r,D=S*(t-e)+e;for(let N=0;N<=s;N++){let G=N/s,X=G*l+o,Z=Math.sin(X),Y=Math.cos(X);w.x=D*Z,w.y=-S*n+m,w.z=D*Y,h.push(w.x,w.y,w.z),y.set(Z,R,Y).normalize(),p.push(y.x,y.y,y.z),f.push(G,1-S),b.push(v++)}_.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){let S=_[b][L],D=_[b+1][L],N=_[b+1][L+1],G=_[b][L+1];(e>0||b!==0)&&(u.push(S,D,G),A+=3),(t>0||b!==r-1)&&(u.push(D,N,G),A+=3)}c.addGroup(d,A,0),d+=A}function E(y){let w=v,A=new we,R=new P,L=0,b=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),v++;let D=v;for(let N=0;N<=s;N++){let X=N/s*l+o,Z=Math.cos(X),Y=Math.sin(X);R.x=b*Y,R.y=m*S,R.z=b*Z,h.push(R.x,R.y,R.z),p.push(0,S,0),A.x=Z*.5+.5,A.y=Y*.5*S+.5,f.push(A.x,A.y),v++}for(let N=0;N<s;N++){let G=w+N,X=D+N;y===!0?u.push(X,X+1,G):u.push(X+1,X,G),L+=3}c.addGroup(d,L,y===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ls=class i extends Pn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dr=class i extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let E=new P,y=new P,w=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],y),f(t[A+2],w),l(E,y,w,T)}function l(T,E,y,w){let A=w+1,R=[];for(let L=0;L<=A;L++){R[L]=[];let b=T.clone().lerp(y,L/A),S=E.clone().lerp(y,L/A),D=A-L;for(let N=0;N<=D;N++)N===0&&L===A?R[L][N]=b:R[L][N]=b.clone().lerp(S,N/D)}for(let L=0;L<A;L++)for(let b=0;b<2*(A-L)-1;b++){let S=Math.floor(b/2);b%2===0?(p(R[L][S+1]),p(R[L+1][S]),p(R[L][S])):(p(R[L][S+1]),p(R[L+1][S+1]),p(R[L+1][S]))}}function c(T){let E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(T),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){let T=new P;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let y=m(T)/2/Math.PI+.5,w=d(T)/Math.PI+.5;a.push(y,1-w)}v(),h()}function h(){for(let T=0;T<a.length;T+=6){let E=a[T+0],y=a[T+2],w=a[T+4],A=Math.max(E,y,w),R=Math.min(E,y,w);A>.9&&R<.1&&(E<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),w<.2&&(a[T+4]+=1))}}function p(T){r.push(T.x,T.y,T.z)}function f(T,E){let y=T*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function v(){let T=new P,E=new P,y=new P,w=new P,A=new we,R=new we,L=new we;for(let b=0,S=0;b<r.length;b+=9,S+=6){T.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),A.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),w.copy(T).add(E).add(y).divideScalar(3);let D=m(w);_(A,S+0,T,D),_(R,S+2,E,D),_(L,S+4,y,D)}}function _(T,E,y,w){w<0&&T.x===1&&(a[E]=T.x-1),y.x===0&&y.z===0&&(a[E]=w/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ht;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends Kt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*h+this.aX,c=p*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lr=class extends Us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xr=new P,Eo=new sc,To=new sc,Ao=new sc,Ur=class extends Kt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xr.subVectors(s[0],s[1]).add(s[0]),c=xr);let h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),Eo.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,v,_,m),To.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,v,_,m),Ao.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),To.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Ao.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(Eo.calc(l),To.calc(l),Ao.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function al(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lh(i,e){let t=1-i;return t*t*e}function Uh(i,e){return 2*(1-i)*i*e}function Nh(i,e){return i*i*e}function ms(i,e,t,n){return Lh(i,e)+Uh(i,t)+Nh(i,n)}function Fh(i,e){let t=1-i;return t*t*t*e}function Oh(i,e){let t=1-i;return 3*t*t*i*e}function Bh(i,e){return 3*(1-i)*i*i*e}function zh(i,e){return i*i*i*e}function gs(i,e,t,n,s){return Fh(i,e)+Oh(i,t)+Bh(i,n)+zh(i,s)}var Nr=class extends Kt{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,s.x,r.x,a.x,o.x),gs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fr=class extends Kt{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(e,s.x,r.x,a.x,o.x),gs(e,s.y,r.y,a.y,o.y),gs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends Kt{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends Kt{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends Kt{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(e,s.x,r.x,a.x),ms(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oi=class extends Kt{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(e,s.x,r.x,a.x),ms(e,s.y,r.y,a.y),ms(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(al(o,l.x,c.x,u.x,h.x),al(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},kh=Object.freeze({__proto__:null,ArcCurve:Lr,CatmullRomCurve3:Ur,CubicBezierCurve:Nr,CubicBezierCurve3:Fr,EllipseCurve:Us,LineCurve:Or,LineCurve3:Br,QuadraticBezierCurve:zr,QuadraticBezierCurve3:oi,SplineCurve:kr});var Ns=class i extends Dr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ci=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,p=t/l,f=[],v=[],_=[],m=[];for(let d=0;d<u;d++){let T=d*p-a;for(let E=0;E<c;E++){let y=E*h-r;v.push(y,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let E=T+c*d,y=T+c*(d+1),w=T+1+c*(d+1),A=T+1+c*d;f.push(E,y,A),f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fs=class i extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,p=new P,f=[],v=[],_=[],m=[];for(let d=0;d<=n;d++){let T=[],E=d/n,y=0;d===0&&a===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),v.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(A+y,1-E),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){let E=u[d][T+1],y=u[d][T],w=u[d+1][T],A=u[d+1][T+1];(d!==0||a>0)&&f.push(E,y,A),(d!==n-1||l<Math.PI)&&f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class i extends Ht{constructor(e=new oi(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new we,u=new P,h=[],p=[],f=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(f,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),T(),d()}function m(E){u=e.getPointAt(E/t,u);let y=a.normals[E],w=a.binormals[E];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,L=Math.sin(R),b=-Math.cos(R);l.x=b*y.x+L*w.x,l.y=b*y.y+L*w.y,l.z=b*y.z+L*w.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let w=(s+1)*(E-1)+(y-1),A=(s+1)*E+(y-1),R=(s+1)*E+y,L=(s+1)*(E-1)+y;v.push(w,A,L),v.push(A,R,L)}}function T(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new kh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var li=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vr=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hr=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Co,endingEnd:Co}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ro:r=e,o=2*t-n;break;case Io:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ro:a=e,l=2*n-t;break;case Io:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),_=v*v,m=_*v,d=-p*m+2*p*_-p*v,T=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*v+1,E=(-1-f)*m+(1.5+f)*_+.5*v,y=f*m-f*_;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+T*a[c+w]+E*a[l+w]+y*a[h+w];return r}},Wr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*h+a[l+p]*u;return r}},qr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Mr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,p=h-n,f=h+n;for(let v=0;v!==n;++v){let _=t[h+v];if(_!==t[p+v]||_!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Ar;var Yn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=vs;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Xr.prototype.ValueTypeName="color";var Yr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="number";var $r=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Bs=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Gt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=vs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="vector";var Jr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},tu=new Jr,Kr=class{constructor(e){this.manager=e!==void 0?e:tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ks=class extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wo=new ht,ol=new P,cl=new P,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vs=class extends Ts{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uo=class extends Lo{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Uo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jr=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rc="\\[\\]\\.:\\/",Hh=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",Gh="[^"+rc.replace("\\.","")+"]",Wh=/((?:WC+[\/:])*)/.source.replace("WC",ac),qh=/(WCOD+)?/.source.replace("WCOD",Gh),Xh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),Yh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),$h=new RegExp("^"+Wh+qh+Xh+Yh+"$"),Zh=["material","materials","bones","map"],No=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hh,"")}static parseTrackName(e){let t=$h.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=No;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);var ll=new ht,hi=class{constructor(e,t,n=0,s=1/0){this.ray=new Ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ll.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ll),this}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(ul),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,n,t);return n.sort(ul),n}};function ul(i,e){return i.distance-e.distance}function Fo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fo(r[a],e,t,!0)}}function oc(i,e,t,n){let s=Jh(n);switch(t){case $o:return i*e;case Jo:return i*e/s.components*s.byteLength;case fa:return i*e/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case pa:return i*e*2/s.components*s.byteLength;case Zo:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case ma:return i*e*4/s.components*s.byteLength;case qs:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case xa:return Math.max(i,16)*Math.max(e,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(e,8)/2;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Ba:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jh(i){switch(i){case un:case Wo:return{byteLength:1,components:1};case $i:case qo:case Zi:return{byteLength:2,components:1};case ha:case da:return{byteLength:2,components:4};case Jn:case ua:case gn:return{byteLength:4,components:1};case Xo:case Yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Tu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jh(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<h.length;f++){let v=h[p],_=h[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,h[p]=_)}h.length=p+1;for(let f=0,v=h.length;f<v;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bf=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,ap=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,vp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,bp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
}`,Tp=`#define TOON
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
}`,Ap=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Qh,alphahash_pars_fragment:ed,alphamap_fragment:td,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:cd,begin_vertex:ld,beginnormal_vertex:ud,bsdfs:hd,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:vd,color_fragment:_d,color_pars_fragment:xd,color_pars_vertex:yd,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:wd,emissivemap_pars_fragment:Cd,colorspace_fragment:Rd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Ld,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:qd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:Xd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:cf,map_particle_pars_fragment:lf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:vf,normal_fragment_maps:_f,normal_pars_fragment:xf,normal_pars_vertex:yf,normal_vertex:Mf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Cf,premultiplied_alpha_fragment:Rf,project_vertex:If,dithering_fragment:Pf,dithering_pars_fragment:Df,roughnessmap_fragment:Lf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:kf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Gf,specularmap_pars_fragment:Wf,tonemapping_fragment:qf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:$f,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Kf,worldpos_vertex:jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:cp,equirect_vert:lp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:vp,meshmatcap_frag:_p,meshnormal_vert:xp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:bp,meshphysical_frag:Ep,meshtoon_vert:Tp,meshtoon_frag:Ap,points_vert:wp,points_frag:Cp,shadow_vert:Rp,shadow_frag:Ip,sprite_vert:Pp,sprite_frag:Dp},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Rt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Rt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Rt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Rt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Rt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Rt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Rt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Rt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Rt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Rt([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vn.physical={uniforms:Rt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Wa={r:0,b:0,g:0},gi=new cn,Lp=new ht;function Up(i,e,t,n,s,r,a){let o=new qe(0),l=r===!0?0:1,c,u,h=null,p=0,f=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1,w=v(E);w===null?d(o,l):w&&w.isColor&&(d(w,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let w=v(y);w&&(w.isCubeTexture||w.mapping===Gs)?(u===void 0&&(u=new ct(new pn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:mi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(gi)),u.material.toneMapped=Je.getTransfer(w.colorSpace)!==et,(h!==w||p!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ct(new ci(2,2),new ln({name:"BackgroundMaterial",uniforms:mi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(w.colorSpace)!==et,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,p=w.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,y){E.getRGB(Wa,ic(i)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:m,dispose:T}}function Np(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(S,D,N,G,X){let Z=!1,Y=h(G,N,D);r!==Y&&(r=Y,c(r.object)),Z=f(S,G,N,X),Z&&v(S,G,N,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(S,D,N,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,D,N){let G=N.wireframe===!0,X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Z=X[D.id];Z===void 0&&(Z={},X[D.id]=Z);let Y=Z[G];return Y===void 0&&(Y=p(l()),Z[G]=Y),Y}function p(S){let D=[],N=[],G=[];for(let X=0;X<t;X++)D[X]=0,N[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,D,N,G){let X=r.attributes,Z=D.attributes,Y=0,ae=N.getAttributes();for(let W in ae)if(ae[W].location>=0){let me=X[W],ge=Z[W];if(ge===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function v(S,D,N,G){let X={},Z=D.attributes,Y=0,ae=N.getAttributes();for(let W in ae)if(ae[W].location>=0){let me=Z[W];me===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));let ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),X[W]=ge,Y++}r.attributes=X,r.attributesNum=Y,r.index=G}function _(){let S=r.newAttributes;for(let D=0,N=S.length;D<N;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){let N=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;N[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),X[S]!==D&&(i.vertexAttribDivisor(S,D),X[S]=D)}function T(){let S=r.newAttributes,D=r.enabledAttributes;for(let N=0,G=D.length;N<G;N++)D[N]!==S[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function E(S,D,N,G,X,Z,Y){Y===!0?i.vertexAttribIPointer(S,D,N,X,Z):i.vertexAttribPointer(S,D,N,G,X,Z)}function y(S,D,N,G){_();let X=G.attributes,Z=N.getAttributes(),Y=D.defaultAttributeValues;for(let ae in Z){let W=Z[ae];if(W.location>=0){let le=X[ae];if(le===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){let me=le.normalized,ge=le.itemSize,ke=e.get(le);if(ke===void 0)continue;let Ke=ke.buffer,Qe=ke.type,$e=ke.bytesPerElement,J=Qe===i.INT||Qe===i.UNSIGNED_INT||le.gpuType===ua;if(le.isInterleavedBufferAttribute){let ee=le.data,xe=ee.stride,Ue=le.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)d(W.location+Se,ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Se=0;Se<W.locationSize;Se++)E(W.location+Se,ge/W.locationSize,Qe,me,xe*$e,(Ue+ge/W.locationSize*Se)*$e,J)}else{if(le.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)d(W.location+ee,le.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ee=0;ee<W.locationSize;ee++)E(W.location+ee,ge/W.locationSize,Qe,me,ge*$e,ge/W.locationSize*ee*$e,J)}}else if(Y!==void 0){let me=Y[ae];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(W.location,me);break;case 3:i.vertexAttrib3fv(W.location,me);break;case 4:i.vertexAttrib4fv(W.location,me);break;default:i.vertexAttrib1fv(W.location,me)}}}}T()}function w(){L();for(let S in n){let D=n[S];for(let N in D){let G=D[N];for(let X in G)u(G[X].object),delete G[X];delete D[N]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let N in D){let G=D[N];for(let X in G)u(G[X].object),delete G[X];delete D[N]}delete n[S.id]}function R(S){for(let D in n){let N=n[D];if(N[S.id]===void 0)continue;let G=N[S.id];for(let X in G)u(G[X].object),delete G[X];delete N[S.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Fp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,n,1)}function l(c,u,h,p){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_]*p[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Op(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function Bp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){let v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,E=T*4,y=d.clippingState||null;l.value=y,y=u(v,p,E,f);for(let w=0;w!==E;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,v){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let d=f+_*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zp(i){let e=new WeakMap;function t(a,o){return o===oa?a.mapping=di:o===ca&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===oa||o===ca)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Pr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var es=4,nu=[.125,.215,.35,.446,.526,.582],xi=20,cc=new Vs,iu=new qe,lc=null,uc=0,hc=0,dc=!1,_i=(1+Math.sqrt(5))/2,Qi=1/_i,su=[new P(-_i,Qi,0),new P(_i,Qi,0),new P(-Qi,0,_i),new P(Qi,0,_i),new P(0,_i,-Qi),new P(0,_i,Qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],kp=new P,Ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=kp}=r;lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Zi,format:Qt,colorSpace:ai,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Hp(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,s,r){let l=new At(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(iu),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new In({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new ct(new pn,_),d=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,d=!0):(_.color.copy(iu),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let w=this._cubeSize;qa(s,y*w,E>2?w:0,w,w),h.setRenderTarget(s),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=su[(s-r-1)%su.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ct(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);let d=[],T=0;for(let R=0;R<xi;++R){let L=R/_,b=Math.exp(-L*L/2);d.push(b),R===0?T+=b:R<m&&(T+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:E}=this;p.dTheta.value=v,p.mipInt.value=E-n;let y=this._sizeLods[s],w=3*y*(s>E-es?s-E+es:0),A=4*(this._cubeSize-y);qa(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(h,cc)}};function Vp(i){let e=[],t=[],n=[],s=i,r=i-es+1+nu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-es?l=nu[a-i+es-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,_=3,m=2,d=1,T=new Float32Array(_*v*f),E=new Float32Array(m*v*f),y=new Float32Array(d*v*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,L=A>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];T.set(b,_*v*A),E.set(p,m*v*A);let S=[A,A,A,A,A,A];y.set(S,d*v*A)}let w=new Ht;w.setAttribute("position",new Vt(T,_)),w.setAttribute("uv",new Vt(E,m)),w.setAttribute("faceIndex",new Vt(y,d)),e.push(w),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hp(i,e,t){let n=new Float32Array(xi),s=new P(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function au(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ou(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function Gp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===oa||l===ca,u=l===di||l===fi;if(c||u){let h=e.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Ya(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Ya(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qp(i,e,t,n){let s={},r=new WeakMap;function a(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(h){let p=h.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(h){let p=[],f=h.index,v=h.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let E=0,y=T.length;E<y;E+=3){let w=T[E+0],A=T[E+1],R=T[E+2];p.push(w,A,A,R,R,w)}}else if(v!==void 0){let T=v.array;_=v.version;for(let E=0,y=T.length/3-1;E<y;E+=3){let w=E+0,A=E+1,R=E+2;p.push(w,A,A,R,R,w)}}else return;let m=new(nc(p)?Es:bs)(p,1);m.version=_;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let p=r.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Xp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,p*a,v),t.update(f,n,v))}function u(p,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,v);let m=0;for(let d=0;d<v;d++)m+=f[d];t.update(m,n,1)}function h(p,f,v,_){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,v);let d=0;for(let T=0;T<v;T++)d+=f[T]*_[T];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $p(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==h){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;f===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*w*4*h),R=new Ms(A,y,w,h);R.type=gn,R.needsUpdate=!0;let L=E*4;for(let S=0;S<h;S++){let D=m[S],N=d[S],G=T[S],X=y*w*4*S;for(let Z=0;Z<D.count;Z++){let Y=Z*L;f===!0&&(s.fromBufferAttribute(D,Z),A[X+Y+0]=s.x,A[X+Y+1]=s.y,A[X+Y+2]=s.z,A[X+Y+3]=0),v===!0&&(s.fromBufferAttribute(N,Z),A[X+Y+4]=s.x,A[X+Y+5]=s.y,A[X+Y+6]=s.z,A[X+Y+7]=0),_===!0&&(s.fromBufferAttribute(G,Z),A[X+Y+8]=s.x,A[X+Y+9]=s.y,A[X+Y+10]=s.z,A[X+Y+11]=G.itemSize===4?s.w:1)}}p={count:h,texture:R,size:new we(y,w)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Zp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Au=new Ut,cu=new Is(1,1),wu=new Ms,Cu=new Rr,Ru=new As,lu=[],uu=[],hu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lu[s];if(r===void 0&&(r=new Float32Array(s),lu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function jp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function em(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),_t(t,n)}}function tm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),_t(t,n)}}function nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),_t(t,n)}}function im(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cu.compareFunction=Qo,r=cu):r=Au,t.setTexture2D(e||r,s)}function dm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cu,s)}function fm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ru,s)}function pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wu,s)}function mm(i){switch(i){case 5126:return Jp;case 35664:return Kp;case 35665:return jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return cm;case 36295:return lm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,e){i.uniform1fv(this.addr,e)}function vm(i,e){let t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function _m(i,e){let t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){let t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function ym(i,e){let t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mm(i,e){let t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){let t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bm(i,e){i.uniform1iv(this.addr,e)}function Em(i,e){i.uniform2iv(this.addr,e)}function Tm(i,e){i.uniform3iv(this.addr,e)}function Am(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Cm(i,e){i.uniform2uiv(this.addr,e)}function Rm(i,e){i.uniform3uiv(this.addr,e)}function Im(i,e){i.uniform4uiv(this.addr,e)}function Pm(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Au,r[a])}function Dm(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cu,r[a])}function Lm(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ru,r[a])}function Um(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wu,r[a])}function Nm(i){switch(i){case 5126:return gm;case 35664:return vm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return bm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return wm;case 36294:return Cm;case 36295:return Rm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Um}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function Fm(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pu(t,c===void 0?new pc(o,i,e):new mc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new gc(o),pu(t,h)),t=h}}}var ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Fm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Om=37297,Bm=0;function zm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var gu=new Ve;function km(i){Je._getMatrix(gu,Je.workingColorSpace,i);let e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case _s:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zm(i.getShaderSource(e),o)}else return r}function Vm(i,e){let t=km(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hm(i,e){let t;switch(e){case Ll:t="Linear";break;case Ul:t="Reinhard";break;case Nl:t="Cineon";break;case Fl:t="ACESFilmic";break;case Bl:t="AgX";break;case zl:t="Neutral";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xa=new P;function Gm(){Je.getLuminanceCoefficients(Xa);let i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function qm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zs(i){return i!==""}function _u(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(Ym,Zm)}var $m=new Map;function Zm(i,e){let t=Ge[e];if(t===void 0){let n=$m.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(Jm,Km)}function Km(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function tg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case Pl:e="ENVMAP_BLENDING_MIX";break;case Dl:e="ENVMAP_BLENDING_ADD";break}return e}function ng(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ig(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jm(t),c=Qm(t),u=eg(t),h=tg(t),p=ng(t),f=Wm(t),v=qm(r),_=s.createProgram(),m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zs).join(`
`),d.length>0&&(d+=`
`)):(m=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),d=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Vm("linearToOutputTexel",t.outputColorSpace),Gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=vc(a),a=_u(a,t),a=xu(a,t),o=vc(o),o=_u(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=T+m+a,y=T+d+o,w=mu(s,s.VERTEX_SHADER,E),A=mu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",Z=N.trim(),Y=G.trim(),ae=X.trim(),W=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{let me=vu(s,w,"vertex"),ge=vu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+me+`
`+ge)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||ae==="")&&(le=!1);le&&(D.diagnostics={runnable:W,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ae,prefix:d}})}s.deleteShader(w),s.deleteShader(A),L=new ts(s,_),b=Xm(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Om)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var sg=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=sg++,this.code=e,this.usedTimes=0}};function rg(i,e,t,n,s,r,a){let o=new qi,l=new _c,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,N,G){let X=N.fog,Z=G.geometry,Y=b.isMeshStandardMaterial?N.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),W=ae&&ae.mapping===Gs?ae.image.height:null,le=v[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=me!==void 0?me.length:0,ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let Ke,Qe,$e,J;if(le){let Ze=vn[le];Ke=Ze.vertexShader,Qe=Ze.fragmentShader}else Ke=b.vertexShader,Qe=b.fragmentShader,l.update(b),$e=l.getVertexShaderID(b),J=l.getFragmentShaderID(b);let ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,He=!!b.map,mt=!!b.matcap,C=!!ae,nt=!!b.aoMap,Fe=!!b.lightMap,Re=!!b.bumpMap,be=!!b.normalMap,it=!!b.displacementMap,Me=!!b.emissiveMap,ze=!!b.metalnessMap,z=!!b.roughnessMap,K=b.anisotropy>0,x=b.clearcoat>0,g=b.dispersion>0,I=b.iridescence>0,B=b.sheen>0,q=b.transmission>0,k=K&&!!b.anisotropyMap,te=x&&!!b.clearcoatMap,Q=x&&!!b.clearcoatNormalMap,pe=x&&!!b.clearcoatRoughnessMap,Te=I&&!!b.iridescenceMap,ne=I&&!!b.iridescenceThicknessMap,ue=B&&!!b.sheenColorMap,Ie=B&&!!b.sheenRoughnessMap,ye=!!b.specularMap,ce=!!b.specularColorMap,Oe=!!b.specularIntensityMap,U=q&&!!b.transmissionMap,ie=q&&!!b.thicknessMap,oe=!!b.gradientMap,se=!!b.alphaMap,j=b.alphaTest>0,$=!!b.alphaHash,he=!!b.extensions,Ae=Ln;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Ye={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:Qe,defines:b.defines,customVertexShaderID:$e,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ai,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:mt,envMap:C,envMapMode:C&&ae.mapping,envMapCubeUVHeight:W,aoMap:nt,lightMap:Fe,bumpMap:Re,normalMap:be,displacementMap:p&&it,emissiveMap:Me,normalMapObjectSpace:be&&b.normalMapType===Gl,normalMapTangentSpace:be&&b.normalMapType===jo,metalnessMap:ze,roughnessMap:z,anisotropy:K,anisotropyMap:k,clearcoat:x,clearcoatMap:te,clearcoatNormalMap:Q,clearcoatRoughnessMap:pe,dispersion:g,iridescence:I,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:B,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:ye,specularColorMap:ce,specularIntensityMap:Oe,transmission:q,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:b.transparent===!1&&b.blending===si&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:j,alphaHash:$,combine:b.combine,mapUv:He&&_(b.map.channel),aoMapUv:nt&&_(b.aoMap.channel),lightMapUv:Fe&&_(b.lightMap.channel),bumpMapUv:Re&&_(b.bumpMap.channel),normalMapUv:be&&_(b.normalMap.channel),displacementMapUv:it&&_(b.displacementMap.channel),emissiveMapUv:Me&&_(b.emissiveMap.channel),metalnessMapUv:ze&&_(b.metalnessMap.channel),roughnessMapUv:z&&_(b.roughnessMap.channel),anisotropyMapUv:k&&_(b.anisotropyMap.channel),clearcoatMapUv:te&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:ye&&_(b.specularMap.channel),specularColorMapUv:ce&&_(b.specularColorMap.channel),specularIntensityMapUv:Oe&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:ie&&_(b.thicknessMap.channel),alphaMapUv:se&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(be||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(He||se),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:Me&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jt,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:he&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&b.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(T(S,b),E(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let S=v[b.type],D;if(S){let N=vn[S];D=eu.clone(N.uniforms)}else D=b.uniforms;return D}function w(b,S){let D;for(let N=0,G=u.length;N<G;N++){let X=u[N];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new ig(i,S,b,r),u.push(D)),D}function A(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function ag(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,p,f,v,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,p,f,v,_,m){let d=a(h,p,f,v,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):t.push(d)}function l(h,p,f,v,_,m){let d=a(h,p,f,v,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||og),n.length>1&&n.sort(p||Su),s.length>1&&s.sort(p||Su)}function u(){for(let h=e,p=i.length;h<p;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function cg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new bu,i.set(n,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hg=0;function dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fg(i){let e=new lg,t=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ht,a=new ht;function o(c){let u=0,h=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,v=0,_=0,m=0,d=0,T=0,E=0,y=0,w=0,A=0,R=0;c.sort(dg);for(let b=0,S=c.length;b<S;b++){let D=c[b],N=D.color,G=D.intensity,X=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*G,h+=N.g*G,p+=N.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],G);R++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,W=t.get(D);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=D.shadow.matrix,T++}n.directional[f]=Y,f++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(N).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;let ae=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ae.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=ae.matrix,D.castShadow){let W=t.get(D);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Z,y++}_++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(N).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let ae=D.shadow,W=t.get(D);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,W.shadowCameraNear=ae.camera.near,W.shadowCameraFar=ae.camera.far,n.pointShadow[v]=W,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=D.shadow.matrix,E++}n.point[v]=Y,v++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[d]=Y,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let L=n.hash;(L.directionalLength!==f||L.pointLength!==v||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=f,L.pointLength=v,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=w,L.numLightProbes=R,n.version=hg++)}function l(c,u){let h=0,p=0,f=0,v=0,_=0,m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){let E=c[d];if(E.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Eu(i){let e=new fg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Eu(i),e.set(s,[o])):r>=a.length?(o=new Eu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function vg(i,e,t){let n=new Yi,s=new we,r=new we,a=new dt,o=new Vr({depthPacking:Hl}),l=new Hr,c={},u=t.maxTextureSize,h={[wn]:Dt,[Dt]:wn,[jt]:jt},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let v=new Ht;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Dn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==mn&&this.type===mn,X=d===mn&&this.type!==mn;for(let Z=0,Y=A.length;Z<Y;Z++){let ae=A[Z],W=ae.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let le=W.getFrameExtents();if(s.multiply(le),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||G===!0||X===!0){let ge=this.type!==mn?{minFilter:Jt,magFilter:Jt}:{};W.map!==null&&W.map.dispose(),W.map=new fn(s.x,s.y,ge),W.map.texture.name=ae.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let me=W.getViewportCount();for(let ge=0;ge<me;ge++){let ke=W.getViewport(ge);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),N.viewport(a),W.updateMatrices(ae,ge),n=W.getFrustum(),y(R,L,W.camera,ae,this.type)}W.isPointLightShadow!==!0&&this.type===mn&&T(W,L),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function T(A,R){let L=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,f,_,null)}function E(A,R,L,b){let S=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=S.uuid,G=R.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let Z=X[G];Z===void 0&&(Z=S.clone(),X[G]=Z,R.addEventListener("dispose",w)),S=Z}if(S.visible=R.visible,S.wireframe=R.wireframe,b===mn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=i.properties.get(S);N.light=L}return S}function y(A,R,L,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let G=e.update(A),X=A.material;if(Array.isArray(X)){let Z=G.groups;for(let Y=0,ae=Z.length;Y<ae;Y++){let W=Z[Y],le=X[W.materialIndex];if(le&&le.visible){let me=E(A,le,b,S);A.onBeforeShadow(i,A,R,L,G,me,W),i.renderBufferDirect(L,null,G,me,A,W),A.onAfterShadow(i,A,R,L,G,me,W)}}}else if(X.visible){let Z=E(A,X,b,S);A.onBeforeShadow(i,A,R,L,G,Z,null),i.renderBufferDirect(L,null,G,Z,A,null),A.onAfterShadow(i,A,R,L,G,Z,null)}}let N=A.children;for(let G=0,X=N.length;G<X;G++)y(N[G],R,L,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(let L in c){let b=c[L],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var _g={[ea]:ta,[na]:ra,[ia]:aa,[ri]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:ri};function xg(i,e){function t(){let U=!1,ie=new dt,oe=null,se=new dt(0,0,0,0);return{setMask:function(j){oe!==j&&!U&&(i.colorMask(j,j,j,j),oe=j)},setLocked:function(j){U=j},setClear:function(j,$,he,Ae,Ye){Ye===!0&&(j*=Ae,$*=Ae,he*=Ae),ie.set(j,$,he,Ae),se.equals(ie)===!1&&(i.clearColor(j,$,he,Ae),se.copy(ie))},reset:function(){U=!1,oe=null,se.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,se=null,j=null;return{setReversed:function($){if(ie!==$){let he=e.get("EXT_clip_control");$?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ie=$;let Ae=j;j=null,this.setClear(Ae)}},getReversed:function(){return ie},setTest:function($){$?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function($){oe!==$&&!U&&(i.depthMask($),oe=$)},setFunc:function($){if(ie&&($=_g[$]),se!==$){switch($){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=$}},setLocked:function($){U=$},setClear:function($){j!==$&&(ie&&($=1-$),i.clearDepth($),j=$)},reset:function(){U=!1,oe=null,se=null,j=null,ie=!1}}}function s(){let U=!1,ie=null,oe=null,se=null,j=null,$=null,he=null,Ae=null,Ye=null;return{setTest:function(Ze){U||(Ze?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!U&&(i.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Mt,Ft){(oe!==Ze||se!==Mt||j!==Ft)&&(i.stencilFunc(Ze,Mt,Ft),oe=Ze,se=Mt,j=Ft)},setOp:function(Ze,Mt,Ft){($!==Ze||he!==Mt||Ae!==Ft)&&(i.stencilOp(Ze,Mt,Ft),$=Ze,he=Mt,Ae=Ft)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Ye!==Ze&&(i.clearStencil(Ze),Ye=Ze)},reset:function(){U=!1,ie=null,oe=null,se=null,j=null,$=null,he=null,Ae=null,Ye=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,f=[],v=null,_=!1,m=null,d=null,T=null,E=null,y=null,w=null,A=null,R=new qe(0,0,0),L=0,b=!1,S=null,D=null,N=null,G=null,X=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ae=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ae>=1):W.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ae>=2);let le=null,me={},ge=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ke=new dt().fromArray(ge),Qe=new dt().fromArray(ke);function $e(U,ie,oe,se){let j=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<oe;he++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(ie+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return $}let J={};J[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ri),Re(!1),be(Oo),ee(i.CULL_FACE),nt(Dn);function ee(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ue(U,ie){return h[U]!==ie?(i.bindFramebuffer(U,ie),h[U]=ie,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Se(U,ie){let oe=f,se=!1;if(U){oe=p.get(ie),oe===void 0&&(oe=[],p.set(ie,oe));let j=U.textures;if(oe.length!==j.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,he=j.length;$<he;$++)oe[$]=i.COLOR_ATTACHMENT0+$;oe.length=j.length,se=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,se=!0);se&&i.drawBuffers(oe)}function He(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let mt={[Wn]:i.FUNC_ADD,[pl]:i.FUNC_SUBTRACT,[ml]:i.FUNC_REVERSE_SUBTRACT};mt[gl]=i.MIN,mt[vl]=i.MAX;let C={[_l]:i.ZERO,[xl]:i.ONE,[yl]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Al]:i.SRC_ALPHA_SATURATE,[El]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[Ml]:i.ONE_MINUS_SRC_COLOR,[br]:i.ONE_MINUS_SRC_ALPHA,[Tl]:i.ONE_MINUS_DST_COLOR,[bl]:i.ONE_MINUS_DST_ALPHA,[wl]:i.CONSTANT_COLOR,[Cl]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Il]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(U,ie,oe,se,j,$,he,Ae,Ye,Ze){if(U===Dn){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),U!==fl){if(U!==m||Ze!==b){if((d!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,y=Wn),Ze)switch(U){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,E=null,w=null,A=null,R.set(0,0,0),L=0,m=U,b=Ze}return}j=j||ie,$=$||oe,he=he||se,(ie!==d||j!==y)&&(i.blendEquationSeparate(mt[ie],mt[j]),d=ie,y=j),(oe!==T||se!==E||$!==w||he!==A)&&(i.blendFuncSeparate(C[oe],C[se],C[$],C[he]),T=oe,E=se,w=$,A=he),(Ae.equals(R)===!1||Ye!==L)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ye),R.copy(Ae),L=Ye),m=U,b=!1}function Fe(U,ie){U.side===jt?xe(i.CULL_FACE):ee(i.CULL_FACE);let oe=U.side===Dt;ie&&(oe=!oe),Re(oe),U.blending===si&&U.transparent===!1?nt(Dn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let se=U.stencilWrite;o.setTest(se),se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function be(U){U!==hl?(ee(i.CULL_FACE),U!==D&&(U===Oo?i.cullFace(i.BACK):U===dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=U}function it(U){U!==N&&(Y&&i.lineWidth(U),N=U)}function Me(U,ie,oe){U?(ee(i.POLYGON_OFFSET_FILL),(G!==ie||X!==oe)&&(i.polygonOffset(ie,oe),G=ie,X=oe)):xe(i.POLYGON_OFFSET_FILL)}function ze(U){U?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function z(U){U===void 0&&(U=i.TEXTURE0+Z-1),le!==U&&(i.activeTexture(U),le=U)}function K(U,ie,oe){oe===void 0&&(le===null?oe=i.TEXTURE0+Z-1:oe=le);let se=me[oe];se===void 0&&(se={type:void 0,texture:void 0},me[oe]=se),(se.type!==U||se.texture!==ie)&&(le!==oe&&(i.activeTexture(oe),le=oe),i.bindTexture(U,ie||J[U]),se.type=U,se.texture=ie)}function x(){let U=me[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){Ke.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function Ie(U){Qe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Qe.copy(U))}function ye(U,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let se=oe.get(U);se===void 0&&(se=i.getUniformBlockIndex(ie,U.name),oe.set(U,se))}function ce(U,ie){let se=c.get(ie).get(U);l.get(ie)!==se&&(i.uniformBlockBinding(ie,se,U.__bindingPointIndex),l.set(ie,se))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,me={},h={},p=new WeakMap,f=[],v=null,_=!1,m=null,d=null,T=null,E=null,y=null,w=null,A=null,R=new qe(0,0,0),L=0,b=!1,S=null,D=null,N=null,G=null,X=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Ue,drawBuffers:Se,useProgram:He,setBlending:nt,setMaterial:Fe,setFlipSided:Re,setCullFace:be,setLineWidth:it,setPolygonOffset:Me,setScissorTest:ze,activeTexture:z,bindTexture:K,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Te,texImage3D:ne,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:Q,texStorage3D:pe,texSubImage2D:B,texSubImage3D:q,compressedTexSubImage2D:k,compressedTexSubImage3D:te,scissor:ue,viewport:Ie,reset:Oe}}function yg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,h,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return f?new OffscreenCanvas(x,g):ys("canvas")}function _(x,g,I){let B=1,q=K(x);if((q.width>I||q.height>I)&&(B=I/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let k=Math.floor(B*q.width),te=Math.floor(B*q.height);h===void 0&&(h=v(k,te));let Q=g?v(k,te):h;return Q.width=k,Q.height=te,Q.getContext("2d").drawImage(x,0,0,k,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+k+"x"+te+")."),Q}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){i.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(x,g,I,B,q=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let k=g;if(g===i.RED&&(I===i.FLOAT&&(k=i.R32F),I===i.HALF_FLOAT&&(k=i.R16F),I===i.UNSIGNED_BYTE&&(k=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.R8UI),I===i.UNSIGNED_SHORT&&(k=i.R16UI),I===i.UNSIGNED_INT&&(k=i.R32UI),I===i.BYTE&&(k=i.R8I),I===i.SHORT&&(k=i.R16I),I===i.INT&&(k=i.R32I)),g===i.RG&&(I===i.FLOAT&&(k=i.RG32F),I===i.HALF_FLOAT&&(k=i.RG16F),I===i.UNSIGNED_BYTE&&(k=i.RG8)),g===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RG8UI),I===i.UNSIGNED_SHORT&&(k=i.RG16UI),I===i.UNSIGNED_INT&&(k=i.RG32UI),I===i.BYTE&&(k=i.RG8I),I===i.SHORT&&(k=i.RG16I),I===i.INT&&(k=i.RG32I)),g===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGB8UI),I===i.UNSIGNED_SHORT&&(k=i.RGB16UI),I===i.UNSIGNED_INT&&(k=i.RGB32UI),I===i.BYTE&&(k=i.RGB8I),I===i.SHORT&&(k=i.RGB16I),I===i.INT&&(k=i.RGB32I)),g===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),I===i.UNSIGNED_INT&&(k=i.RGBA32UI),I===i.BYTE&&(k=i.RGBA8I),I===i.SHORT&&(k=i.RGBA16I),I===i.INT&&(k=i.RGBA32I)),g===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),g===i.RGBA){let te=q?_s:Je.getTransfer(B);I===i.FLOAT&&(k=i.RGBA32F),I===i.HALF_FLOAT&&(k=i.RGBA16F),I===i.UNSIGNED_BYTE&&(k=te===et?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(x,g){let I;return x?g===null||g===Jn||g===Ji?I=i.DEPTH24_STENCIL8:g===gn?I=i.DEPTH32F_STENCIL8:g===$i&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Jn||g===Ji?I=i.DEPTH_COMPONENT24:g===gn?I=i.DEPTH_COMPONENT32F:g===$i&&(I=i.DEPTH_COMPONENT16),I}function w(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Jt&&x.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function A(x){let g=x.target;g.removeEventListener("dispose",A),L(g),g.isVideoTexture&&u.delete(g)}function R(x){let g=x.target;g.removeEventListener("dispose",R),S(g)}function L(x){let g=n.get(x);if(g.__webglInit===void 0)return;let I=x.source,B=p.get(I);if(B){let q=B[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(x),Object.keys(B).length===0&&p.delete(I)}n.remove(x)}function b(x){let g=n.get(x);i.deleteTexture(g.__webglTexture);let I=x.source,B=p.get(I);delete B[g.__cacheKey],a.memory.textures--}function S(x){let g=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let q=0;q<g.__webglFramebuffer[B].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[B][q]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let I=x.textures;for(let B=0,q=I.length;B<q;B++){let k=n.get(I[B]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(I[B])}n.remove(x)}let D=0;function N(){D=0}function G(){let x=D;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function X(x){let g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function Z(x,g){let I=n.get(x);if(x.isVideoTexture&&ze(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&I.__version!==x.version){let B=x.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,x,g);return}}else x.isExternalTexture&&(I.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function Y(x,g){let I=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){J(I,x,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function ae(x,g){let I=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){J(I,x,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function W(x,g){let I=n.get(x);if(x.version>0&&I.__version!==x.version){ee(I,x,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}let le={[Er]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},me={[Jt]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},ge={[Wl]:i.NEVER,[Jl]:i.ALWAYS,[ql]:i.LESS,[Qo]:i.LEQUAL,[Xl]:i.EQUAL,[Zl]:i.GEQUAL,[Yl]:i.GREATER,[$l]:i.NOTEQUAL};function ke(x,g){if(g.type===gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===la||g.magFilter===Ws||g.magFilter===Zn||g.minFilter===on||g.minFilter===la||g.minFilter===Ws||g.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,le[g.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,le[g.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,le[g.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,me[g.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Jt||g.minFilter!==Ws&&g.minFilter!==Zn||g.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(x,g){let I=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",A));let B=g.source,q=p.get(B);q===void 0&&(q={},p.set(B,q));let k=X(g);if(k!==x.__cacheKey){q[k]===void 0&&(q[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[k].usedTimes++;let te=q[x.__cacheKey];te!==void 0&&(q[x.__cacheKey].usedTimes--,te.usedTimes===0&&b(g)),x.__cacheKey=k,x.__webglTexture=q[k].texture}return I}function Qe(x,g,I){return Math.floor(Math.floor(x/I)/g)}function $e(x,g,I,B){let k=x.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,I,B,g.data);else{k.sort((ne,ue)=>ne.start-ue.start);let te=0;for(let ne=1;ne<k.length;ne++){let ue=k[te],Ie=k[ne],ye=ue.start+ue.count,ce=Qe(Ie.start,g.width,4),Oe=Qe(ue.start,g.width,4);Ie.start<=ye+1&&ce===Oe&&Qe(Ie.start+Ie.count-1,g.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++te,k[te]=Ie)}k.length=te+1;let Q=i.getParameter(i.UNPACK_ROW_LENGTH),pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ne=0,ue=k.length;ne<ue;ne++){let Ie=k[ne],ye=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Oe=ye%g.width,U=Math.floor(ye/g.width),ie=ce,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Oe,U,ie,oe,I,B,g.data)}x.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function J(x,g,I){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);let q=Ke(x,g),k=g.source;t.bindTexture(B,x.__webglTexture,i.TEXTURE0+I);let te=n.get(k);if(k.version!==te.__version||q===!0){t.activeTexture(i.TEXTURE0+I);let Q=Je.getPrimaries(Je.workingColorSpace),pe=g.colorSpace===Un?null:Je.getPrimaries(g.colorSpace),Te=g.colorSpace===Un||Q===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=_(g.image,!1,s.maxTextureSize);ne=z(g,ne);let ue=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),ye=E(g.internalFormat,ue,Ie,g.colorSpace,g.isVideoTexture);ke(B,g);let ce,Oe=g.mipmaps,U=g.isVideoTexture!==!0,ie=te.__version===void 0||q===!0,oe=k.dataReady,se=w(g,ne);if(g.isDepthTexture)ye=y(g.format===Ki,g.type),ie&&(U?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ue,Ie,null));else if(g.isDataTexture)if(Oe.length>0){U&&ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,Oe[0].width,Oe[0].height);for(let j=0,$=Oe.length;j<$;j++)ce=Oe[j],U?oe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,j,ye,ce.width,ce.height,0,ue,Ie,ce.data);g.generateMipmaps=!1}else U?(ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,ne.width,ne.height),oe&&$e(g,ne,ue,Ie)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ue,Ie,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,Oe[0].width,Oe[0].height,ne.depth);for(let j=0,$=Oe.length;j<$;j++)if(ce=Oe[j],g.format!==Qt)if(ue!==null)if(U){if(oe)if(g.layerUpdates.size>0){let he=oc(ce.width,ce.height,g.format,g.type);for(let Ae of g.layerUpdates){let Ye=ce.data.subarray(Ae*he/ce.data.BYTES_PER_ELEMENT,(Ae+1)*he/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ae,ce.width,ce.height,1,ue,Ye)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ne.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ye,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ne.depth,ue,Ie,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ye,ce.width,ce.height,ne.depth,0,ue,Ie,ce.data)}else{U&&ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,Oe[0].width,Oe[0].height);for(let j=0,$=Oe.length;j<$;j++)ce=Oe[j],g.format!==Qt?ue!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,j,ye,ce.width,ce.height,0,ue,Ie,ce.data)}else if(g.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,ne.width,ne.height,ne.depth),oe)if(g.layerUpdates.size>0){let j=oc(ne.width,ne.height,g.format,g.type);for(let $ of g.layerUpdates){let he=ne.data.subarray($*j/ne.data.BYTES_PER_ELEMENT,($+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,ue,Ie,he)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ie,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,ue,Ie,ne.data);else if(g.isData3DTexture)U?(ie&&t.texStorage3D(i.TEXTURE_3D,se,ye,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ie,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,ue,Ie,ne.data);else if(g.isFramebufferTexture){if(ie)if(U)t.texStorage2D(i.TEXTURE_2D,se,ye,ne.width,ne.height);else{let j=ne.width,$=ne.height;for(let he=0;he<se;he++)t.texImage2D(i.TEXTURE_2D,he,ye,j,$,0,ue,Ie,null),j>>=1,$>>=1}}else if(Oe.length>0){if(U&&ie){let j=K(Oe[0]);t.texStorage2D(i.TEXTURE_2D,se,ye,j.width,j.height)}for(let j=0,$=Oe.length;j<$;j++)ce=Oe[j],U?oe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,Ie,ce):t.texImage2D(i.TEXTURE_2D,j,ye,ue,Ie,ce);g.generateMipmaps=!1}else if(U){if(ie){let j=K(ne);t.texStorage2D(i.TEXTURE_2D,se,ye,j.width,j.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ie,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,ue,Ie,ne);m(g)&&d(B),te.__version=k.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ee(x,g,I){if(g.image.length!==6)return;let B=Ke(x,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+I);let k=n.get(q);if(q.version!==k.__version||B===!0){t.activeTexture(i.TEXTURE0+I);let te=Je.getPrimaries(Je.workingColorSpace),Q=g.colorSpace===Un?null:Je.getPrimaries(g.colorSpace),pe=g.colorSpace===Un||te===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=g.isCompressedTexture||g.image[0].isCompressedTexture,ne=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Te&&!ne?ue[$]=_(g.image[$],!0,s.maxCubemapSize):ue[$]=ne?g.image[$].image:g.image[$],ue[$]=z(g,ue[$]);let Ie=ue[0],ye=r.convert(g.format,g.colorSpace),ce=r.convert(g.type),Oe=E(g.internalFormat,ye,ce,g.colorSpace),U=g.isVideoTexture!==!0,ie=k.__version===void 0||B===!0,oe=q.dataReady,se=w(g,Ie);ke(i.TEXTURE_CUBE_MAP,g);let j;if(Te){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Oe,Ie.width,Ie.height);for(let $=0;$<6;$++){j=ue[$].mipmaps;for(let he=0;he<j.length;he++){let Ae=j[he];g.format!==Qt?ye!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ae.width,Ae.height,ye,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ae.width,Ae.height,ye,ce,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Oe,Ae.width,Ae.height,0,ye,ce,Ae.data)}}}else{if(j=g.mipmaps,U&&ie){j.length>0&&se++;let $=K(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ne){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,ye,ce,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ue[$].width,ue[$].height,0,ye,ce,ue[$].data);for(let he=0;he<j.length;he++){let Ye=j[he].image[$].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Ye.width,Ye.height,ye,ce,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Oe,Ye.width,Ye.height,0,ye,ce,Ye.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,ce,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ye,ce,ue[$]);for(let he=0;he<j.length;he++){let Ae=j[he];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,ye,ce,Ae.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Oe,ye,ce,Ae.image[$])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),k.__version=q.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function xe(x,g,I,B,q,k){let te=r.convert(I.format,I.colorSpace),Q=r.convert(I.type),pe=E(I.internalFormat,te,Q,I.colorSpace),Te=n.get(g),ne=n.get(I);if(ne.__renderTarget=g,!Te.__hasExternalTextures){let ue=Math.max(1,g.width>>k),Ie=Math.max(1,g.height>>k);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,k,pe,ue,Ie,g.depth,0,te,Q,null):t.texImage2D(q,k,pe,ue,Ie,0,te,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,q,ne.__webglTexture,0,it(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,q,ne.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(x,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,x),g.depthBuffer){let B=g.depthTexture,q=B&&B.isDepthTexture?B.type:null,k=y(g.stencilBuffer,q),te=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=it(g);Me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,k,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,k,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,k,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,x)}else{let B=g.textures;for(let q=0;q<B.length;q++){let k=B[q],te=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),pe=E(k.internalFormat,te,Q,k.colorSpace),Te=it(g);I&&Me(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,pe,g.width,g.height):Me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,pe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,pe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);let q=B.__webglTexture,k=it(g);if(g.depthTexture.format===ki)Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(g.depthTexture.format===Ki)Me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function He(x){let g=n.get(x),I=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){let B=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=B}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let B=x.texture.mipmaps;B&&B.length>0?Se(g.__webglFramebuffer[0],x):Se(g.__webglFramebuffer,x)}else if(I){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[B],x,!1);else{let q=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,k)}}else{let B=x.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,x,!1);else{let q=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(x,g,I){let B=n.get(x);g!==void 0&&xe(B.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&He(x)}function C(x){let g=x.texture,I=n.get(x),B=n.get(g);x.addEventListener("dispose",R);let q=x.textures,k=x.isWebGLCubeRenderTarget===!0,te=q.length>1;if(te||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,a.memory.textures++),k){I.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[Q]=[];for(let pe=0;pe<g.mipmaps.length;pe++)I.__webglFramebuffer[Q][pe]=i.createFramebuffer()}else I.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)I.__webglFramebuffer[Q]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(te)for(let Q=0,pe=q.length;Q<pe;Q++){let Te=n.get(q[Q]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(x.samples>0&&Me(x)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Q=0;Q<q.length;Q++){let pe=q[Q];I.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[Q]);let Te=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),ue=E(pe.internalFormat,Te,ne,pe.colorSpace,x.isXRRenderTarget===!0),Ie=it(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,I.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)xe(I.__webglFramebuffer[Q][pe],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe);else xe(I.__webglFramebuffer[Q],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let Q=0,pe=q.length;Q<pe;Q++){let Te=q[Q],ne=n.get(Te),ue=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ue=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ke(ue,Te),xe(I.__webglFramebuffer,x,Te,i.COLOR_ATTACHMENT0+Q,ue,0),m(Te)&&d(ue)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Q=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,B.__webglTexture),ke(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)xe(I.__webglFramebuffer[pe],x,g,i.COLOR_ATTACHMENT0,Q,pe);else xe(I.__webglFramebuffer,x,g,i.COLOR_ATTACHMENT0,Q,0);m(g)&&d(Q),t.unbindTexture()}x.depthBuffer&&He(x)}function nt(x){let g=x.textures;for(let I=0,B=g.length;I<B;I++){let q=g[I];if(m(q)){let k=T(x),te=n.get(q).__webglTexture;t.bindTexture(k,te),d(k),t.unbindTexture()}}}let Fe=[],Re=[];function be(x){if(x.samples>0){if(Me(x)===!1){let g=x.textures,I=x.width,B=x.height,q=i.COLOR_BUFFER_BIT,k=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(x),Q=g.length>1;if(Q)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);let pe=x.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);let ne=n.get(g[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,I,B,0,0,I,B,q,i.NEAREST),l===!0&&(Fe.length=0,Re.length=0,Fe.push(i.COLOR_ATTACHMENT0+Te),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Fe.push(k),Re.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);let ne=n.get(g[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let g=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function it(x){return Math.min(s.maxSamples,x.samples)}function Me(x){let g=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ze(x){let g=a.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function z(x,g){let I=x.colorSpace,B=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||I!==ai&&I!==Un&&(Je.getTransfer(I)===et?(B!==Qt||q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function K(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ae,this.setTextureCube=W,this.rebindTextures=mt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me}function Mg(i,e){function t(n,s=Un){let r,a=Je.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===qo)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===$o)return i.ALPHA;if(n===Zo)return i.RGB;if(n===Qt)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===Ko)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===qs||n===Xs||n===Ys||n===$s)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===va||n===_a||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ma)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Ea||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Ia||n===Pa||n===Da||n===La||n===Ua||n===Na||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Va||n===Ha||n===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ps(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:Sg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,v=null,_=typeof XRWebGLBinding<"u",m=new yc,d={},T=t.getContextAttributes(),E=null,y=null,w=[],A=[],R=new we,L=null,b=new At;b.viewport=new dt;let S=new At;S.viewport=new dt;let D=[b,S],N=new jr,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=w[J];return ee===void 0&&(ee=new Xi,w[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=w[J];return ee===void 0&&(ee=new Xi,w[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=w[J];return ee===void 0&&(ee=new Xi,w[J]=ee),ee.getHandSpace()};function Z(J){let ee=A.indexOf(J.inputSource);if(ee===-1)return;let xe=w[ee];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ae);for(let J=0;J<w.length;J++){let ee=A[J];ee!==null&&(A[J]=null,w[J].disconnect(ee))}G=null,X=null,m.reset();for(let J in d)delete d[J];e.setRenderTarget(E),f=null,p=null,h=null,s=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?Ki:ki,Ue=T.stencil?Ji:Jn);let He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new fn(p.textureWidth,p.textureHeight,{format:Qt,type:un,depthTexture:new Is(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(J){for(let ee=0;ee<J.removed.length;ee++){let xe=J.removed[ee],Ue=A.indexOf(xe);Ue>=0&&(A[Ue]=null,w[Ue].disconnect(xe))}for(let ee=0;ee<J.added.length;ee++){let xe=J.added[ee],Ue=A.indexOf(xe);if(Ue===-1){for(let He=0;He<w.length;He++)if(He>=A.length){A.push(xe),Ue=He;break}else if(A[He]===null){A[He]=xe,Ue=He;break}if(Ue===-1)break}let Se=w[Ue];Se&&Se.connect(xe)}}let W=new P,le=new P;function me(J,ee,xe){W.setFromMatrixPosition(ee.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Ue=W.distanceTo(le),Se=ee.projectionMatrix.elements,He=xe.projectionMatrix.elements,mt=Se[14]/(Se[10]-1),C=Se[14]/(Se[10]+1),nt=(Se[9]+1)/Se[5],Fe=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],be=(He[8]+1)/He[0],it=mt*Re,Me=mt*be,ze=Ue/(-Re+be),z=ze*-Re;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(z),J.translateZ(ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let K=mt+ze,x=C+ze,g=it-z,I=Me+(Ue-z),B=nt*C/x*K,q=Fe*C/x*K;J.projectionMatrix.makePerspective(g,I,B,q,K,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),N.near=S.near=b.near=ee,N.far=S.far=b.far=xe,(G!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,X=N.far),N.layers.mask=J.layers.mask|6,b.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let Ue=J.parent,Se=N.cameras;ge(N,Ue);for(let He=0;He<Se.length;He++)ge(Se[He],Ue);Se.length===2?me(N,b,S):N.projectionMatrix.copy(b.projectionMatrix),ke(J,N,Ue)};function ke(J,ee,xe){xe===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return d[J]};let Ke=null;function Qe(J,ee){if(u=ee.getViewerPose(c||a),v=ee,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let C=0;C<xe.length;C++){let nt=xe[C],Fe=null;if(f!==null)Fe=f.getViewport(nt);else{let be=h.getViewSubImage(p,nt);Fe=be.viewport,C===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let Re=D[C];Re===void 0&&(Re=new At,Re.layers.enable(C),Re.viewport=new dt,D[C]=Re),Re.matrix.fromArray(nt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(nt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),C===0&&(N.matrix.copy(Re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Re)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let C=h.getDepthInformation(xe[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<xe.length;C++){let nt=xe[C].camera;if(nt){let Fe=d[nt];Fe||(Fe=new Ps,d[nt]=Fe);let Re=h.getCameraImage(nt);Fe.sourceTexture=Re}}}}for(let xe=0;xe<w.length;xe++){let Ue=A[xe],Se=w[xe];Ue!==null&&Se!==void 0&&Se.update(Ue,ee,c||a)}Ke&&Ke(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}let $e=new Tu;$e.setAnimationLoop(Qe),this.setAnimationLoop=function(J){Ke=J},this.dispose=function(){}}},vi=new cn,Eg=new ht;function Tg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ic(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=e.get(d),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(vi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ag(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=s[T.id];y===void 0&&(v(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",m));let w=E.program;n.updateUBOMapping(T,w);let A=e.render.frame;r[T.id]!==A&&(p(T),r[T.id]=A)}function u(T){let E=h();T.__bindingPointIndex=E;let y=i.createBuffer(),w=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let E=s[T.id],y=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=y.length;A<R;A++){let L=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,S=L.length;b<S;b++){let D=L[b];if(f(D,A,b,w)===!0){let N=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],X=0;for(let Z=0;Z<G.length;Z++){let Y=G[Z],ae=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,N+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,y,w){let A=T.value,R=E+"_"+y;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{let L=w[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(T){let E=T.uniforms,y=0,w=16;for(let R=0,L=E.length;R<L;R++){let b=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,D=b.length;S<D;S++){let N=b[S],G=Array.isArray(N.value)?N.value:[N.value];for(let X=0,Z=G.length;X<Z;X++){let Y=G[X],ae=_(Y),W=y%w,le=W%ae.boundary,me=W+le;y+=le,me!==0&&w-me<ae.storage&&(y+=w-me),N.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=ae.storage}}}let A=y%w;return A>0&&(y+=w-A),T.__size=y,T.__cache={},this}function _(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var $a=class{constructor(e={}){let{canvas:t=Kl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Tt;let A=0,R=0,L=null,b=-1,S=null,D=new dt,N=new dt,G=null,X=new qe(0),Z=0,Y=t.width,ae=t.height,W=1,le=null,me=null,ge=new dt(0,0,Y,ae),ke=new dt(0,0,Y,ae),Ke=!1,Qe=new Yi,$e=!1,J=!1,ee=new ht,xe=new P,Ue=new dt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function mt(){return L===null?W:1}let C=n;function nt(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",j,!1),C===null){let F="webgl2";if(C=nt(F,M),C===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,Re,be,it,Me,ze,z,K,x,g,I,B,q,k,te,Q,pe,Te,ne,ue,Ie,ye,ce,Oe;function U(){Fe=new Wp(C),Fe.init(),ye=new Mg(C,Fe),Re=new Op(C,Fe,e,ye),be=new xg(C,Fe),Re.reversedDepthBuffer&&p&&be.buffers.depth.setReversed(!0),it=new Yp(C),Me=new ag,ze=new yg(C,Fe,be,Me,Re,ye,it),z=new zp(y),K=new Gp(y),x=new jh(C),ce=new Np(C,x),g=new qp(C,x,it,ce),I=new Zp(C,g,x,it),ne=new $p(C,Re,ze),Q=new Bp(Me),B=new rg(y,z,K,Fe,Re,ce,Q),q=new Tg(y,Me),k=new cg,te=new pg(Fe),Te=new Up(y,z,K,be,I,f,l),pe=new vg(y,I,Re),Oe=new Ag(C,it,Re,be),ue=new Fp(C,Fe,it),Ie=new Xp(C,Fe,it),it.programs=B.programs,y.capabilities=Re,y.extensions=Fe,y.properties=Me,y.renderLists=k,y.shadowMap=pe,y.state=be,y.info=it}U();let ie=new Mc(y,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(Y,ae,!1))},this.getSize=function(M){return M.set(Y,ae)},this.setSize=function(M,F,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,ae=F,t.width=Math.floor(M*W),t.height=Math.floor(F*W),V===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Y*W,ae*W).floor()},this.setDrawingBufferSize=function(M,F,V){Y=M,ae=F,W=V,t.width=Math.floor(M*V),t.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,F,V,H){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,F,V,H),be.viewport(D.copy(ge).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,F,V,H){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,F,V,H),be.scissor(N.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){be.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){me=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,V=!0){let H=0;if(M){let O=!1;if(L!==null){let re=L.texture.format;O=re===ma||re===pa||re===fa}if(O){let re=L.texture.type,fe=re===un||re===Jn||re===$i||re===Ji||re===ha||re===da,Ee=Te.getClearColor(),_e=Te.getClearAlpha(),Le=Ee.r,Ne=Ee.g,Ce=Ee.b;fe?(v[0]=Le,v[1]=Ne,v[2]=Ce,v[3]=_e,C.clearBufferuiv(C.COLOR,0,v)):(_[0]=Le,_[1]=Ne,_[2]=Ce,_[3]=_e,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}F&&(H|=C.DEPTH_BUFFER_BIT),V&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Te.dispose(),k.dispose(),te.dispose(),Me.dispose(),z.dispose(),K.dispose(),I.dispose(),ce.dispose(),Oe.dispose(),B.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ft),ie.removeEventListener("sessionend",Fc),Kn.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=it.autoReset,F=pe.enabled,V=pe.autoUpdate,H=pe.needsUpdate,O=pe.type;U(),it.autoReset=M,pe.enabled=F,pe.autoUpdate=V,pe.needsUpdate=H,pe.type=O}function j(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $(M){let F=M.target;F.removeEventListener("dispose",$),he(F)}function he(M){Ae(M),Me.remove(M)}function Ae(M){let F=Me.get(M).programs;F!==void 0&&(F.forEach(function(V){B.releaseProgram(V)}),M.isShaderMaterial&&B.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,H,O,re){F===null&&(F=Se);let fe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=Wu(M,F,V,H,O);be.setMaterial(H,fe);let _e=V.index,Le=1;if(H.wireframe===!0){if(_e=g.getWireframeAttribute(V),_e===void 0)return;Le=2}let Ne=V.drawRange,Ce=V.attributes.position,Xe=Ne.start*Le,tt=(Ne.start+Ne.count)*Le;re!==null&&(Xe=Math.max(Xe,re.start*Le),tt=Math.min(tt,(re.start+re.count)*Le)),_e!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,_e.count)):Ce!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Ce.count));let pt=tt-Xe;if(pt<0||pt===1/0)return;ce.setup(O,H,Ee,V,_e);let rt,st=ue;if(_e!==null&&(rt=x.get(_e),st=Ie,st.setIndex(rt)),O.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*mt()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(O.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*mt()),O.isLineSegments?st.setMode(C.LINES):O.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else O.isPoints?st.setMode(C.POINTS):O.isSprite&&st.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pe=O._multiDrawStarts,lt=O._multiDrawCounts,je=O._multiDrawCount,Ot=_e?x.get(_e).bytesPerElement:1,Ti=Me.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)Ti.setValue(C,"_gl_DrawID",Bt),st.render(Pe[Bt]/Ot,lt[Bt])}else if(O.isInstancedMesh)st.renderInstances(Xe,pt,O.count);else if(V.isInstancedBufferGeometry){let Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,lt=Math.min(V.instanceCount,Pe);st.renderInstances(Xe,pt,lt)}else st.render(Xe,pt)};function Ye(M,F,V){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,tr(M,F,V),M.side=wn,M.needsUpdate=!0,tr(M,F,V),M.side=jt):tr(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),d=te.get(V),d.init(F),E.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let H=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){let Ee=re[fe];Ye(Ee,V,O),H.add(Ee)}else Ye(re,V,O),H.add(re)}),d=E.pop(),H},this.compileAsync=function(M,F,V=null){let H=this.compile(M,F,V);return new Promise(O=>{function re(){if(H.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){O(M);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ze=null;function Mt(M){Ze&&Ze(M)}function Ft(){Kn.stop()}function Fc(){Kn.start()}let Kn=new Tu;Kn.setAnimationLoop(Mt),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){Ze=M,ie.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},ie.addEventListener("sessionstart",Ft),ie.addEventListener("sessionend",Fc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,L),d=te.get(M,E.length),d.init(F),E.push(d),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(ee,an,F.reversedDepth),J=this.localClippingEnabled,$e=Q.init(this.clippingPlanes,J),m=k.get(M,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&eo(re,F,-1/0,y.sortObjects)}eo(M,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,me),He=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,He&&Te.addToRenderList(m,M),this.info.render.frame++,$e===!0&&Q.beginShadows();let V=d.state.shadowsArray;pe.render(V,M,F),$e===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){let re=F.cameras;if(O.length>0)for(let fe=0,Ee=re.length;fe<Ee;fe++){let _e=re[fe];Bc(H,O,M,_e)}He&&Te.render(M);for(let fe=0,Ee=re.length;fe<Ee;fe++){let _e=re[fe];Oc(m,M,_e,_e.viewport)}}else O.length>0&&Bc(H,O,M,F),He&&Te.render(M),Oc(m,M,F);L!==null&&R===0&&(ze.updateMultisampleRenderTarget(L),ze.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(y,M,F),ce.resetDefaultState(),b=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],$e===!0&&Q.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function eo(M,F,V,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Qe.intersectsSprite(M)){H&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);let fe=I.update(M),Ee=M.material;Ee.visible&&m.push(M,fe,Ee,V,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Qe.intersectsObject(M))){let fe=I.update(M),Ee=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ee)),Array.isArray(Ee)){let _e=fe.groups;for(let Le=0,Ne=_e.length;Le<Ne;Le++){let Ce=_e[Le],Xe=Ee[Ce.materialIndex];Xe&&Xe.visible&&m.push(M,fe,Xe,V,Ue.z,Ce)}}else Ee.visible&&m.push(M,fe,Ee,V,Ue.z,null)}}let re=M.children;for(let fe=0,Ee=re.length;fe<Ee;fe++)eo(re[fe],F,V,H)}function Oc(M,F,V,H){let O=M.opaque,re=M.transmissive,fe=M.transparent;d.setupLightsView(V),$e===!0&&Q.setGlobalState(y.clippingPlanes,V),H&&be.viewport(D.copy(H)),O.length>0&&er(O,F,V),re.length>0&&er(re,F,V),fe.length>0&&er(fe,F,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Bc(M,F,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Zi:un,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=d.state.transmissionRenderTarget[H.id],fe=H.viewport||D;re.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let Ee=y.getRenderTarget(),_e=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(re),y.getClearColor(X),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),He&&Te.render(V);let Ne=y.toneMapping;y.toneMapping=Ln;let Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),$e===!0&&Q.setGlobalState(y.clippingPlanes,H),er(M,V,H),ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,pt=F.length;tt<pt;tt++){let rt=F[tt],st=rt.object,Pe=rt.geometry,lt=rt.material,je=rt.group;if(lt.side===jt&&st.layers.test(H.layers)){let Ot=lt.side;lt.side=Dt,lt.needsUpdate=!0,zc(st,V,H,Pe,lt,je),lt.side=Ot,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re))}y.setRenderTarget(Ee,_e,Le),y.setClearColor(X,Z),Ce!==void 0&&(H.viewport=Ce),y.toneMapping=Ne}function er(M,F,V){let H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=M.length;O<re;O++){let fe=M[O],Ee=fe.object,_e=fe.geometry,Le=fe.group,Ne=fe.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),Ee.layers.test(V.layers)&&zc(Ee,F,V,_e,Ne,Le)}}function zc(M,F,V,H,O,re){M.onBeforeRender(y,F,V,H,O,re),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,F,V,H,M,re),O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,y.renderBufferDirect(V,F,H,O,M,re),O.side=wn,O.needsUpdate=!0,y.renderBufferDirect(V,F,H,O,M,re),O.side=jt):y.renderBufferDirect(V,F,H,O,M,re),M.onAfterRender(y,F,V,H,O,re)}function tr(M,F,V){F.isScene!==!0&&(F=Se);let H=Me.get(M),O=d.state.lights,re=d.state.shadowsArray,fe=O.state.version,Ee=B.getParameters(M,O.state,re,F,V),_e=B.getProgramCacheKey(Ee),Le=H.programs;H.environment=M.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(M.isMeshStandardMaterial?K:z).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",$),Le=new Map,H.programs=Le);let Ne=Le.get(_e);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===fe)return Vc(M,Ee),Ne}else Ee.uniforms=B.getUniforms(M),M.onBeforeCompile(Ee,y),Ne=B.acquireProgram(Ee,_e),Le.set(_e,Ne),H.uniforms=Ee.uniforms;let Ce=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Q.uniform),Vc(M,Ee),H.needsLights=Xu(M),H.lightsStateVersion=fe,H.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function kc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=ts.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Vc(M,F){let V=Me.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Wu(M,F,V,H,O){F.isScene!==!0&&(F=Se),ze.resetTextureUnits();let re=F.fog,fe=H.isMeshStandardMaterial?F.environment:null,Ee=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ai,_e=(H.isMeshStandardMaterial?K:z).get(H.envMap||fe),Le=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color,pt=Ln;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=y.toneMapping);let rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=rt!==void 0?rt.length:0,Pe=Me.get(H),lt=d.state.lights;if($e===!0&&(J===!0||M!==S)){let It=M===S&&H.id===b;Q.setState(H,M,It)}let je=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==lt.state.version||Pe.outputColorSpace!==Ee||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==_e||H.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ne||Pe.morphTargets!==Ce||Pe.morphNormals!==Xe||Pe.morphColors!==tt||Pe.toneMapping!==pt||Pe.morphTargetsCount!==st)&&(je=!0):(je=!0,Pe.__version=H.version);let Ot=Pe.currentProgram;je===!0&&(Ot=tr(H,F,O));let Ti=!1,Bt=!1,cs=!1,ut=Ot.getUniforms(),Yt=Pe.uniforms;if(be.useProgram(Ot.program)&&(Ti=!0,Bt=!0,cs=!0),H.id!==b&&(b=H.id,Bt=!0),Ti||S!==M){be.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",M.projectionMatrix),ut.setValue(C,"viewMatrix",M.matrixWorldInverse);let Lt=ut.map.cameraPosition;Lt!==void 0&&Lt.setValue(C,xe.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Bt=!0,cs=!0)}if(O.isSkinnedMesh){ut.setOptional(C,O,"bindMatrix"),ut.setOptional(C,O,"bindMatrixInverse");let It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(C,"boneTexture",It.boneTexture,ze))}O.isBatchedMesh&&(ut.setOptional(C,O,"batchingTexture"),ut.setValue(C,"batchingTexture",O._matricesTexture,ze),ut.setOptional(C,O,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",O._indirectTexture,ze),ut.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",O._colorsTexture,ze));let $t=V.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ne.update(O,V,Ot),(Bt||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,ut.setValue(C,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Yt.envMap.value=_e,Yt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),Bt&&(ut.setValue(C,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&qu(Yt,cs),re&&H.fog===!0&&q.refreshFogUniforms(Yt,re),q.refreshMaterialUniforms(Yt,H,W,ae,d.state.transmissionRenderTarget[M.id]),ts.upload(C,kc(Pe),Yt,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ts.upload(C,kc(Pe),Yt,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(C,"center",O.center),ut.setValue(C,"modelViewMatrix",O.modelViewMatrix),ut.setValue(C,"normalMatrix",O.normalMatrix),ut.setValue(C,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let It=H.uniformsGroups;for(let Lt=0,to=It.length;Lt<to;Lt++){let jn=It[Lt];Oe.update(jn,Ot),Oe.bind(jn,Ot)}}return Ot}function qu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Xu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,V){let H=Me.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Me.get(M.texture).__webglTexture=F,Me.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let V=Me.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let Yu=C.createFramebuffer();this.setRenderTarget=function(M,F=0,V=0){L=M,A=F,R=V;let H=!0,O=null,re=!1,fe=!1;if(M){let _e=Me.get(M);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(_e.__hasExternalTextures)ze.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ce=M.depthTexture;if(_e.__boundDepthTexture!==Ce){if(Ce!==null&&Me.has(Ce)&&(M.width!==Ce.image.width||M.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}let Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Ne=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][V]:O=Ne[F],re=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?O=Me.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[V]:O=Ne,D.copy(M.viewport),N.copy(M.scissor),G=M.scissorTest}else D.copy(ge).multiplyScalar(W).floor(),N.copy(ke).multiplyScalar(W).floor(),G=Ke;if(V!==0&&(O=Yu),be.bindFramebuffer(C.FRAMEBUFFER,O)&&H&&be.drawBuffers(M,O),be.viewport(D),be.scissor(N),be.setScissorTest(G),re){let _e=Me.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,V)}else if(fe){let _e=F;for(let Le=0;Le<M.textures.length;Le++){let Ne=Me.get(M.textures[Le]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,V,_e)}}else if(M!==null&&V!==0){let _e=Me.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(M,F,V,H,O,re,fe,Ee=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){be.bindFramebuffer(C.FRAMEBUFFER,_e);try{let Le=M.textures[Ee],Ne=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&V>=0&&V<=M.height-O&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(F,V,H,O,ye.convert(Ne),ye.convert(Ce),re))}finally{let Le=L!==null?Me.get(L).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,H,O,re,fe,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e)if(F>=0&&F<=M.width-H&&V>=0&&V<=M.height-O){be.bindFramebuffer(C.FRAMEBUFFER,_e);let Le=M.textures[Ee],Ne=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(F,V,H,O,ye.convert(Ne),ye.convert(Ce),0);let tt=L!==null?Me.get(L).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,tt);let pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jl(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(Xe),C.deleteSync(pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,V=0){let H=Math.pow(2,-V),O=Math.floor(M.image.width*H),re=Math.floor(M.image.height*H),fe=F!==null?F.x:0,Ee=F!==null?F.y:0;ze.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,fe,Ee,O,re),be.unbindTexture()};let $u=C.createFramebuffer(),Zu=C.createFramebuffer();this.copyTextureToTexture=function(M,F,V=null,H=null,O=0,re=null){re===null&&(O!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let fe,Ee,_e,Le,Ne,Ce,Xe,tt,pt,rt=M.isCompressedTexture?M.mipmaps[re]:M.image;if(V!==null)fe=V.max.x-V.min.x,Ee=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Ne=V.min.y,Ce=V.isBox3?V.min.z:0;else{let $t=Math.pow(2,-O);fe=Math.floor(rt.width*$t),Ee=Math.floor(rt.height*$t),M.isDataArrayTexture?_e=rt.depth:M.isData3DTexture?_e=Math.floor(rt.depth*$t):_e=1,Le=0,Ne=0,Ce=0}H!==null?(Xe=H.x,tt=H.y,pt=H.z):(Xe=0,tt=0,pt=0);let st=ye.convert(F.format),Pe=ye.convert(F.type),lt;F.isData3DTexture?(ze.setTexture3D(F,0),lt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),lt=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let je=C.getParameter(C.UNPACK_ROW_LENGTH),Ot=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ti=C.getParameter(C.UNPACK_SKIP_PIXELS),Bt=C.getParameter(C.UNPACK_SKIP_ROWS),cs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ne),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let ut=M.isDataArrayTexture||M.isData3DTexture,Yt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let $t=Me.get(M),It=Me.get(F),Lt=Me.get($t.__renderTarget),to=Me.get(It.__renderTarget);be.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,to.__webglFramebuffer);for(let jn=0;jn<_e;jn++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(M).__webglTexture,O,Ce+jn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(F).__webglTexture,re,pt+jn)),C.blitFramebuffer(Le,Ne,fe,Ee,Xe,tt,fe,Ee,C.DEPTH_BUFFER_BIT,C.NEAREST);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Me.has(M)){let $t=Me.get(M),It=Me.get(F);be.bindFramebuffer(C.READ_FRAMEBUFFER,$u),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zu);for(let Lt=0;Lt<_e;Lt++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$t.__webglTexture,O,Ce+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$t.__webglTexture,O),Yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,re,pt+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,It.__webglTexture,re),O!==0?C.blitFramebuffer(Le,Ne,fe,Ee,Xe,tt,fe,Ee,C.COLOR_BUFFER_BIT,C.NEAREST):Yt?C.copyTexSubImage3D(lt,re,Xe,tt,pt+Lt,Le,Ne,fe,Ee):C.copyTexSubImage2D(lt,re,Xe,tt,Le,Ne,fe,Ee);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(lt,re,Xe,tt,pt,fe,Ee,_e,st,Pe,rt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,re,Xe,tt,pt,fe,Ee,_e,st,rt.data):C.texSubImage3D(lt,re,Xe,tt,pt,fe,Ee,_e,st,Pe,rt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,re,Xe,tt,fe,Ee,st,Pe,rt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,re,Xe,tt,rt.width,rt.height,st,rt.data):C.texSubImage2D(C.TEXTURE_2D,re,Xe,tt,fe,Ee,st,Pe,rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ot),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ti),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,cs),re===0&&F.generateMipmaps&&C.generateMipmap(lt),be.unbindTexture()},this.initRenderTarget=function(M){Me.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,be.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Ja=class{constructor(e,t=[]){this.camera=e,this.obstacles=t,this.yaw=0,this.pitch=.4,this.distance=8,this.actualDistance=8,this.target=new P,this.initialized=!1,this.ray=new hi,this.ray.near=0,this.offset=new P,this.direction=new P,this.origin=new P,this.right=new P,this.up=new P,this.focus=new P,this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]]}rotate(e,t){this.yaw=pi.euclideanModulo(this.yaw-e*.006+Math.PI,Math.PI*2)-Math.PI,this.pitch=pi.clamp(this.pitch+t*.004,.16,1.08)}zoom(e){Number.isFinite(e)&&e>0&&(this.distance=pi.clamp(this.distance*e,4,15))}recenter(e=Math.PI){this.yaw=e-Math.PI,this.pitch=.4}movement(e,t){let n=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*n+t*s,z:-e*s+t*n}}update(e,t,{snap:n=!1,reducedMotion:s=!1}={}){this.focus.copy(e),this.focus.y+=1.35,n||!this.initialized||s?this.target.copy(this.focus):this.target.lerp(this.focus,1-Math.exp(-14*t)),this.initialized=!0;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.sin(this.pitch),l=Math.cos(this.pitch);this.direction.set(r*l,o,a*l),this.right.set(a,0,-r),this.up.set(-r*o,l,-a*o);let c=this.distance;for(let[u,h]of this.sampleOffsets){this.origin.copy(this.target).addScaledVector(this.right,u).addScaledVector(this.up,h),this.ray.set(this.origin,this.direction),this.ray.far=this.distance+.35;let p=this.ray.intersectObjects(this.obstacles,!1)[0];p&&(c=Math.min(c,Math.max(.6,p.distance-.4)))}n||c<this.actualDistance||s?this.actualDistance=c:this.actualDistance=pi.lerp(this.actualDistance,c,1-Math.exp(-5*t)),this.offset.copy(this.direction).multiplyScalar(this.actualDistance),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}};function Iu(i,e,{onTap:t=()=>{},blocked:n=()=>!1}={}){let s=new Map,r=0,a=()=>{let[f,v]=[...s.values()];return f&&v?Math.hypot(f.x-v.x,f.y-v.y):0},o=f=>{n()||f.button===1||(f.preventDefault(),s.set(f.pointerId,{x:f.clientX,y:f.clientY,startX:f.clientX,startY:f.clientY,button:f.button,moved:!1}),i.setPointerCapture?.(f.pointerId),s.size>1&&(s.forEach(v=>v.moved=!0),r=a()))},l=f=>{let v=s.get(f.pointerId);if(!v||n())return;f.preventDefault();let _=f.clientX-v.x,m=f.clientY-v.y;if(v.x=f.clientX,v.y=f.clientY,s.size>1){let d=a();r>0&&d>0&&e.zoom(r/d),r=d;return}!v.moved&&Math.hypot(v.x-v.startX,v.y-v.startY)>5?(v.moved=!0,e.rotate(v.x-v.startX,v.y-v.startY)):v.moved&&e.rotate(_,m)},c=f=>{let v=s.get(f.pointerId);if(!v)return;s.delete(f.pointerId),r=0;let _=v.moved||Math.hypot(f.clientX-v.startX,f.clientY-v.startY)>5;f.type==="pointerup"&&!_&&v.button===0&&!n()&&t(f.clientX,f.clientY),i.hasPointerCapture?.(f.pointerId)&&i.releasePointerCapture(f.pointerId)},u=f=>{n()||(f.preventDefault(),e.zoom(Math.exp(pi.clamp(f.deltaY,-200,200)*.0015)))},h=f=>f.preventDefault(),p=()=>{s.clear(),r=0};i.addEventListener("pointerdown",o),i.addEventListener("pointermove",l);for(let f of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(f,c);return i.addEventListener("wheel",u,{passive:!1}),i.addEventListener("contextmenu",h),{cancel:p}}var Js=new P;function en(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Js.copy(e),Js[n]=0,Js.normalize();let c=.5*a/(a+o),u=1-Js.angleTo(i)/l;return Math.sign(Js[t])===1?u*c:o/(a+o)+c+c*(1-u)}var Ka=class i extends pn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,v=h.length/6,_=new P,m=.5/a;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*r,h[d+1]=u.y*Math.sign(l.y)+c.y*r,h[d+2]=u.z*Math.sign(l.z)+c.z*r,p[d+0]=c.x,p[d+1]=c.y,p[d+2]=c.z,Math.floor(d/v)){case 0:_.set(1,0,0),f[T+0]=en(_,c,"z","y",r,n),f[T+1]=1-en(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[T+0]=1-en(_,c,"z","y",r,n),f[T+1]=1-en(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[T+0]=1-en(_,c,"x","z",r,e),f[T+1]=en(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[T+0]=1-en(_,c,"x","z",r,e),f[T+1]=1-en(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[T+0]=1-en(_,c,"x","y",r,e),f[T+1]=1-en(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[T+0]=en(_,c,"x","y",r,e),f[T+1]=1-en(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var wg={height:2.84,torsoWidth:1.04,torsoHeight:1.04,armWidth:.48,armHeight:1.02,legWidth:.48,legHeight:1,headWidth:.76,headHeight:.68,footBottom:0},Ec=new Map;function Pu(i="#527f65",e="#d3a077",t="#44372d",n=null){let s=n||(_=>new li({color:_,roughness:.58,metalness:0})),r=new wt,a=[],o=[];function l(_,m,d,T,E,y,w,A,R=r,L=.035){let b=[m,d,T,L].join(",");Ec.has(b)||Ec.set(b,new Ka(m,d,T,1,L));let S=new ct(Ec.get(b),s(E));return S.name=_,S.position.set(y,w,A),S.castShadow=!0,S.receiveShadow=!0,R.add(S),S}let c=l("avatar-torso",1.04,1.04,.56,i,0,1.52,0);o.push(c);let u=new ct(new Pn(.17,.17,.12,12),s(e));u.position.y=2.08,u.castShadow=!0,r.add(u);let h=new ct(new Pn(.38,.38,.68,16),s(e));h.name="avatar-head",h.position.set(0,2.44,0),h.castShadow=!0,h.receiveShadow=!0,r.add(h),l("avatar-hair",.79,.14,.73,t,0,2.77,-.025,r,.06),l("avatar-hair-back",.72,.27,.17,t,0,2.63,-.3,r,.03),l("avatar-hair-fringe",.39,.11,.12,t,-.15,2.7,.31,r,.025);for(let _ of[-1,1]){let m=new wt;m.name=_<0?"avatar-arm-left":"avatar-arm-right",m.position.set(_*.78,2.03,0),r.add(m),o.push(l("avatar-sleeve",.48,.72,.56,i,0,-.36,0,m)),l("avatar-hand",.46,.3,.54,e,0,-.87,0,m);let d=new wt;d.name=_<0?"avatar-leg-left":"avatar-leg-right",d.position.set(_*.265,1,0),r.add(d),l("avatar-trouser",.48,.91,.54,"#344855",0,-.455,0,d),l("avatar-shoe",.5,.16,.64,"#f4f2e8",0,-.92,.045,d,.025),l("avatar-shoe-sole",.51,.045,.65,"#c9cec4",0,-.9775,.045,d,.012),a.push(m,d)}for(let _ of[-1,1]){let m=new ct(new Fs(.043,8,6),s("#292c2c"));m.scale.set(1,1.2,.35),m.position.set(_*.13,2.47,.36),r.add(m)}let p=new oi(new P(-.14,2.34,.36),new P(0,2.23,.39),new P(.14,2.34,.36)),f=new ct(new Os(p,12,.012,5,!1),s("#694634"));r.add(f),l("avatar-pocket",.25,.25,.025,"#b9d4ab",.245,1.68,.293,r,.016),l("avatar-badge",.15,.065,.014,"#f1f5dc",.245,1.72,.313,r,.006),l("avatar-shirt-seam",.015,.68,.012,"#719479",0,1.54,.285,r,.004);let v=new ct(new Ds(.74,24),new In({color:"#53694a",transparent:!0,opacity:.16,depthWrite:!1}));return v.rotation.x=-Math.PI/2,v.position.y=.012,r.add(v),r.userData.bodyHeight=wg.height,{group:r,torso:c,limbs:a,shirtMeshes:o}}var ft=[],De=(i,e,t,n,s,r="")=>ft.push({id:ft.length+1,title:i,category:e,level:Math.floor(ft.length/10)+1,symptom:t,steps:n,confirm:s,note:r});De("Computador n\xE3o liga ao apertar Power","Energia","Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o bot\xE3o.",[["Tomada sem energia","Teste a tomada com um aparelho que voc\xEA sabe que funciona; n\xE3o introduza objetos nela.","Use outra tomada comprovadamente energizada. Se houver defeito na instala\xE7\xE3o, chame o respons\xE1vel."],["Cabo de for\xE7a desconectado da tomada","Observe se o plugue est\xE1 encaixado na tomada ou no filtro de linha.","Conecte o cabo corretamente; se usar filtro de linha, confira se ele est\xE1 ligado."],["Cabo desconectado da fonte","Observe a conex\xE3o na parte traseira do gabinete.","Com a alimenta\xE7\xE3o desligada, encaixe o cabo firmemente na fonte."],["Interruptor traseiro da fonte desligado","Se houver chave I/O, veja se est\xE1 em O. I/O n\xE3o \xE9 o seletor 115/230 V.","Coloque a chave I/O em I. Nunca mude o seletor de tens\xE3o por tentativa."],["Cabo de for\xE7a danificado","Inspecione o cabo desligado. Se n\xE3o houver dano vis\xEDvel, compare com outro compat\xEDvel e comprovadamente bom.","Substitua o cabo danificado ou que falhou no teste."],["Fonte ausente ou conex\xF5es internas soltas","Com o professor e o PC fora da tomada, confirme a presen\xE7a da fonte e os conectores da placa-m\xE3e, conforme o manual.","Se faltar fonte, instale uma compat\xEDvel. Se houver conex\xE3o solta, reconecte o conector correto."],["Falha da fonte, bot\xE3o ou placa-m\xE3e","Depois das etapas anteriores, o professor testa uma fonte compat\xEDvel conhecida e verifica o cabo do bot\xE3o no manual.","Substitua apenas a pe\xE7a cuja falha foi isolada. Encaminhe a placa-m\xE3e para diagn\xF3stico se persistir."]],"O computador volta a responder ao Power e come\xE7a a inicializa\xE7\xE3o.","Abrir a fonte n\xE3o faz parte do diagn\xF3stico. Ventoinha da fonte parada, sozinha, n\xE3o comprova defeito: alguns modelos t\xEAm modo sem rota\xE7\xE3o.");De("Monitor n\xE3o acende","V\xEDdeo","O monitor n\xE3o mostra imagem nem seu pr\xF3prio menu.",[["Monitor desligado","Aperte o bot\xE3o do monitor e procure o LED de energia.","Ligue o monitor."],["Cabo de energia mal conectado","Inspecione os dois extremos do cabo e a tomada.","Reconecte o cabo e use tomada energizada."],["Fonte externa ou cabo defeituoso","Se o monitor usa adaptador, compare apenas com modelo de tens\xE3o, polaridade e corrente compat\xEDveis.","Substitua o cabo ou adaptador cuja falha foi confirmada."],["Falha no monitor","Teste o monitor em outro computador e tente abrir o menu sem o cabo de v\xEDdeo.","Se continuar sem menu nem alimenta\xE7\xE3o, encaminhe para reparo ou substitua."]],"O menu pr\xF3prio do monitor aparece e o LED indica alimenta\xE7\xE3o.","N\xE3o abra o monitor: h\xE1 circuitos com tens\xE3o perigosa.");De("PC liga, mas o monitor mostra \u201Csem sinal\u201D","V\xEDdeo","H\xE1 luzes ou ventoinhas no gabinete, mas o monitor n\xE3o recebe v\xEDdeo.",[["Entrada de v\xEDdeo incorreta","Abra o menu do monitor e compare a entrada selecionada com o cabo usado.","Selecione HDMI, DisplayPort ou outra entrada realmente conectada."],["Cabo de v\xEDdeo solto ou defeituoso","Confira as duas pontas; teste outro cabo compat\xEDvel.","Reconecte ou substitua o cabo que falhou."],["Cabo na sa\xEDda de v\xEDdeo errada","Se h\xE1 placa de v\xEDdeo dedicada, confira se o cabo est\xE1 ligado nela. A sa\xEDda da placa-m\xE3e depende de v\xEDdeo integrado e configura\xE7\xE3o.","Conecte \xE0 sa\xEDda adequada ao conjunto instalado."],["Falha do monitor ou aus\xEAncia de POST","Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagn\xF3stico e consulte o caso 41.","Isole primeiro monitor/cabo; com o professor, investigue mem\xF3ria e v\xEDdeo se o PC n\xE3o concluir o autoteste."]],"A imagem de inicializa\xE7\xE3o aparece e o sistema pode ser exibido.","Ventoinhas girando n\xE3o garantem que o computador concluiu o POST.");De("Imagem pisca ou some durante o uso","V\xEDdeo","A tela perde a imagem por instantes, embora o computador continue funcionando.",[["Conex\xE3o frouxa","Confira se o cabo est\xE1 firme nas duas pontas, sem pux\xE1-lo lateralmente.","Reconecte e deixe folga no cabo."],["Cabo ou adaptador com defeito","Teste conex\xE3o direta e outro cabo compat\xEDvel com a resolu\xE7\xE3o usada.","Troque o cabo/adaptador que reproduz a falha."],["Resolu\xE7\xE3o ou frequ\xEAncia inadequada","Compare os ajustes de tela com as especifica\xE7\xF5es do monitor.","Use uma resolu\xE7\xE3o e frequ\xEAncia suportadas."],["Driver ou hardware de v\xEDdeo inst\xE1vel","Observe se come\xE7ou ap\xF3s atualiza\xE7\xE3o; compare com outro monitor e consulte os casos 37 e 44.","Reinstale ou reverta o driver oficial se houver rela\xE7\xE3o. Se persistir, pe\xE7a diagn\xF3stico da GPU."]],"A imagem permanece est\xE1vel no mesmo per\xEDodo e tarefa que antes provocavam a falha.");De("Imagem esticada, grande ou pouco n\xEDtida","V\xEDdeo","O sistema aparece, mas letras e propor\xE7\xF5es est\xE3o incorretas.",[["Resolu\xE7\xE3o diferente da nativa","Consulte a resolu\xE7\xE3o recomendada nas configura\xE7\xF5es de tela e no manual.","Ajuste para a resolu\xE7\xE3o nativa suportada pelo monitor."],["Escala de interface inadequada","Confira o ajuste de escala do sistema.","Escolha uma escala confort\xE1vel; compare sem mudar v\xE1rias op\xE7\xF5es ao mesmo tempo."],["Configura\xE7\xE3o do monitor incorreta","Confira propor\xE7\xE3o da imagem e ajustes do pr\xF3prio monitor.","Restaure a propor\xE7\xE3o correta; para VGA, use o ajuste autom\xE1tico do monitor se dispon\xEDvel."],["Driver de v\xEDdeo ausente ou incorreto","Veja se o sistema usa um driver b\xE1sico e se faltam op\xE7\xF5es de resolu\xE7\xE3o.","Instale o driver oficial compat\xEDvel com a GPU e o sistema."]],"Texto fica leg\xEDvel, c\xEDrculos ficam circulares e a resolu\xE7\xE3o correta est\xE1 dispon\xEDvel.");De("Teclado n\xE3o responde","Perif\xE9ricos","As teclas n\xE3o produzem resposta no sistema.",[["Conex\xE3o ou alimenta\xE7\xE3o ausente","Confira USB; se for sem fio, verifique pilhas, chave e receptor.","Reconecte, ligue ou substitua as pilhas."],["Porta ou intermedi\xE1rio com problema","Teste uma porta USB traseira, diretamente no PC, sem hub.","Use a porta funcional e retire o hub defeituoso."],["Falha do pr\xF3prio teclado","Teste o teclado em outro PC e outro teclado neste PC.","Substitua o teclado se a falha acompanh\xE1-lo."],["Problema no sistema ou controlador USB","Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.","Se funciona antes do sistema, revise drivers e configura\xE7\xF5es. Se v\xE1rias portas falham, encaminhe o controlador para diagn\xF3stico."]],"O teclado digita corretamente e responde ap\xF3s uma nova inicializa\xE7\xE3o.","Conectores PS/2 devem ser reconectados com o computador desligado.");De("Mouse n\xE3o move o ponteiro","Perif\xE9ricos","O ponteiro fica parado ou o mouse n\xE3o \xE9 reconhecido.",[["Mouse sem energia ou desconectado","Confira cabo, receptor USB, pilha e bot\xE3o liga/desliga.","Conecte e ligue o mouse; troque a pilha se necess\xE1rio."],["Sensor obstru\xEDdo ou superf\xEDcie inadequada","Observe a base e teste em superf\xEDcie opaca uniforme.","Limpe externamente o sensor com cuidado e use um mousepad adequado."],["Porta USB ou hub com falha","Teste diretamente numa USB traseira.","Use uma porta funcional ou substitua o hub confirmado como defeituoso."],["Defeito no mouse ou falha de software","Compare com outro mouse e teste este em outro computador.","Troque o mouse se a falha o acompanhar; se s\xF3 ocorre neste sistema, revise o driver e as op\xE7\xF5es de acessibilidade."]],"O ponteiro se move de forma cont\xEDnua e os cliques funcionam.");De("Computador n\xE3o emite som","\xC1udio","Um \xE1udio est\xE1 sendo reproduzido, mas n\xE3o \xE9 ouvido.",[["Volume zerado ou silenciado","Confira o volume do sistema, do aplicativo e da caixa de som.","Remova o sil\xEAncio e aumente gradualmente o volume."],["Caixa ou fone desconectado","Confira energia da caixa e conex\xE3o na sa\xEDda de \xE1udio correta.","Ligue a caixa e conecte ao conector de sa\xEDda indicado no manual."],["Dispositivo de sa\xEDda errado","Observe se o sistema envia \xE1udio ao monitor HDMI, Bluetooth ou outra sa\xEDda.","Selecione a sa\xEDda onde est\xE1 seu fone ou caixa."],["Falha do acess\xF3rio ou driver","Teste outro fone e observe o dispositivo no gerenciador do sistema.","Troque o acess\xF3rio que falhou; instale o driver oficial se o dispositivo n\xE3o estiver corretamente reconhecido."]],"Um som de teste \xE9 ouvido no dispositivo escolhido.");De("Fone ou microfone do painel frontal n\xE3o funciona","\xC1udio","As conex\xF5es frontais falham, mas as traseiras podem funcionar.",[["Plugue ou conector inadequado","Confira se est\xE1 na entrada correta e se o fone combinado precisa de adaptador compat\xEDvel.","Use a conex\xE3o adequada; entrada de microfone n\xE3o \xE9 sa\xEDda de fone."],["Entrada/sa\xEDda frontal n\xE3o selecionada","Confira as op\xE7\xF5es de \xE1udio e a detec\xE7\xE3o do conector.","Selecione o dispositivo frontal correto e ajuste a detec\xE7\xE3o conforme o software oficial."],["Defeito no fone ou no conector frontal","Teste o mesmo fone atr\xE1s e outro fone na frente.","Substitua o acess\xF3rio defeituoso ou encaminhe o conector frontal se s\xF3 ele falhar."],["Cabo interno HD AUDIO solto","Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.","Reconecte no header de \xE1udio correto. N\xE3o use por tentativa os headers USB."]],"As conex\xF5es frontais reproduzem ou capturam \xE1udio conforme sua fun\xE7\xE3o.");De("Sem acesso \xE0 rede pelo cabo","Rede","O computador n\xE3o acessa a rede usando Ethernet.",[["Cabo de rede desconectado","Confira as duas pontas e os indicadores de link, quando existirem.","Encaixe o cabo na porta do PC e do switch/roteador."],["Cabo ou porta de rede com defeito","Teste cabo conhecido e outra porta do switch.","Troque o cabo ou use a porta funcional."],["Adaptador desativado","Confira se a interface Ethernet est\xE1 habilitada no sistema.","Habilite o adaptador; se n\xE3o for reconhecido, instale o driver oficial."],["Falha na rede ou na configura\xE7\xE3o IP","Compare com outro computador na mesma rede e consulte o caso 22.","Use configura\xE7\xE3o autom\xE1tica se a rede fornece DHCP; encaminhe falhas gerais ao respons\xE1vel pela rede."]],"O computador obt\xE9m uma configura\xE7\xE3o de rede v\xE1lida e acessa os recursos autorizados.");De("Wi-Fi n\xE3o aparece ou n\xE3o conecta","Rede","O desktop n\xE3o mostra redes sem fio ou n\xE3o consegue entrar na rede.",[["Desktop sem adaptador Wi-Fi","Confira se h\xE1 adaptador instalado; muitos desktops t\xEAm apenas Ethernet.","Use Ethernet ou instale um adaptador Wi-Fi compat\xEDvel."],["Wi-Fi desligado ou antena ausente","Confira modo avi\xE3o, Wi-Fi e antenas externas do adaptador.","Ative o Wi-Fi e conecte as antenas previstas pelo fabricante."],["Senha errada ou sinal fraco","Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.","Corrija a credencial e reposicione o computador ou ponto de acesso."],["Driver ou incompatibilidade de banda","Veja se o adaptador aparece no sistema e suporta a banda da rede.","Instale o driver oficial; escolha uma rede/banda compat\xEDvel ou encaminhe o roteador ao respons\xE1vel."]],"A rede conecta e permanece est\xE1vel em um teste de navega\xE7\xE3o.");De("Pendrive n\xE3o aparece no explorador","Armazenamento","O pendrive est\xE1 conectado, mas n\xE3o aparece entre as unidades.",[["Conex\xE3o inadequada","Retire com seguran\xE7a se detectado e teste numa USB traseira sem hub.","Reconecte numa porta funcional."],["Falha do pendrive","Teste em outro PC e compare com outro pendrive na mesma porta.","Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recupera\xE7\xE3o."],["Unidade sem letra","Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.","Se h\xE1 parti\xE7\xE3o saud\xE1vel sem letra, atribua uma letra livre. N\xE3o inicialize nem formate uma unidade com dados."],["Sistema de arquivos danificado ou incompat\xEDvel","Observe se aparece RAW, n\xE3o alocado ou com sistema de arquivos n\xE3o suportado.","N\xE3o aceite formata\xE7\xE3o autom\xE1tica. Fa\xE7a backup/recupera\xE7\xE3o; s\xF3 depois prepare a unidade para o sistema correto."]],"A unidade aparece e arquivos de teste podem ser lidos; a remo\xE7\xE3o segura funciona.","Se o conte\xFAdo for importante, interrompa tentativas de escrita na unidade defeituosa.");De("Impressora n\xE3o imprime a partir do desktop","Perif\xE9ricos","O trabalho \xE9 enviado, mas a impress\xE3o n\xE3o sai.",[["Impressora sem condi\xE7\xF5es de imprimir","Confira energia, papel, tampa e avisos no painel.","Ligue e resolva o aviso f\xEDsico indicado, conforme o manual."],["Impressora errada ou conex\xE3o ausente","Confira a impressora escolhida e o cabo USB ou rede.","Selecione a impressora correta e restaure a conex\xE3o."],["Fila pausada ou trabalho travado","Veja a fila de impress\xE3o e o estado offline/pausado.","Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma p\xE1gina."],["Driver ou servi\xE7o com falha","Teste uma p\xE1gina interna da impressora e uma p\xE1gina pelo sistema.","Se a p\xE1gina interna sai, revise driver oficial, porta e servi\xE7o de impress\xE3o com o professor."]],"Uma p\xE1gina de teste enviada pelo computador \xE9 impressa.");De("Webcam n\xE3o mostra imagem","Perif\xE9ricos","O aplicativo abre, mas a imagem da c\xE2mera n\xE3o aparece.",[["Tampa de privacidade ou conex\xE3o","Confira a tampa f\xEDsica e o cabo USB.","Abra a tampa e conecte a c\xE2mera diretamente ao PC."],["C\xE2mera errada selecionada","Observe o dispositivo escolhido no aplicativo.","Selecione a webcam correta."],["Permiss\xE3o bloqueada ou c\xE2mera ocupada","Confira as permiss\xF5es de c\xE2mera e feche outro aplicativo que esteja usando-a.","Autorize o aplicativo necess\xE1rio e deixe a c\xE2mera livre para o teste."],["Driver ou c\xE2mera defeituosa","Teste outro aplicativo, porta USB e outro PC.","Atualize o driver oficial se necess\xE1rio; substitua a c\xE2mera se a falha a acompanhar."]],"A c\xE2mera mostra uma imagem no aplicativo autorizado.");De("Microfone n\xE3o capta voz","\xC1udio","A pessoa fala, mas o indicador de entrada n\xE3o se move.",[["Microfone silenciado ou desconectado","Confira bot\xE3o de mute, plugue e alimenta\xE7\xE3o quando aplic\xE1vel.","Remova o mute e conecte \xE0 entrada correta."],["Entrada ou n\xEDvel de captura incorreto","Confira o dispositivo selecionado e o n\xEDvel de entrada.","Escolha o microfone correto e ajuste o n\xEDvel sem saturar."],["Permiss\xE3o ou configura\xE7\xE3o do aplicativo","Teste a grava\xE7\xE3o do sistema e confira a permiss\xE3o do aplicativo.","Autorize o uso e selecione a entrada no aplicativo."],["Plugue incompat\xEDvel, driver ou defeito","Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.","Use adaptador compat\xEDvel, revise o driver oficial ou substitua o acess\xF3rio cuja falha foi confirmada."]],"Uma grava\xE7\xE3o curta reproduz a voz com clareza.");De("Segundo monitor n\xE3o \xE9 reconhecido","V\xEDdeo","S\xF3 um monitor funciona num desktop com dois monitores conectados.",[["Monitor ou entrada desligada","Confira energia e entrada do segundo monitor.","Ligue e selecione a entrada conectada."],["Modo de exibi\xE7\xE3o inadequado","Abra as op\xE7\xF5es de m\xFAltiplos monitores do sistema.","Escolha estender ou duplicar e use a op\xE7\xE3o de detectar."],["Cabo, adaptador ou porta inadequados","Teste o segundo monitor sozinho e confira o sentido de convers\xE3o do adaptador.","Use cabo/adaptador apropriado. Um divisor simples n\xE3o cria duas telas independentes."],["Limite de GPU ou sa\xEDda da placa-m\xE3e indispon\xEDvel","Consulte o n\xFAmero de telas suportadas e a disponibilidade do v\xEDdeo integrado.","Conecte a sa\xEDdas suportadas; revise driver e configura\xE7\xE3o conforme o manual."]],"As duas telas aparecem nas configura\xE7\xF5es e operam no modo escolhido.");De("Data e hora ficam incorretas","Sistema","O rel\xF3gio mostra hor\xE1rio errado ou perde o ajuste depois de desligar.",[["Fuso hor\xE1rio incorreto","Confira fuso e hora autom\xE1tica no sistema.","Selecione o fuso correto e sincronize a hora."],["Sincroniza\xE7\xE3o indispon\xEDvel","Confira a conex\xE3o e o servi\xE7o de hora; compare com rel\xF3gio confi\xE1vel.","Restaure a sincroniza\xE7\xE3o autorizada ou ajuste temporariamente a hora."],["Hora perdida tamb\xE9m na BIOS/UEFI","Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.","Se a hora do firmware permanece correta, investigue o sistema; se \xE9 perdida, avance para a bateria."],["Bateria da placa-m\xE3e esgotada","Confirme o tipo no manual e registre as configura\xE7\xF5es antes da interven\xE7\xE3o.","Com supervis\xE3o e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e op\xE7\xF5es necess\xE1rias."]],"O rel\xF3gio permanece correto ap\xF3s desligar e religar, inclusive depois do teste sem energia.");De("Computador demora muito para iniciar","Sistema","A inicializa\xE7\xE3o chega ao sistema, mas leva tempo excessivo.",[["Perif\xE9rico atrasando a partida","Compare a inicializa\xE7\xE3o sem pendrives e acess\xF3rios n\xE3o essenciais.","Remova o acess\xF3rio problem\xE1tico e revise sua configura\xE7\xE3o."],["Muitos aplicativos iniciando juntos","Observe aplicativos de inicializa\xE7\xE3o e seu impacto.","Desative apenas os desnecess\xE1rios; mantenha prote\xE7\xE3o e servi\xE7os essenciais."],["Pouco espa\xE7o ou atualiza\xE7\xE3o em andamento","Confira espa\xE7o livre e estado das atualiza\xE7\xF5es.","Libere espa\xE7o com ferramentas do sistema e deixe a atualiza\xE7\xE3o terminar."],["Armazenamento lento ou falhando","Fa\xE7a backup e compare sa\xFAde da unidade e uso de disco ap\xF3s iniciar.","Se a unidade falha, substitua ap\xF3s preservar os dados; se \xE9 apenas limita\xE7\xE3o de HDD, avalie SSD compat\xEDvel."]],"O tempo de partida melhora em duas inicializa\xE7\xF5es compar\xE1veis, sem remover servi\xE7os essenciais.");De("Computador fica lento durante o uso","Sistema","Programas abrem devagar e o sistema responde com atraso.",[["Excesso de tarefas abertas","Observe CPU, mem\xF3ria e disco no monitor de tarefas.","Feche tarefas n\xE3o utilizadas e compare o desempenho."],["Armazenamento quase cheio","Confira espa\xE7o dispon\xEDvel no disco do sistema.","Remova arquivos tempor\xE1rios com ferramenta do sistema e mova arquivos pr\xF3prios ap\xF3s backup."],["Aplicativo consumindo recursos ou malware","Identifique o processo de maior consumo e fa\xE7a uma verifica\xE7\xE3o com prote\xE7\xE3o confi\xE1vel.","Atualize ou corrija o aplicativo; siga o caso 26 se houver infec\xE7\xE3o."],["Limite de hardware, calor ou unidade com falha","Compare o consumo com os requisitos dos programas, temperaturas e sa\xFAde do disco.","Corrija a causa confirmada; amplie RAM/SSD se houver limita\xE7\xE3o, ou siga os casos de calor e armazenamento."]],"A tarefa usada como refer\xEAncia volta a responder bem; registre qual recurso causava a lentid\xE3o.");De("Um programa trava ou fecha sozinho","Sistema","Um aplicativo espec\xEDfico para de responder, enquanto outros podem continuar funcionando.",[["Arquivo ou opera\xE7\xE3o espec\xEDfica com erro","Teste um arquivo novo e registre a a\xE7\xE3o que provoca o travamento.","Recupere o arquivo de backup ou evite a opera\xE7\xE3o at\xE9 corrigir o problema identificado."],["Recursos insuficientes","Confira espa\xE7o, mem\xF3ria e os requisitos do aplicativo.","Feche tarefas desnecess\xE1rias e libere espa\xE7o; ajuste a carga ao hardware."],["Vers\xE3o, extens\xE3o ou instala\xE7\xE3o com problema","Teste sem extens\xF5es opcionais e veja se come\xE7ou ap\xF3s uma mudan\xE7a.","Atualize pelo fornecedor ou repare/reinstale o aplicativo ap\xF3s salvar dados e configura\xE7\xF5es."],["Problema geral de sistema ou hardware","Observe se v\xE1rios programas tamb\xE9m travam e consulte registros de erros.","Se a falha \xE9 geral, siga os casos 36, 43 e 46 com o professor."]],"A mesma a\xE7\xE3o que antes travava funciona em testes repetidos, sem perda dos arquivos.");De("Windows chega a uma tela de recupera\xE7\xE3o","Inicializa\xE7\xE3o","O computador liga, mas n\xE3o carrega normalmente o Windows.",[["Dispositivo externo interferindo","Retire m\xEDdias remov\xEDveis e registre a mensagem completa.","Reinicie sem m\xEDdias n\xE3o essenciais; se resolver, revise a ordem de boot."],["Falha na inicializa\xE7\xE3o do sistema","Confira se a unidade do sistema \xE9 detectada e use as op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Com o professor, tente Reparo de Inicializa\xE7\xE3o. Se o disco n\xE3o \xE9 detectado, siga o caso 29."],["Atualiza\xE7\xE3o ou driver recente","Veja se o problema come\xE7ou logo ap\xF3s uma mudan\xE7a. Tenha a chave de recupera\xE7\xE3o se houver criptografia.","Use as op\xE7\xF5es apropriadas de desinstalar atualiza\xE7\xE3o ou Restaura\xE7\xE3o do Sistema, ap\xF3s avaliar o backup."],["Sistema corrompido ou disco defeituoso","Preserve dados e verifique a sa\xFAde da unidade antes de reinstalar.","Se o disco estiver saud\xE1vel, repare/reinstale o sistema ap\xF3s backup. Se falha, substitua a unidade antes da instala\xE7\xE3o."]],"O sistema inicia, os arquivos preservados est\xE3o acess\xEDveis e a falha n\xE3o reaparece.","Op\xE7\xF5es de recupera\xE7\xE3o podem alterar dados e aplicativos. Obtenha backup e chave de recupera\xE7\xE3o antes de procedimentos invasivos.");De("Rede conecta, mas n\xE3o abre a internet","Rede","A interface tem link ou Wi-Fi conectado, mas os sites n\xE3o abrem.",[["Falha geral da rede","Teste outro dispositivo na mesma rede e mais de um site.","Se todos falham, encaminhe o roteador/provedor ao respons\xE1vel; se s\xF3 um site falha, n\xE3o altere todo o PC."],["Endere\xE7o IP ou gateway inv\xE1lido","Com o professor, veja IP, m\xE1scara e gateway; 169.254.x.x costuma indicar que o DHCP n\xE3o forneceu endere\xE7o.","Use DHCP se previsto pela rede e renove a conex\xE3o; corrija IP fixo somente com os dados do administrador."],["Falha na resolu\xE7\xE3o de nomes (DNS)","Compare conectividade com o gateway e resolu\xE7\xE3o de nomes, usando testes orientados.","Restaure o DNS previsto pela rede; n\xE3o coloque servidores aleat\xF3rios numa rede escolar."],["Proxy, VPN ou bloqueio de seguran\xE7a","Confira se come\xE7ou ap\xF3s ativar VPN/proxy e verifique as regras da rede.","Corrija a configura\xE7\xE3o autorizada ou encaminhe ao administrador. N\xE3o desative a prote\xE7\xE3o como solu\xE7\xE3o permanente."]],"Sites e servi\xE7os autorizados abrem; o aluno diferencia link, IP e DNS.");De("Conex\xE3o de rede cai frequentemente","Rede","O acesso funciona por um tempo e depois \xE9 interrompido.",[["Mau contato ou sinal fraco","Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.","Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas."],["Falha no equipamento de rede","Compare outros dispositivos e outra porta do switch.","Use a porta funcional e informe quedas gerais ao respons\xE1vel pela rede."],["Economia de energia ou driver do adaptador","Observe se a queda ocorre ap\xF3s inatividade e confira o driver oficial.","Atualize o driver e ajuste a economia de energia conforme a orienta\xE7\xE3o do fabricante."],["Defeito no adaptador","Teste um adaptador compat\xEDvel conhecido sob as mesmas condi\xE7\xF5es.","Substitua o adaptador apenas se o teste isolar a falha nele."]],"A conex\xE3o permanece est\xE1vel no intervalo e atividade que antes causavam a queda.");De("Bluetooth n\xE3o encontra ou n\xE3o conecta o acess\xF3rio","Perif\xE9ricos","Um fone, teclado ou mouse Bluetooth n\xE3o aparece ou falha ao parear.",[["Desktop sem Bluetooth ou r\xE1dio desligado","Confira se o PC tem adaptador e se Bluetooth est\xE1 ativado.","Ative o recurso ou instale adaptador compat\xEDvel."],["Acess\xF3rio fora do modo de pareamento","Confira carga e siga o procedimento do fabricante.","Carregue e coloque o acess\xF3rio em modo de pareamento perto do PC."],["Pareamento antigo ou liga\xE7\xE3o a outro dispositivo","Veja se o acess\xF3rio est\xE1 conectado a outro aparelho.","Desconecte do outro aparelho e refa\xE7a apenas o pareamento desse acess\xF3rio."],["Driver, antena ou adaptador com falha","Teste outro acess\xF3rio e confira driver e antenas compartilhadas, se previstas.","Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada."]],"O acess\xF3rio pareia e executa sua fun\xE7\xE3o ap\xF3s uma reconex\xE3o.");De("Disco do sistema est\xE1 quase cheio","Armazenamento","O sistema avisa falta de espa\xE7o e pode falhar ao instalar programas.",[["Lixeira e arquivos tempor\xE1rios acumulados","Confira o uso de armazenamento e revise a lixeira antes de apagar.","Use a limpeza do sistema e exclua apenas itens dispens\xE1veis."],["Arquivos pessoais grandes","Identifique v\xEDdeos, downloads e outros arquivos pr\xF3prios.","Fa\xE7a backup e mova o que n\xE3o precisa ficar no disco principal."],["Programas desnecess\xE1rios","Confira programas instalados e tamanho ocupado.","Desinstale pelos recursos do sistema o que n\xE3o ser\xE1 usado, preservando dados necess\xE1rios."],["Capacidade insuficiente para a rotina","Compare o espa\xE7o exigido pela turma com o dispon\xEDvel ap\xF3s a limpeza.","Planeje unidade maior compat\xEDvel e migra\xE7\xE3o com backup. N\xE3o apague pastas do sistema manualmente."]],"H\xE1 espa\xE7o para o uso e as atualiza\xE7\xF5es previstas, e os arquivos necess\xE1rios continuam acess\xEDveis.");De("Propagandas estranhas e programas desconhecidos","Sistema","Aparecem redirecionamentos, extens\xF5es desconhecidas ou alertas suspeitos.",[["Notifica\xE7\xF5es autorizadas por engano","Identifique se o alerta vem do navegador e de qual site.","Revogue a permiss\xE3o do site desconhecido; n\xE3o clique no alerta."],["Extens\xE3o ou programa indesejado","Revise extens\xF5es e instala\xE7\xF5es recentes com o professor.","Remova itens indesejados pelos mecanismos oficiais."],["Poss\xEDvel infec\xE7\xE3o","Atualize a prote\xE7\xE3o confi\xE1vel e execute uma verifica\xE7\xE3o completa; isole da rede se houver comportamento ativo suspeito.","Siga as a\xE7\xF5es de quarentena da prote\xE7\xE3o e a pol\xEDtica do laborat\xF3rio."],["Comprometimento persistente","Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.","Encaminhe ao respons\xE1vel; uma reinstala\xE7\xE3o limpa pode ser necess\xE1ria ap\xF3s backup verificado. Troque senhas num dispositivo confi\xE1vel se houve exposi\xE7\xE3o."]],"A prote\xE7\xE3o conclui a verifica\xE7\xE3o e os sintomas n\xE3o retornam ap\xF3s reiniciar e testar o navegador.","N\xE3o instale \u201Climpadores\u201D anunciados pelos pr\xF3prios alertas. Em m\xE1quinas da escola, informe o respons\xE1vel pelo laborat\xF3rio.");De("Windows Update falha repetidamente","Sistema","Uma atualiza\xE7\xE3o n\xE3o instala e mostra uma mensagem ou c\xF3digo de erro.",[["Reinicializa\xE7\xE3o pendente","Confira o aviso de reiniciar e registre o c\xF3digo de erro.","Salve o trabalho e reinicie pelo sistema."],["Internet, hora ou espa\xE7o inadequados","Confira rede, rel\xF3gio e espa\xE7o livre.","Corrija conex\xE3o/hora e libere espa\xE7o com ferramentas do sistema."],["Erro detect\xE1vel pelo solucionador oficial","Execute a ferramenta de solu\xE7\xE3o de problemas de atualiza\xE7\xE3o dispon\xEDvel no sistema.","Aplique a corre\xE7\xE3o indicada e tente novamente."],["Arquivos do sistema ou pacote com falha","Pesquise o c\xF3digo na documenta\xE7\xE3o oficial com o professor e preserve os dados.","Fa\xE7a o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir."]],"A atualiza\xE7\xE3o prevista conclui e o sistema reinicia normalmente.","N\xE3o desligue \xE0 for\xE7a enquanto a instala\xE7\xE3o estiver progredindo.");De("Mensagem \u201CNo bootable device\u201D ou \u201CBoot device not found\u201D","Inicializa\xE7\xE3o","O firmware informa que n\xE3o encontrou um sistema para iniciar.",[["M\xEDdia remov\xEDvel escolhida por engano","Confira se h\xE1 pendrive ou disco externo conectado.","Remova a m\xEDdia de teste e tente iniciar novamente."],["Ordem de boot incorreta","Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.","Selecione a entrada de inicializa\xE7\xE3o correta, conforme a instala\xE7\xE3o existente."],["Unidade do sistema n\xE3o detectada","Confira a lista de armazenamento do firmware.","Se a unidade n\xE3o aparece, siga o caso 29 para testar conex\xE3o e unidade."],["Carregador de boot danificado ou modo incompat\xEDvel","Veja se o disco \xE9 detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.","Restaure a configura\xE7\xE3o conhecida ou use Reparo de Inicializa\xE7\xE3o com o professor, preservando dados."]],"A entrada correta carrega o sistema ap\xF3s reiniciar.","N\xE3o formate por causa dessa mensagem; ela n\xE3o prova que os arquivos foram perdidos.");De("HD ou SSD n\xE3o aparece na BIOS/UEFI","Armazenamento","O firmware n\xE3o lista uma unidade que deveria estar instalada.",[["Unidade ausente ou slot incorreto","Com o professor, compare a instala\xE7\xE3o com o manual e o tipo da unidade.","Instale no conector compat\xEDvel; M.2 SATA e NVMe n\xE3o s\xE3o intercambi\xE1veis em todo slot."],["Conex\xE3o frouxa","PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixa\xE7\xE3o correta.","Reconecte com cuidado conforme o manual."],["Cabo, porta ou compartilhamento de pistas","Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.","Substitua o cabo que falhou ou use porta/slot dispon\xEDvel e compat\xEDvel."],["Defeito na unidade ou no controlador","Teste a unidade em equipamento compat\xEDvel e outra unidade neste PC, sem formatar.","Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-m\xE3e."]],"A unidade \xE9 identificada corretamente no firmware e seus dados podem ser verificados.");De("HD ou SSD novo aparece na BIOS, mas n\xE3o no sistema","Armazenamento","Uma unidade adicional \xE9 detectada pelo firmware, mas n\xE3o aparece no explorador.",[["Expectativa de aparecer antes de ser preparada","Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.","Se j\xE1 tem dados, n\xE3o inicialize. Se \xE9 nova e vazia, prossiga com o professor."],["Disco offline ou parti\xE7\xE3o sem letra","Confira estado do disco e das parti\xE7\xF5es existentes.","Coloque online se apropriado ou atribua letra livre \xE0 parti\xE7\xE3o saud\xE1vel."],["Unidade realmente nova, sem parti\xE7\xE3o","Confirme que n\xE3o cont\xE9m dados e que \xE9 a unidade correta.","Com supervis\xE3o, inicialize no esquema adequado e crie/formate um volume; essas a\xE7\xF5es apagam ou alteram estruturas de dados."],["Driver, sistema de arquivos ou compatibilidade","Se nem o gerenciador a detecta, confira controlador e driver; se tem parti\xE7\xE3o, confira compatibilidade.","Instale driver oficial ou use sistema compat\xEDvel para recuperar dados antes de qualquer convers\xE3o/formata\xE7\xE3o."]],"O volume esperado fica acess\xEDvel e um arquivo de teste pode ser salvo e lido.","Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.");De("Portas USB frontais n\xE3o funcionam","Perif\xE9ricos","Um dispositivo funciona atr\xE1s, mas n\xE3o nas portas da frente do gabinete.",[["Problema no dispositivo ou cabo","Teste o acess\xF3rio em USB traseira e outro acess\xF3rio na frente.","Substitua o cabo/acess\xF3rio se a falha o acompanhar."],["Dispositivo exige mais energia","Compare um dispositivo simples e o acess\xF3rio de maior consumo.","Use porta adequada ou hub alimentado compat\xEDvel; n\xE3o sobrecarregue a porta."],["Cabo interno do painel solto","Com o professor e PC desligado da tomada, confira o header USB pelo manual.","Reconecte o cabo ao header correto, respeitando orienta\xE7\xE3o e pinos."],["Conector frontal danificado","Inspecione portas e cabo com a alimenta\xE7\xE3o desconectada.","N\xE3o use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado."]],"Um dispositivo conhecido funciona nas portas frontais reparadas.");De("USB desconecta e reconecta sozinho","Perif\xE9ricos","O sistema toca repetidamente o som de desconex\xE3o de um dispositivo USB.",[["Cabo frouxo ou danificado","Observe se o problema acompanha um cabo espec\xEDfico e teste outro cabo adequado.","Substitua o cabo que falhou e elimine tens\xE3o sobre o conector."],["Hub ou extens\xE3o inadequados","Conecte o dispositivo diretamente a uma porta traseira.","Retire o intermedi\xE1rio defeituoso ou use hub alimentado apropriado."],["Energia ou driver do dispositivo","Compare com outra porta e revise driver e economia de energia, se a falha ocorre ap\xF3s inatividade.","Use alimenta\xE7\xE3o prevista pelo fabricante e atualize/ajuste o driver oficial."],["Defeito do acess\xF3rio ou controlador","Teste o acess\xF3rio noutro PC e v\xE1rios acess\xF3rios neste PC.","Troque o acess\xF3rio se a falha o acompanhar; se v\xE1rias portas falham, pe\xE7a diagn\xF3stico da placa-m\xE3e."]],"O dispositivo permanece conectado durante a tarefa que antes provocava a queda.");De("Gabinete faz muito barulho","Refrigera\xE7\xE3o","H\xE1 ru\xEDdo forte de ventoinha, vibra\xE7\xE3o ou raspagem.",[["Vibra\xE7\xE3o externa","Confira se o gabinete est\xE1 est\xE1vel e se algum objeto vibra encostado nele.","Estabilize o gabinete e retire objetos em contato."],["Cabo encostando numa ventoinha","Desligue, retire da tomada e, com o professor, inspecione sem p\xF4r a m\xE3o em ventoinha em movimento.","Prenda os cabos longe das h\xE9lices."],["Poeira ou fluxo de ar restrito","Confira filtros, entradas de ar e temperatura.","Limpe com m\xE9todo adequado ao manual e desobstrua a ventila\xE7\xE3o."],["Ventoinha desgastada ou unidade mec\xE2nica falhando","Identifique de onde vem o som; cliques de HDD com erros exigem preserva\xE7\xE3o de dados.","Substitua a ventoinha confirmada como defeituosa. Se \xE9 HDD, siga o caso 46. Se \xE9 a fonte, encaminhe sem abri-la."]],"O ru\xEDdo anormal desaparece e temperaturas continuam adequadas.");De("Computador fica muito quente","Refrigera\xE7\xE3o","H\xE1 temperaturas elevadas ou queda de desempenho durante o uso.",[["Ambiente ou sa\xEDdas de ar obstru\xEDdas","Observe posi\xE7\xE3o, entradas/sa\xEDdas e condi\xE7\xF5es do ambiente.","Afaste de obstru\xE7\xF5es e melhore a circula\xE7\xE3o de ar."],["Carga de trabalho excessiva","Compare temperatura em repouso e em uso com ferramenta confi\xE1vel e limites do fabricante.","Reduza tarefas desnecess\xE1rias e investigue a tarefa respons\xE1vel."],["Poeira ou ventoinha com problema","Com PC desconectado e professor, inspecione filtros, dissipadores e conex\xF5es.","Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado."],["Cooler mal instalado ou interface t\xE9rmica inadequada","Verifique fixa\xE7\xE3o e montagem conforme o manual, sem desmontar em m\xE1quina quente.","O professor reinstala o cooler e aplica interface t\xE9rmica conforme o fabricante."]],"As temperaturas ficam dentro dos limites do componente na tarefa de refer\xEAncia.","N\xE3o use um limite \xFAnico para toda CPU/GPU. N\xE3o abra a fonte nem use l\xEDquidos ou aspirador dom\xE9stico nas placas.");De("Computador desliga sozinho durante o uso","Energia","O PC apaga sem encerramento normal do sistema.",[["Alimenta\xE7\xE3o externa intermitente","Observe tomada, cabo e filtro; compare com ponto de energia confi\xE1vel.","Corrija a conex\xE3o ou use alimenta\xE7\xE3o est\xE1vel. Defeito el\xE9trico deve ser tratado pelo respons\xE1vel."],["Aquecimento excessivo","Observe temperaturas antes da falha, sem for\xE7ar desligamentos repetidos.","Siga o caso 34 para corrigir refrigera\xE7\xE3o."],["Configura\xE7\xE3o ou comando de desligamento","Confira eventos, op\xE7\xF5es de energia e rela\xE7\xE3o com um programa espec\xEDfico.","Corrija a configura\xE7\xE3o ou aplicativo identificado."],["Fonte ou hardware com falha","Com o professor, compare com fonte compat\xEDvel conhecida; investigue componentes se persistir.","Substitua s\xF3 a pe\xE7a isolada no teste. Um evento de desligamento inesperado sozinho n\xE3o identifica a fonte."]],"O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimenta\xE7\xE3o adequadas.");De("Computador inteiro congela","Sistema","Mouse, teclado e programas deixam de responder; pode ser necess\xE1rio reiniciar.",[["Sobrecarga tempor\xE1ria","Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.","Feche a tarefa problem\xE1tica se conseguir e reduza a carga."],["Aplicativo ou driver recente","Confira se come\xE7ou ap\xF3s instala\xE7\xE3o/atualiza\xE7\xE3o e consulte os registros.","Atualize ou reverta a mudan\xE7a identificada, ap\xF3s salvar dados."],["Aquecimento ou armazenamento com falha","Verifique temperaturas e sa\xFAde da unidade; preserve arquivos antes de testes extensos.","Corrija refrigera\xE7\xE3o ou siga o caso 46 se houver sinais de falha no disco."],["Mem\xF3ria ou outro hardware inst\xE1vel","Com o professor, teste mem\xF3ria e par\xE2metros padr\xE3o; consulte o caso 43.","Isole o m\xF3dulo/componente defeituoso e substitua apenas ap\xF3s confirmar."]],"O sistema continua respondendo em repeti\xE7\xE3o da atividade e em uso normal.","Reinicializa\xE7\xE3o for\xE7ada pode perder trabalho n\xE3o salvo; use apenas se o sistema realmente n\xE3o responder.");De("Tela preta depois que o Windows come\xE7a a carregar","V\xEDdeo","A imagem de firmware aparece, mas some ao entrar no sistema.",[["Sa\xEDda ou modo de exibi\xE7\xE3o incorreto","Confira o monitor escolhido, entrada e conex\xE3o; teste uma \xFAnica tela.","Use a sa\xEDda correta e um modo de exibi\xE7\xE3o suportado."],["Driver de v\xEDdeo com falha","Com o professor, acesse o modo de seguran\xE7a pelas op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Se h\xE1 imagem nesse modo, reverta/reinstale o driver oficial relacionado \xE0 falha."],["Aplicativo ou sess\xE3o do sistema com erro","Veja se aparece ponteiro ou se outro usu\xE1rio consegue iniciar sess\xE3o.","Desative a inicializa\xE7\xE3o do aplicativo identificado ou repare a sess\xE3o com backup das informa\xE7\xF5es."],["Corrup\xE7\xE3o do sistema ou GPU inst\xE1vel","Compare outra sa\xEDda/GPU compat\xEDvel e op\xE7\xF5es de recupera\xE7\xE3o do sistema.","Repare o sistema ap\xF3s backup se hardware estiver saud\xE1vel; encaminhe a GPU se a falha a acompanhar."]],"A imagem permanece vis\xEDvel durante a entrada no Windows e o uso de aplicativos.");De("Mem\xF3ria instalada n\xE3o aparece por completo","Mem\xF3ria","O total informado difere dos m\xF3dulos instalados ou a mem\xF3ria utiliz\xE1vel \xE9 menor.",[["Confus\xE3o entre mem\xF3ria instalada e utiliz\xE1vel","Compare BIOS/UEFI, sistema e mem\xF3ria reservada ao hardware.","Explique a reserva para v\xEDdeo integrado e diferen\xE7as de unidades; n\xE3o troque RAM por uma reserva normal."],["Limite do sistema ou da placa","Confira arquitetura do sistema, capacidade suportada e manual da placa-m\xE3e.","Use sistema de 64 bits e m\xF3dulos dentro dos limites, quando necess\xE1rio e compat\xEDvel."],["M\xF3dulo mal encaixado ou slot errado","Com PC desconectado e professor, confira travas e slots recomendados.","Reinstale os m\xF3dulos nos slots previstos pelo fabricante."],["M\xF3dulo, slot ou canal com defeito","Teste um m\xF3dulo por vez e compare slots permitidos, registrando resultados.","Substitua o m\xF3dulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"Firmware reconhece a capacidade esperada e o sistema informa uma reserva explic\xE1vel.");De("Computador deixa de iniciar ap\xF3s instalar RAM","Mem\xF3ria","A falha surge logo depois da troca ou amplia\xE7\xE3o da mem\xF3ria.",[["Treinamento inicial de mem\xF3ria","Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo ap\xF3s mudan\xE7as.","Aguarde o per\xEDodo indicado, sem reiniciar continuamente."],["M\xF3dulo mal encaixado ou posi\xE7\xE3o incorreta","Com professor e alimenta\xE7\xE3o desconectada, confira travas e slots indicados.","Reencaixe corretamente; n\xE3o force um m\xF3dulo de padr\xE3o diferente."],["M\xF3dulo incompat\xEDvel ou mistura inst\xE1vel","Confira gera\xE7\xE3o DDR, capacidade, tipo e especifica\xE7\xF5es; teste a configura\xE7\xE3o anterior.","Use m\xF3dulos compat\xEDveis e preferencialmente um conjunto validado para a placa."],["Perfil de mem\xF3ria ou m\xF3dulo defeituoso","Com o professor, teste um m\xF3dulo por vez em par\xE2metros padr\xE3o; reset de CMOS somente conforme o manual.","Desative perfil inst\xE1vel ou substitua o m\xF3dulo que falha tamb\xE9m em condi\xE7\xF5es padr\xE3o."]],"O PC conclui o POST, reconhece a RAM e passa por teste orientado de mem\xF3ria.");De("Mensagem \u201CCPU Fan Error\u201D ou erro de ventoinha","Refrigera\xE7\xE3o","O firmware informa que n\xE3o detectou corretamente a ventoinha do processador.",[["Aviso ap\xF3s uma manuten\xE7\xE3o","N\xE3o ignore; desligue e confira o que foi alterado.","Interrompa o uso at\xE9 confirmar a refrigera\xE7\xE3o do processador."],["Cooler conectado ao header errado","Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.","Conecte o cooler ao header previsto; bombas de water cooler seguem o manual espec\xEDfico."],["Cabo solto, h\xE9lice bloqueada ou ventoinha defeituosa","Inspecione conex\xF5es e obst\xE1culos sem energizar partes expostas.","Reconecte, retire a obstru\xE7\xE3o ou substitua a ventoinha que falhou."],["Limite de leitura incompat\xEDvel com a montagem","Se refrigera\xE7\xE3o est\xE1 comprovadamente funcional, compare rota\xE7\xE3o m\xEDnima e leitura com o manual.","O professor ajusta o monitoramento ao conjunto correto. N\xE3o desative o alerta para esconder um cooler parado."]],"A leitura de refrigera\xE7\xE3o \xE9 coerente, o alerta \xE9 resolvido e a temperatura permanece adequada.");De("PC n\xE3o conclui o POST: bipes ou LED de diagn\xF3stico","Inicializa\xE7\xE3o","O computador tem energia, mas n\xE3o chega \xE0 imagem inicial ou sinaliza um erro.",[["C\xF3digo ainda n\xE3o identificado","Anote padr\xE3o, dura\xE7\xE3o, cor e modelo exato da placa/PC.","Consulte a tabela espec\xEDfica do fabricante; n\xE3o use tabelas universais de bipes."],["Perif\xE9rico ou mudan\xE7a recente interferindo","Compare sem acess\xF3rios externos n\xE3o essenciais e registre a \xFAltima mudan\xE7a.","Remova o acess\xF3rio problem\xE1tico ou restaure a configura\xE7\xE3o anterior."],["Mem\xF3ria ou v\xEDdeo indicados pelo c\xF3digo","Com professor e PC desconectado, confira encaixes e teste componente compat\xEDvel conhecido.","Corrija a conex\xE3o ou substitua somente o m\xF3dulo/placa que falhou no teste."],["CPU, placa-m\xE3e ou firmware indicados pelo diagn\xF3stico","Revise compatibilidade e siga os testes do manual; configura\xE7\xE3o m\xEDnima exige supervis\xE3o.","Encaminhe para diagn\xF3stico t\xE9cnico. Atualiza\xE7\xE3o de BIOS n\xE3o deve ser feita por tentativa num PC inst\xE1vel."]],"O POST \xE9 conclu\xEDdo e o c\xF3digo de erro deixa de aparecer.","POST \xE9 o autoteste de hardware executado antes de carregar o sistema operacional.");De("Liga por poucos segundos e desliga","Energia","As ventoinhas come\xE7am a girar, mas o PC apaga antes de iniciar.",[["Perif\xE9rico externo causando prote\xE7\xE3o","Desconecte acess\xF3rios externos n\xE3o essenciais com o PC desligado.","Retire o perif\xE9rico/cabo que faz a falha retornar."],["Conector de energia interno incompleto","Professor, PC fora da tomada: confira ATX da placa e alimenta\xE7\xE3o da CPU pelo manual.","Conecte os cabos corretos da fonte; n\xE3o confunda EPS/CPU com PCIe/GPU."],["Cooler ausente, solto ou erro de montagem","Confira a presen\xE7a, fixa\xE7\xE3o e conex\xE3o da refrigera\xE7\xE3o.","Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler."],["Curto, fonte ou placa-m\xE3e defeituosos","Professor inspeciona parafusos soltos, espa\xE7adores e testa fonte compat\xEDvel com seus pr\xF3prios cabos.","Corrija a montagem se confirmado; substitua fonte/placa s\xF3 ap\xF3s isolamento t\xE9cnico."]],"O PC permanece ligado e conclui o POST sem aquecimento anormal.","Se houver cheiro de queimado, fa\xEDsca ou l\xEDquido, desconecte e encaminhe: n\xE3o repita testes de energiza\xE7\xE3o.");De("Erros no teste de mem\xF3ria RAM","Mem\xF3ria","Uma ferramenta de diagn\xF3stico acusa erros, ou falhas gerais apontam para a mem\xF3ria.",[["Perfil de frequ\xEAncia inst\xE1vel","Registre os ajustes e confira se XMP/EXPO ou overclock est\xE1 ativo.","Com o professor, teste nos par\xE2metros padr\xE3o suportados."],["Mau encaixe","PC fora da tomada: confira travas e slots recomendados.","Reencaixe segurando pelas bordas, com prote\xE7\xE3o contra descarga eletrost\xE1tica."],["M\xF3dulo com falha","Teste um m\xF3dulo por vez no slot recomendado e repita com m\xF3dulo conhecido.","Substitua o m\xF3dulo se o erro o acompanhar em configura\xE7\xF5es padr\xE3o."],["Slot, controlador ou combina\xE7\xE3o de m\xF3dulos","Compare m\xF3dulos bons em slots permitidos e consulte compatibilidade.","Use conjunto compat\xEDvel; se o erro acompanha slot/canal, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"A configura\xE7\xE3o final passa pelo teste completo escolhido e n\xE3o reproduz as falhas observadas.","Um teste sem erros reduz suspeitas, mas n\xE3o garante aus\xEAncia de toda falha intermitente. N\xE3o esfregue borracha nem aplique produtos caseiros nos contatos.");De("Quadrados, linhas ou cores estranhas na imagem","V\xEDdeo","Aparecem artefatos gr\xE1ficos, distor\xE7\xF5es ou blocos de cor.",[["Cabo ou monitor","Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.","Substitua o cabo/monitor cuja falha foi isolada."],["Aplicativo ou driver","Veja se ocorre s\xF3 num programa e se come\xE7ou ap\xF3s atualiza\xE7\xE3o.","Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial."],["Temperatura ou overclock","Confira temperatura e par\xE2metros da GPU e mem\xF3ria, sem for\xE7ar testes se estiver superaquecendo.","Restaure par\xE2metros padr\xE3o e corrija a refrigera\xE7\xE3o."],["Falha de GPU ou mem\xF3ria compartilhada","Compare imagem antes do sistema e teste GPU/RAM compat\xEDvel conhecida com o professor.","Se acompanha a GPU, encaminhe/substitua a placa; com v\xEDdeo integrado, investigue tamb\xE9m RAM e placa-m\xE3e."]],"A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.");De("Jogos ou programas 3D travam, mas o desktop funciona","V\xEDdeo","A falha aparece com carga gr\xE1fica mais alta.",[["Requisito ou configura\xE7\xE3o acima do hardware","Compare requisitos, resolu\xE7\xE3o e ajustes do programa.","Use configura\xE7\xF5es compat\xEDveis e teste uma carga menor."],["Programa ou driver com falha","Confira se outros programas 3D tamb\xE9m falham e registre o erro.","Atualize/repare o programa e use driver oficial compat\xEDvel."],["Aquecimento ou ajustes inst\xE1veis","Observe temperaturas e desative overclock/perfis inst\xE1veis com o professor.","Corrija a refrigera\xE7\xE3o e teste nos par\xE2metros padr\xE3o."],["GPU ou alimenta\xE7\xE3o inadequada","Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.","Use alimenta\xE7\xE3o prevista e substitua o componente cuja falha foi confirmada. N\xE3o continue for\xE7ando desligamentos."]],"A tarefa gr\xE1fica de refer\xEAncia funciona com ajustes suportados, sem travamento nem desligamento.");De("HD faz cliques ou unidade apresenta erros de leitura","Armazenamento","Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.",[["Ind\xEDcio de risco aos dados","Confira mensagens e ru\xEDdo; n\xE3o confunda acesso normal de HDD com cliques repetitivos de falha.","Pare usos n\xE3o essenciais. Se os dados s\xE3o insubstitu\xEDveis ou h\xE1 ru\xEDdo anormal, desligue e busque recupera\xE7\xE3o especializada."],["Conex\xE3o com mau contato","Se n\xE3o h\xE1 dano mec\xE2nico aparente e o professor autoriza teste, confira cabos com PC desconectado.","Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade."],["Alerta de sa\xFAde da unidade","Consulte indicadores SMART e diagn\xF3stico oficial, priorizando backup e evitando teste extenso em disco degradado.","Copie dados acess\xEDveis para outra unidade saud\xE1vel; alertas de falha justificam substitui\xE7\xE3o."],["Falha persistente da unidade","Se erros acompanham a unidade em conex\xE3o confi\xE1vel, trate como falha de armazenamento.","Substitua e restaure backup. Para dados n\xE3o recuperados, encaminhe a especialista."]],"Os dados preservados s\xE3o verificados e a unidade saud\xE1vel opera sem os erros anteriores.","N\xE3o abra HDD, n\xE3o use congelador e n\xE3o execute reparos que escrevem na unidade antes de avaliar a preserva\xE7\xE3o dos dados. SSD n\xE3o tem pe\xE7as m\xF3veis; ru\xEDdo mec\xE2nico n\xE3o vem dele.");De("Tela de erro de parada: BSOD","Sistema","O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela vers\xE3o.",[["C\xF3digo e contexto desconhecidos","Registre c\xF3digo de parada, hor\xE1rio, tarefa e mudan\xE7a recente; um c\xF3digo sozinho n\xE3o identifica uma pe\xE7a.","Guarde as informa\xE7\xF5es para comparar ocorr\xEAncias antes de alterar o PC."],["Driver, atualiza\xE7\xE3o ou acess\xF3rio recente","Compare sem o acess\xF3rio rec\xE9m-instalado e consulte hist\xF3rico de erros.","Reverta ou atualize o item relacionado \xE0 falha com fonte oficial."],["Arquivos do sistema, temperatura ou disco","Fa\xE7a backup, verifique registros, refrigera\xE7\xE3o e sa\xFAde da unidade.","Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho."],["RAM ou outro hardware inst\xE1vel","Com o professor, teste em par\xE2metros padr\xE3o, mem\xF3ria e componentes apontados pelos registros.","Substitua apenas o item cuja falha foi isolada; se necess\xE1rio, encaminhe an\xE1lise dos registros de falha."]],"A atividade que provocava a falha e o uso normal ficam est\xE1veis; registre se houve nova ocorr\xEAncia.");De("PC reinicia ou perde estabilidade ap\xF3s ativar XMP/EXPO","Mem\xF3ria","O defeito come\xE7a depois de alterar frequ\xEAncia ou temporiza\xE7\xF5es da mem\xF3ria.",[["Rela\xE7\xE3o com o ajuste n\xE3o confirmada","Registre o perfil ativado e compare com a configura\xE7\xE3o anterior.","Com o professor, desative o perfil e teste nos par\xE2metros padr\xE3o."],["Limite de compatibilidade do conjunto","Confira manual, lista de mem\xF3ria validada e capacidade/frequ\xEAncia suportadas pela CPU.","Use um perfil/configura\xE7\xE3o suportada e est\xE1vel; o perfil anunciado n\xE3o \xE9 garantia para todo conjunto."],["Mistura de m\xF3dulos ou slots inadequados","Confira se os m\xF3dulos s\xE3o de um conjunto validado e ocupam os slots recomendados.","Teste o conjunto apropriado nos slots corretos."],["Falha persistente em par\xE2metros padr\xE3o","Execute teste orientado de mem\xF3ria se o erro continua sem perfil.","Siga o caso 43; encaminhe firmware/controlador se m\xF3dulos bons tamb\xE9m falham."]],"O PC fica est\xE1vel e passa no teste de mem\xF3ria com a configura\xE7\xE3o final documentada.","Reset de CMOS s\xF3 conforme o manual, registrando ajustes e tendo a chave de recupera\xE7\xE3o do disco se necess\xE1ria.");De("Computador n\xE3o inicia depois de uma troca de pe\xE7as","Inicializa\xE7\xE3o","A falha aparece logo ap\xF3s trocar CPU, GPU, fonte ou outro componente.",[["Conex\xE3o esquecida durante a montagem","PC fora da tomada: professor compara cabos, v\xEDdeo e montagem com os manuais.","Corrija o encaixe/conector ausente sem for\xE7ar nem adaptar cabos indevidos."],["Pe\xE7a nova incompat\xEDvel","Confira modelo exato, socket, mem\xF3ria, pot\xEAncia e conectores necess\xE1rios.","Instale componente compat\xEDvel. Em fontes modulares, use apenas cabos aprovados para o modelo espec\xEDfico."],["CPU depende de vers\xE3o de BIOS espec\xEDfica","Consulte a lista oficial de CPUs e a vers\xE3o m\xEDnima de firmware.","Professor planeja atualiza\xE7\xE3o apenas pelo m\xE9todo oficial, com energia est\xE1vel e hardware/m\xE9todo compat\xEDvel."],["Pe\xE7a nova defeituosa ou dano de montagem","Compare com a configura\xE7\xE3o anterior, se segura; examine socket e fixa\xE7\xF5es sem tocar em pinos.","Se a falha acompanha a pe\xE7a nova, substitua; se h\xE1 dano f\xEDsico, encaminhe para reparo especializado."]],"O novo conjunto conclui o POST, reconhece as pe\xE7as e fica est\xE1vel no uso previsto.","Atualizar BIOS por tentativa pode inutilizar a placa. N\xE3o misture cabos modulares de fontes diferentes.");De("Suspeita de defeito na placa-m\xE3e","Inicializa\xE7\xE3o","Falhas persistem mesmo ap\xF3s verificar alimenta\xE7\xE3o, conex\xF5es e componentes b\xE1sicos.",[["Conclus\xE3o prematura","Revise o hist\xF3rico e confirme tomada, fonte, monitor, cabos e c\xF3digo de POST.","Resolva causas externas e documente tudo antes de condenar a placa."],["Configura\xE7\xE3o ou montagem inadequada","Professor confere conectores, espa\xE7adores, compatibilidade e par\xE2metros registrados.","Corrija montagem; restaure ajustes conforme o manual se houver evid\xEAncia de configura\xE7\xE3o incorreta."],["Outra pe\xE7a provoca o sintoma","Com professor, fa\xE7a teste m\xEDnimo previsto no manual usando fonte, RAM e v\xEDdeo compat\xEDveis conhecidos.","Troque uma vari\xE1vel por vez e substitua a pe\xE7a que comprovadamente causa o erro."],["Falha da placa-m\xE3e ou CPU ainda n\xE3o isolada","Se a falha persiste com pe\xE7as boas e montagem correta, s\xE3o necess\xE1rios testes t\xE9cnicos adicionais.","Encaminhe para bancada especializada; substitua a placa somente com evid\xEAncia suficiente. Reparos eletr\xF4nicos ficam fora desta pr\xE1tica."]],"H\xE1 um diagn\xF3stico documentado com testes comparativos ou encaminhamento justificado, seguido de valida\xE7\xE3o do reparo.","Inspe\xE7\xE3o visual sem danos n\xE3o prova que a placa est\xE1 boa. Fonte conhecida e compat\xEDvel \xE9 diferente de fonte apenas \u201Cnova\u201D.");var Du=[{id:1,name:"Primeiros passos",short:"B\xE1sico",desc:"Energia, cabos e conex\xF5es externas."},{id:2,name:"Uso e configura\xE7\xF5es",short:"B\xE1sico +",desc:"Perif\xE9ricos, ajustes e desempenho."},{id:3,name:"Sistema e armazenamento",short:"Intermedi\xE1rio",desc:"Boot, rede, arquivos e recupera\xE7\xE3o."},{id:4,name:"Dentro do gabinete",short:"Intermedi\xE1rio +",desc:"Refrigera\xE7\xE3o, mem\xF3ria e conex\xF5es internas."},{id:5,name:"Isolamento de falhas",short:"Avan\xE7ado guiado",desc:"POST, testes comparativos e diagn\xF3stico t\xE9cnico."}];var Tc="amc-mundo-3d-v1",Ac="Preservar os dados, consultar o manual e fazer interven\xE7\xF5es internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.",is=["Preparar","Investigar","Diagnosticar","Corrigir","Validar","Comunicar"],yi=[{name:"Campus",color:"#647e4c",xp:0},{name:"Circuito",color:"#4e8b9f",xp:200},{name:"Criativo",color:"#ac7a50",xp:500},{name:"Especialista",color:"#8a72aa",xp:1e3}],Mi=i=>(i.id-1)%i.steps.length,wc=()=>({version:1,tutorial:!1,skin:0,quality:"auto",records:{}}),Lu=()=>({stage:0,tested:[],errors:0,hints:0}),_n=i=>Object.values(i.records).filter(e=>e.stage===6).length*100;function Cc(i){if(!i||typeof i!="object"||i.version!==1||!i.records||typeof i.records!="object"||Array.isArray(i.records))throw Error("Arquivo de progresso inv\xE1lido.");let e=wc();e.tutorial=i.tutorial===!0,e.quality=["auto","low"].includes(i.quality)?i.quality:"auto";for(let t of ft){let n=i.records[t.id];if(!n||!Number.isInteger(n.stage)||n.stage<0||n.stage>6||!Array.isArray(n.tested))continue;let s=[...new Set(n.tested.filter(a=>Number.isInteger(a)&&a>=0&&a<t.steps.length))],r=n.stage>1&&!s.includes(Mi(t))?1:n.stage;e.records[t.id]={stage:r,tested:s,errors:Number.isInteger(n.errors)&&n.errors>=0?Math.min(n.errors,1e5):0,hints:Number.isInteger(n.hints)&&n.hints>=0?Math.min(n.hints,1e5):0}}return e.skin=Number.isInteger(i.skin)&&yi[i.skin]?.xp<=_n(e)?i.skin:0,e}function Rc(i,e){return e===0?[Ac,"Abrir a fonte para procurar a falha.","Substituir v\xE1rias pe\xE7as sem fazer testes."]:e===2?i.steps.map(t=>t[0]):e===3?i.steps.map(t=>t[2]):e===4?[i.confirm,"Encerrar sem repetir a tarefa que apresentava o defeito.","Considerar resolvido s\xF3 porque uma pe\xE7a foi trocada."]:e===5?["Registrar sintoma, evid\xEAncia, causa, a\xE7\xE3o e valida\xE7\xE3o; comunicar os limites e a supervis\xE3o necess\xE1ria.","Informar apenas \u201Cresolvido\u201D, sem registrar os testes.","Afirmar que todo computador com esse sintoma tem a mesma causa."]:[]}function Uu(i,e,t){let n=Rc(i,e.stage);if(!n.length||!Number.isInteger(t)||t<0||t>=n.length)return!1;let s=[2,3].includes(e.stage)?Mi(i):0;return t!==s?(e.errors++,!1):(e.stage++,!0)}function Nu(i,e,t){return e.stage!==1||!Number.isInteger(t)||t<0||t>=i.steps.length?null:(e.tested.includes(t)||e.tested.push(t),t===Mi(i)?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${i.steps[t][0]}. A falha permanece at\xE9 a corre\xE7\xE3o correspondente.`:"Resultado esperado nesta verifica\xE7\xE3o: essa hip\xF3tese foi descartada no cen\xE1rio. A falha continua. Compare outra vari\xE1vel, uma de cada vez.")}function Fu(i,e){return e.stage===1&&e.tested.includes(Mi(i))?(e.stage=2,!0):!1}var ve=i=>document.querySelector(i),St=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),xt=i=>String(i).padStart(2,"0"),Ou={monitor:"M3 4h18v13H3z M8 21h8 M12 17v4",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18",flag:"M5 21V3 M5 4c5-4 9 4 14 0v10c-5 4-9-4-14 0",book:"M3 4c3-1 6 0 9 2 3-2 6-3 9-2v15c-3-1-6 0-9 2-3-2-6-3-9-2z M12 6v15",user:"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",spark:"m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7z",library:"M4 4h4v16H4z M11 4h3v16h-3z m6 1 3-1 3 15-3 1z",pin:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0 M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",map:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16",home:"m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9",close:"m6 6 12 12 M6 18 18 6",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2 M12 17h.01",settings:"m9 3-.5 3-2 1-2.5-1-2 3 2 2v2l-2 2 2 3 2.5-1 2 1 .5 3h6l.5-3 2-1 2.5 1 2-3-2-2v-2l2-2-2-3-2.5 1-2-1L15 3z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",bolt:"m13 2-9 12h7l-1 8 10-13h-7z",cpu:"M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3",layers:"m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",tool:"m14 6-3 3 4 4 3-3c4 7-3 10-7 6l-6 6-3-3 6-6C4 5 9 0 14 6",hand:"M8 12V5a2 2 0 0 1 4 0v7 M12 9a2 2 0 0 1 4 0v3 M16 10a2 2 0 0 1 4 0v5c0 4-3 6-6 6h-2c-3 0-4-2-5-4l-3-5c-1-2 1-3 3-1l3 3",check:"m5 12 4 4L20 5"},Si=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Ou[i]||Ou.monitor}"/></svg>`;function zu(){document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=Si(i.dataset.icon))}var qt=Du.map((i,e)=>({...i,short:["Conex\xF5es essenciais","Ajustes & desempenho","Sistema & dados","Dentro do gabinete","Detetives de hardware"][e],icon:["bolt","settings","layers","cpu","tool"][e],color:["#8baf58","#c99a59","#739eaa","#9c87b1","#cf8e79"][e],soft:["#eaf0db","#f4e9d7","#e3edf0","#ece7f2","#f7e7df"][e],x:[-9,0,9,-6,6][e],z:[-5,-9,-5,6,6][e]})),Be=wc(),as=!0;try{let i=localStorage.getItem(Tc);i&&(Be=Cc(JSON.parse(i)))}catch{as=!1}var bi=null,tn=0,Nn="",Ks=!1,Cg="",ku=null,Bu,Xt=null,Wt=null,Nt=null,ja=null,ss=i=>Be.records[i.id]||=Lu(),Qs=()=>ft.filter(i=>Be.records[i.id]?.stage===6);function hn(i){ve("#toast").textContent=i,ve("#toast").hidden=!1,clearTimeout(Bu),Bu=setTimeout(()=>ve("#toast").hidden=!0,5e3)}function xn(){try{localStorage.setItem(Tc,JSON.stringify(Be)),as=!0}catch{as=!1}Vu()}function Vu(){let i=_n(Be),e=i>=1e3?3:i>=500?2:i>=200?1:0;ve("#xp").textContent=`${i} XP`,ve("#rank").textContent=["T\xE9cnico iniciante","Explorador t\xE9cnico","Solucionador","Especialista do campus"][e],ve("#rank-number").textContent=xt(e+1);let t=[0,200,500,1e3][e],n=[200,500,1e3,5e3][e];ve("#next-xp").textContent=i>=5e3?"campus restaurado":`pr\xF3ximo marco: ${n} XP`,ve("#xp-bar").style.width=`${Math.min(100,(i-t)/(n-t)*100)}%`;let s=ft.find(r=>Be.records[r.id]&&Be.records[r.id].stage<6)||ft.find(r=>Be.records[r.id]?.stage!==6);ve("#quest-title").textContent=s?i?"A pr\xF3xima descoberta":"Seu primeiro diagn\xF3stico":"Campus restaurado!",ve("#quest-desc").textContent=s?`OS ${xt(s.id)} \xB7 ${s.title}`:"Voc\xEA concluiu os 50 chamados. Explore seu percurso.",ve("#save-state").innerHTML=`<span class="live-dot"></span>${as?" Progresso salvo neste dispositivo":" Sem salvamento: exporte seu percurso"}`,ve("#save-state").classList.toggle("storage-warning",!as),ve("#station-strip").innerHTML=qt.map(r=>{let a=Qs().filter(o=>o.level===r.id).length;return`<button class="station-card" data-travel="${r.id}" style="--accent:${r.color};--soft:${r.soft}"><div class="station-card-top"><span>${Si(r.icon)}</span><span>ESTA\xC7\xC3O ${xt(r.id)} \u2197</span></div><h4>${r.short}</h4><p>${a} de 10 miss\xF5es resolvidas</p><div class="station-mini-track"><i style="width:${a*10}%"></i></div></button>`}).join(""),Xt&&Xt.refresh()}function yn(i,e,t,n){ve("#panel").open||(ku=document.activeElement),Cg=n,ve("#panel-title").textContent=i,ve("#panel-kicker").textContent=e,ve("#panel-content").innerHTML=t,zu(),ve("#panel").open||ve("#panel").showModal()}function Ei(){ve("#panel").open&&ve("#panel").close()}ve("#panel").addEventListener("close",()=>{bi=null,Nn="",Ks=!1,ku?.focus({preventScroll:!0})});ve("#close-panel").onclick=Ei;ve("#panel").addEventListener("click",i=>{if(i.target===ve("#panel")){let e=ve("#panel").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&Ei()}});function Pc(){yn("Sua pr\xF3xima habilidade come\xE7a aqui.","BOAS-VINDAS AO CAMPUS AMC",`<div class="intro-art" aria-hidden="true"><span>\u{1F333}</span><span>\u{1F9D1}\u{1F3FD}\u200D\u{1F527}</span><span>\u{1F5A5}\uFE0F</span></div><p class="dialog-copy">Voc\xEA \xE9 a nova pessoa da equipe t\xE9cnica! O laborat\xF3rio precisa de ajuda. Explore <strong>5 esta\xE7\xF5es e 50 chamados reais de aprendizagem</strong>, investigue as pistas e traga os computadores de volta \xE0 vida.</p><div class="instruction-grid"><div class="instruction"><strong>01 \xB7 Explore</strong><p>Use WASD ou setas para andar na dire\xE7\xE3o da c\xE2mera. Arraste o cen\xE1rio para olhar ao redor; use a roda do mouse ou uma pin\xE7a com dois dedos para zoom. No celular, use o controle para andar.</p></div><div class="instruction"><strong>02 \xB7 Investigue</strong><p>Aproxime-se da bancada e pressione E ou toque na m\xE3o. Teste uma hip\xF3tese por vez.</p></div><div class="instruction"><strong>03 \xB7 Conquiste</strong><p>Ganhe 100 XP por miss\xE3o resolvida e desbloqueie cores para o avatar. Errar faz parte!</p></div></div><p class="note">O progresso fica neste navegador. Voc\xEA pode export\xE1-lo em Meu percurso para continuar em outro dispositivo. Esta experi\xEAncia \xE9 individual, sem cron\xF4metro.</p><div class="actions"><button class="primary" data-start>Entrar no campus ${Si("globe")}</button><button class="secondary" data-list="0">Conhecer as miss\xF5es</button></div>`,"help")}function os(i=tn){tn=Number(i);let e=ft.filter(t=>!tn||t.level===tn);yn(tn?qt[tn-1].name:"Cada problema, uma descoberta.",`${tn?"ESTA\xC7\xC3O "+xt(tn):"CENTRAL DE MISS\xD5ES"} \xB7 ${e.length} CHAMADOS`,`${tn?`<p class="dialog-copy">${St(qt[tn-1].desc)} Selecione um chamado para assumir a bancada.</p>`:""}<div class="station-filters">${[0,1,2,3,4,5].map(t=>`<button data-list="${t}" class="${t===tn?"selected":""}" aria-pressed="${t===tn}">${t?"Esta\xE7\xE3o "+xt(t):"Todas"}</button>`).join("")}</div><div class="mission-list">${e.map(t=>{let n=Be.records[t.id];return`<button class="mission-row" data-case="${t.id}"><span class="mission-num">${xt(t.id)}</span><div><strong>${St(t.title)}</strong><small>${St(t.category)} \xB7 Esta\xE7\xE3o ${xt(t.level)} \xB7 ${n?.stage===6?"100 XP conquistados":n?is[n.stage]:"100 XP dispon\xEDveis"}</small></div><span class="status">${n?.stage===6?"\u2713":n?"Retomar \u2197":"Jogar \u2197"}</span></button>`}).join("")}</div>`,"missions")}function Dc(){yn("Para onde vamos?","MAPA DO CAMPUS",`<p class="dialog-copy">Escolha uma esta\xE7\xE3o. Seu avatar vai at\xE9 a bancada e abre os chamados daquele espa\xE7o. Todas as esta\xE7\xF5es est\xE3o dispon\xEDveis.</p><div class="map-list">${qt.map(i=>`<button class="map-row" data-travel="${i.id}" style="--accent:${i.color};--soft:${i.soft}"><span>${xt(i.id)}</span><div><strong>${i.name}</strong><small>${i.desc} \xB7 ${Qs().filter(e=>e.level===i.id).length}/10</small></div><b>\u2197</b></button>`).join("")}<button class="map-row" data-mentor><span>\u2726</span><div><strong>Pra\xE7a central \xB7 Mentora Lia</strong><small>Aprenda o m\xE9todo de diagn\xF3stico.</small></div><b>\u2197</b></button></div>`,"map")}function Ic(i){let e=ft.find(t=>t.id===Number(i));e&&(ja=e.id,bi=e.id,Nn="",Ks=!1,Wt=null,Xt?.teleport(qt[e.level-1]),ss(e),xn(),rs())}var Rg=(i,e)=>i.map((t,n)=>({text:t,i:n,key:Math.sin((n+1)*97+e*31)})).sort((t,n)=>t.key-n.key);function rs(){let i=ft.find(r=>r.id===bi);if(!i)return;let e=ss(i),t=Mi(i),n=i.steps[t];if(e.stage===6){yn("Mais um problema resolvido.","ORDEM DE SERVI\xC7O "+xt(i.id)+" \xB7 MISS\xC3O CONCLU\xCDDA",`<div class="reward"><div class="reward-symbol" aria-hidden="true">\u{1F3C6}</div><span class="xp-reward">100 XP conquistados</span><h3>O laborat\xF3rio conta com voc\xEA.</h3><p>${St(i.title)}<br>Voc\xEA investigou, corrigiu e validou o resultado na simula\xE7\xE3o.</p><div class="summary-list"><p><strong>Evid\xEAncia e causa</strong>${St(n[0])}</p><p><strong>Corre\xE7\xE3o indicada</strong>${St(n[2])}</p><p><strong>Valida\xE7\xE3o</strong>${St(i.confirm)}</p></div><p>Revis\xF5es feitas: ${e.errors}. Cada nova tentativa tamb\xE9m \xE9 aprendizagem.</p><div class="actions"><button class="primary" data-next="${i.id}">Pr\xF3xima miss\xE3o \u2192</button><button class="secondary" data-explore>Voltar ao campus</button></div></div>`,"mission");return}let s="";if(e.stage===1)s=`<h3 class="stage-heading">A bancada \xE9 sua. Vamos investigar?</h3><p class="stage-desc">Execute os testes e compare os resultados simulados. A ordem \xE9 sua; mude uma vari\xE1vel por vez.</p><div class="choices">${i.steps.map((r,a)=>`<div><button class="test-card" data-test="${a}"><span class="letter">${e.tested.includes(a)?"\u2713":xt(a+1)}</span><span>${St(r[1])}</span></button>${e.tested.includes(a)?`<div class="test-result"><strong>${a===t?"EVID\xCANCIA ENCONTRADA":"HIP\xD3TESE DESCARTADA"}</strong>${St(a===t?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${r[0]}.`:"Resultado esperado nesta verifica\xE7\xE3o; essa hip\xF3tese n\xE3o explica a falha simulada. Investigue outra vari\xE1vel.")}</div>`:""}</div>`).join("")}</div><div class="actions"><button class="primary" data-investigation-next>Formular diagn\xF3stico \u2192</button></div>`;else{let r=["Antes de tocar, prepare o atendimento.","","Qual causa \xE9 sustentada pela evid\xEAncia?","Qual a\xE7\xE3o resolve a causa investigada?","O reparo funcionou? Demonstre.","Deixe uma boa passagem de servi\xE7o."],a=["Escolha o protocolo para uma interven\xE7\xE3o segura.","","Use o resultado dos testes. Sintomas parecidos podem ter causas diferentes.",`Causa identificada: ${n[0]}`,"Selecione o resultado que precisa ser verificado para encerrar o chamado.","Sua equipe precisa entender o que foi feito e os limites dessa conclus\xE3o."];s=`<h3 class="stage-heading">${r[e.stage]}</h3><p class="stage-desc">${St(a[e.stage])}</p>${e.stage>=2?`<div class="test-result"><strong>EVID\xCANCIA DA INVESTIGA\xC7\xC3O</strong>${St(n[0])}</div>`:""}<div class="choices">${Rg(Rc(i,e.stage),i.id+e.stage).map((o,l)=>`<button class="choice" data-choice="${o.i}"><span class="letter">${String.fromCharCode(65+l)}</span><span>${St(o.text)}</span></button>`).join("")}</div>`}yn(i.title,`OS ${xt(i.id)} \xB7 ESTA\xC7\xC3O ${xt(i.level)} \xB7 ${i.category}`,`<div class="mission-meta"><span>ETAPA ${e.stage+1} DE 6 \xB7 ${is[e.stage].toUpperCase()}</span><span>100 XP ao concluir \xB7 tentativas livres</span></div><div class="stage-track" aria-label="Etapa ${e.stage+1} de 6">${is.map((r,a)=>`<span class="${a<e.stage?"done":a===e.stage?"current":""}" title="${r}"></span>`).join("")}</div><p class="scenario">${St(i.symptom)}</p>${Nn?`<div class="feedback" role="status">${St(Nn)}</div>`:""}${s}${Ks?`<div class="note"><strong>Mentora Lia:</strong> ${St(e.stage<2?"Comece pelas verifica\xE7\xF5es simples. O teste "+xt(t+1)+" pode revelar uma pista decisiva.":e.stage===2?"Compare sua hip\xF3tese com esta condi\xE7\xE3o observada: "+n[0]:e.stage===3?"A a\xE7\xE3o deve corrigir exatamente a causa observada: "+n[0]:e.stage===4?"Compare com o crit\xE9rio de confirma\xE7\xE3o: "+i.confirm:"Outra equipe deve conseguir seguir o seu racioc\xEDnio.")}</div>`:""}<div class="mission-tools"><button data-hint>\u2726 Pedir uma pista \xE0 Lia</button><span>Etapas salvas automaticamente</span></div>${i.note?`<p class="note">Cuidado do caso: ${St(i.note)}</p>`:""}`,"mission")}function Ig(i){let e=ft.find(r=>r.id===bi);if(!e)return;let t=ss(e),n=t.stage,s=_n(Be);if(!Uu(e,t,Number(i))){Nn=["Antes de agir, preserve os dados e garanta a supervis\xE3o. Abrir fonte ou trocar pe\xE7as sem isolar a causa n\xE3o ajuda o diagn\xF3stico.","","Releia a evid\xEAncia do teste. Procure a causa que corresponde \xE0 condi\xE7\xE3o observada.","A corre\xE7\xE3o precisa responder \xE0 causa isolada, sem alterar v\xE1rias vari\xE1veis por tentativa.","Uma troca de pe\xE7a n\xE3o comprova o reparo. Repita a tarefa e confira o resultado esperado.","Registre o caminho completo: sintoma, teste, causa, corre\xE7\xE3o e valida\xE7\xE3o."][n],xn(),rs();return}Nn="",xn(),t.stage===4&&hn("Corre\xE7\xE3o aplicada. Agora valide o funcionamento!"),t.stage===6&&(Xt?.celebrate(),hn("Miss\xE3o conclu\xEDda! +100 XP. O campus est\xE1 voltando \xE0 vida."),yi.some(r=>r.xp>s&&r.xp<=_n(Be))&&setTimeout(()=>hn("Nova cor de uniforme dispon\xEDvel em Meu avatar!"),1800)),rs(),ve("#panel").scrollTop=0}function Lc(){yn("Observe antes de trocar.","MENTORA LIA \xB7 PRA\xC7A CENTRAL",`<p class="dialog-copy">\u201CUma pe\xE7a nova n\xE3o \xE9 um diagn\xF3stico. <strong>O melhor t\xE9cnico sabe transformar uma observa\xE7\xE3o em uma decis\xE3o.</strong> Eu vou ajudar voc\xEA a fazer isso.\u201D</p><div class="instruction-grid"><div class="instruction"><strong>1 \xB7 Uma vari\xE1vel</strong><p>Verifique uma hip\xF3tese de cada vez. Compare com algo que funciona.</p></div><div class="instruction"><strong>2 \xB7 Uma evid\xEAncia</strong><p>N\xE3o conclua s\xF3 pelo sintoma. Execute o teste e leia o resultado.</p></div><div class="instruction"><strong>3 \xB7 Uma valida\xE7\xE3o</strong><p>Repita a tarefa depois de corrigir. Registre o que demonstrou.</p></div></div><p class="note">${Ac}</p><p class="dialog-copy">Os resultados s\xE3o did\xE1ticos, com uma causa designada por cen\xE1rio. A atividade n\xE3o faz diagn\xF3stico de computadores reais. XP indica seu percurso, e a avalia\xE7\xE3o final continua com o professor.</p><div class="actions"><button class="primary" data-list="1">Assumir meu primeiro chamado \u2192</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina e guia docente \u2197</a></div>`,"mentor")}function js(){let i=Qs();yn("Conhecimento que voc\xEA construiu.","MEU PERCURSO",`<div class="stats"><div class="stat"><strong>${_n(Be)}</strong><span>XP de aprendizagem</span></div><div class="stat"><strong>${i.length}/50</strong><span>miss\xF5es conclu\xEDdas</span></div><div class="stat"><strong>${Object.values(Be.records).filter(e=>e.stage<6).length}</strong><span>em investiga\xE7\xE3o</span></div></div><p class="dialog-copy">Seu registro \xE9 local e individual. Exporte para guardar uma c\xF3pia ou continuar em outro navegador. A importa\xE7\xE3o substitui este percurso ap\xF3s sua confirma\xE7\xE3o.</p><div class="actions"><button class="primary" data-export>Exportar progresso</button><button class="secondary" data-import>Importar progresso</button><button class="secondary" data-report>Baixar relat\xF3rio</button></div><p class="note">${as?"Salvamento ativo neste navegador.":"O armazenamento n\xE3o est\xE1 dispon\xEDvel. Exporte seu progresso antes de fechar a p\xE1gina."} XP n\xE3o \xE9 nota nem certifica\xE7\xE3o de pr\xE1tica profissional.</p><div class="mission-list">${ft.filter(e=>Be.records[e.id]).map(e=>`<button class="mission-row" data-case="${e.id}"><span class="mission-num">${Be.records[e.id].stage===6?"\u2713":xt(e.id)}</span><div><strong>${St(e.title)}</strong><small>${Be.records[e.id].stage===6?"Conclu\xEDdo na simula\xE7\xE3o":is[Be.records[e.id].stage]} \xB7 ${Be.records[e.id].errors} revis\xF5es</small></div><span>\u2197</span></button>`).join("")||'<p class="dialog-copy">Seu percurso come\xE7a com uma descoberta. Assuma seu primeiro chamado!</p>'}</div>`,"journal")}function Uc(){let i=_n(Be);yn("Seu jeito de explorar.","MEU AVATAR",`<p class="dialog-copy">Cada problema resolvido abre novas possibilidades. Escolha a cor do uniforme do seu avatar.</p><div class="wardrobe">${yi.map((e,t)=>`<button class="swatch ${Be.skin===t?"chosen":""}" data-skin="${t}" ${i<e.xp?"disabled":""} aria-label="${e.name}, ${e.xp} XP necess\xE1rios" aria-pressed="${Be.skin===t}"><i style="background:${e.color}"></i><span>${i<e.xp?e.xp+" XP":e.name}</span></button>`).join("")}</div><p class="note">Voc\xEA tem ${i} XP. As cores s\xE3o recompensas visuais; todas as miss\xF5es est\xE3o dispon\xEDveis desde o in\xEDcio.</p><div class="actions"><button class="primary" data-explore>Voltar ao campus \u2192</button></div>`,"avatar")}function Pg(){yn("Do seu jeito, no seu ritmo.","CONFIGURA\xC7\xD5ES",`<div class="settings-row"><div>Qualidade gr\xE1fica<small>Use o modo leve para poupar recursos no celular.</small></div><select id="quality"><option value="auto" ${Be.quality==="auto"?"selected":""}>Autom\xE1tica</option><option value="low" ${Be.quality==="low"?"selected":""}>Leve</option></select></div><p class="dialog-copy">Voc\xEA tamb\xE9m pode acessar todas as miss\xF5es pelos bot\xF5es, sem navegar pelo ambiente 3D. O jogo respeita a prefer\xEAncia do sistema por redu\xE7\xE3o de movimento.</p><div class="actions"><button class="secondary" data-list="0">Acessar miss\xF5es</button><button class="secondary" data-help>Como jogar</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina com recursos de acessibilidade \u2197</a></div>`,"settings")}function Hu(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function Dg(){Hu(JSON.stringify({...Be,format:"amc-mundo"},null,2),"operacao-bancada-progresso.json","application/json"),hn("Seu arquivo de progresso foi preparado.")}function Lg(){let i=["# Opera\xE7\xE3o Bancada \xB7 Meu percurso",`${Qs().length}/50 miss\xF5es conclu\xEDdas na simula\xE7\xE3o. ${_n(Be)} XP.`,"XP n\xE3o \xE9 nota. A execu\xE7\xE3o real exige observa\xE7\xE3o docente."];for(let e of ft){let t=Be.records[e.id];if(t&&(i.push(`
## OS ${xt(e.id)} \xB7 ${e.title}`,`Situa\xE7\xE3o: ${t.stage===6?"conclu\xEDdo na simula\xE7\xE3o":is[t.stage]}. Revis\xF5es: ${t.errors}.`),t.stage===6)){let n=e.steps[Mi(e)];i.push("Sintoma: "+e.symptom,"Teste: "+n[1],"Causa: "+n[0],"Corre\xE7\xE3o: "+n[2],"Valida\xE7\xE3o: "+e.confirm)}}Hu(i.join(`

`),"operacao-bancada-percurso.md","text/markdown")}ve("#import-file").addEventListener("change",async i=>{let e=i.target.files[0];if(e){try{if(e.size>1e6)throw Error("Arquivo muito grande.");let t=JSON.parse(await e.text());if(t.format!=="amc-mundo")throw Error("Use um arquivo exportado por este jogo.");let n=Cc(t);yn("Restaurar este percurso?","IMPORTAR PROGRESSO",`<p class="dialog-copy">O arquivo cont\xE9m <strong>${Object.values(n.records).filter(s=>s.stage===6).length} miss\xF5es conclu\xEDdas</strong> e ${_n(n)} XP. Ele substituir\xE1 o progresso atual deste navegador.</p><div class="actions"><button class="primary" id="confirm-import">Restaurar progresso</button><button class="secondary" data-journal>Cancelar</button></div>`,"import"),ve("#confirm-import").onclick=()=>{Be=n,Xt?.setSkin(),xn(),js(),hn("Percurso restaurado.")}}catch(t){hn("N\xE3o foi poss\xEDvel importar: "+t.message)}i.target.value=""}});function Ug(){let i=ve("#world"),e=new Cs;e.background=new qe("#dce5ce"),e.fog=new ws("#dce5ce",48,95);let t=new At(60,1,.1,140),n=new $a({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(devicePixelRatio,Be.quality==="low"?1:1.7)),n.shadowMap.enabled=Be.quality!=="low",n.shadowMap.type=Qr,n.outputColorSpace=Tt,n.setClearColor("#dce5ce"),i.appendChild(n.domElement);let s=new wt;e.add(s),e.add(new ks("#ffffed","#8a9b78",2.3));let r=new Hs("#fff6db",3.2);r.position.set(-15,27,16),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-27,r.shadow.camera.right=27,r.shadow.camera.top=27,r.shadow.camera.bottom=-27,r.shadow.camera.far=75,r.shadow.normalBias=.04,r.shadow.bias=-2e-4,e.add(r);let a=new Map,o=new Map,l=(z,K={})=>{let x=z+JSON.stringify(K);return a.has(x)||a.set(x,new li({color:z,roughness:.88,...K})),a.get(x)};function c(z,K,x,g,I,B,q,k=s){let te=[z,K,x].join(",");o.has(te)||o.set(te,new pn(z,K,x));let Q=new ct(o.get(te),l(g));return Q.position.set(I,B,q),Q.castShadow=!0,Q.receiveShadow=!0,k.add(Q),Q}function u(z,K,x,g,I,B,q,k=12,te=s){let Q=new ct(new Pn(z,K,x,k),l(g));return Q.position.set(I,B,q),Q.castShadow=!0,Q.receiveShadow=!0,te.add(Q),Q}function h(z,K,x,g,I,B=s){let q=new ct(new Ns(z,0),l(K));return q.position.set(x,g,I),q.castShadow=!0,q.receiveShadow=!0,B.add(q),q}function p(z,K,x,g,I=4,B="#3e5b41",q=s){let k=document.createElement("canvas");k.width=640,k.height=144;let te=k.getContext("2d");te.fillStyle="#fafbe9",te.fillRect(0,0,640,144),te.fillStyle=B,te.font="bold 52px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText(z,320,75,600);let Q=new Rs(k);Q.colorSpace=Tt;let pe=new ct(new ci(I,I*144/640),new In({map:Q,side:jt}));return pe.position.set(K,x,g),q.add(pe),pe}c(36,1.4,31,"#a6b68a",0,-1.1,0),c(36.4,.5,31.4,"#bdcca0",0,-.25,0),c(35.8,.18,30.8,"#c9d9ab",0,.04,0),c(4.3,.05,27,"#e5dfc5",0,.16,-.2),c(29,.05,3.8,"#e5dfc5",0,.17,0),c(21,.04,3.3,"#e5dfc5",0,.17,7.1),u(4.1,4.1,.12,"#ebe5ce",0,.22,1.2,32),u(3.1,3.1,.03,"#d8dcb7",0,.3,1.2,32);let f=u(1.25,1.25,.04,"#eaf0da",0,.33,1.2,6);f.rotation.y=Math.PI/6,c(1.15,.06,.16,"#859a65",0,.37,1.2),c(.16,.06,1.15,"#859a65",0,.37,1.2);for(let z=-12;z<14;z+=1.4)c(.06,.02,.3,"#bfc6a9",1.72,.2,z);let v=[],_=[],m=[],d=[],T=[];function E(z,K,x,g){v.push({x:z,z:K,w:x/2+.28,d:g/2+.28})}function y(z,K,x,g){c(1.55,.12,.8,"#dee2d5",z,1.58,K,g),c(.12,.4,.12,"#5e6f65",z,1.8,K+.12,g),c(.58,.06,.32,"#728276",z,1.65,K+.1,g),c(1.35,.85,.12,"#52685b",z,2.2,K,g);let I=c(1.2,.67,.025,x,z,2.2,K+.075,g);c(1.02,.04,.32,"#f1f0df",z,1.7,K+.55,g);for(let B=0;B<3;B++)c(.8,.012,.018,"#b7c2aa",z,1.728,K+.47+B*.09,g);return c(.18,.06,.23,"#d4ddc8",z+.75,1.71,K+.5,g),c(.55,.92,.72,"#f0efde",z+1.15,1.98,K+.14,g),c(.42,.74,.03,"#d5ddc8",z+1.15,1.98,K+.52,g),c(.04,.04,.03,"#a9d871",z+1.15,2.23,K+.55,g),I}qt.forEach((z,K)=>{let x=new wt;x.position.set(z.x,0,z.z),s.add(x),_.push(x),c(7.2,.22,5.7,"#e8eadb",0,.28,0,x),c(7.35,.12,5.85,z.color,0,.16,0,x),c(7.2,2.25,.2,"#eeeede",0,1.47,-2.7,x),c(7.4,.15,.4,z.color,0,2.62,-2.72,x),c(.18,1.5,3.4,"#e9eadb",-3.5,1.1,-1.2,x),c(.18,1.5,3.4,"#e9eadb",3.5,1.1,-1.2,x),E(z.x,z.z-2.7,7.2,.25),E(z.x-3.5,z.z-1.2,.2,3.4),E(z.x+3.5,z.z-1.2,.2,3.4),c(6.6,.2,1.65,"#b5a17c",0,1.48,-.85,x),c(6.7,.11,1.7,"#d3c5a4",0,1.61,-.85,x),[-2.7,2.7].forEach(te=>{c(.2,1.1,.2,"#8b9980",te,.85,-1.35,x),c(.2,1.1,.2,"#8b9980",te,.85,-.4,x)}),E(z.x,z.z-.85,6.6,1.65);let g=y(-1.7,-.95,"#a9be9d",x),I=y(1.35,-.95,"#a9be9d",x);m.push([g,I]),c(.8,.18,.75,"#8a9d72",-.95,.77,.75,x),c(.7,.8,.12,"#9caf87",-.95,1.15,1.08,x),c(.15,.42,.15,"#64795e",-.95,.5,.75,x),p(xt(K+1)+"  /  "+["CONEX\xD5ES","CONFIGURA\xC7\xD5ES","SISTEMA & DADOS","HARDWARE","DIAGN\xD3STICO"][K],0,2.18,-2.56,5.5,z.color,x),c(.9,1.9,.55,"#a7b593",-2.85,1.25,-1.9,x);for(let te=0;te<3;te++)c(.85,.08,.55,"#e8e8d3",-2.85,.65+te*.55,-1.88,x),c(.25,.3,.32,[z.color,"#c5bf9c","#c8d4b6"][te],-2.85,.84+te*.55,-1.85,x);let B=new wt;B.position.set(0,3.55,-1),x.add(B);let q=c(.46,.46,.46,z.color,0,0,0,B);q.rotation.z=Math.PI/4,q.rotation.x=Math.PI/4,d.push(B);let k=c(7,.02,5.5,z.color,0,.43,0,x);k.visible=!1,T.push({type:"station",id:z.id,group:x,hit:k})});function w(z,K,x=1){let g=new wt;g.position.set(z,0,K),g.scale.setScalar(x),s.add(g),u(.18,.26,2.7,"#a4946e",0,1.4,0,7,g),h(1.35,"#9cb57b",0,3.15,0,g),h(1.05,"#aec68a",-.65,3.45,.1,g),h(.95,"#b8ce92",.5,4,.1,g),E(z,K,.7,.7)}[[-15,-11,1],[-12,-12,.75],[14,-11,1.1],[16,-7,.8],[-16,0,.9],[16,2,1],[-14,9,.95],[-11,12,.7],[13,11,.9],[16,10,.65],[-3,-13,.6],[5,-13,.7]].forEach(z=>w(...z));function A(z,K){u(.8,.9,.4,"#c0c4a3",z,.35,K,8),h(.7,"#9eb47c",z,.8,K),h(.45,"#acc487",z+.45,.75,K+.12)}[[-14,-3],[14,-3],[-11,3],[11,3],[-3,12],[3,12],[-5,-11],[5,-11]].forEach(z=>A(...z));function R(z,K){u(.09,.12,3.6,"#8b9c7d",z,1.9,K,6),c(.55,.45,.55,"#f5f1cd",z,3.7,K),c(.65,.12,.65,"#8e9c7d",z,3.99,K)}[[-4,1],[4,1],[-13,-7],[13,-7],[-11,8],[11,8]].forEach(z=>R(...z));function L(z,K){c(2.5,.14,.65,"#bca17a",z,.8,K),c(2.5,.65,.1,"#c8ae83",z,1.25,K-.3),[-.85,.85].forEach(x=>c(.12,.6,.4,"#7f9172",z+x,.43,K)),E(z,K,2.5,.7)}L(-5,2),L(5,2),L(-12,4),L(12,4),c(.3,3.7,.3,"#738a61",-2,1.98,12),c(.3,3.7,.3,"#738a61",2,1.98,12),c(4.8,.8,.24,"#f2f0d7",0,3.6,12),p("CAMPUS AMC",0,3.62,12.15,4.4,"#587348");for(let z=0;z<22;z++){let K=Math.sin(z*13.1)*16,x=Math.cos(z*6.3)*13;if(!(Math.abs(K)<3||Math.abs(x)<2))for(let g=0;g<3;g++)u(.07,.1,.3,"#9cb478",K+g*.15,.28,x+g*.13,4)}let b=(z,K,x)=>Pu(z,K,x,l),S=[];s.traverse(z=>{if(!(!z.isMesh||!z.visible)){for(let K=z.parent;K;K=K.parent)if(d.includes(K))return;S.push(z)}}),s.updateMatrixWorld(!0);let D=new Ja(t,S),N=b(yi[Be.skin].color);N.group.name="student-avatar",N.group.position.set(0,.12,7),N.group.rotation.y=Math.PI,s.add(N.group);let G=b("#d3a66f","#b9835d","#4b3c31");G.group.position.set(-1.8,.12,3),G.group.rotation.y=.3,s.add(G.group),p("LIA \xB7 MENTORA",-1.8,3.1,3,2.8,"#7a8257");let X=new ct(new Ls(.17,.35,4),l("#f8ffb6"));X.position.set(0,3,0),X.rotation.z=Math.PI,N.group.add(X);let Z=[];for(let z=0;z<22;z++){let K=c(.12,.12,.12,["#d2e996","#f4d58a","#9fc6bc"][z%3],0,-10,0);Z.push({mesh:K,v:new P,life:0})}let Y=ve("#station-labels");Y.innerHTML=qt.map(z=>`<span class="station-label" id="label-${z.id}" style="--accent:${z.color}"><b>${xt(z.id)}</b>${z.short}</span>`).join("");let ae=1,W=1;function le(){ae=Math.max(1,i.clientWidth),W=Math.max(1,i.clientHeight),n.setSize(ae,W),t.aspect=ae/W,t.fov=t.aspect<.9?68:60,t.updateProjectionMatrix()}new ResizeObserver(le).observe(i),le();let ge=new Set,ke={x:0,y:0},Ke=!1,Qe=0,$e=performance.now(),J=!0,ee=matchMedia("(prefers-reduced-motion: reduce)").matches,xe;function Ue(){ke={x:0,y:0},ve("#joystick-knob").style.transform=""}function Se(){ge.clear(),Ue(),xe?.cancel()}addEventListener("keydown",z=>{if(ve("#panel").open||/INPUT|SELECT|TEXTAREA/.test(z.target.tagName))return;let K=z.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","e","m","r"].includes(K)&&z.preventDefault(),K==="e"&&!z.repeat?Nc():K==="m"&&!z.repeat?Dc():K==="r"&&!z.repeat?D.recenter(N.group.rotation.y):ge.add(K)}),addEventListener("keyup",z=>ge.delete(z.key.toLowerCase())),addEventListener("blur",Se),document.addEventListener("visibilitychange",()=>{J=!document.hidden,Se(),$e=performance.now()}),ve("#panel").addEventListener("close",Se);let He=ve("#joystick"),mt=null;function C(z){let K=He.getBoundingClientRect(),x=z.clientX-K.left-K.width/2,g=z.clientY-K.top-K.height/2,I=Math.hypot(x,g),B=I>32?32/I:1;ke={x:x*B/32,y:g*B/32},ve("#joystick-knob").style.transform=`translate(${x*B}px,${g*B}px)`,Wt=null}He.addEventListener("pointerdown",z=>{mt=z.pointerId,He.setPointerCapture(z.pointerId),C(z)}),He.addEventListener("pointermove",z=>{z.pointerId===mt&&C(z)});for(let z of["pointerup","pointercancel","lostpointercapture"])He.addEventListener(z,()=>{mt=null,Ue()});let nt=new hi,Fe=new we;xe=Iu(n.domElement,D,{blocked:()=>ve("#panel").open,onTap(z,K){let x=n.domElement.getBoundingClientRect();if(!x.width||!x.height)return;Fe.set((z-x.left)/x.width*2-1,-(K-x.top)/x.height*2+1),nt.setFromCamera(Fe,t);let g=nt.intersectObjects(_,!0).find(I=>I.object.visible);if(g){let I=qt.find((B,q)=>{let k=g.object;for(;k;){if(k===_[q])return!0;k=k.parent}return!1});I&&Gu(I.id)}}}),ve("#camera-center").onclick=()=>D.recenter(N.group.rotation.y);function Re(z,K){return Math.abs(z)>17.2||Math.abs(K)>14.2?!0:v.some(x=>Math.abs(z-x.x)<x.w&&Math.abs(K-x.z)<x.d)}function be(z,K,x=null){let te=se=>({x:-16.8+se%57*.6,z:-13.8+Math.floor(se/57)*.6}),Q=(se,j)=>Math.max(0,Math.min(56,Math.round((se- -16.8)/.6)))+57*Math.max(0,Math.min(46,Math.round((j- -13.8)/.6))),pe=se=>{let j=te(se);return!Re(j.x,j.z)},Te=se=>{if(pe(se))return se;for(let j=1;j<7;j++)for(let $=-j;$<=j;$++)for(let he=-j;he<=j;he++){let Ae=se%57+he,Ye=Math.floor(se/57)+$;if(Ae>=0&&Ae<57&&Ye>=0&&Ye<47&&pe(Ae+Ye*57))return Ae+Ye*57}return se},ne=Te(Q(N.group.position.x,N.group.position.z)),ue=Te(Q(z,K)),Ie=se=>{let j=te(se),$=te(ue);return Math.hypot(j.x-$.x,j.z-$.z)},ye=[ne],ce=new Map([[ne,0]]),Oe=new Map,U=new Set,ie=!1;for(;ye.length;){ye.sort((he,Ae)=>ce.get(he)+Ie(he)-(ce.get(Ae)+Ie(Ae)));let se=ye.shift();if(se===ue){ie=!0;break}U.add(se);let j=se%57,$=Math.floor(se/57);for(let he=-1;he<=1;he++)for(let Ae=-1;Ae<=1;Ae++){if(!Ae&&!he)continue;let Ye=j+Ae,Ze=$+he;if(Ye<0||Ye>=57||Ze<0||Ze>=47)continue;let Mt=Ye+Ze*57;if(U.has(Mt)||!pe(Mt)||Ae&&he&&(!pe(j+Ae+$*57)||!pe(j+($+he)*57)))continue;let Ft=ce.get(se)+.6*(Ae&&he?Math.SQRT2:1);Ft<(ce.get(Mt)??1/0)&&(Oe.set(Mt,se),ce.set(Mt,Ft),ye.includes(Mt)||ye.push(Mt))}}if(!ie){hn("Escolha a esta\xE7\xE3o pelo menu de miss\xF5es para assumir a bancada.");return}let oe=[];for(let se=ue;se!==ne;se=Oe.get(se))oe.unshift(te(se));oe.push(Re(z,K)?te(ue):{x:z,z:K}),Wt={x:z,z:K,id:x,route:oe}}function it(z,K,x){let g=N.group.position,I=x*5.3,B=g.x+z*I,q=g.z+K*I;if(Re(B,g.z)||(g.x=B),Re(g.x,q)||(g.z=q),Ke=Math.abs(z)+Math.abs(K)>.06,Ke){let te=Math.atan2(z,K)-N.group.rotation.y;te=Math.atan2(Math.sin(te),Math.cos(te)),N.group.rotation.y+=te*Math.min(1,x*14)}}function Me(){qt.forEach((z,K)=>{let x=Qs().filter(I=>I.level===z.id).length,g=ja&&ft[ja-1].level===z.id&&Be.records[ja]?.stage>=4;m[K].forEach((I,B)=>I.material=l(x>B*5||g?"#bada8b":"#9db3a4",{emissive:x||g?"#496931":"#294035",emissiveIntensity:.12}))})}function ze(z){requestAnimationFrame(ze);let K=Math.min((z-$e)/1e3,.045);if($e=z,!J)return;if(Qe+=K,Ke=!1,!ve("#panel").open){let I=(ge.has("d")||ge.has("arrowright")?1:0)-(ge.has("a")||ge.has("arrowleft")?1:0)+ke.x,B=(ge.has("s")||ge.has("arrowdown")?1:0)-(ge.has("w")||ge.has("arrowup")?1:0)+ke.y;if(Math.abs(I)+Math.abs(B)>.08){Wt=null;let q=Math.max(1,Math.hypot(I,B));I/=q,B/=q;let k=D.movement(I,B);it(k.x,k.z,K)}else if(Wt){let q=Wt.route[0]||Wt,k=q.x-N.group.position.x,te=q.z-N.group.position.z,Q=Math.hypot(k,te);if(Q<.04){if(Wt.route.length&&Wt.route.shift(),!Wt.route.length){let pe=Wt;Wt=null,pe.id?os(pe.id):Lc()}}else it(k/Q,te/Q,Math.min(K,Q/5.3))}}N.limbs.forEach((I,B)=>I.rotation.x=Ke&&!ee?Math.sin(Qe*11+(B<2?0:Math.PI))*.45*(B%2?1:-1):0),N.group.position.y=.12+(Ke&&!ee?Math.abs(Math.sin(Qe*11))*.045:0),X.position.y=3+(ee?0:Math.sin(Qe*2)*.08),d.forEach((I,B)=>{I.position.y=3.55+(ee?0:Math.sin(Qe*1.8+B)*.12),ee||(I.rotation.y=Qe*.6)});let x=N.group.position;Nt=null;let g=1/0;for(let I of qt){let B=Math.hypot(x.x-I.x,x.z-(I.z+1.7));B<3.9&&B<g&&(Nt={type:"station",id:I.id},g=B)}Math.hypot(x.x+1.8,x.z-3)<2.1&&(Nt={type:"mentor"}),ve("#interact").hidden=!Nt,ve("#interact span").textContent=Nt?.type==="mentor"?"Conversar com Lia":Nt?`Explorar esta\xE7\xE3o ${xt(Nt.id)}`:"Explorar bancada",ve("#mobile-interact").style.opacity=Nt?"1":".45",ve("#location-name").textContent=Nt?.type==="station"?qt[Nt.id-1].name:Nt?"Pra\xE7a \xB7 Mentora Lia":"Pra\xE7a central",D.update(x,K,{reducedMotion:ee});for(let I of qt){let B=new P(I.x,4.2,I.z-1.1).project(t),q=ve("#label-"+I.id);q.style.left=`${(B.x*.5+.5)*ae}px`,q.style.top=`${(-B.y*.5+.5)*W}px`,q.style.opacity=B.z>-1&&B.z<1&&Math.abs(B.x)<.95&&Math.abs(B.y)<.85?"1":"0"}Z.forEach(I=>{I.life<=0||(I.life-=K,I.mesh.visible=I.life>0,I.mesh.position.addScaledVector(I.v,K),I.v.y-=K*5,I.mesh.rotation.x+=K*3)}),n.render(e,t)}return requestAnimationFrame(ze),ve("#loading").hidden=!0,ve("#loading").style.display="none",Me(),{refresh:Me,navigate:be,teleport(z){Se(),N.group.position.set(z.x,.12,z.z+2.1),N.group.rotation.y=Math.PI,D.recenter(Math.PI),D.update(N.group.position,0,{snap:!0})},home(){Se(),Wt=null,N.group.position.set(0,.12,7),N.group.rotation.y=Math.PI,D.recenter(Math.PI),D.update(N.group.position,0,{snap:!0})},setSkin(){N.shirtMeshes.forEach(z=>z.material=l(yi[Be.skin].color))},quality(){n.setPixelRatio(Math.min(devicePixelRatio,Be.quality==="low"?1:1.7)),n.shadowMap.enabled=Be.quality!=="low",le()},celebrate(){Z.forEach(z=>{z.life=2,z.mesh.visible=!0,z.mesh.position.copy(N.group.position).add(new P(0,2.8,0)),z.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)})}}}function Gu(i){let e=qt.find(t=>t.id===Number(i));if(e){if(Ei(),!Xt){os(e.id);return}Xt.navigate(e.x,e.z+2.2,e.id),hn("A caminho da esta\xE7\xE3o "+xt(e.id)+". Voc\xEA tamb\xE9m pode usar WASD ou o controle virtual.")}}function Nc(){ve("#panel").open||(Nt?.type==="mentor"?Lc():Nt?os(Nt.id):hn("Aproxime-se de uma bancada ou escolha uma esta\xE7\xE3o no mapa."))}document.addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if("list"in t)os(Number(t.list));else if("case"in t)Ic(t.case);else if("choice"in t)Ig(t.choice);else if("test"in t){let n=ft[bi-1];Nu(n,ss(n),Number(t.test)),Nn="",xn(),rs()}else if("investigationNext"in t){let n=ft[bi-1];Fu(n,ss(n))?Nn="":Nn="Ainda falta uma evid\xEAncia que explique a falha. Execute outras verifica\xE7\xF5es ou pe\xE7a uma pista \xE0 Lia.",xn(),rs()}else if("hint"in t)ss(ft[bi-1]).hints++,Ks=!Ks,xn(),rs();else if("next"in t){let n=ft.find(s=>s.id>Number(t.next)&&Be.records[s.id]?.stage!==6)||ft.find(s=>Be.records[s.id]?.stage!==6);n?Ic(n.id):js()}else if("travel"in t)Gu(t.travel);else if("start"in t)Be.tutorial=!0,xn(),Ei(),hn("Bem-vindo! Toque em uma esta\xE7\xE3o ou mova seu avatar pelo campus.");else if("explore"in t)Ei();else if("export"in t)Dg();else if("import"in t)ve("#import-file").click();else if("report"in t)Lg();else if("journal"in t)js();else if("skin"in t){let n=Number(t.skin);yi[n]?.xp<=_n(Be)&&(Be.skin=n,Xt?.setSkin(),xn(),Uc())}else"help"in t?Pc():"mentor"in t&&(Ei(),Xt?Xt.navigate(-1.5,4.2):Lc())});ve("#world-nav").onclick=()=>{Ei(),ve("#world").scrollIntoView({behavior:"smooth",block:"center"})};ve("#missions-nav").onclick=()=>os(0);ve("#journal-nav").onclick=js;ve("#avatar-nav").onclick=Uc;ve("#map-button").onclick=Dc;ve("#all-missions").onclick=()=>os(0);ve("#help").onclick=Pc;ve("#settings").onclick=Pg;ve("#camera-reset").onclick=()=>{Xt?.home(),hn("Voc\xEA voltou \xE0 pra\xE7a central.")};ve("#interact").onclick=Nc;ve("#mobile-interact").onclick=Nc;ve("#quest-go").onclick=()=>{let i=ft.find(e=>Be.records[e.id]&&Be.records[e.id].stage<6)||ft.find(e=>Be.records[e.id]?.stage!==6);i?Ic(i.id):js()};document.addEventListener("change",i=>{i.target.id==="quality"&&(Be.quality=i.target.value,Xt?.quality(),xn())});var Qa=document.createElement("nav");Qa.className="mobile-toolbar";Qa.setAttribute("aria-label","Navega\xE7\xE3o m\xF3vel");Qa.innerHTML=`<button id="mobile-map">${Si("map")}Campus</button><button data-list="0">${Si("flag")}Miss\xF5es</button><button data-journal>${Si("book")}Percurso</button><button id="mobile-avatar">${Si("user")}Avatar</button>`;document.body.append(Qa);ve("#mobile-map")?.addEventListener("click",Dc);ve("#mobile-avatar")?.addEventListener("click",Uc);zu();Vu();try{Xt=Ug()}catch(i){console.error("Mundo 3D indispon\xEDvel:",i),ve("#loading").style.display="none",ve("#world").innerHTML='<div id="world-fallback"><strong>Seu navegador n\xE3o disponibilizou o ambiente 3D.</strong><p>Todas as 50 miss\xF5es continuam dispon\xEDveis para jogar pelos bot\xF5es abaixo.</p><button class="primary" data-list="0">Abrir miss\xF5es</button></div>',ve("#station-labels").hidden=!0}Be.tutorial||setTimeout(Pc,650);
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
