var nd=0,Tc=1,id=2;var wc=1,Fa=2,On=3,$n=0,Wt=1,fn=2,Jn=0,Di=1,Cc=2,Rc=3,Ic=4,sd=5,di=100,rd=101,ad=102,od=103,cd=104,ld=200,dd=201,ud=202,hd=203,oa=204,ca=205,fd=206,pd=207,md=208,gd=209,vd=210,xd=211,_d=212,yd=213,bd=214,Ba=0,za=1,ka=2,Li=3,Va=4,Ha=5,Ga=6,Wa=7,Pc=0,Md=1,Sd=2,jn=0,Ed=1,Ad=2,Td=3,ws=4,wd=5,Cd=6,Rd=7;var Dc=300,Gi=301,Wi=302,qa=303,Xa=304,Mr=306,la=1e3,li=1001,da=1002,un=1003,Id=1004;var Sr=1005;var An=1006,$a=1007;var gi=1008;var Cn=1009,Lc=1010,Uc=1011,Cs=1012,Ya=1013,vi=1014,Nn=1015,Rs=1016,Za=1017,Ja=1018,Is=1020,Oc=35902,Nc=35899,Fc=1021,Bc=1022,pn=1023,gs=1026,Ps=1027,zc=1028,ja=1029,kc=1030,Ka=1031;var Qa=1033,Er=33776,Ar=33777,Tr=33778,wr=33779,eo=35840,to=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,co=37809,lo=37810,uo=37811,ho=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,xo=37818,_o=37819,yo=37820,bo=37821,Mo=36492,So=36494,Eo=36495,Ao=36283,To=36284,wo=36285,Co=36286;var Qs=2300,ua=2301,ra=2302,vc=2400,xc=2401,_c=2402;var Pd=3200,Dd=3201;var Vc=0,Ld=1,Kn="",At="srgb",Ui="srgb-linear",er="linear",it="srgb";var Pi=7680;var yc=519,Ud=512,Od=513,Nd=514,Hc=515,Fd=516,Bd=517,zd=518,kd=519,bc=35044;var Gc="300 es",En=2e3,tr=2001;var Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=1234567,Zs=Math.PI/180,vs=180/Math.PI;function Ds(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function sh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rh(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function ah(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function oh(i,e=1){return e-Math.abs(Wc(i,e*2)-e)}function ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uh(i,e){return i+Math.random()*(e-i)}function hh(i){return i*(.5-Math.random())}function fh(i){i!==void 0&&(Ll=i);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ph(i){return i*Zs}function mh(i){return i*vs}function gh(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _h(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qi={DEG2RAD:Zs,RAD2DEG:vs,generateUUID:Ds,clamp:He,euclideanModulo:Wc,mapLinear:sh,inverseLerp:rh,lerp:Js,damp:ah,pingpong:oh,smoothstep:ch,smootherstep:lh,randInt:dh,randFloat:uh,randFloatSpread:hh,seededRandom:fh,degToRad:ph,radToDeg:mh,isPowerOfTwo:gh,ceilPowerOfTwo:vh,floorPowerOfTwo:xh,setQuaternionFromProperEuler:_h,normalize:Vt,denormalize:ps},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],p=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||l!==p||c!==f||d!==g){let m=1-o,h=l*p+c*f+d*g+u*b,_=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let R=Math.sqrt(E),C=Math.atan2(R,h*_);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}let y=o*_;if(l=l*m+p*y,c=c*m+f*y,d=d*m+g*y,u=u*m+b*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],p=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*f-c*p,e[t+1]=l*g+d*p+c*u-o*f,e[t+2]=c*g+d*f+o*p-l*u,e[t+3]=d*g-o*u-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),p=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*d*u+c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u-p*f*g;break;case"YXZ":this._x=p*d*u+c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u+p*f*g;break;case"ZXY":this._x=p*d*u-c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u-p*f*g;break;case"ZYX":this._x=p*d*u-c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u+p*f*g;break;case"YZX":this._x=p*d*u+c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u-p*f*g;break;case"XZY":this._x=p*d*u-c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],p=n+o+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new U,Ul=new Zn,ke=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],p=n[2],f=n[5],g=n[8],b=s[0],m=s[3],h=s[6],_=s[1],E=s[4],y=s[7],R=s[2],C=s[5],T=s[8];return r[0]=a*b+o*_+l*R,r[3]=a*m+o*E+l*C,r[6]=a*h+o*y+l*T,r[1]=c*b+d*_+u*R,r[4]=c*m+d*E+u*C,r[7]=c*h+d*y+u*T,r[2]=p*b+f*_+g*R,r[5]=p*m+f*E+g*C,r[8]=p*h+f*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,p=o*l-d*r,f=c*r-a*l,g=t*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*c-d*n)*b,e[2]=(o*n-s*a)*b,e[3]=p*b,e[4]=(d*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$o=new ke;function qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=xs("canvas");return i.style.display="block",i}var Ol={};function _s(i){i in Ol||(Ol[i]=!0,console.warn(i))}function Hd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Nl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yh(){let i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:e,whitePoint:n,transfer:er,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var Ze=yh();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,ha=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=xs("canvas")),ts.width=e.width,ts.height=e.height;let s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bh=0,ys=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yo(s[a].image)):r.push(Yo(s[a]))}else r=Yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mh=0,Zo=new U,Ht=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=An,a=gi,o=pn,l=Cn,c=i.DEFAULT_ANISOTROPY,d=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ds(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Dc;Ht.DEFAULT_ANISOTROPY=1;var vt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],p=l[1],f=l[5],g=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,R=(h+1)/2,C=(d+p)/4,T=(u+b)/4,A=(g+m)/4;return E>y&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=A/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(p-d)*(p-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(p-d)/_,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ht(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ys(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nr=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Vr.subVectors(this.max,qs),ns.subVectors(e.a,qs),is.subVectors(e.b,qs),ss.subVectors(e.c,qs),ni.subVectors(is,ns),ii.subVectors(ss,is),wi.subVectors(ns,ss);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!Jo(t,ns,is,ss,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,ns,is,ss,Vr))?!1:(Hr.crossVectors(ni,ii),t=[Hr.x,Hr.y,Hr.z],Jo(t,ns,is,ss,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vn=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,kr=new ui,ns=new U,is=new U,ss=new U,ni=new U,ii=new U,wi=new U,qs=new U,Vr=new U,Hr=new U,Ci=new U;function Jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),d=n.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Sh=new ui,Xs=new U,jo=new U,bs=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(jo)),this.expandByPoint(Xs.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hn=new U,Ko=new U,Gr=new U,si=new U,Qo=new U,Wr=new U,ec=new U,ir=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ko.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Ko);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=si.dot(this.direction),l=-si.dot(Gr),c=si.lengthSq(),d=Math.abs(1-a*a),u,p,f,g;if(d>0)if(u=a*l-o,p=a*o-l,g=r*d,u>=0)if(p>=-g)if(p<=g){let b=1/d;u*=b,p*=b,f=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ko).addScaledVector(Gr,p),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Qo.subVectors(t,e),Wr.subVectors(n,e),ec.crossVectors(Qo,Wr);let a=this.direction.dot(ec),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);let l=o*this.direction.dot(Wr.crossVectors(si,Wr));if(l<0)return null;let c=o*this.direction.dot(Qo.cross(si));if(c<0||l+c>a)return null;let d=-o*si.dot(ec);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{constructor(e,t,n,s,r,a,o,l,c,d,u,p,f,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,p,f,g,b,m)}set(e,t,n,s,r,a,o,l,c,d,u,p,f,g,b,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=p,h[3]=f,h[7]=g,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*d,f=a*u,g=o*d,b=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=p-b*c,t[9]=-o*l,t[2]=b-p*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*d,f=l*u,g=c*d,b=c*u;t[0]=p+b*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=b+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*d,f=l*u,g=c*d,b=c*u;t[0]=p-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=b-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*d,f=a*u,g=o*d,b=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=p*c+b,t[1]=l*u,t[5]=b*c+p,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-p*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=p-b*u}else if(e.order==="XZY"){let p=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=p*u+b,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=b*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Ah)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ri.crossVectors(n,Kt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ri.crossVectors(n,Kt)),ri.normalize(),qr.crossVectors(Kt,ri),s[0]=ri.x,s[4]=qr.x,s[8]=Kt.x,s[1]=ri.y,s[5]=qr.y,s[9]=Kt.y,s[2]=ri.z,s[6]=qr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],p=n[9],f=n[13],g=n[2],b=n[6],m=n[10],h=n[14],_=n[3],E=n[7],y=n[11],R=n[15],C=s[0],T=s[4],A=s[8],x=s[12],v=s[1],P=s[5],N=s[9],k=s[13],$=s[2],j=s[6],Y=s[10],oe=s[14],H=s[3],te=s[7],fe=s[11],ge=s[15];return r[0]=a*C+o*v+l*$+c*H,r[4]=a*T+o*P+l*j+c*te,r[8]=a*A+o*N+l*Y+c*fe,r[12]=a*x+o*k+l*oe+c*ge,r[1]=d*C+u*v+p*$+f*H,r[5]=d*T+u*P+p*j+f*te,r[9]=d*A+u*N+p*Y+f*fe,r[13]=d*x+u*k+p*oe+f*ge,r[2]=g*C+b*v+m*$+h*H,r[6]=g*T+b*P+m*j+h*te,r[10]=g*A+b*N+m*Y+h*fe,r[14]=g*x+b*k+m*oe+h*ge,r[3]=_*C+E*v+y*$+R*H,r[7]=_*T+E*P+y*j+R*te,r[11]=_*A+E*N+y*Y+R*fe,r[15]=_*x+E*k+y*oe+R*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],p=e[10],f=e[14],g=e[3],b=e[7],m=e[11],h=e[15];return g*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*f-n*l*f)+b*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*d-r*l*d)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*d-n*c*d)+h*(-s*o*d-t*l*u+t*o*p+s*a*u-n*a*p+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],p=e[10],f=e[11],g=e[12],b=e[13],m=e[14],h=e[15],_=u*m*c-b*p*c+b*l*f-o*m*f-u*l*h+o*p*h,E=g*p*c-d*m*c-g*l*f+a*m*f+d*l*h-a*p*h,y=d*b*c-g*u*c+g*o*f-a*b*f-d*o*h+a*u*h,R=g*u*l-d*b*l-g*o*p+a*b*p+d*o*m-a*u*m,C=t*_+n*E+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=_*T,e[1]=(b*p*r-u*m*r-b*s*f+n*m*f+u*s*h-n*p*h)*T,e[2]=(o*m*r-b*l*r+b*s*c-n*m*c-o*s*h+n*l*h)*T,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*f-n*l*f)*T,e[4]=E*T,e[5]=(d*m*r-g*p*r+g*s*f-t*m*f-d*s*h+t*p*h)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*h-t*l*h)*T,e[7]=(a*p*r-d*l*r+d*s*c-t*p*c-a*s*f+t*l*f)*T,e[8]=y*T,e[9]=(g*u*r-d*b*r-g*n*f+t*b*f+d*n*h-t*u*h)*T,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*h+t*o*h)*T,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=R*T,e[13]=(d*b*s-g*u*s+g*n*p-t*b*p-d*n*m+t*u*m)*T,e[14]=(g*o*s-a*b*s-g*n*l+t*b*l+a*n*m-t*o*m)*T,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*p+t*o*p)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,p=r*c,f=r*d,g=r*u,b=a*d,m=a*u,h=o*u,_=l*c,E=l*d,y=l*u,R=n.x,C=n.y,T=n.z;return s[0]=(1-(b+h))*R,s[1]=(f+y)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(p+h))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+E)*T,s[9]=(m-_)*T,s[10]=(1-(p+b))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);let c=1/r,d=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=En,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===tr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=En,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===En)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===tr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rs=new U,Mn=new gt,Eh=new U(0,0,0),Ah=new U(1,1,1),ri=new U,qr=new U,Kt=new U,Bl=new gt,zl=new Zn,Tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zl.setFromEuler(this),this.setFromQuaternion(zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Th=0,kl=new U,as=new Zn,Gn=new gt,Xr=new U,$s=new U,wh=new U,Ch=new Zn,Vl=new U(1,0,0),Hl=new U(0,1,0),Gl=new U(0,0,1),Wl={type:"added"},Rh={type:"removed"},os={type:"childadded",child:null},tc={type:"childremoved",child:null},Ot=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Tn,n=new Zn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new ke}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt($s,Xr,this.up):Gn.lookAt(Xr,$s,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Gn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wl),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wl),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new U,Wn=new U,nc=new U,qn=new U,cs=new U,ls=new U,ql=new U,ic=new U,sc=new U,rc=new U,ac=new vt,oc=new vt,cc=new vt,ci=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Wn.subVectors(n,t),nc.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Wn),l=Sn.dot(nc),c=Wn.dot(Wn),d=Wn.dot(nc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(c*l-o*d)*p,g=(a*d-o*l)*p;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),ls.subVectors(r,n),ic.subVectors(e,n);let l=cs.dot(ic),c=ls.dot(ic);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,s);let d=cs.dot(sc),u=ls.dot(sc);if(d>=0&&u<=d)return t.copy(s);let p=l*u-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(cs,a);rc.subVectors(e,r);let f=cs.dot(rc),g=ls.dot(rc);if(g>=0&&f<=g)return t.copy(r);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return ql.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(ql,o);let h=1/(m+b+p);return a=b*h,o=p*h,t.copy(n).addScaledVector(cs,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},$r={h:0,s:0,l:0};function lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Wc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lc(a,r,e+1/3),this.g=lc(a,r,e),this.b=lc(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.workingToColorSpace(Ut.copy(this),e),Math.round(He(Ut.r*255,0,255))*65536+Math.round(He(Ut.g*255,0,255))*256+Math.round(He(Ut.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=At){Ze.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL($r);let n=Js(ai.h,$r.h,t),s=Js(ai.s,$r.s,t),r=Js(ai.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Ge;Ge.NAMES=Gd;var Ih=0,hi=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Di,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=ca,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new U,Yr=new we,Ph=0,en=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ph++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}};var sr=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var rr=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dh=0,dn=new gt,dc=new Ot,ds=new U,Qt=new ui,Ys=new ui,Ct=new U,$t=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?rr:sr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Qt.min,Ys.min),Qt.expandByPoint(Ct),Ct.addVectors(Qt.max,Ys.max),Qt.expandByPoint(Ct)):(Qt.expandByPoint(Ys.min),Qt.expandByPoint(Ys.max))}Qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Ct.add(ds)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new U,l[A]=new U;let c=new U,d=new U,u=new U,p=new we,f=new we,g=new we,b=new U,m=new U;function h(A,x,v){c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),p.fromBufferAttribute(r,A),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),d.sub(c),u.sub(c),f.sub(p),g.sub(p);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),o[A].add(b),o[x].add(b),o[v].add(b),l[A].add(m),l[x].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,x=_.length;A<x;++A){let v=_[A],P=v.start,N=v.count;for(let k=P,$=P+N;k<$;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new U,y=new U,R=new U,C=new U;function T(A){R.fromBufferAttribute(s,A),C.copy(R);let x=o[A];E.copy(x),E.sub(R.multiplyScalar(R.dot(x))).normalize(),y.crossVectors(C,x);let P=y.dot(l[A])<0?-1:1;a.setXYZW(A,E.x,E.y,E.z,P)}for(let A=0,x=_.length;A<x;++A){let v=_[A],P=v.start,N=v.count;for(let k=P,$=P+N;k<$;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,u=new U;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),b=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,p=new c.constructor(l.length*d),f=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let h=0;h<d;h++)p[g++]=c[f++]}return new en(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let p=c[d],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,p=c.length;u<p;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let p=0,f=u.length;p<f;p++)d.push(u[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new gt,Ri=new ir,Zr=new bs,$l=new U,Jr=new U,jr=new U,Kr=new U,uc=new U,Qr=new U,Yl=new U,ea=new U,Ke=class extends Ot{constructor(e=new $t,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(uc.fromBufferAttribute(u,e),a?Qr.addScaledVector(uc,d):Qr.addScaledVector(uc.sub(t),d))}t.add(Qr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Zr,$l)===null||Ri.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Xl.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=p.length;g<b;g++){let m=p[g],h=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=E;y<R;y+=3){let C=o.getX(y),T=o.getX(y+1),A=o.getX(y+2);s=ta(this,h,e,n,c,d,u,C,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,h=b;m<h;m+=3){let _=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=ta(this,a,e,n,c,d,u,_,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=p.length;g<b;g++){let m=p[g],h=a[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=E;y<R;y+=3){let C=y,T=y+1,A=y+2;s=ta(this,h,e,n,c,d,u,C,T,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,h=b;m<h;m+=3){let _=m,E=m+1,y=m+2;s=ta(this,a,e,n,c,d,u,_,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Lh(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===$n,o),l===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:i}}function ta(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Jr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Kr);let d=Lh(i,e,t,n,Jr,jr,Kr,Yl);if(d){let u=new U;ci.getBarycoord(Yl,Jr,jr,Kr,u),s&&(d.uv=ci.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(d.uv1=ci.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(d.normal=ci.getInterpolatedAttribute(a,o,l,c,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new U,materialIndex:0};ci.getNormal(Jr,jr,Kr,p.normal),d.face=p,d.barycoord=u}return d}var tn=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(u,2));function g(b,m,h,_,E,y,R,C,T,A,x){let v=y/T,P=R/A,N=y/2,k=R/2,$=C/2,j=T+1,Y=A+1,oe=0,H=0,te=new U;for(let fe=0;fe<Y;fe++){let ge=fe*P-k;for(let Be=0;Be<j;Be++){let Qe=Be*v-N;te[b]=Qe*_,te[m]=ge*E,te[h]=$,c.push(te.x,te.y,te.z),te[b]=0,te[m]=0,te[h]=C>0?1:-1,d.push(te.x,te.y,te.z),u.push(Be/T),u.push(1-fe/A),oe+=1}}for(let fe=0;fe<A;fe++)for(let ge=0;ge<T;ge++){let Be=p+ge+j*fe,Qe=p+ge+j*(fe+1),ot=p+(ge+1)+j*(fe+1),Xe=p+(ge+1)+j*fe;l.push(Be,Qe,Xe),l.push(Qe,ot,Xe),H+=6}o.addGroup(f,H,x),f+=H,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Uh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Wd={clone:Xi,merge:Nt},Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ar=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new U,Zl=new we,Jl=new we,Rt=class extends ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Zl,Jl),t.subVectors(Jl,Zl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=-90,hs=1,ma=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(us,hs,e,t);s.layers=this.layers,this.add(s);let r=new Rt(us,hs,e,t);r.layers=this.layers,this.add(r);let a=new Rt(us,hs,e,t);a.layers=this.layers,this.add(a);let o=new Rt(us,hs,e,t);o.layers=this.layers,this.add(o);let l=new Rt(us,hs,e,t);l.layers=this.layers,this.add(l);let c=new Rt(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},or=class extends Ht{constructor(e=[],t=Gi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Jn});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=An),new ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Et=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fh={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var cr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oi=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var hc=new U,Bh=new U,zh=new ke,Dn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hc.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zh.getNormalMatrix(e),s=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new bs,kh=new we(.5,.5),na=new U,Es=class{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],p=r[6],f=r[7],g=r[8],b=r[9],m=r[10],h=r[11],_=r[12],E=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,f-d,h-g,R-_).normalize(),s[1].setComponents(c+a,f+d,h+g,R+_).normalize(),s[2].setComponents(c+o,f+u,h+b,R+E).normalize(),s[3].setComponents(c-o,f-u,h-b,R-E).normalize(),n)s[4].setComponents(l,p,m,y).normalize(),s[5].setComponents(c-l,f-p,h-m,R-y).normalize();else if(s[4].setComponents(c-l,f-p,h-m,R-y).normalize(),t===En)s[5].setComponents(c+l,f+p,h+m,R+y).normalize();else if(t===tr)s[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);let t=kh.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lr=class extends Ht{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dr=class extends Ht{constructor(e,t,n=vi,s,r,a,o=un,l=un,c,d=gs,u=1){if(d!==gs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ur=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var hr=class i extends $t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,d=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[p]/e+1)/2,d.y=(a[p+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],p=[],f=[],g=0,b=[],m=n/2,h=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(f,2));function _(){let y=new U,R=new U,C=0,T=(t-e)/n;for(let A=0;A<=r;A++){let x=[],v=A/r,P=v*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,$=k*l+o,j=Math.sin($),Y=Math.cos($);R.x=P*j,R.y=-v*n+m,R.z=P*Y,u.push(R.x,R.y,R.z),y.set(j,T,Y).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-v),x.push(g++)}b.push(x)}for(let A=0;A<s;A++)for(let x=0;x<r;x++){let v=b[x][A],P=b[x+1][A],N=b[x+1][A+1],k=b[x][A+1];(e>0||x!==0)&&(d.push(v,P,k),C+=3),(t>0||x!==r-1)&&(d.push(P,N,k),C+=3)}c.addGroup(h,C,0),h+=C}function E(y){let R=g,C=new we,T=new U,A=0,x=y===!0?e:t,v=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*v,0),p.push(0,v,0),f.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let $=N/s*l+o,j=Math.cos($),Y=Math.sin($);T.x=x*Y,T.y=m*v,T.z=x*j,u.push(T.x,T.y,T.z),p.push(0,v,0),C.x=j*.5+.5,C.y=Y*.5*v+.5,f.push(C.x,C.y),g++}for(let N=0;N<s;N++){let k=R+N,$=P+N;y===!0?d.push($,$+1,k):d.push($+1,$,k),A+=3}c.addGroup(h,A,y===!0?1:2),h+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fr=class i extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new U,y=new U,R=new U;for(let C=0;C<t.length;C+=3)f(t[C+0],E),f(t[C+1],y),f(t[C+2],R),l(E,y,R,_)}function l(_,E,y,R){let C=R+1,T=[];for(let A=0;A<=C;A++){T[A]=[];let x=_.clone().lerp(y,A/C),v=E.clone().lerp(y,A/C),P=C-A;for(let N=0;N<=P;N++)N===0&&A===C?T[A][N]=x:T[A][N]=x.clone().lerp(v,N/P)}for(let A=0;A<C;A++)for(let x=0;x<2*(C-A)-1;x++){let v=Math.floor(x/2);x%2===0?(p(T[A][v+1]),p(T[A+1][v]),p(T[A][v])):(p(T[A][v+1]),p(T[A+1][v+1]),p(T[A+1][v]))}}function c(_){let E=new U;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function d(){let _=new U;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let y=m(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let E=a[_+0],y=a[_+2],R=a[_+4],C=Math.max(E,y,R),T=Math.min(E,y,R);C>.9&&T<.1&&(E<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function f(_,E){let y=_*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){let _=new U,E=new U,y=new U,R=new U,C=new we,T=new we,A=new we;for(let x=0,v=0;x<r.length;x+=9,v+=6){_.set(r[x+0],r[x+1],r[x+2]),E.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),C.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),A.set(a[v+4],a[v+5]),R.copy(_).add(E).add(y).divideScalar(3);let P=m(R);b(C,v+0,_,P),b(T,v+2,E,P),b(A,v+4,y,P)}}function b(_,E,y,R){R<0&&_.x===1&&(a[E]=_.x-1),y.x===0&&y.z===0&&(a[E]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,f=(a-d)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new gt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(He(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pr=class extends hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*d-f*u+this.aX,c=p*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},va=class extends pr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+u)+(l-o)/u;p*=d,f*=d,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ia=new U,fc=new $c,pc=new $c,mc=new $c,xa=class extends hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(ia.subVectors(s[0],s[1]).add(s[0]),c=ia);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=ia),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(d),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),fc.initNonuniformCatmullRom(c.x,u.x,p.x,d.x,g,b,m),pc.initNonuniformCatmullRom(c.y,u.y,p.y,d.y,g,b,m),mc.initNonuniformCatmullRom(c.z,u.z,p.z,d.z,g,b,m)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(c.x,u.x,p.x,d.x,this.tension),pc.initCatmullRom(c.y,u.y,p.y,d.y,this.tension),mc.initCatmullRom(c.z,u.z,p.z,d.z,this.tension));return n.set(fc.calc(l),pc.calc(l),mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Vh(i,e){let t=1-i;return t*t*e}function Hh(i,e){return 2*(1-i)*i*e}function Gh(i,e){return i*i*e}function js(i,e,t,n){return Vh(i,e)+Hh(i,t)+Gh(i,n)}function Wh(i,e){let t=1-i;return t*t*t*e}function qh(i,e){let t=1-i;return 3*t*t*i*e}function Xh(i,e){return 3*(1-i)*i*i*e}function $h(i,e){return i*i*i*e}function Ks(i,e,t,n,s){return Wh(i,e)+qh(i,t)+Xh(i,n)+$h(i,s)}var _a=class extends hn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends hn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y),Ks(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends hn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends hn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends hn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fi=class extends hn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y),js(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jl(o,l.x,c.x,d.x,u.x),jl(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},Yh=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:xa,CubicBezierCurve:_a,CubicBezierCurve3:ya,EllipseCurve:pr,LineCurve:ba,LineCurve3:Ma,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:Fi,SplineCurve:Ea});var mr=class i extends fr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var gr=class i extends fr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fi=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,p=t/l,f=[],g=[],b=[],m=[];for(let h=0;h<d;h++){let _=h*p-a;for(let E=0;E<c;E++){let y=E*u-r;g.push(y,-_,0),b.push(0,0,1),m.push(E/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){let E=_+c*h,y=_+c*(h+1),R=_+1+c*(h+1),C=_+1+c*h;f.push(E,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(b,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bi=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new U,p=new U,f=[],g=[],b=[],m=[];for(let h=0;h<=n;h++){let _=[],E=h/n,y=0;h===0&&a===0?y=.5/t:h===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let C=R/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),b.push(p.x,p.y,p.z),m.push(C+y,1-E),_.push(c++)}d.push(_)}for(let h=0;h<n;h++)for(let _=0;_<t;_++){let E=d[h][_+1],y=d[h][_],R=d[h+1][_],C=d[h+1][_+1];(h!==0||a>0)&&f.push(E,y,C),(h!==n-1||l<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(b,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var As=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],d=new U,u=new U,p=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,h=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(b,m,_),a.push(m,h,_)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var vr=class i extends $t{constructor(e=new Fi(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new we,d=new U,u=[],p=[],f=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(f,2));function b(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),_(),h()}function m(E){d=e.getPointAt(E/t,d);let y=a.normals[E],R=a.binormals[E];for(let C=0;C<=s;C++){let T=C/s*Math.PI*2,A=Math.sin(T),x=-Math.cos(T);l.x=x*y.x+A*R.x,l.y=x*y.y+A*R.y,l.z=x*y.z+A*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function h(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let R=(s+1)*(E-1)+(y-1),C=(s+1)*E+(y-1),T=(s+1)*E+y,A=(s+1)*(E-1)+y;g.push(R,C,A),g.push(C,T,A)}}function _(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Yh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var nn=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Aa=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ta=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wa=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=e,o=2*t-n;break;case _c:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=e,l=2*n-t;break;case _c:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,h=-p*m+2*p*b-p*g,_=(1+p)*m+(-1.5-2*p)*b+(-.5+p)*g+1,E=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let R=0;R!==o;++R)r[R]=h*a[d+R]+_*a[c+R]+E*a[l+R]+y*a[u+R];return r}},Ca=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*d;return r}},Ra=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[p+g]||b!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=ua;var pi=class extends sn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Qs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="color";var Pa=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="number";var Da=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends sn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Qs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="vector";var aa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ua=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=c.length;u<p;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qd=new Ua,Ts=class{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs=new WeakMap,Oa=class extends Ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=aa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=fs.get(a);u===void 0&&(u=[],fs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=xs("img");function l(){d(),t&&t(this);let u=fs.get(this)||[];for(let p=0;p<u.length;p++){let f=u[p];f.onLoad&&f.onLoad(this)}fs.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),aa.remove(`image:${e}`);let p=fs.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(u)}fs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),aa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var _r=class extends Ts{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,a=new Oa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},yr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ki=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gc=new gt,Kl=new U,Ql=new U,Mc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var br=class extends ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sc=class extends Mc{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Na=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yc="\\[\\]\\.:\\/",Jh=new RegExp("["+Yc+"]","g"),Zc="[^"+Yc+"]",jh="[^"+Yc.replace("\\.","")+"]",Kh=/((?:WC+[\/:])*)/.source.replace("WC",Zc),Qh=/(WCOD+)?/.source.replace("WCOD",jh),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),nf=new RegExp("^"+Kh+Qh+ef+tf+"$"),sf=["material","materials","bones","map"],Ec=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jh,"")}static parseTrackName(e){let t=nf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Ec;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $v=new Float32Array(1);var ed=new gt,Hi=class{constructor(e,t,n=0,s=1/0){this.ray=new ir(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(e,t=!0,n=[]){return Ac(e,this,n,t),n.sort(td),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,n,t);return n.sort(td),n}};function td(i,e){return i.distance-e.distance}function Ac(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],e,t,!0)}}function Jc(i,e,t,n){let s=rf(n);switch(t){case Fc:return i*e;case zc:return i*e/s.components*s.byteLength;case ja:return i*e/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case Ka:return i*e*2/s.components*s.byteLength;case Bc:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case Er:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mo:case So:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case To:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rf(i){switch(i){case Cn:case Lc:return{byteLength:1,components:1};case Cs:case Uc:case Rs:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case vi:case Ya:case Nn:return{byteLength:4,components:1};case Oc:case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function mu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function of(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){let g=u[p],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++p,u[p]=b)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:cf,alphahash_pars_fragment:lf,alphamap_fragment:df,alphamap_pars_fragment:uf,alphatest_fragment:hf,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:vf,begin_vertex:xf,beginnormal_vertex:_f,bsdfs:yf,iridescence_fragment:bf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Tf,color_fragment:wf,color_pars_fragment:Cf,color_pars_vertex:Rf,color_vertex:If,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Of,emissivemap_fragment:Nf,emissivemap_pars_fragment:Ff,colorspace_fragment:Bf,colorspace_pars_fragment:zf,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Hf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:qf,fog_pars_vertex:Xf,fog_fragment:$f,fog_pars_fragment:Yf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:Kf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:_p,morphinstance_vertex:yp,morphcolor_vertex:bp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:Ap,normal_fragment_maps:Tp,normal_pars_fragment:wp,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Up,opaque_fragment:Op,packing:Np,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Wp,shadowmap_vertex:qp,shadowmask_pars_fragment:Xp,skinbase_vertex:$p,skinning_pars_vertex:Yp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:jp,specularmap_pars_fragment:Kp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:dm,cube_vert:um,cube_frag:hm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:vm,equirect_frag:xm,linedashed_vert:_m,linedashed_frag:ym,meshbasic_vert:bm,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:Em,meshmatcap_vert:Am,meshmatcap_frag:Tm,meshnormal_vert:wm,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Im,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Om,points_frag:Nm,shadow_vert:Fm,shadow_frag:Bm,sprite_vert:zm,sprite_frag:km},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Fn={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Fn.physical={uniforms:Nt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ro={r:0,b:0,g:0},$i=new Tn,Vm=new gt;function Hm(i,e,t,n,s,r,a){let o=new Ge(0),l=r===!0?0:1,c,d,u=null,p=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function b(E){let y=!1,R=g(E);R===null?h(o,l):R&&R.isColor&&(h(R,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===Mr)?(d===void 0&&(d=new Ke(new tn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Xi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler($i)),d.material.toneMapped=Ze.getTransfer(R.colorSpace)!==it,(u!==R||p!==R.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=R,p=R.version,f=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ke(new fi(2,2),new wn({name:"BackgroundMaterial",uniforms:Xi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||p!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,p=R.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,y){E.getRGB(Ro,Xc(i)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,a)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:b,addToRenderList:m,dispose:_}}function Gm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(v,P,N,k,$){let j=!1,Y=u(k,N,P);r!==Y&&(r=Y,c(r.object)),j=f(v,k,N,$),j&&g(v,k,N,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(v,P,N,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function u(v,P,N){let k=N.wireframe===!0,$=n[v.id];$===void 0&&($={},n[v.id]=$);let j=$[P.id];j===void 0&&(j={},$[P.id]=j);let Y=j[k];return Y===void 0&&(Y=p(l()),j[k]=Y),Y}function p(v){let P=[],N=[],k=[];for(let $=0;$<t;$++)P[$]=0,N[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,P,N,k){let $=r.attributes,j=P.attributes,Y=0,oe=N.getAttributes();for(let H in oe)if(oe[H].location>=0){let fe=$[H],ge=j[H];if(ge===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(v,P,N,k){let $={},j=P.attributes,Y=0,oe=N.getAttributes();for(let H in oe)if(oe[H].location>=0){let fe=j[H];fe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),$[H]=ge,Y++}r.attributes=$,r.attributesNum=Y,r.index=k}function b(){let v=r.newAttributes;for(let P=0,N=v.length;P<N;P++)v[P]=0}function m(v){h(v,0)}function h(v,P){let N=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;N[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),$[v]!==P&&(i.vertexAttribDivisor(v,P),$[v]=P)}function _(){let v=r.newAttributes,P=r.enabledAttributes;for(let N=0,k=P.length;N<k;N++)P[N]!==v[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function E(v,P,N,k,$,j,Y){Y===!0?i.vertexAttribIPointer(v,P,N,$,j):i.vertexAttribPointer(v,P,N,k,$,j)}function y(v,P,N,k){b();let $=k.attributes,j=N.getAttributes(),Y=P.defaultAttributeValues;for(let oe in j){let H=j[oe];if(H.location>=0){let te=$[oe];if(te===void 0&&(oe==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),oe==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){let fe=te.normalized,ge=te.itemSize,Be=e.get(te);if(Be===void 0)continue;let Qe=Be.buffer,ot=Be.type,Xe=Be.bytesPerElement,Q=ot===i.INT||ot===i.UNSIGNED_INT||te.gpuType===Ya;if(te.isInterleavedBufferAttribute){let re=te.data,me=re.stride,De=te.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)h(H.location+Ae,re.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Ae=0;Ae<H.locationSize;Ae++)E(H.location+Ae,ge/H.locationSize,ot,fe,me*Xe,(De+ge/H.locationSize*Ae)*Xe,Q)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)h(H.location+re,te.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<H.locationSize;re++)m(H.location+re);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let re=0;re<H.locationSize;re++)E(H.location+re,ge/H.locationSize,ot,fe,ge*Xe,ge/H.locationSize*re*Xe,Q)}}else if(Y!==void 0){let fe=Y[oe];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}_()}function R(){A();for(let v in n){let P=n[v];for(let N in P){let k=P[N];for(let $ in k)d(k[$].object),delete k[$];delete P[N]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let N in P){let k=P[N];for(let $ in k)d(k[$].object),delete k[$];delete P[N]}delete n[v.id]}function T(v){for(let P in n){let N=n[P];if(N[v.id]===void 0)continue;let k=N[v.id];for(let $ in k)d(k[$].object),delete k[$];delete N[v.id]}}function A(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Wm(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,p){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,u);let g=0;for(let b=0;b<u;b++)g+=d[b]*p[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let A=T===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function Xm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Dn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let _=r?0:n,E=_*4,y=h.clippingState||null;l.value=y,y=d(g,p,E,f);for(let R=0;R!==E;++R)y[R]=t[R];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,p,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let h=f+b*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,y=f;E!==b;++E,y+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function $m(i){let e=new WeakMap;function t(a,o){return o===qa?a.mapping=Gi:o===Xa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qa||o===Xa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Us=4,Xd=[.125,.215,.35,.446,.526,.582],Ji=20,jc=new br,$d=new Ge,Kc=null,Qc=0,el=0,tl=!1,Zi=(1+Math.sqrt(5))/2,Ls=1/Zi,Yd=[new U(-Zi,Ls,0),new U(Zi,Ls,0),new U(-Ls,0,Zi),new U(Ls,0,Zi),new U(0,Zi,-Ls),new U(0,Zi,Ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ym=new U,Do=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ym}=r;Kc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Qc,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Rs,format:pn,colorSpace:Ui,depthBuffer:!1},s=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(r)),this._blurMaterial=Jm(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,s,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor($d),u.toneMapping=jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let b=new Un({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),m=new Ke(new tn,b),h=!1,_=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,h=!0):(b.color.copy($d),h=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[E]));let R=this._cubeSize;Io(s,y*R,E>2?R:0,R,R),u.setRenderTarget(s),h&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gi||e.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yd[(s-r-1)%Yd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Ke(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),b=r/g,m=isFinite(r)?1+Math.floor(d*b):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let h=[],_=0;for(let T=0;T<Ji;++T){let A=T/b,x=Math.exp(-A*A/2);h.push(x),T===0?_+=x:T<m&&(_+=2*x)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;let y=this._sizeLods[s],R=3*y*(s>E-Us?s-E+Us:0),C=4*(this._cubeSize-y);Io(t,R,C,3*y,2*y),l.setRenderTarget(t),l.render(u,jc)}};function Zm(i){let e=[],t=[],n=[],s=i,r=i-Us+1+Xd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Us?l=Xd[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,u=1+c,p=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,b=3,m=2,h=1,_=new Float32Array(b*g*f),E=new Float32Array(m*g*f),y=new Float32Array(h*g*f);for(let C=0;C<f;C++){let T=C%3*2/3-1,A=C>2?0:-1,x=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];_.set(x,b*g*C),E.set(p,m*g*C);let v=[C,C,C,C,C,C];y.set(v,h*g*C)}let R=new $t;R.setAttribute("position",new en(_,b)),R.setAttribute("uv",new en(E,m)),R.setAttribute("faceIndex",new en(y,h)),e.push(R),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zd(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jm(i,e,t){let n=new Float32Array(Ji),s=new U(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Jd(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jd(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function jm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===qa||l===Xa,d=l===Gi||l===Wi;if(c||d){let u=e.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Do(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new Do(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,e,t,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(u){let p=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let _=f.array;b=f.version;for(let E=0,y=_.length;E<y;E+=3){let R=_[E+0],C=_[E+1],T=_[E+2];p.push(R,C,C,T,T,R)}}else if(g!==void 0){let _=g.array;b=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let R=E+0,C=E+1,T=E+2;p.push(R,C,C,T,T,R)}}else return;let m=new(qc(p)?rr:sr)(p,1);m.version=b;let h=r.get(u);h&&e.remove(h),r.set(u,m)}function d(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function eg(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*a,g),t.update(f,n,g))}function d(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];t.update(m,n,1)}function u(p,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,f[h],b[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,b,0,g);let h=0;for(let _=0;_<g;_++)h+=f[_]*b[_];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,e,t){let n=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==u){let x=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",x)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),b===!0&&(E=3);let y=o.attributes.position.count*E,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*R*4*u),T=new nr(C,y,R,u);T.type=Nn,T.needsUpdate=!0;let A=E*4;for(let v=0;v<u;v++){let P=m[v],N=h[v],k=_[v],$=y*R*4*v;for(let j=0;j<P.count;j++){let Y=j*A;f===!0&&(s.fromBufferAttribute(P,j),C[$+Y+0]=s.x,C[$+Y+1]=s.y,C[$+Y+2]=s.z,C[$+Y+3]=0),g===!0&&(s.fromBufferAttribute(N,j),C[$+Y+4]=s.x,C[$+Y+5]=s.y,C[$+Y+6]=s.z,C[$+Y+7]=0),b===!0&&(s.fromBufferAttribute(k,j),C[$+Y+8]=s.x,C[$+Y+9]=s.y,C[$+Y+10]=s.z,C[$+Y+11]=k.itemSize===4?s.w:1)}}p={count:u,texture:T,size:new we(y,R)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function ig(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var gu=new Ht,Kd=new dr(1,1),vu=new nr,xu=new pa,_u=new or,Qd=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lo(i,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),wt(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),wt(t,n)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),wt(t,n)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kd.compareFunction=Hc,r=Kd):r=gu,t.setTexture2D(e||r,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_u,s)}function Mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vu,s)}function Sg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return cg;case 35675:return lg;case 35676:return dg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Eg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){let t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Tg(i,e){let t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){let t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function Cg(i,e){let t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){let t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ig(i,e){let t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Lg(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Og(i,e){i.uniform1uiv(this.addr,e)}function Ng(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Bg(i,e){i.uniform4uiv(this.addr,e)}function zg(i,e,t){let n=this.cache,s=e.length,r=Lo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gu,r[a])}function kg(i,e,t){let n=this.cache,s=e.length,r=Lo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function Vg(i,e,t){let n=this.cache,s=e.length,r=Lo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_u,r[a])}function Hg(i,e,t){let n=this.cache,s=e.length,r=Lo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vu,r[a])}function Gg(i){switch(i){case 5126:return Eg;case 35664:return Ag;case 35665:return Tg;case 35666:return wg;case 35674:return Cg;case 35675:return Rg;case 35676:return Ig;case 5124:case 35670:return Pg;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Og;case 36294:return Ng;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Hg}}var il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}},sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gg(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function su(i,e){i.seq.push(e),i.map[e.id]=e}function Wg(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){su(t,c===void 0?new il(o,i,e):new sl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new rl(o),su(t,u)),t=u}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Wg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qg=37297,Xg=0;function $g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var au=new ke;function Yg(i){Ze._getMatrix(au,Ze.workingColorSpace,i);let e=`mat3( ${au.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ou(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(e),o)}else return r}function Zg(i,e){let t=Yg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jg(i,e){let t;switch(e){case Ed:t="Linear";break;case Ad:t="Reinhard";break;case Td:t="Cineon";break;case ws:t="ACESFilmic";break;case Cd:t="AgX";break;case Rd:t="Neutral";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Po=new U;function jg(){Ze.getLuminanceCoefficients(Po);let i=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Qg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cr(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(tv,iv)}var nv=new Map;function iv(i,e){let t=Ve[e];if(t===void 0){let n=nv.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(sv,rv)}function rv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function av(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function ov(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function lv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Sd:e="ENVMAP_BLENDING_ADD";break}return e}function dv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=av(t),c=ov(t),d=cv(t),u=lv(t),p=dv(t),f=Kg(t),g=Qg(r),b=s.createProgram(),m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),h.length>0&&(h+=`
`)):(m=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),h=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==jn?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=al(a),a=cu(a,t),a=lu(a,t),o=al(o),o=cu(o,t),o=lu(o,t),a=du(a),o=du(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=_+m+a,y=_+h+o,R=ru(s,s.VERTEX_SHADER,E),C=ru(s,s.FRAGMENT_SHADER,y);s.attachShader(b,R),s.attachShader(b,C),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(R)||"",$=s.getShaderInfoLog(C)||"",j=N.trim(),Y=k.trim(),oe=$.trim(),H=!0,te=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,C);else{let fe=ou(s,R,"vertex"),ge=ou(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+fe+`
`+ge)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||oe==="")&&(te=!1);te&&(P.diagnostics={runnable:H,programLog:j,vertexShader:{log:Y,prefix:m},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(R),s.deleteShader(C),A=new Os(s,b),x=ev(s,b)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(b,qg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=C,this}var hv=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}};function fv(i,e,t,n,s,r,a){let o=new Ms,l=new ol,c=new Set,d=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,v,P,N,k){let $=N.fog,j=k.geometry,Y=x.isMeshStandardMaterial?N.environment:null,oe=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),H=oe&&oe.mapping===Mr?oe.image.height:null,te=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=fe!==void 0?fe.length:0,Be=0;j.morphAttributes.position!==void 0&&(Be=1),j.morphAttributes.normal!==void 0&&(Be=2),j.morphAttributes.color!==void 0&&(Be=3);let Qe,ot,Xe,Q;if(te){let We=Fn[te];Qe=We.vertexShader,ot=We.fragmentShader}else Qe=x.vertexShader,ot=x.fragmentShader,l.update(x),Xe=l.getVertexShaderID(x),Q=l.getFragmentShaderID(x);let re=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,$e=!!x.map,st=!!x.matcap,D=!!oe,et=!!x.aoMap,Re=!!x.lightMap,Ie=!!x.bumpMap,_e=!!x.normalMap,Ye=!!x.displacementMap,ye=!!x.emissiveMap,ze=!!x.metalnessMap,ht=!!x.roughnessMap,ct=x.anisotropy>0,w=x.clearcoat>0,M=x.dispersion>0,z=x.iridescence>0,J=x.sheen>0,se=x.transmission>0,Z=ct&&!!x.anisotropyMap,Te=w&&!!x.clearcoatMap,de=w&&!!x.clearcoatNormalMap,Me=w&&!!x.clearcoatRoughnessMap,Ee=z&&!!x.iridescenceMap,I=z&&!!x.iridescenceThicknessMap,O=J&&!!x.sheenColorMap,V=J&&!!x.sheenRoughnessMap,X=!!x.specularMap,q=!!x.specularColorMap,ae=!!x.specularIntensityMap,L=se&&!!x.transmissionMap,ee=se&&!!x.thicknessMap,K=!!x.gradientMap,le=!!x.alphaMap,ie=x.alphaTest>0,ne=!!x.alphaHash,xe=!!x.extensions,Ne=jn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let tt={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:ot,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ui,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:st,envMap:D,envMapMode:D&&oe.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:Re,bumpMap:Ie,normalMap:_e,displacementMap:p&&Ye,emissiveMap:ye,normalMapObjectSpace:_e&&x.normalMapType===Ld,normalMapTangentSpace:_e&&x.normalMapType===Vc,metalnessMap:ze,roughnessMap:ht,anisotropy:ct,anisotropyMap:Z,clearcoat:w,clearcoatMap:Te,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,dispersion:M,iridescence:z,iridescenceMap:Ee,iridescenceThicknessMap:I,sheen:J,sheenColorMap:O,sheenRoughnessMap:V,specularMap:X,specularColorMap:q,specularIntensityMap:ae,transmission:se,transmissionMap:L,thicknessMap:ee,gradientMap:K,opaque:x.transparent===!1&&x.blending===Di&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:ie,alphaHash:ne,combine:x.combine,mapUv:$e&&b(x.map.channel),aoMapUv:et&&b(x.aoMap.channel),lightMapUv:Re&&b(x.lightMap.channel),bumpMapUv:Ie&&b(x.bumpMap.channel),normalMapUv:_e&&b(x.normalMap.channel),displacementMapUv:Ye&&b(x.displacementMap.channel),emissiveMapUv:ye&&b(x.emissiveMap.channel),metalnessMapUv:ze&&b(x.metalnessMap.channel),roughnessMapUv:ht&&b(x.roughnessMap.channel),anisotropyMapUv:Z&&b(x.anisotropyMap.channel),clearcoatMapUv:Te&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:I&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:O&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&b(x.sheenRoughnessMap.channel),specularMapUv:X&&b(x.specularMap.channel),specularColorMapUv:q&&b(x.specularColorMap.channel),specularIntensityMapUv:ae&&b(x.specularIntensityMap.channel),transmissionMapUv:L&&b(x.transmissionMap.channel),thicknessMapUv:ee&&b(x.thicknessMap.channel),alphaMapUv:le&&b(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(_e||ct),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&($e||le),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Be,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function h(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)v.push(P),v.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(v,x),E(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function _(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function E(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){let v=g[x.type],P;if(v){let N=Fn[v];P=Wd.clone(N.uniforms)}else P=x.uniforms;return P}function R(x,v){let P;for(let N=0,k=d.length;N<k;N++){let $=d[N];if($.cacheKey===v){P=$,++P.usedTimes;break}}return P===void 0&&(P=new uv(i,v,x,r),d.push(P)),P}function C(x){if(--x.usedTimes===0){let v=d.indexOf(x);d[v]=d[d.length-1],d.pop(),x.destroy()}}function T(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:A}}function pv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,f,g,b,m){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=h):(h.id=u.id,h.object=u,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=b,h.group=m),e++,h}function o(u,p,f,g,b,m){let h=a(u,p,f,g,b,m);f.transmission>0?n.push(h):f.transparent===!0?s.push(h):t.push(h)}function l(u,p,f,g,b,m){let h=a(u,p,f,g,b,m);f.transmission>0?n.unshift(h):f.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,p){t.length>1&&t.sort(u||mv),n.length>1&&n.sort(p||hu),s.length>1&&s.sort(p||hu)}function d(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function gv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new fu,i.set(n,[a])):s>=r.length?(a=new fu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _v=0;function yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){let e=new vv,t=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new gt,a=new gt;function o(c){let d=0,u=0,p=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,b=0,m=0,h=0,_=0,E=0,y=0,R=0,C=0,T=0;c.sort(yv);for(let x=0,v=c.length;x<v;x++){let P=c[x],N=P.color,k=P.intensity,$=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*k,u+=N.g*k,p+=N.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],k);T++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,H=t.get(P);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=Y,f++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(N).multiplyScalar(k),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[b]=Y;let oe=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,oe.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[b]=oe.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=j,y++}b++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let oe=P.shadow,H=t.get(P);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,H.shadowCameraNear=oe.camera.near,H.shadowCameraFar=oe.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[h]=Y,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==h||A.numDirectionalShadows!==_||A.numPointShadows!==E||A.numSpotShadows!==y||A.numSpotMaps!==R||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=h,A.numDirectionalShadows=_,A.numPointShadows=E,A.numSpotShadows=y,A.numSpotMaps=R,A.numLightProbes=T,n.version=_v++)}function l(c,d){let u=0,p=0,f=0,g=0,b=0,m=d.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){let E=c[h];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function pu(i){let e=new bv(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new pu(i),e.set(s,[o])):r>=a.length?(o=new pu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
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
}`;function Av(i,e,t){let n=new Es,s=new we,r=new we,a=new vt,o=new Aa({depthPacking:Dd}),l=new Ta,c={},d=t.maxTextureSize,u={[$n]:Wt,[Wt]:$n,[fn]:fn},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Sv,fragmentShader:Ev}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ke(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let h=this.type;this.render=function(C,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let x=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=h!==On&&this.type===On,$=h===On&&this.type!==On;for(let j=0,Y=C.length;j<Y;j++){let oe=C[j],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();if(s.multiply(te),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/te.y),s.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||k===!0||$===!0){let ge=this.type!==On?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new Ln(s.x,s.y,ge),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let fe=H.getViewportCount();for(let ge=0;ge<fe;ge++){let Be=H.getViewport(ge);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),N.viewport(a),H.updateMatrices(oe,ge),n=H.getFrustum(),y(T,A,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===On&&_(H,A),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,P)};function _(C,T){let A=e.update(b);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,A,p,b,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,A,f,b,null)}function E(C,T,A,x){let v=null,P=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)v=P;else if(v=A.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=v.uuid,k=T.uuid,$=c[N];$===void 0&&($={},c[N]=$);let j=$[k];j===void 0&&(j=v.clone(),$[k]=j,T.addEventListener("dispose",R)),v=j}if(v.visible=T.visible,v.wireframe=T.wireframe,x===On?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=i.properties.get(v);N.light=A}return v}function y(C,T,A,x,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let k=e.update(C),$=C.material;if(Array.isArray($)){let j=k.groups;for(let Y=0,oe=j.length;Y<oe;Y++){let H=j[Y],te=$[H.materialIndex];if(te&&te.visible){let fe=E(C,te,x,v);C.onBeforeShadow(i,C,T,A,k,fe,H),i.renderBufferDirect(A,null,k,fe,C,H),C.onAfterShadow(i,C,T,A,k,fe,H)}}}else if($.visible){let j=E(C,$,x,v);C.onBeforeShadow(i,C,T,A,k,j,null),i.renderBufferDirect(A,null,k,j,C,null),C.onAfterShadow(i,C,T,A,k,j,null)}}let N=C.children;for(let k=0,$=N.length;k<$;k++)y(N[k],T,A,x,v)}function R(C){C.target.removeEventListener("dispose",R);for(let A in c){let x=c[A],v=C.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}var Tv={[Ba]:za,[ka]:Ga,[Va]:Wa,[Li]:Ha,[za]:Ba,[Ga]:ka,[Wa]:Va,[Ha]:Li};function wv(i,e){function t(){let L=!1,ee=new vt,K=null,le=new vt(0,0,0,0);return{setMask:function(ie){K!==ie&&!L&&(i.colorMask(ie,ie,ie,ie),K=ie)},setLocked:function(ie){L=ie},setClear:function(ie,ne,xe,Ne,tt){tt===!0&&(ie*=Ne,ne*=Ne,xe*=Ne),ee.set(ie,ne,xe,Ne),le.equals(ee)===!1&&(i.clearColor(ie,ne,xe,Ne),le.copy(ee))},reset:function(){L=!1,K=null,le.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,K=null,le=null,ie=null;return{setReversed:function(ne){if(ee!==ne){let xe=e.get("EXT_clip_control");ne?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ee=ne;let Ne=ie;ie=null,this.setClear(Ne)}},getReversed:function(){return ee},setTest:function(ne){ne?re(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ne){K!==ne&&!L&&(i.depthMask(ne),K=ne)},setFunc:function(ne){if(ee&&(ne=Tv[ne]),le!==ne){switch(ne){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ne}},setLocked:function(ne){L=ne},setClear:function(ne){ie!==ne&&(ee&&(ne=1-ne),i.clearDepth(ne),ie=ne)},reset:function(){L=!1,K=null,le=null,ie=null,ee=!1}}}function s(){let L=!1,ee=null,K=null,le=null,ie=null,ne=null,xe=null,Ne=null,tt=null;return{setTest:function(We){L||(We?re(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(We){ee!==We&&!L&&(i.stencilMask(We),ee=We)},setFunc:function(We,Bt,Zt){(K!==We||le!==Bt||ie!==Zt)&&(i.stencilFunc(We,Bt,Zt),K=We,le=Bt,ie=Zt)},setOp:function(We,Bt,Zt){(ne!==We||xe!==Bt||Ne!==Zt)&&(i.stencilOp(We,Bt,Zt),ne=We,xe=Bt,Ne=Zt)},setLocked:function(We){L=We},setClear:function(We){tt!==We&&(i.clearStencil(We),tt=We)},reset:function(){L=!1,ee=null,K=null,le=null,ie=null,ne=null,xe=null,Ne=null,tt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},p=new WeakMap,f=[],g=null,b=!1,m=null,h=null,_=null,E=null,y=null,R=null,C=null,T=new Ge(0,0,0),A=0,x=!1,v=null,P=null,N=null,k=null,$=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,oe=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=oe>=2);let te=null,fe={},ge=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Qe=new vt().fromArray(ge),ot=new vt().fromArray(Be);function Xe(L,ee,K,le){let ie=new Uint8Array(4),ne=i.createTexture();i.bindTexture(L,ne),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<K;xe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(ee+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ne}let Q={};Q[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Li),Ie(!1),_e(Tc),re(i.CULL_FACE),et(Jn);function re(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function me(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function De(L,ee){return u[L]!==ee?(i.bindFramebuffer(L,ee),u[L]=ee,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ae(L,ee){let K=f,le=!1;if(L){K=p.get(ee),K===void 0&&(K=[],p.set(ee,K));let ie=L.textures;if(K.length!==ie.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,xe=ie.length;ne<xe;ne++)K[ne]=i.COLOR_ATTACHMENT0+ne;K.length=ie.length,le=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&i.drawBuffers(K)}function $e(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let st={[di]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};st[od]=i.MIN,st[cd]=i.MAX;let D={[ld]:i.ZERO,[dd]:i.ONE,[ud]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[fd]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[yd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function et(L,ee,K,le,ie,ne,xe,Ne,tt,We){if(L===Jn){b===!0&&(me(i.BLEND),b=!1);return}if(b===!1&&(re(i.BLEND),b=!0),L!==sd){if(L!==m||We!==x){if((h!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),h=di,y=di),We)switch(L){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,E=null,R=null,C=null,T.set(0,0,0),A=0,m=L,x=We}return}ie=ie||ee,ne=ne||K,xe=xe||le,(ee!==h||ie!==y)&&(i.blendEquationSeparate(st[ee],st[ie]),h=ee,y=ie),(K!==_||le!==E||ne!==R||xe!==C)&&(i.blendFuncSeparate(D[K],D[le],D[ne],D[xe]),_=K,E=le,R=ne,C=xe),(Ne.equals(T)===!1||tt!==A)&&(i.blendColor(Ne.r,Ne.g,Ne.b,tt),T.copy(Ne),A=tt),m=L,x=!1}function Re(L,ee){L.side===fn?me(i.CULL_FACE):re(i.CULL_FACE);let K=L.side===Wt;ee&&(K=!K),Ie(K),L.blending===Di&&L.transparent===!1?et(Jn):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function _e(L){L!==nd?(re(i.CULL_FACE),L!==P&&(L===Tc?i.cullFace(i.BACK):L===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),P=L}function Ye(L){L!==N&&(Y&&i.lineWidth(L),N=L)}function ye(L,ee,K){L?(re(i.POLYGON_OFFSET_FILL),(k!==ee||$!==K)&&(i.polygonOffset(ee,K),k=ee,$=K)):me(i.POLYGON_OFFSET_FILL)}function ze(L){L?re(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function ht(L){L===void 0&&(L=i.TEXTURE0+j-1),te!==L&&(i.activeTexture(L),te=L)}function ct(L,ee,K){K===void 0&&(te===null?K=i.TEXTURE0+j-1:K=te);let le=fe[K];le===void 0&&(le={type:void 0,texture:void 0},fe[K]=le),(le.type!==L||le.texture!==ee)&&(te!==K&&(i.activeTexture(K),te=K),i.bindTexture(L,ee||Q[L]),le.type=L,le.texture=ee)}function w(){let L=fe[te];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(L){Qe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function V(L){ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function X(L,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let le=K.get(L);le===void 0&&(le=i.getUniformBlockIndex(ee,L.name),K.set(L,le))}function q(L,ee){let le=c.get(ee).get(L);l.get(ee)!==le&&(i.uniformBlockBinding(ee,le,L.__bindingPointIndex),l.set(ee,le))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,fe={},u={},p=new WeakMap,f=[],g=null,b=!1,m=null,h=null,_=null,E=null,y=null,R=null,C=null,T=new Ge(0,0,0),A=0,x=!1,v=null,P=null,N=null,k=null,$=null,Qe.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:me,bindFramebuffer:De,drawBuffers:Ae,useProgram:$e,setBlending:et,setMaterial:Re,setFlipSided:Ie,setCullFace:_e,setLineWidth:Ye,setPolygonOffset:ye,setScissorTest:ze,activeTexture:ht,bindTexture:ct,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Ee,texImage3D:I,updateUBOMapping:X,uniformBlockBinding:q,texStorage2D:de,texStorage3D:Me,texSubImage2D:J,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:Te,scissor:O,viewport:V,reset:ae}}function Cv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,d=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):xs("canvas")}function b(w,M,z){let J=1,se=ct(w);if((se.width>z||se.height>z)&&(J=z/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor(J*se.width),Te=Math.floor(J*se.height);u===void 0&&(u=g(Z,Te));let de=M?g(Z,Te):u;return de.width=Z,de.height=Te,de.getContext("2d").drawImage(w,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Te+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,M,z,J,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=M;if(M===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let Te=se?er:Ze.getTransfer(J);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Te===it?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(w,M){let z;return w?M===null||M===vi||M===Is?z=i.DEPTH24_STENCIL8:M===Nn?z=i.DEPTH32F_STENCIL8:M===Cs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vi||M===Is?z=i.DEPTH_COMPONENT24:M===Nn?z=i.DEPTH_COMPONENT32F:M===Cs&&(z=i.DEPTH_COMPONENT16),z}function R(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function C(w){let M=w.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&d.delete(M)}function T(w){let M=w.target;M.removeEventListener("dispose",T),v(M)}function A(w){let M=n.get(w);if(M.__webglInit===void 0)return;let z=w.source,J=p.get(z);if(J){let se=J[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&x(w),Object.keys(J).length===0&&p.delete(z)}n.remove(w)}function x(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let z=w.source,J=p.get(z);delete J[M.__cacheKey],a.memory.textures--}function v(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let se=0;se<M.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(M.__webglFramebuffer[J][se]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=w.textures;for(let J=0,se=z.length;J<se;J++){let Z=n.get(z[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(w)}let P=0;function N(){P=0}function k(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function $(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function j(w,M){let z=n.get(w);if(w.isVideoTexture&&ze(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,w,M);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Y(w,M){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Q(z,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function oe(w,M){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Q(z,w,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function H(w,M){let z=n.get(w);if(w.version>0&&z.__version!==w.version){re(z,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let te={[la]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},fe={[un]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},ge={[Ud]:i.NEVER,[kd]:i.ALWAYS,[Od]:i.LESS,[Hc]:i.LEQUAL,[Nd]:i.EQUAL,[zd]:i.GEQUAL,[Fd]:i.GREATER,[Bd]:i.NOTEQUAL};function Be(w,M){if(M.type===Nn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===$a||M.magFilter===Sr||M.magFilter===gi||M.minFilter===An||M.minFilter===$a||M.minFilter===Sr||M.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,te[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==Sr&&M.minFilter!==gi||M.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qe(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",C));let J=M.source,se=p.get(J);se===void 0&&(se={},p.set(J,se));let Z=$(M);if(Z!==w.__cacheKey){se[Z]===void 0&&(se[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),se[Z].usedTimes++;let Te=se[w.__cacheKey];Te!==void 0&&(se[w.__cacheKey].usedTimes--,Te.usedTimes===0&&x(M)),w.__cacheKey=Z,w.__webglTexture=se[Z].texture}return z}function ot(w,M,z){return Math.floor(Math.floor(w/z)/M)}function Xe(w,M,z,J){let Z=w.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,J,M.data);else{Z.sort((I,O)=>I.start-O.start);let Te=0;for(let I=1;I<Z.length;I++){let O=Z[Te],V=Z[I],X=O.start+O.count,q=ot(V.start,M.width,4),ae=ot(O.start,M.width,4);V.start<=X+1&&q===ae&&ot(V.start+V.count-1,M.width,4)===q?O.count=Math.max(O.count,V.start+V.count-O.start):(++Te,Z[Te]=V)}Z.length=Te+1;let de=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let I=0,O=Z.length;I<O;I++){let V=Z[I],X=Math.floor(V.start/4),q=Math.ceil(V.count/4),ae=X%M.width,L=Math.floor(X/M.width),ee=q,K=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ae,L,ee,K,z,J,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Q(w,M,z){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let se=Qe(w,M),Z=M.source;t.bindTexture(J,w.__webglTexture,i.TEXTURE0+z);let Te=n.get(Z);if(Z.version!==Te.__version||se===!0){t.activeTexture(i.TEXTURE0+z);let de=Ze.getPrimaries(Ze.workingColorSpace),Me=M.colorSpace===Kn?null:Ze.getPrimaries(M.colorSpace),Ee=M.colorSpace===Kn||de===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let I=b(M.image,!1,s.maxTextureSize);I=ht(M,I);let O=r.convert(M.format,M.colorSpace),V=r.convert(M.type),X=E(M.internalFormat,O,V,M.colorSpace,M.isVideoTexture);Be(J,M);let q,ae=M.mipmaps,L=M.isVideoTexture!==!0,ee=Te.__version===void 0||se===!0,K=Z.dataReady,le=R(M,I);if(M.isDepthTexture)X=y(M.format===Ps,M.type),ee&&(L?t.texStorage2D(i.TEXTURE_2D,1,X,I.width,I.height):t.texImage2D(i.TEXTURE_2D,0,X,I.width,I.height,0,O,V,null));else if(M.isDataTexture)if(ae.length>0){L&&ee&&t.texStorage2D(i.TEXTURE_2D,le,X,ae[0].width,ae[0].height);for(let ie=0,ne=ae.length;ie<ne;ie++)q=ae[ie],L?K&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,O,V,q.data):t.texImage2D(i.TEXTURE_2D,ie,X,q.width,q.height,0,O,V,q.data);M.generateMipmaps=!1}else L?(ee&&t.texStorage2D(i.TEXTURE_2D,le,X,I.width,I.height),K&&Xe(M,I,O,V)):t.texImage2D(i.TEXTURE_2D,0,X,I.width,I.height,0,O,V,I.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,X,ae[0].width,ae[0].height,I.depth);for(let ie=0,ne=ae.length;ie<ne;ie++)if(q=ae[ie],M.format!==pn)if(O!==null)if(L){if(K)if(M.layerUpdates.size>0){let xe=Jc(q.width,q.height,M.format,M.type);for(let Ne of M.layerUpdates){let tt=q.data.subarray(Ne*xe/q.data.BYTES_PER_ELEMENT,(Ne+1)*xe/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Ne,q.width,q.height,1,O,tt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,I.depth,O,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,X,q.width,q.height,I.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,I.depth,O,V,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,X,q.width,q.height,I.depth,0,O,V,q.data)}else{L&&ee&&t.texStorage2D(i.TEXTURE_2D,le,X,ae[0].width,ae[0].height);for(let ie=0,ne=ae.length;ie<ne;ie++)q=ae[ie],M.format!==pn?O!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,O,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,X,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?K&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,q.width,q.height,O,V,q.data):t.texImage2D(i.TEXTURE_2D,ie,X,q.width,q.height,0,O,V,q.data)}else if(M.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,X,I.width,I.height,I.depth),K)if(M.layerUpdates.size>0){let ie=Jc(I.width,I.height,M.format,M.type);for(let ne of M.layerUpdates){let xe=I.data.subarray(ne*ie/I.data.BYTES_PER_ELEMENT,(ne+1)*ie/I.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,I.width,I.height,1,O,V,xe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,O,V,I.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,I.width,I.height,I.depth,0,O,V,I.data);else if(M.isData3DTexture)L?(ee&&t.texStorage3D(i.TEXTURE_3D,le,X,I.width,I.height,I.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,O,V,I.data)):t.texImage3D(i.TEXTURE_3D,0,X,I.width,I.height,I.depth,0,O,V,I.data);else if(M.isFramebufferTexture){if(ee)if(L)t.texStorage2D(i.TEXTURE_2D,le,X,I.width,I.height);else{let ie=I.width,ne=I.height;for(let xe=0;xe<le;xe++)t.texImage2D(i.TEXTURE_2D,xe,X,ie,ne,0,O,V,null),ie>>=1,ne>>=1}}else if(ae.length>0){if(L&&ee){let ie=ct(ae[0]);t.texStorage2D(i.TEXTURE_2D,le,X,ie.width,ie.height)}for(let ie=0,ne=ae.length;ie<ne;ie++)q=ae[ie],L?K&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,O,V,q):t.texImage2D(i.TEXTURE_2D,ie,X,O,V,q);M.generateMipmaps=!1}else if(L){if(ee){let ie=ct(I);t.texStorage2D(i.TEXTURE_2D,le,X,ie.width,ie.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,O,V,I)}else t.texImage2D(i.TEXTURE_2D,0,X,O,V,I);m(M)&&h(J),Te.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function re(w,M,z){if(M.image.length!==6)return;let J=Qe(w,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let Z=n.get(se);if(se.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let Te=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===Kn?null:Ze.getPrimaries(M.colorSpace),Me=M.colorSpace===Kn||Te===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,O=[];for(let ne=0;ne<6;ne++)!Ee&&!I?O[ne]=b(M.image[ne],!0,s.maxCubemapSize):O[ne]=I?M.image[ne].image:M.image[ne],O[ne]=ht(M,O[ne]);let V=O[0],X=r.convert(M.format,M.colorSpace),q=r.convert(M.type),ae=E(M.internalFormat,X,q,M.colorSpace),L=M.isVideoTexture!==!0,ee=Z.__version===void 0||J===!0,K=se.dataReady,le=R(M,V);Be(i.TEXTURE_CUBE_MAP,M);let ie;if(Ee){L&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ae,V.width,V.height);for(let ne=0;ne<6;ne++){ie=O[ne].mipmaps;for(let xe=0;xe<ie.length;xe++){let Ne=ie[xe];M.format!==pn?X!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ne.width,Ne.height,X,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,ae,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ne.width,Ne.height,X,q,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,ae,Ne.width,Ne.height,0,X,q,Ne.data)}}}else{if(ie=M.mipmaps,L&&ee){ie.length>0&&le++;let ne=ct(O[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ae,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(I){L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,O[ne].width,O[ne].height,X,q,O[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,O[ne].width,O[ne].height,0,X,q,O[ne].data);for(let xe=0;xe<ie.length;xe++){let tt=ie[xe].image[ne].image;L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,tt.width,tt.height,X,q,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,ae,tt.width,tt.height,0,X,q,tt.data)}}else{L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,X,q,O[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,X,q,O[ne]);for(let xe=0;xe<ie.length;xe++){let Ne=ie[xe];L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,X,q,Ne.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,ae,X,q,Ne.image[ne])}}}m(M)&&h(i.TEXTURE_CUBE_MAP),Z.__version=se.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function me(w,M,z,J,se,Z){let Te=r.convert(z.format,z.colorSpace),de=r.convert(z.type),Me=E(z.internalFormat,Te,de,z.colorSpace),Ee=n.get(M),I=n.get(z);if(I.__renderTarget=M,!Ee.__hasExternalTextures){let O=Math.max(1,M.width>>Z),V=Math.max(1,M.height>>Z);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,Me,O,V,M.depth,0,Te,de,null):t.texImage2D(se,Z,Me,O,V,0,Te,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,se,I.__webglTexture,0,Ye(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,se,I.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let J=M.depthTexture,se=J&&J.isDepthTexture?J.type:null,Z=y(M.stencilBuffer,se),Te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Ye(M);ye(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Z,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,w)}else{let J=M.textures;for(let se=0;se<J.length;se++){let Z=J[se],Te=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),Me=E(Z.internalFormat,Te,de,Z.colorSpace),Ee=Ye(M);z&&ye(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Me,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let se=J.__webglTexture,Z=Ye(M);if(M.depthTexture.format===gs)ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ps)ye(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(w){let M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=J}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=w.texture.mipmaps;J&&J.length>0?Ae(M.__webglFramebuffer[0],w):Ae(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),De(M.__webglDepthbuffer[J],w,!1);else{let se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Z)}}else{let J=w.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),De(M.__webglDepthbuffer,w,!1);else{let se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,M,z){let J=n.get(w);M!==void 0&&me(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&$e(w)}function D(w){let M=w.texture,z=n.get(w),J=n.get(M);w.addEventListener("dispose",T);let se=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Me=0;Me<M.mipmaps.length;Me++)z.__webglFramebuffer[de][Me]=i.createFramebuffer()}else z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Te)for(let de=0,Me=se.length;de<Me;de++){let Ee=n.get(se[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){let Me=se[de];z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[de]);let Ee=r.convert(Me.format,Me.colorSpace),I=r.convert(Me.type),O=E(Me.internalFormat,Ee,I,Me.colorSpace,w.isXRRenderTarget===!0),V=Ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,O,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),De(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Be(i.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)me(z.__webglFramebuffer[de][Me],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else me(z.__webglFramebuffer[de],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,Me=se.length;de<Me;de++){let Ee=se[de],I=n.get(Ee),O=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,I.__webglTexture),Be(O,Ee),me(z.__webglFramebuffer,w,Ee,i.COLOR_ATTACHMENT0+de,O,0),m(Ee)&&h(O)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),Be(de,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)me(z.__webglFramebuffer[Me],w,M,i.COLOR_ATTACHMENT0,de,Me);else me(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,de,0);m(M)&&h(de),t.unbindTexture()}w.depthBuffer&&$e(w)}function et(w){let M=w.textures;for(let z=0,J=M.length;z<J;z++){let se=M[z];if(m(se)){let Z=_(w),Te=n.get(se).__webglTexture;t.bindTexture(Z,Te),h(Z),t.unbindTexture()}}}let Re=[],Ie=[];function _e(w){if(w.samples>0){if(ye(w)===!1){let M=w.textures,z=w.width,J=w.height,se=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(w),de=M.length>1;if(de)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Me=w.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let I=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,se,i.NEAREST),l===!0&&(Re.length=0,Ie.length=0,Re.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Re.push(Z),Ie.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let I=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ye(w){return Math.min(s.maxSamples,w.samples)}function ye(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ze(w){let M=a.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function ht(w,M){let z=w.colorSpace,J=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Ui&&z!==Kn&&(Ze.getTransfer(z)===it?(J!==pn||se!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=st,this.setupRenderTarget=D,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function Rv(i,e){function t(n,s=Kn){let r,a=Ze.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===pn)return i.RGBA;if(n===gs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Er||n===Ar||n===Tr||n===wr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===vo||n===xo||n===_o||n===yo||n===bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===So||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===To||n===wo||n===Co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:Iv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,p=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new ll,h={},_=t.getContextAttributes(),E=null,y=null,R=[],C=[],T=new we,A=null,x=new Rt;x.viewport=new vt;let v=new Rt;v.viewport=new vt;let P=[x,v],N=new Na,k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=R[Q];return re===void 0&&(re=new Ss,R[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=R[Q];return re===void 0&&(re=new Ss,R[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=R[Q];return re===void 0&&(re=new Ss,R[Q]=re),re.getHandSpace()};function j(Q){let re=C.indexOf(Q.inputSource);if(re===-1)return;let me=R[re];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||a),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<R.length;Q++){let re=C[Q];re!==null&&(C[Q]=null,R[Q].disconnect(re))}k=null,$=null,m.reset();for(let Q in h)delete h[Q];e.setRenderTarget(E),f=null,p=null,u=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?Ps:gs,De=_.stencil?Is:vi);let $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer($e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Ln(p.textureWidth,p.textureHeight,{format:pn,type:Cn,depthTexture:new dr(p.textureWidth,p.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ln(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Q){for(let re=0;re<Q.removed.length;re++){let me=Q.removed[re],De=C.indexOf(me);De>=0&&(C[De]=null,R[De].disconnect(me))}for(let re=0;re<Q.added.length;re++){let me=Q.added[re],De=C.indexOf(me);if(De===-1){for(let $e=0;$e<R.length;$e++)if($e>=C.length){C.push(me),De=$e;break}else if(C[$e]===null){C[$e]=me,De=$e;break}if(De===-1)break}let Ae=R[De];Ae&&Ae.connect(me)}}let H=new U,te=new U;function fe(Q,re,me){H.setFromMatrixPosition(re.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);let De=H.distanceTo(te),Ae=re.projectionMatrix.elements,$e=me.projectionMatrix.elements,st=Ae[14]/(Ae[10]-1),D=Ae[14]/(Ae[10]+1),et=(Ae[9]+1)/Ae[5],Re=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],_e=($e[8]+1)/$e[0],Ye=st*Ie,ye=st*_e,ze=De/(-Ie+_e),ht=ze*-Ie;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ct=st+ze,w=D+ze,M=Ye-ht,z=ye+(De-ht),J=et*D/w*ct,se=Re*D/w*ct;Q.projectionMatrix.makePerspective(M,z,J,se,ct,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let re=Q.near,me=Q.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(me=m.depthFar)),N.near=v.near=x.near=re,N.far=v.far=x.far=me,(k!==N.near||$!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,$=N.far),N.layers.mask=Q.layers.mask|6,x.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;let De=Q.parent,Ae=N.cameras;ge(N,De);for(let $e=0;$e<Ae.length;$e++)ge(Ae[$e],De);Ae.length===2?fe(N,x,v):N.projectionMatrix.copy(x.projectionMatrix),Be(Q,N,De)};function Be(Q,re,me){me===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Q){return h[Q]};let Qe=null;function ot(Q,re){if(d=re.getViewerPose(c||a),g=re,d!==null){let me=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let De=!1;me.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let D=0;D<me.length;D++){let et=me[D],Re=null;if(f!==null)Re=f.getViewport(et);else{let _e=u.getViewSubImage(p,et);Re=_e.viewport,D===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let Ie=P[D];Ie===void 0&&(Ie=new Rt,Ie.layers.enable(D),Ie.viewport=new vt,P[D]=Ie),Ie.matrix.fromArray(et.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(et.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Re.x,Re.y,Re.width,Re.height),D===0&&(N.matrix.copy(Ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Ie)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let D=u.getDepthInformation(me[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ae&&Ae.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<me.length;D++){let et=me[D].camera;if(et){let Re=h[et];Re||(Re=new ur,h[et]=Re);let Ie=u.getCameraImage(et);Re.sourceTexture=Ie}}}}for(let me=0;me<R.length;me++){let De=C[me],Ae=R[me];De!==null&&Ae!==void 0&&Ae.update(De,re,c||a)}Qe&&Qe(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let Xe=new mu;Xe.setAnimationLoop(ot),this.setAnimationLoop=function(Q){Qe=Q},this.dispose=function(){}}},Yi=new Tn,Dv=new gt;function Lv(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Xc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,_,E,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),b(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Wt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Wt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let _=e.get(h),E=_.envMap,y=_.envMapRotation;E&&(m.envMap.value=E,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Yi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Wt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let y=E.program;n.uniformBlockBinding(_,y)}function c(_,E){let y=s[_.id];y===void 0&&(g(_),y=d(_),s[_.id]=y,_.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(_,R);let C=e.render.frame;r[_.id]!==C&&(p(_),r[_.id]=C)}function d(_){let E=u();_.__bindingPointIndex=E;let y=i.createBuffer(),R=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let E=s[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,T=y.length;C<T;C++){let A=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,v=A.length;x<v;x++){let P=A[x];if(f(P,C,x,R)===!0){let N=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],$=0;for(let j=0;j<k.length;j++){let Y=k[j],oe=b(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,N+$,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,y,R){let C=_.value,T=E+"_"+y;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{let A=R[T];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return R[T]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(_){let E=_.uniforms,y=0,R=16;for(let T=0,A=E.length;T<A;T++){let x=Array.isArray(E[T])?E[T]:[E[T]];for(let v=0,P=x.length;v<P;v++){let N=x[v],k=Array.isArray(N.value)?N.value:[N.value];for(let $=0,j=k.length;$<j;$++){let Y=k[$],oe=b(Y),H=y%R,te=H%oe.boundary,fe=H+te;y+=te,fe!==0&&R-fe<oe.storage&&(y+=R-fe),N.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=oe.storage}}}let C=y%R;return C>0&&(y+=R-C),_.__size=y,_.__cache={},this}function b(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function m(_){let E=_.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Ns=class{constructor(e={}){let{canvas:t=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,h=null,_=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=At;let C=0,T=0,A=null,x=-1,v=null,P=new vt,N=new vt,k=null,$=new Ge(0),j=0,Y=t.width,oe=t.height,H=1,te=null,fe=null,ge=new vt(0,0,Y,oe),Be=new vt(0,0,Y,oe),Qe=!1,ot=new Es,Xe=!1,Q=!1,re=new gt,me=new U,De=new vt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function st(){return A===null?H:1}let D=n;function et(S,F){return t.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){let F="webgl2";if(D=et(F,S),D===null)throw et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Re,Ie,_e,Ye,ye,ze,ht,ct,w,M,z,J,se,Z,Te,de,Me,Ee,I,O,V,X,q,ae;function L(){Re=new Km(D),Re.init(),X=new Rv(D,Re),Ie=new qm(D,Re,e,X),_e=new wv(D,Re),Ie.reversedDepthBuffer&&p&&_e.buffers.depth.setReversed(!0),Ye=new tg(D),ye=new pv,ze=new Cv(D,Re,_e,ye,Ie,X,Ye),ht=new $m(y),ct=new jm(y),w=new of(D),q=new Gm(D,w),M=new Qm(D,w,Ye,q),z=new ig(D,M,w,Ye),I=new ng(D,Ie,ze),de=new Xm(ye),J=new fv(y,ht,ct,Re,Ie,q,de),se=new Lv(y,ye),Z=new gv,Te=new Mv(Re),Ee=new Hm(y,ht,ct,_e,z,f,l),Me=new Av(y,z,Ie),ae=new Uv(D,Ye,Ie,_e),O=new Wm(D,Re,Ye),V=new eg(D,Re,Ye),Ye.programs=J.programs,y.capabilities=Ie,y.extensions=Re,y.properties=ye,y.renderLists=Z,y.shadowMap=Me,y.state=_e,y.info=Ye}L();let ee=new dl(y,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(Y,oe,!1))},this.getSize=function(S){return S.set(Y,oe)},this.setSize=function(S,F,G=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,oe=F,t.width=Math.floor(S*H),t.height=Math.floor(F*H),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Y*H,oe*H).floor()},this.setDrawingBufferSize=function(S,F,G){Y=S,oe=F,H=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ge)},this.setViewport=function(S,F,G,W){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,F,G,W),_e.viewport(P.copy(ge).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,F,G,W){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,F,G,W),_e.scissor(N.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){_e.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){fe=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,G=!0){let W=0;if(S){let B=!1;if(A!==null){let ce=A.texture.format;B=ce===Qa||ce===Ka||ce===ja}if(B){let ce=A.texture.type,pe=ce===Cn||ce===vi||ce===Cs||ce===Is||ce===Za||ce===Ja,Se=Ee.getClearColor(),ve=Ee.getClearAlpha(),Oe=Se.r,Fe=Se.g,Ce=Se.b;pe?(g[0]=Oe,g[1]=Fe,g[2]=Ce,g[3]=ve,D.clearBufferuiv(D.COLOR,0,g)):(b[0]=Oe,b[1]=Fe,b[2]=Ce,b[3]=ve,D.clearBufferiv(D.COLOR,0,b))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ee.dispose(),Z.dispose(),Te.dispose(),ye.dispose(),ht.dispose(),ct.dispose(),z.dispose(),q.dispose(),ae.dispose(),J.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Zt),ee.removeEventListener("sessionend",Gs),Pn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=Ye.autoReset,F=Me.enabled,G=Me.autoUpdate,W=Me.needsUpdate,B=Me.type;L(),Ye.autoReset=S,Me.enabled=F,Me.autoUpdate=G,Me.needsUpdate=W,Me.type=B}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ne(S){let F=S.target;F.removeEventListener("dispose",ne),xe(F)}function xe(S){Ne(S),ye.remove(S)}function Ne(S){let F=ye.get(S).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,W,B,ce){F===null&&(F=Ae);let pe=B.isMesh&&B.matrixWorld.determinant()<0,Se=kn(S,F,G,W,B);_e.setMaterial(W,pe);let ve=G.index,Oe=1;if(W.wireframe===!0){if(ve=M.getWireframeAttribute(G),ve===void 0)return;Oe=2}let Fe=G.drawRange,Ce=G.attributes.position,qe=Fe.start*Oe,rt=(Fe.start+Fe.count)*Oe;ce!==null&&(qe=Math.max(qe,ce.start*Oe),rt=Math.min(rt,(ce.start+ce.count)*Oe)),ve!==null?(qe=Math.max(qe,0),rt=Math.min(rt,ve.count)):Ce!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,Ce.count));let xt=rt-qe;if(xt<0||xt===1/0)return;q.setup(B,W,Se,G,ve);let dt,lt=O;if(ve!==null&&(dt=w.get(ve),lt=V,lt.setIndex(dt)),B.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*st()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(B.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),_e.setLineWidth(Pe*st()),B.isLineSegments?lt.setMode(D.LINES):B.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else B.isPoints?lt.setMode(D.POINTS):B.isSprite&&lt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pe=B._multiDrawStarts,pt=B._multiDrawCounts,Je=B._multiDrawCount,Jt=ve?w.get(ve).bytesPerElement:1,es=ye.get(W).currentProgram.getUniforms();for(let jt=0;jt<Je;jt++)es.setValue(D,"_gl_DrawID",jt),lt.render(Pe[jt]/Jt,pt[jt])}else if(B.isInstancedMesh)lt.renderInstances(qe,xt,B.count);else if(G.isInstancedBufferGeometry){let Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,Pe);lt.renderInstances(qe,xt,pt)}else lt.render(qe,xt)};function tt(S,F,G){S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,Mt(S,F,G),S.side=$n,S.needsUpdate=!0,Mt(S,F,G),S.side=fn):Mt(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),h=Te.get(G),h.init(F),E.push(h),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();let W=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ce=B.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){let Se=ce[pe];tt(Se,G,B),W.add(Se)}else tt(ce,G,B),W.add(ce)}),h=E.pop(),W},this.compileAsync=function(S,F,G=null){let W=this.compile(S,F,G);return new Promise(B=>{function ce(){if(W.forEach(function(pe){ye.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){B(S);return}setTimeout(ce,10)}Re.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let We=null;function Bt(S){We&&We(S)}function Zt(){Pn.stop()}function Gs(){Pn.start()}let Pn=new mu;Pn.setAnimationLoop(Bt),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){We=S,ee.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},ee.addEventListener("sessionstart",Zt),ee.addEventListener("sessionend",Gs),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,A),h=Te.get(S,E.length),h.init(F),E.push(h),re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ot.setFromProjectionMatrix(re,En,F.reversedDepth),Q=this.localClippingEnabled,Xe=de.init(this.clippingPlanes,Q),m=Z.get(S,_.length),m.init(),_.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ce=y.xr.getDepthSensingMesh();ce!==null&&Ai(ce,F,-1/0,y.sortObjects)}Ai(S,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(te,fe),$e=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,$e&&Ee.addToRenderList(m,S),this.info.render.frame++,Xe===!0&&de.beginShadows();let G=h.state.shadowsArray;Me.render(G,S,F),Xe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(h.setupLights(),F.isArrayCamera){let ce=F.cameras;if(B.length>0)for(let pe=0,Se=ce.length;pe<Se;pe++){let ve=ce[pe];bt(W,B,S,ve)}$e&&Ee.render(S);for(let pe=0,Se=ce.length;pe<Se;pe++){let ve=ce[pe];nt(m,S,ve,ve.viewport)}}else B.length>0&&bt(W,B,S,F),$e&&Ee.render(S),nt(m,S,F);A!==null&&T===0&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,F),q.resetDefaultState(),x=-1,v=null,E.pop(),E.length>0?(h=E[E.length-1],Xe===!0&&de.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ai(S,F,G,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ot.intersectsSprite(S)){W&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);let pe=z.update(S),Se=S.material;Se.visible&&m.push(S,pe,Se,G,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ot.intersectsObject(S))){let pe=z.update(S),Se=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){let ve=pe.groups;for(let Oe=0,Fe=ve.length;Oe<Fe;Oe++){let Ce=ve[Oe],qe=Se[Ce.materialIndex];qe&&qe.visible&&m.push(S,pe,qe,G,De.z,Ce)}}else Se.visible&&m.push(S,pe,Se,G,De.z,null)}}let ce=S.children;for(let pe=0,Se=ce.length;pe<Se;pe++)Ai(ce[pe],F,G,W)}function nt(S,F,G,W){let B=S.opaque,ce=S.transmissive,pe=S.transparent;h.setupLightsView(G),Xe===!0&&de.setGlobalState(y.clippingPlanes,G),W&&_e.viewport(P.copy(W)),B.length>0&&zt(B,F,G),ce.length>0&&zt(ce,F,G),pe.length>0&&zt(pe,F,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function bt(S,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Ln(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Rs:Cn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ce=h.state.transmissionRenderTarget[W.id],pe=W.viewport||P;ce.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);let Se=y.getRenderTarget(),ve=y.getActiveCubeFace(),Oe=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor($),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),$e&&Ee.render(G);let Fe=y.toneMapping;y.toneMapping=jn;let Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),Xe===!0&&de.setGlobalState(y.clippingPlanes,W),zt(S,G,W),ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce),Re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let rt=0,xt=F.length;rt<xt;rt++){let dt=F[rt],lt=dt.object,Pe=dt.geometry,pt=dt.material,Je=dt.group;if(pt.side===fn&&lt.layers.test(W.layers)){let Jt=pt.side;pt.side=Wt,pt.needsUpdate=!0,Pt(lt,G,W,Pe,pt,Je),pt.side=Jt,pt.needsUpdate=!0,qe=!0}}qe===!0&&(ze.updateMultisampleRenderTarget(ce),ze.updateRenderTargetMipmap(ce))}y.setRenderTarget(Se,ve,Oe),y.setClearColor($,j),Ce!==void 0&&(W.viewport=Ce),y.toneMapping=Fe}function zt(S,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=S.length;B<ce;B++){let pe=S[B],Se=pe.object,ve=pe.geometry,Oe=pe.group,Fe=pe.material;Fe.allowOverride===!0&&W!==null&&(Fe=W),Se.layers.test(G.layers)&&Pt(Se,F,G,ve,Fe,Oe)}}function Pt(S,F,G,W,B,ce){S.onBeforeRender(y,F,G,W,B,ce),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(y,F,G,W,S,ce),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,S,ce),B.side=$n,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,S,ce),B.side=fn):y.renderBufferDirect(G,F,W,B,S,ce),S.onAfterRender(y,F,G,W,B,ce)}function Mt(S,F,G){F.isScene!==!0&&(F=Ae);let W=ye.get(S),B=h.state.lights,ce=h.state.shadowsArray,pe=B.state.version,Se=J.getParameters(S,B.state,ce,F,G),ve=J.getProgramCacheKey(Se),Oe=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?ct:ht).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",ne),Oe=new Map,W.programs=Oe);let Fe=Oe.get(ve);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===pe)return Qi(S,Se),Fe}else Se.uniforms=J.getUniforms(S),S.onBeforeCompile(Se,y),Fe=J.acquireProgram(Se,ve),Oe.set(ve,Fe),W.uniforms=Se.uniforms;let Ce=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=de.uniform),Qi(S,Se),W.needsLights=eh(S),W.lightsStateVersion=pe,W.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function yn(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Qi(S,F){let G=ye.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function kn(S,F,G,W,B){F.isScene!==!0&&(F=Ae),ze.resetTextureUnits();let ce=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Se=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ui,ve=(W.isMeshStandardMaterial?ct:ht).get(W.envMap||pe),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color,xt=jn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=y.toneMapping);let dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=dt!==void 0?dt.length:0,Pe=ye.get(W),pt=h.state.lights;if(Xe===!0&&(Q===!0||S!==v)){let kt=S===v&&W.id===x;de.setState(W,S,kt)}let Je=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==pt.state.version||Pe.outputColorSpace!==Se||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==ve||W.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==de.numPlanes||Pe.numIntersection!==de.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ce||Pe.morphNormals!==qe||Pe.morphColors!==rt||Pe.toneMapping!==xt||Pe.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Pe.__version=W.version);let Jt=Pe.currentProgram;Je===!0&&(Jt=Mt(W,F,B));let es=!1,jt=!1,Ws=!1,mt=Jt.getUniforms(),cn=Pe.uniforms;if(_e.useProgram(Jt.program)&&(es=!0,jt=!0,Ws=!0),W.id!==x&&(x=W.id,jt=!0),es||v!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",S.projectionMatrix),mt.setValue(D,"viewMatrix",S.matrixWorldInverse);let Xt=mt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,me.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,jt=!0,Ws=!0)}if(B.isSkinnedMesh){mt.setOptional(D,B,"bindMatrix"),mt.setOptional(D,B,"bindMatrixInverse");let kt=B.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),mt.setValue(D,"boneTexture",kt.boneTexture,ze))}B.isBatchedMesh&&(mt.setOptional(D,B,"batchingTexture"),mt.setValue(D,"batchingTexture",B._matricesTexture,ze),mt.setOptional(D,B,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",B._indirectTexture,ze),mt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",B._colorsTexture,ze));let ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&I.update(B,G,Jt),(jt||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,mt.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(cn.envMap.value=ve,cn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),jt&&(mt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&zr(cn,Ws),ce&&W.fog===!0&&se.refreshFogUniforms(cn,ce),se.refreshMaterialUniforms(cn,W,H,oe,h.state.transmissionRenderTarget[S.id]),Os.upload(D,yn(Pe),cn,ze)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(D,yn(Pe),cn,ze),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(D,"center",B.center),mt.setValue(D,"modelViewMatrix",B.modelViewMatrix),mt.setValue(D,"normalMatrix",B.normalMatrix),mt.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let kt=W.uniformsGroups;for(let Xt=0,qo=kt.length;Xt<qo;Xt++){let Ti=kt[Xt];ae.update(Ti,Jt),ae.bind(Ti,Jt)}}return Jt}function zr(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function eh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,F,G){let W=ye.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(S.texture).__webglTexture=F,ye.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let G=ye.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let th=D.createFramebuffer();this.setRenderTarget=function(S,F=0,G=0){A=S,C=F,T=G;let W=!0,B=null,ce=!1,pe=!1;if(S){let ve=ye.get(S);if(ve.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(ve.__hasExternalTextures)ze.rebindTextures(S,ye.get(S.texture).__webglTexture,ye.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ce=S.depthTexture;if(ve.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}let Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let Fe=ye.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?B=Fe[F][G]:B=Fe[F],ce=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?B=ye.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[G]:B=Fe,P.copy(S.viewport),N.copy(S.scissor),k=S.scissorTest}else P.copy(ge).multiplyScalar(H).floor(),N.copy(Be).multiplyScalar(H).floor(),k=Qe;if(G!==0&&(B=th),_e.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&_e.drawBuffers(S,B),_e.viewport(P),_e.scissor(N),_e.setScissorTest(k),ce){let ve=ye.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,G)}else if(pe){let ve=F;for(let Oe=0;Oe<S.textures.length;Oe++){let Fe=ye.get(S.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Fe.__webglTexture,G,ve)}}else if(S!==null&&G!==0){let ve=ye.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ve.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(S,F,G,W,B,ce,pe,Se=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){_e.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Oe=S.textures[Se],Fe=Oe.format,Ce=Oe.type;if(!Ie.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&G>=0&&G<=S.height-B&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,G,W,B,X.convert(Fe),X.convert(Ce),ce))}finally{let Oe=A!==null?ye.get(A).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,W,B,ce,pe,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(F>=0&&F<=S.width-W&&G>=0&&G<=S.height-B){_e.bindFramebuffer(D.FRAMEBUFFER,ve);let Oe=S.textures[Se],Fe=Oe.format,Ce=Oe.type;if(!Ie.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(F,G,W,B,X.convert(Fe),X.convert(Ce),0);let rt=A!==null?ye.get(A).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,rt);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hd(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(qe),D.deleteSync(xt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,G=0){let W=Math.pow(2,-G),B=Math.floor(S.image.width*W),ce=Math.floor(S.image.height*W),pe=F!==null?F.x:0,Se=F!==null?F.y:0;ze.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,Se,B,ce),_e.unbindTexture()};let nh=D.createFramebuffer(),ih=D.createFramebuffer();this.copyTextureToTexture=function(S,F,G=null,W=null,B=0,ce=null){ce===null&&(B!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let pe,Se,ve,Oe,Fe,Ce,qe,rt,xt,dt=S.isCompressedTexture?S.mipmaps[ce]:S.image;if(G!==null)pe=G.max.x-G.min.x,Se=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Oe=G.min.x,Fe=G.min.y,Ce=G.isBox3?G.min.z:0;else{let ln=Math.pow(2,-B);pe=Math.floor(dt.width*ln),Se=Math.floor(dt.height*ln),S.isDataArrayTexture?ve=dt.depth:S.isData3DTexture?ve=Math.floor(dt.depth*ln):ve=1,Oe=0,Fe=0,Ce=0}W!==null?(qe=W.x,rt=W.y,xt=W.z):(qe=0,rt=0,xt=0);let lt=X.convert(F.format),Pe=X.convert(F.type),pt;F.isData3DTexture?(ze.setTexture3D(F,0),pt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),pt=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Je=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),es=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Ws=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);let mt=S.isDataArrayTexture||S.isData3DTexture,cn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let ln=ye.get(S),kt=ye.get(F),Xt=ye.get(ln.__renderTarget),qo=ye.get(kt.__renderTarget);_e.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let Ti=0;Ti<ve;Ti++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(S).__webglTexture,B,Ce+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,ce,xt+Ti)),D.blitFramebuffer(Oe,Fe,pe,Se,qe,rt,pe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||ye.has(S)){let ln=ye.get(S),kt=ye.get(F);_e.bindFramebuffer(D.READ_FRAMEBUFFER,nh),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,ih);for(let Xt=0;Xt<ve;Xt++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,B,Ce+Xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,B),cn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,ce,xt+Xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,ce),B!==0?D.blitFramebuffer(Oe,Fe,pe,Se,qe,rt,pe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):cn?D.copyTexSubImage3D(pt,ce,qe,rt,xt+Xt,Oe,Fe,pe,Se):D.copyTexSubImage2D(pt,ce,qe,rt,Oe,Fe,pe,Se);_e.bindFramebuffer(D.READ_FRAMEBUFFER,null),_e.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else cn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(pt,ce,qe,rt,xt,pe,Se,ve,lt,Pe,dt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,ce,qe,rt,xt,pe,Se,ve,lt,dt.data):D.texSubImage3D(pt,ce,qe,rt,xt,pe,Se,ve,lt,Pe,dt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,qe,rt,pe,Se,lt,Pe,dt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,qe,rt,dt.width,dt.height,lt,dt.data):D.texSubImage2D(D.TEXTURE_2D,ce,qe,rt,pe,Se,lt,Pe,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,es),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ws),ce===0&&F.generateMipmaps&&D.generateMipmap(pt),_e.unbindTexture()},this.initRenderTarget=function(S){ye.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,_e.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var je=[],Le=(i,e,t,n,s,r="")=>je.push({id:je.length+1,title:i,category:e,level:Math.floor(je.length/10)+1,symptom:t,steps:n,confirm:s,note:r});Le("Computador n\xE3o liga ao apertar Power","Energia","Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o bot\xE3o.",[["Tomada sem energia","Teste a tomada com um aparelho que voc\xEA sabe que funciona; n\xE3o introduza objetos nela.","Use outra tomada comprovadamente energizada. Se houver defeito na instala\xE7\xE3o, chame o respons\xE1vel."],["Cabo de for\xE7a desconectado da tomada","Observe se o plugue est\xE1 encaixado na tomada ou no filtro de linha.","Conecte o cabo corretamente; se usar filtro de linha, confira se ele est\xE1 ligado."],["Cabo desconectado da fonte","Observe a conex\xE3o na parte traseira do gabinete.","Com a alimenta\xE7\xE3o desligada, encaixe o cabo firmemente na fonte."],["Interruptor traseiro da fonte desligado","Se houver chave I/O, veja se est\xE1 em O. I/O n\xE3o \xE9 o seletor 115/230 V.","Coloque a chave I/O em I. Nunca mude o seletor de tens\xE3o por tentativa."],["Cabo de for\xE7a danificado","Inspecione o cabo desligado. Se n\xE3o houver dano vis\xEDvel, compare com outro compat\xEDvel e comprovadamente bom.","Substitua o cabo danificado ou que falhou no teste."],["Fonte ausente ou conex\xF5es internas soltas","Com o professor e o PC fora da tomada, confirme a presen\xE7a da fonte e os conectores da placa-m\xE3e, conforme o manual.","Se faltar fonte, instale uma compat\xEDvel. Se houver conex\xE3o solta, reconecte o conector correto."],["Falha da fonte, bot\xE3o ou placa-m\xE3e","Depois das etapas anteriores, o professor testa uma fonte compat\xEDvel conhecida e verifica o cabo do bot\xE3o no manual.","Substitua apenas a pe\xE7a cuja falha foi isolada. Encaminhe a placa-m\xE3e para diagn\xF3stico se persistir."]],"O computador volta a responder ao Power e come\xE7a a inicializa\xE7\xE3o.","Abrir a fonte n\xE3o faz parte do diagn\xF3stico. Ventoinha da fonte parada, sozinha, n\xE3o comprova defeito: alguns modelos t\xEAm modo sem rota\xE7\xE3o.");Le("Monitor n\xE3o acende","V\xEDdeo","O monitor n\xE3o mostra imagem nem seu pr\xF3prio menu.",[["Monitor desligado","Aperte o bot\xE3o do monitor e procure o LED de energia.","Ligue o monitor."],["Cabo de energia mal conectado","Inspecione os dois extremos do cabo e a tomada.","Reconecte o cabo e use tomada energizada."],["Fonte externa ou cabo defeituoso","Se o monitor usa adaptador, compare apenas com modelo de tens\xE3o, polaridade e corrente compat\xEDveis.","Substitua o cabo ou adaptador cuja falha foi confirmada."],["Falha no monitor","Teste o monitor em outro computador e tente abrir o menu sem o cabo de v\xEDdeo.","Se continuar sem menu nem alimenta\xE7\xE3o, encaminhe para reparo ou substitua."]],"O menu pr\xF3prio do monitor aparece e o LED indica alimenta\xE7\xE3o.","N\xE3o abra o monitor: h\xE1 circuitos com tens\xE3o perigosa.");Le("PC liga, mas o monitor mostra \u201Csem sinal\u201D","V\xEDdeo","H\xE1 luzes ou ventoinhas no gabinete, mas o monitor n\xE3o recebe v\xEDdeo.",[["Entrada de v\xEDdeo incorreta","Abra o menu do monitor e compare a entrada selecionada com o cabo usado.","Selecione HDMI, DisplayPort ou outra entrada realmente conectada."],["Cabo de v\xEDdeo solto ou defeituoso","Confira as duas pontas; teste outro cabo compat\xEDvel.","Reconecte ou substitua o cabo que falhou."],["Cabo na sa\xEDda de v\xEDdeo errada","Se h\xE1 placa de v\xEDdeo dedicada, confira se o cabo est\xE1 ligado nela. A sa\xEDda da placa-m\xE3e depende de v\xEDdeo integrado e configura\xE7\xE3o.","Conecte \xE0 sa\xEDda adequada ao conjunto instalado."],["Falha do monitor ou aus\xEAncia de POST","Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagn\xF3stico e consulte o caso 41.","Isole primeiro monitor/cabo; com o professor, investigue mem\xF3ria e v\xEDdeo se o PC n\xE3o concluir o autoteste."]],"A imagem de inicializa\xE7\xE3o aparece e o sistema pode ser exibido.","Ventoinhas girando n\xE3o garantem que o computador concluiu o POST.");Le("Imagem pisca ou some durante o uso","V\xEDdeo","A tela perde a imagem por instantes, embora o computador continue funcionando.",[["Conex\xE3o frouxa","Confira se o cabo est\xE1 firme nas duas pontas, sem pux\xE1-lo lateralmente.","Reconecte e deixe folga no cabo."],["Cabo ou adaptador com defeito","Teste conex\xE3o direta e outro cabo compat\xEDvel com a resolu\xE7\xE3o usada.","Troque o cabo/adaptador que reproduz a falha."],["Resolu\xE7\xE3o ou frequ\xEAncia inadequada","Compare os ajustes de tela com as especifica\xE7\xF5es do monitor.","Use uma resolu\xE7\xE3o e frequ\xEAncia suportadas."],["Driver ou hardware de v\xEDdeo inst\xE1vel","Observe se come\xE7ou ap\xF3s atualiza\xE7\xE3o; compare com outro monitor e consulte os casos 37 e 44.","Reinstale ou reverta o driver oficial se houver rela\xE7\xE3o. Se persistir, pe\xE7a diagn\xF3stico da GPU."]],"A imagem permanece est\xE1vel no mesmo per\xEDodo e tarefa que antes provocavam a falha.");Le("Imagem esticada, grande ou pouco n\xEDtida","V\xEDdeo","O sistema aparece, mas letras e propor\xE7\xF5es est\xE3o incorretas.",[["Resolu\xE7\xE3o diferente da nativa","Consulte a resolu\xE7\xE3o recomendada nas configura\xE7\xF5es de tela e no manual.","Ajuste para a resolu\xE7\xE3o nativa suportada pelo monitor."],["Escala de interface inadequada","Confira o ajuste de escala do sistema.","Escolha uma escala confort\xE1vel; compare sem mudar v\xE1rias op\xE7\xF5es ao mesmo tempo."],["Configura\xE7\xE3o do monitor incorreta","Confira propor\xE7\xE3o da imagem e ajustes do pr\xF3prio monitor.","Restaure a propor\xE7\xE3o correta; para VGA, use o ajuste autom\xE1tico do monitor se dispon\xEDvel."],["Driver de v\xEDdeo ausente ou incorreto","Veja se o sistema usa um driver b\xE1sico e se faltam op\xE7\xF5es de resolu\xE7\xE3o.","Instale o driver oficial compat\xEDvel com a GPU e o sistema."]],"Texto fica leg\xEDvel, c\xEDrculos ficam circulares e a resolu\xE7\xE3o correta est\xE1 dispon\xEDvel.");Le("Teclado n\xE3o responde","Perif\xE9ricos","As teclas n\xE3o produzem resposta no sistema.",[["Conex\xE3o ou alimenta\xE7\xE3o ausente","Confira USB; se for sem fio, verifique pilhas, chave e receptor.","Reconecte, ligue ou substitua as pilhas."],["Porta ou intermedi\xE1rio com problema","Teste uma porta USB traseira, diretamente no PC, sem hub.","Use a porta funcional e retire o hub defeituoso."],["Falha do pr\xF3prio teclado","Teste o teclado em outro PC e outro teclado neste PC.","Substitua o teclado se a falha acompanh\xE1-lo."],["Problema no sistema ou controlador USB","Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.","Se funciona antes do sistema, revise drivers e configura\xE7\xF5es. Se v\xE1rias portas falham, encaminhe o controlador para diagn\xF3stico."]],"O teclado digita corretamente e responde ap\xF3s uma nova inicializa\xE7\xE3o.","Conectores PS/2 devem ser reconectados com o computador desligado.");Le("Mouse n\xE3o move o ponteiro","Perif\xE9ricos","O ponteiro fica parado ou o mouse n\xE3o \xE9 reconhecido.",[["Mouse sem energia ou desconectado","Confira cabo, receptor USB, pilha e bot\xE3o liga/desliga.","Conecte e ligue o mouse; troque a pilha se necess\xE1rio."],["Sensor obstru\xEDdo ou superf\xEDcie inadequada","Observe a base e teste em superf\xEDcie opaca uniforme.","Limpe externamente o sensor com cuidado e use um mousepad adequado."],["Porta USB ou hub com falha","Teste diretamente numa USB traseira.","Use uma porta funcional ou substitua o hub confirmado como defeituoso."],["Defeito no mouse ou falha de software","Compare com outro mouse e teste este em outro computador.","Troque o mouse se a falha o acompanhar; se s\xF3 ocorre neste sistema, revise o driver e as op\xE7\xF5es de acessibilidade."]],"O ponteiro se move de forma cont\xEDnua e os cliques funcionam.");Le("Computador n\xE3o emite som","\xC1udio","Um \xE1udio est\xE1 sendo reproduzido, mas n\xE3o \xE9 ouvido.",[["Volume zerado ou silenciado","Confira o volume do sistema, do aplicativo e da caixa de som.","Remova o sil\xEAncio e aumente gradualmente o volume."],["Caixa ou fone desconectado","Confira energia da caixa e conex\xE3o na sa\xEDda de \xE1udio correta.","Ligue a caixa e conecte ao conector de sa\xEDda indicado no manual."],["Dispositivo de sa\xEDda errado","Observe se o sistema envia \xE1udio ao monitor HDMI, Bluetooth ou outra sa\xEDda.","Selecione a sa\xEDda onde est\xE1 seu fone ou caixa."],["Falha do acess\xF3rio ou driver","Teste outro fone e observe o dispositivo no gerenciador do sistema.","Troque o acess\xF3rio que falhou; instale o driver oficial se o dispositivo n\xE3o estiver corretamente reconhecido."]],"Um som de teste \xE9 ouvido no dispositivo escolhido.");Le("Fone ou microfone do painel frontal n\xE3o funciona","\xC1udio","As conex\xF5es frontais falham, mas as traseiras podem funcionar.",[["Plugue ou conector inadequado","Confira se est\xE1 na entrada correta e se o fone combinado precisa de adaptador compat\xEDvel.","Use a conex\xE3o adequada; entrada de microfone n\xE3o \xE9 sa\xEDda de fone."],["Entrada/sa\xEDda frontal n\xE3o selecionada","Confira as op\xE7\xF5es de \xE1udio e a detec\xE7\xE3o do conector.","Selecione o dispositivo frontal correto e ajuste a detec\xE7\xE3o conforme o software oficial."],["Defeito no fone ou no conector frontal","Teste o mesmo fone atr\xE1s e outro fone na frente.","Substitua o acess\xF3rio defeituoso ou encaminhe o conector frontal se s\xF3 ele falhar."],["Cabo interno HD AUDIO solto","Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.","Reconecte no header de \xE1udio correto. N\xE3o use por tentativa os headers USB."]],"As conex\xF5es frontais reproduzem ou capturam \xE1udio conforme sua fun\xE7\xE3o.");Le("Sem acesso \xE0 rede pelo cabo","Rede","O computador n\xE3o acessa a rede usando Ethernet.",[["Cabo de rede desconectado","Confira as duas pontas e os indicadores de link, quando existirem.","Encaixe o cabo na porta do PC e do switch/roteador."],["Cabo ou porta de rede com defeito","Teste cabo conhecido e outra porta do switch.","Troque o cabo ou use a porta funcional."],["Adaptador desativado","Confira se a interface Ethernet est\xE1 habilitada no sistema.","Habilite o adaptador; se n\xE3o for reconhecido, instale o driver oficial."],["Falha na rede ou na configura\xE7\xE3o IP","Compare com outro computador na mesma rede e consulte o caso 22.","Use configura\xE7\xE3o autom\xE1tica se a rede fornece DHCP; encaminhe falhas gerais ao respons\xE1vel pela rede."]],"O computador obt\xE9m uma configura\xE7\xE3o de rede v\xE1lida e acessa os recursos autorizados.");Le("Wi-Fi n\xE3o aparece ou n\xE3o conecta","Rede","O desktop n\xE3o mostra redes sem fio ou n\xE3o consegue entrar na rede.",[["Desktop sem adaptador Wi-Fi","Confira se h\xE1 adaptador instalado; muitos desktops t\xEAm apenas Ethernet.","Use Ethernet ou instale um adaptador Wi-Fi compat\xEDvel."],["Wi-Fi desligado ou antena ausente","Confira modo avi\xE3o, Wi-Fi e antenas externas do adaptador.","Ative o Wi-Fi e conecte as antenas previstas pelo fabricante."],["Senha errada ou sinal fraco","Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.","Corrija a credencial e reposicione o computador ou ponto de acesso."],["Driver ou incompatibilidade de banda","Veja se o adaptador aparece no sistema e suporta a banda da rede.","Instale o driver oficial; escolha uma rede/banda compat\xEDvel ou encaminhe o roteador ao respons\xE1vel."]],"A rede conecta e permanece est\xE1vel em um teste de navega\xE7\xE3o.");Le("Pendrive n\xE3o aparece no explorador","Armazenamento","O pendrive est\xE1 conectado, mas n\xE3o aparece entre as unidades.",[["Conex\xE3o inadequada","Retire com seguran\xE7a se detectado e teste numa USB traseira sem hub.","Reconecte numa porta funcional."],["Falha do pendrive","Teste em outro PC e compare com outro pendrive na mesma porta.","Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recupera\xE7\xE3o."],["Unidade sem letra","Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.","Se h\xE1 parti\xE7\xE3o saud\xE1vel sem letra, atribua uma letra livre. N\xE3o inicialize nem formate uma unidade com dados."],["Sistema de arquivos danificado ou incompat\xEDvel","Observe se aparece RAW, n\xE3o alocado ou com sistema de arquivos n\xE3o suportado.","N\xE3o aceite formata\xE7\xE3o autom\xE1tica. Fa\xE7a backup/recupera\xE7\xE3o; s\xF3 depois prepare a unidade para o sistema correto."]],"A unidade aparece e arquivos de teste podem ser lidos; a remo\xE7\xE3o segura funciona.","Se o conte\xFAdo for importante, interrompa tentativas de escrita na unidade defeituosa.");Le("Impressora n\xE3o imprime a partir do desktop","Perif\xE9ricos","O trabalho \xE9 enviado, mas a impress\xE3o n\xE3o sai.",[["Impressora sem condi\xE7\xF5es de imprimir","Confira energia, papel, tampa e avisos no painel.","Ligue e resolva o aviso f\xEDsico indicado, conforme o manual."],["Impressora errada ou conex\xE3o ausente","Confira a impressora escolhida e o cabo USB ou rede.","Selecione a impressora correta e restaure a conex\xE3o."],["Fila pausada ou trabalho travado","Veja a fila de impress\xE3o e o estado offline/pausado.","Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma p\xE1gina."],["Driver ou servi\xE7o com falha","Teste uma p\xE1gina interna da impressora e uma p\xE1gina pelo sistema.","Se a p\xE1gina interna sai, revise driver oficial, porta e servi\xE7o de impress\xE3o com o professor."]],"Uma p\xE1gina de teste enviada pelo computador \xE9 impressa.");Le("Webcam n\xE3o mostra imagem","Perif\xE9ricos","O aplicativo abre, mas a imagem da c\xE2mera n\xE3o aparece.",[["Tampa de privacidade ou conex\xE3o","Confira a tampa f\xEDsica e o cabo USB.","Abra a tampa e conecte a c\xE2mera diretamente ao PC."],["C\xE2mera errada selecionada","Observe o dispositivo escolhido no aplicativo.","Selecione a webcam correta."],["Permiss\xE3o bloqueada ou c\xE2mera ocupada","Confira as permiss\xF5es de c\xE2mera e feche outro aplicativo que esteja usando-a.","Autorize o aplicativo necess\xE1rio e deixe a c\xE2mera livre para o teste."],["Driver ou c\xE2mera defeituosa","Teste outro aplicativo, porta USB e outro PC.","Atualize o driver oficial se necess\xE1rio; substitua a c\xE2mera se a falha a acompanhar."]],"A c\xE2mera mostra uma imagem no aplicativo autorizado.");Le("Microfone n\xE3o capta voz","\xC1udio","A pessoa fala, mas o indicador de entrada n\xE3o se move.",[["Microfone silenciado ou desconectado","Confira bot\xE3o de mute, plugue e alimenta\xE7\xE3o quando aplic\xE1vel.","Remova o mute e conecte \xE0 entrada correta."],["Entrada ou n\xEDvel de captura incorreto","Confira o dispositivo selecionado e o n\xEDvel de entrada.","Escolha o microfone correto e ajuste o n\xEDvel sem saturar."],["Permiss\xE3o ou configura\xE7\xE3o do aplicativo","Teste a grava\xE7\xE3o do sistema e confira a permiss\xE3o do aplicativo.","Autorize o uso e selecione a entrada no aplicativo."],["Plugue incompat\xEDvel, driver ou defeito","Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.","Use adaptador compat\xEDvel, revise o driver oficial ou substitua o acess\xF3rio cuja falha foi confirmada."]],"Uma grava\xE7\xE3o curta reproduz a voz com clareza.");Le("Segundo monitor n\xE3o \xE9 reconhecido","V\xEDdeo","S\xF3 um monitor funciona num desktop com dois monitores conectados.",[["Monitor ou entrada desligada","Confira energia e entrada do segundo monitor.","Ligue e selecione a entrada conectada."],["Modo de exibi\xE7\xE3o inadequado","Abra as op\xE7\xF5es de m\xFAltiplos monitores do sistema.","Escolha estender ou duplicar e use a op\xE7\xE3o de detectar."],["Cabo, adaptador ou porta inadequados","Teste o segundo monitor sozinho e confira o sentido de convers\xE3o do adaptador.","Use cabo/adaptador apropriado. Um divisor simples n\xE3o cria duas telas independentes."],["Limite de GPU ou sa\xEDda da placa-m\xE3e indispon\xEDvel","Consulte o n\xFAmero de telas suportadas e a disponibilidade do v\xEDdeo integrado.","Conecte a sa\xEDdas suportadas; revise driver e configura\xE7\xE3o conforme o manual."]],"As duas telas aparecem nas configura\xE7\xF5es e operam no modo escolhido.");Le("Data e hora ficam incorretas","Sistema","O rel\xF3gio mostra hor\xE1rio errado ou perde o ajuste depois de desligar.",[["Fuso hor\xE1rio incorreto","Confira fuso e hora autom\xE1tica no sistema.","Selecione o fuso correto e sincronize a hora."],["Sincroniza\xE7\xE3o indispon\xEDvel","Confira a conex\xE3o e o servi\xE7o de hora; compare com rel\xF3gio confi\xE1vel.","Restaure a sincroniza\xE7\xE3o autorizada ou ajuste temporariamente a hora."],["Hora perdida tamb\xE9m na BIOS/UEFI","Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.","Se a hora do firmware permanece correta, investigue o sistema; se \xE9 perdida, avance para a bateria."],["Bateria da placa-m\xE3e esgotada","Confirme o tipo no manual e registre as configura\xE7\xF5es antes da interven\xE7\xE3o.","Com supervis\xE3o e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e op\xE7\xF5es necess\xE1rias."]],"O rel\xF3gio permanece correto ap\xF3s desligar e religar, inclusive depois do teste sem energia.");Le("Computador demora muito para iniciar","Sistema","A inicializa\xE7\xE3o chega ao sistema, mas leva tempo excessivo.",[["Perif\xE9rico atrasando a partida","Compare a inicializa\xE7\xE3o sem pendrives e acess\xF3rios n\xE3o essenciais.","Remova o acess\xF3rio problem\xE1tico e revise sua configura\xE7\xE3o."],["Muitos aplicativos iniciando juntos","Observe aplicativos de inicializa\xE7\xE3o e seu impacto.","Desative apenas os desnecess\xE1rios; mantenha prote\xE7\xE3o e servi\xE7os essenciais."],["Pouco espa\xE7o ou atualiza\xE7\xE3o em andamento","Confira espa\xE7o livre e estado das atualiza\xE7\xF5es.","Libere espa\xE7o com ferramentas do sistema e deixe a atualiza\xE7\xE3o terminar."],["Armazenamento lento ou falhando","Fa\xE7a backup e compare sa\xFAde da unidade e uso de disco ap\xF3s iniciar.","Se a unidade falha, substitua ap\xF3s preservar os dados; se \xE9 apenas limita\xE7\xE3o de HDD, avalie SSD compat\xEDvel."]],"O tempo de partida melhora em duas inicializa\xE7\xF5es compar\xE1veis, sem remover servi\xE7os essenciais.");Le("Computador fica lento durante o uso","Sistema","Programas abrem devagar e o sistema responde com atraso.",[["Excesso de tarefas abertas","Observe CPU, mem\xF3ria e disco no monitor de tarefas.","Feche tarefas n\xE3o utilizadas e compare o desempenho."],["Armazenamento quase cheio","Confira espa\xE7o dispon\xEDvel no disco do sistema.","Remova arquivos tempor\xE1rios com ferramenta do sistema e mova arquivos pr\xF3prios ap\xF3s backup."],["Aplicativo consumindo recursos ou malware","Identifique o processo de maior consumo e fa\xE7a uma verifica\xE7\xE3o com prote\xE7\xE3o confi\xE1vel.","Atualize ou corrija o aplicativo; siga o caso 26 se houver infec\xE7\xE3o."],["Limite de hardware, calor ou unidade com falha","Compare o consumo com os requisitos dos programas, temperaturas e sa\xFAde do disco.","Corrija a causa confirmada; amplie RAM/SSD se houver limita\xE7\xE3o, ou siga os casos de calor e armazenamento."]],"A tarefa usada como refer\xEAncia volta a responder bem; registre qual recurso causava a lentid\xE3o.");Le("Um programa trava ou fecha sozinho","Sistema","Um aplicativo espec\xEDfico para de responder, enquanto outros podem continuar funcionando.",[["Arquivo ou opera\xE7\xE3o espec\xEDfica com erro","Teste um arquivo novo e registre a a\xE7\xE3o que provoca o travamento.","Recupere o arquivo de backup ou evite a opera\xE7\xE3o at\xE9 corrigir o problema identificado."],["Recursos insuficientes","Confira espa\xE7o, mem\xF3ria e os requisitos do aplicativo.","Feche tarefas desnecess\xE1rias e libere espa\xE7o; ajuste a carga ao hardware."],["Vers\xE3o, extens\xE3o ou instala\xE7\xE3o com problema","Teste sem extens\xF5es opcionais e veja se come\xE7ou ap\xF3s uma mudan\xE7a.","Atualize pelo fornecedor ou repare/reinstale o aplicativo ap\xF3s salvar dados e configura\xE7\xF5es."],["Problema geral de sistema ou hardware","Observe se v\xE1rios programas tamb\xE9m travam e consulte registros de erros.","Se a falha \xE9 geral, siga os casos 36, 43 e 46 com o professor."]],"A mesma a\xE7\xE3o que antes travava funciona em testes repetidos, sem perda dos arquivos.");Le("Windows chega a uma tela de recupera\xE7\xE3o","Inicializa\xE7\xE3o","O computador liga, mas n\xE3o carrega normalmente o Windows.",[["Dispositivo externo interferindo","Retire m\xEDdias remov\xEDveis e registre a mensagem completa.","Reinicie sem m\xEDdias n\xE3o essenciais; se resolver, revise a ordem de boot."],["Falha na inicializa\xE7\xE3o do sistema","Confira se a unidade do sistema \xE9 detectada e use as op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Com o professor, tente Reparo de Inicializa\xE7\xE3o. Se o disco n\xE3o \xE9 detectado, siga o caso 29."],["Atualiza\xE7\xE3o ou driver recente","Veja se o problema come\xE7ou logo ap\xF3s uma mudan\xE7a. Tenha a chave de recupera\xE7\xE3o se houver criptografia.","Use as op\xE7\xF5es apropriadas de desinstalar atualiza\xE7\xE3o ou Restaura\xE7\xE3o do Sistema, ap\xF3s avaliar o backup."],["Sistema corrompido ou disco defeituoso","Preserve dados e verifique a sa\xFAde da unidade antes de reinstalar.","Se o disco estiver saud\xE1vel, repare/reinstale o sistema ap\xF3s backup. Se falha, substitua a unidade antes da instala\xE7\xE3o."]],"O sistema inicia, os arquivos preservados est\xE3o acess\xEDveis e a falha n\xE3o reaparece.","Op\xE7\xF5es de recupera\xE7\xE3o podem alterar dados e aplicativos. Obtenha backup e chave de recupera\xE7\xE3o antes de procedimentos invasivos.");Le("Rede conecta, mas n\xE3o abre a internet","Rede","A interface tem link ou Wi-Fi conectado, mas os sites n\xE3o abrem.",[["Falha geral da rede","Teste outro dispositivo na mesma rede e mais de um site.","Se todos falham, encaminhe o roteador/provedor ao respons\xE1vel; se s\xF3 um site falha, n\xE3o altere todo o PC."],["Endere\xE7o IP ou gateway inv\xE1lido","Com o professor, veja IP, m\xE1scara e gateway; 169.254.x.x costuma indicar que o DHCP n\xE3o forneceu endere\xE7o.","Use DHCP se previsto pela rede e renove a conex\xE3o; corrija IP fixo somente com os dados do administrador."],["Falha na resolu\xE7\xE3o de nomes (DNS)","Compare conectividade com o gateway e resolu\xE7\xE3o de nomes, usando testes orientados.","Restaure o DNS previsto pela rede; n\xE3o coloque servidores aleat\xF3rios numa rede escolar."],["Proxy, VPN ou bloqueio de seguran\xE7a","Confira se come\xE7ou ap\xF3s ativar VPN/proxy e verifique as regras da rede.","Corrija a configura\xE7\xE3o autorizada ou encaminhe ao administrador. N\xE3o desative a prote\xE7\xE3o como solu\xE7\xE3o permanente."]],"Sites e servi\xE7os autorizados abrem; o aluno diferencia link, IP e DNS.");Le("Conex\xE3o de rede cai frequentemente","Rede","O acesso funciona por um tempo e depois \xE9 interrompido.",[["Mau contato ou sinal fraco","Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.","Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas."],["Falha no equipamento de rede","Compare outros dispositivos e outra porta do switch.","Use a porta funcional e informe quedas gerais ao respons\xE1vel pela rede."],["Economia de energia ou driver do adaptador","Observe se a queda ocorre ap\xF3s inatividade e confira o driver oficial.","Atualize o driver e ajuste a economia de energia conforme a orienta\xE7\xE3o do fabricante."],["Defeito no adaptador","Teste um adaptador compat\xEDvel conhecido sob as mesmas condi\xE7\xF5es.","Substitua o adaptador apenas se o teste isolar a falha nele."]],"A conex\xE3o permanece est\xE1vel no intervalo e atividade que antes causavam a queda.");Le("Bluetooth n\xE3o encontra ou n\xE3o conecta o acess\xF3rio","Perif\xE9ricos","Um fone, teclado ou mouse Bluetooth n\xE3o aparece ou falha ao parear.",[["Desktop sem Bluetooth ou r\xE1dio desligado","Confira se o PC tem adaptador e se Bluetooth est\xE1 ativado.","Ative o recurso ou instale adaptador compat\xEDvel."],["Acess\xF3rio fora do modo de pareamento","Confira carga e siga o procedimento do fabricante.","Carregue e coloque o acess\xF3rio em modo de pareamento perto do PC."],["Pareamento antigo ou liga\xE7\xE3o a outro dispositivo","Veja se o acess\xF3rio est\xE1 conectado a outro aparelho.","Desconecte do outro aparelho e refa\xE7a apenas o pareamento desse acess\xF3rio."],["Driver, antena ou adaptador com falha","Teste outro acess\xF3rio e confira driver e antenas compartilhadas, se previstas.","Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada."]],"O acess\xF3rio pareia e executa sua fun\xE7\xE3o ap\xF3s uma reconex\xE3o.");Le("Disco do sistema est\xE1 quase cheio","Armazenamento","O sistema avisa falta de espa\xE7o e pode falhar ao instalar programas.",[["Lixeira e arquivos tempor\xE1rios acumulados","Confira o uso de armazenamento e revise a lixeira antes de apagar.","Use a limpeza do sistema e exclua apenas itens dispens\xE1veis."],["Arquivos pessoais grandes","Identifique v\xEDdeos, downloads e outros arquivos pr\xF3prios.","Fa\xE7a backup e mova o que n\xE3o precisa ficar no disco principal."],["Programas desnecess\xE1rios","Confira programas instalados e tamanho ocupado.","Desinstale pelos recursos do sistema o que n\xE3o ser\xE1 usado, preservando dados necess\xE1rios."],["Capacidade insuficiente para a rotina","Compare o espa\xE7o exigido pela turma com o dispon\xEDvel ap\xF3s a limpeza.","Planeje unidade maior compat\xEDvel e migra\xE7\xE3o com backup. N\xE3o apague pastas do sistema manualmente."]],"H\xE1 espa\xE7o para o uso e as atualiza\xE7\xF5es previstas, e os arquivos necess\xE1rios continuam acess\xEDveis.");Le("Propagandas estranhas e programas desconhecidos","Sistema","Aparecem redirecionamentos, extens\xF5es desconhecidas ou alertas suspeitos.",[["Notifica\xE7\xF5es autorizadas por engano","Identifique se o alerta vem do navegador e de qual site.","Revogue a permiss\xE3o do site desconhecido; n\xE3o clique no alerta."],["Extens\xE3o ou programa indesejado","Revise extens\xF5es e instala\xE7\xF5es recentes com o professor.","Remova itens indesejados pelos mecanismos oficiais."],["Poss\xEDvel infec\xE7\xE3o","Atualize a prote\xE7\xE3o confi\xE1vel e execute uma verifica\xE7\xE3o completa; isole da rede se houver comportamento ativo suspeito.","Siga as a\xE7\xF5es de quarentena da prote\xE7\xE3o e a pol\xEDtica do laborat\xF3rio."],["Comprometimento persistente","Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.","Encaminhe ao respons\xE1vel; uma reinstala\xE7\xE3o limpa pode ser necess\xE1ria ap\xF3s backup verificado. Troque senhas num dispositivo confi\xE1vel se houve exposi\xE7\xE3o."]],"A prote\xE7\xE3o conclui a verifica\xE7\xE3o e os sintomas n\xE3o retornam ap\xF3s reiniciar e testar o navegador.","N\xE3o instale \u201Climpadores\u201D anunciados pelos pr\xF3prios alertas. Em m\xE1quinas da escola, informe o respons\xE1vel pelo laborat\xF3rio.");Le("Windows Update falha repetidamente","Sistema","Uma atualiza\xE7\xE3o n\xE3o instala e mostra uma mensagem ou c\xF3digo de erro.",[["Reinicializa\xE7\xE3o pendente","Confira o aviso de reiniciar e registre o c\xF3digo de erro.","Salve o trabalho e reinicie pelo sistema."],["Internet, hora ou espa\xE7o inadequados","Confira rede, rel\xF3gio e espa\xE7o livre.","Corrija conex\xE3o/hora e libere espa\xE7o com ferramentas do sistema."],["Erro detect\xE1vel pelo solucionador oficial","Execute a ferramenta de solu\xE7\xE3o de problemas de atualiza\xE7\xE3o dispon\xEDvel no sistema.","Aplique a corre\xE7\xE3o indicada e tente novamente."],["Arquivos do sistema ou pacote com falha","Pesquise o c\xF3digo na documenta\xE7\xE3o oficial com o professor e preserve os dados.","Fa\xE7a o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir."]],"A atualiza\xE7\xE3o prevista conclui e o sistema reinicia normalmente.","N\xE3o desligue \xE0 for\xE7a enquanto a instala\xE7\xE3o estiver progredindo.");Le("Mensagem \u201CNo bootable device\u201D ou \u201CBoot device not found\u201D","Inicializa\xE7\xE3o","O firmware informa que n\xE3o encontrou um sistema para iniciar.",[["M\xEDdia remov\xEDvel escolhida por engano","Confira se h\xE1 pendrive ou disco externo conectado.","Remova a m\xEDdia de teste e tente iniciar novamente."],["Ordem de boot incorreta","Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.","Selecione a entrada de inicializa\xE7\xE3o correta, conforme a instala\xE7\xE3o existente."],["Unidade do sistema n\xE3o detectada","Confira a lista de armazenamento do firmware.","Se a unidade n\xE3o aparece, siga o caso 29 para testar conex\xE3o e unidade."],["Carregador de boot danificado ou modo incompat\xEDvel","Veja se o disco \xE9 detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.","Restaure a configura\xE7\xE3o conhecida ou use Reparo de Inicializa\xE7\xE3o com o professor, preservando dados."]],"A entrada correta carrega o sistema ap\xF3s reiniciar.","N\xE3o formate por causa dessa mensagem; ela n\xE3o prova que os arquivos foram perdidos.");Le("HD ou SSD n\xE3o aparece na BIOS/UEFI","Armazenamento","O firmware n\xE3o lista uma unidade que deveria estar instalada.",[["Unidade ausente ou slot incorreto","Com o professor, compare a instala\xE7\xE3o com o manual e o tipo da unidade.","Instale no conector compat\xEDvel; M.2 SATA e NVMe n\xE3o s\xE3o intercambi\xE1veis em todo slot."],["Conex\xE3o frouxa","PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixa\xE7\xE3o correta.","Reconecte com cuidado conforme o manual."],["Cabo, porta ou compartilhamento de pistas","Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.","Substitua o cabo que falhou ou use porta/slot dispon\xEDvel e compat\xEDvel."],["Defeito na unidade ou no controlador","Teste a unidade em equipamento compat\xEDvel e outra unidade neste PC, sem formatar.","Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-m\xE3e."]],"A unidade \xE9 identificada corretamente no firmware e seus dados podem ser verificados.");Le("HD ou SSD novo aparece na BIOS, mas n\xE3o no sistema","Armazenamento","Uma unidade adicional \xE9 detectada pelo firmware, mas n\xE3o aparece no explorador.",[["Expectativa de aparecer antes de ser preparada","Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.","Se j\xE1 tem dados, n\xE3o inicialize. Se \xE9 nova e vazia, prossiga com o professor."],["Disco offline ou parti\xE7\xE3o sem letra","Confira estado do disco e das parti\xE7\xF5es existentes.","Coloque online se apropriado ou atribua letra livre \xE0 parti\xE7\xE3o saud\xE1vel."],["Unidade realmente nova, sem parti\xE7\xE3o","Confirme que n\xE3o cont\xE9m dados e que \xE9 a unidade correta.","Com supervis\xE3o, inicialize no esquema adequado e crie/formate um volume; essas a\xE7\xF5es apagam ou alteram estruturas de dados."],["Driver, sistema de arquivos ou compatibilidade","Se nem o gerenciador a detecta, confira controlador e driver; se tem parti\xE7\xE3o, confira compatibilidade.","Instale driver oficial ou use sistema compat\xEDvel para recuperar dados antes de qualquer convers\xE3o/formata\xE7\xE3o."]],"O volume esperado fica acess\xEDvel e um arquivo de teste pode ser salvo e lido.","Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.");Le("Portas USB frontais n\xE3o funcionam","Perif\xE9ricos","Um dispositivo funciona atr\xE1s, mas n\xE3o nas portas da frente do gabinete.",[["Problema no dispositivo ou cabo","Teste o acess\xF3rio em USB traseira e outro acess\xF3rio na frente.","Substitua o cabo/acess\xF3rio se a falha o acompanhar."],["Dispositivo exige mais energia","Compare um dispositivo simples e o acess\xF3rio de maior consumo.","Use porta adequada ou hub alimentado compat\xEDvel; n\xE3o sobrecarregue a porta."],["Cabo interno do painel solto","Com o professor e PC desligado da tomada, confira o header USB pelo manual.","Reconecte o cabo ao header correto, respeitando orienta\xE7\xE3o e pinos."],["Conector frontal danificado","Inspecione portas e cabo com a alimenta\xE7\xE3o desconectada.","N\xE3o use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado."]],"Um dispositivo conhecido funciona nas portas frontais reparadas.");Le("USB desconecta e reconecta sozinho","Perif\xE9ricos","O sistema toca repetidamente o som de desconex\xE3o de um dispositivo USB.",[["Cabo frouxo ou danificado","Observe se o problema acompanha um cabo espec\xEDfico e teste outro cabo adequado.","Substitua o cabo que falhou e elimine tens\xE3o sobre o conector."],["Hub ou extens\xE3o inadequados","Conecte o dispositivo diretamente a uma porta traseira.","Retire o intermedi\xE1rio defeituoso ou use hub alimentado apropriado."],["Energia ou driver do dispositivo","Compare com outra porta e revise driver e economia de energia, se a falha ocorre ap\xF3s inatividade.","Use alimenta\xE7\xE3o prevista pelo fabricante e atualize/ajuste o driver oficial."],["Defeito do acess\xF3rio ou controlador","Teste o acess\xF3rio noutro PC e v\xE1rios acess\xF3rios neste PC.","Troque o acess\xF3rio se a falha o acompanhar; se v\xE1rias portas falham, pe\xE7a diagn\xF3stico da placa-m\xE3e."]],"O dispositivo permanece conectado durante a tarefa que antes provocava a queda.");Le("Gabinete faz muito barulho","Refrigera\xE7\xE3o","H\xE1 ru\xEDdo forte de ventoinha, vibra\xE7\xE3o ou raspagem.",[["Vibra\xE7\xE3o externa","Confira se o gabinete est\xE1 est\xE1vel e se algum objeto vibra encostado nele.","Estabilize o gabinete e retire objetos em contato."],["Cabo encostando numa ventoinha","Desligue, retire da tomada e, com o professor, inspecione sem p\xF4r a m\xE3o em ventoinha em movimento.","Prenda os cabos longe das h\xE9lices."],["Poeira ou fluxo de ar restrito","Confira filtros, entradas de ar e temperatura.","Limpe com m\xE9todo adequado ao manual e desobstrua a ventila\xE7\xE3o."],["Ventoinha desgastada ou unidade mec\xE2nica falhando","Identifique de onde vem o som; cliques de HDD com erros exigem preserva\xE7\xE3o de dados.","Substitua a ventoinha confirmada como defeituosa. Se \xE9 HDD, siga o caso 46. Se \xE9 a fonte, encaminhe sem abri-la."]],"O ru\xEDdo anormal desaparece e temperaturas continuam adequadas.");Le("Computador fica muito quente","Refrigera\xE7\xE3o","H\xE1 temperaturas elevadas ou queda de desempenho durante o uso.",[["Ambiente ou sa\xEDdas de ar obstru\xEDdas","Observe posi\xE7\xE3o, entradas/sa\xEDdas e condi\xE7\xF5es do ambiente.","Afaste de obstru\xE7\xF5es e melhore a circula\xE7\xE3o de ar."],["Carga de trabalho excessiva","Compare temperatura em repouso e em uso com ferramenta confi\xE1vel e limites do fabricante.","Reduza tarefas desnecess\xE1rias e investigue a tarefa respons\xE1vel."],["Poeira ou ventoinha com problema","Com PC desconectado e professor, inspecione filtros, dissipadores e conex\xF5es.","Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado."],["Cooler mal instalado ou interface t\xE9rmica inadequada","Verifique fixa\xE7\xE3o e montagem conforme o manual, sem desmontar em m\xE1quina quente.","O professor reinstala o cooler e aplica interface t\xE9rmica conforme o fabricante."]],"As temperaturas ficam dentro dos limites do componente na tarefa de refer\xEAncia.","N\xE3o use um limite \xFAnico para toda CPU/GPU. N\xE3o abra a fonte nem use l\xEDquidos ou aspirador dom\xE9stico nas placas.");Le("Computador desliga sozinho durante o uso","Energia","O PC apaga sem encerramento normal do sistema.",[["Alimenta\xE7\xE3o externa intermitente","Observe tomada, cabo e filtro; compare com ponto de energia confi\xE1vel.","Corrija a conex\xE3o ou use alimenta\xE7\xE3o est\xE1vel. Defeito el\xE9trico deve ser tratado pelo respons\xE1vel."],["Aquecimento excessivo","Observe temperaturas antes da falha, sem for\xE7ar desligamentos repetidos.","Siga o caso 34 para corrigir refrigera\xE7\xE3o."],["Configura\xE7\xE3o ou comando de desligamento","Confira eventos, op\xE7\xF5es de energia e rela\xE7\xE3o com um programa espec\xEDfico.","Corrija a configura\xE7\xE3o ou aplicativo identificado."],["Fonte ou hardware com falha","Com o professor, compare com fonte compat\xEDvel conhecida; investigue componentes se persistir.","Substitua s\xF3 a pe\xE7a isolada no teste. Um evento de desligamento inesperado sozinho n\xE3o identifica a fonte."]],"O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimenta\xE7\xE3o adequadas.");Le("Computador inteiro congela","Sistema","Mouse, teclado e programas deixam de responder; pode ser necess\xE1rio reiniciar.",[["Sobrecarga tempor\xE1ria","Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.","Feche a tarefa problem\xE1tica se conseguir e reduza a carga."],["Aplicativo ou driver recente","Confira se come\xE7ou ap\xF3s instala\xE7\xE3o/atualiza\xE7\xE3o e consulte os registros.","Atualize ou reverta a mudan\xE7a identificada, ap\xF3s salvar dados."],["Aquecimento ou armazenamento com falha","Verifique temperaturas e sa\xFAde da unidade; preserve arquivos antes de testes extensos.","Corrija refrigera\xE7\xE3o ou siga o caso 46 se houver sinais de falha no disco."],["Mem\xF3ria ou outro hardware inst\xE1vel","Com o professor, teste mem\xF3ria e par\xE2metros padr\xE3o; consulte o caso 43.","Isole o m\xF3dulo/componente defeituoso e substitua apenas ap\xF3s confirmar."]],"O sistema continua respondendo em repeti\xE7\xE3o da atividade e em uso normal.","Reinicializa\xE7\xE3o for\xE7ada pode perder trabalho n\xE3o salvo; use apenas se o sistema realmente n\xE3o responder.");Le("Tela preta depois que o Windows come\xE7a a carregar","V\xEDdeo","A imagem de firmware aparece, mas some ao entrar no sistema.",[["Sa\xEDda ou modo de exibi\xE7\xE3o incorreto","Confira o monitor escolhido, entrada e conex\xE3o; teste uma \xFAnica tela.","Use a sa\xEDda correta e um modo de exibi\xE7\xE3o suportado."],["Driver de v\xEDdeo com falha","Com o professor, acesse o modo de seguran\xE7a pelas op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Se h\xE1 imagem nesse modo, reverta/reinstale o driver oficial relacionado \xE0 falha."],["Aplicativo ou sess\xE3o do sistema com erro","Veja se aparece ponteiro ou se outro usu\xE1rio consegue iniciar sess\xE3o.","Desative a inicializa\xE7\xE3o do aplicativo identificado ou repare a sess\xE3o com backup das informa\xE7\xF5es."],["Corrup\xE7\xE3o do sistema ou GPU inst\xE1vel","Compare outra sa\xEDda/GPU compat\xEDvel e op\xE7\xF5es de recupera\xE7\xE3o do sistema.","Repare o sistema ap\xF3s backup se hardware estiver saud\xE1vel; encaminhe a GPU se a falha a acompanhar."]],"A imagem permanece vis\xEDvel durante a entrada no Windows e o uso de aplicativos.");Le("Mem\xF3ria instalada n\xE3o aparece por completo","Mem\xF3ria","O total informado difere dos m\xF3dulos instalados ou a mem\xF3ria utiliz\xE1vel \xE9 menor.",[["Confus\xE3o entre mem\xF3ria instalada e utiliz\xE1vel","Compare BIOS/UEFI, sistema e mem\xF3ria reservada ao hardware.","Explique a reserva para v\xEDdeo integrado e diferen\xE7as de unidades; n\xE3o troque RAM por uma reserva normal."],["Limite do sistema ou da placa","Confira arquitetura do sistema, capacidade suportada e manual da placa-m\xE3e.","Use sistema de 64 bits e m\xF3dulos dentro dos limites, quando necess\xE1rio e compat\xEDvel."],["M\xF3dulo mal encaixado ou slot errado","Com PC desconectado e professor, confira travas e slots recomendados.","Reinstale os m\xF3dulos nos slots previstos pelo fabricante."],["M\xF3dulo, slot ou canal com defeito","Teste um m\xF3dulo por vez e compare slots permitidos, registrando resultados.","Substitua o m\xF3dulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"Firmware reconhece a capacidade esperada e o sistema informa uma reserva explic\xE1vel.");Le("Computador deixa de iniciar ap\xF3s instalar RAM","Mem\xF3ria","A falha surge logo depois da troca ou amplia\xE7\xE3o da mem\xF3ria.",[["Treinamento inicial de mem\xF3ria","Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo ap\xF3s mudan\xE7as.","Aguarde o per\xEDodo indicado, sem reiniciar continuamente."],["M\xF3dulo mal encaixado ou posi\xE7\xE3o incorreta","Com professor e alimenta\xE7\xE3o desconectada, confira travas e slots indicados.","Reencaixe corretamente; n\xE3o force um m\xF3dulo de padr\xE3o diferente."],["M\xF3dulo incompat\xEDvel ou mistura inst\xE1vel","Confira gera\xE7\xE3o DDR, capacidade, tipo e especifica\xE7\xF5es; teste a configura\xE7\xE3o anterior.","Use m\xF3dulos compat\xEDveis e preferencialmente um conjunto validado para a placa."],["Perfil de mem\xF3ria ou m\xF3dulo defeituoso","Com o professor, teste um m\xF3dulo por vez em par\xE2metros padr\xE3o; reset de CMOS somente conforme o manual.","Desative perfil inst\xE1vel ou substitua o m\xF3dulo que falha tamb\xE9m em condi\xE7\xF5es padr\xE3o."]],"O PC conclui o POST, reconhece a RAM e passa por teste orientado de mem\xF3ria.");Le("Mensagem \u201CCPU Fan Error\u201D ou erro de ventoinha","Refrigera\xE7\xE3o","O firmware informa que n\xE3o detectou corretamente a ventoinha do processador.",[["Aviso ap\xF3s uma manuten\xE7\xE3o","N\xE3o ignore; desligue e confira o que foi alterado.","Interrompa o uso at\xE9 confirmar a refrigera\xE7\xE3o do processador."],["Cooler conectado ao header errado","Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.","Conecte o cooler ao header previsto; bombas de water cooler seguem o manual espec\xEDfico."],["Cabo solto, h\xE9lice bloqueada ou ventoinha defeituosa","Inspecione conex\xF5es e obst\xE1culos sem energizar partes expostas.","Reconecte, retire a obstru\xE7\xE3o ou substitua a ventoinha que falhou."],["Limite de leitura incompat\xEDvel com a montagem","Se refrigera\xE7\xE3o est\xE1 comprovadamente funcional, compare rota\xE7\xE3o m\xEDnima e leitura com o manual.","O professor ajusta o monitoramento ao conjunto correto. N\xE3o desative o alerta para esconder um cooler parado."]],"A leitura de refrigera\xE7\xE3o \xE9 coerente, o alerta \xE9 resolvido e a temperatura permanece adequada.");Le("PC n\xE3o conclui o POST: bipes ou LED de diagn\xF3stico","Inicializa\xE7\xE3o","O computador tem energia, mas n\xE3o chega \xE0 imagem inicial ou sinaliza um erro.",[["C\xF3digo ainda n\xE3o identificado","Anote padr\xE3o, dura\xE7\xE3o, cor e modelo exato da placa/PC.","Consulte a tabela espec\xEDfica do fabricante; n\xE3o use tabelas universais de bipes."],["Perif\xE9rico ou mudan\xE7a recente interferindo","Compare sem acess\xF3rios externos n\xE3o essenciais e registre a \xFAltima mudan\xE7a.","Remova o acess\xF3rio problem\xE1tico ou restaure a configura\xE7\xE3o anterior."],["Mem\xF3ria ou v\xEDdeo indicados pelo c\xF3digo","Com professor e PC desconectado, confira encaixes e teste componente compat\xEDvel conhecido.","Corrija a conex\xE3o ou substitua somente o m\xF3dulo/placa que falhou no teste."],["CPU, placa-m\xE3e ou firmware indicados pelo diagn\xF3stico","Revise compatibilidade e siga os testes do manual; configura\xE7\xE3o m\xEDnima exige supervis\xE3o.","Encaminhe para diagn\xF3stico t\xE9cnico. Atualiza\xE7\xE3o de BIOS n\xE3o deve ser feita por tentativa num PC inst\xE1vel."]],"O POST \xE9 conclu\xEDdo e o c\xF3digo de erro deixa de aparecer.","POST \xE9 o autoteste de hardware executado antes de carregar o sistema operacional.");Le("Liga por poucos segundos e desliga","Energia","As ventoinhas come\xE7am a girar, mas o PC apaga antes de iniciar.",[["Perif\xE9rico externo causando prote\xE7\xE3o","Desconecte acess\xF3rios externos n\xE3o essenciais com o PC desligado.","Retire o perif\xE9rico/cabo que faz a falha retornar."],["Conector de energia interno incompleto","Professor, PC fora da tomada: confira ATX da placa e alimenta\xE7\xE3o da CPU pelo manual.","Conecte os cabos corretos da fonte; n\xE3o confunda EPS/CPU com PCIe/GPU."],["Cooler ausente, solto ou erro de montagem","Confira a presen\xE7a, fixa\xE7\xE3o e conex\xE3o da refrigera\xE7\xE3o.","Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler."],["Curto, fonte ou placa-m\xE3e defeituosos","Professor inspeciona parafusos soltos, espa\xE7adores e testa fonte compat\xEDvel com seus pr\xF3prios cabos.","Corrija a montagem se confirmado; substitua fonte/placa s\xF3 ap\xF3s isolamento t\xE9cnico."]],"O PC permanece ligado e conclui o POST sem aquecimento anormal.","Se houver cheiro de queimado, fa\xEDsca ou l\xEDquido, desconecte e encaminhe: n\xE3o repita testes de energiza\xE7\xE3o.");Le("Erros no teste de mem\xF3ria RAM","Mem\xF3ria","Uma ferramenta de diagn\xF3stico acusa erros, ou falhas gerais apontam para a mem\xF3ria.",[["Perfil de frequ\xEAncia inst\xE1vel","Registre os ajustes e confira se XMP/EXPO ou overclock est\xE1 ativo.","Com o professor, teste nos par\xE2metros padr\xE3o suportados."],["Mau encaixe","PC fora da tomada: confira travas e slots recomendados.","Reencaixe segurando pelas bordas, com prote\xE7\xE3o contra descarga eletrost\xE1tica."],["M\xF3dulo com falha","Teste um m\xF3dulo por vez no slot recomendado e repita com m\xF3dulo conhecido.","Substitua o m\xF3dulo se o erro o acompanhar em configura\xE7\xF5es padr\xE3o."],["Slot, controlador ou combina\xE7\xE3o de m\xF3dulos","Compare m\xF3dulos bons em slots permitidos e consulte compatibilidade.","Use conjunto compat\xEDvel; se o erro acompanha slot/canal, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"A configura\xE7\xE3o final passa pelo teste completo escolhido e n\xE3o reproduz as falhas observadas.","Um teste sem erros reduz suspeitas, mas n\xE3o garante aus\xEAncia de toda falha intermitente. N\xE3o esfregue borracha nem aplique produtos caseiros nos contatos.");Le("Quadrados, linhas ou cores estranhas na imagem","V\xEDdeo","Aparecem artefatos gr\xE1ficos, distor\xE7\xF5es ou blocos de cor.",[["Cabo ou monitor","Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.","Substitua o cabo/monitor cuja falha foi isolada."],["Aplicativo ou driver","Veja se ocorre s\xF3 num programa e se come\xE7ou ap\xF3s atualiza\xE7\xE3o.","Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial."],["Temperatura ou overclock","Confira temperatura e par\xE2metros da GPU e mem\xF3ria, sem for\xE7ar testes se estiver superaquecendo.","Restaure par\xE2metros padr\xE3o e corrija a refrigera\xE7\xE3o."],["Falha de GPU ou mem\xF3ria compartilhada","Compare imagem antes do sistema e teste GPU/RAM compat\xEDvel conhecida com o professor.","Se acompanha a GPU, encaminhe/substitua a placa; com v\xEDdeo integrado, investigue tamb\xE9m RAM e placa-m\xE3e."]],"A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.");Le("Jogos ou programas 3D travam, mas o desktop funciona","V\xEDdeo","A falha aparece com carga gr\xE1fica mais alta.",[["Requisito ou configura\xE7\xE3o acima do hardware","Compare requisitos, resolu\xE7\xE3o e ajustes do programa.","Use configura\xE7\xF5es compat\xEDveis e teste uma carga menor."],["Programa ou driver com falha","Confira se outros programas 3D tamb\xE9m falham e registre o erro.","Atualize/repare o programa e use driver oficial compat\xEDvel."],["Aquecimento ou ajustes inst\xE1veis","Observe temperaturas e desative overclock/perfis inst\xE1veis com o professor.","Corrija a refrigera\xE7\xE3o e teste nos par\xE2metros padr\xE3o."],["GPU ou alimenta\xE7\xE3o inadequada","Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.","Use alimenta\xE7\xE3o prevista e substitua o componente cuja falha foi confirmada. N\xE3o continue for\xE7ando desligamentos."]],"A tarefa gr\xE1fica de refer\xEAncia funciona com ajustes suportados, sem travamento nem desligamento.");Le("HD faz cliques ou unidade apresenta erros de leitura","Armazenamento","Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.",[["Ind\xEDcio de risco aos dados","Confira mensagens e ru\xEDdo; n\xE3o confunda acesso normal de HDD com cliques repetitivos de falha.","Pare usos n\xE3o essenciais. Se os dados s\xE3o insubstitu\xEDveis ou h\xE1 ru\xEDdo anormal, desligue e busque recupera\xE7\xE3o especializada."],["Conex\xE3o com mau contato","Se n\xE3o h\xE1 dano mec\xE2nico aparente e o professor autoriza teste, confira cabos com PC desconectado.","Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade."],["Alerta de sa\xFAde da unidade","Consulte indicadores SMART e diagn\xF3stico oficial, priorizando backup e evitando teste extenso em disco degradado.","Copie dados acess\xEDveis para outra unidade saud\xE1vel; alertas de falha justificam substitui\xE7\xE3o."],["Falha persistente da unidade","Se erros acompanham a unidade em conex\xE3o confi\xE1vel, trate como falha de armazenamento.","Substitua e restaure backup. Para dados n\xE3o recuperados, encaminhe a especialista."]],"Os dados preservados s\xE3o verificados e a unidade saud\xE1vel opera sem os erros anteriores.","N\xE3o abra HDD, n\xE3o use congelador e n\xE3o execute reparos que escrevem na unidade antes de avaliar a preserva\xE7\xE3o dos dados. SSD n\xE3o tem pe\xE7as m\xF3veis; ru\xEDdo mec\xE2nico n\xE3o vem dele.");Le("Tela de erro de parada: BSOD","Sistema","O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela vers\xE3o.",[["C\xF3digo e contexto desconhecidos","Registre c\xF3digo de parada, hor\xE1rio, tarefa e mudan\xE7a recente; um c\xF3digo sozinho n\xE3o identifica uma pe\xE7a.","Guarde as informa\xE7\xF5es para comparar ocorr\xEAncias antes de alterar o PC."],["Driver, atualiza\xE7\xE3o ou acess\xF3rio recente","Compare sem o acess\xF3rio rec\xE9m-instalado e consulte hist\xF3rico de erros.","Reverta ou atualize o item relacionado \xE0 falha com fonte oficial."],["Arquivos do sistema, temperatura ou disco","Fa\xE7a backup, verifique registros, refrigera\xE7\xE3o e sa\xFAde da unidade.","Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho."],["RAM ou outro hardware inst\xE1vel","Com o professor, teste em par\xE2metros padr\xE3o, mem\xF3ria e componentes apontados pelos registros.","Substitua apenas o item cuja falha foi isolada; se necess\xE1rio, encaminhe an\xE1lise dos registros de falha."]],"A atividade que provocava a falha e o uso normal ficam est\xE1veis; registre se houve nova ocorr\xEAncia.");Le("PC reinicia ou perde estabilidade ap\xF3s ativar XMP/EXPO","Mem\xF3ria","O defeito come\xE7a depois de alterar frequ\xEAncia ou temporiza\xE7\xF5es da mem\xF3ria.",[["Rela\xE7\xE3o com o ajuste n\xE3o confirmada","Registre o perfil ativado e compare com a configura\xE7\xE3o anterior.","Com o professor, desative o perfil e teste nos par\xE2metros padr\xE3o."],["Limite de compatibilidade do conjunto","Confira manual, lista de mem\xF3ria validada e capacidade/frequ\xEAncia suportadas pela CPU.","Use um perfil/configura\xE7\xE3o suportada e est\xE1vel; o perfil anunciado n\xE3o \xE9 garantia para todo conjunto."],["Mistura de m\xF3dulos ou slots inadequados","Confira se os m\xF3dulos s\xE3o de um conjunto validado e ocupam os slots recomendados.","Teste o conjunto apropriado nos slots corretos."],["Falha persistente em par\xE2metros padr\xE3o","Execute teste orientado de mem\xF3ria se o erro continua sem perfil.","Siga o caso 43; encaminhe firmware/controlador se m\xF3dulos bons tamb\xE9m falham."]],"O PC fica est\xE1vel e passa no teste de mem\xF3ria com a configura\xE7\xE3o final documentada.","Reset de CMOS s\xF3 conforme o manual, registrando ajustes e tendo a chave de recupera\xE7\xE3o do disco se necess\xE1ria.");Le("Computador n\xE3o inicia depois de uma troca de pe\xE7as","Inicializa\xE7\xE3o","A falha aparece logo ap\xF3s trocar CPU, GPU, fonte ou outro componente.",[["Conex\xE3o esquecida durante a montagem","PC fora da tomada: professor compara cabos, v\xEDdeo e montagem com os manuais.","Corrija o encaixe/conector ausente sem for\xE7ar nem adaptar cabos indevidos."],["Pe\xE7a nova incompat\xEDvel","Confira modelo exato, socket, mem\xF3ria, pot\xEAncia e conectores necess\xE1rios.","Instale componente compat\xEDvel. Em fontes modulares, use apenas cabos aprovados para o modelo espec\xEDfico."],["CPU depende de vers\xE3o de BIOS espec\xEDfica","Consulte a lista oficial de CPUs e a vers\xE3o m\xEDnima de firmware.","Professor planeja atualiza\xE7\xE3o apenas pelo m\xE9todo oficial, com energia est\xE1vel e hardware/m\xE9todo compat\xEDvel."],["Pe\xE7a nova defeituosa ou dano de montagem","Compare com a configura\xE7\xE3o anterior, se segura; examine socket e fixa\xE7\xF5es sem tocar em pinos.","Se a falha acompanha a pe\xE7a nova, substitua; se h\xE1 dano f\xEDsico, encaminhe para reparo especializado."]],"O novo conjunto conclui o POST, reconhece as pe\xE7as e fica est\xE1vel no uso previsto.","Atualizar BIOS por tentativa pode inutilizar a placa. N\xE3o misture cabos modulares de fontes diferentes.");Le("Suspeita de defeito na placa-m\xE3e","Inicializa\xE7\xE3o","Falhas persistem mesmo ap\xF3s verificar alimenta\xE7\xE3o, conex\xF5es e componentes b\xE1sicos.",[["Conclus\xE3o prematura","Revise o hist\xF3rico e confirme tomada, fonte, monitor, cabos e c\xF3digo de POST.","Resolva causas externas e documente tudo antes de condenar a placa."],["Configura\xE7\xE3o ou montagem inadequada","Professor confere conectores, espa\xE7adores, compatibilidade e par\xE2metros registrados.","Corrija montagem; restaure ajustes conforme o manual se houver evid\xEAncia de configura\xE7\xE3o incorreta."],["Outra pe\xE7a provoca o sintoma","Com professor, fa\xE7a teste m\xEDnimo previsto no manual usando fonte, RAM e v\xEDdeo compat\xEDveis conhecidos.","Troque uma vari\xE1vel por vez e substitua a pe\xE7a que comprovadamente causa o erro."],["Falha da placa-m\xE3e ou CPU ainda n\xE3o isolada","Se a falha persiste com pe\xE7as boas e montagem correta, s\xE3o necess\xE1rios testes t\xE9cnicos adicionais.","Encaminhe para bancada especializada; substitua a placa somente com evid\xEAncia suficiente. Reparos eletr\xF4nicos ficam fora desta pr\xE1tica."]],"H\xE1 um diagn\xF3stico documentado com testes comparativos ou encaminhamento justificado, seguido de valida\xE7\xE3o do reparo.","Inspe\xE7\xE3o visual sem danos n\xE3o prova que a placa est\xE1 boa. Fonte conhecida e compat\xEDvel \xE9 diferente de fonte apenas \u201Cnova\u201D.");var yu=[{id:1,name:"Primeiros passos",short:"B\xE1sico",desc:"Energia, cabos e conex\xF5es externas."},{id:2,name:"Uso e configura\xE7\xF5es",short:"B\xE1sico +",desc:"Perif\xE9ricos, ajustes e desempenho."},{id:3,name:"Sistema e armazenamento",short:"Intermedi\xE1rio",desc:"Boot, rede, arquivos e recupera\xE7\xE3o."},{id:4,name:"Dentro do gabinete",short:"Intermedi\xE1rio +",desc:"Refrigera\xE7\xE3o, mem\xF3ria e conex\xF5es internas."},{id:5,name:"Isolamento de falhas",short:"Avan\xE7ado guiado",desc:"POST, testes comparativos e diagn\xF3stico t\xE9cnico."}];var bu=[],Ue=(i,e,t,n,s)=>bu.push({kind:i,symptom:e,screen:t,check:n,actions:s.trim().split(`
`).map(r=>{let[a,o,l]=r.split("|");return{test:a,fix:o,normal:l}})});Ue("power","O PC n\xE3o d\xE1 nenhum sinal.","SEM ENERGIA","Ligar o computador",`
Testar tomada|Usar tomada com energia|A tomada fornece energia.
Ver plugue|Conectar na tomada|O plugue est\xE1 bem conectado.
Ver cabo da fonte|Encaixar cabo da fonte|A conex\xE3o traseira est\xE1 firme.
Ver chave I/O|Ligar chave I/O|A chave I/O est\xE1 ligada.
Comparar cabo|Trocar cabo de energia|O cabo de energia funciona.
Ver conex\xF5es internas|Corrigir alimenta\xE7\xE3o interna|A fonte e os conectores est\xE3o presentes.
Testar com o professor|Trocar pe\xE7a confirmada|A compara\xE7\xE3o n\xE3o aponta falha nessas pe\xE7as.`);Ue("monitor-off","O monitor n\xE3o acende.","TELA APAGADA","Ligar o monitor",`
Ver bot\xE3o do monitor|Ligar monitor|O bot\xE3o est\xE1 ligado.
Ver cabo de energia|Reconectar energia|O cabo e a tomada funcionam.
Comparar adaptador|Trocar adaptador confirmado|O adaptador compat\xEDvel funciona.
Comparar monitor|Encaminhar monitor|O monitor funciona em outro PC.`);Ue("signal","O PC liga, mas n\xE3o aparece imagem.","SEM SINAL","Conferir a imagem",`
Ver entrada selecionada|Selecionar entrada correta|A entrada corresponde ao cabo.
Testar cabo de v\xEDdeo|Corrigir cabo de v\xEDdeo|O cabo de v\xEDdeo funciona.
Ver sa\xEDda do gabinete|Conectar na sa\xEDda correta|O cabo est\xE1 na sa\xEDda adequada.
Testar outro monitor|Isolar falha com professor|O monitor recebe imagem no teste.`);Ue("flicker","A imagem pisca durante o uso.","IMAGEM INTERMITENTE","Observar a imagem",`
Ver encaixe do cabo|Firmar conex\xE3o de v\xEDdeo|As duas pontas est\xE3o firmes.
Comparar cabo e adaptador|Trocar cabo confirmado|A falha continua com outro cabo.
Ver resolu\xE7\xE3o e frequ\xEAncia|Usar ajustes suportados|Os ajustes s\xE3o suportados.
Ver hist\xF3rico do driver|Corrigir driver de v\xEDdeo|O teste n\xE3o relaciona a falha ao driver.`);Ue("scale","Letras e propor\xE7\xF5es est\xE3o estranhas.","IMAGEM DISTORCIDA","Conferir as propor\xE7\xF5es",`
Ver resolu\xE7\xE3o|Usar resolu\xE7\xE3o nativa|A resolu\xE7\xE3o j\xE1 \xE9 a recomendada.
Ver escala do sistema|Ajustar escala|A escala est\xE1 adequada.
Ver ajustes do monitor|Corrigir propor\xE7\xE3o do monitor|A propor\xE7\xE3o do monitor est\xE1 correta.
Ver driver de v\xEDdeo|Instalar driver oficial|O driver correto est\xE1 instalado.`);Ue("keyboard","As teclas n\xE3o respondem.","DIGITE AQUI: _","Testar as teclas",`
Ver conex\xE3o e pilhas|Conectar e ligar teclado|O teclado recebe energia.
Testar USB traseira|Usar porta funcional|A falha continua sem o hub.
Comparar outro teclado|Trocar teclado confirmado|O teclado responde em outro PC.
Comparar BIOS e sistema|Revisar USB com professor|A compara\xE7\xE3o n\xE3o aponta falha no sistema.`);Ue("mouse","O ponteiro fica parado.","PONTEIRO PARADO","Mover o ponteiro",`
Ver energia do mouse|Conectar e ligar mouse|O mouse recebe energia.
Ver sensor e superf\xEDcie|Limpar sensor e usar mousepad|O sensor e a superf\xEDcie est\xE3o adequados.
Testar USB traseira|Usar USB funcional|A falha continua na porta traseira.
Comparar outro mouse|Corrigir mouse ou driver|O mouse funciona no teste cruzado.`);Ue("audio","Nenhum som sai do computador.","SEM \xC1UDIO","Reproduzir som de teste",`
Ver volume|Ativar e ajustar volume|O volume est\xE1 ativo.
Ver conex\xE3o da caixa|Ligar e conectar caixa|A caixa est\xE1 ligada e conectada.
Ver sa\xEDda selecionada|Selecionar sa\xEDda de \xE1udio|A sa\xEDda selecionada \xE9 a correta.
Comparar fone e driver|Corrigir acess\xF3rio ou driver|O acess\xF3rio e o driver funcionam.`);Ue("front-audio","O \xE1udio frontal n\xE3o funciona.","\xC1UDIO FRONTAL AUSENTE","Testar \xE1udio frontal",`
Ver plugue do fone|Usar conex\xE3o adequada|O plugue \xE9 compat\xEDvel e est\xE1 na entrada certa.
Ver dispositivo de \xE1udio|Selecionar \xE1udio frontal|O dispositivo frontal est\xE1 selecionado.
Comparar frente e traseira|Corrigir acess\xF3rio ou conector|O teste n\xE3o isola falha no acess\xF3rio ou conector.
Ver cabo HD AUDIO|Reconectar HD AUDIO|O cabo interno est\xE1 conectado corretamente.`);Ue("ethernet","O cabo est\xE1 conectado, mas n\xE3o h\xE1 rede.","REDE DESCONECTADA","Testar conex\xE3o por cabo",`
Ver encaixes de rede|Conectar cabo de rede|As duas pontas est\xE3o conectadas.
Comparar cabo e porta|Usar cabo ou porta funcional|O cabo e a porta funcionam.
Ver adaptador Ethernet|Habilitar adaptador|O adaptador est\xE1 habilitado.
Comparar outro PC|Corrigir rede autorizada|A configura\xE7\xE3o de rede est\xE1 adequada.`);Ue("wifi","O Wi-Fi n\xE3o conecta.","WI-FI INDISPON\xCDVEL","Conectar ao Wi-Fi",`
Ver adaptador Wi-Fi|Usar conex\xE3o compat\xEDvel|O PC tem adaptador Wi-Fi.
Ver r\xE1dio e antenas|Ativar Wi-Fi e antenas|O r\xE1dio e as antenas est\xE3o ativos.
Testar senha e sinal|Corrigir senha e posi\xE7\xE3o|A senha e o sinal est\xE3o adequados.
Ver driver e banda|Corrigir driver ou banda|O driver e a banda s\xE3o compat\xEDveis.`);Ue("usb","O pendrive n\xE3o aparece.","UNIDADE N\xC3O EXIBIDA","Abrir unidade de teste",`
Testar USB traseira|Reconectar em porta funcional|A conex\xE3o USB funciona.
Comparar pendrive|Preservar dados e substituir|O pendrive funciona em outro PC.
Ver letra da unidade|Atribuir letra livre|A parti\xE7\xE3o tem uma letra v\xE1lida.
Ver sistema de arquivos|Recuperar dados primeiro|O sistema de arquivos \xE9 reconhecido.`);Ue("printer","A p\xE1gina n\xE3o sai da impressora.","IMPRESS\xC3O PARADA","Imprimir p\xE1gina de teste",`
Ver painel e papel|Resolver aviso da impressora|A impressora est\xE1 pronta e tem papel.
Ver impressora escolhida|Selecionar e conectar impressora|A impressora correta est\xE1 conectada.
Ver fila de impress\xE3o|Retomar fila de teste|A fila n\xE3o est\xE1 pausada ou travada.
Comparar p\xE1gina interna|Revisar driver e servi\xE7o|A compara\xE7\xE3o n\xE3o aponta falha no driver.`);Ue("camera","A webcam n\xE3o mostra imagem.","C\xC2MERA SEM IMAGEM","Abrir c\xE2mera de teste",`
Ver tampa e cabo|Abrir tampa e conectar|A tampa est\xE1 aberta e o cabo conectado.
Ver c\xE2mera selecionada|Selecionar webcam correta|A webcam correta est\xE1 selecionada.
Ver permiss\xF5es e uso|Autorizar aplicativo necess\xE1rio|A c\xE2mera est\xE1 liberada para o aplicativo.
Comparar c\xE2mera e porta|Corrigir driver ou c\xE2mera|A c\xE2mera funciona na compara\xE7\xE3o.`);Ue("mic","A voz n\xE3o \xE9 captada.","MICROFONE SEM SINAL","Gravar voz de teste",`
Ver mute e conex\xE3o|Ativar e conectar microfone|O microfone est\xE1 ligado e conectado.
Ver entrada e n\xEDvel|Ajustar entrada e n\xEDvel|A entrada e o n\xEDvel est\xE3o corretos.
Testar grava\xE7\xE3o do sistema|Autorizar e selecionar entrada|A grava\xE7\xE3o e a permiss\xE3o funcionam.
Comparar microfone|Corrigir conex\xE3o ou acess\xF3rio|O microfone funciona na compara\xE7\xE3o.`);Ue("dual","A segunda tela n\xE3o aparece.","SEGUNDA TELA AUSENTE","Detectar segunda tela",`
Ver energia e entrada|Ligar segunda tela|A segunda tela est\xE1 ligada na entrada certa.
Ver modo de exibi\xE7\xE3o|Estender ou duplicar telas|O modo de exibi\xE7\xE3o est\xE1 adequado.
Testar cabo e adaptador|Usar conex\xE3o apropriada|O cabo e o adaptador funcionam.
Ver limite de telas|Usar sa\xEDdas suportadas|A montagem suporta as telas conectadas.`);Ue("clock","A data e a hora est\xE3o erradas.","HORA INCORRETA","Conferir o rel\xF3gio",`
Ver fuso hor\xE1rio|Corrigir fuso e sincronizar|O fuso hor\xE1rio est\xE1 correto.
Testar sincroniza\xE7\xE3o|Restaurar sincroniza\xE7\xE3o|O servi\xE7o de hora sincroniza.
Comparar hora da BIOS|Investigar sistema ou bateria|A hora da BIOS n\xE3o \xE9 perdida.
Ver bateria com professor|Trocar bateria correta|O teste n\xE3o aponta bateria esgotada.`);Ue("boot-slow","O computador demora para iniciar.","INICIANDO\u2026","Reiniciar e comparar",`
Testar sem acess\xF3rios|Remover acess\xF3rio problem\xE1tico|A demora continua sem os acess\xF3rios.
Ver aplicativos iniciais|Desativar in\xEDcio desnecess\xE1rio|Os aplicativos iniciais n\xE3o explicam a demora.
Ver espa\xE7o e atualiza\xE7\xE3o|Liberar espa\xE7o e aguardar|H\xE1 espa\xE7o e nenhuma atualiza\xE7\xE3o em andamento.
Ver sa\xFAde da unidade|Preservar dados e avaliar SSD|A unidade n\xE3o explica a demora neste cen\xE1rio.`);Ue("slow","O computador est\xE1 muito lento.","SISTEMA LENTO","Repetir a tarefa",`
Ver tarefas abertas|Fechar tarefas n\xE3o usadas|A carga de tarefas est\xE1 adequada.
Ver espa\xE7o livre|Liberar espa\xE7o com backup|H\xE1 espa\xE7o livre suficiente.
Ver processos e prote\xE7\xE3o|Corrigir aplicativo identificado|Nenhum processo suspeito explica a lentid\xE3o.
Ver limites e temperatura|Corrigir causa confirmada|O teste n\xE3o aponta calor ou limita\xE7\xE3o do hardware.`);Ue("app","Um programa trava ou fecha.","APLICATIVO PAROU","Testar o programa",`
Testar arquivo novo|Recuperar arquivo de backup|O travamento n\xE3o acompanha esse arquivo.
Ver recursos dispon\xEDveis|Reduzir carga e liberar espa\xE7o|Os recursos atendem ao aplicativo.
Testar sem extens\xF5es|Reparar aplicativo com backup|A falha n\xE3o acompanha uma extens\xE3o ou mudan\xE7a.
Comparar outros programas|Encaminhar falha geral|Os outros programas funcionam normalmente.`);Ue("recovery","O Windows abre a recupera\xE7\xE3o.","RECUPERA\xC7\xC3O","Testar inicializa\xE7\xE3o",`
Testar sem m\xEDdia externa|Retirar m\xEDdia n\xE3o essencial|A recupera\xE7\xE3o continua sem a m\xEDdia externa.
Ver op\xE7\xF5es oficiais|Reparar inicializa\xE7\xE3o|O teste n\xE3o aponta falha na inicializa\xE7\xE3o.
Ver mudan\xE7a recente|Restaurar mudan\xE7a identificada|N\xE3o h\xE1 rela\xE7\xE3o com atualiza\xE7\xE3o ou driver recente.
Ver dados e disco|Reparar ap\xF3s preservar dados|O teste n\xE3o aponta corrup\xE7\xE3o ou disco com falha.`);Ue("web","A rede conecta, mas os sites n\xE3o abrem.","SEM INTERNET","Abrir site de teste",`
Comparar dispositivos|Encaminhar falha geral|Outros dispositivos acessam a internet.
Ver IP e gateway|Restaurar IP autorizado|IP e gateway est\xE3o corretos.
Testar nomes DNS|Restaurar DNS da rede|A resolu\xE7\xE3o de nomes funciona.
Ver VPN e proxy|Corrigir configura\xE7\xE3o autorizada|VPN e proxy n\xE3o explicam a falha.`);Ue("network-drop","A conex\xE3o cai durante o uso.","CONEX\xC3O INTERMITENTE","Observar a conex\xE3o",`
Ver cabo e sinal|Corrigir cabo ou posi\xE7\xE3o|O cabo e o sinal est\xE3o est\xE1veis.
Comparar dispositivos|Usar porta de rede funcional|A rede est\xE1 est\xE1vel nos outros dispositivos.
Ver driver e energia|Ajustar driver e energia|Driver e economia de energia n\xE3o explicam a queda.
Comparar adaptador|Trocar adaptador confirmado|A queda continua com outro adaptador.`);Ue("bluetooth","O acess\xF3rio n\xE3o conecta por Bluetooth.","SEM PAREAMENTO","Conectar acess\xF3rio",`
Ver r\xE1dio Bluetooth|Ativar ou instalar adaptador|O r\xE1dio Bluetooth est\xE1 dispon\xEDvel e ativo.
Ver modo de pareamento|Carregar e parear acess\xF3rio|O acess\xF3rio est\xE1 carregado e em pareamento.
Ver conex\xF5es anteriores|Refazer pareamento do acess\xF3rio|N\xE3o h\xE1 conex\xE3o anterior impedindo o pareamento.
Comparar acess\xF3rio e driver|Corrigir driver ou adaptador|A compara\xE7\xE3o n\xE3o aponta falha no driver ou adaptador.`);Ue("storage-full","O disco est\xE1 quase cheio.","POUCO ESPA\xC7O","Conferir espa\xE7o livre",`
Ver tempor\xE1rios e lixeira|Limpar itens dispens\xE1veis|Tempor\xE1rios e lixeira n\xE3o explicam o espa\xE7o ocupado.
Ver arquivos grandes|Mover arquivos com backup|Arquivos pessoais grandes n\xE3o s\xE3o a causa.
Ver programas instalados|Remover programas n\xE3o usados|Os programas instalados n\xE3o explicam o espa\xE7o ocupado.
Comparar capacidade e uso|Planejar unidade maior|A capacidade atende \xE0 rotina ap\xF3s a limpeza.`);Ue("ads","Aparecem propagandas desconhecidas.","ALERTAS INDESEJADOS","Conferir sistema protegido",`
Ver origem do alerta|Revogar permiss\xE3o do site|Os alertas n\xE3o v\xEAm de notifica\xE7\xF5es autorizadas.
Ver extens\xF5es e programas|Remover itens indesejados|A revis\xE3o n\xE3o encontra extens\xE3o indesejada.
Executar prote\xE7\xE3o confi\xE1vel|Seguir quarentena autorizada|A verifica\xE7\xE3o n\xE3o aponta infec\xE7\xE3o neste cen\xE1rio.
Ver persist\xEAncia do problema|Encaminhar e preservar dados|O problema n\xE3o retorna ap\xF3s a corre\xE7\xE3o inicial.`);Ue("update","A atualiza\xE7\xE3o falha repetidamente.","ATUALIZA\xC7\xC3O FALHOU","Tentar atualiza\xE7\xE3o oficial",`
Ver rein\xEDcio pendente|Salvar e reiniciar|N\xE3o h\xE1 reinicializa\xE7\xE3o pendente.
Ver rede, hora e espa\xE7o|Corrigir condi\xE7\xF5es b\xE1sicas|Rede, hora e espa\xE7o est\xE3o adequados.
Executar solucionador oficial|Aplicar corre\xE7\xE3o indicada|A ferramenta n\xE3o aponta essa causa.
Ver c\xF3digo com professor|Aplicar reparo oficial|O c\xF3digo n\xE3o aponta falha no pacote ou sistema.`);Ue("boot-error","O PC n\xE3o encontra como iniciar.","NO BOOTABLE DEVICE","Testar boot correto",`
Ver m\xEDdia externa|Retirar m\xEDdia de teste|A falha continua sem m\xEDdia externa.
Ver ordem de boot|Escolher boot correto|A entrada de boot est\xE1 correta.
Ver unidade na BIOS|Investigar conex\xE3o da unidade|A BIOS detecta a unidade.
Ver modo UEFI e boot|Restaurar boot com professor|O modo e o carregador de boot est\xE3o corretos.`);Ue("drive-missing","A BIOS n\xE3o detecta o disco.","DISCO N\xC3O DETECTADO","Conferir unidade na BIOS",`
Ver slot e tipo da unidade|Usar conector compat\xEDvel|A unidade usa um slot compat\xEDvel.
Ver encaixes com professor|Reconectar unidade desligada|Os encaixes est\xE3o firmes.
Comparar cabo e porta|Usar cabo ou porta compat\xEDvel|O cabo e a porta est\xE3o dispon\xEDveis e funcionam.
Comparar outra unidade|Preservar dados e isolar pe\xE7a|A compara\xE7\xE3o n\xE3o isola falha nessa pe\xE7a.`);Ue("new-drive","O disco novo n\xE3o aparece no sistema.","NOVA UNIDADE AUSENTE","Conferir volume preparado",`
Identificar unidade no sistema|Confirmar unidade e dados|A unidade est\xE1 identificada no gerenciamento.
Ver estado e letra|Colocar online ou dar letra|A parti\xE7\xE3o est\xE1 online e tem letra.
Confirmar disco vazio|Preparar disco vazio assistido|A unidade j\xE1 tem uma parti\xE7\xE3o utiliz\xE1vel.
Ver driver e compatibilidade|Recuperar antes de converter|O driver e o sistema de arquivos s\xE3o compat\xEDveis.`);Ue("front-usb","As portas USB da frente n\xE3o funcionam.","USB FRONTAL AUSENTE","Testar USB frontal",`
Comparar acess\xF3rio e cabo|Trocar acess\xF3rio confirmado|O acess\xF3rio funciona em outra porta.
Comparar consumo de energia|Usar alimenta\xE7\xE3o adequada|O consumo do dispositivo \xE9 adequado.
Ver cabo USB interno|Reconectar header correto|O cabo frontal est\xE1 conectado corretamente.
Inspecionar porta desligada|Substituir conjunto confirmado|A porta n\xE3o apresenta dano f\xEDsico.`);Ue("usb-drop","O USB desconecta sozinho.","USB INTERMITENTE","Repetir uso do USB",`
Comparar cabo USB|Trocar cabo confirmado|A falha continua com outro cabo.
Testar sem hub|Retirar intermedi\xE1rio defeituoso|A falha continua sem o hub.
Ver energia e driver|Ajustar energia e driver|Energia e driver n\xE3o explicam a falha.
Comparar acess\xF3rio e PC|Encaminhar pe\xE7a confirmada|A compara\xE7\xE3o n\xE3o aponta falha no acess\xF3rio ou controlador.`);Ue("noise","O gabinete faz muito barulho.","RU\xCDDO NO GABINETE","Observar ru\xEDdo e funcionamento",`
Ver apoio do gabinete|Estabilizar gabinete|O gabinete est\xE1 est\xE1vel e livre de objetos.
Inspecionar cabos desligados|Prender cabos longe da h\xE9lice|Nenhum cabo encosta nas ventoinhas.
Ver filtros e ventila\xE7\xE3o|Limpar e liberar ventila\xE7\xE3o|Os filtros e as entradas est\xE3o livres.
Identificar origem do som|Tratar pe\xE7a confirmada|O som n\xE3o aponta falha nessas pe\xE7as.`);Ue("heat","O computador fica muito quente.","TEMPERATURA ALTA","Conferir temperatura em uso",`
Ver entradas de ar|Liberar circula\xE7\xE3o de ar|As entradas e sa\xEDdas est\xE3o livres.
Comparar carga e repouso|Reduzir carga desnecess\xE1ria|A carga de trabalho n\xE3o explica o calor.
Ver filtros e ventoinhas|Limpar e corrigir ventila\xE7\xE3o|Os filtros e as ventoinhas funcionam.
Ver cooler com professor|Reinstalar cooler corretamente|A montagem do cooler est\xE1 correta.`);Ue("shutdown","O PC desliga durante o uso.","DESLIGAMENTO INESPERADO","Repetir tarefa sem desligar",`
Comparar alimenta\xE7\xE3o externa|Usar alimenta\xE7\xE3o est\xE1vel|A alimenta\xE7\xE3o externa est\xE1 est\xE1vel.
Ver temperaturas|Corrigir refrigera\xE7\xE3o|A temperatura est\xE1 dentro do limite.
Ver eventos e energia|Corrigir comando identificado|N\xE3o h\xE1 comando ou configura\xE7\xE3o causando a falha.
Comparar fonte com professor|Trocar apenas pe\xE7a isolada|O teste n\xE3o isola falha na fonte ou componente.`);Ue("freeze","O computador inteiro congela.","SISTEMA CONGELADO","Repetir tarefa est\xE1vel",`
Ver resposta e carga|Reduzir tarefa problem\xE1tica|O congelamento n\xE3o \xE9 sobrecarga tempor\xE1ria.
Ver mudan\xE7a recente|Reverter mudan\xE7a identificada|A falha n\xE3o acompanha a mudan\xE7a recente.
Ver calor e disco|Corrigir calor ou armazenamento|Temperatura e unidade n\xE3o explicam a falha.
Testar mem\xF3ria com professor|Trocar componente confirmado|A compara\xE7\xE3o n\xE3o aponta instabilidade nessas pe\xE7as.`);Ue("black","O Windows come\xE7a e a tela fica preta.","TELA PRETA","Conferir entrada no sistema",`
Testar uma tela|Corrigir sa\xEDda e modo|A sa\xEDda e o modo est\xE3o corretos.
Testar modo de seguran\xE7a|Corrigir driver oficial|A compara\xE7\xE3o n\xE3o relaciona a falha ao driver.
Comparar usu\xE1rio e sess\xE3o|Reparar sess\xE3o com backup|A falha n\xE3o acompanha aplicativo ou sess\xE3o.
Comparar v\xEDdeo e recupera\xE7\xE3o|Isolar sistema ou GPU|A compara\xE7\xE3o n\xE3o isola falha no sistema ou GPU.`);Ue("ram-size","A mem\xF3ria aparece incompleta.","RAM UTILIZ\xC1VEL REDUZIDA","Conferir mem\xF3ria dispon\xEDvel",`
Comparar instalada e utiliz\xE1vel|Reconhecer reserva normal|A diferen\xE7a n\xE3o \xE9 apenas reserva normal.
Ver limites do conjunto|Usar sistema e RAM compat\xEDveis|O conjunto suporta a mem\xF3ria instalada.
Ver travas e slots|Reencaixar RAM corretamente|Os m\xF3dulos est\xE3o firmes nos slots corretos.
Comparar m\xF3dulos e slots|Isolar m\xF3dulo ou canal|A compara\xE7\xE3o n\xE3o aponta falha no m\xF3dulo ou canal.`);Ue("ram-boot","O PC n\xE3o inicia ap\xF3s trocar a RAM.","INICIALIZA\xC7\xC3O PARADA","Iniciar com RAM compat\xEDvel",`
Ver tempo do primeiro boot|Aguardar per\xEDodo do manual|O per\xEDodo de treinamento j\xE1 foi respeitado.
Ver travas e posi\xE7\xF5es|Reencaixar RAM desligada|Os m\xF3dulos est\xE3o bem encaixados.
Comparar especifica\xE7\xF5es DDR|Usar conjunto compat\xEDvel|Os m\xF3dulos s\xE3o compat\xEDveis com a placa.
Testar par\xE2metros padr\xE3o|Corrigir perfil ou m\xF3dulo|O teste padr\xE3o n\xE3o aponta essa causa.`);Ue("fan","Aparece um aviso da ventoinha.","CPU FAN ERROR","Conferir refrigera\xE7\xE3o e leitura",`
Ver manuten\xE7\xE3o recente|Parar e conferir refrigera\xE7\xE3o|O aviso n\xE3o se relaciona \xE0 manuten\xE7\xE3o recente.
Ver header CPU_FAN|Conectar no header correto|O cooler usa o header previsto.
Ver cabo e obst\xE1culos|Corrigir ventoinha confirmada|O cabo e a h\xE9lice est\xE3o livres.
Comparar leitura e manual|Ajustar monitoramento correto|A leitura est\xE1 compat\xEDvel com a montagem.`);Ue("post","H\xE1 bipes ou LED de diagn\xF3stico.","POST INTERROMPIDO","Conferir POST com orienta\xE7\xE3o",`
Anotar c\xF3digo e modelo|Consultar manual do modelo|O c\xF3digo j\xE1 foi identificado pelo manual.
Testar sem acess\xF3rios|Restaurar configura\xE7\xE3o anterior|A falha continua sem os acess\xF3rios.
Comparar RAM e v\xEDdeo|Corrigir pe\xE7a indicada no c\xF3digo|A compara\xE7\xE3o n\xE3o aponta falha em RAM ou v\xEDdeo.
Ver compatibilidade assistida|Encaminhar diagn\xF3stico t\xE9cnico|A compara\xE7\xE3o n\xE3o aponta essa causa neste cen\xE1rio.`);Ue("short-power","O PC liga por segundos e desliga.","LIGA E DESLIGA","Ligar com montagem conferida",`
Testar sem perif\xE9ricos|Retirar perif\xE9rico confirmado|A falha continua sem perif\xE9ricos.
Ver ATX e energia CPU|Conectar alimenta\xE7\xE3o correta|Os conectores ATX e CPU est\xE3o completos.
Ver montagem do cooler|Reinstalar refrigera\xE7\xE3o|O cooler est\xE1 presente e bem montado.
Inspecionar com professor|Corrigir montagem confirmada|O teste n\xE3o isola curto ou falha nessas pe\xE7as.`);Ue("ram-errors","O teste de mem\xF3ria apresenta erros.","ERROS DE RAM","Repetir teste de mem\xF3ria",`
Ver perfil XMP/EXPO|Testar par\xE2metros padr\xE3o|O perfil n\xE3o explica os erros.
Ver encaixe da RAM|Reencaixar pelas bordas|Os m\xF3dulos est\xE3o bem encaixados.
Comparar m\xF3dulos separados|Trocar m\xF3dulo confirmado|O erro n\xE3o acompanha esse m\xF3dulo.
Comparar slots e conjunto|Corrigir conjunto ou canal|A compara\xE7\xE3o n\xE3o aponta esse slot ou combina\xE7\xE3o.`);Ue("artifacts","A imagem tem quadrados e cores estranhas.","FALHAS NA IMAGEM","Conferir imagem est\xE1vel",`
Comparar cabo e monitor|Trocar cabo ou monitor isolado|A falha continua com outro cabo e monitor.
Comparar aplicativo e driver|Corrigir aplicativo ou driver|A compara\xE7\xE3o n\xE3o relaciona a falha ao software.
Ver temperatura e ajustes|Restaurar ajustes e refrigera\xE7\xE3o|Temperatura e ajustes est\xE3o adequados.
Comparar GPU e RAM|Encaminhar pe\xE7a isolada|A compara\xE7\xE3o n\xE3o aponta falha na GPU ou RAM.`);Ue("game","O programa 3D trava.","3D INTERROMPIDO","Repetir tarefa 3D",`
Comparar requisitos e ajustes|Reduzir ajustes ao hardware|Os ajustes atendem aos limites do hardware.
Comparar programas 3D|Corrigir programa e driver|A compara\xE7\xE3o n\xE3o isola falha no programa ou driver.
Ver calor e perfis|Corrigir calor e par\xE2metros|Temperatura e perfis est\xE3o adequados.
Ver alimenta\xE7\xE3o assistida|Corrigir componente confirmado|A compara\xE7\xE3o n\xE3o aponta falha na alimenta\xE7\xE3o ou GPU.`);Ue("drive-risk","A unidade tem erros de leitura.","DADOS EM RISCO","Conferir acesso ap\xF3s prote\xE7\xE3o",`
Ver mensagens e ru\xEDdo|Parar e priorizar recupera\xE7\xE3o|O teste n\xE3o aponta sinal mec\xE2nico de falha.
Ver cabos com autoriza\xE7\xE3o|Corrigir cabo sem gravar dados|Os cabos e as conex\xF5es est\xE3o firmes.
Consultar sa\xFAde da unidade|Preservar dados e substituir|A leitura de sa\xFAde n\xE3o aponta essa falha.
Comparar conex\xE3o confi\xE1vel|Trocar unidade e restaurar backup|O erro n\xE3o acompanha a unidade nesse teste.`);Ue("bsod","O sistema para numa tela de erro.","ERRO DE PARADA","Conferir estabilidade do sistema",`
Registrar c\xF3digo e contexto|Guardar evid\xEAncias do erro|O c\xF3digo e o contexto j\xE1 est\xE3o registrados.
Comparar mudan\xE7a recente|Corrigir item relacionado|A falha n\xE3o acompanha uma mudan\xE7a recente.
Ver registros, calor e disco|Corrigir causa confirmada|A verifica\xE7\xE3o n\xE3o aponta essa causa.
Testar hardware orientado|Isolar componente ou registro|O teste n\xE3o aponta falha nesse hardware.`);Ue("xmp","O PC ficou inst\xE1vel ap\xF3s ativar um perfil.","PERFIL INST\xC1VEL","Testar configura\xE7\xE3o est\xE1vel",`
Comparar com perfil anterior|Desativar perfil com professor|A instabilidade continua sem o perfil.
Ver limites de CPU e RAM|Usar configura\xE7\xE3o suportada|O perfil respeita os limites do conjunto.
Ver conjunto e slots|Usar conjunto nos slots certos|O conjunto e os slots est\xE3o adequados.
Testar RAM sem perfil|Encaminhar teste da mem\xF3ria|O teste padr\xE3o n\xE3o aponta falha persistente.`);Ue("upgrade","O PC n\xE3o inicia ap\xF3s trocar uma pe\xE7a.","BOOT AP\xD3S TROCA FALHOU","Iniciar com montagem compat\xEDvel",`
Ver cabos e montagem|Corrigir conex\xE3o esquecida|Os conectores necess\xE1rios est\xE3o presentes.
Comparar modelos exatos|Instalar componente compat\xEDvel|Os modelos e conectores s\xE3o compat\xEDveis.
Ver vers\xE3o m\xEDnima de BIOS|Planejar atualiza\xE7\xE3o oficial|A BIOS suporta o modelo instalado.
Comparar configura\xE7\xE3o anterior|Trocar pe\xE7a ou encaminhar dano|A compara\xE7\xE3o n\xE3o isola falha na pe\xE7a nova.`);Ue("motherboard","H\xE1 suspeita de defeito na placa-m\xE3e.","FALHA A ISOLAR","Conferir diagn\xF3stico documentado",`
Revisar causas externas|Resolver causas externas|As causas externas j\xE1 foram conferidas.
Ver montagem assistida|Corrigir montagem ou ajustes|A montagem e os ajustes est\xE3o corretos.
Testar pe\xE7as boas assistido|Trocar pe\xE7a comprovada|A compara\xE7\xE3o n\xE3o isola outra pe\xE7a como causa.
Revisar evid\xEAncias restantes|Encaminhar bancada especializada|Os testes n\xE3o sustentam essa hip\xF3tese neste cen\xE1rio.`);var Ir=bu.map((i,e)=>({...i,id:e+1})),Ov=["O aparelho de teste tamb\xE9m n\xE3o liga nessa tomada.","O cabo de energia do monitor est\xE1 mal conectado.","O cabo est\xE1 na placa-m\xE3e; neste PC, a sa\xEDda dispon\xEDvel \xE9 a da placa de v\xEDdeo.","A falha come\xE7ou ap\xF3s a mudan\xE7a do driver; o monitor funciona na compara\xE7\xE3o.","A resolu\xE7\xE3o escolhida \xE9 diferente da resolu\xE7\xE3o nativa do monitor.","O teclado responde na USB traseira, mas n\xE3o pelo intermedi\xE1rio usado.","O mouse funciona na USB traseira; a conex\xE3o anterior falha.","Outro fone funciona; o teste isola a falha no acess\xF3rio usado.","O plugue n\xE3o corresponde ao conector usado no painel frontal.","A rede funciona com outro cabo ou porta; a conex\xE3o original falha.","A conex\xE3o funciona mais perto do roteador, com a senha autorizada conferida.","A unidade \xE9 detectada, mas seu sistema de arquivos n\xE3o pode ser acessado.","O painel da impressora indica uma condi\xE7\xE3o f\xEDsica que impede a impress\xE3o.","O aplicativo est\xE1 usando uma c\xE2mera diferente da webcam conectada.","A grava\xE7\xE3o do sistema funciona, mas o aplicativo est\xE1 sem permiss\xE3o ou entrada correta.","As sa\xEDdas dispon\xEDveis n\xE3o atendem \xE0 montagem atual das duas telas.","O rel\xF3gio usa um fuso diferente do local configurado para a turma.","V\xE1rios aplicativos desnecess\xE1rios come\xE7am junto com o sistema.","Um processo concentra o consumo; a verifica\xE7\xE3o orienta corrigir esse aplicativo.","Outros programas tamb\xE9m falham; o problema n\xE3o se limita a um aplicativo.","A inicializa\xE7\xE3o funciona ao retirar a m\xEDdia externa que estava interferindo.","O endere\xE7o IP ou gateway n\xE3o corresponde \xE0 configura\xE7\xE3o prevista pela rede.","As quedas ap\xF3s inatividade est\xE3o relacionadas ao driver ou \xE0 economia de energia.","A compara\xE7\xE3o isola problema no driver, na antena ou no adaptador Bluetooth.","A revis\xE3o encontra muitos arquivos tempor\xE1rios e itens dispens\xE1veis na lixeira.","A revis\xE3o encontra uma extens\xE3o ou um programa indesejado.","O solucionador oficial identifica uma corre\xE7\xE3o para a atualiza\xE7\xE3o.","O disco \xE9 detectado, mas a configura\xE7\xE3o ou o carregador de boot precisa de reparo.","A montagem usa um conector incompat\xEDvel com o tipo da unidade.","A unidade tem parti\xE7\xE3o saud\xE1vel, mas est\xE1 offline ou sem uma letra livre.","Os acess\xF3rios funcionam atr\xE1s; o cabo USB interno frontal est\xE1 solto.","A compara\xE7\xE3o isola a falha no acess\xF3rio ou no controlador USB.","Um objeto ou apoio externo faz o gabinete vibrar.","A temperatura sobe com tarefas desnecess\xE1rias e cai ao reduzir essa carga.","Os eventos relacionam o desligamento a uma configura\xE7\xE3o ou comando espec\xEDfico.","Os testes orientados indicam instabilidade na mem\xF3ria ou em outro componente.","A sa\xEDda ou o modo de exibi\xE7\xE3o escolhido n\xE3o funciona com a tela conectada.","O sistema ou a placa n\xE3o suporta toda a mem\xF3ria nesta configura\xE7\xE3o.","A RAM instalada n\xE3o atende \xE0s especifica\xE7\xF5es suportadas pelo conjunto.","A refrigera\xE7\xE3o funciona, mas o limite de leitura n\xE3o corresponde \xE0 montagem.","O padr\xE3o de bipes ou LED foi registrado. Falta consultar o manual deste modelo.","Um conector de alimenta\xE7\xE3o ATX ou CPU est\xE1 incompleto.","O erro acompanha o mesmo m\xF3dulo, mesmo em par\xE2metros padr\xE3o.","A falha de imagem acompanha a GPU ou a mem\xF3ria na compara\xE7\xE3o orientada.","Os requisitos e ajustes do programa ultrapassam os limites do hardware.","Com autoriza\xE7\xE3o para testar, a compara\xE7\xE3o identifica mau contato no cabo ou porta.","Os registros e testes apontam uma causa confirm\xE1vel no sistema, calor ou disco.","A instabilidade persiste sem o perfil; o teste padr\xE3o exige investigar a mem\xF3ria.","Um cabo ou conector necess\xE1rio ficou desconectado durante a troca.","A revis\xE3o encontra montagem ou configura\xE7\xE3o inadequada; ainda n\xE3o condene a placa."];Ir.forEach((i,e)=>i.finding=Ov[e]);var Nv={12:["Conferir prote\xE7\xE3o dos dados","Dados preservados; a unidade segue para recupera\xE7\xE3o ou prepara\xE7\xE3o assistida."],20:["Conferir encaminhamento","Falha geral registrada; o professor recebe o encaminhamento para testes de sistema e hardware."],32:["Conferir encaminhamento USB","Falha isolada no acess\xF3rio ou controlador; o reparo foi encaminhado com o resultado da compara\xE7\xE3o."],41:["Conferir registro do c\xF3digo","C\xF3digo e modelo registrados; o manual foi consultado para orientar a continua\xE7\xE3o do diagn\xF3stico."],44:["Conferir pe\xE7a encaminhada","Falha de imagem isolada na compara\xE7\xE3o; a pe\xE7a segue para reparo ou substitui\xE7\xE3o assistida."],48:["Conferir teste encaminhado","Falha em par\xE2metros padr\xE3o registrada; o pr\xF3ximo atendimento far\xE1 o teste orientado da mem\xF3ria."]};for(let[i,[e,t]]of Object.entries(Nv))Object.assign(Ir[Number(i)-1],{check:e,outcome:t,referral:!0});var Pr=i=>ji(i).outcome||i.confirm,Mu=i=>[12,21,25,28,29,30,46,47].includes(i.id)?"Preserve os dados antes de reparar ou preparar uma unidade.":i.level>=4||[1,9,17].includes(i.id)?"Interven\xE7\xE3o interna: professor, PC desligado e fora da tomada.":"Use apenas configura\xE7\xF5es e conex\xF5es autorizadas pelo professor.",ji=i=>Ir[i.id-1],Su=i=>[...new Set([(i.id-1)%i.steps.length,0,1,2])].slice(0,3);function hl(i,e){let t=(i.steps[e]?.slice(0,2).join(" ")||"").toLowerCase();return/tomada|fonte|alimentação|atx/.test(t)?"power":/\bram\b|memória|módulo|\bddr\b/.test(t)?"ram":/cooler|ventoinha|calor|temperatura|refrigeração/.test(t)?"fan":/cabo|conector|encaixe|header|porta/.test(t)?"cable":/disco|unidade|armazenamento|backup/.test(t)?"drive":/mouse|teclado|fone|microfone|câmera|impressora/.test(t)?"peripheral":"screen"}if(Ir.length!==je.length||Ir.some((i,e)=>!i.finding||i.actions.length!==je[e].steps.length||i.actions.some(t=>!t.test||!t.fix||!t.normal)))throw Error("Conte\xFAdo da bancada incompleto.");var mn=(i,e,t,n,s,r,a,o,l,c=null)=>({id:i,name:e,description:t,category:n,goal:s,points:r,image:a,color:o,metric:l,station:c}),Dr=[mn("first-fix","Primeira fa\xEDsca","Conclua seu primeiro chamado, dos testes \xE0 confer\xEAncia.","jornada",1,30,"first","#c28a4e","completed"),mn("curious","Olhar investigativo","Consulte pelo menos 3 testes em cada um de 3 chamados conclu\xEDdos.","metodo",3,60,"investigator","#58b6cd","curious"),mn("resilient","Um novo olhar","Conclua 3 chamados com revis\xE3o de decis\xF5es ou apoio das pistas da mentora.","metodo",3,60,"resilience","#d58b78","reviewed"),mn("method","M\xE9todo em a\xE7\xE3o","Conclua 5 chamados com a evid\xEAncia decisiva investigada.","metodo",5,80,"investigator","#75bfa7","completed"),mn("explorer","Explorador do campus","Conclua pelo menos 1 chamado em cada uma das 5 esta\xE7\xF5es.","jornada",5,120,"explorer","#62bab1","stations"),mn("station-1","Energia restaurada","Conclua os 10 chamados da esta\xE7\xE3o Primeiros passos.","estacoes",10,100,"power","#88b963","station",1),mn("station-2","Tudo no ajuste","Conclua os 10 chamados da esta\xE7\xE3o Uso e configura\xE7\xF5es.","estacoes",10,100,"settings","#d8ac58","station",2),mn("station-3","Guardi\xE3o dos dados","Conclua os 10 chamados da esta\xE7\xE3o Sistema e armazenamento.","estacoes",10,100,"data","#75aeca","station",3),mn("station-4","Por dentro da m\xE1quina","Conclua os 10 chamados da esta\xE7\xE3o Dentro do gabinete.","estacoes",10,100,"hardware","#ac95cf","station",4),mn("station-5","Detetive de hardware","Conclua os 10 chamados da esta\xE7\xE3o Isolamento de falhas.","estacoes",10,100,"diagnosis","#d89c72","station",5),mn("halfway","Grandes descobertas","Conclua 25 chamados na simula\xE7\xE3o.","jornada",25,150,"champion","#9dafb5","completed"),mn("campus-restored","Legado da Bancada","Conclua os 50 chamados e restaure o laborat\xF3rio na simula\xE7\xE3o.","jornada",50,300,"champion","#e0b957","completed")],Uo=i=>je.filter(e=>{let t=i.records[e.id];return t?.stage===6&&Array.isArray(t.tested)&&t.tested.includes((e.id-1)%e.steps.length)});function Ft(i){let e=Uo(i),t={completed:e.length,curious:e.filter(n=>new Set(i.records[n.id].tested.filter(s=>Number.isInteger(s)&&s>=0&&s<n.steps.length)).size>=3).length,reviewed:e.filter(n=>i.records[n.id].errors>0||i.records[n.id].hints>0).length,stations:new Set(e.map(n=>n.level)).size};return Dr.map(n=>{let s=n.metric==="station"?e.filter(r=>r.level===n.station).length:t[n.metric];return{...n,value:Math.min(s,n.goal),unlocked:s>=n.goal,percent:Math.min(100,s/n.goal*100)}})}var fl=i=>Ft(i).filter(e=>e.unlocked).reduce((e,t)=>e+t.points,0);function pl(i){let e=fl(i),t=[{name:"Semente de curiosidade",at:0},{name:"Olhar de investigador",at:100},{name:"Talento em constru\xE7\xE3o",at:350},{name:"Refer\xEAncia do campus",at:700},{name:"Legado em movimento",at:1200}];return{...[...t].reverse().find(s=>e>=s.at),next:t.find(s=>s.at>e)||null,points:e}}var Eu=()=>({featured:null,seen:[],tracked:null});function Au(i,e){let t=Ft(e).filter(n=>n.unlocked).map(n=>n.id);return{featured:t.includes(i?.featured)?i.featured:null,seen:Array.isArray(i?.seen)?[...new Set(i.seen.slice(0,100).filter(n=>t.includes(n)))]:t,tracked:Dr.some(n=>n.id===i?.tracked)&&!t.includes(i?.tracked)?i.tracked:null}}function ml(i){let e=Ft(i).filter(n=>n.unlocked),t=e.filter(n=>!i.merit.seen.includes(n.id));return i.merit.seen=e.map(n=>n.id),i.merit.featured&&!e.some(n=>n.id===i.merit.featured)&&(i.merit.featured=null),i.merit.tracked&&e.some(n=>n.id===i.merit.tracked)&&(i.merit.tracked=null),t}function Tu(i,e){return e===null?(i.merit.tracked=null,!0):Ft(i).some(t=>t.id===e&&!t.unlocked)?(i.merit.tracked=e,!0):!1}function gl(i,e){return e===null?(i.merit.featured=null,!0):Ft(i).some(t=>t.id===e&&t.unlocked)?(i.merit.featured=e,!0):!1}function Lr(i,e){let t=je.filter(n=>i.records[n.id]?.stage!==6);if(e.station&&(t=t.filter(n=>n.level===e.station)),e.metric==="stations"){let n=new Set(Uo(i).map(s=>s.level));t=t.filter(s=>!n.has(s.level))}return!t.length&&e.metric==="curious"&&(t=Uo(i).filter(n=>new Set(i.records[n.id].tested).size<3)),!t.length&&e.metric==="reviewed"&&(t=Uo(i).filter(n=>!i.records[n.id].errors&&!i.records[n.id].hints)),t.find(n=>i.records[n.id])||t[0]||null}var It=[{id:"visor-lime",name:"Visor Pixel",category:"head",kind:"visor",color:"#c6f36b",price:60,xp:0,tag:"PRIMEIRA DESCOBERTA",description:"Uma faixa de energia para quem enxerga possibilidades em cada problema."},{id:"cap-blue",name:"Bon\xE9 Circuito",category:"head",kind:"cap",color:"#54b3e0",price:80,xp:0,tag:"CASUAL",description:"Seu uniforme ganhou um parceiro para explorar o campus."},{id:"hardhat",name:"Capacete Solar",category:"head",kind:"hardhat",color:"#f5c052",price:140,xp:300,tag:"EDI\xC7\xC3O BANCADA",description:"Um visual inspirado em quem prepara tudo antes de come\xE7ar."},{id:"headphones",name:"Headset \xD3rbita",category:"head",kind:"headphones",color:"#ad92e3",price:180,xp:600,tag:"EM SINTONIA",description:"Entre na frequ\xEAncia das boas ideias com um headset violeta."},{id:"toolpack",name:"Kit de Campo",category:"back",kind:"toolpack",color:"#e7a76e",price:120,xp:200,tag:"PRONTO PARA AGIR",description:"Uma bolsa de ferramentas para acompanhar sua pr\xF3xima investiga\xE7\xE3o."},{id:"backpack",name:"Mochila Explorer",category:"back",kind:"backpack",color:"#6bd0ae",price:220,xp:800,tag:"EXPLORADOR",description:"Leve a curiosidade nas costas. Cabe uma cole\xE7\xE3o inteira de descobertas."},{id:"jetpack",name:"Propulsor Nova",category:"back",kind:"jetpack",color:"#80baf2",price:400,xp:1800,tag:"COLE\xC7\xC3O NOVA",description:"Dois propulsores e muita imagina\xE7\xE3o. Um acess\xF3rio visual para ir al\xE9m."},{id:"aura-mint",name:"\xD3rbita Menta",category:"aura",kind:"orbit",color:"#84e6ba",price:120,xp:400,tag:"EM MOVIMENTO",description:"Um anel luminoso que gira no seu ritmo e deixa o percurso mais vivo."},{id:"aura-circuit",name:"Pulso El\xE9trico",category:"aura",kind:"circuit",color:"#6fc9f3",price:220,xp:1e3,tag:"CONECTADO",description:"Pequenos blocos em \xF3rbita celebram suas conex\xF5es de conhecimento."},{id:"aura-cosmic",name:"Constela\xE7\xE3o",category:"aura",kind:"cosmic",color:"#d4adff",price:350,xp:2e3,tag:"AL\xC9M DO \xD3BVIO",description:"Uma constela\xE7\xE3o pessoal para quem continua fazendo novas perguntas."},{id:"merit-cap",name:"Bon\xE9 Pioneiro",category:"head",kind:"cap",color:"#dfbe63",price:0,xp:0,merit:"first-fix",tag:"RECOMPENSA DE M\xC9RITO",description:"Dourado para celebrar sua primeira fa\xEDsca. Resgate ao concluir o primeiro chamado."},{id:"merit-toolpack",name:"Kit Guardi\xE3o",category:"back",kind:"toolpack",color:"#72c2a6",price:0,xp:0,merit:"explorer",tag:"RECOMPENSA DE M\xC9RITO",description:"Um kit especial para quem concluiu pelo menos um chamado em cada esta\xE7\xE3o."},{id:"merit-aura",name:"Aura Legado",category:"aura",kind:"cosmic",color:"#f3d67b",price:0,xp:0,merit:"campus-restored",tag:"RECOMPENSA DE M\xC9RITO",description:"Uma \xF3rbita dourada para celebrar os 50 chamados conclu\xEDdos. Seu legado ganhou luz."}],Oo=[{id:"look-field",name:"Equipe de Campo",category:"looks",color:"#a8d980",xp:400,skin:0,items:["visor-lime","toolpack","aura-mint"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Visor Pixel, Kit de Campo e \xD3rbita Menta. Um conjunto para investigar com estilo."},{id:"look-circuit",name:"Circuito Azul",category:"looks",color:"#70bfe8",xp:1e3,skin:1,items:["cap-blue","backpack","aura-circuit"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Bon\xE9 Circuito, Mochila Explorer e Pulso El\xE9trico, com o uniforme azul."},{id:"look-nova",name:"Tripula\xE7\xE3o Nova",category:"looks",color:"#b9a0ec",xp:2e3,skin:3,items:["headphones","jetpack","aura-cosmic"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Headset \xD3rbita, Propulsor Nova e Constela\xE7\xE3o. Sua experi\xEAncia chegou a outro n\xEDvel."}],wu={all:"Tudo",rewards:"M\xE9ritos",looks:"Conjuntos",uniform:"Uniformes",head:"Cabe\xE7a",back:"Mochilas",aura:"Efeitos",favorites:"Favoritos",owned:"Minha cole\xE7\xE3o"},No=(i,e)=>xi(i)>=e.xp&&(!e.merit||Ft(i).some(t=>t.id===e.merit&&t.unlocked)),vl=()=>({owned:[],wishlist:[],equipped:{head:null,back:null,aura:null}}),Fv=i=>100+Object.values(i.records).filter(e=>e.stage===6).length*40,xi=i=>Object.values(i.records).filter(e=>e.stage===6).length*100,Qn=i=>Fv(i)-(i.shop?.owned||[]).reduce((e,t)=>e+(It.find(n=>n.id===t)?.price||0),0);function Cu(i,e){let t={records:e,shop:vl()};for(let n of Array.isArray(i?.owned)?i.owned.slice(0,100):[]){let s=It.find(r=>r.id===n);s&&!t.shop.owned.includes(n)&&No(t,s)&&Qn(t)>=s.price&&t.shop.owned.push(n)}for(let n of["head","back","aura"]){let s=i?.equipped?.[n];t.shop.owned.includes(s)&&It.some(r=>r.id===s&&r.category===n)&&(t.shop.equipped[n]=s)}return t.shop.wishlist=[...new Set((Array.isArray(i?.wishlist)?i.wishlist:[]).slice(0,100).filter(n=>It.some(s=>s.id===n)||Oo.some(s=>s.id===n)||typeof n=="string"&&/^uniform-[0-3]$/.test(n)))],t.shop}function Ru(i,e){let t=It.find(n=>n.id===e);return t?i.shop.owned.includes(e)?{ok:!1,message:"Este item j\xE1 faz parte da sua cole\xE7\xE3o."}:!No(i,t)&&t.merit?{ok:!1,message:"Conquiste o m\xE9rito indicado para resgatar esta recompensa."}:xi(i)<t.xp?{ok:!1,message:`Este item libera em ${t.xp} XP.`}:Qn(i)<t.price?{ok:!1,message:"Faltam cr\xE9ditos. Cada miss\xE3o conclu\xEDda rende 40 cr\xE9ditos."}:(i.shop.owned.push(e),i.shop.equipped[t.category]=e,{ok:!0,message:`${t.name} adquirido e equipado!`}):{ok:!1,message:"Item n\xE3o encontrado."}}function xl(i,e){let t=It.find(n=>n.id===e);return!t||!i.shop.owned.includes(e)?!1:(i.shop.equipped[t.category]=e,!0)}var Fo=(i,e)=>e.items.filter(t=>!i.shop.owned.includes(t)).reduce((t,n)=>t+It.find(s=>s.id===n).price,0);function Iu(i,e){let t=Oo.find(s=>s.id===e);if(!t)return{ok:!1,message:"Conjunto n\xE3o encontrado."};if(xi(i)<t.xp)return{ok:!1,message:`Este conjunto libera em ${t.xp} XP.`};let n=Fo(i,t);if(Qn(i)<n)return{ok:!1,message:"Faltam cr\xE9ditos para completar este conjunto."};for(let s of t.items)i.shop.owned.includes(s)||i.shop.owned.push(s),xl(i,s);return i.skin=t.skin,{ok:!0,message:`${t.name} completo e equipado!`}}var _l="amc-mundo-3d-v1",Pu="Preservar os dados, consultar o manual e fazer interven\xE7\xF5es internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.",Du=["Testar","Consertar","Conferir"],Bo=["Testar","Testar","Consertar","Consertar","Conferir","Conferir"],Rn=[{name:"Campus",color:"#397e68",xp:0},{name:"Circuito",color:"#438eaf",xp:200},{name:"Criativo",color:"#ac7a50",xp:500},{name:"Especialista",color:"#8a72aa",xp:1e3}],_t=i=>(i.id-1)%i.steps.length,yl=()=>({version:2,tutorial:!1,skin:0,quality:"auto",records:{},shop:vl(),merit:Eu()}),Lu=()=>({stage:1,viewStage:0,tested:[],lastTest:null,errors:0,hints:0}),_i=i=>i.stage===6?3:i.stage>=4?2:i.stage>=3?1:0,In=i=>Number.isInteger(i.viewStage)?Math.max(0,Math.min(i.viewStage,_i(i))):_i(i);function Uu(i,e,t){let n=In(e);return t===-1&&n>0?(e.viewStage=n-1,!0):t!==1?!1:n<_i(e)?(e.viewStage=n+1,!0):n===0&&e.stage===1&&e.tested.includes(_t(i))?(e.stage=3,e.viewStage=1,!0):!1}var Bn=i=>Object.values(i.records).filter(e=>e.stage===6).length*100;function bl(i){if(!i||typeof i!="object"||![1,2].includes(i.version)||!i.records||typeof i.records!="object"||Array.isArray(i.records))throw Error("Arquivo de progresso inv\xE1lido.");let e=yl();e.tutorial=i.tutorial===!0,e.quality=["auto","low"].includes(i.quality)?i.quality:"auto";for(let t of je){let n=i.records[t.id];if(!n||!Number.isInteger(n.stage)||n.stage<0||n.stage>6||!Array.isArray(n.tested))continue;let s=[...new Set(n.tested.filter(c=>Number.isInteger(c)&&c>=0&&c<t.steps.length))],r=n.stage===6?6:n.stage>=4?4:n.stage>=2?3:1;r>1&&!s.includes(_t(t))&&(r=1);let a=_i({stage:r}),o=Number.isInteger(n.viewStage)?n.viewStage:n.stage,l=i.version===1?o===6?3:o>=4?2:o>=2?1:0:n.viewStage;e.records[t.id]={stage:r,viewStage:Number.isInteger(l)?Math.max(0,Math.min(l,a)):a,tested:s,lastTest:s.includes(n.lastTest)?n.lastTest:s.at(-1)??null,errors:Number.isInteger(n.errors)&&n.errors>=0?Math.min(n.errors,1e5):0,hints:Number.isInteger(n.hints)&&n.hints>=0?Math.min(n.hints,1e5):0}}return e.skin=Number.isInteger(i.skin)&&Rn[i.skin]?.xp<=Bn(e)?i.skin:0,e.shop=Cu(i.shop,e.records),e.merit=Au(i.merit,e),e}function Bv(i,e){return e===3?i.steps.map(t=>t[2]):[]}function Ou(i,e,t){if(e.stage!==3||In(e)!==1||!e.tested.includes(_t(i)))return!1;let n=Bv(i,e.stage);if(!n.length||!Number.isInteger(t)||t<0||t>=n.length)return!1;let s=_t(i);return t!==s?(e.errors++,!1):(e.stage++,!0)}function Nu(i,e,t){return In(e)!==0||!Number.isInteger(t)||t<0||t>=i.steps.length?null:(e.tested.includes(t)||e.tested.push(t),e.lastTest=t,t===_t(i)?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${i.steps[t][0]}. A falha permanece at\xE9 a corre\xE7\xE3o correspondente.`:"Resultado esperado nesta verifica\xE7\xE3o: essa hip\xF3tese foi descartada no cen\xE1rio. A falha continua. Compare outra vari\xE1vel, uma de cada vez.")}function Fu(i,e){return e.stage!==4||In(e)!==2||!e.tested.includes(_t(i))?!1:(e.stage=6,!0)}var qt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zv(i,e){return e?'<path d="m94 96 18 18 39-42" stroke="#c8f58f" stroke-width="9" fill="none"/><text x="124" y="142">CONFERIDO</text>':i==="signal"?'<rect x="98" y="73" width="52" height="35" rx="4" stroke="#8cb9c7" stroke-width="3" fill="none"/><path d="M116 116h17m-8-8v8m-30-47 60 48" stroke="#e9b086" stroke-width="3"/><text x="124" y="139">SEM SINAL</text>':i==="heat"?'<path d="M117 78a8 8 0 0 1 16 0v33a17 17 0 1 1-16 0z" fill="none" stroke="#e9b086" stroke-width="4"/><path d="M125 86v38" stroke="#eb9878" stroke-width="7"/><circle cx="125" cy="124" r="10" fill="#eb9878"/>':i==="fan"?'<circle cx="125" cy="101" r="30" fill="none" stroke="#8dd2ca" stroke-width="3"/><path d="M125 101c-29-30-34 8 0 0 30-28 34 10 0 0 30 31-8 34 0 0-31 28-34-11 0 0" fill="#8dd2ca"/><text x="164" y="83" style="fill:#f4b188">!</text>':i==="ethernet"||i==="network-drop"?'<path d="M90 77h32v24H90zM103 101v20h44v-20m-11 0h29V77h-29zM98 78v8m8-8v8m8-8v8m29-8v8m8-8v8m8-8v8" stroke="#87cad0" stroke-width="3" fill="none"/><path d="m117 112 15 17m0-17-15 17" stroke="#e9ab82" stroke-width="4"/>':i==="web"?'<rect x="80" y="73" width="89" height="60" rx="4" fill="#375763"/><path d="M82 85h85" stroke="#9ac7cd" stroke-width="3"/><circle cx="125" cy="109" r="17" fill="none" stroke="#9ac7cd" stroke-width="3"/><path d="m110 98 29 24" stroke="#f2b18a" stroke-width="4"/>':i==="bluetooth"?'<path d="M122 72v62l21-16-40-31m0 33 40-33-21-15" stroke="#91c5e2" stroke-width="4" fill="none"/>':i==="mic"?'<rect x="116" y="73" width="20" height="37" rx="10" stroke="#8acdd1" stroke-width="3" fill="none"/><path d="M106 98v7a20 20 0 0 0 40 0v-7m-20 27v11m-13 0h26" stroke="#8acdd1" stroke-width="3" fill="none"/><path d="m102 74 48 52" stroke="#edb18a" stroke-width="4"/>':i==="post"||i==="motherboard"||i==="upgrade"?'<rect x="83" y="72" width="86" height="60" rx="5" stroke="#86bfb7" stroke-width="3" fill="none"/><rect x="112" y="86" width="24" height="25" fill="#648f90"/><path d="M95 82v40m61-40v40M105 119h41" stroke="#9dcb9e" stroke-width="4"/><circle cx="162" cy="74" r="9" fill="#edb18a"/><text x="162" y="79" style="fill:#294338">!</text>':i==="boot-slow"||i==="slow"||i==="update"?'<path d="M85 78h77M85 91h57" stroke="#7faeb9" stroke-width="4"/><rect x="81" y="106" width="88" height="15" rx="4" fill="#365561"/><rect x="81" y="106" width="25" height="15" rx="4" fill="#e4ad7f"/><path d="M162 76v14m-6-7h12" stroke="#a8c9c9" stroke-width="3"/>':i==="noise"?'<path d="M80 102h11l7-20 10 42 11-54 12 64 11-42 9 21 8-11h10" stroke="#edb18a" stroke-width="4" fill="none"/>':i==="game"?'<path d="m125 74 32 17v32l-32 17-32-17V91zM93 91l32 18 32-18m-32 18v31m0-66v35" fill="none" stroke="#91cdd0" stroke-width="3"/><path d="m151 74 15 15m0-15-15 15" stroke="#e9ac83" stroke-width="4"/>':["power","monitor-off","black","short-power"].includes(i)?'<circle cx="124" cy="102" r="17" fill="none" stroke="#4d6877" stroke-width="3"/><path d="M124 78v23" stroke="#4d6877" stroke-width="4"/>':["ethernet","wifi","web","network-drop","bluetooth"].includes(i)?'<path d="M80 87q44-36 88 0M94 104q30-25 60 0M110 119q14-13 28 0" stroke="#77c8d2" stroke-width="6" fill="none"/><path d="m139 73 30 58" stroke="#f4b188" stroke-width="5"/>':["audio","mic","front-audio","noise"].includes(i)?'<path d="M82 99h14l20-19v47l-20-18H82zM135 86v39M147 76v57M159 91v29" fill="none" stroke="#81cfd5" stroke-width="5"/>':["storage-full","drive-missing","new-drive","drive-risk","usb"].includes(i)?'<rect x="81" y="76" width="88" height="52" rx="7" fill="#334f5c"/><rect x="90" y="107" width="69" height="9" rx="3" fill="#eeab78"/><circle cx="148" cy="88" r="4" fill="#ceef9b"/>':["ram-size","ram-boot","ram-errors","xmp"].includes(i)?'<rect x="82" y="76" width="85" height="54" rx="5" fill="#3b5863"/><path d="M93 85h18v22H93zM120 85h18v22h-18zM147 85h10v22h-10zM95 120h58" fill="#8bcbc1" stroke="#8bcbc1" stroke-width="3"/>':i==="clock"?'<circle cx="124" cy="101" r="27" stroke="#89d0d5" stroke-width="4" fill="none"/><path d="M124 82v21l16 10" stroke="#e4eeae" stroke-width="5" fill="none"/>':i==="keyboard"?'<text x="124" y="106" class="screen-typing">_ _ _</text>':i==="mouse"?'<path d="m106 77 4 50 12-15 15 12 8-10-16-10 14-8z" fill="#bce2db"/>':i==="camera"?'<rect x="86" y="82" width="62" height="40" rx="6" fill="#577a84"/><path d="m150 91 18-10v43l-18-10" fill="#83c4cc"/><path d="m86 126 73-49" stroke="#f1ae86" stroke-width="5"/>':i==="printer"?'<path d="M100 85V71h49v14M94 117H82V86h82v31h-12M98 108h53v28H98z" stroke="#91d1d4" stroke-width="4" fill="none"/>':i==="dual"?'<rect x="78" y="83" width="43" height="37" rx="3" fill="#548f9d"/><rect x="132" y="83" width="43" height="37" rx="3" fill="none" stroke="#efb18b" stroke-width="3"/>':i==="artifacts"?'<path d="M75 77h31v19H75zM128 88h27v30h-27zM88 113h28v20H88zM155 68h19v16h-19z" fill="#d7a4d8"/><path d="M78 103h88M77 132h87" stroke="#a4efcc" stroke-width="4"/>':i==="scale"?'<ellipse cx="124" cy="102" rx="48" ry="19" fill="none" stroke="#95d7d6" stroke-width="4"/><text x="124" y="143">ABC</text>':["boot-error","recovery","bsod"].includes(i)?'<path d="m125 73 32 56H92z" stroke="#f1bd85" stroke-width="4" fill="none"/><text x="125" y="116">!</text>':i==="ads"?'<rect x="76" y="74" width="79" height="49" rx="4" fill="#5d556d"/><rect x="105" y="91" width="67" height="43" rx="4" fill="#a96d73"/><path d="m152 98 10 10m0-10-10 10" stroke="#fff" stroke-width="3"/>':'<rect x="77" y="77" width="94" height="55" rx="6" fill="#375b6a"/><path d="M88 91h48M88 103h69M88 116h29" stroke="#92cbd1" stroke-width="5"/><circle cx="161" cy="123" r="13" fill="#efb17e"/><path d="M161 116v9m0 4v1" stroke="#243c49" stroke-width="3"/>'}function Ml(i,e){let t=ji(i),n=In(e),s=e.stage===6&&n>=2,r=e.stage>=4&&n>=1,a=Number.isInteger(e.lastTest)?e.lastTest:null,o=n>=1?hl(i,_t(i)):a===null?"none":hl(i,a),l=e.tested.includes(_t(i)),c=a===null?"Toque em um teste para observar o resultado.":a===_t(i)?t.finding:t.actions[a].normal,d=s?t.referral?"referred":"conferred":r?t.referral?"referral-ready":"repaired":"fault";return`<aside class="bench-visual" aria-label="Computador do chamado"><div class="bench-visual-top"><span>COMPUTADOR DO CHAMADO</span><span class="sim-label">SIMULA\xC7\xC3O</span></div><div class="bench-scene" data-kind="${t.kind}" data-state="${d}" data-focus="${o}"><svg viewBox="0 0 400 245" role="img" aria-label="${qt(s?t.referral?"Encaminhamento conferido":"Confer\xEAncia conclu\xEDda":r?"A\xE7\xE3o aplicada; falta conferir":t.symptom)}"><defs><linearGradient id="bench-monitor" x2="0" y2="1"><stop stop-color="#264859"/><stop offset="1" stop-color="#182e3d"/></linearGradient></defs><ellipse cx="201" cy="224" rx="180" ry="12" fill="#18372b" opacity=".12"/><path class="bench-cable" d="M218 167c55 45 78-5 78-44" stroke="#9b9be5" stroke-width="5" fill="none"/><g class="part-screen"><rect x="36" y="33" width="205" height="139" rx="12" fill="#314654"/><rect x="45" y="42" width="187" height="112" rx="5" fill="url(#bench-monitor)"/><g class="screen-graphic">${zv(t.kind,s&&!t.referral)}</g><circle cx="220" cy="163" r="3" class="monitor-led"/><path d="M125 173v25h-27v7h83v-7h-28v-25" fill="#5c727b"/></g><g class="part-tower"><rect x="272" y="26" width="91" height="179" rx="11" fill="#526773"/><path d="M280 38h73v147h-73z" fill="#273d48"/><g class="part-fan"><circle cx="316" cy="77" r="27" fill="#39535b" stroke="#75c8ba" stroke-width="3"/><path d="M316 77c-23-25-29 6 0 0 25-24 28 9 0 0 26 27-7 29 0 0-27 23-29-10 0 0" fill="#78a5a0"/></g><g class="part-ram"><rect x="286" y="119" width="12" height="35" rx="2" fill="#b3d28e"/><rect x="303" y="119" width="12" height="35" rx="2" fill="#b3d28e"/></g><g class="part-drive"><rect x="287" y="165" width="59" height="11" rx="3" fill="#819da3"/></g><g class="part-power"><circle cx="348" cy="194" r="4" fill="#a2c8b2"/></g></g><g class="part-peripheral"><path d="m63 210 134 0 15 17H48z" fill="#8dada7"/><path d="M68 217h125M92 212v10M113 212v10M135 212v10M157 212v10" stroke="#d3e4da" stroke-width="3"/><ellipse cx="233" cy="220" rx="13" ry="9" fill="#6d9290"/></g><g class="part-cable"><rect x="257" y="120" width="16" height="20" rx="3" fill="#b6a7ee"/><path d="M259 126h10m-10 8h10" stroke="#5a5279" stroke-width="2"/></g>${s?'<circle cx="352" cy="36" r="20" fill="#d0ef98"/><path d="m342 36 7 7 13-15" fill="none" stroke="#315b42" stroke-width="4"/>':""}</svg></div><div class="bench-display" role="status"><span class="bench-state-label">${s?t.referral?"\u2197 ENCAMINHAMENTO CONFERIDO":"\u2713 CONFER\xCANCIA CONCLU\xCDDA":r?t.referral?"\u2197 ENCAMINHAMENTO PREPARADO":"\u{1F527} CONSERTO APLICADO":t.screen}</span><p>${qt(s?t.referral?"O diagn\xF3stico continua com o professor.":"Resultado verificado na simula\xE7\xE3o.":r?t.referral?"Confira o registro antes de encaminhar.":"Agora repita o teste para conferir.":t.symptom)}</p></div>${n===0?`<div class="bench-observation ${a===_t(i)?"found":""}" role="status"><strong>${a===null?"SUA BANCADA":a===_t(i)?"PISTA ENCONTRADA":"RESULTADO DO TESTE"}</strong><p>${qt(c)}</p>${a!==null?`<small>${qt(t.actions[a].test)}</small>`:""}</div>`:""}${l&&n===0&&a!==_t(i)?'<p class="bench-pinned">\u2713 Voc\xEA j\xE1 encontrou a pista. Pode continuar.</p>':""}</aside>`}function Bu(i,e,t){let n=ji(i).actions[t],s=e.tested.includes(t);return`<div class="bench-action-wrap"><button class="test-card bench-action" data-test="${t}" aria-pressed="${e.lastTest===t}"><span class="letter">${s?"\u2713":"\u2315"}</span><span>${qt(n.test)}</span><span aria-hidden="true">\u2192</span></button><details class="bench-how"><summary>Como fazer</summary><p>${qt(i.steps[t][1])}</p></details></div>`}function zu(i,e,{feedback:t="",hint:n=!1}={}){let s=ji(i),r=In(e),a=_i(e),o=e.tested.includes(_t(i)),l="";if(r===0&&(l=`<h3>O que vamos testar?</h3><p class="bench-prompt">Toque em um teste. Veja o resultado no computador.</p><div class="bench-action-list">${s.actions.slice(0,3).map((u,p)=>Bu(i,e,p)).join("")}</div>${s.actions.length>3?`<details class="bench-more"><summary>Mais testes (${s.actions.length-3})</summary><div class="bench-action-list">${s.actions.slice(3).map((u,p)=>Bu(i,e,p+3)).join("")}</div></details>`:""}`),r===1){let u=e.stage>=4;l=`<h3>Como resolver?</h3><p class="bench-clue"><strong>O teste mostrou:</strong> ${qt(i.steps[_t(i)][0])}</p><div class="bench-action-list">${Su(i).sort((p,f)=>Math.sin(p*97+i.id*31)-Math.sin(f*97+i.id*31)).map(p=>`<div class="bench-action-wrap"><button class="choice bench-action ${u&&p===_t(i)?"validated":""}" data-choice="${p}" ${u?"disabled":""}><span class="letter">${u&&p===_t(i)?"\u2713":"\u{1F527}"}</span><span>${qt(s.actions[p].fix)}</span></button><details class="bench-how"><summary>Como fazer</summary><p>${qt(i.steps[p][2])}</p></details></div>`).join("")}</div>`}r===2&&(l=`<h3>Vamos conferir?</h3><p class="bench-prompt">${s.referral?"Confira as informa\xE7\xF5es para o pr\xF3ximo atendimento.":"Repita o teste que mostra se o atendimento deu certo."}</p><button class="primary bench-check" data-confirm-repair ${e.stage===6?"disabled":""}>${e.stage===6?"\u2713 Conferido":qt(s.check)+" \u2192"}</button>${e.stage===6?`<p class="bench-confirmed" role="status">${qt(Pr(i))}</p>`:'<p class="bench-small">O atendimento s\xF3 conta depois desta confer\xEAncia.</p>'}`);let c=r<a||r===0&&o,d=r===0?o?"Pista encontrada. Vamos consertar?":"Escolha um teste para come\xE7ar.":r===1?e.stage>=4?s.referral?"Encaminhamento preparado. Falta conferir.":"Conserto aplicado. Falta conferir.":"Escolha o conserto que combina com a pista.":e.stage===6?"Conferido! Veja sua recompensa.":"Toque no teste de confer\xEAncia.";return`<section class="bench-controls" aria-label="A\xE7\xF5es do chamado">${t?`<p class="feedback" role="status">${qt(t)}</p>`:""}${l}<p class="bench-safety-brief">${qt(Mu(i))}</p>${n?`<div class="note" role="status"><strong>Lia:</strong> ${qt(r===0?"Experimente: "+s.actions[_t(i)].test+".":r===1?"Use a pista para escolher: "+s.actions[_t(i)].fix+".":i.confirm)}</div>`:""}<div class="mission-tools"><button data-hint>\u2726 Uma pista da Lia</button></div><details class="bench-safety"><summary>Cuidados deste chamado</summary><p>${qt(i.note||"Preserve os dados. Siga o manual e pe\xE7a apoio ao professor antes de alterar o equipamento.")}</p><p>Interven\xE7\xE3o interna: computador desligado, fora da tomada e com o professor. Nunca abrir fonte ou monitor.</p></details><nav class="mission-navigation" aria-label="Navega\xE7\xE3o das etapas"><p id="stage-navigation-help" role="status">${d}</p><div class="stage-navigation-buttons"><button class="secondary" data-stage-back ${r===0?"disabled":""}>\u2190 Voltar</button><button class="primary" data-stage-next aria-describedby="stage-navigation-help" ${c?"":"disabled"}>${r===2?"Ver recompensa":"Continuar"} \u2192</button></div></nav></section>`}function ku(i){let e=In(i);return`<ol class="bench-steps" aria-label="Etapas do chamado">${Du.map((t,n)=>`<li ${n===e?'aria-current="step"':""} class="${n===e?"current":n<_i(i)?"done":""}"><span>${n<_i(i)?"\u2713":n+1}</span>${t}</li>`).join("")}</ol>`}function Vu({getState:i,save:e,openPanel:t,onMission:n,toast:s,icon:r,onReward:a}){let o=h=>document.querySelector(h),l="all",c="first-fix",d;function u(){return Ft(i())}function p(){let h=i(),_=u(),E=_.filter(A=>A.unlocked),y=_.find(A=>A.id===h.merit.featured&&A.unlocked),R=pl(h);o("#merit-count").textContent=`${E.length}/${Dr.length}`,o("#merit-hud-title").textContent=y?y.name:R.name,o("#merit-hud-points").textContent=`${R.points} pontos de m\xE9rito`;let C=o("#merit-profile");C.innerHTML=y?`<img src="merit/${y.image}.webp" alt="" width="40" height="40">`:"OB",C.title=y?"M\xE9rito em destaque: "+y.name:"Ver meus m\xE9ritos",C.setAttribute("aria-label",C.title);let T=_.find(A=>A.id===h.merit.tracked&&!A.unlocked)||_.filter(A=>!A.unlocked).sort((A,x)=>x.percent-A.percent)[0];h.merit.tracked&&T&&(document.querySelector("#quest-title").textContent=T.name,document.querySelector("#quest-desc").textContent=`Objetivo de m\xE9rito \xB7 ${T.value}/${T.goal}. ${T.description}`),o("#merit-hud-next").textContent=T?`${h.merit.tracked?"Objetivo":"Pr\xF3ximo"}: ${T.name} \xB7 ${T.value}/${T.goal}`:"Cole\xE7\xE3o de m\xE9ritos completa"}function f(){let h=i(),_=u().find(A=>A.id===c);if(!_)return;o("#merit-detail-image").src="merit/"+_.image+".webp",o("#merit-detail-image").classList.toggle("locked",!_.unlocked),o("#merit-detail-name").textContent=_.name,o("#merit-detail-description").textContent=_.description,o("#merit-detail-state").textContent=_.unlocked?"CONQUISTADO \xB7 +"+_.points+" PONTOS":"EM DESCOBERTA \xB7 "+_.points+" PONTOS",o("#merit-detail-progress").style.width=_.percent+"%",o("#merit-detail-counter").textContent=`${_.value} de ${_.goal} \xB7 ${_.unlocked?"conquista demonstrada na simula\xE7\xE3o":"progresso do crit\xE9rio"}`;let E=o("#merit-feature");E.hidden=!_.unlocked,E.disabled=h.merit.featured===_.id,E.textContent=E.disabled?"\u2713 Em destaque no perfil":"Exibir no meu perfil";let y=Lr(h,_),R=o("#merit-go");R.hidden=_.unlocked||!y,R.textContent=y&&h.records[y.id]?.stage===6?"Revisar um chamado \u2192":"Ir para uma miss\xE3o \u2192",o("#merit-unfeature").hidden=h.merit.featured!==_.id;let C=o("#merit-track");C.hidden=_.unlocked,C.textContent=h.merit.tracked===_.id?"Remover objetivo fixado":"Fixar como pr\xF3ximo objetivo",C.setAttribute("aria-pressed",String(h.merit.tracked===_.id));let T=It.find(A=>A.merit===_.id);o("#merit-reward").hidden=!T,T&&(o("#merit-reward-image").src="shop/"+T.id+".webp",o("#merit-reward-name").textContent=T.name,o("#merit-reward-status").textContent=h.shop.owned.includes(T.id)?"Na sua cole\xE7\xE3o":_.unlocked?"Resgate gratuito dispon\xEDvel":"Desbloqueia com este m\xE9rito",o("#merit-reward-open").textContent=h.shop.owned.includes(T.id)?"Ver na cole\xE7\xE3o \u2192":_.unlocked?"Resgatar recompensa \u2192":"Experimentar recompensa \u2192"),document.querySelectorAll("[data-merit-select]").forEach(A=>{A.classList.toggle("selected",A.dataset.meritSelect===_.id),A.setAttribute("aria-pressed",String(A.dataset.meritSelect===_.id))})}function g(){let h=u().filter(_=>l==="all"||l==="earned"&&_.unlocked||l==="pending"&&!_.unlocked||_.category===l);o("#merit-results").textContent=`${h.length} ${h.length===1?"m\xE9rito":"m\xE9ritos"}`,o("#merit-cards").innerHTML=h.map(_=>`<button class="merit-card ${_.unlocked?"earned":"pending"} ${c===_.id?"selected":""}" style="--medal-color:${_.color}" data-merit-select="${_.id}" aria-pressed="${c===_.id}"><span class="medal-art"><img src="merit/${_.image}.webp" alt="" width="256" height="256" loading="lazy"><span class="medal-state">${_.unlocked?"\u2713 CONQUISTADO":i().merit.tracked===_.id?"OBJETIVO":_.value+"/"+_.goal}</span></span><strong>${_.name}</strong><span class="medal-points">${_.points} pontos <span>${_.unlocked?"Ver conquista":"Ver objetivo"} \u2197</span></span><span class="medal-track"><i style="width:${_.percent}%"></i></span></button>`).join("")||'<p class="dialog-copy">Nenhuma conquista neste filtro por enquanto. Cada chamado \xE9 um novo passo.</p>'}function b(h=null){let _=i(),E=u(),y=pl(_),R=E.filter(x=>x.unlocked),C=E.find(x=>x.id===_.merit.featured),T=E.filter(x=>!x.unlocked).sort((x,v)=>v.percent-x.percent)[0];c=E.some(x=>x.id===h)?h:C?.id||T?.id||E.at(-1).id;let A=y.next?(y.points-y.at)/(y.next.at-y.at)*100:100;t("Cada descoberta deixa uma marca.","SEUS M\xC9RITOS \xB7 CONQUISTAS DO CAMPUS",`<div class="merit-hero"><div><p class="eyebrow">${y.name}</p><h3>Seu conhecimento<br>ganhou novas formas.</h3><p>Investigar, pedir apoio e concluir etapas tamb\xE9m s\xE3o conquistas. Escolha uma medalha para conhecer seu pr\xF3ximo objetivo.</p><div class="merit-rank-track"><i style="width:${A}%"></i></div><small>${y.next?`${y.next.at-y.points} pontos para ${y.next.name}`:"Voc\xEA alcan\xE7ou o \xFAltimo t\xEDtulo do campus."}</small></div><div class="merit-stat"><strong>${R.length}<span>/${Dr.length}</span></strong><span>medalhas conquistadas</span><b>${y.points} pontos de m\xE9rito</b></div></div><section class="merit-detail" aria-label="Detalhes do m\xE9rito"><div class="merit-detail-art"><img id="merit-detail-image" alt="" width="200" height="200"></div><div class="merit-detail-copy"><p class="eyebrow" id="merit-detail-state"></p><h3 id="merit-detail-name"></h3><p id="merit-detail-description"></p><div class="merit-detail-track"><i id="merit-detail-progress"></i></div><small id="merit-detail-counter"></small><div class="actions"><button id="merit-feature" class="primary"></button><button id="merit-go" class="primary"></button><button id="merit-track" class="secondary" aria-pressed="false">Fixar objetivo</button><button id="merit-unfeature" class="secondary">Retirar destaque</button></div><div class="merit-reward" id="merit-reward" hidden><img id="merit-reward-image" alt="" width="68" height="68"><div><span class="eyebrow">RECOMPENSA EXCLUSIVA</span><strong id="merit-reward-name"></strong><small id="merit-reward-status"></small><button id="merit-reward-open"></button></div></div></div></section><div class="merit-filter-row"><div class="merit-filters" aria-label="Filtrar m\xE9ritos">${Object.entries({all:"Todos",earned:"Conquistados",pending:"Em progresso",metodo:"M\xE9todo",estacoes:"Esta\xE7\xF5es",jornada:"Jornada"}).map(([x,v])=>`<button data-merit-filter="${x}" class="${x===l?"selected":""}" aria-pressed="${x===l}">${v}</button>`).join("")}</div><span id="merit-results"></span></div><div id="merit-cards" class="merit-grid"></div><p class="note">Os m\xE9ritos reconhecem o percurso na simula\xE7\xE3o. S\xE3o conquistados por crit\xE9rios vis\xEDveis, sem compra e sem consumir XP ou cr\xE9ditos. Seu progresso anterior tamb\xE9m conta.</p>`,"merits"),g(),f(),o("#merit-track").onclick=()=>{Tu(_,_.merit.tracked===c?null:c),e(),g(),f(),s(_.merit.tracked?"Objetivo fixado no painel do campus.":"Objetivo retirado do painel.")},o("#merit-reward-open").onclick=()=>{let x=It.find(v=>v.merit===c);x&&a?.(x.id)},o("#merit-feature").onclick=()=>{gl(_,c)&&(e(),f(),s("Medalha em destaque no seu perfil."))},o("#merit-unfeature").onclick=()=>{gl(_,null),e(),f(),s("Destaque retirado. A medalha continua na cole\xE7\xE3o.")},o("#merit-go").onclick=()=>{let x=Lr(_,u().find(v=>v.id===c));x&&n(x.id,_.records[x.id]?.stage===6)}}o("#panel-content").addEventListener("click",h=>{if(!o("#panel").classList.contains("merit-dialog"))return;let _=h.target.closest("button");_&&(_.dataset.meritSelect?(c=_.dataset.meritSelect,f()):_.dataset.meritFilter&&(l=_.dataset.meritFilter,document.querySelectorAll("[data-merit-filter]").forEach(E=>{E.classList.toggle("selected",E===_),E.setAttribute("aria-pressed",String(E===_))}),g(),f()))});function m(h){if(!h.length)return;let _=[...h].sort((y,R)=>R.points-y.points)[0],E=o("#merit-notice");E.innerHTML=`<img src="merit/${_.image}.webp" alt="" width="76" height="76"><div><span class="eyebrow">NOVA CONQUISTA</span><strong>${_.name}</strong><p>+${_.points} pontos de m\xE9rito${h.length>1?` \xB7 e mais ${h.length-1} ${h.length===2?"medalha":"medalhas"}`:""}</p><button data-open-merits="${_.id}">Ver meus m\xE9ritos \u2192</button></div><button class="merit-dismiss" data-merit-dismiss aria-label="Fechar aviso">${r("close")}</button>`,E.hidden=!1,clearTimeout(d),d=setTimeout(()=>E.hidden=!0,8e3)}return document.addEventListener("click",h=>{let _=h.target.closest("button");_&&(_.hasAttribute("data-open-merits")&&(b(_.dataset.openMerits),o("#merit-notice").hidden=!0),_.hasAttribute("data-merit-dismiss")&&(o("#merit-notice").hidden=!0))}),{show:b,notify:m,updateHUD:p}}var Sl="amc-mundo-theme-v1";function Hu({onChange:i=()=>{},icon:e=()=>""}={}){let t=matchMedia("(prefers-color-scheme: dark)"),n="system",s="light";try{let o=localStorage.getItem(Sl);["light","dark","system"].includes(o)&&(n=o)}catch{}function r(){s=n==="system"?t.matches?"dark":"light":n,document.documentElement.dataset.theme=s,document.documentElement.style.colorScheme=s;let o=document.querySelector("#theme-toggle");o&&(o.dataset.icon=s==="dark"?"sun":"moon",o.innerHTML=e(o.dataset.icon),o.setAttribute("aria-label",s==="dark"?"Ativar modo claro":"Ativar modo escuro"),o.setAttribute("aria-pressed",String(s==="dark")),o.title=s==="dark"?"Ativar modo claro":"Ativar modo escuro"),i(s)}let a={get active(){return s},get choice(){return n},set(o){if(["light","dark","system"].includes(o)){n=o;try{localStorage.setItem(Sl,n)}catch{}r()}}};return document.querySelector("#theme-toggle")?.addEventListener("click",()=>a.set(s==="dark"?"light":"dark")),t.addEventListener?.("change",()=>{n==="system"&&r()}),addEventListener("storage",o=>{o.key===Sl&&(n=["light","dark","system"].includes(o.newValue)?o.newValue:"system",r())}),r(),a}var Ur=new U;function gn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ur.copy(e),Ur[n]=0,Ur.normalize();let c=.5*a/(a+o),d=1-Ur.angleTo(i)/l;return Math.sign(Ur[t])===1?d*c:o/(a+o)+c+c*(1-d)}var zo=class i extends tn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,d=new U(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,b=new U,m=.5/a;for(let h=0,_=0;h<u.length;h+=3,_+=2)switch(l.fromArray(u,h),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[h+0]=d.x*Math.sign(l.x)+c.x*r,u[h+1]=d.y*Math.sign(l.y)+c.y*r,u[h+2]=d.z*Math.sign(l.z)+c.z*r,p[h+0]=c.x,p[h+1]=c.y,p[h+2]=c.z,Math.floor(h/g)){case 0:b.set(1,0,0),f[_+0]=gn(b,c,"z","y",r,n),f[_+1]=1-gn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),f[_+0]=1-gn(b,c,"z","y",r,n),f[_+1]=1-gn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),f[_+0]=1-gn(b,c,"x","z",r,e),f[_+1]=gn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),f[_+0]=1-gn(b,c,"x","z",r,e),f[_+1]=1-gn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),f[_+0]=1-gn(b,c,"x","y",r,e),f[_+1]=1-gn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),f[_+0]=gn(b,c,"x","y",r,e),f[_+1]=1-gn(b,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var kv={height:2.84,torsoWidth:1.04,torsoHeight:1.04,armWidth:.48,armHeight:1.02,legWidth:.48,legHeight:1,headWidth:.76,headHeight:.68,footBottom:0},El=new Map;function ko(i="#527f65",e="#d3a077",t="#44372d",n=null){let s=n||(b=>new nn({color:b,roughness:.58,metalness:0})),r=new Et,a=[],o=[];function l(b,m,h,_,E,y,R,C,T=r,A=.035){let x=[m,h,_,A].join(",");if(!El.has(x)){let P=new zo(m,h,_,1,A);P.userData.sharedAvatar=!0,El.set(x,P)}let v=new Ke(El.get(x),s(E));return v.name=b,v.position.set(y,R,C),v.castShadow=!0,v.receiveShadow=!0,T.add(v),v}let c=l("avatar-torso",1.04,1.04,.56,i,0,1.52,0);o.push(c);let d=new Ke(new Gt(.17,.17,.12,12),s(e));d.position.y=2.08,d.castShadow=!0,r.add(d);let u=new Ke(new Gt(.38,.38,.68,16),s(e));u.name="avatar-head",u.position.set(0,2.44,0),u.castShadow=!0,u.receiveShadow=!0,r.add(u),l("avatar-hair",.79,.14,.73,t,0,2.77,-.025,r,.06),l("avatar-hair-back",.72,.27,.17,t,0,2.63,-.3,r,.03),l("avatar-hair-fringe",.39,.11,.12,t,-.15,2.7,.31,r,.025);for(let b of[-1,1]){let m=new Et;m.name=b<0?"avatar-arm-left":"avatar-arm-right",m.position.set(b*.78,2.03,0),r.add(m),o.push(l("avatar-sleeve",.48,.72,.56,i,0,-.36,0,m)),l("avatar-hand",.46,.3,.54,e,0,-.87,0,m);let h=new Et;h.name=b<0?"avatar-leg-left":"avatar-leg-right",h.position.set(b*.265,1,0),r.add(h),l("avatar-trouser",.48,.91,.54,"#304b62",0,-.455,0,h),l("avatar-shoe",.5,.16,.64,"#f4f2e8",0,-.92,.045,h,.025),l("avatar-shoe-sole",.51,.045,.65,"#c9cec4",0,-.9775,.045,h,.012),a.push(m,h)}for(let b of[-1,1]){let m=new Ke(new Bi(.043,8,6),s("#292c2c"));m.scale.set(1,1.2,.35),m.position.set(b*.13,2.47,.36),r.add(m)}let p=new Fi(new U(-.14,2.34,.36),new U(0,2.23,.39),new U(.14,2.34,.36)),f=new Ke(new vr(p,12,.012,5,!1),s("#694634"));r.add(f),l("avatar-pocket",.25,.25,.025,"#b9d4ab",.245,1.68,.293,r,.016),l("avatar-badge",.15,.065,.014,"#f1f5dc",.245,1.72,.313,r,.006),l("avatar-back-mark",.32,.055,.018,"#c1dcc4",0,1.81,-.292,r,.008),l("avatar-back-mark-small",.19,.035,.018,"#9cc4ae",0,1.71,-.292,r,.006),l("avatar-shirt-seam",.015,.68,.012,"#719479",0,1.54,.285,r,.004);let g=new Ke(new hr(.74,24),new Un({color:"#53694a",transparent:!0,opacity:.16,depthWrite:!1}));return g.rotation.x=-Math.PI/2,g.position.y=.012,r.add(g),r.userData.bodyHeight=kv.height,{group:r,torso:c,limbs:a,shirtMeshes:o}}function Al(i){let e=new Et;e.name="gear-"+i.id;let t=new nn({color:i.color,roughness:.45,metalness:.12}),n=new nn({color:"#304251",roughness:.6}),s=new nn({color:i.color,emissive:i.color,emissiveIntensity:.7,roughness:.3}),r=(o,l,c,d,u)=>{let p=new Ke(o,l);return p.position.set(c,d,u),p.castShadow=!0,e.add(p),p},a=(o,l,c,d,u,p,f)=>r(new tn(o,l,c),d,u,p,f);if(i.kind==="visor")a(.83,.22,.09,t,0,2.52,.37),a(.65,.12,.025,n,0,2.52,.425),a(.12,.025,.03,s,-.2,2.55,.445);else if(i.kind==="cap"||i.kind==="hardhat")r(new Bi(.43,16,8,0,Math.PI*2,0,Math.PI/2),t,0,2.75,0),i.kind==="cap"?a(.74,.07,.36,t,0,2.77,.38):(r(new Gt(.49,.49,.08,16),t,0,2.78,0),a(.1,.23,.8,t,0,2.96,0));else if(i.kind==="headphones"){r(new As(.46,.055,6,20,Math.PI),n,0,2.53,0);for(let o of[-1,1])a(.14,.36,.31,t,o*.43,2.46,0)}else if(i.category==="back"){for(let o of[-1,1])a(.06,.82,.035,n,o*.31,1.56,.3);if(i.kind==="jetpack"){a(.53,.66,.2,n,0,1.61,-.42);for(let o of[-1,1])r(new Gt(.16,.14,.8,10),t,o*.32,1.62,-.48),r(new Ni(.13,.24,10),s,o*.32,1.13,-.48).rotation.z=Math.PI}else a(.78,.88,.32,t,0,1.55,-.47),a(.56,.26,.12,n,0,1.29,-.68),a(.1,.1,.02,s,.19,1.68,-.64),i.kind==="toolpack"&&(a(.08,.42,.08,n,-.18,2.07,-.46),a(.24,.09,.09,t,-.18,2.24,-.46))}else{let o=r(new As(.98,.035,6,48),s,0,.08,0);o.rotation.x=-Math.PI/2;let l=i.kind==="cosmic"?8:6;for(let c=0;c<l;c++){let d=c*Math.PI*2/l,u=i.kind==="orbit"?1:1.08,p=r(i.kind==="cosmic"?new gr(.075):new tn(.085,.085,.085),s,Math.cos(d)*u,.25+c%3*.16,Math.sin(d)*u);p.rotation.z=d}e.userData.animated=!0}return e}function Bs(i,e={}){let t=i.group.getObjectByName("shop-accessories");if(t){i.group.remove(t);let s=new Set,r=new Set;t.traverse(a=>{a.geometry&&s.add(a.geometry),a.material&&r.add(a.material)}),s.forEach(a=>a.dispose()),r.forEach(a=>a.dispose())}let n=new Et;n.name="shop-accessories";for(let s of Object.values(e)){let r=It.find(a=>a.id===s);r&&n.add(Al(r))}return i.group.add(n),n}function Vo(i,e,t=!1){if(i)for(let n of i.children)n.userData.animated&&(n.rotation.y=t?0:e*.7)}function Gu(i,{shirt:e,equipped:t,dark:n=!1,low:s=!1}){let r;try{r=new Ns({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}r.setPixelRatio(Math.min(devicePixelRatio,s?1:1.5)),r.outputColorSpace=At,r.toneMapping=ws;let a=new Oi,o=new Rt(38,1,.1,30);o.position.set(0,1.9,6.2),o.lookAt(0,1.45,0),a.add(new ki("#efffff","#43515e",2.4));let l=new Vi("#ffffff",3);l.position.set(-3,5,4),a.add(l);let c=ko(e);a.add(c.group);let d=Bs(c,t),u=-.3,p=!0,f=null,g=!0,b,m=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new Ke(new Gt(1.35,1.5,.12,40),new nn({color:n?"#344f48":"#d6e3c8",roughness:.75}));h.position.y=-.075,a.add(h),r.domElement.setAttribute("aria-label","Pr\xE9via 3D do seu avatar. Arraste para girar."),i.append(r.domElement),i.classList.add("preview-ready");function _(){let T=Math.max(i.clientWidth,240),A=Math.max(i.clientHeight,290);r.setSize(T,A),o.aspect=T/A,o.updateProjectionMatrix()}let E=new ResizeObserver(_);E.observe(i),_(),r.domElement.addEventListener("pointerdown",T=>{f={id:T.pointerId,x:T.clientX},r.domElement.setPointerCapture?.(T.pointerId),p=!1}),r.domElement.addEventListener("pointermove",T=>{f?.id===T.pointerId&&(u+=(T.clientX-f.x)*.013,f.x=T.clientX)});for(let T of["pointerup","pointercancel","lostpointercapture"])r.domElement.addEventListener(T,()=>f=null);let y=performance.now(),R=0;function C(T){if(!g)return;let A=Math.min((T-y)/1e3,.05);y=T,R+=A,p&&!m&&(u+=A*.3),c.group.rotation.y=u,Vo(d,R,m),r.render(a,o),b=requestAnimationFrame(C)}return b=requestAnimationFrame(C),{update(T,A){c.shirtMeshes.forEach(x=>x.material.color.set(T)),d=Bs(c,A)},toggle(){return p=!p,p},dispose(){g=!1,cancelAnimationFrame(b),E.disconnect();let T=new Set,A=new Set;a.traverse(x=>{x.geometry&&!x.geometry.userData.sharedAvatar&&T.add(x.geometry),x.material&&A.add(x.material)}),T.forEach(x=>x.dispose()),A.forEach(x=>x.dispose()),r.dispose(),r.domElement.remove()}}}function Wu({getState:i,save:e,onEquip:t,openPanel:n,toast:s,icon:r,onMission:a,onMerit:o}){let l=T=>document.querySelector(T),c=[...It,...Oo,...Rn.map((T,A)=>({...T,id:"uniform-"+A,category:"uniform",price:0,tag:"UNIFORME DO CAMPUS",description:"Uma nova cor para vestir a experi\xEAncia que voc\xEA construiu.",skin:A}))],d="visor-lime",u="all",p=null,f=!1,g=T=>T.category==="looks"?T.items.every(A=>i().shop.owned.includes(A)):T.category==="uniform"?xi(i())>=T.xp:i().shop.owned.includes(T.id),b=T=>T.category==="looks"?i().skin===T.skin&&T.items.every(A=>i().shop.equipped[It.find(x=>x.id===A).category]===A):T.category==="uniform"?i().skin===T.skin:i().shop.equipped[T.category]===T.id;function m(){f=!1,p?.dispose(),p=null}l("#panel").addEventListener("close",m);function h(T){let A=i(),x={...A.shop.equipped},v=Rn[A.skin].color;if(T.category==="looks"){v=Rn[T.skin].color;for(let P of T.items)x[It.find(N=>N.id===P).category]=P}else T.category==="uniform"?v=T.color:x[T.category]=T.id;return{shirt:v,equipped:x}}function _(T){c.some(A=>A.id===T)&&(d=T,y(),l("#shop-cards").querySelectorAll("[data-shop-select]").forEach(A=>{A.classList.toggle("is-selected",A.dataset.shopSelect===d),A.setAttribute("aria-pressed",String(A.dataset.shopSelect===d))}))}function E(){let T=c.filter(A=>u==="all"||u==="rewards"&&!!A.merit||u==="owned"&&g(A)||u==="favorites"&&i().shop.wishlist.includes(A.id)||A.category===u);l("#shop-count").textContent=`${T.length} visuais`,l("#shop-cards").innerHTML=T.map(A=>`<button class="shop-item ${d===A.id?"is-selected":""}" data-shop-select="${A.id}" aria-pressed="${d===A.id}"><span class="item-picture" style="--item-color:${A.color}"><img src="shop/${A.id}.webp" alt="" loading="lazy" width="350" height="350"><span class="item-state">${b(A)?"\u2713 EM USO":g(A)?"NA COLE\xC7\xC3O":A.merit?"\u2605 M\xC9RITO":xi(i())<A.xp?"\u25C8 "+A.xp+" XP":""}</span></span><span class="item-name">${A.name}</span><span class="item-price">${A.merit?"RESGATE GR\xC1TIS":A.category==="uniform"?A.xp?A.xp+" XP":"INCLU\xCDDO":r("coin")+(A.category==="looks"?Fo(i(),A):A.price)}<span>Experimentar \u2197</span></span></button>`).join("")||'<p class="dialog-copy">Sua cole\xE7\xE3o come\xE7a com uma descoberta. Experimente um item para conhecer os detalhes.</p>'}function y(){let T=i(),A=c.find(ge=>ge.id===d),x=xi(T),v=g(A),P=b(A),N=!No(T,A),k=A.merit?Ft(T).find(ge=>ge.id===A.merit):null,$=A.category==="looks"?Fo(T,A):A.price;l("#shop-balance").textContent=Qn(T),l("#shop-owned").textContent=T.shop.owned.length,l("#shop-tag").textContent=A.tag,l("#shop-name").textContent=A.name,l("#shop-description").textContent=A.description,l("#shop-preview-image").src="shop/"+A.id+".webp",l("#shop-preview-image").alt="Pr\xE9via de "+A.name;let j=l("#shop-requirement");j.textContent=N&&k?`Conquiste ${k.name}: ${k.value} de ${k.goal}.`:N?`Mais ${A.xp-x} XP para liberar este item. Continue investigando!`:P?"Este item j\xE1 acompanha voc\xEA no campus.":v?"J\xE1 faz parte da sua cole\xE7\xE3o. Equipe quando quiser.":"Experimente sem compromisso. O item s\xF3 \xE9 adquirido pelo bot\xE3o abaixo.",l("#shop-progress").style.width=`${k?k.percent:A.xp?Math.min(100,x/A.xp*100):100}%`;let Y=l("#shop-action");Y.disabled=N||P||!v&&Qn(T)<$,Y.textContent=N&&k?`Requer ${k.name}`:N?`Libera em ${A.xp} XP`:P?"\u2713 Equipado":v?"Equipar no avatar":A.merit?"Resgatar e equipar \xB7 gr\xE1tis":Qn(T)<$?`Faltam ${$-Qn(T)} cr\xE9ditos`:`Adquirir e equipar \xB7 ${$} cr\xE9ditos`,l("#shop-remove").hidden=["uniform","looks"].includes(A.category)||!P;let oe=T.shop.wishlist.includes(A.id);l("#shop-favorite").textContent=oe?"\u2665 Nos favoritos":"\u2661 Guardar nos favoritos",l("#shop-favorite").setAttribute("aria-pressed",String(oe));let H=Math.max(Math.ceil(Math.max(0,A.xp-x)/100),Math.ceil(Math.max(0,$-Qn(T))/40));l("#shop-goal").hidden=H===0&&!(N&&k),l("#shop-earn").textContent=k?"Ver objetivo do m\xE9rito \u2192":"Ir para a pr\xF3xima miss\xE3o \u2192",l("#shop-goal-text").textContent=N&&k?`Este visual \xE9 conquistado com ${k.name}.`:`Sua meta est\xE1 a ${H} ${H===1?"miss\xE3o":"miss\xF5es"} de dist\xE2ncia.`,l("#shop-credit-note").textContent=`${x/100} miss\xF5es conclu\xEDdas \xB7 40 cr\xE9ditos por nova miss\xE3o \xB7 100 cr\xE9ditos iniciais`;let te=c.filter(ge=>ge.xp>x).sort((ge,Be)=>ge.xp-Be.xp)[0];l("#shop-next").textContent=te?`Sua pr\xF3xima descoberta: ${te.name} em ${te.xp} XP.`:"Voc\xEA liberou todos os requisitos de XP. Escolha seu pr\xF3ximo visual.";let fe=h(A);p?.update(fe.shirt,fe.equipped)}function R(){E(),y()}function C(T=null){c.some(v=>v.id===T)&&(d=T,u="all"),m(),n("Seu pr\xF3ximo visual come\xE7a aqui.","GALERIA SHOP \xB7 FEITO DE CONQUISTAS",`<div class="shop-summary"><span class="shop-wallet">${r("coin")}<strong id="shop-balance"></strong><span>cr\xE9ditos</span></span><span><b id="shop-owned">0</b> acess\xF3rios na cole\xE7\xE3o</span><span class="shop-no-money">Conquistas do campus</span></div><div class="shop-layout"><section class="shop-preview-panel" aria-label="Experimentador de avatar"><div class="shop-preview" id="shop-preview"><div class="shop-preview-fallback"><img id="shop-preview-image" alt="" width="350" height="350"></div><span class="preview-label">PROVADOR \xB7 EXPERIMENTE</span></div><button class="preview-spin" id="shop-spin" aria-pressed="true">${r("globe")} Pausar giro</button><div class="shop-detail"><p class="eyebrow" id="shop-tag"></p><h3 id="shop-name"></h3><p id="shop-description"></p><div class="shop-unlock-track"><i id="shop-progress"></i></div><p class="shop-requirement" id="shop-requirement" role="status"></p><button id="shop-action" class="primary"></button><button id="shop-remove" class="secondary" hidden>Retirar acess\xF3rio</button><button id="shop-favorite" class="shop-favorite" aria-pressed="false"></button><div id="shop-goal" class="shop-goal" hidden><span id="shop-goal-text"></span><button id="shop-earn">Ir para a pr\xF3xima miss\xE3o \u2192</button></div></div></section><section class="shop-catalog" aria-label="Cat\xE1logo da loja"><div class="shop-catalog-heading"><div><span class="eyebrow">ESCOLHA. EXPERIMENTE. COMBINE.</span><h3>Uma cole\xE7\xE3o com a sua cara.</h3></div><span id="shop-count"></span></div><div class="shop-filters" aria-label="Categorias">${Object.entries(wu).map(([v,P])=>`<button data-shop-filter="${v}" class="${u===v?"selected":""}" aria-pressed="${u===v}">${P}</button>`).join("")}</div><div id="shop-cards" class="shop-grid"></div><div class="shop-next">${r("spark")}<span id="shop-next"></span></div></section></div><p class="note" id="shop-credit-note"></p>`,"shop"),f=!0,R();let A=c.find(v=>v.id===d),x=h(A);p=Gu(l("#shop-preview"),{...x,dark:document.documentElement.dataset.theme==="dark",low:i().quality==="low"}),p||(l("#shop-spin").hidden=!0,l("#shop-preview").classList.add("static-preview")),l("#shop-action").onclick=()=>{let v=c.find(N=>N.id===d),P=i();if(v.category==="looks"){let N=Iu(P,v.id);if(s(N.message),!N.ok)return}else if(v.category==="uniform"){if(xi(P)<v.xp)return;P.skin=v.skin,s("Uniforme "+v.name+" equipado.")}else if(g(v)){if(!xl(P,v.id))return;s(v.name+" equipado.")}else{let N=Ru(P,v.id);if(s(N.message),!N.ok)return}t(),e(),R(),matchMedia("(prefers-reduced-motion: reduce)").matches||l("#shop-action").animate?.([{transform:"scale(.95)"},{transform:"scale(1)"}],{duration:220})},l("#shop-favorite").onclick=()=>{let v=i().shop.wishlist,P=v.indexOf(d);P<0?v.push(d):v.splice(P,1),e(),R()},l("#shop-earn").onclick=()=>{let v=c.find(P=>P.id===d);v.merit?o?.(v.merit):a?.()},l("#shop-remove").onclick=()=>{let v=c.find(P=>P.id===d);i().shop.equipped[v.category]=null,t(),e(),R(),s("Acess\xF3rio guardado na sua cole\xE7\xE3o.")},l("#shop-spin").onclick=()=>{let v=p?.toggle();l("#shop-spin").setAttribute("aria-pressed",String(v)),l("#shop-spin").innerHTML=r("globe")+(v?" Pausar giro":" Girar avatar")}}return l("#panel-content").addEventListener("click",T=>{if(!f)return;let A=T.target.closest("button");if(A)if(A.dataset.shopFilter){u=A.dataset.shopFilter,l("#panel-content").querySelectorAll("[data-shop-filter]").forEach(v=>{v.classList.toggle("selected",v===A),v.setAttribute("aria-pressed",String(v===A))});let x=c.filter(v=>u==="all"||u==="rewards"&&!!v.merit||u==="owned"&&g(v)||u==="favorites"&&i().shop.wishlist.includes(v.id)||v.category===u);x.length&&!x.some(v=>v.id===d)&&(d=x[0].id),R()}else A.dataset.shopSelect&&_(A.dataset.shopSelect)}),{show:C,dispose:m}}var yi={distance:6.8,pitch:.32,focusHeight:1.72,desktopFov:65,mobileFov:70},Ho=class{constructor(e,t=[]){this.camera=e,this.obstacles=t,this.yaw=0,this.pitch=yi.pitch,this.distance=yi.distance,this.actualDistance=yi.distance,this.target=new U,this.initialized=!1,this.ray=new Hi,this.ray.near=0,this.offset=new U,this.direction=new U,this.origin=new U,this.right=new U,this.up=new U,this.focus=new U,this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]]}rotate(e,t){this.yaw=qi.euclideanModulo(this.yaw-e*.006+Math.PI,Math.PI*2)-Math.PI,this.pitch=qi.clamp(this.pitch+t*.004,.16,1.08)}zoom(e){Number.isFinite(e)&&e>0&&(this.distance=qi.clamp(this.distance*e,4,15))}recenter(e=Math.PI){this.yaw=e-Math.PI,this.pitch=yi.pitch}movement(e,t){let n=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*n+t*s,z:-e*s+t*n}}update(e,t,{snap:n=!1,reducedMotion:s=!1}={}){this.focus.copy(e),this.focus.y+=yi.focusHeight,n||!this.initialized||s?this.target.copy(this.focus):this.target.lerp(this.focus,1-Math.exp(-14*t)),this.initialized=!0;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.sin(this.pitch),l=Math.cos(this.pitch);this.direction.set(r*l,o,a*l),this.right.set(a,0,-r),this.up.set(-r*o,l,-a*o);let c=this.distance;for(let[d,u]of this.sampleOffsets){this.origin.copy(this.target).addScaledVector(this.right,d).addScaledVector(this.up,u),this.ray.set(this.origin,this.direction),this.ray.far=this.distance+.35;let p=this.ray.intersectObjects(this.obstacles,!1)[0];p&&(c=Math.min(c,Math.max(.6,p.distance-.4)))}n||c<this.actualDistance||s?this.actualDistance=c:this.actualDistance=qi.lerp(this.actualDistance,c,1-Math.exp(-5*t)),this.offset.copy(this.direction).multiplyScalar(this.actualDistance),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}};function qu(i,e,{onTap:t=()=>{},blocked:n=()=>!1}={}){let s=new Map,r=0,a=()=>{let[f,g]=[...s.values()];return f&&g?Math.hypot(f.x-g.x,f.y-g.y):0},o=f=>{n()||f.button===1||(f.preventDefault(),s.set(f.pointerId,{x:f.clientX,y:f.clientY,startX:f.clientX,startY:f.clientY,button:f.button,moved:!1}),i.setPointerCapture?.(f.pointerId),s.size>1&&(s.forEach(g=>g.moved=!0),r=a()))},l=f=>{let g=s.get(f.pointerId);if(!g||n())return;f.preventDefault();let b=f.clientX-g.x,m=f.clientY-g.y;if(g.x=f.clientX,g.y=f.clientY,s.size>1){let h=a();r>0&&h>0&&e.zoom(r/h),r=h;return}!g.moved&&Math.hypot(g.x-g.startX,g.y-g.startY)>5?(g.moved=!0,e.rotate(g.x-g.startX,g.y-g.startY)):g.moved&&e.rotate(b,m)},c=f=>{let g=s.get(f.pointerId);if(!g)return;s.delete(f.pointerId),r=0;let b=g.moved||Math.hypot(f.clientX-g.startX,f.clientY-g.startY)>5;f.type==="pointerup"&&!b&&g.button===0&&!n()&&t(f.clientX,f.clientY),i.hasPointerCapture?.(f.pointerId)&&i.releasePointerCapture(f.pointerId)},d=f=>{n()||(f.preventDefault(),e.zoom(Math.exp(qi.clamp(f.deltaY,-200,200)*.0015)))},u=f=>f.preventDefault(),p=()=>{s.clear(),r=0};i.addEventListener("pointerdown",o),i.addEventListener("pointermove",l);for(let f of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(f,c);return i.addEventListener("wheel",d,{passive:!1}),i.addEventListener("contextmenu",u),{cancel:p}}var Or={bodyRadius:.5,deskTop:1.665,wallTop:3.76,walkSpeed:5.3};function Xu(i,e,t){if(t.some(s=>Math.abs(i-s.x)<=3.6&&Math.abs(e-s.z)<=2.85))return .39;let n=Math.hypot(i,e-1.2);return n<=1.25?.39:n<=3.1?.315:n<=4.1?.28:Math.abs(i)<=2.15&&e>=-13.7&&e<=13.3||Math.abs(i)<=14.5&&Math.abs(e)<=1.9?.195:Math.abs(i)<=10.5&&Math.abs(e-7.1)<=1.65?.19:.13}var ue=i=>document.querySelector(i),zn=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dt=i=>String(i).padStart(2,"0"),$u={trophy:"M8 3h8v7a4 4 0 0 1-8 0z M8 5H4v3a4 4 0 0 0 4 4 M16 5h4v3a4 4 0 0 1-4 4 M12 14v5 M8 21h8 M9 19h6",shop:"M3 9h18l-2-6H5z M4 9v12h16V9 M9 21v-7h6v7 M3 9c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0",coin:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9 M12 6v2 M12 16v2",moon:"M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5l1.5-1.5",monitor:"M3 4h18v13H3z M8 21h8 M12 17v4",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18",flag:"M5 21V3 M5 4c5-4 9 4 14 0v10c-5 4-9-4-14 0",book:"M3 4c3-1 6 0 9 2 3-2 6-3 9-2v15c-3-1-6 0-9 2-3-2-6-3-9-2z M12 6v15",user:"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",spark:"m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7z",library:"M4 4h4v16H4z M11 4h3v16h-3z m6 1 3-1 3 15-3 1z",pin:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0 M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",map:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16",home:"m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9",close:"m6 6 12 12 M6 18 18 6",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2 M12 17h.01",settings:"m9 3-.5 3-2 1-2.5-1-2 3 2 2v2l-2 2 2 3 2.5-1 2 1 .5 3h6l.5-3 2-1 2.5 1 2-3-2-2v-2l2-2-2-3-2.5 1-2-1L15 3z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",bolt:"m13 2-9 12h7l-1 8 10-13h-7z",cpu:"M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3",layers:"m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",tool:"m14 6-3 3 4 4 3-3c4 7-3 10-7 6l-6 6-3-3 6-6C4 5 9 0 14 6",hand:"M8 12V5a2 2 0 0 1 4 0v7 M12 9a2 2 0 0 1 4 0v3 M16 10a2 2 0 0 1 4 0v5c0 4-3 6-6 6h-2c-3 0-4-2-5-4l-3-5c-1-2 1-3 3-1l3 3",check:"m5 12 4 4L20 5"},xn=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${$u[i]||$u.monitor}"/></svg>`;function Zu(){document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=xn(i.dataset.icon))}var Yt=yu.map((i,e)=>({...i,short:["Conex\xF5es essenciais","Ajustes & desempenho","Sistema & dados","Dentro do gabinete","Detetives de hardware"][e],icon:["bolt","settings","layers","cpu","tool"][e],color:["#8baf58","#c99a59","#739eaa","#9c87b1","#cf8e79"][e],soft:["#eaf0db","#f4e9d7","#e3edf0","#ece7f2","#f7e7df"][e],x:[-9,0,9,-6,6][e],z:[-5,-9,-5,6,6][e]})),be=yl(),ks=!0;try{let i=localStorage.getItem(_l);i&&(be=bl(JSON.parse(i)))}catch{ks=!1}var bi=null,vn=0,Si="",zs=!1,Tl="",Ju=null,Yu,ft=null,rn=null,yt=null,Go=null,Ei=null,ti=null;ml(be);var Nr=Hu({icon:xn,onChange:i=>ft?.setTheme(i)}),Mi=i=>be.records[i.id]||=Lu(),Br=()=>je.filter(i=>be.records[i.id]?.stage===6);function on(i){ue("#toast").textContent=i,ue("#toast").hidden=!1,clearTimeout(Yu),Yu=setTimeout(()=>ue("#toast").hidden=!0,5e3)}function an(){let i=ml(be);try{localStorage.setItem(_l,JSON.stringify(be)),ks=!0}catch{ks=!1}ju(),i.length&&ti?.notify(i)}function ju(){let i=Bn(be),e=i>=1e3?3:i>=500?2:i>=200?1:0;ue("#xp").textContent=`${i} XP`,ue("#rank").textContent=["T\xE9cnico iniciante","Explorador t\xE9cnico","Solucionador","Especialista do campus"][e],ue("#rank-number").textContent=Dt(e+1);let t=[0,200,500,1e3][e],n=[200,500,1e3,5e3][e];ue("#next-xp").textContent=i>=5e3?"campus restaurado":`pr\xF3ximo marco: ${n} XP`,ue("#xp-bar").style.width=`${Math.min(100,(i-t)/(n-t)*100)}%`;let s=je.find(r=>be.records[r.id]&&be.records[r.id].stage<6)||je.find(r=>be.records[r.id]?.stage!==6);ue("#quest-title").textContent=s?i?"A pr\xF3xima descoberta":"Seu primeiro diagn\xF3stico":"Campus restaurado!",ue("#quest-desc").textContent=s?`OS ${Dt(s.id)} \xB7 ${s.title}`:"Voc\xEA concluiu os 50 chamados. Explore seu percurso.",ue("#save-state").innerHTML=`<span class="live-dot"></span>${ks?" Progresso salvo neste dispositivo":" Sem salvamento: exporte seu percurso"}`,ue("#save-state").classList.toggle("storage-warning",!ks),ue("#station-strip").innerHTML=Yt.map(r=>{let a=Br().filter(o=>o.level===r.id).length;return`<button class="station-card" data-travel="${r.id}" style="--accent:${r.color};--soft:${r.soft}"><div class="station-card-top"><span>${xn(r.icon)}</span><span>ESTA\xC7\xC3O ${Dt(r.id)} \u2197</span></div><h4>${r.short}</h4><p>${a} de 10 miss\xF5es resolvidas</p><div class="station-mini-track"><i style="width:${a*10}%"></i></div></button>`}).join(""),ft&&(ft.refresh(),ft.setMerit()),ti?.updateHUD()}function _n(i,e,t,n){Tl==="shop"&&Ei?.dispose(),ue("#panel").classList.toggle("bench-dialog",n==="mission"),ue("#panel").classList.toggle("shop-dialog",n==="shop"),ue("#panel").classList.toggle("merit-dialog",n==="merits"),ue("#panel").open||(Ju=document.activeElement),Tl=n,ue("#panel-title").textContent=i,ue("#panel-kicker").textContent=e,ue("#panel-content").innerHTML=t,Zu(),ue("#panel").open||ue("#panel").showModal()}function wl(i){let e=je.find(t=>t.id===Number(i));!e||be.records[e.id]?.stage!==6||(Mi(e).viewStage=0,Vs(e.id))}function ei(){ue("#panel").open&&ue("#panel").close()}ue("#panel").addEventListener("close",()=>{bi=null,Si="",zs=!1,Ju?.focus({preventScroll:!0})});ue("#close-panel").onclick=ei;ue("#panel").addEventListener("click",i=>{if(i.target===ue("#panel")){let e=ue("#panel").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&ei()}});function Cl(){_n("Sua pr\xF3xima habilidade come\xE7a aqui.","BOAS-VINDAS AO CAMPUS AMC",`<div class="intro-art" aria-hidden="true"><span>\u{1F333}</span><span>\u{1F9D1}\u{1F3FD}\u200D\u{1F527}</span><span>\u{1F5A5}\uFE0F</span></div><p class="dialog-copy">Voc\xEA \xE9 a nova pessoa da equipe t\xE9cnica! O laborat\xF3rio precisa de ajuda. Explore <strong>5 esta\xE7\xF5es e 50 chamados reais de aprendizagem</strong>, investigue as pistas e traga os computadores de volta \xE0 vida.</p><div class="instruction-grid"><div class="instruction"><strong>01 \xB7 Explore</strong><p>Use WASD ou setas para andar na dire\xE7\xE3o da c\xE2mera. Arraste o cen\xE1rio para olhar ao redor; use a roda do mouse ou uma pin\xE7a com dois dedos para zoom. No celular, use o controle para andar.</p></div><div class="instruction"><strong>02 \xB7 Investigue</strong><p>Aproxime-se da bancada e pressione E ou toque na m\xE3o. Toque nos testes, observe o computador e escolha o conserto.</p></div><div class="instruction"><strong>03 \xB7 Conquiste</strong><p>Teste, conserte e confira. Ganhe 100 XP por miss\xE3o resolvida e desbloqueie cores para o avatar. Errar faz parte!</p></div></div><p class="note">O progresso fica neste navegador. Voc\xEA pode export\xE1-lo em Meu percurso para continuar em outro dispositivo. Esta experi\xEAncia \xE9 individual, sem cron\xF4metro.</p><div class="actions"><button class="primary" data-start>Entrar no campus ${xn("globe")}</button><button class="secondary" data-list="0">Conhecer as miss\xF5es</button></div>`,"help")}function Hs(i=vn){vn=Number(i);let e=je.filter(t=>!vn||t.level===vn);_n(vn?Yt[vn-1].name:"Cada problema, uma descoberta.",`${vn?"ESTA\xC7\xC3O "+Dt(vn):"CENTRAL DE MISS\xD5ES"} \xB7 ${e.length} CHAMADOS`,`${vn?`<p class="dialog-copy">${zn(Yt[vn-1].desc)} Selecione um chamado para assumir a bancada.</p>`:""}<div class="station-filters">${[0,1,2,3,4,5].map(t=>`<button data-list="${t}" class="${t===vn?"selected":""}" aria-pressed="${t===vn}">${t?"Esta\xE7\xE3o "+Dt(t):"Todas"}</button>`).join("")}</div><div class="mission-list">${e.map(t=>{let n=be.records[t.id];return`<button class="mission-row" data-case="${t.id}"><span class="mission-num">${Dt(t.id)}</span><div><strong>${zn(t.title)}</strong><small>${zn(t.category)} \xB7 Esta\xE7\xE3o ${Dt(t.level)} \xB7 ${n?.stage===6?"100 XP conquistados":n?Bo[n.stage]:"100 XP dispon\xEDveis"}</small></div><span class="status">${n?.stage===6?"\u2713":n?"Retomar \u2197":"Jogar \u2197"}</span></button>`}).join("")}</div>`,"missions")}function Rl(){_n("Para onde vamos?","MAPA DO CAMPUS",`<p class="dialog-copy">Escolha uma esta\xE7\xE3o. Seu avatar vai at\xE9 a bancada e abre os chamados daquele espa\xE7o. Todas as esta\xE7\xF5es est\xE3o dispon\xEDveis.</p><div class="map-list">${Yt.map(i=>`<button class="map-row" data-travel="${i.id}" style="--accent:${i.color};--soft:${i.soft}"><span>${Dt(i.id)}</span><div><strong>${i.name}</strong><small>${i.desc} \xB7 ${Br().filter(e=>e.level===i.id).length}/10</small></div><b>\u2197</b></button>`).join("")}<button class="map-row" data-merit-travel><span>\u2605</span><div><strong>Totem dos M\xE9ritos</strong><small>Conhe\xE7a seus objetivos e colecione medalhas de aprendizagem.</small></div><b>\u2197</b></button><button class="map-row" data-shop-travel><span>\u2726</span><div><strong>Galeria Shop</strong><small>Experimente acess\xF3rios e troque seus cr\xE9ditos por novos visuais.</small></div><b>\u2197</b></button><button class="map-row" data-mentor><span>\u2726</span><div><strong>Pra\xE7a central \xB7 Mentora Lia</strong><small>Aprenda o m\xE9todo de diagn\xF3stico.</small></div><b>\u2197</b></button></div>`,"map")}function Vs(i){let e=je.find(t=>t.id===Number(i));e&&(Go=e.id,bi=e.id,Si="",zs=!1,rn=null,ft?.teleport(Yt[e.level-1]),Mi(e),an(),Ki())}function Ki(){let i=je.find(s=>s.id===bi);if(!i)return;let e=Mi(i),t=In(e),n=i.steps[_t(i)];if(t===3){_n("Conferido. Bom trabalho!","OS "+Dt(i.id)+" \xB7 ATENDIMENTO CONCLU\xCDDO",`<div class="reward"><span class="xp-reward">100 XP conquistados</span><h3>+40 cr\xE9ditos para seu pr\xF3ximo visual.</h3><div class="bench-layout">${Ml(i,e)}<div><p class="bench-confirmed">${zn(Pr(i))}</p><details class="bench-report"><summary>Ver registro do atendimento</summary><div class="summary-list"><p><strong>Sintoma</strong>${zn(i.symptom)}</p><p><strong>Teste realizado</strong>${zn(n[1])}</p><p><strong>O que o teste mostrou</strong>${zn(n[0])}</p><p><strong>A\xE7\xE3o indicada</strong>${zn(n[2])}</p><p><strong>Crit\xE9rio para validar o reparo</strong>${zn(i.confirm)}</p></div><p class="bench-small">${e.errors} novas tentativas \xB7 ${e.hints} pistas da Lia</p></details><div class="actions"><button class="secondary" data-review-tests="${i.id}">Rever os testes</button><button class="secondary" data-open-merits>Meus m\xE9ritos</button></div></div></div><div class="actions"><button class="secondary" data-stage-back>\u2190 Voltar</button><button class="primary" data-next="${i.id}">Pr\xF3ximo chamado \u2192</button><button class="secondary" data-explore>Ir ao campus</button></div></div>`,"mission");return}_n(i.title,`OS ${Dt(i.id)} \xB7 ESTA\xC7\xC3O ${Dt(i.level)} \xB7 100 XP`,`${ku(e)}<div class="bench-layout">${Ml(i,e)}${zu(i,e,{feedback:Si,hint:zs})}</div>`,"mission")}function Vv(i){let e=je.find(n=>n.id===bi);if(!e)return;let t=Mi(e);if(!(t.stage!==3||In(t)!==1)){if(!Ou(e,t,Number(i))){Si="Essa a\xE7\xE3o n\xE3o resolve o que o teste mostrou. Compare com a pista e tente outra.",an(),Ki();return}Si="",an(),on(ji(e).referral?"Encaminhamento preparado. Vamos conferir?":"Conserto aplicado. Vamos conferir?"),Ki(),ue("[data-stage-next]")?.focus({preventScroll:!0})}}function Hv(){let i=je.find(n=>n.id===bi);if(!i)return;let e=Mi(i),t=Bn(be);Fu(i,e)&&(Si="",an(),ft?.celebrate(),on("Conferido! +100 XP e +40 cr\xE9ditos."),Rn.some(n=>n.xp>t&&n.xp<=Bn(be))&&setTimeout(()=>on("Nova cor de uniforme em Meu avatar!"),1800),Ki(),ue("[data-stage-next]")?.focus({preventScroll:!0}))}function Il(){_n("Observe antes de trocar.","MENTORA LIA \xB7 PRA\xC7A CENTRAL",`<p class="dialog-copy">\u201CUma pe\xE7a nova n\xE3o \xE9 um diagn\xF3stico. <strong>O melhor t\xE9cnico sabe transformar uma observa\xE7\xE3o em uma decis\xE3o.</strong> Eu vou ajudar voc\xEA a fazer isso.\u201D</p><div class="instruction-grid"><div class="instruction"><strong>1 \xB7 Uma vari\xE1vel</strong><p>Verifique uma hip\xF3tese de cada vez. Compare com algo que funciona.</p></div><div class="instruction"><strong>2 \xB7 Uma evid\xEAncia</strong><p>N\xE3o conclua s\xF3 pelo sintoma. Execute o teste e leia o resultado.</p></div><div class="instruction"><strong>3 \xB7 Uma valida\xE7\xE3o</strong><p>Repita a tarefa depois de corrigir. Registre o que demonstrou.</p></div></div><p class="note">${Pu}</p><p class="dialog-copy">Os resultados s\xE3o did\xE1ticos, com uma causa designada por cen\xE1rio. A atividade n\xE3o faz diagn\xF3stico de computadores reais. XP indica seu percurso, e a avalia\xE7\xE3o final continua com o professor.</p><div class="actions"><button class="primary" data-list="1">Assumir meu primeiro chamado \u2192</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina e guia docente \u2197</a></div>`,"mentor")}function Fr(){let i=Br();_n("Conhecimento que voc\xEA construiu.","MEU PERCURSO",`<div class="stats"><div class="stat"><strong>${Bn(be)}</strong><span>XP de aprendizagem</span></div><div class="stat"><strong>${i.length}/50</strong><span>miss\xF5es conclu\xEDdas</span></div><div class="stat"><strong>${Object.values(be.records).filter(e=>e.stage<6).length}</strong><span>em atendimento</span></div></div><p class="dialog-copy">Seu registro \xE9 local e individual. Exporte para guardar uma c\xF3pia ou continuar em outro navegador. A importa\xE7\xE3o substitui este percurso ap\xF3s sua confirma\xE7\xE3o.</p><div class="actions"><button class="secondary" data-open-merits>Ver meus m\xE9ritos</button><button class="primary" data-export>Exportar progresso</button><button class="secondary" data-import>Importar progresso</button><button class="secondary" data-report>Baixar relat\xF3rio</button></div><p class="note">${ks?"Salvamento ativo neste navegador.":"O armazenamento n\xE3o est\xE1 dispon\xEDvel. Exporte seu progresso antes de fechar a p\xE1gina."} XP n\xE3o \xE9 nota nem certifica\xE7\xE3o de pr\xE1tica profissional.</p><div class="mission-list">${je.filter(e=>be.records[e.id]).map(e=>`<button class="mission-row" data-case="${e.id}"><span class="mission-num">${be.records[e.id].stage===6?"\u2713":Dt(e.id)}</span><div><strong>${zn(e.title)}</strong><small>${be.records[e.id].stage===6?"Conclu\xEDdo na simula\xE7\xE3o":Bo[be.records[e.id].stage]} \xB7 ${be.records[e.id].errors} revis\xF5es</small></div><span>\u2197</span></button>`).join("")||'<p class="dialog-copy">Seu percurso come\xE7a com uma descoberta. Assuma seu primeiro chamado!</p>'}</div>`,"journal")}function Pl(){let i=Bn(be);_n("Seu jeito de explorar.","MEU AVATAR",`<p class="dialog-copy">Cada problema resolvido abre novas possibilidades. Escolha a cor do uniforme do seu avatar.</p><button class="shop-wardrobe-link secondary" data-open-shop>\u2726 Explorar a Galeria Shop \u2192</button><div class="wardrobe">${Rn.map((e,t)=>`<button class="swatch ${be.skin===t?"chosen":""}" data-skin="${t}" ${i<e.xp?"disabled":""} aria-label="${e.name}, ${e.xp} XP necess\xE1rios" aria-pressed="${be.skin===t}"><i style="background:${e.color}"></i><span>${i<e.xp?e.xp+" XP":e.name}</span></button>`).join("")}</div><p class="note">Voc\xEA tem ${i} XP. As cores s\xE3o recompensas visuais; todas as miss\xF5es est\xE3o dispon\xEDveis desde o in\xEDcio.</p><div class="actions"><button class="primary" data-explore>Voltar ao campus \u2192</button></div>`,"avatar")}function Gv(){_n("Do seu jeito, no seu ritmo.","CONFIGURA\xC7\xD5ES",`<div class="settings-row"><div>Apar\xEAncia<small>Escolha como o campus aparece para voc\xEA.</small></div><select id="theme-choice"><option value="system" ${Nr.choice==="system"?"selected":""}>Sistema</option><option value="light" ${Nr.choice==="light"?"selected":""}>Claro</option><option value="dark" ${Nr.choice==="dark"?"selected":""}>Escuro</option></select></div><div class="settings-row"><div>Qualidade gr\xE1fica<small>Use o modo leve para poupar recursos no celular.</small></div><select id="quality"><option value="auto" ${be.quality==="auto"?"selected":""}>Autom\xE1tica</option><option value="low" ${be.quality==="low"?"selected":""}>Leve</option></select></div><p class="dialog-copy">Voc\xEA tamb\xE9m pode acessar todas as miss\xF5es pelos bot\xF5es, sem navegar pelo ambiente 3D. O jogo respeita a prefer\xEAncia do sistema por redu\xE7\xE3o de movimento.</p><div class="actions"><button class="secondary" data-list="0">Acessar miss\xF5es</button><button class="secondary" data-help>Como jogar</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina com recursos de acessibilidade \u2197</a></div>`,"settings")}function Ku(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function Wv(){Ku(JSON.stringify({...be,format:"amc-mundo"},null,2),"operacao-bancada-progresso.json","application/json"),on("Seu arquivo de progresso foi preparado.")}function qv(){let i=["# Opera\xE7\xE3o Bancada \xB7 Meu percurso",`${Br().length}/50 miss\xF5es conclu\xEDdas na simula\xE7\xE3o. ${Bn(be)} XP.`,"XP n\xE3o \xE9 nota. A execu\xE7\xE3o real exige observa\xE7\xE3o docente.",`M\xE9ritos: ${Ft(be).filter(e=>e.unlocked).length}/12 \xB7 ${fl(be)} pontos.`,...Ft(be).filter(e=>e.unlocked).map(e=>"- "+e.name+": "+e.description)];for(let e of je){let t=be.records[e.id];if(t&&(i.push(`
## OS ${Dt(e.id)} \xB7 ${e.title}`,`Situa\xE7\xE3o: ${t.stage===6?"conclu\xEDdo na simula\xE7\xE3o":Bo[t.stage]}. Revis\xF5es: ${t.errors}.`),t.stage===6)){let n=e.steps[_t(e)];i.push("Sintoma: "+e.symptom,"Teste: "+n[1],"Causa: "+n[0],"Corre\xE7\xE3o: "+n[2],"Resultado do atendimento: "+Pr(e),"Crit\xE9rio para validar o reparo: "+e.confirm)}}Ku(i.join(`

`),"operacao-bancada-percurso.md","text/markdown")}ue("#import-file").addEventListener("change",async i=>{let e=i.target.files[0];if(e){try{if(e.size>1e6)throw Error("Arquivo muito grande.");let t=JSON.parse(await e.text());if(t.format!=="amc-mundo")throw Error("Use um arquivo exportado por este jogo.");let n=bl(t);_n("Restaurar este percurso?","IMPORTAR PROGRESSO",`<p class="dialog-copy">O arquivo cont\xE9m <strong>${Object.values(n.records).filter(s=>s.stage===6).length} miss\xF5es conclu\xEDdas</strong> e ${Bn(n)} XP. Ele substituir\xE1 o progresso atual deste navegador.</p><div class="actions"><button class="primary" id="confirm-import">Restaurar progresso</button><button class="secondary" data-journal>Cancelar</button></div>`,"import"),ue("#confirm-import").onclick=()=>{be=n,ft?.setSkin(),ft?.setEquipment(),an(),Fr(),on("Percurso restaurado.")}}catch(t){on("N\xE3o foi poss\xEDvel importar: "+t.message)}i.target.value=""}});function Xv(){let i=ue("#world"),e=new Oi;e.background=new Ge("#cae7f2"),e.fog=new cr("#cae7f2",48,95);let t=new Rt(60,1,.1,140),n=new Ns({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(devicePixelRatio,be.quality==="low"?1:1.7)),n.shadowMap.enabled=be.quality!=="low",n.shadowMap.type=Fa,n.outputColorSpace=At,n.toneMapping=ws,n.toneMappingExposure=1.05,n.setClearColor("#cae7f2"),i.appendChild(n.domElement);let s=new Et;e.add(s);let r=new ki("#ffffed","#8a9b78",2.3);e.add(r);let a=new Vi("#fff6db",3.2);a.position.set(-15,27,16),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-27,a.shadow.camera.right=27,a.shadow.camera.top=27,a.shadow.camera.bottom=-27,a.shadow.camera.far=75,a.shadow.normalBias=.04,a.shadow.bias=-2e-4,e.add(a);let o=new Map,l=new Map,c=(I,O={})=>{let V=I+JSON.stringify(O);return o.has(V)||o.set(V,new nn({color:I,roughness:.58,metalness:.02,...O})),o.get(V)};function d(I,O,V,X,q,ae,L,ee=s){let K=[I,O,V].join(",");l.has(K)||l.set(K,new tn(I,O,V));let le=new Ke(l.get(K),c(X));return le.position.set(q,ae,L),le.castShadow=!0,le.receiveShadow=!0,ee.add(le),le}function u(I,O,V,X,q,ae,L,ee=12,K=s){let le=new Ke(new Gt(I,O,V,ee),c(X));return le.position.set(q,ae,L),le.castShadow=!0,le.receiveShadow=!0,K.add(le),le}function p(I,O,V,X,q,ae=s){let L=new Ke(new mr(I,0),c(O));return L.position.set(V,X,q),L.castShadow=!0,L.receiveShadow=!0,ae.add(L),L}function f(I,O,V,X,q=4,ae="#3e5b41",L=s){let ee=document.createElement("canvas");ee.width=640,ee.height=144;let K=ee.getContext("2d");K.fillStyle="#fafbe9",K.fillRect(0,0,640,144),K.fillStyle=ae,K.font="bold 52px sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText(I,320,75,600);let le=new lr(ee);le.colorSpace=At;let ie=new Ke(new fi(q,q*144/640),new Un({map:le,side:fn}));return ie.position.set(O,V,X),L.add(ie),ie}d(36,1.4,31,"#789858",0,-1.1,0),d(36.4,.5,31.4,"#bdcca0",0,-.25,0),d(35.8,.18,30.8,"#9bc681",0,.04,0),d(4.3,.05,27,"#d7ded5",0,.16,-.2),d(29,.05,3.8,"#d7ded5",0,.17,0),d(21,.04,3.3,"#d7ded5",0,.17,7.1),u(4.1,4.1,.12,"#ebe5ce",0,.22,1.2,32),u(3.1,3.1,.03,"#d8dcb7",0,.3,1.2,32);let g=u(1.25,1.25,.04,"#eaf0da",0,.33,1.2,6);g.rotation.y=Math.PI/6,d(1.15,.06,.16,"#859a65",0,.37,1.2),d(.16,.06,1.15,"#859a65",0,.37,1.2);for(let I=-12;I<14;I+=1.4)d(.06,.02,.3,"#bfc6a9",1.72,.2,I);let b=[],m=[],h=[],_=[],E=[];function y(I,O,V,X){b.push({x:I,z:O,w:V/2+Or.bodyRadius,d:X/2+Or.bodyRadius})}function R(I,O,V,X){d(1.55,.12,.8,"#dee2d5",I,1.58,O,X),d(.12,.4,.12,"#5e6f65",I,1.8,O+.12,X),d(.58,.06,.32,"#728276",I,1.65,O+.1,X),d(1.35,.85,.12,"#52685b",I,2.2,O,X);let q=d(1.2,.67,.025,V,I,2.2,O+.075,X);d(.55,.04,.012,"#cce5d4",-.18,.11,.02,q),d(.75,.025,.012,"#b4cdbc",-.08,-.015,.02,q),d(.45,.025,.012,"#b4cdbc",-.23,-.1,.02,q),d(.07,.07,.014,"#e7c171",.44,.2,.022,q),d(1.02,.04,.32,"#f1f0df",I,1.7,O+.55,X);for(let ae=0;ae<3;ae++)d(.8,.012,.018,"#b7c2aa",I,1.728,O+.47+ae*.09,X);return d(.18,.06,.23,"#d4ddc8",I+.75,1.71,O+.5,X),d(.55,.92,.72,"#f0efde",I+1.15,1.98,O+.14,X),d(.42,.74,.03,"#d5ddc8",I+1.15,1.98,O+.52,X),d(.04,.04,.03,"#a9d871",I+1.15,2.23,O+.55,X),q}Yt.forEach((I,O)=>{let V=new Et;V.position.set(I.x,0,I.z),s.add(V),m.push(V),d(7.2,.22,5.7,"#e8eadb",0,.28,0,V),d(7.35,.12,5.85,I.color,0,.16,0,V),d(7.2,3.15,.2,"#e8eddf",0,1.965,-2.7,V),d(7.4,.28,.4,I.color,0,3.62,-2.72,V),d(.18,1.95,3.4,"#e0e8d6",-3.5,1.365,-1.2,V),d(.18,1.95,3.4,"#e0e8d6",3.5,1.365,-1.2,V),y(I.x,I.z-2.7,7.2,.25),y(I.x-3.5,I.z-1.2,.2,3.4),y(I.x+3.5,I.z-1.2,.2,3.4),d(6.6,.2,1.65,"#b5a17c",0,1.48,-.85,V),d(6.7,.11,1.7,"#d3c5a4",0,1.61,-.85,V),[-2.7,2.7].forEach(K=>{d(.2,1.1,.2,"#8b9980",K,.85,-1.35,V),d(.2,1.1,.2,"#8b9980",K,.85,-.4,V)}),y(I.x,I.z-.85,6.6,1.65);let X=R(-1.7,-.95,"#a9be9d",V),q=R(1.35,-.95,"#a9be9d",V);h.push([X,q]),d(1.12,.16,1,"#779675",-2.1,.94,.9,V),d(1.12,.9,.14,"#88a582",-2.1,1.47,1.34,V),u(.085,.085,.46,"#526b5d",-2.1,.64,.9,8,V),d(.92,.08,.82,"#687c6e",-2.1,.44,.9,V),y(I.x-2.1,I.z+.95,1.12,1.14),f(Dt(O+1)+"  /  "+["CONEX\xD5ES","CONFIGURA\xC7\xD5ES","SISTEMA & DADOS","HARDWARE","DIAGN\xD3STICO"][O],0,3.12,-2.56,5.5,I.color,V),d(.9,1.9,.55,"#a7b593",-2.85,1.25,-1.9,V);for(let K=0;K<3;K++)d(.85,.08,.55,"#e8e8d3",-2.85,.65+K*.55,-1.88,V),d(.25,.3,.32,[I.color,"#c5bf9c","#c8d4b6"][K],-2.85,.84+K*.55,-1.85,V);let ae=new Et;ae.position.set(0,4.35,-1),V.add(ae);let L=d(.46,.46,.46,I.color,0,0,0,ae);L.rotation.z=Math.PI/4,L.rotation.x=Math.PI/4,_.push(ae);let ee=d(7,.02,5.5,I.color,0,.43,0,V);ee.visible=!1,E.push({type:"station",id:I.id,group:V,hit:ee})});function C(I,O,V=1){let X=new Et;X.position.set(I,0,O),X.scale.setScalar(V),s.add(X),u(.18,.26,2.7,"#a4946e",0,1.4,0,7,X),p(1.35,"#9cb57b",0,3.15,0,X),p(1.05,"#aec68a",-.65,3.45,.1,X),p(.95,"#b8ce92",.5,4,.1,X),y(I,O,.7,.7)}[[-15,-11,1],[-12,-12,.75],[14,-11,1.1],[16,-7,.8],[-16,0,.9],[16,2,1],[-14,9,.95],[-11,12,.7],[13,11,.9],[16,10,.65],[-3,-13,.6],[5,-13,.7]].forEach(I=>C(...I));function T(I,O){u(.8,.9,.4,"#c0c4a3",I,.35,O,8),p(.7,"#9eb47c",I,.8,O),p(.45,"#acc487",I+.45,.75,O+.12)}[[-14,-3],[14,-3],[-11,3],[11,3],[-3,12],[3,12],[-5,-11],[5,-11]].forEach(I=>T(...I));function A(I,O){u(.09,.12,3.6,"#8b9c7d",I,1.9,O,6),d(.55,.45,.55,"#f5f1cd",I,3.7,O),d(.65,.12,.65,"#8e9c7d",I,3.99,O)}[[-4,1],[4,1],[-13,-7],[13,-7],[-11,8],[11,8]].forEach(I=>A(...I));function x(I,O){d(3.3,.14,.65,"#bca17a",I,.8,O),d(3.3,.65,.1,"#c8ae83",I,1.25,O-.3),[-.85,.85].forEach(V=>d(.12,.6,.4,"#7f9172",I+V,.43,O)),y(I,O,3.3,.7)}x(-5,2),x(5,2),x(-12,4),x(12,4),d(.3,3.7,.3,"#738a61",-2,1.98,13.5),d(.3,3.7,.3,"#738a61",2,1.98,13.5),d(4.8,.8,.24,"#f2f0d7",0,3.6,13.5),f("CAMPUS AMC",0,3.62,13.65,4.4,"#587348");for(let I=0;I<22;I++){let O=Math.sin(I*13.1)*16,V=Math.cos(I*6.3)*13;if(!(Math.abs(O)<3||Math.abs(V)<2))for(let X=0;X<3;X++)u(.07,.1,.3,"#9cb478",O+X*.15,.28,V+X*.13,4)}let v=[],P=u(.5,.62,1.1,"#517a60",2.8,.85,-.9,10);P.userData.merit=!0,v.push(P),y(2.8,-.9,1,1),u(.58,.58,.12,"#d2c78d",2.8,1.46,-.9,12),u(.25,.14,.56,"#e0bf5a",2.8,1.8,-.9,12),d(.13,.35,.13,"#e0bf5a",2.8,1.42,-.9),f("M\xC9RITOS",2.8,1.06,-.37,.85,"#42664e");let N=d(3.4,3.1,.18,"#345f50",-12,1.7,6.1);N.userData.shop=!0,v.push(N),d(3.65,.24,.45,"#bce975",-12,3.32,6.1);let k=d(3.2,1.2,1,"#477662",-12,.82,7.3);k.userData.shop=!0,v.push(k),d(3.3,.12,1.1,"#dce6ca",-12,1.47,7.3),y(-12,6.1,3.4,.18),y(-12,7.3,3.2,1),f("GALERIA SHOP",-12,2.84,6.22,3.05,"#345f50"),[-.85,0,.85].forEach((I,O)=>{u(.32,.35,.14,"#c7d7b5",-12+I,1.6,7.3,12);let V=Al(It[[0,2,3][O]]);V.scale.setScalar(.55),V.position.set(-12+I,.27,7.3),s.add(V)});let $=d(.35,.35,.35,"#c6f36b",-12,3.9,7);$.rotation.z=Math.PI/4;let j=(I,O)=>Xu(I,O,Yt),Y=(I,O,V)=>ko(I,O,V,c),oe=[];s.traverse(I=>{if(!(!I.isMesh||!I.visible)){for(let O=I.parent;O;O=O.parent)if(_.includes(O))return;oe.push(I)}}),s.updateMatrixWorld(!0);let H=new Ho(t,oe),te=Y(Rn[be.skin].color);te.group.name="student-avatar",te.group.position.set(0,j(0,7)+.005,7),te.group.rotation.y=Math.PI,s.add(te.group);let fe=Y("#d3a66f","#b9835d","#4b3c31");fe.group.position.set(-1.8,j(-1.8,3)+.005,3),fe.group.rotation.y=.3,s.add(fe.group),f("LIA \xB7 MENTORA",-1.8,3.1,3,2.8,"#7a8257");let ge=Bs(te,be.shop.equipped),Be=null,Qe=new Map;function ot(){if(Be===be.merit.featured)return;Be=be.merit.featured;let I=te.group.getObjectByName("avatar-merit");I&&(te.group.remove(I),I.traverse(X=>{X.geometry?.dispose(),X.material&&!Array.isArray(X.material)&&X.material.dispose()}));let O=Ft(be).find(X=>X.id===Be&&X.unlocked);if(!O)return;if(!Qe.has(O.image)){let X=new _r().load("merit/"+O.image+".webp");X.colorSpace=At,Qe.set(O.image,X)}let V=new Et;V.name="avatar-merit";for(let X of[-1,1]){let q=new Ke(new Gt(.17,.17,.025,8),c(O.color,{metalness:.35}));q.rotation.x=Math.PI/2,q.position.set(X>0?-.25:0,1.7,X*.305),V.add(q);let ae=new Ke(new fi(.32,.32),new Un({map:Qe.get(O.image),transparent:!0,alphaTest:.05,depthWrite:!1}));ae.rotation.y=X<0?Math.PI:0,ae.position.set(X>0?-.25:0,1.7,X*.327),V.add(ae)}te.group.add(V)}ot();let Xe=new Ke(new Ni(.17,.35,4),c("#f8ffb6"));Xe.position.set(0,3,0),Xe.rotation.z=Math.PI,te.group.add(Xe);let Q=[];for(let I=0;I<22;I++){let O=d(.12,.12,.12,["#d2e996","#f4d58a","#9fc6bc"][I%3],0,-10,0);Q.push({mesh:O,v:new U,life:0})}let re=ue("#station-labels");re.innerHTML=Yt.map(I=>`<span class="station-label" id="label-${I.id}" style="--accent:${I.color}"><b>${Dt(I.id)}</b>${I.short}</span>`).join("");let me=1,De=1;function Ae(){me=Math.max(1,i.clientWidth),De=Math.max(1,i.clientHeight),n.setSize(me,De),t.aspect=me/De,t.fov=t.aspect<.9?yi.mobileFov:yi.desktopFov,t.updateProjectionMatrix()}new ResizeObserver(Ae).observe(i),Ae();let st=new Set,D={x:0,y:0},et=!1,Re=0,Ie=performance.now(),_e=!0,Ye=matchMedia("(prefers-reduced-motion: reduce)").matches,ye;function ze(){D={x:0,y:0},ue("#joystick-knob").style.transform=""}function ht(){st.clear(),ze(),ye?.cancel()}addEventListener("keydown",I=>{if(ue("#panel").open||/INPUT|SELECT|TEXTAREA/.test(I.target.tagName))return;let O=I.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","e","m","r"].includes(O)&&I.preventDefault(),O==="e"&&!I.repeat?Dl():O==="m"&&!I.repeat?Rl():O==="r"&&!I.repeat?H.recenter(te.group.rotation.y):st.add(O)}),addEventListener("keyup",I=>st.delete(I.key.toLowerCase())),addEventListener("blur",ht),document.addEventListener("visibilitychange",()=>{_e=!document.hidden,ht(),Ie=performance.now()}),ue("#panel").addEventListener("close",ht);let ct=ue("#joystick"),w=null;function M(I){let O=ct.getBoundingClientRect(),V=I.clientX-O.left-O.width/2,X=I.clientY-O.top-O.height/2,q=Math.hypot(V,X),ae=q>32?32/q:1;D={x:V*ae/32,y:X*ae/32},ue("#joystick-knob").style.transform=`translate(${V*ae}px,${X*ae}px)`,rn=null}ct.addEventListener("pointerdown",I=>{w=I.pointerId,ct.setPointerCapture(I.pointerId),M(I)}),ct.addEventListener("pointermove",I=>{I.pointerId===w&&M(I)});for(let I of["pointerup","pointercancel","lostpointercapture"])ct.addEventListener(I,()=>{w=null,ze()});let z=new Hi,J=new we;ye=qu(n.domElement,H,{blocked:()=>ue("#panel").open,onTap(I,O){let V=n.domElement.getBoundingClientRect();if(!V.width||!V.height)return;J.set((I-V.left)/V.width*2-1,-(O-V.top)/V.height*2+1),z.setFromCamera(J,t);let X=z.intersectObjects([...m,...v],!0).find(q=>q.object.visible);if(X?.object.userData.merit){ft.navigate(2.8,.8,"merits");return}if(X?.object.userData.shop){ft.navigate(-12,9.2,"shop");return}if(X){let q=Yt.find((ae,L)=>{let ee=X.object;for(;ee;){if(ee===m[L])return!0;ee=ee.parent}return!1});q&&Qu(q.id)}}}),ue("#camera-center").onclick=()=>H.recenter(te.group.rotation.y);function se(I,O){return Math.abs(I)>17.2||Math.abs(O)>14.2?!0:b.some(V=>Math.abs(I-V.x)<V.w&&Math.abs(O-V.z)<V.d)}function Z(I,O,V=null){let K=nt=>({x:-16.8+nt%57*.6,z:-13.8+Math.floor(nt/57)*.6}),le=(nt,bt)=>Math.max(0,Math.min(56,Math.round((nt- -16.8)/.6)))+57*Math.max(0,Math.min(46,Math.round((bt- -13.8)/.6))),ie=nt=>{let bt=K(nt);return!se(bt.x,bt.z)},ne=nt=>{if(ie(nt))return nt;for(let bt=1;bt<7;bt++)for(let zt=-bt;zt<=bt;zt++)for(let Pt=-bt;Pt<=bt;Pt++){let Mt=nt%57+Pt,yn=Math.floor(nt/57)+zt;if(Mt>=0&&Mt<57&&yn>=0&&yn<47&&ie(Mt+yn*57))return Mt+yn*57}return nt},xe=ne(le(te.group.position.x,te.group.position.z)),Ne=ne(le(I,O)),tt=nt=>{let bt=K(nt),zt=K(Ne);return Math.hypot(bt.x-zt.x,bt.z-zt.z)},We=[xe],Bt=new Map([[xe,0]]),Zt=new Map,Gs=new Set,Pn=!1;for(;We.length;){We.sort((Pt,Mt)=>Bt.get(Pt)+tt(Pt)-(Bt.get(Mt)+tt(Mt)));let nt=We.shift();if(nt===Ne){Pn=!0;break}Gs.add(nt);let bt=nt%57,zt=Math.floor(nt/57);for(let Pt=-1;Pt<=1;Pt++)for(let Mt=-1;Mt<=1;Mt++){if(!Mt&&!Pt)continue;let yn=bt+Mt,Qi=zt+Pt;if(yn<0||yn>=57||Qi<0||Qi>=47)continue;let kn=yn+Qi*57;if(Gs.has(kn)||!ie(kn)||Mt&&Pt&&(!ie(bt+Mt+zt*57)||!ie(bt+(zt+Pt)*57)))continue;let zr=Bt.get(nt)+.6*(Mt&&Pt?Math.SQRT2:1);zr<(Bt.get(kn)??1/0)&&(Zt.set(kn,nt),Bt.set(kn,zr),We.includes(kn)||We.push(kn))}}if(!Pn){on("Escolha a esta\xE7\xE3o pelo menu de miss\xF5es para assumir a bancada.");return}let Ai=[];for(let nt=Ne;nt!==xe;nt=Zt.get(nt))Ai.unshift(K(nt));Ai.push(se(I,O)?K(Ne):{x:I,z:O}),rn={x:I,z:O,id:V,route:Ai}}function Te(I,O,V){let X=te.group.position,q=V*Or.walkSpeed,ae=X.x+I*q,L=X.z+O*q;if(se(ae,X.z)||(X.x=ae),se(X.x,L)||(X.z=L),et=Math.abs(I)+Math.abs(O)>.06,et){let K=Math.atan2(I,O)-te.group.rotation.y;K=Math.atan2(Math.sin(K),Math.cos(K)),te.group.rotation.y+=K*Math.min(1,V*14)}}function de(){Yt.forEach((I,O)=>{let V=Br().filter(q=>q.level===I.id).length,X=Go&&je[Go-1].level===I.id&&be.records[Go]?.stage>=4;h[O].forEach((q,ae)=>q.material=c(V>ae*5||X?"#bada8b":"#9db3a4",{emissive:V||X?"#496931":"#294035",emissiveIntensity:.12}))})}function Me(I){requestAnimationFrame(Me);let O=Math.min((I-Ie)/1e3,.045);if(Ie=I,!_e)return;if(Re+=O,et=!1,!ue("#panel").open){let q=(st.has("d")||st.has("arrowright")?1:0)-(st.has("a")||st.has("arrowleft")?1:0)+D.x,ae=(st.has("s")||st.has("arrowdown")?1:0)-(st.has("w")||st.has("arrowup")?1:0)+D.y;if(Math.abs(q)+Math.abs(ae)>.08){rn=null;let L=Math.max(1,Math.hypot(q,ae));q/=L,ae/=L;let ee=H.movement(q,ae);Te(ee.x,ee.z,O)}else if(rn){let L=rn.route[0]||rn,ee=L.x-te.group.position.x,K=L.z-te.group.position.z,le=Math.hypot(ee,K);if(le<.04){if(rn.route.length&&rn.route.shift(),!rn.route.length){let ie=rn;rn=null,ie.id==="merits"?ti.show():ie.id==="shop"?Ei.show():ie.id?Hs(ie.id):Il()}}else Te(ee/le,K/le,Math.min(O,le/Or.walkSpeed))}}te.limbs.forEach((q,ae)=>q.rotation.x=et&&!Ye?Math.sin(Re*11+(ae<2?0:Math.PI))*.45*(ae%2?1:-1):0),te.group.position.y=j(te.group.position.x,te.group.position.z)+.005+(et&&!Ye?Math.abs(Math.sin(Re*11))*.025:0),Xe.position.y=3+(Ye?0:Math.sin(Re*2)*.08),_.forEach((q,ae)=>{q.position.y=4.35+(Ye?0:Math.sin(Re*1.8+ae)*.12),Ye||(q.rotation.y=Re*.6)});let V=te.group.position;yt=null;let X=1/0;for(let q of Yt){let ae=Math.hypot(V.x-q.x,V.z-(q.z+1.7));ae<3.9&&ae<X&&(yt={type:"station",id:q.id},X=ae)}Math.hypot(V.x+1.8,V.z-3)<2.1&&(yt={type:"mentor"}),Math.hypot(V.x+12,V.z-9.2)<2.4&&(yt={type:"shop"}),Math.hypot(V.x-2.8,V.z+.9)<1.9&&(yt={type:"merits"}),ue("#interact").hidden=!yt,ue("#interact span").textContent=yt?.type==="merits"?"Abrir meus m\xE9ritos":yt?.type==="shop"?"Entrar na Galeria Shop":yt?.type==="mentor"?"Conversar com Lia":yt?`Explorar esta\xE7\xE3o ${Dt(yt.id)}`:"Explorar bancada",ue("#mobile-interact").style.opacity=yt?"1":".45",ue("#location-name").textContent=yt?.type==="merits"?"Totem dos M\xE9ritos":yt?.type==="shop"?"Galeria Shop":yt?.type==="station"?Yt[yt.id-1].name:yt?"Pra\xE7a \xB7 Mentora Lia":"Pra\xE7a central",H.update(V,O,{reducedMotion:Ye});for(let q of Yt){let ae=new U(q.x,4.95,q.z-1.1).project(t),L=ue("#label-"+q.id);L.style.left=`${(ae.x*.5+.5)*me}px`,L.style.top=`${(-ae.y*.5+.5)*De}px`,L.style.opacity=ae.z>-1&&ae.z<1&&Math.abs(ae.x)<.95&&Math.abs(ae.y)<.85?"1":"0"}Vo(ge,Re,Ye),$.rotation.y=Ye?0:Re*.6,Q.forEach(q=>{q.life<=0||(q.life-=O,q.mesh.visible=q.life>0,q.mesh.position.addScaledVector(q.v,O),q.v.y-=O*5,q.mesh.rotation.x+=O*3)}),(Tl!=="shop"||!ue("#panel").open)&&n.render(e,t)}requestAnimationFrame(Me),ue("#loading").hidden=!0,ue("#loading").style.display="none",de();function Ee(I){let O=I==="dark";e.background.set(O?"#16293d":"#cae7f2"),e.fog.color.copy(e.background),r.intensity=O?1.4:2.3,a.intensity=O?1.3:3.2,a.color.set(O?"#b9d8ff":"#fff6db")}return Ee(Nr.active),{refresh:de,navigate:Z,setTheme:Ee,setMerit:ot,setEquipment(){ge=Bs(te,be.shop.equipped)},teleport(I){ht(),te.group.position.set(I.x,j(I.x,I.z+.95)+.005,I.z+.95),te.group.rotation.y=Math.PI,H.recenter(Math.PI),H.update(te.group.position,0,{snap:!0})},home(){ht(),rn=null,te.group.position.set(0,j(0,7)+.005,7),te.group.rotation.y=Math.PI,H.recenter(Math.PI),H.update(te.group.position,0,{snap:!0})},setSkin(){te.shirtMeshes.forEach(I=>I.material=c(Rn[be.skin].color))},quality(){n.setPixelRatio(Math.min(devicePixelRatio,be.quality==="low"?1:1.7)),n.shadowMap.enabled=be.quality!=="low",Ae()},celebrate(){Q.forEach(I=>{I.life=2,I.mesh.visible=!0,I.mesh.position.copy(te.group.position).add(new U(0,2.8,0)),I.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)})}}}function Qu(i){let e=Yt.find(t=>t.id===Number(i));if(e){if(ei(),!ft){Hs(e.id);return}ft.navigate(e.x,e.z+2.2,e.id),on("A caminho da esta\xE7\xE3o "+Dt(e.id)+". Voc\xEA tamb\xE9m pode usar WASD ou o controle virtual.")}}function Dl(){ue("#panel").open||(yt?.type==="merits"?ti.show():yt?.type==="shop"?Ei.show():yt?.type==="mentor"?Il():yt?Hs(yt.id):on("Aproxime-se de uma bancada ou escolha uma esta\xE7\xE3o no mapa."))}document.addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if("list"in t)Hs(Number(t.list));else if("case"in t)Vs(t.case);else if("choice"in t)Vv(t.choice);else if("test"in t){let n=je.find(s=>s.id===bi);if(!n)return;if(Nu(n,Mi(n),Number(t.test))!==null){Si="",an(),Ki();let s=ue('[data-test="'+t.test+'"]');s?.closest("details")?.setAttribute("open",""),s?.focus({preventScroll:!0})}}else if("confirmRepair"in t)Hv();else if("stageNext"in t||"stageBack"in t){let n=je.find(a=>a.id===bi);if(!n)return;let s=Mi(n),r="stageBack"in t;if(Uu(n,s,r?-1:1)){Si="",zs=!1,an(),Ki(),ue("#panel").scrollTop=0;let a=ue(r?"[data-stage-back]":"[data-stage-next]");(a&&!a.disabled?a:ue("#panel-title")).focus({preventScroll:!0})}}else if("hint"in t)Mi(je[bi-1]).hints++,zs=!zs,an(),Ki();else if("next"in t){let n=je.find(s=>s.id>Number(t.next)&&be.records[s.id]?.stage!==6)||je.find(s=>be.records[s.id]?.stage!==6);n?Vs(n.id):Fr()}else if("travel"in t)Qu(t.travel);else if("start"in t)be.tutorial=!0,an(),ei(),on("Bem-vindo! Toque em uma esta\xE7\xE3o ou mova seu avatar pelo campus.");else if("explore"in t)ei();else if("export"in t)Wv();else if("import"in t)ue("#import-file").click();else if("report"in t)qv();else if("journal"in t)Fr();else if("skin"in t){let n=Number(t.skin);Rn[n]?.xp<=Bn(be)&&(be.skin=n,ft?.setSkin(),an(),Pl())}else"help"in t?Cl():"mentor"in t&&(ei(),ft?ft.navigate(-1.5,4.2):Il())});ue("#world-nav").onclick=()=>{ei(),ue("#world").scrollIntoView({behavior:"smooth",block:"center"})};ue("#missions-nav").onclick=()=>Hs(0);ue("#journal-nav").onclick=Fr;ue("#avatar-nav").onclick=Pl;ue("#map-button").onclick=Rl;ue("#all-missions").onclick=()=>Hs(0);ue("#help").onclick=Cl;ue("#settings").onclick=Gv;ue("#camera-reset").onclick=()=>{ft?.home(),on("Voc\xEA voltou \xE0 pra\xE7a central.")};ue("#interact").onclick=Dl;ue("#mobile-interact").onclick=Dl;ue("#quest-go").onclick=()=>{let i=Ft(be).find(t=>t.id===be.merit.tracked&&!t.unlocked),e=i?Lr(be,i):je.find(t=>be.records[t.id]&&be.records[t.id].stage<6)||je.find(t=>be.records[t.id]?.stage!==6);e?be.records[e.id]?.stage===6?wl(e.id):Vs(e.id):Fr()};document.addEventListener("change",i=>{i.target.id==="theme-choice"&&Nr.set(i.target.value),i.target.id==="quality"&&(be.quality=i.target.value,ft?.quality(),an())});var Wo=document.createElement("nav");Wo.className="mobile-toolbar";Wo.setAttribute("aria-label","Navega\xE7\xE3o m\xF3vel");Wo.innerHTML=`<button id="mobile-map">${xn("map")}Campus</button><button data-list="0">${xn("flag")}Miss\xF5es</button><button data-journal>${xn("book")}Percurso</button><button id="mobile-avatar">${xn("user")}Avatar</button><button data-open-shop>${xn("shop")}Shop</button><button data-open-merits>${xn("trophy")}M\xE9ritos</button>`;document.body.append(Wo);ue("#mobile-map")?.addEventListener("click",Rl);ue("#mobile-avatar")?.addEventListener("click",Pl);ti=Vu({getState:()=>be,save:an,openPanel:_n,toast:on,icon:xn,onReward:i=>Ei.show(i),onMission:(i,e)=>e?wl(i):Vs(i)});ue("#merit-nav").onclick=()=>ti.show();ue("#merit-profile").onclick=()=>ti.show();Ei=Wu({getState:()=>be,save:an,onMerit:i=>ti.show(i),onMission:()=>{let i=je.find(e=>be.records[e.id]?.stage!==6);i&&Vs(i.id)},onEquip:()=>{ft?.setSkin(),ft?.setEquipment()},openPanel:_n,toast:on,icon:xn});ue("#shop-nav").onclick=()=>Ei.show();document.addEventListener("click",i=>{let e=i.target.closest("button");e&&(e.hasAttribute("data-open-shop")&&Ei.show(),e.hasAttribute("data-review-tests")&&wl(Number(e.dataset.reviewTests)),e.hasAttribute("data-merit-travel")&&(ei(),ft?ft.navigate(2.8,.8,"merits"):ti.show()),e.hasAttribute("data-shop-travel")&&(ei(),ft?ft.navigate(-12,9.2,"shop"):Ei.show()))});Zu();ju();try{ft=Xv()}catch(i){console.error("Mundo 3D indispon\xEDvel:",i),ue("#loading").style.display="none",ue("#world").innerHTML='<div id="world-fallback"><strong>Seu navegador n\xE3o disponibilizou o ambiente 3D.</strong><p>Todas as 50 miss\xF5es continuam dispon\xEDveis para jogar pelos bot\xF5es abaixo.</p><button class="primary" data-list="0">Abrir miss\xF5es</button></div>',ue("#station-labels").hidden=!0}be.tutorial||setTimeout(Cl,650);
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
