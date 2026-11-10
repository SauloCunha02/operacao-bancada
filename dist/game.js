var Pl=0,sc=1,Dl=2;var rc=1,va=2,An=3,Bn=0,Bt=1,on=2,Hn=0,xi=1,ac=2,oc=3,cc=4,Ll=5,ni=100,Ul=101,Nl=102,Fl=103,Ol=104,Bl=200,zl=201,kl=202,Vl=203,Vr=204,Hr=205,Hl=206,Gl=207,Wl=208,ql=209,Xl=210,Yl=211,$l=212,Zl=213,Jl=214,_a=0,xa=1,ya=2,yi=3,Ma=4,ba=5,Sa=6,Ea=7,lc=0,Kl=1,jl=2,Gn=0,Ql=1,eu=2,tu=3,hs=4,nu=5,iu=6,su=7;var uc=300,Pi=301,Di=302,Ta=303,wa=304,or=306,Gr=1e3,ti=1001,Wr=1002,rn=1003,ru=1004;var cr=1005;var vn=1006,Aa=1007;var oi=1008;var yn=1009,dc=1010,hc=1011,fs=1012,Ca=1013,ci=1014,Cn=1015,ps=1016,Ra=1017,Ia=1018,ms=1020,fc=35902,pc=35899,mc=1021,gc=1022,cn=1023,is=1026,gs=1027,vc=1028,Pa=1029,_c=1030,Da=1031;var La=1033,lr=33776,ur=33777,dr=33778,hr=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Va=37808,Ha=37809,Ga=37810,Wa=37811,qa=37812,Xa=37813,Ya=37814,$a=37815,Za=37816,Ja=37817,Ka=37818,ja=37819,Qa=37820,eo=37821,to=36492,no=36494,io=36495,so=36283,ro=36284,ao=36285,oo=36286;var Bs=2300,qr=2301,kr=2302,Zo=2400,Jo=2401,Ko=2402;var au=3200,ou=3201;var xc=0,cu=1,Wn="",Ct="srgb",Mi="srgb-linear",zs="linear",et="srgb";var _i=7680;var jo=519,lu=512,uu=513,du=514,yc=515,hu=516,fu=517,pu=518,mu=519,Qo=35044;var Mc="300 es",gn=2e3,ks=2001;var zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=1234567,Us=Math.PI/180,ss=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function bc(i,e){return(i%e+e)%e}function bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ns(i,e,t){return(1-t)*i+t*e}function Ed(i,e,t,n){return Ns(i,e,1-Math.exp(-t*n))}function Td(i,e=1){return e-Math.abs(bc(i,e*2)-e)}function wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ad(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rd(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Pd(i){i!==void 0&&(cl=i);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dd(i){return i*Us}function Ld(i){return i*ss}function Ud(i){return(i&i-1)===0&&i!==0}function Nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Od(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),p=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Li={DEG2RAD:Us,RAD2DEG:ss,generateUUID:vs,clamp:He,euclideanModulo:bc,mapLinear:bd,inverseLerp:Sd,lerp:Ns,damp:Ed,pingpong:Td,smoothstep:wd,smootherstep:Ad,randInt:Cd,randFloat:Rd,randFloatSpread:Id,seededRandom:Pd,degToRad:Dd,radToDeg:Ld,isPowerOfTwo:Ud,ceilPowerOfTwo:Nd,floorPowerOfTwo:Fd,setQuaternionFromProperEuler:Od,normalize:Ot,denormalize:ts},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],h=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==p||c!==h||u!==g){let m=1-o,f=l*p+c*h+u*g+d*_,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let R=Math.sqrt(E),T=Math.atan2(R,f*w);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let y=o*w;if(l=l*m+p*y,c=c*m+h*y,u=u*m+g*y,d=d*m+_*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*h-c*p,e[t+1]=l*g+u*p+c*d-o*h,e[t+2]=c*g+u*h+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"YXZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"ZXY":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"ZYX":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"YZX":this._x=p*u*d+c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d-p*h*g;break;case"XZY":this._x=p*u*d-c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>d){let h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-n-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new P,ll=new kn,ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],h=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],E=s[4],y=s[7],R=s[2],T=s[5],S=s[8];return r[0]=a*_+o*w+l*R,r[3]=a*m+o*E+l*T,r[6]=a*f+o*y+l*S,r[1]=c*_+u*w+d*R,r[4]=c*m+u*E+d*T,r[7]=c*f+u*y+d*S,r[2]=p*_+h*w+g*R,r[5]=p*m+h*E+g*T,r[8]=p*f+h*y+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*r,h=c*r-a*l,g=t*d+n*p+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},To=new ze;function Sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){let i=Vs("canvas");return i.style.display="block",i}var ul={};function rs(i){i in ul||(ul[i]=!0,console.warn(i))}function vu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var dl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bd(){let i={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mi]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:dl,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:et,toXYZ:dl,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var Ze=Bd();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gi,Xr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=Vs("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zd=0,as=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kd=0,Ao=new P,Vt=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=vn,a=oi,o=cn,l=yn,c=i.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=vs(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=uc;Vt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],h=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(h+1)/2,R=(f+1)/2,T=(u+p)/4,S=(d+_)/4,C=(g+m)/4;return E>y&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=S/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=C/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(p-u)/w,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yr=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Vt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Yr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hs=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),br.subVectors(this.max,Is),Wi.subVectors(e.a,Is),qi.subVectors(e.b,Is),Xi.subVectors(e.c,Is),$n.subVectors(qi,Wi),Zn.subVectors(Xi,qi),pi.subVectors(Wi,Xi);let t=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-pi.y,pi.x,0];return!Co(t,Wi,qi,Xi,br)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Wi,qi,Xi,br))?!1:(Sr.crossVectors($n,Zn),t=[Sr.x,Sr.y,Sr.z],Co(t,Wi,qi,Xi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Mr=new ii,Wi=new P,qi=new P,Xi=new P,$n=new P,Zn=new P,pi=new P,Is=new P,br=new P,Sr=new P,mi=new P;function Co(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vd=new ii,Ps=new P,Ro=new P,os=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Ro)),this.expandByPoint(Ps.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ln=new P,Io=new P,Er=new P,Jn=new P,Po=new P,Tr=new P,Do=new P,Gs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Io.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Io);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=Jn.dot(this.direction),l=-Jn.dot(Er),c=Jn.lengthSq(),u=Math.abs(1-a*a),d,p,h,g;if(u>0)if(d=a*l-o,p=a*o-l,g=r*u,d>=0)if(p>=-g)if(p<=g){let _=1/u;d*=_,p*=_,h=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),h=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Io).addScaledVector(Er,p),h}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,s,r){Po.subVectors(t,e),Tr.subVectors(n,e),Do.crossVectors(Po,Tr);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);let l=o*this.direction.dot(Tr.crossVectors(Jn,Tr));if(l<0)return null;let c=o*this.direction.dot(Po.cross(Jn));if(c<0||l+c>a)return null;let u=-o*Jn.dot(Do);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,p,h,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,p,h,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,p,h,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,h=l*d,g=c*u,_=c*d;t[0]=p+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,h=l*d,g=c*u,_=c*d;t[0]=p-_*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=p*c+_,t[1]=l*d,t[5]=_*c+p,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-p*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=p-_*d}else if(e.order==="XZY"){let p=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+_,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Gd)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Kn.crossVectors(n,$t),Kn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Kn.crossVectors(n,$t)),Kn.normalize(),wr.crossVectors($t,Kn),s[0]=Kn.x,s[4]=wr.x,s[8]=$t.x,s[1]=Kn.y,s[5]=wr.y,s[9]=$t.y,s[2]=Kn.z,s[6]=wr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],h=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],E=n[7],y=n[11],R=n[15],T=s[0],S=s[4],C=s[8],v=s[12],M=s[1],L=s[5],B=s[9],q=s[13],X=s[2],K=s[6],Y=s[10],ie=s[14],z=s[3],ce=s[7],me=s[11],Te=s[15];return r[0]=a*T+o*M+l*X+c*z,r[4]=a*S+o*L+l*K+c*ce,r[8]=a*C+o*B+l*Y+c*me,r[12]=a*v+o*q+l*ie+c*Te,r[1]=u*T+d*M+p*X+h*z,r[5]=u*S+d*L+p*K+h*ce,r[9]=u*C+d*B+p*Y+h*me,r[13]=u*v+d*q+p*ie+h*Te,r[2]=g*T+_*M+m*X+f*z,r[6]=g*S+_*L+m*K+f*ce,r[10]=g*C+_*B+m*Y+f*me,r[14]=g*v+_*q+m*ie+f*Te,r[3]=w*T+E*M+y*X+R*z,r[7]=w*S+E*L+y*K+R*ce,r[11]=w*C+E*B+y*Y+R*me,r[15]=w*v+E*q+y*ie+R*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],h=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*h-n*l*h)+_*(+t*l*h-t*c*p+r*a*p-s*a*h+s*c*u-r*l*u)+m*(+t*c*d-t*o*h-r*a*d+n*a*h+r*o*u-n*c*u)+f*(-s*o*u-t*l*d+t*o*p+s*a*d-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],h=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=d*m*c-_*p*c+_*l*h-o*m*h-d*l*f+o*p*f,E=g*p*c-u*m*c-g*l*h+a*m*h+u*l*f-a*p*f,y=u*_*c-g*d*c+g*o*h-a*_*h-u*o*f+a*d*f,R=g*d*l-u*_*l-g*o*p+a*_*p+u*o*m-a*d*m,T=t*w+n*E+s*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return e[0]=w*S,e[1]=(_*p*r-d*m*r-_*s*h+n*m*h+d*s*f-n*p*f)*S,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*S,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*h-n*l*h)*S,e[4]=E*S,e[5]=(u*m*r-g*p*r+g*s*h-t*m*h-u*s*f+t*p*f)*S,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*S,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*h+t*l*h)*S,e[8]=y*S,e[9]=(g*d*r-u*_*r-g*n*h+t*_*h+u*n*f-t*d*f)*S,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*S,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*h-t*o*h)*S,e[12]=R*S,e[13]=(u*_*s-g*d*s+g*n*p-t*_*p-u*n*m+t*d*m)*S,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*S,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*p+t*o*p)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,p=r*c,h=r*u,g=r*d,_=a*u,m=a*d,f=o*d,w=l*c,E=l*u,y=l*d,R=n.x,T=n.y,S=n.z;return s[0]=(1-(_+f))*R,s[1]=(h+y)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(p+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+E)*S,s[9]=(m-w)*S,s[10]=(1-(p+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),o=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);let c=1/r,u=1/a,d=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),h=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ks)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),h=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===gn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ks)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new P,pn=new ht,Hd=new P(0,0,0),Gd=new P(1,1,1),Kn=new P,wr=new P,$t=new P,fl=new ht,pl=new kn,_n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wd=0,ml=new P,$i=new kn,Un=new ht,Ar=new P,Ds=new P,qd=new P,Xd=new kn,gl=new P(1,0,0),vl=new P(0,1,0),_l=new P(0,0,1),xl={type:"added"},Yd={type:"removed"},Zi={type:"childadded",child:null},Lo={type:"childremoved",child:null},Ut=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new _n,n=new kn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ds,Ar,this.up):Un.lookAt(Ar,Ds,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new P,Nn=new P,Uo=new P,Fn=new P,Ji=new P,Ki=new P,yl=new P,No=new P,Fo=new P,Oo=new P,Bo=new ft,zo=new ft,ko=new ft,ei=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Nn.subVectors(n,t),Uo.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(Nn),l=mn.dot(Uo),c=Nn.dot(Nn),u=Nn.dot(Uo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,h=(c*l-o*u)*p,g=(a*u-o*l)*p;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bo.setScalar(0),zo.setScalar(0),ko.setScalar(0),Bo.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Nn.subVectors(e,t),mn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),mn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ji.subVectors(s,n),Ki.subVectors(r,n),No.subVectors(e,n);let l=Ji.dot(No),c=Ki.dot(No);if(l<=0&&c<=0)return t.copy(n);Fo.subVectors(e,s);let u=Ji.dot(Fo),d=Ki.dot(Fo);if(u>=0&&d<=u)return t.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ji,a);Oo.subVectors(e,r);let h=Ji.dot(Oo),g=Ki.dot(Oo);if(g>=0&&h<=g)return t.copy(r);let _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ki,o);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return yl.subVectors(r,s),o=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(yl,o);let f=1/(m+_+p);return a=_*f,o=p*f,t.copy(n).addScaledVector(Ji,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=bc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vo(a,r,e+1/3),this.g=Vo(a,r,e),this.b=Vo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.workingToColorSpace(Lt.copy(this),e),Math.round(He(Lt.r*255,0,255))*65536+Math.round(He(Lt.g*255,0,255))*256+Math.round(He(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){Ze.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Cr);let n=Ns(jn.h,Cr.h,t),s=Ns(jn.s,Cr.s,t),r=Ns(jn.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ge;Ge.NAMES=_u;var $d=0,si=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=xi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Hr,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Hr&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new P,Rr=new we,Zd=0,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}};var Ws=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qs=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jd=0,sn=new ht,Ho=new Ut,ji=new P,Zt=new ii,Ls=new ii,At=new P,Ht=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?qs:Ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Zt.min,Ls.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Ls.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Ls.min),Zt.expandByPoint(Ls.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),At.add(ji)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;let c=new P,u=new P,d=new P,p=new we,h=new we,g=new we,_=new P,m=new P;function f(C,v,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),p.fromBufferAttribute(r,C),h.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),h.sub(p),g.sub(p);let L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),o[C].add(_),o[v].add(_),o[M].add(_),l[C].add(m),l[v].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,v=w.length;C<v;++C){let M=w[C],L=M.start,B=M.count;for(let q=L,X=L+B;q<X;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let E=new P,y=new P,R=new P,T=new P;function S(C){R.fromBufferAttribute(s,C),T.copy(R);let v=o[C];E.copy(v),E.sub(R.multiplyScalar(R.dot(v))).normalize(),y.crossVectors(T,v);let L=y.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,L)}for(let C=0,v=w.length;C<v;++C){let M=w[C],L=M.start,B=M.count;for(let q=L,X=L+B;q<X;q+=3)S(e.getX(q+0)),S(e.getX(q+1)),S(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let p=0,h=e.count;p<h;p+=3){let g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let f=0;f<u;f++)p[g++]=c[h++]}return new Jt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],h=e(p,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ml=new ht,gi=new Gs,Ir=new os,bl=new P,Pr=new P,Dr=new P,Lr=new P,Go=new P,Ur=new P,Sl=new P,Nr=new P,tt=class extends Ut{constructor(e=new Ht,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Go.fromBufferAttribute(d,e),a?Ur.addScaledVector(Go,u):Ur.addScaledVector(Go.sub(t),u))}t.add(Ur)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Ir.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ir,bl)===null||gi.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],w=Math.max(m.start,h.start),E=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,R=E;y<R;y+=3){let T=o.getX(y),S=o.getX(y+1),C=o.getX(y+2);s=Fr(this,f,e,n,c,u,d,T,S,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,f=_;m<f;m+=3){let w=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Fr(this,a,e,n,c,u,d,w,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let m=p[g],f=a[m.materialIndex],w=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,R=E;y<R;y+=3){let T=y,S=y+1,C=y+2;s=Fr(this,f,e,n,c,u,d,T,S,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,f=_;m<f;m+=3){let w=m,E=m+1,y=m+2;s=Fr(this,a,e,n,c,u,d,w,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Kd(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Dr),i.getVertexPosition(c,Lr);let u=Kd(i,e,t,n,Pr,Dr,Lr,Sl);if(u){let d=new P;ei.getBarycoord(Sl,Pr,Dr,Lr,d),s&&(u.uv=ei.getInterpolatedAttribute(s,o,l,c,d,new we)),r&&(u.uv1=ei.getInterpolatedAttribute(r,o,l,c,d,new we)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};ei.getNormal(Pr,Dr,Lr,p.normal),u.face=p,u.barycoord=d}return u}var Kt=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],p=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function g(_,m,f,w,E,y,R,T,S,C,v){let M=y/S,L=R/C,B=y/2,q=R/2,X=T/2,K=S+1,Y=C+1,ie=0,z=0,ce=new P;for(let me=0;me<Y;me++){let Te=me*L-q;for(let ke=0;ke<K;ke++){let nt=ke*M-B;ce[_]=nt*w,ce[m]=Te*E,ce[f]=X,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(ke/S),d.push(1-me/C),ie+=1}}for(let me=0;me<C;me++)for(let Te=0;Te<S;Te++){let ke=p+Te+K*me,nt=p+Te+K*(me+1),je=p+(Te+1)+K*(me+1),Xe=p+(Te+1)+K*me;l.push(ke,nt,Xe),l.push(nt,je,Xe),z+=6}o.addGroup(h,z,v),h+=z,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ec(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var xu={clone:Ui,merge:Nt},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xs=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new P,El=new we,Tl=new we,Rt=class extends Xs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,El,Tl),t.subVectors(Tl,El)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qi=-90,es=1,Zr=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Qi,es,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Qi,es,e,t);r.layers=this.layers,this.add(r);let a=new Rt(Qi,es,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Qi,es,e,t);o.layers=this.layers,this.add(o);let l=new Rt(Qi,es,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ys=class extends Vt{constructor(e=[],t=Pi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jr=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ys(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Hn});r.uniforms.tEquirect.value=t;let a=new tt(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=vn),new Zr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},yt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},th={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(th)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var $s=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Wo=new P,nh=new P,ih=new ze,Tn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wo.subVectors(n,t).cross(nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ih.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new os,sh=new we(.5,.5),Or=new P,us=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],h=r[7],g=r[8],_=r[9],m=r[10],f=r[11],w=r[12],E=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,h-u,f-g,R-w).normalize(),s[1].setComponents(c+a,h+u,f+g,R+w).normalize(),s[2].setComponents(c+o,h+d,f+_,R+E).normalize(),s[3].setComponents(c-o,h-d,f-_,R-E).normalize(),n)s[4].setComponents(l,p,m,y).normalize(),s[5].setComponents(c-l,h-p,f-m,R-y).normalize();else if(s[4].setComponents(c-l,h-p,f-m,R-y).normalize(),t===gn)s[5].setComponents(c+l,h+p,f+m,R+y).normalize();else if(t===ks)s[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);let t=sh.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zs=class extends Vt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Js=class extends Vt{constructor(e,t,n=ci,s,r,a,o=rn,l=rn,c,u=is,d=1){if(u!==is&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ks=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var js=class i extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let h=n+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],h=[],g=0,_=[],m=n/2,f=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(h,2));function w(){let y=new P,R=new P,T=0,S=(t-e)/n;for(let C=0;C<=r;C++){let v=[],M=C/r,L=M*(t-e)+e;for(let B=0;B<=s;B++){let q=B/s,X=q*l+o,K=Math.sin(X),Y=Math.cos(X);R.x=L*K,R.y=-M*n+m,R.z=L*Y,d.push(R.x,R.y,R.z),y.set(K,S,Y).normalize(),p.push(y.x,y.y,y.z),h.push(q,1-M),v.push(g++)}_.push(v)}for(let C=0;C<s;C++)for(let v=0;v<r;v++){let M=_[v][C],L=_[v+1][C],B=_[v+1][C+1],q=_[v][C+1];(e>0||v!==0)&&(u.push(M,L,q),T+=3),(t>0||v!==r-1)&&(u.push(L,B,q),T+=3)}c.addGroup(f,T,0),f+=T}function E(y){let R=g,T=new we,S=new P,C=0,v=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*M,0),p.push(0,M,0),h.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let X=B/s*l+o,K=Math.cos(X),Y=Math.sin(X);S.x=v*Y,S.y=m*M,S.z=v*K,d.push(S.x,S.y,S.z),p.push(0,M,0),T.x=K*.5+.5,T.y=Y*.5*M+.5,h.push(T.x,T.y),g++}for(let B=0;B<s;B++){let q=R+B,X=L+B;y===!0?u.push(X,X+1,q):u.push(X+1,X,q),C+=3}c.addGroup(f,C,y===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Si=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qs=class i extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let E=new P,y=new P,R=new P;for(let T=0;T<t.length;T+=3)h(t[T+0],E),h(t[T+1],y),h(t[T+2],R),l(E,y,R,w)}function l(w,E,y,R){let T=R+1,S=[];for(let C=0;C<=T;C++){S[C]=[];let v=w.clone().lerp(y,C/T),M=E.clone().lerp(y,C/T),L=T-C;for(let B=0;B<=L;B++)B===0&&C===T?S[C][B]=v:S[C][B]=v.clone().lerp(M,B/L)}for(let C=0;C<T;C++)for(let v=0;v<2*(T-C)-1;v++){let M=Math.floor(v/2);v%2===0?(p(S[C][M+1]),p(S[C+1][M]),p(S[C][M])):(p(S[C][M+1]),p(S[C+1][M+1]),p(S[C+1][M]))}}function c(w){let E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(w),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){let w=new P;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];let y=m(w)/2/Math.PI+.5,R=f(w)/Math.PI+.5;a.push(y,1-R)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){let E=a[w+0],y=a[w+2],R=a[w+4],T=Math.max(E,y,R),S=Math.min(E,y,R);T>.9&&S<.1&&(E<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),R<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function h(w,E){let y=w*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){let w=new P,E=new P,y=new P,R=new P,T=new we,S=new we,C=new we;for(let v=0,M=0;v<r.length;v+=9,M+=6){w.set(r[v+0],r[v+1],r[v+2]),E.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),T.set(a[M+0],a[M+1]),S.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),R.copy(w).add(E).add(y).divideScalar(3);let L=m(R);_(T,M+0,w,L),_(S,M+2,E,L),_(C,M+4,y,L)}}function _(w,E,y,R){R<0&&w.x===1&&(a[E]=w.x-1),y.x===0&&y.z===0&&(a[E]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,h=(a-u)/p;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new ht;for(let h=0;h<=e;h++){let g=h/e;s[h]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(He(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},er=class extends an{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,h=c-this.aY;l=p*u-h*d+this.aX,c=p*d+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kr=class extends er{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;p*=u,h*=u,s(a,o,p,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Br=new P,qo=new Tc,Xo=new Tc,Yo=new Tc,jr=class extends an{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qo.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,g,_,m),Xo.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,g,_,m),Yo.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),Xo.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),Yo.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(qo.calc(l),Xo.calc(l),Yo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rh(i,e){let t=1-i;return t*t*e}function ah(i,e){return 2*(1-i)*i*e}function oh(i,e){return i*i*e}function Fs(i,e,t,n){return rh(i,e)+ah(i,t)+oh(i,n)}function ch(i,e){let t=1-i;return t*t*t*e}function lh(i,e){let t=1-i;return 3*t*t*i*e}function uh(i,e){return 3*(1-i)*i*i*e}function dh(i,e){return i*i*i*e}function Os(i,e,t,n,s){return ch(i,e)+lh(i,t)+uh(i,n)+dh(i,s)}var Qr=class extends an{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,s.x,r.x,a.x,o.x),Os(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends an{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,s.x,r.x,a.x,o.x),Os(e,s.y,r.y,a.y,o.y),Os(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends an{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends an{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends an{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ei=class extends an{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y),Fs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(wl(o,l.x,c.x,u.x,d.x),wl(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:Kr,CatmullRomCurve3:jr,CubicBezierCurve:Qr,CubicBezierCurve3:ea,EllipseCurve:er,LineCurve:ta,LineCurve3:na,QuadraticBezierCurve:ia,QuadraticBezierCurve3:Ei,SplineCurve:sa});var tr=class i extends Qs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nr=class i extends Qs{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ti=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,p=t/l,h=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let w=f*p-a;for(let E=0;E<c;E++){let y=E*d-r;g.push(y,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let E=w+c*f,y=w+c*(f+1),R=w+1+c*(f+1),T=w+1+c*f;h.push(E,y,T),h.push(y,R,T)}this.setIndex(h),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var wi=class i extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new P,p=new P,h=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let w=[],E=f/n,y=0;f===0&&a===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(T+y,1-E),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let E=u[f][w+1],y=u[f][w],R=u[f+1][w],T=u[f+1][w+1];(f!==0||a>0)&&h.push(E,y,T),(f!==n-1||l<Math.PI)&&h.push(y,R,T)}this.setIndex(h),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ds=class i extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new P,d=new P,p=new P;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){let _=g/s*r,m=h/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){let _=(s+1)*h+g-1,m=(s+1)*(h-1)+g-1,f=(s+1)*(h-1)+g,w=(s+1)*h+g;a.push(_,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ir=class i extends Ht{constructor(e=new Ei(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new we,u=new P,d=[],p=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(h,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),w(),f()}function m(E){u=e.getPointAt(E/t,u);let y=a.normals[E],R=a.binormals[E];for(let T=0;T<=s;T++){let S=T/s*Math.PI*2,C=Math.sin(S),v=-Math.cos(S);l.x=v*y.x+C*R.x,l.y=v*y.y+C*R.y,l.z=v*y.z+C*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let R=(s+1)*(E-1)+(y-1),T=(s+1)*E+(y-1),S=(s+1)*E+y,C=(s+1)*(E-1)+y;g.push(R,T,C),g.push(T,S,C)}}function w(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new hh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var jt=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ra=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},aa=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oa=class extends Ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zo,endingEnd:Zo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jo:r=e,o=2*t-n;break;case Ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jo:a=e,l=2*n-t;break;case Ko:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-p*m+2*p*_-p*g,w=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,E=(-1-h)*m+(1.5+h)*_+.5*g,y=h*m-h*_;for(let R=0;R!==o;++R)r[R]=f*a[u+R]+w*a[c+R]+E*a[l+R]+y*a[d+R];return r}},ca=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*u;return r}},la=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,p=d-n,h=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[p+g]||_!==t[h+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let h=0;h!==n;++h)t[p+h]=t[d+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=qr;var ri=class extends Qt{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Bs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};ua.prototype.ValueTypeName="color";var da=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="number";var ha=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sr=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends Qt{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Bs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};fa.prototype.ValueTypeName="vector";var pa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},yu=new pa,ma=class{constructor(e){this.manager=e!==void 0?e:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ci=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$o=new ht,Al=new P,Cl=new P,ec=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ar=class extends Xs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends ec{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ga=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wc="\\[\\]\\.:\\/",ph=new RegExp("["+wc+"]","g"),Ac="[^"+wc+"]",mh="[^"+wc.replace("\\.","")+"]",gh=/((?:WC+[\/:])*)/.source.replace("WC",Ac),vh=/(WCOD+)?/.source.replace("WCOD",mh),_h=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),xh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),yh=new RegExp("^"+gh+vh+_h+xh+"$"),Mh=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ph,"")}static parseTrackName(e){let t=yh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=nc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);var Rl=new ht,Ii=class{constructor(e,t,n=0,s=1/0){this.ray=new Gs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rl),this}intersectObject(e,t=!0,n=[]){return ic(e,this,n,t),n.sort(Il),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ic(e[s],this,n,t);return n.sort(Il),n}};function Il(i,e){return i.distance-e.distance}function ic(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ic(r[a],e,t,!0)}}function Cc(i,e,t,n){let s=bh(n);switch(t){case mc:return i*e;case vc:return i*e/s.components*s.byteLength;case Pa:return i*e/s.components*s.byteLength;case _c:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case lr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case to:case no:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bh(i){switch(i){case yn:case dc:return{byteLength:1,components:1};case fs:case hc:case ps:return{byteLength:2,components:1};case Ra:case Ia:return{byteLength:2,components:4};case ci:case Ca:case Cn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Wu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Eh(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<d.length;h++){let g=d[p],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let h=0,g=d.length;h<g;h++){let _=d[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
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
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
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
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
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
#endif`,zh=`#ifdef USE_BUMPMAP
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$h=`#define PI 3.141592653589793
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
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jh=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Lp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Th,alphahash_pars_fragment:wh,alphamap_fragment:Ah,alphamap_pars_fragment:Ch,alphatest_fragment:Rh,alphatest_pars_fragment:Ih,aomap_fragment:Ph,aomap_pars_fragment:Dh,batching_pars_vertex:Lh,batching_vertex:Uh,begin_vertex:Nh,beginnormal_vertex:Fh,bsdfs:Oh,iridescence_fragment:Bh,bumpmap_pars_fragment:zh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:Wh,color_pars_fragment:qh,color_pars_vertex:Xh,color_vertex:Yh,common:$h,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Kh,displacementmap_vertex:jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:ef,colorspace_fragment:tf,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:cf,fog_vertex:lf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:hf,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:vf,lights_toon_fragment:xf,lights_toon_pars_fragment:yf,lights_phong_fragment:Mf,lights_phong_pars_fragment:bf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Pf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:qf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:jf,opaque_fragment:Qf,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:cp,shadowmap_vertex:lp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:hp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:vp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:yp,uv_pars_fragment:Mp,uv_pars_vertex:bp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:Tp,background_frag:wp,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:Rp,cube_frag:Ip,depth_vert:Pp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:kp,meshlambert_vert:Vp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:qp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:Kp,meshtoon_frag:jp,points_vert:Qp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Rn={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Rn.physical={uniforms:Nt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var co={r:0,b:0,g:0},Ni=new _n,rm=new ht;function am(i,e,t,n,s,r,a){let o=new Ge(0),l=r===!0?0:1,c,u,d=null,p=0,h=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1,R=g(E);R===null?f(o,l):R&&R.isColor&&(f(R,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===or)?(u===void 0&&(u=new tt(new Kt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ui(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Ni)),u.material.toneMapped=Ze.getTransfer(R.colorSpace)!==et,(d!==R||p!==R.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,h=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new tt(new Ti(2,2),new xn({name:"BackgroundMaterial",uniforms:Ui(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(R.colorSpace)!==et,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,p=R.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(co,Ec(i)),n.buffers.color.setClear(co.r,co.g,co.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m,dispose:w}}function om(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(M,L,B,q,X){let K=!1,Y=d(q,B,L);r!==Y&&(r=Y,c(r.object)),K=h(M,q,B,X),K&&g(M,q,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(M,L,B,q),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,B){let q=B.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let K=X[L.id];K===void 0&&(K={},X[L.id]=K);let Y=K[q];return Y===void 0&&(Y=p(l()),K[q]=Y),Y}function p(M){let L=[],B=[],q=[];for(let X=0;X<t;X++)L[X]=0,B[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:q,object:M,attributes:{},index:null}}function h(M,L,B,q){let X=r.attributes,K=L.attributes,Y=0,ie=B.getAttributes();for(let z in ie)if(ie[z].location>=0){let me=X[z],Te=K[z];if(Te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;Y++}return r.attributesNum!==Y||r.index!==q}function g(M,L,B,q){let X={},K=L.attributes,Y=0,ie=B.getAttributes();for(let z in ie)if(ie[z].location>=0){let me=K[z];me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));let Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),X[z]=Te,Y++}r.attributes=X,r.attributesNum=Y,r.index=q}function _(){let M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){let B=r.newAttributes,q=r.enabledAttributes,X=r.attributeDivisors;B[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),X[M]!==L&&(i.vertexAttribDivisor(M,L),X[M]=L)}function w(){let M=r.newAttributes,L=r.enabledAttributes;for(let B=0,q=L.length;B<q;B++)L[B]!==M[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function E(M,L,B,q,X,K,Y){Y===!0?i.vertexAttribIPointer(M,L,B,X,K):i.vertexAttribPointer(M,L,B,q,X,K)}function y(M,L,B,q){_();let X=q.attributes,K=B.getAttributes(),Y=L.defaultAttributeValues;for(let ie in K){let z=K[ie];if(z.location>=0){let ce=X[ie];if(ce===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){let me=ce.normalized,Te=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;let nt=ke.buffer,je=ke.type,Xe=ke.bytesPerElement,Q=je===i.INT||je===i.UNSIGNED_INT||ce.gpuType===Ca;if(ce.isInterleavedBufferAttribute){let se=ce.data,fe=se.stride,Re=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<z.locationSize;Se++)f(z.location+Se,se.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<z.locationSize;Se++)m(z.location+Se);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Se=0;Se<z.locationSize;Se++)E(z.location+Se,Te/z.locationSize,je,me,fe*Xe,(Re+Te/z.locationSize*Se)*Xe,Q)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)f(z.location+se,ce.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let se=0;se<z.locationSize;se++)E(z.location+se,Te/z.locationSize,je,me,Te*Xe,Te/z.locationSize*se*Xe,Q)}}else if(Y!==void 0){let me=Y[ie];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(z.location,me);break;case 3:i.vertexAttrib3fv(z.location,me);break;case 4:i.vertexAttrib4fv(z.location,me);break;default:i.vertexAttrib1fv(z.location,me)}}}}w()}function R(){C();for(let M in n){let L=n[M];for(let B in L){let q=L[B];for(let X in q)u(q[X].object),delete q[X];delete L[B]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let B in L){let q=L[B];for(let X in q)u(q[X].object),delete q[X];delete L[B]}delete n[M.id]}function S(M){for(let L in n){let B=n[L];if(B[M.id]===void 0)continue;let q=B[M.id];for(let X in q)u(q[X].object),delete q[X];delete B[M.id]}}function C(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function cm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,p){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==cn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==yn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Cn&&!C)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function um(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Tn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let h=d.length!==0||p||n!==0||s;return s=p,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,h){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,E=w*4,y=f.clippingState||null;l.value=y,y=u(g,p,E,h);for(let R=0;R!==E;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,h,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=h+_*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=h;E!==_;++E,y+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dm(i){let e=new WeakMap;function t(a,o){return o===Ta?a.mapping=Pi:o===wa&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ta||o===wa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var xs=4,Mu=[.125,.215,.35,.446,.526,.582],Bi=20,Rc=new ar,bu=new Ge,Ic=null,Pc=0,Dc=0,Lc=!1,Oi=(1+Math.sqrt(5))/2,_s=1/Oi,Su=[new P(-Oi,_s,0),new P(Oi,_s,0),new P(-_s,0,Oi),new P(_s,0,Oi),new P(0,Oi,-_s),new P(0,Oi,_s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],hm=new P,ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=hm}=r;Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Pc,Dc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ps,format:cn,colorSpace:Mi,depthBuffer:!1},s=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=pm(r,e,t)}return s}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,n,s,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(bu),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new Vn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new tt(new Kt,_),f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(bu),f=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let R=this._cubeSize;lo(s,y*R,E>2?R:0,R,R),d.setRenderTarget(s),f&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Pi||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Su[(s-r-1)%Su.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new tt(this._lodPlanes[s],c),p=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);let f=[],w=0;for(let S=0;S<Bi;++S){let C=S/_,v=Math.exp(-C*C/2);f.push(v),S===0?w+=v:S<m&&(w+=2*v)}for(let S=0;S<f.length;S++)f[S]=f[S]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;let y=this._sizeLods[s],R=3*y*(s>E-xs?s-E+xs:0),T=4*(this._cubeSize-y);lo(t,R,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Rc)}};function fm(i){let e=[],t=[],n=[],s=i,r=i-xs+1+Mu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-xs?l=Mu[a-i+xs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*h),E=new Float32Array(m*g*h),y=new Float32Array(f*g*h);for(let T=0;T<h;T++){let S=T%3*2/3-1,C=T>2?0:-1,v=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];w.set(v,_*g*T),E.set(p,m*g*T);let M=[T,T,T,T,T,T];y.set(M,f*g*T)}let R=new Ht;R.setAttribute("position",new Jt(w,_)),R.setAttribute("uv",new Jt(E,m)),R.setAttribute("faceIndex",new Jt(y,f)),e.push(R),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pm(i,e,t){let n=new Float32Array(Bi),s=new P(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Tu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function wu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function mm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ta||l===wa,u=l===Pi||l===Di;if(c||u){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new ho(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let h=o.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new ho(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];let h=r.get(p);h&&(e.remove(h),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let h in p)e.update(p[h],i.ARRAY_BUFFER)}function c(d){let p=[],h=d.index,g=d.attributes.position,_=0;if(h!==null){let w=h.array;_=h.version;for(let E=0,y=w.length;E<y;E+=3){let R=w[E+0],T=w[E+1],S=w[E+2];p.push(R,T,T,S,S,R)}}else if(g!==void 0){let w=g.array;_=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){let R=E+0,T=E+1,S=E+2;p.push(R,T,T,S,S,R)}}else return;let m=new(Sc(p)?qs:Ws)(p,1);m.version=_;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){let p=r.get(d);if(p){let h=d.index;h!==null&&p.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function _m(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function c(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,p*a,g),t.update(h,n,g))}function u(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=h[f];t.update(m,n,1)}function d(p,h,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,h[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,p,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=h[w]*_[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let v=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",v)};p!==void 0&&p.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;h===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*R*4*d),S=new Hs(T,y,R,d);S.type=Cn,S.needsUpdate=!0;let C=E*4;for(let M=0;M<d;M++){let L=m[M],B=f[M],q=w[M],X=y*R*4*M;for(let K=0;K<L.count;K++){let Y=K*C;h===!0&&(s.fromBufferAttribute(L,K),T[X+Y+0]=s.x,T[X+Y+1]=s.y,T[X+Y+2]=s.z,T[X+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,K),T[X+Y+4]=s.x,T[X+Y+5]=s.y,T[X+Y+6]=s.z,T[X+Y+7]=0),_===!0&&(s.fromBufferAttribute(q,K),T[X+Y+8]=s.x,T[X+Y+9]=s.y,T[X+Y+10]=s.z,T[X+Y+11]=q.itemSize===4?s.w:1)}}p={count:d,texture:S,size:new we(y,R)},n.set(o,p),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Mm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var qu=new Vt,Au=new Js(1,1),Xu=new Hs,Yu=new $r,$u=new Ys,Cu=[],Ru=[],Iu=new Float32Array(16),Pu=new Float32Array(9),Du=new Float32Array(4);function bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cu[s];if(r===void 0&&(r=new Float32Array(s),Cu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),bt(t,n)}}function Am(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),bt(t,n)}}function Cm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),bt(t,n)}}function Rm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Lm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Om(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=yc,r=Au):r=qu,t.setTexture2D(e||r,s)}function Bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yu,s)}function zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$u,s)}function km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xu,s)}function Vm(i){switch(i){case 5126:return bm;case 35664:return Sm;case 35665:return Em;case 35666:return Tm;case 35674:return wm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}function Hm(i,e){i.uniform1fv(this.addr,e)}function Gm(i,e){let t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function Wm(i,e){let t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function qm(i,e){let t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Xm(i,e){let t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ym(i,e){let t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $m(i,e){let t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zm(i,e){i.uniform1iv(this.addr,e)}function Jm(i,e){i.uniform2iv(this.addr,e)}function Km(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Qm(i,e){i.uniform1uiv(this.addr,e)}function eg(i,e){i.uniform2uiv(this.addr,e)}function tg(i,e){i.uniform3uiv(this.addr,e)}function ng(i,e){i.uniform4uiv(this.addr,e)}function ig(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||qu,r[a])}function sg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yu,r[a])}function rg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$u,r[a])}function ag(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xu,r[a])}function og(i){switch(i){case 5126:return Hm;case 35664:return Gm;case 35665:return Wm;case 35666:return qm;case 35674:return Xm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}var Nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vm(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=og(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Lu(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),a=Uc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lu(t,c===void 0?new Nc(o,i,e):new Fc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Oc(o),Lu(t,d)),t=d}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);cg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lg=37297,ug=0;function dg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nu=new ze;function hg(i){Ze._getMatrix(Nu,Ze.workingColorSpace,i);let e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dg(i.getShaderSource(e),o)}else return r}function fg(i,e){let t=hg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pg(i,e){let t;switch(e){case Ql:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case hs:t="ACESFilmic";break;case iu:t="AgX";break;case su:t="Neutral";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uo=new P;function mg(){Ze.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function vg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _g(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fr(i){return i!==""}function Ou(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(xg,Mg)}var yg=new Map;function Mg(i,e){let t=Ve[e];if(t===void 0){let n=yg.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(i){return i.replace(bg,Sg)}function Sg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Eg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===va?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Tg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Kl:e="ENVMAP_BLENDING_MIX";break;case jl:e="ENVMAP_BLENDING_ADD";break}return e}function Cg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Eg(t),c=Tg(t),u=wg(t),d=Ag(t),p=Cg(t),h=gg(t),g=vg(r),_=s.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Gn?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,fg("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Bc(a),a=Ou(a,t),a=Bu(a,t),o=Bc(o),o=Ou(o,t),o=Bu(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=w+m+a,y=w+f+o,R=Uu(s,s.VERTEX_SHADER,E),T=Uu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(T)||"",K=B.trim(),Y=q.trim(),ie=X.trim(),z=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{let me=Fu(s,R,"vertex"),Te=Fu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+me+`
`+Te)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||ie==="")&&(ce=!1);ce&&(L.diagnostics={runnable:z,programLog:K,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(R),s.deleteShader(T),C=new ys(s,_),v=_g(s,_)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,lg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ug++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}var Ig=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kc(e),t.set(e,n)),n}},kc=class{constructor(e){this.id=Ig++,this.code=e,this.usedTimes=0}};function Pg(i,e,t,n,s,r,a){let o=new cs,l=new zc,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,h=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,L,B,q){let X=B.fog,K=q.geometry,Y=v.isMeshStandardMaterial?B.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),z=ie&&ie.mapping===or?ie.image.height:null,ce=g[v.type];v.precision!==null&&(h=s.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=me!==void 0?me.length:0,ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let nt,je,Xe,Q;if(ce){let $e=Rn[ce];nt=$e.vertexShader,je=$e.fragmentShader}else nt=v.vertexShader,je=v.fragmentShader,l.update(v),Xe=l.getVertexShaderID(v),Q=l.getFragmentShaderID(v);let se=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Re=q.isInstancedMesh===!0,Se=q.isBatchedMesh===!0,Oe=!!v.map,vt=!!v.matcap,I=!!ie,Ye=!!v.aoMap,Fe=!!v.lightMap,Ie=!!v.bumpMap,xe=!!v.normalMap,Ke=!!v.displacementMap,be=!!v.emissiveMap,Be=!!v.metalnessMap,mt=!!v.roughnessMap,ct=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,k=v.iridescence>0,Z=v.sheen>0,ne=v.transmission>0,$=ct&&!!v.anisotropyMap,D=A&&!!v.clearcoatMap,N=A&&!!v.clearcoatNormalMap,H=A&&!!v.clearcoatRoughnessMap,j=k&&!!v.iridescenceMap,V=k&&!!v.iridescenceThicknessMap,J=Z&&!!v.sheenColorMap,de=Z&&!!v.sheenRoughnessMap,ue=!!v.specularMap,te=!!v.specularColorMap,Me=!!v.specularIntensityMap,U=ne&&!!v.transmissionMap,ae=ne&&!!v.thicknessMap,le=!!v.gradientMap,ve=!!v.alphaMap,re=v.alphaTest>0,ee=!!v.alphaHash,_e=!!v.extensions,Ne=Gn;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ne=i.toneMapping);let Qe={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:je,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Se,batchingColor:Se&&q._colorsTexture!==null,instancing:Re,instancingColor:Re&&q.instanceColor!==null,instancingMorph:Re&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Mi,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:vt,envMap:I,envMapMode:I&&ie.mapping,envMapCubeUVHeight:z,aoMap:Ye,lightMap:Fe,bumpMap:Ie,normalMap:xe,displacementMap:p&&Ke,emissiveMap:be,normalMapObjectSpace:xe&&v.normalMapType===cu,normalMapTangentSpace:xe&&v.normalMapType===xc,metalnessMap:Be,roughnessMap:mt,anisotropy:ct,anisotropyMap:$,clearcoat:A,clearcoatMap:D,clearcoatNormalMap:N,clearcoatRoughnessMap:H,dispersion:x,iridescence:k,iridescenceMap:j,iridescenceThicknessMap:V,sheen:Z,sheenColorMap:J,sheenRoughnessMap:de,specularMap:ue,specularColorMap:te,specularIntensityMap:Me,transmission:ne,transmissionMap:U,thicknessMap:ae,gradientMap:le,opaque:v.transparent===!1&&v.blending===xi&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:ee,combine:v.combine,mapUv:Oe&&_(v.map.channel),aoMapUv:Ye&&_(v.aoMap.channel),lightMapUv:Fe&&_(v.lightMap.channel),bumpMapUv:Ie&&_(v.bumpMap.channel),normalMapUv:xe&&_(v.normalMap.channel),displacementMapUv:Ke&&_(v.displacementMap.channel),emissiveMapUv:be&&_(v.emissiveMap.channel),metalnessMapUv:Be&&_(v.metalnessMap.channel),roughnessMapUv:mt&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:D&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:N&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:V&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(v.sheenRoughnessMap.channel),specularMapUv:ue&&_(v.specularMap.channel),specularColorMapUv:te&&_(v.specularColorMap.channel),specularIntensityMapUv:Me&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:ae&&_(v.thicknessMap.channel),alphaMapUv:ve&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xe||ct),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(Oe||ve),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Bt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function f(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(w(M,v),E(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function w(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){let M=g[v.type],L;if(M){let B=Rn[M];L=xu.clone(B.uniforms)}else L=v.uniforms;return L}function R(v,M){let L;for(let B=0,q=u.length;B<q;B++){let X=u[B];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Rg(i,M,v,r),u.push(L)),L}function T(v){if(--v.usedTimes===0){let M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function S(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:S,programs:u,dispose:C}}function Dg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,h,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,p,h,g,_,m){let f=a(d,p,h,g,_,m);h.transmission>0?n.push(f):h.transparent===!0?s.push(f):t.push(f)}function l(d,p,h,g,_,m){let f=a(d,p,h,g,_,m);h.transmission>0?n.unshift(f):h.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||Lg),n.length>1&&n.sort(p||Vu),s.length>1&&s.sort(p||Vu)}function u(){for(let d=e,p=i.length;d<p;d++){let h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ug(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hu,i.set(n,[a])):s>=r.length?(a=new Hu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Fg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Og=0;function Bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zg(i){let e=new Ng,t=Fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ht,a=new ht;function o(c){let u=0,d=0,p=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let h=0,g=0,_=0,m=0,f=0,w=0,E=0,y=0,R=0,T=0,S=0;c.sort(Bg);for(let v=0,M=c.length;v<M;v++){let L=c[v],B=L.color,q=L.intensity,X=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*q,d+=B.g*q,p+=B.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);S++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ie=L.shadow,z=t.get(L);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=K,n.directionalShadowMatrix[h]=L.shadow.matrix,w++}n.directional[h]=Y,h++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[_]=Y;let ie=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ie.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=ie.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=K,y++}_++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ie=L.shadow,z=t.get(L);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[f]=Y,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==w||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==S)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=w,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=S,n.version=Og++)}function l(c,u){let d=0,p=0,h=0,g=0,_=0,m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let E=c[f];if(E.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){let y=n.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Gu(i){let e=new zg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Gu(i),e.set(s,[o])):r>=a.length?(o=new Gu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Gg(i,e,t){let n=new us,s=new we,r=new we,a=new ft,o=new ra({depthPacking:ou}),l=new aa,c={},u=t.maxTextureSize,d={[Bn]:Bt,[Bt]:Bn,[on]:on},p=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Vg,fragmentShader:Hg}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new tt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let f=this.type;this.render=function(T,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Hn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=f!==An&&this.type===An,X=f===An&&this.type!==An;for(let K=0,Y=T.length;K<Y;K++){let ie=T[K],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ce=z.getFrameExtents();if(s.multiply(ce),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||q===!0||X===!0){let Te=this.type!==An?{minFilter:rn,magFilter:rn}:{};z.map!==null&&z.map.dispose(),z.map=new wn(s.x,s.y,Te),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let me=z.getViewportCount();for(let Te=0;Te<me;Te++){let ke=z.getViewport(Te);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),B.viewport(a),z.updateMatrices(ie,Te),n=z.getFrustum(),y(S,C,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===An&&w(z,C),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,L)};function w(T,S){let C=e.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,C,p,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,C,h,_,null)}function E(T,S,C,v){let M=null,L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let B=M.uuid,q=S.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let K=X[q];K===void 0&&(K=M.clone(),X[q]=K,S.addEventListener("dispose",R)),M=K}if(M.visible=S.visible,M.wireframe=S.wireframe,v===An?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:d[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=C}return M}function y(T,S,C,v,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===An)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let q=e.update(T),X=T.material;if(Array.isArray(X)){let K=q.groups;for(let Y=0,ie=K.length;Y<ie;Y++){let z=K[Y],ce=X[z.materialIndex];if(ce&&ce.visible){let me=E(T,ce,v,M);T.onBeforeShadow(i,T,S,C,q,me,z),i.renderBufferDirect(C,null,q,me,T,z),T.onAfterShadow(i,T,S,C,q,me,z)}}}else if(X.visible){let K=E(T,X,v,M);T.onBeforeShadow(i,T,S,C,q,K,null),i.renderBufferDirect(C,null,q,K,T,null),T.onAfterShadow(i,T,S,C,q,K,null)}}let B=T.children;for(let q=0,X=B.length;q<X;q++)y(B[q],S,C,v,M)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let v=c[C],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var Wg={[_a]:xa,[ya]:Sa,[Ma]:Ea,[yi]:ba,[xa]:_a,[Sa]:ya,[Ea]:Ma,[ba]:yi};function qg(i,e){function t(){let U=!1,ae=new ft,le=null,ve=new ft(0,0,0,0);return{setMask:function(re){le!==re&&!U&&(i.colorMask(re,re,re,re),le=re)},setLocked:function(re){U=re},setClear:function(re,ee,_e,Ne,Qe){Qe===!0&&(re*=Ne,ee*=Ne,_e*=Ne),ae.set(re,ee,_e,Ne),ve.equals(ae)===!1&&(i.clearColor(re,ee,_e,Ne),ve.copy(ae))},reset:function(){U=!1,le=null,ve.set(-1,0,0,0)}}}function n(){let U=!1,ae=!1,le=null,ve=null,re=null;return{setReversed:function(ee){if(ae!==ee){let _e=e.get("EXT_clip_control");ee?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;let Ne=re;re=null,this.setClear(Ne)}},getReversed:function(){return ae},setTest:function(ee){ee?se(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ee){le!==ee&&!U&&(i.depthMask(ee),le=ee)},setFunc:function(ee){if(ae&&(ee=Wg[ee]),ve!==ee){switch(ee){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ee}},setLocked:function(ee){U=ee},setClear:function(ee){re!==ee&&(ae&&(ee=1-ee),i.clearDepth(ee),re=ee)},reset:function(){U=!1,le=null,ve=null,re=null,ae=!1}}}function s(){let U=!1,ae=null,le=null,ve=null,re=null,ee=null,_e=null,Ne=null,Qe=null;return{setTest:function($e){U||($e?se(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function($e){ae!==$e&&!U&&(i.stencilMask($e),ae=$e)},setFunc:function($e,qt,We){(le!==$e||ve!==qt||re!==We)&&(i.stencilFunc($e,qt,We),le=$e,ve=qt,re=We)},setOp:function($e,qt,We){(ee!==$e||_e!==qt||Ne!==We)&&(i.stencilOp($e,qt,We),ee=$e,_e=qt,Ne=We)},setLocked:function($e){U=$e},setClear:function($e){Qe!==$e&&(i.clearStencil($e),Qe=$e)},reset:function(){U=!1,ae=null,le=null,ve=null,re=null,ee=null,_e=null,Ne=null,Qe=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,h=[],g=null,_=!1,m=null,f=null,w=null,E=null,y=null,R=null,T=null,S=new Ge(0,0,0),C=0,v=!1,M=null,L=null,B=null,q=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ie=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=ie>=2);let ce=null,me={},Te=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),nt=new ft().fromArray(Te),je=new ft().fromArray(ke);function Xe(U,ae,le,ve){let re=new Uint8Array(4),ee=i.createTexture();i.bindTexture(U,ee),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<le;_e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ae+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return ee}let Q={};Q[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(yi),Ie(!1),xe(sc),se(i.CULL_FACE),Ye(Hn);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Re(U,ae){return d[U]!==ae?(i.bindFramebuffer(U,ae),d[U]=ae,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(U,ae){let le=h,ve=!1;if(U){le=p.get(ae),le===void 0&&(le=[],p.set(ae,le));let re=U.textures;if(le.length!==re.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,_e=re.length;ee<_e;ee++)le[ee]=i.COLOR_ATTACHMENT0+ee;le.length=re.length,ve=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ve=!0);ve&&i.drawBuffers(le)}function Oe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let vt={[ni]:i.FUNC_ADD,[Ul]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};vt[Fl]=i.MIN,vt[Ol]=i.MAX;let I={[Bl]:i.ZERO,[zl]:i.ONE,[kl]:i.SRC_COLOR,[Vr]:i.SRC_ALPHA,[Xl]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[Hl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[Hr]:i.ONE_MINUS_SRC_ALPHA,[ql]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[Yl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[Jl]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,ae,le,ve,re,ee,_e,Ne,Qe,$e){if(U===Hn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),U!==Ll){if(U!==m||$e!==v){if((f!==ni||y!==ni)&&(i.blendEquation(i.FUNC_ADD),f=ni,y=ni),$e)switch(U){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,E=null,R=null,T=null,S.set(0,0,0),C=0,m=U,v=$e}return}re=re||ae,ee=ee||le,_e=_e||ve,(ae!==f||re!==y)&&(i.blendEquationSeparate(vt[ae],vt[re]),f=ae,y=re),(le!==w||ve!==E||ee!==R||_e!==T)&&(i.blendFuncSeparate(I[le],I[ve],I[ee],I[_e]),w=le,E=ve,R=ee,T=_e),(Ne.equals(S)===!1||Qe!==C)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Qe),S.copy(Ne),C=Qe),m=U,v=!1}function Fe(U,ae){U.side===on?fe(i.CULL_FACE):se(i.CULL_FACE);let le=U.side===Bt;ae&&(le=!le),Ie(le),U.blending===xi&&U.transparent===!1?Ye(Hn):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ve=U.stencilWrite;o.setTest(ve),ve&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function xe(U){U!==Pl?(se(i.CULL_FACE),U!==L&&(U===sc?i.cullFace(i.BACK):U===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),L=U}function Ke(U){U!==B&&(Y&&i.lineWidth(U),B=U)}function be(U,ae,le){U?(se(i.POLYGON_OFFSET_FILL),(q!==ae||X!==le)&&(i.polygonOffset(ae,le),q=ae,X=le)):fe(i.POLYGON_OFFSET_FILL)}function Be(U){U?se(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function mt(U){U===void 0&&(U=i.TEXTURE0+K-1),ce!==U&&(i.activeTexture(U),ce=U)}function ct(U,ae,le){le===void 0&&(ce===null?le=i.TEXTURE0+K-1:le=ce);let ve=me[le];ve===void 0&&(ve={type:void 0,texture:void 0},me[le]=ve),(ve.type!==U||ve.texture!==ae)&&(ce!==le&&(i.activeTexture(le),ce=le),i.bindTexture(U,ae||Q[U]),ve.type=U,ve.texture=ae)}function A(){let U=me[ce];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(U){nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function de(U){je.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function ue(U,ae){let le=c.get(ae);le===void 0&&(le=new WeakMap,c.set(ae,le));let ve=le.get(U);ve===void 0&&(ve=i.getUniformBlockIndex(ae,U.name),le.set(U,ve))}function te(U,ae){let ve=c.get(ae).get(U);l.get(ae)!==ve&&(i.uniformBlockBinding(ae,ve,U.__bindingPointIndex),l.set(ae,ve))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,me={},d={},p=new WeakMap,h=[],g=null,_=!1,m=null,f=null,w=null,E=null,y=null,R=null,T=null,S=new Ge(0,0,0),C=0,v=!1,M=null,L=null,B=null,q=null,X=null,nt.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:fe,bindFramebuffer:Re,drawBuffers:Se,useProgram:Oe,setBlending:Ye,setMaterial:Fe,setFlipSided:Ie,setCullFace:xe,setLineWidth:Ke,setPolygonOffset:be,setScissorTest:Be,activeTexture:mt,bindTexture:ct,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:j,texImage3D:V,updateUBOMapping:ue,uniformBlockBinding:te,texStorage2D:N,texStorage3D:H,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:D,scissor:J,viewport:de,reset:Me}}function Xg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,d,p=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return h?new OffscreenCanvas(A,x):Vs("canvas")}function _(A,x,k){let Z=1,ne=ct(A);if((ne.width>k||ne.height>k)&&(Z=k/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Z*ne.width),D=Math.floor(Z*ne.height);d===void 0&&(d=g($,D));let N=x?g($,D):d;return N.width=$,N.height=D,N.getContext("2d").drawImage(A,0,0,$,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+D+")."),N}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,x,k,Z,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=x;if(x===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),x===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let D=ne?zs:Ze.getTransfer(Z);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=D===et?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(A,x){let k;return A?x===null||x===ci||x===ms?k=i.DEPTH24_STENCIL8:x===Cn?k=i.DEPTH32F_STENCIL8:x===fs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ci||x===ms?k=i.DEPTH_COMPONENT24:x===Cn?k=i.DEPTH_COMPONENT32F:x===fs&&(k=i.DEPTH_COMPONENT16),k}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){let x=A.target;x.removeEventListener("dispose",T),C(x),x.isVideoTexture&&u.delete(x)}function S(A){let x=A.target;x.removeEventListener("dispose",S),M(x)}function C(A){let x=n.get(A);if(x.__webglInit===void 0)return;let k=A.source,Z=p.get(k);if(Z){let ne=Z[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(A),Object.keys(Z).length===0&&p.delete(k)}n.remove(A)}function v(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let k=A.source,Z=p.get(k);delete Z[x.__cacheKey],a.memory.textures--}function M(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ne=0;ne<x.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=A.textures;for(let Z=0,ne=k.length;Z<ne;Z++){let $=n.get(k[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(A)}let L=0;function B(){L=0}function q(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function X(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let k=n.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Y(A,x){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Q(k,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function ie(A,x){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Q(k,A,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function z(A,x){let k=n.get(A);if(A.version>0&&k.__version!==A.version){se(k,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let ce={[Gr]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},me={[rn]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Te={[lu]:i.NEVER,[mu]:i.ALWAYS,[uu]:i.LESS,[yc]:i.LEQUAL,[du]:i.EQUAL,[pu]:i.GEQUAL,[hu]:i.GREATER,[fu]:i.NOTEQUAL};function ke(A,x){if(x.type===Cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Aa||x.magFilter===cr||x.magFilter===oi||x.minFilter===vn||x.minFilter===Aa||x.minFilter===cr||x.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,me[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==cr&&x.minFilter!==oi||x.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));let Z=x.source,ne=p.get(Z);ne===void 0&&(ne={},p.set(Z,ne));let $=X(x);if($!==A.__cacheKey){ne[$]===void 0&&(ne[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ne[$].usedTimes++;let D=ne[A.__cacheKey];D!==void 0&&(ne[A.__cacheKey].usedTimes--,D.usedTimes===0&&v(x)),A.__cacheKey=$,A.__webglTexture=ne[$].texture}return k}function je(A,x,k){return Math.floor(Math.floor(A/k)/x)}function Xe(A,x,k,Z){let $=A.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,Z,x.data);else{$.sort((V,J)=>V.start-J.start);let D=0;for(let V=1;V<$.length;V++){let J=$[D],de=$[V],ue=J.start+J.count,te=je(de.start,x.width,4),Me=je(J.start,x.width,4);de.start<=ue+1&&te===Me&&je(de.start+de.count-1,x.width,4)===te?J.count=Math.max(J.count,de.start+de.count-J.start):(++D,$[D]=de)}$.length=D+1;let N=i.getParameter(i.UNPACK_ROW_LENGTH),H=i.getParameter(i.UNPACK_SKIP_PIXELS),j=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let V=0,J=$.length;V<J;V++){let de=$[V],ue=Math.floor(de.start/4),te=Math.ceil(de.count/4),Me=ue%x.width,U=Math.floor(ue/x.width),ae=te,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Me,U,ae,le,k,Z,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,N),i.pixelStorei(i.UNPACK_SKIP_PIXELS,H),i.pixelStorei(i.UNPACK_SKIP_ROWS,j)}}function Q(A,x,k){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let ne=nt(A,x),$=x.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+k);let D=n.get($);if($.version!==D.__version||ne===!0){t.activeTexture(i.TEXTURE0+k);let N=Ze.getPrimaries(Ze.workingColorSpace),H=x.colorSpace===Wn?null:Ze.getPrimaries(x.colorSpace),j=x.colorSpace===Wn||N===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let V=_(x.image,!1,s.maxTextureSize);V=mt(x,V);let J=r.convert(x.format,x.colorSpace),de=r.convert(x.type),ue=E(x.internalFormat,J,de,x.colorSpace,x.isVideoTexture);ke(Z,x);let te,Me=x.mipmaps,U=x.isVideoTexture!==!0,ae=D.__version===void 0||ne===!0,le=$.dataReady,ve=R(x,V);if(x.isDepthTexture)ue=y(x.format===gs,x.type),ae&&(U?t.texStorage2D(i.TEXTURE_2D,1,ue,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,ue,V.width,V.height,0,J,de,null));else if(x.isDataTexture)if(Me.length>0){U&&ae&&t.texStorage2D(i.TEXTURE_2D,ve,ue,Me[0].width,Me[0].height);for(let re=0,ee=Me.length;re<ee;re++)te=Me[re],U?le&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,te.width,te.height,J,de,te.data):t.texImage2D(i.TEXTURE_2D,re,ue,te.width,te.height,0,J,de,te.data);x.generateMipmaps=!1}else U?(ae&&t.texStorage2D(i.TEXTURE_2D,ve,ue,V.width,V.height),le&&Xe(x,V,J,de)):t.texImage2D(i.TEXTURE_2D,0,ue,V.width,V.height,0,J,de,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ue,Me[0].width,Me[0].height,V.depth);for(let re=0,ee=Me.length;re<ee;re++)if(te=Me[re],x.format!==cn)if(J!==null)if(U){if(le)if(x.layerUpdates.size>0){let _e=Cc(te.width,te.height,x.format,x.type);for(let Ne of x.layerUpdates){let Qe=te.data.subarray(Ne*_e/te.data.BYTES_PER_ELEMENT,(Ne+1)*_e/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ne,te.width,te.height,1,J,Qe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,te.width,te.height,V.depth,J,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,ue,te.width,te.height,V.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,te.width,te.height,V.depth,J,de,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,ue,te.width,te.height,V.depth,0,J,de,te.data)}else{U&&ae&&t.texStorage2D(i.TEXTURE_2D,ve,ue,Me[0].width,Me[0].height);for(let re=0,ee=Me.length;re<ee;re++)te=Me[re],x.format!==cn?J!==null?U?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,te.width,te.height,J,te.data):t.compressedTexImage2D(i.TEXTURE_2D,re,ue,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,te.width,te.height,J,de,te.data):t.texImage2D(i.TEXTURE_2D,re,ue,te.width,te.height,0,J,de,te.data)}else if(x.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ue,V.width,V.height,V.depth),le)if(x.layerUpdates.size>0){let re=Cc(V.width,V.height,x.format,x.type);for(let ee of x.layerUpdates){let _e=V.data.subarray(ee*re/V.data.BYTES_PER_ELEMENT,(ee+1)*re/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,V.width,V.height,1,J,de,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,J,de,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,V.width,V.height,V.depth,0,J,de,V.data);else if(x.isData3DTexture)U?(ae&&t.texStorage3D(i.TEXTURE_3D,ve,ue,V.width,V.height,V.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,J,de,V.data)):t.texImage3D(i.TEXTURE_3D,0,ue,V.width,V.height,V.depth,0,J,de,V.data);else if(x.isFramebufferTexture){if(ae)if(U)t.texStorage2D(i.TEXTURE_2D,ve,ue,V.width,V.height);else{let re=V.width,ee=V.height;for(let _e=0;_e<ve;_e++)t.texImage2D(i.TEXTURE_2D,_e,ue,re,ee,0,J,de,null),re>>=1,ee>>=1}}else if(Me.length>0){if(U&&ae){let re=ct(Me[0]);t.texStorage2D(i.TEXTURE_2D,ve,ue,re.width,re.height)}for(let re=0,ee=Me.length;re<ee;re++)te=Me[re],U?le&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,J,de,te):t.texImage2D(i.TEXTURE_2D,re,ue,J,de,te);x.generateMipmaps=!1}else if(U){if(ae){let re=ct(V);t.texStorage2D(i.TEXTURE_2D,ve,ue,re.width,re.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,de,V)}else t.texImage2D(i.TEXTURE_2D,0,ue,J,de,V);m(x)&&f(Z),D.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function se(A,x,k){if(x.image.length!==6)return;let Z=nt(A,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let $=n.get(ne);if(ne.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);let D=Ze.getPrimaries(Ze.workingColorSpace),N=x.colorSpace===Wn?null:Ze.getPrimaries(x.colorSpace),H=x.colorSpace===Wn||D===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let j=x.isCompressedTexture||x.image[0].isCompressedTexture,V=x.image[0]&&x.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!j&&!V?J[ee]=_(x.image[ee],!0,s.maxCubemapSize):J[ee]=V?x.image[ee].image:x.image[ee],J[ee]=mt(x,J[ee]);let de=J[0],ue=r.convert(x.format,x.colorSpace),te=r.convert(x.type),Me=E(x.internalFormat,ue,te,x.colorSpace),U=x.isVideoTexture!==!0,ae=$.__version===void 0||Z===!0,le=ne.dataReady,ve=R(x,de);ke(i.TEXTURE_CUBE_MAP,x);let re;if(j){U&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Me,de.width,de.height);for(let ee=0;ee<6;ee++){re=J[ee].mipmaps;for(let _e=0;_e<re.length;_e++){let Ne=re[_e];x.format!==cn?ue!==null?U?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Ne.width,Ne.height,ue,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Me,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Ne.width,Ne.height,ue,te,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Me,Ne.width,Ne.height,0,ue,te,Ne.data)}}}else{if(re=x.mipmaps,U&&ae){re.length>0&&ve++;let ee=ct(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Me,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(V){U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,ue,te,J[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Me,J[ee].width,J[ee].height,0,ue,te,J[ee].data);for(let _e=0;_e<re.length;_e++){let Qe=re[_e].image[ee].image;U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Qe.width,Qe.height,ue,te,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Me,Qe.width,Qe.height,0,ue,te,Qe.data)}}else{U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue,te,J[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Me,ue,te,J[ee]);for(let _e=0;_e<re.length;_e++){let Ne=re[_e];U?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,ue,te,Ne.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Me,ue,te,Ne.image[ee])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),$.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function fe(A,x,k,Z,ne,$){let D=r.convert(k.format,k.colorSpace),N=r.convert(k.type),H=E(k.internalFormat,D,N,k.colorSpace),j=n.get(x),V=n.get(k);if(V.__renderTarget=x,!j.__hasExternalTextures){let J=Math.max(1,x.width>>$),de=Math.max(1,x.height>>$);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,H,J,de,x.depth,0,D,N,null):t.texImage2D(ne,$,H,J,de,0,D,N,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,V.__webglTexture,0,Ke(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,V.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(A,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let Z=x.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,$=y(x.stencilBuffer,ne),D=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=Ke(x);be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,$,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,A)}else{let Z=x.textures;for(let ne=0;ne<Z.length;ne++){let $=Z[ne],D=r.convert($.format,$.colorSpace),N=r.convert($.type),H=E($.internalFormat,D,N,$.colorSpace),j=Ke(x);k&&be(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,H,x.width,x.height):be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,H,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,H,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let ne=Z.__webglTexture,$=Ke(x);if(x.depthTexture.format===is)be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(x.depthTexture.format===gs)be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(A){let x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Z=A.texture.mipmaps;Z&&Z.length>0?Se(x.__webglFramebuffer[0],A):Se(x.__webglFramebuffer,A)}else if(k){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),Re(x.__webglDepthbuffer[Z],A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,$)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Re(x.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,x,k){let Z=n.get(A);x!==void 0&&fe(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Oe(A)}function I(A){let x=A.texture,k=n.get(A),Z=n.get(x);A.addEventListener("dispose",S);let ne=A.textures,$=A.isWebGLCubeRenderTarget===!0,D=ne.length>1;if(D||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[N]=[];for(let H=0;H<x.mipmaps.length;H++)k.__webglFramebuffer[N][H]=i.createFramebuffer()}else k.__webglFramebuffer[N]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let N=0;N<x.mipmaps.length;N++)k.__webglFramebuffer[N]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(D)for(let N=0,H=ne.length;N<H;N++){let j=n.get(ne[N]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&be(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let N=0;N<ne.length;N++){let H=ne[N];k.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[N]);let j=r.convert(H.format,H.colorSpace),V=r.convert(H.type),J=E(H.internalFormat,j,V,H.colorSpace,A.isXRRenderTarget===!0),de=Ke(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,k.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(i.TEXTURE_CUBE_MAP,x);for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0)for(let H=0;H<x.mipmaps.length;H++)fe(k.__webglFramebuffer[N][H],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,H);else fe(k.__webglFramebuffer[N],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let N=0,H=ne.length;N<H;N++){let j=ne[N],V=n.get(j),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),ke(J,j),fe(k.__webglFramebuffer,A,j,i.COLOR_ATTACHMENT0+N,J,0),m(j)&&f(J)}t.unbindTexture()}else{let N=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(N=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,Z.__webglTexture),ke(N,x),x.mipmaps&&x.mipmaps.length>0)for(let H=0;H<x.mipmaps.length;H++)fe(k.__webglFramebuffer[H],A,x,i.COLOR_ATTACHMENT0,N,H);else fe(k.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,N,0);m(x)&&f(N),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Ye(A){let x=A.textures;for(let k=0,Z=x.length;k<Z;k++){let ne=x[k];if(m(ne)){let $=w(A),D=n.get(ne).__webglTexture;t.bindTexture($,D),f($),t.unbindTexture()}}}let Fe=[],Ie=[];function xe(A){if(A.samples>0){if(be(A)===!1){let x=A.textures,k=A.width,Z=A.height,ne=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=n.get(A),N=x.length>1;if(N)for(let j=0;j<x.length;j++)t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);let H=A.texture.mipmaps;H&&H.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let j=0;j<x.length;j++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),N){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let V=n.get(x[j]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,ne,i.NEAREST),l===!0&&(Fe.length=0,Ie.length=0,Fe.push(i.COLOR_ATTACHMENT0+j),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push($),Ie.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let j=0;j<x.length;j++){t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let V=n.get(x[j]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,V,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ke(A){return Math.min(s.maxSamples,A.samples)}function be(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Be(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function mt(A,x){let k=A.colorSpace,Z=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Mi&&k!==Wn&&(Ze.getTransfer(k)===et?(Z!==cn||ne!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=be}function Yg(i,e){function t(n,s=Wn){let r,a=Ze.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===hc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ps)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===cn)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===_c)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===lr||n===ur||n===dr||n===hr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ha||n===Ga||n===Wa||n===qa||n===Xa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===no||n===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:$g,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,h=null,g=null,_=typeof XRWebGLBinding<"u",m=new Vc,f={},w=t.getContextAttributes(),E=null,y=null,R=[],T=[],S=new we,C=null,v=new Rt;v.viewport=new ft;let M=new Rt;M.viewport=new ft;let L=[v,M],B=new ga,q=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=R[Q];return se===void 0&&(se=new ls,R[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=R[Q];return se===void 0&&(se=new ls,R[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=R[Q];return se===void 0&&(se=new ls,R[Q]=se),se.getHandSpace()};function K(Q){let se=T.indexOf(Q.inputSource);if(se===-1)return;let fe=R[se];fe!==void 0&&(fe.update(Q.inputSource,Q.frame,c||a),fe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<R.length;Q++){let se=T[Q];se!==null&&(T[Q]=null,R[Q].disconnect(se))}q=null,X=null,m.reset();for(let Q in f)delete f[Q];e.setRenderTarget(E),h=null,p=null,d=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Re=null,Se=null;w.depth&&(Se=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=w.stencil?gs:is,Re=w.stencil?ms:ci);let Oe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Oe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new wn(p.textureWidth,p.textureHeight,{format:cn,type:yn,depthTexture:new Js(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let fe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new wn(h.framebufferWidth,h.framebufferHeight,{format:cn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Q){for(let se=0;se<Q.removed.length;se++){let fe=Q.removed[se],Re=T.indexOf(fe);Re>=0&&(T[Re]=null,R[Re].disconnect(fe))}for(let se=0;se<Q.added.length;se++){let fe=Q.added[se],Re=T.indexOf(fe);if(Re===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=T.length){T.push(fe),Re=Oe;break}else if(T[Oe]===null){T[Oe]=fe,Re=Oe;break}if(Re===-1)break}let Se=R[Re];Se&&Se.connect(fe)}}let z=new P,ce=new P;function me(Q,se,fe){z.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(fe.matrixWorld);let Re=z.distanceTo(ce),Se=se.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,vt=Se[14]/(Se[10]-1),I=Se[14]/(Se[10]+1),Ye=(Se[9]+1)/Se[5],Fe=(Se[9]-1)/Se[5],Ie=(Se[8]-1)/Se[0],xe=(Oe[8]+1)/Oe[0],Ke=vt*Ie,be=vt*xe,Be=Re/(-Ie+xe),mt=Be*-Ie;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ct=vt+Be,A=I+Be,x=Ke-mt,k=be+(Re-mt),Z=Ye*I/A*ct,ne=Fe*I/A*ct;Q.projectionMatrix.makePerspective(x,k,Z,ne,ct,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Te(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,fe=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=M.near=v.near=se,B.far=M.far=v.far=fe,(q!==B.near||X!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,X=B.far),B.layers.mask=Q.layers.mask|6,v.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;let Re=Q.parent,Se=B.cameras;Te(B,Re);for(let Oe=0;Oe<Se.length;Oe++)Te(Se[Oe],Re);Se.length===2?me(B,v,M):B.projectionMatrix.copy(v.projectionMatrix),ke(Q,B,Re)};function ke(Q,se,fe){fe===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return f[Q]};let nt=null;function je(Q,se){if(u=se.getViewerPose(c||a),g=se,u!==null){let fe=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Re=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let I=0;I<fe.length;I++){let Ye=fe[I],Fe=null;if(h!==null)Fe=h.getViewport(Ye);else{let xe=d.getViewSubImage(p,Ye);Fe=xe.viewport,I===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let Ie=L[I];Ie===void 0&&(Ie=new Rt,Ie.layers.enable(I),Ie.viewport=new ft,L[I]=Ie),Ie.matrix.fromArray(Ye.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ye.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),I===0&&(B.matrix.copy(Ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(Ie)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let I=d.getDepthInformation(fe[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let I=0;I<fe.length;I++){let Ye=fe[I].camera;if(Ye){let Fe=f[Ye];Fe||(Fe=new Ks,f[Ye]=Fe);let Ie=d.getCameraImage(Ye);Fe.sourceTexture=Ie}}}}for(let fe=0;fe<R.length;fe++){let Re=T[fe],Se=R[fe];Re!==null&&Se!==void 0&&Se.update(Re,se,c||a)}nt&&nt(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Xe=new Wu;Xe.setAnimationLoop(je),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}},Fi=new _n,Jg=new ht;function Kg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ec(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),E=w.envMap,y=w.envMapRotation;E&&(m.envMap.value=E,Fi.copy(y),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Fi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let y=E.program;n.uniformBlockBinding(w,y)}function c(w,E){let y=s[w.id];y===void 0&&(g(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(w,R);let T=e.render.frame;r[w.id]!==T&&(p(w),r[w.id]=T)}function u(w){let E=d();w.__bindingPointIndex=E;let y=i.createBuffer(),R=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let E=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,S=y.length;T<S;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,M=C.length;v<M;v++){let L=C[v];if(h(L,T,v,R)===!0){let B=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],X=0;for(let K=0;K<q.length;K++){let Y=q[K],ie=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+X,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,X),X+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(w,E,y,R){let T=w.value,S=E+"_"+y;if(R[S]===void 0)return typeof T=="number"||typeof T=="boolean"?R[S]=T:R[S]=T.clone(),!0;{let C=R[S];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[S]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(w){let E=w.uniforms,y=0,R=16;for(let S=0,C=E.length;S<C;S++){let v=Array.isArray(E[S])?E[S]:[E[S]];for(let M=0,L=v.length;M<L;M++){let B=v[M],q=Array.isArray(B.value)?B.value:[B.value];for(let X=0,K=q.length;X<K;X++){let Y=q[X],ie=_(Y),z=y%R,ce=z%ie.boundary,me=z+ce;y+=ce,me!==0&&R-me<ie.storage&&(y+=R-me),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ie.storage}}}let T=y%R;return T>0&&(y+=R-T),w.__size=y,w.__cache={},this}function _(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ms=class{constructor(e={}){let{canvas:t=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=Ct;let T=0,S=0,C=null,v=-1,M=null,L=new ft,B=new ft,q=null,X=new Ge(0),K=0,Y=t.width,ie=t.height,z=1,ce=null,me=null,Te=new ft(0,0,Y,ie),ke=new ft(0,0,Y,ie),nt=!1,je=new us,Xe=!1,Q=!1,se=new ht,fe=new P,Re=new ft,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function vt(){return C===null?z:1}let I=n;function Ye(b,F){return t.getContext(b,F)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){let F="webgl2";if(I=Ye(F,b),I===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,Ie,xe,Ke,be,Be,mt,ct,A,x,k,Z,ne,$,D,N,H,j,V,J,de,ue,te,Me;function U(){Fe=new gm(I),Fe.init(),ue=new Yg(I,Fe),Ie=new lm(I,Fe,e,ue),xe=new qg(I,Fe),Ie.reversedDepthBuffer&&p&&xe.buffers.depth.setReversed(!0),Ke=new xm(I),be=new Dg,Be=new Xg(I,Fe,xe,be,Ie,ue,Ke),mt=new dm(y),ct=new mm(y),A=new Eh(I),te=new om(I,A),x=new vm(I,A,Ke,te),k=new Mm(I,x,A,Ke),V=new ym(I,Ie,Be),N=new um(be),Z=new Pg(y,mt,ct,Fe,Ie,te,N),ne=new Kg(y,be),$=new Ug,D=new kg(Fe),j=new am(y,mt,ct,xe,k,h,l),H=new Gg(y,k,Ie),Me=new jg(I,Ke,Ie,xe),J=new cm(I,Fe,Ke),de=new _m(I,Fe,Ke),Ke.programs=Z.programs,y.capabilities=Ie,y.extensions=Fe,y.properties=be,y.renderLists=$,y.shadowMap=H,y.state=xe,y.info=Ke}U();let ae=new Hc(y,I);this.xr=ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(Y,ie,!1))},this.getSize=function(b){return b.set(Y,ie)},this.setSize=function(b,F,G=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ie=F,t.width=Math.floor(b*z),t.height=Math.floor(F*z),G===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Y*z,ie*z).floor()},this.setDrawingBufferSize=function(b,F,G){Y=b,ie=F,z=G,t.width=Math.floor(b*G),t.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Te)},this.setViewport=function(b,F,G,W){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,F,G,W),xe.viewport(L.copy(Te).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(ke)},this.setScissor=function(b,F,G,W){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,F,G,W),xe.scissor(B.copy(ke).multiplyScalar(z).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){xe.setScissorTest(nt=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,G=!0){let W=0;if(b){let O=!1;if(C!==null){let oe=C.texture.format;O=oe===La||oe===Da||oe===Pa}if(O){let oe=C.texture.type,pe=oe===yn||oe===ci||oe===fs||oe===ms||oe===Ra||oe===Ia,Ee=j.getClearColor(),ye=j.getClearAlpha(),De=Ee.r,Ue=Ee.g,Ae=Ee.b;pe?(g[0]=De,g[1]=Ue,g[2]=Ae,g[3]=ye,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=Ae,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",re,!1),j.dispose(),$.dispose(),D.dispose(),be.dispose(),mt.dispose(),ct.dispose(),k.dispose(),te.dispose(),Me.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",We),ae.removeEventListener("sessionend",gt),Et.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=Ke.autoReset,F=H.enabled,G=H.autoUpdate,W=H.needsUpdate,O=H.type;U(),Ke.autoReset=b,H.enabled=F,H.autoUpdate=G,H.needsUpdate=W,H.type=O}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ee(b){let F=b.target;F.removeEventListener("dispose",ee),_e(F)}function _e(b){Ne(b),be.remove(b)}function Ne(b){let F=be.get(b).programs;F!==void 0&&(F.forEach(function(G){Z.releaseProgram(G)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,W,O,oe){F===null&&(F=Se);let pe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=gd(b,F,G,W,O);xe.setMaterial(W,pe);let ye=G.index,De=1;if(W.wireframe===!0){if(ye=x.getWireframeAttribute(G),ye===void 0)return;De=2}let Ue=G.drawRange,Ae=G.attributes.position,qe=Ue.start*De,it=(Ue.start+Ue.count)*De;oe!==null&&(qe=Math.max(qe,oe.start*De),it=Math.min(it,(oe.start+oe.count)*De)),ye!==null?(qe=Math.max(qe,0),it=Math.min(it,ye.count)):Ae!=null&&(qe=Math.max(qe,0),it=Math.min(it,Ae.count));let pt=it-qe;if(pt<0||pt===1/0)return;te.setup(O,W,Ee,G,ye);let at,rt=J;if(ye!==null&&(at=A.get(ye),rt=de,rt.setIndex(at)),O.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*vt()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*vt()),O.isLineSegments?rt.setMode(I.LINES):O.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else O.isPoints?rt.setMode(I.POINTS):O.isSprite&&rt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ce=O._multiDrawStarts,ut=O._multiDrawCounts,Je=O._multiDrawCount,Xt=ye?A.get(ye).bytesPerElement:1,Hi=be.get(W).currentProgram.getUniforms();for(let Yt=0;Yt<Je;Yt++)Hi.setValue(I,"_gl_DrawID",Yt),rt.render(Ce[Yt]/Xt,ut[Yt])}else if(O.isInstancedMesh)rt.renderInstances(qe,pt,O.count);else if(G.isInstancedBufferGeometry){let Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ut=Math.min(G.instanceCount,Ce);rt.renderInstances(qe,pt,ut)}else rt.render(qe,pt)};function Qe(b,F,G){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,hi(b,F,G),b.side=Bn,b.needsUpdate=!0,hi(b,F,G),b.side=on):hi(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),f=D.get(G),f.init(F),E.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==G&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let oe=O.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){let Ee=oe[pe];Qe(Ee,G,O),W.add(Ee)}else Qe(oe,G,O),W.add(oe)}),f=E.pop(),W},this.compileAsync=function(b,F,G=null){let W=this.compile(b,F,G);return new Promise(O=>{function oe(){if(W.forEach(function(pe){be.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(b);return}setTimeout(oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let $e=null;function qt(b){$e&&$e(b)}function We(){Et.stop()}function gt(){Et.start()}let Et=new Wu;Et.setAnimationLoop(qt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(b){$e=b,ae.setAnimationLoop(b),b===null?Et.stop():Et.start()},ae.addEventListener("sessionstart",We),ae.addEventListener("sessionend",gt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,C),f=D.get(b,E.length),f.init(F),E.push(f),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(se,gn,F.reversedDepth),Q=this.localClippingEnabled,Xe=N.init(this.clippingPlanes,Q),m=$.get(b,w.length),m.init(),w.push(m),ae.enabled===!0&&ae.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&Tt(oe,F,-1/0,y.sortObjects)}Tt(b,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ce,me),Oe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Oe&&j.addToRenderList(m,b),this.info.render.frame++,Xe===!0&&N.beginShadows();let G=f.state.shadowsArray;H.render(G,b,F),Xe===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){let oe=F.cameras;if(O.length>0)for(let pe=0,Ee=oe.length;pe<Ee;pe++){let ye=oe[pe];hn(W,O,b,ye)}Oe&&j.render(b);for(let pe=0,Ee=oe.length;pe<Ee;pe++){let ye=oe[pe];wt(m,b,ye,ye.viewport)}}else O.length>0&&hn(W,O,b,F),Oe&&j.render(b),wt(m,b,F);C!==null&&S===0&&(Be.updateMultisampleRenderTarget(C),Be.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(y,b,F),te.resetDefaultState(),v=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Xe===!0&&N.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Tt(b,F,G,W){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||je.intersectsSprite(b)){W&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);let pe=k.update(b),Ee=b.material;Ee.visible&&m.push(b,pe,Ee,G,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||je.intersectsObject(b))){let pe=k.update(b),Ee=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Re.copy(pe.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(se)),Array.isArray(Ee)){let ye=pe.groups;for(let De=0,Ue=ye.length;De<Ue;De++){let Ae=ye[De],qe=Ee[Ae.materialIndex];qe&&qe.visible&&m.push(b,pe,qe,G,Re.z,Ae)}}else Ee.visible&&m.push(b,pe,Ee,G,Re.z,null)}}let oe=b.children;for(let pe=0,Ee=oe.length;pe<Ee;pe++)Tt(oe[pe],F,G,W)}function wt(b,F,G,W){let O=b.opaque,oe=b.transmissive,pe=b.transparent;f.setupLightsView(G),Xe===!0&&N.setGlobalState(y.clippingPlanes,G),W&&xe.viewport(L.copy(W)),O.length>0&&Yn(O,F,G),oe.length>0&&Yn(oe,F,G),pe.length>0&&Yn(pe,F,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function hn(b,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?ps:yn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let oe=f.state.transmissionRenderTarget[W.id],pe=W.viewport||L;oe.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);let Ee=y.getRenderTarget(),ye=y.getActiveCubeFace(),De=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&j.render(G);let Ue=y.toneMapping;y.toneMapping=Gn;let Ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Xe===!0&&N.setGlobalState(y.clippingPlanes,W),Yn(b,G,W),Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let it=0,pt=F.length;it<pt;it++){let at=F[it],rt=at.object,Ce=at.geometry,ut=at.material,Je=at.group;if(ut.side===on&&rt.layers.test(W.layers)){let Xt=ut.side;ut.side=Bt,ut.needsUpdate=!0,En(rt,G,W,Ce,ut,Je),ut.side=Xt,ut.needsUpdate=!0,qe=!0}}qe===!0&&(Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe))}y.setRenderTarget(Ee,ye,De),y.setClearColor(X,K),Ae!==void 0&&(W.viewport=Ae),y.toneMapping=Ue}function Yn(b,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=b.length;O<oe;O++){let pe=b[O],Ee=pe.object,ye=pe.geometry,De=pe.group,Ue=pe.material;Ue.allowOverride===!0&&W!==null&&(Ue=W),Ee.layers.test(G.layers)&&En(Ee,F,G,ye,Ue,De)}}function En(b,F,G,W,O,oe){b.onBeforeRender(y,F,G,W,O,oe),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,F,G,W,b,oe),O.transparent===!0&&O.side===on&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,b,oe),O.side=Bn,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,b,oe),O.side=on):y.renderBufferDirect(G,F,W,O,b,oe),b.onAfterRender(y,F,G,W,O,oe)}function hi(b,F,G){F.isScene!==!0&&(F=Se);let W=be.get(b),O=f.state.lights,oe=f.state.shadowsArray,pe=O.state.version,Ee=Z.getParameters(b,O.state,oe,F,G),ye=Z.getProgramCacheKey(Ee),De=W.programs;W.environment=b.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(b.isMeshStandardMaterial?ct:mt).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",ee),De=new Map,W.programs=De);let Ue=De.get(ye);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===pe)return ol(b,Ee),Ue}else Ee.uniforms=Z.getUniforms(b),b.onBeforeCompile(Ee,y),Ue=Z.acquireProgram(Ee,ye),De.set(ye,Ue),W.uniforms=Ee.uniforms;let Ae=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=N.uniform),ol(b,Ee),W.needsLights=_d(b),W.lightsStateVersion=pe,W.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function al(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ol(b,F){let G=be.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function gd(b,F,G,W,O){F.isScene!==!0&&(F=Se),Be.resetTextureUnits();let oe=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Ee=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mi,ye=(W.isMeshStandardMaterial?ct:mt).get(W.envMap||pe),De=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,it=!!G.morphAttributes.color,pt=Gn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=y.toneMapping);let at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=at!==void 0?at.length:0,Ce=be.get(W),ut=f.state.lights;if(Xe===!0&&(Q===!0||b!==M)){let Ft=b===M&&W.id===v;N.setState(W,b,Ft)}let Je=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ut.state.version||Ce.outputColorSpace!==Ee||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==ye||W.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==N.numPlanes||Ce.numIntersection!==N.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==Ae||Ce.morphNormals!==qe||Ce.morphColors!==it||Ce.toneMapping!==pt||Ce.morphTargetsCount!==rt)&&(Je=!0):(Je=!0,Ce.__version=W.version);let Xt=Ce.currentProgram;Je===!0&&(Xt=hi(W,F,O));let Hi=!1,Yt=!1,Rs=!1,dt=Xt.getUniforms(),tn=Ce.uniforms;if(xe.useProgram(Xt.program)&&(Hi=!0,Yt=!0,Rs=!0),W.id!==v&&(v=W.id,Yt=!0),Hi||M!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",b.projectionMatrix),dt.setValue(I,"viewMatrix",b.matrixWorldInverse);let kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(I,fe.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Yt=!0,Rs=!0)}if(O.isSkinnedMesh){dt.setOptional(I,O,"bindMatrix"),dt.setOptional(I,O,"bindMatrixInverse");let Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),dt.setValue(I,"boneTexture",Ft.boneTexture,Be))}O.isBatchedMesh&&(dt.setOptional(I,O,"batchingTexture"),dt.setValue(I,"batchingTexture",O._matricesTexture,Be),dt.setOptional(I,O,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",O._indirectTexture,Be),dt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",O._colorsTexture,Be));let nn=G.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&V.update(O,G,Xt),(Yt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,dt.setValue(I,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(tn.envMap.value=ye,tn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),Yt&&(dt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&vd(tn,Rs),oe&&W.fog===!0&&ne.refreshFogUniforms(tn,oe),ne.refreshMaterialUniforms(tn,W,z,ie,f.state.transmissionRenderTarget[b.id]),ys.upload(I,al(Ce),tn,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ys.upload(I,al(Ce),tn,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(I,"center",O.center),dt.setValue(I,"modelViewMatrix",O.modelViewMatrix),dt.setValue(I,"normalMatrix",O.normalMatrix),dt.setValue(I,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ft=W.uniformsGroups;for(let kt=0,So=Ft.length;kt<So;kt++){let fi=Ft[kt];Me.update(fi,Xt),Me.bind(fi,Xt)}}return Xt}function vd(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function _d(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,G){let W=be.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),be.get(b.texture).__webglTexture=F,be.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let G=be.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let xd=I.createFramebuffer();this.setRenderTarget=function(b,F=0,G=0){C=b,T=F,S=G;let W=!0,O=null,oe=!1,pe=!1;if(b){let ye=be.get(b);if(ye.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(ye.__webglFramebuffer===void 0)Be.setupRenderTarget(b);else if(ye.__hasExternalTextures)Be.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ae=b.depthTexture;if(ye.__boundDepthTexture!==Ae){if(Ae!==null&&be.has(Ae)&&(b.width!==Ae.image.width||b.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(b)}}let De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(pe=!0);let Ue=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?O=Ue[F][G]:O=Ue[F],oe=!0):b.samples>0&&Be.useMultisampledRTT(b)===!1?O=be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[G]:O=Ue,L.copy(b.viewport),B.copy(b.scissor),q=b.scissorTest}else L.copy(Te).multiplyScalar(z).floor(),B.copy(ke).multiplyScalar(z).floor(),q=nt;if(G!==0&&(O=xd),xe.bindFramebuffer(I.FRAMEBUFFER,O)&&W&&xe.drawBuffers(b,O),xe.viewport(L),xe.scissor(B),xe.setScissorTest(q),oe){let ye=be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,G)}else if(pe){let ye=F;for(let De=0;De<b.textures.length;De++){let Ue=be.get(b.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,Ue.__webglTexture,G,ye)}}else if(b!==null&&G!==0){let ye=be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(b,F,G,W,O,oe,pe,Ee=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){xe.bindFramebuffer(I.FRAMEBUFFER,ye);try{let De=b.textures[Ee],Ue=De.format,Ae=De.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-W&&G>=0&&G<=b.height-O&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee),I.readPixels(F,G,W,O,ue.convert(Ue),ue.convert(Ae),oe))}finally{let De=C!==null?be.get(C).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,F,G,W,O,oe,pe,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye)if(F>=0&&F<=b.width-W&&G>=0&&G<=b.height-O){xe.bindFramebuffer(I.FRAMEBUFFER,ye);let De=b.textures[Ee],Ue=De.format,Ae=De.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee),I.readPixels(F,G,W,O,ue.convert(Ue),ue.convert(Ae),0);let it=C!==null?be.get(C).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,it);let pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vu(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(qe),I.deleteSync(pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,G=0){let W=Math.pow(2,-G),O=Math.floor(b.image.width*W),oe=Math.floor(b.image.height*W),pe=F!==null?F.x:0,Ee=F!==null?F.y:0;Be.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pe,Ee,O,oe),xe.unbindTexture()};let yd=I.createFramebuffer(),Md=I.createFramebuffer();this.copyTextureToTexture=function(b,F,G=null,W=null,O=0,oe=null){oe===null&&(O!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let pe,Ee,ye,De,Ue,Ae,qe,it,pt,at=b.isCompressedTexture?b.mipmaps[oe]:b.image;if(G!==null)pe=G.max.x-G.min.x,Ee=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,Ue=G.min.y,Ae=G.isBox3?G.min.z:0;else{let nn=Math.pow(2,-O);pe=Math.floor(at.width*nn),Ee=Math.floor(at.height*nn),b.isDataArrayTexture?ye=at.depth:b.isData3DTexture?ye=Math.floor(at.depth*nn):ye=1,De=0,Ue=0,Ae=0}W!==null?(qe=W.x,it=W.y,pt=W.z):(qe=0,it=0,pt=0);let rt=ue.convert(F.format),Ce=ue.convert(F.type),ut;F.isData3DTexture?(Be.setTexture3D(F,0),ut=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),ut=I.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Je=I.getParameter(I.UNPACK_ROW_LENGTH),Xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hi=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),Rs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);let dt=b.isDataArrayTexture||b.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let nn=be.get(b),Ft=be.get(F),kt=be.get(nn.__renderTarget),So=be.get(Ft.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,kt.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let fi=0;fi<ye;fi++)dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(b).__webglTexture,O,Ae+fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(F).__webglTexture,oe,pt+fi)),I.blitFramebuffer(De,Ue,pe,Ee,qe,it,pe,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||be.has(b)){let nn=be.get(b),Ft=be.get(F);xe.bindFramebuffer(I.READ_FRAMEBUFFER,yd),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Md);for(let kt=0;kt<ye;kt++)dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,O,Ae+kt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,O),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,oe,pt+kt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,oe),O!==0?I.blitFramebuffer(De,Ue,pe,Ee,qe,it,pe,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(ut,oe,qe,it,pt+kt,De,Ue,pe,Ee):I.copyTexSubImage2D(ut,oe,qe,it,De,Ue,pe,Ee);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(ut,oe,qe,it,pt,pe,Ee,ye,rt,Ce,at.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ut,oe,qe,it,pt,pe,Ee,ye,rt,at.data):I.texSubImage3D(ut,oe,qe,it,pt,pe,Ee,ye,rt,Ce,at):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,qe,it,pe,Ee,rt,Ce,at.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,qe,it,at.width,at.height,rt,at.data):I.texSubImage2D(I.TEXTURE_2D,oe,qe,it,pe,Ee,rt,Ce,at);I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rs),oe===0&&F.generateMipmaps&&I.generateMipmap(ut),xe.unbindTexture()},this.initRenderTarget=function(b){be.get(b).__webglFramebuffer===void 0&&Be.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Be.setTextureCube(b,0):b.isData3DTexture?Be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Be.setTexture2DArray(b,0):Be.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){T=0,S=0,C=null,xe.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Wc="amc-mundo-theme-v1";function Zu({onChange:i=()=>{},icon:e=()=>""}={}){let t=matchMedia("(prefers-color-scheme: dark)"),n="system",s="light";try{let o=localStorage.getItem(Wc);["light","dark","system"].includes(o)&&(n=o)}catch{}function r(){s=n==="system"?t.matches?"dark":"light":n,document.documentElement.dataset.theme=s,document.documentElement.style.colorScheme=s;let o=document.querySelector("#theme-toggle");o&&(o.dataset.icon=s==="dark"?"sun":"moon",o.innerHTML=e(o.dataset.icon),o.setAttribute("aria-label",s==="dark"?"Ativar modo claro":"Ativar modo escuro"),o.setAttribute("aria-pressed",String(s==="dark")),o.title=s==="dark"?"Ativar modo claro":"Ativar modo escuro"),i(s)}let a={get active(){return s},get choice(){return n},set(o){if(["light","dark","system"].includes(o)){n=o;try{localStorage.setItem(Wc,n)}catch{}r()}}};return document.querySelector("#theme-toggle")?.addEventListener("click",()=>a.set(s==="dark"?"light":"dark")),t.addEventListener?.("change",()=>{n==="system"&&r()}),addEventListener("storage",o=>{o.key===Wc&&(n=["light","dark","system"].includes(o.newValue)?o.newValue:"system",r())}),r(),a}var zt=[{id:"visor-lime",name:"Visor Pixel",category:"head",kind:"visor",color:"#c6f36b",price:60,xp:0,tag:"PRIMEIRA DESCOBERTA",description:"Uma faixa de energia para quem enxerga possibilidades em cada problema."},{id:"cap-blue",name:"Bon\xE9 Circuito",category:"head",kind:"cap",color:"#54b3e0",price:80,xp:0,tag:"CASUAL",description:"Seu uniforme ganhou um parceiro para explorar o campus."},{id:"hardhat",name:"Capacete Solar",category:"head",kind:"hardhat",color:"#f5c052",price:140,xp:300,tag:"EDI\xC7\xC3O BANCADA",description:"Um visual inspirado em quem prepara tudo antes de come\xE7ar."},{id:"headphones",name:"Headset \xD3rbita",category:"head",kind:"headphones",color:"#ad92e3",price:180,xp:600,tag:"EM SINTONIA",description:"Entre na frequ\xEAncia das boas ideias com um headset violeta."},{id:"toolpack",name:"Kit de Campo",category:"back",kind:"toolpack",color:"#e7a76e",price:120,xp:200,tag:"PRONTO PARA AGIR",description:"Uma bolsa de ferramentas para acompanhar sua pr\xF3xima investiga\xE7\xE3o."},{id:"backpack",name:"Mochila Explorer",category:"back",kind:"backpack",color:"#6bd0ae",price:220,xp:800,tag:"EXPLORADOR",description:"Leve a curiosidade nas costas. Cabe uma cole\xE7\xE3o inteira de descobertas."},{id:"jetpack",name:"Propulsor Nova",category:"back",kind:"jetpack",color:"#80baf2",price:400,xp:1800,tag:"COLE\xC7\xC3O NOVA",description:"Dois propulsores e muita imagina\xE7\xE3o. Um acess\xF3rio visual para ir al\xE9m."},{id:"aura-mint",name:"\xD3rbita Menta",category:"aura",kind:"orbit",color:"#84e6ba",price:120,xp:400,tag:"EM MOVIMENTO",description:"Um anel luminoso que gira no seu ritmo e deixa o percurso mais vivo."},{id:"aura-circuit",name:"Pulso El\xE9trico",category:"aura",kind:"circuit",color:"#6fc9f3",price:220,xp:1e3,tag:"CONECTADO",description:"Pequenos blocos em \xF3rbita celebram suas conex\xF5es de conhecimento."},{id:"aura-cosmic",name:"Constela\xE7\xE3o",category:"aura",kind:"cosmic",color:"#d4adff",price:350,xp:2e3,tag:"AL\xC9M DO \xD3BVIO",description:"Uma constela\xE7\xE3o pessoal para quem continua fazendo novas perguntas."}],po=[{id:"look-field",name:"Equipe de Campo",category:"looks",color:"#a8d980",xp:400,skin:0,items:["visor-lime","toolpack","aura-mint"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Visor Pixel, Kit de Campo e \xD3rbita Menta. Um conjunto para investigar com estilo."},{id:"look-circuit",name:"Circuito Azul",category:"looks",color:"#70bfe8",xp:1e3,skin:1,items:["cap-blue","backpack","aura-circuit"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Bon\xE9 Circuito, Mochila Explorer e Pulso El\xE9trico, com o uniforme azul."},{id:"look-nova",name:"Tripula\xE7\xE3o Nova",category:"looks",color:"#b9a0ec",xp:2e3,skin:3,items:["headphones","jetpack","aura-cosmic"],tag:"LOOK COMPLETO \xB7 3 ACESS\xD3RIOS",description:"Headset \xD3rbita, Propulsor Nova e Constela\xE7\xE3o. Sua experi\xEAncia chegou a outro n\xEDvel."}],Ju={all:"Tudo",looks:"Conjuntos",uniform:"Uniformes",head:"Cabe\xE7a",back:"Mochilas",aura:"Efeitos",favorites:"Favoritos",owned:"Minha cole\xE7\xE3o"},qc=()=>({owned:[],wishlist:[],equipped:{head:null,back:null,aura:null}}),Qg=i=>100+Object.values(i.records).filter(e=>e.stage===6).length*40,li=i=>Object.values(i.records).filter(e=>e.stage===6).length*100,qn=i=>Qg(i)-(i.shop?.owned||[]).reduce((e,t)=>e+(zt.find(n=>n.id===t)?.price||0),0);function Ku(i,e){let t={records:e,shop:qc()},n=li(t);for(let s of Array.isArray(i?.owned)?i.owned.slice(0,100):[]){let r=zt.find(a=>a.id===s);r&&!t.shop.owned.includes(s)&&n>=r.xp&&qn(t)>=r.price&&t.shop.owned.push(s)}for(let s of["head","back","aura"]){let r=i?.equipped?.[s];t.shop.owned.includes(r)&&zt.some(a=>a.id===r&&a.category===s)&&(t.shop.equipped[s]=r)}return t.shop.wishlist=[...new Set((Array.isArray(i?.wishlist)?i.wishlist:[]).slice(0,100).filter(s=>zt.some(r=>r.id===s)||po.some(r=>r.id===s)||typeof s=="string"&&/^uniform-[0-3]$/.test(s)))],t.shop}function ju(i,e){let t=zt.find(n=>n.id===e);return t?i.shop.owned.includes(e)?{ok:!1,message:"Este item j\xE1 faz parte da sua cole\xE7\xE3o."}:li(i)<t.xp?{ok:!1,message:`Este item libera em ${t.xp} XP.`}:qn(i)<t.price?{ok:!1,message:"Faltam cr\xE9ditos. Cada miss\xE3o conclu\xEDda rende 40 cr\xE9ditos."}:(i.shop.owned.push(e),i.shop.equipped[t.category]=e,{ok:!0,message:`${t.name} adquirido e equipado!`}):{ok:!1,message:"Item n\xE3o encontrado."}}function Xc(i,e){let t=zt.find(n=>n.id===e);return!t||!i.shop.owned.includes(e)?!1:(i.shop.equipped[t.category]=e,!0)}var mo=(i,e)=>e.items.filter(t=>!i.shop.owned.includes(t)).reduce((t,n)=>t+zt.find(s=>s.id===n).price,0);function Qu(i,e){let t=po.find(s=>s.id===e);if(!t)return{ok:!1,message:"Conjunto n\xE3o encontrado."};if(li(i)<t.xp)return{ok:!1,message:`Este conjunto libera em ${t.xp} XP.`};let n=mo(i,t);if(qn(i)<n)return{ok:!1,message:"Faltam cr\xE9ditos para completar este conjunto."};for(let s of t.items)i.shop.owned.includes(s)||i.shop.owned.push(s),Xc(i,s);return i.skin=t.skin,{ok:!0,message:`${t.name} completo e equipado!`}}var lt=[],Pe=(i,e,t,n,s,r="")=>lt.push({id:lt.length+1,title:i,category:e,level:Math.floor(lt.length/10)+1,symptom:t,steps:n,confirm:s,note:r});Pe("Computador n\xE3o liga ao apertar Power","Energia","Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o bot\xE3o.",[["Tomada sem energia","Teste a tomada com um aparelho que voc\xEA sabe que funciona; n\xE3o introduza objetos nela.","Use outra tomada comprovadamente energizada. Se houver defeito na instala\xE7\xE3o, chame o respons\xE1vel."],["Cabo de for\xE7a desconectado da tomada","Observe se o plugue est\xE1 encaixado na tomada ou no filtro de linha.","Conecte o cabo corretamente; se usar filtro de linha, confira se ele est\xE1 ligado."],["Cabo desconectado da fonte","Observe a conex\xE3o na parte traseira do gabinete.","Com a alimenta\xE7\xE3o desligada, encaixe o cabo firmemente na fonte."],["Interruptor traseiro da fonte desligado","Se houver chave I/O, veja se est\xE1 em O. I/O n\xE3o \xE9 o seletor 115/230 V.","Coloque a chave I/O em I. Nunca mude o seletor de tens\xE3o por tentativa."],["Cabo de for\xE7a danificado","Inspecione o cabo desligado. Se n\xE3o houver dano vis\xEDvel, compare com outro compat\xEDvel e comprovadamente bom.","Substitua o cabo danificado ou que falhou no teste."],["Fonte ausente ou conex\xF5es internas soltas","Com o professor e o PC fora da tomada, confirme a presen\xE7a da fonte e os conectores da placa-m\xE3e, conforme o manual.","Se faltar fonte, instale uma compat\xEDvel. Se houver conex\xE3o solta, reconecte o conector correto."],["Falha da fonte, bot\xE3o ou placa-m\xE3e","Depois das etapas anteriores, o professor testa uma fonte compat\xEDvel conhecida e verifica o cabo do bot\xE3o no manual.","Substitua apenas a pe\xE7a cuja falha foi isolada. Encaminhe a placa-m\xE3e para diagn\xF3stico se persistir."]],"O computador volta a responder ao Power e come\xE7a a inicializa\xE7\xE3o.","Abrir a fonte n\xE3o faz parte do diagn\xF3stico. Ventoinha da fonte parada, sozinha, n\xE3o comprova defeito: alguns modelos t\xEAm modo sem rota\xE7\xE3o.");Pe("Monitor n\xE3o acende","V\xEDdeo","O monitor n\xE3o mostra imagem nem seu pr\xF3prio menu.",[["Monitor desligado","Aperte o bot\xE3o do monitor e procure o LED de energia.","Ligue o monitor."],["Cabo de energia mal conectado","Inspecione os dois extremos do cabo e a tomada.","Reconecte o cabo e use tomada energizada."],["Fonte externa ou cabo defeituoso","Se o monitor usa adaptador, compare apenas com modelo de tens\xE3o, polaridade e corrente compat\xEDveis.","Substitua o cabo ou adaptador cuja falha foi confirmada."],["Falha no monitor","Teste o monitor em outro computador e tente abrir o menu sem o cabo de v\xEDdeo.","Se continuar sem menu nem alimenta\xE7\xE3o, encaminhe para reparo ou substitua."]],"O menu pr\xF3prio do monitor aparece e o LED indica alimenta\xE7\xE3o.","N\xE3o abra o monitor: h\xE1 circuitos com tens\xE3o perigosa.");Pe("PC liga, mas o monitor mostra \u201Csem sinal\u201D","V\xEDdeo","H\xE1 luzes ou ventoinhas no gabinete, mas o monitor n\xE3o recebe v\xEDdeo.",[["Entrada de v\xEDdeo incorreta","Abra o menu do monitor e compare a entrada selecionada com o cabo usado.","Selecione HDMI, DisplayPort ou outra entrada realmente conectada."],["Cabo de v\xEDdeo solto ou defeituoso","Confira as duas pontas; teste outro cabo compat\xEDvel.","Reconecte ou substitua o cabo que falhou."],["Cabo na sa\xEDda de v\xEDdeo errada","Se h\xE1 placa de v\xEDdeo dedicada, confira se o cabo est\xE1 ligado nela. A sa\xEDda da placa-m\xE3e depende de v\xEDdeo integrado e configura\xE7\xE3o.","Conecte \xE0 sa\xEDda adequada ao conjunto instalado."],["Falha do monitor ou aus\xEAncia de POST","Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagn\xF3stico e consulte o caso 41.","Isole primeiro monitor/cabo; com o professor, investigue mem\xF3ria e v\xEDdeo se o PC n\xE3o concluir o autoteste."]],"A imagem de inicializa\xE7\xE3o aparece e o sistema pode ser exibido.","Ventoinhas girando n\xE3o garantem que o computador concluiu o POST.");Pe("Imagem pisca ou some durante o uso","V\xEDdeo","A tela perde a imagem por instantes, embora o computador continue funcionando.",[["Conex\xE3o frouxa","Confira se o cabo est\xE1 firme nas duas pontas, sem pux\xE1-lo lateralmente.","Reconecte e deixe folga no cabo."],["Cabo ou adaptador com defeito","Teste conex\xE3o direta e outro cabo compat\xEDvel com a resolu\xE7\xE3o usada.","Troque o cabo/adaptador que reproduz a falha."],["Resolu\xE7\xE3o ou frequ\xEAncia inadequada","Compare os ajustes de tela com as especifica\xE7\xF5es do monitor.","Use uma resolu\xE7\xE3o e frequ\xEAncia suportadas."],["Driver ou hardware de v\xEDdeo inst\xE1vel","Observe se come\xE7ou ap\xF3s atualiza\xE7\xE3o; compare com outro monitor e consulte os casos 37 e 44.","Reinstale ou reverta o driver oficial se houver rela\xE7\xE3o. Se persistir, pe\xE7a diagn\xF3stico da GPU."]],"A imagem permanece est\xE1vel no mesmo per\xEDodo e tarefa que antes provocavam a falha.");Pe("Imagem esticada, grande ou pouco n\xEDtida","V\xEDdeo","O sistema aparece, mas letras e propor\xE7\xF5es est\xE3o incorretas.",[["Resolu\xE7\xE3o diferente da nativa","Consulte a resolu\xE7\xE3o recomendada nas configura\xE7\xF5es de tela e no manual.","Ajuste para a resolu\xE7\xE3o nativa suportada pelo monitor."],["Escala de interface inadequada","Confira o ajuste de escala do sistema.","Escolha uma escala confort\xE1vel; compare sem mudar v\xE1rias op\xE7\xF5es ao mesmo tempo."],["Configura\xE7\xE3o do monitor incorreta","Confira propor\xE7\xE3o da imagem e ajustes do pr\xF3prio monitor.","Restaure a propor\xE7\xE3o correta; para VGA, use o ajuste autom\xE1tico do monitor se dispon\xEDvel."],["Driver de v\xEDdeo ausente ou incorreto","Veja se o sistema usa um driver b\xE1sico e se faltam op\xE7\xF5es de resolu\xE7\xE3o.","Instale o driver oficial compat\xEDvel com a GPU e o sistema."]],"Texto fica leg\xEDvel, c\xEDrculos ficam circulares e a resolu\xE7\xE3o correta est\xE1 dispon\xEDvel.");Pe("Teclado n\xE3o responde","Perif\xE9ricos","As teclas n\xE3o produzem resposta no sistema.",[["Conex\xE3o ou alimenta\xE7\xE3o ausente","Confira USB; se for sem fio, verifique pilhas, chave e receptor.","Reconecte, ligue ou substitua as pilhas."],["Porta ou intermedi\xE1rio com problema","Teste uma porta USB traseira, diretamente no PC, sem hub.","Use a porta funcional e retire o hub defeituoso."],["Falha do pr\xF3prio teclado","Teste o teclado em outro PC e outro teclado neste PC.","Substitua o teclado se a falha acompanh\xE1-lo."],["Problema no sistema ou controlador USB","Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.","Se funciona antes do sistema, revise drivers e configura\xE7\xF5es. Se v\xE1rias portas falham, encaminhe o controlador para diagn\xF3stico."]],"O teclado digita corretamente e responde ap\xF3s uma nova inicializa\xE7\xE3o.","Conectores PS/2 devem ser reconectados com o computador desligado.");Pe("Mouse n\xE3o move o ponteiro","Perif\xE9ricos","O ponteiro fica parado ou o mouse n\xE3o \xE9 reconhecido.",[["Mouse sem energia ou desconectado","Confira cabo, receptor USB, pilha e bot\xE3o liga/desliga.","Conecte e ligue o mouse; troque a pilha se necess\xE1rio."],["Sensor obstru\xEDdo ou superf\xEDcie inadequada","Observe a base e teste em superf\xEDcie opaca uniforme.","Limpe externamente o sensor com cuidado e use um mousepad adequado."],["Porta USB ou hub com falha","Teste diretamente numa USB traseira.","Use uma porta funcional ou substitua o hub confirmado como defeituoso."],["Defeito no mouse ou falha de software","Compare com outro mouse e teste este em outro computador.","Troque o mouse se a falha o acompanhar; se s\xF3 ocorre neste sistema, revise o driver e as op\xE7\xF5es de acessibilidade."]],"O ponteiro se move de forma cont\xEDnua e os cliques funcionam.");Pe("Computador n\xE3o emite som","\xC1udio","Um \xE1udio est\xE1 sendo reproduzido, mas n\xE3o \xE9 ouvido.",[["Volume zerado ou silenciado","Confira o volume do sistema, do aplicativo e da caixa de som.","Remova o sil\xEAncio e aumente gradualmente o volume."],["Caixa ou fone desconectado","Confira energia da caixa e conex\xE3o na sa\xEDda de \xE1udio correta.","Ligue a caixa e conecte ao conector de sa\xEDda indicado no manual."],["Dispositivo de sa\xEDda errado","Observe se o sistema envia \xE1udio ao monitor HDMI, Bluetooth ou outra sa\xEDda.","Selecione a sa\xEDda onde est\xE1 seu fone ou caixa."],["Falha do acess\xF3rio ou driver","Teste outro fone e observe o dispositivo no gerenciador do sistema.","Troque o acess\xF3rio que falhou; instale o driver oficial se o dispositivo n\xE3o estiver corretamente reconhecido."]],"Um som de teste \xE9 ouvido no dispositivo escolhido.");Pe("Fone ou microfone do painel frontal n\xE3o funciona","\xC1udio","As conex\xF5es frontais falham, mas as traseiras podem funcionar.",[["Plugue ou conector inadequado","Confira se est\xE1 na entrada correta e se o fone combinado precisa de adaptador compat\xEDvel.","Use a conex\xE3o adequada; entrada de microfone n\xE3o \xE9 sa\xEDda de fone."],["Entrada/sa\xEDda frontal n\xE3o selecionada","Confira as op\xE7\xF5es de \xE1udio e a detec\xE7\xE3o do conector.","Selecione o dispositivo frontal correto e ajuste a detec\xE7\xE3o conforme o software oficial."],["Defeito no fone ou no conector frontal","Teste o mesmo fone atr\xE1s e outro fone na frente.","Substitua o acess\xF3rio defeituoso ou encaminhe o conector frontal se s\xF3 ele falhar."],["Cabo interno HD AUDIO solto","Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.","Reconecte no header de \xE1udio correto. N\xE3o use por tentativa os headers USB."]],"As conex\xF5es frontais reproduzem ou capturam \xE1udio conforme sua fun\xE7\xE3o.");Pe("Sem acesso \xE0 rede pelo cabo","Rede","O computador n\xE3o acessa a rede usando Ethernet.",[["Cabo de rede desconectado","Confira as duas pontas e os indicadores de link, quando existirem.","Encaixe o cabo na porta do PC e do switch/roteador."],["Cabo ou porta de rede com defeito","Teste cabo conhecido e outra porta do switch.","Troque o cabo ou use a porta funcional."],["Adaptador desativado","Confira se a interface Ethernet est\xE1 habilitada no sistema.","Habilite o adaptador; se n\xE3o for reconhecido, instale o driver oficial."],["Falha na rede ou na configura\xE7\xE3o IP","Compare com outro computador na mesma rede e consulte o caso 22.","Use configura\xE7\xE3o autom\xE1tica se a rede fornece DHCP; encaminhe falhas gerais ao respons\xE1vel pela rede."]],"O computador obt\xE9m uma configura\xE7\xE3o de rede v\xE1lida e acessa os recursos autorizados.");Pe("Wi-Fi n\xE3o aparece ou n\xE3o conecta","Rede","O desktop n\xE3o mostra redes sem fio ou n\xE3o consegue entrar na rede.",[["Desktop sem adaptador Wi-Fi","Confira se h\xE1 adaptador instalado; muitos desktops t\xEAm apenas Ethernet.","Use Ethernet ou instale um adaptador Wi-Fi compat\xEDvel."],["Wi-Fi desligado ou antena ausente","Confira modo avi\xE3o, Wi-Fi e antenas externas do adaptador.","Ative o Wi-Fi e conecte as antenas previstas pelo fabricante."],["Senha errada ou sinal fraco","Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.","Corrija a credencial e reposicione o computador ou ponto de acesso."],["Driver ou incompatibilidade de banda","Veja se o adaptador aparece no sistema e suporta a banda da rede.","Instale o driver oficial; escolha uma rede/banda compat\xEDvel ou encaminhe o roteador ao respons\xE1vel."]],"A rede conecta e permanece est\xE1vel em um teste de navega\xE7\xE3o.");Pe("Pendrive n\xE3o aparece no explorador","Armazenamento","O pendrive est\xE1 conectado, mas n\xE3o aparece entre as unidades.",[["Conex\xE3o inadequada","Retire com seguran\xE7a se detectado e teste numa USB traseira sem hub.","Reconecte numa porta funcional."],["Falha do pendrive","Teste em outro PC e compare com outro pendrive na mesma porta.","Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recupera\xE7\xE3o."],["Unidade sem letra","Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.","Se h\xE1 parti\xE7\xE3o saud\xE1vel sem letra, atribua uma letra livre. N\xE3o inicialize nem formate uma unidade com dados."],["Sistema de arquivos danificado ou incompat\xEDvel","Observe se aparece RAW, n\xE3o alocado ou com sistema de arquivos n\xE3o suportado.","N\xE3o aceite formata\xE7\xE3o autom\xE1tica. Fa\xE7a backup/recupera\xE7\xE3o; s\xF3 depois prepare a unidade para o sistema correto."]],"A unidade aparece e arquivos de teste podem ser lidos; a remo\xE7\xE3o segura funciona.","Se o conte\xFAdo for importante, interrompa tentativas de escrita na unidade defeituosa.");Pe("Impressora n\xE3o imprime a partir do desktop","Perif\xE9ricos","O trabalho \xE9 enviado, mas a impress\xE3o n\xE3o sai.",[["Impressora sem condi\xE7\xF5es de imprimir","Confira energia, papel, tampa e avisos no painel.","Ligue e resolva o aviso f\xEDsico indicado, conforme o manual."],["Impressora errada ou conex\xE3o ausente","Confira a impressora escolhida e o cabo USB ou rede.","Selecione a impressora correta e restaure a conex\xE3o."],["Fila pausada ou trabalho travado","Veja a fila de impress\xE3o e o estado offline/pausado.","Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma p\xE1gina."],["Driver ou servi\xE7o com falha","Teste uma p\xE1gina interna da impressora e uma p\xE1gina pelo sistema.","Se a p\xE1gina interna sai, revise driver oficial, porta e servi\xE7o de impress\xE3o com o professor."]],"Uma p\xE1gina de teste enviada pelo computador \xE9 impressa.");Pe("Webcam n\xE3o mostra imagem","Perif\xE9ricos","O aplicativo abre, mas a imagem da c\xE2mera n\xE3o aparece.",[["Tampa de privacidade ou conex\xE3o","Confira a tampa f\xEDsica e o cabo USB.","Abra a tampa e conecte a c\xE2mera diretamente ao PC."],["C\xE2mera errada selecionada","Observe o dispositivo escolhido no aplicativo.","Selecione a webcam correta."],["Permiss\xE3o bloqueada ou c\xE2mera ocupada","Confira as permiss\xF5es de c\xE2mera e feche outro aplicativo que esteja usando-a.","Autorize o aplicativo necess\xE1rio e deixe a c\xE2mera livre para o teste."],["Driver ou c\xE2mera defeituosa","Teste outro aplicativo, porta USB e outro PC.","Atualize o driver oficial se necess\xE1rio; substitua a c\xE2mera se a falha a acompanhar."]],"A c\xE2mera mostra uma imagem no aplicativo autorizado.");Pe("Microfone n\xE3o capta voz","\xC1udio","A pessoa fala, mas o indicador de entrada n\xE3o se move.",[["Microfone silenciado ou desconectado","Confira bot\xE3o de mute, plugue e alimenta\xE7\xE3o quando aplic\xE1vel.","Remova o mute e conecte \xE0 entrada correta."],["Entrada ou n\xEDvel de captura incorreto","Confira o dispositivo selecionado e o n\xEDvel de entrada.","Escolha o microfone correto e ajuste o n\xEDvel sem saturar."],["Permiss\xE3o ou configura\xE7\xE3o do aplicativo","Teste a grava\xE7\xE3o do sistema e confira a permiss\xE3o do aplicativo.","Autorize o uso e selecione a entrada no aplicativo."],["Plugue incompat\xEDvel, driver ou defeito","Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.","Use adaptador compat\xEDvel, revise o driver oficial ou substitua o acess\xF3rio cuja falha foi confirmada."]],"Uma grava\xE7\xE3o curta reproduz a voz com clareza.");Pe("Segundo monitor n\xE3o \xE9 reconhecido","V\xEDdeo","S\xF3 um monitor funciona num desktop com dois monitores conectados.",[["Monitor ou entrada desligada","Confira energia e entrada do segundo monitor.","Ligue e selecione a entrada conectada."],["Modo de exibi\xE7\xE3o inadequado","Abra as op\xE7\xF5es de m\xFAltiplos monitores do sistema.","Escolha estender ou duplicar e use a op\xE7\xE3o de detectar."],["Cabo, adaptador ou porta inadequados","Teste o segundo monitor sozinho e confira o sentido de convers\xE3o do adaptador.","Use cabo/adaptador apropriado. Um divisor simples n\xE3o cria duas telas independentes."],["Limite de GPU ou sa\xEDda da placa-m\xE3e indispon\xEDvel","Consulte o n\xFAmero de telas suportadas e a disponibilidade do v\xEDdeo integrado.","Conecte a sa\xEDdas suportadas; revise driver e configura\xE7\xE3o conforme o manual."]],"As duas telas aparecem nas configura\xE7\xF5es e operam no modo escolhido.");Pe("Data e hora ficam incorretas","Sistema","O rel\xF3gio mostra hor\xE1rio errado ou perde o ajuste depois de desligar.",[["Fuso hor\xE1rio incorreto","Confira fuso e hora autom\xE1tica no sistema.","Selecione o fuso correto e sincronize a hora."],["Sincroniza\xE7\xE3o indispon\xEDvel","Confira a conex\xE3o e o servi\xE7o de hora; compare com rel\xF3gio confi\xE1vel.","Restaure a sincroniza\xE7\xE3o autorizada ou ajuste temporariamente a hora."],["Hora perdida tamb\xE9m na BIOS/UEFI","Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.","Se a hora do firmware permanece correta, investigue o sistema; se \xE9 perdida, avance para a bateria."],["Bateria da placa-m\xE3e esgotada","Confirme o tipo no manual e registre as configura\xE7\xF5es antes da interven\xE7\xE3o.","Com supervis\xE3o e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e op\xE7\xF5es necess\xE1rias."]],"O rel\xF3gio permanece correto ap\xF3s desligar e religar, inclusive depois do teste sem energia.");Pe("Computador demora muito para iniciar","Sistema","A inicializa\xE7\xE3o chega ao sistema, mas leva tempo excessivo.",[["Perif\xE9rico atrasando a partida","Compare a inicializa\xE7\xE3o sem pendrives e acess\xF3rios n\xE3o essenciais.","Remova o acess\xF3rio problem\xE1tico e revise sua configura\xE7\xE3o."],["Muitos aplicativos iniciando juntos","Observe aplicativos de inicializa\xE7\xE3o e seu impacto.","Desative apenas os desnecess\xE1rios; mantenha prote\xE7\xE3o e servi\xE7os essenciais."],["Pouco espa\xE7o ou atualiza\xE7\xE3o em andamento","Confira espa\xE7o livre e estado das atualiza\xE7\xF5es.","Libere espa\xE7o com ferramentas do sistema e deixe a atualiza\xE7\xE3o terminar."],["Armazenamento lento ou falhando","Fa\xE7a backup e compare sa\xFAde da unidade e uso de disco ap\xF3s iniciar.","Se a unidade falha, substitua ap\xF3s preservar os dados; se \xE9 apenas limita\xE7\xE3o de HDD, avalie SSD compat\xEDvel."]],"O tempo de partida melhora em duas inicializa\xE7\xF5es compar\xE1veis, sem remover servi\xE7os essenciais.");Pe("Computador fica lento durante o uso","Sistema","Programas abrem devagar e o sistema responde com atraso.",[["Excesso de tarefas abertas","Observe CPU, mem\xF3ria e disco no monitor de tarefas.","Feche tarefas n\xE3o utilizadas e compare o desempenho."],["Armazenamento quase cheio","Confira espa\xE7o dispon\xEDvel no disco do sistema.","Remova arquivos tempor\xE1rios com ferramenta do sistema e mova arquivos pr\xF3prios ap\xF3s backup."],["Aplicativo consumindo recursos ou malware","Identifique o processo de maior consumo e fa\xE7a uma verifica\xE7\xE3o com prote\xE7\xE3o confi\xE1vel.","Atualize ou corrija o aplicativo; siga o caso 26 se houver infec\xE7\xE3o."],["Limite de hardware, calor ou unidade com falha","Compare o consumo com os requisitos dos programas, temperaturas e sa\xFAde do disco.","Corrija a causa confirmada; amplie RAM/SSD se houver limita\xE7\xE3o, ou siga os casos de calor e armazenamento."]],"A tarefa usada como refer\xEAncia volta a responder bem; registre qual recurso causava a lentid\xE3o.");Pe("Um programa trava ou fecha sozinho","Sistema","Um aplicativo espec\xEDfico para de responder, enquanto outros podem continuar funcionando.",[["Arquivo ou opera\xE7\xE3o espec\xEDfica com erro","Teste um arquivo novo e registre a a\xE7\xE3o que provoca o travamento.","Recupere o arquivo de backup ou evite a opera\xE7\xE3o at\xE9 corrigir o problema identificado."],["Recursos insuficientes","Confira espa\xE7o, mem\xF3ria e os requisitos do aplicativo.","Feche tarefas desnecess\xE1rias e libere espa\xE7o; ajuste a carga ao hardware."],["Vers\xE3o, extens\xE3o ou instala\xE7\xE3o com problema","Teste sem extens\xF5es opcionais e veja se come\xE7ou ap\xF3s uma mudan\xE7a.","Atualize pelo fornecedor ou repare/reinstale o aplicativo ap\xF3s salvar dados e configura\xE7\xF5es."],["Problema geral de sistema ou hardware","Observe se v\xE1rios programas tamb\xE9m travam e consulte registros de erros.","Se a falha \xE9 geral, siga os casos 36, 43 e 46 com o professor."]],"A mesma a\xE7\xE3o que antes travava funciona em testes repetidos, sem perda dos arquivos.");Pe("Windows chega a uma tela de recupera\xE7\xE3o","Inicializa\xE7\xE3o","O computador liga, mas n\xE3o carrega normalmente o Windows.",[["Dispositivo externo interferindo","Retire m\xEDdias remov\xEDveis e registre a mensagem completa.","Reinicie sem m\xEDdias n\xE3o essenciais; se resolver, revise a ordem de boot."],["Falha na inicializa\xE7\xE3o do sistema","Confira se a unidade do sistema \xE9 detectada e use as op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Com o professor, tente Reparo de Inicializa\xE7\xE3o. Se o disco n\xE3o \xE9 detectado, siga o caso 29."],["Atualiza\xE7\xE3o ou driver recente","Veja se o problema come\xE7ou logo ap\xF3s uma mudan\xE7a. Tenha a chave de recupera\xE7\xE3o se houver criptografia.","Use as op\xE7\xF5es apropriadas de desinstalar atualiza\xE7\xE3o ou Restaura\xE7\xE3o do Sistema, ap\xF3s avaliar o backup."],["Sistema corrompido ou disco defeituoso","Preserve dados e verifique a sa\xFAde da unidade antes de reinstalar.","Se o disco estiver saud\xE1vel, repare/reinstale o sistema ap\xF3s backup. Se falha, substitua a unidade antes da instala\xE7\xE3o."]],"O sistema inicia, os arquivos preservados est\xE3o acess\xEDveis e a falha n\xE3o reaparece.","Op\xE7\xF5es de recupera\xE7\xE3o podem alterar dados e aplicativos. Obtenha backup e chave de recupera\xE7\xE3o antes de procedimentos invasivos.");Pe("Rede conecta, mas n\xE3o abre a internet","Rede","A interface tem link ou Wi-Fi conectado, mas os sites n\xE3o abrem.",[["Falha geral da rede","Teste outro dispositivo na mesma rede e mais de um site.","Se todos falham, encaminhe o roteador/provedor ao respons\xE1vel; se s\xF3 um site falha, n\xE3o altere todo o PC."],["Endere\xE7o IP ou gateway inv\xE1lido","Com o professor, veja IP, m\xE1scara e gateway; 169.254.x.x costuma indicar que o DHCP n\xE3o forneceu endere\xE7o.","Use DHCP se previsto pela rede e renove a conex\xE3o; corrija IP fixo somente com os dados do administrador."],["Falha na resolu\xE7\xE3o de nomes (DNS)","Compare conectividade com o gateway e resolu\xE7\xE3o de nomes, usando testes orientados.","Restaure o DNS previsto pela rede; n\xE3o coloque servidores aleat\xF3rios numa rede escolar."],["Proxy, VPN ou bloqueio de seguran\xE7a","Confira se come\xE7ou ap\xF3s ativar VPN/proxy e verifique as regras da rede.","Corrija a configura\xE7\xE3o autorizada ou encaminhe ao administrador. N\xE3o desative a prote\xE7\xE3o como solu\xE7\xE3o permanente."]],"Sites e servi\xE7os autorizados abrem; o aluno diferencia link, IP e DNS.");Pe("Conex\xE3o de rede cai frequentemente","Rede","O acesso funciona por um tempo e depois \xE9 interrompido.",[["Mau contato ou sinal fraco","Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.","Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas."],["Falha no equipamento de rede","Compare outros dispositivos e outra porta do switch.","Use a porta funcional e informe quedas gerais ao respons\xE1vel pela rede."],["Economia de energia ou driver do adaptador","Observe se a queda ocorre ap\xF3s inatividade e confira o driver oficial.","Atualize o driver e ajuste a economia de energia conforme a orienta\xE7\xE3o do fabricante."],["Defeito no adaptador","Teste um adaptador compat\xEDvel conhecido sob as mesmas condi\xE7\xF5es.","Substitua o adaptador apenas se o teste isolar a falha nele."]],"A conex\xE3o permanece est\xE1vel no intervalo e atividade que antes causavam a queda.");Pe("Bluetooth n\xE3o encontra ou n\xE3o conecta o acess\xF3rio","Perif\xE9ricos","Um fone, teclado ou mouse Bluetooth n\xE3o aparece ou falha ao parear.",[["Desktop sem Bluetooth ou r\xE1dio desligado","Confira se o PC tem adaptador e se Bluetooth est\xE1 ativado.","Ative o recurso ou instale adaptador compat\xEDvel."],["Acess\xF3rio fora do modo de pareamento","Confira carga e siga o procedimento do fabricante.","Carregue e coloque o acess\xF3rio em modo de pareamento perto do PC."],["Pareamento antigo ou liga\xE7\xE3o a outro dispositivo","Veja se o acess\xF3rio est\xE1 conectado a outro aparelho.","Desconecte do outro aparelho e refa\xE7a apenas o pareamento desse acess\xF3rio."],["Driver, antena ou adaptador com falha","Teste outro acess\xF3rio e confira driver e antenas compartilhadas, se previstas.","Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada."]],"O acess\xF3rio pareia e executa sua fun\xE7\xE3o ap\xF3s uma reconex\xE3o.");Pe("Disco do sistema est\xE1 quase cheio","Armazenamento","O sistema avisa falta de espa\xE7o e pode falhar ao instalar programas.",[["Lixeira e arquivos tempor\xE1rios acumulados","Confira o uso de armazenamento e revise a lixeira antes de apagar.","Use a limpeza do sistema e exclua apenas itens dispens\xE1veis."],["Arquivos pessoais grandes","Identifique v\xEDdeos, downloads e outros arquivos pr\xF3prios.","Fa\xE7a backup e mova o que n\xE3o precisa ficar no disco principal."],["Programas desnecess\xE1rios","Confira programas instalados e tamanho ocupado.","Desinstale pelos recursos do sistema o que n\xE3o ser\xE1 usado, preservando dados necess\xE1rios."],["Capacidade insuficiente para a rotina","Compare o espa\xE7o exigido pela turma com o dispon\xEDvel ap\xF3s a limpeza.","Planeje unidade maior compat\xEDvel e migra\xE7\xE3o com backup. N\xE3o apague pastas do sistema manualmente."]],"H\xE1 espa\xE7o para o uso e as atualiza\xE7\xF5es previstas, e os arquivos necess\xE1rios continuam acess\xEDveis.");Pe("Propagandas estranhas e programas desconhecidos","Sistema","Aparecem redirecionamentos, extens\xF5es desconhecidas ou alertas suspeitos.",[["Notifica\xE7\xF5es autorizadas por engano","Identifique se o alerta vem do navegador e de qual site.","Revogue a permiss\xE3o do site desconhecido; n\xE3o clique no alerta."],["Extens\xE3o ou programa indesejado","Revise extens\xF5es e instala\xE7\xF5es recentes com o professor.","Remova itens indesejados pelos mecanismos oficiais."],["Poss\xEDvel infec\xE7\xE3o","Atualize a prote\xE7\xE3o confi\xE1vel e execute uma verifica\xE7\xE3o completa; isole da rede se houver comportamento ativo suspeito.","Siga as a\xE7\xF5es de quarentena da prote\xE7\xE3o e a pol\xEDtica do laborat\xF3rio."],["Comprometimento persistente","Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.","Encaminhe ao respons\xE1vel; uma reinstala\xE7\xE3o limpa pode ser necess\xE1ria ap\xF3s backup verificado. Troque senhas num dispositivo confi\xE1vel se houve exposi\xE7\xE3o."]],"A prote\xE7\xE3o conclui a verifica\xE7\xE3o e os sintomas n\xE3o retornam ap\xF3s reiniciar e testar o navegador.","N\xE3o instale \u201Climpadores\u201D anunciados pelos pr\xF3prios alertas. Em m\xE1quinas da escola, informe o respons\xE1vel pelo laborat\xF3rio.");Pe("Windows Update falha repetidamente","Sistema","Uma atualiza\xE7\xE3o n\xE3o instala e mostra uma mensagem ou c\xF3digo de erro.",[["Reinicializa\xE7\xE3o pendente","Confira o aviso de reiniciar e registre o c\xF3digo de erro.","Salve o trabalho e reinicie pelo sistema."],["Internet, hora ou espa\xE7o inadequados","Confira rede, rel\xF3gio e espa\xE7o livre.","Corrija conex\xE3o/hora e libere espa\xE7o com ferramentas do sistema."],["Erro detect\xE1vel pelo solucionador oficial","Execute a ferramenta de solu\xE7\xE3o de problemas de atualiza\xE7\xE3o dispon\xEDvel no sistema.","Aplique a corre\xE7\xE3o indicada e tente novamente."],["Arquivos do sistema ou pacote com falha","Pesquise o c\xF3digo na documenta\xE7\xE3o oficial com o professor e preserve os dados.","Fa\xE7a o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir."]],"A atualiza\xE7\xE3o prevista conclui e o sistema reinicia normalmente.","N\xE3o desligue \xE0 for\xE7a enquanto a instala\xE7\xE3o estiver progredindo.");Pe("Mensagem \u201CNo bootable device\u201D ou \u201CBoot device not found\u201D","Inicializa\xE7\xE3o","O firmware informa que n\xE3o encontrou um sistema para iniciar.",[["M\xEDdia remov\xEDvel escolhida por engano","Confira se h\xE1 pendrive ou disco externo conectado.","Remova a m\xEDdia de teste e tente iniciar novamente."],["Ordem de boot incorreta","Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.","Selecione a entrada de inicializa\xE7\xE3o correta, conforme a instala\xE7\xE3o existente."],["Unidade do sistema n\xE3o detectada","Confira a lista de armazenamento do firmware.","Se a unidade n\xE3o aparece, siga o caso 29 para testar conex\xE3o e unidade."],["Carregador de boot danificado ou modo incompat\xEDvel","Veja se o disco \xE9 detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.","Restaure a configura\xE7\xE3o conhecida ou use Reparo de Inicializa\xE7\xE3o com o professor, preservando dados."]],"A entrada correta carrega o sistema ap\xF3s reiniciar.","N\xE3o formate por causa dessa mensagem; ela n\xE3o prova que os arquivos foram perdidos.");Pe("HD ou SSD n\xE3o aparece na BIOS/UEFI","Armazenamento","O firmware n\xE3o lista uma unidade que deveria estar instalada.",[["Unidade ausente ou slot incorreto","Com o professor, compare a instala\xE7\xE3o com o manual e o tipo da unidade.","Instale no conector compat\xEDvel; M.2 SATA e NVMe n\xE3o s\xE3o intercambi\xE1veis em todo slot."],["Conex\xE3o frouxa","PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixa\xE7\xE3o correta.","Reconecte com cuidado conforme o manual."],["Cabo, porta ou compartilhamento de pistas","Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.","Substitua o cabo que falhou ou use porta/slot dispon\xEDvel e compat\xEDvel."],["Defeito na unidade ou no controlador","Teste a unidade em equipamento compat\xEDvel e outra unidade neste PC, sem formatar.","Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-m\xE3e."]],"A unidade \xE9 identificada corretamente no firmware e seus dados podem ser verificados.");Pe("HD ou SSD novo aparece na BIOS, mas n\xE3o no sistema","Armazenamento","Uma unidade adicional \xE9 detectada pelo firmware, mas n\xE3o aparece no explorador.",[["Expectativa de aparecer antes de ser preparada","Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.","Se j\xE1 tem dados, n\xE3o inicialize. Se \xE9 nova e vazia, prossiga com o professor."],["Disco offline ou parti\xE7\xE3o sem letra","Confira estado do disco e das parti\xE7\xF5es existentes.","Coloque online se apropriado ou atribua letra livre \xE0 parti\xE7\xE3o saud\xE1vel."],["Unidade realmente nova, sem parti\xE7\xE3o","Confirme que n\xE3o cont\xE9m dados e que \xE9 a unidade correta.","Com supervis\xE3o, inicialize no esquema adequado e crie/formate um volume; essas a\xE7\xF5es apagam ou alteram estruturas de dados."],["Driver, sistema de arquivos ou compatibilidade","Se nem o gerenciador a detecta, confira controlador e driver; se tem parti\xE7\xE3o, confira compatibilidade.","Instale driver oficial ou use sistema compat\xEDvel para recuperar dados antes de qualquer convers\xE3o/formata\xE7\xE3o."]],"O volume esperado fica acess\xEDvel e um arquivo de teste pode ser salvo e lido.","Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.");Pe("Portas USB frontais n\xE3o funcionam","Perif\xE9ricos","Um dispositivo funciona atr\xE1s, mas n\xE3o nas portas da frente do gabinete.",[["Problema no dispositivo ou cabo","Teste o acess\xF3rio em USB traseira e outro acess\xF3rio na frente.","Substitua o cabo/acess\xF3rio se a falha o acompanhar."],["Dispositivo exige mais energia","Compare um dispositivo simples e o acess\xF3rio de maior consumo.","Use porta adequada ou hub alimentado compat\xEDvel; n\xE3o sobrecarregue a porta."],["Cabo interno do painel solto","Com o professor e PC desligado da tomada, confira o header USB pelo manual.","Reconecte o cabo ao header correto, respeitando orienta\xE7\xE3o e pinos."],["Conector frontal danificado","Inspecione portas e cabo com a alimenta\xE7\xE3o desconectada.","N\xE3o use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado."]],"Um dispositivo conhecido funciona nas portas frontais reparadas.");Pe("USB desconecta e reconecta sozinho","Perif\xE9ricos","O sistema toca repetidamente o som de desconex\xE3o de um dispositivo USB.",[["Cabo frouxo ou danificado","Observe se o problema acompanha um cabo espec\xEDfico e teste outro cabo adequado.","Substitua o cabo que falhou e elimine tens\xE3o sobre o conector."],["Hub ou extens\xE3o inadequados","Conecte o dispositivo diretamente a uma porta traseira.","Retire o intermedi\xE1rio defeituoso ou use hub alimentado apropriado."],["Energia ou driver do dispositivo","Compare com outra porta e revise driver e economia de energia, se a falha ocorre ap\xF3s inatividade.","Use alimenta\xE7\xE3o prevista pelo fabricante e atualize/ajuste o driver oficial."],["Defeito do acess\xF3rio ou controlador","Teste o acess\xF3rio noutro PC e v\xE1rios acess\xF3rios neste PC.","Troque o acess\xF3rio se a falha o acompanhar; se v\xE1rias portas falham, pe\xE7a diagn\xF3stico da placa-m\xE3e."]],"O dispositivo permanece conectado durante a tarefa que antes provocava a queda.");Pe("Gabinete faz muito barulho","Refrigera\xE7\xE3o","H\xE1 ru\xEDdo forte de ventoinha, vibra\xE7\xE3o ou raspagem.",[["Vibra\xE7\xE3o externa","Confira se o gabinete est\xE1 est\xE1vel e se algum objeto vibra encostado nele.","Estabilize o gabinete e retire objetos em contato."],["Cabo encostando numa ventoinha","Desligue, retire da tomada e, com o professor, inspecione sem p\xF4r a m\xE3o em ventoinha em movimento.","Prenda os cabos longe das h\xE9lices."],["Poeira ou fluxo de ar restrito","Confira filtros, entradas de ar e temperatura.","Limpe com m\xE9todo adequado ao manual e desobstrua a ventila\xE7\xE3o."],["Ventoinha desgastada ou unidade mec\xE2nica falhando","Identifique de onde vem o som; cliques de HDD com erros exigem preserva\xE7\xE3o de dados.","Substitua a ventoinha confirmada como defeituosa. Se \xE9 HDD, siga o caso 46. Se \xE9 a fonte, encaminhe sem abri-la."]],"O ru\xEDdo anormal desaparece e temperaturas continuam adequadas.");Pe("Computador fica muito quente","Refrigera\xE7\xE3o","H\xE1 temperaturas elevadas ou queda de desempenho durante o uso.",[["Ambiente ou sa\xEDdas de ar obstru\xEDdas","Observe posi\xE7\xE3o, entradas/sa\xEDdas e condi\xE7\xF5es do ambiente.","Afaste de obstru\xE7\xF5es e melhore a circula\xE7\xE3o de ar."],["Carga de trabalho excessiva","Compare temperatura em repouso e em uso com ferramenta confi\xE1vel e limites do fabricante.","Reduza tarefas desnecess\xE1rias e investigue a tarefa respons\xE1vel."],["Poeira ou ventoinha com problema","Com PC desconectado e professor, inspecione filtros, dissipadores e conex\xF5es.","Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado."],["Cooler mal instalado ou interface t\xE9rmica inadequada","Verifique fixa\xE7\xE3o e montagem conforme o manual, sem desmontar em m\xE1quina quente.","O professor reinstala o cooler e aplica interface t\xE9rmica conforme o fabricante."]],"As temperaturas ficam dentro dos limites do componente na tarefa de refer\xEAncia.","N\xE3o use um limite \xFAnico para toda CPU/GPU. N\xE3o abra a fonte nem use l\xEDquidos ou aspirador dom\xE9stico nas placas.");Pe("Computador desliga sozinho durante o uso","Energia","O PC apaga sem encerramento normal do sistema.",[["Alimenta\xE7\xE3o externa intermitente","Observe tomada, cabo e filtro; compare com ponto de energia confi\xE1vel.","Corrija a conex\xE3o ou use alimenta\xE7\xE3o est\xE1vel. Defeito el\xE9trico deve ser tratado pelo respons\xE1vel."],["Aquecimento excessivo","Observe temperaturas antes da falha, sem for\xE7ar desligamentos repetidos.","Siga o caso 34 para corrigir refrigera\xE7\xE3o."],["Configura\xE7\xE3o ou comando de desligamento","Confira eventos, op\xE7\xF5es de energia e rela\xE7\xE3o com um programa espec\xEDfico.","Corrija a configura\xE7\xE3o ou aplicativo identificado."],["Fonte ou hardware com falha","Com o professor, compare com fonte compat\xEDvel conhecida; investigue componentes se persistir.","Substitua s\xF3 a pe\xE7a isolada no teste. Um evento de desligamento inesperado sozinho n\xE3o identifica a fonte."]],"O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimenta\xE7\xE3o adequadas.");Pe("Computador inteiro congela","Sistema","Mouse, teclado e programas deixam de responder; pode ser necess\xE1rio reiniciar.",[["Sobrecarga tempor\xE1ria","Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.","Feche a tarefa problem\xE1tica se conseguir e reduza a carga."],["Aplicativo ou driver recente","Confira se come\xE7ou ap\xF3s instala\xE7\xE3o/atualiza\xE7\xE3o e consulte os registros.","Atualize ou reverta a mudan\xE7a identificada, ap\xF3s salvar dados."],["Aquecimento ou armazenamento com falha","Verifique temperaturas e sa\xFAde da unidade; preserve arquivos antes de testes extensos.","Corrija refrigera\xE7\xE3o ou siga o caso 46 se houver sinais de falha no disco."],["Mem\xF3ria ou outro hardware inst\xE1vel","Com o professor, teste mem\xF3ria e par\xE2metros padr\xE3o; consulte o caso 43.","Isole o m\xF3dulo/componente defeituoso e substitua apenas ap\xF3s confirmar."]],"O sistema continua respondendo em repeti\xE7\xE3o da atividade e em uso normal.","Reinicializa\xE7\xE3o for\xE7ada pode perder trabalho n\xE3o salvo; use apenas se o sistema realmente n\xE3o responder.");Pe("Tela preta depois que o Windows come\xE7a a carregar","V\xEDdeo","A imagem de firmware aparece, mas some ao entrar no sistema.",[["Sa\xEDda ou modo de exibi\xE7\xE3o incorreto","Confira o monitor escolhido, entrada e conex\xE3o; teste uma \xFAnica tela.","Use a sa\xEDda correta e um modo de exibi\xE7\xE3o suportado."],["Driver de v\xEDdeo com falha","Com o professor, acesse o modo de seguran\xE7a pelas op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Se h\xE1 imagem nesse modo, reverta/reinstale o driver oficial relacionado \xE0 falha."],["Aplicativo ou sess\xE3o do sistema com erro","Veja se aparece ponteiro ou se outro usu\xE1rio consegue iniciar sess\xE3o.","Desative a inicializa\xE7\xE3o do aplicativo identificado ou repare a sess\xE3o com backup das informa\xE7\xF5es."],["Corrup\xE7\xE3o do sistema ou GPU inst\xE1vel","Compare outra sa\xEDda/GPU compat\xEDvel e op\xE7\xF5es de recupera\xE7\xE3o do sistema.","Repare o sistema ap\xF3s backup se hardware estiver saud\xE1vel; encaminhe a GPU se a falha a acompanhar."]],"A imagem permanece vis\xEDvel durante a entrada no Windows e o uso de aplicativos.");Pe("Mem\xF3ria instalada n\xE3o aparece por completo","Mem\xF3ria","O total informado difere dos m\xF3dulos instalados ou a mem\xF3ria utiliz\xE1vel \xE9 menor.",[["Confus\xE3o entre mem\xF3ria instalada e utiliz\xE1vel","Compare BIOS/UEFI, sistema e mem\xF3ria reservada ao hardware.","Explique a reserva para v\xEDdeo integrado e diferen\xE7as de unidades; n\xE3o troque RAM por uma reserva normal."],["Limite do sistema ou da placa","Confira arquitetura do sistema, capacidade suportada e manual da placa-m\xE3e.","Use sistema de 64 bits e m\xF3dulos dentro dos limites, quando necess\xE1rio e compat\xEDvel."],["M\xF3dulo mal encaixado ou slot errado","Com PC desconectado e professor, confira travas e slots recomendados.","Reinstale os m\xF3dulos nos slots previstos pelo fabricante."],["M\xF3dulo, slot ou canal com defeito","Teste um m\xF3dulo por vez e compare slots permitidos, registrando resultados.","Substitua o m\xF3dulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"Firmware reconhece a capacidade esperada e o sistema informa uma reserva explic\xE1vel.");Pe("Computador deixa de iniciar ap\xF3s instalar RAM","Mem\xF3ria","A falha surge logo depois da troca ou amplia\xE7\xE3o da mem\xF3ria.",[["Treinamento inicial de mem\xF3ria","Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo ap\xF3s mudan\xE7as.","Aguarde o per\xEDodo indicado, sem reiniciar continuamente."],["M\xF3dulo mal encaixado ou posi\xE7\xE3o incorreta","Com professor e alimenta\xE7\xE3o desconectada, confira travas e slots indicados.","Reencaixe corretamente; n\xE3o force um m\xF3dulo de padr\xE3o diferente."],["M\xF3dulo incompat\xEDvel ou mistura inst\xE1vel","Confira gera\xE7\xE3o DDR, capacidade, tipo e especifica\xE7\xF5es; teste a configura\xE7\xE3o anterior.","Use m\xF3dulos compat\xEDveis e preferencialmente um conjunto validado para a placa."],["Perfil de mem\xF3ria ou m\xF3dulo defeituoso","Com o professor, teste um m\xF3dulo por vez em par\xE2metros padr\xE3o; reset de CMOS somente conforme o manual.","Desative perfil inst\xE1vel ou substitua o m\xF3dulo que falha tamb\xE9m em condi\xE7\xF5es padr\xE3o."]],"O PC conclui o POST, reconhece a RAM e passa por teste orientado de mem\xF3ria.");Pe("Mensagem \u201CCPU Fan Error\u201D ou erro de ventoinha","Refrigera\xE7\xE3o","O firmware informa que n\xE3o detectou corretamente a ventoinha do processador.",[["Aviso ap\xF3s uma manuten\xE7\xE3o","N\xE3o ignore; desligue e confira o que foi alterado.","Interrompa o uso at\xE9 confirmar a refrigera\xE7\xE3o do processador."],["Cooler conectado ao header errado","Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.","Conecte o cooler ao header previsto; bombas de water cooler seguem o manual espec\xEDfico."],["Cabo solto, h\xE9lice bloqueada ou ventoinha defeituosa","Inspecione conex\xF5es e obst\xE1culos sem energizar partes expostas.","Reconecte, retire a obstru\xE7\xE3o ou substitua a ventoinha que falhou."],["Limite de leitura incompat\xEDvel com a montagem","Se refrigera\xE7\xE3o est\xE1 comprovadamente funcional, compare rota\xE7\xE3o m\xEDnima e leitura com o manual.","O professor ajusta o monitoramento ao conjunto correto. N\xE3o desative o alerta para esconder um cooler parado."]],"A leitura de refrigera\xE7\xE3o \xE9 coerente, o alerta \xE9 resolvido e a temperatura permanece adequada.");Pe("PC n\xE3o conclui o POST: bipes ou LED de diagn\xF3stico","Inicializa\xE7\xE3o","O computador tem energia, mas n\xE3o chega \xE0 imagem inicial ou sinaliza um erro.",[["C\xF3digo ainda n\xE3o identificado","Anote padr\xE3o, dura\xE7\xE3o, cor e modelo exato da placa/PC.","Consulte a tabela espec\xEDfica do fabricante; n\xE3o use tabelas universais de bipes."],["Perif\xE9rico ou mudan\xE7a recente interferindo","Compare sem acess\xF3rios externos n\xE3o essenciais e registre a \xFAltima mudan\xE7a.","Remova o acess\xF3rio problem\xE1tico ou restaure a configura\xE7\xE3o anterior."],["Mem\xF3ria ou v\xEDdeo indicados pelo c\xF3digo","Com professor e PC desconectado, confira encaixes e teste componente compat\xEDvel conhecido.","Corrija a conex\xE3o ou substitua somente o m\xF3dulo/placa que falhou no teste."],["CPU, placa-m\xE3e ou firmware indicados pelo diagn\xF3stico","Revise compatibilidade e siga os testes do manual; configura\xE7\xE3o m\xEDnima exige supervis\xE3o.","Encaminhe para diagn\xF3stico t\xE9cnico. Atualiza\xE7\xE3o de BIOS n\xE3o deve ser feita por tentativa num PC inst\xE1vel."]],"O POST \xE9 conclu\xEDdo e o c\xF3digo de erro deixa de aparecer.","POST \xE9 o autoteste de hardware executado antes de carregar o sistema operacional.");Pe("Liga por poucos segundos e desliga","Energia","As ventoinhas come\xE7am a girar, mas o PC apaga antes de iniciar.",[["Perif\xE9rico externo causando prote\xE7\xE3o","Desconecte acess\xF3rios externos n\xE3o essenciais com o PC desligado.","Retire o perif\xE9rico/cabo que faz a falha retornar."],["Conector de energia interno incompleto","Professor, PC fora da tomada: confira ATX da placa e alimenta\xE7\xE3o da CPU pelo manual.","Conecte os cabos corretos da fonte; n\xE3o confunda EPS/CPU com PCIe/GPU."],["Cooler ausente, solto ou erro de montagem","Confira a presen\xE7a, fixa\xE7\xE3o e conex\xE3o da refrigera\xE7\xE3o.","Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler."],["Curto, fonte ou placa-m\xE3e defeituosos","Professor inspeciona parafusos soltos, espa\xE7adores e testa fonte compat\xEDvel com seus pr\xF3prios cabos.","Corrija a montagem se confirmado; substitua fonte/placa s\xF3 ap\xF3s isolamento t\xE9cnico."]],"O PC permanece ligado e conclui o POST sem aquecimento anormal.","Se houver cheiro de queimado, fa\xEDsca ou l\xEDquido, desconecte e encaminhe: n\xE3o repita testes de energiza\xE7\xE3o.");Pe("Erros no teste de mem\xF3ria RAM","Mem\xF3ria","Uma ferramenta de diagn\xF3stico acusa erros, ou falhas gerais apontam para a mem\xF3ria.",[["Perfil de frequ\xEAncia inst\xE1vel","Registre os ajustes e confira se XMP/EXPO ou overclock est\xE1 ativo.","Com o professor, teste nos par\xE2metros padr\xE3o suportados."],["Mau encaixe","PC fora da tomada: confira travas e slots recomendados.","Reencaixe segurando pelas bordas, com prote\xE7\xE3o contra descarga eletrost\xE1tica."],["M\xF3dulo com falha","Teste um m\xF3dulo por vez no slot recomendado e repita com m\xF3dulo conhecido.","Substitua o m\xF3dulo se o erro o acompanhar em configura\xE7\xF5es padr\xE3o."],["Slot, controlador ou combina\xE7\xE3o de m\xF3dulos","Compare m\xF3dulos bons em slots permitidos e consulte compatibilidade.","Use conjunto compat\xEDvel; se o erro acompanha slot/canal, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"A configura\xE7\xE3o final passa pelo teste completo escolhido e n\xE3o reproduz as falhas observadas.","Um teste sem erros reduz suspeitas, mas n\xE3o garante aus\xEAncia de toda falha intermitente. N\xE3o esfregue borracha nem aplique produtos caseiros nos contatos.");Pe("Quadrados, linhas ou cores estranhas na imagem","V\xEDdeo","Aparecem artefatos gr\xE1ficos, distor\xE7\xF5es ou blocos de cor.",[["Cabo ou monitor","Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.","Substitua o cabo/monitor cuja falha foi isolada."],["Aplicativo ou driver","Veja se ocorre s\xF3 num programa e se come\xE7ou ap\xF3s atualiza\xE7\xE3o.","Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial."],["Temperatura ou overclock","Confira temperatura e par\xE2metros da GPU e mem\xF3ria, sem for\xE7ar testes se estiver superaquecendo.","Restaure par\xE2metros padr\xE3o e corrija a refrigera\xE7\xE3o."],["Falha de GPU ou mem\xF3ria compartilhada","Compare imagem antes do sistema e teste GPU/RAM compat\xEDvel conhecida com o professor.","Se acompanha a GPU, encaminhe/substitua a placa; com v\xEDdeo integrado, investigue tamb\xE9m RAM e placa-m\xE3e."]],"A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.");Pe("Jogos ou programas 3D travam, mas o desktop funciona","V\xEDdeo","A falha aparece com carga gr\xE1fica mais alta.",[["Requisito ou configura\xE7\xE3o acima do hardware","Compare requisitos, resolu\xE7\xE3o e ajustes do programa.","Use configura\xE7\xF5es compat\xEDveis e teste uma carga menor."],["Programa ou driver com falha","Confira se outros programas 3D tamb\xE9m falham e registre o erro.","Atualize/repare o programa e use driver oficial compat\xEDvel."],["Aquecimento ou ajustes inst\xE1veis","Observe temperaturas e desative overclock/perfis inst\xE1veis com o professor.","Corrija a refrigera\xE7\xE3o e teste nos par\xE2metros padr\xE3o."],["GPU ou alimenta\xE7\xE3o inadequada","Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.","Use alimenta\xE7\xE3o prevista e substitua o componente cuja falha foi confirmada. N\xE3o continue for\xE7ando desligamentos."]],"A tarefa gr\xE1fica de refer\xEAncia funciona com ajustes suportados, sem travamento nem desligamento.");Pe("HD faz cliques ou unidade apresenta erros de leitura","Armazenamento","Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.",[["Ind\xEDcio de risco aos dados","Confira mensagens e ru\xEDdo; n\xE3o confunda acesso normal de HDD com cliques repetitivos de falha.","Pare usos n\xE3o essenciais. Se os dados s\xE3o insubstitu\xEDveis ou h\xE1 ru\xEDdo anormal, desligue e busque recupera\xE7\xE3o especializada."],["Conex\xE3o com mau contato","Se n\xE3o h\xE1 dano mec\xE2nico aparente e o professor autoriza teste, confira cabos com PC desconectado.","Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade."],["Alerta de sa\xFAde da unidade","Consulte indicadores SMART e diagn\xF3stico oficial, priorizando backup e evitando teste extenso em disco degradado.","Copie dados acess\xEDveis para outra unidade saud\xE1vel; alertas de falha justificam substitui\xE7\xE3o."],["Falha persistente da unidade","Se erros acompanham a unidade em conex\xE3o confi\xE1vel, trate como falha de armazenamento.","Substitua e restaure backup. Para dados n\xE3o recuperados, encaminhe a especialista."]],"Os dados preservados s\xE3o verificados e a unidade saud\xE1vel opera sem os erros anteriores.","N\xE3o abra HDD, n\xE3o use congelador e n\xE3o execute reparos que escrevem na unidade antes de avaliar a preserva\xE7\xE3o dos dados. SSD n\xE3o tem pe\xE7as m\xF3veis; ru\xEDdo mec\xE2nico n\xE3o vem dele.");Pe("Tela de erro de parada: BSOD","Sistema","O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela vers\xE3o.",[["C\xF3digo e contexto desconhecidos","Registre c\xF3digo de parada, hor\xE1rio, tarefa e mudan\xE7a recente; um c\xF3digo sozinho n\xE3o identifica uma pe\xE7a.","Guarde as informa\xE7\xF5es para comparar ocorr\xEAncias antes de alterar o PC."],["Driver, atualiza\xE7\xE3o ou acess\xF3rio recente","Compare sem o acess\xF3rio rec\xE9m-instalado e consulte hist\xF3rico de erros.","Reverta ou atualize o item relacionado \xE0 falha com fonte oficial."],["Arquivos do sistema, temperatura ou disco","Fa\xE7a backup, verifique registros, refrigera\xE7\xE3o e sa\xFAde da unidade.","Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho."],["RAM ou outro hardware inst\xE1vel","Com o professor, teste em par\xE2metros padr\xE3o, mem\xF3ria e componentes apontados pelos registros.","Substitua apenas o item cuja falha foi isolada; se necess\xE1rio, encaminhe an\xE1lise dos registros de falha."]],"A atividade que provocava a falha e o uso normal ficam est\xE1veis; registre se houve nova ocorr\xEAncia.");Pe("PC reinicia ou perde estabilidade ap\xF3s ativar XMP/EXPO","Mem\xF3ria","O defeito come\xE7a depois de alterar frequ\xEAncia ou temporiza\xE7\xF5es da mem\xF3ria.",[["Rela\xE7\xE3o com o ajuste n\xE3o confirmada","Registre o perfil ativado e compare com a configura\xE7\xE3o anterior.","Com o professor, desative o perfil e teste nos par\xE2metros padr\xE3o."],["Limite de compatibilidade do conjunto","Confira manual, lista de mem\xF3ria validada e capacidade/frequ\xEAncia suportadas pela CPU.","Use um perfil/configura\xE7\xE3o suportada e est\xE1vel; o perfil anunciado n\xE3o \xE9 garantia para todo conjunto."],["Mistura de m\xF3dulos ou slots inadequados","Confira se os m\xF3dulos s\xE3o de um conjunto validado e ocupam os slots recomendados.","Teste o conjunto apropriado nos slots corretos."],["Falha persistente em par\xE2metros padr\xE3o","Execute teste orientado de mem\xF3ria se o erro continua sem perfil.","Siga o caso 43; encaminhe firmware/controlador se m\xF3dulos bons tamb\xE9m falham."]],"O PC fica est\xE1vel e passa no teste de mem\xF3ria com a configura\xE7\xE3o final documentada.","Reset de CMOS s\xF3 conforme o manual, registrando ajustes e tendo a chave de recupera\xE7\xE3o do disco se necess\xE1ria.");Pe("Computador n\xE3o inicia depois de uma troca de pe\xE7as","Inicializa\xE7\xE3o","A falha aparece logo ap\xF3s trocar CPU, GPU, fonte ou outro componente.",[["Conex\xE3o esquecida durante a montagem","PC fora da tomada: professor compara cabos, v\xEDdeo e montagem com os manuais.","Corrija o encaixe/conector ausente sem for\xE7ar nem adaptar cabos indevidos."],["Pe\xE7a nova incompat\xEDvel","Confira modelo exato, socket, mem\xF3ria, pot\xEAncia e conectores necess\xE1rios.","Instale componente compat\xEDvel. Em fontes modulares, use apenas cabos aprovados para o modelo espec\xEDfico."],["CPU depende de vers\xE3o de BIOS espec\xEDfica","Consulte a lista oficial de CPUs e a vers\xE3o m\xEDnima de firmware.","Professor planeja atualiza\xE7\xE3o apenas pelo m\xE9todo oficial, com energia est\xE1vel e hardware/m\xE9todo compat\xEDvel."],["Pe\xE7a nova defeituosa ou dano de montagem","Compare com a configura\xE7\xE3o anterior, se segura; examine socket e fixa\xE7\xF5es sem tocar em pinos.","Se a falha acompanha a pe\xE7a nova, substitua; se h\xE1 dano f\xEDsico, encaminhe para reparo especializado."]],"O novo conjunto conclui o POST, reconhece as pe\xE7as e fica est\xE1vel no uso previsto.","Atualizar BIOS por tentativa pode inutilizar a placa. N\xE3o misture cabos modulares de fontes diferentes.");Pe("Suspeita de defeito na placa-m\xE3e","Inicializa\xE7\xE3o","Falhas persistem mesmo ap\xF3s verificar alimenta\xE7\xE3o, conex\xF5es e componentes b\xE1sicos.",[["Conclus\xE3o prematura","Revise o hist\xF3rico e confirme tomada, fonte, monitor, cabos e c\xF3digo de POST.","Resolva causas externas e documente tudo antes de condenar a placa."],["Configura\xE7\xE3o ou montagem inadequada","Professor confere conectores, espa\xE7adores, compatibilidade e par\xE2metros registrados.","Corrija montagem; restaure ajustes conforme o manual se houver evid\xEAncia de configura\xE7\xE3o incorreta."],["Outra pe\xE7a provoca o sintoma","Com professor, fa\xE7a teste m\xEDnimo previsto no manual usando fonte, RAM e v\xEDdeo compat\xEDveis conhecidos.","Troque uma vari\xE1vel por vez e substitua a pe\xE7a que comprovadamente causa o erro."],["Falha da placa-m\xE3e ou CPU ainda n\xE3o isolada","Se a falha persiste com pe\xE7as boas e montagem correta, s\xE3o necess\xE1rios testes t\xE9cnicos adicionais.","Encaminhe para bancada especializada; substitua a placa somente com evid\xEAncia suficiente. Reparos eletr\xF4nicos ficam fora desta pr\xE1tica."]],"H\xE1 um diagn\xF3stico documentado com testes comparativos ou encaminhamento justificado, seguido de valida\xE7\xE3o do reparo.","Inspe\xE7\xE3o visual sem danos n\xE3o prova que a placa est\xE1 boa. Fonte conhecida e compat\xEDvel \xE9 diferente de fonte apenas \u201Cnova\u201D.");var ed=[{id:1,name:"Primeiros passos",short:"B\xE1sico",desc:"Energia, cabos e conex\xF5es externas."},{id:2,name:"Uso e configura\xE7\xF5es",short:"B\xE1sico +",desc:"Perif\xE9ricos, ajustes e desempenho."},{id:3,name:"Sistema e armazenamento",short:"Intermedi\xE1rio",desc:"Boot, rede, arquivos e recupera\xE7\xE3o."},{id:4,name:"Dentro do gabinete",short:"Intermedi\xE1rio +",desc:"Refrigera\xE7\xE3o, mem\xF3ria e conex\xF5es internas."},{id:5,name:"Isolamento de falhas",short:"Avan\xE7ado guiado",desc:"POST, testes comparativos e diagn\xF3stico t\xE9cnico."}];var Yc="amc-mundo-3d-v1",$c="Preservar os dados, consultar o manual e fazer interven\xE7\xF5es internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.",Ss=["Preparar","Investigar","Diagnosticar","Corrigir","Validar","Comunicar"],Mn=[{name:"Campus",color:"#397e68",xp:0},{name:"Circuito",color:"#438eaf",xp:200},{name:"Criativo",color:"#ac7a50",xp:500},{name:"Especialista",color:"#8a72aa",xp:1e3}],zi=i=>(i.id-1)%i.steps.length,Zc=()=>({version:1,tutorial:!1,skin:0,quality:"auto",records:{},shop:qc()}),td=()=>({stage:0,tested:[],errors:0,hints:0}),In=i=>Object.values(i.records).filter(e=>e.stage===6).length*100;function Jc(i){if(!i||typeof i!="object"||i.version!==1||!i.records||typeof i.records!="object"||Array.isArray(i.records))throw Error("Arquivo de progresso inv\xE1lido.");let e=Zc();e.tutorial=i.tutorial===!0,e.quality=["auto","low"].includes(i.quality)?i.quality:"auto";for(let t of lt){let n=i.records[t.id];if(!n||!Number.isInteger(n.stage)||n.stage<0||n.stage>6||!Array.isArray(n.tested))continue;let s=[...new Set(n.tested.filter(a=>Number.isInteger(a)&&a>=0&&a<t.steps.length))],r=n.stage>1&&!s.includes(zi(t))?1:n.stage;e.records[t.id]={stage:r,tested:s,errors:Number.isInteger(n.errors)&&n.errors>=0?Math.min(n.errors,1e5):0,hints:Number.isInteger(n.hints)&&n.hints>=0?Math.min(n.hints,1e5):0}}return e.skin=Number.isInteger(i.skin)&&Mn[i.skin]?.xp<=In(e)?i.skin:0,e.shop=Ku(i.shop,e.records),e}function Kc(i,e){return e===0?[$c,"Abrir a fonte para procurar a falha.","Substituir v\xE1rias pe\xE7as sem fazer testes."]:e===2?i.steps.map(t=>t[0]):e===3?i.steps.map(t=>t[2]):e===4?[i.confirm,"Encerrar sem repetir a tarefa que apresentava o defeito.","Considerar resolvido s\xF3 porque uma pe\xE7a foi trocada."]:e===5?["Registrar sintoma, evid\xEAncia, causa, a\xE7\xE3o e valida\xE7\xE3o; comunicar os limites e a supervis\xE3o necess\xE1ria.","Informar apenas \u201Cresolvido\u201D, sem registrar os testes.","Afirmar que todo computador com esse sintoma tem a mesma causa."]:[]}function nd(i,e,t){let n=Kc(i,e.stage);if(!n.length||!Number.isInteger(t)||t<0||t>=n.length)return!1;let s=[2,3].includes(e.stage)?zi(i):0;return t!==s?(e.errors++,!1):(e.stage++,!0)}function id(i,e,t){return e.stage!==1||!Number.isInteger(t)||t<0||t>=i.steps.length?null:(e.tested.includes(t)||e.tested.push(t),t===zi(i)?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${i.steps[t][0]}. A falha permanece at\xE9 a corre\xE7\xE3o correspondente.`:"Resultado esperado nesta verifica\xE7\xE3o: essa hip\xF3tese foi descartada no cen\xE1rio. A falha continua. Compare outra vari\xE1vel, uma de cada vez.")}function sd(i,e){return e.stage===1&&e.tested.includes(zi(i))?(e.stage=2,!0):!1}var mr=new P;function ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;mr.copy(e),mr[n]=0,mr.normalize();let c=.5*a/(a+o),u=1-mr.angleTo(i)/l;return Math.sign(mr[t])===1?u*c:o/(a+o)+c+c*(1-u)}var go=class i extends Kt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,_=new P,m=.5/a;for(let f=0,w=0;f<d.length;f+=3,w+=2)switch(l.fromArray(d,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[f+0]=u.x*Math.sign(l.x)+c.x*r,d[f+1]=u.y*Math.sign(l.y)+c.y*r,d[f+2]=u.z*Math.sign(l.z)+c.z*r,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),h[w+0]=ln(_,c,"z","y",r,n),h[w+1]=1-ln(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),h[w+0]=1-ln(_,c,"z","y",r,n),h[w+1]=1-ln(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),h[w+0]=1-ln(_,c,"x","z",r,e),h[w+1]=ln(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),h[w+0]=1-ln(_,c,"x","z",r,e),h[w+1]=1-ln(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),h[w+0]=1-ln(_,c,"x","y",r,e),h[w+1]=1-ln(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),h[w+0]=ln(_,c,"x","y",r,e),h[w+1]=1-ln(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ev={height:2.84,torsoWidth:1.04,torsoHeight:1.04,armWidth:.48,armHeight:1.02,legWidth:.48,legHeight:1,headWidth:.76,headHeight:.68,footBottom:0},jc=new Map;function vo(i="#527f65",e="#d3a077",t="#44372d",n=null){let s=n||(_=>new jt({color:_,roughness:.58,metalness:0})),r=new yt,a=[],o=[];function l(_,m,f,w,E,y,R,T,S=r,C=.035){let v=[m,f,w,C].join(",");if(!jc.has(v)){let L=new go(m,f,w,1,C);L.userData.sharedAvatar=!0,jc.set(v,L)}let M=new tt(jc.get(v),s(E));return M.name=_,M.position.set(y,R,T),M.castShadow=!0,M.receiveShadow=!0,S.add(M),M}let c=l("avatar-torso",1.04,1.04,.56,i,0,1.52,0);o.push(c);let u=new tt(new Gt(.17,.17,.12,12),s(e));u.position.y=2.08,u.castShadow=!0,r.add(u);let d=new tt(new Gt(.38,.38,.68,16),s(e));d.name="avatar-head",d.position.set(0,2.44,0),d.castShadow=!0,d.receiveShadow=!0,r.add(d),l("avatar-hair",.79,.14,.73,t,0,2.77,-.025,r,.06),l("avatar-hair-back",.72,.27,.17,t,0,2.63,-.3,r,.03),l("avatar-hair-fringe",.39,.11,.12,t,-.15,2.7,.31,r,.025);for(let _ of[-1,1]){let m=new yt;m.name=_<0?"avatar-arm-left":"avatar-arm-right",m.position.set(_*.78,2.03,0),r.add(m),o.push(l("avatar-sleeve",.48,.72,.56,i,0,-.36,0,m)),l("avatar-hand",.46,.3,.54,e,0,-.87,0,m);let f=new yt;f.name=_<0?"avatar-leg-left":"avatar-leg-right",f.position.set(_*.265,1,0),r.add(f),l("avatar-trouser",.48,.91,.54,"#304b62",0,-.455,0,f),l("avatar-shoe",.5,.16,.64,"#f4f2e8",0,-.92,.045,f,.025),l("avatar-shoe-sole",.51,.045,.65,"#c9cec4",0,-.9775,.045,f,.012),a.push(m,f)}for(let _ of[-1,1]){let m=new tt(new wi(.043,8,6),s("#292c2c"));m.scale.set(1,1.2,.35),m.position.set(_*.13,2.47,.36),r.add(m)}let p=new Ei(new P(-.14,2.34,.36),new P(0,2.23,.39),new P(.14,2.34,.36)),h=new tt(new ir(p,12,.012,5,!1),s("#694634"));r.add(h),l("avatar-pocket",.25,.25,.025,"#b9d4ab",.245,1.68,.293,r,.016),l("avatar-badge",.15,.065,.014,"#f1f5dc",.245,1.72,.313,r,.006),l("avatar-back-mark",.32,.055,.018,"#c1dcc4",0,1.81,-.292,r,.008),l("avatar-back-mark-small",.19,.035,.018,"#9cc4ae",0,1.71,-.292,r,.006),l("avatar-shirt-seam",.015,.68,.012,"#719479",0,1.54,.285,r,.004);let g=new tt(new js(.74,24),new Vn({color:"#53694a",transparent:!0,opacity:.16,depthWrite:!1}));return g.rotation.x=-Math.PI/2,g.position.y=.012,r.add(g),r.userData.bodyHeight=ev.height,{group:r,torso:c,limbs:a,shirtMeshes:o}}function Qc(i){let e=new yt;e.name="gear-"+i.id;let t=new jt({color:i.color,roughness:.45,metalness:.12}),n=new jt({color:"#304251",roughness:.6}),s=new jt({color:i.color,emissive:i.color,emissiveIntensity:.7,roughness:.3}),r=(o,l,c,u,d)=>{let p=new tt(o,l);return p.position.set(c,u,d),p.castShadow=!0,e.add(p),p},a=(o,l,c,u,d,p,h)=>r(new Kt(o,l,c),u,d,p,h);if(i.kind==="visor")a(.83,.22,.09,t,0,2.52,.37),a(.65,.12,.025,n,0,2.52,.425),a(.12,.025,.03,s,-.2,2.55,.445);else if(i.kind==="cap"||i.kind==="hardhat")r(new wi(.43,16,8,0,Math.PI*2,0,Math.PI/2),t,0,2.75,0),i.kind==="cap"?a(.74,.07,.36,t,0,2.77,.38):(r(new Gt(.49,.49,.08,16),t,0,2.78,0),a(.1,.23,.8,t,0,2.96,0));else if(i.kind==="headphones"){r(new ds(.46,.055,6,20,Math.PI),n,0,2.53,0);for(let o of[-1,1])a(.14,.36,.31,t,o*.43,2.46,0)}else if(i.category==="back"){for(let o of[-1,1])a(.06,.82,.035,n,o*.31,1.56,.3);if(i.kind==="jetpack"){a(.53,.66,.2,n,0,1.61,-.42);for(let o of[-1,1])r(new Gt(.16,.14,.8,10),t,o*.32,1.62,-.48),r(new Si(.13,.24,10),s,o*.32,1.13,-.48).rotation.z=Math.PI}else a(.78,.88,.32,t,0,1.55,-.47),a(.56,.26,.12,n,0,1.29,-.68),a(.1,.1,.02,s,.19,1.68,-.64),i.kind==="toolpack"&&(a(.08,.42,.08,n,-.18,2.07,-.46),a(.24,.09,.09,t,-.18,2.24,-.46))}else{let o=r(new ds(.98,.035,6,48),s,0,.08,0);o.rotation.x=-Math.PI/2;let l=i.kind==="cosmic"?8:6;for(let c=0;c<l;c++){let u=c*Math.PI*2/l,d=i.kind==="orbit"?1:1.08,p=r(i.kind==="cosmic"?new nr(.075):new Kt(.085,.085,.085),s,Math.cos(u)*d,.25+c%3*.16,Math.sin(u)*d);p.rotation.z=u}e.userData.animated=!0}return e}function Es(i,e={}){let t=i.group.getObjectByName("shop-accessories");if(t){i.group.remove(t);let s=new Set,r=new Set;t.traverse(a=>{a.geometry&&s.add(a.geometry),a.material&&r.add(a.material)}),s.forEach(a=>a.dispose()),r.forEach(a=>a.dispose())}let n=new yt;n.name="shop-accessories";for(let s of Object.values(e)){let r=zt.find(a=>a.id===s);r&&n.add(Qc(r))}return i.group.add(n),n}function _o(i,e,t=!1){if(i)for(let n of i.children)n.userData.animated&&(n.rotation.y=t?0:e*.7)}function rd(i,{shirt:e,equipped:t,dark:n=!1,low:s=!1}){let r;try{r=new Ms({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}r.setPixelRatio(Math.min(devicePixelRatio,s?1:1.5)),r.outputColorSpace=Ct,r.toneMapping=hs;let a=new bi,o=new Rt(38,1,.1,30);o.position.set(0,1.9,6.2),o.lookAt(0,1.45,0),a.add(new Ci("#efffff","#43515e",2.4));let l=new Ri("#ffffff",3);l.position.set(-3,5,4),a.add(l);let c=vo(e);a.add(c.group);let u=Es(c,t),d=-.3,p=!0,h=null,g=!0,_,m=matchMedia("(prefers-reduced-motion: reduce)").matches,f=new tt(new Gt(1.35,1.5,.12,40),new jt({color:n?"#344f48":"#d6e3c8",roughness:.75}));f.position.y=-.075,a.add(f),r.domElement.setAttribute("aria-label","Pr\xE9via 3D do seu avatar. Arraste para girar."),i.append(r.domElement),i.classList.add("preview-ready");function w(){let S=Math.max(i.clientWidth,240),C=Math.max(i.clientHeight,290);r.setSize(S,C),o.aspect=S/C,o.updateProjectionMatrix()}let E=new ResizeObserver(w);E.observe(i),w(),r.domElement.addEventListener("pointerdown",S=>{h={id:S.pointerId,x:S.clientX},r.domElement.setPointerCapture?.(S.pointerId),p=!1}),r.domElement.addEventListener("pointermove",S=>{h?.id===S.pointerId&&(d+=(S.clientX-h.x)*.013,h.x=S.clientX)});for(let S of["pointerup","pointercancel","lostpointercapture"])r.domElement.addEventListener(S,()=>h=null);let y=performance.now(),R=0;function T(S){if(!g)return;let C=Math.min((S-y)/1e3,.05);y=S,R+=C,p&&!m&&(d+=C*.3),c.group.rotation.y=d,_o(u,R,m),r.render(a,o),_=requestAnimationFrame(T)}return _=requestAnimationFrame(T),{update(S,C){c.shirtMeshes.forEach(v=>v.material.color.set(S)),u=Es(c,C)},toggle(){return p=!p,p},dispose(){g=!1,cancelAnimationFrame(_),E.disconnect();let S=new Set,C=new Set;a.traverse(v=>{v.geometry&&!v.geometry.userData.sharedAvatar&&S.add(v.geometry),v.material&&C.add(v.material)}),S.forEach(v=>v.dispose()),C.forEach(v=>v.dispose()),r.dispose(),r.domElement.remove()}}}function ad({getState:i,save:e,onEquip:t,openPanel:n,toast:s,icon:r,onMission:a}){let o=T=>document.querySelector(T),l=[...zt,...po,...Mn.map((T,S)=>({...T,id:"uniform-"+S,category:"uniform",price:0,tag:"UNIFORME DO CAMPUS",description:"Uma nova cor para vestir a experi\xEAncia que voc\xEA construiu.",skin:S}))],c="visor-lime",u="all",d=null,p=!1,h=T=>T.category==="looks"?T.items.every(S=>i().shop.owned.includes(S)):T.category==="uniform"?li(i())>=T.xp:i().shop.owned.includes(T.id),g=T=>T.category==="looks"?i().skin===T.skin&&T.items.every(S=>i().shop.equipped[zt.find(C=>C.id===S).category]===S):T.category==="uniform"?i().skin===T.skin:i().shop.equipped[T.category]===T.id;function _(){p=!1,d?.dispose(),d=null}o("#panel").addEventListener("close",_);function m(T){let S=i(),C={...S.shop.equipped},v=Mn[S.skin].color;if(T.category==="looks"){v=Mn[T.skin].color;for(let M of T.items)C[zt.find(L=>L.id===M).category]=M}else T.category==="uniform"?v=T.color:C[T.category]=T.id;return{shirt:v,equipped:C}}function f(T){l.some(S=>S.id===T)&&(c=T,E(),o("#shop-cards").querySelectorAll("[data-shop-select]").forEach(S=>{S.classList.toggle("is-selected",S.dataset.shopSelect===c),S.setAttribute("aria-pressed",String(S.dataset.shopSelect===c))}))}function w(){let T=l.filter(S=>u==="all"||u==="owned"&&h(S)||u==="favorites"&&i().shop.wishlist.includes(S.id)||S.category===u);o("#shop-count").textContent=`${T.length} visuais`,o("#shop-cards").innerHTML=T.map(S=>`<button class="shop-item ${c===S.id?"is-selected":""}" data-shop-select="${S.id}" aria-pressed="${c===S.id}"><span class="item-picture" style="--item-color:${S.color}"><img src="shop/${S.id}.webp" alt="" loading="lazy" width="350" height="350"><span class="item-state">${g(S)?"\u2713 EM USO":h(S)?"NA COLE\xC7\xC3O":li(i())<S.xp?"\u25C8 "+S.xp+" XP":""}</span></span><span class="item-name">${S.name}</span><span class="item-price">${S.category==="uniform"?S.xp?S.xp+" XP":"INCLU\xCDDO":r("coin")+(S.category==="looks"?mo(i(),S):S.price)}<span>Experimentar \u2197</span></span></button>`).join("")||'<p class="dialog-copy">Sua cole\xE7\xE3o come\xE7a com uma descoberta. Experimente um item para conhecer os detalhes.</p>'}function E(){let T=i(),S=l.find(ce=>ce.id===c),C=li(T),v=h(S),M=g(S),L=C<S.xp,B=S.category==="looks"?mo(T,S):S.price;o("#shop-balance").textContent=qn(T),o("#shop-owned").textContent=T.shop.owned.length,o("#shop-tag").textContent=S.tag,o("#shop-name").textContent=S.name,o("#shop-description").textContent=S.description,o("#shop-preview-image").src="shop/"+S.id+".webp",o("#shop-preview-image").alt="Pr\xE9via de "+S.name;let q=o("#shop-requirement");q.textContent=L?`Mais ${S.xp-C} XP para liberar este item. Continue investigando!`:M?"Este item j\xE1 acompanha voc\xEA no campus.":v?"J\xE1 faz parte da sua cole\xE7\xE3o. Equipe quando quiser.":"Experimente sem compromisso. O item s\xF3 \xE9 adquirido pelo bot\xE3o abaixo.",o("#shop-progress").style.width=`${S.xp?Math.min(100,C/S.xp*100):100}%`;let X=o("#shop-action");X.disabled=L||M||!v&&qn(T)<B,X.textContent=L?`Libera em ${S.xp} XP`:M?"\u2713 Equipado":v?"Equipar no avatar":qn(T)<B?`Faltam ${B-qn(T)} cr\xE9ditos`:`Adquirir e equipar \xB7 ${B} cr\xE9ditos`,o("#shop-remove").hidden=["uniform","looks"].includes(S.category)||!M;let K=T.shop.wishlist.includes(S.id);o("#shop-favorite").textContent=K?"\u2665 Nos favoritos":"\u2661 Guardar nos favoritos",o("#shop-favorite").setAttribute("aria-pressed",String(K));let Y=Math.max(Math.ceil(Math.max(0,S.xp-C)/100),Math.ceil(Math.max(0,B-qn(T))/40));o("#shop-goal").hidden=Y===0,o("#shop-goal-text").textContent=`Sua meta est\xE1 a ${Y} ${Y===1?"miss\xE3o":"miss\xF5es"} de dist\xE2ncia.`,o("#shop-credit-note").textContent=`${C/100} miss\xF5es conclu\xEDdas \xB7 40 cr\xE9ditos por nova miss\xE3o \xB7 100 cr\xE9ditos iniciais`;let ie=l.filter(ce=>ce.xp>C).sort((ce,me)=>ce.xp-me.xp)[0];o("#shop-next").textContent=ie?`Sua pr\xF3xima descoberta: ${ie.name} em ${ie.xp} XP.`:"Voc\xEA liberou todos os requisitos de XP. Escolha seu pr\xF3ximo visual.";let z=m(S);d?.update(z.shirt,z.equipped)}function y(){w(),E()}function R(){_(),n("Seu pr\xF3ximo visual come\xE7a aqui.","GALERIA SHOP \xB7 FEITO DE CONQUISTAS",`<div class="shop-summary"><span class="shop-wallet">${r("coin")}<strong id="shop-balance"></strong><span>cr\xE9ditos</span></span><span><b id="shop-owned">0</b> acess\xF3rios na cole\xE7\xE3o</span><span class="shop-no-money">Conquistas do campus</span></div><div class="shop-layout"><section class="shop-preview-panel" aria-label="Experimentador de avatar"><div class="shop-preview" id="shop-preview"><div class="shop-preview-fallback"><img id="shop-preview-image" alt="" width="350" height="350"></div><span class="preview-label">PROVADOR \xB7 EXPERIMENTE</span></div><button class="preview-spin" id="shop-spin" aria-pressed="true">${r("globe")} Pausar giro</button><div class="shop-detail"><p class="eyebrow" id="shop-tag"></p><h3 id="shop-name"></h3><p id="shop-description"></p><div class="shop-unlock-track"><i id="shop-progress"></i></div><p class="shop-requirement" id="shop-requirement" role="status"></p><button id="shop-action" class="primary"></button><button id="shop-remove" class="secondary" hidden>Retirar acess\xF3rio</button><button id="shop-favorite" class="shop-favorite" aria-pressed="false"></button><div id="shop-goal" class="shop-goal" hidden><span id="shop-goal-text"></span><button id="shop-earn">Ir para a pr\xF3xima miss\xE3o \u2192</button></div></div></section><section class="shop-catalog" aria-label="Cat\xE1logo da loja"><div class="shop-catalog-heading"><div><span class="eyebrow">ESCOLHA. EXPERIMENTE. COMBINE.</span><h3>Uma cole\xE7\xE3o com a sua cara.</h3></div><span id="shop-count"></span></div><div class="shop-filters" aria-label="Categorias">${Object.entries(Ju).map(([C,v])=>`<button data-shop-filter="${C}" class="${u===C?"selected":""}" aria-pressed="${u===C}">${v}</button>`).join("")}</div><div id="shop-cards" class="shop-grid"></div><div class="shop-next">${r("spark")}<span id="shop-next"></span></div></section></div><p class="note" id="shop-credit-note"></p>`,"shop"),p=!0,y();let T=l.find(C=>C.id===c),S=m(T);d=rd(o("#shop-preview"),{...S,dark:document.documentElement.dataset.theme==="dark",low:i().quality==="low"}),d||(o("#shop-spin").hidden=!0,o("#shop-preview").classList.add("static-preview")),o("#shop-action").onclick=()=>{let C=l.find(M=>M.id===c),v=i();if(C.category==="looks"){let M=Qu(v,C.id);if(s(M.message),!M.ok)return}else if(C.category==="uniform"){if(li(v)<C.xp)return;v.skin=C.skin,s("Uniforme "+C.name+" equipado.")}else if(h(C)){if(!Xc(v,C.id))return;s(C.name+" equipado.")}else{let M=ju(v,C.id);if(s(M.message),!M.ok)return}t(),e(),y(),matchMedia("(prefers-reduced-motion: reduce)").matches||o("#shop-action").animate?.([{transform:"scale(.95)"},{transform:"scale(1)"}],{duration:220})},o("#shop-favorite").onclick=()=>{let C=i().shop.wishlist,v=C.indexOf(c);v<0?C.push(c):C.splice(v,1),e(),y()},o("#shop-earn").onclick=()=>a?.(),o("#shop-remove").onclick=()=>{let C=l.find(v=>v.id===c);i().shop.equipped[C.category]=null,t(),e(),y(),s("Acess\xF3rio guardado na sua cole\xE7\xE3o.")},o("#shop-spin").onclick=()=>{let C=d?.toggle();o("#shop-spin").setAttribute("aria-pressed",String(C)),o("#shop-spin").innerHTML=r("globe")+(C?" Pausar giro":" Girar avatar")}}return o("#panel-content").addEventListener("click",T=>{if(!p)return;let S=T.target.closest("button");if(S)if(S.dataset.shopFilter){u=S.dataset.shopFilter,o("#panel-content").querySelectorAll("[data-shop-filter]").forEach(v=>{v.classList.toggle("selected",v===S),v.setAttribute("aria-pressed",String(v===S))});let C=l.filter(v=>u==="all"||u==="owned"&&h(v)||u==="favorites"&&i().shop.wishlist.includes(v.id)||v.category===u);C.length&&!C.some(v=>v.id===c)&&(c=C[0].id),y()}else S.dataset.shopSelect&&f(S.dataset.shopSelect)}),{show:R,dispose:_}}var ui={distance:6.8,pitch:.32,focusHeight:1.72,desktopFov:65,mobileFov:70},xo=class{constructor(e,t=[]){this.camera=e,this.obstacles=t,this.yaw=0,this.pitch=ui.pitch,this.distance=ui.distance,this.actualDistance=ui.distance,this.target=new P,this.initialized=!1,this.ray=new Ii,this.ray.near=0,this.offset=new P,this.direction=new P,this.origin=new P,this.right=new P,this.up=new P,this.focus=new P,this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]]}rotate(e,t){this.yaw=Li.euclideanModulo(this.yaw-e*.006+Math.PI,Math.PI*2)-Math.PI,this.pitch=Li.clamp(this.pitch+t*.004,.16,1.08)}zoom(e){Number.isFinite(e)&&e>0&&(this.distance=Li.clamp(this.distance*e,4,15))}recenter(e=Math.PI){this.yaw=e-Math.PI,this.pitch=ui.pitch}movement(e,t){let n=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*n+t*s,z:-e*s+t*n}}update(e,t,{snap:n=!1,reducedMotion:s=!1}={}){this.focus.copy(e),this.focus.y+=ui.focusHeight,n||!this.initialized||s?this.target.copy(this.focus):this.target.lerp(this.focus,1-Math.exp(-14*t)),this.initialized=!0;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.sin(this.pitch),l=Math.cos(this.pitch);this.direction.set(r*l,o,a*l),this.right.set(a,0,-r),this.up.set(-r*o,l,-a*o);let c=this.distance;for(let[u,d]of this.sampleOffsets){this.origin.copy(this.target).addScaledVector(this.right,u).addScaledVector(this.up,d),this.ray.set(this.origin,this.direction),this.ray.far=this.distance+.35;let p=this.ray.intersectObjects(this.obstacles,!1)[0];p&&(c=Math.min(c,Math.max(.6,p.distance-.4)))}n||c<this.actualDistance||s?this.actualDistance=c:this.actualDistance=Li.lerp(this.actualDistance,c,1-Math.exp(-5*t)),this.offset.copy(this.direction).multiplyScalar(this.actualDistance),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}};function od(i,e,{onTap:t=()=>{},blocked:n=()=>!1}={}){let s=new Map,r=0,a=()=>{let[h,g]=[...s.values()];return h&&g?Math.hypot(h.x-g.x,h.y-g.y):0},o=h=>{n()||h.button===1||(h.preventDefault(),s.set(h.pointerId,{x:h.clientX,y:h.clientY,startX:h.clientX,startY:h.clientY,button:h.button,moved:!1}),i.setPointerCapture?.(h.pointerId),s.size>1&&(s.forEach(g=>g.moved=!0),r=a()))},l=h=>{let g=s.get(h.pointerId);if(!g||n())return;h.preventDefault();let _=h.clientX-g.x,m=h.clientY-g.y;if(g.x=h.clientX,g.y=h.clientY,s.size>1){let f=a();r>0&&f>0&&e.zoom(r/f),r=f;return}!g.moved&&Math.hypot(g.x-g.startX,g.y-g.startY)>5?(g.moved=!0,e.rotate(g.x-g.startX,g.y-g.startY)):g.moved&&e.rotate(_,m)},c=h=>{let g=s.get(h.pointerId);if(!g)return;s.delete(h.pointerId),r=0;let _=g.moved||Math.hypot(h.clientX-g.startX,h.clientY-g.startY)>5;h.type==="pointerup"&&!_&&g.button===0&&!n()&&t(h.clientX,h.clientY),i.hasPointerCapture?.(h.pointerId)&&i.releasePointerCapture(h.pointerId)},u=h=>{n()||(h.preventDefault(),e.zoom(Math.exp(Li.clamp(h.deltaY,-200,200)*.0015)))},d=h=>h.preventDefault(),p=()=>{s.clear(),r=0};i.addEventListener("pointerdown",o),i.addEventListener("pointermove",l);for(let h of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(h,c);return i.addEventListener("wheel",u,{passive:!1}),i.addEventListener("contextmenu",d),{cancel:p}}var gr={bodyRadius:.5,deskTop:1.665,wallTop:3.76,walkSpeed:5.3};function cd(i,e,t){if(t.some(s=>Math.abs(i-s.x)<=3.6&&Math.abs(e-s.z)<=2.85))return .39;let n=Math.hypot(i,e-1.2);return n<=1.25?.39:n<=3.1?.315:n<=4.1?.28:Math.abs(i)<=2.15&&e>=-13.7&&e<=13.3||Math.abs(i)<=14.5&&Math.abs(e)<=1.9?.195:Math.abs(i)<=10.5&&Math.abs(e-7.1)<=1.65?.19:.13}var ge=i=>document.querySelector(i),Pt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),St=i=>String(i).padStart(2,"0"),ld={shop:"M3 9h18l-2-6H5z M4 9v12h16V9 M9 21v-7h6v7 M3 9c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0",coin:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9 M12 6v2 M12 16v2",moon:"M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5l1.5-1.5",monitor:"M3 4h18v13H3z M8 21h8 M12 17v4",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18",flag:"M5 21V3 M5 4c5-4 9 4 14 0v10c-5 4-9-4-14 0",book:"M3 4c3-1 6 0 9 2 3-2 6-3 9-2v15c-3-1-6 0-9 2-3-2-6-3-9-2z M12 6v15",user:"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",spark:"m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7z",library:"M4 4h4v16H4z M11 4h3v16h-3z m6 1 3-1 3 15-3 1z",pin:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0 M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",map:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16",home:"m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9",close:"m6 6 12 12 M6 18 18 6",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2 M12 17h.01",settings:"m9 3-.5 3-2 1-2.5-1-2 3 2 2v2l-2 2 2 3 2.5-1 2 1 .5 3h6l.5-3 2-1 2.5 1 2-3-2-2v-2l2-2-2-3-2.5 1-2-1L15 3z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",bolt:"m13 2-9 12h7l-1 8 10-13h-7z",cpu:"M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3",layers:"m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",tool:"m14 6-3 3 4 4 3-3c4 7-3 10-7 6l-6 6-3-3 6-6C4 5 9 0 14 6",hand:"M8 12V5a2 2 0 0 1 4 0v7 M12 9a2 2 0 0 1 4 0v3 M16 10a2 2 0 0 1 4 0v5c0 4-3 6-6 6h-2c-3 0-4-2-5-4l-3-5c-1-2 1-3 3-1l3 3",check:"m5 12 4 4L20 5"},Pn=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ld[i]||ld.monitor}"/></svg>`;function dd(){document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=Pn(i.dataset.icon))}var Wt=ed.map((i,e)=>({...i,short:["Conex\xF5es essenciais","Ajustes & desempenho","Sistema & dados","Dentro do gabinete","Detetives de hardware"][e],icon:["bolt","settings","layers","cpu","tool"][e],color:["#8baf58","#c99a59","#739eaa","#9c87b1","#cf8e79"][e],soft:["#eaf0db","#f4e9d7","#e3edf0","#ece7f2","#f7e7df"][e],x:[-9,0,9,-6,6][e],z:[-5,-9,-5,6,6][e]})),Le=Zc(),As=!0;try{let i=localStorage.getItem(Yc);i&&(Le=Jc(JSON.parse(i)))}catch{As=!1}var ki=null,un=0,Xn="",_r=!1,el="",hd=null,ud,xt=null,en=null,It=null,yo=null,Vi=null,vr=Zu({icon:Pn,onChange:i=>xt?.setTheme(i)}),Ts=i=>Le.records[i.id]||=td(),yr=()=>lt.filter(i=>Le.records[i.id]?.stage===6);function dn(i){ge("#toast").textContent=i,ge("#toast").hidden=!1,clearTimeout(ud),ud=setTimeout(()=>ge("#toast").hidden=!0,5e3)}function bn(){try{localStorage.setItem(Yc,JSON.stringify(Le)),As=!0}catch{As=!1}fd()}function fd(){let i=In(Le),e=i>=1e3?3:i>=500?2:i>=200?1:0;ge("#xp").textContent=`${i} XP`,ge("#rank").textContent=["T\xE9cnico iniciante","Explorador t\xE9cnico","Solucionador","Especialista do campus"][e],ge("#rank-number").textContent=St(e+1);let t=[0,200,500,1e3][e],n=[200,500,1e3,5e3][e];ge("#next-xp").textContent=i>=5e3?"campus restaurado":`pr\xF3ximo marco: ${n} XP`,ge("#xp-bar").style.width=`${Math.min(100,(i-t)/(n-t)*100)}%`;let s=lt.find(r=>Le.records[r.id]&&Le.records[r.id].stage<6)||lt.find(r=>Le.records[r.id]?.stage!==6);ge("#quest-title").textContent=s?i?"A pr\xF3xima descoberta":"Seu primeiro diagn\xF3stico":"Campus restaurado!",ge("#quest-desc").textContent=s?`OS ${St(s.id)} \xB7 ${s.title}`:"Voc\xEA concluiu os 50 chamados. Explore seu percurso.",ge("#save-state").innerHTML=`<span class="live-dot"></span>${As?" Progresso salvo neste dispositivo":" Sem salvamento: exporte seu percurso"}`,ge("#save-state").classList.toggle("storage-warning",!As),ge("#station-strip").innerHTML=Wt.map(r=>{let a=yr().filter(o=>o.level===r.id).length;return`<button class="station-card" data-travel="${r.id}" style="--accent:${r.color};--soft:${r.soft}"><div class="station-card-top"><span>${Pn(r.icon)}</span><span>ESTA\xC7\xC3O ${St(r.id)} \u2197</span></div><h4>${r.short}</h4><p>${a} de 10 miss\xF5es resolvidas</p><div class="station-mini-track"><i style="width:${a*10}%"></i></div></button>`}).join(""),xt&&xt.refresh()}function Sn(i,e,t,n){el==="shop"&&Vi?.dispose(),ge("#panel").classList.toggle("shop-dialog",n==="shop"),ge("#panel").open||(hd=document.activeElement),el=n,ge("#panel-title").textContent=i,ge("#panel-kicker").textContent=e,ge("#panel-content").innerHTML=t,dd(),ge("#panel").open||ge("#panel").showModal()}function di(){ge("#panel").open&&ge("#panel").close()}ge("#panel").addEventListener("close",()=>{ki=null,Xn="",_r=!1,hd?.focus({preventScroll:!0})});ge("#close-panel").onclick=di;ge("#panel").addEventListener("click",i=>{if(i.target===ge("#panel")){let e=ge("#panel").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&di()}});function tl(){Sn("Sua pr\xF3xima habilidade come\xE7a aqui.","BOAS-VINDAS AO CAMPUS AMC",`<div class="intro-art" aria-hidden="true"><span>\u{1F333}</span><span>\u{1F9D1}\u{1F3FD}\u200D\u{1F527}</span><span>\u{1F5A5}\uFE0F</span></div><p class="dialog-copy">Voc\xEA \xE9 a nova pessoa da equipe t\xE9cnica! O laborat\xF3rio precisa de ajuda. Explore <strong>5 esta\xE7\xF5es e 50 chamados reais de aprendizagem</strong>, investigue as pistas e traga os computadores de volta \xE0 vida.</p><div class="instruction-grid"><div class="instruction"><strong>01 \xB7 Explore</strong><p>Use WASD ou setas para andar na dire\xE7\xE3o da c\xE2mera. Arraste o cen\xE1rio para olhar ao redor; use a roda do mouse ou uma pin\xE7a com dois dedos para zoom. No celular, use o controle para andar.</p></div><div class="instruction"><strong>02 \xB7 Investigue</strong><p>Aproxime-se da bancada e pressione E ou toque na m\xE3o. Teste uma hip\xF3tese por vez.</p></div><div class="instruction"><strong>03 \xB7 Conquiste</strong><p>Ganhe 100 XP por miss\xE3o resolvida e desbloqueie cores para o avatar. Errar faz parte!</p></div></div><p class="note">O progresso fica neste navegador. Voc\xEA pode export\xE1-lo em Meu percurso para continuar em outro dispositivo. Esta experi\xEAncia \xE9 individual, sem cron\xF4metro.</p><div class="actions"><button class="primary" data-start>Entrar no campus ${Pn("globe")}</button><button class="secondary" data-list="0">Conhecer as miss\xF5es</button></div>`,"help")}function Cs(i=un){un=Number(i);let e=lt.filter(t=>!un||t.level===un);Sn(un?Wt[un-1].name:"Cada problema, uma descoberta.",`${un?"ESTA\xC7\xC3O "+St(un):"CENTRAL DE MISS\xD5ES"} \xB7 ${e.length} CHAMADOS`,`${un?`<p class="dialog-copy">${Pt(Wt[un-1].desc)} Selecione um chamado para assumir a bancada.</p>`:""}<div class="station-filters">${[0,1,2,3,4,5].map(t=>`<button data-list="${t}" class="${t===un?"selected":""}" aria-pressed="${t===un}">${t?"Esta\xE7\xE3o "+St(t):"Todas"}</button>`).join("")}</div><div class="mission-list">${e.map(t=>{let n=Le.records[t.id];return`<button class="mission-row" data-case="${t.id}"><span class="mission-num">${St(t.id)}</span><div><strong>${Pt(t.title)}</strong><small>${Pt(t.category)} \xB7 Esta\xE7\xE3o ${St(t.level)} \xB7 ${n?.stage===6?"100 XP conquistados":n?Ss[n.stage]:"100 XP dispon\xEDveis"}</small></div><span class="status">${n?.stage===6?"\u2713":n?"Retomar \u2197":"Jogar \u2197"}</span></button>`}).join("")}</div>`,"missions")}function nl(){Sn("Para onde vamos?","MAPA DO CAMPUS",`<p class="dialog-copy">Escolha uma esta\xE7\xE3o. Seu avatar vai at\xE9 a bancada e abre os chamados daquele espa\xE7o. Todas as esta\xE7\xF5es est\xE3o dispon\xEDveis.</p><div class="map-list">${Wt.map(i=>`<button class="map-row" data-travel="${i.id}" style="--accent:${i.color};--soft:${i.soft}"><span>${St(i.id)}</span><div><strong>${i.name}</strong><small>${i.desc} \xB7 ${yr().filter(e=>e.level===i.id).length}/10</small></div><b>\u2197</b></button>`).join("")}<button class="map-row" data-shop-travel><span>\u2726</span><div><strong>Galeria Shop</strong><small>Experimente acess\xF3rios e troque seus cr\xE9ditos por novos visuais.</small></div><b>\u2197</b></button><button class="map-row" data-mentor><span>\u2726</span><div><strong>Pra\xE7a central \xB7 Mentora Lia</strong><small>Aprenda o m\xE9todo de diagn\xF3stico.</small></div><b>\u2197</b></button></div>`,"map")}function Mo(i){let e=lt.find(t=>t.id===Number(i));e&&(yo=e.id,ki=e.id,Xn="",_r=!1,en=null,xt?.teleport(Wt[e.level-1]),Ts(e),bn(),ws())}var tv=(i,e)=>i.map((t,n)=>({text:t,i:n,key:Math.sin((n+1)*97+e*31)})).sort((t,n)=>t.key-n.key);function ws(){let i=lt.find(r=>r.id===ki);if(!i)return;let e=Ts(i),t=zi(i),n=i.steps[t];if(e.stage===6){Sn("Mais um problema resolvido.","ORDEM DE SERVI\xC7O "+St(i.id)+" \xB7 MISS\xC3O CONCLU\xCDDA",`<div class="reward"><div class="reward-symbol" aria-hidden="true">\u{1F3C6}</div><span class="xp-reward">100 XP conquistados</span><h3>O laborat\xF3rio conta com voc\xEA.</h3><p>${Pt(i.title)}<br>Voc\xEA investigou, corrigiu e validou o resultado na simula\xE7\xE3o.</p><div class="summary-list"><p><strong>Evid\xEAncia e causa</strong>${Pt(n[0])}</p><p><strong>Corre\xE7\xE3o indicada</strong>${Pt(n[2])}</p><p><strong>Valida\xE7\xE3o</strong>${Pt(i.confirm)}</p></div><p>Revis\xF5es feitas: ${e.errors}. Cada nova tentativa tamb\xE9m \xE9 aprendizagem.</p><div class="actions"><button class="primary" data-next="${i.id}">Pr\xF3xima miss\xE3o \u2192</button><button class="secondary" data-explore>Voltar ao campus</button></div></div>`,"mission");return}let s="";if(e.stage===1)s=`<h3 class="stage-heading">A bancada \xE9 sua. Vamos investigar?</h3><p class="stage-desc">Execute os testes e compare os resultados simulados. A ordem \xE9 sua; mude uma vari\xE1vel por vez.</p><div class="choices">${i.steps.map((r,a)=>`<div><button class="test-card" data-test="${a}"><span class="letter">${e.tested.includes(a)?"\u2713":St(a+1)}</span><span>${Pt(r[1])}</span></button>${e.tested.includes(a)?`<div class="test-result"><strong>${a===t?"EVID\xCANCIA ENCONTRADA":"HIP\xD3TESE DESCARTADA"}</strong>${Pt(a===t?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${r[0]}.`:"Resultado esperado nesta verifica\xE7\xE3o; essa hip\xF3tese n\xE3o explica a falha simulada. Investigue outra vari\xE1vel.")}</div>`:""}</div>`).join("")}</div><div class="actions"><button class="primary" data-investigation-next>Formular diagn\xF3stico \u2192</button></div>`;else{let r=["Antes de tocar, prepare o atendimento.","","Qual causa \xE9 sustentada pela evid\xEAncia?","Qual a\xE7\xE3o resolve a causa investigada?","O reparo funcionou? Demonstre.","Deixe uma boa passagem de servi\xE7o."],a=["Escolha o protocolo para uma interven\xE7\xE3o segura.","","Use o resultado dos testes. Sintomas parecidos podem ter causas diferentes.",`Causa identificada: ${n[0]}`,"Selecione o resultado que precisa ser verificado para encerrar o chamado.","Sua equipe precisa entender o que foi feito e os limites dessa conclus\xE3o."];s=`<h3 class="stage-heading">${r[e.stage]}</h3><p class="stage-desc">${Pt(a[e.stage])}</p>${e.stage>=2?`<div class="test-result"><strong>EVID\xCANCIA DA INVESTIGA\xC7\xC3O</strong>${Pt(n[0])}</div>`:""}<div class="choices">${tv(Kc(i,e.stage),i.id+e.stage).map((o,l)=>`<button class="choice" data-choice="${o.i}"><span class="letter">${String.fromCharCode(65+l)}</span><span>${Pt(o.text)}</span></button>`).join("")}</div>`}Sn(i.title,`OS ${St(i.id)} \xB7 ESTA\xC7\xC3O ${St(i.level)} \xB7 ${i.category}`,`<div class="mission-meta"><span>ETAPA ${e.stage+1} DE 6 \xB7 ${Ss[e.stage].toUpperCase()}</span><span>100 XP ao concluir \xB7 tentativas livres</span></div><div class="stage-track" aria-label="Etapa ${e.stage+1} de 6">${Ss.map((r,a)=>`<span class="${a<e.stage?"done":a===e.stage?"current":""}" title="${r}"></span>`).join("")}</div><p class="scenario">${Pt(i.symptom)}</p>${Xn?`<div class="feedback" role="status">${Pt(Xn)}</div>`:""}${s}${_r?`<div class="note"><strong>Mentora Lia:</strong> ${Pt(e.stage<2?"Comece pelas verifica\xE7\xF5es simples. O teste "+St(t+1)+" pode revelar uma pista decisiva.":e.stage===2?"Compare sua hip\xF3tese com esta condi\xE7\xE3o observada: "+n[0]:e.stage===3?"A a\xE7\xE3o deve corrigir exatamente a causa observada: "+n[0]:e.stage===4?"Compare com o crit\xE9rio de confirma\xE7\xE3o: "+i.confirm:"Outra equipe deve conseguir seguir o seu racioc\xEDnio.")}</div>`:""}<div class="mission-tools"><button data-hint>\u2726 Pedir uma pista \xE0 Lia</button><span>Etapas salvas automaticamente</span></div>${i.note?`<p class="note">Cuidado do caso: ${Pt(i.note)}</p>`:""}`,"mission")}function nv(i){let e=lt.find(r=>r.id===ki);if(!e)return;let t=Ts(e),n=t.stage,s=In(Le);if(!nd(e,t,Number(i))){Xn=["Antes de agir, preserve os dados e garanta a supervis\xE3o. Abrir fonte ou trocar pe\xE7as sem isolar a causa n\xE3o ajuda o diagn\xF3stico.","","Releia a evid\xEAncia do teste. Procure a causa que corresponde \xE0 condi\xE7\xE3o observada.","A corre\xE7\xE3o precisa responder \xE0 causa isolada, sem alterar v\xE1rias vari\xE1veis por tentativa.","Uma troca de pe\xE7a n\xE3o comprova o reparo. Repita a tarefa e confira o resultado esperado.","Registre o caminho completo: sintoma, teste, causa, corre\xE7\xE3o e valida\xE7\xE3o."][n],bn(),ws();return}Xn="",bn(),t.stage===4&&dn("Corre\xE7\xE3o aplicada. Agora valide o funcionamento!"),t.stage===6&&(xt?.celebrate(),dn("Miss\xE3o conclu\xEDda! +100 XP e +40 cr\xE9ditos para a Galeria Shop."),Mn.some(r=>r.xp>s&&r.xp<=In(Le))&&setTimeout(()=>dn("Nova cor de uniforme dispon\xEDvel em Meu avatar!"),1800)),ws(),ge("#panel").scrollTop=0}function il(){Sn("Observe antes de trocar.","MENTORA LIA \xB7 PRA\xC7A CENTRAL",`<p class="dialog-copy">\u201CUma pe\xE7a nova n\xE3o \xE9 um diagn\xF3stico. <strong>O melhor t\xE9cnico sabe transformar uma observa\xE7\xE3o em uma decis\xE3o.</strong> Eu vou ajudar voc\xEA a fazer isso.\u201D</p><div class="instruction-grid"><div class="instruction"><strong>1 \xB7 Uma vari\xE1vel</strong><p>Verifique uma hip\xF3tese de cada vez. Compare com algo que funciona.</p></div><div class="instruction"><strong>2 \xB7 Uma evid\xEAncia</strong><p>N\xE3o conclua s\xF3 pelo sintoma. Execute o teste e leia o resultado.</p></div><div class="instruction"><strong>3 \xB7 Uma valida\xE7\xE3o</strong><p>Repita a tarefa depois de corrigir. Registre o que demonstrou.</p></div></div><p class="note">${$c}</p><p class="dialog-copy">Os resultados s\xE3o did\xE1ticos, com uma causa designada por cen\xE1rio. A atividade n\xE3o faz diagn\xF3stico de computadores reais. XP indica seu percurso, e a avalia\xE7\xE3o final continua com o professor.</p><div class="actions"><button class="primary" data-list="1">Assumir meu primeiro chamado \u2192</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina e guia docente \u2197</a></div>`,"mentor")}function xr(){let i=yr();Sn("Conhecimento que voc\xEA construiu.","MEU PERCURSO",`<div class="stats"><div class="stat"><strong>${In(Le)}</strong><span>XP de aprendizagem</span></div><div class="stat"><strong>${i.length}/50</strong><span>miss\xF5es conclu\xEDdas</span></div><div class="stat"><strong>${Object.values(Le.records).filter(e=>e.stage<6).length}</strong><span>em investiga\xE7\xE3o</span></div></div><p class="dialog-copy">Seu registro \xE9 local e individual. Exporte para guardar uma c\xF3pia ou continuar em outro navegador. A importa\xE7\xE3o substitui este percurso ap\xF3s sua confirma\xE7\xE3o.</p><div class="actions"><button class="primary" data-export>Exportar progresso</button><button class="secondary" data-import>Importar progresso</button><button class="secondary" data-report>Baixar relat\xF3rio</button></div><p class="note">${As?"Salvamento ativo neste navegador.":"O armazenamento n\xE3o est\xE1 dispon\xEDvel. Exporte seu progresso antes de fechar a p\xE1gina."} XP n\xE3o \xE9 nota nem certifica\xE7\xE3o de pr\xE1tica profissional.</p><div class="mission-list">${lt.filter(e=>Le.records[e.id]).map(e=>`<button class="mission-row" data-case="${e.id}"><span class="mission-num">${Le.records[e.id].stage===6?"\u2713":St(e.id)}</span><div><strong>${Pt(e.title)}</strong><small>${Le.records[e.id].stage===6?"Conclu\xEDdo na simula\xE7\xE3o":Ss[Le.records[e.id].stage]} \xB7 ${Le.records[e.id].errors} revis\xF5es</small></div><span>\u2197</span></button>`).join("")||'<p class="dialog-copy">Seu percurso come\xE7a com uma descoberta. Assuma seu primeiro chamado!</p>'}</div>`,"journal")}function sl(){let i=In(Le);Sn("Seu jeito de explorar.","MEU AVATAR",`<p class="dialog-copy">Cada problema resolvido abre novas possibilidades. Escolha a cor do uniforme do seu avatar.</p><button class="shop-wardrobe-link secondary" data-open-shop>\u2726 Explorar a Galeria Shop \u2192</button><div class="wardrobe">${Mn.map((e,t)=>`<button class="swatch ${Le.skin===t?"chosen":""}" data-skin="${t}" ${i<e.xp?"disabled":""} aria-label="${e.name}, ${e.xp} XP necess\xE1rios" aria-pressed="${Le.skin===t}"><i style="background:${e.color}"></i><span>${i<e.xp?e.xp+" XP":e.name}</span></button>`).join("")}</div><p class="note">Voc\xEA tem ${i} XP. As cores s\xE3o recompensas visuais; todas as miss\xF5es est\xE3o dispon\xEDveis desde o in\xEDcio.</p><div class="actions"><button class="primary" data-explore>Voltar ao campus \u2192</button></div>`,"avatar")}function iv(){Sn("Do seu jeito, no seu ritmo.","CONFIGURA\xC7\xD5ES",`<div class="settings-row"><div>Apar\xEAncia<small>Escolha como o campus aparece para voc\xEA.</small></div><select id="theme-choice"><option value="system" ${vr.choice==="system"?"selected":""}>Sistema</option><option value="light" ${vr.choice==="light"?"selected":""}>Claro</option><option value="dark" ${vr.choice==="dark"?"selected":""}>Escuro</option></select></div><div class="settings-row"><div>Qualidade gr\xE1fica<small>Use o modo leve para poupar recursos no celular.</small></div><select id="quality"><option value="auto" ${Le.quality==="auto"?"selected":""}>Autom\xE1tica</option><option value="low" ${Le.quality==="low"?"selected":""}>Leve</option></select></div><p class="dialog-copy">Voc\xEA tamb\xE9m pode acessar todas as miss\xF5es pelos bot\xF5es, sem navegar pelo ambiente 3D. O jogo respeita a prefer\xEAncia do sistema por redu\xE7\xE3o de movimento.</p><div class="actions"><button class="secondary" data-list="0">Acessar miss\xF5es</button><button class="secondary" data-help>Como jogar</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina com recursos de acessibilidade \u2197</a></div>`,"settings")}function pd(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function sv(){pd(JSON.stringify({...Le,format:"amc-mundo"},null,2),"operacao-bancada-progresso.json","application/json"),dn("Seu arquivo de progresso foi preparado.")}function rv(){let i=["# Opera\xE7\xE3o Bancada \xB7 Meu percurso",`${yr().length}/50 miss\xF5es conclu\xEDdas na simula\xE7\xE3o. ${In(Le)} XP.`,"XP n\xE3o \xE9 nota. A execu\xE7\xE3o real exige observa\xE7\xE3o docente."];for(let e of lt){let t=Le.records[e.id];if(t&&(i.push(`
## OS ${St(e.id)} \xB7 ${e.title}`,`Situa\xE7\xE3o: ${t.stage===6?"conclu\xEDdo na simula\xE7\xE3o":Ss[t.stage]}. Revis\xF5es: ${t.errors}.`),t.stage===6)){let n=e.steps[zi(e)];i.push("Sintoma: "+e.symptom,"Teste: "+n[1],"Causa: "+n[0],"Corre\xE7\xE3o: "+n[2],"Valida\xE7\xE3o: "+e.confirm)}}pd(i.join(`

`),"operacao-bancada-percurso.md","text/markdown")}ge("#import-file").addEventListener("change",async i=>{let e=i.target.files[0];if(e){try{if(e.size>1e6)throw Error("Arquivo muito grande.");let t=JSON.parse(await e.text());if(t.format!=="amc-mundo")throw Error("Use um arquivo exportado por este jogo.");let n=Jc(t);Sn("Restaurar este percurso?","IMPORTAR PROGRESSO",`<p class="dialog-copy">O arquivo cont\xE9m <strong>${Object.values(n.records).filter(s=>s.stage===6).length} miss\xF5es conclu\xEDdas</strong> e ${In(n)} XP. Ele substituir\xE1 o progresso atual deste navegador.</p><div class="actions"><button class="primary" id="confirm-import">Restaurar progresso</button><button class="secondary" data-journal>Cancelar</button></div>`,"import"),ge("#confirm-import").onclick=()=>{Le=n,xt?.setSkin(),xt?.setEquipment(),bn(),xr(),dn("Percurso restaurado.")}}catch(t){dn("N\xE3o foi poss\xEDvel importar: "+t.message)}i.target.value=""}});function av(){let i=ge("#world"),e=new bi;e.background=new Ge("#cae7f2"),e.fog=new $s("#cae7f2",48,95);let t=new Rt(60,1,.1,140),n=new Ms({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(devicePixelRatio,Le.quality==="low"?1:1.7)),n.shadowMap.enabled=Le.quality!=="low",n.shadowMap.type=va,n.outputColorSpace=Ct,n.toneMapping=hs,n.toneMappingExposure=1.05,n.setClearColor("#cae7f2"),i.appendChild(n.domElement);let s=new yt;e.add(s);let r=new Ci("#ffffed","#8a9b78",2.3);e.add(r);let a=new Ri("#fff6db",3.2);a.position.set(-15,27,16),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-27,a.shadow.camera.right=27,a.shadow.camera.top=27,a.shadow.camera.bottom=-27,a.shadow.camera.far=75,a.shadow.normalBias=.04,a.shadow.bias=-2e-4,e.add(a);let o=new Map,l=new Map,c=(D,N={})=>{let H=D+JSON.stringify(N);return o.has(H)||o.set(H,new jt({color:D,roughness:.58,metalness:.02,...N})),o.get(H)};function u(D,N,H,j,V,J,de,ue=s){let te=[D,N,H].join(",");l.has(te)||l.set(te,new Kt(D,N,H));let Me=new tt(l.get(te),c(j));return Me.position.set(V,J,de),Me.castShadow=!0,Me.receiveShadow=!0,ue.add(Me),Me}function d(D,N,H,j,V,J,de,ue=12,te=s){let Me=new tt(new Gt(D,N,H,ue),c(j));return Me.position.set(V,J,de),Me.castShadow=!0,Me.receiveShadow=!0,te.add(Me),Me}function p(D,N,H,j,V,J=s){let de=new tt(new tr(D,0),c(N));return de.position.set(H,j,V),de.castShadow=!0,de.receiveShadow=!0,J.add(de),de}function h(D,N,H,j,V=4,J="#3e5b41",de=s){let ue=document.createElement("canvas");ue.width=640,ue.height=144;let te=ue.getContext("2d");te.fillStyle="#fafbe9",te.fillRect(0,0,640,144),te.fillStyle=J,te.font="bold 52px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText(D,320,75,600);let Me=new Zs(ue);Me.colorSpace=Ct;let U=new tt(new Ti(V,V*144/640),new Vn({map:Me,side:on}));return U.position.set(N,H,j),de.add(U),U}u(36,1.4,31,"#789858",0,-1.1,0),u(36.4,.5,31.4,"#bdcca0",0,-.25,0),u(35.8,.18,30.8,"#9bc681",0,.04,0),u(4.3,.05,27,"#d7ded5",0,.16,-.2),u(29,.05,3.8,"#d7ded5",0,.17,0),u(21,.04,3.3,"#d7ded5",0,.17,7.1),d(4.1,4.1,.12,"#ebe5ce",0,.22,1.2,32),d(3.1,3.1,.03,"#d8dcb7",0,.3,1.2,32);let g=d(1.25,1.25,.04,"#eaf0da",0,.33,1.2,6);g.rotation.y=Math.PI/6,u(1.15,.06,.16,"#859a65",0,.37,1.2),u(.16,.06,1.15,"#859a65",0,.37,1.2);for(let D=-12;D<14;D+=1.4)u(.06,.02,.3,"#bfc6a9",1.72,.2,D);let _=[],m=[],f=[],w=[],E=[];function y(D,N,H,j){_.push({x:D,z:N,w:H/2+gr.bodyRadius,d:j/2+gr.bodyRadius})}function R(D,N,H,j){u(1.55,.12,.8,"#dee2d5",D,1.58,N,j),u(.12,.4,.12,"#5e6f65",D,1.8,N+.12,j),u(.58,.06,.32,"#728276",D,1.65,N+.1,j),u(1.35,.85,.12,"#52685b",D,2.2,N,j);let V=u(1.2,.67,.025,H,D,2.2,N+.075,j);u(.55,.04,.012,"#cce5d4",-.18,.11,.02,V),u(.75,.025,.012,"#b4cdbc",-.08,-.015,.02,V),u(.45,.025,.012,"#b4cdbc",-.23,-.1,.02,V),u(.07,.07,.014,"#e7c171",.44,.2,.022,V),u(1.02,.04,.32,"#f1f0df",D,1.7,N+.55,j);for(let J=0;J<3;J++)u(.8,.012,.018,"#b7c2aa",D,1.728,N+.47+J*.09,j);return u(.18,.06,.23,"#d4ddc8",D+.75,1.71,N+.5,j),u(.55,.92,.72,"#f0efde",D+1.15,1.98,N+.14,j),u(.42,.74,.03,"#d5ddc8",D+1.15,1.98,N+.52,j),u(.04,.04,.03,"#a9d871",D+1.15,2.23,N+.55,j),V}Wt.forEach((D,N)=>{let H=new yt;H.position.set(D.x,0,D.z),s.add(H),m.push(H),u(7.2,.22,5.7,"#e8eadb",0,.28,0,H),u(7.35,.12,5.85,D.color,0,.16,0,H),u(7.2,3.15,.2,"#e8eddf",0,1.965,-2.7,H),u(7.4,.28,.4,D.color,0,3.62,-2.72,H),u(.18,1.95,3.4,"#e0e8d6",-3.5,1.365,-1.2,H),u(.18,1.95,3.4,"#e0e8d6",3.5,1.365,-1.2,H),y(D.x,D.z-2.7,7.2,.25),y(D.x-3.5,D.z-1.2,.2,3.4),y(D.x+3.5,D.z-1.2,.2,3.4),u(6.6,.2,1.65,"#b5a17c",0,1.48,-.85,H),u(6.7,.11,1.7,"#d3c5a4",0,1.61,-.85,H),[-2.7,2.7].forEach(te=>{u(.2,1.1,.2,"#8b9980",te,.85,-1.35,H),u(.2,1.1,.2,"#8b9980",te,.85,-.4,H)}),y(D.x,D.z-.85,6.6,1.65);let j=R(-1.7,-.95,"#a9be9d",H),V=R(1.35,-.95,"#a9be9d",H);f.push([j,V]),u(1.12,.16,1,"#779675",-2.1,.94,.9,H),u(1.12,.9,.14,"#88a582",-2.1,1.47,1.34,H),d(.085,.085,.46,"#526b5d",-2.1,.64,.9,8,H),u(.92,.08,.82,"#687c6e",-2.1,.44,.9,H),y(D.x-2.1,D.z+.95,1.12,1.14),h(St(N+1)+"  /  "+["CONEX\xD5ES","CONFIGURA\xC7\xD5ES","SISTEMA & DADOS","HARDWARE","DIAGN\xD3STICO"][N],0,3.12,-2.56,5.5,D.color,H),u(.9,1.9,.55,"#a7b593",-2.85,1.25,-1.9,H);for(let te=0;te<3;te++)u(.85,.08,.55,"#e8e8d3",-2.85,.65+te*.55,-1.88,H),u(.25,.3,.32,[D.color,"#c5bf9c","#c8d4b6"][te],-2.85,.84+te*.55,-1.85,H);let J=new yt;J.position.set(0,4.35,-1),H.add(J);let de=u(.46,.46,.46,D.color,0,0,0,J);de.rotation.z=Math.PI/4,de.rotation.x=Math.PI/4,w.push(J);let ue=u(7,.02,5.5,D.color,0,.43,0,H);ue.visible=!1,E.push({type:"station",id:D.id,group:H,hit:ue})});function T(D,N,H=1){let j=new yt;j.position.set(D,0,N),j.scale.setScalar(H),s.add(j),d(.18,.26,2.7,"#a4946e",0,1.4,0,7,j),p(1.35,"#9cb57b",0,3.15,0,j),p(1.05,"#aec68a",-.65,3.45,.1,j),p(.95,"#b8ce92",.5,4,.1,j),y(D,N,.7,.7)}[[-15,-11,1],[-12,-12,.75],[14,-11,1.1],[16,-7,.8],[-16,0,.9],[16,2,1],[-14,9,.95],[-11,12,.7],[13,11,.9],[16,10,.65],[-3,-13,.6],[5,-13,.7]].forEach(D=>T(...D));function S(D,N){d(.8,.9,.4,"#c0c4a3",D,.35,N,8),p(.7,"#9eb47c",D,.8,N),p(.45,"#acc487",D+.45,.75,N+.12)}[[-14,-3],[14,-3],[-11,3],[11,3],[-3,12],[3,12],[-5,-11],[5,-11]].forEach(D=>S(...D));function C(D,N){d(.09,.12,3.6,"#8b9c7d",D,1.9,N,6),u(.55,.45,.55,"#f5f1cd",D,3.7,N),u(.65,.12,.65,"#8e9c7d",D,3.99,N)}[[-4,1],[4,1],[-13,-7],[13,-7],[-11,8],[11,8]].forEach(D=>C(...D));function v(D,N){u(3.3,.14,.65,"#bca17a",D,.8,N),u(3.3,.65,.1,"#c8ae83",D,1.25,N-.3),[-.85,.85].forEach(H=>u(.12,.6,.4,"#7f9172",D+H,.43,N)),y(D,N,3.3,.7)}v(-5,2),v(5,2),v(-12,4),v(12,4),u(.3,3.7,.3,"#738a61",-2,1.98,13.5),u(.3,3.7,.3,"#738a61",2,1.98,13.5),u(4.8,.8,.24,"#f2f0d7",0,3.6,13.5),h("CAMPUS AMC",0,3.62,13.65,4.4,"#587348");for(let D=0;D<22;D++){let N=Math.sin(D*13.1)*16,H=Math.cos(D*6.3)*13;if(!(Math.abs(N)<3||Math.abs(H)<2))for(let j=0;j<3;j++)d(.07,.1,.3,"#9cb478",N+j*.15,.28,H+j*.13,4)}let M=[],L=u(3.4,3.1,.18,"#345f50",-12,1.7,6.1);L.userData.shop=!0,M.push(L),u(3.65,.24,.45,"#bce975",-12,3.32,6.1);let B=u(3.2,1.2,1,"#477662",-12,.82,7.3);B.userData.shop=!0,M.push(B),u(3.3,.12,1.1,"#dce6ca",-12,1.47,7.3),y(-12,6.1,3.4,.18),y(-12,7.3,3.2,1),h("GALERIA SHOP",-12,2.84,6.22,3.05,"#345f50"),[-.85,0,.85].forEach((D,N)=>{d(.32,.35,.14,"#c7d7b5",-12+D,1.6,7.3,12);let H=Qc(zt[[0,2,3][N]]);H.scale.setScalar(.55),H.position.set(-12+D,.27,7.3),s.add(H)});let q=u(.35,.35,.35,"#c6f36b",-12,3.9,7);q.rotation.z=Math.PI/4;let X=(D,N)=>cd(D,N,Wt),K=(D,N,H)=>vo(D,N,H,c),Y=[];s.traverse(D=>{if(!(!D.isMesh||!D.visible)){for(let N=D.parent;N;N=N.parent)if(w.includes(N))return;Y.push(D)}}),s.updateMatrixWorld(!0);let ie=new xo(t,Y),z=K(Mn[Le.skin].color);z.group.name="student-avatar",z.group.position.set(0,X(0,7)+.005,7),z.group.rotation.y=Math.PI,s.add(z.group);let ce=K("#d3a66f","#b9835d","#4b3c31");ce.group.position.set(-1.8,X(-1.8,3)+.005,3),ce.group.rotation.y=.3,s.add(ce.group),h("LIA \xB7 MENTORA",-1.8,3.1,3,2.8,"#7a8257");let me=Es(z,Le.shop.equipped),Te=new tt(new Si(.17,.35,4),c("#f8ffb6"));Te.position.set(0,3,0),Te.rotation.z=Math.PI,z.group.add(Te);let ke=[];for(let D=0;D<22;D++){let N=u(.12,.12,.12,["#d2e996","#f4d58a","#9fc6bc"][D%3],0,-10,0);ke.push({mesh:N,v:new P,life:0})}let nt=ge("#station-labels");nt.innerHTML=Wt.map(D=>`<span class="station-label" id="label-${D.id}" style="--accent:${D.color}"><b>${St(D.id)}</b>${D.short}</span>`).join("");let je=1,Xe=1;function Q(){je=Math.max(1,i.clientWidth),Xe=Math.max(1,i.clientHeight),n.setSize(je,Xe),t.aspect=je/Xe,t.fov=t.aspect<.9?ui.mobileFov:ui.desktopFov,t.updateProjectionMatrix()}new ResizeObserver(Q).observe(i),Q();let fe=new Set,Re={x:0,y:0},Se=!1,Oe=0,vt=performance.now(),I=!0,Ye=matchMedia("(prefers-reduced-motion: reduce)").matches,Fe;function Ie(){Re={x:0,y:0},ge("#joystick-knob").style.transform=""}function xe(){fe.clear(),Ie(),Fe?.cancel()}addEventListener("keydown",D=>{if(ge("#panel").open||/INPUT|SELECT|TEXTAREA/.test(D.target.tagName))return;let N=D.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","e","m","r"].includes(N)&&D.preventDefault(),N==="e"&&!D.repeat?rl():N==="m"&&!D.repeat?nl():N==="r"&&!D.repeat?ie.recenter(z.group.rotation.y):fe.add(N)}),addEventListener("keyup",D=>fe.delete(D.key.toLowerCase())),addEventListener("blur",xe),document.addEventListener("visibilitychange",()=>{I=!document.hidden,xe(),vt=performance.now()}),ge("#panel").addEventListener("close",xe);let Ke=ge("#joystick"),be=null;function Be(D){let N=Ke.getBoundingClientRect(),H=D.clientX-N.left-N.width/2,j=D.clientY-N.top-N.height/2,V=Math.hypot(H,j),J=V>32?32/V:1;Re={x:H*J/32,y:j*J/32},ge("#joystick-knob").style.transform=`translate(${H*J}px,${j*J}px)`,en=null}Ke.addEventListener("pointerdown",D=>{be=D.pointerId,Ke.setPointerCapture(D.pointerId),Be(D)}),Ke.addEventListener("pointermove",D=>{D.pointerId===be&&Be(D)});for(let D of["pointerup","pointercancel","lostpointercapture"])Ke.addEventListener(D,()=>{be=null,Ie()});let mt=new Ii,ct=new we;Fe=od(n.domElement,ie,{blocked:()=>ge("#panel").open,onTap(D,N){let H=n.domElement.getBoundingClientRect();if(!H.width||!H.height)return;ct.set((D-H.left)/H.width*2-1,-(N-H.top)/H.height*2+1),mt.setFromCamera(ct,t);let j=mt.intersectObjects([...m,...M],!0).find(V=>V.object.visible);if(j?.object.userData.shop){xt.navigate(-12,9.2,"shop");return}if(j){let V=Wt.find((J,de)=>{let ue=j.object;for(;ue;){if(ue===m[de])return!0;ue=ue.parent}return!1});V&&md(V.id)}}}),ge("#camera-center").onclick=()=>ie.recenter(z.group.rotation.y);function A(D,N){return Math.abs(D)>17.2||Math.abs(N)>14.2?!0:_.some(H=>Math.abs(D-H.x)<H.w&&Math.abs(N-H.z)<H.d)}function x(D,N,H=null){let te=We=>({x:-16.8+We%57*.6,z:-13.8+Math.floor(We/57)*.6}),Me=(We,gt)=>Math.max(0,Math.min(56,Math.round((We- -16.8)/.6)))+57*Math.max(0,Math.min(46,Math.round((gt- -13.8)/.6))),U=We=>{let gt=te(We);return!A(gt.x,gt.z)},ae=We=>{if(U(We))return We;for(let gt=1;gt<7;gt++)for(let Et=-gt;Et<=gt;Et++)for(let Tt=-gt;Tt<=gt;Tt++){let wt=We%57+Tt,hn=Math.floor(We/57)+Et;if(wt>=0&&wt<57&&hn>=0&&hn<47&&U(wt+hn*57))return wt+hn*57}return We},le=ae(Me(z.group.position.x,z.group.position.z)),ve=ae(Me(D,N)),re=We=>{let gt=te(We),Et=te(ve);return Math.hypot(gt.x-Et.x,gt.z-Et.z)},ee=[le],_e=new Map([[le,0]]),Ne=new Map,Qe=new Set,$e=!1;for(;ee.length;){ee.sort((Tt,wt)=>_e.get(Tt)+re(Tt)-(_e.get(wt)+re(wt)));let We=ee.shift();if(We===ve){$e=!0;break}Qe.add(We);let gt=We%57,Et=Math.floor(We/57);for(let Tt=-1;Tt<=1;Tt++)for(let wt=-1;wt<=1;wt++){if(!wt&&!Tt)continue;let hn=gt+wt,Yn=Et+Tt;if(hn<0||hn>=57||Yn<0||Yn>=47)continue;let En=hn+Yn*57;if(Qe.has(En)||!U(En)||wt&&Tt&&(!U(gt+wt+Et*57)||!U(gt+(Et+Tt)*57)))continue;let hi=_e.get(We)+.6*(wt&&Tt?Math.SQRT2:1);hi<(_e.get(En)??1/0)&&(Ne.set(En,We),_e.set(En,hi),ee.includes(En)||ee.push(En))}}if(!$e){dn("Escolha a esta\xE7\xE3o pelo menu de miss\xF5es para assumir a bancada.");return}let qt=[];for(let We=ve;We!==le;We=Ne.get(We))qt.unshift(te(We));qt.push(A(D,N)?te(ve):{x:D,z:N}),en={x:D,z:N,id:H,route:qt}}function k(D,N,H){let j=z.group.position,V=H*gr.walkSpeed,J=j.x+D*V,de=j.z+N*V;if(A(J,j.z)||(j.x=J),A(j.x,de)||(j.z=de),Se=Math.abs(D)+Math.abs(N)>.06,Se){let te=Math.atan2(D,N)-z.group.rotation.y;te=Math.atan2(Math.sin(te),Math.cos(te)),z.group.rotation.y+=te*Math.min(1,H*14)}}function Z(){Wt.forEach((D,N)=>{let H=yr().filter(V=>V.level===D.id).length,j=yo&&lt[yo-1].level===D.id&&Le.records[yo]?.stage>=4;f[N].forEach((V,J)=>V.material=c(H>J*5||j?"#bada8b":"#9db3a4",{emissive:H||j?"#496931":"#294035",emissiveIntensity:.12}))})}function ne(D){requestAnimationFrame(ne);let N=Math.min((D-vt)/1e3,.045);if(vt=D,!I)return;if(Oe+=N,Se=!1,!ge("#panel").open){let V=(fe.has("d")||fe.has("arrowright")?1:0)-(fe.has("a")||fe.has("arrowleft")?1:0)+Re.x,J=(fe.has("s")||fe.has("arrowdown")?1:0)-(fe.has("w")||fe.has("arrowup")?1:0)+Re.y;if(Math.abs(V)+Math.abs(J)>.08){en=null;let de=Math.max(1,Math.hypot(V,J));V/=de,J/=de;let ue=ie.movement(V,J);k(ue.x,ue.z,N)}else if(en){let de=en.route[0]||en,ue=de.x-z.group.position.x,te=de.z-z.group.position.z,Me=Math.hypot(ue,te);if(Me<.04){if(en.route.length&&en.route.shift(),!en.route.length){let U=en;en=null,U.id==="shop"?Vi.show():U.id?Cs(U.id):il()}}else k(ue/Me,te/Me,Math.min(N,Me/gr.walkSpeed))}}z.limbs.forEach((V,J)=>V.rotation.x=Se&&!Ye?Math.sin(Oe*11+(J<2?0:Math.PI))*.45*(J%2?1:-1):0),z.group.position.y=X(z.group.position.x,z.group.position.z)+.005+(Se&&!Ye?Math.abs(Math.sin(Oe*11))*.025:0),Te.position.y=3+(Ye?0:Math.sin(Oe*2)*.08),w.forEach((V,J)=>{V.position.y=4.35+(Ye?0:Math.sin(Oe*1.8+J)*.12),Ye||(V.rotation.y=Oe*.6)});let H=z.group.position;It=null;let j=1/0;for(let V of Wt){let J=Math.hypot(H.x-V.x,H.z-(V.z+1.7));J<3.9&&J<j&&(It={type:"station",id:V.id},j=J)}Math.hypot(H.x+1.8,H.z-3)<2.1&&(It={type:"mentor"}),Math.hypot(H.x+12,H.z-9.2)<2.4&&(It={type:"shop"}),ge("#interact").hidden=!It,ge("#interact span").textContent=It?.type==="shop"?"Entrar na Galeria Shop":It?.type==="mentor"?"Conversar com Lia":It?`Explorar esta\xE7\xE3o ${St(It.id)}`:"Explorar bancada",ge("#mobile-interact").style.opacity=It?"1":".45",ge("#location-name").textContent=It?.type==="shop"?"Galeria Shop":It?.type==="station"?Wt[It.id-1].name:It?"Pra\xE7a \xB7 Mentora Lia":"Pra\xE7a central",ie.update(H,N,{reducedMotion:Ye});for(let V of Wt){let J=new P(V.x,4.95,V.z-1.1).project(t),de=ge("#label-"+V.id);de.style.left=`${(J.x*.5+.5)*je}px`,de.style.top=`${(-J.y*.5+.5)*Xe}px`,de.style.opacity=J.z>-1&&J.z<1&&Math.abs(J.x)<.95&&Math.abs(J.y)<.85?"1":"0"}_o(me,Oe,Ye),q.rotation.y=Ye?0:Oe*.6,ke.forEach(V=>{V.life<=0||(V.life-=N,V.mesh.visible=V.life>0,V.mesh.position.addScaledVector(V.v,N),V.v.y-=N*5,V.mesh.rotation.x+=N*3)}),(el!=="shop"||!ge("#panel").open)&&n.render(e,t)}requestAnimationFrame(ne),ge("#loading").hidden=!0,ge("#loading").style.display="none",Z();function $(D){let N=D==="dark";e.background.set(N?"#16293d":"#cae7f2"),e.fog.color.copy(e.background),r.intensity=N?1.4:2.3,a.intensity=N?1.3:3.2,a.color.set(N?"#b9d8ff":"#fff6db")}return $(vr.active),{refresh:Z,navigate:x,setTheme:$,setEquipment(){me=Es(z,Le.shop.equipped)},teleport(D){xe(),z.group.position.set(D.x,X(D.x,D.z+.95)+.005,D.z+.95),z.group.rotation.y=Math.PI,ie.recenter(Math.PI),ie.update(z.group.position,0,{snap:!0})},home(){xe(),en=null,z.group.position.set(0,X(0,7)+.005,7),z.group.rotation.y=Math.PI,ie.recenter(Math.PI),ie.update(z.group.position,0,{snap:!0})},setSkin(){z.shirtMeshes.forEach(D=>D.material=c(Mn[Le.skin].color))},quality(){n.setPixelRatio(Math.min(devicePixelRatio,Le.quality==="low"?1:1.7)),n.shadowMap.enabled=Le.quality!=="low",Q()},celebrate(){ke.forEach(D=>{D.life=2,D.mesh.visible=!0,D.mesh.position.copy(z.group.position).add(new P(0,2.8,0)),D.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)})}}}function md(i){let e=Wt.find(t=>t.id===Number(i));if(e){if(di(),!xt){Cs(e.id);return}xt.navigate(e.x,e.z+2.2,e.id),dn("A caminho da esta\xE7\xE3o "+St(e.id)+". Voc\xEA tamb\xE9m pode usar WASD ou o controle virtual.")}}function rl(){ge("#panel").open||(It?.type==="shop"?Vi.show():It?.type==="mentor"?il():It?Cs(It.id):dn("Aproxime-se de uma bancada ou escolha uma esta\xE7\xE3o no mapa."))}document.addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if("list"in t)Cs(Number(t.list));else if("case"in t)Mo(t.case);else if("choice"in t)nv(t.choice);else if("test"in t){let n=lt[ki-1];id(n,Ts(n),Number(t.test)),Xn="",bn(),ws()}else if("investigationNext"in t){let n=lt[ki-1];sd(n,Ts(n))?Xn="":Xn="Ainda falta uma evid\xEAncia que explique a falha. Execute outras verifica\xE7\xF5es ou pe\xE7a uma pista \xE0 Lia.",bn(),ws()}else if("hint"in t)Ts(lt[ki-1]).hints++,_r=!_r,bn(),ws();else if("next"in t){let n=lt.find(s=>s.id>Number(t.next)&&Le.records[s.id]?.stage!==6)||lt.find(s=>Le.records[s.id]?.stage!==6);n?Mo(n.id):xr()}else if("travel"in t)md(t.travel);else if("start"in t)Le.tutorial=!0,bn(),di(),dn("Bem-vindo! Toque em uma esta\xE7\xE3o ou mova seu avatar pelo campus.");else if("explore"in t)di();else if("export"in t)sv();else if("import"in t)ge("#import-file").click();else if("report"in t)rv();else if("journal"in t)xr();else if("skin"in t){let n=Number(t.skin);Mn[n]?.xp<=In(Le)&&(Le.skin=n,xt?.setSkin(),bn(),sl())}else"help"in t?tl():"mentor"in t&&(di(),xt?xt.navigate(-1.5,4.2):il())});ge("#world-nav").onclick=()=>{di(),ge("#world").scrollIntoView({behavior:"smooth",block:"center"})};ge("#missions-nav").onclick=()=>Cs(0);ge("#journal-nav").onclick=xr;ge("#avatar-nav").onclick=sl;ge("#map-button").onclick=nl;ge("#all-missions").onclick=()=>Cs(0);ge("#help").onclick=tl;ge("#settings").onclick=iv;ge("#camera-reset").onclick=()=>{xt?.home(),dn("Voc\xEA voltou \xE0 pra\xE7a central.")};ge("#interact").onclick=rl;ge("#mobile-interact").onclick=rl;ge("#quest-go").onclick=()=>{let i=lt.find(e=>Le.records[e.id]&&Le.records[e.id].stage<6)||lt.find(e=>Le.records[e.id]?.stage!==6);i?Mo(i.id):xr()};document.addEventListener("change",i=>{i.target.id==="theme-choice"&&vr.set(i.target.value),i.target.id==="quality"&&(Le.quality=i.target.value,xt?.quality(),bn())});var bo=document.createElement("nav");bo.className="mobile-toolbar";bo.setAttribute("aria-label","Navega\xE7\xE3o m\xF3vel");bo.innerHTML=`<button id="mobile-map">${Pn("map")}Campus</button><button data-list="0">${Pn("flag")}Miss\xF5es</button><button data-journal>${Pn("book")}Percurso</button><button id="mobile-avatar">${Pn("user")}Avatar</button><button data-open-shop>${Pn("shop")}Shop</button>`;document.body.append(bo);ge("#mobile-map")?.addEventListener("click",nl);ge("#mobile-avatar")?.addEventListener("click",sl);Vi=ad({getState:()=>Le,save:bn,onMission:()=>{let i=lt.find(e=>Le.records[e.id]?.stage!==6);i&&Mo(i.id)},onEquip:()=>{xt?.setSkin(),xt?.setEquipment()},openPanel:Sn,toast:dn,icon:Pn});ge("#shop-nav").onclick=()=>Vi.show();document.addEventListener("click",i=>{let e=i.target.closest("button");e&&(e.hasAttribute("data-open-shop")&&Vi.show(),e.hasAttribute("data-shop-travel")&&(di(),xt?xt.navigate(-12,9.2,"shop"):Vi.show()))});dd();fd();try{xt=av()}catch(i){console.error("Mundo 3D indispon\xEDvel:",i),ge("#loading").style.display="none",ge("#world").innerHTML='<div id="world-fallback"><strong>Seu navegador n\xE3o disponibilizou o ambiente 3D.</strong><p>Todas as 50 miss\xF5es continuam dispon\xEDveis para jogar pelos bot\xF5es abaixo.</p><button class="primary" data-list="0">Abrir miss\xF5es</button></div>',ge("#station-labels").hidden=!0}Le.tutorial||setTimeout(tl,650);
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
